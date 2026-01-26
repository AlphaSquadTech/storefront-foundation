# SEO Audit Findings - Section 2: URL Structure & Architecture

**Audit Date:** 2026-01-26
**Platform:** Next.js 15 + Saleor GraphQL E-commerce Storefront
**Auditor:** Claude Code SEO Audit Tool

---

## Table of Contents

1. [Section Overview](#section-overview)
2. [2.1 URL Best Practices](#21-url-best-practices)
3. [2.2 Site Architecture](#22-site-architecture)
4. [Section 2 Summary](#section-2-summary)
5. [Appendix A: Files Reviewed](#appendix-a-files-reviewed)
6. [Appendix B: Audit Statistics](#appendix-b-audit-statistics)

---

## Section Overview

**Section:** 2. URL Structure & Architecture
**Total Items:** 19
**Subsections:** 2
- 2.1 URL Best Practices (U-001 to U-011) - 11 items
- 2.2 Site Architecture (U-012 to U-019) - 8 items

**Status:** COMPLETE

---

## 2.1 URL Best Practices

### Audit Items

| ID | Check | Priority | Status | Finding |
|----|-------|----------|--------|---------|
| U-001 | URLs are human-readable | P1 | PASS | All static URLs are human-readable |
| U-002 | URLs use hyphens (not underscores) | P1 | PASS | Correct hyphen usage throughout |
| U-003 | URLs are lowercase | P1 | PASS | All routes use lowercase |
| U-004 | URLs are concise (under 100 chars) | P2 | PASS | All URLs under 100 characters |
| U-005 | URLs contain relevant keywords | P1 | PASS | Product/category slugs contain keywords |
| U-006 | No session IDs in URLs | P0 | PASS | Auth uses cookies, not URL params |
| U-007 | No unnecessary parameters | P1 | WARN | Filter params work but not SEO-friendly paths |
| U-008 | Consistent URL structure across site | P1 | FAIL | Duplicate routes and inconsistent naming |
| U-009 | Product URLs use slugs (not IDs) | P1 | WARN | Uses slugs but param named `[id]` (misleading) |
| U-010 | Category URLs use slugs | P1 | PASS | Correctly uses `/category/[slug]` |
| U-011 | Blog URLs use slugs | P1 | PASS | Correctly uses `/blog/[slug]` |

### Detailed Analysis

#### U-001: URLs are human-readable - PASS

**Evidence:** Examined all 39 page routes in `src/app/`

All static URLs are human-readable and descriptive:
- `/about` - About page
- `/products/all` - All products listing
- `/category/[slug]` - Category pages with slug
- `/blog/[slug]` - Blog posts with slug
- `/privacy-policy` - Privacy policy
- `/terms-and-conditions` - Terms and conditions
- `/frequently-asked-questions` - FAQ page
- `/shipping-returns` - Shipping and returns info

**Files Reviewed:**
- `src/app/**/page.tsx` (39 files)

---

#### U-002: URLs use hyphens (not underscores) - PASS

**Evidence:** All multi-word URLs use hyphens consistently:

| URL | Format |
|-----|--------|
| `/privacy-policy` | Hyphens |
| `/terms-and-conditions` | Hyphens |
| `/frequently-asked-questions` | Hyphens |
| `/shipping-returns` | Hyphens |
| `/contact-us` | Hyphens |
| `/forgot-password` | Hyphens |
| `/reset-password` | Hyphens |
| `/order-confirmation` | Hyphens |
| `/authorize-net-success` | Hyphens |

No underscores found in any URL paths.

---

#### U-003: URLs are lowercase - PASS

**Evidence:** All route folders are lowercase in `src/app/`:
- No uppercase letters in any route directory names
- Dynamic routes use lowercase: `[slug]`, `[id]`
- No mixed case patterns found

**Note:** Dynamic slugs from CMS/backend should also be validated to ensure lowercase consistency.

---

#### U-004: URLs are concise (under 100 chars) - PASS

**Evidence:** URL length analysis:

| URL | Length |
|-----|--------|
| `/products/all` | 13 chars |
| `/category/[slug]` | 15+ chars |
| `/frequently-asked-questions` | 28 chars |
| `/terms-and-conditions` | 21 chars |
| `/authorize-net-success` | 22 chars |
| `/shipping-returns` | 17 chars |

**Longest URL:** `/frequently-asked-questions` at 28 characters (well under 100)

**Recommendation:** Consider shortening `/frequently-asked-questions` to `/faq` for better usability.

---

#### U-005: URLs contain relevant keywords - PASS

**Evidence:**

- Product URLs contain product name slugs via `/product/[slug]`
- Category URLs contain category name slugs via `/category/[slug]`
- Brand URLs contain brand name slugs via `/brand/[id]` (actually slug)
- Blog URLs contain post title slugs via `/blog/[slug]`

Product links generated with keyword-rich slugs:
```typescript
// src/app/search/page.tsx:639-641
const href = `/product/${encodeURIComponent(product.node.slug)}`;
```

---

#### U-006: No session IDs in URLs - PASS

**Evidence:** Searched entire codebase for session ID patterns in URLs:

```
Grep search: href=.*\?.*session
Result: No files found
```

Authentication approach:
- JWT tokens stored in localStorage (client-side)
- Auth cookies for middleware (server-side)
- No session IDs in URLs

**Files Reviewed:**
- `src/store/useGlobalStore.tsx` - Uses localStorage for auth
- `src/middleware.ts` - Uses cookies for auth checks

---

#### U-007: No unnecessary parameters - WARN

**Evidence:** URL parameters in use:

| Page | Parameters |
|------|------------|
| `/search` | `fitment_pairs`, `category`, `brand`, `sort`, `page`, `q` |
| `/products/all` | `fitment_pairs`, `category`, `brand`, `sort`, `page`, `q` |
| `/category/[slug]` | None (uses load more pagination) |

**Current Implementation (src/app/search/page.tsx:178-214):**
```typescript
const updateURL = useCallback(
  (categories: string[], brands: string[], sort: string, page: number) => {
    const params = new URLSearchParams();
    if (selectedPairs) params.set("fitment_pairs", selectedPairs);
    if (categories.length > 0) {
      categories.forEach((cat) => params.append("category", cat));
    }
    // ... more params
  }
);
```

**Issues:**
- Filter URLs use query parameters instead of SEO-friendly paths
- Example: `/products/all?category=brakes&brand=acme&page=2`
- Could be: `/products/all/brakes/acme/page/2` (SEO-friendly)

**Recommendation:**
Consider implementing SEO-friendly filter URLs for primary filters while keeping secondary filters as parameters.

---

#### U-008: Consistent URL structure across site - FAIL

**Evidence:** Multiple inconsistencies found:

**Issue 1: Duplicate Product Routes**
- `/product/[id]/page.tsx` - Main product route
- `/products/product/[id]/page.tsx` - Redundant nested route

Both routes serve products, creating duplicate content risk.

**Issue 2: Duplicate Static Pages**

| Route A | Route B | Same Content? |
|---------|---------|---------------|
| `/contact` | `/contact-us` | Yes |
| `/privacy-policy` | `/privacy` | Yes |
| `/terms-and-conditions` | `/terms` | Yes |

Found in `src/sitemaps/static-pages-sitemap.ts`:
```typescript
{ url: '/contact', priority: 0.7 },
{ url: '/contact-us', priority: 0.7 },
{ url: '/privacy-policy', priority: 0.5 },
{ url: '/privacy', priority: 0.5 },
{ url: '/terms-and-conditions', priority: 0.5 },
{ url: '/terms', priority: 0.5 },
```

**Issue 3: Inconsistent Parameter Naming**

| Route | Param Name | Actual Usage |
|-------|------------|--------------|
| `/product/[id]` | `id` | Used as slug |
| `/brand/[id]` | `id` | Used as slug |
| `/category/[slug]` | `slug` | Used as slug |
| `/blog/[slug]` | `slug` | Used as slug |

**Recommendations:**

1. **Remove duplicate product route:** Delete `/products/product/[id]/page.tsx` or redirect to `/product/[id]`

2. **Consolidate duplicate pages:** Keep one version and redirect others:
   - Keep `/contact-us`, redirect `/contact` to `/contact-us`
   - Keep `/privacy-policy`, redirect `/privacy` to `/privacy-policy`
   - Keep `/terms-and-conditions`, redirect `/terms` to `/terms-and-conditions`

3. **Rename parameters for consistency:**
   - Rename `/product/[id]` to `/product/[slug]`
   - Rename `/brand/[id]` to `/brand/[slug]`

---

#### U-009: Product URLs use slugs (not IDs) - WARN

**Evidence:**

The route is `/product/[id]` but the code treats it as a slug:

```typescript
// src/app/product/[id]/page.tsx:42-43
const { id } = await params;
const slug = decodeURIComponent(id);
const product = await getProduct(slug);
```

And in GraphQL query (line 26-27):
```typescript
query: PRODUCT_DETAILS_BY_ID,
variables: { slug, channel },
```

**Issue:** Parameter named `[id]` but used as `slug` - misleading to developers.

**Product Links Generated Correctly:**
```typescript
// src/app/category/[slug]/CategoryPageClient.tsx:173
href={`/product/${item.slug}`}
```

**Recommendation:**
Rename the route from `/product/[id]` to `/product/[slug]` for clarity and consistency with `/category/[slug]` and `/blog/[slug]`.

---

#### U-010: Category URLs use slugs - PASS

**Evidence:**

Route: `src/app/category/[slug]/page.tsx`

Correctly uses `[slug]` parameter:
```typescript
// src/app/category/[slug]/page.tsx:43-44
const { slug } = await params;
const decodedSlug = decodeURIComponent(slug);
```

Example URLs:
- `/category/exhaust-systems`
- `/category/brake-parts`
- `/category/engine-components`

---

#### U-011: Blog URLs use slugs - PASS

**Evidence:**

Route: `src/app/blog/[slug]/page.tsx`

Correctly uses `[slug]` parameter:
```typescript
// src/app/blog/[slug]/page.tsx:19,48
const { slug } = await params;
const post = await fetchBlogBySlug(slug);
```

Example URLs:
- `/blog/how-to-install-exhaust`
- `/blog/maintenance-tips-2024`

Canonical tags correctly set:
```typescript
alternates: {
  canonical: `/blog/${slug}`,
},
```

---

## 2.2 Site Architecture

### Audit Items

| ID | Check | Priority | Status | Finding |
|----|-------|----------|--------|---------|
| U-012 | Important pages within 3 clicks of homepage | P1 | PASS | All important pages accessible within 3 clicks |
| U-013 | Logical URL hierarchy | P1 | PASS | Clear, logical URL structure |
| U-014 | Flat architecture for products (not too deep) | P1 | PASS | Products at 2 levels deep max |
| U-015 | No orphan pages (all pages linked) | P1 | WARN | Duplicate routes may create orphans |
| U-016 | Clear navigation structure | P1 | PASS | Main nav + mega menu + footer well-organized |
| U-017 | Breadcrumb navigation present | P1 | PASS | Breadcrumbs on all key pages |
| U-018 | Category hierarchy is logical | P1 | PASS | Hierarchical category structure supported |
| U-019 | Faceted navigation SEO handled | P1 | FAIL | No noindex/canonical for filtered URLs |

### Detailed Analysis

#### U-012: Important pages within 3 clicks of homepage - PASS

**Evidence:** Click depth analysis from homepage:

**1 Click (Direct from Homepage):**
| Page | Access Method |
|------|---------------|
| All Products | Navigation: "Shop By Category" |
| About | Navigation link |
| Blog | Navigation link |
| Contact | Navigation link |
| Categories | Mega menu dropdown |
| Popular Categories | Homepage section links |
| Featured Products | Homepage section links |

**2 Clicks (From Category/Listing):**
| Page | Path |
|------|------|
| Individual Products | Homepage → Category → Product |
| Blog Posts | Homepage → Blog → Post |
| Subcategories | Homepage → Category → Subcategory |

**3 Clicks Maximum:**
| Page | Path |
|------|------|
| Deep Products | Homepage → All Products → Filter → Product |

**Navigation Structure (src/app/components/layout/header/components/NavigationLinks.tsx:17-22):**
```typescript
const NAV_LINKS = [
  { name: "Shop By Category", href: "/products/all" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
```

---

#### U-013: Logical URL hierarchy - PASS

**Evidence:** URL hierarchy analysis:

```
/ (Homepage)
├── /about
├── /blog
│   └── /blog/[slug]
├── /products
│   └── /products/all
├── /product
│   └── /product/[slug]
├── /category
│   └── /category/[slug]
├── /brand
│   └── /brand/[slug]
├── /cart
├── /checkout
├── /account
│   ├── /account/address
│   ├── /account/orders
│   │   └── /account/orders/[id]
│   └── /account/settings
├── /search
├── /contact-us
├── /privacy-policy
├── /terms-and-conditions
├── /warranty
├── /shipping-returns
├── /frequently-asked-questions
└── /locator
```

**Hierarchy Follows Best Practices:**
- Main sections at root level
- Dynamic content under parent paths
- Account pages grouped under `/account`
- Legal pages at root (accessible)

---

#### U-014: Flat architecture for products (not too deep) - PASS

**Evidence:** Product URL depth analysis:

| Route | Depth | Example |
|-------|-------|---------|
| `/product/[slug]` | 2 levels | `/product/exhaust-manifold` |
| `/category/[slug]` | 2 levels | `/category/brake-parts` |
| `/brand/[slug]` | 2 levels | `/brand/acme-parts` |

**Actual Product Links Generated (src/app/category/[slug]/CategoryPageClient.tsx:173):**
```typescript
href={`/product/${item.slug}`}
```

**Not Deep Nesting:**
- Products NOT at `/products/category/brand/product/[slug]`
- Direct access via `/product/[slug]`
- Maximum 2 levels from root

---

#### U-015: No orphan pages (all pages linked) - WARN

**Evidence:** Potential orphan pages identified:

**Issue 1: Duplicate Product Route**
- `/products/product/[id]/page.tsx` exists but main links point to `/product/[slug]`
- This route may be orphaned (not linked from anywhere in main navigation)

**Issue 2: Duplicate Static Pages**
Both versions exist but only one is typically linked:

| Primary Route | Duplicate Route | Footer Links To |
|---------------|-----------------|-----------------|
| `/contact-us` | `/contact` | `/contact-us` |
| `/privacy-policy` | `/privacy` | `/privacy-policy` |
| `/terms-and-conditions` | `/terms` | `/terms-and-conditions` |

**From Footer (src/app/components/layout/footer.tsx:65-88):**
```typescript
const STATIC_SECTIONS: FooterSection[] = [
  {
    id: "learn-more",
    children: [
      { id: "about", name: "About Us", href: "/about" },
      { id: "privacy-policy", name: "Privacy Policy", href: "/privacy-policy" },
      { id: "terms-and-conditions", name: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  {
    id: "support",
    children: [
      { id: "contact-us", name: "Contact Us", href: "/contact-us" },
      // ...
    ],
  },
];
```

**Recommendations:**
1. Remove or redirect orphaned routes
2. Ensure all pages are linked from navigation or content
3. Audit internal links to verify no dead ends

---

#### U-016: Clear navigation structure - PASS

**Evidence:** Navigation components analyzed:

**Desktop Navigation (NavigationLinks.tsx):**
- Main links: Shop By Category, About, Blog, Contact
- Mega menu dropdown for categories
- Dynamic menu items from CMS

**Mega Menu (megaMenuDropdown.tsx:60-118):**
- Shows all categories with hierarchy
- Parent categories as headers
- Child categories as sub-items
- "View All Products" link at bottom

**Mobile Navigation:**
- Hamburger menu slide-out
- Same content as desktop
- Accessible menu structure

**Footer Navigation:**
- Learn More section (About, FAQ, Privacy, Terms)
- Support section (Contact, Warranty, Shipping)
- Dynamic sections from CMS

**Files Reviewed:**
- `src/app/components/layout/header/components/NavigationLinks.tsx`
- `src/app/components/layout/header/megaMenuDropdown.tsx`
- `src/app/components/layout/footer.tsx`

---

#### U-017: Breadcrumb navigation present - PASS

**Evidence:** Breadcrumb implementation found across the site:

**Breadcrumb Component (src/app/components/reuseableUI/breadcrumb.tsx):**
```typescript
const Breadcrumb = ({ items = [] }: { items: { text: string; link?: string }[] }) => {
  return (
    <div className="font-semibold uppercase text-xs md:text-sm font-secondary">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link && index < items.length - 1 ? (
            <Link href={item.link}>{item.text}</Link>
          ) : (
            <span>{item.text}</span>
          )}
          {index < items.length - 1 && <span> / </span>}
        </React.Fragment>
      ))}
    </div>
  );
};
```

**Pages Using Breadcrumbs:**

| Page | Breadcrumb Path |
|------|-----------------|
| Category | HOME / SHOP / [Category Name] |
| Product | Home / Products / [Product Name] |
| Blog Post | Home / BLOGS / [Post Title] |
| Search | HOME / SHOP / SEARCH RESULTS |
| Site Map | Home / [Page Title] |

**Example (CategoryPageClient.tsx:105-109):**
```typescript
const breadcrumbItems = [
  { text: "HOME", link: "/" },
  { text: "SHOP", link: "/products/all" },
  { text: slug.replaceAll("-", " ") },
];
```

**BreadcrumbList Schema Also Generated:**
```typescript
// src/app/product/[id]/page.tsx:154-158
breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Products", url: "/products/all" },
  { name: product.name, url: `/product/${slug}` },
]);
```

---

#### U-018: Category hierarchy is logical - PASS

**Evidence:** Hierarchical category structure implemented:

**Category Data Structure (HierarchicalCategoryFilter.tsx:6-15):**
```typescript
interface CategoryNode {
  id: string;
  value: string;
  slug: string;
  count: number;
  media?: string;
  level?: number;
  parent_id?: string;
  children?: CategoryNode[];  // Nested children support
}
```

**Mega Menu Displays Hierarchy (megaMenuDropdown.tsx:61-104):**
```typescript
{categories.map((category) => (
  <div key={category.id} className="group/category">
    <Link href={`/category/${category.slug}`}>
      {category.name}  {/* Parent category */}
    </Link>
    {category.children?.length ? (
      <ul className="space-y-2 mt-3">
        {category.children.map((child) => (
          <li key={child.id}>
            <Link href={`/category/${child.slug}`}>
              {child.name}  {/* Child category */}
            </Link>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
))}
```

**Category Filter Also Supports Nesting:**
- Expandable/collapsible hierarchy in sidebar
- Visual indentation for child categories
- Count badges at each level

---

#### U-019: Faceted navigation SEO handled - FAIL

**Evidence:** Faceted navigation implementation analyzed:

**Current Implementation (src/app/search/page.tsx:178-214):**
```typescript
const updateURL = useCallback(
  (categories: string[], brands: string[], sort: string, page: number) => {
    const params = new URLSearchParams();
    if (selectedPairs) params.set("fitment_pairs", selectedPairs);
    if (categories.length > 0) {
      categories.forEach((cat) => params.append("category", cat));
    }
    if (brands.length > 0) {
      brands.forEach((brand) => params.append("brand", brand));
    }
    if (sort !== "name_asc") params.set("sort", sort);
    if (page > 1) params.set("page", page.toString());

    const queryString = params.toString();
    const newURL = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(newURL, { scroll: false });
  }
);
```

**Issues Found:**

| Issue | Impact | Severity |
|-------|--------|----------|
| No `noindex` on filtered URLs | Search engines may index infinite filter combinations | HIGH |
| No canonical tag on filtered pages | Duplicate content issues | HIGH |
| Parameters not consolidated | Multiple `?category=x&category=y` URLs | MEDIUM |
| No robots meta for faceted URLs | Crawl budget waste | MEDIUM |

**Example Problematic URLs:**
- `/products/all?category=brakes&brand=acme&sort=price_min:asc&page=2`
- `/search?fitment_pairs=2020|honda|civic&category=exhaust`
- `/products/all?q=intake&brand=k-n`

**Recommendations:**

1. **Add robots meta for filtered pages:**
```typescript
// In page component
export const metadata: Metadata = {
  robots: {
    index: searchParams.category || searchParams.brand ? false : true,
    follow: true,
  },
};
```

2. **Set canonical to base URL:**
```typescript
alternates: {
  canonical: '/products/all',  // Strip parameters
},
```

3. **Implement URL parameter handling in robots.txt:**
```
User-agent: *
Disallow: /*?category=
Disallow: /*?brand=
Disallow: /*?sort=
Disallow: /*?fitment_pairs=
```

4. **Consider SEO-friendly filter paths for primary categories:**
```
/products/all/brakes  # instead of ?category=brakes
```

---

## Section 2 Summary

### Results Overview

| Subsection | Total | Pass | Fail | Warn | N/A |
|------------|-------|------|------|------|-----|
| 2.1 URL Best Practices | 11 | 8 | 1 | 2 | 0 |
| 2.2 Site Architecture | 8 | 6 | 1 | 1 | 0 |
| **Total** | **19** | **14** | **2** | **3** | **0** |

### Priority Issues

#### CRITICAL (P1 Failures)

1. **U-008: Inconsistent URL structure** - Multiple duplicate routes exist
   - `/product/[id]` vs `/products/product/[id]`
   - `/contact` vs `/contact-us`
   - `/privacy` vs `/privacy-policy`
   - `/terms` vs `/terms-and-conditions`

2. **U-019: Faceted navigation not SEO handled** - No noindex/canonical for filtered URLs

#### HIGH (P1 Warnings)

3. **U-007: Filter parameters not SEO-friendly** - Uses query params instead of paths

4. **U-009: Misleading parameter naming** - `/product/[id]` uses slug, not ID

5. **U-015: Potential orphan pages** - Duplicate routes may not be linked

### Action Items

| Priority | Action | Files to Modify |
|----------|--------|-----------------|
| P0 | Add noindex/canonical for filtered URLs | `src/app/search/page.tsx`, `src/app/products/all/page.tsx` |
| P1 | Consolidate duplicate routes | Remove `/products/product/[id]`, redirect `/contact`, `/privacy`, `/terms` |
| P1 | Rename `[id]` to `[slug]` in routes | `src/app/product/[id]/`, `src/app/brand/[id]/` |
| P2 | Add filter URL patterns to robots.txt | `src/app/robots.txt/route.ts` |
| P2 | Consider SEO-friendly filter paths | Future enhancement |

---

## Appendix A: Files Reviewed

| File | Purpose | Findings Related |
|------|---------|------------------|
| `src/app/**/page.tsx` (39 files) | All page routes | U-001 to U-011 |
| `src/app/product/[id]/page.tsx` | Product page route | U-008, U-009 |
| `src/app/products/product/[id]/page.tsx` | Duplicate product route | U-008, U-015 |
| `src/app/category/[slug]/page.tsx` | Category page | U-010, U-017 |
| `src/app/blog/[slug]/page.tsx` | Blog post page | U-011, U-017 |
| `src/app/brand/[id]/page.tsx` | Brand page | U-008, U-009 |
| `src/sitemaps/static-pages-sitemap.ts` | Sitemap config | U-008 |
| `src/app/components/layout/header/components/NavigationLinks.tsx` | Main navigation | U-012, U-016 |
| `src/app/components/layout/header/megaMenuDropdown.tsx` | Category dropdown | U-012, U-016, U-018 |
| `src/app/components/layout/header/hooks/useNavbarData.ts` | Navigation data | U-016 |
| `src/app/components/layout/footer.tsx` | Footer navigation | U-015, U-016 |
| `src/app/components/reuseableUI/breadcrumb.tsx` | Breadcrumb component | U-017 |
| `src/app/components/search/HierarchicalCategoryFilter.tsx` | Category filter | U-018, U-019 |
| `src/app/search/page.tsx` | Search page | U-007, U-019 |
| `src/app/products/all/AllProductsClient.tsx` | Products listing | U-007, U-019 |
| `src/app/category/[slug]/CategoryPageClient.tsx` | Category listing | U-017 |
| `src/app/page.tsx` | Homepage | U-012 |
| `src/app/components/showroom/popularCategory.tsx` | Popular categories | U-012 |
| `src/app/site-map/page.tsx` | HTML sitemap | U-015 |

---

## Appendix B: Audit Statistics

| Metric | Count |
|--------|-------|
| Total Items | 19 |
| Passed | 14 |
| Failed | 2 |
| Warnings | 3 |
| N/A | 0 |
| Pending | 0 |

### Score by Subsection

| Subsection | Score |
|------------|-------|
| 2.1 URL Best Practices | 8/11 (73%) |
| 2.2 Site Architecture | 6/8 (75%) |
| **Overall Section 2** | **14/19 (74%)** |
