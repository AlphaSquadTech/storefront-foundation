# @alphasquad/storefront-config

Typed tenant configuration contract for AlphaSquad storefronts.

Tenants own their branding and integration endpoints via a single config object, which is then consumed by
`@alphasquad/storefront-base` for shared behavior (metadata, integrations, etc.).

## Install

```bash
npm install @alphasquad/storefront-config
```

## Usage

Create `storefront.config.ts` in the tenant app:

```ts
import type { TenantStorefrontConfig } from "@alphasquad/storefront-config";

export const storefrontConfig: TenantStorefrontConfig = {
  branding: {
    tenantName: "my-tenant",
    storeName: "My Tenant Store",
    logoUrl: "/logo.svg",
    appIconUrl: "/favicon.ico",
  },
  theme: {
    palette: "base-template",
  },
  integrations: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    searchUrl: process.env.NEXT_PUBLIC_SEARCH_URL,
  },
  head: {
    title: "My Tenant Store",
    description: "A storefront powered by AlphaSquad.",
    canonicalPath: "/",
    robots: {
      index: true,
      follow: true,
    },
  },
};
```

