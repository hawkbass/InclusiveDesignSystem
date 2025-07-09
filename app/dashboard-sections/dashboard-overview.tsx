"use client"

import { 
  TrendingUp, 
  ArrowRight, 
  Mail, 
  Calendar, 
  X,
  Eye,
  MoreVertical,
  CheckSquare,
  Square
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { MetricChart } from "@/components/ui/metric-chart"
import { AnimatedElement } from "../animations"
import { getStatCards, chartData } from "./data"
import type { Candidate, StatCard } from "./types"

interface DashboardOverviewProps {
  selectedCandidates: Set<string>
  tableFilter: string
  setTableFilter: (filter: string) => void
  setSelectedCandidates: (candidates: Set<string>) => void
  handleExportCandidates: () => void
  handleCandidateAction: (candidateId: string, action: string) => void
  hoverPoint: number | null
  setHoverPoint: (point: number | null) => void
  chartType: "line" | "area" | "bar"
  timePeriod: "7D" | "30D" | "90D" | "12M"
  setChartType: (type: "line" | "area" | "bar") => void
  setTimePeriod: (period: "7D" | "30D" | "90D" | "12M") => void
}

export function DashboardOverview({
  selectedCandidates,
  tableFilter,
  setTableFilter,
  setSelectedCandidates,
  handleExportCandidates,
  handleCandidateAction,
  hoverPoint,
  setHoverPoint,
  chartType,
  timePeriod,
  setChartType,
  setTimePeriod
}: DashboardOverviewProps) {
  const statCards = getStatCards()
  const candidates = [
    { 
      id: "1",
      name: "Alex Morgan", 
      position: "UX Designer", 
      status: "interview", 
      match: "92%",
      avatar: "AM",
      skills: ["Figma", "React", "UX Research"],
      experience: "5 years",
      location: "San Francisco",
      lastActivity: "2h ago"
    },
    { 
      id: "2",
      name: "Jamie Chen", 
      position: "Frontend Dev", 
      status: "screening", 
      match: "87%",
      avatar: "JC",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "3 years",
      location: "Remote",
      lastActivity: "5h ago"
    },
    { 
      id: "3",
      name: "Taylor Kim", 
      position: "Product Manager", 
      status: "applied", 
      match: "78%",
      avatar: "TK",
      skills: ["Strategy", "Analytics", "Agile"],
      experience: "7 years",
      location: "New York",
      lastActivity: "1d ago"
    },
    { 
      id: "4",
      name: "Casey Smith", 
      position: "Data Analyst", 
      status: "offer", 
      match: "85%",
      avatar: "CS",
      skills: ["Python", "SQL", "Tableau"],
      experience: "4 years",
      location: "Austin",
      lastActivity: "3h ago"
    }
  ]

  const handleChartMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setHoverPoint(percentage)
  }

  const handleChartMouseLeave = () => {
    setHoverPoint(null)
  }

  const handleBulkAction = (action: string) => {
    if (selectedCandidates.size === 0) return
    
    switch (action) {
      case "email":
        // Handle bulk email
        break
      case "schedule":
        // Handle bulk schedule
        break
      case "reject":
        // Handle bulk reject
        break
    }
  }

  return (
    <div className="space-y-3">
      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map((stat, i) => (
          <AnimatedElement key={i} animation="slide-up" delay={i * 100}>
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-3 hover:border-fuchsia-500/50 transition-all duration-300 group backdrop-blur-sm min-h-[120px]">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-slate-400 font-medium">{stat.title}</div>
                <div className="flex-shrink-0">
                  {stat.icon}
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-xl font-bold text-slate-100 mb-1 flex items-baseline gap-2">
                    {stat.value}
                    <span className="text-xs text-slate-500">/ {stat.goal}</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">{stat.subtitle}</div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-2">
                    <div 
                      className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs font-medium flex items-center gap-1 text-green-400">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </div>
                  <div className="text-xs text-slate-500">{stat.progress}%</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="mt-2 pt-2 border-t border-slate-700/50 text-xs text-fuchsia-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                View details
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* Candidates Table */}
      <AnimatedElement animation="slide-up" delay={400}>
        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden backdrop-blur-sm">
          <div className="p-4 border-b border-slate-700/50">
            <div className="flex justify-between items-center mb-3">
              <div className="font-medium text-slate-100 text-sm">Recent Candidates</div>
              <div className="flex items-center gap-2">
                {/* Table Filter */}
                <div className="flex items-center gap-1 bg-slate-700/50 rounded-md p-1">
                  {[
                    { key: "all", label: "All", count: 4 },
                    { key: "interview", label: "Interview", count: 1 },
                    { key: "screening", label: "Review", count: 2 }
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setTableFilter(filter.key)}
                      className={`px-2 py-1 rounded text-xs transition-all ${
                        tableFilter === filter.key 
                          ? 'bg-fuchsia-500/20 text-fuchsia-300' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      {filter.label} ({filter.count})
                    </button>
                  ))}
                </div>
                <div 
                  className="text-xs text-fuchsia-400 cursor-pointer hover:underline"
                  onClick={handleExportCandidates}
                >
                  Export
                </div>
              </div>
            </div>
            
            {/* Bulk Actions */}
            {selectedCandidates.size > 0 && (
              <div className="flex items-center gap-2 mb-3 p-2 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-md">
                <span className="text-xs text-fuchsia-300">{selectedCandidates.size} selected</span>
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs text-fuchsia-400"
                    onClick={() => handleBulkAction("email")}
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs text-fuchsia-400"
                    onClick={() => handleBulkAction("schedule")}
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Schedule
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs text-red-400"
                    onClick={() => handleBulkAction("reject")}
                  >
                    <X className="h-3 w-3 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4">
            {/* Enhanced Table */}
            <div className="space-y-3">
              {candidates.map((candidate) => (
                <div 
                  key={candidate.id}
                  className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {/* Checkbox */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => {
                          const newSelected = new Set(selectedCandidates)
                          if (newSelected.has(candidate.id)) {
                            newSelected.delete(candidate.id)
                          } else {
                            newSelected.add(candidate.id)
                          }
                          setSelectedCandidates(newSelected)
                        }}
                        className="text-slate-400 hover:text-slate-300 transition-colors"
                      >
                        {selectedCandidates.has(candidate.id) ? (
                          <CheckSquare className="h-4 w-4 text-fuchsia-400" />
                        ) : (
                          <Square className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {candidate.avatar}
                    </div>

                    {/* Candidate Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-sm font-medium text-slate-100">{candidate.name}</div>
                        <StatusBadge status={candidate.status as "applied" | "screening" | "interview" | "offer" | "hired" | "rejected"} />
                      </div>
                      <div className="text-xs text-slate-400">{candidate.position}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500">{candidate.location}</span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-slate-500">{candidate.experience}</span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-emerald-400 font-medium">{candidate.match} match</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-slate-500">{candidate.lastActivity}</div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300"
                        onClick={() => handleCandidateAction(candidate.id, "view")}
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300"
                        onClick={() => handleCandidateAction(candidate.id, "email")}
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300"
                        onClick={() => handleCandidateAction(candidate.id, "schedule")}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300"
                        onClick={() => handleCandidateAction(candidate.id, "more")}
                      >
                        <MoreVertical className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedElement>

      {/* Activity Chart */}
      <AnimatedElement animation="slide-up" delay={500}>
        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-slate-100">Hiring Activity</h3>
              <p className="text-sm text-slate-400">Applications, interviews, and hires over time</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Chart Type Toggle */}
              <div className="flex items-center gap-1 bg-slate-700/50 rounded-md p-1">
                {[
                  { key: "area", label: "Area" },
                  { key: "line", label: "Line" },
                  { key: "bar", label: "Bar" }
                ].map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setChartType(type.key as any)}
                    className={`px-2 py-1 rounded text-xs transition-all ${
                      chartType === type.key 
                        ? 'bg-fuchsia-500/20 text-fuchsia-300' 
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
              
              {/* Time Period Toggle */}
              <div className="flex items-center gap-1 bg-slate-700/50 rounded-md p-1">
                {["7D", "30D", "90D", "12M"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimePeriod(period as any)}
                    className={`px-2 py-1 rounded text-xs transition-all ${
                      timePeriod === period 
                        ? 'bg-fuchsia-500/20 text-fuchsia-300' 
                        : 'text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="relative"
            onMouseMove={handleChartMouseMove}
            onMouseLeave={handleChartMouseLeave}
          >
            <MetricChart 
              data={chartData.datasets[0].data}
              labels={chartData.labels}
              className="h-64"
              type={chartType}
            />
            
            {/* Hover indicator */}
            {hoverPoint !== null && (
              <div 
                className="absolute top-0 bottom-0 w-px bg-fuchsia-400/50 pointer-events-none"
                style={{ left: `${hoverPoint}%` }}
              />
            )}
          </div>
        </div>
      </AnimatedElement>
    </div>
  )
} 