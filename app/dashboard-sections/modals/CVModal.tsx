"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Globe, Download } from "lucide-react"
import { initialCandidates } from "../data"
import type { Candidate } from "../types"

interface CVModalProps {
  open: boolean
  candidateId: string | null
  onClose: () => void
}

// Generate realistic work history based on candidate
function generateWorkHistory(candidate: Candidate) {
  const years = parseInt(candidate.experience) || 5
  const history = []
  
  // Current/Most recent role
  const currentCompany = [
    "TechCorp Solutions",
    "Digital Innovations Ltd",
    "Creative Agency Group",
    "Software Systems Inc",
    "Design Studio Collective"
  ][Math.floor(Math.random() * 5)]
  
  history.push({
    title: candidate.position,
    company: currentCompany,
    period: `2022 - Present`,
    description: `Led ${candidate.position.toLowerCase()} initiatives, collaborating with cross-functional teams to deliver high-quality solutions. Specialized in ${candidate.skills.slice(0, 2).join(" and ")}.`
  })
  
  // Previous roles
  if (years >= 3) {
    const prevRoles = [
      { title: "Mid-level " + candidate.position.split(" ").slice(1).join(" "), company: "Previous Company Ltd" },
      { title: "Junior " + candidate.position.split(" ").slice(1).join(" "), company: "Entry Level Corp" }
    ]
    
    prevRoles.forEach((role, idx) => {
      if (years >= (idx + 1) * 2 + 1) {
        history.push({
          title: role.title,
          company: role.company,
          period: `${2020 - (idx + 1) * 2} - ${2022 - idx * 2}`,
          description: `Developed expertise in ${candidate.skills.join(", ")}. Contributed to multiple successful projects and gained valuable industry experience.`
        })
      }
    })
  }
  
  return history
}

// Generate education based on role
function generateEducation(candidate: Candidate) {
  const educations = []
  
  if (candidate.position.includes("Developer") || candidate.position.includes("Engineer")) {
    educations.push({
      degree: "BSc Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      details: "First Class Honours. Specialized in software engineering and web development."
    })
  } else if (candidate.position.includes("Designer")) {
    educations.push({
      degree: "BA Digital Design",
      institution: "Art & Design College",
      period: "2016 - 2020",
      details: "Distinction. Focus on user experience and interface design."
    })
  } else if (candidate.position.includes("Manager") || candidate.position.includes("Analyst")) {
    educations.push({
      degree: "BSc Business & Management",
      institution: "Business School",
      period: "2014 - 2018",
      details: "Upper Second Class. Specialized in data analysis and strategic planning."
    })
  }
  
  return educations
}

// Generate certifications
function generateCertifications(candidate: Candidate) {
  const certs = []
  
  if (candidate.skills.includes("React") || candidate.skills.includes("TypeScript")) {
    certs.push("React Advanced Certification")
    certs.push("TypeScript Professional")
  }
  if (candidate.skills.includes("Figma")) {
    certs.push("Figma Design Systems")
  }
  if (candidate.skills.includes("Python")) {
    certs.push("Python Data Science")
  }
  if (candidate.skills.includes("SQL")) {
    certs.push("SQL Database Management")
  }
  
  return certs
}

export function CVModal({ open, candidateId, onClose }: CVModalProps) {
  // Find candidate by ID
  const candidate = candidateId ? initialCandidates.find(c => c.id === candidateId) : null

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [open, onClose])

  if (!candidate) return null

  const workHistory = generateWorkHistory(candidate)
  const education = generateEducation(candidate)
  const certifications = generateCertifications(candidate)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] sm:w-full max-h-[90vh] p-0 overflow-hidden flex flex-col">
        {/* Header with close button */}
        <div className="p-4 border-b border-border/50 bg-card flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold">
              {candidate.avatar}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{candidate.name} - CV</h2>
              <p className="text-sm text-muted-foreground">{candidate.position}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-border/50 text-foreground/80 hover:bg-accent/50"
              onClick={() => window.print()}
            >
              <Download className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label="Close CV modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Scrollable CV Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-background">
          <div className="max-w-4xl mx-auto">
            {/* CV Container */}
            <div className="bg-card border border-border/50 rounded-lg p-8 print:p-6 print:border-0 print:shadow-none shadow-lg">
              {/* Header */}
              <div className="border-b border-border/50 pb-6 mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">{candidate.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{candidate.position}</p>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                  {candidate.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{candidate.email}</span>
                    </div>
                  )}
                  {candidate.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{candidate.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{candidate.location}</span>
                  </div>
                  {candidate.portfolio && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{candidate.portfolio}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Professional Summary */}
              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Professional Summary
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {candidate.experience} of experience as a {candidate.position.toLowerCase()} with expertise in {candidate.skills.join(", ")}. 
                  Proven track record of delivering high-quality solutions and collaborating effectively with cross-functional teams. 
                  Strong problem-solving skills and a passion for continuous learning and professional development.
                </p>
              </section>
              
              {/* Work Experience */}
              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Work Experience
                </h2>
                <div className="space-y-4">
                  {workHistory.map((job, idx) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-4">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-foreground/70 font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                      <p className="text-foreground/80">{job.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Skills */}
              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
              
              {/* Education */}
              {education.length > 0 && (
                <section className="mb-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </h2>
                  <div className="space-y-3">
                    {education.map((edu, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-foreground/70 font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                        <p className="text-foreground/80 text-sm">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              
              {/* Certifications */}
              {certifications.length > 0 && (
                <section className="mb-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    {certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

