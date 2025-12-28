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
  Square,
  Clock,
  UserPlus,
  Briefcase,
  Activity,
  Zap
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
  setActiveTab?: (tab: string) => void
  setShowCreateJobModal?: (show: boolean) => void
  setShowAddCandidateModal?: (show: boolean) => void
  setShowEmailModal?: (show: boolean) => void
  setShowScheduleModal?: (show: boolean) => void
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
  setTimePeriod,
  setActiveTab,
  setShowCreateJobModal,
  setShowAddCandidateModal,
  setShowEmailModal,
  setShowScheduleModal
}: DashboardOverviewProps) {
  const statCards = getStatCards()
  const candidates = [
    { 
      id: "1",
      name: "Oliver Smith", 
      position: "UX Designer", 
      status: "interview", 
      match: "92%",
      avatar: "OS",
      skills: ["Figma", "React", "UX Research"],
      experience: "5 years",
      location: "London",
      lastActivity: "2h ago"
    },
    { 
      id: "2",
      name: "Amelia Jones", 
      position: "Frontend Developer", 
      status: "screening", 
      match: "87%",
      avatar: "AJ",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "3 years",
      location: "Manchester",
      lastActivity: "5h ago"
    },
    { 
      id: "3",
      name: "Harry Patel", 
      position: "Product Manager", 
      status: "applied", 
      match: "78%",
      avatar: "HP",
      skills: ["Strategy", "Analytics", "Agile"],
      experience: "7 years",
      location: "Birmingham",
      lastActivity: "1d ago"
    },
    { 
      id: "4",
      name: "Sophie Williams", 
      position: "Data Analyst", 
      status: "offer", 
      match: "85%",
      avatar: "SW",
      skills: ["Python", "SQL", "Tableau"],
      experience: "4 years",
      location: "Edinburgh",
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
    switch (action) {
      case "email":
        // If candidates are selected, email them; otherwise open email modal or use first candidate
        if (selectedCandidates.size > 0) {
          handleCandidateAction(Array.from(selectedCandidates)[0], "email")
        } else if (candidates.length > 0) {
          handleCandidateAction(candidates[0].id, "email")
        } else if (setShowEmailModal) {
          setShowEmailModal(true)
        }
        break
      case "schedule":
        // If candidates are selected, schedule them; otherwise open schedule modal or use first candidate
        if (selectedCandidates.size > 0) {
          handleCandidateAction(Array.from(selectedCandidates)[0], "schedule")
        } else if (candidates.length > 0) {
          handleCandidateAction(candidates[0].id, "schedule")
        } else if (setShowScheduleModal) {
          setShowScheduleModal(true)
        }
        break
      case "reject":
        // Reject selected candidates (in a real app, this would update the database)
        if (selectedCandidates.size > 0) {
          setSelectedCandidates(new Set())
        }
        break
    }
  }

  // Real-time activity feed data (simulated)
  const activityFeed = [
    { id: 1, type: "application", message: "New application from Emily Brown for UI Designer", time: "5 min ago", icon: UserPlus },
    { id: 2, type: "interview", message: "Interview completed with Michael Chen", time: "15 min ago", icon: Calendar },
    { id: 3, type: "status", message: "Sophie Williams moved to offer stage", time: "1 hour ago", icon: TrendingUp },
    { id: 4, type: "application", message: "3 new applications received", time: "2 hours ago", icon: UserPlus },
    { id: 5, type: "interview", message: "Interview scheduled with Lisa Anderson", time: "3 hours ago", icon: Calendar }
  ]

  // Upcoming tasks
  const upcomingTasks = [
    { id: 1, type: "interview", title: "Interview with Oliver Smith", time: "10:00", urgent: true },
    { id: 2, type: "followup", title: "Follow up with Amelia Jones", time: "14:00", urgent: false },
    { id: 3, type: "feedback", title: "Pending feedback for Harry Patel", time: "Today", urgent: false }
  ]

  return (
    <div className="space-y-3">
      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map((stat, i) => (
          <AnimatedElement key={i} animation="slide-up" delay={i * 100}>
            <div className="bg-card/50 rounded-lg border border-border/50 p-3 hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm min-h-[120px]">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-muted-foreground font-medium">{stat.title}</div>
                <div className="flex-shrink-0">
                  {stat.icon}
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-xl font-bold text-foreground mb-1 flex items-baseline gap-2">
                    {stat.value}
                    <span className="text-xs text-muted-foreground">/ {stat.goal}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{stat.subtitle}</div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted/50 rounded-full h-1.5 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs font-medium flex items-center gap-1 text-green-600 dark:text-green-400">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.progress}%</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="mt-2 pt-2 border-t border-border/50 text-xs text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                View details
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* Quick Actions & Activity Feed Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Quick Actions Panel */}
        <AnimatedElement animation="slide-up" delay={400}>
          <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => {
                  // Try to use first candidate if available, otherwise open modal
                  if (candidates.length > 0) {
                    handleCandidateAction(candidates[0].id, "schedule")
                  } else if (setShowScheduleModal) {
                    setShowScheduleModal(true)
                  }
                }}
              >
                <Calendar className="h-3.5 w-3.5 mr-2" />
                Schedule Interview
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => handleBulkAction("email")}
              >
                <Mail className="h-3.5 w-3.5 mr-2" />
                Send Bulk Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => {
                  if (setShowCreateJobModal) {
                    setShowCreateJobModal(true)
                  } else if (setActiveTab) {
                    setActiveTab("jobs")
                  }
                }}
              >
                <Briefcase className="h-3.5 w-3.5 mr-2" />
                Create Job Posting
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                onClick={() => {
                  if (setShowAddCandidateModal) {
                    setShowAddCandidateModal(true)
                  } else if (setActiveTab) {
                    setActiveTab("candidates")
                  }
                }}
              >
                <UserPlus className="h-3.5 w-3.5 mr-2" />
                Add Candidate
              </Button>
            </div>
          </div>
        </AnimatedElement>

        {/* Real-time Activity Feed */}
        <AnimatedElement animation="slide-up" delay={500}>
          <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Activity Feed
              </h3>
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
            <div className="space-y-2 max-h-[200px] overflow-y-auto">
              {[
                { id: 1, type: "application", message: "New application from Emily Brown for UI Designer", time: "5 min ago", icon: UserPlus },
                { id: 2, type: "interview", message: "Interview completed with Michael Chen", time: "15 min ago", icon: Calendar },
                { id: 3, type: "status", message: "Sophie Williams moved to offer stage", time: "1 hour ago", icon: TrendingUp },
                { id: 4, type: "application", message: "3 new applications received", time: "2 hours ago", icon: UserPlus },
                { id: 5, type: "interview", message: "Interview scheduled with Lisa Anderson", time: "3 hours ago", icon: Calendar }
              ].map((activity) => {
                const Icon = activity.icon
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground/80">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </AnimatedElement>

        {/* Upcoming Tasks */}
        <AnimatedElement animation="slide-up" delay={600}>
          <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Upcoming Tasks
            </h3>
            <div className="space-y-2">
              {[
                { id: 1, type: "interview", title: "Interview with Oliver Smith", time: "10:00", urgent: true },
                { id: 2, type: "followup", title: "Follow up with Amelia Jones", time: "14:00", urgent: false },
                { id: 3, type: "feedback", title: "Pending feedback for Harry Patel", time: "Today", urgent: false }
              ].map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center justify-between p-2 rounded-md ${
                    task.urgent ? "bg-red-500/10 border border-red-500/30" : "bg-muted/30"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground/80 font-medium">{task.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{task.time}</p>
                  </div>
                  {task.urgent && (
                    <span className="text-xs text-red-400 font-medium">Urgent</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Candidates Table */}
      <AnimatedElement animation="slide-up" delay={400}>
        <div className="bg-card/50 rounded-lg border border-border/50 overflow-hidden backdrop-blur-sm">
          <div className="p-4 border-b border-border/50">
            <div className="flex justify-between items-center mb-3">
              <div className="font-medium text-foreground text-sm">Recent Candidates</div>
              <div className="flex items-center gap-2">
                {/* Table Filter */}
                <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
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
                          ? 'bg-fuchsia-500/20 text-primary' 
                          : 'text-muted-foreground hover:text-foreground/80'
                      }`}
                    >
                      {filter.label} ({filter.count})
                    </button>
                  ))}
                </div>
                <div 
                  className="text-xs text-primary cursor-pointer hover:underline"
                  onClick={handleExportCandidates}
                >
                  Export
                </div>
              </div>
            </div>
            
            {/* Bulk Actions */}
            {selectedCandidates.size > 0 && (
              <div className="flex items-center gap-2 mb-3 p-2 bg-fuchsia-500/10 border border-primary/30 rounded-md">
                <span className="text-xs text-primary">{selectedCandidates.size} selected</span>
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs text-primary"
                    onClick={() => handleBulkAction("email")}
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 text-xs text-primary"
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
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/30 hover:bg-accent/50 transition-all duration-200 group"
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
                        className="text-muted-foreground hover:text-foreground/80 transition-colours"
                      >
                        {selectedCandidates.has(candidate.id) ? (
                          <CheckSquare className="h-4 w-4 text-primary" />
                        ) : (
                          <Square className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {candidate.avatar}
                    </div>

                    {/* Candidate Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-sm font-medium text-foreground">{candidate.name}</div>
                        <StatusBadge status={candidate.status as "applied" | "screening" | "interview" | "offer" | "hired" | "rejected"} />
                      </div>
                      <div className="text-xs text-muted-foreground">{candidate.position}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{candidate.location}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{candidate.experience}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-emerald-400 font-medium">{candidate.match} match</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-muted-foreground">{candidate.lastActivity}</div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => handleCandidateAction(candidate.id, "view")}
                        aria-label={`View ${candidate.name} details`}
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => handleCandidateAction(candidate.id, "email")}
                        aria-label={`Send email to ${candidate.name}`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => handleCandidateAction(candidate.id, "schedule")}
                        aria-label={`Schedule interview with ${candidate.name}`}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => handleCandidateAction(candidate.id, "more")}
                        aria-label={`More actions for ${candidate.name}`}
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
        <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">Hiring Activity</h3>
              <p className="text-sm text-muted-foreground">Applications, interviews, and hires over time</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Chart Type Toggle */}
              <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
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
                        ? 'bg-fuchsia-500/20 text-primary' 
                        : 'text-muted-foreground hover:text-foreground/80'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
              
              {/* Time Period Toggle */}
              <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
                {["7D", "30D", "90D", "12M"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimePeriod(period as any)}
                    className={`px-2 py-1 rounded text-xs transition-all ${
                      timePeriod === period 
                        ? 'bg-fuchsia-500/20 text-primary' 
                        : 'text-muted-foreground hover:text-foreground/80'
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





