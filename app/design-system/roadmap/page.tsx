"use client"

import React, { useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Palette,
  Code2,
  Globe,
  Smartphone,
  BarChart3,
  Heart,
} from "lucide-react"

const quarters = [
  {
    id: "q1-2025",
    title: "Q1 2025",
    status: "current" as const,
    progress: 35,
    items: [
      {
        title: "Advanced Theming Engine",
        description: "Custom theme builder with real-time preview and export",
        status: "in-progress" as const,
        icon: Palette,
        priority: "high",
      },
      {
        title: "Component Variants API",
        description: "Programmatic variant generation and composition",
        status: "in-progress" as const,
        icon: Code2,
        priority: "high",
      },
      {
        title: "Figma Plugin v2",
        description: "Sync components bidirectionally with Figma",
        status: "planned" as const,
        icon: Sparkles,
        priority: "medium",
      },
      {
        title: "Motion System",
        description: "Standardised animations and transitions library",
        status: "planned" as const,
        icon: Zap,
        priority: "medium",
      },
    ],
  },
  {
    id: "q2-2025",
    title: "Q2 2025",
    status: "upcoming" as const,
    progress: 0,
    items: [
      {
        title: "AI-Powered Accessibility Checker",
        description: "Automated WCAG compliance testing with suggestions",
        status: "planned" as const,
        icon: Shield,
        priority: "high",
      },
      {
        title: "Mobile-First Components",
        description: "Touch-optimised variants for all components",
        status: "planned" as const,
        icon: Smartphone,
        priority: "high",
      },
      {
        title: "Analytics Dashboard Template",
        description: "Pre-built dashboard layouts for recruitment metrics",
        status: "planned" as const,
        icon: BarChart3,
        priority: "medium",
      },
      {
        title: "Internationalisation (i18n)",
        description: "RTL support and translation-ready components",
        status: "planned" as const,
        icon: Globe,
        priority: "medium",
      },
    ],
  },
  {
    id: "q3-2025",
    title: "Q3 2025",
    status: "future" as const,
    progress: 0,
    items: [
      {
        title: "Design System CLI",
        description: "Command-line tools for scaffolding and updates",
        status: "planned" as const,
        icon: Code2,
        priority: "medium",
      },
      {
        title: "Component Telemetry",
        description: "Usage analytics and performance monitoring",
        status: "planned" as const,
        icon: BarChart3,
        priority: "low",
      },
      {
        title: "Community Contributions",
        description: "Open contribution model for external components",
        status: "planned" as const,
        icon: Users,
        priority: "medium",
      },
    ],
  },
]

const statusConfig = {
  "completed": { colour: "bg-green-500/10 text-green-500 border-green-500/30", label: "Completed" },
  "in-progress": { colour: "bg-blue-500/10 text-blue-500 border-blue-500/30", label: "In Progress" },
  "planned": { colour: "bg-muted text-muted-foreground border-border", label: "Planned" },
}

const quarterStatusConfig = {
  "current": { colour: "bg-primary/10 text-primary border-primary/30", label: "Current Quarter" },
  "upcoming": { colour: "bg-blue-500/10 text-blue-500 border-blue-500/30", label: "Upcoming" },
  "future": { colour: "bg-muted text-muted-foreground border-border", label: "Future" },
}

const priorityConfig = {
  "high": "border-l-red-500",
  "medium": "border-l-yellow-500",
  "low": "border-l-green-500",
}

export default function RoadmapPage() {
  useEffect(() => {
    document.title = "Roadmap - Inclusive Design System"
  }, [])
  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Roadmap</h1>
                <p className="text-muted-foreground">Upcoming features and improvements</p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mt-4">
              Our roadmap is shaped by user feedback and industry best practices. 
              Features are subject to change based on priorities and community input.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-muted-foreground">Completed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-muted-foreground">In Progress</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground">Planned</span>
              </div>
              <div className="border-l border-border pl-4 ml-2 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-4 bg-red-500 rounded" />
                  <span className="text-muted-foreground">High Priority</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-4 bg-yellow-500 rounded" />
                  <span className="text-muted-foreground">Medium</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-4 bg-green-500 rounded" />
                  <span className="text-muted-foreground">Low</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="space-y-12">
            {quarters.map((quarter) => (
              <section key={quarter.id}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <h2 className="text-2xl font-bold text-foreground">{quarter.title}</h2>
                    <Badge className={quarterStatusConfig[quarter.status].colour}>
                      {quarterStatusConfig[quarter.status].label}
                    </Badge>
                  </div>
                  {quarter.status === "current" && (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{quarter.progress}% complete</span>
                      <Progress value={quarter.progress} className="w-32 h-2" />
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {quarter.items.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Card 
                        key={index} 
                        className={`border-l-4 ${priorityConfig[item.priority as keyof typeof priorityConfig]} hover:bg-accent/30 transition-colors`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-muted rounded-lg">
                                <Icon className="h-4 w-4 text-foreground" />
                              </div>
                              <CardTitle className="text-base">{item.title}</CardTitle>
                            </div>
                            <Badge className={statusConfig[item.status].colour} variant="outline">
                              {statusConfig[item.status].label}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription>{item.description}</CardDescription>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Feedback CTA */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Have a feature request?</h3>
                  <p className="text-sm text-muted-foreground">
                    We'd love to hear your ideas for improving the design system
                  </p>
                </div>
                <a 
                  href="https://github.com/inclusive/design-system/issues/new?template=feature_request.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Submit Feature Request
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Voting System */}
        <section className="px-6 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-card/30 border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Feature Voting System
            </CardTitle>
            <CardDescription>
              Vote on features you'd like to see in future releases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { feature: "Advanced Animation Library", votes: 124, status: "planned" },
                { feature: "Dark Mode Toggle Component", votes: 98, status: "in-progress" },
                { feature: "Accessibility Audit Tool", votes: 87, status: "planned" },
                { feature: "Component Versioning System", votes: 65, status: "planned" },
                { feature: "Design Token Generator CLI", votes: 54, status: "planned" }
              ].map((item, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{item.feature}</h4>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline"
                            className={`text-xs ${
                              item.status === "in-progress"
                                ? "border-blue-500/30 text-blue-600 dark:text-blue-400"
                                : "border-muted-foreground/30 text-muted-foreground"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">{item.votes}</div>
                          <div className="text-xs text-muted-foreground">votes</div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Heart className="h-4 w-4 mr-1" />
                          Vote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Release Calendar */}
        <Card className="bg-card/30 border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Release Calendar
            </CardTitle>
            <CardDescription>
              Upcoming releases and feature timelines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { version: "v2.2.0", date: "Q1 2025", features: ["Advanced Theming", "Component Variants API"], status: "current" },
                { version: "v2.3.0", date: "Q2 2025", features: ["AI Accessibility Checker", "Mobile Components"], status: "upcoming" },
                { version: "v2.4.0", date: "Q3 2025", features: ["Analytics Dashboard", "i18n Support"], status: "planned" }
              ].map((release, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{release.version}</h4>
                        <p className="text-sm text-muted-foreground">{release.date}</p>
                      </div>
                      <Badge 
                        variant="outline"
                        className={`${
                          release.status === "current"
                            ? "border-green-500/30 text-green-600 dark:text-green-400"
                            : release.status === "upcoming"
                            ? "border-blue-500/30 text-blue-600 dark:text-blue-400"
                            : "border-muted-foreground/30 text-muted-foreground"
                        }`}
                      >
                        {release.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      {release.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
        </section>
      </main>
    </div>
  )
}

