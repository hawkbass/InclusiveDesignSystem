# COMPONENT-TOKENS.md - Tier 3 Component Token Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 293-338 |
| **Previous Section** | [SEMANTIC-TOKENS.md](./SEMANTIC-TOKENS.md) |
| **Next Section** | [LAWS-OF-UX.md](./LAWS-OF-UX.md) |

---

## Prerequisites

- [SEMANTIC-TOKENS.md](./SEMANTIC-TOKENS.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the `semanticTokens` closing brace.

```tsx

// TIER 3: Component Tokens - Component-specific mappings
const componentTokens = {
  button: {
    "button-height-sm": { semantic: "space-lg", value: "32px" },
    "button-height-md": { semantic: "space-xl", value: "40px" },
    "button-height-lg": { semantic: "space-2xl", value: "48px" },
    "button-padding-x-sm": { semantic: "space-sm", value: "12px" },
    "button-padding-x-md": { semantic: "space-md", value: "16px" },
    "button-padding-x-lg": { semantic: "space-lg", value: "24px" },
    "button-radius": { reference: "radii.md", value: "6px" },
    "button-font-size": { reference: "typography.fontSize.sm", value: "14px" },
    "button-font-weight": { reference: "typography.fontWeight.medium", value: "500" },
    "button-bg-primary": { semantic: "color-action-primary", purpose: "Primary button background" },
    "button-bg-primary-hover": { semantic: "color-action-primary-hover", purpose: "Primary button hover" },
    "button-text-primary": { reference: "white", purpose: "Primary button text" },
  },
  input: {
    "input-height-sm": { value: "32px" },
    "input-height-md": { value: "40px" },
    "input-height-lg": { value: "48px" },
    "input-padding-x": { semantic: "space-sm", value: "12px" },
    "input-radius": { reference: "radii.md", value: "6px" },
    "input-border-width": { value: "1px" },
    "input-border-color": { semantic: "color-border-default", purpose: "Default border" },
    "input-border-color-focus": { semantic: "color-border-focus", purpose: "Focus border" },
    "input-bg": { semantic: "color-bg-default", purpose: "Input background" },
    "input-placeholder": { semantic: "color-text-subtle", purpose: "Placeholder text" },
  },
  card: {
    "card-padding-sm": { semantic: "space-md", value: "16px" },
    "card-padding-md": { semantic: "space-lg", value: "24px" },
    "card-padding-lg": { semantic: "space-xl", value: "32px" },
    "card-radius": { reference: "radii.lg", value: "8px" },
    "card-bg": { semantic: "color-surface-default", purpose: "Card background" },
    "card-border": { semantic: "color-border-muted", purpose: "Card border" },
    "card-shadow": { reference: "shadows.sm", purpose: "Card elevation" },
  },
  badge: {
    "badge-padding-x": { value: "8px" },
    "badge-padding-y": { value: "2px" },
    "badge-radius": { reference: "radii.full", value: "9999px" },
    "badge-font-size": { reference: "typography.fontSize.xs", value: "12px" },
    "badge-font-weight": { reference: "typography.fontWeight.medium", value: "500" },
  },
}
```

---

## Line-by-Line Specification

### Lines 293-294: Section Comment and Object Declaration

```tsx
// TIER 3: Component Tokens - Component-specific mappings
const componentTokens = {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Declares the third and final tier of the token architecture |
| **Why this approach** | Component tokens allow precise control over individual components |
| **Reference** | Material Design 3 - Component tokens layer |

**Why Component Tokens?**

| Without Component Tokens | With Component Tokens |
|-------------------------|----------------------|
| Change button padding = affects all uses of `space-md` | Change `button-padding-x-md` = affects only buttons |
| No documentation of component-specific values | Self-documenting: "this is the button height" |
| Harder to maintain consistency | Component rules are explicit |

---

### Lines 295-307: Button Tokens

```tsx
  button: {
    "button-height-sm": { semantic: "space-lg", value: "32px" },
    "button-height-md": { semantic: "space-xl", value: "40px" },
    "button-height-lg": { semantic: "space-2xl", value: "48px" },
    // ... more button tokens
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines all tokens specific to the Button component |
| **Why this approach** | Buttons are the most-used interactive element and need precise control |
| **Reference** | Fitts's Law - Touch targets must be at least 44px |

**Button Token Reference:**

| Token | Semantic/Reference | Value | Purpose |
|-------|-------------------|-------|---------|
| `button-height-sm` | space-lg | 32px | Small button height |
| `button-height-md` | space-xl | 40px | Default button height |
| `button-height-lg` | space-2xl | 48px | Large button (mobile-friendly) |
| `button-padding-x-sm` | space-sm | 12px | Small button horizontal padding |
| `button-padding-x-md` | space-md | 16px | Default button horizontal padding |
| `button-padding-x-lg` | space-lg | 24px | Large button horizontal padding |
| `button-radius` | radii.md | 6px | Button corner rounding |
| `button-font-size` | typography.fontSize.sm | 14px | Button text size |
| `button-font-weight` | typography.fontWeight.medium | 500 | Button text weight |
| `button-bg-primary` | color-action-primary | - | Primary button background |
| `button-bg-primary-hover` | color-action-primary-hover | - | Primary button on hover |
| `button-text-primary` | white | - | Primary button text colour |

**Why 48px for Large Buttons?**

| Reason | Explanation |
|--------|-------------|
| **Fitts's Law** | Larger targets are easier to hit |
| **Mobile** | Apple HIG recommends 44px minimum |
| **Accessibility** | WCAG 2.1 Target Size (Enhanced) is 44px |
| **Reference** | Laws of UX - Fitts's Law |

**Token Property Types:**

| Property | When to Use |
|----------|-------------|
| `semantic` | When the value maps to a semantic token |
| `reference` | When the value maps to a reference token |
| `value` | The actual value (for documentation/export) |
| `purpose` | Human-readable description |

---

### Lines 308-318: Input Tokens

```tsx
  input: {
    "input-height-sm": { value: "32px" },
    "input-height-md": { value: "40px" },
    "input-height-lg": { value: "48px" },
    // ... more input tokens
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines all tokens specific to form inputs |
| **Why this approach** | Inputs need to align with buttons for visual harmony |
| **Reference** | Refactoring UI - Form design principles |

**Input Token Reference:**

| Token | Semantic/Reference | Value | Purpose |
|-------|-------------------|-------|---------|
| `input-height-sm` | - | 32px | Small input height |
| `input-height-md` | - | 40px | Default input height |
| `input-height-lg` | - | 48px | Large input height |
| `input-padding-x` | space-sm | 12px | Horizontal padding inside input |
| `input-radius` | radii.md | 6px | Input corner rounding |
| `input-border-width` | - | 1px | Border thickness |
| `input-border-color` | color-border-default | - | Normal state border |
| `input-border-color-focus` | color-border-focus | - | Focused state border |
| `input-bg` | color-bg-default | - | Input background |
| `input-placeholder` | color-text-subtle | - | Placeholder text colour |

**Why Input Heights Match Button Heights?**

```
┌─────────────────────┐ ┌──────────┐
│  Search...          │ │  Submit  │
└─────────────────────┘ └──────────┘
        40px               40px
```

When an input and button are side-by-side, matching heights create visual harmony.

---

### Lines 319-326: Card Tokens

```tsx
  card: {
    "card-padding-sm": { semantic: "space-md", value: "16px" },
    "card-padding-md": { semantic: "space-lg", value: "24px" },
    "card-padding-lg": { semantic: "space-xl", value: "32px" },
    // ... more card tokens
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines all tokens specific to Card components |
| **Why this approach** | Cards are containers that group content |
| **Reference** | Material Design 3 - Cards documentation |

**Card Token Reference:**

| Token | Semantic/Reference | Value | Purpose |
|-------|-------------------|-------|---------|
| `card-padding-sm` | space-md | 16px | Compact card padding |
| `card-padding-md` | space-lg | 24px | Default card padding |
| `card-padding-lg` | space-xl | 32px | Spacious card padding |
| `card-radius` | radii.lg | 8px | Card corner rounding |
| `card-bg` | color-surface-default | - | Card background |
| `card-border` | color-border-muted | - | Card border colour |
| `card-shadow` | shadows.sm | - | Card elevation shadow |

---

### Lines 327-333: Badge Tokens

```tsx
  badge: {
    "badge-padding-x": { value: "8px" },
    "badge-padding-y": { value: "2px" },
    "badge-radius": { reference: "radii.full", value: "9999px" },
    "badge-font-size": { reference: "typography.fontSize.xs", value: "12px" },
    "badge-font-weight": { reference: "typography.fontWeight.medium", value: "500" },
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines all tokens specific to Badge components |
| **Why this approach** | Badges need tight, compact styling |
| **Reference** | Atlassian Design System - Status indicators |

**Badge Token Reference:**

| Token | Semantic/Reference | Value | Purpose |
|-------|-------------------|-------|---------|
| `badge-padding-x` | - | 8px | Horizontal padding |
| `badge-padding-y` | - | 2px | Vertical padding (tight) |
| `badge-radius` | radii.full | 9999px | Pill shape |
| `badge-font-size` | typography.fontSize.xs | 12px | Compact text |
| `badge-font-weight` | typography.fontWeight.medium | 500 | Slightly emphasized |

---

### Lines 334-335: Closing Brace for componentTokens

```tsx
  },
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the `badge` object and the entire `componentTokens` object |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript object syntax |

---

## Verification Checklist

After copying this code:

- [ ] Line 294 starts with `const componentTokens = {`
- [ ] `button` object has 12 tokens
- [ ] `input` object has 10 tokens
- [ ] `card` object has 7 tokens
- [ ] `badge` object has 5 tokens
- [ ] All height tokens (sm/md/lg) are 32px/40px/48px
- [ ] Final closing brace has no comma (end of object)

---

## Token Count

| Component | Count |
|-----------|-------|
| Button | 12 |
| Input | 10 |
| Card | 7 |
| Badge | 5 |
| **Total** | **34** |

---

## Complete Token System Summary

At this point, all three tiers are complete:

| Tier | Object | Token Count |
|------|--------|-------------|
| 1: Reference | `referenceTokens` | 119 |
| 2: Semantic | `semanticTokens` | 61 |
| 3: Component | `componentTokens` | 34 |
| **Total** | | **214** |

---

**Next Section:** [LAWS-OF-UX.md](./LAWS-OF-UX.md)


