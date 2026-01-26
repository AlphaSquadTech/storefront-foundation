# SEO Audit Findings Report - Section 6: Structured Data & Schema

**Audit Date:** 2026-01-27
**Platform:** wsm-base-template (Next.js 15 + Saleor GraphQL E-commerce)
**Auditor:** Claude Code
**Section:** 6 of 13
**Status:** In Progress

---

## Executive Summary

This document contains detailed findings from a comprehensive SEO audit of the wsm-base-template e-commerce platform for Section 6: Structured Data & Schema. The platform has a well-structured schema implementation with a central utility file (`src/lib/schema.ts`) that provides consistent JSON-LD generation across all pages.

**Legend:**

- PASS - Meets requirements
- FAIL - Does not meet requirements, needs fix
- WARN - Partially meets requirements, improvement recommended
- N/A - Not applicable to this platform

---

## Section 6: Structured Data & Schema

### 6.1 Organization & Website Schema

**File Locations:**
- `src/lib/schema.ts` (schema generation utilities)
- `src/app/page.tsx` (homepage implementation)
- `src/app/layout.tsx` (root layout - missing Organization schema)

**Current Implementation:**

Organization schema generator at `src/lib/schema.ts:32-56`:

```typescript
export function generateOrganizationSchema(
  siteName: string,
  siteUrl: string,
  logoUrl?: string,
  socialLinks?: string[]
) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteUrl).replace(
    /\/$/,
    ""
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: baseUrl,
    logo: logoUrl
      ? {
          "@type": "ImageObject",
          url: `${baseUrl}${logoUrl}`,
        }
      : undefined,
    sameAs: socialLinks || [],
  };
}
```

WebSite schema generator at `src/lib/schema.ts:61-87`:

```typescript
export function generateWebsiteSchema(
  siteName: string,
  siteUrl: string,
  searchUrl?: string
) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteUrl).replace(
    /\/$/,
    ""
  );

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
    potentialAction: searchUrl
      ? {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}${searchUrl}?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}
```

Homepage usage at `src/app/page.tsx:120-139`:

```typescript
const organizationSchema = generateOrganizationSchema(
  storeName,
  baseUrl,
  "/logo.png",
  [],
);

const websiteSchema = generateWebsiteSchema(storeName, baseUrl, "/search");

return (
  <>
    {/* Schema.org structured data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
    ...
  </>
);
```

#### Findings Table

| ID    | Check                                  | Status  | Finding                                                                                      |
| ----- | -------------------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| S-001 | Organization schema present            | PASS    | Organization schema is implemented via `generateOrganizationSchema()` in `src/lib/schema.ts` |
| S-002 | Organization schema site-wide          | FAIL    | Organization schema only on homepage (`src/app/page.tsx`), NOT in root layout               |
| S-003 | WebSite schema with SearchAction       | PASS    | WebSite schema includes SearchAction with proper urlTemplate at `src/lib/schema.ts:76-84`   |
| S-004 | Logo URL in Organization schema        | PASS    | Logo URL `/logo.png` passed and formatted as ImageObject at `src/app/page.tsx:123`          |
| S-005 | Social profiles in Organization schema | WARN    | socialLinks parameter exists but passed as empty array `[]` at `src/app/page.tsx:124`       |
| S-006 | Contact information in schema          | FAIL    | No contactPoint, address, or telephone in Organization schema function                      |

#### Detailed Analysis

**S-002: Organization schema NOT site-wide**

The Organization schema is only rendered on the homepage (`src/app/page.tsx`). Best practice dictates that Organization schema should be present on ALL pages to consistently communicate business identity to search engines.

| Page Type | Location | Has Organization Schema |
| --------- | -------- | ----------------------- |
| Homepage | `src/app/page.tsx` | Yes |
| Product pages | `src/app/product/[slug]/page.tsx` | No |
| Category pages | `src/app/category/[slug]/page.tsx` | No |
| Blog pages | `src/app/blog/[slug]/page.tsx` | No |
| All other pages | Various | No |

**Impact:** Search engines may not consistently associate the website with the organization brand across all pages.

