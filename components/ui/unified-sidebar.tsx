import * as React from "react"
import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  ChevronDown,
  BarChart3,
  Settings,
  HelpCircle,
  ExternalLink,
  Mountain,
  Star,
  Clock,
  CheckCircle2,
  TrendingUp,
  Copy,
  Heart,
  Sparkles,
  Filter,
  ArrowRight,
  Eye,
  Users,
  Activity,
  Gauge
} from "lucide-react"

// Universal Comprehension Navigation Structure
const quickStats = [
  { label: "Components", value: "102+", icon: ComponentIcon, color: "text-fuchsia-400" },
  { label: "Patterns", value: "24", icon: Grid3X3, color: "text-blue-400" },
  { label: "Tokens", value: "89", icon: Palette, color: "text-green-400" },
  { label: "Updated", value: "Today", icon: Clock, color: "text-purple-400" },
]

// Removed quick actions for cleaner UI

const mainNavigation = [
  { 
    href: "/", 
    label: "Home", 
    icon: HomeIcon, 
    description: "Design system homepage",
    metrics: { views: "2.1k", updated: "Today" }
  },
  { 
    href: "/design-system/overview", 
    label: "Design System", 
    icon: Hexagon, 
    description: "Main design system overview",
    metrics: { components: "12", status: "Complete" }
  },
  { 
    href: "/components", 
    label: "Components", 
    icon: ComponentIcon, 
    description: "Component library",
    metrics: { total: "102", categories: "8" }
  },
  { 
    href: "/style-guide", 
    label: "Style Guide", 
    icon: LayoutDashboard, 
    description: "Visual style guide",
    metrics: { atoms: "23+", molecules: "18+" }
  },
]

const designSystemSections = [
  // Quick Start - Immediate Value
  { 
    href: "/design-system/getting-started", 
    label: "Getting Started", 
    icon: Zap,
    description: "Quick setup and installation guide",
    status: "stable" as const,
    category: "Quick Start",
    metrics: { time: "5 min", difficulty: "Easy" },
    priority: 1
  },
  { 
    href: "/design-system/principles", 
    label: "Design Principles", 
    icon: Target,
    description: "Core design philosophy and guidelines", 
    status: "stable" as const,
    category: "Quick Start",
    metrics: { principles: "6", examples: "24" },
    priority: 2
  },

  // Core Foundations - Building Blocks
  { 
    href: "/design-system/tokens", 
    label: "Design Tokens", 
    icon: Palette,
    description: "Colours, spacing, typography tokens",
    status: "stable" as const,
    category: "Foundations",
    metrics: { tokens: "89", categories: "8" },
    priority: 3
  },
  { 
    href: "/design-system/elevation", 
    label: "Elevation", 
    icon: Mountain,
    description: "Shadows, depth, and glassmorphic effects",
    status: "stable" as const,
    category: "Foundations",
    metrics: { levels: "8", variants: "16" },
    priority: 4
  },
  { 
    href: "/design-system/accessibility", 
    label: "Accessibility", 
    icon: Shield,
    description: "WCAG compliance and inclusive design",
    status: "stable" as const,
    category: "Foundations",
    metrics: { compliance: "AAA", score: "98%" },
    priority: 5
  },
  { 
    href: "/design-system/responsive", 
    label: "Responsive Design", 
    icon: Monitor,
    description: "Breakpoints and responsive patterns",
    status: "stable" as const,
    category: "Foundations",
    metrics: { breakpoints: "5", patterns: "12" },
    priority: 6
  },

  // Implementation - Practical Usage
  { 
    href: "/design-system/components", 
    label: "Component Guidelines", 
    icon: Layers,
    description: "Component usage and best practices",
    status: "beta" as const,
    category: "Implementation",
    metrics: { guidelines: "24", examples: "48" },
    priority: 7
  },
  { 
    href: "/design-system/patterns", 
    label: "UI Patterns", 
    icon: Grid3X3,
    description: "Common interface patterns and layouts",
    status: "stable" as const,
    category: "Implementation",
    metrics: { patterns: "24", categories: "4" },
    priority: 8
  },

  // Advanced - Power User Features
  { 
    href: "/design-system/theming", 
    label: "Theming", 
    icon: Type,
    description: "Customisation and theme development",
    status: "beta" as const,
    category: "Advanced",
    metrics: { themes: "4", variables: "120" },
    priority: 9
  },
  { 
    href: "/design-system/best-practices", 
    label: "Best Practices", 
    icon: Award,
    description: "Implementation guidelines and tips",
    status: "stable" as const,
    category: "Advanced",
    metrics: { practices: "18", coverage: "95%" },
    priority: 10
  },

  // Analytics & Tools - System Health
  { 
    href: "/design-system/dashboard", 
    label: "Dashboard", 
    icon: BarChart3,
    description: "Analytics and system metrics overview",
    status: "stable" as const,
    category: "Analytics",
    metrics: { metrics: "12", uptime: "99.9%" },
    priority: 11
  },
]

