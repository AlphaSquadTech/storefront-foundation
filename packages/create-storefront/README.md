# @alphasquad/create-storefront

Scaffold a new AlphaSquad storefront tenant (Next.js app) powered by `@alphasquad/storefront-base`.

## Quick Start

```bash
npx @alphasquad/create-storefront@latest my-tenant
cd my-tenant
npm install
cp .env.example .env.local
npm run dev
```

Fill in:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SITE_URL`

## What It Generates

The scaffold is intentionally small so each tenant can build a bespoke homepage/branding while staying on the shared foundation.

- `package.json`
  - Dependencies:
    - `@alphasquad/storefront-base` (shared foundation)
    - `@alphasquad/storefront-config` (typed tenant config contract)
    - `next`, `react`, `react-dom` (tenant-owned runtime dependencies)
- `storefront.config.ts`
  - Tenant config (branding, integrations, optional head fields like title/robots)
- `app/layout.tsx`
  - Uses `buildBaseMetadata(storefrontConfig)` and `buildBaseViewport()` from `@alphasquad/storefront-base`
- `app/page.tsx`
  - Placeholder home page (replace with tenant-specific implementation)
- `next.config.ts`
  - Uses `createBaseNextConfig()` from `@alphasquad/storefront-base/runtime/next-config`
  - Enables `transpilePackages` for the shared `@alphasquad/*` packages
- `tsconfig.json`
- `.env.example`

## Keeping Tenants In Sync

Tenants should depend on `@alphasquad/storefront-base` (and `@alphasquad/storefront-config`) using semver ranges.

When you publish updates to `@alphasquad/storefront-base` (for example, changes to how `<head>` metadata is built),
tenants can receive those updates via normal dependency updates (ex: Dependabot with auto-merge patch updates).

