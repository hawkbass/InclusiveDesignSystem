"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { AlertTriangle, CheckCircle2, X, Layers, Clock, DollarSign, Calendar, Eye, Copy, Settings, Download, ExternalLink, Sparkles, Grid3X3, Palette, Code2, Search, Filter, Star, Award, Zap, Target, Users, Shield, BookOpen, Edit3, FileText, Navigation, BarChart3, MessageSquare, Home, ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"

const allComponents = [
  { name: "Accordion", category: "Navigation", status: "Stable", description: "Collapsible content sections" },
  { name: "Alert", category: "Feedback", status: "Stable", description: "Important messages and notifications" },
  { name: "AlertDialog", category: "Overlay", status: "Stable", description: "Modal dialogs for critical actions" },
  { name: "AspectRatio", category: "Layout", status: "Stable", description: "Maintain consistent aspect ratios" },
  { name: "Avatar", category: "Data Display", status: "Stable", description: "User profile images and placeholders" },
  { name: "Badge", category: "Data Display", status: "Stable", description: "Status indicators and labels" },
  { name: "Breadcrumb", category: "Navigation", status: "Stable", description: "Hierarchical navigation trail" },
  { name: "Button", category: "Form", status: "Stable", description: "Clickable actions and form submissions" },
  { name: "Calendar", category: "Form", status: "Stable", description: "Date selection interface" },
  { name: "Card", category: "Layout", status: "Stable", description: "Flexible content containers" },
  { name: "Carousel", category: "Data Display", status: "Beta", description: "Image and content sliders" },
  { name: "Chart", category: "Data Display", status: "Beta", description: "Data visualization components" },
  { name: "Checkbox", category: "Form", status: "Stable", description: "Binary choice input controls" },
  { name: "CodeSnippet", category: "Data Display", status: "Stable", description: "Formatted code display" },
  { name: "Collapsible", category: "Layout", status: "Stable", description: "Expandable content sections" },
  { name: "Command", category: "Navigation", status: "Beta", description: "Command palette interface" },
  { name: "Container", category: "Layout", status: "Stable", description: "Content width constraints" },
  { name: "ContextMenu", category: "Overlay", status: "Beta", description: "Right-click context menus" },
  { name: "DataTable", category: "Data Display", status: "Stable", description: "Enhanced tables with sorting, filtering, and actions" },
  { name: "Dialog", category: "Overlay", status: "Stable", description: "Modal dialog windows" },
  { name: "Drawer", category: "Overlay", status: "Beta", description: "Slide-out content panels" },
  { name: "DropdownMenu", category: "Overlay", status: "Stable", description: "Action menus and selectors" },
  { name: "Form", category: "Form", status: "Stable", description: "Form layouts and validation" },
  { name: "FormPattern", category: "Form", status: "Beta", description: "Common form patterns" },
  { name: "Grid", category: "Layout", status: "Stable", description: "Responsive grid systems" },
  { name: "HoverCard", category: "Overlay", status: "Beta", description: "Hover-triggered content cards" },
  { name: "Input", category: "Form", status: "Stable", description: "Text input controls" },
  { name: "InputOtp", category: "Form", status: "Beta", description: "One-time password inputs" },
  { name: "Label", category: "Form", status: "Stable", description: "Form field labels" },
  { name: "MetricChart", category: "Data Display", status: "Stable", description: "Interactive charts for metrics and analytics with dark theme support" },
  { name: "Pagination", category: "Navigation", status: "Stable", description: "Page navigation controls" },
  { name: "Popover", category: "Overlay", status: "Stable", description: "Contextual content overlays" },
  { name: "Progress", category: "Feedback", status: "Stable", description: "Task progress indicators" },
  { name: "RadioGroup", category: "Form", status: "Stable", description: "Single choice selectors" },
  { name: "Resizable", category: "Layout", status: "Beta", description: "Resizable content panels" },
  { name: "ResponsiveContainer", category: "Layout", status: "Stable", description: "Responsive content wrappers" },
  { name: "ScrollArea", category: "Layout", status: "Stable", description: "Custom scrollable areas" },
  { name: "Select", category: "Form", status: "Stable", description: "Dropdown selection controls" },
  { name: "Separator", category: "Layout", status: "Stable", description: "Content section dividers" },
  { name: "Sheet", category: "Overlay", status: "Beta", description: "Side panel overlays" },
  { name: "Sidebar", category: "Navigation", status: "Beta", description: "Application navigation sidebars" },
  { name: "Skeleton", category: "Feedback", status: "Stable", description: "Loading state placeholders" },
  { name: "Slider", category: "Form", status: "Stable", description: "Range input controls" },
  { name: "Sonner", category: "Feedback", status: "Beta", description: "Toast notification system" },
  { name: "Stack", category: "Layout", status: "Stable", description: "Vertical content stacking" },
  { name: "StatCard", category: "Data Display", status: "Stable", description: "Statistical metric cards with trends and actions" },
  { name: "StatusBadge", category: "Data Display", status: "Stable", description: "Semantic status indicators with contextual colors" },
  { name: "Switch", category: "Form", status: "Stable", description: "Toggle input controls" },
  { name: "Table", category: "Data Display", status: "Stable", description: "Tabular data display" },
  { name: "Tabs", category: "Navigation", status: "Stable", description: "Content section tabs" },
  { name: "Textarea", category: "Form", status: "Stable", description: "Multi-line text inputs" },
  { name: "Toast", category: "Feedback", status: "Stable", description: "Temporary notifications" },
  { name: "Toaster", category: "Feedback", status: "Stable", description: "Toast management container" },
  { name: "Toggle", category: "Form", status: "Stable", description: "Binary toggle controls" },
  { name: "ToggleGroup", category: "Form", status: "Beta", description: "Multiple toggle groups" },
  { name: "Tooltip", category: "Overlay", status: "Stable", description: "Hover information displays" }
]

