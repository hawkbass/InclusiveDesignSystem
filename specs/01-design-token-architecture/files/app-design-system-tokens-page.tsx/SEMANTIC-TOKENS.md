# SEMANTIC-TOKENS.md - Tier 2 Semantic Token Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 202-292 |
| **Previous Section** | [TOKEN-DATA-SHADOWS.md](./TOKEN-DATA-SHADOWS.md) |
| **Next Section** | [COMPONENT-TOKENS.md](./COMPONENT-TOKENS.md) |

---

## Prerequisites

- [TOKEN-DATA-SHADOWS.md](./TOKEN-DATA-SHADOWS.md) must be completed first
- The `referenceTokens` object must be complete

---

## Code Block

Copy this code EXACTLY. Place it directly after the `referenceTokens` closing brace (line 201).

```tsx

// TIER 2: Semantic Tokens (System) - Meaningful mappings
const semanticTokens = {
  light: {
    // Background hierarchy
    "color-bg-default": { reference: "white", purpose: "Primary background" },
    "color-bg-subtle": { reference: "slate-50", purpose: "Secondary background" },
    "color-bg-muted": { reference: "slate-100", purpose: "Tertiary background" },
    "color-bg-emphasis": { reference: "slate-900", purpose: "High emphasis background" },
    "color-bg-inverse": { reference: "slate-950", purpose: "Inverted background" },
    
    // Surface hierarchy
    "color-surface-default": { reference: "white", purpose: "Card/panel default" },
    "color-surface-elevated": { reference: "white", purpose: "Elevated surfaces" },
    "color-surface-sunken": { reference: "slate-50", purpose: "Recessed surfaces" },
    
    // Text hierarchy
    "color-text-default": { reference: "slate-900", purpose: "Primary text" },
    "color-text-muted": { reference: "slate-500", purpose: "Secondary text" },
    "color-text-subtle": { reference: "slate-400", purpose: "Tertiary text" },
    "color-text-inverse": { reference: "white", purpose: "Inverted text" },
    "color-text-disabled": { reference: "slate-300", purpose: "Disabled text" },
    
    // Interactive
    "color-action-primary": { reference: "fuchsia-500", purpose: "Primary actions" },
    "color-action-primary-hover": { reference: "fuchsia-600", purpose: "Primary hover" },
    "color-action-primary-active": { reference: "fuchsia-700", purpose: "Primary active" },
    "color-action-secondary": { reference: "purple-500", purpose: "Secondary actions" },
    
    // Border
    "color-border-default": { reference: "slate-200", purpose: "Default borders" },
    "color-border-muted": { reference: "slate-100", purpose: "Subtle borders" },
    "color-border-emphasis": { reference: "slate-300", purpose: "Emphasis borders" },
    "color-border-focus": { reference: "fuchsia-500", purpose: "Focus rings" },
    
    // Status
    "color-status-success": { reference: "green-600", purpose: "Success states" },
    "color-status-warning": { reference: "amber-500", purpose: "Warning states" },
    "color-status-error": { reference: "red-500", purpose: "Error states" },
    "color-status-info": { reference: "blue-500", purpose: "Info states" },
  },
  dark: {
    // Background hierarchy
    "color-bg-default": { reference: "slate-950", purpose: "Primary background" },
    "color-bg-subtle": { reference: "slate-900", purpose: "Secondary background" },
    "color-bg-muted": { reference: "slate-800", purpose: "Tertiary background" },
    "color-bg-emphasis": { reference: "slate-100", purpose: "High emphasis background" },
    "color-bg-inverse": { reference: "white", purpose: "Inverted background" },
    
    // Surface hierarchy
    "color-surface-default": { reference: "slate-900", purpose: "Card/panel default" },
    "color-surface-elevated": { reference: "slate-800", purpose: "Elevated surfaces" },
    "color-surface-sunken": { reference: "slate-950", purpose: "Recessed surfaces" },
    
    // Text hierarchy
    "color-text-default": { reference: "slate-50", purpose: "Primary text" },
    "color-text-muted": { reference: "slate-400", purpose: "Secondary text" },
    "color-text-subtle": { reference: "slate-500", purpose: "Tertiary text" },
    "color-text-inverse": { reference: "slate-900", purpose: "Inverted text" },
    "color-text-disabled": { reference: "slate-600", purpose: "Disabled text" },
    
    // Interactive
    "color-action-primary": { reference: "fuchsia-500", purpose: "Primary actions" },
    "color-action-primary-hover": { reference: "fuchsia-400", purpose: "Primary hover" },
    "color-action-primary-active": { reference: "fuchsia-300", purpose: "Primary active" },
    "color-action-secondary": { reference: "purple-400", purpose: "Secondary actions" },
    
    // Border
    "color-border-default": { reference: "slate-700", purpose: "Default borders" },
    "color-border-muted": { reference: "slate-800", purpose: "Subtle borders" },
    "color-border-emphasis": { reference: "slate-600", purpose: "Emphasis borders" },
    "color-border-focus": { reference: "fuchsia-500", purpose: "Focus rings" },
    
    // Status
    "color-status-success": { reference: "green-500", purpose: "Success states" },
    "color-status-warning": { reference: "amber-500", purpose: "Warning states" },
    "color-status-error": { reference: "red-500", purpose: "Error states" },
    "color-status-info": { reference: "cyan-500", purpose: "Info states" },
  },
  spacing: {
    "space-none": { reference: "0", purpose: "No spacing" },
    "space-xxs": { reference: "1", purpose: "4px - Micro spacing" },
    "space-xs": { reference: "2", purpose: "8px - Tight spacing" },
    "space-sm": { reference: "3", purpose: "12px - Small spacing" },
    "space-md": { reference: "4", purpose: "16px - Default spacing" },
    "space-lg": { reference: "6", purpose: "24px - Large spacing" },
    "space-xl": { reference: "8", purpose: "32px - Extra large" },
    "space-2xl": { reference: "12", purpose: "48px - Section spacing" },
    "space-3xl": { reference: "16", purpose: "64px - Page spacing" },
  },
}
```

