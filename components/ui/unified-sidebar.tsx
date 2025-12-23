"use client"

import * as React from "react"
import { useState, useCallback, useMemo, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlobalSettings, ThemeToggle } from "@/components/ui/global-settings"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Hexagon,
  BookOpen,
  Zap,
  Target,
  Palette,
  Layers,
  Grid3X3,
  Shield,
  Type,
  Monitor,
  Award,
  Home as HomeIcon,
  Component as ComponentIcon,
  LayoutDashboard,
  Menu as MenuIcon,
  X as CloseIcon,
  ChevronRight,
  Settings,
  HelpCircle,
  ExternalLink,
  Mountain,
  Clock,
  Heart,
  Activity,
  Sun,
  Moon,
  FileText,
  GitBranch,
  MessageSquare,
  Play,
  Users,
  Code2,
  Paintbrush,
  Sparkles,
} from "lucide-react"

/* =============================================================================
   NAVIGATION DATA - Structured like Atlassian Design System
   ============================================================================= */

const quickStats = [
  { label: "Components", value: "102+", icon: ComponentIcon, color: "text-primary" },
  { label: "Patterns", value: "45+", icon: Grid3X3, color: "text-accent" },
  { label: "Tokens", value: "150+", icon: Palette, color: "text-success" },
]

// Main navigation - Primary destinations
const mainNavigation = [
  { 
    href: "/", 
    label: "Home", 
    icon: HomeIcon, 
    description: "Design system overview",
  },
  { 
    href: "/playground", 
    label: "Playground", 
    icon: Play, 
    description: "Interactive testing",
    badge: "Live"
  },
]

// Product section - ATS Demo & Sales
const productItems = [
  { 
    href: "/dashboard", 
    label: "Live Demo", 
    icon: LayoutDashboard, 
    description: "Interactive ATS dashboard",
    badge: "Demo"
  },
  { 
    href: "/why-inclusive", 
    label: "Why Inclusive?", 
    icon: Sparkles, 
    description: "Features & comparison",
    badge: "New"
  },
]

// Get Started section - Role-based guides like Atlassian
const getStartedItems = [
  { 
    href: "/design-system/getting-started", 
    label: "For Developers", 
    icon: Code2,
    description: "Installation and setup",
  },
  { 
    href: "/design-system/getting-started#designers", 
    label: "For Designers", 
    icon: Paintbrush,
    description: "Figma libraries and guidelines",
  },
  { 
    href: "/design-system/getting-started#content", 
    label: "For Content", 
    icon: FileText,
    description: "Voice and tone standards",
  },
]

// Foundations - Core design decisions
const foundationsItems = [
  { 
    href: "/design-system/tokens", 
    label: "Design Tokens", 
    icon: Palette,
    description: "Colours, spacing, typography",
    status: "stable" as const,
  },
  { 
    href: "/design-system/accessibility", 
    label: "Accessibility", 
    icon: Shield,
    description: "WCAG 2.1 AA compliance",
    status: "stable" as const,
  },
  { 
    href: "/design-system/elevation", 
    label: "Elevation", 
    icon: Mountain,
    description: "Shadows and depth",
    status: "stable" as const,
  },
  { 
    href: "/design-system/responsive", 
    label: "Responsive", 
    icon: Monitor,
    description: "Breakpoints and grids",
    status: "stable" as const,
  },
  { 
    href: "/design-system/theming", 
    label: "Theming", 
    icon: Type,
    description: "Custom themes",
    status: "beta" as const,
  },
]

// Components section - Component library and style guide
const componentsItems = [
  { 
    href: "/components", 
    label: "Component Library", 
    icon: ComponentIcon,
    description: "Browse 102+ components",
    badge: "102+",
    status: "stable" as const,
  },
  { 
    href: "/style-guide", 
    label: "Style Guide", 
    icon: Palette,
    description: "Visual references and tokens",
    status: "stable" as const,
  },
]

// Patterns - Common solutions
const patternsItems = [
  { 
    href: "/design-system/patterns", 
    label: "UI Patterns", 
    icon: Grid3X3,
    description: "Interface patterns",
    status: "stable" as const,
  },
  { 
    href: "/design-system/patterns/forms", 
    label: "Forms", 
    icon: FileText,
    description: "Form layouts and validation",
    status: "stable" as const,
  },
  { 
    href: "/design-system/patterns/navigation", 
    label: "Navigation", 
    icon: LayoutDashboard,
    description: "Navigation patterns",
    status: "stable" as const,
  },
]

// Resources - Help and support
const resourcesItems = [
  { 
    href: "/design-system/principles", 
    label: "Design Principles", 
    icon: Target,
    description: "Core philosophy",
  },
  { 
    href: "/design-system/best-practices", 
    label: "Best Practices", 
    icon: Award,
    description: "Implementation tips",
  },
]

