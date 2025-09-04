"use client"

import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  Hexagon,
  Users,
  FileText,
  Menu,
  MessageSquare,
  BarChart3,
  Layout,
  ImageIcon,
  Settings,
  Heart,
  Loader2,
  Component,
  Search,
  X,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Grid3X3,
  Filter,
} from "lucide-react"
import { ComponentCard } from "./categories/component-card"

// Lazy load component categories for better performance
const RecruitmentComponents = lazy(() => import("./categories/recruitment-components").then(m => ({ default: m.RecruitmentComponents })))
const FormComponents = lazy(() => import("./categories/form-components").then(m => ({ default: m.FormComponents })))
const NavigationComponents = lazy(() => import("./categories/navigation-components").then(m => ({ default: m.NavigationComponents })))
const FeedbackComponents = lazy(() => import("./categories/feedback-components").then(m => ({ default: m.FeedbackComponents })))
const DataDisplayComponents = lazy(() => import("./categories/data-display-components").then(m => ({ default: m.DataDisplayComponents })))
const LayoutComponents = lazy(() => import("./categories/layout-components").then(m => ({ default: m.LayoutComponents })))
const MediaComponents = lazy(() => import("./categories/media-components").then(m => ({ default: m.MediaComponents })))
const UtilityComponents = lazy(() => import("./categories/utility-components").then(m => ({ default: m.UtilityComponents })))
const DashboardComponents = lazy(() => import("./categories/dashboard-components").then(m => ({ default: m.DashboardComponents })))

// Remove heavy component imports to improve initial load performance
// Component counts are now estimated to avoid loading all component data upfront

// Loading fallback component for lazy-loaded categories
function ComponentLoadingFallback() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <div className="h-8 bg-slate-700/50 rounded w-64 animate-pulse" />
          <div className="h-4 bg-slate-800/50 rounded w-48 animate-pulse" />
        </div>
        <div className="h-6 bg-slate-700/50 rounded w-24 animate-pulse" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 bg-slate-800/30 rounded-lg border border-slate-700/50 animate-pulse" />
        ))}
      </div>
    </div>
  )
}

