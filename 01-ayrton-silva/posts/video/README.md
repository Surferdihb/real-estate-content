# Ayrton Silva — video

Silent 9:16 MP4, built from the same `src/data.js` as the static posts. Same
editorial identity, same sourced figures, same rules.

```bash
node video/render-video.mjs              # all picks, fr + en
node video/render-video.mjs w1-mon fr    # one post, one language
```

Output: `video/out/{fr,en}/<id>.mp4` — 1080×1920, H.264, 11–14s, no audio.

## Why silent

Most feed video is watched with the sound off. These are built to be read, not
heard: figures count up, tables build row by row, the source card lands at the
end and holds. A progress hairline runs along the bottom so a scroller can see
how long the piece is.

When your voiceover exists, it drops on top — the visual timeline does not need
to change.

## Which posts get a video

Curated in `PICKS` inside `render-video.mjs`. Video is for arguments that
benefit from being revealed in sequence — a number that counts up, a table that
builds. A dense method post works better as a static image you can stop on.

Current picks: `w1-mon`, `w1-wed`, `w2-mon`, `w3-mon`, `w3-wed`, `w4-mon`,
`w7-mon`, `w8-mon`.

## How the animation works

`setFrame(t, D)` in `template.html` sets every animated property as a pure
function of `t`. No CSS animations, no `requestAnimationFrame`. The renderer
seeks frame by frame, so:

- output is byte-stable across runs
- there is no dropped-frame or timing drift
- a frame can be inspected at any `t` for debugging

The renderer also **throws if the stage overflows**, so a clipped card fails
before 360 frames get rendered rather than after.

Timeline, roughly: masthead rule draws → rubric → headline lines stagger →
standfirst → figure counts up → note → table builds → source and handle land,
then hold for ~2.5s.

## « Connaître sa commune » — 60s

A second, chaptered format. One commune per video: title card, six chapters,
source card. ~60 seconds.

```bash
node video/render-commune.mjs                    # all communes, fr + en
node video/render-commune.mjs commune-esch fr    # one
```

Copy and facts live in `communes.js`. Chapters run: the commune · getting
around · schools · living here · the market · check before you buy.

A persistent chapter rail across the top fills as each section plays, so a
viewer can see how far in they are and what is left.

**Adding a commune.** You need, at minimum: population and rank (STATEC or the
commune), rail and bus service (mobiliteit.lu), secondary schools, one health
reference, and price plus rent per m² (immotop / Observatoire). Without all of
those, don't ship it — a commune guide with a gap in the middle is worse than
no guide.

Currently built: **Esch-sur-Alzette** and **Differdange**. Both come from the
written analyses, which is why they are detailed. Any further commune needs a
research pass first.

The format deliberately keeps a "check before you buy" chapter at the end —
flood zones, CASIPO, the neighbourhood price spread. It is the chapter that
makes the rest credible.

## Rules carried over

- Every figure keeps its source on screen at the end.
- No invented numbers. Same standard as the static set.
- Public posts use editorial red, trade posts slate.

## Capturing LUMINA for video

The `/prospecting` map records well and is genuinely striking footage.

**Never capture the left panel.** It lists real prospects by name at their home
addresses with sales status attached — publishing it would expose private
individuals. Crop from ~20 % of the width onward, which keeps the 3D city and
the "7015 real buildings · ACT orthophoto" badge and loses every name.

The same applies to `/crm`, `/kanban` and any view with a contact list. Safe
surfaces: the 3D map, analysis output, intelligence views with no named people.

A headless capture script is in the session history; the short version is
Playwright at 1600×1000 ×2, `networkidle`, then a 12s wait for MapLibre to load
tiles and extrude geometry before screenshotting.
