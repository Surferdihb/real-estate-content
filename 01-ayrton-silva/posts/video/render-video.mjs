// Ayrton Silva — render posts to silent 9:16 MP4.
//   node video/render-video.mjs                 all videos, fr + en
//   node video/render-video.mjs w1-mon fr       one post, one language
//
// Frames are a pure function of t (setFrame in the template), so a re-render is
// byte-stable. ffmpeg stitches at 30fps. No audio track: these are built to be
// read with the sound off, which is how feed video is actually watched.

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { homedir } from 'node:os';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const DATA = await import(pathToFileURL(join(root, 'src', 'data.js')).href);

const FPS = 30;
const DUR = { figure: 11, read: 12, method: 14, note: 11, system: 11 };

// Which posts get a video. Curated, not all 40 — video is for the ones whose
// argument benefits from being revealed in sequence.
const PICKS = ['w1-mon', 'w1-wed', 'w2-mon', 'w3-mon', 'w3-wed', 'w4-mon', 'w7-mon', 'w8-mon'];

const argId = process.argv[2];
const argLang = process.argv[3];
const ids = argId ? [argId] : PICKS;
const langs = argLang ? [argLang] : ['fr', 'en'];

async function loadPlaywright() {
  const c = [process.env.PLAYWRIGHT_DIR,
             join(homedir(), 'Documents', 'Claude Code', 'node_modules', 'playwright')].filter(Boolean);
  for (const d of c) if (existsSync(d)) return import(pathToFileURL(join(d, 'index.js')).href);
  return import('playwright');
}
const pw = await loadPlaywright();
const chromium = pw.chromium ?? pw.default?.chromium;

const face = (fam, file, w) =>
  `@font-face{font-family:"${fam}";font-weight:${w};font-display:block;` +
  `src:url(data:font/woff2;base64,${readFileSync(join(root, 'src', 'fonts', file)).toString('base64')}) format("woff2")}`;
const fonts = [
  ...[400, 500, 600, 700].map(w => face('Newsreader', `newsreader-${w}.woff2`, w)),
  ...[500, 600, 700, 800].map(w => face('Archivo', `archivo-${w}.woff2`, w)),
].join('\n');

const esc = s => String(s).replace(/&(?![a-z#]+;)/gi, '&amp;');
const HANDLE = 'Ayrton Silva · Luxembourg';

function stage(p, lang) {
  const d = p[lang];
  const rows = l => `<div class="rows">${l.map(([k, v, hi]) =>
    `<div class="row"><span class="k">${esc(k)}</span><span class="v${hi ? ' hi' : ''}">${esc(v)}</span></div>`).join('')}</div>`;

  let mid = '';
  if (p.layout === 'figure') {
    const long = (String(d.figure).length + String(d.unit || '').length) > 9;
    mid = `<div class="figwrap">
        <div class="fig${long ? ' long' : ''}">
          <span class="n" data-value="${esc(d.figure)}">${esc(d.figure)}</span>
          <span class="u">${esc(d.unit || '')}</span>
        </div>
        <div class="fignote">${esc(d.note)}</div>
      </div>${d.rows ? rows(d.rows) : ''}`;
  } else if (p.layout === 'method') {
    mid = `<div class="steps">${d.steps.map(([n, h, tx]) =>
      `<div class="step"><div class="n">${n}</div><div><h3>${esc(h)}</h3><p>${esc(tx)}</p></div></div>`).join('')}</div>
      ${d.statement ? `<div class="statement">${esc(d.statement)}</div>` : ''}`;
  } else {
    mid = `${d.rows ? rows(d.rows) : ''}${d.statement ? `<div class="statement">${esc(d.statement)}</div>` : ''}`;
  }

  return `<div class="stage${p.track === 'trade' ? ' trade' : ''}">
    <header><div class="name">Ayrton <b>Silva</b></div>
      <div class="kicker">${d.kicker}</div><div class="rule"></div></header>
    <div class="rubric">${esc(d.rubric)}</div>
    <h1>${d.head.map(l => `<span class="ln">${l}</span>`).join('')}</h1>
    <div class="standfirst">${esc(d.standfirst)}</div>
    ${mid}
    <div class="spacer"></div>
    <footer><div class="source"><b>Source —</b> ${esc(d.source)}</div>
      <div class="handle">${HANDLE}</div></footer>
    <div class="prog"></div>
  </div>`;
}

const shell = readFileSync(join(here, 'template.html'), 'utf8').replace('/*{{FONTS}}*/', fonts);
const browser = await chromium.launch();

for (const lang of langs) {
  const outDir = join(here, 'out', lang);
  mkdirSync(outDir, { recursive: true });

  for (const id of ids) {
    const post = DATA.POSTS.find(p => p.id === id);
    if (!post) { console.log(`skip ${id} — not found`); continue; }

    const D = DUR[post.layout] ?? 12;
    const frames = Math.round(D * FPS);
    const tmp = join(here, '.frames');
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.setContent(shell.replace('<div id="app"></div>', `<div id="app">${stage(post, lang)}</div>`),
                          { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);

    // fail loudly rather than rendering 360 frames of a clipped card
    const over = await page.$eval('.stage', el =>
      Math.round(el.scrollHeight - el.clientHeight));
    if (over > 0) { await page.close(); throw new Error(`[${lang}] ${id} overflows by ${over}px`); }

    const el = await page.$('.stage');
    for (let f = 0; f < frames; f++) {
      await page.evaluate(([t, d]) => window.setFrame(t, d), [f / FPS, D]);
      await el.screenshot({ path: join(tmp, `f${String(f).padStart(4, '0')}.png`) });
    }
    await page.close();

    const mp4 = join(outDir, `${id}.mp4`);
    execFileSync('ffmpeg', ['-y', '-framerate', String(FPS), '-i', join(tmp, 'f%04d.png'),
      '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-movflags', '+faststart', mp4],
      { stdio: 'ignore' });
    rmSync(tmp, { recursive: true, force: true });
    console.log(`${lang}/${id}.mp4  ${D}s`);
  }
}
await browser.close();
