// Ayrton Silva — render infographics.  node src/render.mjs [id] [fr|en]

import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const fontsDir = join(root, '..', 'src', 'fonts');
const { GRAPHICS } = await import(pathToFileURL(join(here, 'data.js')).href);

const argId = process.argv[2], argLang = process.argv[3];
const picks = argId ? GRAPHICS.filter(g => g.id === argId) : GRAPHICS;
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

function body(g, lang) {
  const d = g[lang];
  if (g.layout === 'board') {
    const head = `<div class="bh"><div></div>${d.cols.map(c => `<div>${esc(c)}</div>`).join('')}</div>`;
    const rows = d.rows.map(([name, vals, hi]) =>
      `<div class="br"><div>${esc(name)}</div>${vals.map((v, i) =>
        `<div${hi.includes(i) ? ' class="hi"' : ''}>${esc(v)}</div>`).join('')}</div>`).join('');
    return `<div class="board">${head}${rows}</div>`;
  }
  if (g.layout === 'waterfall') {
    const maxTotal = d.steps.reduce((a, s) => a + s[2], 0);
    let run = 0;
    const steps = d.steps.map(([lbl, val, amt], i) => {
      const left = (run / maxTotal) * 100; run += amt;
      const w = Math.max(0.8, (amt / maxTotal) * 100);
      return `<div class="step${i > 0 ? ' add' : ''}">
        <div class="lbl">${esc(lbl)}</div>
        <div class="barwrap"><div class="bar" style="left:${left}%;width:${w}%"></div></div>
        <div class="val">${esc(val)}</div></div>`;
    }).join('');
    const split = d.split.map(([h, amt, p]) =>
      `<div><h3>${esc(h)}</h3><div class="amt">${esc(amt)}</div><p>${esc(p)}</p></div>`).join('');
    return `<div class="wf">${steps}
      <div class="total"><span class="k">${esc(d.total[0])}</span><span class="v">${esc(d.total[1])}</span></div></div>
      <div class="split">${split}</div>`;
  }
  if (g.layout === 'ladder') {
    const rungs = d.rungs.map(([name, val, yld, hi]) =>
      `<div class="rung${hi ? ' hi' : ''}">
        <div class="lbl">${esc(name)}</div>
        <div class="barwrap"><div class="bar" style="width:${(val / d.max) * 100}%"></div></div>
        <div class="pm2">${val.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB').replace(/ | /g, ' ')}</div>
        <div class="yld">${esc(yld)}</div></div>`).join('');
    return `<div class="ladder">${rungs}
      <div class="ladder-legend"><span>${esc(d.legend[0])}</span><span>${esc(d.legend[1])}</span></div></div>`;
  }
  return '';
}

function build(g, lang) {
  const d = g[lang];
  return `<div class="g" data-id="${g.id}">
    <header><div class="name">Ayrton <b>Silva</b></div><div class="kicker">${esc(d.kicker)}</div></header>
    <div class="rubric">${esc(d.rubric)}</div>
    <h1>${d.head.join('<br>')}</h1>
    <div class="standfirst">${esc(d.standfirst)}</div>
    ${body(g, lang)}
    <div class="takeaway">${esc(d.takeaway)}</div>
    <footer><div class="source"><b>Source —</b> ${esc(d.source)}</div>
      <div class="handle">Ayrton Silva · Luxembourg</div></footer>
  </div>`;
}

const shell = readFileSync(join(here, 'template.html'), 'utf8').replace('/*{{FONTS}}*/', fonts);
const browser = await chromium.launch();

for (const lang of langs) {
  const outDir = join(root, 'out', lang);
  mkdirSync(outDir, { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 });

  const html = shell
    .replace('<!--{{BODY}}-->', picks.map(g => build(g, lang)).join('\n'))
    .replace('<html lang="fr">', `<html lang="${lang}">`);
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  writeFileSync(join(outDir, `_page-${lang}.html`), html, 'utf8');

  const over = await page.$$eval('.g', els => els.flatMap(el => {
    const kids = [...el.children];
    const bottom = Math.max(...kids.map(c => c.getBoundingClientRect().bottom));
    const lim = el.getBoundingClientRect().top + el.clientHeight - 70;
    return bottom > lim + 1 ? [`${el.dataset.id}:+${Math.round(bottom - lim)}px`] : [];
  }));
  if (over.length) throw new Error(`[${lang}] overflow -> ${over.join(' ')}`);

  for (const el of await page.$$('.g')) {
    const id = await el.getAttribute('data-id');
    await el.screenshot({ path: join(outDir, `${id}.png`) });
    process.stdout.write(`${lang}/${id} `);
  }
  console.log(`\n[${lang}] ${picks.length} graphics -> out/${lang}/`);
  await page.close();
}
await browser.close();
