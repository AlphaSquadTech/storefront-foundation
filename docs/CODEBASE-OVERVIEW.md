# Codebase Overview (wsm-base-template)

## Purpose
Multi-tenant e-commerce storefront built on Next.js App Router. It connects to a Saleor GraphQL backend and layers in payment integrations (PayPal, Affirm, Authorize.Net), Google services (Analytics, Tag Manager, reCAPTCHA, Maps, AdSense), and a vehicle Year-Make-Model (YMM) search/fitment feature.

## Tech Stack
- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 4 + PostCSS
- Apollo Client (GraphQL), Zustand (global state)
- Swiper for carousels, assorted UI libs

## Entry Points
- `src/app/layout.tsx`: Root layout, metadata, and provider tree. Fetches server-side configuration via `getClientSafeConfiguration()` and passes it to `ServerAppConfigurationProvider`.
- `src/app/page.tsx`: Homepage composition (hero carousel, promotions, featured products, categories, testimonials, etc.) with Suspense fallbacks.
- `src/middleware.ts`: Route protection and feature gating (e.g., `/locator`). Handles uppercase-to-lowercase redirects for SEO and auth cookie checks.

## Routing and Pages
- App Router pages live in `src/app/*`.
- Key routes:
  - Product/category: `src/app/product/[slug]`, `src/app/category/[slug]`
  - Brands: `src/app/brands`, `src/app/brand/[slug]`
  - Blog: `src/app/blog`, `src/app/blog/[slug]`
  - Search: `src/app/search`
  - Checkout/cart: `src/app/checkout`, `src/app/cart`
  - Account/auth: `src/app/account`, `src/app/(auth)/*`
  - Static pages: privacy, terms, FAQ, about, contact, shipping/returns, warranty, etc.
  - Dynamic CMS pages: `src/app/[slug]` + API fetcher

## Configuration and Tenanting
- Tenant is derived from `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_TENANT_NAME`.
- Server-side config is pulled from `https://wsm-migrator-api.alphasquadit.com/app/get-configuration?tenant=<api-url>`.
- `src/app/utils/configurationService.ts` provides cached config fetch for middleware and server usage.
- `src/app/utils/serverConfigurationService.ts` extracts a **client-safe** configuration and exposes it to the app via `ServerAppConfigurationProvider`.
- Feature flags include dealer locator, tiered pricing, will-call, and Google service toggles.
- Legacy client config (`src/app/utils/appConfiguration.ts`) still exists and fetches `/api/configuration`, but that endpoint now returns 410 (deprecated). Most runtime config now comes from server-safe config in layout.

## Data Layer (GraphQL + Apollo)
- Client Apollo (`src/graphql/client.ts`):
  - Uses `NEXT_PUBLIC_API_URL` and normalizes to `/graphql/`.
  - Adds JWT from `localStorage`.
  - Refreshes tokens on auth errors and retries requests.
- Server Apollo (`src/graphql/server-client.ts`):
  - SSR-safe, no-cache queries.
- Queries/mutations in `src/graphql/queries` and `src/graphql/mutations` cover products, categories, checkout, accounts, CMS pages, etc.

## Authentication and Middleware
- JWT stored in localStorage for Apollo requests.
- HttpOnly cookies set via `POST /api/auth/set` and cleared via `POST /api/auth/clear` or `GET /api/auth/clear-cookies`.
- `src/middleware.ts`:
  - Protects `/account`, `/orders`, `/settings` (unless on auth routes).
  - Redirects expired tokens to `/api/auth/clear-cookies` then login.
  - Feature gate for `/locator` based on configuration.

## Global State (Zustand)
- `src/store/useGlobalStore.tsx`:
  - Auth state, cart items, checkout IDs/tokens, guest info, and YMM data.
  - Syncs cart with Saleor (create checkout, add/update/remove lines).
  - Stores checkout metadata on the user for cross-device recovery.
  - Cleanup flow after checkout completion.

## Payments
- API routes in `src/app/api/affirm/*` and `src/app/api/paypal/*`.
- Typical flow:
  - Initialize gateway config (Saleor `paymentGatewayInitialize`).
  - Create and capture orders (PayPal), or process/confirm (Affirm).
- `src/app/authorize-net-success/*` pages handle Authorize.Net success flow.

## Search and Forms
- `src/app/api/search-proxy`: proxies GET requests to `NEXT_PUBLIC_SEARCH_URL` with timeout safeguards.
- `src/app/api/form-submission`: handles contact/inquiry submissions.

## SEO and Sitemaps
- `next.config.ts`:
  - Security headers and caching directives.
  - Canonical redirects (e.g., `/contact` -> `/contact-us`).
  - Image remotePatterns allow multi-tenant assets.
- `src/app/sitemap.ts` + `src/sitemaps/*`: builds static + dynamic sitemaps.
- Metadata and schema.org structured data in `src/app/layout.tsx` and `src/app/page.tsx`.

## Styling and Theming
- Tailwind 4; global styles in `src/app/globals.css`.
- Fonts: Archivo and Days One (loaded in `src/app/layout.tsx`).
- Theme is controlled by `NEXT_PUBLIC_THEME_PALETTE` and a `ThemeProvider`.

## Key Environment Variables
- `NEXT_PUBLIC_API_URL` (Saleor GraphQL endpoint)
- `NEXT_PUBLIC_SITE_URL` (canonical base URL)
- `NEXT_PUBLIC_TENANT_NAME`, `NEXT_PUBLIC_BRAND_NAME`
- `NEXT_PUBLIC_THEME_PALETTE`
- `NEXT_PUBLIC_APP_ICON`, `NEXT_PUBLIC_ASSETS_BASE_URL`
- `NEXT_PUBLIC_SEARCH_URL` (search proxy target)
- `NEXT_PUBLIC_PARTSLOGIC_URL` (YMM data, optional)

## Notable Implementation Details
- Feature gating for `/locator` in middleware uses server-side configuration.
- Apollo client avoids empty URLs (falls back to invalid placeholders rather than defaulting to localhost).
- Store cleanup clears localStorage/sessionStorage/IndexedDB and cookies for auth cleanup.
- Image remotePatterns allow any HTTP/HTTPS domain to support multi-tenant assets.
