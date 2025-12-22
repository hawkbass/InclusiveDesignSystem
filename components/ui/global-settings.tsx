"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Settings2,
  Sun,
  Moon,
  Monitor,
  Type,
  Languages,
  Palette,
  Accessibility,
  Info,
  Check,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface GlobalSettingsProps {
  className?: string
  trigger?: React.ReactNode
}

type TextZoom = "100" | "110" | "125" | "150"
type Direction = "ltr" | "rtl"

export function GlobalSettings({ className, trigger }: GlobalSettingsProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [textZoom, setTextZoom] = React.useState<TextZoom>("100")
  const [direction, setDirection] = React.useState<Direction>("ltr")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    
    // Load saved preferences
    const savedZoom = localStorage.getItem("inclusive-text-zoom") as TextZoom
    const savedDirection = localStorage.getItem("inclusive-direction") as Direction
    
    if (savedZoom) setTextZoom(savedZoom)
    if (savedDirection) setDirection(savedDirection)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    
    // Apply text zoom
    document.documentElement.style.fontSize = `${parseInt(textZoom)}%`
    localStorage.setItem("inclusive-text-zoom", textZoom)
  }, [textZoom, mounted])

  React.useEffect(() => {
    if (!mounted) return
    
    // Apply direction
    document.documentElement.dir = direction
    localStorage.setItem("inclusive-direction", direction)
  }, [direction, mounted])

  if (!mounted) {
    return null
  }

  const themes = [
    { value: "light", label: "Light", icon: Sun, description: "Daylight theme for bright environments" },
    { value: "dark", label: "Dark", icon: Moon, description: "Midnight theme for low-light environments" },
  ]

  const zoomLevels = [
    { value: "100", label: "100%", description: "Default size" },
    { value: "110", label: "110%", description: "Slightly larger" },
    { value: "125", label: "125%", description: "Large" },
    { value: "150", label: "150%", description: "Extra large" },
  ]

  const directions = [
    { value: "ltr", label: "LTR", description: "Left-to-right (English, etc.)" },
    { value: "rtl", label: "RTL", description: "Right-to-left (Arabic, Hebrew)" },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-9 w-9 rounded-lg transition-all",
              "hover:bg-accent/50 hover:text-accent-foreground",
              "focus-visible:ring-2 focus-visible:ring-ring",
              className
            )}
            aria-label="Open global settings"
          >
            <Settings2 className="h-[18px] w-[18px]" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="space-y-1">
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Global Settings
          </SheetTitle>
          <SheetDescription>
            Customise your experience across the entire design system.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-8">
          {/* Theme Selection */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-muted-foreground" />
              <Label className="text-sm font-semibold">Theme</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p>Choose between light and dark themes, or let the system decide based on your OS preferences.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {themes.map((t) => {
                const isActive = theme === t.value
                return (
                  <button
                    key={t.value}
                    onClick={() => setTheme(t.value)}
                    className={cn(
                      "relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                      "hover:border-primary/50 hover:bg-accent/30",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    )}
                    aria-pressed={isActive}
                  >
                    <t.icon className={cn(
                      "h-6 w-6 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {t.label}
                    </span>
                    {isActive && (
                      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Theme Preview */}
            <div className="p-4 rounded-xl border bg-card/50">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center",
                  resolvedTheme === "dark" 
                    ? "bg-gradient-to-br from-fuchsia-500 to-purple-600" 
                    : "bg-gradient-to-br from-purple-500 to-indigo-600"
                )}>
                  {resolvedTheme === "dark" ? (
                    <Moon className="h-5 w-5 text-white" />
                  ) : (
                    <Sun className="h-5 w-5 text-white" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Currently using {resolvedTheme === "dark" ? "Midnight" : "Daylight"} theme
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {themes.find(t => t.value === theme)?.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Text Zoom */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Type className="h-4 w-4 text-muted-foreground" />
              <Label className="text-sm font-semibold">Text Size</Label>
              <Badge variant="outline" className="text-xs">
                <Accessibility className="h-3 w-3 mr-1" />
                WCAG 2.2
              </Badge>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p>Increase text size for better readability. All content remains accessible up to 200% zoom per WCAG 2.2 AA standards.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <RadioGroup
              value={textZoom}
              onValueChange={(value) => setTextZoom(value as TextZoom)}
              className="grid grid-cols-4 gap-2"
            >
              {zoomLevels.map((zoom) => (
                <div key={zoom.value}>
                  <RadioGroupItem
                    value={zoom.value}
                    id={`zoom-${zoom.value}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`zoom-${zoom.value}`}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg border-2 p-3 cursor-pointer transition-all",
                      "hover:border-primary/50 hover:bg-accent/30",
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
                      textZoom === zoom.value
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    )}
                  >
                    <span className={cn(
                      "text-lg font-bold",
                      textZoom === zoom.value ? "text-primary" : "text-foreground"
                    )}>
                      {zoom.label}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <p className="text-xs text-muted-foreground">
              Current: {zoomLevels.find(z => z.value === textZoom)?.description}
            </p>
          </section>

          <Separator />

          {/* Direction */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-muted-foreground" />
              <Label className="text-sm font-semibold">Text Direction</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p>Switch text direction for right-to-left languages like Arabic and Hebrew.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <RadioGroup
              value={direction}
              onValueChange={(value) => setDirection(value as Direction)}
              className="grid grid-cols-2 gap-3"
            >
              {directions.map((dir) => (
                <div key={dir.value}>
                  <RadioGroupItem
                    value={dir.value}
                    id={`dir-${dir.value}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`dir-${dir.value}`}
                    className={cn(
                      "flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all",
                      "hover:border-primary/50 hover:bg-accent/30",
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
                      direction === dir.value
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card"
                    )}
                  >
                    <span className={cn(
                      "text-lg font-bold",
                      direction === dir.value ? "text-primary" : "text-foreground"
                    )}>
                      {dir.label}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {dir.description}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </section>

          <Separator />

          {/* Info Section */}
          <section className="space-y-3">
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-primary" />
                About These Settings
              </h4>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                  <span>Settings are saved automatically to your browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                  <span>Applies across all pages in the design system</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                  <span>Text zoom is WCAG 2.2 AA compliant up to 200%</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Reset Button */}
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setTheme("dark")
              setTextZoom("100")
              setDirection("ltr")
            }}
          >
            Reset to Defaults
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

/* ============================================================================
   QUICK THEME TOGGLE
   A compact theme toggle button for use in headers/navbars
   ============================================================================ */

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("h-9 w-9", className)} disabled>
        <Sun className="h-[18px] w-[18px]" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn(
              "h-9 w-9 rounded-lg transition-all",
              "hover:bg-accent/50",
              className
            )}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
          >
            {resolvedTheme === "dark" ? (
              <Moon className="h-[18px] w-[18px]" />
            ) : (
              <Sun className="h-[18px] w-[18px]" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

/* ============================================================================
   THEME AWARE LOGO
   Shows appropriate logo/branding based on current theme
   ============================================================================ */

export function ThemeAwareBrand({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn("h-8 w-8 rounded-lg bg-muted animate-pulse", className)} />
  }

  return (
    <div className={cn(
      "flex items-center gap-2",
      className
    )}>
      <div className={cn(
        "h-8 w-8 rounded-lg flex items-center justify-center font-bold text-white",
        resolvedTheme === "dark"
          ? "bg-gradient-to-br from-fuchsia-500 to-purple-600"
          : "bg-gradient-to-br from-purple-500 to-indigo-600"
      )}>
        I
      </div>
      <span className="font-semibold text-foreground">Inclusive</span>
    </div>
  )
}

