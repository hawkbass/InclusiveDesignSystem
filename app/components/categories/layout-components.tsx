"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Users,
  Calendar,
  ArrowRight,
  Layout
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface LayoutComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favourites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Move components array to module level
const components = [
  {
    id: "grid-layout",
    title: "Responsive Grid",
    description: "Flexible grid system for layouts",
    code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="bg-card/50 border border-border/50 shadow-xl rounded-lg p-4">Grid Item 1</div>
  <div className="bg-card/50 border border-border/50 shadow-xl rounded-lg p-4">Grid Item 2</div>
</div>`,
    component: (
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="bg-card/50 border border-border rounded-lg p-4 text-center hover:bg-card/70 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <div className="text-sm text-foreground/80">Grid Item {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "card-layout",
    title: "Card Layout",
    description: "Card-based layout patterns",
    code: `<div className="grid md:grid-cols-2 gap-6">
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>Card content here</CardContent>
  </Card>
</div>`,
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {Array.from({ length: 2 }, (_, i) => (
          <Card key={i} className="bg-card/30 border-border hover:bg-card/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <CardHeader>
              <CardTitle className="text-lg">Card Title {i + 1}</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is the card content area with some example text.
              </p>
              <Button size="sm" className="mt-4 bg-fuchsia-500 hover:bg-fuchsia-600 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
                Action
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  },
  {
    id: "flex-layout",
    title: "Flexbox Layouts",
    description: "Flexible box layout patterns",
    code: `<div className="flex flex-col md:flex-row gap-6">
  <div className="flex-1 bg-card/50 p-4 rounded-lg">Main Content</div>
  <div className="w-full md:w-64 lg:max-w-80 bg-card/50 p-4 rounded-lg">Sidebar</div>
</div>`,
    component: (
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-card/50 border border-border p-4 rounded-lg hover:bg-card/70 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <h4 className="font-medium text-foreground mb-2">Main Content Area</h4>
            <p className="text-sm text-muted-foreground">This is the primary content area that takes up the remaining space.</p>
          </div>
          <div className="w-full md:w-48 bg-card/50 border border-border p-4 rounded-lg hover:bg-card/70 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <h4 className="font-medium text-foreground mb-2">Sidebar</h4>
            <p className="text-sm text-muted-foreground">Fixed width sidebar content.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "masonry-layout",
    title: "Masonry Layout",
    description: "Pinterest-style masonry grid",
    code: `<div className="columns-1 md:columns-2 lg:columns-3 gap-6">
  <div className="break-inside-avoid mb-4 bg-card/50 p-4 rounded-lg">
    <h4>Masonry Item</h4>
    <p>Variable height content...</p>
  </div>
</div>`,
    component: (
      <div className="w-full">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {[
            { title: "Candidate Profile", content: "Sarah Johnson has 5 years of experience in React development.", height: "h-24" },
            { title: "Job Posting", content: "We're looking for a Senior Frontend Developer to join our team. Must have experience with React, TypeScript, and modern development practices.", height: "h-32" },
            { title: "Interview Notes", content: "Great technical skills, excellent communication.", height: "h-20" },
            { title: "Application Status", content: "Application reviewed and moved to technical interview stage. Candidate shows strong potential for the role.", height: "h-28" },
            { title: "Team Feedback", content: "Positive feedback from initial screening.", height: "h-24" },
            { title: "References", content: "Two references provided, both from previous employers with excellent recommendations.", height: "h-32" }
          ].map((item, index) => (
            <div key={index} className={`break-inside-avoid mb-4 bg-card/50 border border-border p-4 rounded-lg hover:bg-card/70 transition-all duration-300 rounded-lg ${item.height}`} style={{ transitionDuration: 'var(--animation-speed)' }}>
              <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "sidebar-layout",
    title: "Sidebar Layout",
    description: "Classic sidebar with main content area",
    code: `<div className="flex min-h-screen">
  <aside className="w-full max-w-64 lg:max-w-80 bg-card border-r border-border">
    <nav className="p-4">Sidebar Navigation</nav>
  </aside>
  <main className="flex-1 p-6">Main Content</main>
</div>`,
    component: (
      <div className="w-full h-64">
        <div className="flex h-full">
          <aside className="w-48 bg-card/50 border-r border-border rounded-l-lg">
            <nav className="p-4">
              <h4 className="font-medium text-foreground mb-3">Navigation</h4>
              <div className="space-y-2">
                {["Dashboard", "Candidates", "Jobs", "Reports"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-card/50 rounded transition-all duration-300 rounded-lg"
                    style={{ transitionDuration: 'var(--animation-speed)' }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          </aside>
          <main className="flex-1 bg-card/30 border border-l-0 border-border rounded-r-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Main Content Area</h4>
            <p className="text-sm text-muted-foreground">This is where the primary application content would be displayed.</p>
          </main>
        </div>
      </div>
    )
  },
  {
    id: "split-layout",
    title: "Split Screen Layout",
    description: "Resizable split pane layout",
    code: `<div className="flex h-96">
  <div className="w-1/2 bg-card/50 border border-border/50 shadow-xl p-4">
    Left Pane
  </div>
  <div className="w-1 bg-muted cursor-col-resize hover:bg-fuchsia-500 transition-all duration-300 rounded-lg"></div>
  <div className="w-1/2 bg-card/50 border border-border/50 shadow-xl p-4">
    Right Pane
  </div>
</div>`,
    component: (
      <div className="w-full h-64">
        <div className="flex h-full">
          <div className="w-1/2 bg-card/50 border border-border rounded-l-lg p-4 hover:bg-card/70 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <h4 className="font-medium text-foreground mb-2">Left Pane</h4>
            <p className="text-sm text-muted-foreground">Candidate list or search results would appear here.</p>
          </div>
          <div className="w-1 bg-muted cursor-col-resize hover:bg-fuchsia-500 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}></div>
          <div className="w-1/2 bg-card/50 border border-border rounded-r-lg p-4 hover:bg-card/70 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <h4 className="font-medium text-foreground mb-2">Right Pane</h4>
            <p className="text-sm text-muted-foreground">Detailed candidate information or preview would be shown here.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "dashboard-layout",
    title: "Dashboard Layout",
    description: "Multi-section dashboard with widgets",
    code: `<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <div className="lg:col-span-3">
    <Card>Main Dashboard</Card>
  </div>
  <div className="space-y-4">
    <Card>Widget 1</Card>
    <Card>Widget 2</Card>
  </div>
</div>`,
    component: (
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="bg-card/30 border-border h-32">
              <CardContent className="p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <h4 className="font-medium text-foreground">Main Dashboard</h4>
                  <p className="text-sm text-muted-foreground">Primary analytics and charts</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="bg-card/30 border-border">
              <CardContent className="p-4">
                <div className="text-center">
                  <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <h5 className="font-medium text-foreground text-sm">Widget 1</h5>
                  <p className="text-xs text-muted-foreground">Quick stats</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/30 border-border">
              <CardContent className="p-4">
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <h5 className="font-medium text-foreground text-sm">Widget 2</h5>
                  <p className="text-xs text-muted-foreground">Recent activity</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "hero-layout",
    title: "Hero Section Layout",
    description: "Landing page hero section with CTA",
    code: `<section className="py-20 text-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl font-bold mb-6">Hero Title</h1>
    <p className="text-xl mb-8">Hero description text</p>
    <Button size="lg">Call to Action</Button>
  </div>
</section>`,
    component: (
      <div className="w-full">
        <section className="py-12 text-center bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 rounded-xl border border-border/50 shadow-xl">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Find Your Perfect Match
            </h1>
            <p className="text-lg text-foreground/80 mb-6">
              Connect talented candidates with exciting opportunities using our advanced recruitment platform.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-fuchsia-500 hover:bg-fuchsia-600">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-accent">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: "container-layout",
    title: "Container Layout",
    description: "Responsive container with max-width constraints",
    code: `<div className="container mx-auto px-6 py-8">
  <div className="max-w-4xl mx-auto">
    <h1>Page Title</h1>
    <p>Page content goes here</p>
  </div>
</div>`,
    component: (
      <div className="w-full">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/30 border border-border rounded-lg p-6">
              <h1 className="text-2xl font-bold text-foreground mb-4">Page Title</h1>
              <p className="text-muted-foreground mb-4">
                This is a responsive container layout that centers content and provides consistent spacing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">Section 1</h3>
                  <p className="text-sm text-muted-foreground">Content for the first section</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">Section 2</h3>
                  <p className="text-sm text-muted-foreground">Content for the second section</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export function LayoutComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favourites, 
  onToggleFavourite 
}: LayoutComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Layout Components</h2>
            <p className="text-muted-foreground">Layout patterns and structural components for page organisation</p>
          </div>
          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 hover:bg-blue-500/30 px-3 py-1">
            {filteredComponents.length} Components
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((comp) => (
            <ComponentCard
              key={comp.id}
              id={comp.id}
              title={comp.title}
              description={comp.description}
              code={comp.code}
              onCopyCode={onCopyCode}
              copiedCode={copiedCode}
              isFavourite={favourites.has(comp.id)}
              onToggleFavourite={onToggleFavourite}
              viewMode={viewMode}
              searchQuery={searchQuery}
            >
              {comp.component}
            </ComponentCard>
          ))}
        </div>

        {filteredComponents.length === 0 && searchQuery && (
          <div className="text-center py-12 text-muted-foreground">
            <Layout className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No components found</p>
            <p className="text-sm">Try adjusting your search query</p>
          </div>
        )}
      </section>
    </div>
  )
}

// Export the components array for use in getAllComponents
export { components }





