#!/usr/bin/env bash
# Build the static site and publish the contents of out/ to the "site" branch.
# Hostinger Git auto-deploy pulls the "site" branch into the web root.
# Usage: bash scripts/publish-site.sh   (run from the repo root, on the branch to publish)
set -euo pipefail

npm run build
test -f out/index.html

git fetch -q origin site || true
export GIT_INDEX_FILE="$(git rev-parse --git-dir)/index.site"
rm -f "$GIT_INDEX_FILE"
git --work-tree=out add -A -f .
tree=$(git write-tree)
unset GIT_INDEX_FILE

src=$(git rev-parse --short HEAD)
if parent=$(git rev-parse -q --verify origin/site); then
  commit=$(git commit-tree "$tree" -p "$parent" -m "site: build from $src")
else
  commit=$(git commit-tree "$tree" -m "site: build from $src")
fi
git push origin "$commit:refs/heads/site"
echo "published $commit (source $src)"
