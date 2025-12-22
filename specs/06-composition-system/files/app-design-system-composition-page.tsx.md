# File Specification: Composition System Page

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `app/design-system/composition/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~700 |
| **Purpose** | Document atomic design hierarchy and component relationships |

---

## Overview

This page visualises how components compose together following Brad Frost's Atomic Design methodology. It shows the hierarchy from atoms to pages and how components relate to each other.

---

## Core Structure

```tsx
"use client"

import { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Atom,
  Combine,
  Component,
  Layout,
  FileText,
  ArrowRight,
  Circle
} from "lucide-react"
import Link from "next/link"

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

        {/* Hierarchy Visualisation */}
        <section className="px-6 lg:px-12 py-12 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Component Hierarchy</h2>
            
            {/* Visual Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
              {[
                { level: "atoms", icon: Atom, count: atomicLevels.atoms.length, color: "blue" },
                { level: "molecules", icon: Combine, count: atomicLevels.molecules.length, color: "green" },
                { level: "organisms", icon: Component, count: atomicLevels.organisms.length, color: "purple" },
                { level: "templates", icon: Layout, count: atomicLevels.templates.length, color: "orange" },
                { level: "pages", icon: FileText, count: 12, color: "red" },
              ].map((item, idx) => (
                <div key={item.level} className="flex items-center">
                  <button
                    onClick={() => item.level !== "pages" && setSelectedLevel(item.level as any)}
                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${
                      selectedLevel === item.level 
                        ? "border-primary bg-primary/10" 
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <div className={`p-3 rounded-full bg-${item.color}-500/10 mb-2`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                    </div>
                    <span className="text-sm font-medium text-foreground capitalize">{item.level}</span>
                    <span className="text-xs text-muted-foreground">{item.count} items</span>
                  </button>
                  {idx < 4 && <ArrowRight className="h-5 w-5 text-muted-foreground mx-2 hidden md:block" />}
                </div>
              ))}
            </div>

            {/* Component Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {atomicLevels[selectedLevel].map((component) => (
                <Card 
                  key={component.name}
                  className={`bg-card/50 border-border/50 hover:border-primary/50 transition-all cursor-pointer ${
                    selectedComponent === component.name ? "border-primary" : ""
                  }`}
                  onClick={() => setSelectedComponent(component.name)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{component.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {(component as any).description || `Made from: ${(component as any).madeFrom?.join(", ")}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {component.usage} uses
                      </Badge>
                      {(component as any).madeFrom && (
                        <span className="text-xs text-muted-foreground">
                          {(component as any).madeFrom.length} parts
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Composition Example */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Composition Example</h2>
            
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle>Building a FormField Molecule</CardTitle>
                <CardDescription>
                  A FormField combines Label + Input + Error text atoms into a reusable molecule
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Visual composition diagram */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  {/* Atoms */}
                  <div className="flex flex-col gap-2">
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                      <Circle className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-foreground">Label</span>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                      <Circle className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-foreground">Input</span>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                      <Circle className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                      <span className="text-xs text-foreground">Text</span>
                    </div>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                  
                  {/* Molecule */}
                  <div className="p-6 bg-green-500/10 rounded-lg border border-green-500/30">
                    <Combine className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">FormField</span>
                    <p className="text-xs text-muted-foreground mt-1">Molecule</p>
                  </div>
                </div>

                {/* Code example */}
                <pre className="bg-slate-950 text-slate-300 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// Molecule: FormField
// Combines: Label + Input + Error text

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function FormField({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 lg:px-12 py-12 bg-card/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Benefits of Atomic Design</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Using the same atoms everywhere ensures visual and behavioural consistency across the product.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build complex UIs quickly by combining pre-built, tested components rather than starting from scratch.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Maintainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Update an atom once and the change propagates everywhere it's used, reducing maintenance burden.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
```

---

## Key Elements Explained

| Element | Purpose |
|---------|---------|
| **Level selector** | Click to filter components by level |
| **Component cards** | Show each component with usage stats |
| **Composition diagram** | Visual showing how atoms form molecules |
| **Code example** | Practical implementation reference |

---

## Verification Checklist

- [ ] Page loads at `/design-system/composition`
- [ ] Level buttons filter components correctly
- [ ] All components display with usage counts
- [ ] Composition example renders correctly
- [ ] No console errors

---

**End of Specification**

