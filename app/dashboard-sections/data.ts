import React from "react"
import { 
  Users, 
  Briefcase,
  Calendar,
  BarChart3
} from "lucide-react"
import type { 
  Notification, 
  Candidate, 
  Job, 
  CalendarEvent, 
  ProfileData, 
  NotificationPrefs, 
  SecuritySettings, 
  TeamMember,
  StatCard 
} from "./types"

export const initialNotifications: Notification[] = [
  { id: 1, type: "interview", message: "Interview with Alex Morgan in 30 min", time: "2 min ago", urgent: true },
  { id: 2, type: "application", message: "5 new applications received", time: "15 min ago", urgent: false },
  { id: 3, type: "goal", message: "Monthly hiring goal 85% complete", time: "1 hour ago", urgent: false }
]

export const initialCandidates: Candidate[] = [
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
    lastActivity: "2h ago",
    email: "oliver.smith@email.co.uk",
    phone: "+44 20 7946 0958",
    portfolio: "oliversmith.design"
  },
  { 
    id: "2",
    name: "Amelia Jones", 
    position: "Frontend Dev", 
    status: "screening", 
    match: "87%",
    avatar: "AJ",
    skills: ["React", "TypeScript", "Node.js"],
    experience: "3 years",
    location: "Manchester",
    lastActivity: "5h ago",
    email: "amelia.jones@email.co.uk",
    phone: "+44 161 850 1234"
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
    lastActivity: "1d ago",
    email: "harry.patel@email.co.uk",
    phone: "+44 121 285 5678"
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
    lastActivity: "3h ago",
    email: "sophie.williams@email.co.uk",
    phone: "+44 131 496 7890"
  }
]

export const initialJobsData: Job[] = [
  {
    id: "1",
    title: "Senior UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    salary: "£85,000 - £120,000",
    applicants: 48,
    posted: "2 weeks ago",
    status: "active",
    description: "We're looking for a Senior UX Designer to join our growing design team...",
    requirements: ["5+ years UX design experience", "Proficiency in Figma", "User research skills"],
    benefits: ["Health insurance", "Remote work", "Flexible hours", "Professional development"],
    priority: "high"
  },
  {
    id: "2", 
    title: "Frontend Developer",
    department: "Engineering",
    location: "London",
    type: "Full-time",
    level: "Mid-level",
    salary: "£75,000 - £95,000",
    applicants: 36,
    posted: "1 week ago",
    status: "active",
    description: "Join our frontend team to build amazing user experiences...",
    requirements: ["3+ years React experience", "TypeScript proficiency", "Modern CSS skills"],
    benefits: ["Health insurance", "Stock options", "Gym membership", "Catered meals"],
    priority: "high"
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "Manchester",
    type: "Full-time", 
    level: "Senior",
    salary: "£95,000 - £130,000",
    applicants: 24,
    posted: "3 days ago",
    status: "active",
    description: "Lead product strategy and execution for our core platform...",
    requirements: ["5+ years product management", "Technical background", "Analytics experience"],
    benefits: ["Health insurance", "Equity package", "Unlimited PTO", "Learning budget"],
    priority: "medium"
  },
  {
    id: "4",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    level: "Entry-level",
    salary: "$45,000 - $65,000",
    applicants: 18,
    posted: "1 day ago",
    status: "active",
    description: "Drive growth through creative marketing campaigns...",
    requirements: ["2+ years marketing experience", "Social media expertise", "Content creation skills"],
    benefits: ["Health insurance", "Remote work", "Performance bonuses", "Learning budget"],
    priority: "medium"
  }
]

