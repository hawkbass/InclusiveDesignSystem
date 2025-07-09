"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Copy, Settings, X, Eye, Code2, Download, ExternalLink, Sparkles, Palette, Sun, Moon, Monitor, CheckCircle2, Lightbulb, Brush, Zap, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

export default function Theming() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [currentTheme, setCurrentTheme] = useState("dark")
  const [previewTheme, setPreviewTheme] = useState("default")

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
                  <h1 className="text-2xl font-bold text-slate-100">Theming</h1>
                  <p className="text-sm text-slate-400">Customizable themes and appearance settings</p>
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
                    Theme Kit
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    CSS Variables
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
                  Theme System
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Brush className="w-3 h-3 mr-1" />
                  Customizable
                </Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  CSS Variables
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Theming System
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Flexible theme customization with CSS variables, supporting light/dark modes and custom brand themes. 
                Build consistent, accessible interfaces that adapt to any design requirements.
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
                      value="themes"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Sun className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Themes
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="customization"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Brush className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Custom
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="implementation"
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
                        Code
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

              <TabsContent value="themes" className="space-y-8">
                <ThemesTab 
                  currentTheme={currentTheme}
                  setCurrentTheme={setCurrentTheme}
                  previewTheme={previewTheme}
                  setPreviewTheme={setPreviewTheme}
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  safeAnimationSpeed={safeAnimationSpeed}
                />
              </TabsContent>

              <TabsContent value="customization" className="space-y-8">
                <CustomizationTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="implementation" className="space-y-8">
                <ImplementationTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
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
  const themeFeatures = [
    {
      title: "CSS Variables",
      description: "Semantic design tokens using CSS custom properties",
      icon: Code2,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      features: ["Real-time theme switching", "No JavaScript required", "Browser native support", "Performance optimized"]
    },
    {
      title: "Dark Mode",
      description: "Built-in light and dark theme support",
      icon: Moon,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      features: ["System preference detection", "Manual toggle support", "Consistent contrast ratios", "Accessibility compliant"]
    },
    {
      title: "Brand Themes",
      description: "Custom themes for your organization",
      icon: Brush,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      features: ["Custom color palettes", "Typography overrides", "Component variants", "Brand consistency"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Theme Features */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Theme System Features</CardTitle>
          <CardDescription>Comprehensive theming capabilities for modern applications</CardDescription>
                </CardHeader>
                <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {themeFeatures.map((feature, index) => (
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

      {/* Theme Architecture */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Theme Architecture</CardTitle>
          <CardDescription>How themes work in the design system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300">Design Tokens</h3>
              <div className="space-y-3">
                {[
                  "Semantic color naming (primary, secondary, background)",
                  "Typography scale with consistent ratios",
                  "Spacing system based on 8px grid",
                  "Shadow and border radius standards"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Palette className="h-4 w-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300">Implementation</h3>
              <div className="space-y-3">
                {[
                  "CSS custom properties for dynamic theming",
                  "Automatic dark mode with media queries",
                  "Component-level theme overrides",
                  "Runtime theme switching support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Code2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
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

function ThemesTab({ currentTheme, setCurrentTheme, previewTheme, setPreviewTheme, onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  const themes = [
    {
      id: "light",
      name: "Light Theme",
      description: "Clean, bright interface for daytime use",
      icon: Sun,
      preview: {
        background: "bg-white",
        text: "text-slate-900",
        accent: "bg-blue-500",
        border: "border-slate-200"
      }
    },
    {
      id: "dark",
      name: "Dark Theme", 
      description: "Easy on the eyes for low-light environments",
      icon: Moon,
      preview: {
        background: "bg-slate-900",
        text: "text-slate-100",
        accent: "bg-fuchsia-500",
        border: "border-slate-700"
      }
    },
    {
      id: "system",
      name: "System Theme",
      description: "Automatically follows system preference",
      icon: Monitor,
      preview: {
        background: "bg-gradient-to-br from-slate-100 to-slate-900",
        text: "text-slate-600",
        accent: "bg-gradient-to-r from-blue-500 to-fuchsia-500",
        border: "border-slate-400"
      }
    }
  ]

  return (
    <div className="space-y-8">
      {/* Theme Selector */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Available Themes</CardTitle>
          <CardDescription>Choose from built-in themes or create your own</CardDescription>
                </CardHeader>
                <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <Card 
                key={theme.id} 
                className={`cursor-pointer transition-all group ${
                  currentTheme === theme.id 
                    ? 'bg-fuchsia-500/20 border-fuchsia-500/50' 
                    : 'bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50'
                }`}
                style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                onClick={() => setCurrentTheme(theme.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${theme.preview.background} rounded-lg border ${theme.preview.border} flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <theme.icon className={`h-5 w-5 ${theme.preview.text}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {theme.name}
                      </h3>
                      <p className="text-xs text-slate-400">{theme.description}</p>
                    </div>
                  </div>
                  
                  {/* Theme Preview */}
                  <div className={`${theme.preview.background} rounded-lg p-4 ${theme.preview.border} border`}>
                    <div className={`${theme.preview.text} text-sm mb-2`}>Sample Content</div>
                    <div className={`${theme.preview.accent} h-2 rounded-full mb-2 opacity-80`}></div>
                    <div className={`${theme.preview.text} opacity-60 text-xs`}>Preview text and elements</div>
                  </div>
                  
                  {currentTheme === theme.id && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-fuchsia-300">
                      <CheckCircle2 className="h-3 w-3" />
                      Currently Active
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Theme Usage */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Theme Implementation</CardTitle>
              <CardDescription className="mt-2">How to apply themes in your application</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('theme-implementation', 'theme-impl')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'theme-impl' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
                </CardHeader>
                <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-slate-200 mb-3">CSS Class Method</h4>
              <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                <code className="text-slate-300">{`<!-- Apply theme via CSS class -->
<html class="dark">
  <!-- Dark theme applied to entire app -->
</html>

<!-- Or apply to specific sections -->
<div class="light-theme">
  <!-- Light theme for this section only -->
</div>`}</code>
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-200 mb-3">Data Attribute Method</h4>
              <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                <code className="text-slate-300">{`<!-- Apply theme via data attribute -->
<html data-theme="dark">
  <!-- Theme applied via attribute -->
</html>

<!-- JavaScript theme switching -->
document.documentElement.setAttribute('data-theme', 'light')`}</code>
                  </pre>
            </div>
          </div>
                </CardContent>
              </Card>
    </div>
  )
}

function CustomizationTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* Custom Theme Creation */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Creating Custom Themes</CardTitle>
              <CardDescription className="mt-2">Step-by-step guide to building your own theme</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('custom-theme-code', 'custom-theme')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'custom-theme' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
                </CardHeader>
                <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-fuchsia-300">1. Define Color Palette</h4>
                <div className="space-y-3">
                  {[
                    { label: "Primary", value: "#6366f1", description: "Main brand color" },
                    { label: "Secondary", value: "#8b5cf6", description: "Accent color" },
                    { label: "Background", value: "#0f172a", description: "Main background" },
                    { label: "Foreground", value: "#f1f5f9", description: "Text color" }
                  ].map((color, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <div className={`w-8 h-8 rounded border border-slate-600`} style={{ backgroundColor: color.value }}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-200">{color.label}</div>
                        <div className="text-xs text-slate-400">{color.description}</div>
                      </div>
                      <code className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">{color.value}</code>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-fuchsia-300">2. CSS Variables</h4>
                <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
                  <code className="text-slate-300">{`.my-theme {
  --primary: 231 76% 60%;
  --secondary: 262 83% 72%;
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;
  --muted: 217 33% 17%;
  --accent: 217 33% 17%;
  --destructive: 0 62% 50%;
  --border: 217 33% 17%;
  --input: 217 33% 17%;
  --ring: 231 76% 60%;
  --radius: 0.5rem;
}`}</code>
                  </pre>
              </div>
            </div>
          </div>
                </CardContent>
              </Card>

      {/* Brand Theme Examples */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
          <CardTitle className="text-xl text-slate-100">Brand Theme Examples</CardTitle>
          <CardDescription>Real-world examples of custom themes</CardDescription>
                </CardHeader>
                <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Corporate Blue",
                colors: ["#1e40af", "#3b82f6", "#dbeafe", "#1e293b"],
                description: "Professional, trustworthy"
              },
              {
                name: "Startup Green",
                colors: ["#059669", "#10b981", "#d1fae5", "#064e3b"],
                description: "Fresh, innovative"
              },
              {
                name: "Creative Purple",
                colors: ["#7c3aed", "#a855f7", "#e9d5ff", "#581c87"],
                description: "Bold, creative"
              }
            ].map((theme, index) => (
              <Card key={theme.name} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <h4 className="font-medium text-slate-100 mb-2 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    {theme.name}
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">{theme.description}</p>
                  <div className="flex gap-2 mb-4">
                    {theme.colors.map((color, idx) => (
                      <div 
                        key={idx} 
                        className="w-8 h-8 rounded border border-slate-600 group-hover:scale-110 transition-transform" 
                        style={{ backgroundColor: color, transitionDuration: `${1 / safeAnimationSpeed}s` }}
                      ></div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Copy Theme
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

function ImplementationTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* JavaScript Implementation */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">JavaScript Theme Switching</CardTitle>
              <CardDescription className="mt-2">Dynamic theme management with JavaScript</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('js-theme-code', 'js-theme')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'js-theme' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
                    </CardHeader>
                    <CardContent>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`// Theme management utility
class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || this.getSystemTheme()
    this.applyTheme(this.theme)
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' : 'light'
  }

  getStoredTheme() {
    return localStorage.getItem('theme')
  }

  setTheme(theme) {
    this.theme = theme
    localStorage.setItem('theme', theme)
    this.applyTheme(theme)
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.className = theme
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark'
    this.setTheme(newTheme)
  }
}

// Initialize theme manager
const themeManager = new ThemeManager()

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      themeManager.setTheme(e.matches ? 'dark' : 'light')
    }
  })`}</code>
          </pre>
                    </CardContent>
                  </Card>

      {/* React Implementation */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">React Theme Context</CardTitle>
              <CardDescription className="mt-2">Theme provider for React applications</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('react-theme-code', 'react-theme')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'react-theme' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
                    </CardHeader>
                    <CardContent>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' : 'light'
      root.setAttribute('data-theme', systemTheme)
    } else {
      root.setAttribute('data-theme', theme)
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// Usage in component
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}`}</code>
                      </pre>
                    </CardContent>
                  </Card>

      {/* Best Practices */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Implementation Best Practices</CardTitle>
          <CardDescription>Guidelines for robust theme implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Performance</h4>
              <div className="space-y-3">
                {[
                  "Use CSS custom properties for instant theme switching",
                  "Avoid JavaScript-based color calculations",
                  "Minimize layout shifts during theme changes",
                  "Cache theme preferences in localStorage"
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Zap className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Accessibility</h4>
              <div className="space-y-3">
                {[
                  "Respect user's system theme preference",
                  "Maintain sufficient color contrast ratios",
                  "Test themes with screen readers",
                  "Provide clear theme toggle controls"
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <Globe className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
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