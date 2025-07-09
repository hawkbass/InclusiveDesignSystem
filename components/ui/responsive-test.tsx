"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Monitor, Maximize2, Minimize2, RotateCcw } from "lucide-react"

interface ResponsiveTestProps {
  children: React.ReactNode
  className?: string
}

const breakpoints = [
  { name: "Mobile", width: 375, height: 667, icon: Smartphone },
  { name: "Tablet", width: 768, height: 1024, icon: Tablet },
  { name: "Desktop", width: 1024, height: 768, icon: Monitor },
  { name: "Wide", width: 1440, height: 900, icon: Monitor },
]

export function ResponsiveTest({ children, className = "" }: ResponsiveTestProps) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(breakpoints[2]) // Default to desktop
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [isFullscreen])

  const containerStyle = {
    width: isFullscreen ? "100vw" : `${currentBreakpoint.width}px`,
    height: isFullscreen ? "100vh" : `${currentBreakpoint.height}px`,
    maxWidth: isFullscreen ? "100vw" : "100%",
    maxHeight: isFullscreen ? "100vh" : "100%",
  }

  return (
    <div className={`relative ${className}`}>
      {/* Controls */}
      {showControls && (
        <div className="absolute top-4 left-4 z-50 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {currentBreakpoint.name} ({currentBreakpoint.width}×{currentBreakpoint.height})
            </Badge>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            {breakpoints.map((bp) => (
              <Button
                key={bp.name}
                size="sm"
                variant={currentBreakpoint.name === bp.name ? "default" : "outline"}
                onClick={() => setCurrentBreakpoint(bp)}
                className="h-8 px-2"
              >
                <bp.icon className="h-3 w-3" />
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-8 px-2"
            >
              {isFullscreen ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowControls(false)}
              className="h-8 px-2"
            >
              Hide
            </Button>
          </div>
        </div>
      )}

      {/* Show Controls Button */}
      {!showControls && (
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowControls(true)}
          className="absolute top-4 left-4 z-50 h-8 px-2 bg-slate-900/90 backdrop-blur-sm border-slate-700/50"
        >
          <RotateCcw className="h-3 w-3" />
        </Button>
      )}

      {/* Preview Container */}
      <div
        className={`mx-auto border-2 border-slate-700/50 rounded-lg overflow-hidden transition-all duration-300 ${
          isFullscreen ? "fixed inset-0 z-40 bg-slate-950" : "relative"
        }`}
        style={containerStyle}
      >
        <div className="w-full h-full overflow-auto">
          {children}
        </div>
      </div>

      {/* Breakpoint Indicator */}
      {!isFullscreen && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-2 border border-slate-700/50">
            <currentBreakpoint.icon className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-300">
              {currentBreakpoint.name} ({currentBreakpoint.width}×{currentBreakpoint.height})
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export function ResponsiveTestCard({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Card className="bg-slate-800/30 border-slate-700/50">
      <CardHeader>
        <CardTitle className="text-lg text-slate-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveTest>
          {children}
        </ResponsiveTest>
      </CardContent>
    </Card>
  )
} 