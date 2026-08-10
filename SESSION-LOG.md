# Session log — how this library was built

One working session, 2026-08-08 → 2026-08-10. This records the decisions and
the findings, so the reasoning survives even when the person who made it
doesn't remember it.

---

## What was asked, in order

1. Consolidate the real estate content scattered across the Claude Code and
   Codex folders into one organised library.
2. Split it by brand once the operator's positioning was clear.
3. Produce English versions of everything.
4. Rebuild the IDEPUB post catalogue on the correct brand identity.
5. Define a content direction for the personal brand, then produce eight weeks.
6. Add video.
7. Add a "Know your commune" series.
8. Research four more communes with the market-analysis skill.

---

## Findings that changed the work

These are the things that were not true when we started, and were discovered
by checking rather than assuming.

### The IDEPUB brand identity was wrong everywhere

The supplied logo is a violet→blue split-P wordmark. But the brandkit doc, the
`idepub-site` code and all 88 original posts used a **dark navy canvas with a
four-stop rainbow** — which is IDEMMO's house mark, not IDEPUB's.

All three had inherited the same false claim, that IDEPUB "shares the IDEMMO
gradient DNA". The rainbow appears on the IDEMMO logo, the property watermarks
and the video endcards. IDEPUB's own logo contains no rainbow at all.

Fixed at source: the brandkit line that made group attribution *mandatory* was
removed, so the next asset built from it doesn't reintroduce the error.

### The original posts were full of invented metrics

Six of nine series carried unsourced numbers presented as fact:

| Series | Claim |
|---|---|
| `ai-video-statistics` | 12,400 views · 268 messages · 47 viewings → series retired |
| `ai-marketing-pionniers` | "+403 % de demandes", "+80 % de conversion", engagement counts |
| `constructions` | "le cerveau retient 95 % en vidéo, 10 % en lecture" |
| `la-video-immobiliere` | "120+ biens vendus", "98 % satisfaction" |
| `video-reaction` | invented listing prices and surfaces |

`ai-marketing-pionniers` was also built entirely on **Dubai** imagery — Burj
Khalifa skylines, AED pricing, and one caption reading "WATERFRONT RESIDENCE
LUXEMBOURG" over a Dubai skyline.

Every argument survived without the numbers. This also violated the brandkit's
own rule: *"no invented metrics; numbers must trace to a source or be clearly
labeled as example."*

### File order was unreliable

Checking the `POST n / 10` badge rather than the filename caught four problems
that would have published series out of sequence:

- `architects` — filenames scrambled: `03` is post 10, `04` is post 8
- `remodeling` — **post 5 does not exist**; badges run 1,2,3,4,6,7,8,9,10
- `1-property-media-machine` — not a series at all, nine design variants of one post
- `ai-marketing-pionniers` — no badges; file order is the only signal

### The photo library was almost entirely thumbnails

`shared/listing-photos/uploads/` looked like 49 photos across four properties.
Audited: **3 usable images**. The rest are 300×169 thumbnails.

The fix was elsewhere — idemmo.lu serves WordPress derivatives, and stripping
the `-1024x768` suffix from an image URL returns the 1600×900 original.

### The prospecting screen exposes real people

`/prospecting` in LUMINA renders a striking 3D city model — and a left panel
listing real prospects **by name at their home addresses** with sales status
attached. One is also a client in the testimonial screenshots.

Rule recorded in `01-ayrton-silva/posts/video/README.md`: crop from ~20 % width
onward. Same for `/crm` and `/kanban`. Safe surfaces are the map, the knowledge
graph, analysis output and the Public Intelligence module.

---

## Decisions

| Decision | Rationale |
|---|---|
| Three tracks: Ayrton / IDEPUB / IDEMMO-parked | Two active brands, one operator; IDEMMO deferred by instruction |
| Ayrton = "analyst who happens to sell" | The only defensible position in a market with no MLS: everyone else must work on assertion |
| No teardowns of named listings | Commercially radioactive for a working agent — you'd be grading colleagues' stock |
| Flagship = « Comment je vérifie » | Shows the check, never a verdict. Rigour without exposure |
| Editorial mono identity | Not IDEPUB violet, not IDEMMO rainbow — a person, not a company channel |
| Everything renders from `data.js` | The original 88 posts had text rasterised into pixels and no source. A number could never be corrected |
| Renderers throw on overflow | A clipped card fails the build rather than shipping |

---

## What is deliberately unfinished

**No voice, no face.** Zero footage of the operator exists. The video timeline
is built to take a voiceover on top without changing.

**`remodeling` has no "before" photography.** It is a before/after series where
every available asset is a finished render — both halves are really "after".
Post 02 argues *"montrez l'existant, sans filtre"* while showing a floor plan.
One real renovation shoot fixes posts 02, 03 and 04.

**`constructions` has no site photography.** The Bonnevoie renders stand in as
demos, per instruction. Posts 02, 05 and 08 need real site work.

**Two figures are knowingly uncertain**, and say so on the card: the Bëllegen
Akt at €40,000 *and* €45,000 with both sources named, and Esch communal
unemployment labelled stale at May 2024.

---

## The standard

Every figure carries a named public source — Observatoire de l'Habitat, STATEC,
BCL, pfi.public.lu, immotop.lu. What Luxembourg does not publish is stated as
unavailable rather than estimated: there is no MLS, no transaction register, no
published time-on-market, no absorption rate.

A sourced number invites the reader to check. That is the point of sourcing it,
and it is also why a stale number is worse than no number at all.

---

*Written by Claude (Fable 5) at the end of the session that produced this
library. Figures verified 04–10/08/2026; refresh before posting past November.*
