// Server-safe data exports (no React imports)
// This file can be imported by server components

import type { 
  Candidate
} from "./types"

// Re-export initialCandidates without React dependencies
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

