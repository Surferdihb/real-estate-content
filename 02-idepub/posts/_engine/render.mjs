// Render the IDEPUB VEFA series to PNG.  node src/render.mjs [fr|en]
// Photos, mark and fonts are embedded as data URIs -> identical exports anywhere.

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
             join(homedir(), 'Documents', 'Claude Code', 'node_modules', 'playwright'),
             join(here, '..', 'node_modules', 'playwright')].filter(Boolean);
  for (const d of c) if (existsSync(d)) return import(pathToFileURL(join(d, 'index.js')).href);
  try { return await import('playwright'); } catch {}
  throw new Error('playwright not found. Set PLAYWRIGHT_DIR=...');
}
const pw = await loadPlaywright();
const chromium = pw.chromium ?? pw.default?.chromium;
const langs = process.argv[2] ? [process.argv[2]] : ['fr', 'en'];

const fontFaces = [500, 600, 700, 800].map(w => {
  const b64 = readFileSync(join(here, 'fonts', `archivo-${w}.woff2`)).toString('base64');
  return `@font-face{font-family:"Archivo";font-weight:${w};font-display:block;` +
         `src:url(data:font/woff2;base64,${b64}) format("woff2")}`;
}).join('\n  ');

const MARK = 'data:image/png;base64,' +
  readFileSync(join(here, 'assets', 'idepub-icon.png')).toString('base64');

const imgCache = new Map();
function dataURI(rel) {
  if (imgCache.has(rel)) return imgCache.get(rel);
  const mime = extname(rel).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg';
  const u = `data:${mime};base64,` + readFileSync(join(here, rel)).toString('base64');
  imgCache.set(rel, u); return u;
}

const ATTRIB = 'Foetz · Luxembourg · IDEPUB — Marketing & Communication';
const SERIES = DATA.SERIES ?? { fr: 'Luxembourg', en: 'Luxembourg' };
const esc = s => String(s).replace(/&(?![a-z#]+;)/gi, '&amp;');

const shot = (src, extra = '') => `<div class="shot"${extra}><img src="${dataURI(src)}" alt=""></div>`;
const phone = (src, chip) => `<div class="phone"><div class="notch"></div><div class="screen">
  <img src="${dataURI(src)}" alt="">
  ${chip ? `<div class="chip"><b>${esc(chip[0])}</b><span>${esc(chip[1])}</span></div>` : ''}
</div></div>`;
const itemsHTML = d => `<div class="items">${d.items.map(([h, p]) =>
  `<div class="item"><span class="dot"></span><div><h3>${esc(h)}</h3><p>${esc(p)}</p></div></div>`).join('')}</div>`;

function body(p, lang) {
  const d = p[lang];
  switch (p.layout) {
    case 'media':
      return `<div class="rule"></div>
        <div class="media-row">
          <div class="col">${itemsHTML(d)}</div>
          ${p.phone ? phone(p.media, d.chip) : shot(p.media)}
        </div>
        ${d.banner ? `<div class="banner">${esc(d.banner)}</div>` : ''}`;
    case 'flow': {
      const panels = p.panels.map(pan =>
        `<div class="panel">${shot(pan.img)}<div class="cap">${esc(pan.label[lang])}<span></span></div></div>`
      ).join('<div class="arrow"></div>');
      return `<div class="flow">${panels}</div>${itemsHTML(d)}`;
    }
    case 'split': {
      const side = (s, grad) => `<div class="side"><div class="side-wrap">${shot(s.img)}
        <div class="tag ${grad ? 'grad' : 'neutral'}">${esc(s.tag[lang])}</div></div>
        <div class="verdict"><i class="${s.ok ? 'yes' : 'no'}">${s.ok ? '✓' : '✕'}</i>${esc(s.verdict[lang])}</div></div>`;
      return `<div class="split">${side(p.split.left, false)}${side(p.split.right, true)}</div>${itemsHTML(d)}`;
    }
    case 'cards3': {
      const cs = p.cards.map((img, i) => {
        const [h, t] = d.cards[i];
        return `<div class="c">${shot(img)}<div class="txt"><h3>${esc(h)}</h3><div class="bar"></div><p>${esc(t)}</p></div></div>`;
      }).join('');
      return `<div class="cards3">${cs}</div>`;
    }
    case 'pricing': {
      const tiers = d.tiers.map(([pr, h, t]) =>
        `<div class="tier"><div class="price">${esc(pr)}</div><div><h3>${esc(h)}</h3><p>${esc(t)}</p></div></div>`).join('');
      const mini = d.items.map(([h, t]) => `<div><h4>${esc(h)}</h4><p>${esc(t)}</p></div>`).join('');
      return `<div class="tiers">${tiers}</div><div class="mini">${mini}</div>` +
             `<div class="price-hero">${shot(p.media)}</div>`;
    }
    case 'compare3': {
      const cols = p.cols.map((c, i) => {
        const cd = d.cols[i];
        const rows = d.metrics.map((m, j) =>
          `<div class="r">${esc(m)}<span class="dots">${[0,1,2].map(k =>
            `<i class="${k < c.scores[j] ? 'on' : ''}"></i>`).join('')}</span></div>`).join('');
        return `<div class="col${c.win ? ' win' : ''}"><div class="ttl">${esc(cd[0])}</div>
          ${shot(c.img)}<div class="rows">${rows}</div><div class="note">${esc(cd[1])}</div></div>`;
      }).join('');
      return `<div class="cmp3">${cols}</div>`;
    }
    case 'grid5': {
      const tiles = d.tiles.map(([h, t]) =>
        `<div class="t"><h3>${esc(h)}</h3><div class="bar"></div><p>${esc(t)}</p></div>`).join('');
      return `<div class="grid5">${tiles}</div>${itemsHTML(d)}` +
             (d.banner ? `<div class="banner">${esc(d.banner)}</div>` : '');
    }
    case 'quotes': {
      const qs = d.quotes.map(([txt, meta], i) =>
        `<div class="q ${i === 0 ? 'w1' : 'w2'}"><div class="mark">&ldquo;</div>
          <p>${esc(txt)}</p><div class="meta">${esc(meta)}</div></div>`).join('');
      return `<div class="quotes">${qs}</div>` +
             (d.banner ? `<div class="banner">${esc(d.banner)}</div>` : '');
    }
    case 'steps':
      return `<div class="steps">${d.steps.map(([n, h, t]) =>
        `<div class="step"><div class="num">${n}</div><div><h3>${esc(h)}</h3><p>${esc(t)}</p></div></div>`).join('')}</div>
        <div class="kicker">${esc(d.kicker[0])}<br><em>${esc(d.kicker[1])}</em></div>`;
  }
  return '';
}

function buildPost(p, lang) {
  const d = p[lang];
  return `
  <section class="post" data-n="${String(p.n).padStart(2, '0')}">
    <div class="inner">
      <header>
        <div class="lockup"><img class="mark" src="${MARK}" alt="">
          <div><div class="wordmark">IDEPUB</div><div class="tagline">Marketing &amp; Communication</div></div>
        </div>
        <div class="badge">POST <b>${p.n}</b> / 10<small>${SERIES[lang]}</small></div>
      </header>
      <div class="eyebrow">${esc(d.eyebrow)}</div>
      <h1>${d.head.join('<br>')}</h1>
      <div class="sub">${esc(d.sub)}</div>
      ${body(p, lang)}
      <div class="spacer"></div>
      <footer><div class="hair"></div><div class="attrib">${ATTRIB}</div></footer>
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
    const over = Math.round(el.querySelector('.inner').scrollHeight - (el.clientHeight - 70 - 60));
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
