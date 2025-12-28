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
  cvUrl?: string
  applications?: string[]
  communications?: string[]
  documents?: string[]
  tags?: string[]
  rating?: number
  notes?: string[]
  source?: string
  referredBy?: string
  availability?: "immediate" | "2_weeks" | "1_month" | "3_months" | "custom"
  salaryExpectation?: string
  noticePeriod?: string
  linkedInUrl?: string
  githubUrl?: string
  portfolioUrl?: string
  createdAt?: string
  updatedAt?: string
  lastContactedAt?: string
  nextFollowUp?: string
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
  applications?: string[]
  views?: number
  uniqueViews?: number
  conversionRate?: number
  averageTimeToApply?: number
  hiringManager?: string
  recruiter?: string
  budget?: {
    min: number
    max: number
    currency: string
  }
  requirementsDetail?: {
    required: string[]
    preferred: string[]
  }
  benefitsDetail?: {
    standard: string[]
    premium: string[]
  }
  tags?: string[]
  internalNotes?: string[]
  publishedAt?: string
  expiresAt?: string
  autoClose?: boolean
  closeDate?: string
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
  date?: string
  applicationId?: string
  interviewType?: "phone" | "video" | "onsite" | "panel" | "technical" | "final"
  interviewers?: string[]
  location?: string
  dialInNumber?: string
  feedback?: InterviewFeedback[]
  reminders?: Reminder[]
  statusHistory?: EventStatus[]
  createdAt?: string
  updatedAt?: string
  isCancelling?: boolean
}

export interface Reminder {
  type: "email" | "sms" | "push"
  time: string
  sent: boolean
}

export interface EventStatus {
  status: "scheduled" | "confirmed" | "rescheduled" | "cancelled" | "completed" | "no_show"
  changedAt: string
  changedBy: string
  reason?: string
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

export type TabType = "dashboard" | "candidates" | "jobs" | "calendar" | "communications" | "documents" | "analytics" | "automation" | "settings"
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

// Application tracking
export interface Application {
  id: string
  candidateId: string
  jobId: string
  appliedDate: string
  status: "pending" | "reviewing" | "shortlisted" | "interview" | "offer" | "rejected" | "withdrawn"
  source: "linkedin" | "indeed" | "website" | "referral" | "agency" | "other"
  coverLetter?: string
  notes: string[]
  rating?: number
  tags: string[]
  stageHistory: ApplicationStage[]
  assignedTo?: string
  createdAt: string
  updatedAt: string
}

export interface ApplicationStage {
  stage: string
  enteredAt: string
  exitedAt?: string
  duration?: number
}

// Communication tracking
export interface Communication {
  id: string
  type: "email" | "sms" | "call" | "note" | "meeting"
  candidateId?: string
  jobId?: string
  userId: string
  subject?: string
  content: string
  direction: "inbound" | "outbound"
  status: "sent" | "delivered" | "read" | "failed"
  timestamp: string
  attachments?: string[]
  templateId?: string
}

// Email templates
export interface EmailTemplate {
  id: string
  name: string
  category: "interview" | "rejection" | "offer" | "follow-up" | "custom"
  subject: string
  body: string
  variables: string[]
  isDefault: boolean
  createdAt: string
  updatedAt: string
}

// Documents
export interface Document {
  id: string
  type: "cv" | "portfolio" | "cover-letter" | "certificate" | "other"
  candidateId?: string
  jobId?: string
  fileName: string
  fileSize: number
  mimeType: string
  url: string
  uploadedAt: string
  uploadedBy: string
}

// Interview feedback
export interface InterviewFeedback {
  id: string
  interviewId: string
  interviewerId: string
  candidateId: string
  jobId: string
  technicalScore: number
  culturalFitScore: number
  communicationScore: number
  overallScore: number
  strengths: string[]
  weaknesses: string[]
  recommendation: "strong_yes" | "yes" | "maybe" | "no" | "strong_no"
  notes: string
  submittedAt: string
}

// Analytics
export interface AnalyticsMetric {
  id: string
  name: string
  value: number
  change: number
  trend: "up" | "down" | "stable"
  period: "day" | "week" | "month" | "quarter" | "year"
  timestamp: string
}

// Workflow automation
export interface WorkflowRule {
  id: string
  name: string
  trigger: "application_received" | "status_changed" | "interview_scheduled" | "custom"
  conditions: WorkflowCondition[]
  actions: WorkflowAction[]
  isActive: boolean
  createdAt: string
}

export interface WorkflowCondition {
  field: string
  operator: "equals" | "contains" | "greater_than" | "less_than" | "in"
  value: any
}

export interface WorkflowAction {
  type: "send_email" | "change_status" | "assign_to" | "add_tag" | "create_task"
  params: Record<string, any>
} 