// What's New section
const whatsNewItems = [
  { 
    href: "/design-system/changelog", 
    label: "Changelog", 
    icon: GitBranch,
    description: "Release history",
  },
  { 
    href: "/design-system/roadmap", 
    label: "Roadmap", 
    icon: Target,
    description: "Upcoming features",
  },
]

/* =============================================================================
   SIDEBAR COMPONENT
   ============================================================================= */

interface UnifiedSidebarProps {
  animationSpeed?: number[]
  className?: string
}

export function UnifiedSidebar({ animationSpeed = [1], className }: UnifiedSidebarProps) {
  const pathname = usePathname()
  const { theme, resolvedTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(["components", "get-started", "foundations"])
  const [favourites, setFavourites] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load favourites from localStorage
    const savedFavourites = localStorage.getItem("inclusive-sidebar-favourites")
    if (savedFavourites) {
      setFavourites(new Set(JSON.parse(savedFavourites)))
    }
    // Load expanded sections from localStorage
    const savedSections = localStorage.getItem("inclusive-sidebar-expanded")
    if (savedSections) {
      setExpandedSections(JSON.parse(savedSections))
    }
  }, [])

  useEffect(() => {
    if (mounted && favourites.size > 0) {
      localStorage.setItem("inclusive-sidebar-favourites", JSON.stringify(Array.from(favourites)))
    }
  }, [favourites, mounted])

  // Persist expanded sections to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("inclusive-sidebar-expanded", JSON.stringify(expandedSections))
    }
  }, [expandedSections, mounted])

  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }, [])

  const toggleFavourite = useCallback((href: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFavourites(prev => {
      const newFavourites = new Set(prev)
      if (newFavourites.has(href)) {
        newFavourites.delete(href)
      } else {
        newFavourites.add(href)
      }
      return newFavourites
    })
  }, [])

  // Navigation link component
  const NavLink = ({ 
    href, 
    label, 
    icon: Icon, 
    description, 
    status,
    badge,
    showFavourite = true,
    compact = false,
  }: { 
    href: string
    label: string
    icon: React.ElementType
    description?: string
    status?: "stable" | "beta" | "alpha"
    badge?: string
    showFavourite?: boolean
    compact?: boolean
  }) => {
    const active = pathname === href || (href !== "/" && pathname?.startsWith(href))
    const isFavourite = favourites.has(href)
    
    return (
      <div className="group relative">
        <Link
          href={href}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "flex items-center gap-3 rounded-lg transition-all text-sm relative",
            compact ? "px-3 py-2" : "px-3 py-2.5",
            active
              ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
              : "hover:bg-accent/50 text-foreground/80 hover:text-foreground border-l-2 border-transparent",
          )}
          style={{ transitionDuration: `${0.15 / safeAnimationSpeed}s` }}
          aria-current={active ? "page" : undefined}
        >
          <Icon className={cn(
            "h-4 w-4 shrink-0 transition-colors",
            active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
          )} />
          
          <span className="flex-1 truncate">{label}</span>
          
          <div className="flex items-center gap-1.5">
            {badge && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">
                {badge}
              </Badge>
            )}
            {status && status !== "stable" && (
              <Badge 
                variant="outline" 
                className={cn(
                  "text-[10px] px-1.5 py-0 h-5",
                  status === "beta" && "border-warning/50 text-warning",
                  status === "alpha" && "border-error/50 text-error"
                )}
              >
                {status}
              </Badge>
            )}
            {showFavourite && (
              <button
                onClick={(e) => toggleFavourite(href, e)}
                className={cn(
                  "h-5 w-5 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-opacity",
                  "hover:bg-accent"
                )}
                aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
              >
                <Heart className={cn(
                  "h-3 w-3",
                  isFavourite ? "fill-primary text-primary" : "text-muted-foreground"
                )} />
              </button>
            )}
          </div>
        </Link>
      </div>
    )
  }

  // Collapsible section component
  const CollapsibleSection = ({ 
    id, 
    title, 
    items,
    defaultExpanded = false,
  }: { 
    id: string
    title: string
    items: Array<{
      href: string
      label: string
      icon: React.ElementType
      description?: string
      status?: "stable" | "beta" | "alpha"
    }>
    defaultExpanded?: boolean
  }) => {
    const isExpanded = expandedSections.includes(id)
    
    return (
      <div className="space-y-1">
        <button
          onClick={() => toggleSection(id)}
          className={cn(
            "flex items-center gap-2 w-full px-3 py-2 text-xs font-semibold uppercase tracking-wider",
            "text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/30"
          )}
          aria-expanded={isExpanded}
        >
          <ChevronRight className={cn(
            "h-3 w-3 transition-transform",
            isExpanded && "rotate-90"
          )} />
          <span>{title}</span>
          <Badge variant="outline" className="ml-auto text-[10px] px-1.5 py-0 h-4">
            {items.length}
          </Badge>
        </button>
        
        {isExpanded && (
          <div className="space-y-0.5 pl-2 animate-in slide-in-from-top-1 duration-200">
            {items.map((item) => (
              <NavLink key={item.href} {...item} compact />
            ))}
          </div>
        )}
      </div>
    )
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header with Logo and Theme Controls */}
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <Link 
            href="/" 
            className={cn(
              "flex items-center gap-2.5 font-bold text-lg",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg",
              "group transition-all hover:opacity-80"
            )}
            onClick={() => setMobileOpen(false)}
          >
            <div className={cn(
              "h-8 w-8 rounded-lg flex items-center justify-center transition-all",
              "bg-gradient-to-br",
              mounted && resolvedTheme === "dark" 
                ? "from-fuchsia-500 to-purple-600" 
                : "from-purple-500 to-indigo-600"
            )}>
              <Hexagon className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-foreground">Inclusive</span>
              <span className="text-[10px] text-muted-foreground font-normal">Design System v2.1</span>
            </div>
          </Link>
          
          {/* Theme Controls */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <GlobalSettings />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          {quickStats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-card rounded-lg p-2 text-center border border-border/50"
            >
              <stat.icon className={cn("h-3.5 w-3.5 mx-auto mb-1", stat.color)} />
              <div className="text-xs font-semibold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-3 py-4 border-b border-border">
        <div className="space-y-0.5">
          {mainNavigation.map((item) => (
            <NavLink key={item.href} {...item} showFavourite={false} />
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {/* Components */}
        <CollapsibleSection
          id="components"
          title="Components"
          items={componentsItems}
          defaultExpanded
        />

        {/* Product - ATS Demo */}
        <CollapsibleSection
          id="product"
          title="Product"
          items={productItems}
          defaultExpanded
        />

        {/* Get Started */}
        <CollapsibleSection
          id="get-started"
          title="Get Started"
          items={getStartedItems}
          defaultExpanded
        />

        {/* Foundations */}
        <CollapsibleSection
          id="foundations"
          title="Foundations"
          items={foundationsItems}
          defaultExpanded
        />

        {/* Patterns */}
        <CollapsibleSection
          id="patterns"
          title="Patterns"
          items={patternsItems}
        />

        {/* Resources */}
        <CollapsibleSection
          id="resources"
          title="Resources"
          items={resourcesItems}
        />

        {/* What's New */}
        <CollapsibleSection
          id="whats-new"
          title="What's New"
          items={whatsNewItems}
        />

        {/* Favourites */}
        {favourites.size > 0 && (
          <div className="space-y-1 pt-2 border-t border-border">
            <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Heart className="h-3 w-3 text-primary fill-primary" />
              <span>Favourites</span>
              <Badge variant="outline" className="ml-auto text-[10px] px-1.5 py-0 h-4">
                {favourites.size}
              </Badge>
            </div>
            <div className="space-y-0.5">
              {Array.from(favourites).slice(0, 5).map((href) => {
                const allItems = [
                  ...componentsItems,
                  ...foundationsItems,
                  ...patternsItems,
                  ...resourcesItems,
                  ...whatsNewItems,
                ]
                const item = allItems.find(i => i.href === href)
                if (!item) return null
                return (
                  <NavLink key={href} {...item} compact />
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-border mt-auto">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 flex-1 justify-start" asChild>
                  <Link href="/design-system/getting-started">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Get help and support</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 flex-1 justify-start" asChild>
                  <Link href="https://github.com/inclusive" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>View on GitHub</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Version and Status */}
        <div className="flex items-center justify-between mt-3 px-1 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span>All systems operational</span>
          </div>
          <span>v2.1.0</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:flex flex-col w-72 min-h-screen sticky top-0 bg-card/95 backdrop-blur-xl border-r border-border z-40",
        className
      )}>
        <SidebarContent />
      </aside>
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className={cn(
            "fixed top-4 left-4 z-50 p-2 rounded-lg border",
            "bg-card/95 backdrop-blur-sm border-border",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <CloseIcon className="h-5 w-5 text-foreground" />
          ) : (
            <MenuIcon className="h-5 w-5 text-foreground" />
          )}
        </button>
        
        {/* Mobile Sidebar Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex animate-in fade-in duration-200">
            <aside className="w-72 bg-card border-r border-border h-full overflow-y-auto animate-in slide-in-from-left duration-300">
              <SidebarContent />
            </aside>
            <div 
              className="flex-1" 
              onClick={() => setMobileOpen(false)} 
              aria-label="Close menu"
            />
          </div>
        )}
      </div>
    </>
  )
}

export default UnifiedSidebar
