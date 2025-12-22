"use client"

import React, { useState, useEffect, useCallback } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { 
  Palette, 
  Sun,
  Moon,
  Monitor,
  Settings,
  Copy,
  CheckCircle2,
  Eye,
  Download,
  Sparkles,
  ArrowRight,
  Lightbulb,
  Layers,
  Brush,
  Contrast,
  PaintBucket,
  Target,
  Zap,
  ExternalLink,
  X
} from "lucide-react"
import Link from "next/link"

export default function Theming() {
  const [mounted, setMounted] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [activeTheme, setActiveTheme] = useState("dark")
  const [customPrimary, setCustomPrimary] = useState("#d946ef")
  const [customSecondary, setCustomSecondary] = useState("#8b5cf6")
  const [primaryPickerOpen, setPrimaryPickerOpen] = useState(false)
  const [secondaryPickerOpen, setSecondaryPickerOpen] = useState(false)
  const [primaryHsv, setPrimaryHsv] = useState({ h: 292, s: 84, v: 93 })
  const [secondaryHsv, setSecondaryHsv] = useState({ h: 258, s: 64, v: 97 })

  // Color conversion functions (must be before conditional return)
  const hexToHsv = useCallback((hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const diff = max - min

    let h = 0
    if (diff !== 0) {
      if (max === r) h = ((g - b) / diff) % 6
      else if (max === g) h = (b - r) / diff + 2
      else h = (r - g) / diff + 4
    }
    h = Math.round(h * 60)
    if (h < 0) h += 360

    const s = Math.round((max === 0 ? 0 : diff / max) * 100)
    const v = Math.round(max * 100)

    return { h, s, v }
  }, [])

  const hsvToHex = useCallback((h: number, s: number, v: number) => {
    s /= 100
    v /= 100

    const c = v * s
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = v - c

    let r = 0, g = 0, b = 0
    if (h >= 0 && h < 60) { r = c; g = x; b = 0 }
    else if (h >= 60 && h < 120) { r = x; g = c; b = 0 }
    else if (h >= 120 && h < 180) { r = 0; g = c; b = x }
    else if (h >= 180 && h < 240) { r = 0; g = x; b = c }
    else if (h >= 240 && h < 300) { r = x; g = 0; b = c }
    else if (h >= 300 && h < 360) { r = c; g = 0; b = x }

    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }, [])

  const handlePrimaryColorChange = useCallback((hsv: { h: number; s: number; v: number }) => {
    setPrimaryHsv(hsv)
    const hex = hsvToHex(hsv.h, hsv.s, hsv.v)
    setCustomPrimary(hex)
  }, [hsvToHex])

  const handleSecondaryColorChange = useCallback((hsv: { h: number; s: number; v: number }) => {
    setSecondaryHsv(hsv)
    const hex = hsvToHex(hsv.h, hsv.s, hsv.v)
    setCustomSecondary(hex)
  }, [hsvToHex])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  // Custom Color Picker Component
  const CustomColorPicker = ({ 
    hsv, 
    onChange, 
    onClose, 
    title 
  }: { 
    hsv: { h: number; s: number; v: number }; 
    onChange: (hsv: { h: number; s: number; v: number }) => void; 
    onClose: () => void;
    title: string;
  }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Color Preview */}
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-lg border-2 border-border"
              style={{ backgroundColor: hsvToHex(hsv.h, hsv.s, hsv.v) }}
            ></div>
            <div className="flex-1">
              <div className="text-sm text-foreground/80 mb-1">Preview</div>
              <div className="text-xs text-muted-foreground font-mono">
                {hsvToHex(hsv.h, hsv.s, hsv.v)}
              </div>
            </div>
          </div>

          {/* Hue Slider */}
          <div className="space-y-2">
            <Label className="text-foreground/80 text-sm">Hue</Label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="360"
                value={hsv.h}
                onChange={(e) => onChange({ ...hsv, h: parseInt(e.target.value) })}
                className="w-full h-4 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
                }}
              />
            </div>
            <div className="text-xs text-muted-foreground">{hsv.h}°</div>
          </div>

          {/* Saturation Slider */}
          <div className="space-y-2">
            <Label className="text-foreground/80 text-sm">Saturation</Label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={hsv.s}
                onChange={(e) => onChange({ ...hsv, s: parseInt(e.target.value) })}
                className="w-full h-4 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${hsvToHex(hsv.h, 0, hsv.v)} 0%, ${hsvToHex(hsv.h, 100, hsv.v)} 100%)`
                }}
              />
            </div>
            <div className="text-xs text-muted-foreground">{hsv.s}%</div>
          </div>

          {/* Value/Brightness Slider */}
          <div className="space-y-2">
            <Label className="text-foreground/80 text-sm">Brightness</Label>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={hsv.v}
                onChange={(e) => onChange({ ...hsv, v: parseInt(e.target.value) })}
                className="w-full h-4 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #000000 0%, ${hsvToHex(hsv.h, hsv.s, 100)} 100%)`
                }}
              />
            </div>
            <div className="text-xs text-muted-foreground">{hsv.v}%</div>
          </div>

          {/* Hex Input */}
          <div className="space-y-2">
            <Label className="text-foreground/80 text-sm">Hex Value</Label>
            <input
              type="text"
              value={hsvToHex(hsv.h, hsv.s, hsv.v)}
              onChange={(e) => {
                const hex = e.target.value
                if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
                  const newHsv = hexToHsv(hex)
                  onChange(newHsv)
                }
              }}
              className="w-full px-3 py-2 bg-card/50 border border-border rounded-lg text-foreground/80 font-mono text-sm"
              placeholder="#000000"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const themes = [
    {
      id: "dark",
      name: "Dark Theme",
      description: "Professional dark interface",
      icon: Moon,
      preview: "bg-card text-foreground",
      usage: "Default theme, reduces eye strain"
    },
    {
      id: "light", 
      name: "Light Theme",
      description: "Clean light interface",
      icon: Sun,
      preview: "bg-white text-slate-900",
      usage: "High brightness environments"
    },
    {
      id: "system",
      name: "System Theme", 
      description: "Follows OS preference",
      icon: Monitor,
      preview: "bg-gradient-to-r from-slate-900 to-white text-slate-600",
      usage: "Automatic switching based on system"
    },
    {
      id: "high-contrast",
      name: "High Contrast",
      description: "Maximum accessibility",
      icon: Contrast,
      preview: "bg-black text-white border-2 border-white",
      usage: "WCAG AAA compliance, visual impairments"
    }
  ]

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 mb-4">
                    Theme Customisation
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Theming System
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> & Customisation</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Customise the entire design system appearance with themes, colour schemes, and personalisation options.
                  </p>
                </div>

                {/* Theme Selector */}
                <div className="flex justify-center items-center gap-4 mb-8">
                  <span className="text-muted-foreground">Current theme:</span>
                  <Select value={activeTheme} onValueChange={setActiveTheme}>
                    <SelectTrigger className="w-auto min-w-[150px] bg-card/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {themes.map((theme) => (
                        <SelectItem key={theme.id} value={theme.id}>
                          <div className="flex items-center gap-2">
                            <theme.icon className="h-4 w-4" />
                            {theme.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colours">
                    <Download className="h-4 w-4 mr-2" />
                    Export Theme
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colours">
                    <PaintBucket className="h-4 w-4 mr-2" />
                    Theme Builder
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Figma Plugin
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* What is Theming? */}
          <section className="px-6 lg:px-12 py-12 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">What is Theming?</h2>
                  <div className="space-y-4 text-foreground/80">
                    <p className="text-lg">
                      Theming allows you to <strong className="text-primary">customise the entire visual appearance</strong> of the design system while maintaining consistency and accessibility.
                    </p>
                    <p>
                      Unlike design tokens (which define the values), theming provides <strong className="text-purple-300">complete visual control and user personalisation</strong> options.
                    </p>
                  </div>
                </div>
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      <CardTitle className="text-foreground">Theming vs Tokens</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Design Tokens</strong>
                        <p className="text-sm text-muted-foreground">Define the foundational values (colours, spacing, typography)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brush className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Theming</strong>
                        <p className="text-sm text-muted-foreground">Applies those values in different combinations and contexts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Customisation</strong>
                        <p className="text-sm text-muted-foreground">Lets users personalise the appearance to their preferences</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="px-6 lg:px-12 py-8 border-b border-border/50">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-lg font-semibold text-foreground">Viewing:</h2>
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-auto min-w-[200px] h-10 bg-card/40 border border-border/30 hover:bg-card/60 transition-colors text-foreground/80">
                      {(() => {
                        const tabs = [
                          { value: "overview", label: "Overview", icon: Eye },
                          { value: "themes", label: "Built-in Themes", icon: Palette },
                          { value: "customisation", label: "Customisation", icon: Settings },
                          { value: "implementation", label: "Implementation", icon: Zap }
                        ];
                        const currentTab = tabs.find(tab => tab.value === activeTab);
                        return currentTab ? (
                          <div className="flex items-center gap-3">
                            <currentTab.icon className="h-4 w-4" />
                            <span>{currentTab.label}</span>
                          </div>
                        ) : null;
                      })()}
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="overview" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span>Overview</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="themes" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Palette className="h-4 w-4 text-muted-foreground" />
                          <span>Built-in Themes</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="customisation" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Settings className="h-4 w-4 text-muted-foreground" />
                          <span>Customisation</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="implementation" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Zap className="h-4 w-4 text-muted-foreground" />
                          <span>Implementation</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab("themes")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl w-fit">
                          <Palette className="h-8 w-8 text-blue-400" />
                        </div>
                        <CardTitle className="text-foreground">Built-in Themes</CardTitle>
                        <CardDescription>Pre-designed theme options</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">4 themes</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab("customisation")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl w-fit">
                          <Settings className="h-8 w-8 text-purple-400" />
                        </div>
                        <CardTitle className="text-foreground">Customisation</CardTitle>
                        <CardDescription>Create custom themes and variations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Unlimited</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab("implementation")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl w-fit">
                          <Zap className="h-8 w-8 text-green-400" />
                        </div>
                        <CardTitle className="text-foreground">Implementation</CardTitle>
                        <CardDescription>How to integrate themes in your project</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">CSS & JS</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl w-fit">
                          <PaintBucket className="h-8 w-8 text-orange-400" />
                        </div>
                        <CardTitle className="text-foreground">Theme Builder</CardTitle>
                        <CardDescription>Visual theme creation tool</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Theme Comparison */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <Contrast className="h-5 w-5 text-primary" />
                        Theme Comparison
                      </CardTitle>
                      <CardDescription>See how different themes affect the same components</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {themes.map((theme) => (
                          <div key={theme.id} className="space-y-3">
                            <div className={`p-4 rounded-lg border ${theme.preview}`}>
                              <div className="flex items-center gap-2 mb-2">
                                <theme.icon className="h-4 w-4" />
                                <span className="font-medium">{theme.name}</span>
                              </div>
                              <div className="space-y-2">
                                <div className="h-2 bg-current opacity-20 rounded"></div>
                                <div className="h-2 bg-current opacity-40 rounded w-3/4"></div>
                                <div className="h-6 bg-current opacity-10 rounded flex items-center px-2">
                                  <span className="text-xs opacity-60">Button</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">{theme.usage}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Themes Tab */}
                <TabsContent value="themes" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Built-in Themes</h3>
                    <p className="text-muted-foreground mb-8">
                      Ready-to-use themes designed for different contexts and accessibility requirements.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {themes.map((theme) => (
                      <Card key={theme.id} className="bg-card/30 border-border/50">
                        <CardHeader>
                          <CardTitle className="text-foreground flex items-center gap-3">
                            <theme.icon className="h-6 w-6 text-primary" />
                            {theme.name}
                          </CardTitle>
                          <CardDescription>{theme.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className={`p-6 rounded-lg ${theme.preview} transition-all`}>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Sample Interface</span>
                                <div className="flex gap-1">
                                  <div className="w-3 h-3 rounded-full bg-current opacity-40"></div>
                                  <div className="w-3 h-3 rounded-full bg-current opacity-60"></div>
                                  <div className="w-3 h-3 rounded-full bg-current opacity-80"></div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="h-4 bg-current opacity-20 rounded"></div>
                                <div className="h-4 bg-current opacity-30 rounded w-4/5"></div>
                                <div className="h-4 bg-current opacity-25 rounded w-3/5"></div>
                              </div>
                              <div className="flex gap-2">
                                <div className="h-8 bg-current opacity-15 rounded px-3 flex items-center flex-1">
                                  <span className="text-xs opacity-70">Primary Button</span>
                                </div>
                                <div className="h-8 bg-current opacity-10 rounded px-3 flex items-center">
                                  <span className="text-xs opacity-50">Secondary</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <strong className="text-foreground">Best for:</strong>
                            <p className="text-sm text-muted-foreground">{theme.usage}</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setActiveTheme(theme.id)}
                            className={`w-full ${activeTheme === theme.id ? 'border-primary text-primary' : ''}`}
                          >
                            {activeTheme === theme.id ? 'Current Theme' : 'Apply Theme'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Customisation Tab */}
                <TabsContent value="customisation" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Theme Customisation</h3>
                    <p className="text-muted-foreground mb-8">
                      Create custom themes by adjusting colours, spacing, and other design properties.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground">Colour Customisation</CardTitle>
                        <CardDescription>Adjust primary and secondary colours</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <Label className="text-foreground/80">Primary Colour</Label>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded border border-border bg-transparent cursor-pointer hover:border-border transition-colors"
                              style={{ backgroundColor: customPrimary }}
                              onClick={() => setPrimaryPickerOpen(true)}
                            />
                            <div className="flex-1">
                              <div className="text-sm text-foreground/80 mb-1">Current: {customPrimary}</div>
                              <div className="h-4 rounded" style={{ backgroundColor: customPrimary }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-foreground/80">Secondary Colour</Label>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-12 h-12 rounded border border-border bg-transparent cursor-pointer hover:border-border transition-colors"
                              style={{ backgroundColor: customSecondary }}
                              onClick={() => setSecondaryPickerOpen(true)}
                            />
                            <div className="flex-1">
                              <div className="text-sm text-foreground/80 mb-1">Current: {customSecondary}</div>
                              <div className="h-4 rounded" style={{ backgroundColor: customSecondary }}></div>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full" onClick={() => handleCopyCode(`--colour-primary: ${customPrimary};\n--colour-secondary: ${customSecondary};`, 'custom-colours')}>
                          {copiedCode === 'custom-colours' ? (
                            <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4 mr-2" />
                          )}
                          Copy CSS Variables
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground">Live Preview</CardTitle>
                        <CardDescription>See your customisations in real-time</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="p-6 bg-card/50 rounded-lg border border-border/30">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-foreground font-medium">Custom Theme Preview</span>
                              <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: customPrimary }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: customSecondary }}></div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-muted rounded"></div>
                              <div className="h-4 bg-card rounded w-4/5"></div>
                              <div className="h-4 bg-card rounded w-3/5"></div>
                            </div>
                            <div className="flex gap-2">
                              <div 
                                className="h-10 rounded px-4 flex items-center flex-1 text-white font-medium"
                                style={{ backgroundColor: customPrimary }}
                              >
                                Primary Button
                              </div>
                              <div 
                                className="h-10 rounded px-4 flex items-center border-2 text-white"
                                style={{ borderColor: customSecondary, color: customSecondary }}
                              >
                                Secondary
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Implementation Tab */}
                <TabsContent value="implementation" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Theme Implementation</h3>
                    <p className="text-muted-foreground mb-8">
                      How to integrate and use themes in your applications.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground">CSS Implementation</CardTitle>
                        <CardDescription>Apply themes using CSS variables</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground/80">Theme CSS:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(':root {\n  --colour-primary: #d946ef;\n  --colour-secondary: #8b5cf6;\n  --colour-background: #0f172a;\n  --colour-surface: #1e293b;\n  --colour-text: #f8fafc;\n}\n\n[data-theme="light"] {\n  --colour-background: #ffffff;\n  --colour-surface: #f8fafc;\n  --colour-text: #0f172a;\n}', 'css-theme')}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {copiedCode === 'css-theme' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap">
{`:root {
  --colour-primary: #d946ef;
  --colour-secondary: #8b5cf6;
  --colour-background: #0f172a;
  --colour-surface: #1e293b;
  --colour-text: #f8fafc;
}

[data-theme="light"] {
  --colour-background: #ffffff;
  --colour-surface: #f8fafc;
  --colour-text: #0f172a;
}`}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground">JavaScript Implementation</CardTitle>
                        <CardDescription>Dynamic theme switching with JavaScript</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground/80">Theme Switcher:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('function setTheme(theme) {\n  document.documentElement.setAttribute(\'data-theme\', theme);\n  localStorage.setItem(\'theme\', theme);\n}\n\n// Apply saved theme on load\nconst savedTheme = localStorage.getItem(\'theme\') || \'dark\';\nsetTheme(savedTheme);', 'js-theme')}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {copiedCode === 'js-theme' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap">
{`function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);`}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Cross-references */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <Layers className="h-5 w-5 text-primary" />
                        Related Resources
                      </CardTitle>
                      <CardDescription>Explore related documentation and tools</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/design-system/tokens" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Target className="h-5 w-5 text-blue-400" />
                            <span className="font-medium text-foreground">Design Tokens</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Foundational values used in themes</p>
                        </Link>
                        
                        <Link href="/components" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Layers className="h-5 w-5 text-green-400" />
                            <span className="font-medium text-foreground">Components</span>
                          </div>
                          <p className="text-sm text-muted-foreground">See themes applied to components</p>
                        </Link>
                        
                        <Link href="/design-system/accessibility" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-400" />
                            <span className="font-medium text-foreground">Accessibility</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Ensure theme accessibility compliance</p>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </main>

      {/* Color Picker Modals */}
      {primaryPickerOpen && (
        <CustomColorPicker
          hsv={primaryHsv}
          onChange={handlePrimaryColorChange}
          onClose={() => setPrimaryPickerOpen(false)}
          title="Choose Primary Colour"
        />
      )}

      {secondaryPickerOpen && (
        <CustomColorPicker
          hsv={secondaryHsv}
          onChange={handleSecondaryColorChange}
          onClose={() => setSecondaryPickerOpen(false)}
          title="Choose Secondary Colour"
        />
      )}
    </div>
  )
}