**S-005: Social profiles empty**

The socialLinks parameter is implemented but not utilized:

```typescript
// src/app/page.tsx:124
const organizationSchema = generateOrganizationSchema(
  storeName,
  baseUrl,
  "/logo.png",
  [], // Empty array - no social profiles
);
```

**S-006: Missing contact information**

The Organization schema function lacks support for contact information. According to Schema.org, Organization should include:

- `contactPoint` - Customer service contact
- `address` - Physical business address
- `telephone` - Business phone number

Current function signature:
```typescript
generateOrganizationSchema(siteName, siteUrl, logoUrl?, socialLinks?)
```

Missing fields that should be added:
- `contactPoint`
- `address` (PostalAddress)
- `telephone`
- `email`

#### Recommendations

**Priority: HIGH**

1. **Move Organization schema to root layout for site-wide coverage:**

```typescript
// src/app/layout.tsx
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";

export default async function RootLayout({ children }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "";
  const storeName = getStoreName();

  const organizationSchema = generateOrganizationSchema(
    storeName,
    baseUrl,
    "/logo.png",
    ["https://facebook.com/storename", "https://instagram.com/storename"]
  );

  const websiteSchema = generateWebsiteSchema(storeName, baseUrl, "/search");

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

2. **Add contact information support to Organization schema:**

```typescript
// src/lib/schema.ts
interface ContactInfo {
  email?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function generateOrganizationSchema(
  siteName: string,
  siteUrl: string,
  logoUrl?: string,
  socialLinks?: string[],
  contactInfo?: ContactInfo
) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || siteUrl).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: baseUrl,
    logo: logoUrl ? {
      "@type": "ImageObject",
      url: `${baseUrl}${logoUrl}`,
    } : undefined,
    sameAs: socialLinks || [],
    contactPoint: contactInfo?.telephone ? {
      "@type": "ContactPoint",
      telephone: contactInfo.telephone,
      contactType: "customer service",
      email: contactInfo.email,
    } : undefined,
    address: contactInfo?.address ? {
      "@type": "PostalAddress",
      ...contactInfo.address,
    } : undefined,
  };
}
```

3. **Populate social profiles from configuration:**

Social links should be fetched from the tenant configuration or environment variables.

---

### 6.2 Product Schema

**File Locations:**
- `src/lib/schema.ts:92-135` (Product schema generator)
- `src/app/product/[slug]/page.tsx` (Server-side Product schema)
- `src/app/product/[slug]/ProductDetailClient.tsx` (Client-side schema updates)

**Current Implementation:**

Product schema generator at `src/lib/schema.ts:92-135`:

```typescript
export function generateProductSchema(product: Product) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!.replace(/\/$/, "");

  const images = Array.isArray(product.image)
    ? product.image
    : product.image
    ? [product.image]
    : [];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || "",
    image: images.map((img) =>
      img.startsWith("http") ? img : `${baseUrl}${img}`
    ),
    sku: product.sku || product.id,
    category: product.category?.name,
    offers: {
      "@type": "Offer",
      price: product.price?.toString() || "0",
      priceCurrency: product.currency || "USD",
      availability: product.availability
        ? `https://schema.org/${product.availability}`
        : "https://schema.org/InStock",
      url: `${baseUrl}/product/${product.id}`,
    },
    brand: product.brand
      ? {
          "@type": "Brand",
          name: product.brand,
        }
      : undefined,
    aggregateRating:
      product.rating && product.reviewCount
        ? {
            "@type": "AggregateRating",
            ratingValue: product.rating.toString(),
            reviewCount: product.reviewCount.toString(),
          }
        : undefined,
  };
}
```

Server-side implementation at `src/app/product/[slug]/page.tsx:110-158`:

```typescript
if (product) {
  const price = product.pricing?.priceRange?.start?.gross?.amount || 0;
  const currency = product.pricing?.priceRange?.start?.gross?.currency || "USD";
  const firstVariant = product.variants?.[0];
  const availability =
    firstVariant?.quantityAvailable && firstVariant.quantityAvailable > 0
      ? "InStock"
      : "OutOfStock";

  productSchema = generateProductSchema({
    id: product.id,
    name: product.name,
    description: product.description || "",
    image: product.media?.map((m) => m.url) || [],
    price,
    currency,
    availability,
    sku: firstVariant?.sku || product.id,
    brand: product.category?.name,
    rating: rating && !isNaN(rating) ? rating : undefined,
    reviewCount: reviewCount && !isNaN(reviewCount) && reviewCount > 0 ? reviewCount : undefined,
  });
}
```

#### Findings Table

| ID    | Check                               | Status  | Finding                                                                                |
| ----- | ----------------------------------- | ------- | -------------------------------------------------------------------------------------- |
| S-007 | Product schema on all product pages | PASS    | Product schema rendered server-side at `src/app/product/[slug]/page.tsx:164-168`       |
| S-008 | Product name in schema              | PASS    | Name field properly populated from `product.name`                                      |
| S-009 | Product description in schema       | PASS    | Description field populated with fallback to empty string                              |
| S-010 | Product image in schema             | PASS    | Images array from `product.media` properly formatted with full URLs                    |
| S-011 | Product price in schema             | PASS    | Price extracted from `pricing.priceRange.start.gross.amount`                           |
| S-012 | Product currency in schema          | PASS    | Currency from pricing data with "USD" fallback                                         |
| S-013 | Product availability in schema      | PASS    | Availability based on `quantityAvailable` - InStock/OutOfStock                         |
| S-014 | Product SKU in schema               | PASS    | SKU from variant with fallback to product.id                                           |
| S-015 | Product brand in schema             | WARN    | Using category name as brand at `page.tsx:145` - should use actual brand               |
| S-016 | Product MPN (part number) in schema | FAIL    | No MPN field in Product schema - important for automotive parts                        |
| S-017 | Product GTIN/UPC in schema          | FAIL    | No GTIN/UPC/EAN field in Product schema                                                |
| S-018 | Product reviews/ratings in schema   | PASS    | AggregateRating included when rating metadata exists                                   |
| S-019 | Offer schema nested in Product      | PASS    | Offer properly nested with price, currency, availability, url                          |
| S-020 | Product condition in schema         | FAIL    | No itemCondition field - should be "NewCondition" for new products                     |

#### Detailed Analysis

**S-015: Brand uses category name instead of actual brand**

At `src/app/product/[slug]/page.tsx:145`:
```typescript
brand: product.category?.name,
```

The brand is incorrectly set to the category name. For an automotive e-commerce site, the brand should come from:
- Product's manufacturer/brand metadata
- A dedicated brand attribute
- The product type or collection representing the brand

**S-016: Missing MPN (Manufacturer Part Number)**

For automotive parts, MPN is crucial for SEO. The schema should include:
```json
{
  "mpn": "ABC-123-XYZ"
}
```

Part numbers are likely available in product metadata or SKU.

**S-017: Missing GTIN/UPC**

No Global Trade Item Number support. Should include:
```json
{
  "gtin13": "0012345678905"
}
```
or
```json
{
  "gtin": "012345678905"
}
```

**S-020: Missing itemCondition**

Product condition should be specified:
```json
{
  "itemCondition": "https://schema.org/NewCondition"
}
```

#### Recommendations

**Priority: HIGH**

1. **Add MPN, GTIN, and itemCondition to Product schema:**

```typescript
// src/lib/schema.ts - Updated Product interface
interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string | string[];
  price?: number;
  currency?: string;
  availability?: string;
  sku?: string;
  brand?: string;
  rating?: number;
  reviewCount?: number;
  category?: { id: string; name: string };
  mpn?: string;        // Manufacturer Part Number
  gtin?: string;       // Global Trade Item Number
  condition?: string;  // NewCondition, UsedCondition, etc.
}