---

## Line-by-Line Specification

### Lines 202-203: Section Comment and Object Declaration

```tsx
// TIER 2: Semantic Tokens (System) - Meaningful mappings
const semanticTokens = {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Declares the second tier of the token architecture |
| **Why this approach** | Semantic tokens add MEANING to raw values |
| **Reference** | Material Design 3 - Semantic tokens layer; IBM Carbon - Token semantics |

**The Key Difference:**
- Reference tokens: "This is fuchsia-500 (#d946ef)"
- Semantic tokens: "This is the primary action colour" → which happens to BE fuchsia-500

**Why This Matters:**

| Scenario | Without Semantic Tokens | With Semantic Tokens |
|----------|------------------------|---------------------|
| Rebrand | Find and replace 500+ instances of "fuchsia-500" | Change ONE mapping in semanticTokens |
| Dark mode | Write entirely separate colour schemes | Same token names, different mappings |

---

### Lines 204-236: Light Mode Tokens

```tsx
  light: {
    // Background hierarchy
    "color-bg-default": { reference: "white", purpose: "Primary background" },
    // ... more tokens
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines semantic colour tokens for light mode |
| **Why this approach** | Light mode uses light backgrounds and dark text |
| **Reference** | Adobe Spectrum - Theme-aware tokens |

**Token Structure Explained:**

```tsx
"color-bg-default": { reference: "white", purpose: "Primary background" },
```

| Part | What It Is | Why Included |
|------|------------|--------------|
| `"color-bg-default"` | Token name | Describes category (color), subcategory (bg), and role (default) |
| `reference` | Links to a reference token | Creates the connection to tier 1 |
| `purpose` | Human description | Documents intended use |

**Light Mode Token Categories:**

| Category | Prefix | Examples |
|----------|--------|----------|
| Backgrounds | `color-bg-*` | default, subtle, muted, emphasis, inverse |
| Surfaces | `color-surface-*` | default, elevated, sunken |
| Text | `color-text-*` | default, muted, subtle, inverse, disabled |
| Interactive | `color-action-*` | primary, primary-hover, primary-active, secondary |
| Borders | `color-border-*` | default, muted, emphasis, focus |
| Status | `color-status-*` | success, warning, error, info |

**Background Hierarchy Explained:**

| Token | Reference | Visual Result |
|-------|-----------|---------------|
| `color-bg-default` | white | The main page background (brightest) |
| `color-bg-subtle` | slate-50 | Slightly tinted sections |
| `color-bg-muted` | slate-100 | More visible background areas |
| `color-bg-emphasis` | slate-900 | Dark callouts (near-black on light) |
| `color-bg-inverse` | slate-950 | Fully inverted (black on light) |

**In Simple Terms:** Imagine stacking pieces of paper. `default` is the white paper on top. Each step down (`subtle`, `muted`) adds a slightly darker sheet underneath. `inverse` is like putting black paper on white.

---

### Lines 237-269: Dark Mode Tokens

```tsx
  dark: {
    // Background hierarchy
    "color-bg-default": { reference: "slate-950", purpose: "Primary background" },
    // ... mirrors light mode structure
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines semantic colour tokens for dark mode |
| **Why this approach** | Same token NAMES, different reference VALUES |
| **Reference** | Material Design 3 - Dark theme; Refactoring UI - Dark mode strategies |

**The Magic of Semantic Tokens:**

Notice how the TOKEN NAMES are identical to light mode:

| Token | Light Reference | Dark Reference |
|-------|-----------------|----------------|
| `color-bg-default` | white | slate-950 |
| `color-text-default` | slate-900 | slate-50 |
| `color-action-primary` | fuchsia-500 | fuchsia-500 |

**Key Dark Mode Patterns:**

1. **Background inverts:** white → slate-950
2. **Text inverts:** dark text → light text
3. **Primary stays:** fuchsia-500 works in both modes
4. **Hover changes direction:** 
   - Light: fuchsia-500 → fuchsia-600 (darker on hover)
   - Dark: fuchsia-500 → fuchsia-400 (lighter on hover)

**Why Hover Direction Changes:**

| Mode | At Rest | On Hover | Why |
|------|---------|----------|-----|
| Light | fuchsia-500 | fuchsia-600 | Darker = more prominent on light bg |
| Dark | fuchsia-500 | fuchsia-400 | Lighter = more prominent on dark bg |

---

### Lines 270-280: Semantic Spacing Tokens

```tsx
  spacing: {
    "space-none": { reference: "0", purpose: "No spacing" },
    "space-xxs": { reference: "1", purpose: "4px - Micro spacing" },
    "space-xs": { reference: "2", purpose: "8px - Tight spacing" },
    "space-sm": { reference: "3", purpose: "12px - Small spacing" },
    "space-md": { reference: "4", purpose: "16px - Default spacing" },
    "space-lg": { reference: "6", purpose: "24px - Large spacing" },
    "space-xl": { reference: "8", purpose: "32px - Extra large" },
    "space-2xl": { reference: "12", purpose: "48px - Section spacing" },
    "space-3xl": { reference: "16", purpose: "64px - Page spacing" },
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Adds semantic meaning to spacing values |
| **Why this approach** | "Use md spacing" is clearer than "use 16px" |
| **Reference** | IBM Carbon - Spacing semantics |

**Spacing Semantic Scale:**

| Token | Reference | Pixels | Usage |
|-------|-----------|--------|-------|
| `space-none` | 0 | 0px | No spacing needed |
| `space-xxs` | 1 | 4px | Icon-to-text gaps |
| `space-xs` | 2 | 8px | Tight element groups |
| `space-sm` | 3 | 12px | Form field gaps |
| `space-md` | 4 | 16px | **Default component spacing** |
| `space-lg` | 6 | 24px | Card padding |
| `space-xl` | 8 | 32px | Section gaps |
| `space-2xl` | 12 | 48px | Major section breaks |
| `space-3xl` | 16 | 64px | Page-level spacing |

---

### Lines 281-282: Closing Brace for semanticTokens

```tsx
  },
}
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the `spacing` object and the entire `semanticTokens` object |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript object syntax |

---

## Verification Checklist

After copying this code:

- [ ] Line 203 starts with `const semanticTokens = {`
- [ ] `light` object has 26 colour tokens
- [ ] `dark` object has 26 colour tokens (same names, different references)
- [ ] `spacing` object has 9 tokens
- [ ] Both light and dark have the same token names
- [ ] All tokens have both `reference` and `purpose` properties
- [ ] Final closing brace has no comma (end of object)

---

## Token Count

| Mode/Category | Count |
|---------------|-------|
| Light mode colours | 26 |
| Dark mode colours | 26 |
| Semantic spacing | 9 |
| **Total** | **61** |

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Different token names in light vs dark | Copy the structure exactly |
| Missing `purpose` property | Every token needs both `reference` and `purpose` |
| Wrong reference token names | Reference must match a key from `referenceTokens` |

---

**Next Section:** [COMPONENT-TOKENS.md](./COMPONENT-TOKENS.md)


