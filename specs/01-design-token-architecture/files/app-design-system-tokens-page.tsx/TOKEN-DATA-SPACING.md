# TOKEN-DATA-SPACING.md - Reference Token Spacing Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 120-149 |
| **Previous Section** | [TOKEN-DATA-COLOURS.md](./TOKEN-DATA-COLOURS.md) |
| **Next Section** | [TOKEN-DATA-TYPOGRAPHY.md](./TOKEN-DATA-TYPOGRAPHY.md) |

---

## Prerequisites

- [TOKEN-DATA-COLOURS.md](./TOKEN-DATA-COLOURS.md) must be completed first
- This section continues the `referenceTokens` object

---

## Code Block

Copy this code EXACTLY. Place it directly after the `colors` object closing brace from the previous section.

```tsx
  spacing: {
    "0": "0px",
    "0.5": "2px",
    "1": "4px",
    "1.5": "6px",
    "2": "8px",
    "2.5": "10px",
    "3": "12px",
    "3.5": "14px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "7": "28px",
    "8": "32px",
    "9": "36px",
    "10": "40px",
    "11": "44px",
    "12": "48px",
    "14": "56px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
    "28": "112px",
    "32": "128px",
    "36": "144px",
    "40": "160px",
    "44": "176px",
    "48": "192px",
  },
```

---

## Line-by-Line Specification

### Line 120: Spacing Object Start

```tsx
  spacing: {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Starts the spacing tokens section within `referenceTokens` |
| **Why this approach** | Groups all spacing values together for consistency |
| **Reference** | IBM Carbon Design System - Spacing token organization |

---

### Lines 121-147: Spacing Values

Each spacing token follows this pattern:

```tsx
    "4": "16px",
```

| Part | What It Is |
|------|------------|
| `"4"` | The token name (multiplier of 4px) |
| `"16px"` | The actual pixel value |

---

### Understanding the 4px Grid System

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates a consistent spacing scale based on 4px increments |
| **Why this approach** | 4px is divisible by 2 (for half-steps), and most screens render 4px cleanly |
| **Reference** | Refactoring UI - "Establish a spacing and sizing system"; 8-point Grid System |

**Why 4px as the Base Unit?**

| Reason | Explanation |
|--------|-------------|
| **Pixel rendering** | Most screens render in even pixels; 4px always looks crisp |
| **Flexibility** | Allows fine-tuning (4px steps) while maintaining harmony |
| **Industry standard** | Used by Material Design, Tailwind, and most modern systems |
| **Mathematical** | Easy mental math: token "8" = 32px (8 × 4) |

---

### Complete Spacing Scale Reference

| Token | Value | Usage |
|-------|-------|-------|
| `0` | 0px | No spacing |
| `0.5` | 2px | Micro adjustments, hairlines |
| `1` | 4px | Very tight spacing (inline icons) |
| `1.5` | 6px | Between very tight and tight |
| `2` | 8px | Tight spacing (button padding) |
| `2.5` | 10px | Between tight and small |
| `3` | 12px | Small spacing (form field gaps) |
| `3.5` | 14px | Between small and default |
| `4` | 16px | **Default spacing** (paragraph margins) |
| `5` | 20px | Slightly larger than default |
| `6` | 24px | Card padding, section gaps |
| `7` | 28px | Between card and large |
| `8` | 32px | Large component spacing |
| `9` | 36px | Between large and extra-large |
| `10` | 40px | Extra-large spacing |
| `11` | 44px | Touch target minimum (accessibility) |
| `12` | 48px | Section spacing |
| `14` | 56px | Large section spacing |
| `16` | 64px | Page section spacing |
| `20` | 80px | Major section breaks |
| `24` | 96px | Page margins |
| `28` | 112px | Large page margins |
| `32` | 128px | Hero section padding |
| `36` | 144px | Very large layout spacing |
| `40` | 160px | Maximum component spacing |
| `44` | 176px | Full-page section spacing |
| `48` | 192px | Maximum page spacing |

**In Simple Terms:** Think of spacing like LEGO bricks. Each brick is 4px tall. You can stack 1, 2, 4, 8 bricks... This ensures everything lines up perfectly, like a well-organized LEGO creation.

---

### Why Token "11" (44px) is Special

```tsx
    "11": "44px",
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Defines the minimum touch target size |
| **Why this approach** | WCAG and Apple HIG recommend 44px minimum for tap targets |
| **Reference** | Fitts's Law (Laws of UX); WCAG 2.1 Target Size guidelines |

**Accessibility Requirement:**
- Buttons, links, and interactive elements should be at least 44×44px
- This ensures users can tap/click them accurately
- Especially important on mobile devices

---

### Line 148: Closing Brace for spacing

```tsx
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the `spacing` object |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript object syntax |

---

## Visual Representation

```
Token 0   |
Token 0.5 |░
Token 1   |░░
Token 2   |░░░░
Token 4   |░░░░░░░░
Token 8   |░░░░░░░░░░░░░░░░
Token 12  |░░░░░░░░░░░░░░░░░░░░░░░░
Token 16  |░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

Each `░` represents 2px. The visual progression shows how spacing grows proportionally.

---

## Verification Checklist

After copying this code:

- [ ] Line 120 starts with `  spacing: {` (two spaces indent)
- [ ] Token "0" equals "0px"
- [ ] Token "1" equals "4px" (not 1px!)
- [ ] Token "4" equals "16px"
- [ ] Token "11" equals "44px" (accessibility minimum)
- [ ] Token "48" equals "192px" (largest value)
- [ ] Total: 27 spacing tokens defined
- [ ] Line 148 ends with `  },` (closing brace with comma)

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Thinking "1" = 1px | Remember: token × 4 = pixels (so "1" = 4px) |
| Missing half-step tokens (0.5, 1.5, etc.) | Copy all tokens exactly |
| Wrong indentation | Each key should have 4 spaces (2 for `spacing` + 2 for content) |

---

## Token Count

| Category | Count |
|----------|-------|
| Zero value | 1 |
| Half-step values (0.5, 1.5, 2.5, 3.5) | 4 |
| Whole values (1-12) | 12 |
| Jump values (14, 16, 20, 24, 28, 32, 36, 40, 44, 48) | 10 |
| **Total** | **27** |

---

**Next Section:** [TOKEN-DATA-TYPOGRAPHY.md](./TOKEN-DATA-TYPOGRAPHY.md)


