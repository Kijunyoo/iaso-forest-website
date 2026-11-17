#!/usr/bin/env bash
# Build the static site and publish the contents of out/ to the "deploy" branch.
# Hostinger Git auto-deploy copies the "deploy" branch into the web root as-is, so that branch holds build output only.
# Usage: bash scripts/publish-site.sh   (run from the repo root, on the branch to publish)
set -euo pipefail

npm run build
test -f out/index.html

git fetch -q origin deploy || true
export GIT_INDEX_FILE="$(git rev-parse --absolute-git-dir)/index.site"
rm -f "$GIT_INDEX_FILE"
git --work-tree=out add -A -f .
tree=$(git write-tree)
unset GIT_INDEX_FILE

src=$(git rev-parse --short HEAD)
if parent=$(git rev-parse -q --verify origin/deploy); then
  commit=$(git commit-tree "$tree" -p "$parent" -m "deploy: build from $src")
else
  commit=$(git commit-tree "$tree" -m "deploy: build from $src")
fi
git push origin "$commit:refs/heads/deploy"
echo "published $commit (source $src)"
