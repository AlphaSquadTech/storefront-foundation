# NPM Package Implementation Plan

## Objective
Convert this base template into a public npm package that can bootstrap and power storefront tenants, while keeping shared foundations centrally maintainable.

## Final Decisions
- Registry visibility: public.
- Tenant update policy: auto-merge patch updates.
- Head override policy: tenants can override all `<head>` fields.
- Backward compatibility window: none.

## Package Strategy
- `@alphasquad/storefront-base`
  - Shared storefront foundation (layout shell, providers, middleware factory, base routes/helpers, head/metadata utilities).
- `@alphasquad/storefront-config`
  - Typed tenant config contract used by both base package and tenant apps.
- `@alphasquad/create-storefront`
  - CLI scaffolder for creating tenant apps wired to the base package.

## Dependency Model
`next`, `react`, and `react-dom` must be `peerDependencies` in `@alphasquad/storefront-base`.

Reason:
- Tenant app must own a single copy/version of framework runtime dependencies.
- Avoid duplicate React instances and Next.js mismatch issues.

### Expected dependency sections
For `@alphasquad/storefront-base`:
- `peerDependencies`: `next`, `react`, `react-dom`
- `dependencies`: runtime libraries directly used by the base package (for example Apollo or Zustand utilities that are truly package-owned)
- `devDependencies`: package-local tooling for tests/builds

## Version Propagation Rules
- Updating React/Next in base package updates peer ranges in `@alphasquad/storefront-base`.
- Tenant repos still update their direct `next`/`react`/`react-dom` dependencies and lockfiles.
- Renovate/Dependabot auto-merge patch dependency updates in tenant repos.
- CI gates ensure tenant builds pass before merge.

## Head Sync Contract
- Base package exports a centralized head API (`buildBaseMetadata`, `BaseHead` if needed).
- Tenant app composes this output and can override any field.
- Shared updates to defaults in base package propagate to tenants via normal package updates.

## Rollout Phases
1. Workspace and package scaffolding.
2. Shared foundation extraction into `@alphasquad/storefront-base`.
3. Example tenant app consuming package APIs.
4. Create-storefront CLI.
5. Release automation + tenant dependency update automation.
6. Pilot tenant migration and scale-out.

## Success Criteria
- A tenant app can be scaffolded via CLI and runs on top of `@alphasquad/storefront-base`.
- `<head>` defaults originate from base package.
- Patch releases can be auto-updated across tenant repos safely.
