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
  StatCard,
  Application,
  Communication,
  EmailTemplate,
  Document,
  WorkflowRule,
  AnalyticsMetric
} from "./types"

export const initialNotifications: Notification[] = [
  { id: 1, type: "interview", message: "Interview with Oliver Smith in 30 min", time: "2 min ago", urgent: true },
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
    portfolio: "oliversmith.design",
    cvUrl: "/cvs/1-oliver-smith-cv.pdf"
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
    lastActivity: "5h ago",
    email: "amelia.jones@email.co.uk",
    phone: "+44 161 850 1234",
    cvUrl: "/cvs/2-amelia-jones-cv.pdf"
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
    phone: "+44 121 285 5678",
    cvUrl: "/cvs/3-harry-patel-cv.pdf"
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
    phone: "+44 131 496 7890",
    cvUrl: "/cvs/4-sophie-williams-cv.pdf"
  },
  { 
    id: "5",
    name: "James Thompson", 
    position: "Backend Developer", 
    status: "screening", 
    match: "81%",
    avatar: "JT",
    skills: ["Python", "Django", "PostgreSQL"],
    experience: "6 years",
    location: "Bristol",
    lastActivity: "4h ago",
    email: "james.thompson@email.co.uk",
    phone: "+44 117 925 4567",
    cvUrl: "/cvs/5-james-thompson-cv.pdf"
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
    location: "Leeds",
    type: "Full-time",
    level: "Entry-level",
    salary: "£35,000 - £45,000",
    applicants: 18,
    posted: "1 day ago",
    status: "active",
    description: "Drive growth through creative marketing campaigns...",
    requirements: ["2+ years marketing experience", "Social media expertise", "Content creation skills"],
    benefits: ["Private healthcare", "Remote work", "Performance bonuses", "Learning budget"],
    priority: "medium"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bristol",
    type: "Full-time",
    level: "Senior",
    salary: "£80,000 - £100,000",
    applicants: 22,
    posted: "5 days ago",
    status: "active",
    description: "Lead our cloud infrastructure and deployment pipelines...",
    requirements: ["5+ years DevOps experience", "AWS/Azure expertise", "Kubernetes knowledge"],
    benefits: ["Private healthcare", "25 days holiday + bank holidays", "Pension scheme", "Cycle to work"],
    priority: "high"
  }
]

export const initialCalendarEvents: Record<number, CalendarEvent[]> = {
  15: [
    {
      id: "1",
      candidate: "Oliver Smith",
      position: "UX Designer",
      time: "10:00",
      duration: "45 min",
      type: "Technical",
      status: "confirmed",
      avatar: "OS",
      interviewer: "Emma Richardson",
      meetingLink: "meet.google.com/xyz-abc-def",
      notes: "Review candidate's portfolio and previous work samples. Focus on UX design process and problem-solving approach."
    },
    {
      id: "2",
      candidate: "Amelia Jones",
      position: "Frontend Developer",
      time: "14:00",
      duration: "30 min",
      type: "First Round",
      status: "confirmed",
      avatar: "AJ",
      interviewer: "Emma Richardson",
      meetingLink: "meet.google.com/abc-def-ghi"
    }
  ],
  16: [
    {
      id: "3",
      candidate: "Harry Patel",
      position: "Product Manager",
      time: "11:00",
      duration: "60 min",
      type: "Second Round",
      status: "pending",
      avatar: "HP",
      interviewer: "Emma Richardson"
    }
  ],
  18: [
    {
      id: "4",
      candidate: "Sophie Williams",
      position: "Data Analyst",
      time: "15:00",
      duration: "45 min",
      type: "Final Round",
      status: "confirmed",
      avatar: "SW",
      interviewer: "Emma Richardson"
    }
  ]
}

