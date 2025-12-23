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
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Enhanced Header */}
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-slate-900/20">
          <div className="px-6 lg:px-12 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Elevation</h1>
                  <p className="text-sm text-muted-foreground">Shadows, depth, and layering system</p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className={`transition-all ${settingsOpen ? 'bg-fuchsia-500/20 border-primary/50' : 'hover:bg-card'}`}
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colours" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <Download className="h-4 w-4 mr-2" />
                    Export Shadows
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Figma Plugin
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            {settingsOpen && (
              <div className="mt-4 p-4 bg-card/50 rounded-lg border border-border animate-in slide-in-from-top-2" style={{ animationDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-foreground">Interface Settings</h3>
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
                      <span className="text-xs text-muted-foreground font-mono">{safeAnimationSpeed}x</span>
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
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Mountain className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">8</div>
                <div className="text-xs text-muted-foreground">Elevation Levels</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Ready to use</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Sun className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">24</div>
                <div className="text-xs text-muted-foreground">Shadow Variants</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Dark optimised</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Box className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-xs text-muted-foreground">Blur Effects</div>
                <div className="text-xs text-primary mt-1">Glass morphism</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-xs text-muted-foreground">Performance</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Hardware accel</div>
              </CardContent>
            </Card>
          </div>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 mb-4">
                Elevation System v2.0
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Depth Through Light & Shadow
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create visual hierarchy and depth with our comprehensive elevation system. 
                Designed specifically for dark interfaces with glassmorphic effects.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-12">
            <Card className="bg-card/30 border-border/50 backdrop-blur-sm shadow-2xl shadow-slate-900/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground text-xl">Elevation System</CardTitle>
                    <CardDescription>Shadows, depth, and layering for modern interfaces</CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label className="text-foreground/80 text-sm font-medium">Viewing:</Label>
                    <Select value={activeSection} onValueChange={setActiveSection}>
                      <SelectTrigger className="w-48 bg-muted/50 border-border hover:bg-accent/70 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="overview" className="hover:bg-accent">
                          <div className="flex items-center gap-2">
                            <Layers className="h-4 w-4 text-purple-400" />
                            <span>Overview</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="shadows" className="hover:bg-accent">
                          <div className="flex items-center gap-2">
                            <Box className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <span>Shadow Tokens</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="blur" className="hover:bg-accent">
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4 text-yellow-400" />
                            <span>Blur Effects</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="usage" className="hover:bg-accent">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
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

// Elevation level definitions
const elevationLevels = [
  { level: 0, name: "Surface", shadow: "none", blur: "0", usage: "Base layer, backgrounds", examples: ["Page background", "Canvas"], zIndex: 0 },
  { level: 1, name: "Raised", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", blur: "0", usage: "Cards, subtle elevation", examples: ["List items", "Table rows"], zIndex: 10 },
  { level: 2, name: "Overlay", shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", blur: "4px", usage: "Floating elements", examples: ["Dropdowns", "Tooltips"], zIndex: 20 },
  { level: 3, name: "Sticky", shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", blur: "8px", usage: "Sticky headers, navigation", examples: ["App bar", "Tab bar"], zIndex: 30 },
  { level: 4, name: "Temporary", shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", blur: "12px", usage: "Temporary surfaces", examples: ["Snackbars", "Banners"], zIndex: 40 },
  { level: 5, name: "Popover", shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", blur: "16px", usage: "Popovers, menus", examples: ["Context menus", "Popovers"], zIndex: 50 },
  { level: 6, name: "Modal", shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)", blur: "24px", usage: "Modal dialogs", examples: ["Dialogs", "Sheets"], zIndex: 60 },
  { level: 7, name: "Alert", shadow: "0 25px 50px -12px rgb(0 0 0 / 0.35), 0 0 0 1px rgb(0 0 0 / 0.05)", blur: "32px", usage: "Critical overlays", examples: ["Alert dialogs", "Urgent notifications"], zIndex: 70 },
]

// Shadow token definitions
const shadowTokens = [
  { name: "shadow-xs", value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", css: "shadow-xs", tailwind: "shadow-sm", usage: "Subtle depth for cards" },
  { name: "shadow-sm", value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", css: "shadow-sm", tailwind: "shadow", usage: "Default card shadow" },
  { name: "shadow-md", value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", css: "shadow-md", tailwind: "shadow-md", usage: "Raised components" },
  { name: "shadow-lg", value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", css: "shadow-lg", tailwind: "shadow-lg", usage: "Dropdowns, popovers" },
  { name: "shadow-xl", value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", css: "shadow-xl", tailwind: "shadow-xl", usage: "Modals, dialogs" },
  { name: "shadow-2xl", value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", css: "shadow-2xl", tailwind: "shadow-2xl", usage: "High emphasis overlays" },
  { name: "shadow-inner", value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", css: "shadow-inner", tailwind: "shadow-inner", usage: "Pressed states, inputs" },
  { name: "shadow-glow", value: "0 0 20px rgb(217 70 239 / 0.3)", css: "shadow-glow", tailwind: "shadow-fuchsia-500/30", usage: "Primary focus states" },
]

// Blur effect definitions
const blurEffects = [
  { name: "blur-none", value: "0", css: "backdrop-blur-none", usage: "No blur effect", preview: "transparent" },
  { name: "blur-sm", value: "4px", css: "backdrop-blur-sm", usage: "Subtle glass effect", preview: "bg-card/80" },
  { name: "blur-md", value: "8px", css: "backdrop-blur-md", usage: "Medium glass morphism", preview: "bg-card/70" },
  { name: "blur-lg", value: "12px", css: "backdrop-blur-lg", usage: "Prominent glass effect", preview: "bg-card/60" },
  { name: "blur-xl", value: "16px", css: "backdrop-blur-xl", usage: "Strong glass morphism", preview: "bg-card/50" },
  { name: "blur-2xl", value: "24px", css: "backdrop-blur-2xl", usage: "Maximum blur for overlays", preview: "bg-card/40" },
  { name: "blur-3xl", value: "32px", css: "backdrop-blur-3xl", usage: "Extreme blur effect", preview: "bg-card/30" },
]

function OverviewTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Elevation Principles */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex items-center gap-3">
            <Layers className="h-6 w-6 text-purple-400" />
            Elevation Principles
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Our elevation system creates visual hierarchy through shadows, blur, and layering effects optimised for both light and dark interfaces.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-foreground/80">
            The elevation system provides <strong className="text-primary">8 distinct levels of depth</strong>, each serving specific UI purposes from surface elements to critical modal overlays. This systematic approach ensures consistent visual hierarchy across all components.
          </p>
          
          {/* Visual Hierarchy Diagram */}
          <div className="relative h-64 bg-gradient-to-b from-muted/30 to-muted/10 rounded-lg border border-border/50 overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center gap-4 p-6">
              {elevationLevels.slice(0, 5).map((level, idx) => (
                <div
                  key={level.level}
                  className="flex flex-col items-center"
                  style={{ height: `${(idx + 1) * 15 + 20}%` }}
                >
                  <div 
                    className="w-16 flex-1 bg-card border border-border/50 rounded-t-lg flex items-center justify-center transition-all hover:scale-105"
                    style={{ 
                      boxShadow: level.shadow,
                      transform: `translateY(${idx * -2}px)`
                    }}
                  >
                    <span className="text-xs font-bold text-foreground">{level.level}</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">{level.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-purple-500/20 text-purple-600 dark:text-purple-600 dark:text-purple-300 border-purple-500/30">
                Visual Hierarchy
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 8-Level System */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">The 8-Level Elevation System</CardTitle>
          <CardDescription>Each level serves a specific purpose in the UI hierarchy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {elevationLevels.map((level) => (
              <div 
                key={level.level}
                className="group p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                onClick={() => onCopyCode(`z-index: ${level.zIndex};\nbox-shadow: ${level.shadow};`, `level-${level.level}`)}
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Level {level.level}
                  </Badge>
                  {copiedCode === `level-${level.level}` ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{level.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{level.usage}</p>
                <div className="flex flex-wrap gap-1">
                  {level.examples.map((ex) => (
                    <span key={ex} className="text-xs bg-muted/50 text-muted-foreground px-2 py-0.5 rounded">
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-border/30">
                  <code className="text-xs text-primary/80">z-index: {level.zIndex}</code>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Design Principles */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Core Design Principles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-foreground">Hierarchy First</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Use elevation to communicate importance. Higher elevation = higher visual priority and user attention.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground">Performance Aware</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                All shadows use hardware-accelerated properties. Blur effects leverage GPU compositing for 60fps performance.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Eye className="h-5 w-5 text-purple-400" />
                </div>
                <h4 className="font-semibold text-foreground">Theme Adaptive</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Shadows adapt to light and dark modes automatically, maintaining optimal contrast and visibility.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ShadowsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Shadow Tokens Overview */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex items-center gap-3">
            <Box className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Shadow Tokens
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Pre-defined shadow values optimised for both light and dark interfaces. Click any shadow to copy its CSS value.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shadowTokens.map((shadow) => (
              <div
                key={shadow.name}
                className="group cursor-pointer"
                onClick={() => onCopyCode(`box-shadow: ${shadow.value};`, shadow.name)}
              >
                <div 
                  className="h-24 bg-card rounded-lg border border-border/50 mb-3 flex items-center justify-center transition-all hover:scale-105"
                  style={{ boxShadow: shadow.value }}
                >
                  <span className="text-sm font-medium text-foreground/60">{shadow.css}</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm font-medium text-foreground">{shadow.name}</code>
                  {copiedCode === shadow.name ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{shadow.usage}</p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {shadow.tailwind}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shadow Comparison */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Shadow Comparison</CardTitle>
          <CardDescription>Visual comparison of all shadow levels on a single element</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end justify-center gap-8 p-8 bg-muted/20 rounded-lg">
            {shadowTokens.slice(0, 6).map((shadow, idx) => (
              <div key={shadow.name} className="text-center">
                <div
                  className="w-20 h-20 bg-card rounded-lg border border-border/30 transition-all hover:scale-110"
                  style={{ boxShadow: shadow.value }}
                />
                <span className="text-xs text-muted-foreground mt-2 block">{shadow.css}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Coloured Shadows */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Brand Coloured Shadows</CardTitle>
          <CardDescription>Shadows using brand colours for focus states and emphasis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Primary Glow", color: "fuchsia", shadow: "0 0 20px rgb(217 70 239 / 0.4)", css: "shadow-fuchsia-500/40" },
              { name: "Accent Glow", color: "purple", shadow: "0 0 20px rgb(147 51 234 / 0.4)", css: "shadow-purple-500/40" },
              { name: "Success Glow", color: "green", shadow: "0 0 20px rgb(34 197 94 / 0.4)", css: "shadow-green-500/40" },
            ].map((glow) => (
              <div
                key={glow.name}
                className="group cursor-pointer"
                onClick={() => onCopyCode(`box-shadow: ${glow.shadow};`, glow.name)}
              >
                <div 
                  className="h-24 bg-card rounded-lg border border-border/50 mb-3 flex items-center justify-center transition-all hover:scale-105"
                  style={{ boxShadow: glow.shadow }}
                >
                  <span className="text-sm font-medium text-foreground/60">{glow.css}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{glow.name}</span>
                  {copiedCode === glow.name ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CSS Code Block */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-foreground">CSS Variables</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onCopyCode(`:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --shadow-glow-primary: 0 0 20px rgb(217 70 239 / 0.3);
}`, "shadow-css-vars")}
            >
              {copiedCode === "shadow-css-vars" ? (
                <><CheckCircle2 className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />Copied</>
              ) : (
                <><Copy className="h-4 w-4 mr-2" />Copy All</>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto border border-border/30">
            <code className="text-foreground/80">{`:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --shadow-glow-primary: 0 0 20px rgb(217 70 239 / 0.3);
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

function BlurTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Blur Effects Overview */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex items-center gap-3">
            <Sun className="h-6 w-6 text-yellow-400" />
            Blur Effects & Glassmorphism
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Backdrop blur effects for creating modern glassmorphic interfaces. All effects use GPU-accelerated compositing for optimal performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blurEffects.map((blur) => (
              <div
                key={blur.name}
                className="group cursor-pointer relative"
                onClick={() => onCopyCode(`backdrop-filter: blur(${blur.value});`, blur.name)}
              >
                {/* Background Pattern */}
                <div className="h-32 rounded-lg overflow-hidden relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-purple-500/30" />
                  <div className="absolute inset-0 grid grid-cols-4 gap-1 p-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-foreground/20 rounded-sm" />
                    ))}
                  </div>
                  {/* Blur Overlay */}
                  <div 
                    className="absolute inset-4 bg-card/60 rounded-lg border border-border/50 flex items-center justify-center transition-transform hover:scale-105"
                    style={{ backdropFilter: `blur(${blur.value})` }}
                  >
                    <span className="text-sm font-medium text-foreground">{blur.css}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm font-medium text-foreground">{blur.name}</code>
                  {copiedCode === blur.name ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{blur.usage}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">{blur.value}</Badge>
                  <Badge variant="outline" className="text-xs bg-muted/50">{blur.preview}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Glassmorphism Patterns */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Glassmorphism Patterns</CardTitle>
          <CardDescription>Common glass effect combinations used throughout the design system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card Glass */}
            <div 
              className="group cursor-pointer"
              onClick={() => onCopyCode(`background: hsl(var(--card) / 0.8);
backdrop-filter: blur(12px);
border: 1px solid hsl(var(--border) / 0.5);`, "glass-card")}
            >
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-accent/20" />
                <div 
                  className="absolute inset-4 bg-card/80 backdrop-blur-lg border border-border/50 rounded-lg p-4"
                >
                  <div className="h-3 w-24 bg-foreground/20 rounded mb-2" />
                  <div className="h-2 w-32 bg-foreground/10 rounded mb-4" />
                  <div className="h-8 w-20 bg-primary/20 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground">Glass Card</span>
                {copiedCode === "glass-card" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">Standard card with glass morphism</p>
            </div>

            {/* Modal Glass */}
            <div 
              className="group cursor-pointer"
              onClick={() => onCopyCode(`background: hsl(var(--card) / 0.95);
backdrop-filter: blur(24px);
border: 1px solid hsl(var(--border) / 0.3);
box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);`, "glass-modal")}
            >
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20" />
                <div 
                  className="absolute inset-4 bg-card/95 backdrop-blur-2xl border border-border/30 rounded-lg p-4 shadow-2xl"
                >
                  <div className="h-3 w-20 bg-foreground/20 rounded mb-2" />
                  <div className="h-2 w-full bg-foreground/10 rounded mb-2" />
                  <div className="h-2 w-3/4 bg-foreground/10 rounded mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-primary/30 rounded" />
                    <div className="h-6 w-16 bg-muted/50 rounded" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground">Glass Modal</span>
                {copiedCode === "glass-modal" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">Heavy glass effect for dialogs</p>
            </div>

            {/* Header Glass */}
            <div 
              className="group cursor-pointer"
              onClick={() => onCopyCode(`background: hsl(var(--card) / 0.9);
backdrop-filter: blur(16px);
border-bottom: 1px solid hsl(var(--border) / 0.5);
position: sticky;
top: 0;`, "glass-header")}
            >
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-14 bg-card/90 backdrop-blur-xl border-b border-border/50 flex items-center px-4">
                  <div className="h-6 w-6 bg-primary/30 rounded mr-3" />
                  <div className="h-3 w-24 bg-foreground/20 rounded" />
                </div>
                <div className="absolute inset-x-4 top-20 space-y-2">
                  <div className="h-2 w-full bg-foreground/10 rounded" />
                  <div className="h-2 w-3/4 bg-foreground/10 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground">Glass Header</span>
                {copiedCode === "glass-header" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">Sticky header with scroll blur</p>
            </div>

            {/* Dropdown Glass */}
            <div 
              className="group cursor-pointer"
              onClick={() => onCopyCode(`background: hsl(var(--card) / 0.95);
backdrop-filter: blur(12px);
border: 1px solid hsl(var(--border) / 0.5);
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);`, "glass-dropdown")}
            >
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10" />
                <div className="absolute top-4 left-4 right-4">
                  <div className="h-8 bg-muted/50 rounded-lg border border-border/50 flex items-center px-3">
                    <div className="h-2 w-20 bg-foreground/20 rounded" />
                  </div>
                  <div className="mt-1 bg-card/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-lg p-2 space-y-1">
                    <div className="h-7 bg-primary/20 rounded px-2 flex items-center">
                      <div className="h-2 w-16 bg-foreground/30 rounded" />
                    </div>
                    <div className="h-7 hover:bg-muted/50 rounded px-2 flex items-center">
                      <div className="h-2 w-20 bg-foreground/10 rounded" />
                    </div>
                    <div className="h-7 hover:bg-muted/50 rounded px-2 flex items-center">
                      <div className="h-2 w-14 bg-foreground/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground">Glass Dropdown</span>
                {copiedCode === "glass-dropdown" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">Floating menu with glass effect</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Note */}
      <Card className="bg-green-500/10 border-green-500/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Performance Optimised</h4>
              <p className="text-sm text-muted-foreground">
                All blur effects use <code className="text-primary">will-change: transform</code> and GPU compositing. 
                For best performance, avoid animating blur values directly - instead, animate opacity of pre-blurred elements.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UsageTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      {/* Implementation Overview */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground flex items-center gap-3">
            <Code2 className="h-6 w-6 text-green-600 dark:text-green-400" />
            Implementation Guide
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Best practices for applying elevation levels, combining shadows with blur, and maintaining optimal performance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tailwind Usage */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Tailwind CSS Classes
            </h4>
            <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground/80">{`{/* Shadow classes */}
<div className="shadow-sm">Subtle shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
<div className="shadow-2xl">Maximum shadow</div>

{/* Backdrop blur */}
<div className="backdrop-blur-sm bg-card/80">Subtle glass</div>
<div className="backdrop-blur-md bg-card/70">Medium glass</div>
<div className="backdrop-blur-xl bg-card/50">Strong glass</div>

{/* Combined pattern */}
<div className="bg-card/80 backdrop-blur-lg shadow-xl border border-border/50">
  Glass card with shadow
</div>`}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={() => onCopyCode(`<div className="bg-card/80 backdrop-blur-lg shadow-xl border border-border/50">
  Glass card with shadow
</div>`, "tailwind-example")}
              >
                {copiedCode === "tailwind-example" ? (
                  <><CheckCircle2 className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />Copied</>
                ) : (
                  <><Copy className="h-4 w-4 mr-2" />Copy Example</>
                )}
              </Button>
            </div>
          </div>

          {/* CSS Custom Properties */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Palette className="h-4 w-4 text-purple-400" />
              CSS Custom Properties
            </h4>
            <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground/80">{`.card {
  /* Using CSS variables for consistent elevation */
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(var(--blur-lg));
  background: hsl(var(--card) / 0.8);
}

.modal {
  box-shadow: var(--shadow-2xl);
  backdrop-filter: blur(var(--blur-2xl));
  background: hsl(var(--card) / 0.95);
}

/* Hover states - increase elevation */
.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Examples */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Component Examples</CardTitle>
          <CardDescription>Real-world component implementations using elevation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Card Component */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Elevated Card</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card/80 backdrop-blur-lg shadow-lg border border-border/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Card Title</h5>
                    <p className="text-xs text-muted-foreground">With glass morphism</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This card uses elevation level 4 with backdrop blur for a modern glass effect.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
                <pre className="text-xs overflow-x-auto">
                  <code className="text-foreground/80">{`<Card className="
  bg-card/80 
  backdrop-blur-lg 
  shadow-lg 
  border-border/50
">
  <CardContent>...</CardContent>
</Card>`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Modal Component */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Modal Dialog</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card/95 backdrop-blur-2xl shadow-2xl border border-border/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-foreground">Modal Title</h5>
                  <div className="p-1 rounded hover:bg-muted/50 cursor-pointer">
                    <X className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Modals use the highest elevation level for maximum visual prominence.
                </p>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Confirm</Button>
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
                <pre className="text-xs overflow-x-auto">
                  <code className="text-foreground/80">{`<Dialog>
  <DialogContent className="
    bg-card/95 
    backdrop-blur-2xl 
    shadow-2xl 
    border-border/30
  ">
    ...
  </DialogContent>
</Dialog>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Do
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Use consistent elevation levels for similar UI patterns
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Combine shadows with backdrop blur for glass effects
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Use CSS variables for easy theme switching
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                  Apply <code className="text-primary">will-change: transform</code> for animated elevation
                </li>
              </ul>
            </div>
            
            {/* Don'ts */}
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                <X className="h-5 w-5" />
                Don&apos;t
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                  Animate blur values directly (use opacity instead)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                  Stack multiple heavy blur effects on the same page
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                  Use inconsistent z-index values that don&apos;t follow the system
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                  Apply large shadows to small elements
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Tips */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
            Performance Optimisation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
              <h4 className="font-medium text-foreground mb-2">Hardware Acceleration</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Enable GPU compositing for smooth animations by using transform-based elevation changes:
              </p>
              <pre className="bg-muted/50 p-3 rounded text-xs overflow-x-auto">
                <code className="text-foreground/80">{`.elevated-card {
  transform: translateZ(0); /* Create new compositing layer */
  will-change: transform, box-shadow;
}

.elevated-card:hover {
  transform: translateY(-4px) translateZ(0);
  box-shadow: var(--shadow-xl);
}`}</code>
              </pre>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
              <h4 className="font-medium text-foreground mb-2">Blur Performance</h4>
              <p className="text-sm text-muted-foreground mb-3">
                For animated glass effects, pre-blur content and animate opacity instead:
              </p>
              <pre className="bg-muted/50 p-3 rounded text-xs overflow-x-auto">
                <code className="text-foreground/80">{`/* Instead of animating blur */}
.glass-overlay {
  backdrop-filter: blur(16px);
  opacity: 0;
  transition: opacity 200ms ease;
}

.glass-overlay.visible {
  opacity: 1;
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card className="bg-blue-500/10 border-blue-500/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Accessibility Note</h4>
              <p className="text-sm text-muted-foreground">
                Ensure sufficient contrast between elevated elements and their backgrounds. 
                Glass effects should maintain a minimum opacity of 0.7 for text readability. 
                Always test with reduced motion preferences enabled - provide non-animated alternatives.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
