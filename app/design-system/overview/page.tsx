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
      colour: "text-green-400"
    },
    consistency: {
      title: "Design Consistency",
      value: "96%",
      change: "+8%",
      description: "UI patterns following system guidelines",
      icon: Target,
      colour: "text-blue-400"
    },
    performance: {
      title: "Performance Score",
      value: "98/100",
      change: "+5",
      description: "Average Lighthouse performance",
      icon: Zap,
      colour: "text-fuchsia-400"
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
      gradient: "from-fuchsia-500 to-purple-600",
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
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Strategic Header - System Status */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-6xl mx-auto">
              {/* System Status Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  System Healthy
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1">
                  <Activity className="w-3 h-3 mr-1" />
                  3 Recent Updates
                </Badge>
                <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  v2.1.0 Latest
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-centre">
                {/* Value Proposition */}
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      System Status
                    </span>
                    <br />
                    <span className="text-slate-100">At a Glance</span>
                  </h1>
                  
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Real-time insights into system adoption, performance, and health. 
                    Track what matters and identify opportunities for improvement.
                  </p>

                  {/* Key System Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-2xl font-bold text-green-400">94%</div>
                      <div className="text-sm text-slate-400">Team Adoption</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="text-2xl font-bold text-blue-400">49+</div>
                      <div className="text-sm text-slate-400">Components</div>
                    </div>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 shadow-lg shadow-fuchsia-500/25">
                      <Eye className="mr-2 h-5 w-5" />
                      View Live System
                    </Button>
                    <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800" asChild>
                      <Link href="/design-system/tokens">
                        <Download className="mr-2 h-5 w-5" />
                        Export Tokens
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* System Health Dashboard */}
                <div className="space-y-6">
                  <Card className="bg-slate-800/50 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="flex items-centre gap-2">
                        <Activity className="h-5 w-5 text-green-400" />
                        System Health
                      </CardTitle>
                      <CardDescription>
                        Real-time monitoring of design system metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Health Indicators */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-centre">
                          <div className="text-3xl font-bold text-green-400 mb-1">99.8%</div>
                          <div className="text-xs text-slate-500">Uptime</div>
                        </div>
                        <div className="text-centre">
                          <div className="text-3xl font-bold text-blue-400 mb-1">2.1s</div>
                          <div className="text-xs text-slate-500">Avg Load Time</div>
                        </div>
                      </div>

                      {/* Component Health */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-centre">
                          <span className="text-sm text-slate-300">Component Coverage</span>
                          <span className="text-sm text-green-400">96%</span>
                        </div>
                        <Progress value={96} className="h-2" />
                        
                        <div className="flex justify-between items-centre">
                          <span className="text-sm text-slate-300">Accessibility Score</span>
                          <span className="text-sm text-purple-400">AAA</span>
                        </div>
                        <Progress value={100} className="h-2" />
                        
                        <div className="flex justify-between items-centre">
                          <span className="text-sm text-slate-300">Performance</span>
                          <span className="text-sm text-fuchsia-400">98/100</span>
                        </div>
                        <Progress value={98} className="h-2" />
                      </div>

                      {/* Quick Health Actions */}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-slate-200 flex-1">
                          <BarChart3 className="h-3 w-3 mr-1" />
                          View Analytics
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-slate-200 flex-1">
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
              <div className="text-centre mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Performance Metrics
                  </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Track the impact and effectiveness of your design system across teams and projects
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {Object.entries(systemMetrics).map(([key, metric]) => {
                  const IconComponent = metric.icon
                  return (
                    <Card 
                      key={key}
                      className={`bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all cursor-pointer ${
                        selectedMetric === key ? 'ring-2 ring-fuchsia-500/50' : ''
                      }`}
                      onClick={() => setSelectedMetric(key)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-centre justify-between mb-4">
                          <IconComponent className={`h-8 w-8 ${metric.colour}`} />
                          <Badge variant="outline" className="text-xs">
                            {metric.change}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-bold text-slate-200">
                            {metric.value}
                          </div>
                          <div className="text-sm font-medium text-slate-300">
                            {metric.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {metric.description}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Detailed Metric View */}
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-centre gap-2">
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
                      <h4 className="font-medium text-slate-200">Current Status</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-400">This Week</span>
                          <span className="text-sm text-green-400">+5.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-400">This Month</span>
                          <span className="text-sm text-green-400">+12.8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-400">Quarter</span>
                          <span className="text-sm text-green-400">+28.3%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200">Team Impact</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-400">Frontend Teams</span>
                          <span className="text-sm text-slate-300">8/9</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-400">Design Teams</span>
                          <span className="text-sm text-slate-300">5/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-slate-400">Product Teams</span>
                          <span className="text-sm text-slate-300">12/15</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200">Recommendations</h4>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>Focus on mobile component adoption</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Target className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>Increase accessibility training</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Expand token usage guidelines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Actions Hub */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-centre mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                    Quick Actions
                  </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Everything you need to work with the design system, one click away
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon
                  return (
                    <Link key={index} href={action.href}>
                      <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-centre justify-centre group-hover:scale-110 transition-transform`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            
                            <div className="space-y-2">
                              <h3 className="font-bold text-slate-200 group-hover:text-white transition-colours">
                                {action.title}
                              </h3>
                              <p className="text-sm text-slate-400 leading-relaxed">
                                {action.description}
                              </p>
                            </div>

                            <div className="flex items-centre justify-between">
                              <Badge variant="outline" className="text-xs">
                                {action.stats}
                              </Badge>
                              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-200 group-hover:translate-x-1 transition-all" />
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
              <div className="flex items-centre justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Recent Updates
                    </span>
                  </h2>
                  <p className="text-slate-400">
                    Latest improvements and additions to the design system
                  </p>
                </div>
                <Button variant="outline" className="border-slate-600 text-slate-400 hover:text-slate-200" asChild>
                  <Link href="/design-system/changelog">
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Changelog
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {recentUpdates.map((update) => (
                  <Card key={update.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-centre gap-3">
                            <h3 className="font-bold text-slate-200">{update.title}</h3>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                update.category === 'enhancement' ? 'border-green-500/30 text-green-400' :
                                update.category === 'update' ? 'border-blue-500/30 text-blue-400' :
                                'border-purple-500/30 text-purple-400'
                              }`}
                            >
                              {update.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {update.impact} Impact
                            </Badge>
                          </div>
                          
                          <p className="text-slate-400 leading-relaxed">
                            {update.description}
                          </p>
                          
                          <div className="flex items-centre gap-4 text-xs text-slate-500">
                            <div className="flex items-centre gap-1">
                              <Clock className="h-3 w-3" />
                              {update.timestamp}
                            </div>
                            <div className="flex items-centre gap-1">
                              <GitCommit className="h-3 w-3" />
                              {update.changes}
                            </div>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-slate-200">
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

          {/* System Resources */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-centre mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Essential Resources
                  </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Everything your team needs to succeed with the design system
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* For Developers */}
                <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="flex items-centre gap-2">
                      <Code2 className="h-5 w-5 text-blue-400" />
                      For Developers
                    </CardTitle>
                    <CardDescription>
                      Technical resources and implementation guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Link href="/design-system/getting-started" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Getting Started</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Setup and installation guide</div>
                      </Link>
                      
                      <Link href="/design-system/tokens" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Design Tokens</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">CSS variables and JS objects</div>
                      </Link>
                      
                      <Link href="/components" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Component Library</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Browse all 49+ components</div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* For Designers */}
                <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="flex items-centre gap-2">
                      <Palette className="h-5 w-5 text-fuchsia-400" />
                      For Designers
                    </CardTitle>
                    <CardDescription>
                      Design guidelines and creative resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Link href="/design-system/principles" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Design Principles</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Core design philosophy</div>
                      </Link>
                      
                      <Link href="/design-system/style-guide" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Style Guide</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Typography, colours, spacing</div>
                      </Link>
                      
                      <Link href="/design-system/elevation" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Elevation System</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Shadows, blur, glassmorphism</div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* For Teams */}
                <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="flex items-centre gap-2">
                      <Users className="h-5 w-5 text-green-400" />
                      For Teams
                    </CardTitle>
                    <CardDescription>
                      Collaboration tools and team resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Link href="/design-system/best-practices" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Best Practices</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Implementation guidelines</div>
                      </Link>
                      
                      <Link href="/design-system/accessibility" className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900/70 transition-colours">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Accessibility</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">WCAG 2.1 AAA compliance</div>
                      </Link>
                      
                      <div className="block p-3 rounded-lg bg-slate-900/50 border border-slate-700/30">
                        <div className="flex items-centre justify-between">
                          <span className="text-sm font-medium text-slate-200">Support</span>
                          <ExternalLink className="h-4 w-4 text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Get help from our team</div>
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





