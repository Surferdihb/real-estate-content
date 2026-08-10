# Listing → Video: Templated Workflow

Turn any property listing into a cinematic room-by-room tour video, fast, using
the Higgsfield CLI (account: ayrtonswipefield workspace, Seedance 2.0 Std
Unlimited pass through Aug 7 2026 — 720p/1080p std mode). Target buyer:
real estate agents. Every scene is 8–10 s.

## IMPORTANT: unlimited pass covers MANUAL (web UI) generation only

CLI/API jobs bill credits (seedance_2_0 = 22.5 cr/clip). So the default route is
**manual**: scripts produce a copy-paste prompt sheet, you generate in the
Higgsfield web UI for free, download clips, scripts stitch. The CLI route
(`run-tour.sh`) stays available for paid, fully-automated runs.

## Pipeline — manual route (free, default)

```
photos + listing facts
  → templates/scenes.csv        (you fill: order, room, secs, photo, prompt key)
  → scripts/prompt-sheet.sh     (→ PROMPT-SHEET.md: per-scene prompt + settings + filename)
  → generate manually at higgsfield.ai, download into scenes/ with listed names
  → scripts/stitch.sh           (normalize + concat → final/tour-16x9.mp4)
  → optional: 9:16 reframe for reels
```

## Pipeline — CLI route (paid, hands-off)

```
scenes.csv → scripts/run-tour.sh (bills ~22.5 cr/clip) → scripts/stitch.sh
```

## Phase 0 — Intake (5 min)

1. Copy `templates/scenes.csv` into a new job folder: `jobs/<listing-slug>/scenes.csv`.
2. Drop curated photos into `jobs/<listing-slug>/photos/`. Rules:
   - NO photos with baked-in text, watermarks, or agency badges — delete them.
   - Tour order: exterior → entry → living → dining → kitchen → bedrooms → bathrooms → outdoor.
   - One photo per scene. Widest, best-lit shot of each room wins.
3. Fill scenes.csv. `prompt_key` picks a camera move from `prompts/room-prompts.md`;
   or write a custom prompt inline (camera + light ONLY — never describe room
   contents, it fights the input photo).

## Phase 1 — Generate (`scripts/run-tour.sh <job-folder>`)

Per scene, the script runs:

```
higgsfield generate create seedance_2_0 \
  --prompt "<style preamble + camera move>" \
  --start-image <photo or previous scene handoff> \
  --duration <8|9|10> --resolution 1080p --mode std \
  --aspect-ratio 16:9 --generate-audio true \
  --wait --json
```

- **Seam lock**: scene N's photo is passed as `--start-image`; the script also
  extracts the last frame of scene N's finished clip and offers it as `--end-image`
  continuity anchor for transitions when `seam=lock` is set in the CSV. Default
  `seam=cut` (hard cuts read as professional; use lock only for hallway→room flows).
- Clips download to `jobs/<slug>/scenes/NN-<room>.mp4`.
- Idempotent: already-downloaded scenes are skipped, so a failed run resumes.

## Phase 2 — Stitch (`scripts/stitch.sh <job-folder>`)

- Normalizes every clip (1080p, 30 fps, h264, aac audio kept).
- Concats in CSV order → `jobs/<slug>/final/tour-16x9.mp4`.
- `--vertical` flag additionally produces a center-crop 9:16 for reels
  (for best quality use Higgsfield `reframe` workflow instead).

## Quality bar (agent-ready checklist)

- [ ] Every scene 8–10 s, motion slow and smooth (no whip pans, no morphing)
- [ ] No warped geometry: straight door frames, stable countertops
- [ ] Consistent light direction across scenes (style preamble does this)
- [ ] Exterior first, money shot (best room) within first 20 s
- [ ] Total runtime 60–90 s for 7–9 scenes — agent attention span
- [ ] Audio: ambient only; music gets added by the agent's own editor or a later pass

## Cost

Seedance 2.0 Std Unlimited pass is active until **Aug 7 2026** (720p and 1080p).
VERIFY the pass covers CLI/API jobs before a batch: run ONE scene, then
`higgsfield account transactions --size 5` — charge must be 0. If it billed
credits, stop and re-check plan. After Aug 7: seedance_2_0 = 22.5 cr/clip,
seedance1_5 = 4.8 cr/clip fallback.

## Speed

Jobs run server-side; the script fires scenes SEQUENTIALLY when seam=lock
(needs previous output) but IN PARALLEL for seam=cut scenes. A 8-scene
all-cut tour ≈ one scene's wall-clock time (~2–4 min) + stitch (~1 min).
