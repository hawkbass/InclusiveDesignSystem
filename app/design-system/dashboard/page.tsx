"use client"

import React, { useState, useEffect, useCallback } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  BarChart3, TrendingUp, TrendingDown, Users, Clock, Activity, Star, CheckCircle2, AlertTriangle, Zap, Shield, Palette, ComponentIcon, Monitor, Database, Globe, Cpu, Target, BookOpen, Download, ExternalLink, ArrowRight, Eye, Copy, Heart, Filter, Grid, List, Search, Settings, Play, Pause, RotateCcw, RefreshCw, Calendar, MapPin, Code2, Layers, Layout, Briefcase, UserCheck, Clock4, Award, Building, FileText, MessageSquare, Phone, Mail, ChevronRight, Plus, Minus, X, Check, AlertCircle, Info, Lightbulb, Rocket, PieChart, LineChart
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { DashboardPreviewDark } from "../../dashboard-preview-dark"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isLoading, setIsLoading] = useState(true)
  const [copyFeedback, setCopyFeedback] = useState("")

  const safeAnimationSpeed = Math.max(0.1, Math.min(3, animationSpeed?.[0] ?? 1))

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / safeAnimationSpeed}s`)
    }
  }, [safeAnimationSpeed, mounted])

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
            <div className="space-y-4">
              <div className="w-96 h-12 bg-slate-700 rounded animate-pulse" />
              <div className="w-full max-w-2xl h-6 bg-slate-700 rounded animate-pulse" />
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
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
        {/* Hero Section */}
        <section className="px-8 py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    Production Ready
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    <Users className="w-3 h-3 mr-1" />
                    Enterprise
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    <Rocket className="w-3 h-3 mr-1" />
                    SaaS Platform
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                  Recruitment Dashboard
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                  Transform your hiring process with our comprehensive recruitment dashboard. Built for modern HR teams, featuring real-time analytics, candidate pipeline management, and intelligent insights.
                </p>

              </div>

              {/* Product Info Panel */}
              <div className="hidden lg:block">
                <Card className="w-80 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Product Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Active Users</span>
                        <span className="text-slate-200 font-medium">10,000+</span>
                    </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Companies</span>
                        <span className="text-slate-200 font-medium">500+</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Uptime</span>
                        <span className="text-green-400 font-medium">99.9%</span>
                    </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Support</span>
                        <span className="text-slate-200 font-medium">24/7</span>
                      </div>
                    </div>
                    
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { 
                  icon: Users, 
                  label: "Candidate Management", 
                  value: "Complete Pipeline", 
                  description: "Track every candidate from application to hire",
                  color: "text-blue-400", 
                  bg: "bg-blue-500/10"
                },
                { 
                  icon: BarChart3, 
                  label: "Real-time Analytics", 
                  value: "Live Insights", 
                  description: "Monitor recruitment metrics and performance",
                  color: "text-green-400", 
                  bg: "bg-green-500/10"
                },
                { 
                  icon: Calendar, 
                  label: "Interview Scheduling", 
                  value: "Smart Calendar", 
                  description: "Automated scheduling with calendar integration",
                  color: "text-purple-400", 
                  bg: "bg-purple-500/10"
                },
                { 
                  icon: Briefcase, 
                  label: "Job Management", 
                  value: "Multi-posting", 
                  description: "Manage jobs across multiple platforms",
                  color: "text-fuchsia-400", 
                  bg: "bg-fuchsia-500/10"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm hover:scale-105 relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${feature.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => toggleFavorite(`feature-${index}`)}
                      >
                        <Heart className={`h-4 w-4 ${favorites.has(`feature-${index}`) ? 'fill-current text-fuchsia-400' : 'text-slate-400'}`} />
                      </Button>
                    </div>
                    <div className="text-lg font-bold mb-1 text-slate-100">{feature.value}</div>
                    <div className="text-sm text-slate-400 mb-2">{feature.label}</div>
                    <div className="text-xs text-slate-500">{feature.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="px-8 mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8">
              {/* Enhanced Tab Navigation with Component Gallery Styling */}
              <div className="relative">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                  <TabsTrigger 
                    value="overview"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    
                    {/* Icon with enhanced effects */}
                    <div className="relative z-10">
                      <div className="relative">
                        <BarChart3 className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        
                        {/* Active pulse effect */}
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    
                    {/* Label with better typography */}
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                      Overview
                    </span>
                    
                    {/* Active indicator line */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all duration-300"></div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="features"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="relative">
                        <Zap className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                      Features
                    </span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all duration-300"></div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="analytics"
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="relative">
                        <TrendingUp className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                      Analytics
                    </span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all duration-300"></div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="api"
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
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                      API
                    </span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all duration-300"></div>
                  </TabsTrigger>
                </TabsList>
                
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-8">
              <ProductOverview 
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                handleCopyCode={handleCopyCode}
                copyFeedback={copyFeedback}
              />
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <FeaturesTab toggleFavorite={toggleFavorite} favorites={favorites} />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <AnalyticsTab />
            </TabsContent>

            <TabsContent value="api" className="space-y-8">
              <APITab handleCopyCode={handleCopyCode} copyFeedback={copyFeedback} />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}

// Component Definitions
function ProductOverview({ 
  toggleFavorite, 
  favorites, 
  handleCopyCode, 
  copyFeedback 
}: { 
  toggleFavorite: (id: string) => void
  favorites: Set<string>
  handleCopyCode: (code: string, id: string) => void
  copyFeedback: string
}) {
  return (
    <div className="space-y-8">
      {/* Dashboard Preview */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
                <Monitor className="h-6 w-6 text-fuchsia-400" />
                Live Dashboard Preview
          </CardTitle>
              <CardDescription className="mt-2 text-slate-300">
                Interactive recruitment dashboard with real-time data visualization and responsive design
          </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                <Eye className="w-3 h-3 mr-1" />
                Interactive
              </Badge>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Production Ready
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                <Monitor className="w-3 h-3 mr-1" />
                Responsive
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "Mobile-First Design",
                description: "Fully responsive across all devices",
                icon: Monitor,
                color: "text-blue-400"
              },
              {
                title: "Real-Time Updates",
                description: "Live data synchronization",
                icon: Activity,
                color: "text-green-400"
              },
              {
                title: "Interactive Charts",
                description: "Hover effects and animations",
                icon: BarChart3,
                color: "text-purple-400"
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg border border-slate-700/30">
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center">
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-200 mb-1">{feature.title}</h4>
                  <p className="text-xs text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Component */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-slate-900/50 rounded-xl p-4 lg:p-6 border border-slate-700/50 overflow-hidden">
              <DashboardPreviewDark />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-700/30">
            <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open Full Dashboard
            </Button>
            <Button variant="outline" className="border-fuchsia-500/30 hover:bg-fuchsia-500/10">
              <Download className="h-4 w-4 mr-2" />
              Download Template
            </Button>
            <Button variant="outline" className="border-slate-600/50 hover:bg-slate-700/50">
              <Code2 className="h-4 w-4 mr-2" />
              View Source Code
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-green-400" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Time to Hire", value: "18 days", change: "-15%", trend: "down", color: "text-green-400" },
              { label: "Quality Score", value: "94%", change: "+8%", trend: "up", color: "text-blue-400" },
              { label: "Cost per Hire", value: "£1,400", change: "-22%", trend: "down", color: "text-purple-400" },
              { label: "Offer Acceptance", value: "87%", change: "+12%", trend: "up", color: "text-fuchsia-400" }
            ].map((metric, i) => (
              <div key={i} className="p-4 bg-slate-900/30 rounded-lg border border-slate-700/30">
                <div className="text-2xl font-bold text-slate-100 mb-1">{metric.value}</div>
                <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
                <div className={`text-xs font-medium flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-green-400'}`}>
                  <TrendingUp className={`h-3 w-3 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FeaturesTab({ toggleFavorite, favorites }: { toggleFavorite: (id: string) => void, favorites: Set<string> }) {
  const features = [
    {
      title: "Candidate Pipeline Management",
      description: "Complete visibility into your recruitment funnel with drag-and-drop pipeline management",
      icon: Users,
      benefits: ["Visual pipeline stages", "Automated workflows", "Custom fields", "Bulk actions"]
    },
    {
      title: "Real-time Analytics & Reporting",
      description: "Comprehensive insights into recruitment performance with customizable dashboards",
      icon: BarChart3,
      benefits: ["Live metrics", "Custom reports", "Export capabilities", "Trend analysis"]
    },
    {
      title: "Interview Scheduling",
      description: "Streamlined scheduling with calendar integration and automated reminders",
      icon: Calendar,
      benefits: ["Calendar sync", "Automated reminders", "Video conferencing", "Feedback collection"]
    },
    {
      title: "Job Multi-posting",
      description: "Post jobs across multiple platforms from a single interface",
      icon: Briefcase,
      benefits: ["Multi-platform posting", "Template management", "Performance tracking", "Auto-refresh"]
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <ComponentIcon className="h-6 w-6 text-fuchsia-400" />
            Core Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="bg-slate-900/30 border-slate-700/50 hover:border-fuchsia-500/50 transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center border border-fuchsia-500/30">
                      <feature.icon className="h-6 w-6 text-fuchsia-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-100 mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-slate-500">
                            <CheckCircle2 className="h-3 w-3 text-green-400" />
                            {benefit}
                          </div>
                        ))}
                </div>
                </div>
              </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function APITab({ handleCopyCode, copyFeedback }: { handleCopyCode: (code: string, id: string) => void, copyFeedback: string }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-purple-400" />
            API Documentation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Authentication</h3>
            <Card className="bg-slate-900/30 border-slate-700/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-200">API Key Authentication</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyCode('api-auth', 'api-auth')}
                    className="h-8 w-8 p-0"
                  >
                    {copyFeedback === 'api-auth' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
                <pre className="bg-slate-950/50 p-3 rounded text-sm overflow-x-auto">
                  <code className="text-slate-300">{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.inclusive.io/v1/candidates`}</code>
                </pre>
              </CardContent>
            </Card>
                </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Endpoints</h3>
            <div className="space-y-3">
              {[
                { method: "GET", endpoint: "/candidates", description: "Retrieve all candidates" },
                { method: "POST", endpoint: "/candidates", description: "Create a new candidate" },
                { method: "GET", endpoint: "/jobs", description: "Retrieve all job postings" },
                { method: "POST", endpoint: "/interviews", description: "Schedule an interview" }
              ].map((endpoint, i) => (
                <Card key={i} className="bg-slate-900/30 border-slate-700/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Badge className={`${endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'}`}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm text-slate-300">{endpoint.endpoint}</code>
                      <span className="text-sm text-slate-400 ml-auto">{endpoint.description}</span>
              </div>
                  </CardContent>
                </Card>
            ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AnalyticsTab() {
  const analyticsData = [
    {
      title: "User Engagement",
      description: "Track how users interact with your recruitment platform",
      metrics: [
        { label: "Daily Active Users", value: "2,847", change: "+12.3%", trend: "up" },
        { label: "Session Duration", value: "18m 42s", change: "+8.7%", trend: "up" },
        { label: "Page Views", value: "45,621", change: "+15.2%", trend: "up" },
        { label: "Bounce Rate", value: "24.8%", change: "-3.1%", trend: "down" }
      ]
    },
    {
      title: "Recruitment Metrics",
      description: "Key performance indicators for your hiring process",
      metrics: [
        { label: "Applications", value: "1,234", change: "+18.9%", trend: "up" },
        { label: "Interviews Scheduled", value: "456", change: "+22.1%", trend: "up" },
        { label: "Offers Made", value: "89", change: "+5.4%", trend: "up" },
        { label: "Time to Hire", value: "14 days", change: "-2.3 days", trend: "down" }
      ]
    },
    {
      title: "System Performance",
      description: "Technical metrics and system health indicators",
      metrics: [
        { label: "API Response Time", value: "127ms", change: "-15ms", trend: "down" },
        { label: "Uptime", value: "99.9%", change: "+0.1%", trend: "up" },
        { label: "Error Rate", value: "0.02%", change: "-0.01%", trend: "down" },
        { label: "Database Queries", value: "2.1M", change: "+12.8%", trend: "up" }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Analytics Introduction */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-fuchsia-400" />
            Analytics Dashboard
          </CardTitle>
          <CardDescription>
            Real-time insights and performance metrics for your recruitment platform. 
            Monitor user engagement, recruitment KPIs, and system health.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Key Features
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Real-time Data", desc: "Live updates every 30 seconds" },
                  { title: "Custom Dashboards", desc: "Build personalized views" },
                  { title: "Export Reports", desc: "PDF and CSV exports" },
                  { title: "Alerts & Notifications", desc: "Automated threshold alerts" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{feature.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Data Sources
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Application Tracking", desc: "Candidate pipeline data" },
                  { title: "User Behavior", desc: "Platform interaction analytics" },
                  { title: "System Metrics", desc: "Performance and health data" },
                  { title: "Integration APIs", desc: "Third-party service data" }
                ].map((source, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Activity className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{source.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{source.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Benefits
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Data-Driven Decisions", desc: "Make informed choices" },
                  { title: "Process Optimization", desc: "Identify bottlenecks" },
                  { title: "Performance Tracking", desc: "Monitor KPI trends" },
                  { title: "ROI Measurement", desc: "Quantify platform value" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Award className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{benefit.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Categories */}
      {analyticsData.map((category, index) => (
        <Card key={index} className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100">{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.metrics.map((metric, idx) => (
                <Card key={idx} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-slate-100">{metric.value}</div>
                      <div className={`flex items-center gap-1 text-sm ${
                        metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
                </div>
          </CardContent>
        </Card>
      ))}

      {/* Live Dashboard Preview */}
      <Card className="bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-blue-500/10 border-fuchsia-500/20">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Monitor className="h-5 w-5 text-fuchsia-400" />
            Live Dashboard Preview
          </CardTitle>
          <CardDescription>
            Experience the full analytics dashboard with real-time data visualization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/30">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-fuchsia-400" />
                </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Interactive Analytics Dashboard</h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                Explore comprehensive charts, filters, and real-time data visualization tools
              </p>
              <div className="flex gap-3 justify-center">
                <Button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                  <Play className="h-4 w-4 mr-2" />
                  Launch Dashboard
                </Button>
                <Button variant="outline" className="border-fuchsia-500/30 hover:bg-fuchsia-500/10">
                  <Download className="h-4 w-4 mr-2" />
                  Sample Report
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 