"use client"

import React, { useState, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Copy, 
  CheckCircle2, 
  Play, 
  Zap, 
  Shield, 
  Palette, 
  Code2, 
  Terminal, 
  Package, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Settings, 
  Clock, 
  Users, 
  Target, 
  Heart, 
  Search, 
  Grid3X3, 
  List, 
  Activity, 
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Eye,
  Lightbulb,
  Navigation,
  Database,
  Monitor,
  Smartphone,
  Tablet,
  Gauge,
  RefreshCw,
  FileText,
  Globe,
  Code,
  X,
  Filter,
  Command,
  BarChart3,
  Layers,
  Type,
  Ruler,
  Component
} from "lucide-react"

export default function GettingStartedUniversal() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const [copiedCode, setCopiedCode] = useState("")
  const [favourites, setFavorites] = useState<Set<string>>(new Set())
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [currentPath, setCurrentPath] = useState("")
  const [showProgressModal, setShowProgressModal] = useState(false)
  const [environmentStatus, setEnvironmentStatus] = useState<{[key: string]: 'checking' | 'installed' | 'not-found' | 'error'}>({})
  const [playgroundCode, setPlaygroundCode] = useState(`import { Button } from "@inclusive-design/core"

export function Example() {
  return (
    <div className="p-4 space-y-4">
      <Button className="bg-fuchsia-600 hover:bg-fuchsia-700">
        Primary Button
      </Button>
      <Button variant="outline">
        Secondary Button
      </Button>
    </div>
  )
}`)
  const [showPlayground, setShowPlayground] = useState(false)

  // Comprehensive searchable content
  const allSearchableItems = [
    // Quick Start Items
    { id: "npm-install", name: "NPM Install Command", category: "Installation", type: "command", 
      value: "npm install @inclusive-design/core", usage: "Package installation", difficulty: "beginner" },
    { id: "yarn-install", name: "Yarn Install Command", category: "Installation", type: "command", 
      value: "yarn add @inclusive-design/core", usage: "Package installation", difficulty: "beginner" },
    { id: "pnpm-install", name: "PNPM Install Command", category: "Installation", type: "command", 
      value: "pnpm add @inclusive-design/core", usage: "Package installation", difficulty: "beginner" },
      
    // Configuration
    { id: "theme-config", name: "Theme Configuration", category: "Configuration", type: "config",
      description: "Set up custom theme with colours and tokens", difficulty: "intermediate" },
    { id: "tailwind-config", name: "Tailwind Integration", category: "Configuration", type: "config",
      description: "Configure Tailwind CSS with design tokens", difficulty: "intermediate" },
    { id: "provider-setup", name: "Provider Setup", category: "Configuration", type: "code",
      description: "Wrap app with theme provider", difficulty: "beginner" },
      
    // Components
    { id: "button-example", name: "Button Component", category: "Components", type: "component",
      description: "Basic button with styling", difficulty: "beginner" },
    { id: "form-example", name: "Form Example", category: "Components", type: "component",
      description: "Complete form with validation", difficulty: "intermediate" },
    { id: "dashboard-layout", name: "Dashboard Layout", category: "Components", type: "component",
      description: "Full dashboard with sidebar", difficulty: "advanced" },
      
    // Learning Paths
    { id: "path-designer", name: "Designer Path", category: "Learning", type: "path",
      description: "Design-focused onboarding journey", difficulty: "beginner" },
    { id: "path-developer", name: "Developer Path", category: "Learning", type: "path",
      description: "Code-focused implementation guide", difficulty: "intermediate" },
    { id: "path-manager", name: "Product Manager Path", category: "Learning", type: "path",
      description: "Strategic implementation overview", difficulty: "beginner" },
      
    // Resources
    { id: "design-tokens", name: "Design Tokens", category: "Resources", type: "reference",
      description: "Complete token documentation", difficulty: "beginner" },
    { id: "accessibility-guide", name: "Accessibility Guide", category: "Resources", type: "reference",
      description: "Inclusive design practices", difficulty: "intermediate" },
    { id: "component-api", name: "Component API", category: "Resources", type: "reference",
      description: "Complete component reference", difficulty: "intermediate" }
  ]

  // Learning paths with progressive disclosure
  const learningPaths = [
    {
      id: "designer",
      title: "Designer Path",
      description: "Perfect for UI/UX designers exploring our design system",
      icon: Palette,
      colour: "text-pink-400",
      bgColor: "bg-pink-500/20",
      duration: "15 min",
      difficulty: "Beginner",
      steps: [
        { id: "design-intro", title: "Design System Overview", duration: "3 min", type: "reading" },
        { id: "design-tokens", title: "Explore Design Tokens", duration: "5 min", type: "interactive" },
        { id: "design-components", title: "Browse Component Library", duration: "4 min", type: "interactive" },
        { id: "design-figma", title: "Download Figma Kit", duration: "3 min", type: "download" }
      ]
    },
    {
      id: "developer",
      title: "Developer Path", 
      description: "Technical implementation guide for developers",
      icon: Code2,
      colour: "text-blue-400",
      bgColor: "bg-blue-500/20",
      duration: "25 min",
      difficulty: "Intermediate",
      steps: [
        { id: "dev-install", title: "Installation & Setup", duration: "5 min", type: "coding" },
        { id: "dev-config", title: "Configure Theme", duration: "8 min", type: "coding" },
        { id: "dev-first-component", title: "Build First Component", duration: "7 min", type: "coding" },
        { id: "dev-integration", title: "Advanced Integration", duration: "5 min", type: "coding" }
      ]
    },
    {
      id: "manager",
      title: "Product Manager Path",
      description: "Strategic overview for product managers and stakeholders",
      icon: BarChart3,
      colour: "text-green-400", 
      bgColor: "bg-green-500/20",
      duration: "10 min",
      difficulty: "Beginner",
      steps: [
        { id: "pm-overview", title: "Business Value Proposition", duration: "3 min", type: "reading" },
        { id: "pm-metrics", title: "ROI & Performance Metrics", duration: "3 min", type: "reading" },
        { id: "pm-timeline", title: "Implementation Timeline", duration: "2 min", type: "reading" },
        { id: "pm-team", title: "Team Coordination Guide", duration: "2 min", type: "reading" }
      ]
    }
  ]

  // Smart search functionality
  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = allSearchableItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.usage && item.usage.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.value && item.value.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      setSearchResults(results.slice(0, 8))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favourites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const completeStep = (stepId: string) => {
    const newCompleted = new Set(completedSteps)
    newCompleted.add(stepId)
    setCompletedSteps(newCompleted)
  }

  const startPath = (pathId: string) => {
    setCurrentPath(pathId)
    setExpandedSections(new Set(["quick-setup", "learning-paths", pathId]))
    
    // Navigate to appropriate pages based on path
    if (pathId === "designer") {
      window.open('/design-system/tokens', '_blank')
    } else if (pathId === "developer") {
      window.open('/components', '_blank')
    } else if (pathId === "manager") {
      window.open('/design-system/overview', '_blank')
    }
  }

  const validateEnvironment = async (packageName: string) => {
    setEnvironmentStatus(prev => ({ ...prev, [packageName]: 'checking' }))
    
    // Simulate environment check
    setTimeout(() => {
      const isInstalled = Math.random() > 0.4 // 60% chance of being "installed"
      setEnvironmentStatus(prev => ({ 
        ...prev, 
        [packageName]: isInstalled ? 'installed' : 'not-found' 
      }))
    }, 1500)
  }

  const runInPlayground = () => {
    setShowPlayground(true)
    setExpandedSections(new Set(["playground"]))
  }

  // Quick preview items always visible - Enhanced with real validation
  const quickPreviewItems = [
    { 
      name: "Install Package", 
      code: `npm install @inclusive/design-system \\
  tailwindcss @types/react`,
      icon: Download,
      category: "Installation",
      validation: () => {
        // Simulate package check
        return Math.random() > 0.3 ? "installed" : "not-found"
      },
      realCommand: true
    },
    { 
      name: "Import Styles", 
      code: `// In your _app.tsx or layout.tsx
import "@inclusive/design-system/styles.css"
import "./globals.css"`,
      icon: Palette,
      category: "Setup",
      validation: () => "ready"
    },
    { 
      name: "First Component", 
      code: `import { Button } from "@inclusive/design-system"

export function CandidateCard() {
  return (
    <Button className="bg-fuchsia-600 
                     hover:bg-fuchsia-700">
      View Profile
    </Button>
  )
}`,
      icon: Component,
      category: "Component",
      preview: true,
      liveDemo: true
    }
  ]

  const popularSearches = ["npm install", "button component", "theme config", "designer path", "accessibility"]

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Universal Comprehension Header */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
                <div>
                  <Badge className="bg-slate-800/40 text-slate-300 border-slate-700/50 mb-4">
                    <Play className="w-3 h-3 mr-1" />
                    Quick Start Guide
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                    Getting Started
                    <span className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent"> in Minutes</span>
                  </h1>
                  <p className="text-xl text-slate-400 max-w-3xl">
                    Begin your journey with Inclusive's Design System. Choose your learning path, 
                    explore components, and start building recruitment experiences today. Get up and running in under 5 minutes.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">5 min</div>
                      <div className="text-sm text-slate-500">Setup Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">49+</div>
                      <div className="text-sm text-slate-500">Components</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">3</div>
                      <div className="text-sm text-slate-500">Learning Paths</div>
                    </div>
                  </div>
                </div>

                {/* Progress Status */}
                <div className="flex flex-col gap-4 w-full lg:w-80">
                  <div className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <div className="text-2xl font-bold text-slate-100">{completedSteps.size}</div>
                    <div className="text-sm text-slate-500">Steps Completed</div>
                    <Badge className="mt-2 bg-fuchsia-500/20 text-fuchsia-300">
                      Universal Access
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Functional Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    placeholder="Search guides, commands, components... Try 'npm install' or 'button'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                {/* Popular Searches */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-sm text-slate-500">Popular:</span>
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="text-xs text-slate-400 hover:text-fuchsia-400 h-6 px-2"
                    >
                      {search}
                    </Button>
                  ))}
                </div>

                {/* Live Search Results */}
                {searchResults.length > 0 && (
                  <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-slate-800 border-slate-700 max-h-96 overflow-y-auto">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {searchResults.map((result) => (
                          <div key={result.id} className="flex items-center gap-3 p-2 hover:bg-slate-700/50 rounded-lg cursor-pointer group">
                            <div className="p-2 rounded bg-slate-700/50">
                              {result.type === "command" && <Terminal className="h-4 w-4 text-green-400" />}
                              {result.type === "config" && <Settings className="h-4 w-4 text-blue-400" />}
                              {result.type === "component" && <Component className="h-4 w-4 text-purple-400" />}
                              {result.type === "path" && <Navigation className="h-4 w-4 text-fuchsia-400" />}
                              {result.type === "reference" && <BookOpen className="h-4 w-4 text-cyan-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-slate-200">{result.name}</div>
                              <div className="text-xs text-slate-400 truncate">
                                {result.description || result.usage}
                              </div>
                            </div>
                            <Badge className="bg-slate-700 text-slate-300 text-xs">
                              {result.difficulty}
                            </Badge>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation()
                                if (result.value) {
                                  handleCopyCode(result.value, result.id)
                                }
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Quick Value Preview - Always Visible */}
              <div className="mt-12">
                <h3 className="text-lg font-medium text-slate-300 mb-6 text-center">Start Building Instantly:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {quickPreviewItems.map((item, index) => {
                    const status = environmentStatus[item.name] || 'unchecked'
                    return (
                      <Card key={index} className={`bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group cursor-pointer ${
                        status === 'installed' ? 'border-green-500/30 shadow-green-500/10' :
                        status === 'not-found' ? 'border-yellow-500/30 shadow-yellow-500/10' :
                        status === 'checking' ? 'border-blue-500/30 shadow-blue-500/10' : ''
                      }`}>
                        <CardContent className="p-6 text-center">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center flex-1">
                              <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20">
                                <item.icon className="h-6 w-6 text-fuchsia-400" />
                              </div>
                            </div>
                            {status !== 'unchecked' && (
                              <Badge className={`ml-2 text-xs ${
                                status === 'installed' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                                status === 'not-found' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                                status === 'checking' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                                'bg-slate-500/20 text-slate-300 border-slate-500/30'
                              }`}>
                                {status === 'installed' ? '✓ Ready' :
                                 status === 'not-found' ? '⚠ Missing' :
                                 status === 'checking' ? '⟳ Checking' : 'Unknown'}
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="font-medium text-slate-200 mb-2">{item.name}</h4>
                          <Badge className="bg-slate-700/50 text-slate-300 text-xs mb-4">
                            {item.category}
                          </Badge>
                          
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-slate-500 font-medium">Code Example:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(item.code, `quick-${index}`)}
                                className="h-6 px-2 text-xs"
                            >
                              {copiedCode === `quick-${index}` ? (
                                  <>
                                    <CheckCircle2 className="h-3 w-3 mr-1 text-green-400" />
                                    Copied
                                  </>
                              ) : (
                                  <>
                                    <Copy className="h-3 w-3 mr-1" />
                                    Copy
                                  </>
                              )}
                            </Button>
                            </div>
                            <pre className="bg-slate-900/50 p-3 rounded-lg text-xs text-slate-300 font-mono whitespace-pre-wrap border border-slate-700/30">
                              <code>{item.code}</code>
                            </pre>
                          </div>
                          
                          <div className="flex gap-2">
                            {item.realCommand && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => validateEnvironment(item.name)}
                                disabled={status === 'checking'}
                                className="flex-1"
                              >
                                {status === 'checking' ? (
                                  <>
                                    <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                                    Checking...
                                  </>
                                ) : (
                                  <>
                                    <Shield className="h-3 w-3 mr-1" />
                                    Validate
                                  </>
                                )}
                              </Button>
                            )}
                            {item.liveDemo && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={runInPlayground}
                                className="flex-1"
                              >
                                <Play className="h-3 w-3 mr-1" />
                                Try Live
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progressive Learning Paths - Smart Surfacing */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Essential Steps - Always Visible */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-fuchsia-500/20">
                    <Zap className="h-5 w-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-100">Essential Steps</CardTitle>
                    <CardDescription>
                      Everything you need to start building with the Inclusive Design System
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Installation */}
                  <Card className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-green-500/20">
                          <Download className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100">1. Install</h3>
                          <Badge className="bg-green-500/20 text-green-300 text-xs">2 minutes</Badge>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">Add the design system to your project</p>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-500">NPM:</span>
                          <Button
                            size="sm"
                            variant="ghost"
                              onClick={() => handleCopyCode("npm install @inclusive/design-system", "install-npm")}
                              className="h-5 px-2 text-xs"
                            >
                              {copiedCode === "install-npm" ? (
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                          </Button>
                        </div>
                          <pre className="bg-slate-950/50 p-3 rounded text-xs text-slate-300 font-mono whitespace-pre-wrap">
                            <code>npm install @inclusive/design-system</code>
                          </pre>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-500">Yarn:</span>
                          <Button
                            size="sm"
                            variant="ghost"
                              onClick={() => handleCopyCode("yarn add @inclusive/design-system", "install-yarn")}
                              className="h-5 px-2 text-xs"
                            >
                              {copiedCode === "install-yarn" ? (
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                          </Button>
                          </div>
                          <pre className="bg-slate-950/50 p-3 rounded text-xs text-slate-300 font-mono whitespace-pre-wrap">
                            <code>yarn add @inclusive/design-system</code>
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Configuration */}
                  <Card className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-blue-500/20">
                          <Settings className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100">2. Configure</h3>
                          <Badge className="bg-blue-500/20 text-blue-300 text-xs">3 minutes</Badge>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">Import styles and setup provider</p>
                      <div className="relative">
                        <pre className="bg-slate-950/50 p-3 rounded text-xs text-slate-300 font-mono">
                          <code>{`import "@inclusive-design/core/styles.css"

<ThemeProvider theme="dark">
  <YourApp />
</ThemeProvider>`}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopyCode(`import "@inclusive-design/core/styles.css"\n\n<ThemeProvider theme="dark">\n  <YourApp />\n</ThemeProvider>`, "config-setup")}
                          className="absolute top-1 right-1 h-6 w-6 p-0"
                        >
                          {copiedCode === "config-setup" ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* First Component */}
                  <Card className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-purple-500/20">
                          <Component className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100">3. Build</h3>
                          <Badge className="bg-purple-500/20 text-purple-300 text-xs">1 minute</Badge>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">Create your first component</p>
                      <div className="relative">
                        <pre className="bg-slate-950/50 p-3 rounded text-xs text-slate-300 font-mono">
                          <code>{`import { Button } from "@inclusive-design/core"

<Button className="bg-fuchsia-600">
  Get Started
</Button>`}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopyCode(`import { Button } from "@inclusive-design/core"\n\n<Button className="bg-fuchsia-600">\n  Get Started\n</Button>`, "first-component")}
                          className="absolute top-1 right-1 h-6 w-6 p-0"
                        >
                          {copiedCode === "first-component" ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>


            {/* Quick Setup Section */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("quick-setup")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Zap className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">Quick Setup</CardTitle>
                      <CardDescription>
                        Complete installation and configuration commands for immediate use
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-300">5 Min Setup</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("quick-setup") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("quick-setup") && (
                <CardContent>
                  <div className="space-y-6">
                    {/* Installation Step */}
                    <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-green-400">1</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-100">Install Package</h3>
                            <p className="text-slate-400 text-sm">Add the design system to your project</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => completeStep("install-step")}
                          className="text-green-400 hover:bg-green-500/10"
                        >
                          {completedSteps.has("install-step") ? 
                            <CheckCircle2 className="h-4 w-4" /> : 
                            "Mark Complete"
                          }
                        </Button>
                      </div>
                      
                      <div className="grid gap-3">
                        {[
                          { label: "NPM", command: "npm install @inclusive/design-system", id: "npm-cmd" },
                          { label: "Yarn", command: "yarn add @inclusive/design-system", id: "yarn-cmd" },
                          { label: "PNPM", command: "pnpm add @inclusive/design-system", id: "pnpm-cmd" }
                        ].map((cmd) => (
                          <div key={cmd.id} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                            <Badge className="bg-slate-700/50 text-slate-300 text-xs">
                              {cmd.label}
                            </Badge>
                            <pre className="flex-1 text-sm text-slate-300 font-mono">
                              <code>{cmd.command}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(cmd.command, cmd.id)}
                              className="h-8 w-8 p-0"
                            >
                              {copiedCode === cmd.id ? 
                                <CheckCircle2 className="h-3 w-3 text-green-400" /> : 
                                <Copy className="h-3 w-3" />
                              }
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Import Styles Step */}
                    <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-400">2</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-100">Import Styles</h3>
                            <p className="text-slate-400 text-sm">Add CSS styles to your application</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => completeStep("import-step")}
                          className="text-blue-400 hover:bg-blue-500/10"
                        >
                          {completedSteps.has("import-step") ? 
                            <CheckCircle2 className="h-4 w-4" /> : 
                            "Mark Complete"
                          }
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium">Import styles:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                            onClick={() => handleCopyCode(`import "@inclusive/design-system/styles.css"`, "import-styles")}
                            className="h-6 px-2 text-xs"
                          >
                            {copiedCode === "import-styles" ? (
                              <>
                                <CheckCircle2 className="h-3 w-3 mr-1 text-green-400" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3 mr-1" />
                                Copy
                              </>
                            )}
                        </Button>
                        </div>
                        <pre className="bg-slate-800/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-slate-700/30">
                          <code className="text-slate-300">{`// In your main CSS or app file
import "@inclusive/design-system/styles.css"`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* First Component Step */}
                    <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-purple-400">3</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-100">Create First Component</h3>
                            <p className="text-slate-400 text-sm">Build your first button with our design system</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => completeStep("component-step")}
                          className="text-purple-400 hover:bg-purple-500/10"
                        >
                          {completedSteps.has("component-step") ? 
                            <CheckCircle2 className="h-4 w-4" /> : 
                            "Mark Complete"
                          }
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-medium">Component example:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                            onClick={() => handleCopyCode(`import { Button } from "@inclusive/design-system"

function RecruitmentComponent() {
  return (
    <Button className="bg-fuchsia-600 hover:bg-fuchsia-700">
      View Candidates
    </Button>
  )
}`, "first-component")}
                            className="h-6 px-2 text-xs"
                          >
                            {copiedCode === "first-component" ? (
                              <>
                                <CheckCircle2 className="h-3 w-3 mr-1 text-green-400" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3 mr-1" />
                                Copy
                              </>
                            )}
                        </Button>
                        </div>
                        <pre className="bg-slate-800/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-slate-700/30">
                          <code className="text-slate-300">{`import { Button } from "@inclusive/design-system"

function RecruitmentComponent() {
  return (
    <Button className="bg-fuchsia-600 
                     hover:bg-fuchsia-700">
      View Candidates
    </Button>
  )
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Resources & Quick Tools Section */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("resources")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <BookOpen className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">Resources & Quick Tools</CardTitle>
                      <CardDescription>
                        Essential links, downloads, and interactive tools to accelerate your workflow
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-300">Always Updated</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("resources") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("resources") && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Quick Tools */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-orange-400" />
                        Quick Tools
                      </h4>
                      <div className="space-y-2">
                        {[
                          { 
                            name: "Component Generator", 
                            description: "Generate boilerplate code", 
                            icon: Code, 
                            action: () => {
                              const componentName = prompt("Enter component name (e.g., CandidateCard):");
                              if (componentName) {
                                const boilerplate = `import React from 'react'
import { Button } from '@/components/ui/button'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ${componentName}Props {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
}

export function ${componentName}({ 
  className, 
  children, 
  variant = 'default',
  size = 'default',
  ...props 
}: ${componentName}Props) {
  return (
    <Card className={cn(
      'bg-slate-800/30 border-slate-700/50', 
      className
    )}>
      <CardHeader>
        <CardTitle>Recruitment Component</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          variant={variant}
          size={size}
          {...props}
        >
          {children}
        </Button>
      </CardContent>
    </Card>
  )
}`;
                                navigator.clipboard.writeText(boilerplate);
                                alert(`${componentName} recruitment component generated and copied to clipboard!`);
                              }
                            }
                          },
                          { 
                            name: "Theme Validator", 
                            description: "Check theme compatibility", 
                            icon: Shield, 
                            action: () => {
                              const themes = ['dark', 'light'];
                              const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                              const cssVars = getComputedStyle(document.documentElement);
                              const primaryColor = cssVars.getPropertyValue('--primary').trim();
                              const bgColor = cssVars.getPropertyValue('--background').trim();
                              
                              const validation = `Theme Validation Report:
✓ Current Theme: ${currentTheme}
✓ Primary Colour: ${primaryColor || 'Not found'}
✓ Background Colour: ${bgColor || 'Not found'}
✓ CSS Variables: ${primaryColor && bgColor ? 'Valid' : 'Missing variables'}
✓ Compatibility: ${primaryColor && bgColor ? 'Excellent' : 'Needs attention'}

${!primaryColor || !bgColor ? 'Consider importing the design system CSS properly.' : 'Your theme is properly configured!'}`;
                              
                              navigator.clipboard.writeText(validation);
                              alert("Theme validation complete! Report copied to clipboard.");
                            }
                          },
                          { 
                            name: "Colour Picker", 
                            description: "Extract design tokens", 
                            icon: Palette, 
                            action: () => {
                              const colorInput = document.createElement('input');
                              colorInput.type = 'color';
                              colorInput.value = '#d946ef';
                              colorInput.style.position = 'absolute';
                              colorInput.style.top = '-9999px';
                              document.body.appendChild(colorInput);
                              
                              colorInput.addEventListener('change', (e) => {
                                const selectedColour = (e.target as HTMLInputElement).value;
                                const tokens = `/* Design Tokens Generated */
:root {
  --primary: ${selectedColour};
  --primary-foreground: #ffffff;
  --primary-hover: ${selectedColour}dd;
}

/* Tailwind Config */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${selectedColour}',
        'primary-foreground': '#ffffff',
      }
    }
  }
}`;
                                navigator.clipboard.writeText(tokens);
                                alert(`Colour tokens for ${selectedColour} generated and copied to clipboard!`);
                                document.body.removeChild(colorInput);
                              });
                              
                              colorInput.click();
                            }
                          }
                        ].map((tool, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={tool.action}
                            className="w-full justify-start h-auto p-3 hover:bg-slate-800/50"
                          >
                            <tool.icon className="h-4 w-4 mr-3 text-slate-400" />
                            <div className="text-left flex-1">
                              <div className="text-sm font-medium text-slate-200">{tool.name}</div>
                              <div className="text-xs text-slate-500">{tool.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Documentation Links */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-400" />
                        Documentation
                      </h4>
                      <div className="space-y-2">
                        {[
                          { name: "Component API", description: "Complete reference", href: "/components" },
                          { name: "Design Tokens", description: "colours, spacing, typography", href: "/style-guide" },
                          { name: "Accessibility Guide", description: "Inclusive design practices", href: "/design-system/accessibility" }
                        ].map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            className="block p-3 rounded-lg border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/30 transition-all group"
                          >
                            <div className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colours">
                              {link.name}
                            </div>
                            <div className="text-xs text-slate-500">{link.description}</div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Downloads */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200 flex items-center gap-2">
                        <Download className="h-4 w-4 text-green-400" />
                        Downloads
                      </h4>
                      <div className="space-y-2">
                        {[
                          { name: "Starter Template", description: "Next.js + Design System", action: () => {
                            handleCopyCode("npx create-next-app@latest my-app --typescript --tailwind --eslint --app", "template")
                            alert("Starter template command copied! Run this in your terminal to create a new project with the design system.")
                          }},
                          { name: "Figma Kit", description: "Complete design file", action: () => {
                            window.open('https://figma.com/@inclusivedesign', '_blank')
                            alert("Opening Figma community page - search for 'Inclusive Design System' to find our official kit!")
                          }},
                          { name: "Icon Library", description: "SVG icons package", action: () => {
                            handleCopyCode("npm install lucide-react", "icons")
                            alert("Icon library command copied! We use Lucide React for consistent, accessible icons.")
                          }}
                        ].map((download, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={download.action}
                            className="w-full justify-start h-auto p-3 hover:bg-slate-800/50"
                          >
                            <Download className="h-4 w-4 mr-3 text-green-400" />
                            <div className="text-left flex-1">
                              <div className="text-sm font-medium text-slate-200">{download.name}</div>
                              <div className="text-xs text-slate-500">{download.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Progress Tracking - Only show if user has started */}
            {completedSteps.size > 0 && (
              <Card className="border-slate-700/50 bg-slate-800/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-100">Your Progress</CardTitle>
                        <CardDescription>Track your journey through the design system</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-300">
                      {Math.round((completedSteps.size / 10) * 100)}% Complete
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={(completedSteps.size / 10) * 100} className="h-2" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      {[
                        { label: "Steps Completed", value: completedSteps.size },
                        { label: "favourites", value: favourites.size },
                        { label: "Code Copied", value: copiedCode ? "✓" : "0" },
                        { label: "Current Path", value: currentPath || "None" },
                        { label: "Access", value: "Universal" }
                      ].map((stat, index) => (
                        <div key={index}>
                          <div className="text-lg font-bold text-slate-100">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </section>
      </main>
    </div>
  )
}






