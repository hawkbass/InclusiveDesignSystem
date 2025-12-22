# Part: HEADER-SECTION

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 3 of 8 |
| **Lines** | 74-98 |
| **Purpose** | Component declaration and page header |

---

## What This Code Does

1. Declares the main component function
2. Renders the page header with breadcrumb navigation
3. Displays title and description

---

## Code Block

```tsx

export default function PerformancePage() {
  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="px-6 lg:px-12 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/design-system">Design System</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Performance</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Performance Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Monitor design system health including bundle sizes, render performance, 
              and accessibility compliance.
            </p>
          </div>
        </header>
```

---

## Verification

- [ ] Component named `PerformancePage` and default exported
- [ ] UnifiedSidebar renders first
- [ ] Breadcrumb shows "Design System > Performance"
- [ ] Title is "Performance Dashboard"

---

**Next part:** `BUNDLE-SIZE-SECTION.md`


