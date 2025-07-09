// Static data for dashboard components - extracted for better performance
export const candidatesData = [
  {
    id: "1",
    name: "Oliver Smith",
    position: "Senior UX Designer",
    email: "oliver.smith@example.co.uk",
    phone: "+44 20 7946 0958",
    stage: "Final Interview",
    match: "94%",
    avatar: "OS",
    date: "2024-01-15",
    location: "London",
    experience: "8+ years",
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
    lastActivity: "2 hours ago"
  },
  {
    id: "2",
    name: "Amelia Jones",
    position: "Frontend Developer",
    email: "amelia.jones@example.co.uk",
    phone: "+44 161 850 1234",
    stage: "Technical Review",
    match: "89%",
    avatar: "AJ",
    date: "2024-01-14",
    location: "Manchester",
    experience: "5+ years",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    lastActivity: "1 day ago"
  },
  {
    id: "3",
    name: "Harry Patel",
    position: "Product Manager",
    email: "harry.patel@example.co.uk",
    phone: "+44 121 285 5678",
    stage: "Initial Screening",
    match: "91%",
    avatar: "HP",
    date: "2024-01-13",
    location: "Birmingham",
    experience: "6+ years",
    skills: ["Product Strategy", "Analytics", "Roadmapping", "Leadership"],
    lastActivity: "3 hours ago"
  }
]

export const jobsData = [
  {
    id: "1",
    title: "Senior UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    salary: "$85,000 - $120,000",
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
    location: "San Francisco",
    type: "Full-time",
    level: "Mid-level",
    salary: "$75,000 - $95,000",
    applicants: 36,
    posted: "1 week ago",
    status: "active",
    description: "Join our frontend team to build amazing user experiences...",
    requirements: ["3+ years React experience", "TypeScript proficiency", "Modern CSS skills"],
    benefits: ["Health insurance", "Stock options", "Gym membership", "Catered meals"],
    priority: "high"
  }
]

export const teamMembers = [
  { id: 1, name: "Alex Morgan", role: "HR Coordinator", email: "alex.morgan@inclusive.io", avatar: "AM", status: "active", lastActive: "2 hours ago" },
  { id: 2, name: "Jamie Chen", role: "Recruitment Specialist", email: "jamie.chen@inclusive.io", avatar: "JC", status: "active", lastActive: "30 minutes ago" },
  { id: 3, name: "Taylor Kim", role: "Talent Acquisition Lead", email: "taylor.kim@inclusive.io", avatar: "TK", status: "away", lastActive: "1 day ago" },
  { id: 4, name: "Casey Smith", role: "HR Analyst", email: "casey.smith@inclusive.io", avatar: "CS", status: "active", lastActive: "5 minutes ago" }
]

export const notificationsData = [
  { id: 1, type: "interview", message: "Interview with Alex Morgan in 30 min", time: "2 min ago", urgent: true },
  { id: 2, type: "application", message: "5 new applications received", time: "15 min ago", urgent: false },
  { id: 3, type: "goal", message: "Monthly hiring goal 85% complete", time: "1 hour ago", urgent: false }
] 