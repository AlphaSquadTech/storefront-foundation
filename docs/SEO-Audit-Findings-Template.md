# SEO Audit Findings Template

**Purpose:** This template provides AI agents with a standardized format for documenting SEO audit findings. Follow this structure exactly to ensure consistency across all audit sections.

---

## Template Structure Overview

Each findings document should contain:

1. **Document Header** - Metadata about the audit
2. **Executive Summary** - Brief overview and legend (only in main document)
3. **Section Content** - Detailed findings for each audit area
4. **Section Summary** - Statistics and critical issues
5. **Appendices** - Files reviewed and summary statistics

---

## 1. Document Header Format

```markdown
# SEO Audit Findings Report - Section [N]: [Section Title]

**Audit Date:** [YYYY-MM-DD]
**Platform:** wsm-base-template (Next.js 15 + Saleor GraphQL E-commerce)
**Auditor:** Claude Code
**Section:** [N] of 13
**Status:** [In Progress | Complete]

---
```

---

## 2. Executive Summary (Main Document Only)

Include this only in the primary findings document, not in individual section reports:

```markdown
## Executive Summary

This document contains detailed findings from a comprehensive SEO audit of the wsm-base-template e-commerce platform. Each section corresponds to the checklist items in `SEO-Audit.md`.

**Legend:**

- ✅ **PASS** - Meets requirements
- ❌ **FAIL** - Does not meet requirements, needs fix
- ⚠️ **WARN** - Partially meets requirements, improvement recommended
- ⬜ **N/A** - Not applicable to this platform

---
```

---

## 3. Section Content Structure

### 3.1 Section Header

```markdown
## Section [N]: [Section Title]

### [N.1] [Subsection Title]

**File Location(s):**
- `path/to/primary/file.ts`
- `path/to/related/file.ts`

**Current Implementation:**

[Include relevant code snippets or configuration excerpts]

```[language]
// Relevant code snippet
```
```

### 3.2 Findings Table Format

Every subsection MUST include a findings table with these exact columns:

```markdown
#### Findings Table

| ID     | Check                           | Status  | Finding                                                    |
| ------ | ------------------------------- | ------- | ---------------------------------------------------------- |
| [X-001] | [What is being checked]        | ✅ PASS | [Specific finding with file references]                    |
| [X-002] | [What is being checked]        | ❌ FAIL | [Specific issue found, impact described]                   |
| [X-003] | [What is being checked]        | ⚠️ WARN | [Partial compliance, what's missing]                       |
| [X-004] | [What is being checked]        | ⬜ N/A  | [Why not applicable]                                       |
```

**ID Naming Convention:**
- Section 1 (Crawlability): C-001, C-002, ...
- Section 2 (URL Structure): U-001, U-002, ...
- Section 3 (On-Page SEO): P-001, P-002, ...
- Section 4 (Technical SEO): T-001, T-002, ...
- Section 5 (Core Web Vitals): V-001, V-002, ...
- Section 6 (Structured Data): S-001, S-002, ...
- Section 7 (Mobile SEO): M-001, M-002, ...
- Section 8 (Content & E-E-A-T): E-001, E-002, ...
- Section 9 (E-commerce SEO): EC-001, EC-002, ...
- Section 10 (International/Local): I-001, I-002, ...
- Section 11 (Security & Trust): ST-001, ST-002, ...
- Section 12 (Social & Sharing): SO-001, SO-002, ...
- Section 13 (Analytics): A-001, A-002, ...

### 3.3 Detailed Analysis Format

For any FAIL or WARN items, provide detailed analysis:

```markdown
#### Detailed Analysis

**[ID]: [Brief Issue Title]**

[Explanation of the issue, including:]
- What was found
- Where it was found (file:line references)
- Why it matters for SEO
- Impact if not addressed

[Include code snippets showing the problem:]

```typescript
// Current problematic code at src/path/file.ts:42
const example = "problematic implementation"
```

[If applicable, include a table of affected items:]

| Item | Location | Issue | Impact |
| ---- | -------- | ----- | ------ |
| Page A | `src/app/page-a/page.tsx` | Missing X | Medium |
| Page B | `src/app/page-b/page.tsx` | Missing Y | High |
```

