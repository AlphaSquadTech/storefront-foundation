# Phase 2: Bundle Size & Code Splitting

**Branch:** `phase-2-bundle-splitting`  
**Status:** 🔄 In Progress  
**Categories:** Bundle Size Optimization + Code Splitting & Lazy Loading  
**Total Checks:** 35

---

## Bundle Size Results

### Before vs After

| Route | Before | After | Reduction |
|-------|--------|-------|-----------|
| `/checkout` | 349 kB | 177 kB | **-172 kB (49%)** ✅ |
| `/checkout` route JS | 44.9 kB | 19.3 kB | **-25.6 kB (57%)** ✅ |

---

## Code Splitting & Lazy Loading (11 checks)

### C-001 to C-006: Route-Level Splitting

| ID | Check | Priority | Status | Notes |
|----|-------|----------|--------|-------|
| C-001 | Verify route-based code splitting | P0 | ✅ Pass | Next.js handles route splitting |
| C-002 | Use dynamic imports for heavy components | P0 | 🔧 Fixed | Checkout components lazy loaded |
| C-003 | Lazy load below-fold content | P1 | ✅ Pass | Homepage uses Suspense |
| C-004 | Split checkout into steps | P0 | 🔧 Fixed | Payment components lazy loaded |
| C-005 | Lazy load payment providers | P0 | 🔧 Fixed | SaleorNativePayment now dynamic |
| C-006 | Split admin/account pages | P1 | ⬜ TODO | |

### C-007 to C-011: Component-Level Splitting

| ID | Check | Priority | Status | Notes |
|----|-------|----------|--------|-------|
| C-007 | Lazy load modals | P1 | 🔧 Fixed | CheckoutTermsModal dynamic |
| C-008 | Lazy load carousels | P1 | ⬜ TODO | Check Swiper usage |
| C-009 | Lazy load charts/graphs | P2 | ➖ N/A | No charts in codebase |
| C-010 | Dynamic import vendor libs | P1 | ⬜ TODO | |
| C-011 | Prefetch critical routes | P1 | ⬜ TODO | |

---

## Bundle Size Optimization (24 checks)

### B-001 to B-008: Import Analysis

| ID | Check | Priority | Status | Notes |
|----|-------|----------|--------|-------|
| B-001 | Analyze bundle composition | P0 | ✅ Pass | Bundle analyzer run |
| B-002 | Remove unused dependencies | P0 | ⬜ TODO | |
| B-003 | Use tree-shakeable imports | P0 | ✅ Pass | Named imports used |
| B-004 | Avoid importing entire libraries | P1 | ⬜ TODO | |
| B-005 | Check for duplicate dependencies | P1 | ⬜ TODO | |
| B-006 | Use smaller alternatives | P2 | ⬜ TODO | |
| B-007 | Audit node_modules size | P1 | ⬜ TODO | |
| B-008 | Remove console.logs in production | P1 | ⬜ TODO | |

### B-009 to B-016: Third-Party Libraries

| ID | Check | Priority | Status | Notes |
|----|-------|----------|--------|-------|
| B-009 | Audit Apollo Client bundle impact | P0 | ⬜ TODO | |
| B-010 | Check Swiper bundle size | P1 | ⬜ TODO | |
| B-011 | Analyze icon library usage | P1 | ⬜ TODO | |
| B-012 | Review date library usage | P2 | ⬜ TODO | |
| B-013 | Check form library size | P1 | ⬜ TODO | |
| B-014 | Audit analytics SDK size | P1 | ⬜ TODO | |
| B-015 | Review payment SDK imports | P0 | 🔧 Fixed | Payment lazy loaded |
| B-016 | Check map library bundle | P2 | ⬜ TODO | |

### B-017 to B-024: Code Optimization

| ID | Check | Priority | Status | Notes |
|----|-------|----------|--------|-------|
| B-017 | Remove dead code | P0 | ⬜ TODO | |
| B-018 | Minimize polyfills | P1 | ⬜ TODO | |
| B-019 | Use production builds | P0 | ✅ Pass | Next.js production build |
| B-020 | Enable source map in dev only | P1 | ✅ Pass | Default Next.js behavior |
| B-021 | Audit CSS bundle size | P1 | ⬜ TODO | |
| B-022 | Remove unused CSS | P1 | ⬜ TODO | |
| B-023 | Check TypeScript compile output | P2 | ✅ Pass | Strict mode enabled |
| B-024 | Verify minification settings | P0 | ✅ Pass | Next.js handles minification |

---

## Changes Made

### 1. Checkout Page - Dynamic Imports
**File:** `src/app/checkout/CheckoutPageClient.tsx`

Converted to dynamic imports:
- `AddressManagement` (20 KB)
- `DealerShippingSection` (14 KB)
- `WillCallSection` (5 KB)
- `PaymentStep` (includes 60 KB payment component)
- `CheckoutQuestions` (15 KB)
- `CheckoutTermsModal` (modal)

### 2. Payment Step - Lazy Load Payment Provider
**File:** `src/app/components/checkout/paymentStep.tsx`

Converted `SaleorNativePayment` (60 KB) to dynamic import with loading state.

---

## Summary

**Checks Completed:** 13/35 (37%)
**P0 Completed:** 8/12 (67%)
**Issues Fixed:** 5 (dynamic imports)

### Key Achievement
**Checkout bundle reduced by 172 kB (49%)**
- Before: 349 kB first load
- After: 177 kB first load
- Target was <250 kB - **exceeded target by 73 kB**

### Remaining Items
- B-002 to B-014: Dependency audit
- C-006 to C-011: Additional lazy loading opportunities
- B-017 to B-022: Code/CSS cleanup
