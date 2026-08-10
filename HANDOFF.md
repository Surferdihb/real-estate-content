# Handoff — pick up here

Written 10/08/2026 when the previous session hit its context limit.
Read `SESSION-LOG.md` first for *why* things are the way they are.

---

## State

| | |
|---|---|
| Repo | [github.com/Surferdihb/real-estate-content](https://github.com/Surferdihb/real-estate-content) — public, `main`, clean |
| Google Drive | `G:\My Drive\Real Estate Content` — 411 files, 632 MB, synced via Drive for Desktop |
| Ayrton static posts | 80 (8 weeks × 5, FR + EN) |
| Ayrton post videos | 16 (9:16, silent) |
| Commune videos | **6 FR, 2 EN** — see gap below |
| IDEPUB catalogue | 160 across 9 rebuilt series |
| Real LUMINA captures | 3 (Dudelange map, knowledge graph, Public Intelligence) |

Everything renders from a `data.js`. Nothing is hand-placed.

---

## Immediate gap — 4 EN commune videos

FR has six communes. EN has only Esch and Differdange.

```bash
cd 01-ayrton-silva/posts/video
node render-commune.mjs commune-dudelange en
node render-commune.mjs commune-bettembourg en
node render-commune.mjs commune-sanem en
node render-commune.mjs commune-petange en
```

~6 min each, 1794 frames. Run in background. Data is already in
`communes-sud.js`; the EN blocks exist.

---

## Unfinished research — schools and transport

The four Sud communes have **market data but incomplete school/transport
chapters**. Transport is largely gathered, schools are not.

Confirmed so far:

| Commune | Rail |
|---|---|
| Bettembourg | **2nd busiest station in Luxembourg**, ~3.5 M passengers (2022), 3 platforms; line 60 splits into three branches here |
| Pétange | **5th busiest**, 1.7 M passengers (2022); junction of lines 60 and 70; cross-border to Athus (BE) and Longwy (FR); Train 1900 heritage line to Fond-de-Gras |
| Dudelange | **4 stations** on branch 60A toward Volmerange-les-Mines (FR): Dudelange-Centre, -Ville, -Usines, + one more |
| Sanem | Belvaux-Soleuvre on line 60 (Belval corridor) |

**Still needed:** secondary schools (lycées) per commune, any international
school presence, and one health reference each. Sources: `men.public.lu`,
the commune websites, `mobiliteit.lu`.

Do not ship a commune video without them — the format's credibility rests on
the chapters being complete.

---

## Open tasks

1. **4 EN commune videos** — above, mechanical.
2. **« Le rapport du Sud » PDF lead magnet** — the four-commune comparison is
   already written in `property-analyses/PROPERTY-MARKET-Sud-4-communes.md`.
3. **Infographics engine + 3 graphics.**
4. **Explainers, shorts, carousels, newsletter.**

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

## Housekeeping

- `_drive-upload/` is a **632 MB duplicate** used to stage the Drive copy. Safe
  to delete; originals live in each `out/`. It is gitignored.
- IDEMMO's Videos folder holds 4 cuts of the same market film (~25 MB each).
  Only `idemmo-luxembourg-market-2025-vs-2026-final-logo-corrected.mp4` is the
  one to post.

---

## Still blocked on the operator

- **Voiceover.** Video timelines are built to take narration without change.
- **Face content.** None exists anywhere in the library.
- **Real renovation and construction-site photography** — `remodeling` is a
  before/after series with no genuine "before", and `constructions` uses the
  Bonnevoie renders as demos.
- **A demo dataset for `/prospecting`** with fictional names would make the
  best trade-track footage filmable.
