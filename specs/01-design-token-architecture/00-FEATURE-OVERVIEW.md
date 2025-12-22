# Feature 01: Design Token Architecture

## Overview

This feature implements a world-class three-tier design token system for the Inclusive Design System, replacing the previous basic token documentation with a comprehensive, interactive, and educational token architecture page.

---

## What This Feature Does

1. **Defines a Three-Tier Token System**
   - Tier 1: Reference Tokens (primitives like `fuchsia-500`, `spacing-4`)
   - Tier 2: Semantic Tokens (meaningful like `color-action-primary`)
   - Tier 3: Component Tokens (specific like `button-bg-primary`)

2. **Visualizes Token Relationships**
   - Shows how tokens derive from each other
   - Interactive diagrams showing the flow from primitive → semantic → component

3. **Provides Interactive Tools**
   - Token playground with live preview
   - Colour picker and theme toggle
   - Search across all 200+ tokens

4. **Includes Accessibility Features**
   - WCAG contrast ratio checker
   - Colour blindness considerations
   - AA/AAA compliance indicators

5. **Enables Multi-Format Export**
   - CSS Variables
   - SCSS Variables
   - JSON
   - JavaScript modules
   - Figma integration ready

6. **Documents UX Psychology**
   - Shows how tokens support Laws of UX
   - Fitts's Law, Hick's Law, Miller's Law, Jakob's Law

---

## Files in This Feature

| File | Purpose | Part Count |
|------|---------|------------|
| `app/design-system/tokens/page.tsx` | Main token architecture page | 20 parts |

**Total Files:** 1  
**Total Parts:** 20  
**Total Lines of Code:** 1,527

---

## Part Files Structure

```
/specs/01-design-token-architecture/files/
└── app-design-system-tokens-page.tsx/
    ├── ASSEMBLY-GUIDE.md          ← Start here
    ├── IMPORTS.md                 ← Part 1: Lines 1-51
    ├── TOKEN-DATA-COLOURS.md      ← Part 2: Lines 52-120
    ├── TOKEN-DATA-SPACING.md      ← Part 3: Lines 121-149
    ├── TOKEN-DATA-TYPOGRAPHY.md   ← Part 4: Lines 150-180
    ├── TOKEN-DATA-SHADOWS.md      ← Part 5: Lines 181-201
    ├── SEMANTIC-TOKENS.md         ← Part 6: Lines 202-292
    ├── COMPONENT-TOKENS.md        ← Part 7: Lines 293-338
    ├── LAWS-OF-UX.md              ← Part 8: Lines 339-370
    ├── UTILITY-FUNCTIONS.md       ← Part 9: Lines 371-397
    ├── COMPONENT-STATE.md         ← Part 10: Lines 398-453
    ├── HERO-HEADER.md             ← Part 11: Lines 454-549
    ├── SEARCH-NAVIGATION.md       ← Part 12: Lines 550-602
    ├── TAB-ARCHITECTURE.md        ← Part 13: Lines 603-837
    ├── TAB-COLOURS.md             ← Part 14: Lines 838-1027
    ├── TAB-SPACING.md             ← Part 15: Lines 1028-1091
    ├── TAB-TYPOGRAPHY.md          ← Part 16: Lines 1092-1187
    ├── TAB-COMPONENTS.md          ← Part 17: Lines 1188-1252
    ├── TAB-PLAYGROUND.md          ← Part 18: Lines 1253-1377
    ├── TAB-EXPORT.md              ← Part 19: Lines 1378-1489
    └── FOOTER.md                  ← Part 20: Lines 1490-1527
```

---

## Implementation Sequence

### Step 1: Read the Assembly Guide
Open `/specs/01-design-token-architecture/files/app-design-system-tokens-page.tsx/ASSEMBLY-GUIDE.md`

### Step 2: Create the File
Create or replace: `app/design-system/tokens/page.tsx`

### Step 3: Copy Each Part in Order
1. Open each part file (IMPORTS.md, TOKEN-DATA-COLOURS.md, etc.)
2. Copy the code block from each
3. Paste into the file in sequence

