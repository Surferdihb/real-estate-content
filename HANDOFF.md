# Handoff — pick up here

Updated 10/08/2026. Read `SESSION-LOG.md` first for *why* things are the way
they are.

---

## State

| | |
|---|---|
| Repo | [github.com/Surferdihb/real-estate-content](https://github.com/Surferdihb/real-estate-content) — public, `main` |
| Google Drive | `G:\My Drive\Real Estate Content` — synced via Drive for Desktop |
| Ayrton static posts | 80 (8 weeks × 5, FR + EN) |
| Ayrton post videos | 16 (9:16, silent) |
| Commune videos | **6 FR, 6 EN** — complete |
| Ayrton infographics | 3 (board · waterfall · ladder), FR + EN |
| Ayrton carousels | **3 sets, 16 slides per language** |
| Lead magnet | « Le rapport du Sud » PDF, FR + EN |
| Newsletter | issue 1, FR + EN |
| IDEPUB catalogue | 160 across 9 rebuilt series |
| Real LUMINA captures | 3 (Dudelange map, knowledge graph, Public Intelligence) |

Everything renders from a `data.js`. Nothing is hand-placed.

---

## Open tasks

1. **Explainers and voiced shorts** — blocked on the operator, see below. The
   silent timelines already exist and take narration without being rebuilt.
2. **Newsletter issue 2** — the plan is written into the end of issue 1: schools
   and rail commune by commune, plus what the summer 2026 closure of the
   Bettembourg–Luxembourg axis showed about line 60's dependencies.
3. **More carousels** — the engine takes a new set in one data block. Format
   that works: cover states the claim, two or three slides prove it, one says
   what is *not* known, one closes.
4. **Refresh the figures** if anything ships past November 2026.

---

## Rules that must not be broken

- **No invented numbers.** Every figure carries a named public source. What
  Luxembourg does not publish (MLS, transaction register, days on market,
  absorption) is stated unavailable, never estimated.
- **Never capture `/prospecting`'s left panel**, `/crm` or `/kanban` — real
  prospects by name at their home addresses. Crop from ~20 % width.
- **No IDEMMO rainbow on IDEPUB.** IDEPUB is violet→blue on light violet.
  Ayrton is editorial mono: warm off-white, editorial red (public) / slate
  (trade).
- **No teardowns of named listings** on Ayrton's account.
- Refresh figures if posting past November 2026 — a stale sourced number is
  worse than none, because the citation invites checking.

---

## Renderers

All four take the same shape: edit the data, re-run, a clipped panel throws
rather than shipping.

```bash
cd 01-ayrton-silva
node posts/src/render.mjs                       # 80 static posts
node posts/carousels/src/render.mjs             # 16 slides per language
node posts/infographics/src/render.mjs          # 3 graphics
node posts/video/render-commune.mjs             # all communes, fr + en
node magnets/src/render-pdf.mjs                 # the lead magnet
```

Commune videos are ~6 min each (1794 frames) — run them in the background, and
one at a time: the renderer uses a single `.frames-c` scratch directory, so two
concurrent runs would fight over it.

---

## Housekeeping

- `_drive-upload/` is a duplicate used to stage the Drive copy. Safe to delete;
  originals live in each `out/`. It is gitignored.
- IDEMMO's Videos folder holds 4 cuts of the same market film (~25 MB each).
  Only `idemmo-luxembourg-market-2025-vs-2026-final-logo-corrected.mp4` is the
  one to post.

---

## Still blocked on the operator

- **Voiceover.** Video timelines are built to take narration without change.
  This is what gates the explainers.
- **Face content.** None exists anywhere in the library.
- **Real renovation and construction-site photography** — `remodeling` is a
  before/after series with no genuine "before", and `constructions` uses the
  Bonnevoie renders as demos.
- **A demo dataset for `/prospecting`** with fictional names would make the
  best trade-track footage filmable.