export default function ComponentGuidelines() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

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

  const categories = ["All", ...new Set(allComponents.map(c => c.category))]
  const filteredComponents = allComponents.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stableCount = allComponents.filter(c => c.status === "Stable").length
  const betaCount = allComponents.filter(c => c.status === "Beta").length

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
                  <h1 className="text-2xl font-bold text-slate-100">Component Guidelines</h1>
                  <p className="text-sm text-slate-400">Comprehensive component library and usage patterns</p>
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
                    Storybook
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Playground
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
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {stableCount} Stable
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {betaCount} Beta
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Accessible
                </Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  <Award className="w-3 h-3 mr-1" />
                  Enterprise Ready
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Component Library
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A comprehensive collection of {allComponents.length}+ accessible, reusable components built specifically for recruitment applications. 
                Each component follows our design principles and accessibility standards.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <BookOpen className="h-5 w-5 mr-2" />
                  Browse Components
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-slate-800 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <Download className="h-5 w-5 mr-2" />
                  Download Library
                </Button>
              </div>
            </div>
          </section>

          {/* Component Stats */}
          <section className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <Layers className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-100">{allComponents.length}</div>
                      <div className="text-sm text-slate-400">Total Components</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Across {categories.length - 1} categories</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <CheckCircle2 className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-100">{stableCount}</div>
                      <div className="text-sm text-slate-400">Stable</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Production ready</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <Sparkles className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-100">{betaCount}</div>
                      <div className="text-sm text-slate-400">Beta</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">In development</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <Shield className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-100">100%</div>
                      <div className="text-sm text-slate-400">Accessible</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">WCAG 2.1 AA compliant</div>
                </CardContent>
              </Card>
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
                          <BookOpen className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
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
                    value="components"
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
                        API Reference
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
                          <FileText className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Usage Patterns
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                    
                  <TabsTrigger 
                    value="guidelines"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Shield className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Best Practices
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

              <TabsContent value="components" className="space-y-8">
                <APIReferenceTab 
                  components={filteredComponents}
                  categories={categories}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  safeAnimationSpeed={safeAnimationSpeed}
                />
              </TabsContent>

              <TabsContent value="examples" className="space-y-8">
                <UsagePatternsTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="guidelines" className="space-y-8">
                <BestPracticesTab safeAnimationSpeed={safeAnimationSpeed} />
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
  const componentStats = [
    { label: "Total Components", value: "49", change: "+12 this quarter", icon: Layers, color: "text-blue-400" },
    { label: "Stable Components", value: "38", change: "Production ready", icon: CheckCircle2, color: "text-green-400" },
    { label: "Beta Components", value: "11", change: "Under development", icon: Clock, color: "text-yellow-400" },
    { label: "Coverage", value: "95%", change: "Design patterns", icon: Award, color: "text-purple-400" }
  ]

  const componentCategories = [
    { 
      name: "Form", 
      count: 12, 
      description: "Input controls, validation, and form management components", 
      icon: Edit3, 
      color: "bg-blue-500/20",
      examples: ["Button", "Input", "Select", "Checkbox", "RadioGroup"]
    },
    { 
      name: "Layout", 
      count: 8, 
      description: "Structure, spacing, and content organization components", 
      icon: Grid3X3, 
      color: "bg-green-500/20",
      examples: ["Card", "Container", "Grid", "Stack", "Separator"]
    },
    { 
      name: "Navigation", 
      count: 6, 
      description: "Wayfinding, menus, and navigation components", 
      icon: Navigation, 
      color: "bg-purple-500/20",
      examples: ["Tabs", "Breadcrumb", "Pagination", "Command"]
    },
    { 
      name: "Data Display", 
      count: 8, 
      description: "Tables, charts, badges, and content presentation", 
      icon: BarChart3, 
      color: "bg-orange-500/20",
      examples: ["Table", "Badge", "Avatar", "Chart", "MetricChart"]
    },
    { 
      name: "Feedback", 
      count: 7, 
      description: "Notifications, alerts, and status communication", 
      icon: MessageSquare, 
      color: "bg-pink-500/20",
      examples: ["Alert", "Toast", "Progress", "Skeleton"]
    },
    { 
      name: "Overlay", 
      count: 8, 
      description: "Modals, popovers, tooltips, and overlay components", 
      icon: Layers, 
      color: "bg-cyan-500/20",
      examples: ["Dialog", "Popover", "Tooltip", "Sheet", "Drawer"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Component Documentation Overview */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-fuchsia-400" />
            Component Documentation
          </CardTitle>
          <CardDescription>
            This section provides comprehensive documentation, API reference, and implementation guidelines for all components. 
            For interactive previews and live examples, visit the Component Gallery in the sidebar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <Code2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">API Reference</h3>
                <p className="text-sm text-slate-400">Complete prop definitions, TypeScript interfaces, and usage examples</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">Best Practices</h3>
                <p className="text-sm text-slate-400">Do's and don'ts, accessibility guidelines, and usage patterns</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">Implementation</h3>
                <p className="text-sm text-slate-400">Integration guides, customization options, and performance tips</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {componentStats.map((stat, index) => (
          <Card key={stat.label} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
              <div className="text-xs text-green-400 font-medium">{stat.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Component Categories */}
      <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Component Categories</CardTitle>
          <CardDescription>Organized by functional purpose and usage context</CardDescription>
                    </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentCategories.map((category, index) => (
              <Card key={category.name} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <category.icon className="h-6 w-6 text-slate-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400">{category.count} components</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.slice(0, 3).map((example, idx) => (
                      <Badge key={idx} className="bg-slate-700/50 text-slate-300 text-xs">
                        {example}
                      </Badge>
                    ))}
                    {category.examples.length > 3 && (
                      <Badge className="bg-slate-700/30 text-slate-400 text-xs">
                        +{category.examples.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
                  </Card>

      {/* Documentation Structure */}
      <Card className="bg-slate-800/30 border-slate-700/50">
  <CardHeader>
          <CardTitle className="text-xl text-slate-100">Documentation Structure</CardTitle>
          <CardDescription>How component documentation is organized for easy reference</CardDescription>
  </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Each Component Includes
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Overview & Purpose", desc: "What the component does and when to use it" },
                  { title: "API Reference", desc: "Complete prop definitions and TypeScript types" },
                  { title: "Usage Examples", desc: "Code snippets and implementation patterns" },
                  { title: "Accessibility Notes", desc: "ARIA attributes and keyboard interactions" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{item.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
                </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Quick Reference
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Import Statements", desc: "Ready-to-copy import examples" },
                  { title: "Common Patterns", desc: "Frequently used configurations" },
                  { title: "Troubleshooting", desc: "Common issues and solutions" },
                  { title: "Migration Guides", desc: "Updating from previous versions" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{item.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                    </div>
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

function APIReferenceTab({ 
  components, 
  categories, 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  onCopyCode, 
  copiedCode, 
  safeAnimationSpeed 
}: any) {
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('detailed')
  const [previewPattern, setPreviewPattern] = useState<any>(null)

  const handleDownloadAll = () => {
    const patterns = getFilteredPatterns(selectedCategory, searchQuery)
    const content = patterns.map(pattern => 
      `// ${pattern.title}\n// ${pattern.description}\n\n${pattern.code}\n\n`
    ).join('\n')
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'implementation-patterns.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      {/* Implementation Patterns Introduction */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-fuchsia-400" />
            Implementation Patterns
          </CardTitle>
          <CardDescription>
            Real-world examples showing how to combine components to build common UI patterns. 
            These patterns demonstrate best practices for component composition and usage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Pattern Categories
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Forms", desc: "Login forms, registration, validation patterns", count: "8 patterns" },
                  { title: "Layouts", desc: "Dashboard, sidebar, responsive grid layouts", count: "6 patterns" },
                  { title: "Data Display", desc: "Tables, cards, lists with actions", count: "7 patterns" },
                  { title: "Navigation", desc: "Tabs, breadcrumbs, pagination", count: "5 patterns" }
                ].map((category, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <div className="w-8 h-8 bg-fuchsia-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-fuchsia-300 text-sm font-bold">{category.count.charAt(0)}</span>
                    </div>
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{category.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{category.desc}</p>
                      <span className="text-fuchsia-400 text-xs">{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                What You'll Learn
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Component Composition", desc: "How to combine components effectively" },
                  { title: "Best Practices", desc: "Accessibility, performance, and UX guidelines" },
                  { title: "Real-world Examples", desc: "Production-ready code you can copy" },
                  { title: "Variations", desc: "Different approaches for different use cases" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{feature.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Quick Actions */}
          <div className="mt-6 pt-6 border-t border-slate-700/30">
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={handleDownloadAll}
              >
                <Download className="h-3 w-3 mr-1" />
                Download All
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => window.open('/design-system/components', '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Component Gallery
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <BookOpen className="h-3 w-3 mr-1" />
                Pattern Guide
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
              <Input
                placeholder="Search patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-700"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['All', 'Forms', 'Layouts', 'Data Display', 'Navigation', 'Feedback'].map((category: string) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-colors ${selectedCategory === category ? 'bg-fuchsia-500 hover:bg-fuchsia-600' : 'hover:bg-slate-800'}`}
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                >
                  <Filter className="h-3 w-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Results Summary and View Toggle */}
          <div className="mt-4 pt-4 border-t border-slate-700/30 flex justify-between items-center">
            <p className="text-sm text-slate-400">
              Showing {getFilteredPatterns(selectedCategory, searchQuery).length} implementation pattern{getFilteredPatterns(selectedCategory, searchQuery).length !== 1 ? 's' : ''} 
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'detailed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('detailed')}
                className="h-8"
              >
                <FileText className="h-3 w-3 mr-1" />
                Detailed
              </Button>
              <Button
                variant={viewMode === 'compact' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('compact')}
                className="h-8"
              >
                <Grid3X3 className="h-3 w-3 mr-1" />
                Compact
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Patterns */}
      {viewMode === 'detailed' ? (
        <div className="space-y-8">
          {getFilteredPatterns(selectedCategory, searchQuery).map((pattern, index) => (
            <Card key={pattern.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className={`w-10 h-10 ${pattern.color} rounded-xl flex items-center justify-center`}>
                      <pattern.icon className="h-5 w-5 text-slate-200" />
                </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">{pattern.title}</h3>
                      <p className="text-sm text-slate-400">{pattern.description}</p>
                </div>
                <Badge className="bg-slate-700/50 text-slate-300 text-xs">
                      {pattern.category}
                </Badge>
                    <Badge className={`text-xs ${pattern.complexity === 'Simple' ? 'bg-green-500/20 text-green-300' : pattern.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-red-500/20 text-red-300'}`}>
                      {pattern.complexity}
                    </Badge>
                  </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                      onClick={() => onCopyCode(pattern.code, `pattern-${index}`)}
                      className="h-8 px-3"
                  >
                      {copiedCode === `pattern-${index}` ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                      Copy Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                      className="h-8 px-3"
                      onClick={() => setPreviewPattern(pattern)}
                  >
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                  </Button>
                </div>
              </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Components Used */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-purple-400" />
                      Components Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pattern.components.map((component, idx) => (
                        <Badge key={idx} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-fuchsia-400" />
                      Implementation
                    </h4>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30 overflow-hidden">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
                        <code className="whitespace-pre-wrap break-all">
                          {pattern.code}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Usage Notes */}
                  {pattern.notes && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-blue-400" />
                        Usage Notes
                      </h4>
                      <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/20">
                        <ul className="space-y-2 text-sm text-slate-300">
                          {pattern.notes.map((note, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0" />
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Variations */}
                  {pattern.variations && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-yellow-400" />
                        Variations
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {pattern.variations.map((variation, idx) => (
                          <div key={idx} className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/20">
                            <h5 className="font-medium text-slate-200 mb-2">{variation.name}</h5>
                            <p className="text-sm text-slate-400 mb-3">{variation.description}</p>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onCopyCode(variation.code, `variation-${index}-${idx}`)}
                              className="h-7 text-xs"
                            >
                              {copiedCode === `variation-${index}-${idx}` ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                              Copy
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
            </CardContent>
          </Card>
        ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredPatterns(selectedCategory, searchQuery).map((pattern, index) => (
            <Card key={pattern.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 ${pattern.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <pattern.icon className="h-5 w-5 text-slate-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-100 truncate">{pattern.title}</h3>
                    <p className="text-sm text-slate-400 line-clamp-2">{pattern.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-slate-700/50 text-slate-300 text-xs">
                    {pattern.category}
                  </Badge>
                  <Badge className={`text-xs ${pattern.complexity === 'Simple' ? 'bg-green-500/20 text-green-300' : pattern.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-red-500/20 text-red-300'}`}>
                    {pattern.complexity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Components Used */}
                  <div>
                    <h4 className="text-xs font-medium text-slate-300 mb-2">Components Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {pattern.components.slice(0, 3).map((component, idx) => (
                        <Badge key={idx} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                          {component}
                        </Badge>
                      ))}
                      {pattern.components.length > 3 && (
                        <Badge className="bg-slate-700/30 text-slate-400 text-xs">
                          +{pattern.components.length - 3}
                        </Badge>
                      )}
                    </div>
      </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onCopyCode(pattern.code, `pattern-compact-${index}`)}
                      className="h-8 flex-1"
                    >
                      {copiedCode === `pattern-compact-${index}` ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                      Copy
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 flex-1"
                      onClick={() => setPreviewPattern(pattern)}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {previewPattern && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setPreviewPattern(null)}>
          <div className="bg-slate-900 rounded-lg border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${previewPattern.color} rounded-xl flex items-center justify-center`}>
                    <previewPattern.icon className="h-5 w-5 text-slate-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">{previewPattern.title}</h3>
                    <p className="text-sm text-slate-400">{previewPattern.description}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewPattern(null)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/30 overflow-hidden">
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code className="whitespace-pre-wrap break-all">
                    {previewPattern.code}
                  </code>
                </pre>
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onCopyCode(previewPattern.code, 'preview-pattern')}
                  className="h-8"
                >
                  {copiedCode === 'preview-pattern' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                  Copy Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {getFilteredPatterns(selectedCategory, searchQuery).length === 0 && (
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No patterns found</h3>
            <p className="text-slate-400">Try adjusting your search terms or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Implementation Patterns Data
const implementationPatterns = [
  {
    id: 'login-form',
    title: 'Login Form',
    description: 'Complete login form with validation and error handling',
    category: 'Forms',
    complexity: 'Simple',
    color: 'bg-blue-500/20',
    icon: Users,
    components: ['Card', 'Input', 'Button', 'Label', 'Alert'],
    code: `import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function LoginForm() {
  const [error, setError] = useState('')

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
              </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        <Button className="w-full">Sign In</Button>
      </CardContent>
    </Card>
  )
}`,
    notes: [
      'Always include proper labels for accessibility',
      'Use semantic HTML input types (email, password)',
      'Implement proper error handling and display',
      'Consider adding loading states for form submission'
    ],
    variations: [
      {
        name: 'With Remember Me',
        description: 'Adds a checkbox for remember me functionality',
        code: `// Add before the Button
<div className="flex items-center space-x-2">
  <Checkbox id="remember" />
  <Label htmlFor="remember" className="text-sm">Remember me</Label>
</div>`
      },
      {
        name: 'With Social Login',
        description: 'Includes social media login options',
        code: `// Add after the main Button
<div className="relative">
  <div className="absolute inset-0 flex items-center">
    <span className="w-full border-t" />
  </div>
  <div className="relative flex justify-center text-xs uppercase">
    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
  </div>
</div>
<Button variant="outline" className="w-full">
  <Github className="mr-2 h-4 w-4" />
  GitHub
</Button>`
      }
    ]
  },
  {
    id: 'dashboard-layout',
    title: 'Dashboard Layout',
    description: 'Responsive dashboard with sidebar navigation and main content area',
    category: 'Layouts',
    complexity: 'Medium',
    color: 'bg-green-500/20',
    icon: Grid3X3,
    components: ['Card', 'Sidebar', 'Button', 'Badge', 'Separator'],
    code: `import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <div className="px-6 py-2">
            <Button variant="ghost" className="w-full justify-start">
              Overview
            </Button>
          </div>
          <div className="px-6 py-2">
            <Button variant="ghost" className="w-full justify-start">
              Analytics
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Total Users
                  <Badge>+12%</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}`,
    notes: [
      'Use responsive grid layouts for dashboard cards',
      'Implement proper sidebar navigation patterns',
      'Consider mobile-first responsive design',
      'Add loading states for dashboard metrics'
    ]
  },
  {
    id: 'data-table',
    title: 'Data Table with Actions',
    description: 'Sortable data table with row actions and pagination',
    category: 'Data Display',
    complexity: 'Complex',
    color: 'bg-orange-500/20',
    icon: BarChart3,
    components: ['Table', 'Button', 'Badge', 'DropdownMenu', 'Pagination'],
    code: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

export function DataTable({ data }) {
  return (
        <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>
                <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}`,
    notes: [
      'Always include proper table headers for accessibility',
      'Use semantic table markup for screen readers',
      'Implement keyboard navigation for dropdown menus',
      'Consider virtualization for large datasets'
    ]
  },
  {
    id: 'modal-form',
    title: 'Modal Form Dialog',
    description: 'Modal dialog containing a form with validation',
    category: 'Feedback',
    complexity: 'Medium',
    color: 'bg-purple-500/20',
    icon: MessageSquare,
    components: ['Dialog', 'Form', 'Input', 'Button', 'Label'],
    code: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ModalForm() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" type="email" className="col-span-3" />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}`,
    notes: [
      'Always provide a way to close the modal (ESC key, close button)',
      'Focus management is crucial for accessibility',
      'Consider form validation before allowing submission',
      'Use appropriate ARIA labels for screen readers'
    ]
  },
  {
    id: 'tab-navigation',
    title: 'Tab Navigation',
    description: 'Tabbed interface for organizing related content',
    category: 'Navigation',
    complexity: 'Simple',
    color: 'bg-cyan-500/20',
    icon: Navigation,
    components: ['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent', 'Card'],
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TabNavigation() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Overview content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="analytics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Analytics content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="settings" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Settings content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`,
    notes: [
      'Use semantic HTML for proper keyboard navigation',
      'Ensure tab content is accessible via keyboard',
      'Consider lazy loading for tab content',
      'Maintain consistent tab ordering'
    ]
  }
]

// Helper function to filter patterns
function getFilteredPatterns(category: string, searchQuery: string) {
  return implementationPatterns.filter(pattern => {
    const matchesCategory = category === 'All' || pattern.category === category
    const matchesSearch = !searchQuery || 
      pattern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.components.some(comp => comp.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })
}

function UsagePatternsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const [selectedScenario, setSelectedScenario] = useState('forms')

  const usageScenarios = [
    {
      id: 'forms',
      title: 'Form Validation & Error Handling',
      description: 'Best practices for form validation, error states, and user feedback',
      icon: CheckCircle2,
      color: 'bg-green-500/20',
      examples: [
        {
          title: 'Real-time Validation',
          description: 'Validate fields as users type with proper debouncing',
          code: `const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState('')

useEffect(() => {
  const timer = setTimeout(() => {
    if (email && !isValidEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }, 500)
  
  return () => clearTimeout(timer)
}, [email])

return (
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={emailError ? 'border-red-500' : ''}
    />
    {emailError && (
      <p className="text-sm text-red-500">{emailError}</p>
    )}
  </div>
)`,
          dos: [
            'Debounce validation to avoid excessive API calls',
            'Show errors only after user interaction',
            'Use semantic HTML input types',
            'Provide clear, actionable error messages'
          ],
          donts: [
            "Don't validate on every keystroke immediately",
            "Don't show errors before user has finished typing",
            "Don't use generic error messages",
            "Don't block form submission for non-critical warnings"
          ]
        },
        {
          title: 'Multi-step Form Navigation',
          description: 'Guide users through complex forms with progress indicators',
          code: `const [currentStep, setCurrentStep] = useState(0)
const [formData, setFormData] = useState({})

const steps = [
  { title: 'Personal Info', component: PersonalInfoStep },
  { title: 'Contact Details', component: ContactStep },
  { title: 'Preferences', component: PreferencesStep },
  { title: 'Review', component: ReviewStep }
]

return (
  <Card className="w-full max-w-2xl mx-auto">
    <CardHeader>
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              index <= currentStep 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            )}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "w-16 h-0.5 mx-2",
                index < currentStep ? "bg-primary" : "bg-muted"
              )} />
            )}
          </div>
        ))}
      </div>
      <CardTitle>{steps[currentStep].title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CurrentStepComponent />
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button 
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </CardContent>
  </Card>
)`,
          dos: [
            'Show clear progress indicators',
            'Allow users to go back and edit previous steps',
            'Save progress automatically',
            'Validate each step before proceeding'
          ],
          donts: [
            "Don't lose user data when navigating between steps",
            "Don't make all steps mandatory if some are optional",
            "Don't hide the overall progress from users",
            "Don't allow proceeding with invalid data"
          ]
        }
      ]
    },
    {
      id: 'data-display',
      title: 'Data Loading & Error States',
      description: 'Handle loading states, empty states, and error conditions gracefully',
      icon: BarChart3,
      color: 'bg-blue-500/20',
      examples: [
        {
          title: 'Skeleton Loading States',
          description: 'Show content structure while data loads',
          code: `function DataTable({ isLoading, data, error }) {
  if (error) {
    return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error loading data</AlertTitle>
        <AlertDescription>
          {error.message}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => refetch()}
            className="ml-2"
          >
            Try again
          </Button>
        </AlertDescription>
          </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Data</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
        </div>
              </div>
            ))}
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-8">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground mb-4">
              Get started by adding your first user.
            </p>
            <Button>Add User</Button>
          </div>
        ) : (
          <Table>
            {/* Render actual data */}
          </Table>
        )}
      </CardContent>
    </Card>
  )
}`,
          dos: [
            'Use skeleton loaders that match content structure',
            'Provide meaningful empty states with actions',
            'Show specific error messages with recovery options',
            'Maintain layout stability during state changes'
          ],
          donts: [
            "Don't show generic loading spinners for everything",
            "Don't leave users stranded with empty screens",
            "Don't show technical error messages to users",
            "Don't let loading states persist indefinitely"
          ]
        }
      ]
    },
    {
      id: 'navigation',
      title: 'Navigation & User Flow',
      description: 'Create intuitive navigation patterns and user journeys',
      icon: Navigation,
      color: 'bg-purple-500/20',
      examples: [
        {
          title: 'Breadcrumb Navigation',
          description: 'Help users understand their location and navigate back',
          code: `function BreadcrumbNav({ path }) {
  const pathSegments = path.split('/').filter(Boolean)
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/">
          <Home className="h-4 w-4" />
        </Link>
      </Button>
      
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/')
        const isLast = index === pathSegments.length - 1
        
        return (
          <React.Fragment key={segment}>
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="font-medium text-foreground">
                {formatSegment(segment)}
              </span>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href={href}>
                  {formatSegment(segment)}
                </Link>
              </Button>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}`,
          dos: [
            'Make each breadcrumb clickable except the current page',
            'Use meaningful labels, not URL segments',
            'Show hierarchy clearly with separators',
            'Keep breadcrumbs concise and relevant'
          ],
          donts: [
            "Don't show every single URL segment",
            "Don't make the current page clickable",
            "Don't use breadcrumbs for shallow navigation",
            "Don't truncate important navigation context"
          ]
        }
      ]
    },
    {
      id: 'accessibility',
      title: 'Accessibility Best Practices',
      description: 'Ensure your components work for all users',
      icon: Shield,
      color: 'bg-orange-500/20',
      examples: [
        {
          title: 'Keyboard Navigation',
          description: 'Implement proper keyboard support for interactive elements',
          code: `function AccessibleModal({ isOpen, onClose, children }) {
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      modalRef.current?.focus()
    } else {
      previousFocusRef.current?.focus()
    }
  }, [isOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
    
    // Trap focus within modal
    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white rounded-lg p-6 max-w-md w-full"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  )
}`,
          dos: [
            'Trap focus within modals and popups',
            'Restore focus when closing overlays',
            'Use semantic HTML and ARIA labels',
            'Test with keyboard-only navigation'
          ],
          donts: [
            "Don't rely only on mouse interactions",
            "Don't forget to handle Escape key",
            "Don't create keyboard traps users can't escape",
            "Don't ignore screen reader announcements"
          ]
        }
      ]
    }
  ]

  const currentScenario = usageScenarios.find(s => s.id === selectedScenario) || usageScenarios[0]

  return (
    <div className="space-y-8">
      {/* Usage Patterns Introduction */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <FileText className="h-6 w-6 text-fuchsia-400" />
            Usage Patterns
          </CardTitle>
          <CardDescription>
            Real-world usage scenarios, best practices, and common pitfalls to avoid when implementing components.
            Learn from practical examples and established patterns.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Scenario Categories
              </h3>
              <div className="space-y-3">
                {usageScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedScenario === scenario.id
                        ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-slate-100'
                        : 'bg-slate-900/30 border-slate-700/30 text-slate-300 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 ${scenario.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <scenario.icon className="h-4 w-4 text-slate-200" />
                      </div>
          <div>
                        <span className="text-sm font-medium">{scenario.title}</span>
                        <p className="text-xs text-slate-400 mt-1">{scenario.description}</p>
            </div>
          </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What You'll Learn
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Real-world Implementation", desc: "Practical examples from production applications" },
                  { title: "Do's and Don'ts", desc: "Clear guidelines on what to do and what to avoid" },
                  { title: "Accessibility Patterns", desc: "How to make components work for everyone" },
                  { title: "Performance Tips", desc: "Optimize components for better user experience" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
          <div>
                      <span className="text-slate-200 text-sm font-medium">{feature.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{feature.desc}</p>
            </div>
          </div>
                ))}
        </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Scenario Examples */}
    <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 ${currentScenario.color} rounded-xl flex items-center justify-center`}>
            <currentScenario.icon className="h-6 w-6 text-slate-200" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">{currentScenario.title}</h2>
            <p className="text-slate-400">{currentScenario.description}</p>
          </div>
        </div>

        {currentScenario.examples.map((example, index) => (
          <Card key={index} className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                  <CardTitle className="text-xl text-slate-100">{example.title}</CardTitle>
                <CardDescription className="mt-2">{example.description}</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                  onClick={() => onCopyCode(example.code, `usage-${selectedScenario}-${index}`)}
                  className="h-8 px-3"
              >
                  {copiedCode === `usage-${selectedScenario}-${index}` ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                  Copy Code
              </Button>
            </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Code Example */}
                <div>
                  <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-fuchsia-400" />
                    Implementation
                  </h4>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30 overflow-hidden">
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code className="whitespace-pre-wrap break-all">
                        {example.code}
                      </code>
            </pre>
                  </div>
                </div>

                {/* Do's and Don'ts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      Do's
                    </h4>
                    <div className="space-y-2">
                      {example.dos.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 bg-green-500/10 rounded border border-green-500/20">
                          <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                      <X className="h-4 w-4 text-red-400" />
                      Don'ts
                    </h4>
                    <div className="space-y-2">
                      {example.donts.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 bg-red-500/10 rounded border border-red-500/20">
                          <div className="w-1 h-1 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
                </CardContent>
              </Card>
      ))}
      </div>
    </div>
  )
}

function BestPracticesTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const [selectedCategory, setSelectedCategory] = useState('design-principles')

  const practiceCategories = [
    {
      id: 'design-principles',
      title: 'Design Principles',
      description: 'Core principles that guide component design and usage',
      icon: Palette,
      color: 'bg-purple-500/20',
      practices: [
        {
          title: 'Consistency',
          description: 'Maintain visual and behavioral consistency across all components',
          principles: [
            'Use consistent spacing, typography, and color schemes',
            'Apply the same interaction patterns for similar actions',
            'Follow established naming conventions for props and variants',
            'Maintain consistent component APIs across the design system'
          ],
          examples: [
            {
              title: 'Consistent Spacing',
              good: 'Use design tokens: spacing-4, spacing-6, spacing-8',
              bad: 'Hard-coded values: 16px, 24px, 32px'
            },
            {
              title: 'Consistent Interactions',
              good: 'All buttons use the same hover and focus states',
              bad: 'Different buttons have different hover animations'
            }
          ]
        },
        {
          title: 'Accessibility First',
          description: 'Design components that work for everyone from the start',
          principles: [
            'Include proper ARIA labels and descriptions',
            'Ensure keyboard navigation works correctly',
            'Maintain sufficient color contrast ratios',
            'Provide alternative text for images and icons'
          ],
          examples: [
            {
              title: 'Keyboard Navigation',
              good: 'Tab order follows logical reading sequence',
              bad: 'Tab order jumps around the interface randomly'
            },
            {
              title: 'Color Contrast',
              good: 'Text has minimum 4.5:1 contrast ratio',
              bad: 'Light gray text on white background'
            }
          ]
        }
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      description: 'Optimize components for speed and efficiency',
      icon: Zap,
      color: 'bg-yellow-500/20',
      practices: [
        {
          title: 'Bundle Size Optimization',
          description: 'Keep component bundles small and efficient',
          principles: [
            'Use tree-shaking friendly exports',
            'Avoid importing entire libraries for single functions',
            'Implement code splitting for large components',
            'Use dynamic imports for optional features'
          ],
          examples: [
            {
              title: 'Tree-shaking',
              good: 'import { Button } from "@/components/ui/button"',
              bad: 'import * as UI from "@/components/ui"'
            },
            {
              title: 'Dynamic Imports',
              good: 'const Modal = lazy(() => import("./Modal"))',
              bad: 'import Modal from "./Modal" // Always loaded'
            }
          ]
        },
        {
          title: 'Runtime Performance',
          description: 'Ensure components render efficiently',
          principles: [
            'Use React.memo for expensive components',
            'Optimize re-renders with proper dependencies',
            'Implement virtualization for large lists',
            'Use CSS animations over JavaScript when possible'
          ],
          examples: [
            {
              title: 'Memoization',
              good: 'React.memo(Component, (prev, next) => prev.id === next.id)',
              bad: 'Component re-renders on every parent update'
            },
            {
              title: 'CSS Animations',
              good: 'transition: transform 0.2s ease',
              bad: 'JavaScript-based position animations'
            }
          ]
        }
      ]
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      description: 'Ensure components work for users with disabilities',
      icon: Shield,
      color: 'bg-green-500/20',
      practices: [
        {
          title: 'Semantic HTML',
          description: 'Use proper HTML elements for their intended purpose',
          principles: [
            'Use button elements for clickable actions',
            'Use proper heading hierarchy (h1, h2, h3)',
            'Use form labels and fieldsets appropriately',
            'Use lists for grouped content'
          ],
          examples: [
            {
              title: 'Interactive Elements',
              good: '<button onClick={handleClick}>Submit</button>',
              bad: '<div onClick={handleClick}>Submit</div>'
            },
            {
              title: 'Form Labels',
              good: '<label htmlFor="email">Email</label><input id="email" />',
              bad: '<input placeholder="Email" />'
            }
          ]
        },
        {
          title: 'Screen Reader Support',
          description: 'Provide information for assistive technologies',
          principles: [
            'Use descriptive ARIA labels',
            'Announce dynamic content changes',
            'Provide context for form errors',
            'Use proper landmark roles'
          ],
          examples: [
            {
              title: 'ARIA Labels',
              good: 'aria-label="Close dialog"',
              bad: 'title="X" (not announced by screen readers)'
            },
            {
              title: 'Live Regions',
              good: '<div aria-live="polite">Status updated</div>',
              bad: 'Silent status changes'
            }
          ]
        }
      ]
    },
    {
      id: 'team-collaboration',
      title: 'Team Collaboration',
      description: 'Guidelines for working effectively with design systems',
      icon: Users,
      color: 'bg-blue-500/20',
      practices: [
        {
          title: 'Documentation Standards',
          description: 'Maintain clear and comprehensive documentation',
          principles: [
            'Document all component props and their types',
            'Provide usage examples for common scenarios',
            'Include accessibility notes and requirements',
            'Keep documentation up-to-date with code changes'
          ],
          examples: [
            {
              title: 'Prop Documentation',
              good: 'variant: "primary" | "secondary" - Controls button appearance',
              bad: 'variant: string'
            },
            {
              title: 'Usage Examples',
              good: 'Multiple examples showing different use cases',
              bad: 'Single basic example'
            }
          ]
        },
        {
          title: 'Version Management',
          description: 'Handle component updates and breaking changes properly',
          principles: [
            'Use semantic versioning for component releases',
            'Provide migration guides for breaking changes',
            'Deprecate components gracefully with warnings',
            'Maintain backward compatibility when possible'
          ],
          examples: [
            {
              title: 'Deprecation Warning',
              good: 'console.warn("OldComponent is deprecated, use NewComponent")',
              bad: 'Immediate removal without warning'
            },
            {
              title: 'Migration Guide',
              good: 'Step-by-step instructions with code examples',
              bad: 'Brief mention in changelog'
            }
          ]
        }
      ]
    }
  ]

  const currentCategory = practiceCategories.find(c => c.id === selectedCategory) || practiceCategories[0]

  return (
    <div className="space-y-8">
      {/* Best Practices Introduction */}
      <Card className="bg-slate-800/30 border-slate-700/50">
  <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Shield className="h-6 w-6 text-fuchsia-400" />
            Best Practices
          </CardTitle>
          <CardDescription>
            Comprehensive guidelines for implementing, maintaining, and scaling design systems effectively.
            Follow these practices to ensure consistency, accessibility, and performance.
          </CardDescription>
  </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Practice Areas
              </h3>
              <div className="space-y-3">
                {practiceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedCategory === category.id
                        ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-slate-100'
                        : 'bg-slate-900/30 border-slate-700/30 text-slate-300 hover:bg-slate-900/50'
                    }`}
                    style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <category.icon className="h-4 w-4 text-slate-200" />
                      </div>
                      <div>
                        <span className="text-sm font-medium">{category.title}</span>
                        <p className="text-xs text-slate-400 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Key Benefits
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Consistent User Experience", desc: "Unified look and feel across all applications" },
                  { title: "Faster Development", desc: "Reusable components speed up feature development" },
                  { title: "Better Accessibility", desc: "Built-in accessibility features for all users" },
                  { title: "Easier Maintenance", desc: "Centralized updates propagate across all apps" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-200 text-sm font-medium">{benefit.title}</span>
                      <p className="text-slate-400 text-xs mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
</Card>

      {/* Current Category Practices */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 ${currentCategory.color} rounded-xl flex items-center justify-center`}>
            <currentCategory.icon className="h-6 w-6 text-slate-200" />
                </div>
                <div>
            <h2 className="text-2xl font-bold text-slate-100">{currentCategory.title}</h2>
            <p className="text-slate-400">{currentCategory.description}</p>
                </div>
              </div>
              
        {currentCategory.practices.map((practice, index) => (
          <Card key={index} className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-xl text-slate-100">{practice.title}</CardTitle>
              <CardDescription>{practice.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Core Principles */}
                <div>
                  <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                    Core Principles
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {practice.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg border border-slate-700/20">
                    <div className="w-1 h-1 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{principle}</span>
                  </div>
                ))}
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                    <Eye className="h-4 w-4 text-blue-400" />
                    Examples
                  </h4>
                  <div className="space-y-4">
                    {practice.examples.map((example, idx) => (
                      <div key={idx} className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/20">
                        <h5 className="font-medium text-slate-200 mb-3">{example.title}</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-green-500/10 rounded border border-green-500/20">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                              <span className="text-sm font-medium text-green-300">Good</span>
                            </div>
                            <code className="text-sm text-slate-300 break-all">{example.good}</code>
                          </div>
                          <div className="p-3 bg-red-500/10 rounded border border-red-500/20">
                            <div className="flex items-center gap-2 mb-2">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-sm font-medium text-red-300">Avoid</span>
                            </div>
                            <code className="text-sm text-slate-300 break-all">{example.bad}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        </div>

      {/* Quick Reference Card */}
      <Card className="bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-blue-500/10 border-fuchsia-500/20">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Award className="h-5 w-5 text-fuchsia-400" />
            Quick Reference Checklist
          </CardTitle>
          <CardDescription>
            Essential checkpoints for every component implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-fuchsia-300">Design</h4>
              <div className="space-y-2">
                {[
                  'Follows design tokens',
                  'Consistent with other components',
                  'Responsive across screen sizes',
                  'Supports dark/light themes'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-slate-600 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded opacity-50" />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-fuchsia-300">Accessibility</h4>
              <div className="space-y-2">
                {[
                  'Keyboard navigation works',
                  'Screen reader compatible',
                  'Sufficient color contrast',
                  'Proper ARIA attributes'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-slate-600 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded opacity-50" />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-fuchsia-300">Code Quality</h4>
              <div className="space-y-2">
                {[
                  'TypeScript types defined',
                  'Props documented',
                  'Tests written',
                  'Performance optimized'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-slate-600 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded opacity-50" />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
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