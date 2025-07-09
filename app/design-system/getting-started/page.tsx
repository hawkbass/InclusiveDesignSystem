"use client"

import React, { useState, useEffect, useCallback } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  BookOpen, Download, ExternalLink, Copy, CheckCircle2, Play, Zap, Shield, Palette, Code2, Terminal, Package, Star, ArrowRight, Sparkles, Settings, Clock, Users, Target, Heart, Search, Grid, List, Activity, TrendingUp
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

export default function GettingStartedPage() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [activeTab, setActiveTab] = useState("installation")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [copyFeedback, setCopyFeedback] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const safeAnimationSpeed = Math.max(0.1, Math.min(3, animationSpeed?.[0] ?? 1))

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleCopyCode = useCallback(async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopyFeedback(id)
      setTimeout(() => setCopyFeedback(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }, [])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }, [])

  if (!mounted || isLoading) {
    return (
      <div className="flex min-h-screen bg-background text-foreground">
        <UnifiedSidebar animationSpeed={animationSpeed} />
        <main className="flex-1 p-8">
          <div className="space-y-8">
            <div className="w-96 h-12 bg-slate-700 rounded animate-pulse" />
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-32 bg-slate-800/50 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Enhanced Hero Section */}
        <section className="px-8 py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Play className="w-3 h-3 mr-1" />
                  Quick Start
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  5 Min Setup
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Production Ready
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Getting Started
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Start building with the Inclusive Design System in minutes. Follow our step-by-step guide to integrate components, tokens, and patterns into your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition-all group">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Starter Kit
                </Button>
                <Button size="lg" variant="outline" className="border-fuchsia-500/30 hover:bg-fuchsia-500/10 group">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View Examples
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Package, label: "Components", value: "50+", color: "text-blue-400" },
                { icon: Palette, label: "Design Tokens", value: "200+", color: "text-green-400" },
                { icon: Code2, label: "Code Examples", value: "100+", color: "text-purple-400" },
                { icon: Users, label: "Active Users", value: "1K+", color: "text-fuchsia-400" }
              ].map((stat, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group cursor-pointer backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl font-bold text-slate-100 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8">
              {/* Enhanced Tab Navigation with Component Gallery Styling */}
              <div className="relative">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                  <TabsTrigger 
                    value="overview"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="relative">
                        <Play className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Overview</span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="installation"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="relative">
                        <Download className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Install</span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="configuration"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="relative">
                        <Settings className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Config</span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="examples"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="relative">
                        <Code2 className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Examples</span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                </TabsList>
                
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-8">
              <OverviewTab safeAnimationSpeed={safeAnimationSpeed} />
            </TabsContent>

            <TabsContent value="installation" className="space-y-8">
              <InstallationTab onCopyCode={handleCopyCode} copiedCode={copyFeedback} safeAnimationSpeed={safeAnimationSpeed} />
            </TabsContent>

            <TabsContent value="configuration" className="space-y-8">
              <ConfigurationTab onCopyCode={handleCopyCode} copiedCode={copyFeedback} safeAnimationSpeed={safeAnimationSpeed} />
            </TabsContent>

            <TabsContent value="examples" className="space-y-8">
              <ExamplesTab onCopyCode={handleCopyCode} copiedCode={copyFeedback} safeAnimationSpeed={safeAnimationSpeed} />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}

// Tab Components
function OverviewTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const features = [
    {
      title: "Inclusive by Design",
      description: "Built with accessibility and inclusion at the core, ensuring your products work for everyone.",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      title: "Developer Experience",
      description: "Thoughtfully designed APIs and comprehensive documentation for rapid development.",
      icon: Code2,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      title: "Production Ready",
      description: "Battle-tested components used in real recruitment applications with proven performance.",
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      title: "Customizable",
      description: "Flexible theming system and design tokens that adapt to your brand requirements.",
      icon: Palette,
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-500/20"
    }
  ]

  const quickLinks = [
    { title: "Installation Guide", description: "Get started in 5 minutes", icon: Download, href: "#installation" },
    { title: "Component Library", description: "Browse all components", icon: Package, href: "/components" },
    { title: "Design Tokens", description: "Colors, typography, spacing", icon: Palette, href: "/style-guide" },
    { title: "Examples", description: "Real-world implementations", icon: Code2, href: "#examples" }
  ]

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-fuchsia-400" />
            Welcome to the Inclusive Design System
          </CardTitle>
          <CardDescription className="text-slate-400">
            A comprehensive design system built for modern recruitment applications with accessibility and inclusion at its core.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              Our design system provides everything you need to build beautiful, accessible, and consistent user interfaces. 
              From foundational design tokens to complex components, we've got you covered with a system that scales with your needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Quick Navigation</CardTitle>
          <CardDescription className="text-slate-400">
            Jump to the sections most relevant to your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/50 hover:bg-slate-900/50 transition-all group"
                style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
              >
                <link.icon className="h-5 w-5 text-fuchsia-400 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                <div className="flex-1">
                  <h3 className="font-medium text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    {link.title}
                  </h3>
                  <p className="text-xs text-slate-400">{link.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-fuchsia-400 group-hover:translate-x-1 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Getting Started Checklist */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
            Getting Started Checklist
          </CardTitle>
          <CardDescription className="text-slate-400">
            Follow these steps to get up and running quickly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { task: "Install the design system package", completed: false },
              { task: "Set up your theme configuration", completed: false },
              { task: "Import base styles and tokens", completed: false },
              { task: "Create your first component", completed: false },
              { task: "Explore the component library", completed: false },
              { task: "Review accessibility guidelines", completed: false }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  item.completed 
                    ? 'bg-green-500 border-green-500' 
                    : 'border-slate-600 hover:border-fuchsia-500 transition-colors'
                }`}>
                  {item.completed && <CheckCircle2 className="h-3 w-3 text-white" />}
                </div>
                <span className={`text-sm ${item.completed ? 'text-slate-300 line-through' : 'text-slate-300'}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ConfigurationTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const configSteps = [
    {
      title: "Theme Configuration",
      description: "Set up your theme with custom colors and tokens",
      code: `// theme.config.js
export const theme = {
  colors: {
    primary: {
      50: '#fdf2f8',
      500: '#ec4899',
      900: '#831843'
    },
    background: '#0f172a',
    foreground: '#f8fafc'
  },
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace']
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  }
}`,
      id: "theme-config"
    },
    {
      title: "Tailwind Integration",
      description: "Configure Tailwind CSS with design system tokens",
      code: `// tailwind.config.js
import { theme } from './theme.config.js'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fonts,
      spacing: theme.spacing,
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}`,
      id: "tailwind-config"
    },
    {
      title: "Component Provider",
      description: "Wrap your app with the design system provider",
      code: `// App.tsx
import { DesignSystemProvider } from '@inclusive-design/core'
import { theme } from './theme.config'

function App() {
  return (
    <DesignSystemProvider theme={theme}>
      <div className="min-h-screen bg-background text-foreground">
        <YourApplication />
      </div>
    </DesignSystemProvider>
  )
}

export default App`,
      id: "provider-setup"
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Settings className="h-6 w-6 text-blue-400" />
            Configuration Guide
          </CardTitle>
          <CardDescription className="text-slate-400">
            Customize the design system to match your brand and requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {configSteps.map((step, index) => (
              <div key={index} className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(step.code, step.id)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedCode === step.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-950/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                  <code className="text-slate-300">{step.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Environment Variables */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Environment Setup</CardTitle>
              <CardDescription className="mt-2">Configure environment variables for different deployment stages</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`# .env.local
NEXT_PUBLIC_THEME_MODE=dark
NEXT_PUBLIC_BRAND_PRIMARY=#ec4899
NEXT_PUBLIC_BRAND_SECONDARY=#64748b
NEXT_PUBLIC_API_URL=https://api.yourapp.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id`, "env-config")}
              className="h-8 w-8 p-0"
            >
              {copiedCode === "env-config" ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-950/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`# .env.local
NEXT_PUBLIC_THEME_MODE=dark
NEXT_PUBLIC_BRAND_PRIMARY=#ec4899
NEXT_PUBLIC_BRAND_SECONDARY=#64748b
NEXT_PUBLIC_API_URL=https://api.yourapp.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

function InstallationTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const installationSteps = [
    {
      title: "Install the Package",
      description: "Add the Inclusive Design System to your project",
      code: "npm install @inclusive-design/core",
      id: "install-npm"
    },
    {
      title: "Import Styles",
      description: "Add the CSS styles to your application",
      code: `import "@inclusive-design/core/styles.css"`,
      id: "import-styles"
    },
    {
      title: "Setup Provider",
      description: "Wrap your app with the theme provider",
      code: `import { ThemeProvider } from "@inclusive-design/core"

function App() {
  return (
    <ThemeProvider theme="dark">
      <YourApp />
    </ThemeProvider>
  )
}`,
      id: "setup-provider"
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Terminal className="h-6 w-6 text-green-400" />
            Installation Guide
          </CardTitle>
          <CardDescription className="text-slate-400">
            Get up and running with the Inclusive Design System in your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {installationSteps.map((step, index) => (
              <div key={index} className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(step.code, step.id)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedCode === step.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-950/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                  <code className="text-slate-300">{step.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function QuickStartTab({ onCopyCode, copyFeedback }: { onCopyCode: (code: string, id: string) => void, copyFeedback: string }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Zap className="h-6 w-6 text-yellow-400" />
            Quick Start Example
          </CardTitle>
          <CardDescription className="text-slate-400">
            Build your first component in minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">Create a Simple Form</h3>
                  <p className="text-slate-400">Basic form with validation and styling</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopyCode(`import { Button, Input, Card } from "@inclusive-design/core"

function ContactForm() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <div className="space-y-4">
        <Input placeholder="Your name" />
        <Input type="email" placeholder="Your email" />
        <Button className="w-full">Send Message</Button>
      </div>
    </Card>
  )
}`, "quickstart-form")}
                  className="h-8 w-8 p-0"
                >
                  {copyFeedback === "quickstart-form" ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="bg-slate-950/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                <code className="text-slate-300">{`import { Button, Input, Card } from "@inclusive-design/core"

function ContactForm() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <div className="space-y-4">
        <Input placeholder="Your name" />
        <Input type="email" placeholder="Your email" />
        <Button className="w-full">Send Message</Button>
      </div>
    </Card>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ExamplesTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const examples = [
    {
      title: "Dashboard Layout",
      description: "Complete dashboard with sidebar and content",
      category: "Layout",
      code: `import { Sidebar, Card, Button } from "@inclusive-design/core"

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6">
          <Card className="p-4">
            <h3>Users</h3>
            <p className="text-2xl font-bold">1,247</p>
          </Card>
          {/* More cards */}
        </div>
      </main>
    </div>
  )
}`,
      id: "example-dashboard"
    },
    {
      title: "Data Table",
      description: "Sortable table with actions",
      category: "Data",
      code: `import { Table, Button, Badge } from "@inclusive-design/core"

function UserTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Actions</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell><Badge>Active</Badge></Table.Cell>
          <Table.Cell><Button size="sm">Edit</Button></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}`,
      id: "example-table"
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-purple-400" />
            Code Examples
          </CardTitle>
          <CardDescription className="text-slate-400">
            Ready-to-use examples for common patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-100">{example.title}</h3>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {example.category}
                      </Badge>
                    </div>
                    <p className="text-slate-400">{example.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(example.code, example.id)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedCode === example.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="bg-slate-950/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                  <code className="text-slate-300">{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResourcesTab({ toggleFavorite, favorites }: { toggleFavorite: (id: string) => void, favorites: Set<string> }) {
  const resources = [
    {
      title: "Component Documentation",
      description: "Complete API reference for all components",
      link: "/components",
      icon: Code2,
      category: "Documentation"
    },
    {
      title: "Design Tokens",
      description: "Colors, spacing, typography, and more",
      link: "/style-guide",
      icon: Palette,
      category: "Design"
    },
    {
      title: "Examples Gallery",
      description: "Real-world examples and templates",
      link: "/examples",
      icon: Sparkles,
      category: "Examples"
    },
    {
      title: "Accessibility Guide",
      description: "Best practices for inclusive design",
      link: "/design-system/accessibility",
      icon: Shield,
      category: "Accessibility"
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-blue-400" />
            Additional Resources
          </CardTitle>
          <CardDescription className="text-slate-400">
            Helpful links and documentation to get you started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center">
                        <resource.icon className="h-5 w-5 text-fuchsia-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                          {resource.title}
                        </h3>
                        <Badge className="bg-slate-700/50 text-slate-300 text-xs mt-1">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => toggleFavorite(`resource-${index}`)}
                    >
                      <Heart className={`h-4 w-4 ${favorites.has(`resource-${index}`) ? 'fill-current text-fuchsia-400' : 'text-slate-400'}`} />
                    </Button>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{resource.description}</p>
                  <Button size="sm" variant="outline" className="group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-500/30">
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 