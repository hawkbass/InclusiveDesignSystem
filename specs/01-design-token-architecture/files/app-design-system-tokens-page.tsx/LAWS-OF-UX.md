# LAWS-OF-UX.md - Laws of UX Data Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 339-370 |
| **Previous Section** | [COMPONENT-TOKENS.md](./COMPONENT-TOKENS.md) |
| **Next Section** | [UTILITY-FUNCTIONS.md](./UTILITY-FUNCTIONS.md) |

---

## Prerequisites

- [COMPONENT-TOKENS.md](./COMPONENT-TOKENS.md) must be completed first

---

## Code Block

Copy this code EXACTLY. Place it directly after the `componentTokens` closing brace.

```tsx

// Laws of UX that tokens support
const lawsOfUX = [
  {
    name: "Fitts's Law",
    description: "The time to acquire a target is a function of the distance to and size of the target.",
    tokenSupport: "Our touch targets use minimum 44px (space-11) ensuring easy tapping on all devices.",
    icon: MousePointer,
    relatedTokens: ["button-height-lg", "input-height-lg", "space-11"],
  },
  {
    name: "Hick's Law",
    description: "The time it takes to make a decision increases with the number and complexity of choices.",
    tokenSupport: "Limited colour palette reduces cognitive load. 10 shades per hue, 5 semantic levels.",
    icon: Timer,
    relatedTokens: ["color-action-primary", "color-action-secondary"],
  },
  {
    name: "Miller's Law",
    description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
    tokenSupport: "Spacing tokens create visual chunking. Section spacing (space-2xl, space-3xl) groups content.",
    icon: Brain,
    relatedTokens: ["space-lg", "space-xl", "space-2xl"],
  },
  {
    name: "Jakob's Law",
    description: "Users spend most of their time on other sites, so they prefer your site to work like others.",
    tokenSupport: "Consistent patterns using standard sizing and spacing that match user expectations.",
    icon: LayoutGrid,
    relatedTokens: ["button-height-md", "input-height-md", "card-padding-md"],
  },
]
```

---

## Line-by-Line Specification

### Lines 339-340: Section Comment and Array Declaration

