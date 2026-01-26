# SEO Best Practices Audit Checklist

**Purpose:** Comprehensive SEO audit framework for e-commerce storefronts
**Template:** Next.js 15 + Saleor GraphQL + Automotive Parts
**Priority Levels:** P0 (Critical), P1 (High), P2 (Medium), P3 (Low)

---

## Table of Contents

1. [Crawlability & Indexation](#1-crawlability--indexation)
2. [URL Structure & Architecture](#2-url-structure--architecture)
3. [On-Page SEO Elements](#3-on-page-seo-elements)
4. [Technical SEO](#4-technical-seo)
5. [Core Web Vitals & Performance](#5-core-web-vitals--performance)
6. [Structured Data & Schema](#6-structured-data--schema)
7. [Mobile SEO](#7-mobile-seo)
8. [Content & E-E-A-T](#8-content--e-e-a-t)
9. [E-commerce Specific SEO](#9-e-commerce-specific-seo)
10. [International & Local SEO](#10-international--local-seo)
11. [Security & Trust](#11-security--trust)
12. [Social & Sharing](#12-social--sharing)
13. [Analytics & Monitoring](#13-analytics--monitoring)

---

## 1. Crawlability & Indexation

### 1.1 Robots.txt

| ID    | Check                                                   | Priority | Status | Notes |
| ----- | ------------------------------------------------------- | -------- | ------ | ----- |
| C-001 | Robots.txt file exists and is accessible at /robots.txt | P0       | ⬜     |       |
| C-002 | No unintentional blocking of important pages            | P0       | ⬜     |       |
| C-003 | Sitemap URL referenced in robots.txt                    | P1       | ⬜     |       |
| C-004 | Crawl-delay directive appropriate (if used)             | P2       | ⬜     |       |
| C-005 | Test/staging environments blocked                       | P1       | ⬜     |       |
| C-006 | API routes blocked from crawling                        | P2       | ⬜     |       |
| C-007 | Internal search result pages handled                    | P2       | ⬜     |       |

### 1.2 XML Sitemap

| ID    | Check                                         | Priority | Status | Notes |
| ----- | --------------------------------------------- | -------- | ------ | ----- |
| C-008 | XML sitemap exists at /sitemap.xml            | P0       | ⬜     |       |
| C-009 | Sitemap is valid XML format                   | P0       | ⬜     |       |
| C-010 | All indexable pages included in sitemap       | P0       | ⬜     |       |
| C-011 | No noindex pages in sitemap                   | P0       | ⬜     |       |
| C-012 | No redirecting URLs in sitemap                | P1       | ⬜     |       |
| C-013 | No 404/error pages in sitemap                 | P0       | ⬜     |       |
| C-014 | Sitemap uses canonical URLs only              | P0       | ⬜     |       |
| C-015 | lastmod dates are accurate                    | P2       | ⬜     |       |
| C-016 | changefreq values are appropriate             | P3       | ⬜     |       |
| C-017 | priority values are set strategically         | P3       | ⬜     |       |
| C-018 | Sitemap index for large sites (>50k URLs)     | P2       | ⬜     |       |
| C-019 | Dynamic product pages in sitemap              | P0       | ⬜     |       |
| C-020 | Dynamic category pages in sitemap             | P0       | ⬜     |       |
| C-021 | Blog/content pages in sitemap                 | P1       | ⬜     |       |
| C-022 | Transactional pages excluded (cart, checkout) | P0       | ⬜     |       |
| C-023 | Auth pages excluded (login, register)         | P1       | ⬜     |       |
| C-024 | Account pages excluded                        | P1       | ⬜     |       |

### 1.3 Meta Robots & Indexation

| ID    | Check                                               | Priority | Status | Notes |
| ----- | --------------------------------------------------- | -------- | ------ | ----- |
| C-025 | Important pages have index,follow (default)         | P0       | ⬜     |       |
| C-026 | Cart page has noindex                               | P0       | ⬜     |       |
| C-027 | Checkout pages have noindex                         | P0       | ⬜     |       |
| C-028 | Account pages have noindex                          | P1       | ⬜     |       |
| C-029 | Order confirmation has noindex                      | P0       | ⬜     |       |
| C-030 | Search results page strategy defined                | P1       | ⬜     |       |
| C-031 | Filtered/sorted URLs handled (noindex or canonical) | P0       | ⬜     |       |
| C-032 | Pagination handled correctly                        | P1       | ⬜     |       |
| C-033 | No X-Robots-Tag conflicts                           | P2       | ⬜     |       |
| C-034 | Payment callback pages have noindex                 | P1       | ⬜     |       |

### 1.4 Canonical Tags

| ID    | Check                                               | Priority | Status | Notes |
| ----- | --------------------------------------------------- | -------- | ------ | ----- |
| C-035 | All indexable pages have canonical tags             | P0       | ⬜     |       |
| C-036 | Canonical tags are self-referencing on unique pages | P0       | ⬜     |       |
| C-037 | Canonical tags use absolute URLs                    | P0       | ⬜     |       |
| C-038 | metadataBase configured in Next.js                  | P0       | ⬜     |       |
| C-039 | HTTP canonicals point to HTTPS                      | P0       | ⬜     |       |
| C-040 | www vs non-www consistency                          | P0       | ⬜     |       |
| C-041 | Trailing slash consistency                          | P1       | ⬜     |       |
| C-042 | Query parameters handled in canonicals              | P1       | ⬜     |       |
| C-043 | Pagination canonicals correct                       | P1       | ⬜     |       |
| C-044 | Filtered URLs canonical to main page                | P1       | ⬜     |       |
| C-045 | Duplicate content has cross-canonicals              | P1       | ⬜     |       |

### 1.5 Redirects

| ID    | Check                                   | Priority | Status | Notes |
| ----- | --------------------------------------- | -------- | ------ | ----- |
| C-046 | Permanent redirects use 301 or 308      | P0       | ⬜     |       |
| C-047 | No redirect chains (max 1 hop)          | P1       | ⬜     |       |
| C-048 | No redirect loops                       | P0       | ⬜     |       |
| C-049 | Old URLs redirect to new (slug changes) | P1       | ⬜     |       |
| C-050 | HTTP to HTTPS redirect                  | P0       | ⬜     |       |
| C-051 | Non-www to www (or vice versa) redirect | P1       | ⬜     |       |
| C-052 | Trailing slash normalization            | P2       | ⬜     |       |
| C-053 | Case-sensitivity handled (lowercase)    | P2       | ⬜     |       |

---

## 2. URL Structure & Architecture

### 2.1 URL Best Practices

| ID    | Check                                | Priority | Status | Notes |
| ----- | ------------------------------------ | -------- | ------ | ----- |
| U-001 | URLs are human-readable              | P1       | ⬜     |       |
| U-002 | URLs use hyphens (not underscores)   | P1       | ⬜     |       |
| U-003 | URLs are lowercase                   | P1       | ⬜     |       |
| U-004 | URLs are concise (under 100 chars)   | P2       | ⬜     |       |
| U-005 | URLs contain relevant keywords       | P1       | ⬜     |       |
| U-006 | No session IDs in URLs               | P0       | ⬜     |       |
| U-007 | No unnecessary parameters            | P1       | ⬜     |       |
| U-008 | Consistent URL structure across site | P1       | ⬜     |       |
| U-009 | Product URLs use slugs (not IDs)     | P1       | ⬜     |       |
| U-010 | Category URLs use slugs              | P1       | ⬜     |       |
| U-011 | Blog URLs use slugs                  | P1       | ⬜     |       |

### 2.2 Site Architecture

| ID    | Check                                         | Priority | Status | Notes |
| ----- | --------------------------------------------- | -------- | ------ | ----- |
| U-012 | Important pages within 3 clicks of homepage   | P1       | ⬜     |       |
| U-013 | Logical URL hierarchy                         | P1       | ⬜     |       |
| U-014 | Flat architecture for products (not too deep) | P1       | ⬜     |       |
| U-015 | No orphan pages (all pages linked)            | P1       | ⬜     |       |
| U-016 | Clear navigation structure                    | P1       | ⬜     |       |
| U-017 | Breadcrumb navigation present                 | P1       | ⬜     |       |
| U-018 | Category hierarchy is logical                 | P1       | ⬜     |       |
| U-019 | Faceted navigation SEO handled                | P1       | ⬜     |       |

---

## 3. On-Page SEO Elements

### 3.1 Title Tags

| ID    | Check                                    | Priority | Status | Notes |
| ----- | ---------------------------------------- | -------- | ------ | ----- |
| O-001 | Every page has a unique title tag        | P0       | ⬜     |       |
| O-002 | Titles are 50-60 characters              | P1       | ⬜     |       |
| O-003 | Primary keyword near beginning of title  | P1       | ⬜     |       |
| O-004 | Brand name in title (usually at end)     | P2       | ⬜     |       |
| O-005 | No duplicate titles across pages         | P0       | ⬜     |       |
| O-006 | Titles are compelling (encourage clicks) | P1       | ⬜     |       |
| O-007 | Product titles include product name      | P0       | ⬜     |       |
| O-008 | Category titles include category name    | P0       | ⬜     |       |
| O-009 | Homepage title is optimized              | P0       | ⬜     |       |
| O-010 | generateMetadata used for dynamic pages  | P0       | ⬜     |       |

### 3.2 Meta Descriptions

| ID    | Check                                     | Priority | Status | Notes |
| ----- | ----------------------------------------- | -------- | ------ | ----- |
| O-011 | Every page has a meta description         | P1       | ⬜     |       |
| O-012 | Descriptions are 150-160 characters       | P1       | ⬜     |       |
| O-013 | Descriptions include primary keyword      | P1       | ⬜     |       |
| O-014 | Descriptions are unique per page          | P1       | ⬜     |       |
| O-015 | Descriptions include call-to-action       | P2       | ⬜     |       |
| O-016 | Product descriptions mention key features | P1       | ⬜     |       |
| O-017 | Category descriptions are compelling      | P1       | ⬜     |       |
| O-018 | No auto-generated/templated descriptions  | P2       | ⬜     |       |

### 3.3 Heading Structure

| ID    | Check                                          | Priority | Status | Notes |
| ----- | ---------------------------------------------- | -------- | ------ | ----- |
| O-019 | Every page has exactly one H1                  | P0       | ⬜     |       |
| O-020 | H1 contains primary keyword                    | P0       | ⬜     |       |
| O-021 | H1 is visible (not hidden)                     | P0       | ⬜     |       |
| O-022 | Heading hierarchy is logical (H1→H2→H3)        | P1       | ⬜     |       |
| O-023 | No skipped heading levels                      | P2       | ⬜     |       |
| O-024 | Headings use semantic HTML (not styled divs/p) | P0       | ⬜     |       |
| O-025 | Subheadings describe content sections          | P1       | ⬜     |       |
| O-026 | Product pages have product name as H1          | P0       | ⬜     |       |
| O-027 | Category pages have category name as H1        | P0       | ⬜     |       |

### 3.4 Content Optimization

| ID    | Check                                  | Priority | Status | Notes |
| ----- | -------------------------------------- | -------- | ------ | ----- |
| O-028 | Primary keyword in first 100 words     | P1       | ⬜     |       |
| O-029 | Related keywords used naturally        | P2       | ⬜     |       |
| O-030 | Content is sufficient depth (not thin) | P1       | ⬜     |       |
| O-031 | Content is unique (not duplicated)     | P0       | ⬜     |       |
| O-032 | Product descriptions are unique        | P1       | ⬜     |       |
| O-033 | Category pages have unique content     | P1       | ⬜     |       |

### 3.5 Images

| ID    | Check                                    | Priority | Status | Notes |
| ----- | ---------------------------------------- | -------- | ------ | ----- |
| O-034 | All images have alt attributes           | P0       | ⬜     |       |
| O-035 | Alt text is descriptive                  | P1       | ⬜     |       |
| O-036 | Alt text includes relevant keywords      | P2       | ⬜     |       |
| O-037 | Image filenames are descriptive          | P2       | ⬜     |       |
| O-038 | Decorative images have empty alt=""      | P2       | ⬜     |       |
| O-039 | Product images have product-specific alt | P1       | ⬜     |       |
| O-040 | No missing alt attributes                | P0       | ⬜     |       |

### 3.6 Internal Linking

| ID    | Check                                          | Priority | Status | Notes |
| ----- | ---------------------------------------------- | -------- | ------ | ----- |
| O-041 | Internal links use descriptive anchor text     | P1       | ⬜     |       |
| O-042 | Important pages have adequate internal links   | P1       | ⬜     |       |
| O-043 | No broken internal links                       | P0       | ⬜     |       |
| O-044 | Related products are linked                    | P1       | ⬜     |       |
| O-045 | Breadcrumbs provide internal links             | P1       | ⬜     |       |
| O-046 | Footer includes important page links           | P2       | ⬜     |       |
| O-047 | Navigation provides clear linking              | P1       | ⬜     |       |
| O-048 | No excessive links per page (reasonable count) | P2       | ⬜     |       |

---

## 4. Technical SEO

### 4.1 Rendering & JavaScript

| ID    | Check                                           | Priority | Status | Notes |
| ----- | ----------------------------------------------- | -------- | ------ | ----- |
| T-001 | Critical content renders server-side (SSR/SSG)  | P0       | ⬜     |       |
| T-002 | Content visible without JavaScript              | P1       | ⬜     |       |
| T-003 | No client-side only rendering for SEO content   | P0       | ⬜     |       |
| T-004 | Next.js Server Components used appropriately    | P1       | ⬜     |       |
| T-005 | Client components only for interactive elements | P1       | ⬜     |       |
| T-006 | Hydration errors resolved                       | P1       | ⬜     |       |
| T-007 | No render-blocking JavaScript                   | P1       | ⬜     |       |

### 4.2 HTTP Status Codes

| ID    | Check                                   | Priority | Status | Notes |
| ----- | --------------------------------------- | -------- | ------ | ----- |
| T-008 | Valid pages return 200                  | P0       | ⬜     |       |
| T-009 | Not found pages return 404              | P0       | ⬜     |       |
| T-010 | Custom 404 page exists                  | P1       | ⬜     |       |
| T-011 | Server errors return 5xx                | P1       | ⬜     |       |
| T-012 | No soft 404s (empty pages with 200)     | P0       | ⬜     |       |
| T-013 | Out-of-stock products handled correctly | P1       | ⬜     |       |

### 4.3 Page Speed Factors

| ID    | Check                            | Priority | Status | Notes |
| ----- | -------------------------------- | -------- | ------ | ----- |
| T-014 | Images optimized (compression)   | P0       | ⬜     |       |
| T-015 | Modern image formats (WebP/AVIF) | P1       | ⬜     |       |
| T-016 | Images lazy-loaded below fold    | P1       | ⬜     |       |
| T-017 | Critical CSS inlined             | P2       | ⬜     |       |
| T-018 | JavaScript minified              | P1       | ⬜     |       |
| T-019 | CSS minified                     | P1       | ⬜     |       |
| T-020 | Gzip/Brotli compression enabled  | P1       | ⬜     |       |
| T-021 | Browser caching configured       | P1       | ⬜     |       |
| T-022 | CDN used for static assets       | P2       | ⬜     |       |
| T-023 | Font files optimized             | P2       | ⬜     |       |
| T-024 | Third-party scripts async/defer  | P1       | ⬜     |       |

### 4.4 Caching & ISR

| ID    | Check                               | Priority | Status | Notes |
| ----- | ----------------------------------- | -------- | ------ | ----- |
| T-025 | Static pages pre-rendered (SSG)     | P1       | ⬜     |       |
| T-026 | Dynamic pages use ISR appropriately | P1       | ⬜     |       |
| T-027 | No unnecessary force-dynamic        | P1       | ⬜     |       |
| T-028 | Revalidation times appropriate      | P2       | ⬜     |       |
| T-029 | Cache headers set correctly         | P2       | ⬜     |       |

---

## 5. Core Web Vitals & Performance

### 5.1 Largest Contentful Paint (LCP)

| ID    | Check                                   | Priority | Status | Notes |
| ----- | --------------------------------------- | -------- | ------ | ----- |
| P-001 | LCP under 2.5 seconds                   | P0       | ⬜     |       |
| P-002 | Hero/banner images optimized            | P0       | ⬜     |       |
| P-003 | LCP element identified and optimized    | P1       | ⬜     |       |
| P-004 | Above-fold images preloaded             | P1       | ⬜     |       |
| P-005 | Server response time (TTFB) under 600ms | P1       | ⬜     |       |
| P-006 | Font display: swap used                 | P1       | ⬜     |       |
| P-007 | Critical rendering path optimized       | P2       | ⬜     |       |

### 5.2 Interaction to Next Paint (INP)

| ID    | Check                                   | Priority | Status | Notes |
| ----- | --------------------------------------- | -------- | ------ | ----- |
| P-008 | INP under 200ms                         | P0       | ⬜     |       |
| P-009 | No long JavaScript tasks (>50ms)        | P1       | ⬜     |       |
| P-010 | Event handlers optimized                | P1       | ⬜     |       |
| P-011 | Debouncing/throttling used where needed | P2       | ⬜     |       |
| P-012 | No main thread blocking                 | P1       | ⬜     |       |

### 5.3 Cumulative Layout Shift (CLS)

| ID    | Check                               | Priority | Status | Notes |
| ----- | ----------------------------------- | -------- | ------ | ----- |
| P-013 | CLS under 0.1                       | P0       | ⬜     |       |
| P-014 | Images have width/height attributes | P0       | ⬜     |       |
| P-015 | Ads/embeds have reserved space      | P1       | ⬜     |       |
| P-016 | Fonts don't cause layout shift      | P1       | ⬜     |       |
| P-017 | Dynamic content has reserved space  | P1       | ⬜     |       |
| P-018 | Skeleton loaders prevent CLS        | P1       | ⬜     |       |
| P-019 | No content injected above viewport  | P1       | ⬜     |       |

---

## 6. Structured Data & Schema

### 6.1 Organization & Website

| ID    | Check                                  | Priority | Status | Notes |
| ----- | -------------------------------------- | -------- | ------ | ----- |
| S-001 | Organization schema present            | P1       | ⬜     |       |
| S-002 | Organization schema site-wide          | P1       | ⬜     |       |
| S-003 | WebSite schema with SearchAction       | P1       | ⬜     |       |
| S-004 | Logo URL in Organization schema        | P2       | ⬜     |       |
| S-005 | Social profiles in Organization schema | P2       | ⬜     |       |
| S-006 | Contact information in schema          | P2       | ⬜     |       |

### 6.2 Product Schema

| ID    | Check                               | Priority | Status | Notes |
| ----- | ----------------------------------- | -------- | ------ | ----- |
| S-007 | Product schema on all product pages | P0       | ⬜     |       |
| S-008 | Product name in schema              | P0       | ⬜     |       |
| S-009 | Product description in schema       | P1       | ⬜     |       |
| S-010 | Product image in schema             | P0       | ⬜     |       |
| S-011 | Product price in schema             | P0       | ⬜     |       |
| S-012 | Product currency in schema          | P0       | ⬜     |       |
| S-013 | Product availability in schema      | P0       | ⬜     |       |
| S-014 | Product SKU in schema               | P1       | ⬜     |       |
| S-015 | Product brand in schema             | P1       | ⬜     |       |
| S-016 | Product MPN (part number) in schema | P1       | ⬜     |       |
| S-017 | Product GTIN/UPC in schema          | P2       | ⬜     |       |
| S-018 | Product reviews/ratings in schema   | P2       | ⬜     |       |
| S-019 | Offer schema nested in Product      | P0       | ⬜     |       |
| S-020 | Product condition in schema         | P3       | ⬜     |       |

### 6.3 Breadcrumb Schema

| ID    | Check                                | Priority | Status | Notes |
| ----- | ------------------------------------ | -------- | ------ | ----- |
| S-021 | BreadcrumbList schema on all pages   | P1       | ⬜     |       |
| S-022 | Breadcrumb items have correct URLs   | P1       | ⬜     |       |
| S-023 | Breadcrumb position values correct   | P2       | ⬜     |       |
| S-024 | Breadcrumb hierarchy matches visible | P1       | ⬜     |       |

### 6.4 Other Schema Types

| ID    | Check                                     | Priority | Status | Notes |
| ----- | ----------------------------------------- | -------- | ------ | ----- |
| S-025 | CollectionPage schema on category pages   | P2       | ⬜     |       |
| S-026 | ItemList schema on listing pages          | P2       | ⬜     |       |
| S-027 | BlogPosting schema on blog posts          | P1       | ⬜     |       |
| S-028 | Blog schema on blog listing               | P2       | ⬜     |       |
| S-029 | FAQPage schema where applicable           | P2       | ⬜     |       |
| S-030 | LocalBusiness schema (if physical stores) | P2       | ⬜     |       |

### 6.5 Schema Validation

| ID    | Check                                      | Priority | Status | Notes |
| ----- | ------------------------------------------ | -------- | ------ | ----- |
| S-031 | All schema passes Google Rich Results Test | P0       | ⬜     |       |
| S-032 | No schema errors in Search Console         | P0       | ⬜     |       |
| S-033 | No schema warnings                         | P2       | ⬜     |       |
| S-034 | JSON-LD format used (not microdata)        | P1       | ⬜     |       |

---

## 7. Mobile SEO

### 7.1 Mobile-Friendliness

| ID    | Check                                        | Priority | Status | Notes |
| ----- | -------------------------------------------- | -------- | ------ | ----- |
| M-001 | Site passes Google Mobile-Friendly Test      | P0       | ⬜     |       |
| M-002 | Viewport meta tag configured                 | P0       | ⬜     |       |
| M-003 | Responsive design (not separate mobile site) | P0       | ⬜     |       |
| M-004 | No horizontal scrolling on mobile            | P0       | ⬜     |       |
| M-005 | Text readable without zooming                | P1       | ⬜     |       |
| M-006 | Tap targets adequately sized (48x48px)       | P1       | ⬜     |       |
| M-007 | Tap targets adequately spaced                | P1       | ⬜     |       |
| M-008 | No intrusive interstitials                   | P1       | ⬜     |       |
| M-009 | Forms usable on mobile                       | P1       | ⬜     |       |
| M-010 | Navigation works on mobile                   | P0       | ⬜     |       |

### 7.2 Mobile-First Indexing

| ID    | Check                              | Priority | Status | Notes |
| ----- | ---------------------------------- | -------- | ------ | ----- |
| M-011 | Same content on mobile and desktop | P0       | ⬜     |       |
| M-012 | Same structured data on mobile     | P0       | ⬜     |       |
| M-013 | Same meta tags on mobile           | P0       | ⬜     |       |
| M-014 | Images/videos accessible on mobile | P1       | ⬜     |       |
| M-015 | Internal links work on mobile      | P0       | ⬜     |       |

---

## 8. Content & E-E-A-T

### 8.1 Experience

| ID    | Check                              | Priority | Status | Notes |
| ----- | ---------------------------------- | -------- | ------ | ----- |
| E-001 | First-hand experience demonstrated | P2       | ⬜     |       |
| E-002 | Original product photos/videos     | P2       | ⬜     |       |
| E-003 | User reviews/testimonials present  | P2       | ⬜     |       |

### 8.2 Expertise

| ID    | Check                                     | Priority | Status | Notes |
| ----- | ----------------------------------------- | -------- | ------ | ----- |
| E-004 | Technical specifications accurate         | P1       | ⬜     |       |
| E-005 | Product compatibility information correct | P0       | ⬜     |       |
| E-006 | Installation guides/instructions          | P2       | ⬜     |       |
| E-007 | Expert content on blog                    | P2       | ⬜     |       |

### 8.3 Authoritativeness

| ID    | Check                                  | Priority | Status | Notes |
| ----- | -------------------------------------- | -------- | ------ | ----- |
| E-008 | Brand/manufacturer information present | P1       | ⬜     |       |
| E-009 | Certifications displayed               | P2       | ⬜     |       |
| E-010 | Industry affiliations mentioned        | P3       | ⬜     |       |

### 8.4 Trustworthiness

| ID    | Check                            | Priority | Status | Notes |
| ----- | -------------------------------- | -------- | ------ | ----- |
| E-011 | Contact information easily found | P0       | ⬜     |       |
| E-012 | Physical address displayed       | P1       | ⬜     |       |
| E-013 | Phone number present             | P1       | ⬜     |       |
| E-014 | Privacy policy page exists       | P0       | ⬜     |       |
| E-015 | Terms and conditions page exists | P1       | ⬜     |       |
| E-016 | Return/refund policy clear       | P0       | ⬜     |       |
| E-017 | Shipping information present     | P1       | ⬜     |       |
| E-018 | Secure checkout indicators       | P0       | ⬜     |       |
| E-019 | Trust badges/seals displayed     | P2       | ⬜     |       |

---

## 9. E-commerce Specific SEO

### 9.1 Product Pages

| ID     | Check                                    | Priority | Status | Notes |
| ------ | ---------------------------------------- | -------- | ------ | ----- |
| EC-001 | Unique product descriptions              | P1       | ⬜     |       |
| EC-002 | Product specifications listed            | P1       | ⬜     |       |
| EC-003 | Multiple product images                  | P1       | ⬜     |       |
| EC-004 | Price clearly displayed                  | P0       | ⬜     |       |
| EC-005 | Availability/stock status shown          | P0       | ⬜     |       |
| EC-006 | Add to cart prominent                    | P0       | ⬜     |       |
| EC-007 | Related/recommended products             | P2       | ⬜     |       |
| EC-008 | Product reviews section                  | P2       | ⬜     |       |
| EC-009 | Shipping information on product page     | P1       | ⬜     |       |
| EC-010 | Part numbers visible                     | P1       | ⬜     |       |
| EC-011 | Vehicle fitment information (automotive) | P0       | ⬜     |       |

### 9.2 Category Pages

| ID     | Check                            | Priority | Status | Notes |
| ------ | -------------------------------- | -------- | ------ | ----- |
| EC-012 | Category descriptions present    | P1       | ⬜     |       |
| EC-013 | Product count displayed          | P2       | ⬜     |       |
| EC-014 | Filtering options available      | P1       | ⬜     |       |
| EC-015 | Sorting options available        | P2       | ⬜     |       |
| EC-016 | Pagination implemented correctly | P1       | ⬜     |       |
| EC-017 | Subcategories linked             | P1       | ⬜     |       |
| EC-018 | Filter URLs SEO-friendly         | P1       | ⬜     |       |

### 9.3 Search Functionality

| ID     | Check                           | Priority | Status | Notes |
| ------ | ------------------------------- | -------- | ------ | ----- |
| EC-019 | Site search works correctly     | P0       | ⬜     |       |
| EC-020 | Search results relevant         | P1       | ⬜     |       |
| EC-021 | No results page helpful         | P1       | ⬜     |       |
| EC-022 | Search autocomplete/suggestions | P2       | ⬜     |       |

### 9.4 Out of Stock Handling

| ID     | Check                                  | Priority | Status | Notes |
| ------ | -------------------------------------- | -------- | ------ | ----- |
| EC-023 | Out of stock products still accessible | P1       | ⬜     |       |
| EC-024 | Out of stock clearly indicated         | P0       | ⬜     |       |
| EC-025 | Back in stock notifications offered    | P2       | ⬜     |       |
| EC-026 | Alternative products suggested         | P2       | ⬜     |       |

### 9.5 Automotive Specific

| ID     | Check                                | Priority | Status | Notes |
| ------ | ------------------------------------ | -------- | ------ | ----- |
| EC-027 | YMM (Year/Make/Model) selector works | P0       | ⬜     |       |
| EC-028 | Fitment data accurate                | P0       | ⬜     |       |
| EC-029 | Part numbers searchable              | P1       | ⬜     |       |
| EC-030 | OEM cross-references shown           | P2       | ⬜     |       |
| EC-031 | Vehicle compatibility in URLs        | P2       | ⬜     |       |
| EC-032 | Vehicle schema for fitment           | P1       | ⬜     |       |
| EC-033 | Installation difficulty indicated    | P3       | ⬜     |       |

---

## 10. International & Local SEO

### 10.1 Local SEO

| ID    | Check                         | Priority | Status | Notes |
| ----- | ----------------------------- | -------- | ------ | ----- |
| L-001 | Store locator page exists     | P2       | ⬜     |       |
| L-002 | Individual location pages     | P2       | ⬜     |       |
| L-003 | NAP consistent across site    | P1       | ⬜     |       |
| L-004 | Local schema markup           | P2       | ⬜     |       |
| L-005 | Google Maps integration       | P2       | ⬜     |       |
| L-006 | Local phone numbers displayed | P2       | ⬜     |       |

### 10.2 International SEO

| ID    | Check                             | Priority | Status | Notes |
| ----- | --------------------------------- | -------- | ------ | ----- |
| L-007 | hreflang tags (if multi-language) | P1       | ⬜     |       |
| L-008 | Correct language/region targeting | P1       | ⬜     |       |
| L-009 | Currency localization             | P1       | ⬜     |       |
| L-010 | Localized content                 | P2       | ⬜     |       |

---

## 11. Security & Trust

### 11.1 HTTPS & Security

| ID      | Check                          | Priority | Status | Notes |
| ------- | ------------------------------ | -------- | ------ | ----- |
| SEC-001 | Site uses HTTPS                | P0       | ⬜     |       |
| SEC-002 | Valid SSL certificate          | P0       | ⬜     |       |
| SEC-003 | No mixed content warnings      | P0       | ⬜     |       |
| SEC-004 | HSTS header configured         | P1       | ⬜     |       |
| SEC-005 | X-Content-Type-Options header  | P2       | ⬜     |       |
| SEC-006 | X-Frame-Options header         | P2       | ⬜     |       |
| SEC-007 | Referrer-Policy header         | P2       | ⬜     |       |
| SEC-008 | Content-Security-Policy header | P2       | ⬜     |       |
| SEC-009 | Secure cookie flags            | P2       | ⬜     |       |

### 11.2 Trust Signals

| ID      | Check                          | Priority | Status | Notes |
| ------- | ------------------------------ | -------- | ------ | ----- |
| SEC-010 | SSL seal displayed             | P3       | ⬜     |       |
| SEC-011 | Payment security badges        | P2       | ⬜     |       |
| SEC-012 | Trust pilot/reviews visible    | P2       | ⬜     |       |
| SEC-013 | Money-back guarantee displayed | P2       | ⬜     |       |

---

## 12. Social & Sharing

### 12.1 Open Graph Tags

| ID      | Check                                  | Priority | Status | Notes |
| ------- | -------------------------------------- | -------- | ------ | ----- |
| SOC-001 | og:title on all pages                  | P1       | ⬜     |       |
| SOC-002 | og:description on all pages            | P1       | ⬜     |       |
| SOC-003 | og:image on all pages                  | P0       | ⬜     |       |
| SOC-004 | og:url on all pages                    | P1       | ⬜     |       |
| SOC-005 | og:type appropriate per page           | P2       | ⬜     |       |
| SOC-006 | og:site_name configured                | P2       | ⬜     |       |
| SOC-007 | Product pages use og:type product      | P2       | ⬜     |       |
| SOC-008 | og:image dimensions correct (1200x630) | P2       | ⬜     |       |

### 12.2 Twitter Cards

| ID      | Check                                 | Priority | Status | Notes |
| ------- | ------------------------------------- | -------- | ------ | ----- |
| SOC-009 | twitter:card on all pages             | P1       | ⬜     |       |
| SOC-010 | twitter:title on all pages            | P1       | ⬜     |       |
| SOC-011 | twitter:description on all pages      | P1       | ⬜     |       |
| SOC-012 | twitter:image on all pages            | P1       | ⬜     |       |
| SOC-013 | Product pages use summary_large_image | P2       | ⬜     |       |

### 12.3 Social Integration

| ID      | Check                                  | Priority | Status | Notes |
| ------- | -------------------------------------- | -------- | ------ | ----- |
| SOC-014 | Social sharing buttons (if applicable) | P3       | ⬜     |       |
| SOC-015 | Social profile links in footer         | P2       | ⬜     |       |

---

## 13. Analytics & Monitoring

### 13.1 Analytics Setup

| ID    | Check                             | Priority | Status | Notes |
| ----- | --------------------------------- | -------- | ------ | ----- |
| A-001 | Google Analytics installed        | P0       | ⬜     |       |
| A-002 | GA4 ecommerce tracking configured | P1       | ⬜     |       |
| A-003 | Google Tag Manager configured     | P1       | ⬜     |       |
| A-004 | Analytics doesn't block rendering | P1       | ⬜     |       |
| A-005 | Conversion tracking set up        | P1       | ⬜     |       |

### 13.2 Search Console

| ID    | Check                          | Priority | Status | Notes |
| ----- | ------------------------------ | -------- | ------ | ----- |
| A-006 | Google Search Console verified | P0       | ⬜     |       |
| A-007 | Sitemap submitted to GSC       | P0       | ⬜     |       |
| A-008 | No critical errors in GSC      | P0       | ⬜     |       |
| A-009 | Core Web Vitals monitored      | P1       | ⬜     |       |
| A-010 | Coverage report reviewed       | P1       | ⬜     |       |

---

## Summary

**Total Checks:** 213

| Priority      | Count | Description                                     |
| ------------- | ----- | ----------------------------------------------- |
| P0 (Critical) | 67    | Must fix - directly impacts rankings/indexation |
| P1 (High)     | 89    | Should fix - significant SEO impact             |
| P2 (Medium)   | 44    | Nice to have - incremental improvements         |
| P3 (Low)      | 13    | Optional - minor optimizations                  |

---

## Audit Progress

| Category                      | Total   | Checked | Pass  | Fail  | N/A   |
| ----------------------------- | ------- | ------- | ----- | ----- | ----- |
| Crawlability & Indexation     | 53      | 0       | 0     | 0     | 0     |
| URL Structure & Architecture  | 19      | 0       | 0     | 0     | 0     |
| On-Page SEO Elements          | 48      | 0       | 0     | 0     | 0     |
| Technical SEO                 | 29      | 0       | 0     | 0     | 0     |
| Core Web Vitals & Performance | 19      | 0       | 0     | 0     | 0     |
| Structured Data & Schema      | 34      | 0       | 0     | 0     | 0     |
| Mobile SEO                    | 15      | 0       | 0     | 0     | 0     |
| Content & E-E-A-T             | 19      | 0       | 0     | 0     | 0     |
| E-commerce Specific SEO       | 33      | 0       | 0     | 0     | 0     |
| International & Local SEO     | 10      | 0       | 0     | 0     | 0     |
| Security & Trust              | 13      | 0       | 0     | 0     | 0     |
| Social & Sharing              | 15      | 0       | 0     | 0     | 0     |
| Analytics & Monitoring        | 10      | 0       | 0     | 0     | 0     |
| **TOTAL**                     | **213** | **0**   | **0** | **0** | **0** |
