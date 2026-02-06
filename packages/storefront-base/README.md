# @alphasquad/storefront-base

Shared AlphaSquad storefront foundation for Next.js tenants.

This package is meant to centralize cross-tenant behavior (for example: default `<head>` metadata rules, Next config defaults,
shared middleware behavior, etc.) so tenants stay consistent and can be updated via normal npm dependency updates.

## Install

```bash
npm install @alphasquad/storefront-base @alphasquad/storefront-config
```

This package declares `next`, `react`, and `react-dom` as `peerDependencies` on purpose: each tenant owns its runtime versions.

## Usage

### 1. Tenant Config

Create `storefront.config.ts` in the tenant:

```ts
import type { TenantStorefrontConfig } from "@alphasquad/storefront-config";

export const storefrontConfig: TenantStorefrontConfig = {
  branding: {
    tenantName: "my-tenant",
    storeName: "My Tenant Store",
  },
  theme: {
    palette: "base-template",
  },
  integrations: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  head: {
    title: "My Tenant Store",
    canonicalPath: "/",
    robots: { index: true, follow: true },
  },
};
```

### 2. Base Metadata (Head)

In `app/layout.tsx`:

```tsx
import type { Metadata, Viewport } from "next";
import { buildBaseMetadata, buildBaseViewport } from "@alphasquad/storefront-base";
import { storefrontConfig } from "../storefront.config";

export const metadata: Metadata = buildBaseMetadata(storefrontConfig);
export const viewport: Viewport = buildBaseViewport();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

If a tenant needs custom metadata beyond the base defaults, use `applyMetadataOverrides(base, overrides)`.

### 3. Next.js Config

In `next.config.ts`:

```ts
import { createBaseNextConfig } from "@alphasquad/storefront-base/runtime/next-config";

const nextConfig = createBaseNextConfig();

// If you import anything from @alphasquad/* packages at runtime, keep this enabled.
nextConfig.transpilePackages = [
  "@alphasquad/storefront-base",
  "@alphasquad/storefront-config",
];

export default nextConfig;
```

### 4. Middleware

Create `middleware.ts` in the tenant:

```ts
import { createStorefrontMiddleware } from "@alphasquad/storefront-base/runtime/middleware";

export default createStorefrontMiddleware();

// Note: Next.js requires this matcher to be a static literal (do not import it).
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

