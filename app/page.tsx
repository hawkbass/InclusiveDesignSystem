"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  ArrowRight,
  ComponentIcon,
  Palette,
  Code2,
  Shield,
  Zap,
  Star,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Download,
  Copy,
  ExternalLink,
  Sparkles,
  Globe,
  Target,
  Gauge,
  Eye,
  Users,
  Heart,
  Lightbulb,
  Monitor,
  Smartphone,
  Tablet,
  Grid3X3,
  Layers,
  Award,
  PlayCircle
} from "lucide-react"
import Link from "next/link"
import { adoptionMetrics, getTopComponents, getTrendingComponents } from "@/app/data/metrics-data"
import { getFeaturedCaseStudies } from "@/app/data/case-studies"
import { Progress } from "@/components/ui/progress"

export default function Homepage() {
  const [mounted, setMounted] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  
  const stats = [
    { label: "Components", value: "102+", icon: ComponentIcon },
    { label: "Design Tokens", value: "150+", icon: Palette },
    { label: "UI Patterns", value: "45+", icon: Grid3X3 },
    { label: "Active Users", value: "2.5k+", icon: Users }
  ]
  
  const [animatedStats, setAnimatedStats] = useState(stats.map((stat) => {
    const numericValue = parseInt(stat.value.replace(/\D/g, ''))
    return numericValue
  }))
  const animationRef = useRef<number | null>(null)
  const elementRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
    
    // Use direct DOM manipulation to avoid React re-renders that cause sidebar stutter
    // This isolates the animation from React's render cycle
    const duration = 2000
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease-out function for smoother animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      // Update DOM directly without triggering React re-renders
      stats.forEach((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/\D/g, ''))
        const currentValue = Math.floor(numericValue * easeOut)
        const element = elementRefs.current[index]
        if (element) {
          const suffix = stat.value.replace(/\d/g, '')
          element.textContent = currentValue + suffix
        }
      })
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        // Ensure final values are set
        stats.forEach((stat, index) => {
          const element = elementRefs.current[index]
          if (element) {
            element.textContent = stat.value
          }
        })
      }
    }
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate)
    }, 100)
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  if (!mounted) {
    return null
  }

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const features = [
    {
      icon: ComponentIcon,
      title: "102+ Components",
      description: "Production-ready components built with accessibility and performance in mind",
      link: "/components",
    },
    {
      icon: Palette,
      title: "Design Tokens",
      description: "Systematic design values ensuring consistency across all platforms",
      link: "/design-system/tokens", 
    },
    {
      icon: Grid3X3,
      title: "UI Patterns",
      description: "Proven interface solutions for common design challenges",
      link: "/design-system/patterns",
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "WCAG 2.1 AA compliant components with inclusive design principles",
      link: "/design-system/accessibility",
    }
  ]

  const quickActions = [
    {
      title: "Get Started",
      description: "Installation and setup guide",
      icon: Zap,
      link: "/design-system/getting-started",
      type: "primary"
    },
    {
      title: "Browse Components",
      description: "Explore the component library",
      icon: ComponentIcon,
      link: "/components",
      type: "secondary"
    },
    {
      title: "Component Playground",
      description: "Interactive component testing",
      icon: PlayCircle,
      link: "/playground",
      type: "secondary"
    },
    {
      title: "Best Practices",
      description: "Implementation guidelines",
      icon: Award,
      link: "/design-system/best-practices", 
      type: "secondary"
    }
  ]

  const realTimeMetrics = adoptionMetrics.slice(0, 4)
  const topComponents = getTopComponents(6)
  const trendingComponents = getTrendingComponents().slice(0, 3)
  const caseStudies = getFeaturedCaseStudies(2)
  
  // Recent updates/changelog entries (simulated)
  const recentUpdates = [
    {
      id: 1,
      title: "New Component: Advanced Data Table",
      description: "Added comprehensive data table with sorting, filtering, and pagination",
      type: "component",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "Accessibility Enhancements",
      description: "Project-wide aria-label implementation for improved screen reader support",
      type: "improvement",
      date: "5 days ago"
    },
    {
      id: 3,
      title: "Theme Builder Tool",
      description: "New interactive theme builder with real-time preview and export",
      type: "feature",
      date: "1 week ago"
    }
  ]

  return (
    <div className="flex min-h-screen relative z-10">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
            {/* Background effects - Theme aware */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-20 lg:py-32">
              <div className="max-w-7xl mx-auto text-center">
                <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 text-sm">
                  v2.0 • Production Ready
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                  Inclusive Design
                  <span className="text-gradient block">
                    System
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                  Build beautiful, accessible, and consistent user interfaces with our comprehensive design system. 
                  <strong className="text-foreground"> World-class components, tokens, and patterns</strong> for modern applications.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <Link href="/design-system/getting-started">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6 h-auto">
                      <Zap className="mr-2 h-5 w-5" />
                      Get Started
                    </Button>
                  </Link>
                  
                  <Link href="/components">
                    <Button variant="outline" size="lg" className="border-border hover:bg-accent text-lg px-8 py-6 h-auto">
                      <Eye className="mr-2 h-5 w-5" />
                      Explore Components
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-muted-foreground hover:text-foreground text-lg px-8 py-6 h-auto"
                    onClick={() => handleCopyCode('npm install @hawkbass/inclusive-design-core', 'install')}
                  >
                    {copiedCode === 'install' ? (
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="mr-2 h-5 w-5" />
                    )}
                    npm install
                  </Button>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">
                        <span ref={(el) => { elementRefs.current[index] = el }}>
                          {stat.value}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Features Section */}
          <section className="px-6 lg:px-12 py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Everything you need to build
                  <span className="text-gradient"> world-class interfaces</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our design system provides the building blocks for creating consistent, accessible, and beautiful user experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <Link key={feature.title} href={feature.link}>
                    <Card className="bg-card/50 border-border hover:bg-card hover:border-primary/30 transition-all duration-300 h-full group cursor-pointer">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center text-muted-foreground group-hover:text-foreground/80 transition-colors">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="px-6 lg:px-12 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to get started?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose your path and start building with Inclusive Design System
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.link}>
                    <Card className={`h-full transition-all duration-300 cursor-pointer ${
                      action.type === 'primary' 
                        ? 'bg-primary/5 border-primary/30 hover:border-primary/50' 
                        : 'bg-card/30 border-border hover:bg-card/50 hover:border-border'
                    } group`}>
                      <CardHeader className="text-center">
                        <div className={`mx-auto mb-4 p-3 rounded-xl w-fit transition-all duration-300 ${
                          action.type === 'primary'
                            ? 'bg-primary/10 group-hover:scale-110'
                            : 'bg-muted group-hover:bg-muted/80 group-hover:scale-105'
                        }`}>
                          <action.icon className={`h-6 w-6 ${
                            action.type === 'primary' ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                          }`} />
                        </div>
                        <CardTitle className={`${
                          action.type === 'primary' ? 'text-primary' : 'text-foreground group-hover:text-foreground'
                        } transition-colors`}>
                          {action.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className={`text-center ${
                          action.type === 'primary' ? 'text-primary/80' : 'text-muted-foreground group-hover:text-foreground/80'
                        } transition-colors`}>
                          {action.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Live Example */}
          <section className="px-6 lg:px-12 py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  See it in action
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Experience the power of our design system with live components
                </p>
              </div>

              <Card className="bg-card/30 border-border max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    Live Component Demo
                  </CardTitle>
                  <CardDescription>
                    Real components from our library in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Demo Interface */}
                    <div className="p-8 bg-background/50 rounded-lg border border-border">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">Dashboard Overview</h3>
                            <p className="text-muted-foreground">Welcome back to your workspace</p>
                          </div>
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            Live Demo
                          </Badge>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="bg-card/50 border-border">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                  <Users className="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-foreground">2,847</div>
                                  <div className="text-sm text-muted-foreground">Active Users</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-card/50 border-border">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg">
                                  <TrendingUp className="h-5 w-5 text-green-500" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-foreground">94.2%</div>
                                  <div className="text-sm text-muted-foreground">Uptime</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-card/50 border-border">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                  <Zap className="h-5 w-5 text-purple-500" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-foreground">1.2s</div>
                                  <div className="text-sm text-muted-foreground">Load Time</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Primary Action
                          </Button>
                          <Button variant="outline" className="border-border hover:bg-accent">
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </Button>
                          <Link href="/playground">
                            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                              <PlayCircle className="mr-2 h-4 w-4" />
                              Try Interactive Playground
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Code Preview */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-foreground">Component Code:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopyCode('<Card className="bg-card/50 border-border">\n  <CardContent className="p-4">\n    <div className="flex items-center gap-3">\n      <div className="p-2 bg-blue-500/10 rounded-lg">\n        <Users className="h-5 w-5 text-blue-500" />\n      </div>\n      <div>\n        <div className="text-2xl font-bold text-foreground">2,847</div>\n        <div className="text-sm text-muted-foreground">Active Users</div>\n      </div>\n    </div>\n  </CardContent>\n</Card>', 'demo-code')}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {copiedCode === 'demo-code' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="bg-muted/50 p-4 rounded-lg text-sm text-foreground border border-border whitespace-pre-wrap font-mono">
{`<Card className="bg-card/50 border-border">
  <CardContent className="p-4">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-500/10 rounded-lg">
        <Users className="h-5 w-5 text-blue-500" />
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground">2,847</div>
        <div className="text-sm text-muted-foreground">Active Users</div>
      </div>
    </div>
  </CardContent>
</Card>`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Real-Time Stats Dashboard */}
          <section className="px-6 lg:px-12 py-20 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  System Performance Metrics
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Real-time insights into design system adoption and performance
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {realTimeMetrics.map((metric) => (
                  <Card key={metric.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-foreground">
                          {metric.label}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            metric.trend === "up" 
                              ? "border-green-500/30 text-green-600 dark:text-green-400" 
                              : metric.trend === "down"
                              ? "border-red-500/30 text-red-600 dark:text-red-400"
                              : "border-amber-500/30 text-amber-600 dark:text-amber-400"
                          }`}
                        >
                          {metric.trend === "up" && "+"}
                          {metric.change}{metric.unit.includes("%") ? "%" : ""}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-foreground">
                          {metric.value}{metric.unit}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {metric.description}
                        </p>
                        <Progress 
                          value={metric.value} 
                          className="h-1"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Component Showcase Carousel */}
          <section className="px-6 lg:px-12 py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Popular Components
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Most used components from our library
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topComponents.slice(0, 6).map((component) => (
                  <Card key={component.componentId} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {component.componentName}
                        </CardTitle>
                        {component.trending && (
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {component.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Usage:</span>
                          <span className="text-foreground font-medium">
                            {component.usageCount.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Projects:</span>
                          <span className="text-foreground font-medium">
                            {component.projectsUsing}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Adoption:</span>
                          <span className="text-foreground font-medium">
                            {Math.round(component.adoptionRate * 100)}%
                          </span>
                        </div>
                        <Link href={`/components#${component.componentId}`}>
                          <Button variant="outline" className="w-full mt-4" size="sm">
                            View Component
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies / Testimonials */}
          <section className="px-6 lg:px-12 py-20 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Real-World Success Stories
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See how teams are using Inclusive Design System to build better products
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study) => (
                  <Card key={study.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground mb-1">
                            {study.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {study.company} • {study.industry}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {study.timeline}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {study.results.slice(0, 4).map((result, idx) => (
                              <div key={idx} className="bg-muted/30 rounded p-2">
                                <div className="text-xs text-muted-foreground">{result.metric}</div>
                                <div className="text-sm font-semibold text-foreground">{result.value}</div>
                                <div className="text-xs text-green-600 dark:text-green-400">{result.improvement}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {study.testimonial && (
                          <div className="border-t border-border/50 pt-4">
                            <p className="text-sm italic text-muted-foreground mb-2">
                              "{study.testimonial.quote}"
                            </p>
                            <p className="text-xs text-muted-foreground">
                              — {study.testimonial.author}, {study.testimonial.role}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* News & Updates Feed */}
          <section className="px-6 lg:px-12 py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Latest Updates
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Stay up to date with new features, improvements, and announcements
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {recentUpdates.map((update) => (
                  <Card key={update.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {update.title}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            update.type === "component" ? "border-blue-500/30 text-blue-600 dark:text-blue-400" :
                            update.type === "feature" ? "border-green-500/30 text-green-600 dark:text-green-400" :
                            "border-purple-500/30 text-purple-600 dark:text-purple-400"
                          }`}
                        >
                          {update.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {update.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{update.date}</span>
                        <Link href="/design-system/changelog">
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="/design-system/changelog">
                  <Button variant="outline" size="lg">
                    View Full Changelog
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="px-6 lg:px-12 py-20">
            <div className="max-w-7xl mx-auto text-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-12">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                      Ready to transform your development workflow?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Join thousands of developers building better interfaces with Inclusive Design System
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href="/design-system/getting-started">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6 h-auto">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Start Building Today
                        </Button>
                      </Link>
                      <Link href="/components">
                        <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-6 h-auto">
                          <ComponentIcon className="mr-2 h-5 w-5" />
                          Explore Components
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
