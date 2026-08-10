# English coverage — what exists, what can't

Status of the request "produce English versions for every content we have."
Dated 2026-08-08.

Short version: **all text is done or doable. No image or video can be
translated — only regenerated.**

---

## Done

| Asset | EN deliverable | Path |
|---|---|---|
| Ayrton copy, weeks 1–4 | 8 posts, written natively in EN | `01-ayrton-silva/copy/weeks-01-04-EN.md` |
| Ayrton copy, weeks 1–4 | FR original | `01-ayrton-silva/copy/weeks-01-04-FR.md` |
| All 9 IDEPUB series | EN captions + posting warnings | `02-idepub/copy/captions-EN.md` |

The EN Ayrton copy is written from source, not translated. Same figures,
different reader: the FR version assumes Luxembourg context, the EN version
explains Bëllegen Akt, DSCR, VEFA and the missing-data problem for someone
buying from abroad.

---

## Resolved — everything is now bilingual

The 88 originals could not be translated (French rasterised into the pixels, no
source files). They have been **rebuilt** instead, from editable source:

**160 images, FR + EN, across nine series.** See `02-idepub/posts/README.md`.

Adding a language is now one command, because every series renders from a
`data.js` rather than being a flat export.

Still not translatable: the **7 videos** (burnt-in French titles and French
voiceover, mp4s only). An English subtitle track is the cheap fix.

---

## Done — the three written analyses

Each EN file carries a **one-page executive summary on top, full translation
below**, plus a translator's-notes block for the Luxembourg legal terms that
have no English equivalent (Bëllegen Akt, droits d'enregistrement, prix notarié,
CPE, VEFA, syndic, CASIPO, LIR).

| EN document | Source lines |
|---|---|
| `EN-PROPERTY-MARKET-Esch-sur-Alzette.md` | 489 |
| `EN-PROPERTY-ANALYSIS-Esch-sur-Alzette-id-9269886.md` | 563 |
| `EN-PROPERTY-ANALYSIS-12-rue-de-la-Gare-L-4550-Niederkorn.md` | 653 |

All tables, sourced figures, risk ratings and legal caveats preserved. Every
"NON VÉRIFIÉ" / "périmé" flag carried across as "UNVERIFIED" / "stale" — those
markers are the ones that protect you with a client, so none were dropped or
softened.

Read the summary alone and you have the verdict, the numbers and the checks.
Read on for the full working.

---

## Two content problems found while doing this

**1. `ai-video-statistics` carried invented metrics. RESOLVED 2026-08-08.**
Retired to `02-idepub/posts/_retired/` and replaced by
`02-idepub/posts/luxembourg-market-numbers/` — 10 posts in FR and EN, every
figure cited to Observatoire de l'Habitat, STATEC, BCL or pfi.public.lu.

Built as HTML + a data file rather than flat PNGs, so this series can be
re-rendered with updated figures or a new language in one command. That closes
the gap that made the original 88 posts untranslatable.

**2. Two different IDEPUB logos across the 88 posts.**
`architects-posts` uses `IDEPUB · VIDÉO • COM • DIGITAL` with CMYK bars. The
other eight series use the rainbow-gradient IDEPUB wordmark. Post them
interleaved and the feed looks like two companies. Either run architects as its
own block, or settle the brand and regenerate the odd one out.
