"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Calendar, 
  Settings 
} from "lucide-react"

interface DashboardTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function DashboardTabs({ activeTab, setActiveTab }: DashboardTabsProps) {
  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "candidates", name: "Candidates", icon: Users },
    { id: "jobs", name: "Jobs", icon: Briefcase },
    { id: "calendar", name: "Calendar", icon: Calendar },
    { id: "settings", name: "Settings", icon: Settings },
  ]

  return (
    <div className="space-y-1 mt-3 flex-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
            activeTab === tab.id
              ? "bg-fuchsia-500/20 text-primary border border-primary/50"
              : "text-muted-foreground hover:text-foreground/80 hover:bg-card/50"
          }`}
        >
          <tab.icon className="h-3.5 w-3.5" />
          {tab.name}
        </button>
      ))}
    </div>
  )
} 
