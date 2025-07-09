"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Copy, Settings, X, Eye, Code2, Download, ExternalLink, Sparkles, Shield, Globe, Users, CheckCircle2, AlertTriangle, Lightbulb, Award, Zap, Target, ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

// Simple contrast checker utility
function getLuminance(hex: string) {
  const rgb = hex.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16) / 255) || [0,0,0];
  const [r, g, b] = rgb.map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function getContrast(hex1: string, hex2: string) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}
function passesWCAG(contrast: number, large = false) {
  return large ? contrast >= 3 : contrast >= 4.5;
}

export default function Accessibility() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("principles")
  
  // For live contrast checker
  const [fg, setFg] = useState("#222222");
  const [bg, setBg] = useState("#ffffff");
  const contrast = getContrast(fg, bg);
  const passes = passesWCAG(contrast);
  
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
                  <h1 className="text-2xl font-bold text-slate-100">Accessibility</h1>
                  <p className="text-sm text-slate-400">WCAG 2.1 AA compliance and inclusive design</p>
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
                    Checklist
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    WCAG Guide
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
                  <Shield className="w-3 h-3 mr-1" />
                  WCAG 2.1 AA
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Globe className="w-3 h-3 mr-1" />
                  Inclusive Design
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Award className="w-3 h-3 mr-1" />
                  Compliant
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Accessibility
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Accessibility is a core principle of the Inclusive Design System. All components are built to be usable by everyone, 
                including people with disabilities. Following WCAG 2.1 AA standards and proven inclusive design practices.
              </p>
            </div>
          </section>

          {/* Main Content Tabs */}
          <section className="mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                {/* Enhanced Tab Navigation with Component Gallery Styling */}
                <div className="relative">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                    <TabsTrigger 
                      value="principles"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Target className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Principles
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="examples"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Eye className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Examples
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="aria"
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
                        ARIA
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="contrast"
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
                        Contrast
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="testing"
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
                        Testing
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="faq"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Lightbulb className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        FAQ
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
                </div>
              </div>

              <TabsContent value="principles">
                <PrinciplesTab safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="examples">
                <ExamplesTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="aria">
                <AriaTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="contrast">
                <ContrastTab fg={fg} setFg={setFg} bg={bg} setBg={setBg} contrast={contrast} passes={passes} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="testing">
                <TestingTab safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="faq">
                <FaqTab safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  )
}

