# COMPONENT-REGISTRY.md - Component Definitions and Props

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 51-150 |
| **Previous Section** | [IMPORTS.md](./IMPORTS.md) |
| **Next Section** | [STATE-HANDLERS.md](./STATE-HANDLERS.md) |

---

## Code Block

```tsx

// Type definitions for prop controls
type PropControlType = "select" | "boolean" | "string" | "number"

interface PropDefinition {
  name: string
  type: PropControlType
  options?: string[]  // For select type
  defaultValue: any
  description: string
}

interface ComponentDefinition {
  name: string
  displayName: string
  description: string
  category: string
  props: PropDefinition[]
}

// Component registry
const componentRegistry: ComponentDefinition[] = [
  {
    name: "Button",
    displayName: "Button",
    description: "Interactive button for actions",
    category: "Actions",
    props: [
      { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline", "ghost", "link"], defaultValue: "default", description: "Visual style variant" },
      { name: "size", type: "select", options: ["default", "sm", "lg", "icon"], defaultValue: "default", description: "Button size" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disable the button" },
      { name: "children", type: "string", defaultValue: "Click me", description: "Button text content" },
    ],
  },
  {
    name: "Input",
    displayName: "Input",
    description: "Text input field",
    category: "Forms",
    props: [
      { name: "type", type: "select", options: ["text", "email", "password", "number", "search"], defaultValue: "text", description: "Input type" },
      { name: "placeholder", type: "string", defaultValue: "Enter text...", description: "Placeholder text" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disable the input" },
    ],
  },
  {
    name: "Badge",
    displayName: "Badge",
    description: "Status indicator badge",
    category: "Data Display",
    props: [
      { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline"], defaultValue: "default", description: "Badge variant" },
      { name: "children", type: "string", defaultValue: "Badge", description: "Badge text" },
    ],
  },
  {
    name: "Alert",
    displayName: "Alert",
    description: "Feedback message display",
    category: "Feedback",
    props: [
      { name: "variant", type: "select", options: ["default", "destructive"], defaultValue: "default", description: "Alert variant" },
      { name: "title", type: "string", defaultValue: "Alert Title", description: "Alert title" },
      { name: "description", type: "string", defaultValue: "This is an alert message.", description: "Alert description" },
    ],
  },
  {
    name: "Card",
    displayName: "Card",
    description: "Content container card",
    category: "Layout",
    props: [
      { name: "title", type: "string", defaultValue: "Card Title", description: "Card header title" },
      { name: "description", type: "string", defaultValue: "Card description text", description: "Card header description" },
      { name: "content", type: "string", defaultValue: "Card content goes here.", description: "Main card content" },
    ],
  },
]

// Viewport presets
const viewportPresets = [
  { name: "mobile", width: 375, icon: Smartphone, label: "Mobile" },
  { name: "tablet", width: 768, icon: Tablet, label: "Tablet" },
  { name: "desktop", width: 1280, icon: Monitor, label: "Desktop" },
  { name: "full", width: "100%", icon: Maximize, label: "Full" },
]
```

---

## Line-by-Line Specification

### Lines 53-58: PropControlType and PropDefinition

```tsx
type PropControlType = "select" | "boolean" | "string" | "number"

interface PropDefinition {
  name: string
  type: PropControlType
  options?: string[]
  defaultValue: any
  description: string
}
```

| Control Type | UI Element | Example |
|--------------|------------|---------|
| `select` | Dropdown | variant, size |
| `boolean` | Switch | disabled |
| `string` | Input | placeholder, children |
| `number` | Input (number) | count |

---

### Lines 60-66: ComponentDefinition Interface

```tsx
interface ComponentDefinition {
  name: string
  displayName: string
  description: string
  category: string
  props: PropDefinition[]
}
```

| Field | Purpose |
|-------|---------|
| `name` | Component name for code generation |
| `displayName` | Human-readable name |
| `description` | One-line description |
| `category` | Navigation grouping |
| `props` | Array of controllable props |

---

### Lines 69-115: Button Definition

```tsx
{
  name: "Button",
  displayName: "Button",
  description: "Interactive button for actions",
  category: "Actions",
  props: [
    { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline", "ghost", "link"], defaultValue: "default", description: "Visual style variant" },
    { name: "size", type: "select", options: ["default", "sm", "lg", "icon"], defaultValue: "default", description: "Button size" },
    { name: "disabled", type: "boolean", defaultValue: false, description: "Disable the button" },
    { name: "children", type: "string", defaultValue: "Click me", description: "Button text content" },
  ],
}
```

| Prop | Type | Options |
|------|------|---------|
| variant | select | 6 options |
| size | select | 4 options |
| disabled | boolean | true/false |
| children | string | Button text |

---

### Lines 117-127: Input Definition

```tsx
{
  name: "Input",
  displayName: "Input",
  description: "Text input field",
  category: "Forms",
  props: [
    { name: "type", type: "select", options: ["text", "email", "password", "number", "search"], defaultValue: "text", description: "Input type" },
    { name: "placeholder", type: "string", defaultValue: "Enter text...", description: "Placeholder text" },
    { name: "disabled", type: "boolean", defaultValue: false, description: "Disable the input" },
  ],
}
```

---

### Lines 129-137: Badge Definition

```tsx
{
  name: "Badge",
  displayName: "Badge",
  description: "Status indicator badge",
  category: "Data Display",
  props: [
    { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline"], defaultValue: "default", description: "Badge variant" },
    { name: "children", type: "string", defaultValue: "Badge", description: "Badge text" },
  ],
}
```

---

### Lines 139-149: Alert and Card Definitions

Alert and Card follow the same pattern with their respective props.

---

### Lines 151-156: Viewport Presets

```tsx
const viewportPresets = [
  { name: "mobile", width: 375, icon: Smartphone, label: "Mobile" },
  { name: "tablet", width: 768, icon: Tablet, label: "Tablet" },
  { name: "desktop", width: 1280, icon: Monitor, label: "Desktop" },
  { name: "full", width: "100%", icon: Maximize, label: "Full" },
]
```

| Viewport | Width | Breakpoint |
|----------|-------|------------|
| Mobile | 375px | iPhone SE/standard |
| Tablet | 768px | iPad portrait |
| Desktop | 1280px | Laptop |
| Full | 100% | Container width |

**Reference:** Material Design - Breakpoint system

---

## Verification Checklist

- [ ] PropControlType has 4 variants
- [ ] PropDefinition interface complete
- [ ] ComponentDefinition interface complete
- [ ] 5 components registered (Button, Input, Badge, Alert, Card)
- [ ] Each component has props array
- [ ] 4 viewport presets defined

---

**Next Section:** [STATE-HANDLERS.md](./STATE-HANDLERS.md)


