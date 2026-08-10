# IDEPUB posts — rebuild complete

Every IDEPUB series has been rebuilt on the real brand identity, as editable
source rather than flat PNGs. **160 finished images**, FR + EN.

| Series | Posts | Source folder replaced |
|---|---|---|
| `luxembourg-market-numbers/` | 10 | *(replaces the retired `ai-video-statistics`)* |
| `vefa-posts-v2/` | 10 | `vefa-posts` |
| `constructions-v2/` | 10 | `constructions-posts` |
| `la-video-immobiliere-v2/` | 10 | `la-video-immoiliere-cest-quoi-exactement` |
| `architects-v2/` | 10 | `architects-posts` |
| `remodeling-v2/` | 9 | `remodeling-posts` |
| `ai-marketing-pionniers-v2/` | 10 | `ai-marketing-pionners` |
| `video-reaction-v2/` | 10 | `video-reaction-posts` |
| `property-media-machine-v2/` | 1 | `1-property-media-machine` (9 variants → 1 post) |

Originals are untouched in `READY-post-series/`. `_retired/` holds the
invented-metrics series — do not post it.

## Working with a series

```bash
node src/render.mjs
```

Renders FR + EN to `out/`. One language: `node src/render.mjs en`.
Edit copy and figures in `src/data.js` — never in the template.

Start a new series:

```bash
./new-series.sh my-series
```

Fonts, the logo mark and every photo are inlined as data URIs, so exports are
identical on any machine. The renderer **throws on overflow** rather than
shipping a clipped card.

## Layouts

Set `layout:` per post in `data.js`.

| Layout | Shape | Key fields |
|---|---|---|
| `media` | Headline + feature list, image right | `media`, `phone: true`, `chip`, `banner` |
| `flow` | 3 panels with chevrons, then features | `panels[{img,label}]`, `items` |
| `split` | Two panels compared, verdict under each | `split.left/right`, `items` |
| `steps` | Numbered rows + kicker | `steps[[n,title,text]]`, `kicker` |
| `cards3` | 3 vertical photo cards | `cards[img]`, `cards[[title,text]]` |
| `pricing` | Price tiers + 3 mini features + hero band | `tiers`, `items`, `media` |
| `compare3` | 3 columns with scored rating dots | `cols[{img,scores,win}]`, `metrics`, `cols` |
| `grid5` | Service tile row | `tiles[[title,text]]`, `items`, `banner` |
| `quotes` | Client quote cards | `quotes[[text,meta]]`, `banner` |

`phone: true` on a `media` post renders the CSS device mockup (bezel, notch,
side buttons, optional `chip` caption over the screen).

## Brand rules

- Canvas light violet `#f6f3fa`. **Not dark navy** — that is IDEMMO's.
- Gradient violet → blue `#7b3788 → #7068a8 → #618bc7`, from the logo.
- **No rainbow.** `#e52d78 / #ff8a18 / #80c84b / #12b8d7` is the IDEMMO house
  mark. The old posts, `idepub-site/app/idepub/page.tsx` and the original
  brandkit all inherited that error.
- Mark is the supplied `idepub-icon.png`. Never redraw it.
- Footer: `Foetz · Luxembourg · IDEPUB — Marketing & Communication`. Standalone.
- 1080×1350 (4:5), exported at 2× → 2160×2700.

## Photography

`*/src/photos/bonnevoie-vefa/` — the Bonnevoie VEFA programme from idemmo.lu at
1600×900: three exterior renders, a street view, the real floor plan, plus one
interior frame from the Dahlem walkthrough. Client work shown as portfolio
proof; the idemmo watermark is correct in that context.

**More photography:** idemmo.lu serves WordPress derivatives — strip the
`-1024x768` suffix from an image URL for the original. The local
`shared/listing-photos/uploads/` folder is **thumbnails only** (300×169), with
one usable image per property. Do not use it.

For interior stills, extract from the walkthrough videos and crop the upper band
(`0.13h → 0.87h`), which removes the watermark and the burnt-in caption cards.

## What was changed from the originals, and why

Every departure is logged at the top of the relevant `data.js`.

**Invented metrics removed.** The originals were full of unsourced numbers:

| Series | Claim dropped |
|---|---|
| `ai-video-statistics` | 12,400 views / 268 messages / 47 viewings → series retired |
| `constructions` | "le cerveau retient 95 % en vidéo, 10 % en lecture" (no primary source) |
| `la-video-immobiliere` | "120+ biens vendus", "98 % satisfaction", "10+ années" |
| `ai-marketing-pionniers` | "+403 % de demandes", "+80 % de conversion", "1/3/5-6 sur 6", engagement counts |
| `video-reaction` | invented listing prices and surfaces |
| `property-media-machine` | invented engagement counts |

This follows the brandkit's own rule: *"no invented metrics; numbers must trace
to a source or be clearly labeled as example"*.

**Dubai imagery replaced.** `ai-marketing-pionniers` used Burj Khalifa skylines,
"WATERFRONT DUBAI" and AED pricing throughout, including one caption reading
"WATERFRONT RESIDENCE LUXEMBOURG" over a Dubai skyline. All replaced with the
real Luxembourg programme.

**Sequence corrections.** Filename order is unreliable and was verified against
the `POST n / 10` badge in every series:

- `architects` — filenames scrambled: `01→1 02→2 09→3 10→4 05→5 06→6 07→7 04→8 08→9 03→10`
- `remodeling` — **post 5 does not exist**; badges run 1,2,3,4,6,7,8,9,10
- `property-media-machine` — not a series, nine variants of one post
- `ai-marketing-pionniers` — no badges at all, file order used
- `video-reaction` — file 01 badged "1 / 5", every other "/ 10"; treated as a typo

**The second logo dropped.** `architects` used `IDEPUB · VIDÉO • COM • DIGITAL`
with CMYK bars. Not the supplied identity.

## Known limitation

`remodeling` is a before/after series, and **there is no "before" photography**.
Every available asset is a finished render, so both halves of the comparison are
really "after". Post 02 argues *"montrez l'existant, sans filtre"* while showing
a floor plan. One real renovation shoot — the ugly starting state, same angles —
fixes posts 02, 03 and 04. Until then, hold post 02 or caption it as an
illustration.

`constructions` has the same issue in milder form: no site photography exists,
so the Bonnevoie renders stand in as demos. Posts 02, 05 and 08 are the ones
that most need real site work.
