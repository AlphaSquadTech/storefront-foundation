# Step 1 Completion: Shared Foundation Extraction

This document records completion of Step 1: extracting shared runtime foundations from the tenant app into `@alphasquad/storefront-base`.

## What now lives in `@alphasquad/storefront-base`

### Head + Metadata
- `src/head.ts`
  - `buildBaseMetadata`
  - `applyMetadataOverrides`
  - `buildBaseViewport`

### Runtime configuration services
- `src/runtime/app-configuration.ts`
- `src/runtime/configuration-service.ts`
- `src/runtime/server-configuration-service.ts`

### Middleware foundation
- `src/runtime/middleware.ts`
  - `createStorefrontMiddleware`
  - `defaultStorefrontMiddlewareMatcher`

### Next.js base platform policy
- `src/runtime/next-config.ts`
  - `createBaseNextConfig`
  - Shared security headers, redirects, and image remote pattern policy

### Shared head-link policy
- `src/runtime/head-links.ts`
  - `getBaseHeadLinks`

### Shared shell layout primitive
- `src/runtime/root-shell.tsx`
  - `StorefrontRootShell`

## Example tenant integration

`apps/example-tenant` now consumes package-owned runtime for:
- root metadata/head generation
- middleware behavior
- Next.js base config policy
- root shell structure
- configuration service modules (via tenant wrappers)

## Notes
- `next`, `react`, and `react-dom` remain `peerDependencies` in `@alphasquad/storefront-base`.
- Build and typecheck pass for workspace packages after extraction.
