"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Hexagon, 
  Users, 
  Briefcase, 
  Home, 
  ChevronRight, 
  Palette, 
  Type, 
  Layout, 
  Grid3X3, 
  Component, 
  Settings, 
  Copy, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  Search, 
  Plus, 
  Sparkles, 
  Eye, 
  Code, 
  BookOpen, 
  Zap, 
  Target, 
  Award, 
  Star, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  DollarSign,
  Filter,
  X,
  Check,
  Heart,
  Archive,
  Bookmark,
  Loader2,
  Command,
  Save,
  Maximize2,
  Minimize2,
  RotateCcw,
  Layers,
  Play,
  Moon,
  Sun,
  ImageIcon,
  Menu,
  MessageSquare,
  BarChart3,
  FileText,
  Info,
  AlertTriangle,
  HelpCircle,
  Ruler,
  PaintBucket,
  Contrast,
  Droplet,
  Lightbulb,
  Gauge
} from "lucide-react"
import Link from "next/link"
import { Stack } from "@/components/ui/stack"
import { Grid } from "@/components/ui/grid"
import { Container } from "@/components/ui/container"
import { FormPattern } from "@/components/ui/form-pattern"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StyleGuidePage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("colors")
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [currentTheme, setCurrentTheme] = useState("dark")
  const [filterOpen, setFilterOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState<"name" | "category" | "recent">("name")

  useEffect(() => {
    setMounted(true)
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  // Apply animation speed to document with performance optimization
  useEffect(() => {
    if (mounted) {
      const speed = Math.max(0.1, Math.min(3, animationSpeed[0])) // Clamp values
      document.documentElement.style.setProperty('--animation-speed', `${1 / speed}s`)
    }
  }, [animationSpeed, mounted])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K for search focus
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        const searchInput = document.querySelector('input[placeholder="Search styles..."]') as HTMLInputElement
        searchInput?.focus()
      }
      
      // Escape to clear search
      if (e.key === 'Escape' && searchQuery) {
        setSearchQuery("")
      }
      
      // Arrow keys for tab navigation
      if (e.key === 'ArrowRight' && e.altKey) {
        e.preventDefault()
        const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
        const nextIndex = (currentIndex + 1) % tabs.length
        setActiveTab(tabs[nextIndex].id)
      }
      
      if (e.key === 'ArrowLeft' && e.altKey) {
        e.preventDefault()
        const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
        const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1
        setActiveTab(tabs[prevIndex].id)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [searchQuery, activeTab])

  // Optimized copy handler with better feedback
  const handleCopyCode = useCallback(async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    }
  }, [])

  // Toggle favorites
  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }, [])

  // Memoized tabs for performance
  const tabs = useMemo(() => [
    { id: "colors", label: "Colors", icon: Palette, description: "Color palettes and usage guidelines", count: 24 },
    { id: "typography", label: "Typography", icon: Type, description: "Font scales and text styles", count: 18 },
    { id: "spacing", label: "Spacing", icon: Layout, description: "Spacing system and layout patterns", count: 16 },
    { id: "components", label: "Components", icon: Component, description: "UI component documentation", count: 32 },
    { id: "patterns", label: "Patterns", icon: Grid3X3, description: "Design patterns and best practices", count: 12 },
    { id: "accessibility", label: "Accessibility", icon: Eye, description: "Accessibility guidelines and tools", count: 8 },
    { id: "favorites", label: "Favorites", icon: Heart, description: "Your bookmarked styles and components", count: favorites.size }
  ], [favorites.size])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-fuchsia-400 mx-auto mb-4" />
          <p className="text-slate-400">Loading design system...</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <Palette className="h-16 w-16 text-fuchsia-400 animate-pulse mx-auto" />
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-lg blur-lg scale-150 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-200">Style Guide</h2>
            <p className="text-slate-400">Preparing inclusive design system...</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Enhanced Header with better accessibility */}
      <header className="border-b border-border bg-slate-900/95 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-slate-900/20" role="banner">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with better accessibility */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label="Style Guide - Inclusive Design System Home"
            >
              <div className="relative">
                <Hexagon className="h-8 w-8 text-fuchsia-400 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-fuchsia-400/20 rounded-lg blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity" style={{ transitionDuration: 'var(--animation-speed)' }}></div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl text-slate-100">Style Guide</span>
                <span className="text-sm text-slate-400">Inclusive Design System</span>
              </div>
            </Link>

            {/* Center Navigation with accessibility */}
            <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
              <Link 
                href="/design-system" 
                className="flex items-center gap-2 text-slate-300 hover:text-fuchsia-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded px-2 py-1"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" style={{ transitionDuration: 'var(--animation-speed)' }} />
                Documentation
              </Link>
              <Link 
                href="/components" 
                className="flex items-center gap-2 text-slate-300 hover:text-fuchsia-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded px-2 py-1"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <Component className="h-4 w-4 group-hover:scale-110 transition-transform" style={{ transitionDuration: 'var(--animation-speed)' }} />
                Components
              </Link>
            </nav>

            {/* Right Actions with improved accessibility */}
            <div className="flex items-center gap-4">
              {/* Enhanced Search */}
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-fuchsia-400 transition-colors" style={{ transitionDuration: 'var(--animation-speed)' }} />
                <Input
                  placeholder="Search styles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 w-64 bg-slate-800/50 border-slate-700 hover:border-fuchsia-500/50 focus:border-fuchsia-500 transition-colors"
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                  aria-label="Search styles"
                />
                {searchQuery && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-slate-700"
                    aria-label="Clear search"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>

              {/* Filter Toggle with accessibility */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilterOpen(!filterOpen)}
                className={`transition-all ${filterOpen ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'hover:bg-slate-800'}`}
                style={{ transitionDuration: 'var(--animation-speed)' }}
                aria-expanded={filterOpen}
                aria-label="Toggle settings and filters"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>

              {/* Quick Actions with better organization */}
              <div className="hidden md:flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hover:bg-slate-800 transition-colors" 
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                  aria-label="Export style guide"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" 
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                  aria-label="Create new style"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Style
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Settings Panel with new features */}
          {filterOpen && (
            <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 animate-in slide-in-from-top-2" style={{ animationDuration: 'var(--animation-speed)' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-slate-200">Style Guide Settings</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilterOpen(false)}
                  className="h-6 w-6 p-0"
                  aria-label="Close settings"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Animation Speed Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Animation Speed</Label>
                    <span className="text-xs text-slate-400 font-mono">{animationSpeed[0]}x</span>
                  </div>
                  <Slider
                    value={animationSpeed}
                    onValueChange={setAnimationSpeed}
                    max={3}
                    min={0.5}
                    step={0.5}
                    className="w-full"
                    aria-label="Animation speed control"
                  />
                </div>

                {/* View Mode Control */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">View Mode</Label>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant={viewMode === "grid" ? "default" : "outline"}
                      onClick={() => setViewMode("grid")}
                      className="h-8"
                      aria-pressed={viewMode === "grid"}
                    >
                      <Grid3X3 className="h-3 w-3 mr-1" />
                      Grid
                    </Button>
                    <Button
                      size="sm"
                      variant={viewMode === "list" ? "default" : "outline"}
                      onClick={() => setViewMode("list")}
                      className="h-8"
                      aria-pressed={viewMode === "list"}
                    >
                      <Layers className="h-3 w-3 mr-1" />
                      List
                    </Button>
                  </div>
                </div>

                {/* Sort Control */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Sort By</Label>
                  <Select value={sortBy} onValueChange={(value: "name" | "category" | "recent") => setSortBy(value)}>
                    <SelectTrigger className="h-8 bg-slate-800/50 border-slate-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="category">Category</SelectItem>
                      <SelectItem value="recent">Recently Used</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Theme Control */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Theme</Label>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={currentTheme === "dark"}
                      onCheckedChange={(checked) => setCurrentTheme(checked ? "dark" : "light")}
                      aria-label="Toggle dark mode"
                    />
                    <span className="text-sm text-slate-400">Dark Mode</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-6 py-16 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="relative">
                  <Palette className="h-12 w-12 text-fuchsia-400 animate-pulse" />
                  <div className="absolute inset-0 bg-fuchsia-400/20 rounded-lg blur-lg scale-150 animate-pulse"></div>
                </div>
                <Badge 
                  variant="outline" 
                  className="text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-sm font-medium"
                >
                  Design System
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
                Style Guide
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive design tokens, patterns, and guidelines for building inclusive, accessible, and beautiful user interfaces.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/10">
                <div className="text-3xl font-bold text-fuchsia-400 mb-2 group-hover:scale-110 transition-transform">
                  110+
                </div>
                <div className="text-sm text-slate-400">Design Tokens</div>
              </div>
              <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  {tabs.length}
                </div>
                <div className="text-sm text-slate-400">Style Categories</div>
              </div>
              <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">
                  24
                </div>
                <div className="text-sm text-slate-400">Color Variations</div>
              </div>
              <div className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                  WCAG 2.1
                </div>
                <div className="text-sm text-slate-400">Compliant</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 hover:bg-slate-800 transition-all"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Tokens
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-slate-300 hover:text-fuchsia-400 transition-all"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" role="main">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Enhanced Tab Navigation */}
          <div className="mb-8">
            {/* Search Results Summary */}
            {searchQuery && (
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700 animate-in slide-in-from-top-2" style={{ animationDuration: 'var(--animation-speed)' }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-fuchsia-400" />
                    <span className="text-sm text-slate-300">
                      Search results for <span className="font-medium text-white">"{searchQuery}"</span>
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSearchQuery("")}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Enhanced Tab Navigation with Component Gallery Styling */}
            <div className="relative">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                      style={{ transitionDuration: 'var(--animation-speed)' }}
                  >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                    
                    {/* Icon with enhanced effects */}
                    <div className="relative z-10">
                      <div className="relative">
                        <tab.icon className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                        
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                        
                        {/* Active pulse effect */}
                        <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                      </div>
                    </div>
                    
                    {/* Label with better typography */}
                    <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                      {tab.label}
                    </span>
                    
                    {/* Count Badge with enhanced styling */}
                    <Badge 
                      variant="secondary" 
                      className="text-xs px-2 py-0.5 h-5 bg-slate-700/80 text-slate-300 border border-slate-600/50 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/50 group-hover:text-fuchsia-300 group-data-[state=active]:bg-fuchsia-500/30 group-data-[state=active]:border-fuchsia-500/70 group-data-[state=active]:text-fuchsia-200 transition-all font-medium"
                      style={{ transitionDuration: 'var(--animation-speed)' }}
                    >
                      {tab.count}
                    </Badge>
                    
                    {/* Active indicator line */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}></div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
            </div>
            
            {/* Tab Summary with enhanced styling */}
            <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Component className="h-4 w-4" />
                <span>
                  Showing {tabs.find(tab => tab.id === activeTab)?.count || 0} items in{' '}
                  <span className="text-fuchsia-400 font-medium">
                    {tabs.find(tab => tab.id === activeTab)?.label || 'Unknown'}
                  </span>
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {searchQuery && (
                  <div className="flex items-center gap-1 text-xs">
                    <Search className="h-3 w-3" />
                    <span>Filtered by: "{searchQuery}"</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1 text-xs">
                  <Eye className="h-3 w-3" />
                  <span>{viewMode === "grid" ? "Grid View" : "List View"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <TabsContent value="colors" className="mt-0">
            <ColorsTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode} 
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="typography" className="mt-0">
            <TypographyTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode}
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="spacing" className="mt-0">
            <SpacingTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode}
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="components" className="mt-0">
            <ComponentTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode}
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="patterns" className="mt-0">
            <PatternsTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode}
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="accessibility" className="mt-0">
            <AccessibilityTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode}
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>

          <TabsContent value="favorites" className="mt-0">
            <FavoritesTab 
              onCopyCode={handleCopyCode} 
              copiedCode={copiedCode}
              searchQuery={searchQuery}
              viewMode={viewMode}
              sortBy={sortBy}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </TabsContent>
        </Tabs>
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Hexagon className="h-6 w-6 text-fuchsia-400" />
                <span className="font-bold text-slate-200">Style Guide</span>
              </div>
              <p className="text-sm text-slate-400">
                Comprehensive design system for inclusive, accessible interfaces.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-200">Resources</h4>
              <div className="space-y-2 text-sm">
                <Link href="/design-system" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Documentation
                </Link>
                <Link href="/components" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Components
                </Link>
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Figma Kit
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-200">Guidelines</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Accessibility
                </Link>
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Brand Guidelines
                </Link>
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Contributing
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-200">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  GitHub
                </Link>
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Slack Channel
                </Link>
                <Link href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors block">
                  Report Issue
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-slate-400">
              © 2024 Inclusive Design System. Built with accessibility in mind.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="text-slate-400 border-slate-600">
                v2.1.0
              </Badge>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                All systems operational
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ColorsTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  const colorPalettes = [
    {
      id: "primary",
      name: "Primary Colors",
      description: "Main brand colors for primary actions and emphasis",
      category: "Brand",
      colors: [
        { name: "Primary 50", value: "#fdf2f8", class: "bg-fuchsia-50" },
        { name: "Primary 100", value: "#fce7f3", class: "bg-fuchsia-100" },
        { name: "Primary 200", value: "#fbcfe8", class: "bg-fuchsia-200" },
        { name: "Primary 300", value: "#f8b4d9", class: "bg-fuchsia-300" },
        { name: "Primary 400", value: "#f472b6", class: "bg-fuchsia-400" },
        { name: "Primary 500", value: "#ec4899", class: "bg-fuchsia-500" },
        { name: "Primary 600", value: "#db2777", class: "bg-fuchsia-600" },
        { name: "Primary 700", value: "#be185d", class: "bg-fuchsia-700" },
        { name: "Primary 800", value: "#9d174d", class: "bg-fuchsia-800" },
        { name: "Primary 900", value: "#831843", class: "bg-fuchsia-900" }
      ]
    },
    {
      id: "secondary",
      name: "Secondary Colors",
      description: "Supporting colors for secondary actions and elements",
      category: "Brand",
      colors: [
        { name: "Secondary 50", value: "#f8fafc", class: "bg-slate-50" },
        { name: "Secondary 100", value: "#f1f5f9", class: "bg-slate-100" },
        { name: "Secondary 200", value: "#e2e8f0", class: "bg-slate-200" },
        { name: "Secondary 300", value: "#cbd5e1", class: "bg-slate-300" },
        { name: "Secondary 400", value: "#94a3b8", class: "bg-slate-400" },
        { name: "Secondary 500", value: "#64748b", class: "bg-slate-500" },
        { name: "Secondary 600", value: "#475569", class: "bg-slate-600" },
        { name: "Secondary 700", value: "#334155", class: "bg-slate-700" },
        { name: "Secondary 800", value: "#1e293b", class: "bg-slate-800" },
        { name: "Secondary 900", value: "#0f172a", class: "bg-slate-900" }
      ]
    },
    {
      id: "success",
      name: "Success Colors",
      description: "Colors for positive states and successful actions",
      category: "Semantic",
      colors: [
        { name: "Success 50", value: "#f0fdf4", class: "bg-green-50" },
        { name: "Success 100", value: "#dcfce7", class: "bg-green-100" },
        { name: "Success 200", value: "#bbf7d0", class: "bg-green-200" },
        { name: "Success 300", value: "#86efac", class: "bg-green-300" },
        { name: "Success 400", value: "#4ade80", class: "bg-green-400" },
        { name: "Success 500", value: "#22c55e", class: "bg-green-500" },
        { name: "Success 600", value: "#16a34a", class: "bg-green-600" },
        { name: "Success 700", value: "#15803d", class: "bg-green-700" },
        { name: "Success 800", value: "#166534", class: "bg-green-800" },
        { name: "Success 900", value: "#14532d", class: "bg-green-900" }
      ]
    },
    {
      id: "warning",
      name: "Warning Colors",
      description: "Colors for cautionary states and warning messages",
      category: "Semantic",
      colors: [
        { name: "Warning 50", value: "#fffbeb", class: "bg-amber-50" },
        { name: "Warning 100", value: "#fef3c7", class: "bg-amber-100" },
        { name: "Warning 200", value: "#fde68a", class: "bg-amber-200" },
        { name: "Warning 300", value: "#fcd34d", class: "bg-amber-300" },
        { name: "Warning 400", value: "#fbbf24", class: "bg-amber-400" },
        { name: "Warning 500", value: "#f59e0b", class: "bg-amber-500" },
        { name: "Warning 600", value: "#d97706", class: "bg-amber-600" },
        { name: "Warning 700", value: "#b45309", class: "bg-amber-700" },
        { name: "Warning 800", value: "#92400e", class: "bg-amber-800" },
        { name: "Warning 900", value: "#78350f", class: "bg-amber-900" }
      ]
    },
    {
      id: "error",
      name: "Error Colors",
      description: "Colors for error states and destructive actions",
      category: "Semantic",
      colors: [
        { name: "Error 50", value: "#fef2f2", class: "bg-red-50" },
        { name: "Error 100", value: "#fee2e2", class: "bg-red-100" },
        { name: "Error 200", value: "#fecaca", class: "bg-red-200" },
        { name: "Error 300", value: "#fca5a5", class: "bg-red-300" },
        { name: "Error 400", value: "#f87171", class: "bg-red-400" },
        { name: "Error 500", value: "#ef4444", class: "bg-red-500" },
        { name: "Error 600", value: "#dc2626", class: "bg-red-600" },
        { name: "Error 700", value: "#b91c1c", class: "bg-red-700" },
        { name: "Error 800", value: "#991b1b", class: "bg-red-800" },
        { name: "Error 900", value: "#7f1d1d", class: "bg-red-900" }
      ]
    }
  ]

  // Filter palettes based on search
  const filteredPalettes = colorPalettes.filter(palette =>
    palette.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    palette.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    palette.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort palettes
  const sortedPalettes = [...filteredPalettes].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      case "recent":
        return 0 // Would implement actual recent usage tracking
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Color Palette Cards */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
        {sortedPalettes.map((palette) => (
          <Card key={palette.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {palette.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {palette.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {palette.description}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(palette.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label={favorites.has(palette.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${favorites.has(palette.id) ? "fill-fuchsia-400 text-fuchsia-400" : "text-slate-400"}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(JSON.stringify(palette.colors, null, 2), palette.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy color values"
                  >
                    {copiedCode === palette.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {palette.colors.map((color, index) => (
                  <div key={index} className="group/color relative">
                    <div 
                      className={`${color.class} h-12 w-full rounded-lg border border-slate-600/30 cursor-pointer transition-all hover:scale-105 hover:shadow-lg`}
                      onClick={() => onCopyCode(color.value, `${palette.id}-${index}`)}
                      title={`${color.name}: ${color.value}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity">
                      {copiedCode === `${palette.id}-${index}` ? (
                        <CheckCircle2 className="h-4 w-4 text-white drop-shadow-lg" />
                      ) : (
                        <Copy className="h-4 w-4 text-white drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-400 space-y-1">
                <p>Click any color to copy its hex value</p>
                <p className="font-mono">{palette.colors.length} color variations</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Usage Guidelines */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-fuchsia-400" />
            Color Usage Guidelines
          </CardTitle>
          <CardDescription className="text-slate-400">
            Best practices for using colors in your designs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Accessibility</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Ensure 4.5:1 contrast ratio for normal text</li>
                <li>• Use 3:1 contrast ratio for large text (18px+)</li>
                <li>• Don't rely solely on color to convey information</li>
                <li>• Test with color blindness simulators</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Brand Consistency</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Use primary colors for main actions</li>
                <li>• Secondary colors for supporting elements</li>
                <li>• Semantic colors for status indicators</li>
                <li>• Maintain consistent color temperatures</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TypographyTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  const typeScale = [
    { 
      id: "display-large",
      name: "Display Large", 
      class: "text-7xl font-bold", 
      size: "72px",
      lineHeight: "1.1",
      letterSpacing: "-0.02em",
      category: "Display",
      usage: "Hero headlines, major page titles",
      sample: "The quick brown fox" 
    },
    { 
      id: "display-medium",
      name: "Display Medium", 
      class: "text-6xl font-bold", 
      size: "60px",
      lineHeight: "1.1",
      letterSpacing: "-0.02em",
      category: "Display",
      usage: "Section headers, feature titles",
      sample: "The quick brown fox" 
    },
    { 
      id: "display-small",
      name: "Display Small", 
      class: "text-5xl font-bold", 
      size: "48px",
      lineHeight: "1.2",
      letterSpacing: "-0.01em",
      category: "Display",
      usage: "Card titles, modal headers",
      sample: "The quick brown fox" 
    },
    { 
      id: "heading-1",
      name: "Heading 1", 
      class: "text-4xl font-semibold", 
      size: "36px",
      lineHeight: "1.3",
      letterSpacing: "-0.01em",
      category: "Heading",
      usage: "Main page headings",
      sample: "The quick brown fox jumps" 
    },
    { 
      id: "heading-2",
      name: "Heading 2", 
      class: "text-3xl font-semibold", 
      size: "30px",
      lineHeight: "1.3",
      letterSpacing: "0",
      category: "Heading",
      usage: "Section headings",
      sample: "The quick brown fox jumps" 
    },
    { 
      id: "heading-3",
      name: "Heading 3", 
      class: "text-2xl font-semibold", 
      size: "24px",
      lineHeight: "1.4",
      letterSpacing: "0",
      category: "Heading",
      usage: "Subsection headings",
      sample: "The quick brown fox jumps over" 
    },
    { 
      id: "heading-4",
      name: "Heading 4", 
      class: "text-xl font-semibold", 
      size: "20px",
      lineHeight: "1.4",
      letterSpacing: "0",
      category: "Heading",
      usage: "Component headings",
      sample: "The quick brown fox jumps over the lazy dog" 
    },
    { 
      id: "body-large",
      name: "Body Large", 
      class: "text-lg font-normal", 
      size: "18px",
      lineHeight: "1.6",
      letterSpacing: "0",
      category: "Body",
      usage: "Lead paragraphs, important text",
      sample: "The quick brown fox jumps over the lazy dog and runs through the forest" 
    },
    { 
      id: "body-medium",
      name: "Body Medium", 
      class: "text-base font-normal", 
      size: "16px",
      lineHeight: "1.6",
      letterSpacing: "0",
      category: "Body",
      usage: "Default body text, paragraphs",
      sample: "The quick brown fox jumps over the lazy dog and runs through the forest with great speed" 
    },
    { 
      id: "body-small",
      name: "Body Small", 
      class: "text-sm font-normal", 
      size: "14px",
      lineHeight: "1.5",
      letterSpacing: "0",
      category: "Body",
      usage: "Secondary text, captions",
      sample: "The quick brown fox jumps over the lazy dog and runs through the forest with great speed and agility" 
    },
    { 
      id: "caption",
      name: "Caption", 
      class: "text-xs font-normal", 
      size: "12px",
      lineHeight: "1.4",
      letterSpacing: "0.01em",
      category: "Utility",
      usage: "Image captions, metadata",
      sample: "The quick brown fox jumps over the lazy dog and runs through the forest with great speed and agility, demonstrating remarkable coordination" 
    },
    { 
      id: "overline",
      name: "Overline", 
      class: "text-xs font-semibold uppercase tracking-wider", 
      size: "12px",
      lineHeight: "1.4",
      letterSpacing: "0.1em",
      category: "Utility",
      usage: "Labels, categories, eyebrows",
      sample: "The quick brown fox" 
    }
  ]

  // Filter typography based on search
  const filteredTypes = typeScale.filter(type =>
    type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.usage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort typography
  const sortedTypes = [...filteredTypes].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      case "recent":
        return 0 // Would implement actual recent usage tracking
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Typography Scale */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1" : "grid-cols-1"}`}>
        {sortedTypes.map((type) => (
          <Card key={type.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {type.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {type.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {type.usage}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(type.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label={favorites.has(type.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${favorites.has(type.id) ? "fill-fuchsia-400 text-fuchsia-400" : "text-slate-400"}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(type.class, type.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy CSS class"
                  >
                    {copiedCode === type.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Sample Text */}
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700/50">
                  <p className={`${type.class} text-slate-200 leading-relaxed`}>
                    {type.sample}
                  </p>
                </div>
                
                {/* Typography Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Size:</span>
                    <span className="text-slate-200 ml-2 font-mono">{type.size}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Line Height:</span>
                    <span className="text-slate-200 ml-2 font-mono">{type.lineHeight}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Letter Spacing:</span>
                    <span className="text-slate-200 ml-2 font-mono">{type.letterSpacing}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">CSS Class:</span>
                    <code className="text-fuchsia-400 ml-2 bg-slate-800 px-2 py-1 rounded text-xs">{type.class}</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Font Guidelines */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Type className="h-5 w-5 text-fuchsia-400" />
            Typography Guidelines
          </CardTitle>
          <CardDescription className="text-slate-400">
            Best practices for typography in your designs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Hierarchy</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Use consistent scale ratios (1.2x, 1.5x, 2x)</li>
                <li>• Limit to 3-4 font sizes per page</li>
                <li>• Maintain clear visual hierarchy</li>
                <li>• Use font weight to create emphasis</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Readability</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Optimal line length: 45-75 characters</li>
                <li>• Line height: 1.4-1.6 for body text</li>
                <li>• Adequate contrast ratios</li>
                <li>• Consider reading patterns (F-pattern)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SpacingTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  const spacingScale = [
    { id: "0", name: "0", value: "0px", class: "p-0", category: "Base", usage: "No spacing, reset margins" },
    { id: "1", name: "1", value: "4px", class: "p-1", category: "Base", usage: "Minimal spacing, fine adjustments" },
    { id: "2", name: "2", value: "8px", class: "p-2", category: "Base", usage: "Small spacing, compact layouts" },
    { id: "3", name: "3", value: "12px", class: "p-3", category: "Base", usage: "Medium spacing, form elements" },
    { id: "4", name: "4", value: "16px", class: "p-4", category: "Base", usage: "Standard spacing, cards, buttons" },
    { id: "5", name: "5", value: "20px", class: "p-5", category: "Base", usage: "Comfortable spacing, sections" },
    { id: "6", name: "6", value: "24px", class: "p-6", category: "Base", usage: "Large spacing, containers" },
    { id: "8", name: "8", value: "32px", class: "p-8", category: "Extended", usage: "Extra large spacing, major sections" },
    { id: "10", name: "10", value: "40px", class: "p-10", category: "Extended", usage: "Hero sections, page headers" },
    { id: "12", name: "12", value: "48px", class: "p-12", category: "Extended", usage: "Major layout sections" },
    { id: "16", name: "16", value: "64px", class: "p-16", category: "Extended", usage: "Page-level spacing" },
    { id: "20", name: "20", value: "80px", class: "p-20", category: "Extended", usage: "Large page sections" },
    { id: "24", name: "24", value: "96px", class: "p-24", category: "Extended", usage: "Maximum spacing, landing pages" }
  ]

  // Filter spacing based on search
  const filteredSpacing = spacingScale.filter(space =>
    space.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    space.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    space.usage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort spacing
  const sortedSpacing = [...filteredSpacing].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return parseInt(a.name) - parseInt(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      case "recent":
        return 0
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Spacing Scale */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
        {sortedSpacing.map((space) => (
          <Card key={space.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      Space {space.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {space.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {space.usage}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(space.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label={favorites.has(space.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${favorites.has(space.id) ? "fill-fuchsia-400 text-fuchsia-400" : "text-slate-400"}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(space.class, space.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy CSS class"
                  >
                    {copiedCode === space.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Visual Representation */}
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-400/20 border border-fuchsia-400/30 rounded" style={{ padding: space.value }}>
                      <div className="bg-fuchsia-400 w-8 h-8 rounded"></div>
                    </div>
                    <div className="text-sm text-slate-300">
                      Padding: {space.value}
                    </div>
                  </div>
                </div>
                
                {/* Spacing Details */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Value:</span>
                    <span className="text-slate-200 ml-2 font-mono">{space.value}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Scale:</span>
                    <span className="text-slate-200 ml-2 font-mono">{space.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">CSS Class:</span>
                    <code className="text-fuchsia-400 ml-2 bg-slate-800 px-2 py-1 rounded text-xs">{space.class}</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Spacing Guidelines */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Ruler className="h-5 w-5 text-fuchsia-400" />
            Spacing Guidelines
          </CardTitle>
          <CardDescription className="text-slate-400">
            Best practices for consistent spacing in your designs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Layout Principles</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Use consistent spacing ratios (4px base unit)</li>
                <li>• Maintain rhythm with vertical spacing</li>
                <li>• Group related elements with closer spacing</li>
                <li>• Separate unrelated content with more space</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Component Spacing</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Use 4-6 for standard component padding</li>
                <li>• Use 2-3 for compact components</li>
                <li>• Use 8+ for major page sections</li>
                <li>• Maintain consistent margins between sections</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ComponentTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  const componentExamples = [
    {
      id: "button-primary",
      name: "Primary Button",
      category: "Buttons",
      usage: "Main call-to-action, primary actions",
      code: `<Button className="bg-fuchsia-500 hover:bg-fuchsia-600">
  Click me
</Button>`,
      component: <Button className="bg-fuchsia-500 hover:bg-fuchsia-600">Click me</Button>
    },
    {
      id: "button-secondary",
      name: "Secondary Button",
      category: "Buttons",
      usage: "Secondary actions, alternative options",
      code: `<Button variant="outline">
  Secondary
</Button>`,
      component: <Button variant="outline">Secondary</Button>
    },
    {
      id: "input-text",
      name: "Text Input",
      category: "Forms",
      usage: "Text entry, user input fields",
      code: `<Input 
  placeholder="Enter your text..." 
  className="w-full"
/>`,
      component: <Input placeholder="Enter your text..." className="w-full max-w-sm" />
    },
    {
      id: "card-basic",
      name: "Basic Card",
      category: "Layout",
      usage: "Content containers, information grouping",
      code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`,
      component: (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Card content goes here</p>
          </CardContent>
        </Card>
      )
    },
    {
      id: "badge-default",
      name: "Default Badge",
      category: "Indicators",
      usage: "Status indicators, labels, tags",
      code: `<Badge>Default</Badge>`,
      component: <Badge>Default</Badge>
    },
    {
      id: "progress-bar",
      name: "Progress Bar",
      category: "Feedback",
      usage: "Loading states, completion indicators",
      code: `<Progress value={65} className="w-full" />`,
      component: <Progress value={65} className="w-full max-w-sm" />
    }
  ]

  // Filter components based on search
  const filteredComponents = componentExamples.filter(comp =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.usage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort components
  const sortedComponents = [...filteredComponents].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      case "recent":
        return 0
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Component Examples */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
        {sortedComponents.map((comp) => (
          <Card key={comp.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {comp.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {comp.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {comp.usage}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(comp.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label={favorites.has(comp.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${favorites.has(comp.id) ? "fill-fuchsia-400 text-fuchsia-400" : "text-slate-400"}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(comp.code, comp.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy component code"
                  >
                    {copiedCode === comp.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700/50">
                {comp.component}
              </div>
              <div className="relative">
                <pre className="bg-slate-800/50 text-slate-300 rounded-lg p-4 overflow-x-auto text-sm border border-slate-700/50">
                  <code>{comp.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Component Guidelines */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Component className="h-5 w-5 text-fuchsia-400" />
            Component Guidelines
          </CardTitle>
          <CardDescription className="text-slate-400">
            Best practices for using components in your designs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Consistency</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Use consistent component variants</li>
                <li>• Maintain standard sizing across similar components</li>
                <li>• Apply consistent spacing and alignment</li>
                <li>• Follow established interaction patterns</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Accessibility</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Include proper ARIA labels and roles</li>
                <li>• Ensure keyboard navigation support</li>
                <li>• Maintain adequate color contrast</li>
                <li>• Provide focus indicators</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PatternsTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  const patterns = [
    {
      id: "form-validation",
      name: "Form Validation",
      category: "Forms",
      usage: "Error handling and user feedback in forms",
      description: "Consistent validation patterns with clear error messages and visual indicators",
      code: `<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    className="border-red-500" 
    placeholder="Enter your email"
  />
  <p className="text-sm text-red-500">Please enter a valid email address</p>
</div>`,
      preview: (
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            className="border-red-500" 
            placeholder="Enter your email"
          />
          <p className="text-sm text-red-500">Please enter a valid email address</p>
        </div>
      )
    },
    {
      id: "loading-states",
      name: "Loading States",
      category: "Feedback",
      usage: "Indicating loading and processing states",
      description: "Consistent loading indicators and skeleton states for better user experience",
      code: `<div className="space-y-4">
  <div className="flex items-center gap-2">
    <Loader2 className="h-4 w-4 animate-spin" />
    <span>Loading...</span>
  </div>
  <div className="space-y-2">
    <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
    <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
  </div>
</div>`,
      preview: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
          </div>
        </div>
      )
    },
    {
      id: "empty-states",
      name: "Empty States",
      category: "Content",
      usage: "Handling empty content and data states",
      description: "Helpful empty states with clear messaging and actionable next steps",
      code: `<div className="text-center py-12">
  <div className="mx-auto h-12 w-12 text-slate-400 mb-4">
    <Archive className="h-12 w-12" />
  </div>
  <h3 className="text-lg font-semibold mb-2">No items found</h3>
  <p className="text-slate-400 mb-4">Get started by creating your first item</p>
  <Button>Create Item</Button>
</div>`,
      preview: (
        <div className="text-center py-8">
          <div className="mx-auto h-12 w-12 text-slate-400 mb-4">
            <Archive className="h-12 w-12" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No items found</h3>
          <p className="text-slate-400 mb-4">Get started by creating your first item</p>
          <Button size="sm">Create Item</Button>
        </div>
      )
    },
    {
      id: "navigation-breadcrumb",
      name: "Breadcrumb Navigation",
      category: "Navigation",
      usage: "Hierarchical navigation and wayfinding",
      description: "Clear navigation paths with proper hierarchy and interaction states",
      code: `<nav className="flex items-center space-x-2 text-sm">
  <Link href="/" className="text-slate-400 hover:text-slate-200">Home</Link>
  <ChevronRight className="h-4 w-4 text-slate-400" />
  <Link href="/products" className="text-slate-400 hover:text-slate-200">Products</Link>
  <ChevronRight className="h-4 w-4 text-slate-400" />
  <span className="text-slate-200">Current Page</span>
</nav>`,
      preview: (
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-slate-400 hover:text-slate-200">Home</Link>
          <ChevronRight className="h-4 w-4 text-slate-400" />
          <Link href="/products" className="text-slate-400 hover:text-slate-200">Products</Link>
          <ChevronRight className="h-4 w-4 text-slate-400" />
          <span className="text-slate-200">Current Page</span>
        </nav>
      )
    }
  ]

  // Filter patterns based on search
  const filteredPatterns = patterns.filter(pattern =>
    pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pattern.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pattern.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pattern.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort patterns
  const sortedPatterns = [...filteredPatterns].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      case "recent":
        return 0
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Design Patterns */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1" : "grid-cols-1"}`}>
        {sortedPatterns.map((pattern) => (
          <Card key={pattern.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {pattern.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {pattern.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400 mb-2">
                    {pattern.usage}
                  </CardDescription>
                  <p className="text-sm text-slate-300">
                    {pattern.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(pattern.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label={favorites.has(pattern.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${favorites.has(pattern.id) ? "fill-fuchsia-400 text-fuchsia-400" : "text-slate-400"}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(pattern.code, pattern.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy pattern code"
                  >
                    {copiedCode === pattern.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700/50">
                {pattern.preview}
              </div>
              <div className="relative">
                <pre className="bg-slate-800/50 text-slate-300 rounded-lg p-4 overflow-x-auto text-sm border border-slate-700/50">
                  <code>{pattern.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pattern Guidelines */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Grid3X3 className="h-5 w-5 text-fuchsia-400" />
            Design Pattern Guidelines
          </CardTitle>
          <CardDescription className="text-slate-400">
            Best practices for implementing consistent design patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">User Experience</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Maintain consistent interaction patterns</li>
                <li>• Provide clear feedback for user actions</li>
                <li>• Handle edge cases gracefully</li>
                <li>• Follow established mental models</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Implementation</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Document pattern usage and variations</li>
                <li>• Create reusable pattern components</li>
                <li>• Test patterns across different contexts</li>
                <li>• Maintain pattern consistency across products</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AccessibilityTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  const accessibilityGuidelines = [
    {
      id: "color-contrast",
      name: "Color Contrast",
      category: "Visual",
      usage: "Ensuring readable text and UI elements",
      description: "Maintain WCAG 2.1 AA compliance with proper contrast ratios",
      checklist: [
        "4.5:1 contrast ratio for normal text",
        "3:1 contrast ratio for large text (18px+)",
        "3:1 contrast ratio for UI components",
        "Don't rely solely on color to convey information"
      ],
      tools: ["WebAIM Contrast Checker", "Colour Contrast Analyser", "Stark (Figma plugin)"]
    },
    {
      id: "keyboard-navigation",
      name: "Keyboard Navigation",
      category: "Interaction",
      usage: "Supporting keyboard-only users",
      description: "Ensure all interactive elements are keyboard accessible",
      checklist: [
        "All interactive elements are focusable",
        "Visible focus indicators on all focusable elements",
        "Logical tab order throughout the interface",
        "Keyboard shortcuts for common actions"
      ],
      tools: ["Tab key testing", "Screen reader testing", "Keyboard navigation audits"]
    },
    {
      id: "screen-readers",
      name: "Screen Reader Support",
      category: "Assistive Technology",
      usage: "Supporting users with visual impairments",
      description: "Provide proper semantic markup and ARIA labels",
      checklist: [
        "Semantic HTML elements (headings, lists, buttons)",
        "Descriptive link text and button labels",
        "Alt text for images and icons",
        "ARIA labels and roles where needed"
      ],
      tools: ["NVDA", "JAWS", "VoiceOver", "axe DevTools"]
    },
    {
      id: "responsive-design",
      name: "Responsive & Mobile",
      category: "Layout",
      usage: "Accessible across all devices and screen sizes",
      description: "Ensure accessibility on mobile and touch devices",
      checklist: [
        "Touch targets at least 44x44 pixels",
        "Readable text without zooming",
        "Accessible form controls on mobile",
        "Orientation support (portrait/landscape)"
      ],
      tools: ["Mobile device testing", "Browser dev tools", "Responsive design mode"]
    }
  ]

  // Filter guidelines based on search
  const filteredGuidelines = accessibilityGuidelines.filter(guideline =>
    guideline.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guideline.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guideline.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guideline.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort guidelines
  const sortedGuidelines = [...filteredGuidelines].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      case "recent":
        return 0
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      {/* Accessibility Guidelines */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
        {sortedGuidelines.map((guideline) => (
          <Card key={guideline.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {guideline.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {guideline.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400 mb-2">
                    {guideline.usage}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(guideline.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label={favorites.has(guideline.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-4 w-4 transition-colors ${favorites.has(guideline.id) ? "fill-fuchsia-400 text-fuchsia-400" : "text-slate-400"}`} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(guideline.checklist.join('\n'), guideline.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy checklist"
                  >
                    {copiedCode === guideline.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Checklist */}
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Checklist</h4>
                  <ul className="space-y-2">
                    {guideline.checklist.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tools */}
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Recommended Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {guideline.tools.map((tool, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* WCAG Compliance Overview */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Eye className="h-5 w-5 text-fuchsia-400" />
            WCAG 2.1 Compliance
          </CardTitle>
          <CardDescription className="text-slate-400">
            Our commitment to accessibility standards and inclusive design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <div className="text-2xl font-bold text-green-400 mb-2">AA</div>
              <div className="text-sm text-slate-300">Compliance Level</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <div className="text-2xl font-bold text-fuchsia-400 mb-2">4.5:1</div>
              <div className="text-sm text-slate-300">Min Contrast Ratio</div>
            </div>
            <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-slate-300">Keyboard Accessible</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Principles</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• <strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
                <li>• <strong>Operable:</strong> Interface components must be operable by all users</li>
                <li>• <strong>Understandable:</strong> Information and UI operation must be understandable</li>
                <li>• <strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Testing</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• Regular automated accessibility testing</li>
                <li>• Manual testing with keyboard navigation</li>
                <li>• Screen reader testing with NVDA/JAWS</li>
                <li>• User testing with people with disabilities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FavoritesTab({ onCopyCode, copiedCode, searchQuery, viewMode, sortBy, favorites, onToggleFavorite }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, searchQuery: string, viewMode: "grid" | "list", sortBy: "name" | "category" | "recent", favorites: Set<string>, onToggleFavorite: (id: string) => void }) {
  // Aggregate all favorited items from different categories
  const allFavoriteItems = useMemo(() => {
    const items: Array<{
      id: string
      name: string
      category: string
      type: string
      usage: string
      component?: React.ReactNode
      code?: string
      preview?: React.ReactNode
      colors?: Array<{ name: string, value: string, class: string }>
      class?: string
      size?: string
      lineHeight?: string
      letterSpacing?: string
      sample?: string
      value?: string
      checklist?: string[]
      tools?: string[]
      description?: string
    }> = []

    // Color palettes
    const colorPalettes = [
      { id: "primary", name: "Primary Colors", category: "Brand", type: "Color Palette", usage: "Main brand colors for primary actions and emphasis" },
      { id: "secondary", name: "Secondary Colors", category: "Brand", type: "Color Palette", usage: "Supporting colors for secondary actions and elements" },
      { id: "success", name: "Success Colors", category: "Semantic", type: "Color Palette", usage: "Colors for positive states and successful actions" },
      { id: "warning", name: "Warning Colors", category: "Semantic", type: "Color Palette", usage: "Colors for cautionary states and warning messages" },
      { id: "error", name: "Error Colors", category: "Semantic", type: "Color Palette", usage: "Colors for error states and destructive actions" }
    ]

    // Typography scale
    const typeScale = [
      { id: "display-large", name: "Display Large", category: "Display", type: "Typography", usage: "Hero headlines, major page titles", class: "text-7xl font-bold", size: "72px", lineHeight: "1.1", letterSpacing: "-0.02em", sample: "The quick brown fox" },
      { id: "display-medium", name: "Display Medium", category: "Display", type: "Typography", usage: "Section headers, feature titles", class: "text-6xl font-bold", size: "60px", lineHeight: "1.1", letterSpacing: "-0.02em", sample: "The quick brown fox" },
      { id: "display-small", name: "Display Small", category: "Display", type: "Typography", usage: "Card titles, modal headers", class: "text-5xl font-bold", size: "48px", lineHeight: "1.2", letterSpacing: "-0.01em", sample: "The quick brown fox" },
      { id: "heading-1", name: "Heading 1", category: "Heading", type: "Typography", usage: "Main page headings", class: "text-4xl font-semibold", size: "36px", lineHeight: "1.3", letterSpacing: "-0.01em", sample: "The quick brown fox jumps" },
      { id: "heading-2", name: "Heading 2", category: "Heading", type: "Typography", usage: "Section headings", class: "text-3xl font-semibold", size: "30px", lineHeight: "1.3", letterSpacing: "0", sample: "The quick brown fox jumps" },
      { id: "heading-3", name: "Heading 3", category: "Heading", type: "Typography", usage: "Subsection headings", class: "text-2xl font-semibold", size: "24px", lineHeight: "1.4", letterSpacing: "0", sample: "The quick brown fox jumps over" },
      { id: "heading-4", name: "Heading 4", category: "Heading", type: "Typography", usage: "Component headings", class: "text-xl font-semibold", size: "20px", lineHeight: "1.4", letterSpacing: "0", sample: "The quick brown fox jumps over the lazy dog" },
      { id: "body-large", name: "Body Large", category: "Body", type: "Typography", usage: "Lead paragraphs, important text", class: "text-lg font-normal", size: "18px", lineHeight: "1.6", letterSpacing: "0", sample: "The quick brown fox jumps over the lazy dog and runs through the forest" },
      { id: "body-medium", name: "Body Medium", category: "Body", type: "Typography", usage: "Default body text, paragraphs", class: "text-base font-normal", size: "16px", lineHeight: "1.6", letterSpacing: "0", sample: "The quick brown fox jumps over the lazy dog and runs through the forest with great speed" },
      { id: "body-small", name: "Body Small", category: "Body", type: "Typography", usage: "Secondary text, captions", class: "text-sm font-normal", size: "14px", lineHeight: "1.5", letterSpacing: "0", sample: "The quick brown fox jumps over the lazy dog and runs through the forest with great speed and agility" },
      { id: "caption", name: "Caption", category: "Utility", type: "Typography", usage: "Image captions, metadata", class: "text-xs font-normal", size: "12px", lineHeight: "1.4", letterSpacing: "0.01em", sample: "The quick brown fox jumps over the lazy dog and runs through the forest with great speed and agility, demonstrating remarkable coordination" },
      { id: "overline", name: "Overline", category: "Utility", type: "Typography", usage: "Labels, categories, eyebrows", class: "text-xs font-semibold uppercase tracking-wider", size: "12px", lineHeight: "1.4", letterSpacing: "0.1em", sample: "The quick brown fox" }
    ]

    // Spacing scale
    const spacingScale = [
      { id: "0", name: "Space 0", category: "Base", type: "Spacing", usage: "No spacing, reset margins", value: "0px", class: "p-0" },
      { id: "1", name: "Space 1", category: "Base", type: "Spacing", usage: "Minimal spacing, fine adjustments", value: "4px", class: "p-1" },
      { id: "2", name: "Space 2", category: "Base", type: "Spacing", usage: "Small spacing, compact layouts", value: "8px", class: "p-2" },
      { id: "3", name: "Space 3", category: "Base", type: "Spacing", usage: "Medium spacing, form elements", value: "12px", class: "p-3" },
      { id: "4", name: "Space 4", category: "Base", type: "Spacing", usage: "Standard spacing, cards, buttons", value: "16px", class: "p-4" },
      { id: "5", name: "Space 5", category: "Base", type: "Spacing", usage: "Comfortable spacing, sections", value: "20px", class: "p-5" },
      { id: "6", name: "Space 6", category: "Base", type: "Spacing", usage: "Large spacing, containers", value: "24px", class: "p-6" },
      { id: "8", name: "Space 8", category: "Extended", type: "Spacing", usage: "Extra large spacing, major sections", value: "32px", class: "p-8" },
      { id: "10", name: "Space 10", category: "Extended", type: "Spacing", usage: "Hero sections, page headers", value: "40px", class: "p-10" },
      { id: "12", name: "Space 12", category: "Extended", type: "Spacing", usage: "Major layout sections", value: "48px", class: "p-12" },
      { id: "16", name: "Space 16", category: "Extended", type: "Spacing", usage: "Page-level spacing", value: "64px", class: "p-16" },
      { id: "20", name: "Space 20", category: "Extended", type: "Spacing", usage: "Large page sections", value: "80px", class: "p-20" },
      { id: "24", name: "Space 24", category: "Extended", type: "Spacing", usage: "Maximum spacing, landing pages", value: "96px", class: "p-24" }
    ]

    // Component examples
    const componentExamples = [
      { id: "button-primary", name: "Primary Button", category: "Buttons", type: "Component", usage: "Main call-to-action, primary actions" },
      { id: "button-secondary", name: "Secondary Button", category: "Buttons", type: "Component", usage: "Secondary actions, alternative options" },
      { id: "input-text", name: "Text Input", category: "Forms", type: "Component", usage: "Text entry, user input fields" },
      { id: "card-basic", name: "Basic Card", category: "Layout", type: "Component", usage: "Content containers, information grouping" },
      { id: "badge-default", name: "Default Badge", category: "Indicators", type: "Component", usage: "Status indicators, labels, tags" },
      { id: "progress-bar", name: "Progress Bar", category: "Feedback", type: "Component", usage: "Loading states, completion indicators" }
    ]

    // Design patterns
    const patterns = [
      { id: "form-validation", name: "Form Validation", category: "Forms", type: "Pattern", usage: "Error handling and user feedback in forms", description: "Consistent validation patterns with clear error messages and visual indicators" },
      { id: "loading-states", name: "Loading States", category: "Feedback", type: "Pattern", usage: "Indicating loading and processing states", description: "Consistent loading indicators and skeleton states for better user experience" },
      { id: "empty-states", name: "Empty States", category: "Content", type: "Pattern", usage: "Handling empty content and data states", description: "Helpful empty states with clear messaging and actionable next steps" },
      { id: "navigation-breadcrumb", name: "Breadcrumb Navigation", category: "Navigation", type: "Pattern", usage: "Hierarchical navigation and wayfinding", description: "Clear navigation paths with proper hierarchy and interaction states" }
    ]

    // Accessibility guidelines
    const accessibilityGuidelines = [
      { id: "color-contrast", name: "Color Contrast", category: "Visual", type: "Accessibility", usage: "Ensuring readable text and UI elements", description: "Maintain WCAG 2.1 AA compliance with proper contrast ratios" },
      { id: "keyboard-navigation", name: "Keyboard Navigation", category: "Interaction", type: "Accessibility", usage: "Supporting keyboard-only users", description: "Ensure all interactive elements are keyboard accessible" },
      { id: "screen-readers", name: "Screen Reader Support", category: "Assistive Technology", type: "Accessibility", usage: "Supporting users with visual impairments", description: "Provide proper semantic markup and ARIA labels" },
      { id: "responsive-design", name: "Responsive & Mobile", category: "Layout", type: "Accessibility", usage: "Accessible across all devices and screen sizes", description: "Ensure accessibility on mobile and touch devices" }
    ]

    // Add favorited items from each category
    const allArrays = [colorPalettes, typeScale, spacingScale, componentExamples, patterns, accessibilityGuidelines]
    
    allArrays.forEach(array => {
      array.forEach(item => {
        if (favorites.has(item.id)) {
          items.push(item)
        }
      })
    })

    return items
  }, [favorites])

  // Filter favorites based on search
  const filteredFavorites = allFavoriteItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.usage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort favorites
  const sortedFavorites = [...filteredFavorites].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.type.localeCompare(b.type)
      case "recent":
        return 0
      default:
        return 0
    }
  })

  if (favorites.size === 0) {
    return (
      <div className="text-center py-16">
        <div className="mx-auto h-16 w-16 text-slate-400 mb-6">
          <Heart className="h-16 w-16" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-slate-200">No Favorites Yet</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Start exploring our design system and click the heart icon on any item to add it to your favorites.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button 
            onClick={() => (document.querySelector('[data-value="colors"]') as HTMLElement)?.click()}
            variant="outline"
            size="sm"
          >
            <Palette className="h-4 w-4 mr-2" />
            Browse Colors
          </Button>
          <Button 
            onClick={() => (document.querySelector('[data-value="typography"]') as HTMLElement)?.click()}
            variant="outline"
            size="sm"
          >
            <Type className="h-4 w-4 mr-2" />
            Browse Typography
          </Button>
          <Button 
            onClick={() => (document.querySelector('[data-value="components"]') as HTMLElement)?.click()}
            variant="outline"
            size="sm"
          >
            <Component className="h-4 w-4 mr-2" />
            Browse Components
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Favorites Summary */}
      <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-600/10 rounded-xl p-6 border border-fuchsia-500/20">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="h-6 w-6 text-fuchsia-400 fill-fuchsia-400" />
          <h3 className="text-xl font-semibold text-slate-200">Your Favorites</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-fuchsia-400">{favorites.size}</div>
            <div className="text-sm text-slate-400">Total Items</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              {new Set(sortedFavorites.map(item => item.type)).size}
            </div>
            <div className="text-sm text-slate-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">
              {sortedFavorites.filter(item => item.type === 'Color Palette').length}
            </div>
            <div className="text-sm text-slate-400">Colors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">
              {sortedFavorites.filter(item => item.type === 'Component').length}
            </div>
            <div className="text-sm text-slate-400">Components</div>
          </div>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
        {sortedFavorites.map((item) => (
          <Card key={item.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-lg text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {item.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {item.usage}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onToggleFavorite(item.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Remove from favorites"
                  >
                    <Heart className="h-4 w-4 fill-fuchsia-400 text-fuchsia-400" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onCopyCode(item.class || item.code || item.value || JSON.stringify(item), item.id)}
                    className="h-8 w-8 p-0 hover:bg-slate-700"
                    aria-label="Copy item details"
                  >
                    {copiedCode === item.id ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Type-specific preview */}
                {item.type === 'Typography' && item.sample && (
                  <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                    <p className={`${item.class} text-slate-200 leading-relaxed`}>
                      {item.sample}
                    </p>
                  </div>
                )}
                
                {item.type === 'Spacing' && item.value && (
                  <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="bg-fuchsia-400/20 border border-fuchsia-400/30 rounded" style={{ padding: item.value }}>
                        <div className="bg-fuchsia-400 w-6 h-6 rounded"></div>
                      </div>
                      <div className="text-sm text-slate-300">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}

                {item.type === 'Color Palette' && (
                  <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className={`h-8 w-8 rounded bg-gradient-to-r ${i === 0 ? 'from-fuchsia-200 to-fuchsia-300' : i === 1 ? 'from-fuchsia-300 to-fuchsia-400' : i === 2 ? 'from-fuchsia-400 to-fuchsia-500' : i === 3 ? 'from-fuchsia-500 to-fuchsia-600' : 'from-fuchsia-600 to-fuchsia-700'}`} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="text-xs text-slate-500 space-y-1">
                  <div>Added to favorites</div>
                  {item.class && <div className="font-mono text-fuchsia-400">{item.class}</div>}
                  {item.value && <div className="font-mono text-fuchsia-400">{item.value}</div>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-fuchsia-400" />
            Manage Your Favorites
          </CardTitle>
          <CardDescription className="text-slate-400">
            Organize and export your favorite design system items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const favoritesData = JSON.stringify(sortedFavorites, null, 2)
                onCopyCode(favoritesData, 'all-favorites')
              }}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy All Favorites
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const blob = new Blob([JSON.stringify(sortedFavorites, null, 2)], { type: 'application/json' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = 'design-system-favorites.json'
                a.click()
                URL.revokeObjectURL(url)
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Export Favorites
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                favorites.forEach(id => onToggleFavorite(id))
              }}
            >
              <X className="h-4 w-4 mr-2" />
              Clear All Favorites
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