```tsx
// Laws of UX that tokens support
const lawsOfUX = [
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates an array of objects describing UX psychology principles |
| **Why this approach** | Connects technical token choices to human behaviour research |
| **Reference** | Laws of UX by Jon Yablonski (https://lawsofux.com) |

**Why Include This Section?**

| Reason | Explanation |
|--------|-------------|
| **Education** | Helps developers understand WHY values were chosen |
| **Justification** | Provides evidence-based reasoning for design decisions |
| **Reference** | "The Design of Everyday Things" by Don Norman - Design should be grounded in psychology |

---

### Lines 341-346: Fitts's Law Object

```tsx
  {
    name: "Fitts's Law",
    description: "The time to acquire a target is a function of the distance to and size of the target.",
    tokenSupport: "Our touch targets use minimum 44px (space-11) ensuring easy tapping on all devices.",
    icon: MousePointer,
    relatedTokens: ["button-height-lg", "input-height-lg", "space-11"],
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Documents how our tokens support Fitts's Law |
| **Why this approach** | Explains the 44px minimum for interactive elements |
| **Reference** | Paul Fitts (1954) - Original research; WCAG 2.1 Target Size |

**Object Properties Explained:**

| Property | Type | Purpose |
|----------|------|---------|
| `name` | string | The law's name |
| `description` | string | The law's principle in plain English |
| `tokenSupport` | string | How our tokens specifically support this law |
| `icon` | React component | Visual icon (imported from lucide-react) |
| `relatedTokens` | string[] | Tokens that implement this principle |

**Fitts's Law in Practice:**

```
Small Button (32px)   Large Button (48px)
┌──────────┐          ┌────────────────┐
│  Submit  │          │     Submit     │
└──────────┘          └────────────────┘
   ↑                         ↑
Harder to tap           Easier to tap
(violates Fitts)        (follows Fitts)
```

**Why 44px Minimum?**
- Apple Human Interface Guidelines: 44×44 points minimum
- Android Material Design: 48dp minimum (8dp padding on 32dp target)
- WCAG 2.1 Success Criterion 2.5.5: 44×44 CSS pixels

---

### Lines 347-352: Hick's Law Object

```tsx
  {
    name: "Hick's Law",
    description: "The time it takes to make a decision increases with the number and complexity of choices.",
    tokenSupport: "Limited colour palette reduces cognitive load. 10 shades per hue, 5 semantic levels.",
    icon: Timer,
    relatedTokens: ["color-action-primary", "color-action-secondary"],
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Documents how limited colour choices reduce decision time |
| **Why this approach** | Too many colours = overwhelmed users |
| **Reference** | William Edmund Hick (1952) - Original research |

**Hick's Law in Practice:**

| Approach | Problem |
|----------|---------|
| 50 colours to choose from | User paralysis - "which one do I use?" |
| 2 action colours (primary, secondary) | Clear decision - "is this primary or secondary?" |

**Token Implementation:**
- Only 2 action colours: `color-action-primary`, `color-action-secondary`
- Clear hierarchy: primary = main action, secondary = alternative action
- Designers don't have to think - the system decides

---

### Lines 353-358: Miller's Law Object

```tsx
  {
    name: "Miller's Law",
    description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
    tokenSupport: "Spacing tokens create visual chunking. Section spacing (space-2xl, space-3xl) groups content.",
    icon: Brain,
    relatedTokens: ["space-lg", "space-xl", "space-2xl"],
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Documents how spacing tokens support memory limitations |
| **Why this approach** | Content chunking helps users process information |
| **Reference** | George A. Miller (1956) - "The Magical Number Seven, Plus or Minus Two" |

**Miller's Law in Practice:**

```
Without Chunking (hard to scan):
──────────────────────────────
Item 1
Item 2
Item 3
Item 4
Item 5
Item 6
Item 7
Item 8
Item 9
──────────────────────────────

With Chunking (easy to scan):
──────────────────────────────
Group A
  Item 1
  Item 2
  Item 3
                              ← space-2xl (48px)
Group B
  Item 4
  Item 5
  Item 6
                              ← space-2xl (48px)
Group C
  Item 7
  Item 8
  Item 9
──────────────────────────────
```

**Token Implementation:**
- `space-lg` (24px): Groups items within a section
- `space-xl` (32px): Separates subsections
- `space-2xl` (48px): Major section breaks
- `space-3xl` (64px): Page-level divisions

---

### Lines 359-364: Jakob's Law Object

```tsx
  {
    name: "Jakob's Law",
    description: "Users spend most of their time on other sites, so they prefer your site to work like others.",
    tokenSupport: "Consistent patterns using standard sizing and spacing that match user expectations.",
    icon: LayoutGrid,
    relatedTokens: ["button-height-md", "input-height-md", "card-padding-md"],
  },
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Documents how standard sizing meets user expectations |
| **Why this approach** | Users expect 40px buttons because other sites use 40px buttons |
| **Reference** | Jakob Nielsen - Usability research |

**Jakob's Law in Practice:**

| Our Token | Common Value | Why It Matches |
|-----------|--------------|----------------|
| `button-height-md` | 40px | Bootstrap, Material, Tailwind all use ~40px |
| `input-height-md` | 40px | Standard form height across the web |
| `card-padding-md` | 24px | Common card padding (16-24px range) |

**The Key Insight:**
- Users don't read instructions
- They rely on patterns learned from other sites
- Our tokens use values that match industry standards
- This reduces friction and learning curve

---

### Lines 365-366: Closing Bracket for lawsOfUX

```tsx
  },
]
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Closes the Jakob's Law object and the entire array |
| **Why this approach** | Required JavaScript syntax |
| **Reference** | JavaScript array syntax |

---

## Verification Checklist

After copying this code:

- [ ] Line 340 starts with `const lawsOfUX = [`
- [ ] Array contains exactly 4 objects (4 laws)
- [ ] Each object has: `name`, `description`, `tokenSupport`, `icon`, `relatedTokens`
- [ ] Icons are: `MousePointer`, `Timer`, `Brain`, `LayoutGrid` (must be imported)
- [ ] `relatedTokens` is an array of strings in each object
- [ ] Final line is `]` (closing the array, no comma after)

---

## Icon Reference

These icons must be imported in the IMPORTS section:

| Law | Icon Variable | Lucide Icon Name |
|-----|---------------|------------------|
| Fitts's Law | `MousePointer` | mouse-pointer |
| Hick's Law | `Timer` | timer |
| Miller's Law | `Brain` | brain |
| Jakob's Law | `LayoutGrid` | layout-grid |

---

## Further Reading

| Law | Original Source | Modern Reference |
|-----|-----------------|------------------|
| Fitts's Law | Fitts, P. M. (1954) | lawsofux.com/fittss-law |
| Hick's Law | Hick, W. E. (1952) | lawsofux.com/hicks-law |
| Miller's Law | Miller, G. A. (1956) | lawsofux.com/millers-law |
| Jakob's Law | Nielsen, J. (various) | lawsofux.com/jakobs-law |

---

**Next Section:** [UTILITY-FUNCTIONS.md](./UTILITY-FUNCTIONS.md)


