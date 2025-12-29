"use client"

import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Calendar,
  MoreHorizontal
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-breakpoint"
import type { TabType } from "@/app/dashboard-sections/types"
import { cn } from "@/lib/utils"

interface MobileBottomNavProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const mainTabs = [
  { id: "dashboard" as TabType, label: "Dashboard", icon: LayoutDashboard },
  { id: "candidates" as TabType, label: "Candidates", icon: Users },
  { id: "jobs" as TabType, label: "Jobs", icon: Briefcase },
  { id: "calendar" as TabType, label: "Calendar", icon: Calendar },
  { id: "settings" as TabType, label: "More", icon: MoreHorizontal }
]

/**
 * Mobile Bottom Navigation Bar
 * 
 * Thumb-friendly bottom navigation for mobile devices (320px-767px)
 * Provides quick access to main dashboard sections
 */
export function MobileBottomNav({ activeTab, setActiveTab }: MobileBottomNavProps) {
  const isMobile = useIsMobile()

  // Only render on mobile devices
  if (!isMobile) {
    return null
  }

  return (
    <nav 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-card/95 backdrop-blur-xl border-t border-border",
        "safe-area-inset-bottom", // For devices with home indicator
        "lg:hidden" // Hide on desktop/tablet
      )}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {mainTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center",
                "min-h-[44px] min-w-[44px] px-3 py-2",
                "rounded-lg transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={cn(
                "h-5 w-5 mb-1 transition-transform duration-200",
                isActive && "scale-110"
              )} />
              <span className={cn(
                "text-[10px] font-medium leading-tight",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>
                {tab.label}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          )
        })}
      </div>
      
      {/* Safe area spacer for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-card/95" />
    </nav>
  )
}
