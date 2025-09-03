We're"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  LayoutDashboard,
} from "lucide-react"
import { ComponentCard } from "./categories/component-card"

// Import the separated component files
import { RecruitmentComponents } from "./categories/recruitment-components"
import { FormComponents } from "./categories/form-components"
import { NavigationComponents } from "./categories/navigation-components"
import { FeedbackComponents } from "./categories/feedback-components"
import { DataDisplayComponents } from "./categories/data-display-components"
import { LayoutComponents } from "./categories/layout-components"
import { MediaComponents } from "./categories/media-components"
import { UtilityComponents } from "./categories/utility-components"
import { DashboardComponents } from "./categories/dashboard-components"

// Helper to collect all components from all categories
import { components as recruitmentComponents } from "./categories/recruitment-components"
import { components as formComponents } from "./categories/form-components"
import { components as navigationComponents } from "./categories/navigation-components"
import { components as feedbackComponents } from "./categories/feedback-components"
import { components as dataDisplayComponents } from "./categories/data-display-components"
import { components as layoutComponents } from "./categories/layout-components"
import { components as mediaComponents } from "./categories/media-components"
import { components as utilityComponents } from "./categories/utility-components"
import { components as dashboardComponents } from "./categories/dashboard-components"

const getAllComponents = () => {
  return [
    ...recruitmentComponents,
    ...formComponents,
    ...navigationComponents,
    ...feedbackComponents,
    ...dataDisplayComponents,
    ...layoutComponents,
    ...mediaComponents,
    ...utilityComponents,
    ...dashboardComponents,
  ]
}

export default function ComponentsPage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("recruitment")
  const [searchQuery, setSearchQuery] = useState("")
  const [animationSpeed] = useState([1])
  const [copiedCode, setCopiedCode] = useState("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [viewMode] = useState<"grid" | "list">("grid")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
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
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, count: 8 },
    { id: "favourites", label: "Favourites", icon: Heart, count: favorites.size }
  ], [favorites.size])

  if (!mounted) {
    return (
      <div className="flex min-h-screen bg-background">
        <UnifiedSidebar animationSpeed={animationSpeed} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-fuchsia-400 mx-auto mb-4" />
            <p className="text-slate-400">Loading design system...</p>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-background">
        <UnifiedSidebar animationSpeed={animationSpeed} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="relative">
              <Hexagon className="h-16 w-16 text-fuchsia-400 animate-pulse mx-auto" />
              <div className="absolute inset-0 bg-fuchsia-400/20 rounded-lg blur-lg scale-150 animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-200">Component Gallery</h2>
              <p className="text-slate-400">Preparing enterprise design system...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      
      <div className="flex-1 relative">
      <header className="border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl shadow-slate-900/25 relative overflow-hidden" role="banner">
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
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-10 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/50 shadow-xl/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                  {filteredTabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                      style={{ transitionDuration: 'var(--animation-speed)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        <div className="relative">
                          <tab.icon className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        {tab.label}
                      </span>
                      
                      <Badge 
                        variant="secondary" 
                        className="text-xs px-2 py-0.5 h-5 bg-slate-700/80 text-slate-300 border border-slate-600/50 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/50 group-hover:text-fuchsia-300 group-data-[state=active]:bg-fuchsia-500/30 group-data-[state=active]:border-fuchsia-500/70 group-data-[state=active]:text-fuchsia-200 transition-all font-medium"
                        style={{ transitionDuration: 'var(--animation-speed)' }}
                      >
                        {tab.count}
                      </Badge>
                      
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}></div>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
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
  <RecruitmentComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="forms" className="mt-0">
  <FormComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="navigation" className="mt-0">
  <NavigationComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="feedback" className="mt-0">
  <FeedbackComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="data" className="mt-0">
  <DataDisplayComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="layout" className="mt-0">
  <LayoutComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="media" className="mt-0">
  <MediaComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="utility" className="mt-0">
  <UtilityComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
</TabsContent>

            <TabsContent value="dashboard" className="mt-0">
  <DashboardComponents 
    searchQuery={searchQuery} 
    onCopyCode={handleCopyCode} 
    copiedCode={copiedCode}
    viewMode={viewMode}
    favorites={favorites}
    onToggleFavourite={toggleFavourite}
  />
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
                      {favorites.size} Components
          </Badge>
                </div>

                  {favorites.size === 0 ? (
          <div className="text-center py-12 text-slate-400">
                      <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">No favourites yet</p>
                      <p className="text-sm">Start favouriting components to see them here</p>
                  </div>
                  ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getAllComponents()
                        .filter((comp) => favorites.has(comp.id))
                        .map((comp) => (
            <ComponentCard
              key={comp.id}
              id={comp.id}
              title={comp.title}
              description={comp.description}
              code={comp.code}
                            onCopyCode={handleCopyCode}
              copiedCode={copiedCode}
                            isFavourite={favorites.has(comp.id)}
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