"use client"

import React, { useState, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  CheckCircle2,
  Download
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
  const [favourites, setFavorites] = useState<Set<string>>(new Set())
  const [activeSection, setActiveSection] = useState("atoms")
  const [activeAtomType, setActiveAtomType] = useState("colours")

  useEffect(() => {
    document.title = "Style Guide - Inclusive Design System"
  }, [])

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

  const handleNavigateToComponent = (componentId: string) => {
    // Handle navigation to specific components
    console.log("Navigate to:", componentId)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">
                  Design System v2.0
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Style Guide
                  <span className="text-gradient"> & Component Library</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive design tokens, components, and patterns for building world-class user experiences. 
                  Everything you need to create consistent, accessible, and beautiful interfaces.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search colours, components, patterns... Try 'fuchsia button' or 'login form'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-12 py-4 text-lg bg-card/50 border-border text-foreground placeholder-muted-foreground rounded-xl"
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
                  <div className="text-2xl font-bold text-foreground">47</div>
                  <div className="text-sm text-muted-foreground">Design Tokens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <div className="text-sm text-muted-foreground">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">17</div>
                  <div className="text-sm text-muted-foreground">Organisms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{favourites.size}</div>
                  <div className="text-sm text-muted-foreground">Favorited</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              {/* Section Navigation */}
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-lg font-semibold text-foreground">Viewing:</h2>
                <Select value={activeSection} onValueChange={setActiveSection}>
                  <SelectTrigger className="w-auto min-w-[200px] h-10 bg-card/40 border border-border/30 hover:bg-card/60 transition-colors text-foreground/80">
                    {(() => {
                      const tabs = [
                        { value: "atoms", label: "Atoms", icon: Palette, count: 47 },
                        { value: "molecules", label: "Molecules", icon: Component, count: 23 },
                        { value: "specialized", label: "Advanced", icon: Layers, count: 10 },
                        { value: "organisms", label: "Organisms", icon: Grid3X3, count: 17 },
                        { value: "accessibility", label: "A11y", icon: Eye, count: "AAA" },
                        { value: "testing", label: "Testing", icon: Zap, count: 4 }
                      ];
                      const currentTab = tabs.find(tab => tab.value === activeSection);
                      return currentTab ? (
                        <div className="flex items-center gap-3">
                          <currentTab.icon className="h-5 w-5 text-primary" />
                          <span className="font-medium text-foreground">{currentTab.label}</span>
                          <span className="text-xs text-muted-foreground">({currentTab.count})</span>
                        </div>
                      ) : null;
                    })()}
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-xl border border-border/60 rounded-lg">
                    <SelectItem value="atoms" className="focus:bg-card/60 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Palette className="h-4 w-4 text-muted-foreground" />
                        <span>Atoms</span>
                        <span className="text-xs text-muted-foreground ml-auto">(47)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="molecules" className="focus:bg-card/60 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Component className="h-4 w-4 text-muted-foreground" />
                        <span>Molecules</span>
                        <span className="text-xs text-muted-foreground ml-auto">(23)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="specialized" className="focus:bg-card/60 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Layers className="h-4 w-4 text-muted-foreground" />
                        <span>Advanced</span>
                        <span className="text-xs text-muted-foreground ml-auto">(10)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="organisms" className="focus:bg-card/60 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Grid3X3 className="h-4 w-4 text-muted-foreground" />
                        <span>Organisms</span>
                        <span className="text-xs text-muted-foreground ml-auto">(17)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="accessibility" className="focus:bg-card/60 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span>A11y</span>
                        <span className="text-xs text-muted-foreground ml-auto">(AAA)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="testing" className="focus:bg-card/60 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span>Testing</span>
                        <span className="text-xs text-muted-foreground ml-auto">(4)</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Section Content */}
              <div className="mt-0">
                {activeSection === "atoms" && (
                  <AtomsSection
                    activeAtomType={activeAtomType}
                    setActiveAtomType={setActiveAtomType}
                    searchQuery={searchQuery}
                    viewMode="grid"
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    favourites={favourites}
                    onToggleFavorite={toggleFavorite}
                  />
                )}

                {activeSection === "molecules" && (
                  <MoleculesSection
                    searchQuery={searchQuery}
                    viewMode="grid"
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    favourites={favourites}
                    onToggleFavorite={toggleFavorite}
                  />
                )}

                {activeSection === "specialized" && (
                  <SpecializedMoleculesSection
                    searchQuery={searchQuery}
                    viewMode="grid"
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    favourites={favourites}
                    onToggleFavorite={toggleFavorite}
                  />
                )}

                {activeSection === "organisms" && (
                  <OrganismsSection
                    searchQuery={searchQuery}
                    viewMode="grid"
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    favourites={favourites}
                    onToggleFavorite={toggleFavorite}
                    onNavigateToComponent={handleNavigateToComponent}
                  />
                )}

                {activeSection === "accessibility" && (
                  <AccessibilitySection
                    searchQuery={searchQuery}
                    viewMode="grid"
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    favourites={favourites}
                    onToggleFavorite={toggleFavorite}
                  />
                )}

                {activeSection === "testing" && (
                  <TestingSection
                    searchQuery={searchQuery}
                    viewMode="grid"
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    favourites={favourites}
                    onToggleFavorite={toggleFavorite}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Atom Explorer */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-card/30 border-border/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Palette className="h-6 w-6 text-primary" />
                  Interactive Atom Explorer
                </CardTitle>
                <CardDescription>
                  Explore design atoms with live previews and contrast checking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Color Picker</Label>
                      <Input
                        type="color"
                        defaultValue="#d946ef"
                        className="h-12 w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Contrast Checker</Label>
                      <div className="p-4 bg-card border border-border rounded-lg">
                        <div className="text-sm text-muted-foreground mb-2">Contrast Ratio</div>
                        <div className="text-2xl font-bold text-foreground">4.8:1</div>
                        <Badge className="mt-2 bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30">
                          WCAG AA Pass
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Copy CSS Variable</Label>
                      <Button variant="outline" className="w-full">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy --primary
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="text-sm font-medium text-foreground mb-2">Live Preview</div>
                    <div className="space-y-2">
                      <div className="h-12 bg-primary rounded flex items-center justify-center text-primary-foreground">
                        Primary Color
                      </div>
                      <div className="h-12 bg-accent rounded flex items-center justify-center text-accent-foreground">
                        Accent Color
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Molecule Builder */}
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  Molecule Builder
                </CardTitle>
                <CardDescription>
                  Combine atoms to build molecules with live preview
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">Available Atoms</h4>
                      <div className="space-y-2">
                        {["Button", "Input", "Label", "Badge", "Icon"].map((atom) => (
                          <div
                            key={atom}
                            className="p-3 bg-card/50 border border-border/50 rounded-lg cursor-move hover:border-primary/50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-foreground">{atom}</span>
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">Molecule Preview</h4>
                      <div className="p-6 bg-card/50 border border-border/50 rounded-lg min-h-[200px] flex items-center justify-center">
                        <div className="text-sm text-muted-foreground text-center">
                          Drag atoms here to build molecules
                          <br />
                          <span className="text-xs">Example: Button + Icon = Icon Button</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button className="bg-primary text-primary-foreground">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Molecule Code
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Component
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}





