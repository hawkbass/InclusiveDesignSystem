# Part: COMPOSITION-DATA

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 2 of 7 |
| **Lines** | 42-82 |
| **Purpose** | Atomic design hierarchy data structure |

---

## What This Code Does

Defines the complete hierarchy of components organized by atomic design level:
- **Atoms** - Basic building blocks (Button, Input, Badge, etc.)
- **Molecules** - Simple combinations of atoms (FormField, SearchBar, etc.)
- **Organisms** - Complex UI sections (Header, Sidebar, DataTable, etc.)
- **Templates** - Page-level layouts (DashboardLayout, AuthLayout, etc.)

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Brad Frost's Atomic Design** | Five-level hierarchy |
| **Shopify Polaris** | Component categorization approach |

---

## Code Block

```tsx

// Component hierarchy data
const atomicLevels = {
  atoms: [
    { name: "Button", description: "Clickable action element", usage: 156 },
    { name: "Input", description: "Text entry field", usage: 89 },
    { name: "Label", description: "Form field label", usage: 134 },
    { name: "Badge", description: "Status indicator", usage: 67 },
    { name: "Icon", description: "Visual symbol", usage: 243 },
    { name: "Checkbox", description: "Boolean selector", usage: 45 },
    { name: "Switch", description: "Toggle on/off", usage: 23 },
    { name: "Avatar", description: "User image", usage: 56 },
    { name: "Separator", description: "Visual divider", usage: 78 },
    { name: "Skeleton", description: "Loading placeholder", usage: 34 },
  ],
  molecules: [
    { name: "FormField", madeFrom: ["Label", "Input", "Text"], usage: 89 },
    { name: "SearchBar", madeFrom: ["Input", "Button", "Icon"], usage: 12 },
    { name: "NavItem", madeFrom: ["Icon", "Label", "Badge"], usage: 34 },
    { name: "UserDisplay", madeFrom: ["Avatar", "Label", "Badge"], usage: 23 },
    { name: "CheckboxField", madeFrom: ["Checkbox", "Label"], usage: 45 },
    { name: "Breadcrumb", madeFrom: ["Link", "Icon", "Separator"], usage: 18 },
    { name: "TabItem", madeFrom: ["Button", "Icon", "Badge"], usage: 28 },
    { name: "Tooltip", madeFrom: ["Text", "Icon"], usage: 56 },
  ],
  organisms: [
    { name: "Header", madeFrom: ["Logo", "NavItem", "UserDisplay", "Button"], usage: 4 },
    { name: "Sidebar", madeFrom: ["NavItem", "UserDisplay", "Logo"], usage: 3 },
    { name: "DataTable", madeFrom: ["Table", "Pagination", "SearchBar"], usage: 12 },
    { name: "Card", madeFrom: ["Title", "Content", "Actions"], usage: 67 },
    { name: "Modal", madeFrom: ["Overlay", "Card", "Button"], usage: 23 },
    { name: "Form", madeFrom: ["FormField", "Button", "Checkbox"], usage: 34 },
    { name: "Footer", madeFrom: ["Link", "Logo", "Icon"], usage: 2 },
  ],
  templates: [
    { name: "DashboardLayout", madeFrom: ["Sidebar", "Header", "Content"], usage: 1 },
    { name: "AuthLayout", madeFrom: ["Card", "Logo", "Background"], usage: 1 },
    { name: "SettingsLayout", madeFrom: ["Sidebar", "TabPanel"], usage: 1 },
    { name: "ListPageLayout", madeFrom: ["Header", "Filters", "DataTable"], usage: 1 },
  ],
}
```

---

## Data Structure

| Level | Properties |
|-------|------------|
| **Atoms** | `name`, `description`, `usage` |
| **Molecules** | `name`, `madeFrom[]`, `usage` |
| **Organisms** | `name`, `madeFrom[]`, `usage` |
| **Templates** | `name`, `madeFrom[]`, `usage` |

---

## Verification

- [ ] `atomicLevels` object has 4 keys: atoms, molecules, organisms, templates
- [ ] Atoms have 10 items
- [ ] Molecules have 8 items
- [ ] Organisms have 7 items
- [ ] Templates have 4 items

---

**Next part:** `HEADER-SECTION.md`


