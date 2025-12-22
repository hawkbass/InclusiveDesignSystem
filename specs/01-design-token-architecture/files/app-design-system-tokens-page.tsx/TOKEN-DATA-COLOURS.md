# TOKEN-DATA-COLOURS.md - Reference Token Colour Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 52-120 |
| **Previous Section** | [IMPORTS.md](./IMPORTS.md) |
| **Next Section** | [TOKEN-DATA-SPACING.md](./TOKEN-DATA-SPACING.md) |

---

## Prerequisites

- [IMPORTS.md](./IMPORTS.md) must be completed first
- This section defines colour data that will be used throughout the page

---

## Code Block

Copy this code EXACTLY. Place it directly after the imports (after line 51).

```tsx

// ============================================================================
// TOKEN ARCHITECTURE - Three-tier system inspired by Carbon + Material Design
// ============================================================================

// TIER 1: Reference Tokens (Primitives) - Raw values
const referenceTokens = {
  colors: {
    // Fuchsia scale
    "fuchsia-50": { value: "#fdf4ff", hsl: "289 100% 98%" },
    "fuchsia-100": { value: "#fae8ff", hsl: "287 100% 95%" },
    "fuchsia-200": { value: "#f5d0fe", hsl: "288 96% 91%" },
    "fuchsia-300": { value: "#f0abfc", hsl: "291 93% 83%" },
    "fuchsia-400": { value: "#e879f9", hsl: "292 91% 73%" },
    "fuchsia-500": { value: "#d946ef", hsl: "289 86% 65%" },
    "fuchsia-600": { value: "#c026d3", hsl: "293 87% 53%" },
    "fuchsia-700": { value: "#a21caf", hsl: "295 91% 40%" },
    "fuchsia-800": { value: "#86198f", hsl: "296 91% 33%" },
    "fuchsia-900": { value: "#701a75", hsl: "297 90% 28%" },
    "fuchsia-950": { value: "#4a044e", hsl: "297 95% 16%" },
    // Purple scale
    "purple-50": { value: "#faf5ff", hsl: "270 100% 98%" },
    "purple-100": { value: "#f3e8ff", hsl: "269 100% 95%" },
    "purple-200": { value: "#e9d5ff", hsl: "269 100% 92%" },
    "purple-300": { value: "#d8b4fe", hsl: "269 97% 85%" },
    "purple-400": { value: "#c084fc", hsl: "270 95% 75%" },
    "purple-500": { value: "#a855f7", hsl: "271 91% 65%" },
    "purple-600": { value: "#9333ea", hsl: "271 81% 56%" },
    "purple-700": { value: "#7c3aed", hsl: "263 70% 58%" },
    "purple-800": { value: "#6b21a8", hsl: "273 72% 40%" },
    "purple-900": { value: "#581c87", hsl: "274 72% 32%" },
    "purple-950": { value: "#3b0764", hsl: "274 87% 21%" },
    // Blue scale
    "blue-50": { value: "#eff6ff", hsl: "214 100% 97%" },
    "blue-100": { value: "#dbeafe", hsl: "214 95% 93%" },
    "blue-200": { value: "#bfdbfe", hsl: "213 97% 87%" },
    "blue-300": { value: "#93c5fd", hsl: "212 96% 78%" },
    "blue-400": { value: "#60a5fa", hsl: "213 94% 68%" },
    "blue-500": { value: "#3b82f6", hsl: "217 91% 60%" },
    "blue-600": { value: "#2563eb", hsl: "221 83% 53%" },
    "blue-700": { value: "#1d4ed8", hsl: "224 76% 48%" },
    "blue-800": { value: "#1e40af", hsl: "226 71% 40%" },
    "blue-900": { value: "#1e3a8a", hsl: "224 64% 33%" },
    "blue-950": { value: "#172554", hsl: "226 57% 21%" },
    // Slate scale (neutrals)
    "slate-50": { value: "#f8fafc", hsl: "210 40% 98%" },
    "slate-100": { value: "#f1f5f9", hsl: "210 40% 96%" },
    "slate-200": { value: "#e2e8f0", hsl: "214 32% 91%" },
    "slate-300": { value: "#cbd5e1", hsl: "213 27% 84%" },
    "slate-400": { value: "#94a3b8", hsl: "215 20% 65%" },
    "slate-500": { value: "#64748b", hsl: "215 16% 47%" },
    "slate-600": { value: "#475569", hsl: "215 19% 35%" },
    "slate-700": { value: "#334155", hsl: "215 25% 27%" },
    "slate-800": { value: "#1e293b", hsl: "217 33% 17%" },
    "slate-900": { value: "#0f172a", hsl: "222 47% 11%" },
    "slate-950": { value: "#020617", hsl: "224 71% 4%" },
    // Status colors
    "green-500": { value: "#22c55e", hsl: "142 71% 45%" },
    "green-600": { value: "#16a34a", hsl: "142 76% 36%" },
    "red-500": { value: "#ef4444", hsl: "0 84% 60%" },
    "red-600": { value: "#dc2626", hsl: "0 72% 51%" },
    "amber-500": { value: "#f59e0b", hsl: "38 92% 50%" },
    "amber-600": { value: "#d97706", hsl: "32 95% 44%" },
    "cyan-500": { value: "#06b6d4", hsl: "189 94% 43%" },
    "cyan-600": { value: "#0891b2", hsl: "192 91% 36%" },
    // Pure values
    "white": { value: "#ffffff", hsl: "0 0% 100%" },
    "black": { value: "#000000", hsl: "0 0% 0%" },
    "transparent": { value: "transparent", hsl: "transparent" },
  },
```

