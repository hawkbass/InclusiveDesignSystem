"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Heart,
  Copy,
  CheckCircle2
} from "lucide-react"

interface ShadowsAtomsProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favorites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function ShadowsAtoms({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favorites, 
  onToggleFavorite 
}: ShadowsAtomsProps) {
  const effectSystem = [
    // Standard Shadows
    { 
      id: "sm", 
      name: "Small Shadow", 
      value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", 
      class: "shadow-sm", 
      category: "Shadow",
      usage: "Subtle elevation, cards" 
    },
    { 
      id: "base", 
      name: "Base Shadow", 
      value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", 
      class: "shadow", 
      category: "Shadow",
      usage: "Default elevation" 
    },
    { 
      id: "md", 
      name: "Medium Shadow", 
      value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", 
      class: "shadow-md", 
      category: "Shadow",
      usage: "Buttons, dropdowns" 
    },
    { 
      id: "lg", 
      name: "Large Shadow", 
      value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", 
      class: "shadow-lg", 
      category: "Shadow",
      usage: "Modals, overlays, hover states" 
    },
    { 
      id: "xl", 
      name: "Extra Large Shadow", 
      value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", 
      class: "shadow-xl", 
      category: "Shadow",
      usage: "Popovers, tooltips, main dashboard" 
    },
    { 
      id: "2xl", 
      name: "2X Large Shadow", 
      value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", 
      class: "shadow-2xl", 
      category: "Shadow",
      usage: "Active section cards, major elevation" 
    },
    
    // Brand Glow Effects
    { 
      id: "fuchsia", 
      name: "Fuchsia Glow", 
      value: "0 0 20px rgb(236 72 153 / 0.3)", 
      class: "shadow-fuchsia-500/30", 
      category: "Glow",
      usage: "Brand highlights, CTAs, primary elements" 
    },
    { 
      id: "fuchsia-lg", 
      name: "Fuchsia Glow Large", 
      value: "0 10px 15px -3px rgb(236 72 153 / 0.25), 0 4px 6px -4px rgb(236 72 153 / 0.25)", 
      class: "shadow-lg shadow-fuchsia-500/25", 
      category: "Glow",
      usage: "Primary buttons, brand icons, active navigation" 
    },
    { 
      id: "purple", 
      name: "Purple Glow", 
      value: "0 0 20px rgb(168 85 247 / 0.3)", 
      class: "shadow-purple-500/30", 
      category: "Glow",
      usage: "Secondary highlights, complementary effects" 
    },
    
    // Blur Effects  
    { 
      id: "blur-sm", 
      name: "Small Blur", 
      value: "blur(4px)", 
      class: "blur-sm", 
      category: "Blur",
      usage: "Subtle background blur effects" 
    },
    { 
      id: "blur", 
      name: "Standard Blur", 
      value: "blur(8px)", 
      class: "blur", 
      category: "Blur",
      usage: "Standard background blur" 
    },
    { 
      id: "blur-md", 
      name: "Medium Blur", 
      value: "blur(12px)", 
      class: "blur-md", 
      category: "Blur",
      usage: "Medium strength background blur" 
    },
    { 
      id: "blur-lg", 
      name: "Large Blur", 
      value: "blur(16px)", 
      class: "blur-lg", 
      category: "Blur",
      usage: "Strong background blur effects" 
    },
    { 
      id: "blur-xl", 
      name: "Extra Large Blur", 
      value: "blur(24px)", 
      class: "blur-xl", 
      category: "Blur",
      usage: "Very strong background blur" 
    },
    { 
      id: "blur-3xl", 
      name: "3X Large Blur", 
      value: "blur(64px)", 
      class: "blur-3xl", 
      category: "Blur",
      usage: "Background orbs, hero effects" 
    },
    
    // Backdrop Blur (Glassmorphism)
    { 
      id: "backdrop-blur-sm", 
      name: "Backdrop Blur Small", 
      value: "backdrop-filter: blur(4px)", 
      class: "backdrop-blur-sm", 
      category: "Glassmorphism",
      usage: "Light glassmorphism effects on cards" 
    },
    { 
      id: "backdrop-blur", 
      name: "Backdrop Blur", 
      value: "backdrop-filter: blur(8px)", 
      class: "backdrop-blur", 
      category: "Glassmorphism",
      usage: "Standard glassmorphism for modals" 
    },
    { 
      id: "backdrop-blur-md", 
      name: "Backdrop Blur Medium", 
      value: "backdrop-filter: blur(12px)", 
      class: "backdrop-blur-md", 
      category: "Glassmorphism",
      usage: "Medium glassmorphism overlays" 
    },
    
    // Inner Shadows
    { 
      id: "inner", 
      name: "Inner Shadow", 
      value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", 
      class: "shadow-inner", 
      category: "Shadow",
      usage: "Pressed states, inputs, inset elements" 
    }
  ]

  const filteredEffects = effectSystem.filter(effect =>
    effect.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    effect.usage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    effect.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Group by category for better organization
  const groupedEffects = filteredEffects.reduce((acc, effect) => {
    if (!acc[effect.category]) {
      acc[effect.category] = []
    }
    acc[effect.category].push(effect)
    return acc
  }, {} as Record<string, typeof effectSystem>)

  const categoryColors = {
    Shadow: "border-slate-600 text-slate-400",
    Glow: "border-fuchsia-600 text-fuchsia-400",
    Blur: "border-purple-600 text-purple-400", 
    Glassmorphism: "border-blue-600 text-blue-400"
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-slate-100 mb-4">Elevation & Effects System</h3>
        <p className="text-lg text-slate-400">Complete shadow, blur, and glassmorphism system for depth, elevation, and modern UI effects</p>
      </div>

      {Object.entries(groupedEffects).map(([category, effects]) => (
        <div key={category} className="space-y-6">
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-slate-100">{category} Effects</h4>
            <Badge variant="outline" className={categoryColors[category as keyof typeof categoryColors]}>
              {effects.length} Effects
            </Badge>
          </div>

          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
            {effects.map((effect) => (
              <Card key={effect.id} className="group hover:shadow-lg transition-all duration-300 border-slate-700/50 bg-slate-800/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h5 className="font-semibold text-slate-100 text-lg">{effect.name}</h5>
                      <Badge variant="outline" className={`text-xs mt-1 ${categoryColors[effect.category as keyof typeof categoryColors]}`}>
                        {effect.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onToggleFavorite(effect.id)}
                        className="text-slate-400 hover:text-pink-400"
                      >
                        <Heart className={`h-4 w-4 ${favorites.has(effect.id) ? 'fill-current text-pink-400' : ''}`} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onCopyCode(effect.class, effect.id)}
                        className={`${
                          copiedCode === effect.id
                            ? 'border-green-500 text-green-400 bg-green-950' 
                            : 'border-slate-600 hover:border-fuchsia-500 text-slate-400 hover:text-slate-200'
                        } transition-all`}
                      >
                        {copiedCode === effect.id ? (
                          <CheckCircle2 className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Effect Preview */}
                  <div className="bg-slate-900 rounded-lg p-6 flex items-center justify-center mb-4 relative overflow-hidden">
                    {effect.category === 'Glassmorphism' ? (
                      <>
                        {/* Background for glassmorphism demo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-blue-500/20" />
                        <div className="absolute inset-2 bg-slate-800/50 rounded-lg" />
                        <div className={`relative w-20 h-20 bg-slate-700/30 rounded-lg ${effect.class} flex items-center justify-center text-slate-300 text-xs font-medium`}>
                          Glass
                        </div>
                      </>
                    ) : effect.category === 'Blur' ? (
                      <>
                        {/* Background pattern for blur demo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-purple-500/30 to-blue-500/30" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]" />
                        <div className={`w-full h-16 bg-slate-700/50 rounded-lg ${effect.class}`} />
                      </>
                    ) : effect.category === 'Glow' ? (
                      <div 
                        className={`w-20 h-20 bg-slate-700 rounded-lg ${effect.class}`}
                        style={effect.id.includes('fuchsia') || effect.id.includes('purple') ? { 
                          boxShadow: effect.value 
                        } : {}}
                      />
                    ) : (
                      <div 
                        className={`w-20 h-20 bg-slate-700 rounded-lg ${effect.class}`}
                      />
                    )}
                  </div>

                  <p className="text-sm text-slate-500 mb-3">
                    {effect.usage}
                  </p>

                  <div className="space-y-2">
                    <div className="bg-slate-800 rounded-lg p-3">
                      <code className="text-xs text-slate-300 font-mono">
                        {effect.class}
                      </code>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-3">
                      <code className="text-xs text-slate-400 font-mono">
                        {effect.value}
                      </code>
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

