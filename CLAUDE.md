# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-tenant e-commerce storefront built with Next.js 15, React 19, and Tailwind CSS 4. It connects to a Saleor GraphQL backend and supports multiple payment integrations (PayPal, Affirm, Authorize.net), Google services (Analytics, Tag Manager, reCAPTCHA, Maps, AdSense), and vehicle Year-Make-Model (YMM) fitment search.

## Common Commands

```bash
npm run dev      # Start dev server with Turbopack (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint with Next.js rules
```

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_API_URL=<saleor-graphql-endpoint>  # Must end with /graphql/
NEXT_PUBLIC_BRAND_NAME=<store-name>
NEXT_PUBLIC_THEME_PALETTE=<theme-name>         # e.g., "base-template"
NEXT_PUBLIC_APP_ICON=/icons/appIcon.png
NEXT_PUBLIC_PARTSLOGIC_URL=<ymm-api-base>      # Optional: for vehicle fitment
```

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/graphql/` - Apollo Client setup and GraphQL queries/mutations
- `src/store/` - Zustand global state management
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utilities and API clients

### Key Architectural Patterns

**GraphQL Data Fetching:**
- Client-side: `src/graphql/client.ts` - Apollo Client with JWT auth and automatic token refresh
- Server-side: `src/graphql/server-client.ts` - For server components
- Queries in `src/graphql/queries/`, mutations in `src/graphql/mutations/`

**State Management:**
- `src/store/useGlobalStore.tsx` - Zustand store with localStorage persistence
- Handles: auth state, cart/checkout sync with Saleor, YMM fitment data, guest checkout info

**Configuration System:**
- Runtime configuration fetched from external API based on `NEXT_PUBLIC_API_URL` tenant
- `src/app/utils/appConfiguration.ts` - Client-side service with caching
- `src/app/utils/configurationService.ts` - Server/middleware service
- Controls feature toggles (dealer locator, reCAPTCHA locations, analytics)

**Authentication:**
- JWT tokens stored in localStorage and cookies (for middleware)
- `src/middleware.ts` - Route protection for `/account`, `/orders`, `/settings`
- Automatic token refresh via Apollo error link

**Provider Hierarchy (root layout):**
```
ApolloWrapper
  └─ ServerAppConfigurationProvider
       └─ ThemeProvider
            └─ RecaptchaProvider
                 └─ GoogleAnalyticsProvider
                      └─ GoogleTagManagerProvider
                           └─ Layout
```

### API Routes
Located in `src/app/api/`:
- `/api/auth/*` - Cookie management for middleware auth
- `/api/affirm/*` - Affirm payment integration
- `/api/paypal/*` - PayPal order creation/capture
- `/api/configuration` - Proxy for tenant configuration
- `/api/form-submission` - Contact/inquiry forms
- `/api/search-proxy` - Search proxying

### Path Aliases
- `@/*` maps to `./src/*`

### Styling
- Tailwind CSS 4 with PostCSS
- Custom fonts: Archivo (--font-archivo), Days One (--font-days-one)
- Theme controlled via environment variable
