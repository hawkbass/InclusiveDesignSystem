"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  Hexagon,
  ArrowRight,
  Palette,
  Code,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Zap,
  Star,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Briefcase,
  Eye,
  Download,
  Github,
  BookOpen,
  Layers,
  Grid3X3,
  Sparkles,
  Home as HomeIcon,
  Component as ComponentIcon,
  LayoutDashboard,
  Menu as MenuIcon,
  X as CloseIcon,
  Settings,
  ChevronRight,
  Play,
  Pause,
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Target,
  Globe,
  Lock,
  Cpu,
  Database,
  Monitor,
  Lightbulb,
  Search,
  Copy,
  ExternalLink,
  Maximize2,
  Minimize2,
  RotateCcw,
  Terminal,
  Flame,
  Gauge,
  Workflow,
  Beaker,
  Wand2,
  Heart,
  Filter,
  Grid,
  List,
  Loader2,
  Command,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Advanced Component Playground
function AdvancedComponentPlayground() {
  const [selectedComponent, setSelectedComponent] = useState("Button")
  const [demoVariant, setDemoVariant] = useState("default")
  const [demoSize, setDemoSize] = useState("default")
  const [isAnimating, setIsAnimating] = useState(false)
  const [codeExpanded, setCodeExpanded] = useState(false)
  const [customProps, setCustomProps] = useState("")
  const [copied, setCopied] = useState(false)
  
  const components = {
    Button: {
      variants: ["default", "secondary", "outline", "ghost", "destructive"],
      sizes: ["sm", "default", "lg"],
      code: `<Button variant="${demoVariant}" size="${demoSize}"${customProps ? ` ${customProps}` : ''}>
  <Sparkles className="mr-2 h-4 w-4" />
  Demo Button
</Button>`
    },
    Badge: {
      variants: ["default", "secondary", "outline", "destructive"],
      sizes: ["sm", "default", "lg"],
      code: `<Badge variant="${demoVariant}"${customProps ? ` ${customProps}` : ''}>
  Demo Badge
</Badge>`
    },
    Card: {
      variants: ["default", "elevated", "outline"],
      sizes: ["sm", "default", "lg"],
      code: `<Card variant="${demoVariant}"${customProps ? ` ${customProps}` : ''}>
  <CardHeader>
    <CardTitle>Demo Card</CardTitle>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</Card>`
    }
  }
  
  const currentComponent = components[selectedComponent as keyof typeof components]
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentComponent.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  const handleDemoClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all group" style={{ transitionDuration: 'var(--animation-speed)' }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Beaker className="h-5 w-5 text-fuchsia-400" />
            <CardTitle>Advanced Component Playground</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setCodeExpanded(!codeExpanded)}
              className="hover:bg-slate-700/50 transition-colors"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label={codeExpanded ? "Collapse code" : "Expand code"}
            >
              <Terminal className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={handleCopy}
              className="hover:bg-slate-700/50 transition-colors"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label="Copy code"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </Button>
            <Button
              size="sm" 
              variant="ghost" 
              className="hover:bg-slate-700/50 transition-colors"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardDescription>
          Experiment with components in real-time and copy the generated code
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Component Selector */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="component-select">Component</label>
            <Select value={selectedComponent} onValueChange={setSelectedComponent}>
              <SelectTrigger 
                id="component-select"
                className="hover:border-fuchsia-500/50 transition-colors" 
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(components).map((comp) => (
                  <SelectItem key={comp} value={comp}>{comp}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="variant-select">Variant</label>
            <Select value={demoVariant} onValueChange={setDemoVariant}>
              <SelectTrigger 
                id="variant-select"
                className="hover:border-fuchsia-500/50 transition-colors" 
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentComponent.variants.map((variant) => (
                  <SelectItem key={variant} value={variant} className="capitalize">{variant}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="size-select">Size</label>
            <Select value={demoSize} onValueChange={setDemoSize}>
              <SelectTrigger 
                id="size-select"
                className="hover:border-fuchsia-500/50 transition-colors" 
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentComponent.sizes.map((size) => (
                  <SelectItem key={size} value={size} className="capitalize">{size}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="custom-props">Custom Props</label>
            <Input
              id="custom-props"
              placeholder="disabled={true}"
              value={customProps}
              onChange={(e) => setCustomProps(e.target.value)}
              className="text-sm hover:border-fuchsia-500/50 transition-colors"
              style={{ transitionDuration: 'var(--animation-speed)' }}
            />
          </div>
        </div>
        
        {/* Live Preview */}
        <div className="border border-slate-700 rounded-lg p-8 bg-slate-900/50 flex items-center justify-center min-h-[120px] hover:border-slate-600 transition-colors" style={{ transitionDuration: 'var(--animation-speed)' }}>
          {selectedComponent === "Button" && (
            <Button 
              variant={demoVariant as any} 
              size={demoSize as any}
              className={`transition-all ${isAnimating ? 'scale-110 shadow-lg' : ''}`}
              style={{ transitionDuration: 'var(--animation-speed)' }}
              onClick={handleDemoClick}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Demo Button
                </Button>
          )}
          {selectedComponent === "Badge" && (
            <Badge 
              variant={demoVariant as any}
              className={`transition-all ${isAnimating ? 'scale-110' : ''}`}
              style={{ transitionDuration: 'var(--animation-speed)' }}
            >
              Demo Badge
            </Badge>
          )}
          {selectedComponent === "Card" && (
            <Card 
              className={`w-64 transition-all ${isAnimating ? 'scale-105' : ''}`}
              style={{ transitionDuration: 'var(--animation-speed)' }}
            >
              <CardHeader>
                <CardTitle>Demo Card</CardTitle>
              </CardHeader>
              <CardContent>
                Card content here
              </CardContent>
            </Card>
          )}
            </div>

        {/* Code Display */}
        <div className={`bg-slate-900/80 rounded-lg transition-all border border-slate-700/50 hover:border-slate-600/50 ${codeExpanded ? 'p-6' : 'p-4'}`} style={{ transitionDuration: 'var(--animation-speed)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-300">Generated Code</span>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={handleCopy}
              className="hover:bg-slate-800/50 transition-colors"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label="Copy code"
            >
              {copied ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
          <pre className={`text-sm text-slate-300 overflow-x-auto transition-all ${codeExpanded ? 'max-h-96' : 'max-h-24'}`} style={{ transitionDuration: 'var(--animation-speed)' }}>
            <code>{currentComponent.code}</code>
          </pre>
                </div>
      </CardContent>
    </Card>
  )
}

// Design Token Visualizer
function DesignTokenVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState("colors")
  const [searchTerm, setSearchTerm] = useState("")
  const [copiedToken, setCopiedToken] = useState("")
  
  const tokenCategories = {
    colors: {
      primary: { value: "#8b5cf6", usage: "Primary actions, links" },
      secondary: { value: "#64748b", usage: "Secondary actions" },
      success: { value: "#10b981", usage: "Success states, confirmations" },
      warning: { value: "#f59e0b", usage: "Warnings, cautions" },
      error: { value: "#ef4444", usage: "Errors, destructive actions" },
      fuchsia: { value: "#e879f9", usage: "Brand accent, highlights" },
      blue: { value: "#3b82f6", usage: "Information, links" },
      purple: { value: "#a855f7", usage: "Creative, premium features" },
    },
    spacing: {
      xs: { value: "0.25rem", usage: "Tight spacing" },
      sm: { value: "0.5rem", usage: "Small gaps" },
      md: { value: "1rem", usage: "Standard spacing" },
      lg: { value: "1.5rem", usage: "Large gaps" },
      xl: { value: "2rem", usage: "Section spacing" },
      "2xl": { value: "3rem", usage: "Page-level spacing" },
    },
    typography: {
      xs: { value: "0.75rem", usage: "Small text, captions" },
      sm: { value: "0.875rem", usage: "Body text small" },
      base: { value: "1rem", usage: "Body text" },
      lg: { value: "1.125rem", usage: "Large body text" },
      xl: { value: "1.25rem", usage: "Headings" },
      "2xl": { value: "1.5rem", usage: "Large headings" },
    }
  }
  
  const currentTokens = tokenCategories[selectedCategory as keyof typeof tokenCategories]
  const filteredTokens = Object.entries(currentTokens).filter(([name]) => 
    name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleCopyToken = async (name: string) => {
    try {
      const tokenValue = `var(--${selectedCategory}-${name})`
      await navigator.clipboard.writeText(tokenValue)
      setCopiedToken(name)
      setTimeout(() => setCopiedToken(""), 2000)
    } catch (err) {
      console.error('Failed to copy token:', err)
    }
  }
  
  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-purple-400" />
          Design Token Visualizer
        </CardTitle>
        <CardDescription>
          Explore and copy design tokens with live previews
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Controls */}
        <div className="flex gap-4 items-center">
          <div className="space-y-2 flex-1">
            <label className="text-sm font-medium" htmlFor="token-search">Search Tokens</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="token-search"
                placeholder="Search tokens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 hover:border-purple-500/50 transition-colors"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="category-select">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger 
                id="category-select"
                className="w-40 hover:border-purple-500/50 transition-colors" 
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="colors">Colors</SelectItem>
                <SelectItem value="spacing">Spacing</SelectItem>
                <SelectItem value="typography">Typography</SelectItem>
              </SelectContent>
            </Select>
        </div>
          </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTokens.map(([name, token]) => (
            <div 
              key={name} 
              className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all group cursor-pointer hover:bg-slate-900/70"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              onClick={() => handleCopyToken(name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCopyToken(name)
                }
              }}
              aria-label={`Copy token ${name} with value ${token.value}`}
            >
              <div className="flex items-center gap-3 mb-2">
                {selectedCategory === "colors" && (
                  <div 
                    className="w-8 h-8 rounded-lg border-2 border-slate-600 shadow-lg"
                    style={{ backgroundColor: token.value }}
                    aria-hidden="true"
                  />
                )}
                {selectedCategory === "spacing" && (
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg border border-purple-500/50 flex items-center justify-center" aria-hidden="true">
                    <div 
                      className="bg-purple-400 rounded"
                      style={{ width: token.value, height: "3px" }}
                    />
                  </div>
                )}
                {selectedCategory === "typography" && (
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg border border-blue-500/50 flex items-center justify-center" aria-hidden="true">
                    <span 
                      className="text-blue-400 font-bold"
                      style={{ fontSize: token.value }}
                    >
                      Aa
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-medium text-slate-200">--{selectedCategory}-{name}</div>
                  <div className="text-sm text-slate-400 font-mono">{token.value}</div>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyToken(name)
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500/20"
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                  aria-label={`Copy ${name} token`}
                >
                  {copiedToken === name ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
              <div className="text-xs text-slate-500">{token.usage}</div>
              </div>
            ))}
        </div>
        
        {filteredTokens.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No tokens found</p>
            <p className="text-sm">Try searching for a different term or category</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Performance Dashboard
function PerformanceDashboard() {
  const [timeRange, setTimeRange] = useState("7d")
  
  const metrics = [
    { name: "Bundle Size", value: "142kb", change: "-8%", trend: "down", icon: Database, color: "text-blue-400" },
    { name: "Load Time", value: "0.89s", change: "-12%", trend: "down", icon: Gauge, color: "text-green-400" },
    { name: "Lighthouse Score", value: "94", change: "+2", trend: "up", icon: Star, color: "text-yellow-400" },
    { name: "Tree Shaking", value: "87%", change: "+5%", trend: "up", icon: Workflow, color: "text-purple-400" },
  ]
  
  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
                  <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-400" />
            <CardTitle>Performance Dashboard</CardTitle>
                        </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger 
              className="w-24 hover:border-orange-500/50 transition-colors" 
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label="Select time range"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">24h</SelectItem>
              <SelectItem value="7d">7d</SelectItem>
              <SelectItem value="30d">30d</SelectItem>
            </SelectContent>
          </Select>
                      </div>
        <CardDescription>
          Real-time performance metrics for the design system
        </CardDescription>
                  </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="p-4 bg-slate-900/50 rounded-lg group hover:bg-slate-900/70 transition-all cursor-pointer hover:scale-105"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              role="button"
              tabIndex={0}
              aria-label={`${metric.name}: ${metric.value}, change: ${metric.change}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: 'var(--animation-speed)' }}>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                      </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 mb-1">{metric.name}</div>
                  <div className="text-lg font-bold">{metric.value}</div>
                      </div>
                      </div>
              <div className={`text-xs flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                <TrendingUp className={`h-3 w-3 transition-transform ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                {metric.change}
                      </div>
                    </div>
          ))}
                    </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-6 p-8 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors group" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <div className="flex items-center justify-center text-slate-400">
            <BarChart3 className="h-12 w-12 mr-4 group-hover:scale-110 transition-transform" style={{ transitionDuration: 'var(--animation-speed)' }} />
            <div>
              <div className="font-medium text-slate-300">Performance Trends</div>
              <div className="text-sm">Bundle size and load time over {timeRange}</div>
            </div>
          </div>
                    </div>
                  </CardContent>
                </Card>
  )
}

export default function HomePage() {
  const [animationSpeed, setAnimationSpeed] = useState([1])

  // Apply animation speed to document
  useEffect(() => {
    if (animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed])

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        <div className="px-6 lg:px-12 py-8">
          {/* Hero Section */}
          <section className="mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-8 sm:py-12">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Live System
                </Badge>
                <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                  v2.1.0 Latest
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Enterprise
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Inclusive Design System
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Your enterprise-grade UI foundation. Build consistent, accessible, and performant interfaces with our comprehensive component library, design tokens, and advanced patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link href="/components">
                  <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition-all group w-full sm:w-auto">
                    <ComponentIcon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> 
                    Explore Components
                  </Button>
                </Link>
                <Link href="/design-system/getting-started">
                  <Button size="lg" variant="outline" className="hover:bg-fuchsia-500/10 border-fuchsia-500/30 group w-full sm:w-auto">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> 
                    Getting Started
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Key Stats */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: ComponentIcon, label: "Components", value: "49+", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
                { icon: Palette, label: "Design Tokens", value: "200+", color: "text-blue-400", bg: "bg-blue-500/10" },
                { icon: Shield, label: "Accessibility", value: "AAA", color: "text-green-400", bg: "bg-green-500/10" },
                { icon: Gauge, label: "Performance", value: "94", color: "text-purple-400", bg: "bg-purple-500/10" },
              ].map((stat, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-20">
            <div className="mb-6 sm:mb-8 px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">Quick Actions</h2>
              <p className="text-slate-400">Jump into the most commonly used features and tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Component Library",
                  description: "Browse 49+ production-ready components",
                  icon: ComponentIcon,
                  href: "/components",
                  color: "from-fuchsia-500 to-purple-600",
                  stats: "49+ Components"
                },
                {
                  title: "Style Guide",
                  description: "Design tokens, typography, and color systems",
                  icon: Palette,
                  href: "/style-guide",
                  color: "from-blue-500 to-cyan-600",
                  stats: "200+ Tokens"
                },
                {
                  title: "Design System",
                  description: "Principles, patterns, and best practices",
                  icon: BookOpen,
                  href: "/design-system",
                  color: "from-green-500 to-emerald-600",
                  stats: "11+ Sections"
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 cursor-pointer relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  <CardContent className="p-4 sm:p-6 relative">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-100">{item.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{item.stats}</span>
                      <Link href={item.href}>
                        <Button size="sm" variant="outline" className="group-hover:bg-slate-700">
                          Explore
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="mb-20">
            <div className="mb-6 sm:mb-8 px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">Interactive Playground</h2>
              <p className="text-slate-400">Experiment with components and see live examples</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <AdvancedComponentPlayground />
              <DesignTokenVisualizer />
            </div>
          </section>

          {/* Performance Dashboard */}
          <section className="mb-20">
            <PerformanceDashboard />
          </section>
        </div>
      </main>
    </div>
  )
}
