# Real Estate Content Library

Consolidated from `Documents/Claude Code` and `Documents/Codex`, 2026-08-08.
**Copies** — originals left in place (the repo still serves some of them). ~1.7 GB.
`node_modules/` and Python venvs stripped.

Posting plan: **[POSTING-CALENDAR.md](POSTING-CALENDAR.md)**
EN coverage + what can't be translated: **[TRANSLATION-STATUS.md](TRANSLATION-STATUS.md)**

## Structure

```
01-ayrton-silva/    ACTIVE  — personal brand: agent + AI marketing/sales
02-idepub/          ACTIVE  — video production brand
03-idemmo-phase2/   PARKED  — until instructed
shared/             pipelines, listing photos, source analyses
```

---

# 01 — AYRTON SILVA (active)

Thin on purpose — this is the track that needs new production.

- `property-analyses/` — 4 written pieces (3 analyses + interactive report), raw material for market-authority posts
- `copy/weeks-01-04-FR.md` + `weeks-01-04-EN.md` — 8 posts each, ready to publish
- `market-authority/`, `personal-brand/`, `drafts/` — empty, fill these

Also draw on: `02-idepub/reference/social-proof/` (11 WhatsApp testimonials).

**Missing:** any footage or photo of you. No talking-head, no face. Highest-priority gap.

---

# 02 — IDEPUB (active)

## Ready to post — 160 images, FR + EN

`posts/` — nine series rebuilt on the real IDEPUB identity, from editable
source. See `posts/README.md`.

| Series | Posts |
|---|---|
| `luxembourg-market-numbers/` | 10 |
| `vefa-posts-v2/` | 10 |
| `constructions-v2/` | 10 |
| `la-video-immobiliere-v2/` | 10 |
| `architects-v2/` | 10 |
| `remodeling-v2/` | 9 |
| `ai-marketing-pionniers-v2/` | 10 |
| `video-reaction-v2/` | 10 |
| `property-media-machine-v2/` | 1 |

Each has `out/fr/` and `out/en/` at 2160×2700. Change a figure or a language in
`src/data.js` and re-run `node src/render.mjs`.

The original 88 French PNGs are untouched in `posts/READY-post-series/`.
`posts/_retired/` holds the invented-metrics series — do not post it.

## Reels

`videos/` — `App Mondorf v1.2.mp4`, `VEFA-Renovation Idemmo.mp4`,
`Idemmo x Maison Piscine Dudelange.mp4`

## Portfolio — client work

`portfolio-client-work/` — App 2ch Esch-sur-Alzette · App Mondorf les Bain Didier
(v1.1, v1.2) · VEFA Dahlem

⚠️ **These carry idemmo branding**: watermark top-left throughout plus an endcard
with idemmo's phone (26 53 76), idemmo.lu and the Foetz address. Post them as
*"video we produced for a client"*, never as your own listings — they send leads
to someone else's number.

## Brand + reference

- `brandkit/` — idepub logo CMJN (icon, white, vertical)
- `reference/competitor-swipe/` — 14 competitor posts. Study, never post.
- `reference/social-proof/` — 11 WhatsApp testimonials. Postable with your framing.

---

# 03 — IDEMMO (parked, phase 2)

Everything below is ready but on hold.

- `posts/14-day-campaign/Didier Approval Folder/IDEMMO-day-01..14.mp4` — client-approved, sequenced
- `posts/dealmaker-campaign/output/posts/` — 18 posts in hero/proof/conversion triads
- `videos/codex-idemmo-market-2025-2026/renders/idemmo-luxembourg-market-2025-vs-2026-final-logo-corrected.mp4` — latest cut
- `videos/codex-private-seller-idemmo/renders/idemmo-private-seller-final.mp4` — FSBO funnel
- `videos/codex-annonce-immobiliere/renders/` — listing-ad format, 60s cuts
- `videos/academy-post/`, `videos/saas-explainer-35s/` — IDEMMO Academy
- `reports/pdf/`, `brandkit/`, `raw/` (23 NotebookLM runs)

---

# shared/

- `pipelines/listing-to-video/` — listing URL → video workflow, prompts, templates
- `pipelines/skills/` — `idepub-brandkit`, `idemmo-brandkit`, `idemmo-content-audit`
- `property-analyses/` — source copies of the 5 written pieces
- `listing-photos/uploads/` — photo sets keyed by listing UUID, unlabeled

---

## Notes

- Duplicate renders are common in IDEMMO video folders (`-draft`, `-v2`, `-master`).
  The file named above is the latest cut.
- Originals remain in `Claude Code/brand-assets`, `Claude Code/videos`,
  `Claude Code/output`, `Claude Code/public/uploads`, and
  `Codex/2026-07-25/install-the-github-repo-in-our/videos`.
