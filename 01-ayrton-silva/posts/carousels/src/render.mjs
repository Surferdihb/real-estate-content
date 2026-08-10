// Ayrton Silva — render carousels to PNG.  node src/render.mjs [fr|en]
// One PNG per slide: out/<lang>/<carousel-id>-01.png …
// Fonts inlined from ../src/fonts; no external requests at render time.

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const fontDir = join(root, '..', 'src', 'fonts');
const { CAROUSELS } = await import(pathToFileURL(join(here, 'carousels.js')).href);

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
  `src:url(data:font/woff2;base64,${readFileSync(join(fontDir, file)).toString('base64')}) format("woff2")}`;
const fontFaces = [
  ...[400, 500, 600, 700].map(w => face('Newsreader', `newsreader-${w}.woff2`, w)),
  ...[500, 600, 700, 800].map(w => face('Archivo', `archivo-${w}.woff2`, w)),
].join('\n  ');

const HANDLE = 'Ayrton Silva · Luxembourg';
const SWIPE = { fr: 'Glissez →', en: 'Swipe →' };
const esc = s => String(s).replace(/&(?![a-z#]+;)/gi, '&amp;');

const rowsBlock = list => `<div class="rows">${list.map(([k, v, hi]) =>
  `<div class="row"><span class="k">${esc(k)}</span><span class="v${hi ? ' hi' : ''}">${esc(v)}</span></div>`).join('')}</div>`;

function slideBody(s) {
  switch (s.kind) {
    case 'cover':
      return '';
    case 'rows':
      return rowsBlock(s.rows);
    case 'figure': {
      const w = String(s.figure).length + String(s.unit || '').length;
      return `<div class="figure${w > 9 ? ' long' : ''}">
        <div><span class="n">${esc(s.figure)}</span><span class="u">${esc(s.unit || '')}</span></div>
        <div class="note">${esc(s.note)}</div>
      </div>`;
    }
    case 'steps':
      return `<div class="steps">${s.steps.map(([n, h, t]) =>
        `<div class="step"><div class="n">${esc(n)}</div><div><h3>${esc(h)}</h3><p>${esc(t)}</p></div></div>`).join('')}</div>`;
    case 'split':
      return `<div class="split">${s.split.map(([h, amt, p]) =>
        `<div><h3>${esc(h)}</h3><div class="amt">${esc(amt)}</div><p>${esc(p)}</p></div>`).join('')}</div>`;
    case 'board':
      return `<div class="board">
        <div class="bh"><div></div>${s.cols.map(c => `<div>${esc(c)}</div>`).join('')}</div>
        ${s.rows.map(([name, vals, hi]) => `<div class="br"><div>${esc(name)}</div>${
          vals.map((v, i) => `<div class="${hi.includes(i) ? 'hi' : ''}">${esc(v)}</div>`).join('')}</div>`).join('')}
      </div>`;
    case 'close':
      return `<div class="close"><div class="cta">${esc(s.cta)}</div></div>`;
  }
  throw new Error(`unknown slide kind: ${s.kind}`);
}

function buildSlide(c, d, s, i, lang) {
  const last = i === d.slides.length - 1;
  const pager = i === 0
    ? `<div class="swipe">${esc(SWIPE[lang])}</div>`
    : `<div class="pager">${String(i + 1).padStart(2, '0')} / ${String(d.slides.length).padStart(2, '0')}</div>`;

  return `
  <section class="slide${c.track === 'trade' ? ' trade' : ''}${
      s.kind === 'cover' ? ' cover' : s.kind === 'close' ? ' close' : ''
    }" data-n="${c.id}-${String(i + 1).padStart(2, '0')}">
    <header>
      <div class="name">Ayrton <b>Silva</b></div>
      <div class="kicker">${esc(d.kicker)}</div>
    </header>
    ${s.rubric ? `<div class="rubric">${esc(s.rubric)}</div>` : ''}
    ${s.kind === 'cover' ? `<h1>${s.head.join('<br>')}</h1>` : `<h2>${s.head.join('<br>')}</h2>`}
    ${s.standfirst ? `<div class="standfirst">${esc(s.standfirst)}</div>` : ''}
    <div class="body">${slideBody(s)}</div>
    ${s.statement ? `<div class="statement">${esc(s.statement)}</div>` : ''}
    <footer>
      <div class="source">${last || s.kind === 'cover' ? `<b>Source —</b> ${esc(d.source)}` : ''}</div>
      <div class="handle">${HANDLE}</div>
    </footer>
    ${pager}
  </section>`;
}

const shell = readFileSync(join(here, 'template.html'), 'utf8').replace('/*{{FONTS}}*/', fontFaces);
const browser = await chromium.launch();

for (const lang of langs) {
  const outDir = join(root, 'out', lang);
  mkdirSync(outDir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });

  const html = shell
    .replace('<!--{{BODY}}-->', CAROUSELS.flatMap(c =>
      c[lang].slides.map((s, i) => buildSlide(c, c[lang], s, i, lang))).join('\n'))
    .replace('<html lang="fr">', `<html lang="${lang}">`);

  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  writeFileSync(join(outDir, `_page-${lang}.html`), html, 'utf8');

  // a clipped slide fails the build rather than shipping
  const overflow = await page.$$eval('.slide', els => els.flatMap(el => {
    const kids = [...el.children].filter(c => !c.classList.contains('pager') && !c.classList.contains('swipe'));
    const bottom = Math.max(...kids.map(c => c.getBoundingClientRect().bottom));
    const over = Math.round(bottom - (el.getBoundingClientRect().top + el.clientHeight - 62));
    return over > 0 ? [`${el.dataset.n}:+${over}px`] : [];
  }));
  if (overflow.length) throw new Error(`[${lang}] overflow -> ${overflow.join(' ')}`);

  for (const el of await page.$$('.slide')) {
    const n = await el.getAttribute('data-n');
    await el.screenshot({ path: join(outDir, `${n}.png`) });
    process.stdout.write(`${lang}/${n} `);
  }
  const total = CAROUSELS.reduce((a, c) => a + c[lang].slides.length, 0);
  console.log(`\n[${lang}] ${CAROUSELS.length} carousels, ${total} slides -> out/${lang}/`);
  await page.close();
}
await browser.close();
