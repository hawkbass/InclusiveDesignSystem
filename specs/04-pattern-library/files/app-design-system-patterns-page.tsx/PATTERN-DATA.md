# PATTERN-DATA.md - Pattern Definitions and Categories

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/patterns/page.tsx` |
| **This Section** | Lines 41-150 |
| **Previous Section** | [IMPORTS.md](./IMPORTS.md) |
| **Next Section** | [HEADER-SECTION.md](./HEADER-SECTION.md) |

---

## Code Block

```tsx

// Pattern categories
const categories = [
  { id: "all", label: "All Patterns", icon: LayoutGrid },
  { id: "empty", label: "Empty States", icon: Inbox },
  { id: "loading", label: "Loading", icon: Loader2 },
  { id: "error", label: "Errors", icon: AlertCircle },
  { id: "forms", label: "Forms", icon: FormInput },
  { id: "data", label: "Data Display", icon: Table },
  { id: "navigation", label: "Navigation", icon: Navigation },
  { id: "feedback", label: "Feedback", icon: Bell },
]

// Pattern definitions
interface Pattern {
  id: string
  name: string
  description: string
  category: string
  href: string
  preview: "empty" | "loading" | "error" | "form" | "table" | "nav" | "toast"
}

const patterns: Pattern[] = [
  // Empty States
  {
    id: "first-time-user",
    name: "First-Time User",
    description: "Welcome new users and guide them to take their first action",
    category: "empty",
    href: "/design-system/patterns/empty-states#first-time",
    preview: "empty",
  },
  {
    id: "no-results",
    name: "No Search Results",
    description: "Inform users when their search returns no matches",
    category: "empty",
    href: "/design-system/patterns/empty-states#no-results",
    preview: "empty",
  },
  {
    id: "empty-data",
    name: "Empty Data State",
    description: "Display when a list or table has no items",
    category: "empty",
    href: "/design-system/patterns/empty-states#empty-data",
    preview: "empty",
  },
  
  // Loading States
  {
    id: "skeleton-loading",
    name: "Skeleton Loading",
    description: "Show content placeholders while data loads",
    category: "loading",
    href: "/design-system/patterns/loading-states#skeleton",
    preview: "loading",
  },
  {
    id: "progress-indicator",
    name: "Progress Indicator",
    description: "Communicate loading progress to users",
    category: "loading",
    href: "/design-system/patterns/loading-states#progress",
    preview: "loading",
  },
  {
    id: "optimistic-update",
    name: "Optimistic Updates",
    description: "Show immediate feedback before server confirmation",
    category: "loading",
    href: "/design-system/patterns/loading-states#optimistic",
    preview: "loading",
  },
  
  // Error Handling
  {
    id: "inline-validation",
    name: "Inline Validation",
    description: "Show field-level errors as users type",
    category: "error",
    href: "/design-system/patterns/error-handling#inline",
    preview: "error",
  },
  {
    id: "form-errors",
    name: "Form Errors",
    description: "Display validation errors on form submission",
    category: "error",
    href: "/design-system/patterns/error-handling#form",
    preview: "error",
  },
  {
    id: "api-errors",
    name: "API Errors",
    description: "Handle and display server-side errors gracefully",
    category: "error",
    href: "/design-system/patterns/error-handling#api",
    preview: "error",
  },
  
  // Forms
  {
    id: "single-column-form",
    name: "Single-Column Form",
    description: "Standard vertical form layout for most use cases",
    category: "forms",
    href: "/design-system/patterns/forms#single-column",
    preview: "form",
  },
  {
    id: "multi-step-form",
    name: "Multi-Step Form",
    description: "Break complex forms into manageable steps",
    category: "forms",
    href: "/design-system/patterns/forms#multi-step",
    preview: "form",
  },
  
  // Data Display
  {
    id: "data-table",
    name: "Data Table",
    description: "Display structured data with sorting and filtering",
    category: "data",
    href: "/design-system/patterns/data-display#table",
    preview: "table",
  },
  {
    id: "card-grid",
    name: "Card Grid",
    description: "Display items in a responsive grid layout",
    category: "data",
    href: "/design-system/patterns/data-display#cards",
    preview: "table",
  },
  
  // Navigation
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Show hierarchical navigation path",
    category: "navigation",
    href: "/design-system/patterns/navigation#breadcrumbs",
    preview: "nav",
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Navigate through large data sets",
    category: "navigation",
    href: "/design-system/patterns/navigation#pagination",
    preview: "nav",
  },
  
  // Feedback
  {
    id: "toast-notifications",
    name: "Toast Notifications",
    description: "Brief, non-blocking feedback messages",
    category: "feedback",
    href: "/design-system/patterns/feedback#toast",
    preview: "toast",
  },
  {
    id: "confirmation-dialog",
    name: "Confirmation Dialog",
    description: "Require user confirmation for destructive actions",
    category: "feedback",
    href: "/design-system/patterns/feedback#confirmation",
    preview: "toast",
  },
]
```

---

## Line-by-Line Specification

### Lines 43-52: Categories Array

```tsx
const categories = [
  { id: "all", label: "All Patterns", icon: LayoutGrid },
  { id: "empty", label: "Empty States", icon: Inbox },
  { id: "loading", label: "Loading", icon: Loader2 },
  { id: "error", label: "Errors", icon: AlertCircle },
  { id: "forms", label: "Forms", icon: FormInput },
  { id: "data", label: "Data Display", icon: Table },
  { id: "navigation", label: "Navigation", icon: Navigation },
  { id: "feedback", label: "Feedback", icon: Bell },
]
```

| Category | Icon | Count |
|----------|------|-------|
| All | LayoutGrid | Shows all |
| Empty States | Inbox | 3 patterns |
| Loading | Loader2 | 3 patterns |
| Errors | AlertCircle | 3 patterns |
| Forms | FormInput | 2 patterns |
| Data Display | Table | 2 patterns |
| Navigation | Navigation | 2 patterns |
| Feedback | Bell | 2 patterns |

---

### Lines 54-62: Pattern Interface

```tsx
interface Pattern {
  id: string
  name: string
  description: string
  category: string
  href: string
  preview: "empty" | "loading" | "error" | "form" | "table" | "nav" | "toast"
}
```

| Field | Purpose |
|-------|---------|
| `id` | Unique identifier |
| `name` | Display name |
| `description` | One-line description |
| `category` | Category ID for filtering |
| `href` | Link to detail page with anchor |
| `preview` | Preview type for mini visualization |

---

### Lines 64-150: Pattern Definitions

Each pattern object follows the interface:

```tsx
{
  id: "first-time-user",
  name: "First-Time User",
  description: "Welcome new users and guide them to take their first action",
  category: "empty",
  href: "/design-system/patterns/empty-states#first-time",
  preview: "empty",
}
```

---

## Pattern Count Summary

| Category | Patterns |
|----------|----------|
| Empty States | 3 |
| Loading States | 3 |
| Error Handling | 3 |
| Forms | 2 |
| Data Display | 2 |
| Navigation | 2 |
| Feedback | 2 |
| **Total** | **17** |

---

## Verification Checklist

- [ ] 8 categories defined (including "all")
- [ ] Each category has id, label, icon
- [ ] Pattern interface has 6 fields
- [ ] 17 patterns defined
- [ ] Each pattern has all required fields
- [ ] Preview types match category types

---

**Next Section:** [HEADER-SECTION.md](./HEADER-SECTION.md)


