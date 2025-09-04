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
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Palette,
      title: "Design Tokens",
      description: "Systematic design values ensuring consistency across all platforms",
      link: "/design-system/tokens", 
      color: "from-purple-500 to-fuchsia-600"
    },
    {
      icon: Grid3X3,
      title: "UI Patterns",
      description: "Proven interface solutions for common design challenges",
      link: "/design-system/patterns",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "WCAG 2.1 AA compliant components with inclusive design principles",
      link: "/design-system/accessibility",
      color: "from-orange-500 to-red-600"
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
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-fuchsia-500/5 to-purple-500/5 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-20 lg:py-32">
              <div className="max-w-7xl mx-auto text-center">
                <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30 mb-6 text-sm">
                  v2.0 • Production Ready
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
                  Inclusive Design
                  <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent block">
                    System
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                  Build beautiful, accessible, and consistent user interfaces with our comprehensive design system. 
                  <strong className="text-slate-300"> World-class components, tokens, and patterns</strong> for modern applications.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <Link href="/design-system/getting-started">
                    <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-xl hover:shadow-fuchsia-500/25 transition-all text-lg px-8 py-6 h-auto">
                      <Zap className="mr-2 h-5 w-5" />
                      Get Started
                    </Button>
                  </Link>
                  
                  <Link href="/components">
                    <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800 text-lg px-8 py-6 h-auto">
                      <Eye className="mr-2 h-5 w-5" />
                      Explore Components
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-slate-400 hover:text-slate-200 text-lg px-8 py-6 h-auto"
                    onClick={() => handleCopyCode('npm install @inclusive/design-system', 'install')}
                  >
                    {copiedCode === 'install' ? (
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-400" />
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
                        <stat.icon className="h-6 w-6 text-fuchsia-400" />
                      </div>
                      <div className="text-3xl font-bold text-slate-100 mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Features Section */}
          <section className="px-6 lg:px-12 py-20 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                  Everything you need to build
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> world-class interfaces</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Our design system provides the building blocks for creating consistent, accessible, and beautiful user experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <Link key={feature.title} href={feature.link}>
                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 h-full group cursor-pointer">
                      <CardHeader className="text-center pb-4">
                        <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${feature.color}/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className={`h-8 w-8 text-${feature.color.split('-')[1]}-400`} />
                        </div>
                        <CardTitle className="text-slate-100 group-hover:text-white transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center text-slate-400 group-hover:text-slate-300 transition-colors">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                  Ready to get started?
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Choose your path and start building with Inclusive Design System
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.link}>
                    <Card className={`h-full transition-all duration-300 cursor-pointer ${
                      action.type === 'primary' 
                        ? 'bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 border-fuchsia-500/30 hover:border-fuchsia-400/50' 
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50'
                    } group`}>
                      <CardHeader className="text-center">
                        <div className={`mx-auto mb-4 p-3 rounded-xl w-fit transition-all duration-300 ${
                          action.type === 'primary'
                            ? 'bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 group-hover:scale-110'
                            : 'bg-slate-700/50 group-hover:bg-slate-700/70 group-hover:scale-105'
                        }`}>
                          <action.icon className={`h-6 w-6 ${
                            action.type === 'primary' ? 'text-fuchsia-400' : 'text-slate-400 group-hover:text-slate-300'
                          }`} />
                        </div>
                        <CardTitle className={`${
                          action.type === 'primary' ? 'text-fuchsia-200' : 'text-slate-100 group-hover:text-white'
                        } transition-colors`}>
                          {action.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className={`text-center ${
                          action.type === 'primary' ? 'text-fuchsia-300/80' : 'text-slate-400 group-hover:text-slate-300'
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
          <section className="px-6 lg:px-12 py-20 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                  See it in action
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Experience the power of our design system with live components
                </p>
              </div>

              <Card className="bg-slate-800/30 border-slate-700/50 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-slate-100 flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 text-fuchsia-400" />
                    Live Component Demo
                  </CardTitle>
                  <CardDescription>
                    Real components from our library in action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Demo Interface */}
                    <div className="p-8 bg-slate-900/50 rounded-lg border border-slate-700/30">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-200">Dashboard Overview</h3>
                            <p className="text-slate-400">Welcome back to your workspace</p>
                          </div>
                          <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30">
                            Live Demo
                          </Badge>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="bg-slate-800/50 border-slate-700/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                  <Users className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-slate-200">2,847</div>
                                  <div className="text-sm text-slate-400">Active Users</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/50 border-slate-700/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                  <TrendingUp className="h-5 w-5 text-green-400" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-slate-200">94.2%</div>
                                  <div className="text-sm text-slate-400">Uptime</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-slate-800/50 border-slate-700/50">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                  <Zap className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-slate-200">1.2s</div>
                                  <div className="text-sm text-slate-400">Load Time</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Primary Action
                          </Button>
                          <Button variant="outline" className="border-slate-600 hover:bg-slate-800">
                            <Download className="mr-2 h-4 w-4" />
                            Download Report
                          </Button>
                          <Link href="/playground">
                            <Button variant="ghost" className="text-slate-400 hover:text-slate-200">
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
                        <span className="text-sm font-medium text-slate-300">Component Code:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopyCode('<Card className="bg-slate-800/50 border-slate-700/50">\n  <CardContent className="p-4">\n    <div className="flex items-center gap-3">\n      <div className="p-2 bg-blue-500/20 rounded-lg">\n        <Users className="h-5 w-5 text-blue-400" />\n      </div>\n      <div>\n        <div className="text-2xl font-bold text-slate-200">2,847</div>\n        <div className="text-sm text-slate-400">Active Users</div>\n      </div>\n    </div>\n  </CardContent>\n</Card>', 'demo-code')}
                          className="text-slate-400 hover:text-slate-200"
                        >
                          {copiedCode === 'demo-code' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="bg-slate-950/50 p-4 rounded-lg text-sm text-slate-300 border border-slate-800/50 whitespace-pre-wrap">
{`<Card className="bg-slate-800/50 border-slate-700/50">
  <CardContent className="p-4">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-500/20 rounded-lg">
        <Users className="h-5 w-5 text-blue-400" />
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-200">2,847</div>
        <div className="text-sm text-slate-400">Active Users</div>
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
              <Card className="bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 border-fuchsia-500/20">
                <CardContent className="p-12">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-6">
                      Ready to transform your development workflow?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                      Join thousands of developers building better interfaces with Inclusive Design System
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href="/design-system/getting-started">
                        <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-xl hover:shadow-fuchsia-500/25 transition-all text-lg px-8 py-6 h-auto">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Start Building Today
                        </Button>
                      </Link>
                      <Link href="/components">
                        <Button variant="outline" size="lg" className="border-fuchsia-500/30 text-fuchsia-200 hover:bg-fuchsia-500/10 text-lg px-8 py-6 h-auto">
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
