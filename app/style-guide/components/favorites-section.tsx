"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Heart, 
  Copy, 
  CheckCircle2, 
  Search, 
  Filter, 
  Download,
  Star,
  Grid3X3,
  List,
  ArrowRight,
  Trash2,
  Eye,
  Code2
} from "lucide-react"

interface FavoritesSectionProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favourites: Set<string>
  onToggleFavorite: (id: string) => void
  onNavigateToSection?: (sectionId: string) => void
}

// Mock data for favourite items - in real app this would come from the actual components
const favoriteItems = [
  {
    id: "primary-button",
    name: "Primary Button",
    category: "Atoms",
    type: "component",
    description: "Main call-to-action button with fuchsia gradient",
    code: `<Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600">
  Primary Action
</Button>`,
    section: "atoms"
  },
  {
    id: "card-component",
    name: "Card Component", 
    category: "Molecules",
    type: "component",
    description: "Flexible container for grouping content",
    code: `<Card className="bg-card/50 border-border/50">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>`,
    section: "molecules"
  },
  {
    id: "dashboard-layout",
    name: "Dashboard Layout",
    category: "Organisms", 
    type: "layout",
    description: "Complete dashboard layout with sidebar and content",
    code: `<div className="flex min-h-screen">
  <Sidebar />
  <main className="flex-1 p-6">
    <DashboardContent />
  </main>
</div>`,
    section: "organisms"
  }
]

export function FavoritesSection({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favourites, 
  onToggleFavorite,
  onNavigateToSection 
}: FavoritesSectionProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter favourite items based on what's actually favourited
  const userFavorites = favoriteItems.filter(item => favourites.has(item.id))

  // Apply search and category filters
  const filteredFavorites = userFavorites.filter(item => {
    const matchesSearch = !localSearchQuery || 
      item.name.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(localSearchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory.toLowerCase()
    
    return matchesSearch && matchesCategory
  })

  const categories = ["all", "atoms", "molecules", "organisms"]

  if (favourites.size === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-16 w-16 text-slate-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground/80 mb-2">No Favourites Yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Start adding components to your favourites by clicking the heart icon on any component. 
          Your favourited items will appear here for quick access.
        </p>
        <Button 
          variant="outline" 
          onClick={() => onNavigateToSection?.("atoms")}
          className="hover:border-primary/50"
        >
          <ArrowRight className="h-4 w-4 mr-2" />
          Browse Components
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Favourites Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search favourites..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="pl-10 w-64 bg-card/50 border-border/50"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-card/50 border border-border/50 rounded-md text-foreground/80"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
            {filteredFavorites.length} of {favourites.size} shown
          </Badge>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const exportData = userFavorites.map(item => ({
                name: item.name,
                category: item.category,
                code: item.code
              }))
              onCopyCode(JSON.stringify(exportData, null, 2), 'export-favourites')
            }}
            className="hover:border-blue-500/50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
            {copiedCode === 'export-favourites' && (
              <CheckCircle2 className="h-4 w-4 ml-2 text-green-400" />
            )}
          </Button>
        </div>
      </div>

      {/* Favourites Grid/List */}
      {filteredFavorites.length === 0 ? (
        <div className="text-center py-8">
          <Search className="h-12 w-12 text-slate-600 mx-auto mb-4" />
          <p className="text-muted-foreground">No favourites match your search criteria</p>
        </div>
      ) : (
        <div className={viewMode === "grid" 
          ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredFavorites.map((item) => (
            <Card key={item.id} className="bg-card/30 border-border/50 hover:border-pink-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg text-foreground">{item.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className="text-xs border-border"
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onToggleFavorite(item.id)}
                    className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10"
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Code Preview */}
                <div className="bg-card/50 rounded-lg p-3 border border-border/30">
                  <pre className="text-xs overflow-x-auto">
                    <code className="text-foreground/80">{item.code}</code>
                  </pre>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigateToSection?.(item.section)}
                    className="hover:border-primary/50"
                  >
                    <Eye className="h-3 w-3 mr-2" />
                    View Section
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onCopyCode(item.code, item.id)}
                    className="hover:border-green-500/50"
                  >
                    {copiedCode === item.id ? (
                      <CheckCircle2 className="h-3 w-3 text-green-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            // Clear all favourites
            userFavorites.forEach(item => onToggleFavorite(item.id))
          }}
          className="hover:border-red-500/50 hover:text-red-400"
        >
          <Trash2 className="h-3 w-3 mr-2" />
          Clear All
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigateToSection?.("atoms")}
          className="hover:border-blue-500/50"
        >
          <Star className="h-3 w-3 mr-2" />
          Find More Components
        </Button>
      </div>
    </div>
  )
}