// Tab Components
function PrinciplesTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* POUR Principles */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-2xl text-slate-100">The POUR Principles</CardTitle>
          <CardDescription>Foundation of accessible design according to WCAG</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Perceivable",
                description: "Information and UI must be presentable to users in ways they can perceive",
                icon: Eye,
                example: "All icons in the dashboard have text labels and sufficient color contrast",
                color: "text-blue-400"
              },
              {
                title: "Operable", 
                description: "UI components and navigation must be operable by all users",
                icon: Target,
                example: "All dashboard actions are keyboard accessible and have visible focus states",
                color: "text-green-400"
              },
              {
                title: "Understandable",
                description: "Information and operation of the UI must be understandable",
                icon: Lightbulb,
                example: "Form errors are clearly described and instructions are provided for each field",
                color: "text-yellow-400"
              },
              {
                title: "Robust",
                description: "Content must be robust enough for assistive technologies",
                icon: Shield,
                example: "All components use semantic HTML and ARIA only when necessary",
                color: "text-purple-400"
              }
            ].map((principle, index) => (
              <Card key={principle.title} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <principle.icon className={`h-6 w-6 ${principle.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors mb-2" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {principle.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{principle.description}</p>
                      <div className="text-xs text-slate-500">
                        <strong>Example:</strong> {principle.example}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
                </div>
              </CardContent>
            </Card>

      {/* Accessibility Guidelines */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100">Legal & Compliance</CardTitle>
            <CardDescription>Regulatory requirements and standards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-fuchsia-300 mb-2">Key Standards</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  WCAG 2.1 AA (Global Standard)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  ADA (Americans with Disabilities Act)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  EN 301 549 (European Standard)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Section 508 (US Federal)
                </li>
              </ul>
            </div>
            <Alert className="bg-slate-900/50 border-slate-700">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Compliance Note</AlertTitle>
              <AlertDescription className="text-sm">
                Non-compliance can result in legal action, loss of contracts, and reputational damage. 
                Maintain an Accessibility Statement and VPAT for your product.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100">Accessibility Personas</CardTitle>
            <CardDescription>Understanding diverse user needs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Amira", disability: "Screen Reader User", need: "Keyboard navigation and ARIA labels" },
              { name: "Ben", disability: "Low Vision", need: "High contrast and scalable text" },
              { name: "Chris", disability: "Motor Impairment", need: "Keyboard-only navigation" },
              { name: "Dana", disability: "Neurodivergent", need: "Clear instructions and consistent layouts" }
            ].map((persona, idx) => (
              <div key={persona.name} className="p-3 bg-slate-900/30 rounded-lg">
                <div className="font-medium text-slate-200 text-sm">{persona.name} ({persona.disability})</div>
                <div className="text-xs text-slate-400 mt-1">{persona.need}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ExamplesTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* Accessible Button Example */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Accessible Button</CardTitle>
              <CardDescription className="mt-2">Proper button implementation with accessibility features</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('<Button aria-label="Submit application">Submit</Button>', 'accessible-button')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'accessible-button' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
              </CardHeader>
              <CardContent>
          <div className="space-y-4">
            <Button aria-label="Submit application" className="bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
              Submit
            </Button>
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`<Button aria-label="Submit application">Submit</Button>`}</code>
            </pre>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="p-3 bg-slate-900/30 rounded-lg">
                <div className="font-medium text-green-400">Screen Reader Experience:</div>
                <div className="text-slate-400">"Submit application, button"</div>
              </div>
                </div>
                </div>
              </CardContent>
            </Card>

      {/* Accessible Form Example */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-xl text-slate-100">Accessible Form with Error Handling</CardTitle>
          <CardDescription>Form with proper labels, error association, and validation</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="space-y-4">
            <form className="space-y-4" aria-label="Candidate Application Form">
              <div>
                <label htmlFor="email-example" className="block text-slate-200 mb-1 font-medium">Email*</label>
                <input 
                  id="email-example" 
                  name="email-example" 
                  type="email" 
                  className="w-full px-3 py-2 rounded bg-slate-800 border border-red-500 text-slate-100 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-colors" 
                  placeholder="Enter your email" 
                  aria-invalid="true" 
                  aria-describedby="email-error-desc"
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                />
                <span id="email-error-desc" className="text-red-400 text-xs flex items-center gap-1 mt-1">
                  <AlertTriangle className="h-3 w-3" />
                  Please enter a valid email address.
                </span>
                </div>
            </form>
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`<input 
  id="email" 
  type="email" 
  aria-invalid="true" 
  aria-describedby="email-error-desc" 
/>
<span id="email-error-desc">
  Please enter a valid email address.
</span>`}</code>
                </pre>
                </div>
              </CardContent>
            </Card>

      {/* Accessible Notification */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-xl text-slate-100">Accessible Notification</CardTitle>
          <CardDescription>Toast notification with screen reader announcements</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="space-y-4">
            <Alert role="status" aria-live="polite" className="bg-green-500/20 border-green-500/30 text-green-300">
              <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Application submitted</AlertTitle>
              <AlertDescription>Your application has been received and is being processed.</AlertDescription>
                </Alert>
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`<Alert role="status" aria-live="polite">
  <AlertTitle>Application submitted</AlertTitle>
  <AlertDescription>
    Your application has been received.
  </AlertDescription>
</Alert>`}</code>
                </pre>
                </div>
              </CardContent>
            </Card>
    </div>
  )
}

function AriaTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* ARIA Roles and Properties */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-2xl text-slate-100">ARIA Reference</CardTitle>
          <CardDescription>Essential ARIA roles and properties for accessible interfaces</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-slate-300">Role/Property</th>
                  <th className="text-left p-3 text-slate-300">Purpose</th>
                  <th className="text-left p-3 text-slate-300">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { attribute: "role=\"button\"", purpose: "Identifies an element as a button", example: "<div role=\"button\">Click me</div>" },
                  { attribute: "aria-label", purpose: "Provides an accessible name", example: "<button aria-label=\"Close dialog\">×</button>" },
                  { attribute: "aria-labelledby", purpose: "References another element for the label", example: "<div aria-labelledby=\"title\"></div>" },
                  { attribute: "aria-describedby", purpose: "References another element for description", example: "<input aria-describedby=\"error-msg\" />" },
                  { attribute: "aria-live", purpose: "Announces dynamic content changes", example: "<div aria-live=\"polite\">Status updated</div>" },
                  { attribute: "role=\"dialog\"", purpose: "Identifies a modal dialog", example: "<div role=\"dialog\" aria-modal=\"true\"></div>" },
                  { attribute: "tabIndex", purpose: "Controls keyboard focus order", example: "<div tabIndex=\"0\">Focusable</div>" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <td className="p-3 font-mono text-fuchsia-300">{row.attribute}</td>
                    <td className="p-3 text-slate-300">{row.purpose}</td>
                    <td className="p-3 text-slate-400 font-mono text-xs">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
                </div>
              </CardContent>
            </Card>

      {/* Keyboard Navigation */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-xl text-slate-100">Keyboard Navigation Patterns</CardTitle>
          <CardDescription>Standard keyboard interactions for common UI patterns</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Standard Keys</h4>
              <div className="space-y-3">
                {[
                  { key: "Tab / Shift+Tab", action: "Move focus between interactive elements" },
                  { key: "Enter / Space", action: "Activate buttons, links, toggles" },
                  { key: "Escape", action: "Close dialogs, menus, popovers" },
                  { key: "Arrow Keys", action: "Navigate within menus, tabs, radio groups" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <kbd className="text-xs bg-slate-700 px-2 py-1 rounded font-mono text-slate-200 min-w-fit">{item.key}</kbd>
                    <span className="text-slate-300 text-sm">{item.action}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Advanced Navigation</h4>
              <div className="space-y-3">
                {[
                  { key: "Home / End", action: "Jump to first/last item in lists" },
                  { key: "Page Up/Down", action: "Scroll large content areas" },
                  { key: "F6", action: "Move between page sections" },
                  { key: "Ctrl+Home", action: "Go to beginning of document" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <kbd className="text-xs bg-slate-700 px-2 py-1 rounded font-mono text-slate-200 min-w-fit">{item.key}</kbd>
                    <span className="text-slate-300 text-sm">{item.action}</span>
                  </div>
                ))}
              </div>
                  </div>
                </div>
              </CardContent>
            </Card>

      {/* ARIA Best Practices */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-xl text-slate-100">ARIA Best Practices</CardTitle>
          <CardDescription>Guidelines for proper ARIA usage</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-green-400 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Do This
                </h4>
                <div className="space-y-3">
                  {[
                    "Use semantic HTML first, ARIA second",
                    "Test with actual screen readers",
                    "Provide meaningful labels and descriptions",
                    "Announce important state changes",
                    "Manage focus properly in dynamic content"
                  ].map((practice, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0 mt-0.5" />
                      {practice}
                  </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-red-400 flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Avoid This
                </h4>
                <div className="space-y-3">
                  {[
                    "Using ARIA when HTML is sufficient",
                    "Adding ARIA without testing",
                    "Overusing aria-label on everything",
                    "Forgetting to update ARIA states",
                    "Breaking keyboard navigation"
                  ].map((mistake, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <X className="h-3 w-3 text-red-400 flex-shrink-0 mt-0.5" />
                      {mistake}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
              </CardContent>
            </Card>
    </div>
  )
}

function ContrastTab({ fg, setFg, bg, setBg, contrast, passes, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* Live Contrast Checker */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <CardTitle className="text-2xl text-slate-100">WCAG Color Contrast Checker</CardTitle>
          <CardDescription>Test color pairs for AA/AAA compliance with live preview</CardDescription>
              </CardHeader>
              <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                <label className="block text-slate-200 mb-2 font-medium">Foreground Color</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={fg} 
                    onChange={e => setFg(e.target.value)} 
                    className="w-12 h-10 border border-slate-700 rounded cursor-pointer" 
                  />
                  <span className="text-sm text-slate-400 font-mono">{fg}</span>
                </div>
                  </div>
                  <div>
                <label className="block text-slate-200 mb-2 font-medium">Background Color</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={bg} 
                    onChange={e => setBg(e.target.value)} 
                    className="w-12 h-10 border border-slate-700 rounded cursor-pointer" 
                  />
                  <span className="text-sm text-slate-400 font-mono">{bg}</span>
                  </div>
                  </div>
              <div className="text-center">
                <div className="text-slate-200 mb-2 font-medium">Contrast Ratio</div>
                <div className="text-3xl font-bold mb-1" style={{ color: passes ? '#22d3ee' : '#ef4444' }}>
                  {contrast.toFixed(2)}:1
                </div>
                <div className={`text-sm ${passes ? "text-green-400" : "text-red-400"}`}>
                  {passes ? "✓ Pass (AA)" : "✗ Fail (AA)"}
                </div>
                    </div>
                    </div>

            <div className="p-6 rounded-lg border border-slate-700" style={{ background: bg, color: fg }}>
              <h3 className="text-xl font-bold mb-2">Sample Heading</h3>
              <p className="mb-4">This is normal body text that demonstrates how readable your color combination is. WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal text.</p>
              <button className="px-4 py-2 rounded font-medium transition-opacity hover:opacity-80" style={{ background: fg, color: bg }}>
                Sample Button
              </button>
                    </div>
                  </div>
        </CardContent>
      </Card>

      {/* Contrast Requirements */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">WCAG Contrast Requirements</CardTitle>
          <CardDescription>Understanding compliance levels and requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-slate-300">Content Type</th>
                  <th className="text-left p-3 text-slate-300">AA Level</th>
                  <th className="text-left p-3 text-slate-300">AAA Level</th>
                  <th className="text-left p-3 text-slate-300">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Normal Text", aa: "4.5:1", aaa: "7:1", notes: "Standard body text, less than 18pt or 14pt bold" },
                  { type: "Large Text", aa: "3:1", aaa: "4.5:1", notes: "18pt+ regular or 14pt+ bold text" },
                  { type: "UI Components", aa: "3:1", aaa: "4.5:1", notes: "Buttons, form controls, focus indicators" },
                  { type: "Graphics", aa: "3:1", aaa: "4.5:1", notes: "Icons, charts, essential graphics" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800">
                    <td className="p-3 text-slate-300 font-medium">{row.type}</td>
                    <td className="p-3 text-blue-400 font-mono">{row.aa}</td>
                    <td className="p-3 text-green-400 font-mono">{row.aaa}</td>
                    <td className="p-3 text-slate-400 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Color Examples */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Contrast Examples</CardTitle>
          <CardDescription>Real-world examples of passing and failing color combinations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Excellent (21:1)", fg: "#ffffff", bg: "#000000", status: "pass" },
              { label: "Good (8.6:1)", fg: "#ffffff", bg: "#2563eb", status: "pass" },
              { label: "Warning (3.1:1)", fg: "#777777", bg: "#fde047", status: "warning" },
              { label: "Fail (2.6:1)", fg: "#777777", bg: "#cccccc", status: "fail" }
            ].map((example, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${
                example.status === 'pass' ? 'border-green-500/50' : 
                example.status === 'warning' ? 'border-yellow-500/50' : 'border-red-500/50'
              }`}>
                <div className={`font-medium mb-2 ${
                  example.status === 'pass' ? 'text-green-400' : 
                  example.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                }`}>{example.label}</div>
                <div 
                  className="p-3 rounded text-center font-medium"
                  style={{ background: example.bg, color: example.fg }}
                >
                  Sample Text
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono">
                  {example.fg} on {example.bg}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TestingTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Testing Protocol */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Accessibility Testing Protocol</CardTitle>
          <CardDescription>Comprehensive testing strategy for accessibility compliance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Manual Testing Steps</h4>
              <div className="space-y-3">
                {[
                  "Test all workflows using only keyboard navigation",
                  "Verify visible focus indicators on interactive elements", 
                  "Use screen readers to navigate all content",
                  "Check color contrast for all text and UI elements",
                  "Test with high zoom levels (200%+)",
                  "Validate ARIA roles and properties",
                  "Test with custom OS/browser settings"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <div className="w-6 h-6 bg-fuchsia-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-fuchsia-300">{idx + 1}</span>
                    </div>
                    <span className="text-slate-300 text-sm">{step}</span>
                  </div>
                ))}
                    </div>
                    </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Automated Testing</h4>
              <div className="space-y-3">
                {[
                  "Integrate axe-core into your test suite",
                  "Run Lighthouse accessibility audits",
                  "Use WAVE browser extension for page scanning",
                  "Set up Pa11y for CI/CD pipeline integration",
                  "Configure jest-axe for component testing",
                  "Generate accessibility reports automatically",
                  "Block deployments on critical violations"
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{tool}</span>
                  </div>
                ))}
                </div>
                    </div>
                    </div>
        </CardContent>
      </Card>

      {/* Testing Tools */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Recommended Testing Tools</CardTitle>
          <CardDescription>Essential tools for accessibility testing and validation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Screen Readers",
                tools: [
                  { name: "NVDA", platform: "Windows", free: true },
                  { name: "JAWS", platform: "Windows", free: false },
                  { name: "VoiceOver", platform: "macOS/iOS", free: true },
                  { name: "TalkBack", platform: "Android", free: true }
                ]
              },
              {
                category: "Browser Extensions",
                tools: [
                  { name: "axe DevTools", platform: "All browsers", free: true },
                  { name: "WAVE", platform: "Chrome/Firefox", free: true },
                  { name: "Lighthouse", platform: "Chrome", free: true },
                  { name: "Accessibility Insights", platform: "Edge/Chrome", free: true }
                ]
              },
              {
                category: "Command Line",
                tools: [
                  { name: "Pa11y", platform: "Node.js", free: true },
                  { name: "axe-cli", platform: "Node.js", free: true },
                  { name: "jest-axe", platform: "Jest", free: true },
                  { name: "cypress-axe", platform: "Cypress", free: true }
                ]
              }
            ].map((category, idx) => (
              <div key={category.category} className="space-y-4">
                <h4 className="font-medium text-fuchsia-300">{category.category}</h4>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIdx) => (
                    <div key={tool.name} className="p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-slate-200">{tool.name}</span>
                        {tool.free && <Badge className="bg-green-500/20 text-green-300 text-xs">Free</Badge>}
                    </div>
                      <span className="text-xs text-slate-400">{tool.platform}</span>
                    </div>
                  ))}
                    </div>
                  </div>
            ))}
                </div>
              </CardContent>
            </Card>

      {/* CI/CD Integration */}
      <Card className="bg-slate-800/30 border-slate-700/50">
              <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">CI/CD Integration</CardTitle>
              <CardDescription className="mt-2">Automate accessibility testing in your development pipeline</CardDescription>
            </div>
          </div>
              </CardHeader>
              <CardContent>
          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
            <code className="text-slate-300">{`# GitHub Actions example
name: Accessibility Tests
on: [push, pull_request]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm run test:a11y
      
# package.json scripts
{
  "scripts": {
    "test:a11y": "pa11y-ci --sitemap http://localhost:3000/sitemap.xml",
    "test:axe": "jest --testPathPattern=a11y"
  }
}`}</code>
                </pre>
        </CardContent>
      </Card>
    </div>
  )
}

function FaqTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const faqs = [
    {
      question: "How do I ensure my recruitment dashboard is accessible?",
      answer: "Test all workflows with keyboard and screen readers, use automated tools in CI, ensure proper color contrast, and provide alternative text for all meaningful images and charts."
    },
    {
      question: "What about accessibility for charts and data visualizations?",
      answer: "Use ARIA roles and descriptions, provide data tables as alternatives, ensure keyboard navigation, and consider sonification for complex data."
    },
    {
      question: "How do I handle accessibility regressions?",
      answer: "Add accessibility checks to your CI/CD pipeline, block releases on critical issues, maintain an accessibility testing checklist, and conduct regular audits."
    },
    {
      question: "How do I report accessibility compliance?",
      answer: "Generate a VPAT (Voluntary Product Accessibility Template) or accessibility statement, document your testing process, and maintain compliance evidence."
    },
    {
      question: "How do I handle third-party widgets and integrations?",
      answer: "Test third-party components thoroughly, document accessibility limitations, provide accessible alternatives when possible, and consider replacing non-compliant widgets."
    },
    {
      question: "What's the difference between AA and AAA compliance?",
      answer: "AA is the standard for most web applications with 4.5:1 contrast ratio. AAA is enhanced with 7:1 contrast ratio and stricter requirements, typically for specialized applications."
    }
  ]

  return (
    <div className="space-y-8">
      {/* FAQ Section */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Frequently Asked Questions</CardTitle>
          <CardDescription>Common accessibility questions and practical guidance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="w-full text-left p-4 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      {faq.question}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-fuchsia-300 transition-all group-data-[state=open]:rotate-90" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
            ))}
          </div>
              </CardContent>
            </Card>

      {/* Additional Resources */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
          <CardTitle className="text-xl text-slate-100">Additional Resources</CardTitle>
          <CardDescription>Learn more about accessibility and inclusive design</CardDescription>
                  </CardHeader>
                  <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Official Guidelines</h4>
              <div className="space-y-3">
                {[
                  { title: "WCAG 2.1 Guidelines", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
                  { title: "ARIA Authoring Practices", url: "https://www.w3.org/WAI/ARIA/apg/" },
                  { title: "Section 508 Standards", url: "https://www.section508.gov/" },
                  { title: "EN 301 549 Standard", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/" }
                ].map((resource, idx) => (
                  <a 
                    key={idx} 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors text-fuchsia-300 hover:text-fuchsia-200"
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    <ExternalLink className="h-4 w-4 inline mr-2" />
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Community Resources</h4>
              <div className="space-y-3">
                {[
                  { title: "A11y Project", url: "https://www.a11yproject.com/" },
                  { title: "WebAIM Resources", url: "https://webaim.org/" },
                  { title: "Deque University", url: "https://dequeuniversity.com/" },
                  { title: "Inclusive Design Guide", url: "https://guide.inclusivedesign.ca/" }
                ].map((resource, idx) => (
                  <a 
                    key={idx} 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors text-fuchsia-300 hover:text-fuchsia-200"
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    <ExternalLink className="h-4 w-4 inline mr-2" />
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
                  </CardContent>
                </Card>
    </div>
  )
} 