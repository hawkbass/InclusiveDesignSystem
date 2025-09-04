"use client"

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
  Users as TeamIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
  const mainTabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "candidates", label: "Candidates", icon: Users },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "settings", label: "Settings", icon: Settings }
  ]

  const settingsTabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "team", label: "Team", icon: TeamIcon }
  ]

  return (
    <div className="w-64 bg-slate-800/50 border-r border-slate-700/50 backdrop-blur-sm">
      {/* User Profile Section */}
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
            SW
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-slate-100">Sarah Wilson</div>
            <div className="text-xs text-slate-400">Senior Recruitment Manager</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-slate-400 hover:text-slate-300"
          >
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-slate-400">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Online</span>
          </div>
          <div className="text-slate-500">inclusive.io</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="p-2">
        <div className="text-xs font-medium text-slate-400 mb-2 px-2">Navigation</div>
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
                    ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30' 
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveTab(tab.id as TabType)}
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
        <div className="p-2 border-t border-slate-700/50">
          <div className="text-xs font-medium text-slate-400 mb-2 px-2">Settings</div>
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
                      ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30' 
                      : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setActiveSettingsTab(tab.id as SettingsTabType)}
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
      <div className="p-4 border-t border-slate-700/50 mt-auto">
        <div className="text-xs font-medium text-slate-400 mb-3">Quick Stats</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Active Jobs</span>
            <span className="text-slate-200 font-medium">24</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Candidates</span>
            <span className="text-slate-200 font-medium">156</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Interviews</span>
            <span className="text-slate-200 font-medium">32</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-slate-700/30">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Time Saved</span>
            <span className="text-emerald-400 font-medium">48h</span>
          </div>
        </div>
      </div>
    </div>
  )
} 





