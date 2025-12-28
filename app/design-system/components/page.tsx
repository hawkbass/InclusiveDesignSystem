"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Clock,
  Eye,
  Copy,
  Download,
  ExternalLink,
  Sparkles,
  Grid3X3,
  Code2,
  Search,
  Filter,
  Star,
  Award,
  Zap,
  Target,
  Users,
  Shield,
  BookOpen,
  Edit3,
  Navigation,
  BarChart3,
  MessageSquare,
  ComponentIcon,
  Package,
  Play,
  Settings,
  Heart,
  Bookmark,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

// Enhanced component data with better categorization
const allComponents = [
  // Form Components
  { name: "Button", category: "Form", status: "Stable", description: "Clickable actions and form submissions", usage: "CTAs, form actions, navigation", accessibility: "Full keyboard support", performance: "Optimized" },
  { name: "Input", category: "Form", status: "Stable", description: "Text input controls", usage: "User data collection", accessibility: "Screen reader compatible", performance: "Lightweight" },
  { name: "Checkbox", category: "Form", status: "Stable", description: "Binary choice input controls", usage: "Multiple selections, toggles", accessibility: "ARIA compliant", performance: "Minimal" },
  { name: "Select", category: "Form", status: "Stable", description: "Dropdown selection controls", usage: "Option selection, filtering", accessibility: "Keyboard navigation", performance: "Efficient" },
  { name: "RadioGroup", category: "Form", status: "Stable", description: "Single choice selectors", usage: "Exclusive options", accessibility: "Group navigation", performance: "Optimized" },
  { name: "Label", category: "Form", status: "Stable", description: "Form field labels", usage: "Input descriptions", accessibility: "Association support", performance: "Minimal" },
  { name: "Form", category: "Form", status: "Stable", description: "Form layouts and validation", usage: "Data collection workflows", accessibility: "Complete support", performance: "Validated" },
  { name: "Calendar", category: "Form", status: "Stable", description: "Date selection interface", usage: "Date/time input", accessibility: "Full navigation", performance: "Interactive" },

  // Layout Components  
  { name: "Card", category: "Layout", status: "Stable", description: "Flexible content containers", usage: "Content organisation", accessibility: "Semantic structure", performance: "Lightweight" },
  { name: "Container", category: "Layout", status: "Stable", description: "Content width constraints", usage: "Layout boundaries", accessibility: "Responsive design", performance: "CSS-only" },
  { name: "Grid", category: "Layout", status: "Stable", description: "Responsive grid systems", usage: "Content arrangement", accessibility: "Screen reader friendly", performance: "CSS Grid" },
  { name: "Stack", category: "Layout", status: "Stable", description: "Vertical content stacking", usage: "Component spacing", accessibility: "Natural flow", performance: "Flexbox" },
  { name: "Separator", category: "Layout", status: "Stable", description: "Visual content dividers", usage: "Section breaks", accessibility: "Semantic separation", performance: "CSS-only" },
  { name: "AspectRatio", category: "Layout", status: "Stable", description: "Maintain consistent aspect ratios", usage: "Media containers", accessibility: "Responsive", performance: "CSS-based" },

  // Navigation Components
  { name: "Tabs", category: "Navigation", status: "Stable", description: "Tabbed interface panels", usage: "Content organisation", accessibility: "Keyboard navigation", performance: "State managed" },
  { name: "Breadcrumb", category: "Navigation", status: "Stable", description: "Hierarchical navigation trail", usage: "Page location", accessibility: "Navigation landmarks", performance: "Lightweight" },
  { name: "Pagination", category: "Navigation", status: "Stable", description: "Page navigation controls", usage: "Data navigation", accessibility: "Page numbering", performance: "Optimized" },
  { name: "Command", category: "Navigation", status: "Beta", description: "Command palette interface", usage: "Quick actions", accessibility: "Keyboard-first", performance: "Search optimized" },
  { name: "Accordion", category: "Navigation", status: "Stable", description: "Collapsible content sections", usage: "Content organisation", accessibility: "Expandable regions", performance: "Animation ready" },

  // Data Display Components
  { name: "Badge", category: "Data Display", status: "Stable", description: "Status indicators and labels", usage: "Status communication", accessibility: "Status announcements", performance: "CSS-only" },
  { name: "Avatar", category: "Data Display", status: "Stable", description: "User profile images and placeholders", usage: "User representation", accessibility: "Alternative text", performance: "Image optimized" },
  { name: "Progress", category: "Data Display", status: "Stable", description: "Task progress indicators", usage: "Loading states", accessibility: "Progress announcements", performance: "Smooth animations" },
  { name: "Table", category: "Data Display", status: "Stable", description: "Data tables with sorting", usage: "Data presentation", accessibility: "Table navigation", performance: "Virtual scrolling" },
  { name: "Chart", category: "Data Display", status: "Beta", description: "Data visualization components", usage: "Analytics display", accessibility: "Data descriptions", performance: "Canvas optimized" },
  { name: "Carousel", category: "Data Display", status: "Beta", description: "Image and content sliders", usage: "Media galleries", accessibility: "Slide navigation", performance: "Touch optimized" },

  // Feedback Components
  { name: "Alert", category: "Feedback", status: "Stable", description: "Important messages and notifications", usage: "User notifications", accessibility: "Alert announcements", performance: "Lightweight" },
  { name: "Toast", category: "Feedback", status: "Stable", description: "Temporary notification messages", usage: "Action feedback", accessibility: "Live announcements", performance: "Queue managed" },
  { name: "Skeleton", category: "Feedback", status: "Stable", description: "Loading placeholders", usage: "Loading states", accessibility: "Loading indicators", performance: "CSS animations" },
  { name: "Spinner", category: "Feedback", status: "Stable", description: "Loading indicators", usage: "Processing states", accessibility: "Loading announcements", performance: "CSS animations" },

  // Overlay Components
  { name: "Dialog", category: "Overlay", status: "Stable", description: "Modal dialog windows", usage: "User confirmations", accessibility: "Focus management", performance: "Portal rendered" },
  { name: "Popover", category: "Overlay", status: "Stable", description: "Contextual content overlays", usage: "Additional information", accessibility: "Trigger association", performance: "Positioned" },
  { name: "DropdownMenu", category: "Overlay", status: "Stable", description: "Action menus and selectors", usage: "Context actions", accessibility: "Menu navigation", performance: "Event optimized" },
  { name: "Tooltip", category: "Overlay", status: "Stable", description: "Contextual help text", usage: "UI guidance", accessibility: "Descriptive text", performance: "Hover optimized" },
  { name: "Sheet", category: "Overlay", status: "Beta", description: "Slide-out content panels", usage: "Secondary content", accessibility: "Panel navigation", performance: "Transition smooth" }
]

