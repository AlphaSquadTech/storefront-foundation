# Performance Audit Baseline

**Date:** 2026-01-29  
**Repo:** https://github.com/AlphaSquadTech/wsm-base-template  
**Commit:** ba3775e (main)  
**Test URL:** https://wsm-base-template.vercel.app

---

## Lighthouse Scores (Desktop)

| Metric | Value | Status |
|--------|-------|--------|
| **Performance Score** | 74/100 | 🟡 Needs Improvement |
| **LCP (Largest Contentful Paint)** | 5.2s | 🔴 Poor (>2.5s) |
| **FCP (First Contentful Paint)** | 1.8s | 🟡 Needs Improvement |
| **CLS (Cumulative Layout Shift)** | 0.024 | 🟢 Good (<0.1) |
| **TBT (Total Blocking Time)** | 30ms | 🟢 Good |
| **Speed Index** | 6.4s | 🔴 Poor |
| **TTI (Time to Interactive)** | 8.1s | 🔴 Poor |

---

## Bundle Size Analysis

### First Load JS (Shared by All Routes)
| Chunk | Size |
|-------|------|
| `4bd1b696-cc729d47eba2cee4.js` | 54.1 kB |
| `5964-b14196516283122f.js` | 44 kB |
| Other shared chunks | 2 kB |
| **Total Shared** | **100 kB** |

### Middleware
| Component | Size |
|-----------|------|
| Middleware | 34.6 kB |

### Route-Specific Bundles (First Load JS)

| Route | Size | First Load |
|-------|------|------------|
| `/` (homepage) | 25.5 kB | 225 kB |
| `/checkout` | 44.9 kB | 349 kB |
| `/product/[slug]` | 18 kB | 214 kB |
| `/order-confirmation` | 10.8 kB | 187 kB |
| `/cart` | 5.99 kB | 161 kB |
| `/search` | 4.78 kB | 157 kB |
| `/products/all` | 3.73 kB | 156 kB |
| `/locator` | 11.9 kB | 154 kB |
| `/category/[slug]` | 5.36 kB | 125 kB |
| `/brand/[slug]` | 5.17 kB | 125 kB |
| `/category` | 816 B | 110 kB |
| `/brands` | 1.27 kB | 105 kB |

### Static vs Dynamic Routes
- **Static (○):** 3 routes (robots.txt, sitemap.xml, sitemap-index.xml)
- **Dynamic (ƒ):** 26 routes

---

## Key Observations

### Critical Issues (P0)
1. **LCP 5.2s** - Way above 2.5s threshold. Hero image and main content loading too slow.
2. **TTI 8.1s** - Page takes too long to become interactive.
3. **Speed Index 6.4s** - Visual content rendering slowly.

### Areas of Concern (P1)
1. **Checkout bundle: 349 kB** - Largest route, needs code splitting.
2. **Homepage First Load: 225 kB** - Could be optimized with lazy loading.
3. **Shared JS: 100 kB** - Check for unused code in shared chunks.

### Good Metrics
1. **CLS: 0.024** - Layout stability is excellent.
2. **TBT: 30ms** - Main thread not blocked significantly.

---

## Target Goals (Post-Audit)

| Metric | Current | Target |
|--------|---------|--------|
| Performance Score | 74 | 90+ |
| LCP | 5.2s | <2.5s |
| FCP | 1.8s | <1.5s |
| TTI | 8.1s | <5s |
| Speed Index | 6.4s | <3.5s |
| First Load JS (shared) | 100 kB | <85 kB |
| Checkout bundle | 349 kB | <250 kB |

---

## Next Steps

Proceed to **Phase 1: Waterfalls & Server Performance** to address the core architectural issues causing slow LCP and TTI.