### 3.4 Recommendations Format

```markdown
#### Recommendations

**Priority: [HIGH | MEDIUM | LOW]**

1. **[Recommendation Title]**

[Explanation of what to do]

```typescript
// Recommended implementation
const example = "correct implementation"
```

2. **[Recommendation Title]**

[Explanation with options if applicable:]

**Option A: [Quick Fix]**
```typescript
// Quick fix code
```

**Option B: [Recommended Long-term Solution]**
```typescript
// Better solution code
```

3. **[Additional Recommendation]**

[Bullet points for simpler recommendations:]
- Action item 1
- Action item 2
- Action item 3
```

---

## 4. Section Summary Format

At the end of each section, include:

```markdown
---

## Section [N]: Summary

| Subsection              | Items  | ✅ Pass | ❌ Fail | ⚠️ Warn | ⬜ N/A |
| ----------------------- | ------ | ------- | ------- | ------- | ------ |
| [N.1] [Subsection Name] | [X]    | [X]     | [X]     | [X]     | [X]    |
| [N.2] [Subsection Name] | [X]    | [X]     | [X]     | [X]     | [X]    |
| [N.3] [Subsection Name] | [X]    | [X]     | [X]     | [X]     | [X]    |
| **TOTAL**               | **[X]**| **[X]** | **[X]** | **[X]** | **[X]**|

**Section [N] Score: [Pass]/[Total Applicable] ([X]%) - [Excellent | Good | Needs Improvement | Critical]**

**Score Interpretation:**
- 90-100%: Excellent
- 75-89%: Good
- 50-74%: Needs Improvement
- Below 50%: Critical

**Critical Issues to Address:**

1. [Most important issue - brief description]
2. [Second most important issue]
3. [Third most important issue]

---
```

---

## 5. Appendices Format

### Appendix A: Files Reviewed

```markdown
## Appendix A: Files Reviewed

| File | Purpose |
| ---- | ------- |
| `src/app/example/page.tsx` | Example page component |
| `src/lib/utils.ts` | Utility functions |
| `next.config.ts` | Next.js configuration |
```

### Appendix B: Summary Statistics

```markdown
## Appendix B: Summary Statistics

| Section | Total Items | Passed | Failed | Warnings | N/A | Completion |
| ------- | ----------- | ------ | ------ | -------- | --- | ---------- |
| [N.1] Subsection | [X] | [X] | [X] | [X] | [X] | 100% |
| [N.2] Subsection | [X] | [X] | [X] | [X] | [X] | 100% |
| **Section [N] Total** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **100%** |
```

---

## Agent Instructions

### Before Starting an Audit Section

1. **Read the corresponding section in `SEO-Audit.md`** to understand what checks are required
2. **Identify all relevant files** that need to be reviewed for that section
3. **Read each file thoroughly** before making any findings
4. **Use the ID prefix** corresponding to the section being audited

### While Documenting Findings

1. **Be specific** - Include file paths and line numbers
2. **Show evidence** - Include code snippets for FAIL and WARN items
3. **Explain impact** - Why does this matter for SEO?
4. **Provide actionable recommendations** - Code examples when possible
5. **Prioritize correctly** - HIGH for issues affecting indexation/ranking, MEDIUM for best practices, LOW for optimizations

### Status Assignment Guidelines

| Status | When to Use |
| ------ | ----------- |
| ✅ PASS | Requirement fully met, implementation correct |
| ❌ FAIL | Requirement not met, fix required for proper SEO |
| ⚠️ WARN | Partially met, improvement recommended but not critical |
| ⬜ N/A | Check doesn't apply to this platform/configuration |

### Quality Checklist

Before completing a section, verify:

