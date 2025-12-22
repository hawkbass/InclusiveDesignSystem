# File Specification: Empty States Pattern Page

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `app/design-system/patterns/empty-states/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~600 |
| **Purpose** | Complete documentation for empty states pattern |

---

## Overview

This file documents the "Empty States" pattern - what to show users when there is no data to display. This is a critical UX pattern because empty screens without guidance leave users confused.

---

## Key Sections

### 1. Pattern Overview
- What problem it solves
- When to use it
- When NOT to use it

### 2. Variants

| Variant | Use Case | Visual Element |
|---------|----------|----------------|
| **First-use** | User hasn't created anything yet | Illustration + CTA |
| **No results** | Search/filter returned nothing | Suggestion to adjust |
| **Error** | Something went wrong | Retry action |
| **Success** | Task completed, nothing left | Celebration + next step |

### 3. Implementation Examples

Each variant includes:
- Live preview
- Copyable code
- Customisation options

### 4. Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Screen reader | Use proper heading hierarchy |
| Focus management | Focus primary CTA on load |
| Colour contrast | Don't rely on colour alone |

---

## Core Code Structure

```tsx
"use client"

import { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  FileQuestion,
  Search,
  AlertCircle,
  CheckCircle2,
  Plus,
  RefreshCw,
  Copy,
  Check,
  X,
  Inbox,
  FileSearch,
  PartyPopper
} from "lucide-react"
import Link from "next/link"

export default function EmptyStatesPattern() {
  const [copiedCode, setCopiedCode] = useState("")

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header with pattern title */}
        {/* Overview section */}
        {/* When to use / When not to use */}
        {/* Variants with live examples */}
        {/* Anatomy diagram */}
        {/* Implementation code */}
        {/* Accessibility section */}
        {/* Related patterns */}
      </main>
    </div>
  )
}
```

---

## Variant Implementations

### First-Use Empty State

```tsx
{/* First-use Empty State */}
<div className="flex flex-col items-center justify-center p-12 text-center">
  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
    <Inbox className="h-8 w-8 text-primary" />
  </div>
  <h3 className="text-lg font-semibold text-foreground mb-2">
    No projects yet
  </h3>
  <p className="text-muted-foreground mb-6 max-w-sm">
    Create your first project to get started. Projects help you organise your work.
  </p>
  <Button>
    <Plus className="h-4 w-4 mr-2" />
    Create project
  </Button>
</div>
```

| Element | Purpose | Required |
|---------|---------|----------|
| Icon | Visual interest, context | Optional |
| Heading | States the situation | Required |
| Description | Provides guidance | Required |
| CTA Button | Enables action | Required |

**Why This Design:**
- Icon catches attention and adds friendliness
- Heading clearly states the situation (no blame language)
- Description explains what to do next
- Button provides clear path forward

**Reference:** Atlassian - Empty state design guidelines

---

### No Results Empty State

```tsx
{/* No Results Empty State */}
<div className="flex flex-col items-center justify-center p-12 text-center">
  <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
    <FileSearch className="h-8 w-8 text-amber-500" />
  </div>
  <h3 className="text-lg font-semibold text-foreground mb-2">
    No results found
  </h3>
  <p className="text-muted-foreground mb-6 max-w-sm">
    We couldn't find any items matching "recruitment". Try adjusting your search or filters.
  </p>
  <div className="flex gap-3">
    <Button variant="outline">
      Clear filters
    </Button>
    <Button>
      New search
    </Button>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Search-specific icon | Indicates search context |
| Search term shown | Confirms what was searched |
| Clear filters button | Quick recovery action |
| New search button | Alternative action |

**Why This Design:**
- Shows the search term so users can verify
- Offers multiple recovery paths
- Doesn't blame the user

**Reference:** Shopify Polaris - Search empty state

---

### Error Empty State

```tsx
{/* Error Empty State */}
<div className="flex flex-col items-center justify-center p-12 text-center">
  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
    <AlertCircle className="h-8 w-8 text-red-500" />
  </div>
  <h3 className="text-lg font-semibold text-foreground mb-2">
    Something went wrong
  </h3>
  <p className="text-muted-foreground mb-6 max-w-sm">
    We couldn't load your data. This is usually temporary — try refreshing the page.
  </p>
  <Button>
    <RefreshCw className="h-4 w-4 mr-2" />
    Try again
  </Button>
</div>
```

| Element | Purpose |
|---------|---------|
| Error icon (red) | Clear error indication |
| Non-technical heading | Avoids scary jargon |
| Reassuring description | Reduces anxiety |
| Retry button | Clear recovery path |

**Why This Design:**
- Acknowledges the problem without blame
- Provides reassurance ("usually temporary")
- Single clear action to recover

**Reference:** Gov.uk - Error page patterns

---

### Success Empty State

```tsx
{/* Success/Completion Empty State */}
<div className="flex flex-col items-center justify-center p-12 text-center">
  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
    <PartyPopper className="h-8 w-8 text-green-500" />
  </div>
  <h3 className="text-lg font-semibold text-foreground mb-2">
    All caught up!
  </h3>
  <p className="text-muted-foreground mb-6 max-w-sm">
    You've completed all your tasks. Take a break or start something new.
  </p>
  <Button variant="outline">
    View completed tasks
  </Button>
</div>
```

| Element | Purpose |
|---------|---------|
| Celebration icon | Positive reinforcement |
| Positive heading | Acknowledges achievement |
| Encouraging description | Reinforces good work |
| Secondary action | Optional next step |

**Why This Design:**
- Celebrates completion (dopamine hit)
- Doesn't pressure user into more work
- Offers optional next action

---

## Accessibility Requirements

```tsx
{/* Accessible Empty State */}
<section 
  aria-labelledby="empty-state-heading"
  role="region"
  className="flex flex-col items-center justify-center p-12 text-center"
>
  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
    <Inbox className="h-8 w-8 text-primary" />
  </div>
  <h2 id="empty-state-heading" className="text-lg font-semibold text-foreground mb-2">
    No projects yet
  </h2>
  <p className="text-muted-foreground mb-6 max-w-sm">
    Create your first project to get started.
  </p>
  <Button autoFocus>
    <Plus className="h-4 w-4 mr-2" />
    Create project
  </Button>
</section>
```

| Attribute | Purpose |
|-----------|---------|
| `aria-labelledby` | Associates region with heading |
| `role="region"` | Landmark for screen readers |
| `aria-hidden="true"` on icon | Hides decorative icon from SR |
| `autoFocus` on button | Focus moves to action (context-dependent) |

---

## Do/Don't Examples

### Do: Use helpful, action-oriented language

```tsx
// DO
<h3>No projects yet</h3>
<p>Create your first project to get started.</p>
<Button>Create project</Button>
```

### Don't: Use negative or blaming language

```tsx
// DON'T
<h3>Error: Empty database</h3>
<p>You have not created any projects.</p>
<Button>Click here</Button>
```

---

## Verification Checklist

- [ ] Page loads at `/design-system/patterns/empty-states`
- [ ] All 4 variants are shown with previews
- [ ] Code examples are copyable
- [ ] Accessibility section is complete
- [ ] Related patterns are linked
- [ ] No console errors

---

**End of Specification**

