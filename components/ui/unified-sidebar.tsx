import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  Search,
  ChevronRight,
  ChevronDown,
  BarChart3,
  Settings,
  HelpCircle,
  ExternalLink
} from "lucide-react"

const designSystemSections = [
  { 
    href: "/design-system/getting-started", 
    label: "Getting Started", 
    icon: Zap,
    description: "Quick setup and installation guide",
    status: "stable" as const,
    category: "Getting Started"
  },
  { 
    href: "/design-system/dashboard", 
    label: "Dashboard", 
    icon: BarChart3,
    description: "Analytics and system metrics overview",
    status: "stable" as const,
    category: "Applications"
  },
  { 
    href: "/design-system/principles", 
    label: "Design Principles", 
    icon: Target,
    description: "Core design philosophy and guidelines", 
    status: "stable" as const,
    category: "Foundation"
  },
  { 
    href: "/design-system/tokens", 
    label: "Design Tokens", 
    icon: Palette,
    description: "Colors, spacing, typography tokens",
    status: "stable" as const,
    category: "Foundation"
  },
  { 
    href: "/design-system/components", 
    label: "Component Guidelines", 
    icon: Layers,
    description: "Component usage and best practices",
    status: "beta" as const,
    category: "Components"
  },
  { 
    href: "/design-system/patterns", 
    label: "UI Patterns", 
    icon: Grid3X3,
    description: "Common interface patterns and layouts",
    status: "stable" as const,
    category: "Components"
  },
  { 
    href: "/design-system/accessibility", 
    label: "Accessibility", 
    icon: Shield,
    description: "WCAG compliance and inclusive design",
    status: "stable" as const,
    category: "Foundation"
  },
  { 
    href: "/design-system/theming", 
    label: "Theming", 
    icon: Type,
    description: "Customization and theme development",
    status: "beta" as const,
    category: "Advanced"
  },
  { 
    href: "/design-system/responsive", 
    label: "Responsive Design", 
    icon: Monitor,
    description: "Breakpoints and responsive patterns",
    status: "stable" as const,
    category: "Foundation"
  },
  { 
    href: "/design-system/best-practices", 
    label: "Best Practices", 
    icon: Award,
    description: "Implementation guidelines and tips",
    status: "stable" as const,
    category: "Advanced"
  },
]

const mainNavigation = [
  { href: "/", label: "Home", icon: HomeIcon, description: "Design system homepage" },
  { href: "/design-system/overview", label: "Design System", icon: Hexagon, description: "Main design system overview" },
  { href: "/components", label: "Components", icon: ComponentIcon, description: "Component library" },
  { href: "/style-guide", label: "Style Guide", icon: LayoutDashboard, description: "Visual style guide" },
]

interface UnifiedSidebarProps {
  animationSpeed?: number[]
  className?: string
}

export function UnifiedSidebar({ animationSpeed = [1], className }: UnifiedSidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Getting Started"])

  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  const filteredSections = designSystemSections.filter(section =>
    section.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categorizedSections = filteredSections.reduce((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = []
    }
    acc[section.category].push(section)
    return acc
  }, {} as Record<string, typeof filteredSections>)

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const NavLink = ({ 
    href, 
    label, 
    icon: Icon, 
    description, 
    status,
    isMainNav = false 
  }: { 
    href: string
    label: string
    icon: React.ElementType
    description?: string
    status?: "stable" | "beta" | "alpha"
    isMainNav?: boolean
  }) => {
    const active = pathname === href
    
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium border relative overflow-hidden group",
          active
            ? "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/10"
            : "hover:bg-slate-800/80 text-slate-300 border-transparent hover:border-slate-700/50",
          isMainNav && "font-semibold"
        )}
        style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        aria-current={active ? "page" : undefined}
      >
        <Icon className={cn(
          "h-4 w-4 shrink-0 transition-transform",
          active ? "text-fuchsia-400 scale-110" : "text-slate-400 group-hover:scale-110"
        )} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="whitespace-nowrap truncate">{label}</span>
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
          </div>
          {description && (
            <div className="text-xs text-slate-500 mt-1 truncate">{description}</div>
          )}
        </div>
        
        {active && (
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-transparent pointer-events-none" />
        )}
      </Link>
    )
  }

  const CategorySection = ({ category, sections }: { category: string, sections: typeof designSystemSections }) => {
    const isExpanded = expandedCategories.includes(category)
    
    return (
      <div className="space-y-1">
        <button
          onClick={() => toggleCategory(category)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-300 transition-colors w-full text-left"
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          <ChevronRight className={cn(
            "h-3 w-3 transition-transform",
            isExpanded && "rotate-90"
          )} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
          <span>{category}</span>
          <div className="flex-1 h-px bg-slate-700/50 ml-2" />
        </button>
        
        {isExpanded && (
          <div className="space-y-1 animate-in slide-in-from-top-2" style={{ animationDuration: `${1 / safeAnimationSpeed}s` }}>
            {sections.map((section) => (
              <NavLink key={section.href} {...section} />
            ))}
          </div>
        )}
      </div>
    )
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <Link 
        href="/" 
        className="flex items-center gap-3 px-4 py-6 font-bold text-fuchsia-400 text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 rounded group hover:scale-105 transition-transform"
        style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
      >
        <Hexagon className="h-8 w-8 group-hover:rotate-180 transition-transform duration-500" />
        <div className="flex flex-col leading-tight">
          <span>Inclusive</span>
          <span className="text-sm text-slate-300 font-medium">Design System</span>
        </div>
      </Link>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700/50 text-slate-300 placeholder:text-slate-500 focus:border-fuchsia-500/50"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 mb-4">
        <div className="space-y-1">
          {mainNavigation.map((item) => (
            <NavLink key={item.href} {...item} isMainNav />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="px-4 mb-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* Documentation Sections */}
      <div className="flex-1 px-4 space-y-2 overflow-y-auto">
        {Object.entries(categorizedSections).map(([category, sections]) => (
          <CategorySection key={category} category={category} sections={sections} />
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-4 mt-auto">
        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-300">System Status</span>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Components:</span>
              <span className="text-slate-300">49+</span>
            </div>
            <div className="flex justify-between">
              <span>Version:</span>
              <span className="text-slate-300">2.1.0</span>
            </div>
            <div className="flex justify-between">
              <span>Updated:</span>
              <span className="text-slate-300">Today</span>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              asChild
            >
              <Link href="/design-system/getting-started">
                <div className="flex items-center">
                  <HelpCircle className="h-3 w-3 mr-1" />
                  Help
                </div>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              asChild
            >
              <Link href="https://github.com/inclusive-design/system" target="_blank">
                <div className="flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  GitHub
                </div>
              </Link>
            </Button>
          </div>
        </div>
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