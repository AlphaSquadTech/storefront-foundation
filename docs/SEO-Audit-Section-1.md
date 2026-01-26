# SEO Audit Findings Report

**Audit Date:** 2026-01-26
**Platform:** wsm-base-template (Next.js 15 + Saleor GraphQL E-commerce)
**Auditor:** Claude Code

---

## Executive Summary

This document contains detailed findings from a comprehensive SEO audit of the wsm-base-template e-commerce platform. Each section corresponds to the checklist items in `SEO-Audit.md`.

**Legend:**

- ✅ **PASS** - Meets requirements
- ❌ **FAIL** - Does not meet requirements, needs fix
- ⚠️ **WARN** - Partially meets requirements, improvement recommended
- ⬜ **N/A** - Not applicable to this platform

---

## Section 1: Crawlability & Indexation

### 1.1 Robots.txt

**File Location:** `src/app/robots.txt/route.ts`

**Current Implementation:**

```
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
```

#### Findings Table

| ID    | Check                            | Status  | Finding                                                                                                                                                                 |
| ----- | -------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C-001 | Robots.txt exists at /robots.txt | ✅ PASS | Dynamic route handler at `src/app/robots.txt/route.ts`. Returns `text/plain` with 1-hour cache (`max-age=3600`). Uses `NEXT_PUBLIC_SITE_URL` env variable for base URL. |
| C-002 | No unintentional blocking        | ✅ PASS | Only `Allow: /` directive present - no important pages are blocked.                                                                                                     |
| C-003 | Sitemap URL referenced           | ✅ PASS | Sitemap properly referenced: `Sitemap: ${baseUrl}/sitemap.xml`                                                                                                          |
| C-004 | Crawl-delay appropriate          | ⬜ N/A  | No crawl-delay directive used. Acceptable for most use cases.                                                                                                           |
| C-005 | Test/staging blocked             | ❌ FAIL | No `Disallow` directives for staging/test/preview paths.                                                                                                                |
| C-006 | API routes blocked               | ❌ FAIL | 15+ API routes exposed to crawlers without `Disallow: /api/`                                                                                                            |
| C-007 | Search results handled           | ⚠️ WARN | Not blocked in robots.txt, but `/search` has `noindex` meta tag as fallback.                                                                                            |

#### Detailed Analysis

**C-005: Test/Staging Environments Not Blocked**

The robots.txt does not block any staging, test, or preview URLs. This could lead to:

- Duplicate content issues if staging content mirrors production
- Indexing of incomplete/test content
- Crawl budget waste

**C-006: API Routes Not Blocked**

The following API routes are exposed to crawlers:

- `/api/affirm/*` (5 routes) - Payment processing
- `/api/auth/*` (3 routes) - Authentication
- `/api/paypal/*` (3 routes) - Payment processing
- `/api/configuration` - App configuration
- `/api/form-submission` - Form handling
- `/api/search-proxy` - Search proxy
- `/api/dynamic-page/[slug]` - Dynamic pages

#### Recommendations

**Priority: HIGH**

Update `src/app/robots.txt/route.ts` to include:

```typescript
const robotsTxt = `User-agent: *
Allow: /

# Block API routes
Disallow: /api/

# Block transactional pages (backup to meta robots)
Disallow: /cart
Disallow: /checkout
Disallow: /order-confirmation
Disallow: /account

# Block auth pages
Disallow: /account/login
Disallow: /account/register
Disallow: /account/forgot-password
Disallow: /account/reset-password

# Block search with parameters
Disallow: /search?*

