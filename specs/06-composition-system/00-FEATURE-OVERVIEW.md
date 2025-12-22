# Feature 06: Component Composition System

## Overview

| Property | Value |
|----------|-------|
| **Feature ID** | 06 |
| **Feature Name** | Component Composition System |
| **Status** | Specification Complete |
| **Priority** | Medium |
| **Estimated Complexity** | Medium |

---

## Purpose

Document the atomic design hierarchy and component relationships within the design system. This feature visualizes how atoms combine into molecules, molecules into organisms, and organisms into templates and pages, helping developers understand component composition patterns.

---

## Design References

| Source | Contribution |
|--------|--------------|
| **Atomic Design (Brad Frost)** | Methodology and terminology |
| **Figma Auto Layout** | Composition patterns |
| **Material Design** | Component hierarchy |
| **IBM Carbon** | Component relationships |
| **Radix UI** | Composition API patterns |

---

## Atomic Design Levels

### Level 1: Atoms
Smallest building blocks:
- Button
- Input
- Badge
- Icon
- Label
- Typography elements

### Level 2: Molecules
Simple combinations:
- Form Field (Label + Input + Helper Text)
- Search Box (Input + Button)
- Card Header (Title + Badge + Actions)
- Navigation Item (Icon + Label)

### Level 3: Organisms
Complex UI sections:
- Header (Logo + Navigation + User Menu)
- Form (Multiple Form Fields + Submit)
- Card (Header + Content + Footer)
- Data Table (Headers + Rows + Pagination)

### Level 4: Templates
Page layouts:
- Dashboard Layout
- Settings Page
- List Page
- Detail Page

### Level 5: Pages
Complete implementations:
- Home Page
- Product List
- User Profile
- Settings

---

## Files Modified/Created

### Composition Page
**Path:** `app/design-system/composition/page.tsx`

| Part File | Lines | Description |
|-----------|-------|-------------|
| `ASSEMBLY-GUIDE.md` | - | How to assemble the page |
| `IMPORTS.md` | 1-40 | Client directive, imports |
| `COMPOSITION-DATA.md` | 41-150 | Hierarchy definitions |
| `HEADER-SECTION.md` | 151-220 | Hero and level navigation |
| `HIERARCHY-VISUALIZATION.md` | 221-350 | Visual diagram of relationships |
| `LEVEL-DETAILS.md` | 351-500 | Detailed view per level |
| `COMPOSITION-EXAMPLES.md` | 501-600 | Live composition examples |
| `FOOTER.md` | 601-650 | Related resources, closing |

---

## Hierarchy Visualization

```
┌─────────────────────────────────────────────────────────┐
│                        PAGES                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │                   TEMPLATES                       │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │               ORGANISMS                     │  │  │
│  │  │  ┌────────────────────────────────────────┐ │  │  │
│  │  │  │            MOLECULES                   │ │  │  │
│  │  │  │  ┌─────────────────────────────────┐   │ │  │  │
│  │  │  │  │           ATOMS                 │   │ │  │  │
│  │  │  │  │  [Button] [Input] [Badge] [Icon]│   │ │  │  │
│  │  │  │  └─────────────────────────────────┘   │ │  │  │
│  │  │  └────────────────────────────────────────┘ │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Composition Patterns

### Pattern 1: Slot Pattern (asChild)
```tsx
<Button asChild>
  <Link href="/somewhere">Navigate</Link>
</Button>
```

### Pattern 2: Compound Components
```tsx
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

### Pattern 3: Render Props
```tsx
<DataTable
  data={items}
  renderRow={(item) => (
    <TableRow key={item.id}>
      <TableCell>{item.name}</TableCell>
    </TableRow>
  )}
/>
```

### Pattern 4: Context Composition
```tsx
<Form>
  <FormField name="email">
    <FormLabel>Email</FormLabel>
    <FormControl>
      <Input />
    </FormControl>
    <FormMessage />
  </FormField>
</Form>
```

---

## Verification Checklist

After implementing this feature:

- [ ] Page loads at `/design-system/composition`
- [ ] All 5 atomic levels displayed
- [ ] Visual hierarchy diagram renders
- [ ] Each level shows component examples
- [ ] Composition patterns documented
- [ ] Live examples work
- [ ] Navigation between levels works

---

## Directory Structure

```
specs/06-composition-system/
├── 00-FEATURE-OVERVIEW.md (this file)
└── files/
    └── app-design-system-composition-page.tsx/
        ├── ASSEMBLY-GUIDE.md
        ├── IMPORTS.md
        ├── COMPOSITION-DATA.md
        ├── HEADER-SECTION.md
        ├── HIERARCHY-VISUALIZATION.md
        ├── LEVEL-DETAILS.md
        ├── COMPOSITION-EXAMPLES.md
        └── FOOTER.md

Total: 8 part files
```

