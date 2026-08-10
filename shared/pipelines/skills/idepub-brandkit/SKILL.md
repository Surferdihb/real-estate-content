---
name: idepub-brandkit
description: Create or adapt IDEPUB B2B content — AI video-studio sales material, pitch decks, landing pages, demo reels, and outreach visuals — using the approved IDEPUB dark visual identity. Use whenever the request mentions IDEPUB, selling the AI video system, B2B video-studio offers, or co-branded partner content.
---

# IDEPUB Master Branding Guideline

Use this skill as the source of truth for IDEPUB content. IDEPUB is the AI video studio product brand of the IDEMMO group (Foetz, Luxembourg). It sells AI-generated property video as a B2B service to VEFA promoters, investors, construction and renovation companies, and ecosystem partners. IDEPUB has its own identity: a violet→blue gradient, a light canvas, product-grade and proof-driven. It does **not** share IDEMMO's rainbow gradient — that belongs to the IDEMMO house mark alone.

## Relationship to IDEMMO

- IDEMMO (`skills/idemmo-brandkit/SKILL.md`) = the agency/recruitment brand: warm near-white, light, human.
- IDEPUB = the product/studio brand: light violet-white, violet→blue gradient, technical. Never mix the two palettes in one asset.
- There is **no shared gradient**. IDEMMO uses the 4-stop rainbow `#e52d78 → #ff8a18 → #80c84b → #12b8d7` in its house mark. IDEPUB uses violet→blue `#7b3788 → #618bc7`. Applying IDEMMO's rainbow to IDEPUB is the single most common branding error on this account.
- **IDEPUB stands alone in public-facing material.** Do not add IDEMMO group attribution: the supplied logo carries none. Co-branded partner assets are the only exception, and they name the partner, not the group.

## Visual identity

> **Corrected 2026-08-08.** The previous version of this section described a
> near-black canvas and a pink→orange→green→cyan gradient. That is **IDEMMO's**
> palette, not IDEPUB's. Colours below are sampled directly from the supplied
> brand file `idepub_logo_CMJN_icone.png`. When prose and the binary asset
> disagree, **the asset wins**.

- Formats: 1080×1350 (4:5) for feed posts — the largest format a feed shows uncropped; 1080×1920 (9:16) for Reels/Stories; 1920×1080 (16:9) for decks and landing embeds.
- Canvas: light violet-white `#f6f3fa`, matching the light violet skin of the idepub site. Cards are plain white `#ffffff`.
- Brand gradient: violet → blue, `#7b3788` → `#7068a8` → `#618bc7`, running bottom-left to top-right as in the mark. Use for: the hero figure, exactly one accent word per headline, the footer hairline, CTA pills. Never as a full-bleed background.
- Primary accent: IDEPUB violet `#7b3788`. Blue `#618bc7` is the secondary.
- Ink: `#17121f`; secondary text `#4b4459`; tertiary `#7d7590`. Hairlines `#e7dff1`.
- **The mark is a supplied binary asset** — the split-"P" disc, `brandkit/idepub_logo_CMJN_icone.png`. Use the file. Do not redraw it in CSS, and never substitute a camera/viewfinder glyph: there is no viewfinder in the IDEPUB identity.
- Lockup: mark left, then "IDEPUB" in a bold geometric sans, uppercase, wide-tracked (~6.5px at 38px), with "MARKETING & COMMUNICATION" beneath it. Never apply the gradient to the wordmark — the wordmark is solid ink, the gradient lives in the mark.
- Headline hierarchy: large ink sans-serif; exactly one accent word/phrase in the violet→blue gradient. Eyebrows uppercase, letter-spaced, violet.
- Type: Archivo (500/600/700/800). Embed it in any render pipeline so exports do not depend on locally installed fonts.
- Copy in French by default; English as secondary. Preserve accents and apostrophes.

## Taglines and CTA

- Descriptor on the mark: **MARKETING & COMMUNICATION** (not "vidéo / com / digital").
- FR primary: « L'IA qui vend vos biens en vidéo »
- FR alt: « Vos projets. En vidéo. En 48h. »
- EN: "AI video that sells property"
- Standard CTA: white pill `Envoyer "DEMO"` (WhatsApp keyword pattern, same mechanic as IDEMMO's `Envoyer "AGENT"`).
- Standard footer: `Foetz · Luxembourg · IDEPUB — Marketing & Communication`.

## Motion/video rules

For video, use HyperFrames rather than a static MP4. Default 8 seconds. Entrance order: logo/viewfinder first, then eyebrow, headline lines, proof row, CTA — short eased entrances. First and last frames must be legible.

- Signature motion: a thin gradient scanline or viewfinder-frame draw-on; subtle, once per composition.
- Never add a multicolor play button. Never flatten a requested dynamic composition into a still; render the HTML timeline to MP4 and verify motion at multiple timestamps.

## Content-format rules

- Proof before promise: every sales asset shows at least one concrete number (delay 48h, videos delivered, absorption metric) — no invented metrics; numbers must trace to a repo/GHL source or be clearly labeled as example ("exemple").
- One asset = one segment = one CTA. Segments: VEFA promoteur, investisseur, construction/rénovation, partenaire.
- Three-row offer card pattern (mirrors IDEMMO academy card, dark variant): `01` pink, `02` orange, `03` green — used for the three tiers (PACK ANNONCE / STUDIO / PROGRAMME).
- Legal: AI-generated imagery must carry the disclaimer « Images générées par IA — non contractuelles » when depicting property renders (staging, floor-plan 3D, twilight).
- Co-branded partner assets (pack_13) add the partner logo bottom-left, IDEPUB top-left, and require double approval before any external use.

## Production checklist

1. Inspect supplied IDEPUB/IDEMMO assets before creating new visuals.
2. Dark canvas `#0c1220`, gradient order preserved, one accent word per headline.
3. Confirm no play circle; confirm AI disclaimer present on property renders.
4. Confirm group attribution footer present.
5. For video, run HyperFrames check/render and inspect early, middle, and final timestamps.
6. Run `docs/idepub/content-audit.md` as the IDEPUB preflight before delivery. It explicitly adapts `skills/idemmo-content-audit/SKILL.md` to the dark canvas, mandatory IDEPUB wordmark, and optional interim viewfinder mark.
7. Treat every applicable audit line as a delivery gate: correct failures before export and mark `PASS` only when all applicable lines are checked.
8. Deliver the MP4/PNG plus editable source.

Reference assets are in `assets/` (to be populated: `idepub-logo.png` once designed; interim: wordmark set in brand type). Detailed asset notes in `references/assets.md`.
