#!/usr/bin/env bash
# prompt-sheet.sh <job-folder>
# Builds PROMPT-SHEET.md: one copy-paste block per scene for MANUAL generation
# in the Higgsfield web UI (unlimited pass covers manual only — CLI bills credits).
set -euo pipefail

JOB_DIR="${1:?usage: prompt-sheet.sh <job-folder>}"
CSV="$JOB_DIR/scenes.csv"
SHEET="$JOB_DIR/PROMPT-SHEET.md"
[ -f "$CSV" ] || { echo "missing $CSV"; exit 1; }

STYLE_PREAMBLE="Cinematic real estate videography, natural daylight, soft shadows, warm neutral grade, shallow depth of field, gimbal-smooth motion, architectural lines kept perfectly straight, photorealistic."

motion_line() {
  case "$1" in
    drone_approach)   echo "Slow aerial drone approach toward the facade, gently descending to eye level, sun glinting off windows." ;;
    threshold_reveal) echo "Camera glides forward through the doorway, revealing the space beyond as light opens up." ;;
    slow_orbit)       echo "Slow 30-degree orbital move around the center of the room, parallax on foreground edges." ;;
    lateral_glide)    echo "Smooth lateral dolly glide from left to right, keeping verticals straight." ;;
    push_in)          echo "Slow steady push-in toward the focal point of the room, depth compressing gently." ;;
    pull_back_reveal) echo "Camera pulls back slowly, widening to reveal the full space and the view beyond." ;;
    rise_tilt)        echo "Camera rises slowly while tilting down slightly, revealing layout from above eye level." ;;
    window_drift)     echo "Slow drift toward the window, exterior view coming into focus, curtains catching light." ;;
    *)                echo "" ;;
  esac
}

{
  echo "# Prompt Sheet — $(basename "$JOB_DIR")"
  echo
  echo "Generate each scene MANUALLY at higgsfield.ai (Seedance 2.0 Std, unlimited pass)."
  echo
  echo "Settings for EVERY scene: **Seedance 2.0 · std · 1080p · 16:9 · audio ON**"
  echo "Duration per scene as listed. Start image = the listed photo."
  echo
  echo "After generating, download each mp4 into \`scenes/\` with the EXACT filename shown"
  echo "(stitch order comes from the filename). Then run: \`scripts/stitch.sh $JOB_DIR\`"
  echo
} > "$SHEET"

tail -n +2 "$CSV" | tr -d '\r' | while IFS=, read -r order room secs photo prompt_key seam custom_prompt; do
  [ -z "$order" ] && continue
  NN=$(printf "%02d" "$order")
  if [ -n "$custom_prompt" ]; then MOTION="$custom_prompt"; else MOTION="$(motion_line "$prompt_key")"; fi
  [ -z "$MOTION" ] && { echo "scene $order: unknown prompt_key '$prompt_key'"; exit 1; }
  {
    echo "---"
    echo
    echo "## Scene $NN — $room  ·  ${secs}s  ·  start image: \`photos/$photo\`"
    echo
    echo "Save as: \`scenes/$NN-$room.mp4\`"
    echo
    echo '```'
    echo "$STYLE_PREAMBLE $MOTION"
    echo '```'
    echo
  } >> "$SHEET"
done

echo "sheet -> $SHEET"

# Also emit a single-message brief for Higgsfield's in-site assistant
# ("supercomputer" free mode): paste ONE message, attach the photos, done.
BRIEF="$JOB_DIR/SUPERCOMPUTER-BRIEF.md"
{
  echo "Generate the following real estate tour scenes as separate videos with Seedance 2.0, std mode, 1080p, 16:9, audio on. All scenes share this style: $STYLE_PREAMBLE"
  echo
  tail -n +2 "$CSV" | tr -d '\r' | while IFS=, read -r order room secs photo prompt_key seam custom_prompt; do
    [ -z "$order" ] && continue
    if [ -n "$custom_prompt" ]; then MOTION="$custom_prompt"; else MOTION="$(motion_line "$prompt_key")"; fi
    echo "Scene $order ($room, ${secs} seconds, start from the attached photo $photo): $MOTION"
  done
} > "$BRIEF"
echo "brief -> $BRIEF"
