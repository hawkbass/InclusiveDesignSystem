"use client"

import { useState } from "react"
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Calendar, 
  Settings, 
  ChevronDown,
  User,
  Shield,
  Bell,
  Users as TeamIcon,
  Mail,
  FileText,
  BarChart3,
  Zap,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { TabType, SettingsTabType } from "./types"

interface SidebarNavigationProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  activeSettingsTab: SettingsTabType
  setActiveSettingsTab: (tab: SettingsTabType) => void
}

export function SidebarNavigation({ 
  activeTab, 
  setActiveTab, 
  activeSettingsTab, 
  setActiveSettingsTab 
}: SidebarNavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mainTabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "candidates", label: "Candidates", icon: Users },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "communications", label: "Communications", icon: Mail },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "automation", label: "Automation", icon: Zap },
    { id: "settings", label: "Settings", icon: Settings }
  ]

  const settingsTabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "team", label: "Team", icon: TeamIcon }
  ]

  const SidebarContent = () => (
    <div className="w-full lg:w-64 bg-card/50 border-r border-border/50 backdrop-blur-sm h-full">
      {/* User Profile Section */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-medium">
            ER
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground">Emma Richardson</div>
            <div className="text-xs text-muted-foreground">Senior Recruitment Manager</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground/80"
          >
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Online</span>
          </div>
          <div className="text-muted-foreground">inclusive.io</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="p-2">
        <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Navigation</div>
        <div className="space-y-1">
          {mainTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            const isSettings = tab.id === "settings"
            
            return (
              <Button
                key={tab.id}
                variant="ghost"
                className={`w-full justify-start h-10 px-3 text-sm transition-all duration-200 ${
                  isActive 
                    ? 'bg-fuchsia-500/20 text-primary border border-primary/30' 
                    : 'text-muted-foreground hover:text-foreground/80 hover:bg-accent/50'
                }`}
                onClick={() => {
                  setActiveTab(tab.id as TabType)
                  setMobileOpen(false)
                }}
              >
                <Icon className="h-4 w-4 mr-3" />
                {tab.label}
                {isSettings && (
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></div>
                  </div>
                )}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Settings Sub-navigation */}
      {activeTab === "settings" && (
        <div className="p-2 border-t border-border/50">
          <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Settings</div>
          <div className="space-y-1">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeSettingsTab === tab.id
              
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  className={`w-full justify-start h-8 px-3 text-xs transition-all duration-200 ${
                    isActive 
                      ? 'bg-fuchsia-500/20 text-primary border border-primary/30' 
                      : 'text-muted-foreground hover:text-foreground/80 hover:bg-accent/50'
                  }`}
                  onClick={() => {
                    setActiveSettingsTab(tab.id as SettingsTabType)
                    setMobileOpen(false)
                  }}
                >
                  <Icon className="h-3 w-3 mr-2" />
                  {tab.label}
                </Button>
              )
            })}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="p-4 border-t border-border/50 mt-auto">
        <div className="text-xs font-medium text-muted-foreground mb-3">Quick Stats</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Active Jobs</span>
            <span className="text-foreground font-medium">24</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Candidates</span>
            <span className="text-foreground font-medium">156</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Interviews</span>
            <span className="text-foreground font-medium">32</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-border/30">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Time Saved</span>
            <span className="text-emerald-400 font-medium">48h</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 bg-card/95 backdrop-blur-sm border-border"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 overflow-y-auto">
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SidebarContent />
      </div>
    </>
  )
} 





