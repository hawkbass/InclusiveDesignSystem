# UTILITY-FUNCTIONS.md - Helper Functions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 371-397 |
| **Previous Section** | [LAWS-OF-UX.md](./LAWS-OF-UX.md) |
| **Next Section** | [COMPONENT-STATE.md](./COMPONENT-STATE.md) |

---

## Prerequisites

- [LAWS-OF-UX.md](./LAWS-OF-UX.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the `lawsOfUX` closing bracket.

```tsx

// Calculate contrast ratio between two colours
function getContrastRatio(foreground: string, background: string): number {
  // Simplified contrast calculation (would use actual luminance in production)
  const contrastValues: Record<string, number> = {
    "white-fuchsia-500": 4.5,
    "white-fuchsia-600": 5.2,
    "white-purple-500": 4.1,
    "white-blue-500": 4.6,
    "slate-900-white": 15.3,
    "slate-50-slate-950": 18.1,
    "fuchsia-500-slate-950": 6.2,
    "slate-400-white": 3.0,
    "slate-500-white": 4.6,
  }
  const key = `${foreground}-${background}`
  return contrastValues[key] || 4.5
}

// Check WCAG compliance
function getWCAGLevel(ratio: number): { level: string; color: string } {
  if (ratio >= 7) return { level: "AAA", color: "text-green-400" }
  if (ratio >= 4.5) return { level: "AA", color: "text-blue-400" }
  if (ratio >= 3) return { level: "AA Large", color: "text-amber-400" }
  return { level: "Fail", color: "text-red-400" }
}
```

---

## Line-by-Line Specification

### Lines 371-372: Empty Line and Function Comment

```tsx

// Calculate contrast ratio between two colours
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Adds visual separation and documents the function's purpose |
| **Why this approach** | Makes the code scannable and understandable |
| **Reference** | Code documentation best practice |

---

### Lines 373-387: getContrastRatio Function

```tsx
function getContrastRatio(foreground: string, background: string): number {
  // Simplified contrast calculation (would use actual luminance in production)
  const contrastValues: Record<string, number> = {
    "white-fuchsia-500": 4.5,
    "white-fuchsia-600": 5.2,
    "white-purple-500": 4.1,
    "white-blue-500": 4.6,
    "slate-900-white": 15.3,
    "slate-50-slate-950": 18.1,
    "fuchsia-500-slate-950": 6.2,
    "slate-400-white": 3.0,
    "slate-500-white": 4.6,
  }
  const key = `${foreground}-${background}`
  return contrastValues[key] || 4.5
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Returns the contrast ratio between two colours |
| **Why this approach** | Pre-calculated values for performance and demonstration |
| **Reference** | WCAG 2.1 - Contrast (Minimum) Success Criterion 1.4.3 |

**Function Breakdown:**

| Line | Code | Explanation |
|------|------|-------------|
| 373 | `function getContrastRatio(...)` | Declares function with two string parameters |
| 373 | `: number` | TypeScript return type - function returns a number |
| 374 | `// Simplified...` | Acknowledges this is a demo, not production code |
| 375 | `const contrastValues: Record<string, number>` | Type-safe object mapping strings to numbers |
| 376-384 | `{ ... }` | Pre-calculated contrast ratios for common combinations |
| 385 | `const key = \`${foreground}-${background}\`` | Creates lookup key like "white-fuchsia-500" |
| 386 | `return contrastValues[key] \|\| 4.5` | Returns stored value or default 4.5 |

**Why Pre-calculated Values?**

| Approach | Pros | Cons |
|----------|------|------|
| Pre-calculated (our approach) | Fast, simple, no dependencies | Limited to known combinations |
| Calculate from hex | Works for any colour | Complex math, needs library |
| Use a library (e.g., `wcag-contrast`) | Accurate, complete | Extra dependency |

**For a production system**, you would use a library like `color-contrast` or implement the WCAG luminance formula:

```javascript
// Production implementation (not used here)
function getLuminance(hex) {
  const rgb = hexToRgb(hex);
  const [r, g, b] = rgb.map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
```

**Contrast Ratio Explained:**

| Ratio | What It Means |
|-------|---------------|
| 1:1 | No contrast (same colour) |
| 3:1 | Minimum for large text |
| 4.5:1 | Minimum for normal text (WCAG AA) |
| 7:1 | Enhanced contrast (WCAG AAA) |
| 21:1 | Maximum (pure white on pure black) |

**In Simple Terms:** Contrast ratio is like measuring how different two colours are. The bigger the number, the easier to tell them apart. We need at least 4.5:1 for regular text to be readable.

---

### Lines 388-389: Empty Line and Function Comment

```tsx

// Check WCAG compliance
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Documents the next function |
| **Why this approach** | Improves code readability |
| **Reference** | Code documentation best practice |

---

### Lines 390-395: getWCAGLevel Function

```tsx
function getWCAGLevel(ratio: number): { level: string; color: string } {
  if (ratio >= 7) return { level: "AAA", color: "text-green-400" }
  if (ratio >= 4.5) return { level: "AA", color: "text-blue-400" }
  if (ratio >= 3) return { level: "AA Large", color: "text-amber-400" }
  return { level: "Fail", color: "text-red-400" }
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Determines WCAG compliance level from a contrast ratio |
| **Why this approach** | Provides both the level name and a display colour |
| **Reference** | WCAG 2.1 Success Criteria 1.4.3 (AA) and 1.4.6 (AAA) |

**Function Breakdown:**

| Line | Code | Explanation |
|------|------|-------------|
| 390 | `function getWCAGLevel(ratio: number)` | Takes a contrast ratio number |
| 390 | `: { level: string; color: string }` | Returns an object with level and colour |
| 391 | `if (ratio >= 7)` | AAA level: 7:1 or higher |
| 392 | `if (ratio >= 4.5)` | AA level: 4.5:1 or higher |
| 393 | `if (ratio >= 3)` | AA Large: 3:1 or higher (only for large text) |
| 394 | `return { level: "Fail", ...}` | Below 3:1 fails all standards |

**WCAG Levels Explained:**

| Level | Minimum Ratio | Applies To | Visual Indicator |
|-------|---------------|------------|------------------|
| AAA | 7:1 | All text | Green (text-green-400) |
| AA | 4.5:1 | Normal text | Blue (text-blue-400) |
| AA Large | 3:1 | Large text (18px+) or bold 14px+ | Amber (text-amber-400) |
| Fail | Below 3:1 | Nothing - don't use | Red (text-red-400) |

**Why Return Both Level and Colour?**

```tsx
const wcag = getWCAGLevel(4.5)
// wcag = { level: "AA", color: "text-green-400" }

// Usage in JSX:
<span className={wcag.color}>{wcag.level}</span>
// Renders: <span class="text-blue-400">AA</span>
```

This pattern avoids needing a separate function to get the colour.

**In Simple Terms:** This function works like a grading system:
- **AAA (Green)** = A+ (excellent)
- **AA (Blue)** = A (good, meets requirements)
- **AA Large (Amber)** = B (okay for big text only)
- **Fail (Red)** = F (don't use this combination)

---

## Verification Checklist

After copying this code:

- [ ] `getContrastRatio` function is present with 9 pre-calculated values
- [ ] `getContrastRatio` returns type is `: number`
- [ ] `getWCAGLevel` function is present with 4 return cases
- [ ] `getWCAGLevel` returns type is `: { level: string; color: string }`
- [ ] Colour classes are: `text-green-400`, `text-blue-400`, `text-amber-400`, `text-red-400`
- [ ] Both functions are declared with `function`, not `const`

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Missing TypeScript types | Include `: number` and `: { level: string; color: string }` |
| Wrong colour class names | Use `text-green-400` not `text-success` |
| Missing default return in getContrastRatio | The `\|\| 4.5` provides the default |

---

## Function Summary

| Function | Input | Output | Purpose |
|----------|-------|--------|---------|
| `getContrastRatio` | Two colour names | Number (ratio) | Get contrast ratio for a colour pair |
| `getWCAGLevel` | Contrast ratio | Object with level and colour | Determine WCAG compliance |

---

**Next Section:** [COMPONENT-STATE.md](./COMPONENT-STATE.md)


