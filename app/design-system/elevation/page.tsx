"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Copy, CheckCircle2, Settings, X, Eye, Code2, Layers, Download, ExternalLink, Sparkles, Grid3X3, Palette, Type, Layout, Mountain, Sun, Box, Zap } from "lucide-react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

export default function Elevation() {
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
                  <h1 className="text-2xl font-bold text-slate-100">Elevation</h1>
                  <p className="text-sm text-slate-400">Shadows, depth, and layering system</p>
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
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <Download className="h-4 w-4 mr-2" />
                    Export Shadows
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Figma Plugin
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
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Mountain className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">8</div>
                <div className="text-xs text-slate-400">Elevation Levels</div>
                <div className="text-xs text-green-400 mt-1">Ready to use</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Box className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">15</div>
                <div className="text-xs text-slate-400">Shadow Variants</div>
                <div className="text-xs text-blue-400 mt-1">Dark optimized</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">6</div>
                <div className="text-xs text-slate-400">Blur Effects</div>
                <div className="text-xs text-purple-400 mt-1">Glassmorphic</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Copy className="h-6 w-6 text-fuchsia-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">CSS</div>
                <div className="text-xs text-slate-400">Copy Ready</div>
                <div className="text-xs text-fuchsia-400 mt-1">One click</div>
              </CardContent>
            </Card>
          </div>

          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Mountain className="w-3 h-3 mr-1" />
                  8 Levels
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Semantic Names
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Dark Optimized
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Elevation System
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create visual hierarchy and depth with our comprehensive shadow and elevation system. 
                Designed specifically for dark interfaces with glassmorphic effects.
              </p>
            </div>
          </section>

          {/* Main Content Tabs */}
          <section className="mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                {/* Enhanced Tab Navigation */}
                <div className="relative">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                    <TabsTrigger 
                      value="overview"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="relative">
                          <Layers className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Overview
                      </span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="shadows"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="relative">
                          <Box className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Shadows
                      </span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="blur"
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
                        Blur & Glass
                      </span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="usage"
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
                        Usage
                      </span>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
                </div>
              </div>

              <TabsContent value="overview" className="space-y-8">
                <OverviewTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="shadows" className="space-y-8">
                <ShadowsTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="blur" className="space-y-8">
                <BlurTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="usage" className="space-y-8">
                <UsageTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  )
}

