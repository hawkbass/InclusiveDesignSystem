"use client"

import { useEffect, useRef, useState } from "react"
import { DashboardHeader } from "./dashboard-header"
import { SidebarNavigation } from "./sidebar-navigation"
import { DashboardOverview } from "./dashboard-overview"
import { CandidatesManagement } from "./candidates-management"
import { JobsManagement } from "./jobs-management"
import { CalendarIntegration } from "./calendar-integration"
import { SettingsPanel } from "./settings-panel"
import { AnimatedElement } from "../animations"
import { 
  initialNotifications, 
  initialCandidates, 
  initialJobsData, 
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

  // Jobs state
  const [showCreateJobModal, setShowCreateJobModal] = useState(false)
  const [showJobDetailsModal, setShowJobDetailsModal] = useState(false)
  const [showEditJobModal, setShowEditJobModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [jobFilter, setJobFilter] = useState("all")
  const [jobSearchTerm, setJobSearchTerm] = useState("")
  const [jobsData, setJobsData] = useState<Job[]>(initialJobsData)

  // Calendar state
  const [showScheduleInterviewModal, setShowScheduleInterviewModal] = useState(false)
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [calendarView, setCalendarView] = useState<"month" | "week" | "day">("month")
  const [selectedDate, setSelectedDate] = useState(15)
  const [calendarFilter, setCalendarFilter] = useState("all")

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
        // Handle view applicants
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
        // Handle more actions
        break
    }
  }

  const handleExportCandidates = () => {
    // Handle export functionality
    console.log("Exporting candidates...")
  }

  const handleAddCandidate = () => {
    setShowAddCandidateModal(true)
  }

  const handleFilterAction = (filterType: string) => {
    switch (filterType) {
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
          />
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
        relative rounded-xl overflow-hidden border border-slate-700/50 shadow-xl shadow-slate-900/20 bg-slate-900/95 backdrop-blur-sm
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
      <div className="flex">
        {/* Sidebar Navigation */}
        <SidebarNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeSettingsTab={activeSettingsTab}
          setActiveSettingsTab={setActiveSettingsTab}
        />

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatedElement animation="fade-in" delay={200}>
            {renderActiveTab()}
          </AnimatedElement>
        </div>
      </div>

      <CandidateDetailsModal 
        open={showCandidateModal} 
        candidate={selectedCandidate} 
        onClose={() => setShowCandidateModal(false)} 
        handleCandidateAction={handleCandidateAction}
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
      <ScheduleInterviewModal open={showScheduleInterviewModal} onClose={() => setShowScheduleInterviewModal(false)} />
      <EventDetailsModal open={showEventDetailsModal} event={selectedEvent} onClose={() => setShowEventDetailsModal(false)} />
    </div>
  )
} 





