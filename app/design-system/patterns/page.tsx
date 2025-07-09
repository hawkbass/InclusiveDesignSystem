"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Home, Users, Briefcase, ChevronRight, Check, Copy, Settings, X, Eye, Code2, Download, ExternalLink, Sparkles, Grid3X3, Palette, Navigation, Layout, Search, Filter, Star, Award, Zap, CheckCircle2, Menu, Table, Layers, FileText, Component, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Input } from "@/components/ui/input"

export default function Patterns() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  // Safely get animation speed value
  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply animation speed to document
  useEffect(() => {
    if (mounted && animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed, mounted])

  if (!mounted) {
    return null
  }

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Enhanced Header */}
        <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-900/20">
          <div className="px-6 lg:px-12 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-100">UI Patterns</h1>
                  <p className="text-sm text-slate-400">Common interface patterns and layouts</p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className={`transition-all ${settingsOpen ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'hover:bg-slate-800'}`}
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <Download className="h-4 w-4 mr-2" />
                    Pattern Library
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Templates
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            {settingsOpen && (
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 animate-in slide-in-from-top-2" style={{ animationDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-slate-200">Interface Settings</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSettingsOpen(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Animation Speed</Label>
                      <span className="text-xs text-slate-400 font-mono">{safeAnimationSpeed}x</span>
                    </div>
                    <Slider
                      value={animationSpeed}
                      onValueChange={setAnimationSpeed}
                      max={3}
                      min={0.5}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">View Options</Label>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8">
                        <Code2 className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="px-6 lg:px-12 py-8">
          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Layers className="w-3 h-3 mr-1" />
                  12 Patterns
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Production Ready
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Grid3X3 className="w-3 h-3 mr-1" />
                  Responsive
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                UI Patterns
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Reusable interface patterns and layouts that solve common design problems in recruitment applications. 
                Built for consistency, accessibility, and scalability.
              </p>
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
                          <Grid3X3 className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Overview</span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                      value="ui"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="relative">
                          <Component className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">UI Patterns</span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                      value="interaction"
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
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Interaction</span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                      value="workflow"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="relative">
                          <ArrowRight className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">Workflow</span>
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

              <TabsContent value="ui" className="space-y-8">
                <UITab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="interaction" className="space-y-8">
                <InteractionTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="workflow" className="space-y-8">
                <WorkflowTab safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  )
}

// Tab Components
function OverviewTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const patternCategories = [
    {
      title: "Navigation Patterns",
      description: "Breadcrumbs, sidebars, tabs, and navigation components",
      count: 4,
      icon: Navigation,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      examples: ["Breadcrumb Navigation", "Sidebar Navigation", "Tab Navigation", "Pagination"]
    },
    {
      title: "Layout Patterns",
      description: "Cards, grids, lists, and content organization",
      count: 5,
      icon: Layout,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      examples: ["Card Grids", "List Views", "Master-Detail", "Split Layouts", "Content Blocks"]
    },
    {
      title: "Form Patterns",
      description: "Input layouts, validation, and form flows",
      count: 3,
      icon: FileText,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      examples: ["Multi-step Forms", "Inline Validation", "Form Sections"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Pattern Categories */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Pattern Categories</CardTitle>
          <CardDescription>Organized collections of reusable interface solutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {patternCategories.map((category, index) => (
              <Card key={category.title} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors mb-2" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {category.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{category.description}</p>
                      <Badge className="bg-slate-700/50 text-slate-300 text-xs">
                        {category.count} patterns
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-300">Examples:</h4>
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1 h-1 bg-fuchsia-400 rounded-full" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <CardTitle className="text-xl text-slate-100">Pattern Best Practices</CardTitle>
          <CardDescription>Guidelines for implementing and using UI patterns effectively</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300">Implementation</h3>
              <div className="space-y-3">
                {[
                  "Start with established patterns before creating new ones",
                  "Document variations and edge cases thoroughly",
                  "Test patterns across different screen sizes",
                  "Ensure patterns work with assistive technologies"
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300">Consistency</h3>
              <div className="space-y-3">
                {[
                  "Use patterns consistently across the application",
                  "Maintain consistent spacing and visual hierarchy",
                  "Follow established interaction behaviors",
                  "Document when and how to use each pattern"
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UITab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Breadcrumb Pattern */}
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                Breadcrumb Navigation
              </CardTitle>
              <CardDescription className="mt-2">Hierarchical navigation trail showing user location</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('breadcrumb-code', 'breadcrumb')}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'breadcrumb' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-fuchsia-400" />
              <ChevronRight className="h-4 w-4 text-slate-400" />
              <span className="text-blue-400">Candidates</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
              <span className="text-green-400">John Doe</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
              <span className="text-slate-200">Profile</span>
            </div>
          </div>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li><Home className="h-5 w-5 text-fuchsia-400" /></li>
    <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
    <li><span className="text-blue-400">Candidates</span></li>
    <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
    <li><span className="text-green-400">John Doe</span></li>
    <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
    <li><span className="text-slate-200">Profile</span></li>
  </ol>
</nav>`}</code>
              </pre>
            </CardContent>
          </Card>

      {/* Tab Navigation Pattern */}
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                Tab Navigation
              </CardTitle>
              <CardDescription className="mt-2">Content section tabs with active states</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('tab-code', 'tabs')}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'tabs' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
            </CardHeader>
            <CardContent>
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 mb-4">
            <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg">
              <button className="px-4 py-2 bg-fuchsia-500/20 text-fuchsia-300 rounded-md text-sm font-medium">
                Overview
              </button>
              <button className="px-4 py-2 text-slate-400 hover:text-slate-200 rounded-md text-sm font-medium transition-colors">
                Experience
              </button>
              <button className="px-4 py-2 text-slate-400 hover:text-slate-200 rounded-md text-sm font-medium transition-colors">
                Skills
              </button>
            </div>
          </div>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="experience">Experience</TabsTrigger>
    <TabsTrigger value="skills">Skills</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <!-- Content -->
  </TabsContent>
</Tabs>`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

function InteractionTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Card Grid Pattern */}
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                Card Grid Layout
              </CardTitle>
              <CardDescription className="mt-2">Responsive grid of cards for displaying candidates or jobs</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('card-grid-code', 'card-grid')}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'card-grid' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
                    </CardHeader>
                    <CardContent>
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Candidate {i}</CardTitle>
                    <CardDescription className="text-xs">Software Engineer</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-2 text-xs">
                      <Check className="h-3 w-3 text-green-400" />
                      <span className="text-slate-300">Available</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
          </div>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {candidates.map((candidate) => (
    <Card key={candidate.id}>
      <CardHeader>
        <CardTitle>{candidate.name}</CardTitle>
        <CardDescription>{candidate.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-green-400" />
          {candidate.status}
        </div>
      </CardContent>
    </Card>
  ))}
</div>`}</code>
              </pre>
            </CardContent>
          </Card>

      {/* Master-Detail Pattern */}
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                Master-Detail Layout
              </CardTitle>
              <CardDescription className="mt-2">List view with detailed panel for selected items</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('master-detail-code', 'master-detail')}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'master-detail' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
            </CardHeader>
            <CardContent>
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-48">
              <div className="lg:col-span-1 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-sm font-medium text-slate-200 mb-3">Candidate List</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-fuchsia-500/20 rounded text-xs text-fuchsia-300">John Doe ✓</div>
                  <div className="p-2 bg-slate-700/50 rounded text-xs text-slate-400">Jane Smith</div>
                  <div className="p-2 bg-slate-700/50 rounded text-xs text-slate-400">Mike Johnson</div>
                </div>
              </div>
              <div className="lg:col-span-2 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h4 className="text-sm font-medium text-slate-200 mb-3">Candidate Details</h4>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>Name: John Doe</p>
                  <p>Role: Senior Developer</p>
                  <p>Experience: 5 years</p>
                  <p>Status: Available</p>
                </div>
              </div>
            </div>
          </div>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <div className="lg:col-span-1">
    <h3>Candidate List</h3>
    {candidates.map(candidate => (
      <div key={candidate.id} onClick={() => setSelected(candidate)}>
        {candidate.name}
      </div>
    ))}
  </div>
  <div className="lg:col-span-2">
    <h3>Details</h3>
    {selectedCandidate && (
      <CandidateDetails candidate={selectedCandidate} />
    )}
  </div>
</div>`}</code>
              </pre>
            </CardContent>
          </Card>
    </div>
  )
}

function WorkflowTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Multi-step Form Pattern */}
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                Multi-step Form
              </CardTitle>
              <CardDescription className="mt-2">Progressive form with step indicators and validation</CardDescription>
            </div>
          </div>
            </CardHeader>
            <CardContent>
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 mb-4">
            <div className="space-y-6">
              {/* Progress Steps */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm font-medium">1</div>
                  <span className="text-sm text-slate-200">Personal Info</span>
                </div>
                <div className="flex-1 h-0.5 bg-fuchsia-500"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-slate-300 text-sm font-medium">2</div>
                  <span className="text-sm text-slate-400">Experience</span>
                </div>
                <div className="flex-1 h-0.5 bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-slate-300 text-sm font-medium">3</div>
                  <span className="text-sm text-slate-400">Review</span>
                </div>
              </div>
              
              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-200 text-sm mb-1">Full Name</label>
                  <input className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded text-slate-100 text-sm" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-slate-200 text-sm mb-1">Email</label>
                  <input className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded text-slate-100 text-sm" placeholder="Enter your email" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700">Next</Button>
              </div>
            </div>
          </div>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`const [currentStep, setCurrentStep] = useState(1)
const totalSteps = 3

<form>
  {/* Progress Indicator */}
  <div className="flex items-center gap-4">
    {Array.from({ length: totalSteps }).map((_, i) => (
      <div key={i} className={\`w-8 h-8 rounded-full flex items-center justify-center \${
        i + 1 <= currentStep ? 'bg-fuchsia-500 text-white' : 'bg-slate-600 text-slate-300'
      }\`}>
        {i + 1}
      </div>
    ))}
  </div>
  
  {/* Form Content */}
  <div className="space-y-4">
    {currentStep === 1 && <PersonalInfoFields />}
    {currentStep === 2 && <ExperienceFields />}
    {currentStep === 3 && <ReviewFields />}
  </div>
  
  {/* Navigation */}
  <div className="flex justify-between">
    <Button onClick={() => setCurrentStep(prev => prev - 1)} disabled={currentStep === 1}>
      Previous
    </Button>
    <Button onClick={() => setCurrentStep(prev => prev + 1)} disabled={currentStep === totalSteps}>
      Next
    </Button>
  </div>
</form>`}</code>
              </pre>
            </CardContent>
          </Card>

      {/* Inline Validation Pattern */}
      <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                Inline Validation
              </CardTitle>
              <CardDescription className="mt-2">Real-time form validation with error states</CardDescription>
            </div>
          </div>
            </CardHeader>
            <CardContent>
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 mb-4">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-200 text-sm mb-1">Email Address</label>
                <input className="w-full px-3 py-2 bg-slate-800/50 border border-red-500 rounded text-slate-100 text-sm" defaultValue="invalid-email" />
                <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
              </div>
              <div>
                <label className="block text-slate-200 text-sm mb-1">Password</label>
                <input type="password" className="w-full px-3 py-2 bg-slate-800/50 border border-green-500 rounded text-slate-100 text-sm" defaultValue="password123" />
                <p className="text-green-400 text-xs mt-1">Password strength: Good</p>
              </div>
            </div>
          </div>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`const [errors, setErrors] = useState({})
const [values, setValues] = useState({})

const validateField = (name, value) => {
  if (name === 'email' && !isValidEmail(value)) {
    setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
  } else {
    setErrors(prev => ({ ...prev, [name]: null }))
  }
}

<div>
  <label>Email Address</label>
  <input
    className={\`border \${errors.email ? 'border-red-500' : 'border-green-500'}\`}
    onChange={(e) => {
      setValues(prev => ({ ...prev, email: e.target.value }))
      validateField('email', e.target.value)
    }}
  />
  {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
</div>`}</code>
          </pre>
            </CardContent>
          </Card>
    </div>
  )
} 