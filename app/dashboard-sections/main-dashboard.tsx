"use client"

import { useEffect, useRef, useState } from "react"
import { DashboardHeader } from "./dashboard-header"
import { SidebarNavigation } from "./sidebar-navigation"
import { DashboardOverview } from "./dashboard-overview"
import { CandidatesManagement } from "./candidates-management"
import { JobsManagement } from "./jobs-management"
import { CalendarIntegration } from "./calendar-integration"
import { SettingsPanel } from "./settings-panel"
import { Communications } from "./communications"
import { Documents } from "./documents"
import { Analytics } from "./analytics"
import { Automation } from "./automation"
import { AnimatedElement } from "../animations"
import { 
  initialNotifications, 
  expandedCandidates,
  initialCandidates,
  expandedJobs, 
  initialCalendarEvents,
  initialProfileData,
  initialNotificationPrefs,
  initialSecuritySettings,
  initialTeamMembers
} from "./data"
import type { 
  DashboardState, 
  TabType, 
  SettingsTabType,
  Notification,
  Candidate,
  Job,
  CalendarEvent,
  ProfileData,
  NotificationPrefs,
  SecuritySettings,
  TeamMember
} from "./types"
import { CandidateDetailsModal } from "./modals/CandidateDetailsModal"
import { CandidateEmailModal } from "./modals/CandidateEmailModal"
import { CandidateScheduleModal } from "./modals/CandidateScheduleModal"
import { CandidateMoreActionsModal } from "./modals/CandidateMoreActionsModal"
import { CreateJobModal } from "./modals/CreateJobModal"
import { JobDetailsModal } from "./modals/JobDetailsModal"
import { EditJobModal } from "./modals/EditJobModal"
import { ScheduleInterviewModal } from "./modals/ScheduleInterviewModal"
import { EventDetailsModal } from "./modals/EventDetailsModal"
import { AddCandidateModal } from "./modals/AddCandidateModal"
import { ViewApplicantsModal } from "./modals/ViewApplicantsModal"
import { CVModal } from "./modals/CVModal"
import { DocumentModal } from "./modals/DocumentModal"
import { MobileBottomNav } from "@/components/dashboard/mobile-bottom-nav"

