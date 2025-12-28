"use client"

import { 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Eye, 
  Edit, 
  MoreVertical,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Pause,
  X,
  Briefcase,
  PoundSterling,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedElement } from "../animations"
import type { Job } from "./types"
import { JobStatus } from "@/components/ui/status-badge"

interface JobsManagementProps {
  jobFilter: string
  setJobFilter: (filter: string) => void
  jobSearchTerm: string
  setJobSearchTerm: (term: string) => void
  showCreateJobModal: boolean
  setShowCreateJobModal: (show: boolean) => void
  showJobDetailsModal: boolean
  setShowJobDetailsModal: (show: boolean) => void
  showEditJobModal: boolean
  setShowEditJobModal: (show: boolean) => void
  selectedJob: Job | null
  setSelectedJob: (job: Job | null) => void
  handleJobAction: (jobId: string, action: string) => void
  jobsData: Job[]
  setJobsData: (jobs: Job[]) => void
}

export function JobsManagement({
  jobFilter,
  setJobFilter,
  jobSearchTerm,
  setJobSearchTerm,
  showCreateJobModal,
  setShowCreateJobModal,
  showJobDetailsModal,
  setShowJobDetailsModal,
  showEditJobModal,
  setShowEditJobModal,
  selectedJob,
  setSelectedJob,
  handleJobAction,
  jobsData,
  setJobsData
}: JobsManagementProps) {
  const jobStatuses = [
    { key: "all", label: "All Jobs", count: jobsData.length },
    { key: "active", label: "Active", count: jobsData.filter(j => j.status === "active").length },
    { key: "paused", label: "Paused", count: jobsData.filter(j => j.status === "paused").length },
    { key: "closed", label: "Closed", count: jobsData.filter(j => j.status === "closed").length },
    { key: "draft", label: "Draft", count: jobsData.filter(j => j.status === "draft").length }
  ]

  const filteredJobs = jobsData.filter(job => {
    const matchesStatus = jobFilter === "all" || job.status === jobFilter
    const matchesSearch = job.title.toLowerCase().includes(jobSearchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(jobSearchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(jobSearchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-emerald-400" />
      case "paused":
        return <Pause className="h-4 w-4 text-amber-400" />
      case "closed":
        return <X className="h-4 w-4 text-red-400" />
      case "draft":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30"
      case "paused":
        return "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30"
      case "closed":
        return "bg-red-500/20 text-red-600 dark:text-red-300 border-red-500/30"
      case "draft":
        return "bg-slate-500/20 text-foreground/80 border-slate-500/30"
      default:
        return "bg-slate-500/20 text-foreground/80 border-slate-500/30"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-600 dark:text-red-300 border-red-500/30"
      case "medium":
        return "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30"
      case "low":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      default:
        return "bg-slate-500/20 text-foreground/80 border-slate-500/30"
    }
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Jobs</h2>
          <p className="text-sm text-muted-foreground">Manage job postings and applications</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border/50 text-foreground/80 hover:bg-accent/50"
            onClick={() => {
              // Export jobs to CSV
              const headers = ["Title", "Department", "Location", "Type", "Level", "Salary", "Status", "Applicants", "Posted"]
              const rows = jobsData.map(job => [
                job.title,
                job.department,
                job.location,
                job.type,
                job.level,
                job.salary,
                job.status,
                job.applicants.toString(),
                job.posted
              ])
              
              const csvContent = [
                headers.join(","),
                ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
              ].join("\n")
              
              const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
              const link = document.createElement("a")
              const url = URL.createObjectURL(blob)
              link.setAttribute("href", url)
              link.setAttribute("download", `jobs-export-${new Date().toISOString().split('T')[0]}.csv`)
              link.style.visibility = "hidden"
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button
            size="sm"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
            onClick={() => setShowCreateJobModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Job
          </Button>
        </div>
      </div>

      {/* Job Status Overview */}
      <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-foreground">Job Status Overview</h3>
          <div className="text-sm text-muted-foreground">{filteredJobs.length} jobs</div>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {jobStatuses.map((status) => (
            <button
              key={status.key}
              onClick={() => setJobFilter(status.key)}
              className={`p-3 rounded-lg border transition-all duration-200 text-center ${
                jobFilter === status.key
                  ? 'border-primary/50 bg-fuchsia-500/10'
                  : 'border-border/50 bg-muted/30 hover:border-border/50'
              }`}
            >
              <div className={`text-lg font-bold mb-1 ${
                jobFilter === status.key ? 'text-primary' : 'text-foreground'
              }`}>
                {status.count}
              </div>
              <div className={`text-xs ${
                jobFilter === status.key ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {status.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              value={jobSearchTerm}
              onChange={(e) => setJobSearchTerm(e.target.value)}
              className="pl-10 bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-border/50 text-foreground/80 hover:bg-accent/50"
            onClick={() => {
              // In a real app, this would open a filter dropdown/modal
              // For demo purposes, we'll show a message
              alert("Advanced filters would open here. (Demo mode)")
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredJobs.map((job) => (
          <AnimatedElement key={job.id} animation="slide-up">
            <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm hover:border-primary/50 transition-all duration-200">
              {/* Job Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-medium text-foreground truncate">{job.title}</h3>
                    <JobStatus status={job.status as any} />
                  </div>
                  <div className="text-sm text-muted-foreground">{job.department}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                    onClick={() => {
                      setSelectedJob(job)
                      setShowJobDetailsModal(true)
                    }}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                    onClick={() => {
                      setSelectedJob(job)
                      setShowEditJobModal(true)
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                    onClick={() => handleJobAction(job.id, "more")}
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    {job.level}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <PoundSterling className="h-4 w-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {job.applicants} applicants
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {job.posted}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className={`px-2 py-1 rounded text-xs border ${getPriorityColor(job.priority)}`}>
                    {job.priority} priority
                  </div>
                </div>

                <p className="text-sm text-foreground/80 line-clamp-2">{job.description}</p>

                {/* Requirements Preview */}
                <div className="flex items-center gap-2">
                  {job.requirements.slice(0, 2).map((req) => (
                    <span 
                      key={req}
                      className="px-2 py-1 bg-muted/50 text-xs text-foreground/80 rounded-md"
                    >
                      {req}
                    </span>
                  ))}
                  {job.requirements.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{job.requirements.length - 2} more</span>
                  )}
                </div>
              </div>

              {/* Job Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border/50 text-foreground/80 hover:bg-accent/50"
                    onClick={() => handleJobAction(job.id, "view-applicants")}
                    aria-label={`View Applicants for ${job.title}`}
                  >
                    <Users className="h-4 w-4 mr-1" />
                    View Applicants
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border/50 text-foreground/80 hover:bg-accent/50"
                    onClick={() => handleJobAction(job.id, "edit")}
                    aria-label={`Edit ${job.title} job posting`}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
                <div className="flex items-center gap-1">
                  {job.status === "active" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-700/50 text-amber-600 dark:text-amber-300 hover:bg-amber-500/10"
                      onClick={() => handleJobAction(job.id, "pause")}
                      aria-label={`Pause ${job.title} job posting`}
                    >
                      <Pause className="h-4 w-4 mr-1" />
                      Pause
                    </Button>
                  )}
                  {job.status === "paused" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-emerald-700/50 text-emerald-300 hover:bg-emerald-500/10"
                      onClick={() => handleJobAction(job.id, "activate")}
                      aria-label={`Activate ${job.title} job posting`}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Activate
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-700/50 text-red-600 dark:text-red-300 hover:bg-red-500/10"
                    onClick={() => handleJobAction(job.id, "close")}
                    aria-label={`Close ${job.title} job posting`}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">No jobs found</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {jobSearchTerm || jobFilter !== "all" 
              ? "Try adjusting your search or filters" 
              : "Get started by creating your first job posting"
            }
          </p>
          {!jobSearchTerm && jobFilter === "all" && (
            <Button
              size="sm"
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
              onClick={() => setShowCreateJobModal(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Job
            </Button>
          )}
        </div>
      )}
    </div>
  )
} 