# Block preview/staging content
Disallow: /*?preview=
Disallow: /*?draft=

# Block internal utility pages
Disallow: /authorize-net-success
Disallow: /site-map

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`
```

---

### 1.2 XML Sitemap

**File Locations:**

- Main sitemap: `src/app/sitemap.ts`
- Static pages: `src/sitemaps/static-pages-sitemap.ts`
- Dynamic pages: `src/sitemaps/dynamic-pages-sitemap.ts`

#### Findings Table

| ID    | Check                          | Status  | Finding                                                                                     |
| ----- | ------------------------------ | ------- | ------------------------------------------------------------------------------------------- |
| C-008 | Sitemap exists at /sitemap.xml | ✅ PASS | Next.js MetadataRoute.Sitemap at `src/app/sitemap.ts`                                       |
| C-009 | Valid XML format               | ✅ PASS | Uses Next.js built-in sitemap generation - guaranteed valid XML                             |
| C-010 | All indexable pages included   | ⚠️ WARN | Most pages included, but product pagination limited to 10 pages (1000 products max)         |
| C-011 | No noindex pages in sitemap    | ⚠️ WARN | `/locator` page included but may be feature-gated (disabled via config)                     |
| C-012 | No redirecting URLs            | ✅ PASS | URLs are generated from canonical slugs                                                     |
| C-013 | No 404/error pages             | ✅ PASS | Only valid pages are included                                                               |
| C-014 | Uses canonical URLs only       | ✅ PASS | Uses `NEXT_PUBLIC_SITE_URL` for absolute URLs                                               |
| C-015 | lastmod dates accurate         | ⚠️ WARN | Static pages use `new Date()` (current time) instead of actual modification dates           |
| C-016 | changefreq appropriate         | ✅ PASS | Properly set: daily for products, weekly for categories, monthly for blog, yearly for legal |
| C-017 | priority values strategic      | ✅ PASS | Homepage: 1.0, Products: 0.9, Categories: 0.8, Blog: 0.6, Legal: 0.5                        |
| C-018 | Sitemap index for large sites  | ⚠️ WARN | Single sitemap used. May need sitemap index if >50k URLs                                    |
| C-019 | Dynamic product pages          | ⚠️ WARN | Included but limited to 1000 products (10 pages × 100 per page)                             |
| C-020 | Dynamic category pages         | ✅ PASS | All categories with products included via facets API                                        |
| C-021 | Blog/content pages             | ✅ PASS | Blog posts imported from constants file                                                     |
| C-022 | Cart/checkout excluded         | ✅ PASS | Not included in sitemap                                                                     |
| C-023 | Auth pages excluded            | ✅ PASS | Login/register not included                                                                 |
| C-024 | Account pages excluded         | ✅ PASS | Account pages not included                                                                  |

#### Detailed Analysis

**C-010 & C-019: Product Pagination Limitation**

In `src/sitemaps/dynamic-pages-sitemap.ts` line 97:

```typescript
// Limit to avoid too many requests
if (page > 10) break
```

This limits product URLs to maximum 1000 products (10 pages × 100 per page). For large catalogs, many products will be missing from the sitemap.

**C-015: Inaccurate lastmod Dates**

Static pages use `new Date()` which returns the build/request time, not actual content modification dates:

```typescript
return staticPages.map(page => ({
  url: `${baseUrl}${page.url}`,
  lastModified: new Date(), // Always current time
  ...
}))
```

**C-011: Feature-Gated Pages in Sitemap**

The `/locator` page is included in the sitemap but may be disabled via configuration (`dealer_locator` feature flag). This could lead to 404s or redirects being in the sitemap.

**Static Pages Currently Included:**

1. `/` (Homepage) - priority 1.0
2. `/about` - priority 0.8
3. `/contact` - priority 0.7
4. `/contact-us` - priority 0.7 (duplicate of /contact?)
5. `/products/all` - priority 0.9
6. `/category` - priority 0.8
7. `/brands` - priority 0.8
8. `/blog` - priority 0.8
9. `/privacy-policy` - priority 0.5
10. `/privacy` - priority 0.5 (duplicate of /privacy-policy?)
11. `/terms-and-conditions` - priority 0.5
12. `/terms` - priority 0.5 (duplicate?)
13. `/warranty` - priority 0.5
14. `/shipping-returns` - priority 0.5
15. `/frequently-asked-questions` - priority 0.6
16. `/locator` - priority 0.6

**Potential Duplicate URLs Detected:**

- `/contact` and `/contact-us`
- `/privacy` and `/privacy-policy`
- `/terms` and `/terms-and-conditions`

#### Recommendations

**Priority: MEDIUM**

1. **Remove product pagination limit** or implement sitemap index:

```typescript
// Option A: Remove limit for complete coverage
// if (page > 10) break  // Remove this line

// Option B: Implement sitemap index for large catalogs
// Split into /sitemap-products-1.xml, /sitemap-products-2.xml, etc.
```

2. **Fix lastmod dates** - Use actual file modification or content update dates:

```typescript
// For static pages, use a fixed date or git commit date
lastModified: new Date('2026-01-01'), // Or fetch from CMS
```

3. **Handle feature-gated pages** - Check configuration before including:

```typescript
// Only include /locator if dealer_locator feature is enabled
if (isFeatureEnabled('dealer_locator')) {
  staticPages.push({ url: '/locator', ... })
}
```

4. **Remove duplicate URL variations** - Choose canonical versions:
   - Keep `/contact-us`, remove `/contact` (or redirect)
   - Keep `/privacy-policy`, remove `/privacy` (or redirect)
   - Keep `/terms-and-conditions`, remove `/terms` (or redirect)

---

### 1.3 Meta Robots & Indexation

**Implementation Method:** Next.js Metadata API with `robots` object in page/layout metadata exports.

#### Findings Table

| ID    | Check                                       | Status  | Finding                                                                                                                                   |
| ----- | ------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| C-025 | Important pages have index,follow (default) | ✅ PASS | Homepage, product pages, category pages, blog pages use default (no explicit robots = index,follow).                                      |
| C-026 | Cart page has noindex                       | ✅ PASS | `src/app/cart/layout.tsx` has `robots: { index: false, follow: false }`                                                                   |
| C-027 | Checkout pages have noindex                 | ✅ PASS | `src/app/checkout/layout.tsx` has `robots: { index: false, follow: false }`                                                               |
| C-028 | Account pages have noindex                  | ✅ PASS | `src/app/account/layout.tsx` has `robots: { index: false, follow: false }`                                                                |
| C-029 | Order confirmation has noindex              | ✅ PASS | `src/app/order-confirmation/layout.tsx` has `robots: { index: false, follow: false }`                                                     |
| C-030 | Search results page strategy defined        | ✅ PASS | `src/app/search/layout.tsx` has `robots: { index: false, follow: true }` - allows link equity flow.                                       |
| C-031 | Filtered/sorted URLs handled                | ✅ PASS | Client-side filtering with URL params. Canonical tags point to base URL (e.g., `/products/all`), effectively consolidating filtered URLs. |
| C-032 | Pagination handled correctly                | ✅ PASS | `PaginationHead` component adds `rel="prev"` and `rel="next"` links dynamically. Used on search and product listing pages.                |
| C-033 | No X-Robots-Tag conflicts                   | ✅ PASS | No X-Robots-Tag HTTP headers configured in `next.config.ts`. Only meta robots used.                                                       |
| C-034 | Payment callback pages have noindex         | ✅ PASS | `src/app/authorize-net-success/layout.tsx` has `robots: { index: false, follow: false }`                                                  |

#### Detailed Analysis

**Pages with noindex Configuration:**

| Page                  | File Location                              | Robots Config                 | Notes                                                        |
| --------------------- | ------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| Cart                  | `src/app/cart/layout.tsx`                  | `index: false, follow: false` | Correctly excludes transactional page                        |
| Checkout              | `src/app/checkout/layout.tsx`              | `index: false, follow: false` | Correctly excludes transactional page                        |
| Account (all)         | `src/app/account/layout.tsx`               | `index: false, follow: false` | Protects user data pages                                     |
| Order Confirmation    | `src/app/order-confirmation/layout.tsx`    | `index: false, follow: false` | Excludes post-purchase page                                  |
| Search Results        | `src/app/search/layout.tsx`                | `index: false, follow: true`  | Allows link discovery while preventing thin content indexing |
| Auth Pages            | `src/app/(auth)/layout.tsx`                | `index: false, follow: false` | Login, register, forgot-password, reset-password, OTP        |
| Authorize.net Success | `src/app/authorize-net-success/layout.tsx` | `index: false, follow: false` | Payment callback page                                        |
| 404 Not Found         | `src/app/not-found.tsx`                    | `index: false, follow: true`  | Error page, allows crawling outbound links                   |
| Site Map              | `src/app/site-map/page.tsx`                | `index: false, follow: true`  | HTML sitemap (not XML), prevents duplicate                   |
| Product Not Found     | `src/app/product/[id]/page.tsx`            | `index: false, follow: true`  | Only when product is null/missing                            |

**Pages with Default (index, follow):**

- Homepage (`/`)
- All Products (`/products/all`)
- Category Pages (`/category/[slug]`)
- Product Pages (`/product/[id]`)
- Brand Pages (`/brand/[id]`)
- Blog Index (`/blog`)
- Blog Posts (`/blog/[slug]`)
- About (`/about`)
- Contact Pages (`/contact`, `/contact-us`)
- Legal Pages (`/privacy-policy`, `/terms-and-conditions`, etc.)
- FAQ (`/frequently-asked-questions`)
- Locator (`/locator`)

**Pagination SEO Implementation:**

The `PaginationHead` component (`src/app/components/seo/PaginationHead.tsx`):

- Client-side component that manipulates `<head>` on navigation
- Adds `rel="prev"` link for pages > 1
- Adds `rel="next"` link for pages < totalPages
- Preserves existing query parameters when building URLs
- Properly handles page 1 (removes `?page=1` parameter)

**Note:** While Google has deprecated `rel="prev/next"` for indexing, other search engines (Bing, Yandex) still use them, and they provide semantic clarity.

#### Recommendations

**Priority: LOW** (No critical issues found)

1. **Consider adding explicit `index: true, follow: true`** to important pages for documentation clarity:

```typescript
// src/app/page.tsx
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // ...
}
```

2. **Add `max-image-preview: large`** to product pages for enhanced search appearance in Google Images.

3. **Monitor for soft 404s** - Product pages that return empty/error content with 200 status should be checked via Google Search Console.

---

### 1.4 Canonical Tags

**Implementation Method:** Next.js Metadata API with `alternates.canonical` in page metadata exports. Uses `metadataBase` for URL resolution.

#### Findings Table

| ID    | Check                                           | Status  | Finding                                                                                                                                |
| ----- | ----------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| C-035 | All indexable pages have canonical tags         | ❌ FAIL | **13+ pages missing explicit canonical tags.** Only 9 pages have canonicals configured.                                                |
| C-036 | Canonicals are self-referencing on unique pages | ✅ PASS | Where configured, canonicals point to the page's own URL (e.g., `/products/all` → `/products/all`).                                    |
| C-037 | Canonical tags use absolute URLs                | ✅ PASS | `metadataBase` configured in root layout. Relative canonicals are resolved to absolute URLs.                                           |
| C-038 | metadataBase configured                         | ✅ PASS | `src/app/layout.tsx:43` - `metadataBase: new URL(siteUrl)` using `NEXT_PUBLIC_SITE_URL` env var.                                       |
| C-039 | HTTP canonicals point to HTTPS                  | ⚠️ WARN | Depends on `NEXT_PUBLIC_SITE_URL` configuration. No enforcement in code.                                                               |
| C-040 | www vs non-www consistency                      | ⚠️ WARN | No redirect configuration. Depends on hosting/DNS setup.                                                                               |
| C-041 | Trailing slash consistency                      | ✅ PASS | Next.js default (no trailing slashes). No `trailingSlash` config in `next.config.ts`.                                                  |
| C-042 | Query parameters handled in canonicals          | ✅ PASS | Canonicals point to clean URLs without query params. Filtered URLs canonical to base.                                                  |
| C-043 | Pagination canonicals correct                   | ⚠️ WARN | No canonical adjustment for paginated pages. All pages point to page 1 URL.                                                            |
| C-044 | Filtered URLs canonical to main page            | ✅ PASS | Category/product filtered views use base canonical (e.g., `/products/all`).                                                            |
| C-045 | Duplicate content has cross-canonicals          | ❌ FAIL | `/contact` and `/contact-us`, `/privacy` and `/privacy-policy`, `/terms` and `/terms-and-conditions` - no cross-canonicals configured. |

#### Detailed Analysis

**Pages WITH Explicit Canonical Tags:**

| Page                   | File                                          | Canonical Value               |
| ---------------------- | --------------------------------------------- | ----------------------------- |
| Homepage               | `src/app/page.tsx`                            | `/`                           |
| Root Layout (fallback) | `src/app/layout.tsx`                          | `/`                           |
| Products All           | `src/app/products/all/page.tsx`               | `/products/all`               |
| Category [slug]        | `src/app/category/[slug]/page.tsx`            | `/category/${slug}`           |
| Brand [id]             | `src/app/brand/[id]/page.tsx`                 | `/brand/${id}`                |
| Product [id]           | `src/app/product/[id]/page.tsx`               | `/product/${slug}`            |
| Blog Index             | `src/app/blog/page.tsx`                       | `/blog`                       |
| Blog [slug]            | `src/app/blog/[slug]/page.tsx`                | `/blog/${slug}`               |
| FAQ                    | `src/app/frequently-asked-questions/page.tsx` | `/frequently-asked-questions` |

**Pages MISSING Explicit Canonical Tags:**

| Page                | File                                    | Impact | Recommendation                                                   |
| ------------------- | --------------------------------------- | ------ | ---------------------------------------------------------------- |
| About               | `src/app/about/page.tsx`                | Medium | Add `alternates: { canonical: "/about" }`                        |
| Privacy Policy      | `src/app/privacy-policy/page.tsx`       | Medium | Add `alternates: { canonical: "/privacy-policy" }`               |
| Privacy (duplicate) | `src/app/privacy/page.tsx`              | High   | Add canonical pointing to `/privacy-policy` OR remove page       |
| Terms & Conditions  | `src/app/terms-and-conditions/page.tsx` | Medium | Add `alternates: { canonical: "/terms-and-conditions" }`         |
| Terms (duplicate)   | `src/app/terms/page.tsx`                | High   | Add canonical pointing to `/terms-and-conditions` OR remove page |
| Warranty            | `src/app/warranty/page.tsx`             | Medium | Add `alternates: { canonical: "/warranty" }`                     |
| Shipping & Returns  | `src/app/shipping-returns/page.tsx`     | Medium | Add `alternates: { canonical: "/shipping-returns" }`             |
| Contact Us          | `src/app/contact-us/page.tsx`           | Medium | Add metadata export with canonical                               |
| Contact (duplicate) | `src/app/contact/page.tsx`              | High   | Add canonical pointing to `/contact-us` OR remove page           |
| Category Index      | `src/app/category/page.tsx`             | Medium | Add `alternates: { canonical: "/category" }`                     |
| Brands              | `src/app/brands/page.tsx`               | Medium | Add metadata export with canonical                               |
| Locator             | `src/app/locator/page.tsx`              | Low    | Add `alternates: { canonical: "/locator" }`                      |
| Dynamic [slug]      | `src/app/[slug]/page.tsx`               | High   | Add generateMetadata with dynamic canonical                      |

**Duplicate Content Issue:**

The codebase has duplicate pages for the same content:

```
/contact        ←→  /contact-us          (both exist, no cross-canonical)
/privacy        ←→  /privacy-policy      (both exist, no cross-canonical)
/terms          ←→  /terms-and-conditions (both exist, no cross-canonical)
```

This creates potential duplicate content issues in search results.

**Pagination Canonical Concern:**

The `PaginationHead` component adds `rel="prev/next"` but doesn't modify canonicals. For paginated content:

- Page 1: Canonical = `/products/all` ✅
- Page 2: Canonical = `/products/all` (should be `/products/all?page=2` OR handle via `noindex`)
- Page N: Same canonical as page 1

**Impact:** Could cause Google to see pages 2+ as duplicates of page 1.

#### Recommendations

**Priority: HIGH**

1. **Add canonical tags to all missing pages:**

```typescript
// Example for /about/page.tsx
export const metadata: Metadata = {
  title: `About Us - ${getStoreName()}`,
  description: "...",
  alternates: {
    canonical: "/about",
  },
}
```

2. **Resolve duplicate pages** - Choose ONE canonical version:

**Option A: Add cross-canonicals (quick fix)**

```typescript
// src/app/contact/page.tsx
export const metadata: Metadata = {
  alternates: { canonical: "/contact-us" }, // Point to primary
}

// src/app/privacy/page.tsx
export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
}

// src/app/terms/page.tsx
export const metadata: Metadata = {
  alternates: { canonical: "/terms-and-conditions" },
}
```

**Option B: Remove duplicates and add redirects (recommended)**

- Remove `/contact`, `/privacy`, `/terms` pages
- Add redirects in `next.config.ts`:

```typescript
async redirects() {
  return [
    { source: '/contact', destination: '/contact-us', permanent: true },
    { source: '/privacy', destination: '/privacy-policy', permanent: true },
    { source: '/terms', destination: '/terms-and-conditions', permanent: true },
  ];
}
```

3. **Add generateMetadata for dynamic pages:**

```typescript
// src/app/[slug]/page.tsx
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: "...",
    alternates: {
      canonical: `/${slug}`,
    },
  }
}
```

4. **Handle paginated canonical strategy:**

Either:

- A) Add `noindex` to pages 2+ (preserves link equity to page 1)
- B) Use `view-all` page as canonical for all paginated pages
- C) Keep current approach but ensure page 1 has `rel="canonical"` to itself

---

### 1.5 Redirects

**Implementation Status:** No SEO-related redirects configured. Only auth-related middleware redirects exist.

#### Findings Table

| ID    | Check                              | Status  | Finding                                                                                                                             |
| ----- | ---------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| C-046 | Permanent redirects use 301 or 308 | ⬜ N/A  | No `async redirects()` configured in `next.config.ts`. Middleware uses `NextResponse.redirect()` which defaults to 307 (temporary). |
| C-047 | No redirect chains (max 1 hop)     | ✅ PASS | No configured redirects = no chains possible. Middleware redirects are single-hop.                                                  |
| C-048 | No redirect loops                  | ✅ PASS | No configured redirects. Middleware has guards against infinite loops.                                                              |
| C-049 | Old URLs redirect to new           | ❌ FAIL | No redirect configuration for slug changes or URL migrations.                                                                       |
| C-050 | HTTP to HTTPS redirect             | ⚠️ WARN | Not configured in Next.js. Relies on hosting platform (Vercel, etc.).                                                               |
| C-051 | Non-www to www redirect            | ⚠️ WARN | Not configured. Relies on hosting platform/DNS.                                                                                     |
| C-052 | Trailing slash normalization       | ⚠️ WARN | No explicit handling. Next.js default strips trailing slashes.                                                                      |
| C-053 | Case-sensitivity handled           | ❌ FAIL | No lowercase enforcement. URLs like `/About` and `/about` would be different pages.                                                 |

#### Detailed Analysis

**Current Redirect Behavior (Middleware Only):**

The middleware (`src/middleware.ts`) handles only:

1. **Feature-gated pages** → Home (307 temporary redirect)
2. **Expired auth tokens** → `/api/auth/clear-cookies` → `/account/login`
3. **Logged-in users accessing auth pages** → Home (307 temporary redirect)
4. **Logged-out users accessing protected pages** → `/account/login`

**Missing SEO Redirects:**

1. **Duplicate Content URLs** - No redirects for:
   - `/contact` → `/contact-us`
   - `/privacy` → `/privacy-policy`
   - `/terms` → `/terms-and-conditions`

2. **Protocol/Domain Normalization** - No application-level handling for:
   - HTTP → HTTPS
   - www ↔ non-www

3. **Case Sensitivity** - Next.js treats URLs as case-sensitive by default:
   - `/About` ≠ `/about` (both could be accessed)
   - Could create duplicate content issues

4. **Product/Category Slug Changes** - No mechanism to redirect old slugs to new ones after CMS updates.

**Middleware Redirect Types:**

| Scenario               | Response Code | Type                                        |
| ---------------------- | ------------- | ------------------------------------------- |
| Feature disabled       | 307           | Temporary (incorrect for permanent removal) |
| Auth redirect to login | 307           | Temporary (correct)                         |
| Auth redirect to home  | 307           | Temporary (correct)                         |

**Note:** `NextResponse.redirect()` uses 307 by default. For SEO, permanent URL changes should use 308 (or 301).

#### Recommendations

**Priority: MEDIUM-HIGH**

1. **Add `async redirects()` to `next.config.ts`:**

```typescript
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Duplicate content consolidation
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true, // 308
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      // Case normalization (example patterns)
      {
        source: "/About",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/BLOG/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    // existing headers...
  },
  // ...
}
```

2. **Add middleware for comprehensive lowercase enforcement:**

```typescript
// src/middleware.ts - add at the start
const { pathname } = req.nextUrl
if (pathname !== pathname.toLowerCase()) {
  const url = req.nextUrl.clone()
  url.pathname = pathname.toLowerCase()
  return NextResponse.redirect(url, 308)
}
```

3. **Trailing slash consistency:**

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  trailingSlash: false, // or true - just be consistent
  // ...
}
```

4. **HTTP/HTTPS and www handling:**

These are typically handled at the hosting/CDN level:

- **Vercel**: Automatic HTTPS redirect, configure www in dashboard
- **Cloudflare**: Page rules for redirects
- **nginx**: Server configuration

If application-level needed, add to middleware:

```typescript
if (req.headers.get("x-forwarded-proto") !== "https") {
  const url = req.nextUrl.clone()
  url.protocol = "https"
  return NextResponse.redirect(url, 308)
}
```

5. **Product slug migration system:**

Consider implementing a redirect lookup table:

```typescript
// src/lib/redirects.ts
const slugRedirects: Record<string, string> = {
  "old-product-slug": "new-product-slug",
  "discontinued-item": "replacement-item",
}

// Use in middleware or generateStaticParams
```

---

## Section 1: Summary

| Subsection         | Items  | ✅ Pass | ❌ Fail | ⚠️ Warn | ⬜ N/A |
| ------------------ | ------ | ------- | ------- | ------- | ------ |
| 1.1 Robots.txt     | 7      | 3       | 2       | 1       | 1      |
| 1.2 XML Sitemap    | 17     | 10      | 0       | 5       | 0      |
| 1.3 Meta Robots    | 10     | 10      | 0       | 0       | 0      |
| 1.4 Canonical Tags | 11     | 5       | 2       | 3       | 0      |
| 1.5 Redirects      | 8      | 2       | 2       | 3       | 1      |
| **TOTAL**          | **53** | **30**  | **6**   | **12**  | **2**  |

**Section 1 Score: 30/50 (60%) - Needs Improvement**

**Critical Issues to Address:**

1. Add `Disallow` directives to robots.txt for API routes and staging
2. Add canonical tags to 13+ missing pages
3. Resolve duplicate URL pairs with redirects or cross-canonicals
4. Implement case-insensitive URL handling

---

## Section 2: URL Structure & Architecture

_Pending audit..._

---

## Section 3: On-Page SEO Elements

_Pending audit..._

---

## Section 4: Technical SEO

_Pending audit..._

---

## Section 5: Core Web Vitals & Performance

_Pending audit..._

---

## Section 6: Structured Data & Schema

_Pending audit..._

---

## Section 7: Mobile SEO

_Pending audit..._

---

## Section 8: Content & E-E-A-T

_Pending audit..._

---

## Section 9: E-commerce Specific SEO

_Pending audit..._

---

## Section 10: International & Local SEO

_Pending audit..._

---

## Section 11: Security & Trust

_Pending audit..._

---

## Section 12: Social & Sharing

_Pending audit..._

---

## Section 13: Analytics & Monitoring

_Pending audit..._

---

## Appendix A: Files Reviewed

| File                                        | Purpose                          |
| ------------------------------------------- | -------------------------------- |
| `src/app/robots.txt/route.ts`               | Robots.txt generation            |
| `src/app/sitemap.ts`                        | Main sitemap entry               |
| `src/sitemaps/static-pages-sitemap.ts`      | Static page URLs                 |
| `src/sitemaps/dynamic-pages-sitemap.ts`     | Dynamic content URLs             |
| `src/app/layout.tsx`                        | Root layout with metadata        |
| `src/middleware.ts`                         | Route protection & redirects     |
| `next.config.ts`                            | Next.js configuration            |
| `src/app/page.tsx`                          | Homepage                         |
| `src/app/product/[id]/page.tsx`             | Product detail page              |
| `src/app/category/[slug]/page.tsx`          | Category page                    |
| `src/app/brand/[id]/page.tsx`               | Brand page                       |
| `src/app/blog/page.tsx`                     | Blog index                       |
| `src/app/blog/[slug]/page.tsx`              | Blog post                        |
| `src/app/products/all/page.tsx`             | All products page                |
| `src/app/cart/layout.tsx`                   | Cart layout (noindex)            |
| `src/app/checkout/layout.tsx`               | Checkout layout (noindex)        |
| `src/app/account/layout.tsx`                | Account layout (noindex)         |
| `src/app/search/layout.tsx`                 | Search layout (noindex)          |
| `src/app/(auth)/layout.tsx`                 | Auth layout (noindex)            |
| `src/app/not-found.tsx`                     | 404 page                         |
| `src/app/components/seo/PaginationHead.tsx` | Pagination SEO component         |
| `src/app/about/page.tsx`                    | About page (missing canonical)   |
| `src/app/privacy-policy/page.tsx`           | Privacy page (missing canonical) |
| `src/app/terms-and-conditions/page.tsx`     | Terms page (missing canonical)   |
| `src/app/contact-us/page.tsx`               | Contact page (missing metadata)  |
| `src/app/brands/page.tsx`                   | Brands page (missing metadata)   |
| `src/app/[slug]/page.tsx`                   | Dynamic CMS pages                |

---

## Appendix B: Summary Statistics

| Section                 | Total Items | Passed | Failed | Warnings | N/A   | Completion |
| ----------------------- | ----------- | ------ | ------ | -------- | ----- | ---------- |
| 1.1 Robots.txt          | 7           | 3      | 2      | 1        | 1     | 100%       |
| 1.2 XML Sitemap         | 17          | 10     | 0      | 5        | 0     | 100%       |
| 1.3 Meta Robots         | 10          | 10     | 0      | 0        | 0     | 100%       |
| 1.4 Canonical Tags      | 11          | 5      | 2      | 3        | 0     | 100%       |
| 1.5 Redirects           | 8           | 2      | 2      | 3        | 1     | 100%       |
| **Section 1 Total**     | **53**      | **30** | **6**  | **12**   | **2** | **100%**   |
| 2. URL Structure        | 12          | -      | -      | -        | -     | 0%         |
| 3. On-Page SEO          | 38          | -      | -      | -        | -     | 0%         |
| 4. Technical SEO        | 19          | -      | -      | -        | -     | 0%         |
| 5. Core Web Vitals      | 17          | -      | -      | -        | -     | 0%         |
| 6. Structured Data      | 25          | -      | -      | -        | -     | 0%         |
| 7. Mobile SEO           | 11          | -      | -      | -        | -     | 0%         |
| 8. Content & E-E-A-T    | 11          | -      | -      | -        | -     | 0%         |
| 9. E-commerce SEO       | 14          | -      | -      | -        | -     | 0%         |
| 10. International/Local | 6           | -      | -      | -        | -     | 0%         |
| 11. Security & Trust    | 10          | -      | -      | -        | -     | 0%         |
| 12. Social & Sharing    | 7           | -      | -      | -        | -     | 0%         |
| 13. Analytics           | 10          | -      | -      | -        | -     | 0%         |
| **GRAND TOTAL**         | **233**     | **30** | **6**  | **12**   | **2** | **23%**    |
