"use client"

import React, { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { 
  CheckCircle2, 
  Shield, 
  Monitor, 
  Layers, 
  BookOpen, 
  Palette, 
  Grid3X3, 
  ArrowRight, 
  Users, 
  Copy, 
  ExternalLink, 
  Download, 
  Eye, 
  Code2, 
  Sparkles, 
  TrendingUp, 
  Target, 
  Award, 
  Zap, 
  Clock, 
  Star, 
  Activity, 
  FileText,
  GitCommit,
  ComponentIcon,
  Gauge,
  Heart,
  Brain,
  Lightbulb,
  Globe,
  AlertCircle,
  Info,
  Play,
  BarChart3
} from "lucide-react"
import Link from "next/link"
import { adoptionMetrics, performanceBenchmarks, systemHealth, getMetricsByCategory } from "@/app/data/metrics-data"
import { getTopComponents } from "@/app/data/metrics-data"

export default function Overview() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [selectedMetric, setSelectedMetric] = useState("adoption")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed])

  if (!mounted) {
    return null
  }

  const systemMetrics = {
    adoption: {
      title: "System Adoption",
      value: "94%",
      change: "+12%",
      description: "Teams using design system components",
      icon: TrendingUp,
      colour: "text-green-600 dark:text-green-400"
    },
    consistency: {
      title: "Design Consistency",
      value: "96%",
      change: "+8%",
      description: "UI patterns following system guidelines",
      icon: Target,
      colour: "text-blue-600 dark:text-blue-400"
    },
    performance: {
      title: "Performance Score",
      value: "98/100",
      change: "+5",
      description: "Average Lighthouse performance",
      icon: Zap,
      colour: "text-primary"
    },
    accessibility: {
      title: "Accessibility",
      value: "AAA",
      change: "Stable",
      description: "WCAG 2.1 compliance across components",
      icon: Shield,
      colour: "text-purple-400"
    }
  }

  const recentUpdates = [
    {
      id: 1,
      title: "Enhanced Button Component",
      description: "Added loading states, new size variants, and improved accessibility",
      type: "Component Update",
      impact: "High",
      timestamp: "2 hours ago",
      changes: "+89 -23 lines",
      category: "enhancement"
    },
    {
      id: 2,
      title: "colour Token Refinement",
      description: "Updated brand colours and improved dark mode contrast ratios",
      type: "Design Token",
      impact: "High", 
      timestamp: "4 hours ago",
      changes: "+156 -78 lines",
      category: "update"
    },
    {
      id: 3,
      title: "New Elevation System",
      description: "Added comprehensive shadows, blur effects, and glassmorphism tokens",
      type: "Foundation",
      impact: "Medium",
      timestamp: "1 day ago",
      changes: "+234 -12 lines",
      category: "addition"
    }
  ]

  const quickActions = [
    {
      title: "Browse Components",
      description: "Explore our 49+ production-ready components",
      href: "/components",
      icon: ComponentIcon,
      gradient: "from-primary to-purple-600",
      stats: "49+ Components"
    },
    {
      title: "Design Tokens",
      description: "Copy CSS variables and design tokens",
      href: "/design-system/tokens",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-600",
      stats: "200+ Tokens"
    },
    {
      title: "Implementation Guide",
      description: "Get started with installation and setup",
      href: "/design-system/getting-started",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-600",
      stats: "5 min setup"
    },
    {
      title: "Best Practices",
      description: "Guidelines for optimal implementation",
      href: "/design-system/best-practices",
      icon: Target,
      gradient: "from-orange-500 to-red-600",
      stats: "Expert Tips"
    }
  ]

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Strategic Header - System Status */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-6xl mx-auto">
              {/* System Status Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-green-500/20 text-green-600 dark:text-green-300 border-green-500/30 px-3 py-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  System Healthy
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30 px-3 py-1">
                  <Activity className="w-3 h-3 mr-1" />
                  3 Recent Updates
                </Badge>
                <Badge className="bg-fuchsia-500/20 text-primary border-primary/30 px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  v2.1.0 Latest
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Value Proposition */}
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Inclusive
                    </span>
                    <br />
                    <span className="text-foreground">Design System</span>
                  </h1>
                  
                  <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
                    Build consistent, efficient, and scalable recruitment interfaces with Inclusive's comprehensive design system. 
                    Reduce development time by 31% while maintaining high-quality user experiences across all products.
                  </p>

                  {/* Value Proposition Badges */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Badge className="bg-green-500/20 text-green-600 dark:text-green-300 border-green-500/30 px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      31% Faster Development
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30 px-4 py-2">
                      <Shield className="w-4 h-4 mr-2" />
                      WCAG 2.1 AA Compliant
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:text-purple-600 dark:text-purple-300 border-purple-500/30 px-4 py-2">
                      <Users className="w-4 h-4 mr-2" />
                      Used by 94% of Teams
                    </Badge>
                  </div>

                  {/* Key System Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">94%</div>
                      <div className="text-sm text-muted-foreground">Team Adoption</div>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">49+</div>
                      <div className="text-sm text-muted-foreground">Components</div>
                    </div>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 shadow-lg shadow-fuchsia-500/25">
                      <Eye className="mr-2 h-5 w-5" />
                      View Live System
                    </Button>
                    <Button size="lg" variant="outline" className="border-border hover:bg-card" asChild>
                      <Link href="/design-system/tokens">
                        <Download className="mr-2 h-5 w-5" />
                        Export Tokens
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* System Health Dashboard */}
                <div className="space-y-6">
                  <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
                        System Health
                      </CardTitle>
                      <CardDescription>
                        Real-time monitoring of design system metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Health Indicators */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">99.8%</div>
                          <div className="text-xs text-muted-foreground">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2.1s</div>
                          <div className="text-xs text-muted-foreground">Avg Load Time</div>
                        </div>
                      </div>

                      {/* Component Health */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground/80">Component Coverage</span>
                          <span className="text-sm text-green-600 dark:text-green-400">96%</span>
                        </div>
                        <Progress value={96} className="h-2" />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground/80">Accessibility Score</span>
                          <span className="text-sm text-purple-400">AAA</span>
                        </div>
                        <Progress value={100} className="h-2" />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground/80">Performance</span>
                          <span className="text-sm text-primary">98/100</span>
                        </div>
                        <Progress value={98} className="h-2" />
                      </div>

                      {/* Quick Health Actions */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-border text-muted-foreground hover:text-foreground flex-1">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          View Analytics
                        </Button>
                        <Button size="sm" variant="outline" className="border-border text-muted-foreground hover:text-foreground flex-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Report Issue
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 lg:px-12 py-8">
          {/* System Metrics Dashboard */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Performance Metrics
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Track the impact and effectiveness of your design system across teams and projects
                </p>
              </div>

              {/* Metrics Grid - Enhanced with real data */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {Object.entries(systemMetrics).map(([key, metric]) => {
                  const IconComponent = metric.icon
                  return (
                    <Card 
                      key={key}
                      className={`bg-card/50 border-border/50 hover:bg-card/70 transition-all cursor-pointer ${
                        selectedMetric === key ? 'ring-2 ring-fuchsia-500/50' : ''
                      }`}
                      onClick={() => setSelectedMetric(key)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <IconComponent className={`h-8 w-8 ${metric.colour}`} />
                          <Badge variant="outline" className="text-xs">
                            {metric.change}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-bold text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-sm font-medium text-foreground/80">
                            {metric.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.description}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Detailed Metric View */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {React.createElement(systemMetrics[selectedMetric as keyof typeof systemMetrics].icon, {
                      className: `h-5 w-5 ${systemMetrics[selectedMetric as keyof typeof systemMetrics].colour}`
                    })}
                    {systemMetrics[selectedMetric as keyof typeof systemMetrics].title} Details
                  </CardTitle>
                  <CardDescription>
                    In-depth analysis and trends for {systemMetrics[selectedMetric as keyof typeof systemMetrics].title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">Current Status</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">This Week</span>
                          <span className="text-sm text-green-600 dark:text-green-400">+5.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">This Month</span>
                          <span className="text-sm text-green-600 dark:text-green-400">+12.8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Quarter</span>
                          <span className="text-sm text-green-600 dark:text-green-400">+28.3%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">Team Impact</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Frontend Teams</span>
                          <span className="text-sm text-foreground/80">8/9</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Design Teams</span>
                          <span className="text-sm text-foreground/80">5/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Product Teams</span>
                          <span className="text-sm text-foreground/80">12/15</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">Recommendations</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>Focus on mobile component adoption</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Target className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Increase accessibility training</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Expand token usage guidelines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Component Usage Analytics */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Component Usage Analytics
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Most used components across all projects
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getTopComponents(6).map((component) => (
                  <Card key={component.componentId} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-foreground">{component.componentName}</span>
                        {component.trending && (
                          <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Usage:</span>
                          <span className="text-foreground font-medium">{component.usageCount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Projects:</span>
                          <span className="text-foreground font-medium">{component.projectsUsing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Adoption:</span>
                          <span className="text-foreground font-medium">{Math.round(component.adoptionRate * 100)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Performance Benchmarks */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Performance Benchmarks
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  System performance metrics and targets
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {performanceBenchmarks.map((benchmark) => (
                  <Card key={benchmark.id} className="bg-card/50 border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-foreground">{benchmark.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-foreground">
                            {benchmark.value}{benchmark.unit}
                          </span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              benchmark.status === "pass" 
                                ? "border-green-500/30 text-green-600 dark:text-green-400"
                                : benchmark.status === "warning"
                                ? "border-amber-500/30 text-amber-600 dark:text-amber-400"
                                : "border-red-500/30 text-red-600 dark:text-red-400"
                            }`}
                          >
                            {benchmark.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Target: {benchmark.target}{benchmark.unit}
                        </div>
                        <Progress 
                          value={(benchmark.value / benchmark.target) * 100} 
                          className="h-1"
                        />
                        <p className="text-xs text-muted-foreground">{benchmark.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Actions Hub */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                    Quick Actions
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to work with the design system, one click away
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon
                  return (
                    <Link key={index} href={action.href}>
                      <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300 group cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            
                            <div className="space-y-2">
                              <h3 className="font-bold text-foreground group-hover:text-white transition-colours">
                                {action.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {action.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="text-xs">
                                {action.stats}
                              </Badge>
                              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Recent System Updates */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Recent Updates
                    </span>
                  </h2>
                  <p className="text-muted-foreground">
                    Latest improvements and additions to the design system
                  </p>
                </div>
                <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground" asChild>
                  <Link href="/design-system/changelog">
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Changelog
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {recentUpdates.map((update) => (
                  <Card key={update.id} className="bg-card/30 border-border/50 hover:bg-card/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-bold text-foreground">{update.title}</h3>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                update.category === 'enhancement' ? 'border-green-500/30 text-green-600 dark:text-green-400' :
                                update.category === 'update' ? 'border-blue-500/30 text-blue-600 dark:text-blue-400' :
                                'border-purple-500/30 text-purple-400'
                              }`}
                            >
                              {update.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {update.impact} Impact
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {update.description}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {update.timestamp}
                            </div>
                            <div className="flex items-center gap-1">
                              <GitCommit className="h-3 w-3" />
                              {update.changes}
                            </div>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="border-border text-muted-foreground hover:text-foreground">
                          <Eye className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits & Value Proposition */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Why Choose Our Design System
                  </span>
                </h2>
                                  <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Proven results from teams using Inclusive's design system. Faster delivery, consistent experiences, 
                  and reduced maintenance overhead across all recruitment products.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Efficiency Benefit */}
                <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/20 hover:border-green-400/40 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Clock className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">31%</div>
                    <div className="text-sm font-medium text-foreground mb-2">Faster Development</div>
                    <div className="text-xs text-muted-foreground">Pre-built components reduce implementation time</div>
                  </CardContent>
                </Card>

                {/* Quality Benefit */}
                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/20 hover:border-blue-400/40 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">AAA</div>
                    <div className="text-sm font-medium text-foreground mb-2">Accessibility Score</div>
                    <div className="text-xs text-muted-foreground">WCAG 2.1 compliance built into every component</div>
                  </CardContent>
                </Card>

                {/* Consistency Benefit */}
                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-purple-500/20 hover:border-purple-400/40 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Target className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">96%</div>
                    <div className="text-sm font-medium text-foreground mb-2">Design Consistency</div>
                    <div className="text-xs text-muted-foreground">Unified patterns across all products</div>
                  </CardContent>
                </Card>

                {/* Adoption Benefit */}
                <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/5 border-orange-500/20 hover:border-orange-400/40 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Users className="h-8 w-8 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">94%</div>
                    <div className="text-sm font-medium text-foreground mb-2">Team Adoption</div>
                    <div className="text-xs text-muted-foreground">Trusted by development and design teams</div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Benefits */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                      Development Efficiency
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Pre-built, tested components reduce development time by 31%</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">TypeScript support with comprehensive prop definitions</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Copy-paste code examples for immediate implementation</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Automated testing reduces QA overhead</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Quality & Accessibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">WCAG 2.1 AA compliance built into every component</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Screen reader compatibility and keyboard navigation</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">High contrast ratios and focus management</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Semantic HTML structure by default</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="h-5 w-5 text-purple-400" />
                      Scalability & Maintenance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Design tokens enable consistent theming across products</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Version-controlled updates with migration guides</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Framework-agnostic patterns work with React, Vue, Angular</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Performance optimised with tree-shaking and lazy loading</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* System Resources */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Essential Resources
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Everything your team needs to succeed with the design system
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* For Developers */}
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      For Developers
                    </CardTitle>
                    <CardDescription>
                      Technical resources and implementation guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Link href="/design-system/getting-started" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Getting Started</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Setup and installation guide</div>
                      </Link>
                      
                      <Link href="/design-system/tokens" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Design Tokens</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">CSS variables, colours, typography, spacing</div>
                      </Link>
                      
                      <Link href="/components" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Component Library</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Browse all 49+ components</div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* For Designers */}
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5 text-primary" />
                      For Designers
                    </CardTitle>
                    <CardDescription>
                      Design guidelines and creative resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Link href="/design-system/principles" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Design Principles</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Core design philosophy</div>
                      </Link>
                      
                      <Link href="/design-system/style-guide" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Style Guide</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Typography, colours, spacing</div>
                      </Link>
                      
                      <Link href="/design-system/elevation" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Elevation System</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Shadows, blur, glassmorphism</div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* For Teams */}
                <Card className="bg-card/30 border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                      For Teams
                    </CardTitle>
                    <CardDescription>
                      Collaboration tools and team resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Link href="/design-system/best-practices" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Best Practices</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Implementation guidelines</div>
                      </Link>
                      
                      <Link href="/design-system/accessibility" className="block p-3 rounded-lg bg-muted/50 border border-border/30 hover:bg-muted/70 transition-colours">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Accessibility</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">WCAG 2.1 AAA compliance</div>
                      </Link>
                      
                      <div className="block p-3 rounded-lg bg-muted/50 border border-border/30">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Support</span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Get help from our team</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}






