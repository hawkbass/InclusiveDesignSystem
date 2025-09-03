"use client"

import React, { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Palette, 
  Component, 
  Layers, 
  Grid3X3, 
  Eye, 
  Zap,
  Search,
  X,
  Copy,
  CheckCircle2
} from "lucide-react"

// Import modular sections
import { AtomsSection } from "./components/atoms-section"
import { MoleculesSection } from "./components/molecules-section"
import { SpecializedMoleculesSection } from "./components/specialized-molecules-section"
import { OrganismsSection } from "./components/organisms-section"
import { AccessibilitySection } from "./components/accessibility-section"
import { TestingSection } from "./components/testing-section"

export default function StyleGuide() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedCode, setCopiedCode] = useState("")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState("atoms")
  const [activeAtomType, setActiveAtomType] = useState("colors")

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const handleNavigateToComponent = (componentId: string) => {
    // Handle navigation to specific components
    console.log("Navigate to:", componentId)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-indigo-500/5" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30 mb-4">
                  Design System v2.0
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                  Style Guide
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> & Component Library</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Comprehensive design tokens, components, and patterns for building world-class user experiences. 
                  Everything you need to create consistent, accessible, and beautiful interfaces.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    placeholder="Search colors, components, patterns... Try 'fuchsia button' or 'login form'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-12 py-4 text-lg bg-slate-800/50 border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">47</div>
                  <div className="text-sm text-slate-500">Design Tokens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">23</div>
                  <div className="text-sm text-slate-500">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">17</div>
                  <div className="text-sm text-slate-500">Organisms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">{favorites.size}</div>
                  <div className="text-sm text-slate-500">Favorited</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Tab Navigation */}
              <div className="mb-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                  <TabsTrigger
                    value="atoms"
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-fuchsia-500/10 data-[state=active]:text-fuchsia-300 data-[state=active]:border-fuchsia-500/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200 rounded-md border border-transparent"
                  >
                    <Palette className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-center hidden sm:block text-xs">Atoms</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-4 bg-slate-700/60 text-slate-400 border-0">
                      47
                    </Badge>
                  </TabsTrigger>

                  <TabsTrigger
                    value="molecules"
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-fuchsia-500/10 data-[state=active]:text-fuchsia-300 data-[state=active]:border-fuchsia-500/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200 rounded-md border border-transparent"
                  >
                    <Component className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-center hidden sm:block text-xs">Molecules</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-4 bg-slate-700/60 text-slate-400 border-0">
                      23
                    </Badge>
                  </TabsTrigger>

                  <TabsTrigger
                    value="specialized"
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-fuchsia-500/10 data-[state=active]:text-fuchsia-300 data-[state=active]:border-fuchsia-500/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200 rounded-md border border-transparent"
                  >
                    <Layers className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-center hidden sm:block text-xs">Advanced</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-4 bg-slate-700/60 text-slate-400 border-0">
                      10
                    </Badge>
                  </TabsTrigger>

                  <TabsTrigger
                    value="organisms"
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-fuchsia-500/10 data-[state=active]:text-fuchsia-300 data-[state=active]:border-fuchsia-500/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200 rounded-md border border-transparent"
                  >
                    <Grid3X3 className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-center hidden sm:block text-xs">Organisms</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-4 bg-slate-700/60 text-slate-400 border-0">
                      17
                    </Badge>
                  </TabsTrigger>

                  <TabsTrigger
                    value="accessibility"
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-fuchsia-500/10 data-[state=active]:text-fuchsia-300 data-[state=active]:border-fuchsia-500/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200 rounded-md border border-transparent"
                  >
                    <Eye className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-center hidden sm:block text-xs">A11y</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-4 bg-slate-700/60 text-slate-400 border-0">
                      AAA
                    </Badge>
                  </TabsTrigger>

                  <TabsTrigger
                    value="testing"
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs sm:text-sm data-[state=active]:bg-fuchsia-500/10 data-[state=active]:text-fuchsia-300 data-[state=active]:border-fuchsia-500/30 hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-200 rounded-md border border-transparent"
                  >
                    <Zap className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-center hidden sm:block text-xs">Testing</span>
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-4 bg-slate-700/60 text-slate-400 border-0">
                      4
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tab Content */}
              <TabsContent value="atoms" className="mt-0">
                <AtomsSection
                  activeAtomType={activeAtomType}
                  setActiveAtomType={setActiveAtomType}
                  searchQuery={searchQuery}
                  viewMode="grid"
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </TabsContent>

              <TabsContent value="molecules" className="mt-0">
                <MoleculesSection
                  searchQuery={searchQuery}
                  viewMode="grid"
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </TabsContent>

              <TabsContent value="specialized" className="mt-0">
                <SpecializedMoleculesSection
                  searchQuery={searchQuery}
                  viewMode="grid"
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </TabsContent>

              <TabsContent value="organisms" className="mt-0">
                <OrganismsSection
                  searchQuery={searchQuery}
                  viewMode="grid"
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  onNavigateToComponent={handleNavigateToComponent}
                />
              </TabsContent>

              <TabsContent value="accessibility" className="mt-0">
                <AccessibilitySection
                  searchQuery={searchQuery}
                  viewMode="grid"
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </TabsContent>

              <TabsContent value="testing" className="mt-0">
                <TestingSection
                  searchQuery={searchQuery}
                  viewMode="grid"
                  onCopyCode={handleCopyCode}
                  copiedCode={copiedCode}
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}