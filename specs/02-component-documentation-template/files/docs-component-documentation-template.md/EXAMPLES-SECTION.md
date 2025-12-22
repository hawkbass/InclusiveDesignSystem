# EXAMPLES-SECTION.md - Code Examples and Composition Patterns

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `docs/component-documentation-template.md` |
| **This Section** | Lines 181-230 |
| **Previous Section** | [API-SECTION.md](./API-SECTION.md) |
| **Next Section** | [ACCESSIBILITY-FOOTER.md](./ACCESSIBILITY-FOOTER.md) |

---

## Content Block

````markdown

## Examples

### Variants

```tsx
// Default variant
<[ComponentName] variant="default">Default</[ComponentName]>

// Secondary variant
<[ComponentName] variant="secondary">Secondary</[ComponentName]>

// Destructive variant
<[ComponentName] variant="destructive">Destructive</[ComponentName]>
```

### Sizes

```tsx
<[ComponentName] size="sm">Small</[ComponentName]>
<[ComponentName] size="md">Medium</[ComponentName]>
<[ComponentName] size="lg">Large</[ComponentName]>
```

### With Icons

```tsx
import { IconName } from "lucide-react"

<[ComponentName]>
  <IconName className="mr-2 h-4 w-4" />
  With Icon
</[ComponentName]>
```

### Composition Patterns

#### Pattern 1: [Pattern Name]

```tsx
// [Description of when to use this pattern]
<[ComponentName] [props]>
  [Content]
</[ComponentName]>
```

#### Pattern 2: [Pattern Name]

```tsx
// [Description of when to use this pattern]
<div className="flex gap-2">
  <[ComponentName] variant="outline">[Secondary Action]</[ComponentName]>
  <[ComponentName]>[Primary Action]</[ComponentName]>
</div>
```

---
````

---

## Line-by-Line Specification

### Lines 183-196: Variants Example

```tsx
// Default variant
<[ComponentName] variant="default">Default</[ComponentName]>

// Secondary variant
<[ComponentName] variant="secondary">Secondary</[ComponentName]>

// Destructive variant
<[ComponentName] variant="destructive">Destructive</[ComponentName]>
```

| Element | Purpose |
|---------|---------|
| Comments | Explain each variant |
| All variants shown | Complete reference |
| Copy-paste ready | No modifications needed |

---

### Lines 198-205: Sizes Example

```tsx
<[ComponentName] size="sm">Small</[ComponentName]>
<[ComponentName] size="md">Medium</[ComponentName]>
<[ComponentName] size="lg">Large</[ComponentName]>
```

| Size | Label | Purpose |
|------|-------|---------|
| sm | Small | Compact UIs, toolbars |
| md | Medium | Default, most contexts |
| lg | Large | Touch targets, CTAs |

---

### Lines 207-215: With Icons Example

```tsx
import { IconName } from "lucide-react"

<[ComponentName]>
  <IconName className="mr-2 h-4 w-4" />
  With Icon
</[ComponentName]>
```

| Element | Purpose |
|---------|---------|
| Import shown | Shows icon library |
| `mr-2` | 8px gap after icon |
| `h-4 w-4` | Standard 16px icon size |

**Reference:** Lucide React - Icon sizing conventions

---

### Lines 217-230: Composition Patterns

```tsx
// Pattern 1
<[ComponentName] [props]>
  [Content]
</[ComponentName]>

// Pattern 2: Action bar
<div className="flex gap-2">
  <[ComponentName] variant="outline">[Secondary Action]</[ComponentName]>
  <[ComponentName]>[Primary Action]</[ComponentName]>
</div>
```

| Pattern | Use Case |
|---------|----------|
| Pattern 1 | [To be defined per component] |
| Pattern 2 | Action bar with primary + secondary |

**Reference:** Atlassian - Action bar pattern

---

## Example Categories to Include

When filling this template, consider adding examples for:

| Category | Examples |
|----------|----------|
| Basic | Minimal usage |
| Variants | All visual variants |
| Sizes | All size options |
| States | Loading, disabled, error |
| With Icons | Leading, trailing icons |
| Composition | Common patterns |
| Advanced | Complex use cases |

---

## Code Example Best Practices

1. **Self-contained** - Each example works on its own
2. **Commented** - Explain non-obvious parts
3. **Realistic** - Use meaningful content, not "Lorem ipsum"
4. **Incremental** - Simple → Complex ordering
5. **Copy-paste ready** - No placeholder imports needed

**Reference:** Storybook - Writing stories best practices

---

## Verification Checklist

- [ ] Variants section shows all variants
- [ ] Sizes section shows all sizes
- [ ] Icon example includes import statement
- [ ] At least 2 composition patterns shown
- [ ] All code blocks have `tsx` syntax highlighting

---

**Next Section:** [ACCESSIBILITY-FOOTER.md](./ACCESSIBILITY-FOOTER.md)