// Component categories with enhanced metadata
const componentCategories = [
  { 
    name: "Form", 
    count: allComponents.filter(c => c.category === "Form").length, 
    description: "Input controls, validation, and form management components for data collection", 
    icon: Edit3, 
    colour: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    examples: ["Button", "Input", "Select", "Checkbox", "Form"]
  },
  { 
    name: "Layout", 
    count: allComponents.filter(c => c.category === "Layout").length, 
    description: "Structure, spacing, and content organisation components", 
    icon: Grid3X3, 
    colour: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    examples: ["Card", "Container", "Grid", "Stack", "Separator"]
  },
  { 
    name: "Navigation", 
    count: allComponents.filter(c => c.category === "Navigation").length, 
    description: "Wayfinding, menus, and navigation components", 
    icon: Navigation, 
    colour: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    examples: ["Tabs", "Breadcrumb", "Pagination", "Command"]
  },
  { 
    name: "Data Display", 
    count: allComponents.filter(c => c.category === "Data Display").length, 
    description: "Tables, charts, badges, and content presentation", 
    icon: BarChart3, 
    colour: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    examples: ["Badge", "Avatar", "Progress", "Table", "Chart"]
  },
  { 
    name: "Feedback", 
    count: allComponents.filter(c => c.category === "Feedback").length, 
    description: "Notifications, alerts, and status communication", 
    icon: MessageSquare, 
    colour: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10",
    examples: ["Alert", "Toast", "Skeleton", "Spinner"]
  },
  { 
    name: "Overlay", 
    count: allComponents.filter(c => c.category === "Overlay").length, 
    description: "Modals, popovers, and layered interface components", 
    icon: Layers, 
    colour: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500/10",
    examples: ["Dialog", "Popover", "DropdownMenu", "Tooltip"]
  }
]

