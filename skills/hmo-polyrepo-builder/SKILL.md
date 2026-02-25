---
name: hmo-polyrepo-builder
description: Build, test, and deliver the HMO App polyrepo at /Users/bleckcorp/IdeaProjects/HmoApp with strict PRD/sprint/architecture traceability. Use when work spans one or more HMO repos, when you must resume from existing git commits or diffs, or when you must enforce project contribution gates (tests, docs, conventional commits, and deployment baseline).
---

# HMO Polyrepo Builder

Use this skill to execute delivery work in the HMO App polyrepo with strong restartability and governance.

## 1. Establish context and resume point

1. Run resume snapshot:
   `bash scripts/hmo_resume_snapshot.sh /Users/bleckcorp/IdeaProjects/HmoApp`
2. If sprint/story text is available, auto-select repos and run validation pipeline:
   `bash scripts/hmo_scope_pipeline.sh --sprint "Sprint <N>" --story "<story text>" --root /Users/bleckcorp/IdeaProjects/HmoApp`
3. For each repo you plan to touch, inspect:
   `git -C /Users/bleckcorp/IdeaProjects/HmoApp/repos/<repo> status --short`
   `git -C /Users/bleckcorp/IdeaProjects/HmoApp/repos/<repo> log --oneline -n 20`
   `git -C /Users/bleckcorp/IdeaProjects/HmoApp/repos/<repo> diff --stat`
4. Determine the start point from real git state:
- If uncommitted changes exist, continue from the existing worktree and do not discard changes.
- If clean, anchor to the latest relevant commit and derive next tasks from the sprint docs.
5. Load planning + architecture docs using `references/hmo-doc-map.md` before coding.

## 2. Lock scope to PRD and sprint evidence

1. Map the change to a PRD section and sprint item.
2. Identify affected repos and modules.
3. List explicit in-scope endpoints/components/jobs/tests before writing code.
4. Reject out-of-scope additions unless the user re-scopes.

## 3. Apply HMO engineering constraints

1. Preserve module-first backend structure and dependency rules from:
- `/Users/bleckcorp/IdeaProjects/HmoApp/docs/architecture/module-dependency-map.md`
- `/Users/bleckcorp/IdeaProjects/HmoApp/docs/HMO App - Folder Structure Standard.md`
2. Follow contribution conventions:
- Branch pattern: `feature/<module>-<story-id>` (or repo standard already in use)
- Conventional commits with scope
- Include tests and docs updates in each implementation commit
3. Maintain deployment baseline:
- Backend: Docker on VM via Dokploy
- Web portals: Vercel
- Mobile: independent release pipeline
- No Kubernetes assumptions

## 4. Command matrix by repo

Run commands inside each target repo directory.

### Backend (`repos/hmo-backend-core`)

1. `mvn -B -ntp test`
2. `mvn -B -ntp verify`
3. If targeted validation is needed:
   `mvn -B -ntp -Dtest=<CommaSeparatedTests> test`
4. Baseline guardrail:
   `bash scripts/sprint0_backend_foundation_checks.sh`

### Web portals (`repos/hmo-staff-portal`, `repos/hmo-member-portal`, `repos/hmo-provider-portal`, `repos/hmo-group-portal`)

1. `npm install`
2. `npm run lint`
3. `npm run test`
4. `npm run build`
5. Dev server when needed: `npm run dev`

### Mobile (`repos/hmo-mobile`)

1. `npm install`
2. `npm run lint`
3. `npm run test`
4. `npm run build`
5. `npm run mobile:smoke`
6. Optional runtime sync checks:
   `npx cap doctor`

### Shared UI library (`repos/hmo-ui`)

1. `npm install`
2. `npm run lint`
3. `npm run test`
4. `npm run build`
5. Optional watch mode: `npm run dev`

### DevOps (`repos/hmo-platform-devops`)

1. Baseline guardrail:
   `bash scripts/sprint0_foundation_checks.sh`
2. Run sprint-specific script(s) if the sprint scope demands it, for example:
   `bash scripts/sprint25_uat_signoff_cycle_checks.sh`

## 5. Execution loop

1. Implement the smallest coherent unit by repo/module.
2. Run repo-local tests immediately after each unit.
3. Run full repo validation commands before finishing.
4. Update docs whenever behavior/config/architecture changes.
5. Capture traceability:
- PRD reference
- Story/sprint item
- tests run and results

## 6. Git resume and handoff protocol

1. Before edits, record current state per touched repo:
   `git -C /Users/bleckcorp/IdeaProjects/HmoApp/repos/<repo> status --short`
2. After edits, summarize exact delta:
   `git -C /Users/bleckcorp/IdeaProjects/HmoApp/repos/<repo> diff --stat`
   `git -C /Users/bleckcorp/IdeaProjects/HmoApp/repos/<repo> diff`
3. Commit in coherent checkpoints with conventional commit format.
4. Include commit message body fields when templates exist:
- Story
- PRD Ref
- Implemented
- Tests
- Docs Updated
- Risks/Notes

## 7. Required completion output

Always report:

1. Repos touched and reason.
2. Files changed per repo.
3. Commands run per repo.
4. Test/build outcomes.
5. Commit hashes created (or pending changes if not committed).
6. Remaining blockers/risks.
7. Next precise action to continue from current git state.

## 8. Bundled scripts

1. `scripts/hmo_resume_snapshot.sh`
- Captures branch, status, recent commits, and diff stats for all HMO repos.
2. `scripts/hmo_scope_pipeline.sh`
- Accepts `--sprint` and `--story`, chooses affected repos by keyword mapping, and runs each repo's required command pipeline.
- Use `--dry-run` to preview selected repos and commands without execution.
