// Render the IDEPUB "Luxembourg market numbers" series to PNG.
//   node src/render.mjs            -> renders fr + en
//   node src/render.mjs fr         -> one language
//
// Brand assets (the real IDEPUB mark, Archivo) are embedded as data URIs so
// every export is identical regardless of what is installed on the machine.

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const { POSTS } = await import(pathToFileURL(join(here, 'data.js')).href);

// playwright lives in the Claude Code project, not here.
async function loadPlaywright() {
  const candidates = [
    process.env.PLAYWRIGHT_DIR,
    join(homedir(), 'Documents', 'Claude Code', 'node_modules', 'playwright'),
    join(here, '..', 'node_modules', 'playwright'),
  ].filter(Boolean);
  for (const dir of candidates) {
    if (existsSync(dir)) return import(pathToFileURL(join(dir, 'index.js')).href);
  }
  try { return await import('playwright'); } catch {}
  throw new Error('playwright not found. Set PLAYWRIGHT_DIR=/path/to/node_modules/playwright');
}

const pw = await loadPlaywright();
const chromium = pw.chromium ?? pw.default?.chromium;
if (!chromium) throw new Error('playwright loaded but chromium is missing');

const langs = process.argv[2] ? [process.argv[2]] : ['fr', 'en'];

// ---- embedded assets ------------------------------------------------------

const fontFaces = [500, 600, 700, 800].map(w => {
  const b64 = readFileSync(join(here, 'fonts', `archivo-${w}.woff2`)).toString('base64');
  return `@font-face{font-family:"Archivo";font-style:normal;font-weight:${w};` +
         `font-display:block;src:url(data:font/woff2;base64,${b64}) format("woff2")}`;
}).join('\n  ');

// The real IDEPUB mark, straight from the supplied brand file.
const MARK = 'data:image/png;base64,' +
  readFileSync(join(here, 'assets', 'idepub-icon.png')).toString('base64');

// ---- markup ---------------------------------------------------------------

const BRAND = {
  fr: { attrib: 'Foetz · Luxembourg · IDEPUB — Marketing & Communication' },
  en: { attrib: 'Foetz · Luxembourg · IDEPUB — Marketing & Communication' },
};
const TAGLINE = 'Marketing &amp; Communication';

const esc = s => String(s).replace(/&(?![a-z#]+;)/gi, '&amp;');

function buildPost(p, lang) {
  const d = p[lang];
  const rows = d.rows
    .map(([k, v]) => `<div class="row"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`)
    .join('');

  return `
  <section class="post${d.isCta ? ' is-cta' : ''}" data-n="${String(p.n).padStart(2, '0')}">
    <div class="inner">
      <header>
        <div class="lockup">
          <img class="mark" src="${MARK}" alt="">
          <div class="lockup-type">
            <div class="wordmark">IDEPUB</div>
            <div class="tagline">${TAGLINE}</div>
          </div>
        </div>
        <div class="badge">POST <b>${p.n}</b> / 10</div>
      </header>
      <div class="eyebrow">${esc(d.eyebrow)}</div>
      <h1>${d.head.join('<br>')}</h1>
      <div class="figure-wrap">
        <span class="figure">${esc(d.figure)}</span>
        <span class="figure-unit">${esc(d.figureUnit || '')}</span>
      </div>
      <div class="figure-caption">${esc(d.figureCaption)}</div>
      <div class="card">${rows}</div>
      ${d.isCta ? `<div><span class="cta-pill">${esc(d.cta)}</span></div>` : ''}
      <div class="body">${esc(d.body)}</div>
      <div class="spacer"></div>
      <footer>
        <div class="hair"></div>
        <div class="source"><b>Source —</b> ${esc(d.source)}</div>
        <div class="attrib">${BRAND[lang].attrib}</div>
      </footer>
    </div>
  </section>`;
}

const shell = readFileSync(join(here, 'template.html'), 'utf8')
  .replace('/*{{FONTS}}*/', fontFaces);

// ---- render ---------------------------------------------------------------

const browser = await chromium.launch();

for (const lang of langs) {
  const outDir = join(root, 'out', lang);
  mkdirSync(outDir, { recursive: true });

  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2,               // 2160x2700 exports
  });

  const html = shell
    .replace('<!--{{BODY}}-->', POSTS.map(p => buildPost(p, lang)).join('\n'))
    .replace('<html lang="fr">', `<html lang="${lang}">`);

  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);   // no FOUT in the capture
  writeFileSync(join(outDir, `_page-${lang}.html`), html, 'utf8');

  const posts = await page.$$('.post');
  if (posts.length !== 10) throw new Error(`[${lang}] expected 10 posts, found ${posts.length}`);

  // fail loudly rather than silently exporting a clipped card
  const overflow = await page.$$eval('.post', els => els.flatMap(el => {
    const avail = el.clientHeight - 74 - 66;
    const over = Math.round(el.querySelector('.inner').scrollHeight - avail);
    return over > 0 ? [`${el.dataset.n}:+${over}px`] : [];
  }));
  if (overflow.length) throw new Error(`[${lang}] overflow -> ${overflow.join(' ')}`);

  for (const el of posts) {
    const n = await el.getAttribute('data-n');
    await el.screenshot({ path: join(outDir, `${n}.png`) });
    process.stdout.write(`${lang}/${n}.png `);
  }
  console.log(`\n[${lang}] 10 posts -> out/${lang}/`);
  await page.close();
}

await browser.close();
