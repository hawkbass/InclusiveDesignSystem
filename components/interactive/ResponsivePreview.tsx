"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Monitor, 
  Smartphone, 
  Tablet,
  Maximize2,
  Minimize2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ResponsivePreviewProps {
  title?: string
  children: React.ReactNode
  defaultView?: "desktop" | "tablet" | "mobile"
  showControls?: boolean
  className?: string
}

const viewportSizes = {
  desktop: { width: "100%", maxWidth: "1920px", label: "Desktop (1920px)" },
  tablet: { width: "768px", maxWidth: "768px", label: "Tablet (768px)" },
  mobile: { width: "375px", maxWidth: "375px", label: "Mobile (375px)" }
}

export function ResponsivePreview({
  title = "Responsive Preview",
  children,
  defaultView = "desktop",
  showControls = true,
  className
}: ResponsivePreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">(defaultView)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const currentViewport = viewportSizes[viewMode]

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
          {showControls && (
            <div className="flex items-center gap-2">
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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="h-8 w-8 p-0"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="mb-4 text-xs">
            {currentViewport.label}
          </Badge>
          <div
            className={cn(
              "bg-background/50 rounded-lg border border-border/50 transition-all duration-300",
              isFullscreen ? "fixed inset-4 z-50" : "relative w-full",
              viewMode !== "desktop" && !isFullscreen && "mx-auto"
            )}
            style={{
              width: isFullscreen ? "100%" : currentViewport.width,
              maxWidth: isFullscreen ? "100%" : currentViewport.maxWidth,
              minHeight: isFullscreen ? "calc(100vh - 2rem)" : "400px"
            }}
          >
            <div className="p-6 h-full overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

