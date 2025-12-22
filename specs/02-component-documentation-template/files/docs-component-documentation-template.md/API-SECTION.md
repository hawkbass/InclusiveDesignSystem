# API-SECTION.md - Props Table and TypeScript Interface

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `docs/component-documentation-template.md` |
| **This Section** | Lines 121-180 |
| **Previous Section** | [OVERVIEW-SECTION.md](./OVERVIEW-SECTION.md) |
| **Next Section** | [EXAMPLES-SECTION.md](./EXAMPLES-SECTION.md) |

---

## Content Block

````markdown

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "secondary" \| "destructive"` | `"default"` | Visual style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Component size |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | — | Component content |
| `[prop]` | `[type]` | `[default]` | [Description] |

### TypeScript

```tsx
interface [ComponentName]Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual style variant
   * @default "default"
   */
  variant?: "default" | "secondary" | "destructive"
  
  /**
   * Component size
   * @default "md"
   */
  size?: "sm" | "md" | "lg"
  
  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean
  
  /**
   * Component content
   */
  children?: React.ReactNode
}
```

### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--[component]-padding` | `1rem` | Internal padding |
| `--[component]-border-radius` | `0.5rem` | Corner radius |
| `--[component]-color` | `inherit` | Text color |

---
````

---

## Line-by-Line Specification

### Lines 123-135: Props Table

```markdown
## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "secondary" \| "destructive"` | `"default"` | Visual style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Component size |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | — | Component content |
| `[prop]` | `[type]` | `[default]` | [Description] |
```

| Column | Format | Notes |
|--------|--------|-------|
| Prop | `backticks` | Code formatting |
| Type | `backticks` with `\|` escapes | TypeScript union types |
| Default | `backticks` or `—` | Use em-dash for no default |
| Description | Plain text | Clear, concise |

**Reference:** Storybook - Props table format

---

### Lines 137-160: TypeScript Interface

```tsx
interface [ComponentName]Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * Visual style variant
   * @default "default"
   */
  variant?: "default" | "secondary" | "destructive"
  
  // ... more props
}
```

| Element | Purpose |
|---------|---------|
| `extends React.HTMLAttributes` | Shows inheritance |
| JSDoc comments | IDE tooltip support |
| `@default` tag | Documents default value |
| `?` optional marker | All custom props are optional |

**Reference:** TypeScript handbook - JSDoc documentation

---

### Lines 162-170: CSS Custom Properties

```markdown
### CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--[component]-padding` | `1rem` | Internal padding |
| `--[component]-border-radius` | `0.5rem` | Corner radius |
| `--[component]-color` | `inherit` | Text color |
```

| Element | Purpose |
|---------|---------|
| CSS variable naming | `--[component]-[property]` pattern |
| Default values | Shows out-of-box styling |
| Description | Explains what it controls |

**Reference:** 
- Material Design - CSS custom properties pattern
- Open Props - Naming convention

---

## Standard Props Template

Every component should document at minimum:

| Prop | Required | Notes |
|------|----------|-------|
| `variant` | Common | Visual style options |
| `size` | Common | Size variants if applicable |
| `disabled` | If interactive | Disabled state |
| `className` | Always | Style customization |
| `children` | Usually | Content slot |
| `asChild` | If using Radix | Slot pattern |

---

## Placeholder Instructions

| Placeholder | Replace With |
|-------------|--------------|
| `[ComponentName]Props` | Actual interface name |
| `HTMLElement` | Actual HTML element type |
| `[prop]` | Additional component-specific props |
| `[component]` | Kebab-case component name |

---

## Verification Checklist

- [ ] Props table has 4 columns
- [ ] All types are properly escaped
- [ ] TypeScript interface has JSDoc comments
- [ ] Each prop has `@default` if applicable
- [ ] CSS custom properties documented (if any)

---

**Next Section:** [EXAMPLES-SECTION.md](./EXAMPLES-SECTION.md)