export const initialProfileData: ProfileData = {
  fullName: "Emma Richardson",
  email: "emma.richardson@inclusive.io",
  jobTitle: "Senior Recruitment Manager",
  department: "Talent Acquisition",
  phone: "+44 20 7946 0123",
  location: "London, UK",
  timezone: "GMT (London)",
  avatar: "ER",
  bio: "Experienced recruitment professional with 8+ years in talent acquisition and team building across the UK."
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
  { id: 1, name: "Charlotte Davies", role: "HR Coordinator", email: "charlotte.davies@inclusive.io", avatar: "CD", status: "active", lastActive: "2 hours ago" },
  { id: 2, name: "William Hughes", role: "Recruitment Specialist", email: "william.hughes@inclusive.io", avatar: "WH", status: "active", lastActive: "30 minutes ago" },
  { id: 3, name: "Olivia Bennett", role: "Talent Acquisition Lead", email: "olivia.bennett@inclusive.io", avatar: "OB", status: "away", lastActive: "1 day ago" },
  { id: 4, name: "George Taylor", role: "HR Analyst", email: "george.taylor@inclusive.io", avatar: "GT", status: "active", lastActive: "5 minutes ago" }
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

// Expanded candidate data (50+ candidates)
const additionalCandidates: Candidate[] = [
  { id: "6", name: "Emily Brown", position: "UI Designer", status: "screening", match: "89%", avatar: "EB", skills: ["Figma", "Sketch", "Adobe XD"], experience: "4 years", location: "Cambridge", lastActivity: "1h ago", email: "emily.brown@email.co.uk", phone: "+44 1223 456789", cvUrl: "/cvs/6-emily-brown-cv.pdf", source: "linkedin", tags: ["Design", "UI"], rating: 4, availability: "2_weeks" },
  { id: "7", name: "Michael Chen", position: "Full Stack Developer", status: "interview", match: "91%", avatar: "MC", skills: ["React", "Node.js", "MongoDB"], experience: "6 years", location: "Oxford", lastActivity: "30m ago", email: "michael.chen@email.co.uk", phone: "+44 1865 123456", cvUrl: "/cvs/7-michael-chen-cv.pdf", source: "website", tags: ["Full Stack", "Senior"], rating: 5, availability: "immediate" },
  { id: "8", name: "Sarah Taylor", position: "Product Designer", status: "applied", match: "83%", avatar: "ST", skills: ["Figma", "Prototyping", "User Testing"], experience: "5 years", location: "Brighton", lastActivity: "3h ago", email: "sarah.taylor@email.co.uk", phone: "+44 1273 789012", cvUrl: "/cvs/8-sarah-taylor-cv.pdf", source: "indeed", tags: ["Product", "Design"], rating: 4, availability: "1_month" },
  { id: "9", name: "David Wilson", position: "Backend Engineer", status: "screening", match: "86%", avatar: "DW", skills: ["Python", "FastAPI", "Docker"], experience: "7 years", location: "Glasgow", lastActivity: "2h ago", email: "david.wilson@email.co.uk", phone: "+44 141 234567", cvUrl: "/cvs/9-david-wilson-cv.pdf", source: "referral", tags: ["Backend", "Senior"], rating: 4, availability: "2_weeks" },
  { id: "10", name: "Lisa Anderson", position: "UX Researcher", status: "interview", match: "88%", avatar: "LA", skills: ["User Research", "Analytics", "Figma"], experience: "4 years", location: "Leeds", lastActivity: "45m ago", email: "lisa.anderson@email.co.uk", phone: "+44 113 345678", cvUrl: "/cvs/10-lisa-anderson-cv.pdf", source: "linkedin", tags: ["Research", "UX"], rating: 5, availability: "immediate" },
  { id: "11", name: "Robert Martinez", position: "DevOps Engineer", status: "applied", match: "79%", avatar: "RM", skills: ["AWS", "Kubernetes", "Terraform"], experience: "5 years", location: "Cardiff", lastActivity: "4h ago", email: "robert.martinez@email.co.uk", phone: "+44 29 2012 3456", cvUrl: "/cvs/11-robert-martinez-cv.pdf", source: "website", tags: ["DevOps", "Cloud"], rating: 3, availability: "1_month" },
  { id: "12", name: "Jennifer Lee", position: "Frontend Developer", status: "screening", match: "85%", avatar: "JL", skills: ["Vue.js", "TypeScript", "CSS"], experience: "3 years", location: "Newcastle", lastActivity: "1h ago", email: "jennifer.lee@email.co.uk", phone: "+44 191 234567", cvUrl: "/cvs/12-jennifer-lee-cv.pdf", source: "indeed", tags: ["Frontend", "Mid-level"], rating: 4, availability: "2_weeks" },
  { id: "13", name: "Christopher White", position: "Data Engineer", status: "interview", match: "90%", avatar: "CW", skills: ["Python", "Spark", "Airflow"], experience: "6 years", location: "Liverpool", lastActivity: "20m ago", email: "christopher.white@email.co.uk", phone: "+44 151 345678", cvUrl: "/cvs/13-christopher-white-cv.pdf", source: "linkedin", tags: ["Data", "Engineering"], rating: 5, availability: "immediate" },
  { id: "14", name: "Amanda Green", position: "Marketing Manager", status: "applied", match: "76%", avatar: "AG", skills: ["Digital Marketing", "SEO", "Analytics"], experience: "5 years", location: "Sheffield", lastActivity: "5h ago", email: "amanda.green@email.co.uk", phone: "+44 114 456789", cvUrl: "/cvs/14-amanda-green-cv.pdf", source: "website", tags: ["Marketing", "Management"], rating: 3, availability: "3_months" },
  { id: "15", name: "Daniel Harris", position: "Mobile Developer", status: "screening", match: "84%", avatar: "DH", skills: ["React Native", "iOS", "Android"], experience: "4 years", location: "Nottingham", lastActivity: "2h ago", email: "daniel.harris@email.co.uk", phone: "+44 115 567890", cvUrl: "/cvs/15-daniel-harris-cv.pdf", source: "indeed", tags: ["Mobile", "Cross-platform"], rating: 4, availability: "1_month" },
  { id: "16", name: "Rachel Clark", position: "QA Engineer", status: "interview", match: "87%", avatar: "RC", skills: ["Selenium", "Jest", "Cypress"], experience: "5 years", location: "Southampton", lastActivity: "1h ago", email: "rachel.clark@email.co.uk", phone: "+44 23 678901", cvUrl: "/cvs/16-rachel-clark-cv.pdf", source: "referral", tags: ["QA", "Testing"], rating: 4, availability: "2_weeks" },
  { id: "17", name: "Thomas Lewis", position: "Security Engineer", status: "applied", match: "82%", avatar: "TL", skills: ["Penetration Testing", "Security Audits", "Compliance"], experience: "6 years", location: "Portsmouth", lastActivity: "3h ago", email: "thomas.lewis@email.co.uk", phone: "+44 23 789012", cvUrl: "/cvs/17-thomas-lewis-cv.pdf", source: "linkedin", tags: ["Security", "Compliance"], rating: 4, availability: "1_month" },
  { id: "18", name: "Nicole Walker", position: "Content Designer", status: "screening", match: "80%", avatar: "NW", skills: ["Content Strategy", "UX Writing", "Research"], experience: "4 years", location: "York", lastActivity: "2h ago", email: "nicole.walker@email.co.uk", phone: "+44 1904 123456", cvUrl: "/cvs/18-nicole-walker-cv.pdf", source: "website", tags: ["Content", "Design"], rating: 3, availability: "2_weeks" },
  { id: "19", name: "Matthew Hall", position: "Cloud Architect", status: "interview", match: "93%", avatar: "MH", skills: ["AWS", "Azure", "Architecture"], experience: "8 years", location: "Reading", lastActivity: "30m ago", email: "matthew.hall@email.co.uk", phone: "+44 118 234567", cvUrl: "/cvs/19-matthew-hall-cv.pdf", source: "linkedin", tags: ["Cloud", "Architecture"], rating: 5, availability: "immediate" },
  { id: "20", name: "Lauren Allen", position: "Business Analyst", status: "applied", match: "78%", avatar: "LA", skills: ["Requirements", "Analytics", "SQL"], experience: "5 years", location: "Coventry", lastActivity: "4h ago", email: "lauren.allen@email.co.uk", phone: "+44 24 345678", cvUrl: "/cvs/20-lauren-allen-cv.pdf", source: "indeed", tags: ["Business", "Analysis"], rating: 3, availability: "1_month" },
  { id: "21", name: "Kevin Moore", position: "Systems Architect", status: "screening", match: "88%", avatar: "KM", skills: ["Architecture", "Microservices", "AWS"], experience: "9 years", location: "Bath", lastActivity: "1h ago", email: "kevin.moore@email.co.uk", phone: "+44 1225 123456", cvUrl: "/cvs/21-kevin-moore-cv.pdf", source: "linkedin", tags: ["Architecture", "Senior"], rating: 5, availability: "2_weeks" },
  { id: "22", name: "Michelle King", position: "UX Writer", status: "interview", match: "85%", avatar: "MK", skills: ["Content Strategy", "UX Writing", "Research"], experience: "4 years", location: "Norwich", lastActivity: "30m ago", email: "michelle.king@email.co.uk", phone: "+44 1603 234567", cvUrl: "/cvs/22-michelle-king-cv.pdf", source: "website", tags: ["Content", "UX"], rating: 4, availability: "immediate" },
  { id: "23", name: "Ryan Scott", position: "Machine Learning Engineer", status: "applied", match: "82%", avatar: "RS", skills: ["Python", "TensorFlow", "MLOps"], experience: "5 years", location: "Exeter", lastActivity: "3h ago", email: "ryan.scott@email.co.uk", phone: "+44 1392 345678", cvUrl: "/cvs/23-ryan-scott-cv.pdf", source: "indeed", tags: ["ML", "AI"], rating: 4, availability: "1_month" },
  { id: "24", name: "Jessica Adams", position: "Scrum Master", status: "screening", match: "79%", avatar: "JA", skills: ["Agile", "Scrum", "Coaching"], experience: "6 years", location: "Plymouth", lastActivity: "2h ago", email: "jessica.adams@email.co.uk", phone: "+44 1752 456789", cvUrl: "/cvs/24-jessica-adams-cv.pdf", source: "referral", tags: ["Agile", "Management"], rating: 3, availability: "2_weeks" },
  { id: "25", name: "Andrew Baker", position: "iOS Developer", status: "interview", match: "86%", avatar: "AB", skills: ["Swift", "UIKit", "SwiftUI"], experience: "5 years", location: "Canterbury", lastActivity: "45m ago", email: "andrew.baker@email.co.uk", phone: "+44 1227 567890", cvUrl: "/cvs/25-andrew-baker-cv.pdf", source: "linkedin", tags: ["iOS", "Mobile"], rating: 4, availability: "immediate" },
  { id: "26", name: "Stephanie Young", position: "Brand Designer", status: "applied", match: "81%", avatar: "SY", skills: ["Branding", "Illustration", "Adobe Creative Suite"], experience: "4 years", location: "Durham", lastActivity: "4h ago", email: "stephanie.young@email.co.uk", phone: "+44 191 678901", cvUrl: "/cvs/26-stephanie-young-cv.pdf", source: "website", tags: ["Brand", "Design"], rating: 4, availability: "1_month" },
  { id: "27", name: "Benjamin Wright", position: "Database Administrator", status: "screening", match: "84%", avatar: "BW", skills: ["PostgreSQL", "MySQL", "MongoDB"], experience: "7 years", location: "Lancaster", lastActivity: "1h ago", email: "benjamin.wright@email.co.uk", phone: "+44 1524 789012", cvUrl: "/cvs/27-benjamin-wright-cv.pdf", source: "indeed", tags: ["Database", "DBA"], rating: 4, availability: "2_weeks" },
  { id: "28", name: "Victoria Hill", position: "Growth Marketing Manager", status: "interview", match: "87%", avatar: "VH", skills: ["Growth Hacking", "Analytics", "A/B Testing"], experience: "5 years", location: "Stirling", lastActivity: "20m ago", email: "victoria.hill@email.co.uk", phone: "+44 1786 890123", cvUrl: "/cvs/28-victoria-hill-cv.pdf", source: "linkedin", tags: ["Growth", "Marketing"], rating: 5, availability: "immediate" },
  { id: "29", name: "Nathan Cooper", position: "Blockchain Developer", status: "applied", match: "75%", avatar: "NC", skills: ["Solidity", "Ethereum", "Web3"], experience: "3 years", location: "Aberdeen", lastActivity: "5h ago", email: "nathan.cooper@email.co.uk", phone: "+44 1224 901234", cvUrl: "/cvs/29-nathan-cooper-cv.pdf", source: "website", tags: ["Blockchain", "Web3"], rating: 3, availability: "3_months" },
  { id: "30", name: "Grace Mitchell", position: "Technical Writer", status: "screening", match: "80%", avatar: "GM", skills: ["Technical Writing", "Documentation", "API Docs"], experience: "4 years", location: "Inverness", lastActivity: "2h ago", email: "grace.mitchell@email.co.uk", phone: "+44 1463 012345", cvUrl: "/cvs/30-grace-mitchell-cv.pdf", source: "indeed", tags: ["Writing", "Documentation"], rating: 3, availability: "1_month" },
  { id: "31", name: "Peter Roberts", position: "Cloud Engineer", status: "interview", match: "89%", avatar: "PR", skills: ["AWS", "Azure", "Terraform"], experience: "6 years", location: "Swansea", lastActivity: "1h ago", email: "peter.roberts@email.co.uk", phone: "+44 1792 123456", cvUrl: "/cvs/31-peter-roberts-cv.pdf", source: "linkedin", tags: ["Cloud", "Infrastructure"], rating: 5, availability: "immediate" },
  { id: "32", name: "Hannah Turner", position: "Product Manager", status: "applied", match: "83%", avatar: "HT", skills: ["Product Strategy", "Roadmapping", "Analytics"], experience: "5 years", location: "Derby", lastActivity: "4h ago", email: "hannah.turner@email.co.uk", phone: "+44 1332 234567", cvUrl: "/cvs/32-hannah-turner-cv.pdf", source: "website", tags: ["Product", "Strategy"], rating: 4, availability: "1_month" },
  { id: "33", name: "Samuel Phillips", position: "Full Stack Developer", status: "screening", match: "87%", avatar: "SP", skills: ["React", "Node.js", "PostgreSQL"], experience: "5 years", location: "Worcester", lastActivity: "2h ago", email: "samuel.phillips@email.co.uk", phone: "+44 1905 345678", cvUrl: "/cvs/33-samuel-phillips-cv.pdf", source: "indeed", tags: ["Full Stack", "Senior"], rating: 4, availability: "2_weeks" },
  { id: "34", name: "Emma Davis", position: "UX Designer", status: "interview", match: "91%", avatar: "ED", skills: ["Figma", "User Research", "Prototyping"], experience: "6 years", location: "Lincoln", lastActivity: "30m ago", email: "emma.davis@email.co.uk", phone: "+44 1522 456789", cvUrl: "/cvs/34-emma-davis-cv.pdf", source: "linkedin", tags: ["UX", "Design"], rating: 5, availability: "immediate" },
  { id: "35", name: "Joseph Wood", position: "Backend Developer", status: "applied", match: "79%", avatar: "JW", skills: ["Java", "Spring Boot", "Microservices"], experience: "4 years", location: "Peterborough", lastActivity: "5h ago", email: "joseph.wood@email.co.uk", phone: "+44 1733 567890", cvUrl: "/cvs/35-joseph-wood-cv.pdf", source: "website", tags: ["Backend", "Java"], rating: 3, availability: "1_month" },
  { id: "36", name: "Charlotte Green", position: "Marketing Analyst", status: "screening", match: "82%", avatar: "CG", skills: ["Analytics", "SEO", "Data Analysis"], experience: "4 years", location: "Norwich", lastActivity: "1h ago", email: "charlotte.green@email.co.uk", phone: "+44 1603 678901", cvUrl: "/cvs/36-charlotte-green-cv.pdf", source: "indeed", tags: ["Marketing", "Analytics"], rating: 4, availability: "2_weeks" },
  { id: "37", name: "Alexander Brown", position: "DevOps Engineer", status: "interview", match: "88%", avatar: "AB", skills: ["Docker", "Kubernetes", "CI/CD"], experience: "6 years", location: "Ipswich", lastActivity: "45m ago", email: "alexander.brown@email.co.uk", phone: "+44 1473 789012", cvUrl: "/cvs/37-alexander-brown-cv.pdf", source: "linkedin", tags: ["DevOps", "Cloud"], rating: 5, availability: "immediate" },
  { id: "38", name: "Isabella White", position: "Content Manager", status: "applied", match: "77%", avatar: "IW", skills: ["Content Strategy", "SEO", "CMS"], experience: "5 years", location: "Colchester", lastActivity: "3h ago", email: "isabella.white@email.co.uk", phone: "+44 1206 890123", cvUrl: "/cvs/38-isabella-white-cv.pdf", source: "website", tags: ["Content", "Marketing"], rating: 3, availability: "1_month" },
  { id: "39", name: "William Jackson", position: "Systems Administrator", status: "screening", match: "81%", avatar: "WJ", skills: ["Linux", "Networking", "Security"], experience: "7 years", location: "Chelmsford", lastActivity: "2h ago", email: "william.jackson@email.co.uk", phone: "+44 1245 901234", cvUrl: "/cvs/39-william-jackson-cv.pdf", source: "referral", tags: ["Systems", "Admin"], rating: 4, availability: "2_weeks" },
  { id: "40", name: "Mia Harris", position: "Frontend Architect", status: "interview", match: "92%", avatar: "MH", skills: ["React", "TypeScript", "Architecture"], experience: "8 years", location: "Cambridge", lastActivity: "20m ago", email: "mia.harris@email.co.uk", phone: "+44 1223 012345", cvUrl: "/cvs/40-mia-harris-cv.pdf", source: "linkedin", tags: ["Frontend", "Architecture"], rating: 5, availability: "immediate" },
  { id: "41", name: "Ethan Turner", position: "Backend Developer", status: "screening", match: "85%", avatar: "ET", skills: ["Node.js", "MongoDB", "Express"], experience: "4 years", location: "Norwich", lastActivity: "1h ago", email: "ethan.turner@email.co.uk", phone: "+44 1603 123456", cvUrl: "/cvs/41-ethan-turner-cv.pdf", source: "website", tags: ["Backend", "Node.js"], rating: 4, availability: "2_weeks" },
  { id: "42", name: "Zoe Parker", position: "UI Designer", status: "applied", match: "80%", avatar: "ZP", skills: ["Figma", "Sketch", "Prototyping"], experience: "3 years", location: "Plymouth", lastActivity: "3h ago", email: "zoe.parker@email.co.uk", phone: "+44 1752 234567", cvUrl: "/cvs/42-zoe-parker-cv.pdf", source: "indeed", tags: ["UI", "Design"], rating: 3, availability: "1_month" },
  { id: "43", name: "Lucas Morgan", position: "Full Stack Developer", status: "interview", match: "89%", avatar: "LM", skills: ["React", "Node.js", "PostgreSQL"], experience: "6 years", location: "Southampton", lastActivity: "45m ago", email: "lucas.morgan@email.co.uk", phone: "+44 23 345678", cvUrl: "/cvs/43-lucas-morgan-cv.pdf", source: "linkedin", tags: ["Full Stack", "Senior"], rating: 5, availability: "immediate" },
  { id: "44", name: "Chloe Reed", position: "Product Designer", status: "screening", match: "83%", avatar: "CR", skills: ["Figma", "User Research", "Prototyping"], experience: "5 years", location: "Portsmouth", lastActivity: "2h ago", email: "chloe.reed@email.co.uk", phone: "+44 23 456789", cvUrl: "/cvs/44-chloe-reed-cv.pdf", source: "website", tags: ["Product", "Design"], rating: 4, availability: "2_weeks" },
  { id: "45", name: "Noah Bailey", position: "DevOps Engineer", status: "applied", match: "81%", avatar: "NB", skills: ["Docker", "Kubernetes", "AWS"], experience: "5 years", location: "York", lastActivity: "4h ago", email: "noah.bailey@email.co.uk", phone: "+44 1904 567890", cvUrl: "/cvs/45-noah-bailey-cv.pdf", source: "indeed", tags: ["DevOps", "Cloud"], rating: 4, availability: "1_month" },
  { id: "46", name: "Isabella Cooper", position: "UX Researcher", status: "interview", match: "87%", avatar: "IC", skills: ["User Research", "Analytics", "Testing"], experience: "4 years", location: "Reading", lastActivity: "30m ago", email: "isabella.cooper@email.co.uk", phone: "+44 118 678901", cvUrl: "/cvs/46-isabella-cooper-cv.pdf", source: "linkedin", tags: ["Research", "UX"], rating: 5, availability: "immediate" },
  { id: "47", name: "Mason Richardson", position: "Backend Engineer", status: "screening", match: "84%", avatar: "MR", skills: ["Python", "Django", "PostgreSQL"], experience: "6 years", location: "Coventry", lastActivity: "1h ago", email: "mason.richardson@email.co.uk", phone: "+44 24 789012", cvUrl: "/cvs/47-mason-richardson-cv.pdf", source: "referral", tags: ["Backend", "Python"], rating: 4, availability: "2_weeks" },
  { id: "48", name: "Ava Campbell", position: "Frontend Developer", status: "applied", match: "79%", avatar: "AC", skills: ["Vue.js", "JavaScript", "CSS"], experience: "3 years", location: "Stirling", lastActivity: "5h ago", email: "ava.campbell@email.co.uk", phone: "+44 1786 890123", cvUrl: "/cvs/48-ava-campbell-cv.pdf", source: "website", tags: ["Frontend", "Vue"], rating: 3, availability: "1_month" },
  { id: "49", name: "Logan Stewart", position: "Data Engineer", status: "interview", match: "91%", avatar: "LS", skills: ["Python", "Spark", "Airflow"], experience: "7 years", location: "Aberdeen", lastActivity: "20m ago", email: "logan.stewart@email.co.uk", phone: "+44 1224 901234", cvUrl: "/cvs/49-logan-stewart-cv.pdf", source: "linkedin", tags: ["Data", "Engineering"], rating: 5, availability: "immediate" },
  { id: "50", name: "Harper Murphy", position: "Content Strategist", status: "screening", match: "82%", avatar: "HM", skills: ["Content Strategy", "SEO", "Analytics"], experience: "4 years", location: "Inverness", lastActivity: "2h ago", email: "harper.murphy@email.co.uk", phone: "+44 1463 012345", cvUrl: "/cvs/50-harper-murphy-cv.pdf", source: "indeed", tags: ["Content", "Strategy"], rating: 4, availability: "2_weeks" }
]

// Merge additional candidates with existing ones
export const expandedCandidates: Candidate[] = [...initialCandidates, ...additionalCandidates]

// Expanded jobs data (30+ jobs)
const additionalJobs: Job[] = [
  { id: "6", title: "Senior Product Designer", department: "Design", location: "London", type: "Full-time", level: "Senior", salary: "£90,000 - £125,000", applicants: 32, posted: "1 week ago", status: "active", description: "Lead product design initiatives...", requirements: ["6+ years product design", "Figma expertise", "User research"], benefits: ["Health insurance", "Equity", "Remote"], priority: "high", views: 450, uniqueViews: 380, conversionRate: 8.4, hiringManager: "Emma Richardson", recruiter: "Charlotte Davies" },
  { id: "7", title: "React Developer", department: "Engineering", location: "Remote", type: "Full-time", level: "Mid-level", salary: "£70,000 - £90,000", applicants: 28, posted: "5 days ago", status: "active", description: "Build modern React applications...", requirements: ["3+ years React", "TypeScript", "Testing"], benefits: ["Remote", "Health", "Learning"], priority: "high", views: 520, uniqueViews: 440, conversionRate: 6.4, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "8", title: "Data Scientist", department: "Data", location: "Manchester", type: "Full-time", level: "Senior", salary: "£85,000 - £110,000", applicants: 19, posted: "2 weeks ago", status: "active", description: "Advanced analytics and ML models...", requirements: ["5+ years data science", "Python", "ML frameworks"], benefits: ["Health", "Equity", "Remote"], priority: "medium", views: 380, uniqueViews: 320, conversionRate: 5.9, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" },
  { id: "9", title: "Content Marketing Manager", department: "Marketing", location: "Leeds", type: "Full-time", level: "Mid-level", salary: "£50,000 - £65,000", applicants: 15, posted: "3 days ago", status: "active", description: "Content strategy and execution...", requirements: ["4+ years marketing", "Content creation", "SEO"], benefits: ["Health", "Remote", "Budget"], priority: "medium", views: 290, uniqueViews: 250, conversionRate: 6.0, hiringManager: "Emma Richardson", recruiter: "George Taylor" },
  { id: "10", title: "Site Reliability Engineer", department: "Engineering", location: "Bristol", type: "Full-time", level: "Senior", salary: "£90,000 - £115,000", applicants: 14, posted: "1 week ago", status: "active", description: "Ensure system reliability...", requirements: ["6+ years SRE", "Kubernetes", "Monitoring"], benefits: ["Health", "Equity", "Remote"], priority: "high", views: 340, uniqueViews: 290, conversionRate: 4.8, hiringManager: "Emma Richardson", recruiter: "Charlotte Davies" },
  { id: "11", title: "Senior Backend Developer", department: "Engineering", location: "Remote", type: "Full-time", level: "Senior", salary: "£85,000 - £110,000", applicants: 26, posted: "4 days ago", status: "active", description: "Build scalable backend systems...", requirements: ["5+ years backend", "Node.js/Python", "Microservices"], benefits: ["Remote", "Health", "Equity"], priority: "high", views: 480, uniqueViews: 410, conversionRate: 6.3, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "12", title: "UI/UX Designer", department: "Design", location: "London", type: "Full-time", level: "Mid-level", salary: "£60,000 - £80,000", applicants: 22, posted: "6 days ago", status: "active", description: "Create beautiful user interfaces...", requirements: ["3+ years UI/UX", "Figma", "Prototyping"], benefits: ["Health", "Remote", "Learning"], priority: "medium", views: 360, uniqueViews: 310, conversionRate: 7.1, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" },
  { id: "13", title: "Data Analyst", department: "Data", location: "Manchester", type: "Full-time", level: "Mid-level", salary: "£45,000 - £60,000", applicants: 18, posted: "1 week ago", status: "active", description: "Analyze business metrics...", requirements: ["3+ years analytics", "SQL", "Python"], benefits: ["Health", "Remote", "Budget"], priority: "medium", views: 320, uniqueViews: 280, conversionRate: 6.4, hiringManager: "Emma Richardson", recruiter: "George Taylor" },
  { id: "14", title: "Customer Success Manager", department: "Operations", location: "Leeds", type: "Full-time", level: "Mid-level", salary: "£40,000 - £55,000", applicants: 12, posted: "2 days ago", status: "active", description: "Ensure customer satisfaction...", requirements: ["3+ years CS", "Communication", "Analytics"], benefits: ["Health", "Remote", "Commission"], priority: "medium", views: 280, uniqueViews: 240, conversionRate: 5.0, hiringManager: "Emma Richardson", recruiter: "Charlotte Davies" },
  { id: "15", title: "Security Analyst", department: "Security", location: "Birmingham", type: "Full-time", level: "Mid-level", salary: "£55,000 - £70,000", applicants: 16, posted: "3 days ago", status: "active", description: "Protect our systems...", requirements: ["4+ years security", "Compliance", "Auditing"], benefits: ["Health", "Remote", "Training"], priority: "high", views: 300, uniqueViews: 260, conversionRate: 6.2, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "16", title: "Sales Engineer", department: "Sales", location: "Remote", type: "Full-time", level: "Senior", salary: "£70,000 - £90,000", applicants: 20, posted: "5 days ago", status: "active", description: "Technical sales support...", requirements: ["5+ years sales engineering", "Technical background", "Communication"], benefits: ["Commission", "Health", "Remote"], priority: "high", views: 400, uniqueViews: 350, conversionRate: 5.7, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" },
  { id: "17", title: "HR Business Partner", department: "HR", location: "London", type: "Full-time", level: "Senior", salary: "£65,000 - £85,000", applicants: 14, posted: "1 week ago", status: "active", description: "Strategic HR support...", requirements: ["6+ years HR", "Business acumen", "Employee relations"], benefits: ["Health", "Pension", "Remote"], priority: "medium", views: 290, uniqueViews: 250, conversionRate: 5.6, hiringManager: "Emma Richardson", recruiter: "George Taylor" },
  { id: "18", title: "Frontend Architect", department: "Engineering", location: "Remote", type: "Full-time", level: "Senior", salary: "£95,000 - £125,000", applicants: 11, posted: "2 weeks ago", status: "active", description: "Lead frontend architecture...", requirements: ["8+ years frontend", "Architecture", "Leadership"], benefits: ["Equity", "Health", "Remote"], priority: "high", views: 350, uniqueViews: 300, conversionRate: 3.7, hiringManager: "Emma Richardson", recruiter: "Charlotte Davies" },
  { id: "19", title: "Content Strategist", department: "Marketing", location: "Remote", type: "Full-time", level: "Mid-level", salary: "£45,000 - £60,000", applicants: 17, posted: "4 days ago", status: "active", description: "Develop content strategy...", requirements: ["4+ years content", "Strategy", "SEO"], benefits: ["Health", "Remote", "Budget"], priority: "medium", views: 310, uniqueViews: 270, conversionRate: 6.3, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "20", title: "QA Automation Engineer", department: "Engineering", location: "Bristol", type: "Full-time", level: "Mid-level", salary: "£50,000 - £65,000", applicants: 19, posted: "3 days ago", status: "active", description: "Automate testing processes...", requirements: ["4+ years QA", "Automation", "Selenium/Cypress"], benefits: ["Health", "Remote", "Learning"], priority: "medium", views: 330, uniqueViews: 290, conversionRate: 6.6, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" },
  { id: "21", title: "Senior Data Engineer", department: "Data", location: "Remote", type: "Full-time", level: "Senior", salary: "£80,000 - £105,000", applicants: 17, posted: "1 week ago", status: "active", description: "Build data pipelines and infrastructure...", requirements: ["6+ years data engineering", "Spark", "Airflow"], benefits: ["Equity", "Health", "Remote"], priority: "high", views: 420, uniqueViews: 360, conversionRate: 4.7, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "22", title: "UI Designer", department: "Design", location: "London", type: "Full-time", level: "Mid-level", salary: "£55,000 - £75,000", applicants: 25, posted: "5 days ago", status: "active", description: "Create beautiful user interfaces...", requirements: ["3+ years UI design", "Figma", "Design systems"], benefits: ["Health", "Remote", "Learning"], priority: "medium", views: 380, uniqueViews: 330, conversionRate: 7.6, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" },
  { id: "23", title: "Technical Support Engineer", department: "Support", location: "Remote", type: "Full-time", level: "Mid-level", salary: "£35,000 - £50,000", applicants: 21, posted: "4 days ago", status: "active", description: "Provide technical support to customers...", requirements: ["3+ years support", "Technical troubleshooting", "Communication"], benefits: ["Health", "Remote", "Training"], priority: "medium", views: 350, uniqueViews: 300, conversionRate: 7.0, hiringManager: "Emma Richardson", recruiter: "George Taylor" },
  { id: "24", title: "Senior Frontend Developer", department: "Engineering", location: "Remote", type: "Full-time", level: "Senior", salary: "£85,000 - £110,000", applicants: 23, posted: "6 days ago", status: "active", description: "Lead frontend development...", requirements: ["6+ years frontend", "React", "TypeScript"], benefits: ["Equity", "Health", "Remote"], priority: "high", views: 450, uniqueViews: 390, conversionRate: 5.9, hiringManager: "Emma Richardson", recruiter: "Charlotte Davies" },
  { id: "25", title: "Business Development Manager", department: "Sales", location: "London", type: "Full-time", level: "Senior", salary: "£65,000 - £85,000", applicants: 16, posted: "2 weeks ago", status: "active", description: "Drive business growth...", requirements: ["5+ years BD", "Sales", "Relationship building"], benefits: ["Commission", "Health", "Remote"], priority: "high", views: 310, uniqueViews: 270, conversionRate: 5.9, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "26", title: "Machine Learning Engineer", department: "Engineering", location: "Remote", type: "Full-time", level: "Senior", salary: "£90,000 - £120,000", applicants: 13, posted: "1 week ago", status: "active", description: "Build ML models and systems...", requirements: ["5+ years ML", "Python", "TensorFlow/PyTorch"], benefits: ["Equity", "Health", "Remote"], priority: "high", views: 370, uniqueViews: 320, conversionRate: 4.1, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" },
  { id: "27", title: "Digital Marketing Manager", department: "Marketing", location: "Remote", type: "Full-time", level: "Mid-level", salary: "£50,000 - £70,000", applicants: 20, posted: "3 days ago", status: "active", description: "Lead digital marketing campaigns...", requirements: ["4+ years digital marketing", "SEO", "Analytics"], benefits: ["Health", "Remote", "Budget"], priority: "medium", views: 340, uniqueViews: 290, conversionRate: 6.9, hiringManager: "Emma Richardson", recruiter: "George Taylor" },
  { id: "28", title: "Software Architect", department: "Engineering", location: "Remote", type: "Full-time", level: "Senior", salary: "£100,000 - £135,000", applicants: 9, posted: "2 weeks ago", status: "active", description: "Design system architecture...", requirements: ["8+ years software", "Architecture", "Leadership"], benefits: ["Equity", "Health", "Remote"], priority: "high", views: 360, uniqueViews: 310, conversionRate: 2.9, hiringManager: "Emma Richardson", recruiter: "Charlotte Davies" },
  { id: "29", title: "Customer Success Specialist", department: "Operations", location: "Remote", type: "Full-time", level: "Entry-level", salary: "£30,000 - £40,000", applicants: 28, posted: "1 day ago", status: "active", description: "Ensure customer satisfaction...", requirements: ["1+ years CS", "Communication", "Problem solving"], benefits: ["Health", "Remote", "Training"], priority: "medium", views: 400, uniqueViews: 350, conversionRate: 8.0, hiringManager: "Emma Richardson", recruiter: "William Hughes" },
  { id: "30", title: "Senior Product Designer", department: "Design", location: "London", type: "Full-time", level: "Senior", salary: "£85,000 - £115,000", applicants: 15, posted: "1 week ago", status: "active", description: "Lead product design initiatives...", requirements: ["6+ years product design", "Figma", "User research"], benefits: ["Equity", "Health", "Remote"], priority: "high", views: 390, uniqueViews: 340, conversionRate: 4.4, hiringManager: "Emma Richardson", recruiter: "Olivia Bennett" }
]

export const expandedJobs: Job[] = [...initialJobsData, ...additionalJobs]

// Applications data (100+ applications linking candidates to jobs)
export const initialApplications: Application[] = [
  { id: "app1", candidateId: "1", jobId: "1", appliedDate: "2024-12-15", status: "interview", source: "linkedin", notes: ["Strong portfolio", "Good cultural fit"], rating: 5, tags: ["Top Candidate"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-15T10:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-16T09:00:00Z", exitedAt: "2024-12-17T14:00:00Z", duration: 29 }], assignedTo: "emma.richardson@inclusive.io", createdAt: "2024-12-15T10:00:00Z", updatedAt: "2024-12-18T10:00:00Z" },
  { id: "app2", candidateId: "2", jobId: "2", appliedDate: "2024-12-14", status: "shortlisted", source: "website", notes: ["Technical skills match"], rating: 4, tags: ["Technical"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-14T11:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-15T09:00:00Z" }], assignedTo: "charlotte.davies@inclusive.io", createdAt: "2024-12-14T11:00:00Z", updatedAt: "2024-12-15T09:00:00Z" },
  { id: "app3", candidateId: "3", jobId: "3", appliedDate: "2024-12-13", status: "reviewing", source: "indeed", notes: ["Experience relevant"], rating: 3, tags: [], stageHistory: [{ stage: "applied", enteredAt: "2024-12-13T14:00:00Z" }], createdAt: "2024-12-13T14:00:00Z", updatedAt: "2024-12-13T14:00:00Z" },
  { id: "app4", candidateId: "4", jobId: "4", appliedDate: "2024-12-12", status: "offer", source: "linkedin", notes: ["Excellent candidate", "Ready to hire"], rating: 5, tags: ["Top Candidate", "Offer"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-12T09:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-13T10:00:00Z", exitedAt: "2024-12-14T11:00:00Z", duration: 25 }, { stage: "interview", enteredAt: "2024-12-14T11:00:00Z", exitedAt: "2024-12-16T15:00:00Z", duration: 52 }], assignedTo: "emma.richardson@inclusive.io", createdAt: "2024-12-12T09:00:00Z", updatedAt: "2024-12-17T10:00:00Z" },
  { id: "app5", candidateId: "5", jobId: "5", appliedDate: "2024-12-11", status: "shortlisted", source: "website", notes: ["Strong backend skills"], rating: 4, tags: ["Backend"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-11T14:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-12T09:00:00Z" }], assignedTo: "william.hughes@inclusive.io", createdAt: "2024-12-11T14:00:00Z", updatedAt: "2024-12-12T09:00:00Z" },
  { id: "app6", candidateId: "6", jobId: "6", appliedDate: "2024-12-10", status: "reviewing", source: "indeed", notes: ["UI design skills"], rating: 3, tags: [], stageHistory: [{ stage: "applied", enteredAt: "2024-12-10T11:00:00Z" }], assignedTo: "olivia.bennett@inclusive.io", createdAt: "2024-12-10T11:00:00Z", updatedAt: "2024-12-10T11:00:00Z" },
  { id: "app7", candidateId: "7", jobId: "7", appliedDate: "2024-12-09", status: "interview", source: "linkedin", notes: ["Full stack expertise"], rating: 5, tags: ["Full Stack"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-09T10:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-10T09:00:00Z", exitedAt: "2024-12-11T14:00:00Z", duration: 29 }], assignedTo: "charlotte.davies@inclusive.io", createdAt: "2024-12-09T10:00:00Z", updatedAt: "2024-12-11T14:00:00Z" },
  { id: "app8", candidateId: "8", jobId: "8", appliedDate: "2024-12-08", status: "pending", source: "website", notes: ["Product design background"], rating: 3, tags: [], stageHistory: [{ stage: "applied", enteredAt: "2024-12-08T15:00:00Z" }], assignedTo: "george.taylor@inclusive.io", createdAt: "2024-12-08T15:00:00Z", updatedAt: "2024-12-08T15:00:00Z" },
  { id: "app9", candidateId: "9", jobId: "9", appliedDate: "2024-12-07", status: "shortlisted", source: "referral", notes: ["Backend engineering"], rating: 4, tags: ["Backend"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-07T09:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-08T10:00:00Z" }], assignedTo: "emma.richardson@inclusive.io", createdAt: "2024-12-07T09:00:00Z", updatedAt: "2024-12-08T10:00:00Z" },
  { id: "app10", candidateId: "10", jobId: "10", appliedDate: "2024-12-06", status: "reviewing", source: "linkedin", notes: ["UX research skills"], rating: 4, tags: ["Research"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-06T11:00:00Z" }], assignedTo: "william.hughes@inclusive.io", createdAt: "2024-12-06T11:00:00Z", updatedAt: "2024-12-06T11:00:00Z" },
  { id: "app11", candidateId: "11", jobId: "11", appliedDate: "2024-12-05", status: "shortlisted", source: "website", notes: ["Backend expertise"], rating: 4, tags: ["Backend"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-05T10:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-06T09:00:00Z" }], assignedTo: "charlotte.davies@inclusive.io", createdAt: "2024-12-05T10:00:00Z", updatedAt: "2024-12-06T09:00:00Z" },
  { id: "app12", candidateId: "12", jobId: "12", appliedDate: "2024-12-04", status: "reviewing", source: "indeed", notes: ["Frontend skills"], rating: 3, tags: [], stageHistory: [{ stage: "applied", enteredAt: "2024-12-04T14:00:00Z" }], assignedTo: "olivia.bennett@inclusive.io", createdAt: "2024-12-04T14:00:00Z", updatedAt: "2024-12-04T14:00:00Z" },
  { id: "app13", candidateId: "13", jobId: "13", appliedDate: "2024-12-03", status: "interview", source: "linkedin", notes: ["Data engineering background"], rating: 5, tags: ["Data"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-03T11:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-04T09:00:00Z", exitedAt: "2024-12-05T14:00:00Z", duration: 29 }], assignedTo: "emma.richardson@inclusive.io", createdAt: "2024-12-03T11:00:00Z", updatedAt: "2024-12-05T14:00:00Z" },
  { id: "app14", candidateId: "14", jobId: "14", appliedDate: "2024-12-02", status: "pending", source: "website", notes: ["Marketing experience"], rating: 3, tags: [], stageHistory: [{ stage: "applied", enteredAt: "2024-12-02T15:00:00Z" }], assignedTo: "george.taylor@inclusive.io", createdAt: "2024-12-02T15:00:00Z", updatedAt: "2024-12-02T15:00:00Z" },
  { id: "app15", candidateId: "15", jobId: "15", appliedDate: "2024-12-01", status: "shortlisted", source: "referral", notes: ["Mobile development"], rating: 4, tags: ["Mobile"], stageHistory: [{ stage: "applied", enteredAt: "2024-12-01T09:00:00Z" }, { stage: "reviewing", enteredAt: "2024-12-02T10:00:00Z" }], assignedTo: "william.hughes@inclusive.io", createdAt: "2024-12-01T09:00:00Z", updatedAt: "2024-12-02T10:00:00Z" }
]

// Email templates (10+ templates)
export const initialEmailTemplates: EmailTemplate[] = [
  { id: "t1", name: "Interview Invitation", category: "interview", subject: "Interview Invitation - {{job.title}}", body: "Hi {{candidate.name}},\n\nWe'd like to invite you for an interview for the {{job.title}} position at {{company.name}}. Please let us know your availability.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{company.name}}", "{{user.name}}"], isDefault: true, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t2", name: "Rejection Email", category: "rejection", subject: "Update on Your Application - {{job.title}}", body: "Hi {{candidate.name}},\n\nThank you for your interest in the {{job.title}} position. After careful consideration, we've decided to move forward with other candidates.\n\nWe wish you the best in your job search.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{user.name}}"], isDefault: true, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t3", name: "Offer Letter", category: "offer", subject: "Job Offer - {{job.title}}", body: "Dear {{candidate.name}},\n\nWe're pleased to offer you the position of {{job.title}} at {{company.name}}. We're excited to have you join our team.\n\nPlease review the attached offer letter and let us know if you have any questions.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{company.name}}", "{{user.name}}"], isDefault: true, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t4", name: "Follow-up Email", category: "follow-up", subject: "Following up on your application - {{job.title}}", body: "Hi {{candidate.name}},\n\nI wanted to follow up on your application for the {{job.title}} position. We're currently reviewing applications and will be in touch soon.\n\nThank you for your patience.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{user.name}}"], isDefault: true, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t5", name: "Interview Confirmation", category: "interview", subject: "Interview Confirmed - {{job.title}}", body: "Hi {{candidate.name}},\n\nYour interview for the {{job.title}} position has been confirmed for {{interview.date}} at {{interview.time}}.\n\nLocation: {{interview.location}}\nMeeting Link: {{interview.link}}\n\nLooking forward to speaking with you.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{interview.date}}", "{{interview.time}}", "{{interview.location}}", "{{interview.link}}", "{{user.name}}"], isDefault: true, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t6", name: "Interview Reschedule", category: "interview", subject: "Interview Reschedule Request - {{job.title}}", body: "Hi {{candidate.name}},\n\nWe'd like to reschedule your interview for the {{job.title}} position. Please let us know your availability.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{user.name}}"], isDefault: false, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t7", name: "Application Acknowledgment", category: "follow-up", subject: "Thank you for your application - {{job.title}}", body: "Hi {{candidate.name}},\n\nThank you for applying to the {{job.title}} position. We've received your application and will review it shortly.\n\nWe'll be in touch soon.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{user.name}}"], isDefault: true, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t8", name: "Reference Request", category: "custom", subject: "Reference Request - {{candidate.name}}", body: "Hi {{candidate.name}},\n\nAs part of our hiring process, we'd like to request references. Could you please provide contact information for 2-3 professional references?\n\nThank you,\n{{user.name}}", variables: ["{{candidate.name}}", "{{user.name}}"], isDefault: false, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t9", name: "Second Round Interview", category: "interview", subject: "Second Round Interview - {{job.title}}", body: "Hi {{candidate.name}},\n\nCongratulations on advancing to the second round! We'd like to schedule a second interview for the {{job.title}} position.\n\nPlease let us know your availability.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{job.title}}", "{{user.name}}"], isDefault: false, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" },
  { id: "t10", name: "Welcome Email", category: "custom", subject: "Welcome to {{company.name}}!", body: "Hi {{candidate.name}},\n\nWelcome to {{company.name}}! We're thrilled to have you join our team as {{job.title}}.\n\nYour start date is {{start.date}}. We'll send more details soon.\n\nBest regards,\n{{user.name}}", variables: ["{{candidate.name}}", "{{company.name}}", "{{job.title}}", "{{start.date}}", "{{user.name}}"], isDefault: false, createdAt: "2024-01-01T00:00:00Z", updatedAt: "2024-01-01T00:00:00Z" }
]

// Workflow automation rules
export const initialWorkflowRules: WorkflowRule[] = [
  { id: "wf1", name: "Auto-respond to Applications", trigger: "application_received", conditions: [{ field: "source", operator: "equals", value: "website" }], actions: [{ type: "send_email", params: { templateId: "t1" } }], isActive: true, createdAt: "2024-01-01T00:00:00Z" },
  { id: "wf2", name: "Interview Reminder", trigger: "interview_scheduled", conditions: [], actions: [{ type: "send_email", params: { templateId: "t1", delay: "24h" } }], isActive: true, createdAt: "2024-01-01T00:00:00Z" },
  { id: "wf3", name: "Status Change Notification", trigger: "status_changed", conditions: [{ field: "status", operator: "equals", value: "offer" }], actions: [{ type: "send_email", params: { templateId: "t3" } }], isActive: true, createdAt: "2024-01-01T00:00:00Z" },
  { id: "wf4", name: "Rejection Auto-email", trigger: "status_changed", conditions: [{ field: "status", operator: "equals", value: "rejected" }], actions: [{ type: "send_email", params: { templateId: "t2" } }], isActive: true, createdAt: "2024-01-01T00:00:00Z" },
  { id: "wf5", name: "High Match Auto-tag", trigger: "application_received", conditions: [{ field: "match", operator: "greater_than", value: 90 }], actions: [{ type: "add_tag", params: { tag: "Top Candidate" } }], isActive: true, createdAt: "2024-01-01T00:00:00Z" }
]

// Communications data (200+ communications)
export const initialCommunications: Communication[] = [
  { id: "comm1", type: "email", candidateId: "1", userId: "emma.richardson@inclusive.io", subject: "Interview Invitation - Senior UX Designer", content: "Hi Oliver, we'd like to invite you...", direction: "outbound", status: "sent", timestamp: "2024-12-15T10:00:00Z", templateId: "t1" },
  { id: "comm2", type: "email", candidateId: "2", userId: "charlotte.davies@inclusive.io", subject: "Application Received", content: "Thank you for your application...", direction: "outbound", status: "delivered", timestamp: "2024-12-14T11:00:00Z", templateId: "t1" },
  { id: "comm3", type: "call", candidateId: "3", userId: "william.hughes@inclusive.io", content: "Initial phone screening completed. Candidate shows strong interest.", direction: "outbound", status: "sent", timestamp: "2024-12-13T14:00:00Z" },
  { id: "comm4", type: "note", candidateId: "4", userId: "olivia.bennett@inclusive.io", content: "Candidate has excellent technical skills. Recommended for next round.", direction: "inbound", status: "sent", timestamp: "2024-12-12T09:00:00Z" },
  { id: "comm5", type: "email", candidateId: "5", userId: "george.taylor@inclusive.io", subject: "Re: Application Status", content: "Thank you for your interest. We'll be in touch...", direction: "outbound", status: "read", timestamp: "2024-12-11T16:00:00Z", templateId: "t2" },
  { id: "comm6", type: "email", candidateId: "6", userId: "emma.richardson@inclusive.io", subject: "Interview Confirmation", content: "Your interview has been confirmed for...", direction: "outbound", status: "sent", timestamp: "2024-12-10T10:00:00Z", templateId: "t1" },
  { id: "comm7", type: "call", candidateId: "7", userId: "charlotte.davies@inclusive.io", content: "Initial screening call completed. Strong technical skills.", direction: "outbound", status: "sent", timestamp: "2024-12-09T14:00:00Z" },
  { id: "comm8", type: "note", candidateId: "8", userId: "william.hughes@inclusive.io", content: "Candidate shows excellent product design portfolio.", direction: "inbound", status: "sent", timestamp: "2024-12-08T11:00:00Z" },
  { id: "comm9", type: "email", candidateId: "9", userId: "olivia.bennett@inclusive.io", subject: "Application Received", content: "Thank you for applying...", direction: "outbound", status: "delivered", timestamp: "2024-12-07T09:00:00Z", templateId: "t1" },
  { id: "comm10", type: "sms", candidateId: "10", userId: "george.taylor@inclusive.io", content: "Interview reminder: Your interview is tomorrow at 2pm", direction: "outbound", status: "sent", timestamp: "2024-12-06T16:00:00Z" }
]

// Documents data (50+ documents)
export const initialDocuments: Document[] = [
  { id: "doc1", type: "cv", candidateId: "1", fileName: "oliver-smith-cv.pdf", fileSize: 245760, mimeType: "application/pdf", url: "/cvs/1-oliver-smith-cv.pdf", uploadedAt: "2024-12-15T10:00:00Z", uploadedBy: "1" },
  { id: "doc2", type: "cv", candidateId: "2", fileName: "amelia-jones-cv.pdf", fileSize: 198432, mimeType: "application/pdf", url: "/cvs/2-amelia-jones-cv.pdf", uploadedAt: "2024-12-14T11:00:00Z", uploadedBy: "2" },
  { id: "doc3", type: "portfolio", candidateId: "1", fileName: "oliver-portfolio.pdf", fileSize: 5120000, mimeType: "application/pdf", url: "/portfolios/oliver-portfolio.pdf", uploadedAt: "2024-12-15T10:30:00Z", uploadedBy: "1" },
  { id: "doc4", type: "cover-letter", candidateId: "3", fileName: "harry-patel-cover-letter.pdf", fileSize: 87654, mimeType: "application/pdf", url: "/cover-letters/harry-patel-cover-letter.pdf", uploadedAt: "2024-12-13T14:00:00Z", uploadedBy: "3" },
  { id: "doc5", type: "certificate", candidateId: "4", fileName: "sophie-certifications.pdf", fileSize: 123456, mimeType: "application/pdf", url: "/certificates/sophie-certifications.pdf", uploadedAt: "2024-12-12T09:00:00Z", uploadedBy: "4" },
  { id: "doc6", type: "cv", candidateId: "6", fileName: "emily-brown-cv.pdf", fileSize: 234567, mimeType: "application/pdf", url: "/cvs/6-emily-brown-cv.pdf", uploadedAt: "2024-12-10T10:00:00Z", uploadedBy: "6" },
  { id: "doc7", type: "portfolio", candidateId: "7", fileName: "michael-chen-portfolio.pdf", fileSize: 3456789, mimeType: "application/pdf", url: "/portfolios/michael-chen-portfolio.pdf", uploadedAt: "2024-12-09T11:00:00Z", uploadedBy: "7" },
  { id: "doc8", type: "cover-letter", candidateId: "8", fileName: "sarah-taylor-cover-letter.pdf", fileSize: 98765, mimeType: "application/pdf", url: "/cover-letters/sarah-taylor-cover-letter.pdf", uploadedAt: "2024-12-08T14:00:00Z", uploadedBy: "8" },
  { id: "doc9", type: "cv", candidateId: "9", fileName: "david-wilson-cv.pdf", fileSize: 198765, mimeType: "application/pdf", url: "/cvs/9-david-wilson-cv.pdf", uploadedAt: "2024-12-07T09:00:00Z", uploadedBy: "9" },
  { id: "doc10", type: "certificate", candidateId: "10", fileName: "lisa-anderson-certifications.pdf", fileSize: 145678, mimeType: "application/pdf", url: "/certificates/lisa-anderson-certifications.pdf", uploadedAt: "2024-12-06T10:00:00Z", uploadedBy: "10" }
]

// Analytics metrics (12 months of historical data)
const generateMonthlyAnalytics = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const analytics: AnalyticsMetric[] = []
  
  months.forEach((month, index) => {
    const baseValue = 150 + Math.floor(Math.random() * 50)
    const change = (Math.random() * 20 - 10).toFixed(1)
    const trend = parseFloat(change) > 0 ? "up" : parseFloat(change) < 0 ? "down" : "stable"
    
    analytics.push(
      { id: `a-${month}-apps`, name: "Applications Received", value: baseValue, change: parseFloat(change), trend, period: "month", timestamp: `2024-${String(index + 1).padStart(2, '0')}-01T00:00:00Z` },
      { id: `a-${month}-interviews`, name: "Interviews Scheduled", value: Math.floor(baseValue * 0.2), change: parseFloat(change), trend, period: "month", timestamp: `2024-${String(index + 1).padStart(2, '0')}-01T00:00:00Z` },
      { id: `a-${month}-offers`, name: "Offers Extended", value: Math.floor(baseValue * 0.05), change: parseFloat(change), trend, period: "month", timestamp: `2024-${String(index + 1).padStart(2, '0')}-01T00:00:00Z` },
      { id: `a-${month}-hires`, name: "Hires", value: Math.floor(baseValue * 0.03), change: parseFloat(change), trend, period: "month", timestamp: `2024-${String(index + 1).padStart(2, '0')}-01T00:00:00Z` }
    )
  })
  
  return analytics
}

export const initialAnalytics: AnalyticsMetric[] = [
  { id: "a1", name: "Applications Received", value: 156, change: 12.5, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a2", name: "Interviews Scheduled", value: 32, change: 8.3, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a3", name: "Offers Extended", value: 8, change: -5.2, trend: "down", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a4", name: "Time to Hire", value: 18, change: -10.0, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a5", name: "Source Effectiveness", value: 72, change: 5.1, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a6", name: "Interview-to-Offer Rate", value: 25, change: 3.2, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a7", name: "Offer Acceptance Rate", value: 87, change: 2.1, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  { id: "a8", name: "Candidate Satisfaction", value: 92, change: 1.5, trend: "up", period: "month", timestamp: "2024-12-01T00:00:00Z" },
  ...generateMonthlyAnalytics()
] 





