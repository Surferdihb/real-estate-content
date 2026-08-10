// Ayrton Silva — render posts to PNG.  node src/render.mjs [fr|en]
// Editorial mono identity. Fonts inlined; no external requests at render time.

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, extname } from 'node:path';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const DATA = await import(pathToFileURL(join(here, 'data.js')).href);
const POSTS = DATA.POSTS;

async function loadPlaywright() {
  const c = [process.env.PLAYWRIGHT_DIR,
             join(homedir(), 'Documents', 'Claude Code', 'node_modules', 'playwright')].filter(Boolean);
  for (const d of c) if (existsSync(d)) return import(pathToFileURL(join(d, 'index.js')).href);
  try { return await import('playwright'); } catch {}
  throw new Error('playwright not found. Set PLAYWRIGHT_DIR=...');
}
const pw = await loadPlaywright();
const chromium = pw.chromium ?? pw.default?.chromium;
const langs = process.argv[2] ? [process.argv[2]] : ['fr', 'en'];

const face = (family, file, weight) =>
  `@font-face{font-family:"${family}";font-weight:${weight};font-display:block;` +
  `src:url(data:font/woff2;base64,${readFileSync(join(here, 'fonts', file)).toString('base64')}) format("woff2")}`;

const fontFaces = [
  ...[400, 500, 600, 700].map(w => face('Newsreader', `newsreader-${w}.woff2`, w)),
  ...[500, 600, 700, 800].map(w => face('Archivo', `archivo-${w}.woff2`, w)),
].join('\n  ');

const imgCache = new Map();
function dataURI(rel) {
  if (imgCache.has(rel)) return imgCache.get(rel);
  const mime = extname(rel).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg';
  const u = `data:${mime};base64,` + readFileSync(join(here, rel)).toString('base64');
  imgCache.set(rel, u); return u;
}

const HANDLE = 'Ayrton Silva · Luxembourg';
const esc = s => String(s).replace(/&(?![a-z#]+;)/gi, '&amp;');

function body(p, lang) {
  const d = p[lang];
  const rows = list => `<div class="rows">${list.map(([k, v, hi]) =>
    `<div class="row"><span class="k">${esc(k)}</span><span class="v${hi ? ' hi' : ''}">${esc(v)}</span></div>`).join('')}</div>`;

  switch (p.layout) {
    case 'figure':
      {
      const w = String(d.figure).length + String(d.unit || '').length;
      const cls = w > 16 ? ' xlong' : w > 9 ? ' long' : '';
      return `<div class="figure-block">
          <div class="fig${cls}"><span class="n">${esc(d.figure)}</span><span class="u">${esc(d.unit || '')}</span></div>
          <div class="fig-note">${esc(d.note)}</div>
        </div>
        ${d.rows ? rows(d.rows) : ''}`;
      }
    case 'method':
      return `<div class="method">${d.steps.map(([n, h, t]) =>
          `<div class="step"><div class="n">${n}</div><div><h3>${esc(h)}</h3><p>${esc(t)}</p></div></div>`).join('')}</div>
        ${d.statement ? `<div class="statement">${esc(d.statement)}</div>` : ''}`;
    case 'read':
      return `${rows(d.rows)}${d.statement ? `<div class="statement">${esc(d.statement)}</div>` : ''}`;
    case 'system':
      return `<div class="screen">${p.media ? `<img src="${dataURI(p.media)}" alt="">` : ''}</div>
        ${d.screenCap ? `<div class="screen-cap">${esc(d.screenCap)}</div>` : ''}
        ${d.rows ? rows(d.rows) : ''}`;
    case 'note':
      return `${d.statement ? `<div class="statement">${esc(d.statement)}</div>` : ''}
        ${d.rows ? rows(d.rows) : ''}`;
  }
  return '';
}

function buildPost(p, lang) {
  const d = p[lang];
  return `
  <section class="post${p.track === 'trade' ? ' trade' : ''}" data-n="${p.id}">
    <div class="inner" style="display:contents">
      <header>
        <div class="name">Ayrton <b>Silva</b></div>
        <div class="kicker">${d.kicker.replace('·', '<span>·</span>')}</div>
      </header>
      <div class="rubric">${esc(d.rubric)}</div>
      <h1>${d.head.join('<br>')}</h1>
      <div class="standfirst">${esc(d.standfirst)}</div>
      ${body(p, lang)}
      <div class="spacer"></div>
      <footer>
        <div class="source">${d.source ? `<b>Source —</b> ${esc(d.source)}` : ''}</div>
        <div class="handle">${HANDLE}</div>
      </footer>
    </div>
  </section>`;
}

const shell = readFileSync(join(here, 'template.html'), 'utf8').replace('/*{{FONTS}}*/', fontFaces);
const browser = await chromium.launch();

for (const lang of langs) {
  const outDir = join(root, 'out', lang);
  mkdirSync(outDir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });

  const html = shell
    .replace('<!--{{BODY}}-->', POSTS.map(p => buildPost(p, lang)).join('\n'))
    .replace('<html lang="fr">', `<html lang="${lang}">`);

  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  writeFileSync(join(outDir, `_page-${lang}.html`), html, 'utf8');

  const overflow = await page.$$eval('.post', els => els.flatMap(el => {
    const kids = [...el.children];
    const bottom = Math.max(...kids.map(c => c.getBoundingClientRect().bottom));
    const over = Math.round(bottom - (el.getBoundingClientRect().top + el.clientHeight - 58));
    return over > 0 ? [`${el.dataset.n}:+${over}px`] : [];
  }));
  if (overflow.length) throw new Error(`[${lang}] overflow -> ${overflow.join(' ')}`);

  for (const el of await page.$$('.post')) {
    const n = await el.getAttribute('data-n');
    await el.screenshot({ path: join(outDir, `${n}.png`) });
    process.stdout.write(`${lang}/${n} `);
  }
  console.log(`\n[${lang}] ${POSTS.length} posts -> out/${lang}/`);
  await page.close();
}
await browser.close();
