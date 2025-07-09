"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Copy, CheckCircle2, Settings, X, Eye, Code2, Palette, Type, Layout, Layers, Download, ExternalLink, Sparkles, Grid3X3 } from "lucide-react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

export default function Tokens() {
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
                  <h1 className="text-2xl font-bold text-slate-100">Design Tokens</h1>
                  <p className="text-sm text-slate-400">Design system foundations and variables</p>
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
                    Export Tokens
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
          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Palette className="w-3 h-3 mr-1" />
                  120+ Tokens
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Semantic Names
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  CSS Variables
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Design Tokens
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                The single source of truth for design decisions. Design tokens ensure consistency 
                and enable systematic theming across all components and applications.
              </p>
            </div>
          </section>

          {/* Main Content Tabs */}
          <section className="mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                {/* Enhanced Tab Navigation with Component Gallery Styling */}
                <div className="relative">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                  <TabsTrigger 
                    value="overview"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Palette className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
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
                    value="colors"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Sparkles className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Colors
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="typography"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Type className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Typography
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="spacing"
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
                        Spacing
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="usage"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Code2 className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Usage
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
                <OverviewTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="colors" className="space-y-8">
                <ColorsTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="typography" className="space-y-8">
                <TypographyTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="spacing" className="space-y-8">
                <SpacingTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
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
          <CardTitle className="text-2xl text-slate-100">What Are Design Tokens?</CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Design tokens are named variables that store visual design attributes. They provide a systematic approach to maintaining consistency across your design system.
          </CardDescription>
              </CardHeader>
              <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Benefits</h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Single source of truth for design decisions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Consistent visual language across platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Easy theming and customization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    Scalable design system architecture
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
                  <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-3">Token Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Palette className="h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">Colors & Themes</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Type className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">Typography Scale</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Layout className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Spacing System</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Layers className="h-5 w-5 text-orange-400" />
                    <span className="text-slate-300">Shadows & Effects</span>
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

function ColorsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const colorPalettes = [
    {
      name: "Primary",
      description: "Main brand colors",
      colors: [
        { name: "--primary", value: "220 100% 60%", hex: "#3B82F6" },
        { name: "--primary-foreground", value: "0 0% 98%", hex: "#FAFAFA" },
      ]
    },
    {
      name: "Secondary", 
      description: "Supporting colors",
      colors: [
        { name: "--secondary", value: "220 14% 96%", hex: "#F1F5F9" },
        { name: "--secondary-foreground", value: "220 9% 46%", hex: "#64748B" },
      ]
    },
    {
      name: "Accent",
      description: "Highlight colors", 
      colors: [
        { name: "--accent", value: "292 84% 61%", hex: "#C084FC" },
        { name: "--accent-foreground", value: "0 0% 98%", hex: "#FAFAFA" },
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {colorPalettes.map((palette) => (
        <Card key={palette.name} className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100">{palette.name} Colors</CardTitle>
            <CardDescription>{palette.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {palette.colors.map((color) => (
                <div key={color.name} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colors group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg border-2 border-slate-600"
                      style={{ backgroundColor: color.hex }}
                    />
                  <div>
                      <div className="font-mono text-sm text-slate-200">{color.name}</div>
                      <div className="text-xs text-slate-400">HSL: {color.value}</div>
                      <div className="text-xs text-slate-400">HEX: {color.hex}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(color.value, `color-${color.name}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    {copiedCode === `color-${color.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function TypographyTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const typographyTokens = [
    { name: "--font-sans", value: "Inter, system-ui, sans-serif", preview: "Inter Font Family" },
    { name: "--font-mono", value: "JetBrains Mono, monospace", preview: "JetBrains Mono" },
    { name: "--text-xs", value: "0.75rem", preview: "Extra Small Text", size: "text-xs" },
    { name: "--text-sm", value: "0.875rem", preview: "Small Text", size: "text-sm" },
    { name: "--text-base", value: "1rem", preview: "Base Text", size: "text-base" },
    { name: "--text-lg", value: "1.125rem", preview: "Large Text", size: "text-lg" },
    { name: "--text-xl", value: "1.25rem", preview: "Extra Large Text", size: "text-xl" },
    { name: "--text-2xl", value: "1.5rem", preview: "2X Large Text", size: "text-2xl" },
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Typography Tokens</CardTitle>
          <CardDescription>Font families, sizes, and text styling tokens</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {typographyTokens.map((token) => (
              <div key={token.name} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colors group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center gap-4 flex-1">
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-sm text-slate-200">{token.name}</div>
                    <div className="text-xs text-slate-400">{token.value}</div>
                  </div>
                  <div className={`${token.size || ''} text-slate-300 font-medium`}>
                    {token.preview}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopyCode(token.value, `typography-${token.name}`)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 ml-4"
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                >
                  {copiedCode === `typography-${token.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
            ))}
                </div>
              </CardContent>
            </Card>
    </div>
  )
}

function SpacingTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const spacingTokens = [
    { name: "--space-0", value: "0px", size: 0 },
    { name: "--space-1", value: "0.25rem", size: 4 },
    { name: "--space-2", value: "0.5rem", size: 8 },
    { name: "--space-4", value: "1rem", size: 16 },
    { name: "--space-6", value: "1.5rem", size: 24 },
    { name: "--space-8", value: "2rem", size: 32 },
    { name: "--space-12", value: "3rem", size: 48 },
    { name: "--space-16", value: "4rem", size: 64 },
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Spacing Tokens</CardTitle>
          <CardDescription>Consistent spacing system for layouts and components</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="space-y-4">
            {spacingTokens.map((token) => (
              <div key={token.name} className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colors group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center gap-4">
                  <div className="min-w-0">
                    <div className="font-mono text-sm text-slate-200">{token.name}</div>
                    <div className="text-xs text-slate-400">{token.value} ({token.size}px)</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div 
                      className="bg-fuchsia-400 h-4"
                      style={{ width: `${Math.max(token.size, 2)}px` }}
                    />
                    <span className="text-xs text-slate-500">{token.size}px</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopyCode(token.value, `spacing-${token.name}`)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                >
                  {copiedCode === `spacing-${token.name}` ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                </Button>
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
      {/* CSS Custom Properties */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-xl text-slate-100">CSS Custom Properties</CardTitle>
          <CardDescription>Using design tokens as CSS variables</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="space-y-4">
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`:root {
  /* Color tokens */
  --color-primary: #d946ef;
  --color-secondary: #8b5cf6;
  --color-background: #0f172a;
  --color-foreground: #f8fafc;
  
  /* Spacing tokens */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Typography tokens */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
}`}</code>
                </pre>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`:root {
  /* Color tokens */
  --color-primary: #d946ef;
  --color-secondary: #8b5cf6;
  --color-background: #0f172a;
  --color-foreground: #f8fafc;
  
  /* Spacing tokens */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Typography tokens */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
}`, 'css-variables')}
              className="transition-opacity"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'css-variables' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
              Copy CSS Variables
            </Button>
          </div>
              </CardContent>
            </Card>

      {/* Tailwind Integration */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
          <CardTitle className="text-xl text-slate-100">Tailwind CSS Integration</CardTitle>
          <CardDescription>Extending Tailwind with design tokens</CardDescription>
                  </CardHeader>
                  <CardContent>
          <div className="space-y-4">
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
      },
      fontSize: {
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
      }
    }
  }
}`}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
      },
      fontSize: {
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
      }
    }
  }
}`, 'tailwind-config')}
              className="transition-opacity"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'tailwind-config' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
              Copy Tailwind Config
            </Button>
          </div>
                  </CardContent>
                </Card>

      {/* JavaScript/TypeScript Usage */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
          <CardTitle className="text-xl text-slate-100">JavaScript/TypeScript Usage</CardTitle>
          <CardDescription>Using tokens in component libraries</CardDescription>
                  </CardHeader>
                  <CardContent>
          <div className="space-y-4">
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`// tokens.ts
export const tokens = {
  colors: {
    primary: '#d946ef',
    secondary: '#8b5cf6',
    background: '#0f172a',
    foreground: '#f8fafc',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontSizes: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    }
  }
} as const;

// Usage in components
import { tokens } from './tokens';

const Button = styled.button\`
  background-color: \${tokens.colors.primary};
  padding: \${tokens.spacing.md};
  font-size: \${tokens.typography.fontSizes.base};
\`;`}</code>
                    </pre>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`// tokens.ts
export const tokens = {
  colors: {
    primary: '#d946ef',
    secondary: '#8b5cf6',
    background: '#0f172a',
    foreground: '#f8fafc',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontSizes: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    }
  }
} as const;`, 'js-tokens')}
              className="transition-opacity"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'js-tokens' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
              Copy Token Export
            </Button>
          </div>
                  </CardContent>
                </Card>
    </div>
  )
} 