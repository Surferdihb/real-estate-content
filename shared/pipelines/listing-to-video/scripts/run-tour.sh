#!/usr/bin/env bash
# run-tour.sh <job-folder> [--dry-run]
# Generates every scene in <job-folder>/scenes.csv via Higgsfield seedance_2_0.
# Idempotent: skips scenes whose mp4 already exists in <job-folder>/scenes/.
set -euo pipefail

JOB_DIR="${1:?usage: run-tour.sh <job-folder> [--dry-run]}"
DRY_RUN="${2:-}"
CSV="$JOB_DIR/scenes.csv"
PHOTOS="$JOB_DIR/photos"
OUT="$JOB_DIR/scenes"
FRAMES="$JOB_DIR/frames"
PROMPTS_FILE="$(dirname "$0")/../prompts/room-prompts.md"

STYLE_PREAMBLE="Cinematic real estate videography, natural daylight, soft shadows, warm neutral grade, shallow depth of field, gimbal-smooth motion, architectural lines kept perfectly straight, photorealistic."

[ -f "$CSV" ] || { echo "missing $CSV"; exit 1; }
mkdir -p "$OUT" "$FRAMES"

motion_line() { # $1 = prompt_key
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

PREV_CLIP=""
# strip header + CRLF
tail -n +2 "$CSV" | tr -d '\r' | while IFS=, read -r order room secs photo prompt_key seam custom_prompt; do
  [ -z "$order" ] && continue
  NN=$(printf "%02d" "$order")
  CLIP="$OUT/$NN-$room.mp4"

  if [ -f "$CLIP" ]; then
    echo "[$NN-$room] exists, skip"
    PREV_CLIP="$CLIP"
    continue
  fi

  if [ -n "$custom_prompt" ]; then
    MOTION="$custom_prompt"
  else
    MOTION="$(motion_line "$prompt_key")"
    [ -z "$MOTION" ] && { echo "[$NN-$room] unknown prompt_key '$prompt_key' and no custom_prompt"; exit 1; }
  fi
  PROMPT="$STYLE_PREAMBLE $MOTION"

  START_IMG="$PHOTOS/$photo"
  [ -f "$START_IMG" ] || { echo "[$NN-$room] missing photo $START_IMG"; exit 1; }

  EXTRA_ARGS=()
  if [ "$seam" = "lock" ] && [ -n "$PREV_CLIP" ] && [ -f "$PREV_CLIP" ]; then
    # seam=lock: previous scene's LAST frame becomes this scene's start image,
    # and the listing photo becomes the end_image target.
    HANDOFF="$FRAMES/$NN-handoff.jpg"
    ffmpeg -y -loglevel error -sseof -0.2 -i "$PREV_CLIP" -frames:v 1 -q:v 2 "$HANDOFF"
    EXTRA_ARGS+=(--end-image "$START_IMG")
    START_IMG="$HANDOFF"
  fi

  echo "[$NN-$room] ${secs}s :: $MOTION"
  if [ "$DRY_RUN" = "--dry-run" ]; then
    PREV_CLIP="$CLIP"
    continue
  fi

  RESULT=$(higgsfield generate create seedance_2_0 \
    --prompt "$PROMPT" \
    --start-image "$START_IMG" \
    --duration "$secs" --resolution 1080p --mode std \
    --aspect-ratio 16:9 --generate-audio true \
    "${EXTRA_ARGS[@]+"${EXTRA_ARGS[@]}"}" \
    --wait --wait-timeout 20m --json)

  URL=$(echo "$RESULT" | jq -r '.. | .url? // empty' | grep -Ei '\.mp4' | head -1)
  [ -z "$URL" ] && { echo "[$NN-$room] no mp4 url in result:"; echo "$RESULT" | head -40; exit 1; }

  curl -sfL "$URL" -o "$CLIP"
  echo "[$NN-$room] saved -> $CLIP"
  PREV_CLIP="$CLIP"
done

echo "done. next: scripts/stitch.sh $JOB_DIR"
