#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/bleckcorp/IdeaProjects/HmoApp"
SPRINT_INPUT=""
STORY_INPUT=""
DRY_RUN="false"

usage() {
  cat <<USAGE
Usage:
  $(basename "$0") --story "<story text>" [--sprint "Sprint 17"] [--root <hmo-root>] [--dry-run]

Examples:
  $(basename "$0") --sprint "Sprint 17" --story "provider payment batch export"
  $(basename "$0") --story "backend claims adjudication and member portal status"
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --root)
      ROOT="$2"
      shift 2
      ;;
    --sprint)
      SPRINT_INPUT="$2"
      shift 2
      ;;
    --story)
      STORY_INPUT="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN="true"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

if [[ -z "$STORY_INPUT" && -z "$SPRINT_INPUT" ]]; then
  echo "Provide at least --story or --sprint." >&2
  usage
  exit 1
fi

has_keyword() {
  local haystack="$1"
  shift
  for kw in "$@"; do
    if [[ "$haystack" == *"$kw"* ]]; then
      return 0
    fi
  done
  return 1
}

in_list() {
  local needle="$1"
  shift
  for item in "$@"; do
    if [[ "$item" == "$needle" ]]; then
      return 0
    fi
  done
  return 1
}

add_repo() {
  local repo="$1"
  if ! in_list "$repo" "${selected[@]:-}"; then
    selected+=("$repo")
  fi
}

run_cmd() {
  local repo_dir="$1"
  local cmd="$2"
  echo "  -> $cmd"
  if [[ "$DRY_RUN" == "false" ]]; then
    (cd "$repo_dir" && eval "$cmd")
  fi
}

text="$(printf '%s %s' "$SPRINT_INPUT" "$STORY_INPUT" | tr '[:upper:]' '[:lower:]')"
selected=()

if has_keyword "$text" backend api endpoint controller service spring java flyway migration db database rabbitmq security auth claims billing eligibility utilization benefits groups providers members eventing scheduling filestorage ai; then
  add_repo "hmo-backend-core"
fi

if has_keyword "$text" staff admin queue operations renewal "plan purchase" "member registration" "provider onboarding"; then
  add_repo "hmo-staff-portal"
fi

if has_keyword "$text" "member portal" member "self-service" utilization "digital id" "plan compare"; then
  add_repo "hmo-member-portal"
fi

if has_keyword "$text" provider "provider portal" payment batch reconciliation; then
  add_repo "hmo-provider-portal"
fi

if has_keyword "$text" group "group portal" hr employer roster invoice; then
  add_repo "hmo-group-portal"
fi

if has_keyword "$text" mobile ios android capacitor push biometric; then
  add_repo "hmo-mobile"
fi

if has_keyword "$text" "design system" "shared ui" component library "@hmo/ui"; then
  add_repo "hmo-ui"
fi

if has_keyword "$text" devops deployment vercel dokploy runbook release rollback dr disaster "ci/cd" ci cd; then
  add_repo "hmo-platform-devops"
fi

if [[ ${#selected[@]} -eq 0 ]]; then
  add_repo "hmo-backend-core"
  add_repo "hmo-staff-portal"
  add_repo "hmo-member-portal"
  add_repo "hmo-provider-portal"
  add_repo "hmo-group-portal"
fi

ordered=(
  "hmo-backend-core"
  "hmo-staff-portal"
  "hmo-member-portal"
  "hmo-provider-portal"
  "hmo-group-portal"
  "hmo-mobile"
  "hmo-ui"
  "hmo-platform-devops"
)

echo "HMO scope pipeline"
echo "root: $ROOT"
echo "sprint: ${SPRINT_INPUT:-<none>}"
echo "story: ${STORY_INPUT:-<none>}"
echo "dry_run: $DRY_RUN"
echo

echo "Selected repos:"
for repo in "${ordered[@]}"; do
  if in_list "$repo" "${selected[@]}"; then
    echo "- $repo"
  fi
done

echo

extract_sprint_number() {
  local raw="$1"
  if [[ "$raw" =~ ([0-9]+) ]]; then
    echo "${BASH_REMATCH[1]}"
  fi
}

sprint_num="$(extract_sprint_number "$SPRINT_INPUT" || true)"

for repo in "${ordered[@]}"; do
  if ! in_list "$repo" "${selected[@]}"; then
    continue
  fi

  repo_dir="$ROOT/repos/$repo"
  if [[ ! -d "$repo_dir" ]]; then
    echo "Skipping missing path: $repo_dir"
    echo
    continue
  fi

  echo "== $repo =="

  case "$repo" in
    hmo-backend-core)
      run_cmd "$repo_dir" "mvn -B -ntp test"
      run_cmd "$repo_dir" "mvn -B -ntp verify"
      run_cmd "$repo_dir" "bash scripts/sprint0_backend_foundation_checks.sh"
      ;;

    hmo-staff-portal|hmo-member-portal|hmo-provider-portal|hmo-group-portal)
      run_cmd "$repo_dir" "npm install"
      run_cmd "$repo_dir" "npm run lint"
      run_cmd "$repo_dir" "npm run test"
      run_cmd "$repo_dir" "npm run build"
      ;;

    hmo-mobile)
      run_cmd "$repo_dir" "npm install"
      run_cmd "$repo_dir" "npm run lint"
      run_cmd "$repo_dir" "npm run test"
      run_cmd "$repo_dir" "npm run build"
      run_cmd "$repo_dir" "npm run mobile:smoke"
      run_cmd "$repo_dir" "npx cap doctor"
      ;;

    hmo-ui)
      run_cmd "$repo_dir" "npm install"
      run_cmd "$repo_dir" "npm run lint"
      run_cmd "$repo_dir" "npm run test"
      run_cmd "$repo_dir" "npm run build"
      ;;

    hmo-platform-devops)
      run_cmd "$repo_dir" "bash scripts/sprint0_foundation_checks.sh"
      if [[ -n "$sprint_num" ]]; then
        shopt -s nullglob
        sprint_scripts=("$repo_dir"/scripts/sprint"$sprint_num"_*_checks.sh)
        shopt -u nullglob

        for s in "${sprint_scripts[@]}"; do
          run_cmd "$repo_dir" "bash scripts/$(basename "$s")"
        done
      fi
      ;;
  esac

  echo
done

echo "Pipeline complete."