### Step 4: Verify
1. Run `npm run lint` - should show no errors
2. Open `http://localhost:3000/design-system/tokens`
3. Verify all tabs work (Architecture, Colours, Spacing, Typography, Components, Playground, Export)
4. Verify search works
5. Verify copy-to-clipboard works
6. Verify theme toggle works in Playground

---

## Design Systems Referenced

| Design System | What We Learned |
|---------------|-----------------|
| **Material Design 3** | Three-tier token architecture (reference → system → component) |
| **IBM Carbon** | Token naming conventions (`color-`, `space-`, `font-`) |
| **Atlassian** | Token relationship visualization |
| **Shopify Polaris** | Interactive token playground |
| **GitHub Primer** | Semantic token structure |
| **Adobe Spectrum** | Dark/light mode token mappings |

### Direct References:

1. **Material Design Token Architecture**
   - URL: https://m3.material.io/foundations/design-tokens
   - Used for: Three-tier hierarchy concept

2. **Carbon Design System Tokens**
   - URL: https://carbondesignsystem.com/elements/color/tokens/
   - Used for: Token naming patterns

3. **Laws of UX**
   - URL: https://lawsofux.com
   - Used for: Fitts's Law, Hick's Law, Miller's Law, Jakob's Law integration

---

## Books Referenced

| Book | Author | What We Used |
|------|--------|--------------|
| **Refactoring UI** | Adam Wathan, Steve Schoger | Limited colour palette (10 shades per hue), 8px grid system |
| **Don't Make Me Think** | Steve Krug | Progressive disclosure in tab navigation |
| **Laws of UX** | Jon Yablonski | Psychology-backed design principles |

---

## Expected Result

After implementation, the tokens page will:

1. **Display a hero section** with:
   - Status badge (Stable)
   - Version number (v2.1.0)
   - Token count (200+ tokens)
   - Quick stats (89 colours, 24 spacing, 16 typography, 40+ component)

2. **Show seven tabs:**
   - Architecture (default) - explains the three-tier system
   - Colours - all colour tokens with contrast checker
   - Spacing - all spacing tokens with visual bars
   - Typography - font sizes, weights, families
   - Components - component-specific tokens
   - Playground - interactive token editor
   - Export - download tokens in multiple formats

3. **Include Laws of UX section** explaining how tokens support psychological principles

4. **Provide search** that filters across all token types

5. **Enable theme preview** to see tokens in light/dark mode

---

## Technical Decisions Explained

### Why "use client"?
The page uses React hooks (`useState`, `useEffect`, `useMemo`) and browser APIs (`navigator.clipboard`). These only work in Client Components in Next.js App Router.

**Reference:** Next.js Documentation - Client Components

### Why useMemo for filtered tokens?
Filtering 200+ tokens on every keystroke would be slow. `useMemo` caches the result and only recalculates when the search query changes.

**Reference:** React Documentation - useMemo

### Why a three-tier system instead of two?
Two-tier systems (primitive + semantic) work for small projects. Three-tier systems (+ component) allow:
- Precise component-level adjustments
- Easier theming
- Better maintainability at scale

**Reference:** Material Design 3 Token Architecture

### Why include Laws of UX?
Design tokens aren't just about colours and spacing - they directly impact usability. By connecting tokens to psychological principles, developers understand WHY certain values were chosen.

**Reference:** Laws of UX by Jon Yablonski

---

## Accessibility Considerations

1. **Colour Contrast**
   - All text meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
   - Contrast checker built into the page shows compliance

2. **Keyboard Navigation**
   - All tabs accessible via keyboard
   - All buttons focusable
   - Copy functions work with Enter key

3. **Screen Reader**
   - Proper heading hierarchy (h1, h2, h3, h4)
   - Descriptive button labels
   - ARIA labels where needed

---

## Performance Considerations

1. **Memoization**
   - Token filtering uses `useMemo` to prevent unnecessary recalculations

2. **Mount Check**
   - `mounted` state prevents hydration mismatch between server and client

3. **No External Fetching**
   - All token data is hardcoded for instant loading
   - No API calls required

---

**Start Implementation:** Open `files/app-design-system-tokens-page.tsx/ASSEMBLY-GUIDE.md`

