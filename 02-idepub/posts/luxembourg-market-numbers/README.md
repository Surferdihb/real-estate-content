# Les chiffres du marché luxembourgeois / Luxembourg market numbers

10 posts, FR + EN. Replaces the retired `ai-video-statistics` series.
Built 2026-08-08.

**Every figure traces to a named public source.** That is the point of the
series and the reason the old one was retired — it carried invented metrics,
against the IDEPUB brandkit's own rule (SKILL.md line 47).

## What's here

```
src/data.js         all copy + figures, FR and EN     ← edit here
src/template.html   IDEPUB brand system (CSS only)
src/render.mjs      renders PNGs via Playwright
out/fr/01..10.png   2160×2700 (4:5 @2x)
out/en/01..10.png
out/{lang}/_page-{lang}.html   the built page, openable in a browser
```

## Re-rendering

```bash
node src/render.mjs        # both languages
```

```bash
node src/render.mjs en     # one language
```

Playwright is resolved from the Claude Code project automatically. If it moves:
`PLAYWRIGHT_DIR=/path/to/node_modules/playwright node src/render.mjs`

**This is the fix for the original problem.** The old 88 posts were flat PNGs
with no source — changing a number meant regenerating from scratch. Here, edit
`data.js` and re-run. New figures, new language, corrected typo: one command.

## Branding

Built on the **real** IDEPUB identity, taken from the supplied brand files, not
from prose:

- Mark: `src/assets/idepub-icon.png` — the split-"P" disc, embedded as a data URI
- Gradient: violet `#7b3788` → `#7068a8` → blue `#618bc7`, sampled from that file
- Lockup: mark + wide-tracked IDEPUB + MARKETING & COMMUNICATION
- Canvas: light violet-white `#f6f3fa`, matching the idepub site skin
- Footer: `Foetz · Luxembourg · IDEPUB — Marketing & Communication`. **Standalone —
  no IDEMMO group attribution**, matching the supplied logo, which carries none.
- Type: Archivo, embedded so exports never depend on installed fonts

> An earlier build of this series used IDEMMO's pink→orange→green→cyan rainbow on
> a near-black canvas, because `idepub-brandkit/SKILL.md` described it that way.
> That was wrong — the rainbow is IDEMMO's house mark. Both copies of the
> brandkit have been corrected. **When prose and a binary brand asset disagree,
> the asset wins.**

## Format note

Rendered at **1080×1350 (4:5)**, not the 1080×1920 in the brandkit. The
brandkit's 9:16 is specified for Reels/Stories; these are feed posts, and 9:16
gets centre-cropped in feed. 4:5 is the largest format the feed shows uncropped.
If you want Stories versions, change `height` in `.post` and the render
viewport to 1920 and re-run.

## The 10 posts

| # | Figure | Subject | Source |
|---|---|---|---|
| 01 | 950 €/m² | Asking vs notarial price gap, Esch | Observatoire · immotop |
| 02 | +47,1 % | Correction is real, decade's gain intact | immotop |
| 03 | 17,6 : 1 | 792 for sale vs 45 to rent | immotop · law 21/09/2006 |
| 04 | 5,05 % | Yield doubles between zones | immotop, by zone |
| 05 | +30,8 % | Rents at all-time high | immotop |
| 06 | 3,01 % | Average mortgage rate | BCL, MIR statistics |
| 07 | −18,2 % | VEFA down, resale recovering | Observatoire/STATEC no. 25 |
| 08 | 43 600 € | Real acquisition cost | pfi.public.lu |
| 09 | 0 | Four metrics Luxembourg doesn't publish | Observatoire · STATEC |
| 10 | 48h | Offer + CTA | — |

Posts 01–09 are authority content. Post 10 is the only sell.

## Posting order

Run 01 → 10 in sequence, 3 per week. Post 09 ("four numbers that don't exist")
is the strongest standalone — it demonstrates method rather than claiming
results, and it is the one that makes an agent audience trust the other nine.

Interleave with Ayrton-voice posts. Two IDEPUB posts in a row reads as a
brochure.

## Caption pattern

The image carries the figure. The caption should carry the *implication* — do
not repeat the number in the first line.

**FR, post 01:**
> Sur un appartement affiché à 600 000 € à Esch, la marge de négociation
> existe avant même que vous ouvriez la bouche.
>
> Prix affiché moyen : 7 149 €/m². Prix notarié moyen : ~6 200 €/m².
> L'écart est structurel, pas circonstanciel.
>
> Source : Observatoire de l'Habitat (avril 2026), immotop.lu (juillet 2026).
>
> #immobilierluxembourg #eschsuralzette #investissementimmobilier

**EN, post 01:**
> On a €600,000 apartment in Esch, the negotiating margin exists before you
> open your mouth.
>
> Average asking price: €7,149/m². Average notarial price: ~€6,200/m².
> The gap is structural, not circumstantial.
>
> Source: Observatoire de l'Habitat (April 2026), immotop.lu (July 2026).
>
> #luxembourgrealestate #eschsuralzette #propertyinvestment

Always name the source in the caption. It is the differentiator.

## Refresh before posting

Figures verified **05/08/2026**. The market ones move quarterly:

- Asking prices and rents — immotop.lu, monthly
- Notarial prices — Observatoire, quarterly with a lag
- Mortgage rate — BCL, monthly
- Transaction volumes — Observatoire/STATEC, quarterly

If you post this series more than a quarter after August 2026, refresh `data.js`
and re-render. Stale figures with a source line attached are worse than no
figures — the citation invites the reader to check.
