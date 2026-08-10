// « Connaître sa commune » — render 60s chaptered MP4.
//   node video/render-commune.mjs                    all communes, fr + en
//   node video/render-commune.mjs commune-esch fr    one

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readFileSync, rmSync } from 'node:fs';
import { homedir } from 'node:os';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const { COMMUNES } = await import(pathToFileURL(join(here, 'communes.js')).href);

const FPS = 30;
const TIMING = { title: 5.0, chapter: 8.3, source: 5.0 };

const argId = process.argv[2], argLang = process.argv[3];
const picks = argId ? COMMUNES.filter(c => c.id === argId) : COMMUNES;
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

const COPY = {
  fr: { series: 'Connaître sa commune', handle: 'Ayrton Silva · Luxembourg',
        titleFoot: 'Les faits, les équipements et le marché. Chaque chiffre porte sa source.',
        srcHead: 'Vérifiez-moi.', srcBody: 'Tous les chiffres de cette vidéo viennent de sources publiques nommées ci-dessous. Ce qui n’est pas publié au Luxembourg n’est pas estimé — c’est dit.' },
  en: { series: 'Know your commune', handle: 'Ayrton Silva · Luxembourg',
        titleFoot: 'The facts, the amenities and the market. Every figure carries its source.',
        srcHead: 'Check me.', srcBody: 'Every figure in this video comes from the public sources named below. What Luxembourg does not publish is not estimated — it is stated.' },
};

function build(c, lang) {
  const d = c[lang], t = COPY[lang];
  const rail = d.chapters.map(() => '<i><span></span></i>').join('');

  const title = `<div class="panel title">
      <div class="t-kicker">${esc(t.series)}</div>
      <div class="t-name">${esc(d.name)}</div>
      <div class="t-sub">${esc(d.sub)}</div>
      <div class="t-line"></div>
      <div class="t-foot">${esc(t.titleFoot)}</div>
    </div>`;

  const chapters = d.chapters.map(ch => `<div class="panel chapter">
      <div class="c-label">${esc(ch.label)}</div>
      <div class="c-head">${esc(ch.head)}</div>
      <div class="c-rows">${ch.rows.map(([k, v]) =>
        `<div class="c-row"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join('')}</div>
      ${ch.note ? `<div class="c-note">${esc(ch.note)}</div>` : ''}
    </div>`).join('');

  const source = `<div class="panel source">
      <div class="s-head">${esc(t.srcHead)}</div>
      <div class="s-body">${esc(t.srcBody)}</div>
      <div class="s-src">${esc(d.source)}</div>
    </div>`;

  return `<div class="stage">
    <div class="top"><div class="bar">
      <div class="brand">Ayrton <b>Silva</b></div>
      <div class="series">${esc(t.series)}</div>
    </div><div class="rail">${rail}</div></div>
    ${title}${chapters}${source}
    <div class="bottom"><div class="line"></div><div class="handle">${esc(t.handle)}</div></div>
    <div class="prog"></div>
  </div>`;
}

const shell = readFileSync(join(here, 'commune-template.html'), 'utf8').replace('/*{{FONTS}}*/', fonts);
const browser = await chromium.launch();

for (const lang of langs) {
  const outDir = join(here, 'out', lang);
  mkdirSync(outDir, { recursive: true });

  for (const c of picks) {
    const nChap = c[lang].chapters.length;
    const D = TIMING.title + nChap * TIMING.chapter + TIMING.source;
    const frames = Math.round(D * FPS);

    const tmp = join(here, '.frames-c');
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(tmp, { recursive: true });

    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.setContent(shell.replace('<div id="app"></div>', `<div id="app">${build(c, lang)}</div>`),
                          { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);

    // every panel must fit its box — fail before rendering 1800 frames
    const over = await page.$$eval('.panel', els => els.flatMap((el, i) =>
      el.scrollHeight > el.clientHeight ? [`panel ${i}: +${Math.round(el.scrollHeight - el.clientHeight)}px`] : []));
    if (over.length) { await page.close(); throw new Error(`[${lang}] ${c.id} — ${over.join(', ')}`); }

    const el = await page.$('.stage');
    for (let f = 0; f < frames; f++) {
      await page.evaluate(([tt, dd]) => window.setFrame(tt, dd), [f / FPS, D]);
      await el.screenshot({ path: join(tmp, `f${String(f).padStart(5, '0')}.png`) });
    }
    await page.close();

    const mp4 = join(outDir, `${c.id}.mp4`);
    execFileSync('ffmpeg', ['-y', '-framerate', String(FPS), '-i', join(tmp, 'f%05d.png'),
      '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '19', '-movflags', '+faststart', mp4],
      { stdio: 'ignore' });
    rmSync(tmp, { recursive: true, force: true });
    console.log(`${lang}/${c.id}.mp4  ${D.toFixed(1)}s  (${nChap} chapters)`);
  }
}
await browser.close();
