# AlphaSquad Storefront Workspace

This repository is now organized as an npm workspace to support a reusable storefront foundation package for multi-tenant deployments.

## Workspace Layout
- `packages/storefront-base`: shared storefront foundation package (`@alphasquad/storefront-base`)
- `packages/storefront-config`: typed tenant config contract (`@alphasquad/storefront-config`)
- `packages/create-storefront`: CLI scaffolder (`@alphasquad/create-storefront`)
- `apps/example-tenant`: reference tenant app that consumes the shared packages

## Dependency Policy
`@alphasquad/storefront-base` uses:
- `peerDependencies`: `next`, `react`, `react-dom`
- `dependencies`: package-owned runtime dependencies

This keeps framework runtime ownership in each tenant app and avoids duplicate React/Next runtime issues.

## Local Development
From repo root:

```bash
npm install
npm run dev
```

This starts `apps/example-tenant`.

## Build and Checks
From repo root:

```bash
npm run build
npm run lint
npm run typecheck
```

## Release Workflow
This workspace uses Changesets for versioning and npm publishing.

```bash
npm run changeset
npm run version-packages
npm run release
```

Automation:
- `.github/workflows/release.yml`: creates release PRs and publishes on merge to `main`.
- `.github/workflows/ci.yml`: validates build/typecheck/lint and runs a package install smoke test.

Required GitHub secret:
- `NPM_TOKEN`: npm token with publish permission for `@alphasquad/*`.

## Tenant Bootstrapping (CLI)
After publishing:

```bash
npx @alphasquad/create-storefront my-tenant
```

## Tenant Patch Auto-Sync
Patch dependency updates can auto-merge using:
- `templates/tenant/.github/dependabot.yml`
- `templates/tenant/.github/workflows/dependabot-automerge.yml`

Copy these into each tenant repository to enforce automatic patch adoption.

## Head Sync Strategy
Shared metadata defaults are defined in `@alphasquad/storefront-base` and consumed by tenant layouts. Tenants can override all head fields through metadata overrides while still inheriting package defaults.
