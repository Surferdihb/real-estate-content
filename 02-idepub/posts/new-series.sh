#!/usr/bin/env bash
# Scaffold a new IDEPUB series:  ./new-series.sh <series-name>
set -e
name="$1"; [ -z "$name" ] && { echo "usage: ./new-series.sh <series-name>"; exit 1; }
here="$(cd "$(dirname "$0")" && pwd)"
dst="$here/$name"
mkdir -p "$dst/src/photos" "$dst/out/fr" "$dst/out/en"
cp "$here/_engine/template.html" "$here/_engine/render.mjs" "$dst/src/"
cp -r "$here/_engine/fonts" "$here/_engine/assets" "$dst/src/"
echo "scaffolded $dst — add src/data.js and src/photos/, then: cd $name && node src/render.mjs"
