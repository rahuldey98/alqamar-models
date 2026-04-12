#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./publish.sh
#   ./publish.sh patch|minor|major
#
# Required:
#   export NODE_AUTH_TOKEN=ghp_xxx
#
# Optional:
#   export REMOTE=origin

BUMP_TYPE="${1:-}"
REMOTE="${REMOTE:-origin}"
REGISTRY="https://npm.pkg.github.com"

if [[ -z "$BUMP_TYPE" ]]; then
  echo "Select version bump type:"
  echo "1) patch"
  echo "2) minor"
  echo "3) major"
  read -r -p "Enter choice [1-3]: " choice
  case "$choice" in
    1) BUMP_TYPE="patch" ;;
    2) BUMP_TYPE="minor" ;;
    3) BUMP_TYPE="major" ;;
    *)
      echo "Error: invalid choice '$choice'. Use 1, 2, or 3."
      exit 1
      ;;
  esac
fi

if [[ "$BUMP_TYPE" != "patch" && "$BUMP_TYPE" != "minor" && "$BUMP_TYPE" != "major" ]]; then
  echo "Error: invalid bump type '$BUMP_TYPE'. Use patch|minor|major."
  exit 1
fi

if [[ -z "${NODE_AUTH_TOKEN:-}" ]]; then
  echo "Error: NODE_AUTH_TOKEN is not set."
  exit 1
fi

if [[ ! -f "package.json" ]]; then
  echo "Error: run this from the shared-dtos repo root (package.json not found)."
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Error: git working tree is not clean. Commit/stash changes first."
  exit 1
fi

echo "Installing dependencies..."
npm ci

echo "Running build..."
npm run clean
npm run build

echo "Bumping version ($BUMP_TYPE)..."
NEW_VERSION="$(npm version "$BUMP_TYPE")" # creates commit + tag

echo "Publishing to GitHub Packages..."
npm publish --registry="$REGISTRY"

echo "Pushing commit + tags to $REMOTE..."
git push "$REMOTE" HEAD --follow-tags

echo "Release complete: $NEW_VERSION"
