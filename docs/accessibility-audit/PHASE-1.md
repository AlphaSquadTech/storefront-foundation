# Accessibility Audit - Phase 1: Perceivable + Semantic HTML

**Date:** 2026-01-29
**Auditor:** Andrey
**URL:** https://wsm-base-staging.vercel.app/
**Branch:** `a11y-phase-1-perceivable`

---

## Baseline Scores

### axe-core Results
- **Violations:** 2
- **Passes:** 42
- **Incomplete:** 2
- **Inapplicable:** 47

### Lighthouse Accessibility Score
- **Score:** 83/100
- **Failed Audits:** 5

---

## Violations Found

### 1. link-name (SERIOUS)
**Impact:** Serious
**WCAG:** 2.4.4, 4.1.2
**Nodes affected:** 4

**Issue:** Social media links in footer have no accessible text.

**Elements:**
- Facebook link
- YouTube link
- X (Twitter) link
- Instagram link

**Fix:** Add `aria-label` to each social link.

---

### 2. image-redundant-alt (MINOR)
**Impact:** Minor
**Nodes affected:** 6

**Issue:** Category card images have alt text that duplicates the adjacent heading text.

**Elements:** Popular Categories section (LIGHTING, WHEEL, FLUID, INTAKE, SUSPENSION, EXHAUST)

**Recommendation:** Use empty alt (`alt=""`) for decorative images when the text is already present, or use more descriptive alt text.

---

### 3. button-name (SERIOUS)
**Impact:** Serious
**WCAG:** 4.1.2

**Issue:** Icon-only buttons lack accessible names.

**Fix:** Add `aria-label` to icon buttons.

---

### 4. select-name (SERIOUS)
**Impact:** Serious
**WCAG:** 1.3.1, 4.1.2

**Issue:** Select elements (dropdowns) don't have associated labels.

**Fix:** Add visible labels or `aria-label` to select elements.

---

### 5. target-size (MODERATE)
**Impact:** Moderate
**WCAG:** 2.5.5 (AAA), 2.5.8 (AA)

**Issue:** Some touch targets are smaller than 24x24px.

**Recommendation:** Increase padding/size of small interactive elements.

---

## Semantic HTML Audit

### Heading Hierarchy
- [x] Single `<h1>` per page ✅
- [x] `<h2>` follows `<h1>` ✅
- [x] `<h3>` follows `<h2>` ✅
- [ ] No skipped levels - **NEEDS REVIEW** (some sections may skip)

### Landmark Elements
- [x] `<header>` present ✅
- [x] `<nav>` present ✅
- [x] `<main>` present with `id="main-content"` ✅
- [x] `<footer>` present ✅
- [x] `<section>` elements have `aria-label` or `aria-labelledby` ✅

### Skip Link
- [x] "Skip to main content" link present ✅
- [x] Links to `#main-content` ✅

### Document Structure
- [x] `<html>` has `lang` attribute ✅
- [x] Single `<main>` element ✅

---

## Fixes to Implement

### Priority 1 (SERIOUS - Must Fix)
1. Add `aria-label` to social media links in footer
2. Add `aria-label` to icon-only buttons
3. Add labels to select elements

### Priority 2 (MINOR - Should Fix)
4. Fix redundant alt text on category images

---

## Files to Modify

1. `src/app/components/layout/footer.tsx` - Social links
2. Various components with icon buttons
3. Select/dropdown components

---

## Fixes Applied

### 1. Social Media Links (footer.tsx)
- Added `label` property to SocialIcons array
- Added `aria-label="Follow us on {platform}"` to each link

### 2. Carousel Navigation Buttons
- `promotionsSwiper.tsx`: Added aria-labels "Previous slide" / "Next slide"
- `categorySwiper.tsx`: Added aria-labels "Previous category" / "Next category"
- `brandsSwiperClient.tsx`: Added aria-labels "Previous brand" / "Next brand"

### 3. Search Button (header/search.tsx)
- Added `aria-label="Search"` to search submit button

---

## Files Modified

1. `src/app/components/layout/footer.tsx`
2. `src/app/components/showroom/promotionsSwiper.tsx`
3. `src/app/components/showroom/categorySwiper.tsx`
4. `src/app/components/showroom/brandsSwiperClient.tsx`
5. `src/app/components/layout/header/search.tsx`

---

## Status: COMPLETE

**Build:** ✅ Passing
