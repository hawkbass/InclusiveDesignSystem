# TOKEN-DATA-SHADOWS.md - Reference Token Radii and Shadow Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 181-201 |
| **Previous Section** | [TOKEN-DATA-TYPOGRAPHY.md](./TOKEN-DATA-TYPOGRAPHY.md) |
| **Next Section** | [SEMANTIC-TOKENS.md](./SEMANTIC-TOKENS.md) |

---

## Prerequisites

- [TOKEN-DATA-TYPOGRAPHY.md](./TOKEN-DATA-TYPOGRAPHY.md) must be completed first
- This section concludes the `referenceTokens` object

---

## Code Block

Copy this code EXACTLY. Place it directly after the `typography` object closing brace from the previous section.

```tsx
  radii: {
    "none": "0px",
    "sm": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "3xl": "24px",
    "full": "9999px",
  },
  shadows: {
    "xs": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "sm": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "none": "none",
  },
}
```

---

## Line-by-Line Specification

### Lines 181-189: Border Radius Tokens

```tsx
  radii: {
    "none": "0px",
    "sm": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "3xl": "24px",
    "full": "9999px",
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 8 border radius values from sharp corners to full circles |
| **Why this approach** | Consistent radii create visual harmony across components |
| **Reference** | Tailwind CSS - Border radius scale |

**Border Radius Reference:**

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0px | Sharp corners (tables, certain cards) |
| `sm` | 4px | Subtle rounding (inputs, small elements) |
| `md` | 6px | **Default** for most UI elements |
| `lg` | 8px | Cards, modals, larger containers |
| `xl` | 12px | Prominent cards, feature sections |
| `2xl` | 16px | Hero elements, marketing cards |
| `3xl` | 24px | Very rounded corners, soft appearance |
| `full` | 9999px | Pill shapes, circular avatars |

**Why 9999px for "full"?**

| Reason | Explanation |
|--------|-------------|
| **Mathematical guarantee** | Any value > half the element's size creates a circle |
| **Universal** | Works regardless of element dimensions |
| **Common pattern** | Used by Tailwind, shadcn/ui, and most systems |

**In Simple Terms:** Setting a corner to 9999px is like saying "round it as much as possible." If the element is 40px tall, it becomes a perfect pill shape. If it's square, it becomes a circle.

---

### Lines 190-199: Shadow Tokens

```tsx
  shadows: {
    "xs": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "sm": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "none": "none",
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines 8 shadow values representing different elevation levels |
| **Why this approach** | Shadows indicate hierarchy and depth in the interface |
| **Reference** | Material Design 3 - Elevation system; Refactoring UI - "Shadows define elevation, not borders" |

**Shadow Token Reference:**

| Token | Elevation | Usage |
|-------|-----------|-------|
| `xs` | Minimal | Subtle depth for flat elements |
| `sm` | Low | Cards at rest, default container |
| `md` | Medium | Hovered cards, dropdowns |
| `lg` | High | Dialogs, modals, popovers |
| `xl` | Very high | Full-screen modals, sheets |
| `2xl` | Maximum | Dramatic depth, hero elements |
| `inner` | Inset | Pressed buttons, input fields |
| `none` | Zero | Remove shadow entirely |

**Understanding Shadow Syntax:**

```css
0 4px 6px -1px rgb(0 0 0 / 0.1)
│ │   │   │    └── Colour with 10% opacity
│ │   │   └── Spread: negative shrinks shadow
│ │   └── Blur: how soft the shadow is
│ └── Y offset: how far down
└── X offset: how far right (0 = directly below)
```

**Why Multiple Shadows?**

```tsx
"sm": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
```

Multiple shadows layered create more realistic depth:
1. First shadow: The main, larger shadow
2. Second shadow: A tighter, ambient shadow near the edge

**In Simple Terms:** Real objects don't cast one shadow - they cast soft, layered shadows. Two shadows look more natural than one.

**Why Use `rgb(0 0 0 / 0.1)` Instead of `rgba()`?**

| Syntax | Meaning |
|--------|---------|
| `rgb(0 0 0 / 0.1)` | Modern CSS - black at 10% opacity |
| `rgba(0, 0, 0, 0.1)` | Legacy CSS - same result |

The newer syntax is more readable and supported in all modern browsers.

---

### Line 200-201: Closing Brace for referenceTokens

```tsx
  },
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the `shadows` object AND the entire `referenceTokens` object |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript object syntax |

**Important:** Note there are TWO closing braces:
1. `},` closes the `shadows` object
2. `}` closes the entire `referenceTokens` object (NO comma here - it's the end)

---

## Verification Checklist

After copying this code:

- [ ] `radii` has exactly 8 entries (none, sm, md, lg, xl, 2xl, 3xl, full)
- [ ] `radii.full` equals "9999px"
- [ ] `shadows` has exactly 8 entries (xs, sm, md, lg, xl, 2xl, inner, none)
- [ ] Each shadow value uses `rgb(0 0 0 / X)` syntax (modern CSS)
- [ ] `shadows.none` equals `"none"` (the CSS keyword)
- [ ] Line 199 ends with `},` (comma - closing shadows object)
- [ ] Line 200-201 is `}` with NO comma (closing referenceTokens - end of object)

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Adding comma after final `}` | The last closing brace has no comma |
| Missing a shadow layer | Copy the entire multi-shadow strings carefully |
| Using `rgba()` instead of `rgb(... / X)` | Use the modern syntax as shown |

---

## Token Count

| Category | Count |
|----------|-------|
| Border radii | 8 |
| Box shadows | 8 |
| **Total** | **16** |

---

## Complete referenceTokens Summary

At this point, the `referenceTokens` object is complete with:

| Category | Token Count |
|----------|-------------|
| Colours | 55 |
| Spacing | 27 |
| Typography | 21 |
| Radii | 8 |
| Shadows | 8 |
| **Total** | **119** |

---

**Next Section:** [SEMANTIC-TOKENS.md](./SEMANTIC-TOKENS.md)