---

## Line-by-Line Specification

### Lines 52-54: Section Header Comment

```tsx
// ============================================================================
// TOKEN ARCHITECTURE - Three-tier system inspired by Carbon + Material Design
// ============================================================================
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a visual separator and explains what the following code does |
| **Why this approach** | Comments help future developers understand the code's purpose at a glance |
| **Reference** | Code documentation best practice - Section headers for large files |

**In Simple Terms:** This is like putting a chapter title in a book. It tells you "everything below this until the next title is about tokens."

---

### Line 55: Empty Line

```tsx

```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates visual breathing room after the header |
| **Why this approach** | Improves readability |
| **Reference** | Code style convention |

---

### Line 56: Tier 1 Comment

```tsx
// TIER 1: Reference Tokens (Primitives) - Raw values
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Explains that this is the first tier of the token architecture |
| **Why this approach** | Makes the three-tier system immediately obvious to any reader |
| **Reference** | Material Design 3 Token Architecture - Reference tokens layer |

**What are Reference Tokens?**
- The most basic building blocks
- Raw values with no meaning attached
- Examples: `#d946ef` (a hex colour), `16px` (a size)
- Named by WHAT they are, not WHY they're used

---

### Line 57: referenceTokens Object Declaration

```tsx
const referenceTokens = {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a constant (unchangeable) object to hold all primitive token values |
| **Why this approach** | `const` prevents accidental modification. Object structure organizes tokens by category. |
| **Reference** | JavaScript best practice - Use const for configuration that shouldn't change |

**Why `const` and not `let`?**
- `let` allows the value to be changed later
- `const` means "this will never change"
- Token definitions should be immutable (never change during runtime)

---

### Line 58: Colors Object Start

```tsx
  colors: {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Starts the colours section within referenceTokens |
| **Why this approach** | Groups all colour tokens together for easy access |
| **Reference** | IBM Carbon - Token organization by category |

---

### Lines 59-69: Fuchsia Scale Comment and Values

```tsx
    // Fuchsia scale
    "fuchsia-50": { value: "#fdf4ff", hsl: "289 100% 98%" },
    "fuchsia-100": { value: "#fae8ff", hsl: "287 100% 95%" },
    // ... continues to fuchsia-950
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 11 shades of fuchsia from lightest (50) to darkest (950) |
| **Why this approach** | A complete colour scale allows for flexibility in design while maintaining harmony |
| **Reference** | Refactoring UI - "Building on a system of 10 shades per colour gives you the flexibility you need" |

**Why Fuchsia as Primary?**

| Reason | Explanation |
|--------|-------------|
| **Distinction** | Stands out from common blue/green palettes used by other systems |
| **Accessibility** | Good contrast ratios possible with both black and white text |
| **Vibrancy** | Energetic, modern feel suitable for the design system |
| **Reference** | Material Design 3 - Brand colour selection guidelines |

**Understanding the Number Scale:**

| Number | Meaning | Usage |
|--------|---------|-------|
| 50 | Lightest | Subtle backgrounds, hover states |
| 100-200 | Very light | Background tints |
| 300-400 | Light | Disabled states, borders |
| 500 | Base | The "main" shade - primary actions |
| 600-700 | Dark | Hover states, emphasis |
| 800-900 | Very dark | High contrast needs |
| 950 | Darkest | Dark mode backgrounds |

**In Simple Terms:** Imagine painting with watercolours. 50 is like barely dipping your brush - mostly water, just a hint of colour. 950 is like using paint straight from the tube - very intense.

**Token Structure Explained:**

```tsx
"fuchsia-500": { value: "#fdf4ff", hsl: "289 100% 98%" },
```

| Part | What It Is | Why Included |
|------|------------|--------------|
| `"fuchsia-500"` | The token name (key) | Describes the colour family and shade |
| `value` | Hex colour code | Used directly in CSS |
| `hsl` | HSL representation | Easier for humans to understand (Hue, Saturation, Lightness) |

---

### Lines 70-80: Purple Scale

```tsx
    // Purple scale
    "purple-50": { value: "#faf5ff", hsl: "270 100% 98%" },
    // ... 11 shades total
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 11 shades of purple as a secondary/accent colour |
| **Why this approach** | Purple complements fuchsia (adjacent on colour wheel) for gradient effects |
| **Reference** | Material Design 3 - Secondary colour derivation |

**Why Purple as Secondary?**
- Adjacent to fuchsia on the colour wheel (harmonious)
- Creates beautiful gradients when combined with fuchsia
- Provides variety without clashing

---

### Lines 81-91: Blue Scale

```tsx
    // Blue scale
    "blue-50": { value: "#eff6ff", hsl: "214 100% 97%" },
    // ... 11 shades total
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 11 shades of blue for informational/trust elements |
| **Why this approach** | Blue is universally associated with trust, links, and information |
| **Reference** | Colour psychology research - Blue conveys trust and reliability |

**Usage:**
- Information badges
- Links (traditional web convention)
- Version badges in the hero section

---

### Lines 92-102: Slate Scale (Neutrals)

```tsx
    // Slate scale (neutrals)
    "slate-50": { value: "#f8fafc", hsl: "210 40% 98%" },
    // ... 11 shades total
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 11 shades of slate grey for text, backgrounds, and borders |
| **Why this approach** | Slate has a slight blue tint, which feels modern and works well with fuchsia/purple |
| **Reference** | Refactoring UI - "Don't use pure grey - add some colour" |

**Why Slate instead of Pure Grey?**
- Pure grey (#888888) looks "flat" and dated
- Slate has a subtle blue undertone
- This creates visual harmony with the fuchsia/purple/blue palette
- Modern design systems use tinted neutrals

**Critical Usage:**

| Token | Typical Usage |
|-------|---------------|
| `slate-50` | Light mode backgrounds |
| `slate-100-200` | Subtle background variations |
| `slate-400-500` | Muted/secondary text |
| `slate-900` | Primary text (light mode) |
| `slate-950` | Dark mode backgrounds |

---

### Lines 103-114: Status Colours

```tsx
    // Status colors
    "green-500": { value: "#22c55e", hsl: "142 71% 45%" },
    "green-600": { value: "#16a34a", hsl: "142 76% 36%" },
    "red-500": { value: "#ef4444", hsl: "0 84% 60%" },
    "red-600": { value: "#dc2626", hsl: "0 72% 51%" },
    "amber-500": { value: "#f59e0b", hsl: "38 92% 50%" },
    "amber-600": { value: "#d97706", hsl: "32 95% 44%" },
    "cyan-500": { value: "#06b6d4", hsl: "189 94% 43%" },
    "cyan-600": { value: "#0891b2", hsl: "192 91% 36%" },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines colours for success, error, warning, and info states |
| **Why this approach** | These colours have universal meaning that users already understand |
| **Reference** | WCAG - Colour alone should not convey meaning (but still helps when combined with text/icons) |

**Status Colour Meanings:**

| Colour | Status | Examples |
|--------|--------|----------|
| Green | Success, positive | "Saved", "Passes WCAG", "Active" |
| Red | Error, danger | "Failed", "Delete", "Error" |
| Amber | Warning, caution | "Large text only", "Deprecated" |
| Cyan | Information | "Info", "Note", "Tip" |

**Why Two Shades (500 and 600)?**
- 500: The base colour
- 600: Darker shade for hover states or better contrast

---

### Lines 115-118: Pure Values

```tsx
    // Pure values
    "white": { value: "#ffffff", hsl: "0 0% 100%" },
    "black": { value: "#000000", hsl: "0 0% 0%" },
    "transparent": { value: "transparent", hsl: "transparent" },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines pure white, pure black, and transparent |
| **Why this approach** | These are special values needed for specific cases (overlays, pure contrasts) |
| **Reference** | CSS specification - Reserved colour keywords |

**Usage:**
- `white`: Button text on coloured backgrounds, light mode surfaces
- `black`: Maximum contrast text (rarely used - prefer slate-900)
- `transparent`: Overlay backgrounds, invisible borders

---

### Line 119: Closing Brace for colors Object

```tsx
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the `colors` object within `referenceTokens` |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript object syntax |

**Note:** This is NOT the closing brace for `referenceTokens`. The `referenceTokens` object continues in the next file with `spacing`, `typography`, etc.

---

## Verification Checklist

After copying this code:

- [ ] Line 52 starts with `// ====` (comment header)
- [ ] Line 57 starts with `const referenceTokens = {`
- [ ] Fuchsia scale has exactly 11 colours (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
- [ ] Purple scale has exactly 11 colours
- [ ] Blue scale has exactly 11 colours
- [ ] Slate scale has exactly 11 colours
- [ ] Status colours: 2 green, 2 red, 2 amber, 2 cyan
- [ ] Pure values: white, black, transparent
- [ ] Line 119 ends with `},` (comma after closing brace)
- [ ] Total: 63 colour tokens defined

---

## Token Count

| Scale | Count |
|-------|-------|
| Fuchsia | 11 |
| Purple | 11 |
| Blue | 11 |
| Slate | 11 |
| Green | 2 |
| Red | 2 |
| Amber | 2 |
| Cyan | 2 |
| Pure values | 3 |
| **Total** | **55** |

---

**Next Section:** [TOKEN-DATA-SPACING.md](./TOKEN-DATA-SPACING.md)


