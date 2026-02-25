#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-/Users/bleckcorp/IdeaProjects/HmoApp}"

repos=(
  "hmo-backend-core"
  "hmo-staff-portal"
  "hmo-member-portal"
  "hmo-provider-portal"
  "hmo-group-portal"
  "hmo-mobile"
  "hmo-ui"
  "hmo-platform-devops"
)

print_repo() {
  local repo_path="$1"
  local repo_name
  repo_name="$(basename "$repo_path")"

  if [[ ! -d "$repo_path/.git" ]]; then
    echo "## ${repo_name}"
    echo "path: ${repo_path}"
    echo "status: missing git repository"
    echo
    return
  fi

  local branch
  branch="$(git -C "$repo_path" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")"

  echo "## ${repo_name}"
  echo "path: ${repo_path}"
  echo "branch: ${branch}"
  echo "status-short:"
  git -C "$repo_path" status --short || true

  echo "recent-commits:"
  git -C "$repo_path" log --oneline -n 8 || true

  echo "unstaged-diff-stat:"
  git -C "$repo_path" diff --stat || true

  echo "staged-diff-stat:"
  git -C "$repo_path" diff --cached --stat || true

  echo
}

echo "# HMO Polyrepo Resume Snapshot"
echo "root: ${ROOT}"
echo "generated_at_utc: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo

for repo in "${repos[@]}"; do
  print_repo "${ROOT}/repos/${repo}"
done
