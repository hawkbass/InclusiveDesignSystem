import { initialCandidates } from "@/app/dashboard-sections/data-server"
import type { Candidate } from "@/app/dashboard-sections/types"
import { FileText, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, Globe } from "lucide-react"
import { PrintButton, PrintStyles } from "./print-button"

interface CVPageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all candidate CVs
// This function runs at build time to pre-generate all CV pages
export function generateStaticParams() {
  return initialCandidates.map((candidate) => {
    // Extract the ID from cvUrl if it exists, otherwise generate it
    // cvUrl format: "/cvs/1-oliver-smith-cv.pdf"
    if (candidate.cvUrl) {
      // Extract just the filename part (e.g., "1-oliver-smith-cv.pdf")
      const filename = candidate.cvUrl.split('/').pop() || ''
      // Keep the .pdf extension to match the actual URL format
      return { id: filename }
    }
    // Fallback: generate URL-friendly ID from candidate data with .pdf extension
    const nameSlug = candidate.name.toLowerCase().replace(/\s+/g, '-')
    return {
      id: `${candidate.id}-${nameSlug}-cv.pdf`
    }
  })
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

export default async function CVPage({ params }: CVPageProps) {
  const resolvedParams = await params
  
  // Extract candidate ID from URL (e.g., "1-oliver-smith-cv.pdf" -> "1")
  const id = resolvedParams.id
  const candidateId = id.split("-")[0]
  const candidate = initialCandidates.find(c => c.id === candidateId)
  
  if (!candidate) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-foreground mb-4">CV Not Found</h1>
            <p className="text-muted-foreground">The requested CV could not be found.</p>
          </div>
        </div>
      </div>
    )
  }
  
  const workHistory = generateWorkHistory(candidate)
  const education = generateEducation(candidate)
  const certifications = generateCertifications(candidate)
  
  return (
    <div className="min-h-screen bg-background print:bg-white">
      <div className="max-w-4xl mx-auto p-8 print:p-6">
        {/* CV Container - Print-friendly */}
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
        
        {/* Print button - hidden in print */}
        <div className="mt-6 print:hidden">
          <PrintButton />
        </div>
      </div>
      
      <PrintStyles />
    </div>
  )
}
