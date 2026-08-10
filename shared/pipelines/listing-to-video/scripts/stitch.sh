#!/usr/bin/env bash
# stitch.sh <job-folder> [--vertical]
# Normalizes all scene clips and concats them in filename order.
set -euo pipefail

JOB_DIR="${1:?usage: stitch.sh <job-folder> [--vertical]}"
VERTICAL="${2:-}"
SCENES="$JOB_DIR/scenes"
NORM="$JOB_DIR/norm"
FINAL="$JOB_DIR/final"

mkdir -p "$NORM" "$FINAL"
shopt -s nullglob
CLIPS=("$SCENES"/*.mp4)
[ ${#CLIPS[@]} -gt 0 ] || { echo "no clips in $SCENES"; exit 1; }

LIST="$NORM/concat.txt"
: > "$LIST"
for C in "${CLIPS[@]}"; do
  B=$(basename "$C")
  N="$NORM/$B"
  if [ ! -f "$N" ]; then
    ffmpeg -y -loglevel error -i "$C" \
      -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30" \
      -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
      -c:a aac -b:a 192k -ar 48000 \
      "$N"
    echo "normalized $B"
  fi
  echo "file '$N'" >> "$LIST"
done

OUT="$FINAL/tour-16x9.mp4"
ffmpeg -y -loglevel error -f concat -safe 0 -i "$LIST" -c copy "$OUT"
echo "master -> $OUT"

if [ "$VERTICAL" = "--vertical" ]; then
  OUTV="$FINAL/tour-9x16.mp4"
  ffmpeg -y -loglevel error -i "$OUT" \
    -vf "crop=ih*9/16:ih,scale=1080:1920" \
    -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -c:a copy \
    "$OUTV"
  echo "vertical (center-crop) -> $OUTV  (better: higgsfield reframe workflow)"
fi
