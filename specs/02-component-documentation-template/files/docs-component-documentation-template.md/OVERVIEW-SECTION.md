# OVERVIEW-SECTION.md - When to Use, Anatomy, and Installation

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `docs/component-documentation-template.md` |
| **This Section** | Lines 51-120 |
| **Previous Section** | [HEADER-METADATA.md](./HEADER-METADATA.md) |
| **Next Section** | [API-SECTION.md](./API-SECTION.md) |

---

## Content Block

````markdown

## When to Use

### ✅ Do Use When

- [Primary use case 1]
- [Primary use case 2]
- [Primary use case 3]

### ❌ Don't Use When

- [Anti-pattern 1] — Use [Alternative] instead
- [Anti-pattern 2] — Use [Alternative] instead

---

## Anatomy

```
┌─────────────────────────────────────┐
│  ┌─────┐                            │
│  │ [1] │  [2] Label Text   [3]  →   │
│  └─────┘                            │
└─────────────────────────────────────┘

1. [Part name] - [Description]
2. [Part name] - [Description]  
3. [Part name] - [Description]
```

---

## Installation

```bash
npm install @your-org/[component-name]
# or
yarn add @your-org/[component-name]
# or
pnpm add @your-org/[component-name]
```

### Import

```tsx
import { [ComponentName] } from "@your-org/design-system"
```

### Basic Usage

```tsx
<[ComponentName]>
  Content here
</[ComponentName]>
```

---
````

---

## Line-by-Line Specification

### Lines 51-61: When to Use Section

```markdown
## When to Use

### ✅ Do Use When

- [Primary use case 1]
- [Primary use case 2]
- [Primary use case 3]

### ❌ Don't Use When

- [Anti-pattern 1] — Use [Alternative] instead
- [Anti-pattern 2] — Use [Alternative] instead
```

| Element | Purpose |
|---------|---------|
| ✅ emoji | Visual positive indicator |
| ❌ emoji | Visual negative indicator |
| "Use [Alternative] instead" | Guides users to correct choice |

**Reference:** 
- Atlassian Design System - When to use pattern
- IBM Carbon - Usage guidelines format

---

### Lines 65-77: Anatomy Section

```markdown
## Anatomy

```
┌─────────────────────────────────────┐
│  ┌─────┐                            │
│  │ [1] │  [2] Label Text   [3]  →   │
│  └─────┘                            │
└─────────────────────────────────────┘

1. [Part name] - [Description]
2. [Part name] - [Description]  
3. [Part name] - [Description]
```
```

| Element | Purpose |
|---------|---------|
| ASCII diagram | Universal, no image dependencies |
| Numbered parts | Clear identification |
| Part descriptions | Explains each element |

**Reference:** IBM Carbon - ASCII anatomy diagrams

---

### Lines 81-93: Installation Section

```markdown
## Installation

```bash
npm install @your-org/[component-name]
# or
yarn add @your-org/[component-name]
# or
pnpm add @your-org/[component-name]
```
```

| Package Manager | Why Included |
|-----------------|--------------|
| npm | Most common |
| yarn | Popular alternative |
| pnpm | Performance-focused |

---

### Lines 95-105: Import and Basic Usage

```markdown
### Import

```tsx
import { [ComponentName] } from "@your-org/design-system"
```

### Basic Usage

```tsx
<[ComponentName]>
  Content here
</[ComponentName]>
```
```

| Element | Purpose |
|---------|---------|
| Import statement | Shows exact import path |
| Basic usage | Minimal working example |

**Why minimal example:**
- Reduces cognitive load
- Shows quickest path to working code
- Complex examples come later

---

## Placeholder Instructions

| Placeholder | Replace With |
|-------------|--------------|
| `[Primary use case 1-3]` | Specific use cases |
| `[Anti-pattern 1-2]` | When NOT to use |
| `[Alternative]` | What to use instead |
| `[Part name]` | Component part names |
| `@your-org/[component-name]` | Actual package path |
| `[ComponentName]` | Actual component name |

---

## Verification Checklist

- [ ] Do/Don't sections use emoji indicators
- [ ] Don't items suggest alternatives
- [ ] Anatomy uses ASCII art (no images)
- [ ] Installation shows 3 package managers
- [ ] Import shows exact path
- [ ] Basic usage is minimal (< 5 lines)

---

**Next Section:** [API-SECTION.md](./API-SECTION.md)


