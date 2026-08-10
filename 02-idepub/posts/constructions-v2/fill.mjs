import { pathToFileURL } from 'node:url'; import { join } from 'node:path'; import { homedir } from 'node:os';
const pw = await import(pathToFileURL(join(homedir(),'Documents','Claude Code','node_modules','playwright','index.js')).href);
const b = await (pw.chromium ?? pw.default.chromium).launch();
for (const lang of ['fr','en']) {
  const p = await b.newPage({ viewport:{width:1080,height:1350} });
  await p.goto(pathToFileURL(join(process.cwd(),'out',lang,`_page-${lang}.html`)).href);
  const r = await p.$$eval('.post', els => els.map(el => {
    const inner = el.querySelector('.inner');
    const foot = el.querySelector('footer').getBoundingClientRect();
    const last = [...inner.children].filter(c=>!c.classList.contains('spacer')&&c.tagName!=='FOOTER').pop();
    const gap = Math.round(foot.top - last.getBoundingClientRect().bottom);
    return { n: el.dataset.n, gap };
  }));
  console.log(`[${lang}]`, r.map(x=>`${x.n}:${x.gap}`).join(' '));
  await p.close();
}
await b.close();
