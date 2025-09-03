"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Smartphone, Tablet, Monitor, Copy, Settings, X, Eye, Code2, Download, ExternalLink, Sparkles, Grid3X3, Zap, Globe, Layers } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

export default function Responsive() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [currentBreakpoint, setCurrentBreakpoint] = useState("desktop")

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
                  <h1 className="text-2xl font-bold text-slate-100">Responsive Design</h1>
                  <p className="text-sm text-slate-400">Device-adaptive layouts and breakpoint system</p>
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
                    Grid System
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Breakpoints
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
          {/* Quick Value Surface - Universal Comprehension */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardContent className="p-4 text-center">
                <Smartphone className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">320px</div>
                <div className="text-xs text-slate-400">Mobile First</div>
                <div className="text-xs text-green-400 mt-1">Optimized</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardContent className="p-4 text-center">
                <Grid3X3 className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">12</div>
                <div className="text-xs text-slate-400">Grid System</div>
                <div className="text-xs text-purple-400 mt-1">Flexible</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardContent className="p-4 text-center">
                <Monitor className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">4</div>
                <div className="text-xs text-slate-400">Breakpoints</div>
                <div className="text-xs text-blue-400 mt-1">Tailwind CSS</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colors cursor-pointer">
              <CardContent className="p-4 text-center">
                <CheckCircle2 className="h-6 w-6 text-fuchsia-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">65%</div>
                <div className="text-xs text-slate-400">Mobile Usage</div>
                <div className="text-xs text-orange-400 mt-1">Primary target</div>
              </CardContent>
            </Card>
          </div>

          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Monitor className="w-3 h-3 mr-1" />
                  Multi-Device
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Grid3X3 className="w-3 h-3 mr-1" />
                  Fluid Layouts
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Smartphone className="w-3 h-3 mr-1" />
                  Mobile-First
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Responsive Design
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Mobile-first responsive design system that adapts seamlessly across all devices. 
                Built for modern recruitment applications with flexible grids and adaptive components.
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
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Layers className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
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
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="breakpoints"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Monitor className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Breakpoints
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="layouts"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Grid3X3 className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Layouts
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="guidelines"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Guidelines
                      </span>
                      
                      {/* Active indicator line */}
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

              <TabsContent value="breakpoints" className="space-y-8">
                <BreakpointsTab 
                  currentBreakpoint={currentBreakpoint}
                  setCurrentBreakpoint={setCurrentBreakpoint}
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  safeAnimationSpeed={safeAnimationSpeed}
                />
              </TabsContent>

              <TabsContent value="layouts" className="space-y-8">
                <LayoutsTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="guidelines" className="space-y-8">
                <GuidelinesTab safeAnimationSpeed={safeAnimationSpeed} />
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
  const responsiveFeatures = [
    {
      title: "Mobile-First",
      description: "Design for mobile devices first, then enhance for larger screens",
      icon: Smartphone,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      features: ["Touch-friendly interfaces", "Optimized for small screens", "Progressive enhancement", "Performance focused"]
    },
    {
      title: "Fluid Grids",
      description: "Flexible layouts that adapt to any screen size",
      icon: Grid3X3,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      features: ["CSS Grid and Flexbox", "Percentage-based sizing", "Responsive columns", "Container queries"]
    },
    {
      title: "Adaptive Components",
      description: "UI components that respond to viewport changes",
      icon: Monitor,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      features: ["Contextual navigation", "Scalable typography", "Flexible spacing", "Device-specific patterns"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Responsive Features */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Responsive Design Principles</CardTitle>
          <CardDescription>Core concepts for building adaptive user interfaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {responsiveFeatures.map((feature, index) => (
              <Card key={feature.title} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors mb-2" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Responsive Strategy */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Responsive Strategy</CardTitle>
          <CardDescription>How we approach device adaptation in recruitment applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300">Design Approach</h3>
              <div className="space-y-3">
                {[
                  "Start with 320px mobile viewport",
                  "Use fluid typography and spacing",
                  "Design for touch interactions first",
                  "Progressive enhancement for desktop"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Smartphone className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300">Technical Implementation</h3>
              <div className="space-y-3">
                {[
                  "CSS Grid and Flexbox for layouts",
                  "Container queries for component adaptation",
                  "Tailwind CSS responsive utilities",
                  "Modern CSS viewport units (dvh, svw)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Code2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Device Statistics */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Usage Statistics</CardTitle>
          <CardDescription>Device breakdown for modern recruitment applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { device: "Mobile", percentage: "65%", description: "Primary usage", icon: Smartphone, color: "text-blue-400" },
              { device: "Desktop", percentage: "25%", description: "Admin tasks", icon: Monitor, color: "text-green-400" },
              { device: "Tablet", percentage: "8%", description: "Interviews", icon: Tablet, color: "text-purple-400" },
              { device: "Other", percentage: "2%", description: "Various", icon: Globe, color: "text-orange-400" }
            ].map((stat, index) => (
              <div key={stat.device} className="text-center p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colors group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                <div className="text-2xl font-bold text-slate-100 mb-1">{stat.percentage}</div>
                <div className="text-sm text-slate-400 mb-2">{stat.device}</div>
                <div className="text-xs text-green-400 font-medium">{stat.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BreakpointsTab({ currentBreakpoint, setCurrentBreakpoint, onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  const breakpoints = [
    { name: "Mobile", key: "mobile", min: "320px", max: "639px", icon: Smartphone, description: "Small screens, touch-first" },
    { name: "Tablet", key: "tablet", min: "640px", max: "1023px", icon: Tablet, description: "Medium screens, hybrid use" },
    { name: "Desktop", key: "desktop", min: "1024px", max: "1279px", icon: Monitor, description: "Large screens, mouse/keyboard" },
    { name: "Wide", key: "wide", min: "1280px", max: "∞", icon: Monitor, description: "Extra large displays" }
  ]

  return (
    <div className="space-y-8">
      {/* Breakpoint Selector */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Breakpoint System</CardTitle>
          <CardDescription>Standardized viewport ranges for consistent responsive behavior</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {breakpoints.map((bp) => (
              <Card 
                key={bp.key}
                className={`cursor-pointer transition-all group ${
                  currentBreakpoint === bp.key 
                    ? 'bg-fuchsia-500/20 border-fuchsia-500/50' 
                    : 'bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50'
                }`}
                style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                onClick={() => setCurrentBreakpoint(bp.key)}
              >
                <CardContent className="p-4 text-center">
                  <bp.icon className={`h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform ${
                    currentBreakpoint === bp.key ? 'text-fuchsia-300' : 'text-slate-400'
                  }`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                  <h3 className={`font-medium mb-1 ${
                    currentBreakpoint === bp.key ? 'text-fuchsia-300' : 'text-slate-100'
                  }`}>{bp.name}</h3>
                  <p className="text-xs text-slate-400 mb-2">{bp.min} - {bp.max}</p>
                  <p className="text-xs text-slate-500">{bp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Breakpoint Details */}
          <div className="p-6 bg-slate-900/30 rounded-lg border border-slate-700/30">
            <h4 className="font-medium text-slate-200 mb-4">
              {breakpoints.find(bp => bp.key === currentBreakpoint)?.name} Specifications
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-medium text-fuchsia-300 mb-2">CSS Media Query</h5>
                <pre className="bg-slate-800/50 p-3 rounded text-xs overflow-x-auto border border-slate-700/30">
                  <code className="text-slate-300">
                    {currentBreakpoint === 'mobile' && '@media (max-width: 639px) { /* styles */ }'}
                    {currentBreakpoint === 'tablet' && '@media (min-width: 640px) and (max-width: 1023px) { /* styles */ }'}
                    {currentBreakpoint === 'desktop' && '@media (min-width: 1024px) and (max-width: 1279px) { /* styles */ }'}
                    {currentBreakpoint === 'wide' && '@media (min-width: 1280px) { /* styles */ }'}
                  </code>
                </pre>
              </div>
              <div>
                <h5 className="text-sm font-medium text-fuchsia-300 mb-2">Tailwind Classes</h5>
                <pre className="bg-slate-800/50 p-3 rounded text-xs overflow-x-auto border border-slate-700/30">
                  <code className="text-slate-300">
                    {currentBreakpoint === 'mobile' && 'block sm:hidden'}
                    {currentBreakpoint === 'tablet' && 'hidden sm:block lg:hidden'}
                    {currentBreakpoint === 'desktop' && 'hidden lg:block xl:hidden'}
                    {currentBreakpoint === 'wide' && 'hidden xl:block'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
            </CardContent>
          </Card>

      {/* Tailwind Configuration */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Tailwind Configuration</CardTitle>
              <CardDescription className="mt-2">Complete breakpoint setup for your project</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('tailwind-config', 'config')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'config' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
            </CardHeader>
            <CardContent>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Tablet and up
      'md': '768px',   // Small desktop
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px', // Extra large
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}`}</code>
              </pre>
            </CardContent>
          </Card>
    </div>
  )
}

function LayoutsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* Grid System */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Responsive Grid System</CardTitle>
              <CardDescription className="mt-2">Flexible grid layouts for recruitment interfaces</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('grid-system', 'grid')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'grid' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
            </CardHeader>
            <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-fuchsia-500/20 rounded-lg p-4 text-center border border-fuchsia-500/30">
                  <div className="text-sm text-fuchsia-300">Column {i}</div>
                  <div className="text-xs text-slate-400 mt-1">Responsive</div>
                </div>
              ))}
            </div>
            
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`<!-- Responsive Grid Example -->
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>

<!-- Candidate Cards Example -->
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {candidates.map(candidate => (
    <CandidateCard key={candidate.id} candidate={candidate} />
  ))}
</div>`}</code>
            </pre>
          </div>
        </CardContent>
                </Card>

      {/* Layout Patterns */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
          <CardTitle className="text-xl text-slate-100">Common Layout Patterns</CardTitle>
          <CardDescription>Responsive patterns for recruitment applications</CardDescription>
                  </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Dashboard Layout</h4>
              <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-24">
                  <div className="lg:col-span-1 bg-blue-500/20 rounded border border-blue-500/30 p-2">
                    <div className="text-xs text-blue-300">Sidebar</div>
                  </div>
                  <div className="lg:col-span-3 bg-slate-700/30 rounded border border-slate-600/30 p-2">
                    <div className="text-xs text-slate-300">Main Content</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Card Grid</h4>
              <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 h-24">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-green-500/20 rounded border border-green-500/30 p-1">
                      <div className="text-xs text-green-300">Card</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </div>
            </CardContent>
          </Card>

      {/* Container System */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <CardTitle className="text-xl text-slate-100">Container System</CardTitle>
          <CardDescription>Consistent content widths and spacing</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-slate-300">Breakpoint</th>
                    <th className="text-left p-3 text-slate-300">Container Width</th>
                    <th className="text-left p-3 text-slate-300">Padding</th>
                    <th className="text-left p-3 text-slate-300">Max Content</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bp: "Mobile", width: "100%", padding: "1rem", maxContent: "~288px" },
                    { bp: "Tablet", width: "100%", padding: "2rem", maxContent: "~576px" },
                    { bp: "Desktop", width: "1024px", padding: "4rem", maxContent: "~896px" },
                    { bp: "Wide", width: "1280px", padding: "5rem", maxContent: "~1120px" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-800">
                      <td className="p-3 text-slate-300">{row.bp}</td>
                      <td className="p-3 text-slate-400">{row.width}</td>
                      <td className="p-3 text-slate-400">{row.padding}</td>
                      <td className="p-3 text-slate-400">{row.maxContent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function GuidelinesTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Responsive Testing */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Responsive Testing</CardTitle>
          <CardDescription>Test your components across different screen sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Device Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Mobile", width: "320px", height: "568px", icon: Smartphone, class: "max-w-[320px]" },
                { name: "Tablet", width: "768px", height: "1024px", icon: Tablet, class: "max-w-[768px]" },
                { name: "Desktop", width: "1024px", height: "768px", icon: Monitor, class: "max-w-[1024px]" },
                { name: "Wide", width: "1440px", height: "900px", icon: Monitor, class: "max-w-[1440px]" }
              ].map((device) => (
                <div key={device.name} className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <device.icon className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-medium text-slate-200">{device.name}</span>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1">
                    <div>{device.width} × {device.height}</div>
                    <div className="text-slate-500">Class: {device.class}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive Test Components */}
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Test Components</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="text-sm font-medium text-slate-200 mb-2">Card {i}</div>
                    <div className="text-xs text-slate-400">Responsive grid item</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsive Text */}
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Responsive Typography</h4>
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100">Responsive Heading</h1>
                <p className="text-sm sm:text-base lg:text-lg text-slate-300">This text scales with screen size</p>
                <p className="text-xs sm:text-sm text-slate-400">Smaller text for mobile</p>
              </div>
            </div>

            {/* Responsive Spacing */}
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Responsive Spacing</h4>
              <div className="space-y-2 sm:space-y-4 lg:space-y-6">
                <div className="bg-slate-700/30 rounded p-2 sm:p-4 lg:p-6">
                  <div className="text-sm text-slate-200">Padding scales: p-2 sm:p-4 lg:p-6</div>
                </div>
                <div className="bg-slate-700/30 rounded p-2 sm:p-4 lg:p-6">
                  <div className="text-sm text-slate-200">Margin scales: m-2 sm:m-4 lg:m-6</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Responsive Best Practices</CardTitle>
          <CardDescription>Guidelines for building responsive recruitment interfaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Layout Classes</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-slate-900/30 rounded">
                  <code className="text-slate-300">hidden sm:block</code>
                  <span className="text-slate-400">Show on tablet+</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-900/30 rounded">
                  <code className="text-slate-300">grid-cols-1 md:grid-cols-3</code>
                  <span className="text-slate-400">Responsive grid</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-900/30 rounded">
                  <code className="text-slate-300">text-sm lg:text-base</code>
                  <span className="text-slate-400">Responsive text</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-900/30 rounded">
                  <code className="text-slate-300">p-4 sm:p-6 lg:p-8</code>
                  <span className="text-slate-400">Responsive padding</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Mobile Considerations</h4>
              <div className="space-y-3">
                {[
                  "Touch targets: minimum 44px",
                  "Readable text: 16px minimum",
                  "Adequate spacing between elements",
                  "Test on actual devices"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Smartphone className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Common Responsive Patterns</CardTitle>
          <CardDescription>Proven patterns for recruitment applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-fuchsia-300">Navigation</h4>
                <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="bg-slate-700/30 rounded px-3 py-2 text-sm">Home</div>
                    <div className="bg-slate-700/30 rounded px-3 py-2 text-sm">Candidates</div>
                    <div className="bg-slate-700/30 rounded px-3 py-2 text-sm">Jobs</div>
                    <div className="bg-slate-700/30 rounded px-3 py-2 text-sm">Analytics</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-fuchsia-300">Cards</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-slate-700/30 rounded p-2 text-xs">
                      Card {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Forms</h4>
              <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-700/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm text-slate-300">First Name</div>
                    <div className="bg-slate-700/30 rounded h-8"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-300">Last Name</div>
                    <div className="bg-slate-700/30 rounded h-8"></div>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <div className="text-sm text-slate-300">Email</div>
                    <div className="bg-slate-700/30 rounded h-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 