export function MainDashboard() {
  // Initialize all state
  const [activeTab, setActiveTab] = useState<TabType>("dashboard")
  const [isVisible, setIsVisible] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const [hoverPoint, setHoverPoint] = useState<number | null>(null)
  const [chartType, setChartType] = useState<"line" | "area" | "bar">("area")
  const [timePeriod, setTimePeriod] = useState<"7D" | "30D" | "90D" | "12M">("12M")
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [showNotifications, setShowNotifications] = useState(false)
  const [selectedCandidates, setSelectedCandidates] = useState<Set<string>>(new Set())
  const [tableFilter, setTableFilter] = useState("all")

  // Candidates state
  const [candidateStageFilter, setCandidateStageFilter] = useState("all")
  const [candidateSearchTerm, setCandidateSearchTerm] = useState("")
  const [selectedCandidateIds, setSelectedCandidateIds] = useState<Set<string>>(new Set())
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [showAddCandidateModal, setShowAddCandidateModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const candidatesPerPage = 5
  const [showCandidateModal, setShowCandidateModal] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [showMoreActionsModal, setShowMoreActionsModal] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [showCVModal, setShowCVModal] = useState(false)
  const [cvCandidateId, setCvCandidateId] = useState<string | null>(null)
  const [showDocumentModal, setShowDocumentModal] = useState(false)
  const [documentId, setDocumentId] = useState<string | null>(null)

  // Jobs state
  const [showCreateJobModal, setShowCreateJobModal] = useState(false)
  const [showJobDetailsModal, setShowJobDetailsModal] = useState(false)
  const [showEditJobModal, setShowEditJobModal] = useState(false)
  const [showViewApplicantsModal, setShowViewApplicantsModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [jobFilter, setJobFilter] = useState("all")
  const [jobSearchTerm, setJobSearchTerm] = useState("")
  const [jobsData, setJobsData] = useState<Job[]>(expandedJobs)

  // Calendar state
  const [showScheduleInterviewModal, setShowScheduleInterviewModal] = useState(false)
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [calendarView, setCalendarView] = useState<"month" | "week" | "day">("month")
  const [selectedDate, setSelectedDate] = useState(new Date().getDate())
  const [calendarFilter, setCalendarFilter] = useState("all")
  const [calendarEvents, setCalendarEvents] = useState<Record<number, CalendarEvent[]>>(initialCalendarEvents)

  // Settings state
  const [activeSettingsTab, setActiveSettingsTab] = useState<SettingsTabType>("profile")
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false)
  const [showInviteTeamModal, setShowInviteTeamModal] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData)
  const [notificationPrefs, setNotificationPrefs] = useState<NotificationPrefs>(initialNotificationPrefs)
  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>(initialSecuritySettings)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)

  // Animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Event handlers
  const handleCandidateAction = (candidateId: string, action: string) => {
    const candidate = initialCandidates.find(c => c.id === candidateId)
    if (!candidate) return

    switch (action) {
      case "view":
        setSelectedCandidate(candidate)
        setShowCandidateModal(true)
        break
      case "email":
        setSelectedCandidate(candidate)
        setShowEmailModal(true)
        break
      case "schedule":
        setSelectedCandidate(candidate)
        setShowScheduleModal(true)
        break
      case "more":
        setSelectedCandidate(candidate)
        setShowMoreActionsModal(true)
        break
    }
  }

  const handleJobAction = (jobId: string, action: string) => {
    const job = jobsData.find(j => j.id === jobId)
    if (!job) return

    switch (action) {
      case "view-applicants":
        setSelectedJob(job)
        setShowViewApplicantsModal(true)
        break
      case "edit":
        setSelectedJob(job)
        setShowEditJobModal(true)
        break
      case "pause":
        setJobsData(prev => prev.map(j => 
          j.id === jobId ? { ...j, status: "paused" as const } : j
        ))
        break
      case "activate":
        setJobsData(prev => prev.map(j => 
          j.id === jobId ? { ...j, status: "active" as const } : j
        ))
        break
      case "close":
        setJobsData(prev => prev.map(j => 
          j.id === jobId ? { ...j, status: "closed" as const } : j
        ))
        break
      case "more":
        // Open job details modal for more actions
        setSelectedJob(job)
        setShowJobDetailsModal(true)
        break
    }
  }

  const handleExportCandidates = () => {
    // Create CSV content from selected candidates or all candidates
    const candidatesToExport = selectedCandidateIds.size > 0
      ? expandedCandidates.filter(c => selectedCandidateIds.has(c.id))
      : expandedCandidates
    
    const headers = ["Name", "Position", "Status", "Match", "Location", "Experience", "Email", "Phone", "Source"]
    const rows = candidatesToExport.map(c => [
      c.name,
      c.position,
      c.status,
      c.match,
      c.location,
      c.experience,
      c.email || "",
      c.phone || "",
      c.source || "LinkedIn"
    ])
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    ].join("\n")
    
    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `candidates-export-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Show notification
    setNotifications(prev => [
      { 
        id: Date.now(), 
        type: "system", 
        message: `Exported ${candidatesToExport.length} candidate${candidatesToExport.length !== 1 ? 's' : ''}`, 
        time: "Just now", 
        urgent: false 
      },
      ...prev.slice(0, 4)
    ])
  }

  const handleAddCandidate = () => {
    setShowAddCandidateModal(true)
  }

  const handleFilterAction = (filterType: string) => {
    if (selectedCandidateIds.size === 0) {
      setNotifications(prev => [
        { 
          id: Date.now(), 
          type: "system", 
          message: "Please select at least one candidate", 
          time: "Just now", 
          urgent: false 
        },
        ...prev.slice(0, 4)
      ])
      return
    }
    
    const selectedCandidates = expandedCandidates.filter(c => selectedCandidateIds.has(c.id))
    
    switch (filterType) {
      case "email":
        // Open email modal with multiple recipients
        if (selectedCandidates.length > 0) {
          setSelectedCandidate(selectedCandidates[0])
          setShowEmailModal(true)
          setNotifications(prev => [
            { 
              id: Date.now(), 
              type: "system", 
              message: `Preparing email for ${selectedCandidates.length} candidate${selectedCandidates.length !== 1 ? 's' : ''}`, 
              time: "Just now", 
              urgent: false 
            },
            ...prev.slice(0, 4)
          ])
        }
        break
      case "schedule":
        // Open schedule modal
        if (selectedCandidates.length > 0) {
          setSelectedCandidate(selectedCandidates[0])
          setShowScheduleModal(true)
          setNotifications(prev => [
            { 
              id: Date.now(), 
              type: "system", 
              message: `Scheduling interview for ${selectedCandidates.length} candidate${selectedCandidates.length !== 1 ? 's' : ''}`, 
              time: "Just now", 
              urgent: false 
            },
            ...prev.slice(0, 4)
          ])
        }
        break
      case "reject":
        // Reject selected candidates
        setNotifications(prev => [
          { 
            id: Date.now(), 
            type: "system", 
            message: `Rejected ${selectedCandidates.length} candidate${selectedCandidates.length !== 1 ? 's' : ''}`, 
            time: "Just now", 
            urgent: false 
          },
          ...prev.slice(0, 4)
        ])
        // Clear selection after rejection
        setSelectedCandidateIds(new Set())
        break
    }
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardOverview
            selectedCandidates={selectedCandidates}
            tableFilter={tableFilter}
            setTableFilter={setTableFilter}
            setSelectedCandidates={setSelectedCandidates}
            handleExportCandidates={handleExportCandidates}
            handleCandidateAction={handleCandidateAction}
            hoverPoint={hoverPoint}
            setHoverPoint={setHoverPoint}
            chartType={chartType}
            timePeriod={timePeriod}
            setChartType={setChartType}
            setTimePeriod={setTimePeriod}
            setActiveTab={setActiveTab}
            setShowCreateJobModal={setShowCreateJobModal}
            setShowAddCandidateModal={setShowAddCandidateModal}
            setShowEmailModal={setShowEmailModal}
            setShowScheduleModal={setShowScheduleModal}
          />
        )
      case "candidates":
        return (
          <CandidatesManagement
            candidateStageFilter={candidateStageFilter}
            setCandidateStageFilter={setCandidateStageFilter}
            candidateSearchTerm={candidateSearchTerm}
            setCandidateSearchTerm={setCandidateSearchTerm}
            selectedCandidateIds={selectedCandidateIds}
            setSelectedCandidateIds={setSelectedCandidateIds}
            showFilterDropdown={showFilterDropdown}
            setShowFilterDropdown={setShowFilterDropdown}
            showAddCandidateModal={showAddCandidateModal}
            setShowAddCandidateModal={setShowAddCandidateModal}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            candidatesPerPage={candidatesPerPage}
            handleCandidateAction={handleCandidateAction}
            handleExportCandidates={handleExportCandidates}
            handleAddCandidate={handleAddCandidate}
            handleFilterAction={handleFilterAction}
          />
        )
      case "jobs":
        return (
          <JobsManagement
            jobFilter={jobFilter}
            setJobFilter={setJobFilter}
            jobSearchTerm={jobSearchTerm}
            setJobSearchTerm={setJobSearchTerm}
            showCreateJobModal={showCreateJobModal}
            setShowCreateJobModal={setShowCreateJobModal}
            showJobDetailsModal={showJobDetailsModal}
            setShowJobDetailsModal={setShowJobDetailsModal}
            showEditJobModal={showEditJobModal}
            setShowEditJobModal={setShowEditJobModal}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            handleJobAction={handleJobAction}
            jobsData={jobsData}
            setJobsData={setJobsData}
          />
        )
      case "calendar":
        return (
          <CalendarIntegration
            showScheduleInterviewModal={showScheduleInterviewModal}
            setShowScheduleInterviewModal={setShowScheduleInterviewModal}
            showEventDetailsModal={showEventDetailsModal}
            setShowEventDetailsModal={setShowEventDetailsModal}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            calendarView={calendarView}
            setCalendarView={setCalendarView}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            calendarFilter={calendarFilter}
            setCalendarFilter={setCalendarFilter}
            calendarEvents={calendarEvents}
            setCalendarEvents={setCalendarEvents}
          />
        )
      case "communications":
        return (
          <Communications />
        )
      case "documents":
        return (
          <Documents 
            onViewDocument={(docId) => {
              setDocumentId(docId)
              setShowDocumentModal(true)
            }}
          />
        )
      case "analytics":
        return (
          <Analytics />
        )
      case "automation":
        return (
          <Automation />
        )
      case "settings":
        return (
          <SettingsPanel
            activeSettingsTab={activeSettingsTab}
            setActiveSettingsTab={setActiveSettingsTab}
            showChangePasswordModal={showChangePasswordModal}
            setShowChangePasswordModal={setShowChangePasswordModal}
            showDeleteAccountModal={showDeleteAccountModal}
            setShowDeleteAccountModal={setShowDeleteAccountModal}
            showInviteTeamModal={showInviteTeamModal}
            setShowInviteTeamModal={setShowInviteTeamModal}
            profileData={profileData}
            setProfileData={setProfileData}
            notificationPrefs={notificationPrefs}
            setNotificationPrefs={setNotificationPrefs}
            securitySettings={securitySettings}
            setSecuritySettings={setSecuritySettings}
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
          />
        )
      default:
        return null
    }
  }

  return (
    <div
      ref={dashboardRef}
      className={`
        relative rounded-xl overflow-hidden border border-border/50 shadow-xl shadow-slate-900/20 bg-card/95 backdrop-blur-sm
        transition-all duration-500 w-full max-w-full
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ minHeight: '650px' }}
    >
      {/* Dashboard Header */}
      <DashboardHeader
        notifications={notifications}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        setNotifications={setNotifications}
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation - Hidden on mobile, shown via button */}
        <div className="hidden lg:block">
          <SidebarNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeSettingsTab={activeSettingsTab}
            setActiveSettingsTab={setActiveSettingsTab}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto min-w-0">
          <AnimatedElement animation="fade-in" delay={200}>
            {renderActiveTab()}
          </AnimatedElement>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CandidateDetailsModal 
        open={showCandidateModal} 
        candidate={selectedCandidate} 
        onClose={() => setShowCandidateModal(false)} 
        handleCandidateAction={handleCandidateAction}
        onViewCV={(candidateId) => {
          setCvCandidateId(candidateId)
          setShowCVModal(true)
        }}
      />
      <CandidateEmailModal 
        open={showEmailModal} 
        candidate={selectedCandidate} 
        onClose={() => setShowEmailModal(false)} 
        setNotifications={setNotifications}
      />
      <CandidateScheduleModal 
        open={showScheduleModal} 
        candidate={selectedCandidate} 
        onClose={() => setShowScheduleModal(false)} 
        setNotifications={setNotifications}
        onScheduleInterview={(event) => {
          setCalendarEvents(prev => {
            const eventDate = new Date(event.date)
            const day = eventDate.getDate()
            return {
              ...prev,
              [day]: [...(prev[day] || []), event]
            }
          })
          setNotifications(prev => [
            { id: Date.now(), type: "interview", message: `📅 Interview scheduled with ${event.candidate}`, time: "Just now", urgent: false },
            ...prev.slice(0, 4)
          ])
        }}
        onRedirectToCalendar={() => {
          setActiveTab("calendar")
          const eventDate = new Date()
          setSelectedDate(eventDate.getDate())
        }}
      />
      <CandidateMoreActionsModal 
        open={showMoreActionsModal} 
        candidate={selectedCandidate} 
        onClose={() => setShowMoreActionsModal(false)} 
        setNotifications={setNotifications}
      />
      <CreateJobModal open={showCreateJobModal} onClose={() => setShowCreateJobModal(false)} />
      <JobDetailsModal open={showJobDetailsModal} job={selectedJob} onClose={() => setShowJobDetailsModal(false)} />
      <EditJobModal open={showEditJobModal} job={selectedJob} onClose={() => setShowEditJobModal(false)} />
      <ScheduleInterviewModal 
        open={showScheduleInterviewModal} 
        onClose={() => setShowScheduleInterviewModal(false)}
        onScheduleInterview={(event) => {
          setCalendarEvents(prev => {
            const eventDate = new Date(event.date)
            const day = eventDate.getDate()
            return {
              ...prev,
              [day]: [...(prev[day] || []), event]
            }
          })
          setNotifications(prev => [
            { id: Date.now(), type: "interview", message: `📅 Interview scheduled with ${event.candidate}`, time: "Just now", urgent: false },
            ...prev.slice(0, 4)
          ])
        }}
        onRedirectToCalendar={() => {
          setActiveTab("calendar")
          const eventDate = new Date()
          setSelectedDate(eventDate.getDate())
        }}
      />
      <EventDetailsModal 
        open={showEventDetailsModal} 
        event={selectedEvent} 
        onClose={() => setShowEventDetailsModal(false)}
        onViewCV={(candidateId) => {
          setCvCandidateId(candidateId)
          setShowCVModal(true)
        }}
        onCancelInterview={(eventId) => {
          // Animate event removal by setting status to cancelled first
          setCalendarEvents(prev => {
            const updated = { ...prev }
            Object.keys(updated).forEach(day => {
              updated[day] = updated[day].map(e => 
                e.id === eventId ? { ...e, status: "cancelled" as const } : e
              )
            })
            return updated
          })
          
          // Remove event after animation completes
          setTimeout(() => {
            setCalendarEvents(prev => {
              const updated = { ...prev }
              Object.keys(updated).forEach(day => {
                updated[day] = updated[day].filter(e => e.id !== eventId)
              })
              return updated
            })
          }, 300) // Match animation duration
          
          if (selectedEvent) {
            setNotifications(prev => [
              { id: Date.now(), type: "system", message: `Interview with ${selectedEvent.candidate} cancelled`, time: "Just now", urgent: false },
              ...prev.slice(0, 4)
            ])
          }
        }}
      />
      <AddCandidateModal 
        open={showAddCandidateModal} 
        onClose={() => setShowAddCandidateModal(false)} 
        onAddCandidate={(candidate) => {
          console.log("Adding candidate:", candidate)
          setShowAddCandidateModal(false)
          setNotifications(prev => [
            { id: Date.now(), type: "application", message: `${candidate.name} added to candidates`, time: "Just now", urgent: false },
            ...prev
          ])
        }}
      />
      <ViewApplicantsModal 
        open={showViewApplicantsModal} 
        job={selectedJob} 
        onClose={() => setShowViewApplicantsModal(false)} 
        handleCandidateAction={handleCandidateAction}
      />
      <CVModal 
        open={showCVModal} 
        candidateId={cvCandidateId} 
        onClose={() => {
          setShowCVModal(false)
          setCvCandidateId(null)
        }} 
      />
      <DocumentModal 
        open={showDocumentModal} 
        documentId={documentId} 
        onClose={() => {
          setShowDocumentModal(false)
          setDocumentId(null)
        }}
        onViewCV={(candidateId) => {
          setShowDocumentModal(false)
          setDocumentId(null)
          setCvCandidateId(candidateId)
          setShowCVModal(true)
        }}
      />
    </div>
  )
} 