export function generateProductSchema(product: Product) {
  // ... existing code ...

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || "",
    image: images.map((img) => img.startsWith("http") ? img : `${baseUrl}${img}`),
    sku: product.sku || product.id,
    mpn: product.mpn,  // Add MPN
    gtin: product.gtin, // Add GTIN
    category: product.category?.name,
    itemCondition: product.condition
      ? `https://schema.org/${product.condition}`
      : "https://schema.org/NewCondition",
    offers: {
      "@type": "Offer",
      // ... existing offer fields ...
    },
    brand: product.brand ? {
      "@type": "Brand",
      name: product.brand,
    } : undefined,
    // ... rest of schema ...
  };
}
```

2. **Fix brand to use actual brand data:**

```typescript
// src/app/product/[slug]/page.tsx
const brandMeta = product.metadata?.find(m => m.key === "brand" || m.key === "manufacturer");
const brandName = brandMeta?.value || product.collections?.[0]?.name;

productSchema = generateProductSchema({
  // ... other fields ...
  brand: brandName,  // Use actual brand, not category
  mpn: firstVariant?.sku || product.metadata?.find(m => m.key === "part_number")?.value,
  gtin: product.metadata?.find(m => m.key === "upc" || m.key === "gtin")?.value,
  condition: "NewCondition",
});
```

---

### 6.3 Breadcrumb Schema

**File Locations:**
- `src/lib/schema.ts:172-185` (BreadcrumbList schema generator)
- Multiple pages implementing breadcrumb schema

**Current Implementation:**

Breadcrumb schema generator at `src/lib/schema.ts:172-185`:

```typescript
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}
```

#### Findings Table

| ID    | Check                                | Status  | Finding                                                                              |
| ----- | ------------------------------------ | ------- | ------------------------------------------------------------------------------------ |
| S-021 | BreadcrumbList schema on all pages   | PASS    | Breadcrumb schema present on product, category, brand, blog, FAQ, and listing pages  |
| S-022 | Breadcrumb items have correct URLs   | PASS    | URLs properly formatted with baseUrl prefix for relative paths                       |
| S-023 | Breadcrumb position values correct   | PASS    | Position uses 1-based indexing via `index + 1` at `schema.ts:180`                    |
| S-024 | Breadcrumb hierarchy matches visible | PASS    | Schema items match visible breadcrumb components on each page                        |

#### Detailed Analysis

All breadcrumb schema implementations reviewed:

| Page | Schema Location | Visible Breadcrumb | Match |
| ---- | --------------- | ------------------ | ----- |
| Product | `product/[slug]/page.tsx:154-158` | Home > Products > [Name] | Yes |
| Category | `category/[slug]/page.tsx:62-66` | Home > Categories > [Name] | Yes |
| Brand | `brand/[slug]/page.tsx:58-62` | Home > Brands > [Name] | Yes |
| Blog Post | `blog/[slug]/page.tsx:89-93` | Home > Blog > [Title] | Yes |
| Blog Listing | `blog/page.tsx:38-41` | Home > Blog | Yes |
| FAQ | `frequently-asked-questions/page.tsx:30-33` | Home > FAQ | Yes |
| Products All | `products/all/page.tsx:60-63` | Home > Products | Yes |
| Category Listing | `category/page.tsx:85-88` | Home > Categories | Yes |

**Note:** Homepage does not have breadcrumb schema, which is correct behavior.

#### Recommendations

**Priority: LOW**

The breadcrumb implementation is correct and comprehensive. No changes needed.

---

### 6.4 Other Schema Types

**File Locations:**
- `src/lib/schema.ts:140-167` (ItemList schema)
- `src/lib/schema.ts:190-204` (CollectionPage schema)
- `src/lib/schema.ts:231-245` (Blog schema)
- `src/lib/schema.ts:259-272` (FAQPage schema)
- `src/lib/schema.ts:335-366` (BlogPosting schema)

**Current Implementation:**

CollectionPage schema at `src/lib/schema.ts:190-204`:

```typescript
export function generateCollectionPageSchema(
  name: string,
  description: string,
  url: string
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${baseUrl}${url}`,
  };
}
```

FAQPage schema at `src/lib/schema.ts:259-272`:

```typescript
export function generateFAQPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
```

#### Findings Table

| ID    | Check                                     | Status  | Finding                                                                                |
| ----- | ----------------------------------------- | ------- | -------------------------------------------------------------------------------------- |
| S-025 | CollectionPage schema on category pages   | WARN    | Using WebPage instead of CollectionPage on `/category/[slug]/page.tsx`                 |
| S-026 | ItemList schema on listing pages          | PASS    | ItemList schema on search page (`SearchPageClient.tsx:392-410`)                        |
| S-027 | BlogPosting schema on blog posts          | PASS    | BlogPosting schema at `blog/[slug]/page.tsx:81-87`                                     |
| S-028 | Blog schema on blog listing               | WARN    | Using CollectionPage instead of Blog schema on `/blog/page.tsx:32-36`                  |
| S-029 | FAQPage schema where applicable           | PASS    | FAQPage schema with dynamic FAQ extraction at `frequently-asked-questions/page.tsx`    |
| S-030 | LocalBusiness schema (if physical stores) | N/A     | No physical stores in current configuration - dealer locator feature exists but unused |

#### Detailed Analysis

**S-025: Category pages use WebPage instead of CollectionPage**

At `src/app/category/[slug]/page.tsx:56-60`, the function called is `generateProductCategoryPageSchema` which returns `WebPage` type:

```typescript
// src/lib/schema.ts:209-226
export function generateProductCategoryPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",  // Should be CollectionPage for product categories
    name: `${name} - Product Category`,
    description,
    url: url.startsWith("http") ? url : `${baseUrl}${url}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
    },
  };
}
```

Better to use CollectionPage schema for category pages as they represent a collection of products.

**S-028: Blog listing uses CollectionPage instead of Blog**

At `src/app/blog/page.tsx:32-36`:
```typescript
const collectionSchema = generateCollectionPageSchema(
  'Blog',
  'Read our latest articles, news, and insights...',
  '/blog'
);
```

A dedicated Blog schema (`generateBlogSchema`) exists at `src/lib/schema.ts:231-245` but is not used on the blog listing page.

#### Recommendations

**Priority: MEDIUM**

1. **Update category pages to use CollectionPage schema:**

```typescript
// src/app/category/[slug]/page.tsx
const categoryPageSchema = generateCollectionPageSchema(
  categoryName,
  `Shop ${categoryName} at ${storeName}. Quality products with fast shipping.`,
  `/category/${slug}`
);
```

2. **Use Blog schema on blog listing page:**

```typescript
// src/app/blog/page.tsx
import { generateBlogSchema, generateBreadcrumbSchema } from "@/lib/schema";

