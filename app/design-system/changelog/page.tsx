"use client"

import React, { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GitBranch,
  GitCommit,
  Tag,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Info,
  Sparkles,
  Zap,
  Shield,
  Bug,
  Wrench,
  Package,
  ExternalLink,
  Copy,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

// Release data - In production, this would come from an API or CMS
const releases = [
  {
    version: "2.1.0",
    date: "2024-12-15",
    type: "minor" as const,
    title: "Light Mode & Global Settings",
    description: "Comprehensive light mode theme system with global settings panel for accessibility.",
    breaking: false,
    highlights: [
      "Complete light mode theme with distinct colour palette",
      "Global Settings Panel with theme, text zoom, and RTL support",
      "Restructured sidebar navigation (Atlassian-style)",
      "Semantic colour tokens for theme-aware components",
    ],
    changes: {
      added: [
        { title: "Light mode theme system", description: "Professional 'Daylight' theme with warm, readable colours" },
        { title: "Global Settings component", description: "Theme toggle, text zoom (100-150%), RTL/LTR direction" },
        { title: "ThemeToggle component", description: "Compact theme switcher for headers and navbars" },
        { title: "New CSS variables", description: "150+ semantic design tokens for both themes" },
      ],
      changed: [
        { title: "UnifiedSidebar", description: "Restructured with collapsible sections and role-based navigation" },
        { title: "Homepage", description: "Updated to use semantic colour tokens for theme support" },
        { title: "globals.css", description: "Complete rewrite with light/dark mode token system" },
      ],
      fixed: [
        { title: "Theme persistence", description: "Settings now save to localStorage correctly" },
        { title: "Scrollbar styling", description: "Theme-aware scrollbars for both modes" },
      ],
      deprecated: [],
    },
    migration: null,
  },
  {
    version: "2.0.0",
    date: "2024-12-01",
    type: "major" as const,
    title: "Design System 2.0",
    description: "Major release with 102+ components, comprehensive documentation, and accessibility improvements.",
    breaking: true,
    highlights: [
      "102+ production-ready components",
      "WCAG 2.1 AA/AAA compliance",
      "New component playground",
      "Enhanced dashboard components",
    ],
    changes: {
      added: [
        { title: "Component Library", description: "102+ components across 9 categories" },
        { title: "Playground", description: "Interactive component testing environment" },
        { title: "Dashboard sections", description: "Candidates, Jobs, Calendar, Settings panels" },
        { title: "Accessibility features", description: "Screen reader support, keyboard navigation, focus management" },
      ],
      changed: [
        { title: "Design tokens", description: "New token naming convention and expanded palette" },
        { title: "Component API", description: "Standardised props interface across all components" },
        { title: "Documentation", description: "World-class documentation with examples and guidelines" },
      ],
      fixed: [
        { title: "Button focus states", description: "Improved visibility and consistency" },
        { title: "Modal accessibility", description: "Proper focus trap and ARIA labels" },
        { title: "Form validation", description: "Better error messaging and field states" },
      ],
      deprecated: [
        { title: "Legacy Button variants", description: "Use new variant prop instead of separate components" },
      ],
    },
    migration: "See migration guide for breaking changes from v1.x",
  },
  {
    version: "1.5.0",
    date: "2024-11-15",
    type: "minor" as const,
    title: "Recruitment Components",
    description: "New components specifically designed for ATS and recruitment workflows.",
    breaking: false,
    highlights: [
      "Candidate profile cards",
      "Job listing components",
      "Interview scheduling UI",
      "Application tracking widgets",
    ],
    changes: {
      added: [
        { title: "CandidateCard", description: "Display candidate information with status and actions" },
        { title: "JobListing", description: "Job posting card with requirements and apply button" },
        { title: "InterviewScheduler", description: "Calendar-based interview scheduling component" },
        { title: "ApplicationTracker", description: "Pipeline view for application stages" },
      ],
      changed: [
        { title: "Avatar component", description: "Added status indicator and size variants" },
        { title: "Badge colours", description: "New semantic colours for recruitment statuses" },
      ],
      fixed: [
        { title: "Card hover states", description: "Smoother transitions and better feedback" },
      ],
      deprecated: [],
    },
    migration: null,
  },
  {
    version: "1.4.0",
    date: "2024-11-01",
    type: "minor" as const,
    title: "Data Visualisation",
    description: "Charts, metrics, and data display components for dashboards.",
    breaking: false,
    highlights: [
      "Recharts integration",
      "Metric cards",
      "Progress indicators",
      "Data tables with sorting",
    ],
    changes: {
      added: [
        { title: "MetricChart", description: "Line, bar, and area charts with Recharts" },
        { title: "StatCard", description: "KPI display with trend indicators" },
        { title: "DataTable", description: "Sortable, filterable data tables" },
        { title: "ProgressRing", description: "Circular progress indicator" },
      ],
      changed: [
        { title: "Card component", description: "Added chart slot and metric variants" },
      ],
      fixed: [
        { title: "Table responsiveness", description: "Better mobile handling with horizontal scroll" },
      ],
      deprecated: [],
    },
    migration: null,
  },
]

const typeConfig = {
  major: { colour: "bg-red-500/10 text-red-500 border-red-500/30", label: "Major", icon: Package },
  minor: { colour: "bg-blue-500/10 text-blue-500 border-blue-500/30", label: "Minor", icon: Sparkles },
  patch: { colour: "bg-green-500/10 text-green-500 border-green-500/30", label: "Patch", icon: Bug },
}

const changeTypeConfig = {
  added: { colour: "text-green-500", icon: CheckCircle2, label: "Added" },
  changed: { colour: "text-blue-500", icon: Wrench, label: "Changed" },
  fixed: { colour: "text-yellow-500", icon: Bug, label: "Fixed" },
  deprecated: { colour: "text-orange-500", icon: AlertCircle, label: "Deprecated" },
}

export default function ChangelogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [expandedVersions, setExpandedVersions] = useState<Set<string>>(new Set([releases[0].version]))

  const filteredReleases = releases.filter(release => {
    const matchesSearch = 
      release.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = selectedType === "all" || release.type === selectedType
    
    return matchesSearch && matchesType
  })

  const toggleVersion = (version: string) => {
    const newExpanded = new Set(expandedVersions)
    if (newExpanded.has(version)) {
      newExpanded.delete(version)
    } else {
      newExpanded.add(version)
    }
    setExpandedVersions(newExpanded)
  }

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Changelog</h1>
                <p className="text-muted-foreground">Release history and version updates</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search releases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {["all", "major", "minor", "patch"].map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="capitalize"
                  >
                    {type === "all" ? "All" : type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {filteredReleases.map((release, index) => {
              const TypeIcon = typeConfig[release.type].icon
              const isExpanded = expandedVersions.has(release.version)
              
              return (
                <Card key={release.version} className="relative overflow-hidden">
                  {/* Version indicator line */}
                  {index < filteredReleases.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-border" />
                  )}
                  
                  <CardHeader 
                    className="cursor-pointer hover:bg-accent/30 transition-colors"
                    onClick={() => toggleVersion(release.version)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${typeConfig[release.type].colour.split(' ')[0]}`}>
                          <TypeIcon className={`h-5 w-5 ${typeConfig[release.type].colour.split(' ')[1]}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <CardTitle className="text-xl">
                              v{release.version}
                            </CardTitle>
                            <Badge className={typeConfig[release.type].colour}>
                              {typeConfig[release.type].label}
                            </Badge>
                            {release.breaking && (
                              <Badge variant="destructive">Breaking</Badge>
                            )}
                          </div>
                          <CardDescription className="text-base font-medium text-foreground/80">
                            {release.title}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(release.date).toLocaleDateString('en-GB', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric' 
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitCommit className="h-3.5 w-3.5" />
                              {Object.values(release.changes).flat().length} changes
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-6">
                        {release.description}
                      </p>

                      {/* Highlights */}
                      {release.highlights.length > 0 && (
                        <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Highlights
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {release.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/80">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Changes by type */}
                      <div className="space-y-6">
                        {(Object.entries(release.changes) as [keyof typeof changeTypeConfig, typeof release.changes.added][]).map(([type, changes]) => {
                          if (changes.length === 0) return null
                          const config = changeTypeConfig[type]
                          const Icon = config.icon
                          
                          return (
                            <div key={type}>
                              <h4 className={`font-semibold mb-3 flex items-center gap-2 ${config.colour}`}>
                                <Icon className="h-4 w-4" />
                                {config.label}
                              </h4>
                              <ul className="space-y-2">
                                {changes.map((change, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                                    <div>
                                      <span className="font-medium text-foreground">{change.title}</span>
                                      {change.description && (
                                        <span className="text-muted-foreground"> — {change.description}</span>
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>

                      {/* Migration notice */}
                      {release.migration && (
                        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">Migration Required</h4>
                              <p className="text-sm text-muted-foreground">{release.migration}</p>
                              <Button variant="link" className="h-auto p-0 mt-2 text-yellow-600">
                                View migration guide <ArrowRight className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>

          {filteredReleases.length === 0 && (
            <div className="text-center py-12">
              <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No releases found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Subscribe CTA */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new releases and important updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/inclusive/design-system/releases" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      GitHub Releases
                    </Link>
                  </Button>
                  <Button>
                    Subscribe to Updates
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

