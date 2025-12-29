"use client"

import { useState, useEffect, useMemo } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { 
  Palette, 
  Type,
  Grid3X3,
  Code,
  Copy,
  CheckCircle2,
  Download,
  ExternalLink,
  Lightbulb,
  ArrowRight,
  Eye,
  Layers,
  Target,
  Search,
  GitBranch,
  Shield,
  Zap,
  Box,
  ArrowDown,
  RefreshCw,
  FileJson,
  FileCode,
  Figma,
  Moon,
  Sun,
  Contrast,
  AlertTriangle,
  Info,
  Check,
  ChevronRight,
  Sparkles,
  Brain,
  MousePointer,
  Timer,
  LayoutGrid
} from "lucide-react"
import Link from "next/link"
// Import token data and utilities
import { referenceTokens, semanticTokens, componentTokens, lawsOfUX } from "./data"
import { getContrastRatio, getWCAGLevel, generateExportCode } from "./utils"

// ============================================================================
// TOKEN ARCHITECTURE - Three-tier system inspired by Carbon + Material Design
// ============================================================================
// Token data now imported from ./data.ts
// Utility functions now imported from ./utils.ts

export default function Tokens() {
  useEffect(() => {
    document.title = "Design Tokens - Inclusive Design System"
  }, [])
  useEffect(() => {
    document.title = "Design Tokens - Inclusive Design System"
  }, [])
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("architecture")
  const [copiedCode, setCopiedCode] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("dark")
  const [selectedColor, setSelectedColor] = useState("#d946ef")
  const [exportFormat, setExportFormat] = useState<"css" | "scss" | "json" | "js">("css")

  useEffect(() => {
    setMounted(true)
    document.title = "Design Tokens - Inclusive Design System"
  }, [])

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  // Filter tokens based on search
  const filteredReferenceColors = useMemo(() => {
    if (!searchQuery) return Object.entries(referenceTokens.colors)
    return Object.entries(referenceTokens.colors).filter(([name]) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Generate export code - now using imported function
  // const generateExportCode = (format: string) => { ... } - moved to utils.ts

  if (!mounted) {
    return null
  }
  return (
    <div className="flex min-h-screen">
      <UnifiedSidebar />
      
      <main className="relative z-10 flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Hero Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Link href="/design-system" className="hover:text-foreground transition-colors">Design System</Link>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-foreground">Design Tokens</span>
                </nav>

                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Badge className="bg-green-500/20 text-green-600 dark:text-green-600 dark:text-green-300 border-green-500/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Stable
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-600 dark:text-blue-300 border-blue-500/30">
                      v2.1.0
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:text-purple-600 dark:text-purple-300 border-purple-500/30">
                      200+ tokens
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Design Tokens
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Architecture</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                    A three-tier token system inspired by Material Design and Carbon, ensuring consistency, 
                    maintainability, and scalability across all platforms.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-400">89</div>
                      <div className="text-sm text-muted-foreground">Colour Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24</div>
                      <div className="text-sm text-muted-foreground">Spacing Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">16</div>
                      <div className="text-sm text-muted-foreground">Typography Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">40+</div>
                      <div className="text-sm text-muted-foreground">Component Tokens</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all"
                    onClick={() => setActiveTab("export")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Tokens
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-card transition-colors"
                    onClick={() => setActiveTab("playground")}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Token Playground
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colors">
                    <Figma className="h-4 w-4 mr-2" />
                    Figma Plugin
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </header>
          {/* Search & Navigation */}
          <section className="px-6 lg:px-12 py-6 border-b border-border/50 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tokens (e.g., fuchsia, spacing, button)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card/50 border-border/50"
                  />
                </div>

                {/* Tab Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
                  <TabsList className="bg-card/50 border border-border/50">
                    <TabsTrigger value="architecture" className="data-[state=active]:bg-primary/20">
                      <Layers className="h-4 w-4 mr-2" />
                      Architecture
                    </TabsTrigger>
                    <TabsTrigger value="colours" className="data-[state=active]:bg-primary/20">
                      <Palette className="h-4 w-4 mr-2" />
                      Colours
                    </TabsTrigger>
                    <TabsTrigger value="spacing" className="data-[state=active]:bg-primary/20">
                      <Grid3X3 className="h-4 w-4 mr-2" />
                      Spacing
                    </TabsTrigger>
                    <TabsTrigger value="typography" className="data-[state=active]:bg-primary/20">
                      <Type className="h-4 w-4 mr-2" />
                      Typography
                    </TabsTrigger>
                    <TabsTrigger value="components" className="data-[state=active]:bg-primary/20">
                      <Box className="h-4 w-4 mr-2" />
                      Components
                    </TabsTrigger>
                    <TabsTrigger value="playground" className="data-[state=active]:bg-primary/20">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Playground
                    </TabsTrigger>
                    <TabsTrigger value="export" className="data-[state=active]:bg-primary/20">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="px-6 lg:px-12 py-8">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                {/* Architecture Tab */}
                <TabsContent value="architecture" className="space-y-8">
                  {/* Three-Tier System */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <GitBranch className="h-6 w-6 text-primary" />
                        Three-Tier Token Architecture
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        Our token system follows industry best practices from Material Design and Carbon, 
                        creating a clear hierarchy from raw values to component-specific tokens.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Visual Token Flow */}
                      <div className="relative">
                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Tier 1: Reference */}
                          <Card className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/30">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                  <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg text-foreground">Tier 1: Reference</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">Primitives</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                Raw design values without semantic meaning. Never used directly in components.
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <div className="w-4 h-4 rounded bg-fuchsia-500"></div>
                                  <code className="text-xs text-foreground/80">fuchsia-500</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">spacing-4 = 16px</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">font-size-sm = 14px</code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Arrow */}
                          <div className="hidden md:flex items-center justify-center">
                            <ArrowRight className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="flex md:hidden justify-center py-2">
                            <ArrowDown className="h-6 w-6 text-muted-foreground" />
                          </div>

                          {/* Tier 2: Semantic */}
                          <Card className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 md:col-start-1 md:row-start-1 md:col-span-1">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                  <Target className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg text-foreground">Tier 2: Semantic</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">System</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                Meaningful tokens that describe purpose. Theme-aware and mode-adaptive.
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <div className="w-4 h-4 rounded bg-fuchsia-500"></div>
                                  <code className="text-xs text-foreground/80">color-action-primary</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">space-component-padding</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">color-text-muted</code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Tier 3: Component */}
                          <Card className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border-green-500/30">
                            <CardHeader className="pb-3">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                  <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                  <CardTitle className="text-lg text-foreground">Tier 3: Component</CardTitle>
                                  <Badge variant="outline" className="text-xs mt-1">Contextual</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <p className="text-sm text-muted-foreground">
                                Component-specific tokens for precise control and easy maintenance.
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <div className="w-4 h-4 rounded bg-fuchsia-500"></div>
                                  <code className="text-xs text-foreground/80">button-bg-primary</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">input-padding-x</code>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                                  <code className="text-xs text-foreground/80">card-radius</code>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Token Relationship Diagram */}
                      <div className="mt-8 p-6 bg-card/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold text-foreground mb-4">Token Relationship Example</h4>
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                            <code className="text-sm text-blue-600 dark:text-blue-600 dark:text-blue-300">fuchsia-500</code>
                            <div className="text-xs text-muted-foreground mt-1">Reference Token</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                            <code className="text-sm text-purple-600 dark:text-purple-600 dark:text-purple-300">color-action-primary</code>
                            <div className="text-xs text-muted-foreground mt-1">Semantic Token</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                            <code className="text-sm text-green-600 dark:text-green-600 dark:text-green-300">button-bg-primary</code>
                            <div className="text-xs text-muted-foreground mt-1">Component Token</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          When you change <code className="text-fuchsia-400">fuchsia-500</code>, 
                          all buttons, links, and interactive elements update automatically while maintaining their semantic meaning.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Laws of UX Support */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Brain className="h-6 w-6 text-primary" />
                        Laws of UX Support
                      </CardTitle>
                      <CardDescription>
                        Our tokens are designed to support fundamental UX principles
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {lawsOfUX.map((law) => (
                          <div key={law.name} className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-primary/20 rounded-lg">
                                <law.icon className="h-5 w-5 text-primary" />
                              </div>
                              <h4 className="font-semibold text-foreground">{law.name}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{law.description}</p>
                            <div className="p-3 bg-green-500/10 rounded border border-green-500/30">
                              <p className="text-sm text-green-600 dark:text-green-600 dark:text-green-300">{law.tokenSupport}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {law.relatedTokens.map((token) => (
                                <Badge key={token} variant="outline" className="text-xs">
                                  {token}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        Why This Architecture?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <h4 className="font-semibold text-foreground">Single Source of Truth</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Change a reference token once, and all semantic and component tokens update automatically.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <h4 className="font-semibold text-foreground">Theme Flexibility</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Semantic tokens adapt to light/dark modes while maintaining consistent meaning.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <h4 className="font-semibold text-foreground">Component Isolation</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Component tokens allow precise adjustments without affecting the global system.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Colours Tab */}
                <TabsContent value="colours" className="space-y-8">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-foreground">Colour Tokens</h2>
                    <div className="flex items-center gap-3">
                      <Label className="text-sm text-muted-foreground">Preview Theme:</Label>
                      <div className="flex items-center gap-2 p-1 bg-card/50 rounded-lg border border-border/50">
                        <Button
                          size="sm"
                          variant={previewTheme === "light" ? "default" : "ghost"}
                          onClick={() => setPreviewTheme("light")}
                          className="h-8"
                        >
                          <Sun className="h-4 w-4 mr-1" />
                          Light
                        </Button>
                        <Button
                          size="sm"
                          variant={previewTheme === "dark" ? "default" : "ghost"}
                          onClick={() => setPreviewTheme("dark")}
                          className="h-8"
                        >
                          <Moon className="h-4 w-4 mr-1" />
                          Dark
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Reference Colours */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center gap-3">
                            <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            Reference Tokens (Tier 1)
                          </CardTitle>
                          <CardDescription>Raw colour values - the foundation of our palette</CardDescription>
                        </div>
                        <Badge variant="outline">{filteredReferenceColors.length} tokens</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Colour Scales */}
                      {["fuchsia", "purple", "blue", "slate"].map((scale) => {
                        const scaleColors = filteredReferenceColors.filter(([name]) => name.startsWith(scale))
                        if (scaleColors.length === 0) return null
                        
                        return (
                          <div key={scale} className="mb-8 last:mb-0">
                            <h4 className="text-lg font-semibold text-foreground capitalize mb-4">{scale} Scale</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                              {scaleColors.map(([name, data]) => (
                                <div 
                                  key={name} 
                                  className="group p-3 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                                  onClick={() => handleCopyCode(data.value, name)}
                                >
                                  <div 
                                    className="w-full h-12 rounded-md mb-2 ring-1 ring-inset ring-white/10"
                                    style={{ backgroundColor: data.value }}
                                  />
                                  <div className="flex items-center justify-between">
                                    <code className="text-xs text-foreground/80">{name}</code>
                                    {copiedCode === name ? (
                                      <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />
                                    ) : (
                                      <Copy className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">{data.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </CardContent>
                  </Card>

                  {/* Semantic Colours */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <Target className="h-5 w-5 text-purple-400" />
                        Semantic Tokens (Tier 2)
                      </CardTitle>
                      <CardDescription>Purpose-driven tokens that adapt to theme</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(semanticTokens[previewTheme]).map(([name, data]) => (
                          <div 
                            key={name} 
                            className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
                            onClick={() => handleCopyCode(`var(--${name})`, `semantic-${name}`)}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div 
                                className="w-8 h-8 rounded-md ring-1 ring-inset ring-white/10"
                                style={{ 
                                  backgroundColor: referenceTokens.colors[data.reference as keyof typeof referenceTokens.colors]?.value || "#333"
                                }}
                              />
                              <div className="flex-1">
                                <code className="text-sm text-foreground/80">{name}</code>
                                {copiedCode === `semantic-${name}` && (
                                  <CheckCircle2 className="inline-block h-3 w-3 text-green-600 dark:text-green-400 ml-2" />
                                )}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">{data.purpose}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <ArrowRight className="h-3 w-3 text-muted-foreground" />
                              <code className="text-xs text-primary/80">{data.reference}</code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contrast Checker */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <Contrast className="h-5 w-5 text-green-600 dark:text-green-400" />
                        Accessibility Contrast Checker
                      </CardTitle>
                      <CardDescription>WCAG 2.1 contrast ratio compliance for all colour combinations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { fg: "white", bg: "fuchsia-500", ratio: 4.5 },
                          { fg: "white", bg: "fuchsia-600", ratio: 5.2 },
                          { fg: "slate-900", bg: "white", ratio: 15.3 },
                          { fg: "fuchsia-500", bg: "slate-950", ratio: 6.2 },
                          { fg: "slate-400", bg: "white", ratio: 3.0 },
                          { fg: "slate-500", bg: "white", ratio: 4.6 },
                        ].map((combo, idx) => {
                          const wcag = getWCAGLevel(combo.ratio)
                          return (
                            <div key={idx} className="p-4 bg-card/50 rounded-lg border border-border/50">
                              <div className="flex items-center gap-3 mb-3">
                                <div 
                                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold"
                                  style={{ 
                                    backgroundColor: referenceTokens.colors[combo.bg as keyof typeof referenceTokens.colors]?.value,
                                    color: referenceTokens.colors[combo.fg as keyof typeof referenceTokens.colors]?.value
                                  }}
                                >
                                  Aa
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-foreground">{combo.fg} on {combo.bg}</div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-lg font-bold text-foreground">{combo.ratio}:1</span>
                                    <Badge className={`${wcag.color} bg-transparent border-current`}>
                                      {wcag.level}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              {combo.ratio >= 4.5 ? (
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs">
                                  <Check className="h-3 w-3" />
                                  Passes for normal text
                                </div>
                              ) : combo.ratio >= 3 ? (
                                <div className="flex items-center gap-2 text-amber-400 text-xs">
                                  <AlertTriangle className="h-3 w-3" />
                                  Large text only (18px+)
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-red-400 text-xs">
                                  <AlertTriangle className="h-3 w-3" />
                                  Does not meet WCAG
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Spacing Tab */}
                <TabsContent value="spacing" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Grid3X3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                        Spacing Scale (8px Grid System)
                      </CardTitle>
                      <CardDescription>
                        Consistent spacing based on 4px increments, following the 8-point grid system for pixel-perfect alignment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(referenceTokens.spacing).slice(0, 16).map(([name, value]) => (
                          <div 
                            key={name}
                            className="flex items-center gap-6 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
                            onClick={() => handleCopyCode(value, `spacing-${name}`)}
                          >
                            <div className="w-20 text-right">
                              <code className="text-sm font-medium text-foreground">space-{name}</code>
                            </div>
                            <div className="flex items-center gap-4 flex-1">
                              <div 
                                className="h-6 bg-gradient-to-r from-primary to-purple-500 rounded"
                                style={{ width: value }}
                              />
                              <code className="text-sm text-muted-foreground">{value}</code>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              {copiedCode === `spacing-${name}` ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Semantic Spacing */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Semantic Spacing Tokens</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Object.entries(semanticTokens.spacing).map(([name, data]) => (
                            <div 
                              key={name}
                              className="p-4 bg-card/50 rounded-lg border border-border/50"
                            >
                              <code className="text-sm font-medium text-foreground">{name}</code>
                              <p className="text-xs text-muted-foreground mt-1">{data.purpose}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                <code className="text-xs text-primary/80">space-{data.reference}</code>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Typography Tab */}
                <TabsContent value="typography" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Type className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        Typography Scale
                      </CardTitle>
                      <CardDescription>
                        Harmonious type scale with consistent line heights and letter spacing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Font Sizes */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Font Sizes</h4>
                        <div className="space-y-4">
                          {Object.entries(referenceTokens.typography.fontSize).map(([name, value]) => (
                            <div 
                              key={name}
                              className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
                              onClick={() => handleCopyCode(value, `font-${name}`)}
                            >
                              <div className="flex items-center gap-6">
                                <code className="w-20 text-sm text-muted-foreground">text-{name}</code>
                                <span 
                                  className="text-foreground"
                                  style={{ fontSize: value }}
                                >
                                  The quick brown fox jumps over the lazy dog
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <code className="text-sm text-muted-foreground">{value}</code>
                                {copiedCode === `font-${name}` ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Font Weights */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Font Weights</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {Object.entries(referenceTokens.typography.fontWeight).map(([name, value]) => (
                            <div key={name} className="p-4 bg-card/50 rounded-lg border border-border/50">
                              <span 
                                className="text-xl text-foreground block mb-2"
                                style={{ fontWeight: parseInt(value) }}
                              >
                                Aa Bb Cc
                              </span>
                              <code className="text-sm text-muted-foreground">{name}</code>
                              <div className="text-xs text-muted-foreground mt-1">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Font Families */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">Font Families</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <h5 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: referenceTokens.typography.fontFamily.sans }}>
                              Inter (Sans-serif)
                            </h5>
                            <p className="text-sm text-muted-foreground" style={{ fontFamily: referenceTokens.typography.fontFamily.sans }}>
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                              abcdefghijklmnopqrstuvwxyz<br />
                              1234567890!@#$%^&*()
                            </p>
                            <code className="text-xs text-primary/80 mt-3 block">font-family: font-sans</code>
                          </div>
                          <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <h5 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: referenceTokens.typography.fontFamily.mono }}>
                              JetBrains Mono
                            </h5>
                            <p className="text-sm text-muted-foreground" style={{ fontFamily: referenceTokens.typography.fontFamily.mono }}>
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                              abcdefghijklmnopqrstuvwxyz<br />
                              1234567890!@#$%^&*()
                            </p>
                            <code className="text-xs text-primary/80 mt-3 block">font-family: font-mono</code>
                          </div>
                        </div>
                      </div>

                      {/* Typography Scale Names */}
                      <div className="mt-8">
                        <h4 className="text-xl font-semibold text-foreground mb-3">Typography Scale Names</h4>
                        <p className="text-muted-foreground mb-6">
                          Our typography system uses semantic names that correspond to specific use cases and hierarchy levels.
                        </p>
                        
                        <div className="space-y-4">
                          {[
                            { name: "Display", class: "text-6xl font-bold", example: "Display Text", usage: "Hero headings, marketing headlines" },
                            { name: "Heading 1", class: "text-4xl font-bold", example: "Heading 1", usage: "Page titles, major sections" },
                            { name: "Heading 2", class: "text-3xl font-semibold", example: "Heading 2", usage: "Section titles, card headers" },
                            { name: "Heading 3", class: "text-2xl font-semibold", example: "Heading 3", usage: "Subsection titles" },
                            { name: "Heading 4", class: "text-xl font-medium", example: "Heading 4", usage: "Minor headings, list titles" },
                            { name: "Body Large", class: "text-lg", example: "Body Large Text", usage: "Lead paragraphs, emphasized content" },
                            { name: "Body", class: "text-base", example: "Body Text", usage: "Default body text, paragraphs" },
                            { name: "Body Small", class: "text-sm", example: "Body Small Text", usage: "Secondary text, captions" },
                            { name: "Caption", class: "text-xs font-medium", example: "Caption Text", usage: "Image captions, metadata" },
                            { name: "Label", class: "text-xs font-semibold uppercase tracking-wide", example: "Label Text", usage: "Form labels, UI labels" }
                          ].map((typo) => (
                            <div key={typo.name} className="p-4 bg-card/50 rounded-lg border border-border/50">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h5 className="font-semibold text-foreground">{typo.name}</h5>
                                  <p className="text-sm text-muted-foreground">{typo.usage}</p>
                                </div>
                                <code className="text-xs bg-muted px-2 py-1 rounded">{typo.class}</code>
                              </div>
                              <div className={`${typo.class} text-foreground mb-2`}>{typo.example}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Component Tokens Tab */}
                <TabsContent value="components" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Box className="h-6 w-6 text-green-600 dark:text-green-400" />
                        Component Tokens (Tier 3)
                      </CardTitle>
                      <CardDescription>
                        Component-specific tokens for precise styling control. These tokens reference semantic tokens for consistency.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {Object.entries(componentTokens).map(([component, tokens]) => (
                          <div key={component}>
                            <h4 className="text-lg font-semibold text-foreground capitalize mb-4 flex items-center gap-2">
                              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                {component === "button" && <Box className="h-4 w-4 text-primary" />}
                                {component === "input" && <Type className="h-4 w-4 text-primary" />}
                                {component === "card" && <Layers className="h-4 w-4 text-primary" />}
                                {component === "badge" && <Badge className="h-4 w-4 text-primary">B</Badge>}
                              </div>
                              {component} Tokens
                            </h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {Object.entries(tokens).map(([name, data]) => (
                                <div 
                                  key={name}
                                  className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                                  onClick={() => handleCopyCode(`var(--${name})`, name)}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <code className="text-sm font-medium text-foreground">{name}</code>
                                    {copiedCode === name ? (
                                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                    ) : (
                                      <Copy className="h-4 w-4 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground mb-2">
                                    {(data as any).purpose || `Value: ${(data as any).value}`}
                                  </div>
                                  {(data as any).semantic && (
                                    <div className="flex items-center gap-2 mt-2">
                                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                      <code className="text-xs text-purple-400">{(data as any).semantic}</code>
                                    </div>
                                  )}
                                  {(data as any).reference && (
                                    <div className="flex items-center gap-2 mt-2">
                                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                      <code className="text-xs text-blue-600 dark:text-blue-400">{(data as any).reference}</code>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Playground Tab */}
                <TabsContent value="playground" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-primary" />
                        Token Playground
                      </CardTitle>
                      <CardDescription>
                        Experiment with tokens and see live previews of your changes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Controls */}
                        <div className="space-y-6">
                          <div>
                            <Label className="text-sm font-medium text-foreground mb-3 block">
                              Primary Colour
                            </Label>
                            <div className="flex items-center gap-4">
                              <input
                                type="color"
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="w-16 h-10 rounded cursor-pointer"
                              />
                              <Input
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="flex-1 font-mono"
                              />
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm font-medium text-foreground mb-3 block">
                              Border Radius
                            </Label>
                            <Slider
                              defaultValue={[6]}
                              max={24}
                              step={2}
                              className="w-full"
                            />
                          </div>

                          <div>
                            <Label className="text-sm font-medium text-foreground mb-3 block">
                              Theme Mode
                            </Label>
                            <div className="flex items-center gap-4">
                              <Switch
                                checked={previewTheme === "dark"}
                                onCheckedChange={(checked) => setPreviewTheme(checked ? "dark" : "light")}
                              />
                              <span className="text-sm text-muted-foreground">
                                {previewTheme === "dark" ? "Dark Mode" : "Light Mode"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Preview */}
                        <div 
                          className="p-6 rounded-xl border"
                          style={{ 
                            backgroundColor: previewTheme === "dark" ? "#020617" : "#ffffff",
                            borderColor: previewTheme === "dark" ? "#1e293b" : "#e2e8f0"
                          }}
                        >
                          <h4 
                            className="text-lg font-semibold mb-4"
                            style={{ color: previewTheme === "dark" ? "#f8fafc" : "#0f172a" }}
                          >
                            Component Preview
                          </h4>
                          <div className="space-y-4">
                            <button
                              className="px-4 py-2 rounded-md font-medium text-white transition-all hover:opacity-90"
                              style={{ 
                                backgroundColor: selectedColor,
                                borderRadius: "6px"
                              }}
                            >
                              Primary Button
                            </button>
                            <button
                              className="px-4 py-2 rounded-md font-medium transition-all ml-3"
                              style={{ 
                                backgroundColor: "transparent",
                                borderRadius: "6px",
                                border: `1px solid ${previewTheme === "dark" ? "#334155" : "#e2e8f0"}`,
                                color: previewTheme === "dark" ? "#f8fafc" : "#0f172a"
                              }}
                            >
                              Secondary Button
                            </button>
                            <div 
                              className="p-4 rounded-lg mt-4"
                              style={{
                                backgroundColor: previewTheme === "dark" ? "#0f172a" : "#f8fafc",
                                border: `1px solid ${previewTheme === "dark" ? "#1e293b" : "#e2e8f0"}`
                              }}
                            >
                              <div 
                                className="font-medium mb-1"
                                style={{ color: previewTheme === "dark" ? "#f8fafc" : "#0f172a" }}
                              >
                                Card Title
                              </div>
                              <div 
                                className="text-sm"
                                style={{ color: previewTheme === "dark" ? "#94a3b8" : "#64748b" }}
                              >
                                Card description with muted text styling.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Export Tab */}
                <TabsContent value="export" className="space-y-8">
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                        <Download className="h-6 w-6 text-primary" />
                        Export Tokens
                      </CardTitle>
                      <CardDescription>
                        Download tokens in your preferred format for use in any project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Format Selection */}
                        <div className="space-y-4">
                          <Label className="text-sm font-medium text-foreground">Export Format</Label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { id: "css", label: "CSS Variables", icon: FileCode },
                              { id: "scss", label: "SCSS Variables", icon: FileCode },
                              { id: "json", label: "JSON", icon: FileJson },
                              { id: "js", label: "JavaScript", icon: Code },
                            ].map((format) => (
                              <Button
                                key={format.id}
                                variant={exportFormat === format.id ? "default" : "outline"}
                                className="h-auto py-4 justify-start"
                                onClick={() => setExportFormat(format.id as any)}
                              >
                                <format.icon className="h-5 w-5 mr-3" />
                                {format.label}
                              </Button>
                            ))}
                          </div>

                          <div className="flex gap-3 mt-6">
                            <Button className="flex-1 bg-gradient-to-r from-primary to-purple-600">
                              <Download className="h-4 w-4 mr-2" />
                              Download {exportFormat.toUpperCase()}
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Figma className="h-4 w-4 mr-2" />
                              Sync to Figma
                            </Button>
                          </div>
                        </div>

                        {/* Code Preview */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <Label className="text-sm font-medium text-foreground">Preview</Label>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(generateExportCode(exportFormat, previewTheme), 'export-code')}
                            >
                              {copiedCode === 'export-code' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg border border-border/50 overflow-x-auto text-sm">
                            <code className="text-foreground/80">{generateExportCode(exportFormat, previewTheme)}</code>
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Integration Guide */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">Integration Guide</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">React / Next.js</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Import the CSS file in your root layout or _app file.
                          </p>
                          <code className="text-xs bg-card/50 p-2 rounded block">
                            import '@hawkbass/inclusive-design-core/tokens.css'
                          </code>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">Vue / Nuxt</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Add to your global styles or nuxt.config.
                          </p>
                          <code className="text-xs bg-card/50 p-2 rounded block">
                            css: ['@hawkbass/inclusive-design-core/tokens.css']
                          </code>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-foreground mb-2">Tailwind</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Extend your tailwind.config with token values.
                          </p>
                          <code className="text-xs bg-card/50 p-2 rounded block">
                            extend: require('@hawkbass/inclusive-design-core/tokens')
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Token Relationship Graph */}
          <section className="px-6 lg:px-12 py-8 bg-card/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 text-foreground">
                  Token Relationship Graph
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Visualize how tokens relate to each other and their dependencies
                </p>
              </div>

              <Card className="bg-card/50 border-border/50 mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Token Hierarchy</CardTitle>
                  <CardDescription>
                    Reference tokens → Semantic tokens → Component tokens
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Reference Tokens</h4>
                        <p className="text-sm text-muted-foreground mb-3">Raw color values, spacing units</p>
                        <div className="space-y-1">
                          <Badge variant="outline" className="text-xs">fuchsia-500</Badge>
                          <Badge variant="outline" className="text-xs">spacing-4</Badge>
                          <Badge variant="outline" className="text-xs">font-size-16</Badge>
                        </div>
                      </div>
                      <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Semantic Tokens</h4>
                        <p className="text-sm text-muted-foreground mb-3">Meaningful names, context-aware</p>
                        <div className="space-y-1">
                          <Badge variant="outline" className="text-xs">primary</Badge>
                          <Badge variant="outline" className="text-xs">spacing-md</Badge>
                          <Badge variant="outline" className="text-xs">text-base</Badge>
                        </div>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Component Tokens</h4>
                        <p className="text-sm text-muted-foreground mb-3">Component-specific values</p>
                        <div className="space-y-1">
                          <Badge variant="outline" className="text-xs">button-bg</Badge>
                          <Badge variant="outline" className="text-xs">card-padding</Badge>
                          <Badge variant="outline" className="text-xs">input-height</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <ArrowDown className="h-4 w-4" />
                      <span>Tokens flow from reference → semantic → component</span>
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Custom Token Builder */}
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Custom Token Builder
                  </CardTitle>
                  <CardDescription>
                    Create and export custom design tokens
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Token Name</Label>
                        <Input placeholder="e.g., brand-primary" className="bg-card/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label>Token Type</Label>
                        <Select>
                          <SelectTrigger className="bg-card/50 border-border">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="color">Color</SelectItem>
                            <SelectItem value="spacing">Spacing</SelectItem>
                            <SelectItem value="typography">Typography</SelectItem>
                            <SelectItem value="shadow">Shadow</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Token Value</Label>
                      <Input placeholder="e.g., #d946ef or 1rem" className="bg-card/50 border-border" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button className="bg-primary text-primary-foreground">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate Token
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export as CSS
                      </Button>
                      <Button variant="outline">
                        <FileJson className="h-4 w-4 mr-2" />
                        Export as JSON
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Resources */}
          <section className="px-6 lg:px-12 py-8 bg-card/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/design-system/principles" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-foreground">Design Principles</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Learn the philosophy behind our token decisions</p>
                </Link>
                <Link href="/components" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-foreground">Components</span>
                  </div>
                  <p className="text-sm text-muted-foreground">See tokens in action within components</p>
                </Link>
                <Link href="/design-system/theming" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="h-5 w-5 text-purple-400" />
                    <span className="font-medium text-foreground">Theming Guide</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Create custom themes with tokens</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
