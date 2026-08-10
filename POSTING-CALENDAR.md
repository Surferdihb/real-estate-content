# Posting Calendar — Ayrton Silva + IDEPUB

Start: 2026-08-10 (Mon). 5 posts/week, Mon–Fri.
Two voices, one operator. IDEMMO is parked until you say otherwise.

## Voice split

**Ayrton Silva** — real estate agent + AI marketing/sales expert.
First person. Opinion, market reads, behind-the-scenes, results.
This is the account that builds trust and books calls.

**IDEPUB** — the production brand. Third person / brand voice.
Proof of work, formats, verticals, offer.

Rule of thumb: Ayrton posts the *thinking*, IDEPUB posts the *product*.

---

## Inventory available

| Asset | Count | Track |
|---|---|---|
| IDEPUB post series (standalone, FR, branded) | 88 | IDEPUB |
| IDEPUB portfolio reels | 3 | IDEPUB |
| Client walkthrough videos (idemmo-branded) | 4 | IDEPUB portfolio only |
| Social proof screenshots (WhatsApp) | 11 | Ayrton |
| Written market analyses | 5 | Ayrton |
| Competitor swipe | 14 | reference, never post |

**88 posts at 3/week = ~7 months of IDEPUB feed.** Supply is not your constraint.
Ayrton's personal track is the thin one — that is where new production goes.

---

## The IDEPUB catalogue — 160 images, FR + EN

All rebuilt on the real identity. Post from `02-idepub/posts/<series>/out/fr/`
(or `out/en/`). Files are numbered in badge order — the order they were designed
to run in.

| # | Series | Posts | Target |
|---|---|---|---|
| 1 | `property-media-machine-v2` | 1 | broad intro — one post, not a series |
| 2 | `la-video-immobiliere-v2` | 10 | educational, widest reach |
| 3 | `luxembourg-market-numbers` | 10 | sourced market data, authority |
| 4 | `vefa-posts-v2` | 10 | promoters, developers |
| 5 | `architects-v2` | 10 | architects |
| 6 | `constructions-v2` | 10 | construction firms |
| 7 | `remodeling-v2` | 9 | renovation *(see caveat)* |
| 8 | `ai-marketing-pionniers-v2` | 10 | positioning / authority |
| 9 | `video-reaction-v2` | 10 | client proof + general property video |

Sequence logic: broad → educational → credibility → then vertical by vertical.
Verticals last, once the feed already explains what you do.

**Two caveats before scheduling.**

`remodeling-v2` post 02 is a before/after with no genuine "before" photo — every
asset is a finished render. Hold it, or caption it as an illustration.

`constructions-v2` uses the Bonnevoie renders as demos; there is no site
photography yet. Fine as demos, weak in front of a construction client.

**Strongest single posts to open with:** `video-reaction-v2/01` (real client
reactions, the only genuine proof in the set) and
`luxembourg-market-numbers/09` (the four metrics Luxembourg doesn't publish —
it demonstrates method rather than claiming results).

## Week-by-week — first 8 weeks

### Weeks 1–2 · Establish
| Day | Track | Asset |
|---|---|---|
| Mon | IDEPUB | `1-property-media-machine/` — pick **one** variant, this is the intro post |
| Tue | Ayrton | Intro post — who you are, agent + AI. Write fresh. |
| Wed | IDEPUB | `luxembourg-market-numbers/out/fr/01.png` — the €950/m² gap |
| Thu | Ayrton | Market read from `PROPERTY-MARKET-Esch-sur-Alzette.md` |
| Fri | IDEPUB | `luxembourg-market-numbers/out/fr/02.png` |

Week 2: market-numbers 03–05 Mon/Wed/Fri, plus a second Ayrton market read
(`PROPERTY-ANALYSIS-Esch-sur-Alzette-id-9269886.md`).

### Week 3 · First proof drop
| Day | Track | Asset |
|---|---|---|
| Mon | IDEPUB | `luxembourg-market-numbers/out/fr/06.png` |
| Tue | Ayrton | Social proof — 2 WhatsApp screenshots, your framing |
| Wed | IDEPUB | `luxembourg-market-numbers/out/fr/07.png` |
| Thu | IDEPUB | **Reel:** `videos/VEFA-Renovation Idemmo.mp4` — as portfolio |
| Fri | IDEPUB | `luxembourg-market-numbers/out/fr/09.png` — the method post |

### Week 4 · Educational arc
Series 2 (`la-video-immoiliere...`) slides 01–03 Mon/Wed/Fri.
Ayrton Tue: `rapport-immobilier-interactif.md` angle.
Ayrton Thu: Niederkorn analysis (`PROPERTY-ANALYSIS-12-rue-de-la-Gare...`).

### Weeks 5–6 · Credibility
Series 2 slides 04–09, then series 3 (`ai-video-statistics`) 01–03.
Thu each week: one portfolio reel
(`App Mondorf v1.2.mp4`, then `Idemmo x Maison Piscine Dudelange.mp4`).

### Weeks 7–8 · First vertical push
Series 4 (`vefa-posts`) 01–06. Pair with the VEFA Dahlem walkthrough Thu wk7.
Ayrton Tue/Thu: dudelange field atlas material, plus one opinion post
on AI in Luxembourg real estate.

---

## Gaps to fill (production queue)

Ranked by what unblocks the most posting.

1. **Ayrton face content — zero exists.** Every asset is brand-design or client
   work. A personal-brand account with no personal footage stalls fast.
   Need: talking-head clips. `shared/pipelines/skills/` has the tooling.
2. **IDEPUB reels are 3 and all idemmo-branded.** Need neutral or
   IDEPUB-branded cuts before the offer posts land.
3. **Listing photos are now mapped** (from the `listings` table in
   `db/lumina.sqlite3`):
   - `16c2045a` — Maison en VEFA à Dahlem, €1,175,000 (9 photos)
   - `3fc2977b` — Appartement rénové à Dudelange, €550,000 (14)
   - `e6a1ac9e` — Maison rénovée à Dudelange, €940,000 (16)
   - `e95290ff` — Belle opportunité, L-4550 Niederkorn, €545,000 (10)

   All carry a centred `idemmo` watermark. Usable (they're yours), but the mark
   is visible — crop around it, or supply unwatermarked masters.
4. **No FR/EN language split decided.** All 88 posts are French. If you want
   the expat/cross-border segment, half of this needs an EN pass.

---

## Do not post

- `02-idepub/reference/competitor-swipe/` — other agencies' work
- `03-idemmo-phase2/**` — parked
- Anything in `raw/` or `drafts/`