export const initialCalendarEvents: Record<number, CalendarEvent[]> = {
  15: [
    {
      id: "1",
      candidate: "Alex Morgan",
      position: "UX Designer",
      time: "10:00 AM",
      duration: "45 min",
      type: "Technical",
      status: "confirmed",
      avatar: "AM",
      interviewer: "Sarah Wilson",
      meetingLink: "meet.google.com/xyz-abc-def",
      notes: "Review candidate's portfolio and previous work samples. Focus on UX design process and problem-solving approach."
    },
    {
      id: "2",
      candidate: "Jamie Chen",
      position: "Frontend Developer",
      time: "2:00 PM",
      duration: "30 min",
      type: "First Round",
      status: "confirmed",
      avatar: "JC",
      interviewer: "Sarah Wilson",
      meetingLink: "meet.google.com/abc-def-ghi"
    }
  ],
  16: [
    {
      id: "3",
      candidate: "Taylor Kim",
      position: "Product Manager",
      time: "11:00 AM",
      duration: "60 min",
      type: "Second Round",
      status: "pending",
      avatar: "TK",
      interviewer: "Sarah Wilson"
    }
  ],
  18: [
    {
      id: "4",
      candidate: "Casey Smith",
      position: "Data Analyst",
      time: "3:00 PM",
      duration: "45 min",
      type: "Final Round",
      status: "confirmed",
      avatar: "CS",
      interviewer: "Sarah Wilson"
    }
  ]
}

export const initialProfileData: ProfileData = {
  fullName: "Sarah Wilson",
  email: "sarah.wilson@inclusive.io",
  jobTitle: "Senior Recruitment Manager",
  department: "Human Resources",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  timezone: "Pacific Time (PT)",
  avatar: "SW",
  bio: "Experienced recruitment professional with 8+ years in talent acquisition and team building."
}

export const initialNotificationPrefs: NotificationPrefs = {
  newApplications: true,
  interviewReminders: true,
  statusUpdates: true,
  teamMentions: true,
  weeklyReports: false,
  marketingEmails: false,
  securityAlerts: true,
  systemUpdates: true
}

export const initialSecuritySettings: SecuritySettings = {
  twoFactorAuth: true,
  sessionTimeout: "4 hours",
  loginNotifications: true,
  deviceManagement: true
}

export const initialTeamMembers: TeamMember[] = [
  { id: 1, name: "Alex Morgan", role: "HR Coordinator", email: "alex.morgan@inclusive.io", avatar: "AM", status: "active", lastActive: "2 hours ago" },
  { id: 2, name: "Jamie Chen", role: "Recruitment Specialist", email: "jamie.chen@inclusive.io", avatar: "JC", status: "active", lastActive: "30 minutes ago" },
  { id: 3, name: "Taylor Kim", role: "Talent Acquisition Lead", email: "taylor.kim@inclusive.io", avatar: "TK", status: "away", lastActive: "1 day ago" },
  { id: 4, name: "Casey Smith", role: "HR Analyst", email: "casey.smith@inclusive.io", avatar: "CS", status: "active", lastActive: "5 minutes ago" }
]

export const getStatCards = (): StatCard[] => [
  {
    title: "Active Jobs",
    value: "24",
    change: "+3",
    trend: "up",
    icon: React.createElement(Briefcase, { className: "h-4 w-4 text-fuchsia-400" }),
    goal: 30,
    progress: 80,
    subtitle: "vs last month"
  },
  { 
    title: "Candidates", 
    value: "156", 
    change: "+12", 
    trend: "up",
    icon: React.createElement(Users, { className: "h-4 w-4 text-blue-400" }),
    goal: 200,
    progress: 78,
    subtitle: "in pipeline"
  },
  {
    title: "Interviews",
    value: "32",
    change: "+5",
    trend: "up",
    icon: React.createElement(Calendar, { className: "h-4 w-4 text-emerald-400" }),
    goal: 40,
    progress: 80,
    subtitle: "this week"
  },
  {
    title: "Time Saved",
    value: "48h",
    change: "+8h",
    trend: "up",
    icon: React.createElement(BarChart3, { className: "h-4 w-4 text-amber-400" }),
    goal: 60,
    progress: 80,
    subtitle: "automation"
  }
]

export const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Applications",
      data: [65, 78, 90, 85, 95, 88, 92, 87, 94, 89, 96, 91],
      borderColor: "rgb(168, 85, 247)",
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      tension: 0.4
    },
    {
      label: "Interviews",
      data: [45, 52, 60, 58, 65, 62, 68, 64, 70, 67, 72, 69],
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      tension: 0.4
    },
    {
      label: "Hires",
      data: [25, 30, 35, 32, 38, 35, 40, 37, 42, 39, 44, 41],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      tension: 0.4
    }
  ]
} 





