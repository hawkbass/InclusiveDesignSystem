# File Specification: Pattern Library Index Page

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `app/design-system/patterns/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~400 |
| **Purpose** | Index page listing all available UX patterns |

---

## Complete Code

```tsx
"use client"

import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronRight, 
  FileQuestion, 
  Loader2, 
  AlertTriangle, 
  FormInput, 
  Navigation,
  Search,
  BarChart3,
  CheckCircle2
} from "lucide-react"
import Link from "next/link"

const patterns = [
  {
    id: "empty-states",
    name: "Empty States",
    description: "What to show when there's no data to display",
    icon: FileQuestion,
    variants: 4,
    href: "/design-system/patterns/empty-states",
    status: "stable"
  },
  {
    id: "loading-states",
    name: "Loading States",
    description: "Feedback during async operations and data fetching",
    icon: Loader2,
    variants: 4,
    href: "/design-system/patterns/loading-states",
    status: "stable"
  },
  {
    id: "error-handling",
    name: "Error Handling",
    description: "Communicating errors and guiding recovery",
    icon: AlertTriangle,
    variants: 4,
    href: "/design-system/patterns/error-handling",
    status: "stable"
  },
  {
    id: "forms",
    name: "Forms",
    description: "Data collection, validation, and submission",
    icon: FormInput,
    variants: 4,
    href: "/design-system/patterns/forms",
    status: "stable"
  },
  {
    id: "navigation",
    name: "Navigation",
    description: "Wayfinding, menus, and page hierarchy",
    icon: Navigation,
    variants: 5,
    href: "/design-system/patterns/navigation",
    status: "stable"
  },
  {
    id: "search-filtering",
    name: "Search & Filtering",
    description: "Finding and narrowing down content",
    icon: Search,
    variants: 3,
    href: "/design-system/patterns/search-filtering",
    status: "beta"
  },
  {
    id: "data-visualization",
    name: "Data Visualisation",
    description: "Charts, graphs, and metrics display",
    icon: BarChart3,
    variants: 6,
    href: "/design-system/patterns/data-visualization",
    status: "beta"
  },
]

export default function Patterns() {
  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="px-6 lg:px-12 py-12 border-b border-border/50 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/design-system" className="hover:text-foreground transition-colors">Design System</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Patterns</span>
              </nav>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Pattern Library
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Reusable solutions for common design challenges. Patterns show how to combine components 
                to solve real problems consistently.
              </p>
              
              <div className="flex gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">{patterns.length}</div>
                  <div className="text-sm text-muted-foreground">Patterns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    {patterns.reduce((acc, p) => acc + p.variants, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Variants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {patterns.filter(p => p.status === "stable").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Stable</div>
                </div>
              </div>
            </div>
          </header>

          {/* Pattern Grid */}
          <section className="px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patterns.map(pattern => (
                  <Link key={pattern.id} href={pattern.href}>
                    <Card className="bg-card/30 border-border/50 hover:border-primary/50 transition-all h-full group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <pattern.icon className="h-6 w-6 text-primary" />
                          </div>
                          <Badge 
                            variant="outline" 
                            className={
                              pattern.status === "stable" 
                                ? "text-green-400 border-green-400/30" 
                                : "text-blue-400 border-blue-400/30"
                            }
                          >
                            {pattern.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                          {pattern.name}
                        </CardTitle>
                        <CardDescription>{pattern.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {pattern.variants} variants
                          </span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="px-6 lg:px-12 py-12 bg-card/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">How to Use Patterns</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                    <h3 className="font-semibold text-foreground">Identify the Problem</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Understand what user experience challenge you're trying to solve. Is it an empty state? Loading feedback? Error recovery?
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                    <h3 className="font-semibold text-foreground">Find the Pattern</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Browse patterns or use search to find solutions. Each pattern includes variants for different contexts.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                    <h3 className="font-semibold text-foreground">Implement & Customise</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Copy the code examples and adapt the content to your specific use case. Follow the accessibility guidelines.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
```

---

## Line-by-Line Explanation

| Lines | What | Why |
|-------|------|-----|
| 1 | `"use client"` | Needed for client-side interactions |
| 3-15 | Imports | Components and icons for the page |
| 17-71 | `patterns` array | Data for all available patterns |
| 73-170 | Page component | Main layout with header and grid |

**Pattern Data Structure:**
```tsx
{
  id: "empty-states",       // Unique identifier
  name: "Empty States",     // Display name
  description: "...",       // Brief explanation
  icon: FileQuestion,       // Visual icon
  variants: 4,              // Number of variants available
  href: "/design-system/patterns/empty-states",  // Link to detail page
  status: "stable"          // Stability indicator
}
```

**Reference:** IBM Carbon Design System - Pattern index structure

---

## Verification Checklist

- [ ] Page loads at `/design-system/patterns`
- [ ] All 7 patterns display in grid
- [ ] Clicking a pattern navigates to detail page
- [ ] Status badges show correct colours
- [ ] Stats section shows correct totals
- [ ] No console errors

---

**End of Specification**

