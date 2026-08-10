# IDEPUB asset notes

## Status

No binary assets yet. Interim rule: set the IDEPUB wordmark live in brand type (same sans family as IDEMMO), gradient on "PUB", optional viewfinder glyph drawn in SVG.

## IDEMMO master audit and IDEPUB adaptation

Inspected master assets:

- `skills/idemmo-brandkit/assets/idemmo-logo.png` — approved IDEMMO logo with the house mark.
- `skills/idemmo-brandkit/assets/post-brand-kit-example.jpeg` — approved light-canvas reference composition with the four-stop gradient, chapter pill, rounded content card, CTA/footer pattern, house icon, and a visible multicolour play circle.

Adapted result for IDEPUB:

| Master element | IDEPUB decision |
|---|---|
| Four-stop gradient | **PASS** — retain the ordered accent `#e52d78 → #ff8a18 → #80c84b → #12b8d7`; never use it as a full canvas. |
| Light canvas and organic wash | Replace with dark `#0c1220` canvas and `#13233c` panels. |
| IDEMMO house logo/icon | Reject — use the IDEPUB wordmark and optional viewfinder glyph; no house icon. |
| Multicolour play circle | Reject — no play circle in any IDEPUB asset. |
| CTA/footer convention | Adapt to one segment/CTA and `Foetz · Luxembourg · IDEPUB — Marketing & Communication`. No IDEMMO group attribution. |
| Property imagery | Add `Images générées par IA — non contractuelles` whenever AI-generated property imagery is used. |

Use `docs/idepub/content-audit.md` to record the asset-specific preflight result before exporting a deck, landing page, still, or video.

## Planned assets

| Asset | Path | Notes |
|---|---|---|
| `idepub-logo.png` | `assets/idepub-logo.png` | Wordmark, transparent background, dark-canvas optimized |
| `idepub-logo-light.png` | `assets/idepub-logo-light.png` | For rare light-context use (invoices, docs) |
| `viewfinder-glyph.svg` | `assets/viewfinder-glyph.svg` | Camera-frame mark, gradient stroke |
| Demo reels | `docs/idepub/demo-scripts.md` outputs | pack_14 / pack_06 / pack_12 renders once approved |

## Borrowed from IDEMMO

- Gradient stops and order: `#e52d78`, `#ff8a18`, `#80c84b`, `#12b8d7` (see `skills/idemmo-brandkit/SKILL.md`).
- Type family and pill/card geometry (dark variant).
- CTA keyword mechanic (`Envoyer "DEMO"`).
