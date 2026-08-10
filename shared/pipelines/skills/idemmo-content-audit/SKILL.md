---
name: idemmo-content-audit
description: Audit IDEMMO content and project files against the IDEMMO Master Branding Guideline before generating or writing any deliverable. Use before creating, editing, rendering, exporting, or approving IDEMMO posts, videos, carousels, stories, campaign packs, or brand assets.
---

# IDEMMO Content Audit

Run this audit before writing or overwriting IDEMMO content. The audit is a gate: if a required check fails, correct the source/template first and do not generate final files.

## Audit order

1. Locate and inspect the authoritative master: `brand-assets/idemmo/14-Day Campaign Test v1.0/IDEMMO-Academy-Post-04-06.mp4`, its preview JPG, editable HTML, and the official logo/icon assets.
2. Confirm the output is 1080×1920, 9:16, and—when video is requested—an actual dynamic HyperFrames timeline rather than a still image in an MP4 wrapper.
3. Confirm the official full IDEMMO logo is present, top-left, aspect-ratio correct, and not replaced by plain text.
4. Confirm the master visual system: subtle navy grid; warm near-white base; pale yellow/green/cyan upper-right wash; orange → yellow/green → cyan lower-left form; navy `#102b45`; gradient accents `#e52d78`, `#ff8a18`, `#80c84b`, `#12b8d7`.
5. Confirm master geometry: chapter pill, Academy eyebrow, hero title block, subhead, rounded white card, three numbered rows, bottom-right IDEMMO house icon, CTA, and Foetz footer.
6. Confirm the play button is absent. The bottom-right house icon is allowed; it must not be confused with a play circle.
7. Confirm content alignment: the hero title, supporting description, CTA, and all three card subjects must be specific to the day/topic. Flag repeated generic copy across unrelated variants.
8. Inspect representative early, middle, and final video frames plus at least one static output. Check line wrapping, clipping, contrast, logo size, and gradient visibility.

## Required audit report

Before writing files, produce a short report with:

- Master files inspected and their paths
- Dimensions/aspect ratio
- Official logo and icon status
- Palette/gradient status
- Layout and motion status
- Copy-to-hero alignment status
- Failures and the exact corrective action
- Explicit `PASS` only when all gates pass

## File-writing gate

Do not write final images, videos, or campaign packs until the report passes. If the user asks to proceed despite failures, preserve the report, clearly label the exception, and keep the master template unchanged.

## Deliverable checks

- Static: inspect the rendered PNG/JPG, not only the source SVG/HTML.
- Video: inspect the MP4 at multiple timestamps and verify frame changes; check duration and dimensions with ffprobe.
- Campaign pack: audit every day/variant, not only the first example. Record any day whose title, subhead, card rows, or CTA does not match its topic.

Use the IDEMMO Master Branding Guideline skill for the design rules and this skill for the preflight decision and evidence record.