export default function ComponentsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("recruitment")
  const [searchQuery, setSearchQuery] = useState("")
  const [animationSpeed] = useState([1])
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [favourites, setFavorites] = useState<Set<string>>(new Set())
  const [viewMode] = useState<"grid" | "list">("grid")
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const speed = Math.max(0.1, Math.min(3, animationSpeed[0]))
      document.documentElement.style.setProperty('--animation-speed', `${1 / speed}s`)
    }
  }, [animationSpeed, mounted])

  const handleCopyCode = useCallback(async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
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

  const toggleFavourite = useCallback((id: string) => {
    setFavorites(prev => {
      const newFavourites = new Set(prev)
      if (newFavourites.has(id)) {
        newFavourites.delete(id)
      } else {
        newFavourites.add(id)
      }
      return newFavourites
    })
  }, [])

  const filteredTabs = useMemo(() => [
    { id: "recruitment", label: "Recruitment", icon: Users, count: 24 },
    { id: "forms", label: "Forms", icon: FileText, count: 18 },
    { id: "navigation", label: "Navigation", icon: Menu, count: 12 },
    { id: "feedback", label: "Feedback", icon: MessageSquare, count: 8 },
    { id: "data", label: "Data Display", icon: BarChart3, count: 15 },
    { id: "layout", label: "Layout", icon: Layout, count: 10 },
    { id: "media", label: "Media", icon: ImageIcon, count: 6 },
    { id: "utility", label: "Utility", icon: Settings, count: 9 },
    { id: "dashboard", label: "Dashboard", icon: Component, count: 12 },
    { id: "favourites", label: "Favourites", icon: Heart, count: favourites.size }
  ], [favourites.size])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      
      <div className="flex-1 relative">
      <header className="border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-slate-900/25 relative overflow-hidden" role="banner">
  {/* Quick Stats Bar */}
  <div className="bg-slate-800/50 border-b border-slate-700/30">
    <div className="container mx-auto px-6 py-2">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <span className="text-slate-400">
            <span className="text-fuchsia-400 font-semibold">102</span> Components Available
          </span>
          <span className="text-slate-400">
            <span className="text-green-400 font-semibold">8</span> Categories
          </span>
          <span className="text-slate-400">
            <span className="text-blue-400 font-semibold">{favourites.size}</span> Favourited
          </span>
        </div>
        <div className="text-slate-500">Last updated: Today</div>
      </div>
    </div>
  </div>
  
  <div className="container mx-auto px-6 py-5">
    <div className="flex items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Component className="h-8 w-8 text-fuchsia-400" />
          <div className="absolute inset-0 bg-fuchsia-400/20 rounded-lg blur-lg scale-150"></div>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-slate-200">Inclusive</h1>
          <p className="text-xs text-slate-400">Component Gallery</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-fuchsia-400 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }} />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-20 w-64 lg:w-80 bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 focus:border-fuchsia-500 transition-all duration-300 rounded-lg"
            style={{ transitionDuration: 'var(--animation-speed)' }}
            aria-label="Search components"
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
                  </div>
                </div>
              </div>
        </header>

        <main className="container mx-auto px-6 py-8 relative z-10" role="main">
          {searchQuery && (
            <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-xl animate-in slide-in-from-top-2" style={{ animationDuration: 'var(--animation-speed)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-fuchsia-400" />
                  <span className="text-sm text-slate-300">
                    Search results for <span className="font-medium text-white">&quot;{searchQuery}&quot;</span>
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8">
              {/* Page Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-200 mb-2">Component Library</h1>
                <p className="text-slate-400 text-sm max-w-3xl">
                  Production-ready components built for Inclusive's recruitment platform. Each component includes usage guidelines, 
                  accessibility features, and implementation examples to help you build consistent experiences.
                </p>
              </div>

              {/* Quick Implementation Guide */}
              <div className="mb-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-fuchsia-400" />
                  Quick Implementation Guide
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-400">1</span>
                      </div>
                      <span className="text-sm font-medium text-slate-200">Choose Component</span>
                    </div>
                    <p className="text-xs text-slate-400 ml-8">
                      Browse categories to find the right component for your use case
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-400">2</span>
                      </div>
                      <span className="text-sm font-medium text-slate-200">Copy Code</span>
                    </div>
                    <p className="text-xs text-slate-400 ml-8">
                      Use the copy button to get ready-to-use component code
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-purple-400">3</span>
                      </div>
                      <span className="text-sm font-medium text-slate-200">Customise</span>
                    </div>
                    <p className="text-xs text-slate-400 ml-8">
                      Adapt styling and props to match your specific requirements
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg font-semibold text-slate-200">Viewing:</h2>
                <Select value={activeTab} onValueChange={setActiveTab}>
                  <SelectTrigger className="w-auto min-w-[200px] h-10 bg-slate-800/40 border border-slate-700/30 hover:bg-slate-800/60 transition-colors text-slate-300">
                    {(() => {
                      const currentTab = filteredTabs.find(tab => tab.id === activeTab);
                      return currentTab ? (
                        <div className="flex items-center gap-3">
                          <currentTab.icon className="h-5 w-5 text-fuchsia-400" />
                          <span className="font-medium text-slate-200">{currentTab.label}</span>
                          <span className="text-xs text-slate-500">({currentTab.count})</span>
                        </div>
                      ) : null;
                    })()}
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900/95 backdrop-blur-xl border border-slate-800/60 rounded-lg">
                    {filteredTabs.map((tab) => (
                      <SelectItem key={tab.id} value={tab.id} className="focus:bg-slate-800/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <tab.icon className="h-4 w-4 text-slate-400" />
                          <span>{tab.label}</span>
                          <span className="text-xs text-slate-500 ml-auto">({tab.count})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Context & When to Use */}
              <div className="mb-6 p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                  <h3 className="text-sm font-medium text-slate-200">
                    When to use {filteredTabs.find(tab => tab.id === activeTab)?.label || 'these components'}
                  </h3>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {(() => {
                    const contextMap: Record<string, string> = {
                      recruitment: "Use recruitment components when building candidate profiles, job listings, interview scheduling, and hiring workflows. Perfect for applicant tracking systems, candidate databases, and recruitment dashboards.",
                      forms: "Use form components for user input, data collection, and interactive workflows. Essential for application forms, profile updates, search filters, and any user data entry scenarios.",
                      navigation: "Use navigation components to help users move through your application. Ideal for menus, breadcrumbs, pagination, and any interface that requires user wayfinding or section switching.",
                      feedback: "Use feedback components to communicate system status, user actions, and important information. Perfect for notifications, alerts, loading states, and confirmation messages.",
                      "data-display": "Use data display components to present information clearly and efficiently. Ideal for tables, cards, lists, charts, and any scenario where you need to show structured data.",
                      layout: "Use layout components to structure your application's visual hierarchy. Essential for grids, containers, spacing, and organising content in a consistent, responsive manner.",
                      media: "Use media components for images, videos, avatars, and file handling. Perfect for user profiles, document uploads, media galleries, and any content that includes visual assets.",
                      utility: "Use utility components for common interface patterns and helper functions. Ideal for badges, tooltips, progress indicators, and small reusable interface elements.",
                      dashboard: "Use dashboard components for data visualisation and analytics interfaces. Perfect for recruitment metrics, performance charts, KPI displays, and executive reporting views."
                    };
                    return contextMap[activeTab] || "Select a category to see specific usage guidance.";
                  })()}
                </div>
              </div>
            </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Component className="h-4 w-4" />
                  <span>
                    Showing {filteredTabs.find(tab => tab.id === activeTab)?.count || 0} components in{' '}
                    <span className="text-fuchsia-400 font-medium">
                      {filteredTabs.find(tab => tab.id === activeTab)?.label || 'Unknown'}
                    </span>
                  </span>
                </div>
                
                <div className="flex items-center gap-6">
                  {searchQuery && (
                    <div className="flex items-center gap-1 text-xs">
                      <Search className="h-3 w-3" />
                    <span>Filtered by: &quot;{searchQuery}&quot;</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-1 text-xs">
                    <Eye className="h-3 w-3" />
                    <span>{viewMode === "grid" ? "Grid View" : "List View"}</span>
                </div>
              </div>
            </div>

            <TabsContent value="recruitment" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <RecruitmentComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="forms" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <FormComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="navigation" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <NavigationComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="feedback" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <FeedbackComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="data" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <DataDisplayComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="layout" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <LayoutComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="media" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <MediaComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="utility" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <UtilityComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="dashboard" className="mt-0">
              <Suspense fallback={<ComponentLoadingFallback />}>
  <DashboardComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
                  favourites={favourites}
    onToggleFavourite={toggleFavourite}
  />
              </Suspense>
</TabsContent>

            <TabsContent value="favourites" className="mt-0">
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
                <div>
                      <h2 className="text-3xl font-bold mb-2 text-slate-100">Favourite Components</h2>
                      <p className="text-slate-400">Your saved and favourite components</p>
                  </div>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-3 py-1">
                      {favourites.size} Components
          </Badge>
                </div>

                  {favourites.size === 0 ? (
          <div className="text-center py-12 text-slate-400">
                      <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">No favourites yet</p>
                      <p className="text-sm">Start favouriting components to see them here</p>
                  </div>
                  ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getAllComponents()
                        .filter((comp) => favourites.has(comp.id))
                        .map((comp) => (
            <ComponentCard
              key={comp.id}
              id={comp.id}
              title={comp.title}
              description={comp.description}
              code={comp.code}
                            onCopyCode={handleCopyCode}
              copiedCode={copiedCode}
                            isFavourite={favourites.has(comp.id)}
                            onToggleFavourite={toggleFavourite}
              viewMode={viewMode}
              searchQuery={searchQuery}
            >
              {comp.component}
            </ComponentCard>
          ))}
                </div>
        )}
      </section>
    </div>
          </TabsContent>
        </Tabs>
            </main>
          </div>
        </div>
      )
}





