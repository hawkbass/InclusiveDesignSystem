export interface Notification {
  id: number
  type: "interview" | "application" | "goal" | "system"
  message: string
  time: string
  urgent: boolean
}

export interface Candidate {
  id: string
  name: string
  position: string
  status: "applied" | "screening" | "interview" | "offer" | "hired" | "rejected"
  match: string
  avatar: string
  skills: string[]
  experience: string
  location: string
  lastActivity: string
  email?: string
  phone?: string
  portfolio?: string
  resume?: string
}

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  level: string
  salary: string
  applicants: number
  posted: string
  status: "active" | "paused" | "closed" | "draft"
  description: string
  requirements: string[]
  benefits: string[]
  priority: "high" | "medium" | "low"
}

export interface CalendarEvent {
  id: string
  candidate: string
  position: string
  time: string
  duration: string
  type: string
  status: "confirmed" | "pending" | "cancelled"
  avatar: string
  interviewer?: string
  meetingLink?: string
  notes?: string
}

export interface ProfileData {
  fullName: string
  email: string
  jobTitle: string
  department: string
  phone: string
  location: string
  timezone: string
  avatar: string
  bio: string
}

export interface NotificationPrefs {
  newApplications: boolean
  interviewReminders: boolean
  statusUpdates: boolean
  teamMentions: boolean
  weeklyReports: boolean
  marketingEmails: boolean
  securityAlerts: boolean
  systemUpdates: boolean
}

export interface SecuritySettings {
  twoFactorAuth: boolean
  sessionTimeout: string
  loginNotifications: boolean
  deviceManagement: boolean
}

export interface TeamMember {
  id: number
  name: string
  role: string
  email: string
  avatar: string
  status: "active" | "away" | "offline"
  lastActive: string
}

export interface StatCard {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  goal: number
  progress: number
  subtitle: string
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string
    tension: number
  }[]
}

export type TabType = "dashboard" | "candidates" | "jobs" | "calendar" | "settings"
export type SettingsTabType = "profile" | "notifications" | "security" | "team"
export type ChartType = "line" | "area" | "bar"
export type TimePeriod = "7D" | "30D" | "90D" | "12M"
export type CalendarView = "month" | "week" | "day"

export interface DashboardState {
  activeTab: TabType
  isVisible: boolean
  hoverPoint: number | null
  chartType: ChartType
  timePeriod: TimePeriod
  notifications: Notification[]
  showNotifications: boolean
  selectedCandidates: Set<string>
  tableFilter: string
  candidateStageFilter: string
  candidateSearchTerm: string
  selectedCandidateIds: Set<string>
  showFilterDropdown: boolean
  showAddCandidateModal: boolean
  currentPage: number
  candidatesPerPage: number
  showCandidateModal: boolean
  showEmailModal: boolean
  showScheduleModal: boolean
  showMoreActionsModal: boolean
  selectedCandidate: Candidate | null
  showCreateJobModal: boolean
  showJobDetailsModal: boolean
  showEditJobModal: boolean
  selectedJob: Job | null
  jobFilter: string
  jobSearchTerm: string
  showScheduleInterviewModal: boolean
  showEventDetailsModal: boolean
  selectedEvent: CalendarEvent | null
  calendarView: CalendarView
  selectedDate: number
  calendarFilter: string
  activeSettingsTab: SettingsTabType
  showChangePasswordModal: boolean
  showDeleteAccountModal: boolean
  showInviteTeamModal: boolean
  profileData: ProfileData
  notificationPrefs: NotificationPrefs
  securitySettings: SecuritySettings
  teamMembers: TeamMember[]
  jobsData: Job[]
}

export interface DashboardActions {
  setActiveTab: (tab: TabType) => void
  setIsVisible: (visible: boolean) => void
  setHoverPoint: (point: number | null) => void
  setChartType: (type: ChartType) => void
  setTimePeriod: (period: TimePeriod) => void
  setNotifications: (notifications: Notification[]) => void
  setShowNotifications: (show: boolean) => void
  setSelectedCandidates: (candidates: Set<string>) => void
  setTableFilter: (filter: string) => void
  setCandidateStageFilter: (filter: string) => void
  setCandidateSearchTerm: (term: string) => void
  setSelectedCandidateIds: (ids: Set<string>) => void
  setShowFilterDropdown: (show: boolean) => void
  setShowAddCandidateModal: (show: boolean) => void
  setCurrentPage: (page: number) => void
  setShowCandidateModal: (show: boolean) => void
  setShowEmailModal: (show: boolean) => void
  setShowScheduleModal: (show: boolean) => void
  setShowMoreActionsModal: (show: boolean) => void
  setSelectedCandidate: (candidate: Candidate | null) => void
  setShowCreateJobModal: (show: boolean) => void
  setShowJobDetailsModal: (show: boolean) => void
  setShowEditJobModal: (show: boolean) => void
  setSelectedJob: (job: Job | null) => void
  setJobFilter: (filter: string) => void
  setJobSearchTerm: (term: string) => void
  setShowScheduleInterviewModal: (show: boolean) => void
  setShowEventDetailsModal: (show: boolean) => void
  setSelectedEvent: (event: CalendarEvent | null) => void
  setCalendarView: (view: CalendarView) => void
  setSelectedDate: (date: number) => void
  setCalendarFilter: (filter: string) => void
  setActiveSettingsTab: (tab: SettingsTabType) => void
  setShowChangePasswordModal: (show: boolean) => void
  setShowDeleteAccountModal: (show: boolean) => void
  setShowInviteTeamModal: (show: boolean) => void
  setProfileData: (data: ProfileData) => void
  setNotificationPrefs: (prefs: NotificationPrefs) => void
  setSecuritySettings: (settings: SecuritySettings) => void
  setTeamMembers: (members: TeamMember[]) => void
  setJobsData: (jobs: Job[]) => void
} 