const blogSchema = generateBlogSchema(
  'Blog',
  'Read our latest articles, news, and insights about our products and services.',
  '/blog'
);
```

---

### 6.5 Schema Validation

**File Locations:**
- All pages using JSON-LD schema via `dangerouslySetInnerHTML`
- `src/lib/schema.ts` (central schema generation)

**Current Implementation:**

All schemas are rendered using JSON-LD format via script tags:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

#### Findings Table

| ID    | Check                                      | Status  | Finding                                                                           |
| ----- | ------------------------------------------ | ------- | --------------------------------------------------------------------------------- |
| S-031 | All schema passes Google Rich Results Test | WARN    | Cannot verify without live URL - code review shows compliant structure            |
| S-032 | No schema errors in Search Console         | N/A     | Requires production deployment and GSC access to verify                           |
| S-033 | No schema warnings                         | WARN    | Missing recommended fields: MPN, GTIN on products; contactPoint on Organization   |
| S-034 | JSON-LD format used (not microdata)        | PASS    | All schemas use JSON-LD via `application/ld+json` script tags                     |

#### Detailed Analysis

**S-031 & S-033: Schema structure analysis**

Based on code review, the schemas follow Schema.org specifications but have the following gaps that may cause warnings:

| Schema Type | Missing Recommended Fields |
| ----------- | -------------------------- |
| Organization | contactPoint, address, telephone |
| Product | mpn, gtin, itemCondition |
| BlogPosting | publisher, mainEntityOfPage |
| Offer | seller, priceValidUntil |

**S-034: JSON-LD format confirmed**

All schema implementations correctly use:
- `type="application/ld+json"` script tags
- `JSON.stringify()` for proper serialization
- `dangerouslySetInnerHTML` for React rendering

No microdata or RDFa formats are used, which is the recommended approach.

#### Recommendations

**Priority: MEDIUM**

1. **Add missing recommended fields to pass Rich Results Test:**

Product schema additions:
```typescript
{
  "mpn": "...",
  "gtin": "...",
  "itemCondition": "https://schema.org/NewCondition"
}
```

Organization schema additions:
```typescript
{
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service"
  }
}
```

BlogPosting schema additions:
```typescript
{
  "publisher": {
    "@type": "Organization",
    "name": "Store Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/blog/post-slug"
  }
}
```

---

## Section 6: Summary

| Subsection              | Items  | Pass | Fail | Warn | N/A |
| ----------------------- | ------ | ---- | ---- | ---- | --- |
| 6.1 Organization & Website | 6   | 3    | 2    | 1    | 0   |
| 6.2 Product Schema      | 14     | 10   | 3    | 1    | 0   |
| 6.3 Breadcrumb Schema   | 4      | 4    | 0    | 0    | 0   |
| 6.4 Other Schema Types  | 6      | 3    | 0    | 2    | 1   |
| 6.5 Schema Validation   | 4      | 1    | 0    | 2    | 1   |
| **TOTAL**               | **34** | **21** | **5** | **6** | **2** |

**Section 6 Score: 21/32 (66%) - Needs Improvement**

**Score Interpretation:**
- 90-100%: Excellent
- 75-89%: Good
- 50-74%: Needs Improvement
- Below 50%: Critical

**Critical Issues to Address:**

1. **Organization schema not site-wide (S-002)** - Move to root layout for consistent brand signals across all pages
2. **Missing MPN/GTIN on Product schema (S-016, S-017)** - Critical for automotive parts e-commerce SEO
3. **Missing contact information in Organization schema (S-006)** - Adds trust signals for e-commerce

---

## Appendix A: Files Reviewed

| File | Purpose |
| ---- | ------- |
| `src/lib/schema.ts` | Central schema generation utilities |
| `src/app/page.tsx` | Homepage with Organization & WebSite schema |
| `src/app/layout.tsx` | Root layout (missing Organization schema) |
| `src/app/product/[slug]/page.tsx` | Product page with Product & Breadcrumb schema |
| `src/app/product/[slug]/ProductDetailClient.tsx` | Client-side schema updates |
| `src/app/category/[slug]/page.tsx` | Category page with WebPage & Breadcrumb schema |
| `src/app/category/page.tsx` | Category listing with CollectionPage schema |
| `src/app/brand/[slug]/page.tsx` | Brand page with CollectionPage & Breadcrumb schema |
| `src/app/blog/page.tsx` | Blog listing with CollectionPage & Breadcrumb schema |
| `src/app/blog/[slug]/page.tsx` | Blog post with BlogPosting & Breadcrumb schema |
| `src/app/frequently-asked-questions/page.tsx` | FAQ page with FAQPage & Breadcrumb schema |
| `src/app/products/all/page.tsx` | All products with CollectionPage & Breadcrumb schema |
| `src/app/search/SearchPageClient.tsx` | Search results with ItemList schema |
| `src/app/site-map/page.tsx` | Site map with BlogPosting & Breadcrumb schema |

---

## Appendix B: Summary Statistics

| Section | Total Items | Passed | Failed | Warnings | N/A | Completion |
| ------- | ----------- | ------ | ------ | -------- | --- | ---------- |
| 6.1 Organization & Website | 6 | 3 | 2 | 1 | 0 | 100% |
| 6.2 Product Schema | 14 | 10 | 3 | 1 | 0 | 100% |
| 6.3 Breadcrumb Schema | 4 | 4 | 0 | 0 | 0 | 100% |
| 6.4 Other Schema Types | 6 | 3 | 0 | 2 | 1 | 100% |
| 6.5 Schema Validation | 4 | 1 | 0 | 2 | 1 | 100% |
| **Section 6 Total** | **34** | **21** | **5** | **6** | **2** | **100%** |
