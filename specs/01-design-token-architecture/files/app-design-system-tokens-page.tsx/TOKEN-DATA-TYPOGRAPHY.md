# TOKEN-DATA-TYPOGRAPHY.md - Reference Token Typography Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 150-180 |
| **Previous Section** | [TOKEN-DATA-SPACING.md](./TOKEN-DATA-SPACING.md) |
| **Next Section** | [TOKEN-DATA-SHADOWS.md](./TOKEN-DATA-SHADOWS.md) |

---

## Prerequisites

- [TOKEN-DATA-SPACING.md](./TOKEN-DATA-SPACING.md) must be completed first
- This section continues the `referenceTokens` object

---

## Code Block

Copy this code EXACTLY. Place it directly after the `spacing` object closing brace from the previous section.

```tsx
  typography: {
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
      mono: "JetBrains Mono, Consolas, monospace",
    },
    fontSize: {
      "xs": "12px",
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
    },
    fontWeight: {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
    },
    lineHeight: {
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625",
      "loose": "2",
    },
  },
```

---

## Line-by-Line Specification

### Line 150: Typography Object Start

```tsx
  typography: {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Starts the typography tokens section within `referenceTokens` |
| **Why this approach** | Groups all type-related values for consistency |
| **Reference** | Material Design 3 - Type Scale documentation |

---

### Lines 151-154: Font Families

```tsx
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
      mono: "JetBrains Mono, Consolas, monospace",
    },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines the two font families used in the system |
| **Why this approach** | Sans-serif for UI, monospace for code |
| **Reference** | Refactoring UI - Font selection principles |

**Why Inter?**

| Reason | Explanation |
|--------|-------------|
| **Designed for screens** | Created specifically for computer interfaces |
| **Variable font** | Single file supports all weights |
| **Excellent legibility** | Optimized for small sizes on screens |
| **Open source** | Free for commercial use |
| **Wide character support** | Supports many languages |

**Why JetBrains Mono?**

| Reason | Explanation |
|--------|-------------|
| **Designed for code** | Created by JetBrains for IDEs |
| **Ligatures** | Combines symbols like `=>` and `!=` into single glyphs |
| **Clear distinction** | Easy to tell apart `0/O`, `1/l/I` |
| **Free** | Open source and free to use |

**Font Stack Explained:**

```tsx
"Inter, system-ui, sans-serif"
```

| Position | Font | Why |
|----------|------|-----|
| 1st | Inter | Our preferred font |
| 2nd | system-ui | System default (if Inter not loaded) |
| 3rd | sans-serif | Generic fallback (guaranteed to exist) |

---

### Lines 155-166: Font Sizes

```tsx
    fontSize: {
      "xs": "12px",
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
    },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 10 font sizes from 12px to 60px |
| **Why this approach** | A modular scale creates visual harmony |
| **Reference** | Refactoring UI - "8-12 size scales"; Modular scale typography |

**Font Size Scale Reference:**

| Token | Pixels | Usage |
|-------|--------|-------|
| `xs` | 12px | Small labels, captions, footnotes |
| `sm` | 14px | Secondary text, descriptions |
| `base` | 16px | **Body text** (browser default) |
| `lg` | 18px | Slightly emphasized body text |
| `xl` | 20px | Subheadings |
| `2xl` | 24px | Section headings |
| `3xl` | 30px | Page section titles |
| `4xl` | 36px | Page titles |
| `5xl` | 48px | Hero text |
| `6xl` | 60px | Display/marketing text |

**Why 16px as Base?**

| Reason | Explanation |
|--------|-------------|
| **Browser default** | All browsers default to 16px |
| **Accessibility** | Proven readable for most users |
| **Relative sizing** | 1rem = 16px (easy calculations) |

**The Scale Progression:**

The sizes follow roughly a 1.2× scale (each step is ~1.2× larger than the previous):
- 12 → 14 (×1.17)
- 14 → 16 (×1.14)
- 16 → 18 (×1.125)
- 18 → 20 (×1.11)
- 20 → 24 (×1.2)
- 24 → 30 (×1.25)
- 30 → 36 (×1.2)
- 36 → 48 (×1.33)
- 48 → 60 (×1.25)

**In Simple Terms:** Font sizes work like shirt sizes. XS, S, M, L, XL... Each step up is noticeably bigger but still feels related to the others.

---

### Lines 167-172: Font Weights

```tsx
    fontWeight: {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
    },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 4 font weights |
| **Why this approach** | 4 weights provide enough variety without overwhelming |
| **Reference** | Refactoring UI - "5-7 font weights maximum" |

**Font Weight Reference:**

| Token | Numeric | CSS Keyword | Usage |
|-------|---------|-------------|-------|
| `normal` | 400 | normal | Body text |
| `medium` | 500 | - | Slightly emphasized text |
| `semibold` | 600 | - | Headings, labels, buttons |
| `bold` | 700 | bold | Strong emphasis, titles |

**Why Not 100-900?**

| Reason | Explanation |
|--------|-------------|
| **Cognitive load** | Too many options = harder decisions |
| **Visual clarity** | 4 weights create clear hierarchy |
| **Font support** | Not all fonts have all 9 weights |
| **Reference** | Hick's Law - Fewer choices = faster decisions |

---

### Lines 173-179: Line Heights

```tsx
    lineHeight: {
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625",
      "loose": "2",
    },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 5 line height options |
| **Why this approach** | Different content types need different line spacing |
| **Reference** | WCAG - Line spacing should be at least 1.5× for body text |

**Line Height Reference:**

| Token | Value | Usage |
|-------|-------|-------|
| `tight` | 1.25 | Headlines, single-line text |
| `snug` | 1.375 | Subheadings, short text blocks |
| `normal` | 1.5 | **Body text** (WCAG recommended minimum) |
| `relaxed` | 1.625 | Long-form reading |
| `loose` | 2 | Maximum spacing, very open layouts |

**What Do These Numbers Mean?**

The number is a multiplier of the font size:
- `lineHeight: 1.5` with `fontSize: 16px` = 24px line height
- `lineHeight: 2` with `fontSize: 16px` = 32px line height

**Why 1.5 as Normal?**

| Reason | Explanation |
|--------|-------------|
| **WCAG requirement** | Accessibility guidelines recommend 1.5 minimum for body text |
| **Readability** | Lines that are too close together are hard to track |
| **Universal** | Works well for most font sizes |

---

### Line 180: Closing Brace for typography

```tsx
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the `typography` object |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript object syntax |

---

## Verification Checklist

After copying this code:

- [ ] `fontFamily` has exactly 2 entries (sans, mono)
- [ ] `fontSize` has exactly 10 entries (xs through 6xl)
- [ ] `fontSize.base` equals "16px"
- [ ] `fontWeight` has exactly 4 entries (normal, medium, semibold, bold)
- [ ] `fontWeight.normal` equals "400" (string, not number!)
- [ ] `lineHeight` has exactly 5 entries (tight, snug, normal, relaxed, loose)
- [ ] `lineHeight.normal` equals "1.5"
- [ ] All values are strings (wrapped in quotes)

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Using numbers instead of strings for weights | Write `"400"` not `400` |
| Missing the comma after closing brace | Ensure `},` not just `}` |
| Wrong indent level | 4 spaces for nested properties |

---

## Token Count

| Category | Count |
|----------|-------|
| Font families | 2 |
| Font sizes | 10 |
| Font weights | 4 |
| Line heights | 5 |
| **Total** | **21** |

---

**Next Section:** [TOKEN-DATA-SHADOWS.md](./TOKEN-DATA-SHADOWS.md)


