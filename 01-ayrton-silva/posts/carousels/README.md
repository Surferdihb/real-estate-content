# Carousels — Ayrton Silva

Multi-slide sets for LinkedIn and Instagram, 1080×1350 at 2× (2160×2700 PNG).
Same editorial mono identity as the single posts: warm off-white paper,
editorial red for the public track, slate for the trade track.

```bash
node src/render.mjs        # fr + en
node src/render.mjs en     # one language
```

Output: `out/<lang>/<carousel-id>-NN.png`, one PNG per slide, in swipe order.
`out/<lang>/_page-<lang>.html` is the full render for eyeballing in a browser.

## What exists

| Id | Track | Slides | Subject |
|---|---|---|---|
| `c1-vrai-cout` | public | 5 | What €545,000 actually costs — duty, notary, Bëllegen Akt |
| `c2-ceinture-sud` | public | 6 | Six southern communes, three market speeds |
| `c3-ce-qui-nexiste-pas` | trade | 5 | The four data points Luxembourg does not publish |

## Rules

- Every figure is lifted from an existing sourced asset — the infographics data,
  the commune series, the written analyses. Nothing is re-derived here, and
  nothing is invented.
- The last slide and the cover carry the source line; the middle slides carry
  the pager instead, so the source is visible where a reader stops.
- A slide that overflows its box throws and fails the build rather than
  shipping clipped.
- Slide kinds: `cover · rows · figure · steps · split · board · close`.

## Adding one

Append to `src/carousels.js` with both `fr` and `en` blocks. Keep 5–7 slides:
a cover that states the claim, two or three that prove it, one that says what
is *not* known, and a close. Re-run the renderer.
