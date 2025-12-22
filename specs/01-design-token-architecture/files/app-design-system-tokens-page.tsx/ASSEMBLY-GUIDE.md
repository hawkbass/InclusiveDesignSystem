# Assembly Guide: app/design-system/tokens/page.tsx

## File Overview

| Property | Value |
|----------|-------|
| **Final File Path** | `app/design-system/tokens/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | 1,527 |
| **Total Parts** | 20 |
| **Purpose** | Three-tier design token architecture page with interactive playground |

---

## Reading Order

Implement each part file in this exact sequence:

| Order | Part File | Lines Covered | What It Creates |
|-------|-----------|---------------|-----------------|
| 1 | `IMPORTS.md` | 1-51 | Client directive, React imports, component imports, icon imports |
| 2 | `TOKEN-DATA-COLOURS.md` | 52-120 | Reference tokens: colour primitives (fuchsia, purple, blue, slate) |
| 3 | `TOKEN-DATA-SPACING.md` | 121-149 | Reference tokens: spacing scale (4px increments) |
| 4 | `TOKEN-DATA-TYPOGRAPHY.md` | 150-180 | Reference tokens: fonts, sizes, weights, line heights |
| 5 | `TOKEN-DATA-SHADOWS.md` | 181-201 | Reference tokens: radii and shadow elevation |
| 6 | `SEMANTIC-TOKENS.md` | 203-292 | Semantic tokens: light mode, dark mode, spacing meanings |
| 7 | `COMPONENT-TOKENS.md` | 294-338 | Component tokens: button, input, card, badge |
| 8 | `LAWS-OF-UX.md` | 340-370 | Laws of UX data: Fitts's, Hick's, Miller's, Jakob's |
| 9 | `UTILITY-FUNCTIONS.md` | 372-396 | Helper functions: contrast ratio, WCAG level checker |
| 10 | `COMPONENT-STATE.md` | 398-452 | Component declaration, state variables, handlers |
| 11 | `HERO-HEADER.md` | 454-549 | Page layout start, hero section, badges, stats, buttons |
| 12 | `SEARCH-NAVIGATION.md` | 551-601 | Search bar and tab navigation |
| 13 | `TAB-ARCHITECTURE.md` | 603-837 | Architecture tab: three-tier system, Laws of UX |
| 14 | `TAB-COLOURS.md` | 839-1027 | Colours tab: theme toggle, colour grid, contrast checker |
| 15 | `TAB-SPACING.md` | 1029-1091 | Spacing tab: visual spacing bars, semantic spacing |
| 16 | `TAB-TYPOGRAPHY.md` | 1093-1187 | Typography tab: font sizes, weights, families |
| 17 | `TAB-COMPONENTS.md` | 1189-1252 | Components tab: component-specific tokens |
| 18 | `TAB-PLAYGROUND.md` | 1254-1377 | Playground tab: colour picker, preview |
| 19 | `TAB-EXPORT.md` | 1379-1488 | Export tab: format selection, code preview |
| 20 | `FOOTER.md` | 1489-1527 | Related resources section, closing tags |

---

## How to Assemble

### Step 1: Create the File
Create a new file at: `app/design-system/tokens/page.tsx`

### Step 2: Copy Code in Order
For each part file (1-20):
1. Open the part file
2. Find the `## Code Block` section
3. Copy the entire code block
4. Paste it into your file (after the previous part's code)

### Step 3: Verify No Gaps
After pasting all 20 parts, the file should:
- Start with `"use client"` on line 1
- End with a single `}` on line 1527
- Have no blank lines between sections (unless specified in the part)

---

## Verification Checklist

After assembling all parts, verify:

### Syntax Check
```bash
npm run lint
```
**Expected:** No errors related to `app/design-system/tokens/page.tsx`

### Build Check
```bash
npm run build
```
**Expected:** Build completes successfully

### Visual Check
1. Open `http://localhost:3000/design-system/tokens`
2. Verify the page loads without errors

### Functionality Check

| Feature | How to Test | Expected Result |
|---------|-------------|-----------------|
| Tabs | Click each tab | Content changes, tab highlights |
| Search | Type "fuchsia" | Only fuchsia colours show |
| Copy | Click any token | Green checkmark appears, value in clipboard |
| Theme Toggle | Click Light/Dark buttons | Colour previews change |
| Colour Picker | Use playground colour picker | Preview buttons change colour |
| Export Format | Click CSS/SCSS/JSON/JS | Code preview changes format |

---

## File Statistics

| Metric | Value |
|--------|-------|
| Total Lines | 1,527 |
| Total Characters | ~52,000 |
| Total Parts | 20 |
| Average Lines per Part | ~76 |
| Imports | 51 lines |
| Data Definitions | 319 lines |
| Utility Functions | 25 lines |
| Component Logic | ~1,130 lines |

---

## Dependencies

Before this file will work, ensure these components exist:

| Component | Path | Purpose |
|-----------|------|---------|
| UnifiedSidebar | `components/ui/unified-sidebar.tsx` | Navigation sidebar |
| Card | `components/ui/card.tsx` | Content cards |
| Badge | `components/ui/badge.tsx` | Status indicators |
| Button | `components/ui/button.tsx` | Interactive buttons |
| Tabs | `components/ui/tabs.tsx` | Tab navigation |
| Input | `components/ui/input.tsx` | Text input |
| Label | `components/ui/label.tsx` | Form labels |
| Slider | `components/ui/slider.tsx` | Range slider |
| Switch | `components/ui/switch.tsx` | Toggle switch |

---

## Troubleshooting

### Error: "Cannot find module '@/components/ui/...'"
**Cause:** A UI component doesn't exist
**Fix:** Check that all components in the Dependencies table exist

### Error: "Unexpected token"
**Cause:** Code was copied incorrectly
**Fix:** 
1. Check the part file where the error occurs
2. Ensure no characters were missed or added
3. Pay attention to opening/closing braces `{ }`

### Error: "Hook called outside component"
**Cause:** The `useState` or `useEffect` lines are outside the component function
**Fix:** Ensure COMPONENT-STATE.md code is inside the `function Tokens() {` block

### Page shows "Loading..." forever
**Cause:** The `mounted` state check is blocking render
**Fix:** Ensure the `useEffect` that sets `mounted` to `true` is present

---

## Part File Naming Convention

Files are named by their CONTENT, not their order:

| Naming Pattern | Example |
|----------------|---------|
| `IMPORTS` | All import statements |
| `TOKEN-DATA-*` | Data definition sections |
| `SEMANTIC-TOKENS` | Semantic token mappings |
| `COMPONENT-TOKENS` | Component-specific tokens |
| `LAWS-OF-UX` | UX psychology data |
| `UTILITY-FUNCTIONS` | Helper functions |
| `COMPONENT-STATE` | React state and handlers |
| `HERO-HEADER` | Header/hero section JSX |
| `SEARCH-NAVIGATION` | Search and nav JSX |
| `TAB-*` | Individual tab content |
| `FOOTER` | Footer and closing tags |

This makes it easy to find and update specific sections.

---

**Start with:** `IMPORTS.md`