interface UnifiedSidebarProps {
  animationSpeed?: number[]
  className?: string
}

export function UnifiedSidebar({ animationSpeed = [1], className }: UnifiedSidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  // Search removed for cleaner UI
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Quick Start", "Foundations", "Implementation"])
  const [copiedAction, setCopiedAction] = useState("")
  const [favourites, setFavourites] = useState<Set<string>>(new Set())

  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  // Search functionality removed for cleaner UI
  const filteredSections = designSystemSections

  const categorizedSections = filteredSections.reduce((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = []
    }
    acc[section.category].push(section)
    return acc
  }, {} as Record<string, typeof filteredSections>)

  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }, [])

  // Removed quick actions handler for cleaner UI

  const toggleFavourite = useCallback((href: string) => {
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

  const NavLink = ({ 
    href, 
    label, 
    icon: Icon, 
    description, 
    status,
    metrics,
    isMainNav = false 
  }: { 
    href: string
    label: string
    icon: React.ElementType
    description?: string
    status?: "stable" | "beta" | "alpha"
    metrics?: Record<string, string | number>
    isMainNav?: boolean
  }) => {
    const active = pathname === href
    const isFavourite = favourites.has(href)
    
    return (
      <div className="group relative">
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium border relative overflow-hidden",
            active
              ? "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30"
              : "hover:bg-slate-800/50 text-slate-300 border-transparent hover:border-slate-700/30",
            isMainNav && "font-semibold py-4"
          )}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
          aria-current={active ? "page" : undefined}
        >
          <Icon className={cn(
            "h-4 w-4 shrink-0 transition-transform",
            active ? "text-fuchsia-400 scale-110" : "text-slate-400 group-hover:scale-110"
          )} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="whitespace-nowrap truncate font-medium">{label}</span>
              <div className="flex items-center gap-1">
                {status && (
                  <Badge className={cn(
                    "text-xs px-1.5 py-0.5",
                    status === "stable" && "bg-green-500/20 text-green-300 border-green-500/30",
                    status === "beta" && "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
                    status === "alpha" && "bg-red-500/20 text-red-300 border-red-500/30"
                  )}>
                    {status}
                  </Badge>
                )}
                {!isMainNav && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleFavourite(href)
                    }}
                    className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className={cn(
                      "h-3 w-3",
                      isFavourite ? "fill-current text-red-400" : "text-slate-400"
                    )} />
                  </Button>
                )}
              </div>
            </div>
            {description && (
              <div className="text-xs text-slate-500 mb-1 truncate">{description}</div>
            )}
            {metrics && isMainNav && (
              <div className="flex items-center gap-3 text-xs text-slate-400">
                {Object.entries(metrics).map(([key, value]) => (
                  <span key={key}>
                    <span className="text-slate-500">{key}:</span> 
                    <span className="text-slate-300 ml-1">{value}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {active && (
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-transparent pointer-events-none" />
          )}
        </Link>
      </div>
    )
  }

  const CategorySection = ({ category, sections }: { category: string, sections: typeof designSystemSections }) => {
    const isExpanded = expandedCategories.includes(category)
    const categoryStats = useMemo(() => {
      const total = sections.length
      const completed = sections.filter(s => s.status === "stable").length
      return { total, completed, percentage: Math.round((completed / total) * 100) }
    }, [sections])
    
    return (
      <div className="space-y-2">
        <button
          onClick={() => toggleCategory(category)}
          className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-slate-100 transition-colors w-full text-left bg-slate-800/30 rounded-lg hover:bg-slate-800/50"
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform text-slate-400",
            isExpanded && "rotate-90"
          )} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
          <div className="flex-1 flex items-center justify-between">
            <span>{category}</span>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs border-slate-600">
                {categoryStats.total}
              </Badge>
              <div className="text-xs text-slate-400">
                {categoryStats.percentage}%
              </div>
            </div>
          </div>
        </button>
        
        {isExpanded && (
          <div className="space-y-1 animate-in slide-in-from-top-2 pl-2" style={{ animationDuration: `${1 / safeAnimationSpeed}s` }}>
            {sections
              .sort((a, b) => (a.priority || 999) - (b.priority || 999))
              .map((section) => (
                <NavLink key={section.href} {...section} metrics={section.metrics} />
              ))}
          </div>
        )}
      </div>
    )
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Universal Comprehension Header */}
      <div className="px-4 py-6 border-b border-slate-700/50">
        <Link 
          href="/" 
          className="flex items-center gap-3 font-bold text-fuchsia-400 text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded group hover:scale-105 transition-transform mb-4"
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          <Hexagon className="h-8 w-8 group-hover:rotate-180 transition-transform duration-500" />
          <div className="flex flex-col leading-tight">
            <span>Inclusive</span>
            <span className="text-sm text-slate-300 font-medium">Design System</span>
          </div>
        </Link>

        {/* Quick Stats - Immediate Value Surfacing */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="bg-slate-800/30 rounded-lg p-2 text-center">
              <div className="flex items-center justify-center mb-1">
                <stat.icon className={`h-3 w-3 ${stat.color}`} />
              </div>
              <div className="text-xs font-semibold text-slate-200">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions removed for cleaner UI */}
      </div>

      {/* Search removed for cleaner UI */}

      {/* Main Navigation - Enhanced with metrics */}
      <div className="px-4 mb-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 px-2 mb-2">MAIN NAVIGATION</div>
          {mainNavigation.map((item) => (
            <NavLink key={item.href} {...item} isMainNav />
          ))}
        </div>
      </div>

      {/* Progressive Disclosure - Documentation Sections */}
      <div className="flex-1 px-4 space-y-3 overflow-y-auto">
        <div className="text-xs font-semibold text-slate-400 px-2 mb-2">DOCUMENTATION</div>
        {Object.entries(categorizedSections).map(([category, sections]) => (
          <CategorySection key={category} category={category} sections={sections} />
        ))}

        {/* Favourites Section - If any exist */}
        {favourites.size > 0 && (
          <div className="space-y-2 mt-6 pt-4 border-t border-slate-700/50">
            <div className="text-xs font-semibold text-slate-400 px-2 flex items-center gap-2">
              <Heart className="h-3 w-3 text-red-400" />
              FAVOURITES ({favourites.size})
            </div>
            <div className="space-y-1">
              {Array.from(favourites).slice(0, 5).map((href) => {
                const item = allSearchableContent.find(item => item.href === href)
                return item ? (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 px-3 py-2 text-xs rounded hover:bg-slate-800/50 transition-colors"
                  >
                    <item.icon className="h-3 w-3 text-fuchsia-400" />
                    <span className="flex-1 truncate text-slate-300">{item.label}</span>
                  </Link>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>

      {/* System Health Footer - Live Status */}
      <div className="px-4 py-4 mt-auto border-t border-slate-700/50">
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">System Health</span>
              <Badge className="ml-auto text-xs bg-green-500/20 text-green-300 border-green-500/30">
                Operational
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div className="text-center">
                <div className="text-fuchsia-400 font-semibold">102+</div>
                <div className="text-slate-400">Components</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">99.9%</div>
                <div className="text-slate-400">Uptime</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs flex-1"
                asChild
              >
                <Link href="/design-system/getting-started">
                  <HelpCircle className="h-3 w-3 mr-1" />
                  Help
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs flex-1"
                asChild
              >
                <Link href="https://github.com/inclusive-design/system" target="_blank">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:flex flex-col w-80 min-h-screen sticky top-0 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/60 z-40",
        className
      )}>
        <SidebarContent />
      </aside>
      
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-900/90 border border-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 backdrop-blur-sm"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <CloseIcon className="h-6 w-6 text-fuchsia-400" />
          ) : (
            <MenuIcon className="h-6 w-6 text-fuchsia-400" />
          )}
        </button>
        
        {mobileOpen && (
          <div className="fixed inset-0 bg-slate-950/80 z-40 flex backdrop-blur-sm">
            <aside className="w-80 bg-slate-900/95 border-r border-slate-800/60 h-full overflow-y-auto">
              <SidebarContent />
            </aside>
            <div className="flex-1" onClick={() => setMobileOpen(false)} />
          </div>
        )}
      </div>
    </>
  )
}

export default UnifiedSidebar 