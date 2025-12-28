"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  Monitor, 
  Smartphone, 
  Tablet,
  Settings,
  Eye,
  Code2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  title?: string
  description?: string
  children: React.ReactNode
  variants?: {
    name: string
    value: string
  }[]
  currentVariant?: string
  onVariantChange?: (variant: string) => void
  showResponsive?: boolean
  showControls?: boolean
  className?: string
}

export function ComponentPreview({
  title = "Component Preview",
  description,
  children,
  variants,
  currentVariant,
  onVariantChange,
  showResponsive = true,
  showControls = true,
  className
}: ComponentPreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [showCode, setShowCode] = useState(false)

  const viewportClasses = {
    desktop: "w-full",
    tablet: "max-w-2xl mx-auto",
    mobile: "max-w-sm mx-auto"
  }

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {title}
            </CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          {showControls && (
            <div className="flex items-center gap-2">
              {variants && variants.length > 0 && (
                <Select value={currentVariant} onValueChange={onVariantChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {variants.map((variant) => (
                      <SelectItem key={variant.value} value={variant.value}>
                        {variant.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {showResponsive && (
                <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
                  <Button
                    variant={viewMode === "desktop" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("desktop")}
                    className="h-8 px-2"
                    aria-label="Desktop view"
                  >
                    <Monitor className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "tablet" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("tablet")}
                    className="h-8 px-2"
                    aria-label="Tablet view"
                  >
                    <Tablet className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "mobile" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("mobile")}
                    className="h-8 px-2"
                    aria-label="Mobile view"
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className={cn("transition-all duration-300", viewportClasses[viewMode])}>
          <div className="bg-background/50 rounded-lg border border-border/50 p-6">
            {children}
          </div>
        </div>
        {showResponsive && (
          <div className="mt-4 text-center">
            <Badge variant="outline" className="text-xs">
              {viewMode === "desktop" && "Desktop (1920px)"}
              {viewMode === "tablet" && "Tablet (768px)"}
              {viewMode === "mobile" && "Mobile (375px)"}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

