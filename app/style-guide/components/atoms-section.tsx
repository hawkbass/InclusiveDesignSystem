"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Copy, 
  CheckCircle2, 
  Heart,
  Palette,
  Type,
  Grid3X3,
  Layers,
  Sparkles,
  Move3D
} from "lucide-react"
import { ColoursAtoms } from "./atoms/colours-atoms"

interface AtomsSectionProps {
  activeAtomType: string
  setActiveAtomType: (type: string) => void
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favourites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function AtomsSection({
  activeAtomType,
  setActiveAtomType,
  searchQuery,
  viewMode,
  onCopyCode,
  copiedCode,
  favourites,
  onToggleFavorite
}: AtomsSectionProps) {
  const atomTypes = [
    { id: "colours", name: "Colours", icon: Palette, count: 23, description: "Brand colours, gradients, and semantic tokens" },
    { id: "typography", name: "Typography", icon: Type, count: 10, description: "Font scales, weights, and text styles" },
    { id: "spacing", name: "Spacing", icon: Grid3X3, count: 8, description: "Consistent spacing scale and layout tokens" },
    { id: "shadows", name: "Shadows", icon: Layers, count: 8, description: "Elevation and depth system" },
    { id: "effects", name: "Effects", icon: Sparkles, count: 16, description: "Blur, glassmorphism, and visual effects" }
  ]

  const filteredTypes = atomTypes.filter(type => 
    type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Atom Type Navigation */}
      <div className="flex flex-wrap gap-3">
        {filteredTypes.map((type) => {
          const IconComponent = type.icon
          return (
            <Button
              key={type.id}
              variant={activeAtomType === type.id ? "default" : "outline"}
              onClick={() => setActiveAtomType(type.id)}
              className={`flex items-center gap-2 ${
                activeAtomType === type.id 
                  ? "bg-fuchsia-500 text-white" 
                  : "hover:border-primary/50"
              }`}
            >
              <IconComponent className="h-4 w-4" />
              {type.name}
              <Badge variant="secondary" className="ml-1">
                {type.count}
              </Badge>
            </Button>
          )
        })}
      </div>

      {/* Active Atom Type Content */}
      <div className="space-y-4">
        {activeAtomType === "colours" && (
          <ColoursAtoms
            searchQuery={searchQuery}
            viewMode={viewMode}
            onCopyCode={onCopyCode}
            copiedCode={copiedCode}
            favourites={favourites}
            onToggleFavorite={onToggleFavorite}
          />
        )}

        {activeAtomType === "typography" && (
          <div className="space-y-4">
            <div className="grid gap-4">
              {/* Typography Scale */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="h-5 w-5" />
                    Typography Scale
                  </CardTitle>
                  <CardDescription>Consistent text sizing and hierarchy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { name: "Display", class: "text-6xl font-bold", example: "Display Text" },
                    { name: "Heading 1", class: "text-4xl font-bold", example: "Heading 1" },
                    { name: "Heading 2", class: "text-3xl font-semibold", example: "Heading 2" },
                    { name: "Heading 3", class: "text-2xl font-semibold", example: "Heading 3" },
                    { name: "Heading 4", class: "text-xl font-medium", example: "Heading 4" },
                    { name: "Body Large", class: "text-lg", example: "Body Large Text" },
                    { name: "Body", class: "text-base", example: "Body Text" },
                    { name: "Body Small", class: "text-sm", example: "Body Small Text" },
                    { name: "Caption", class: "text-xs font-medium", example: "Caption Text" },
                    { name: "Label", class: "text-xs font-semibold uppercase tracking-wide", example: "Label Text" }
                  ].map((typo) => (
                    <div key={typo.name} className="flex items-center justify-between p-4 bg-card/50 rounded-lg">
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">{typo.name}</div>
                        <div className={`${typo.class} text-foreground`}>{typo.example}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="text-xs bg-card px-2 py-1 rounded text-foreground/80">
                          {typo.class}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onCopyCode(typo.class, `typo-${typo.name}`)}
                        >
                          {copiedCode === `typo-${typo.name}` ? (
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeAtomType === "spacing" && (
          <div className="space-y-4">
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Move3D className="h-5 w-5" />
                  Spacing Scale
                </CardTitle>
                <CardDescription>Consistent spacing and layout tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "xs", value: "0.25rem", class: "space-x-1", pixels: "4px" },
                  { name: "sm", value: "0.5rem", class: "space-x-2", pixels: "8px" },
                  { name: "md", value: "1rem", class: "space-x-4", pixels: "16px" },
                  { name: "lg", value: "1.5rem", class: "space-x-6", pixels: "24px" },
                  { name: "xl", value: "2rem", class: "space-x-8", pixels: "32px" },
                  { name: "2xl", value: "3rem", class: "space-x-12", pixels: "48px" },
                  { name: "3xl", value: "4rem", class: "space-x-16", pixels: "64px" },
                  { name: "4xl", value: "6rem", class: "space-x-24", pixels: "96px" }
                ].map((spacing) => (
                  <div key={spacing.name} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-foreground/80 w-8">{spacing.name}</div>
                      <div className="w-16 h-4 bg-fuchsia-500/20 rounded relative">
                        <div 
                          className="h-full bg-fuchsia-500 rounded" 
                          style={{ width: `${Math.min(parseInt(spacing.pixels) / 2, 64)}px` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">{spacing.pixels}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-card px-2 py-1 rounded text-foreground/80">
                        {spacing.class}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onCopyCode(spacing.class, `spacing-${spacing.name}`)}
                      >
                        {copiedCode === `spacing-${spacing.name}` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeAtomType === "shadows" && (
          <div className="space-y-4">
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Shadow System
                </CardTitle>
                <CardDescription>Elevation and depth tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "sm", class: "shadow-sm", description: "Subtle shadow for cards" },
                  { name: "md", class: "shadow-md", description: "Medium shadow for elevated elements" },
                  { name: "lg", class: "shadow-lg", description: "Large shadow for modals" },
                  { name: "xl", class: "shadow-xl", description: "Extra large shadow for overlays" },
                  { name: "2xl", class: "shadow-2xl", description: "Maximum elevation shadow" },
                  { name: "inner", class: "shadow-inner", description: "Inset shadow for inputs" },
                  { name: "colored", class: "shadow-lg shadow-fuchsia-500/25", description: "Colored shadow with brand" },
                  { name: "glow", class: "shadow-2xl shadow-purple-500/30", description: "Glowing effect shadow" }
                ].map((shadow) => (
                  <div key={shadow.name} className="flex items-center justify-between p-4 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-muted rounded-lg ${shadow.class}`} />
                      <div>
                        <div className="text-sm font-medium text-foreground/80">{shadow.name}</div>
                        <div className="text-xs text-muted-foreground">{shadow.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-card px-2 py-1 rounded text-foreground/80">
                        {shadow.class}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onCopyCode(shadow.class, `shadow-${shadow.name}`)}
                      >
                        {copiedCode === `shadow-${shadow.name}` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeAtomType === "effects" && (
          <div className="space-y-4">
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Visual Effects
                </CardTitle>
                <CardDescription>Blur, glassmorphism, and special effects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "blur-sm", class: "backdrop-blur-sm", description: "Subtle blur effect" },
                  { name: "blur-md", class: "backdrop-blur-md", description: "Medium blur for overlays" },
                  { name: "blur-lg", class: "backdrop-blur-lg", description: "Strong blur for modals" },
                  { name: "blur-xl", class: "backdrop-blur-xl", description: "Maximum blur effect" },
                  { name: "glass-light", class: "bg-white/10 backdrop-blur-md border border-white/20", description: "Light glassmorphism" },
                  { name: "glass-dark", class: "bg-card/60 backdrop-blur-xl border border-border/50", description: "Dark glassmorphism" },
                  { name: "gradient-blur", class: "bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg", description: "Gradient with blur" },
                  { name: "neon-glow", class: "bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/25 border border-primary/30", description: "Neon glow effect" }
                ].map((effect) => (
                  <div key={effect.name} className="flex items-center justify-between p-4 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-lg ${effect.class} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-purple-400/20" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground/80">{effect.name}</div>
                        <div className="text-xs text-muted-foreground">{effect.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onCopyCode(effect.class, `effect-${effect.name}`)}
                      >
                        {copiedCode === `effect-${effect.name}` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}





