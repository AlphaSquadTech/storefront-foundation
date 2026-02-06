# Step 2 Completion: Release and Sync Automation

This document records completion of Step 2: release engineering and tenant patch-sync automation.

## Implemented

### 1) Changesets-based versioning and release
- Added `.changeset/config.json` with `access: public` and `baseBranch: main`.
- Added release scripts in root `package.json`:
  - `npm run changeset`
  - `npm run version-packages`
  - `npm run release`
- Added initial release entry:
  - `.changeset/fuzzy-bananas-wonder.md`

### 2) Public npm package publish settings
Added `publishConfig` to all public packages:
- `packages/storefront-base/package.json`
- `packages/storefront-config/package.json`
- `packages/create-storefront/package.json`

`publishConfig` values:
- `access: public`
- `provenance: true`

### 3) CI pipeline
Added `.github/workflows/ci.yml`:
- `npm ci`
- `npm run build`
- `npm run typecheck`
- `npm run lint -w @alphasquad/example-tenant`
- `npm run smoke`

### 4) Smoke test for package consumption
Added `scripts/smoke-test-packages.mjs`:
- Packs `@alphasquad/storefront-config` and `@alphasquad/storefront-base`
- Scaffolds a fresh tenant using `@alphasquad/create-storefront`
- Rewrites deps to local tarballs
- Installs and builds the tenant

### 5) Automated release workflow
Added `.github/workflows/release.yml`:
- Runs on push to `main`
- Uses `changesets/action`
- Creates release PRs when changesets exist
- Publishes to npm when release PR is merged

Required secret:
- `NPM_TOKEN`

### 6) Dependabot + patch auto-merge policy
Added repo-level automation:
- `.github/dependabot.yml`
- `.github/workflows/dependabot-automerge.yml`

Added tenant templates to copy into each tenant repo:
- `templates/tenant/.github/dependabot.yml`
- `templates/tenant/.github/workflows/dependabot-automerge.yml`

Policy outcome:
- Dependabot patch updates auto-merge.
- Minor/major updates remain manual.

## Validation
Executed locally:
- `npm install` ✅
- `npm run build` ✅
- `npm run typecheck` ✅
- `npm run smoke` ✅

## Operational notes
- Release workflow requires `NPM_TOKEN` in GitHub repo secrets.
- Tenant patch auto-merge activates only after tenant repos include the provided template workflow files.
