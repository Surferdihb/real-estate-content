// Ayrton Silva — render lead-magnet PDFs.  node src/render-pdf.mjs [doc] [fr|en]
// A4 via Playwright print-to-PDF. Fonts inlined; deterministic output.

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const fontsDir = join(root, '..', 'posts', 'src', 'fonts');

const docs = {};
for (const f of ['rapport-sud']) {
  docs[f] = (await import(pathToFileURL(join(here, `${f}.js`)).href)).DOC;
}

const argDoc = process.argv[2], argLang = process.argv[3];
const picks = argDoc ? [docs[argDoc]].filter(Boolean) : Object.values(docs);
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
  `src:url(data:font/woff2;base64,${readFileSync(join(fontsDir, file)).toString('base64')}) format("woff2")}`;
const fonts = [
  ...[400, 500, 600, 700].map(w => face('Newsreader', `newsreader-${w}.woff2`, w)),
  ...[500, 600, 700, 800].map(w => face('Archivo', `archivo-${w}.woff2`, w)),
].join('\n');

const esc = s => String(s).replace(/&(?![a-z#]+;)/gi, '&amp;');
const cell = v => Array.isArray(v) ? `<span class="hi">${esc(v[0])}</span>` : esc(v);

function tableHTML(t) {
  const head = t.head.map((h, i) => `<th${i > 0 ? ' class="num"' : ''}>${esc(h)}</th>`).join('');
  const rows = t.rows.map(r =>
    `<tr>${r.map((v, i) => `<td${i === 0 ? ' class="k"' : ' class="num"'}>${i === 0 ? esc(v) : `<b>${cell(v)}</b>`}</td>`).join('')}</tr>`).join('');
  return `<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
}

function pageHTML(pg, i, total, docLabel) {
  const parts = [];
  parts.push(`<div class="runhead"><div class="name">Ayrton <b>Silva</b></div><div class="doc">${esc(docLabel)}</div></div>`);
  parts.push(`<div class="rubric">${esc(pg.rubric)}</div>`);
  parts.push(`<h2>${esc(pg.h2)}</h2>`);
  if (pg.lede) parts.push(`<div class="lede">${esc(pg.lede)}</div>`);
  if (pg.bigfig) parts.push(`<div class="bigfig"><span class="n">${esc(pg.bigfig[0])}</span><span class="u">${esc(pg.bigfig[1] || '')}</span></div>`);
  if (pg.body) parts.push(`<p class="body">${esc(pg.body)}</p>`);
  if (pg.table) parts.push(tableHTML(pg.table));
  if (pg.checklist) {
    parts.push(pg.checklist.map(([h, t]) =>
      `<div style="margin-top:6mm"><div style="font-size:11pt;font-weight:700;color:var(--ink)">${esc(h)}</div>` +
      `<p class="body" style="margin-top:1.5mm">${esc(t)}</p></div>`).join(''));
  }
  if (pg.statement) parts.push(`<div class="statement">${esc(pg.statement)}</div>`);
  if (pg.note) parts.push(`<div class="note">${esc(pg.note)}</div>`);
  if (pg.contact) parts.push(`<div class="statement" style="margin-top:9mm">${esc(pg.contact)}</div>`);
  if (pg.disclaimer) parts.push(`<div class="note" style="margin-top:6mm">${esc(pg.disclaimer)}</div>`);
  parts.push(`<div class="runfoot"><div>Ayrton Silva · Luxembourg</div><div class="pg">${i + 1} / ${total}</div></div>`);
  return `<div class="page">${parts.join('')}</div>`;
}

function coverHTML(c) {
  const band = c.band.map(([v, k]) => `<div><div class="v">${esc(v)}</div><div class="k">${esc(k)}</div></div>`).join('');
  return `<div class="page cover">
    <div class="kicker">${esc(c.kicker)}</div>
    <h1>${c.title}</h1>
    <div class="sub">${esc(c.sub)}</div>
    <div class="band">${band}</div>
    <div class="author"><div class="who">${esc(c.who)}</div><div class="what">${esc(c.what)}</div><div class="date">${esc(c.date)}</div></div>
  </div>`;
}

const shell = readFileSync(join(here, 'pdf-template.html'), 'utf8').replace('/*{{FONTS}}*/', fonts);
const browser = await chromium.launch();

for (const doc of picks) {
  for (const lang of langs) {
    const d = doc[lang];
    if (!d) continue;
    const total = d.pages.length + 1;
    const body = coverHTML(d.cover) + d.pages.map((p, i) => pageHTML(p, i + 1, total, d.docLabel)).join('');
    const html = shell.replace('<!--{{BODY}}-->', body).replace('<html lang="fr">', `<html lang="${lang}">`);

    const outDir = join(root, 'out', lang);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, `_page-${doc.id}-${lang}.html`), html, 'utf8');

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);

    // any page whose content spills past its fixed A4 height is a build error
    const over = await page.$$eval('.page', els => els.flatMap((el, i) =>
      el.scrollHeight > el.clientHeight + 2 ? [`page ${i + 1}: +${Math.round(el.scrollHeight - el.clientHeight)}px`] : []));
    if (over.length) { await page.close(); throw new Error(`[${lang}] ${doc.id} overflow -> ${over.join(', ')}`); }

    await page.pdf({ path: join(outDir, `${doc.id}-${lang}.pdf`), format: 'A4', printBackground: true });
    await page.close();
    console.log(`${lang}/${doc.id}-${lang}.pdf  (${total} pages)`);
  }
}
await browser.close();
