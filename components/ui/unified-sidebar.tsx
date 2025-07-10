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
        onClick={() => setMobileOpen(false)}
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
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{description}</p>
          )}
        </div>
      </Link>
    )
  }

  const CategorySection = ({ category, sections }: { category: string, sections: typeof designSystemSections }) => {
    const isExpanded = expandedCategories.includes(category)
    
    return (
      <div className="space-y-2">
        <button
          onClick={() => toggleCategory(category)}
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors"
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
          aria-expanded={isExpanded}
          aria-label={`Toggle ${category} section`}
        >
          <span>{category}</span>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
          ) : (
            <ChevronRight className="h-4 w-4 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
          )}
        </button>
        {isExpanded && (
          <div className="space-y-1 pl-4">
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
      <div className="p-4 border-b border-slate-800/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Hexagon className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-semibold text-slate-100 truncate">Inclusive</h2>
            <p className="text-xs text-slate-400 truncate">Design System</p>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-8 text-sm bg-slate-800/50 border-slate-700/50 focus:border-fuchsia-500/50"
            aria-label="Search design system sections"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4">Main</h3>
          <div className="space-y-1">
            {mainNavigation.map((item) => (
              <NavLink key={item.href} {...item} isMainNav />
            ))}
          </div>
        </div>

        {/* Design System Sections */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4">Design System</h3>
          {Object.entries(categorizedSections).map(([category, sections]) => (
            <CategorySection key={category} category={category} sections={sections} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800/50">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>v1.0.0</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800/80 p-2 rounded-lg border border-slate-700/50"
        aria-label="Open navigation menu"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon className="h-6 w-6 text-slate-200" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static z-50 top-0 left-0 h-full w-80 bg-slate-900/95 border-r border-slate-800/50 backdrop-blur-xl shadow-2xl",
          "transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <SidebarContent />
      </aside>
    </>
  )
}

export default UnifiedSidebar 