// Tab Components
function OverviewTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Elevation Principles</CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Our elevation system creates visual hierarchy through shadows, blur, and layering effects designed for dark interfaces.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Design Philosophy</h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Dark-first shadow optimisation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Glassmorphic design principles
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Semantic elevation naming
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Consistent layering system
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Elevation Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Mountain className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">Surface Shadows</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Sun className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Colored Shadows</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Zap className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Blur Effects</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Box className="h-5 w-5 text-orange-400" />
                    <span className="text-slate-300">Glassmorphism</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Elevation Levels Preview */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Elevation Levels</CardTitle>
          <CardDescription>Eight levels of elevation from flat to floating</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { level: 0, name: "Flat", shadow: "shadow-none", description: "No elevation" },
              { level: 1, name: "Subtle", shadow: "shadow-sm", description: "Minimal lift" },
              { level: 2, name: "Low", shadow: "shadow", description: "Card surfaces" },
              { level: 3, name: "Medium", shadow: "shadow-md", description: "Dropdowns" },
              { level: 4, name: "High", shadow: "shadow-lg", description: "Modals" },
              { level: 5, name: "Higher", shadow: "shadow-xl", description: "Overlays" },
              { level: 6, name: "Highest", shadow: "shadow-2xl", description: "Tooltips" },
              { level: 7, name: "Float", shadow: "shadow-2xl shadow-fuchsia-500/25", description: "Interactive" }
            ].map((item) => (
              <div key={item.level} className="text-center">
                <div 
                  className={`w-full h-20 bg-slate-800 rounded-lg ${item.shadow} mb-3 flex items-center justify-center text-slate-300 font-medium border border-slate-700/50`}
                  style={{ transition: `all ${1 / safeAnimationSpeed}s` }}
                >
                  {item.level}
                </div>
                <div className="text-sm text-slate-300 font-medium">{item.name}</div>
                <div className="text-xs text-slate-500">{item.description}</div>
                <div className="text-xs text-slate-400 font-mono mt-1">{item.shadow}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ShadowsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const shadowTokens = [
    { 
      name: "shadow-sm", 
      value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", 
      usage: "Subtle borders, form controls",
      level: 1
    },
    { 
      name: "shadow", 
      value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", 
      usage: "Cards, buttons",
      level: 2
    },
    { 
      name: "shadow-md", 
      value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", 
      usage: "Dropdown menus",
      level: 3
    },
    { 
      name: "shadow-lg", 
      value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", 
      usage: "Modals, overlays",
      level: 4
    },
    { 
      name: "shadow-xl", 
      value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", 
      usage: "Large modals",
      level: 5
    },
    { 
      name: "shadow-2xl", 
      value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", 
      usage: "Tooltips, popovers",
      level: 6
    }
  ]

  const coloredShadows = [
    { 
      name: "shadow-fuchsia-500/25", 
      value: "0 25px 50px -12px rgb(217 70 239 / 0.25)", 
      usage: "Primary buttons, CTAs",
      colour: "fuchsia"
    },
    { 
      name: "shadow-purple-500/25", 
      value: "0 25px 50px -12px rgb(168 85 247 / 0.25)", 
      usage: "Secondary actions",
      colour: "purple"
    },
    { 
      name: "shadow-blue-500/25", 
      value: "0 25px 50px -12px rgb(59 130 246 / 0.25)", 
      usage: "Information, links",
      colour: "blue"
    },
    { 
      name: "shadow-green-500/25", 
      value: "0 25px 50px -12px rgb(34 197 94 / 0.25)", 
      usage: "Success states",
      colour: "green"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Standard Shadows */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Standard Shadows</CardTitle>
          <CardDescription>Core shadow system for interface hierarchy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {shadowTokens.map((shadow) => (
              <div key={shadow.name} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colours group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-16 h-16 bg-slate-800 rounded-lg ${shadow.name} border border-slate-700/50`}
                  />
                  <div>
                    <div className="font-mono text-sm text-slate-200">{shadow.name}</div>
                    <div className="text-xs text-slate-400 mb-1">Level {shadow.level}</div>
                    <div className="text-xs text-slate-500">{shadow.usage}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-400 font-mono max-w-xs truncate">
                    {shadow.value}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(shadow.name, `shadow-${shadow.name}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    {copiedCode === `shadow-${shadow.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Colored Shadows */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Colored Shadows</CardTitle>
          <CardDescription>Brand and semantic colored shadows for emphasis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coloredShadows.map((shadow) => (
              <div key={shadow.name} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colours group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-16 h-16 bg-slate-800 rounded-lg shadow-lg ${shadow.name} border border-slate-700/50`}
                  />
                  <div>
                    <div className="font-mono text-sm text-slate-200">{shadow.name}</div>
                    <div className="text-xs text-slate-400 mb-1 capitalize">{shadow.colour} variant</div>
                    <div className="text-xs text-slate-500">{shadow.usage}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-400 font-mono max-w-xs truncate">
                    {shadow.value}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(shadow.name, `colored-shadow-${shadow.name}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    {copiedCode === `colored-shadow-${shadow.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BlurTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const blurEffects = [
    { 
      name: "backdrop-blur-sm", 
      value: "backdrop-filter: blur(4px)", 
      usage: "Subtle overlay effects",
      pixels: "4px"
    },
    { 
      name: "backdrop-blur", 
      value: "backdrop-filter: blur(8px)", 
      usage: "Modal backgrounds",
      pixels: "8px"
    },
    { 
      name: "backdrop-blur-md", 
      value: "backdrop-filter: blur(12px)", 
      usage: "Navigation overlays",
      pixels: "12px"
    },
    { 
      name: "backdrop-blur-lg", 
      value: "backdrop-filter: blur(16px)", 
      usage: "Sidebar panels",
      pixels: "16px"
    },
    { 
      name: "backdrop-blur-xl", 
      value: "backdrop-filter: blur(24px)", 
      usage: "Header bars",
      pixels: "24px"
    },
    { 
      name: "backdrop-blur-2xl", 
      value: "backdrop-filter: blur(40px)", 
      usage: "Hero backgrounds",
      pixels: "40px"
    }
  ]

  const glassEffects = [
    {
      name: "Glass Light",
      classes: "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50",
      usage: "Cards, subtle overlays"
    },
    {
      name: "Glass Medium", 
      classes: "bg-slate-800/30 backdrop-blur-md border border-slate-700/30",
      usage: "Modal backgrounds"
    },
    {
      name: "Glass Strong",
      classes: "bg-slate-900/90 backdrop-blur-xl border border-slate-800/50",
      usage: "Navigation, headers"
    },
    {
      name: "Glass Accent",
      classes: "bg-fuchsia-500/10 backdrop-blur-md border border-fuchsia-500/30",
      usage: "Highlighted elements"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Backdrop Blur */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Backdrop Blur</CardTitle>
          <CardDescription>Blur effects for glassmorphic interfaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blurEffects.map((blur) => (
              <div key={blur.name} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colours group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-700/50">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 opacity-50"></div>
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
                    {/* Blur overlay */}
                    <div className={`absolute inset-2 bg-slate-800/50 rounded ${blur.name}`}></div>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-slate-200">{blur.name}</div>
                    <div className="text-xs text-slate-400 mb-1">{blur.pixels} blur</div>
                    <div className="text-xs text-slate-500">{blur.usage}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-400 font-mono">
                    {blur.value}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(blur.name, `blur-${blur.name}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    {copiedCode === `blur-${blur.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Glassmorphic Combinations */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Glassmorphic Combinations</CardTitle>
          <CardDescription>Pre-built glass effect combinations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {glassEffects.map((effect) => (
              <div key={effect.name} className="space-y-3">
                <div className="text-sm font-medium text-slate-200">{effect.name}</div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500"></div>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
                  {/* Glass effect */}
                  <div className={`absolute inset-4 rounded-lg ${effect.classes} flex items-center justify-center`}>
                    <span className="text-xs text-slate-300">{effect.name}</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500">{effect.usage}</div>
                <div className="flex items-center justify-between">
                  <code className="text-xs text-slate-400 font-mono">{effect.classes}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(effect.classes, `glass-${effect.name}`)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedCode === `glass-${effect.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UsageTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* CSS Implementation */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">CSS Implementation</CardTitle>
          <CardDescription>How to implement elevation in CSS</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`/* Standard shadows */
.shadow-sm { 
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); 
}
.shadow { 
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); 
}
.shadow-lg { 
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); 
}

/* Colored shadows */
.shadow-fuchsia-500\\/25 {
  box-shadow: 0 25px 50px -12px rgb(217 70 239 / 0.25);
}

/* Backdrop blur */
.backdrop-blur-sm { 
  backdrop-filter: blur(4px); 
}
.backdrop-blur-xl { 
  backdrop-filter: blur(24px); 
}`}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`/* Standard shadows */
.shadow-sm { 
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); 
}
.shadow { 
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); 
}
.shadow-lg { 
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); 
}

/* Colored shadows */
.shadow-fuchsia-500\\/25 {
  box-shadow: 0 25px 50px -12px rgb(217 70 239 / 0.25);
}

/* Backdrop blur */
.backdrop-blur-sm { 
  backdrop-filter: blur(4px); 
}
.backdrop-blur-xl { 
  backdrop-filter: blur(24px); 
}`, 'css-elevation')}
              className="transition-opacity"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'css-elevation' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
              Copy CSS
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* React Component Examples */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">React Component Examples</CardTitle>
          <CardDescription>Using elevation in React components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`// Glass Card Component
const GlassCard = ({ children, elevation = "medium" }) => {
  const elevationClasses = {
    low: "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50",
    medium: "bg-slate-800/30 backdrop-blur-md border border-slate-700/30",
    high: "bg-slate-900/90 backdrop-blur-xl border border-slate-800/50"
  }
  
  return (
    <div className={\`rounded-lg \${elevationClasses[elevation]}\`}>
      {children}
    </div>
  )
}

// Floating Button with Colored Shadow
const FloatingButton = ({ variant = "primary", children }) => {
  const shadowClasses = {
    primary: "shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40",
    secondary: "shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
  }
  
  return (
    <button className={\`px-6 py-3 rounded-lg transition-all \${shadowClasses[variant]}\`}>
      {children}
    </button>
  )
}`}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`// Glass Card Component
const GlassCard = ({ children, elevation = "medium" }) => {
  const elevationClasses = {
    low: "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50",
    medium: "bg-slate-800/30 backdrop-blur-md border border-slate-700/30",
    high: "bg-slate-900/90 backdrop-blur-xl border border-slate-800/50"
  }
  
  return (
    <div className={\`rounded-lg \${elevationClasses[elevation]}\`}>
      {children}
    </div>
  )
}`, 'react-elevation')}
              className="transition-opacity"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'react-elevation' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
              Copy React Example
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Best Practices</CardTitle>
          <CardDescription>Guidelines for effective elevation usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-3">✅ Do</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Use higher elevation for more important elements</li>
                  <li>• Combine backdrop blur with semi-transparent backgrounds</li>
                  <li>• Add colored shadows to interactive elements</li>
                  <li>• Maintain consistent elevation hierarchy</li>
                  <li>• Use glassmorphism for overlay surfaces</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">❌ Don't</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Mix too many elevation levels on one screen</li>
                  <li>• Use heavy shadows on small elements</li>
                  <li>• Apply colored shadows to decorative elements</li>
                  <li>• Overuse backdrop blur (performance impact)</li>
                  <li>• Ignore elevation in component hierarchy</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}