- [ ] All checklist items from `SEO-Audit.md` are addressed
- [ ] Every finding has a unique ID
- [ ] All FAIL/WARN items have detailed analysis
- [ ] Recommendations include code examples where applicable
- [ ] Files reviewed are listed in Appendix A
- [ ] Summary statistics are accurate
- [ ] Section score is calculated correctly

---

## Example: Complete Subsection

```markdown
### 3.1 Title Tags

**File Locations:**
- `src/app/layout.tsx` (root metadata)
- `src/app/product/[id]/page.tsx` (product pages)
- `src/app/category/[slug]/page.tsx` (category pages)

**Current Implementation:**

Root layout sets default title template:

```typescript
// src/app/layout.tsx:38
export const metadata: Metadata = {
  title: {
    default: brandName,
    template: `%s | ${brandName}`,
  },
  // ...
}
```

#### Findings Table

| ID    | Check                        | Status  | Finding                                                           |
| ----- | ---------------------------- | ------- | ----------------------------------------------------------------- |
| P-001 | Title tags present on all pages | ✅ PASS | All pages have title tags via metadata exports or generateMetadata |
| P-002 | Titles under 60 characters   | ⚠️ WARN | 3 product titles exceed 60 chars due to long product names        |
| P-003 | Unique titles per page       | ✅ PASS | Dynamic titles generated from content, no duplicates found        |
| P-004 | Brand name in titles         | ✅ PASS | Template adds `| BrandName` suffix to all pages                   |
| P-005 | Primary keyword in title     | ⚠️ WARN | Category pages don't include category name in title               |

#### Detailed Analysis

**P-002: Some Titles Exceed 60 Characters**

Found 3 product pages with titles over 60 characters:

| Product | Title Length | Truncated In SERP |
| ------- | ------------ | ----------------- |
| Premium Widget Pro | 67 chars | Yes |
| Extended Warranty Package | 64 chars | Possibly |
| Complete Installation Kit | 62 chars | Possibly |

This occurs because the title template is:
```typescript
title: `${product.name} | ${brandName}`
```

Long product names combined with brand name exceed the limit.

**P-005: Category Titles Missing Keywords**

Category pages use generic titles:

```typescript
// src/app/category/[slug]/page.tsx:52
title: `Shop ${categoryName}`,
```

Better SEO would include relevant keywords like:
- "Buy [Category] Online"
- "[Category] - Shop [Brand]"

#### Recommendations

**Priority: MEDIUM**

1. **Truncate long product titles:**

```typescript
// src/app/product/[id]/page.tsx
const truncatedName = product.name.length > 45
  ? product.name.substring(0, 42) + '...'
  : product.name

return {
  title: truncatedName,
  // ...
}
```

2. **Enhance category titles with keywords:**

```typescript
// src/app/category/[slug]/page.tsx
return {
  title: `Buy ${categoryName} Online | Shop ${brandName}`,
  // ...
}
```
```

---

## File Naming Convention

When creating separate findings documents per section:

```
docs/
├── SEO-Audit.md                          # Main checklist
├── SEO-Audit-Findings-Template.md        # This template
├── SEO-Audit-Section1-Findings.md        # Crawlability & Indexation
├── SEO-Audit-Section2-Findings.md        # URL Structure
├── SEO-Audit-Section3-Findings.md        # On-Page SEO
├── SEO-Audit-Section4-Findings.md        # Technical SEO
├── SEO-Audit-Section5-Findings.md        # Core Web Vitals
├── SEO-Audit-Section6-Findings.md        # Structured Data
├── SEO-Audit-Section7-Findings.md        # Mobile SEO
├── SEO-Audit-Section8-Findings.md        # Content & E-E-A-T
├── SEO-Audit-Section9-Findings.md        # E-commerce SEO
├── SEO-Audit-Section10-Findings.md       # International/Local
├── SEO-Audit-Section11-Findings.md       # Security & Trust
├── SEO-Audit-Section12-Findings.md       # Social & Sharing
└── SEO-Audit-Section13-Findings.md       # Analytics
```
