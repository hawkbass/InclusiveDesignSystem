"use client"

import React, { useState, useEffect } from "react"
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

export default function Homepage() {
  const [mounted, setMounted] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")

  useEffect(() => {
    setMounted(true)
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

  const stats = [
    { label: "Components", value: "102+", icon: ComponentIcon },
    { label: "Design Tokens", value: "150+", icon: Palette },
    { label: "UI Patterns", value: "45+", icon: Grid3X3 },
    { label: "Active Users", value: "2.5k+", icon: Users }
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

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
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
