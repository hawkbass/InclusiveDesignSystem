"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Heart,
  Copy,
  CheckCircle2
} from "lucide-react"

interface ColorsAtomsProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favorites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function ColorsAtoms({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favorites, 
  onToggleFavorite 
}: ColorsAtomsProps) {
  // Based on ACTUAL codebase analysis of all colors used
  const colorPalettes = [
    {
      id: "primary",
      name: "Primary Brand (Fuchsia)",
      description: "Main brand identity colours - CTAs, highlights, gradients throughout project",
      category: "Brand",
      colors: [
        { name: "Fuchsia 300", value: "#f8b4d9", class: "bg-fuchsia-300", usage: "Light accents, tab active states", textClass: "text-fuchsia-300" },
        { name: "Fuchsia 400", value: "#f472b6", class: "bg-fuchsia-400", usage: "Interactive elements, bullet points", textClass: "text-fuchsia-400" },
        { name: "Fuchsia 500", value: "#ec4899", class: "bg-fuchsia-500", usage: "Primary buttons, brand highlights", textClass: "text-fuchsia-500" },
        { name: "Fuchsia 600", value: "#db2777", class: "bg-fuchsia-600", usage: "Primary button default state", textClass: "text-fuchsia-600" },
        { name: "Fuchsia 700", value: "#be185d", class: "bg-fuchsia-700", usage: "Primary button hover state", textClass: "text-fuchsia-700" },
        { name: "Fuchsia 950", value: "#831843", class: "bg-fuchsia-950", usage: "Dark badge backgrounds", textClass: "text-fuchsia-950" }
      ]
    },
    {
      id: "secondary", 
      name: "Secondary Brand (Purple)",
      description: "Complementary brand colors - gradients, secondary actions",
      category: "Brand",
      colors: [
        { name: "Purple 300", value: "#d8b4fe", class: "bg-purple-300", usage: "Light secondary accents", textClass: "text-purple-300" },
        { name: "Purple 400", value: "#c084fc", class: "bg-purple-400", usage: "Secondary interactive elements", textClass: "text-purple-400" },
        { name: "Purple 500", value: "#a855f7", class: "bg-purple-500", usage: "Secondary buttons, gradients", textClass: "text-purple-500" },
        { name: "Purple 600", value: "#9333ea", class: "bg-purple-600", usage: "Secondary actions, badges", textClass: "text-purple-600" },
        { name: "Purple 700", value: "#7c3aed", class: "bg-purple-700", usage: "Secondary hover states", textClass: "text-purple-700" },
        { name: "Purple 950", value: "#581c87", class: "bg-purple-950", usage: "Dark badge backgrounds", textClass: "text-purple-950" }
      ]
    },
    {
      id: "neutral",
      name: "Neutral Slate System",
      description: "Core neutral colors - backgrounds, text, borders throughout interface", 
      category: "System",
      colors: [
        { name: "Slate 950", value: "#020617", class: "bg-slate-950", usage: "Page background, darkest areas", textClass: "text-slate-950" },
        { name: "Slate 900", value: "#0f172a", class: "bg-slate-900", usage: "Card backgrounds, main sections", textClass: "text-slate-900" },
        { name: "Slate 800", value: "#1e293b", class: "bg-slate-800", usage: "Interactive backgrounds, code blocks", textClass: "text-slate-800" },
        { name: "Slate 700", value: "#334155", class: "bg-slate-700", usage: "Borders, dividers, hover states", textClass: "text-slate-700" },
        { name: "Slate 600", value: "#475569", class: "bg-slate-600", usage: "Muted elements, borders", textClass: "text-slate-600" },
        { name: "Slate 500", value: "#64748b", class: "bg-slate-500", usage: "Disabled states, placeholders", textClass: "text-slate-500" },
        { name: "Slate 400", value: "#94a3b8", class: "bg-slate-400", usage: "Secondary text, descriptions", textClass: "text-slate-400" },
        { name: "Slate 300", value: "#cbd5e1", class: "bg-slate-300", usage: "Muted text, icons", textClass: "text-slate-300" },
        { name: "Slate 200", value: "#e2e8f0", class: "bg-slate-200", usage: "Light borders, text on dark", textClass: "text-slate-200" },
        { name: "Slate 100", value: "#f1f5f9", class: "bg-slate-100", usage: "Primary text on dark backgrounds", textClass: "text-slate-100" }
      ]
    },
    {
      id: "gradients",
      name: "System Gradients", 
      description: "All gradient combinations used throughout the interface - primary, secondary, and state-specific",
      category: "Brand",
      colors: [
        // Primary Brand Gradients
        { name: "Primary Gradient", value: "linear-gradient(to right, #db2777, #9333ea)", class: "bg-gradient-to-r from-fuchsia-600 to-purple-600", usage: "Primary buttons, brand elements, icons" },
        { name: "Primary Hover", value: "linear-gradient(to right, #be185d, #7c3aed)", class: "bg-gradient-to-r from-fuchsia-700 to-purple-700", usage: "Primary button hover states" },
        { name: "Primary Light", value: "linear-gradient(to right, #ec4899, #a855f7)", class: "bg-gradient-to-r from-fuchsia-500 to-purple-500", usage: "Visual elements, spacing previews" },
        
        // Blue/Cyan System Gradients (MISSING FROM PREVIOUS VERSION)
        { name: "Blue Primary", value: "linear-gradient(to right, #3b82f6, #06b6d4)", class: "bg-gradient-to-r from-blue-500 to-cyan-600", usage: "Secondary buttons, info states, icons" },
        { name: "Blue Light", value: "linear-gradient(to right, #60a5fa, #22d3ee)", class: "bg-gradient-to-r from-blue-400 to-cyan-400", usage: "Text gradients, light accents" },
        { name: "Blue to Purple", value: "linear-gradient(to right, #3b82f6, #8b5cf6)", class: "bg-gradient-to-r from-blue-500 to-purple-600", usage: "Mixed brand elements, profile banners" },
        
        // Green/Emerald System Gradients (MISSING FROM PREVIOUS VERSION) 
        { name: "Green Primary", value: "linear-gradient(to right, #10b981, #059669)", class: "bg-gradient-to-r from-green-500 to-emerald-600", usage: "Success states, positive actions" },
        { name: "Green Light", value: "linear-gradient(to right, #34d399, #6ee7b7)", class: "bg-gradient-to-r from-green-400 to-emerald-400", usage: "Success text gradients" },
        
        // Active State Gradients (THE CRITICAL MISSING ONES)
        { name: "Active State Gradient", value: "linear-gradient(to bottom right, rgba(236,72,153,0.25), rgba(168,85,247,0.2), rgba(236,72,153,0.15))", class: "bg-gradient-to-br from-fuchsia-500/25 via-purple-500/20 to-pink-500/15", usage: "Active tab states, selected navigation items" },
        { name: "Blue Active State", value: "linear-gradient(to bottom right, rgba(59,130,246,0.25), rgba(59,130,246,0.05), transparent)", class: "bg-gradient-to-br from-blue-500/25 via-blue-500/5 to-transparent", usage: "Blue section active states" },
        { name: "Green Active State", value: "linear-gradient(to bottom right, rgba(34,197,94,0.25), rgba(34,197,94,0.05), transparent)", class: "bg-gradient-to-br from-green-500/25 via-green-500/5 to-transparent", usage: "Green section active states" },
        
        // Background Gradients
        { name: "Hero Background", value: "linear-gradient(to bottom right, #0f172a, #020617, #312e81)", class: "bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950", usage: "Hero sections, page headers" },
        { name: "Purple Background", value: "linear-gradient(to bottom right, #0f172a, #020617, #581c87)", class: "bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950", usage: "Component page headers" },
        { name: "Multi-color Text", value: "linear-gradient(to right, #db2777, #9333ea, #3b82f6)", class: "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600", usage: "Gradient text with bg-clip-text" },
        { name: "Principles Header", value: "linear-gradient(to right, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(34,197,94,0.1))", class: "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10", usage: "Principles page header background" },
        { name: "Principles Text", value: "linear-gradient(to right, #3b82f6, #8b5cf6, #10b981)", class: "bg-gradient-to-r from-blue-500 via-purple-500 to-green-500", usage: "Principles page title text" },
        
        // Navigation & UI Gradients
        { name: "Navigation Bar", value: "linear-gradient(to right, rgba(30,41,59,0.8), rgba(15,23,42,0.9), rgba(30,41,59,0.8))", class: "bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80", usage: "Tab lists, navigation backgrounds" },
        { name: "Modal Header Blue", value: "linear-gradient(to right, rgba(30,58,138,0.2), rgba(30,58,138,0.1))", class: "bg-gradient-to-r from-blue-800/20 to-blue-800/10", usage: "Modal headers, dialog backgrounds" },
        
        // Accent System Gradients
        { name: "Purple to Violet", value: "linear-gradient(to right, #8b5cf6, #7c3aed)", class: "bg-gradient-to-r from-purple-500 to-violet-600", usage: "Purple variant buttons" },
        { name: "Indigo to Blue", value: "linear-gradient(to right, #6366f1, #3b82f6)", class: "bg-gradient-to-r from-indigo-500 to-blue-600", usage: "Indigo variant elements" },
        { name: "Orange to Red", value: "linear-gradient(to right, #f97316, #ef4444)", class: "bg-gradient-to-r from-orange-500 to-red-600", usage: "Warning/error states" },
        { name: "Pink to Rose", value: "linear-gradient(to right, #ec4899, #f43f5e)", class: "bg-gradient-to-r from-pink-500 to-rose-600", usage: "Pink accent elements" }
      ]
    },
    {
      id: "glassmorphism",
      name: "Glassmorphism & Opacity", 
      description: "Transparent overlays and glass-like effects with backdrop blur",
      category: "Effects",
      colors: [
        { name: "Glass Card", value: "rgba(30, 41, 59, 0.5)", class: "bg-slate-800/50", usage: "Card backgrounds with transparency" },
        { name: "Glass Light", value: "rgba(30, 41, 59, 0.3)", class: "bg-slate-800/30", usage: "Lighter glass overlays" },
        { name: "Glass Heavy", value: "rgba(15, 23, 42, 0.5)", class: "bg-slate-900/50", usage: "Stronger glass effects" },
        { name: "Brand Glass", value: "rgba(236, 72, 153, 0.2)", class: "bg-fuchsia-500/20", usage: "Brand-colored glass effects" },
        { name: "Overlay Light", value: "rgba(236, 72, 153, 0.05)", class: "bg-fuchsia-500/5", usage: "Subtle brand overlays" },
        { name: "Overlay Medium", value: "rgba(236, 72, 153, 0.1)", class: "bg-fuchsia-500/10", usage: "Medium brand overlays with blur" },
        { name: "White Glass", value: "rgba(255, 255, 255, 0.2)", class: "bg-white/20", usage: "Light glass on dark backgrounds" },
        { name: "Border Glass", value: "rgba(255, 255, 255, 0.3)", class: "border-white/30", usage: "Glass borders on active states" }
      ]
    },
    {
      id: "semantic",
      name: "Semantic States", 
      description: "Success, warning, error, and info states with their variations",
      category: "System",
      colors: [
        { name: "Success", value: "#10b981", class: "bg-emerald-500", usage: "Success states, confirmations", textClass: "text-emerald-500" },
        { name: "Success Dark", value: "#064e3b", class: "bg-emerald-950", usage: "Success badge backgrounds", textClass: "text-emerald-950" },
        { name: "Success Light", value: "#6ee7b7", class: "bg-emerald-300", usage: "Success text on dark", textClass: "text-emerald-300" },
        { name: "Warning", value: "#f59e0b", class: "bg-amber-500", usage: "Warning states, cautions", textClass: "text-amber-500" },
        { name: "Warning Dark", value: "#451a03", class: "bg-amber-950", usage: "Warning badge backgrounds", textClass: "text-amber-950" },
        { name: "Warning Light", value: "#fcd34d", class: "bg-amber-300", usage: "Warning text on dark", textClass: "text-amber-300" },
        { name: "Error", value: "#ef4444", class: "bg-red-500", usage: "Error states, destructive actions", textClass: "text-red-500" },
        { name: "Info Blue", value: "#3b82f6", class: "bg-blue-500", usage: "Information states", textClass: "text-blue-500" },
        { name: "Info Dark", value: "#1e3a8a", class: "bg-blue-950", usage: "Info badge backgrounds", textClass: "text-blue-950" },
        { name: "Info Light", value: "#93c5fd", class: "bg-blue-300", usage: "Info text on dark", textClass: "text-blue-300" }
      ]
    },
    {
      id: "interactive",
      name: "Interactive States", 
      description: "Hover, active, and focus states used throughout components",
      category: "System",
      colors: [
        { name: "Hover Slate", value: "#334155", class: "hover:bg-slate-700", usage: "General hover backgrounds" },
        { name: "Hover Light", value: "#475569", class: "hover:bg-slate-600", usage: "Lighter hover states" },
        { name: "Active Fuchsia", value: "rgba(236, 72, 153, 0.2)", class: "bg-fuchsia-500/20", usage: "Active tab backgrounds" },
        { name: "Focus Ring", value: "#db2777", class: "ring-fuchsia-600", usage: "Focus indicators" },
        { name: "Border Hover", value: "#475569", class: "hover:border-slate-600", usage: "Border hover states" },
        { name: "Text Hover", value: "#f472b6", class: "hover:text-fuchsia-400", usage: "Text hover states" },
        { name: "Scale Hover", value: "transform: scale(1.05)", class: "hover:scale-105", usage: "Hover scaling effects" }
      ]
    }
  ]

  const filteredPalettes = colorPalettes.filter(palette =>
    palette.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    palette.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    palette.colors.some(color => color.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="space-y-12">
      {filteredPalettes.map((palette) => (
        <div key={palette.id} className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-slate-100 mb-3">{palette.name}</h3>
              <p className="text-lg text-slate-400 mb-2">{palette.description}</p>
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                {palette.category}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleFavorite(palette.id)}
              className="text-slate-400 hover:text-pink-400"
            >
              <Heart className={`h-5 w-5 ${favorites.has(palette.id) ? 'fill-current text-pink-400' : ''}`} />
            </Button>
          </div>

          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} gap-6`}>
            {palette.colors.map((color) => (
              <Card key={color.name} className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-slate-700/50 bg-slate-800/30">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Color Preview */}
                    <div className="relative">
                      {palette.id === 'gradients' ? (
                        <div 
                          className={`w-full h-24 rounded-xl border-2 border-slate-600 shadow-lg group-hover:scale-110 transition-transform cursor-pointer ${color.class}`}
                          onClick={() => onCopyCode(color.class, `${palette.id}-${color.name}`)}
                        />
                      ) : palette.id === 'glassmorphism' ? (
                        <div className="relative w-full h-24 rounded-xl border-2 border-slate-600 shadow-lg overflow-hidden">
                          {/* Background pattern to show transparency */}
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20" />
                          <div 
                            className={`absolute inset-2 rounded-lg ${color.class} ${color.class.includes('backdrop-blur') ? 'backdrop-blur-sm' : ''} group-hover:scale-110 transition-transform cursor-pointer`}
                            onClick={() => onCopyCode(color.class, `${palette.id}-${color.name}`)}
                          />
                        </div>
                      ) : (
                        <div 
                          className="w-full h-24 rounded-xl border-2 border-slate-600 shadow-lg group-hover:scale-110 transition-transform cursor-pointer"
                          style={{ backgroundColor: color.value }}
                          onClick={() => onCopyCode(color.value, `${palette.id}-${color.name}`)}
                        />
                      )}
                    </div>
                    
                    {/* Color Info */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-100 group-hover:text-fuchsia-400 transition-colors text-sm">
                          {color.name}
                        </h4>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => onCopyCode(color.class, `${palette.id}-${color.name}-class`)}
                          className={`${
                            copiedCode === `${palette.id}-${color.name}-class`
                              ? 'text-green-400' 
                              : 'text-slate-400 hover:text-slate-200'
                          } transition-all`}
                        >
                          {copiedCode === `${palette.id}-${color.name}-class` ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        {palette.id !== 'gradients' && (
                          <code className="text-xs bg-slate-700 px-3 py-1 rounded text-slate-300 font-mono block">
                            {color.value}
                          </code>
                        )}
                        <code className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400 font-mono block">
                          {color.class}
                        </code>
                        {(color as any).textClass && (
                          <code className="text-xs bg-slate-700 px-3 py-1 rounded text-slate-300 font-mono block">
                            {(color as any).textClass}
                          </code>
                        )}
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {color.usage}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


