# Part: HEADER-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 3 of 7 |
| **Lines** | 83-111 |
| **Purpose** | Component declaration, state, page header |

---

## What This Code Does

1. Declares the main component function
2. Sets up state for selected level and component
3. Renders the page header with breadcrumb and description

---

## Code Block

```tsx

export default function CompositionPage() {
  const [selectedLevel, setSelectedLevel] = useState<"atoms" | "molecules" | "organisms" | "templates">("atoms")
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header Section */}
        <header className="px-6 lg:px-12 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/design-system">Design System</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Composition</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Atomic Design System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Components are organised in a hierarchy from simple atoms to complete pages, 
              following Brad Frost's Atomic Design methodology.
            </p>
          </div>
        </header>
```

---

## State Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `selectedLevel` | Union type | Currently selected atomic level |
| `selectedComponent` | `string \| null` | Selected component for detail view |

---

## Verification

- [ ] Component named `CompositionPage` and default exported
- [ ] `selectedLevel` defaults to `"atoms"`
- [ ] UnifiedSidebar renders first
- [ ] Breadcrumb shows "Design System > Composition"

---

**Next part:** `HIERARCHY-VISUALIZATION.md`


