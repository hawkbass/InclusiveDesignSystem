# COMPONENT-DATA.md - Button Component Data Definitions

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 46-150 |
| **Previous Section** | [IMPORTS.md](./IMPORTS.md) |
| **Next Section** | [PAGE-HEADER.md](./PAGE-HEADER.md) |

---

## Code Block

```tsx

// Button component metadata
const componentMeta = {
  name: "Button",
  version: "2.1.0",
  status: "stable",
  description: "Buttons allow users to take actions with a single tap. They communicate what will happen when the user interacts with them.",
  category: "Actions",
  figmaLink: "https://figma.com/inclusive-design/buttons",
  githubLink: "https://github.com/inclusive-design/button",
}

// Button variants
const buttonVariants = [
  { name: "default", description: "Primary action button", usage: "Main actions that need emphasis" },
  { name: "secondary", description: "Less prominent button", usage: "Secondary actions alongside primary" },
  { name: "destructive", description: "Dangerous action button", usage: "Delete, remove, or irreversible actions" },
  { name: "outline", description: "Border-only button", usage: "Tertiary actions or when background conflicts" },
  { name: "ghost", description: "Minimal styling button", usage: "Subtle actions in toolbars or menus" },
  { name: "link", description: "Text link styling", usage: "Navigation actions that look like links" },
]

// Button sizes
const buttonSizes = [
  { name: "sm", height: "32px", padding: "12px", fontSize: "14px" },
  { name: "default", height: "40px", padding: "16px", fontSize: "14px" },
  { name: "lg", height: "48px", padding: "24px", fontSize: "16px" },
  { name: "icon", height: "40px", padding: "0", fontSize: "N/A" },
]

// Button props
const buttonProps = [
  { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', description: "The visual style variant of the button" },
  { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "The size of the button" },
  { name: "disabled", type: "boolean", default: "false", description: "Whether the button is disabled" },
  { name: "asChild", type: "boolean", default: "false", description: "Renders the button as a child component (Slot)" },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes to apply" },
  { name: "children", type: "ReactNode", default: "-", description: "Button content (text, icons, etc.)" },
]

// Keyboard interactions
const keyboardInteractions = [
  { key: "Enter", action: "Activates the button" },
  { key: "Space", action: "Activates the button" },
  { key: "Tab", action: "Moves focus to the next focusable element" },
  { key: "Shift + Tab", action: "Moves focus to the previous focusable element" },
]

// Do/Don't examples
const doExamples = [
  "Use clear, action-oriented text like 'Save changes'",
  "Put the primary action button on the right in dialogs",
  "Use only one primary button per section",
  "Provide visual feedback on hover and focus",
]

const dontExamples = [
  "Use vague labels like 'Click here' or 'Submit'",
  "Disable buttons without explanation",
  "Use multiple primary buttons in the same context",
  "Make buttons too small to tap on mobile (< 44px)",
]

// Code examples
const codeExamples = {
  basic: `<Button>Click me</Button>`,
  variants: `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
  sizes: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`,
  withIcon: `<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>`,
  loading: `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`,
  iconOnly: `<Button variant="outline" size="icon">
  <Plus className="h-4 w-4" />
  <span className="sr-only">Add item</span>
</Button>`,
  asChild: `<Button asChild>
  <a href="/docs">Documentation</a>
</Button>`,
}

// Related components
const relatedComponents = [
  { name: "IconButton", description: "Square button for icon-only actions", href: "/design-system/components/icon-button" },
  { name: "ButtonGroup", description: "Group related buttons together", href: "/design-system/components/button-group" },
  { name: "LinkButton", description: "Button styled as a navigation link", href: "/design-system/components/link-button" },
  { name: "Toggle", description: "Button that maintains an active state", href: "/design-system/components/toggle" },
]
```

---

## Line-by-Line Specification

### Lines 47-55: Component Metadata

```tsx
const componentMeta = {
  name: "Button",
  version: "2.1.0",
  status: "stable",
  // ...
}
```

| Property | Purpose |
|----------|---------|
| `name` | Component display name |
| `version` | Current component version |
| `status` | Stability indicator (stable/beta/deprecated) |
| `description` | One-sentence component description |
| `category` | Component category for navigation |
| `figmaLink` | Link to Figma designs |
| `githubLink` | Link to source code |

---

### Lines 58-65: Button Variants

Defines the 6 available button variants with:
- Name
- Description
- Usage guidance

**Reference:** Atlassian Design System - Button documentation structure

---

### Lines 68-73: Button Sizes

Defines the 4 available sizes with:
- Name
- Height
- Padding
- Font size

**Reference:** Fitts's Law - 48px large buttons for touch targets

---

### Lines 76-83: Button Props

Complete props table data for documentation.

| Property | Purpose |
|----------|---------|
| `name` | Prop name |
| `type` | TypeScript type |
| `default` | Default value |
| `description` | Human-readable explanation |

---

### Lines 86-91: Keyboard Interactions

Documents all keyboard shortcuts per WCAG guidelines.

---

### Lines 94-106: Do/Don't Examples

Content guidelines split into:
- `doExamples` - Best practices
- `dontExamples` - Anti-patterns

**Reference:** Atlassian - Do/Don't documentation pattern

---

### Lines 109-134: Code Examples

Pre-written code snippets for copy-paste:
- Basic usage
- All variants
- All sizes
- With icon
- Loading state
- Icon only
- As child (Slot pattern)

---

### Lines 137-142: Related Components

Links to related components for discoverability.

---

## Verification Checklist

- [ ] `componentMeta` has all 7 properties
- [ ] `buttonVariants` has 6 variants
- [ ] `buttonSizes` has 4 sizes
- [ ] `buttonProps` has 6 props documented
- [ ] `keyboardInteractions` has 4 keyboard shortcuts
- [ ] `codeExamples` has 7 code snippets

---

**Next Section:** [PAGE-HEADER.md](./PAGE-HEADER.md)


