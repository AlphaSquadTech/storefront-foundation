# SEO Audit Findings - Section 4: Technical SEO

**Audit Date:** 2026-01-26
**Platform:** Next.js 15 + Saleor GraphQL E-commerce Storefront
**Auditor:** Claude Code SEO Audit Tool

---

## Table of Contents

1. [Section Overview](#section-overview)
2. [4.1 Rendering & JavaScript](#41-rendering--javascript)
3. [4.2 HTTP Status Codes](#42-http-status-codes)
4. [4.3 Page Speed Factors](#43-page-speed-factors)
5. [4.4 Caching & ISR](#44-caching--isr)
6. [Section 4 Summary](#section-4-summary)
7. [Appendix A: Files Reviewed](#appendix-a-files-reviewed)
8. [Appendix B: Audit Statistics](#appendix-b-audit-statistics)

---

## Section Overview

**Section:** 4. Technical SEO
**Total Items:** 29
**Subsections:** 4
- 4.1 Rendering & JavaScript (T-001 to T-007) - 7 items
- 4.2 HTTP Status Codes (T-008 to T-013) - 6 items
- 4.3 Page Speed Factors (T-014 to T-024) - 11 items
- 4.4 Caching & ISR (T-025 to T-029) - 5 items

**Status:** ✅ **COMPLETE**

---

## 4.1 Rendering & JavaScript

### Audit Items

| ID | Check | Priority | Status | Finding |
|----|-------|----------|--------|---------|
| T-001 | Critical content renders server-side (SSR/SSG) | P0 | PASS | Product, category, blog pages use SSR with generateMetadata |
| T-002 | Content visible without JavaScript | P1 | WARN | Search page renders entirely client-side |
| T-003 | No client-side only rendering for SEO content | P0 | WARN | Search, contact pages are "use client" with SEO content |
| T-004 | Next.js Server Components used appropriately | P1 | PASS | 31 of 39 pages are Server Components |
| T-005 | Client components only for interactive elements | P1 | WARN | Contact page could use Server Component wrapper |
| T-006 | Hydration errors resolved | P1 | PASS | No evidence of hydration issues in code |
| T-007 | No render-blocking JavaScript | P1 | WARN | Authorize.net script loads synchronously |

### Detailed Analysis

#### T-001: Server-Side Rendering (PASS)

**Finding:** Critical SEO pages properly implement server-side rendering.

**Evidence:**
- Home page (`src/app/page.tsx`): Server Component with Suspense boundaries
- Product pages (`src/app/product/[id]/page.tsx`): Uses `generateMetadata()` and SSR data fetching
- Category pages (`src/app/category/[slug]/page.tsx`): SSR with `initialData` passed to client
- Blog pages: Server-side rendering for blog content

**Pattern Used:**
```typescript
// Product page example - proper SSR
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(slug);
  return { title: product.name, description: ... };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(slug);
  return <ProductDetailClient initialData={product} />;
}
```

#### T-002/T-003: Client-Side Only Rendering (WARN)

**Finding:** Some pages with potential SEO value render entirely client-side.

**Client Component Pages (8 of 39):**
| Page | Justification | SEO Impact |
|------|---------------|------------|
| `/search` | Data fetching client-side | HIGH - Search results not indexable |
| `/contact` | Form interactions | MEDIUM - Contact info could be SSR |
| `/locator` | Interactive map | LOW - Appropriate for functionality |
| `/checkout` | Private transaction | NONE - Should not be indexed |
| `/account/*` (5 pages) | Private user data | NONE - Should not be indexed |

**Critical Issue - Search Page:**
```typescript
// src/app/search/page.tsx
"use client";  // <-- Entire page is client-rendered

export default function SearchPage() {
  // All product listings fetch client-side only
  // Search engines cannot see products
}
```

**Recommendation:** Implement hybrid approach for search page with server-side initial data.

#### T-004: Server Components Usage (PASS)

**Finding:** Good adoption of Server Components pattern.

**Statistics:**
- Server Components: 31 pages (79%)
- Client Components: 8 pages (21%)

**Server Component Pages Include:**
- Home page
- All product pages
- All category pages
- All brand pages
- Blog pages
- About, Privacy, Terms pages

#### T-005: Client Component Scope (WARN)

**Finding:** Some pages use full client rendering when only portions need interactivity.

**Contact Page Issue:**
The contact page (`src/app/contact/page.tsx`) is entirely client-rendered, but:
- Contact information could be SSR
- Only the form needs client interactivity

**Recommendation:**
```typescript
// Better pattern
export default async function ContactPage() {
  const contactInfo = await fetchContactInfo(); // SSR
  return (
    <>
      <ContactInfoSection data={contactInfo} /> {/* Server */}
      <ContactFormClient />  {/* Client */}
    </>
  );
}
```

#### T-006: Hydration Errors (PASS)

**Finding:** No evidence of hydration mismatches in the codebase.

**Good Practices Observed:**
- Server/client data consistency via `initialData` props
- Proper use of `useEffect` for client-only operations
- Date/time handling uses client-side rendering appropriately

#### T-007: Render-Blocking JavaScript (WARN)

**Finding:** One script loads synchronously, potentially blocking render.

**Issue in `src/app/components/analytics/AnalyticsScripts.tsx`:**
```typescript
// Line 22-29 - Authorize.net loads WITHOUT async
const acceptScript = document.createElement("script");
acceptScript.src = 'https://jstest.authorize.net/v1/Accept.js';
// Note: async was intentionally removed per comment
document.head.appendChild(acceptScript);
```

**Good Practices:**
- GTM script uses `async = true`
- AdSense script uses `async = true`
- Fonts use `display: "swap"` for FOIT prevention

**Font Loading (Good):**
```typescript
// src/app/layout.tsx
const archivo = Archivo({
  display: "swap",  // Prevents FOIT
  // ...
});
```

---

## 4.2 HTTP Status Codes

### Audit Items

| ID | Check | Priority | Status | Finding |
|----|-------|----------|--------|---------|
| T-008 | Valid pages return 200 | P0 | PASS | Static and dynamic pages return 200 correctly |
| T-009 | Not found pages return 404 | P0 | WARN | Product pages return 200 with "not found" content |
| T-010 | Custom 404 page exists | P1 | PASS | Well-designed 404 page at `/not-found.tsx` |
| T-011 | Server errors return 5xx | P1 | WARN | No global error.tsx - unhandled errors may show default |
| T-012 | No soft 404s (empty pages with 200) | P0 | FAIL | Product pages return 200 when product not found |
| T-013 | Out-of-stock products handled correctly | P1 | PASS | Out-of-stock products accessible with schema indication |

### Detailed Analysis

#### T-008: Valid Pages Return 200 (PASS)

**Finding:** Valid pages correctly return HTTP 200 status.

**Evidence:**
- Static pages (about, terms, etc.) serve normally
- Dynamic pages with valid slugs return 200
- Server components render without status code issues

#### T-009/T-012: Soft 404 Issue (FAIL - Critical)

**Finding:** Product pages return HTTP 200 with "Product Not Found" content instead of HTTP 404.

**Issue Location:** `src/app/product/[slug]/page.tsx`

```typescript
// Current behavior - SOFT 404
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: `Product Not Found | ${storeName}`,
      // Returns 200 status, not 404!
      robots: { index: false, follow: true }, // Relies on robots instead of 404
    };
  }
}
```

**SEO Impact:**
- Search engines see 200 status code
- Crawl budget wasted on non-existent products
- "noindex" is a hint, not a directive - some crawlers may ignore
- Proper 404 signals page removal more effectively

**Recommendation:**
```typescript
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }) {
  const product = await getProduct(slug);

  if (!product) {
    notFound(); // Triggers proper 404 response
  }
  // ...rest of component
}
```

**Good Example Found:** Dynamic pages DO use `notFound()` correctly:
```typescript
// src/app/[slug]/ClientDynamicPage.tsx - Line 25
if (response.status === 404) {
  notFound();
  return;
}
```

#### T-010: Custom 404 Page (PASS)

**Finding:** Well-designed custom 404 page exists.

**Location:** `src/app/not-found.tsx`

**Features:**
- Clear "404" indicator and "PAGE NOT FOUND" heading
- Helpful messaging explaining the issue
- Navigation links back to home and products
- Additional links to categories, brands, contact
- Proper metadata with `robots: { index: false, follow: true }`

```typescript
export const metadata: Metadata = {
  title: `Page Not Found | ${getStoreName()}`,
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: true, // Allow following outbound links
  },
};
```

#### T-011: Server Errors (WARN)

**Finding:** No global error boundary exists.

**Missing Files:**
- `src/app/error.tsx` - Route segment error boundary
- `src/app/global-error.tsx` - Root error boundary

**Current State:**
- API routes properly return 500 on errors:
```typescript
// src/app/api/dynamic-page/[slug]/route.ts
catch (error) {
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
}
```

**Risk:**
- Unhandled errors in pages may show Next.js default error UI
- Poor user experience on server errors
- No custom branding on error pages

**Recommendation:** Add error boundaries:
```typescript
// src/app/error.tsx
'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

#### T-013: Out-of-Stock Products (PASS)

**Finding:** Out-of-stock products are handled correctly for SEO.

**Implementation:** `src/app/product/[slug]/page.tsx:117-121`

```typescript
const availability =
  firstVariant?.quantityAvailable && firstVariant.quantityAvailable > 0
    ? "InStock"
    : "OutOfStock";

productSchema = generateProductSchema({
  // ...
  availability, // Passed to schema.org
});
```

**Good Practices:**
- Products remain accessible (no 404 for OOS)
- Schema.org indicates `OutOfStock` availability
- Users can still see product info
- Allows for "back in stock" notifications

---

## 4.3 Page Speed Factors

### Audit Items

| ID | Check | Priority | Status | Finding |
|----|-------|----------|--------|---------|
| T-014 | Images optimized (compression) | P0 | PASS | Next.js Image with quality settings (70-75%) |
| T-015 | Modern image formats (WebP/AVIF) | P1 | PASS | Next.js auto-converts to WebP/AVIF |
| T-016 | Images lazy-loaded below fold | P1 | PASS | Proper priority/lazy loading patterns |
| T-017 | Critical CSS inlined | P2 | PASS | Tailwind CSS 4 with PostCSS handles this |
| T-018 | JavaScript minified | P1 | PASS | Next.js production build minifies JS |
| T-019 | CSS minified | P1 | PASS | Next.js production build minifies CSS |
| T-020 | Gzip/Brotli compression enabled | P1 | N/A | Depends on hosting provider configuration |
| T-021 | Browser caching configured | P1 | WARN | Only Apple Pay file has explicit cache headers |
| T-022 | CDN used for static assets | P2 | PASS | DNS prefetch hints for S3 buckets configured |
| T-023 | Font files optimized | P2 | PASS | Google Fonts with display:swap |
| T-024 | Third-party scripts async/defer | P1 | WARN | Accept.js loads synchronously |

### Detailed Analysis

#### T-014: Image Compression (PASS)

**Finding:** Images are properly compressed via Next.js Image component.

**Implementation:**
```typescript
// Hero image - src/app/components/showroom/heroClientRenderer.tsx
<Image
  src={imageSrc}
  quality={70}  // Good compression
  sizes="100vw"
  // ...
/>

// Promotion images - loading="lazy" with quality
<Image
  quality={75}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
  // ...
/>
```

**Components Using Next.js Image (28+ files):**
- ProductCard, CategoryCard, BrandCard
- HeroClientRenderer, PromotionSlider
- Footer, CartDropdown, OrderSummary
- All major visual components

#### T-015: Modern Image Formats (PASS)

**Finding:** Next.js automatically serves WebP/AVIF based on browser support.

**Configuration in `next.config.ts`:**
```typescript
images: {
  remotePatterns: [
    // Multiple S3 buckets and CDN sources configured
    { protocol: "https", hostname: "wsmsaleormedia.s3.us-east-1.amazonaws.com" },
    { protocol: "https", hostname: "wsm-saleor-assets.s3.us-west-2.amazonaws.com" },
    // ... 20+ remote patterns
  ],
}
```

**Fallback Pattern:**
```typescript
// Uses WebP fallback
const imageSrc = src?.trim() || "/images/heroSection-fallback.webp";
```

#### T-016: Lazy Loading (PASS)

**Finding:** Proper lazy loading implementation with priority for above-fold content.

**Above-Fold (Priority):**
```typescript
// Hero image - high priority for LCP
<Image
  priority
  loading="eager"
  fetchPriority="high"
  // ...
/>

// Features strip - priority images
<Image priority ... />
```

**Below-Fold (Lazy):**
```typescript
// Product cards - lazy loaded
<Image priority={false} ... />

// Promotion slider - lazy loaded
<Image loading="lazy" ... />
```

#### T-017/T-018/T-019: CSS/JS Optimization (PASS)

**Finding:** Build tooling handles CSS and JavaScript optimization.

**Stack:**
- Next.js 15.4.10 with Turbopack
- Tailwind CSS 4.1.11
- PostCSS with @tailwindcss/postcss

**Production Build Features:**
- Tree shaking for unused code
- CSS purging for unused styles
- JS minification
- Code splitting per route

#### T-020: Compression (N/A - Hosting Dependent)

**Finding:** Compression depends on hosting provider (Vercel, AWS, etc.).

**Status:** Cannot be verified from codebase alone.

#### T-021: Browser Caching (WARN)

**Finding:** Limited explicit cache header configuration.

**Only Cache Header Found:**
```typescript
// next.config.ts - Apple Pay file only
{
  source: '/.well-known/apple-developer-merchantid-domain-association',
  headers: [
    { key: 'Cache-Control', value: 'public, max-age=3600' },
  ],
}
```

**Missing:**
- No explicit cache headers for static assets
- Next.js defaults may be sufficient, but explicit headers recommended

#### T-022: CDN Usage (PASS)

**Finding:** DNS prefetch hints configured for CDN/S3 buckets.

**Implementation in `src/app/layout.tsx`:**
```typescript
<link rel="dns-prefetch" href="https://wsmsaleormedia.s3.us-east-1.amazonaws.com" />
<link rel="dns-prefetch" href="https://wsm-saleor-assets.s3.us-west-2.amazonaws.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

#### T-023: Font Optimization (PASS)

**Finding:** Fonts properly optimized with Google Fonts loader.

**Implementation in `src/app/layout.tsx`:**
```typescript
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",  // Prevents FOIT
  variable: "--font-archivo",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",  // Prevents FOIT
  variable: "--font-days-one",
});
```

**Good Practices:**
- `display: "swap"` prevents Flash of Invisible Text
- Subsets limited to "latin" reduces file size
- CSS variables for consistent usage

#### T-024: Third-Party Scripts (WARN)

**Finding:** Most scripts load asynchronously, but Accept.js loads synchronously.

**Async Loading (Good):**
```typescript
// src/app/components/analytics/AnalyticsScripts.tsx
gtmScript.async = true;  // GTM
adSenseScript.async = true;  // AdSense
```

**Synchronous Loading (Issue):**
```typescript
// Accept.js - Line 20-29
// This loads synchronously (without async) to ensure it's available immediately
const acceptScript = document.createElement("script");
acceptScript.src = 'https://jstest.authorize.net/v1/Accept.js';
// Removed async to load synchronously for faster availability
document.head.appendChild(acceptScript);
```

**Impact:** Accept.js loading synchronously can delay page interactivity. Consider:
- Loading only on checkout page
- Using dynamic import with loading indicator
- Implementing intersection observer to load when payment section visible

---

## 4.4 Caching & ISR

### Audit Items

| ID | Check | Priority | Status | Finding |
|----|-------|----------|--------|---------|
| T-025 | Static pages pre-rendered (SSG) | P1 | PASS | Static pages (about, terms, etc.) use default SSG |
| T-026 | Dynamic pages use ISR appropriately | P1 | WARN | Some pages could use ISR instead of force-dynamic |
| T-027 | No unnecessary force-dynamic | P1 | WARN | Product/category pages use force-dynamic when ISR would work |
| T-028 | Revalidation times appropriate | P2 | PASS | Good variety of revalidation times (60s to 1hr) |
| T-029 | Cache headers set correctly | P2 | WARN | Limited explicit cache headers in next.config.ts |

### Detailed Analysis

#### T-025: Static Pages (PASS)

**Finding:** Informational pages correctly use static generation.

**Static Pages (No Dynamic Export):**
- `/about/page.tsx` - Static content
- `/terms-and-conditions/page.tsx` - Static content
- `/privacy-policy/page.tsx` - Static content
- `/warranty/page.tsx` - Static content
- `/shipping-returns/page.tsx` - Static content
- `/frequently-asked-questions/page.tsx` - Static content

These pages will be pre-rendered at build time, providing optimal performance.

#### T-026/T-027: Force-Dynamic Usage (WARN)

**Finding:** Several pages use `force-dynamic` that could potentially use ISR.

**Pages Using force-dynamic:**

| Page | force-dynamic? | Alternative |
|------|---------------|-------------|
| `/product/[slug]` | Yes | Could use ISR with 60-300s revalidation |
| `/category/[slug]` | Yes | Could use ISR with 60-300s revalidation |
| `/brand/[slug]` | Yes | Could use ISR with 300-600s revalidation |
| `/search` | Yes | Appropriate (user-specific queries) |
| `/[slug]` (dynamic pages) | Yes | Could use ISR with 300s revalidation |

**Current Implementation:**
```typescript
// src/app/product/[slug]/page.tsx
export const dynamic = "force-dynamic";  // Forces SSR on every request

// src/app/category/[slug]/page.tsx
export const dynamic = "force-dynamic";
```

**Recommendation - Use ISR:**
```typescript
// Better approach for product pages
export const revalidate = 300; // Revalidate every 5 minutes

// Or with on-demand revalidation
export async function generateStaticParams() {
  const products = await getTopProducts();
  return products.map((p) => ({ slug: p.slug }));
}
```

**Trade-offs:**
- force-dynamic: Always fresh data, higher server load, slower TTFB
- ISR: Cached data (acceptable for most e-commerce), lower server load, faster TTFB

#### T-028: Revalidation Times (PASS)

**Finding:** Components using ISR have appropriate revalidation times.

**Current Revalidation Configuration:**

| Component/Route | Revalidation | Purpose |
|-----------------|--------------|---------|
| `fetchProductsServer` | 60s | Product listings (frequent updates) |
| Brands page | 3600s (1hr) | Brand list (infrequent changes) |
| About Us section | 600s (10min) | CMS content |
| Brands Swiper | 3600s (1hr) | Featured brands |
| Blog queries | 600s (10min) | Blog posts |

**Good Pattern Found:**
```typescript
// src/lib/api/fetchProductsServer.ts
const response = await fetch(searchUrl, {
  next: { revalidate: 60 }, // Appropriate for product data
});

// src/app/brands/page.tsx
const response = await fetch(url, {
  next: { revalidate: 3600 }, // Good for static brand list
});
```

#### T-029: Cache Headers (WARN)

**Finding:** Limited explicit cache header configuration beyond security headers.

**Currently Configured:**
```typescript
// next.config.ts
async headers() {
  return [
    // Security headers only
    {
      source: '/:path*',
      headers: securityHeaders, // No cache headers
    },
    // Apple Pay file with explicit cache
    {
      source: '/.well-known/apple-developer-merchantid-domain-association',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600' },
      ],
    },
  ];
}
```

**Missing Cache Headers:**
- Static assets (images, fonts, JS, CSS)
- API routes
- Page responses

**Recommended Addition:**
```typescript
// Add to next.config.ts headers()
{
  source: '/images/:path*',
  headers: [
    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
  ],
},
{
  source: '/_next/static/:path*',
  headers: [
    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
  ],
},
```

**Note:** Next.js does set good default cache headers for static assets. Explicit headers provide more control and are recommended for production optimization.

---

## Section 4 Summary

### Results Overview

Section 4: Technical SEO has been audited across 4 subsections with 29 total checks.

| Subsection | Result |
|------------|--------|
| 4.1 Rendering & JavaScript | 3 PASS, 4 WARN |
| 4.2 HTTP Status Codes | 3 PASS, 2 WARN, 1 FAIL |
| 4.3 Page Speed Factors | 8 PASS, 2 WARN, 1 N/A |
| 4.4 Caching & ISR | 2 PASS, 3 WARN |

### Critical Issues

1. **CRITICAL - Soft 404 on Product Pages (T-012)**
   - Product pages return HTTP 200 when product not found
   - Should use `notFound()` to return proper 404
   - **Impact:** Crawl budget wasted, improper index signals

2. **HIGH - Search Page Client-Only Rendering (T-002/T-003)**
   - Search results render entirely client-side
   - Search engines cannot see product listings
   - **Impact:** Search results page not indexable

3. **MEDIUM - Missing Error Boundaries (T-011)**
   - No `error.tsx` or `global-error.tsx`
   - Server errors show default Next.js UI
   - **Impact:** Poor user experience on errors

### Key Recommendations

1. **Fix Soft 404s:**
   ```typescript
   // In product page
   if (!product) {
     notFound(); // Instead of returning noindex metadata
   }
   ```

2. **Add Error Boundaries:**
   - Create `src/app/error.tsx` for route errors
   - Create `src/app/global-error.tsx` for root errors

3. **Consider ISR for Product Pages:**
   - Replace `force-dynamic` with `revalidate = 300`
   - Improves TTFB and reduces server load

4. **Load Accept.js Conditionally:**
   - Only load on checkout page
   - Or use async loading with user interaction trigger

### Good Practices Identified

- Excellent image optimization with Next.js Image component
- Proper lazy loading patterns (priority for above-fold)
- Good font optimization with display:swap
- Appropriate revalidation times for ISR
- Strong security headers configured

---

## Appendix A: Files Reviewed

### Core Configuration
- `next.config.ts` - Next.js configuration
- `package.json` - Dependencies and scripts
- `postcss.config.mjs` - PostCSS configuration
- `src/middleware.ts` - Route middleware

### Page Files
- `src/app/page.tsx` - Home page
- `src/app/product/[slug]/page.tsx` - Product page
- `src/app/category/[slug]/page.tsx` - Category page
- `src/app/search/page.tsx` - Search page
- `src/app/not-found.tsx` - 404 page
- `src/app/layout.tsx` - Root layout
- `src/app/[slug]/page.tsx` - Dynamic pages

### Component Files
- `src/app/components/analytics/AnalyticsScripts.tsx`
- `src/app/components/showroom/heroClientRenderer.tsx`
- `src/app/components/showroom/promotion-slider.tsx`
- `src/app/components/reuseableUI/ImageWithFallback.tsx`
- `src/app/[slug]/ClientDynamicPage.tsx`

### API Routes
- `src/app/api/dynamic-page/[slug]/route.ts`

### Library Files
- `src/lib/api/fetchProductsServer.ts`
- `src/graphql/queries/getBlogs.ts`

---

## Appendix B: Audit Statistics

| Subsection | Total | Pass | Fail | Warn | N/A |
|------------|-------|------|------|------|-----|
| 4.1 Rendering & JavaScript | 7 | 3 | 0 | 4 | 0 |
| 4.2 HTTP Status Codes | 6 | 3 | 1 | 2 | 0 |
| 4.3 Page Speed Factors | 11 | 8 | 0 | 2 | 1 |
| 4.4 Caching & ISR | 5 | 2 | 0 | 3 | 0 |
| **Total** | **29** | **16** | **1** | **11** | **1** |

### Priority Distribution

| Priority | Total | Pass | Fail | Warn | N/A |
|----------|-------|------|------|------|-----|
| P0 (Critical) | 5 | 3 | 1 | 1 | 0 |
| P1 (High) | 18 | 9 | 0 | 9 | 0 |
| P2 (Medium) | 6 | 4 | 0 | 1 | 1 |

### Issue Summary by Severity

| Severity | Count | IDs |
|----------|-------|-----|
| FAIL | 1 | T-012 |
| WARN | 11 | T-002, T-003, T-005, T-007, T-009, T-011, T-021, T-024, T-026, T-027, T-029 |
| N/A | 1 | T-020 |