// Enhanced Component Card
function ComponentCard({ component, onCopy }: { component: any, onCopy: (code: string) => void }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const importCode = `import { ${component.name} } from "@/components/ui/${component.name.toLowerCase()}"`
    onCopy(importCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const statusColors = {
    Stable: "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
    Beta: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800",
    Alpha: "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-slate-200 dark:border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colours">
              {component.name}
            </h3>
              <Badge className={statusColors[component.status as keyof typeof statusColors]}>
                {component.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {component.description}
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div><span className="font-medium">Usage:</span> {component.usage}</div>
              <div><span className="font-medium">A11y:</span> {component.accessibility}</div>
              <div><span className="font-medium">Performance:</span> {component.performance}</div>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className={`${
              copied 
                ? 'border-green-500 text-green-600 bg-green-50 dark:bg-green-950' 
                : 'border-slate-300 dark:border-border hover:border-primary dark:hover:border-fuchsia-400'
            } transition-all ml-4`}
          >
            {copied ? (
              <CheckCircle2 className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground dark:text-muted-foreground">{component.category}</span>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-6 px-2 text-xs hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950 hover:text-fuchsia-600 dark:hover:text-primary transition-colours"
            asChild
          >
            <Link href={`/components/${component.name.toLowerCase()}`}>
              View Details <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Category Overview Card
function CategoryCard({ category }: { category: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-slate-200 dark:border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${category.bgColor} border border-slate-200 dark:border-border flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <category.icon className="h-6 w-6 text-slate-700 dark:text-foreground/80" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colours">
                {category.name}
              </h3>
              <Badge variant="outline" className="border-slate-300 dark:border-border">
                {category.count} components
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {category.examples.map((example: string) => (
                <span key={example} className="text-xs bg-slate-100 dark:bg-card text-slate-600 dark:text-muted-foreground px-2 py-1 rounded">
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ComponentsPage() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [activeView, setActiveView] = useState("overview")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed])

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  // Filter and sort components
  const filteredComponents = allComponents
    .filter(component => 
      (selectedCategory === "all" || component.category === selectedCategory) &&
      (searchQuery === "" || 
       component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       component.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name": return a.name.localeCompare(b.name)
        case "category": return a.category.localeCompare(b.category)
        case "status": return a.status.localeCompare(b.status)
        default: return 0
      }
    })

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Strategic Header - Value First */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background border-b border-border">
          <div className="px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Value Proposition */}
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge className="bg-green-950 text-green-600 dark:text-green-300 border-green-800">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      {allComponents.filter(c => c.status === "Stable").length} Production Ready
                    </Badge>
                    <Badge className="bg-card/40 text-foreground/80 border-border/50">
                      <ComponentIcon className="w-3 h-3 mr-1" />
                      {allComponents.length} Total Components
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Component
                    </span>
                    <br />
                    <span className="text-foreground">Library</span>
                  </h1>
                  
                  <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
                    Production-ready React components built for 
                    <span className="text-primary font-semibold"> accessibility </span>
                    and 
                    <span className="text-purple-400 font-semibold"> performance</span>.
                    Every component is tested, documented, and ready to use.
                  </p>

                  {/* Primary Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 shadow-lg text-lg px-8 py-4"
                      onClick={() => setActiveView("components")}
                    >
                      <ComponentIcon className="mr-3 h-6 w-6" />
                      Browse Components
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-slate-300 dark:border-border hover:bg-slate-50 dark:hover:bg-card text-lg px-8 py-4"
                      onClick={() => {
                        const exportData = allComponents.map(comp => 
                          `${comp.name},${comp.category},${comp.status},${comp.description}`
                        ).join('\n')
                        const blob = new Blob([`Component,Category,Status,Description\n${exportData}`], { type: 'text/csv' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'components-library.csv'
                        a.click()
                        URL.revokeObjectURL(url)
                      }}
                    >
                      <Download className="mr-3 h-6 w-6" />
                      Export Library
                    </Button>
                  </div>
                </div>

                {/* Component Stats */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Library Overview</h2>
                    <p className="text-muted-foreground">Comprehensive component ecosystem for modern web applications</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-white/50 dark:bg-card/50 border-slate-200 dark:border-border/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-card/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {allComponents.filter(c => c.status === "Stable").length}
                        </div>
                        <div className="text-sm text-foreground/80 font-medium">Stable Components</div>
                        <div className="text-xs text-muted-foreground mt-1">Production ready</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/50 dark:bg-card/50 border-slate-200 dark:border-border/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-card/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                          {allComponents.filter(c => c.status === "Beta").length}
                        </div>
                        <div className="text-sm text-foreground/80 font-medium">Beta Components</div>
                        <div className="text-xs text-muted-foreground mt-1">Active development</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/50 dark:bg-card/50 border-slate-200 dark:border-border/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-card/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {componentCategories.length}
                        </div>
                        <div className="text-sm text-foreground/80 font-medium">Categories</div>
                        <div className="text-xs text-muted-foreground mt-1">Organized system</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/50 dark:bg-card/50 border-slate-200 dark:border-border/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-card/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">AAA</div>
                        <div className="text-sm text-foreground/80 font-medium">Accessibility</div>
                        <div className="text-xs text-muted-foreground mt-1">WCAG compliant</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation & Controls */}
        <section className="bg-card/50 border-b border-border/50">
          <div className="px-6 lg:px-12 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <Button
                      variant={activeView === "overview" ? "default" : "outline"}
                      onClick={() => setActiveView("overview")}
                      className={`${
                        activeView === "overview" 
                          ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white' 
                          : 'border-slate-300 dark:border-border hover:border-primary dark:hover:border-fuchsia-400'
                      } transition-all`}
                    >
                      <Grid3X3 className="h-4 w-4 mr-2" />
                      Overview
                    </Button>
                    <Button
                      variant={activeView === "components" ? "default" : "outline"}
                      onClick={() => setActiveView("components")}
                      className={`${
                        activeView === "components" 
                          ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white' 
                          : 'border-slate-300 dark:border-border hover:border-primary dark:hover:border-fuchsia-400'
                      } transition-all`}
                    >
                      <ComponentIcon className="h-4 w-4 mr-2" />
                      Components
                    </Button>
                  </div>
                </div>
                
                {activeView === "components" && (
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search components..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64 bg-white dark:bg-card border-slate-300 dark:border-border"
                      />
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border border-slate-300 dark:border-border rounded-md bg-white dark:bg-card text-slate-700 dark:text-foreground/80"
                    >
                      <option value="all">All Categories</option>
                      {componentCategories.map(category => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Quick Value Surface - Universal Comprehension */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
                <CardContent className="p-4 text-center">
                  <ComponentIcon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{allComponents.length}</div>
                  <div className="text-xs text-muted-foreground">Components</div>
                  <div className="text-xs text-green-400 mt-1">Production ready</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
                <CardContent className="p-4 text-center">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{allComponents.filter(c => c.status === "Stable").length}</div>
                  <div className="text-xs text-muted-foreground">Stable</div>
                  <div className="text-xs text-green-400 mt-1">Ready to use</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Grid3X3 className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{componentCategories.length}</div>
                  <div className="text-xs text-muted-foreground">Categories</div>
                  <div className="text-xs text-blue-400 mt-1">Organized</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-colours cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">AAA</div>
                  <div className="text-xs text-muted-foreground">Accessibility</div>
                  <div className="text-xs text-purple-400 mt-1">WCAG compliant</div>
                </CardContent>
              </Card>
            </div>

            {/* Overview View */}
            {activeView === "overview" && (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-foreground mb-4">Component Categories</h2>
                  <p className="text-lg text-slate-600 dark:text-muted-foreground max-w-3xl mx-auto">
                    Our component library is organized into logical categories, each designed to solve specific interface challenges.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {componentCategories.map((category) => (
                    <div key={category.name} onClick={() => {
                      setSelectedCategory(category.name)
                      setActiveView("components")
                    }}>
                      <CategoryCard category={category} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Components View */}
            {activeView === "components" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-foreground">
                      {selectedCategory === "all" ? "All Components" : `${selectedCategory} Components`}
                    </h2>
                    <p className="text-slate-600 dark:text-muted-foreground">
                      {filteredComponents.length} of {allComponents.length} components
                    </p>
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-slate-300 dark:border-border rounded-md bg-white dark:bg-card text-slate-700 dark:text-foreground/80"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="category">Sort by Category</option>
                    <option value="status">Sort by Status</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredComponents.map((component) => (
                    <ComponentCard key={component.name} component={component} onCopy={handleCopyCode} />
                  ))}
                </div>

                {filteredComponents.length === 0 && (
                  <div className="text-center py-12">
                    <ComponentIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-700 dark:text-foreground/80 mb-2">No components found</h3>
                    <p className="text-slate-600 dark:text-muted-foreground">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}






