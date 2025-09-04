"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  const [activeSection, setActiveSection] = useState("overview")

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
                <Sun className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">24</div>
                <div className="text-xs text-slate-400">Shadow Variants</div>
                <div className="text-xs text-blue-400 mt-1">Dark optimised</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Box className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">12</div>
                <div className="text-xs text-slate-400">Blur Effects</div>
                <div className="text-xs text-fuchsia-400 mt-1">Glass morphism</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">95%</div>
                <div className="text-xs text-slate-400">Performance</div>
                <div className="text-xs text-green-400 mt-1">Hardware accel</div>
              </CardContent>
            </Card>
          </div>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30 mb-4">
                Elevation System v2.0
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                Depth Through Light & Shadow
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Create visual hierarchy and depth with our comprehensive elevation system. 
                Designed specifically for dark interfaces with glassmorphic effects.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-12">
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm shadow-2xl shadow-slate-900/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-100 text-xl">Elevation System</CardTitle>
                    <CardDescription>Shadows, depth, and layering for modern interfaces</CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label className="text-slate-300 text-sm font-medium">Viewing:</Label>
                    <Select value={activeSection} onValueChange={setActiveSection}>
                      <SelectTrigger className="w-48 bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="overview" className="hover:bg-slate-700">
                          <div className="flex items-center gap-2">
                            <Layers className="h-4 w-4 text-purple-400" />
                            <span>Overview</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="shadows" className="hover:bg-slate-700">
                          <div className="flex items-center gap-2">
                            <Box className="h-4 w-4 text-blue-400" />
                            <span>Shadow Tokens</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="blur" className="hover:bg-slate-700">
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4 text-yellow-400" />
                            <span>Blur Effects</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="usage" className="hover:bg-slate-700">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-green-400" />
                            <span>Implementation</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Section Content */}
                {activeSection === "overview" && (
                  <OverviewTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                )}

                {activeSection === "shadows" && (
                  <ShadowsTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                )}

                {activeSection === "blur" && (
                  <BlurTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                )}

                {activeSection === "usage" && (
                  <UsageTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                )}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

// Placeholder tab components - you would need to implement these based on your original content
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
          <p className="text-slate-300 mb-4">
            The elevation system provides 8 distinct levels of depth, each serving specific UI purposes from surface elements to modal overlays.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function ShadowsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Shadow Tokens</CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Pre-defined shadow values optimised for dark interfaces.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 mb-4">
            24 shadow variants across 8 elevation levels, each carefully crafted for optimal contrast and depth perception.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function BlurTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Blur Effects</CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Glassmorphic effects and backdrop blur for modern interfaces.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 mb-4">
            12 blur effects ranging from subtle backdrop filters to prominent glass morphism effects.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function UsageTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Implementation Guide</CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            How to use elevation in your components and layouts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 mb-4">
            Best practices for applying elevation levels, combining shadows with blur, and maintaining performance.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
