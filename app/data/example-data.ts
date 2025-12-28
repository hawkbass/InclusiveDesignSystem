/**
 * Realistic Example Data
 * 
 * This file contains realistic example data for demonstrations,
 * use cases, and interactive examples throughout the site.
 */

export interface UseCase {
  id: string
  title: string
  description: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  components: string[]
  metrics: {
    label: string
    value: string
  }[]
}

export interface CodeExample {
  id: string
  title: string
  description: string
  code: string
  language: "tsx" | "ts" | "jsx" | "js" | "css"
  complexity: "beginner" | "intermediate" | "advanced"
  tags: string[]
  relatedExamples: string[]
}

export interface RealWorldScenario {
  id: string
  title: string
  description: string
  context: string
  problem: string
  solution: string
  code: string
  outcome: string
  components: string[]
}

export const useCases: UseCase[] = [
  {
    id: "ats-dashboard",
    title: "Applicant Tracking System Dashboard",
    description: "Complete ATS dashboard built with Inclusive Design System",
    industry: "Recruitment",
    challenge: "Need a comprehensive dashboard for managing candidates, jobs, and interviews with high accessibility standards",
    solution: "Built using Inclusive Design System components with full WCAG AA compliance and responsive design",
    results: [
      "98% accessibility score",
      "50% faster development time",
      "Consistent UI across all pages",
      "Mobile-first responsive design"
    ],
    components: [
      "dashboard-layout",
      "candidate-card",
      "job-card",
      "calendar",
      "data-table",
      "modal",
      "form-components"
    ],
    metrics: [
      { label: "Development Time", value: "50% faster" },
      { label: "Accessibility Score", value: "98%" },
      { label: "User Satisfaction", value: "4.8/5" },
      { label: "Performance", value: "98/100" }
    ]
  },
  {
    id: "recruitment-portal",
    title: "Recruitment Portal",
    description: "Public-facing job portal with application forms",
    industry: "Recruitment",
    challenge: "Create an accessible, mobile-friendly job application portal",
    solution: "Used form components, validation, and responsive patterns from the design system",
    results: [
      "WCAG AAA compliance",
      "40% increase in mobile applications",
      "Reduced form abandonment by 30%",
      "Faster page load times"
    ],
    components: [
      "form-components",
      "input-group",
      "file-upload",
      "validation",
      "responsive-layout"
    ],
    metrics: [
      { label: "Mobile Applications", value: "+40%" },
      { label: "Form Completion", value: "+30%" },
      { label: "Page Load Time", value: "1.2s" },
      { label: "Accessibility", value: "AAA" }
    ]
  },
  {
    id: "candidate-management",
    title: "Candidate Management System",
    description: "Internal tool for recruiters to manage candidate pipelines",
    industry: "Recruitment",
    challenge: "Build an efficient candidate management interface with filtering and search",
    solution: "Leveraged data display components, filters, and advanced search patterns",
    results: [
      "60% faster candidate search",
      "Improved user productivity",
      "Better data visualization",
      "Enhanced filtering capabilities"
    ],
    components: [
      "data-table",
      "filters",
      "search",
      "pagination",
      "badges",
      "tooltips"
    ],
    metrics: [
      { label: "Search Speed", value: "60% faster" },
      { label: "User Productivity", value: "+45%" },
      { label: "Data Accuracy", value: "99.2%" },
      { label: "User Satisfaction", value: "4.9/5" }
    ]
  }
]

export const codeExamples: CodeExample[] = [
  {
    id: "button-basic",
    title: "Basic Button Usage",
    description: "Simple button with default styling",
    code: `import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}`,
    language: "tsx",
    complexity: "beginner",
    tags: ["button", "basic", "interaction"],
    relatedExamples: ["button-variants", "button-loading"]
  },
  {
    id: "button-variants",
    title: "Button Variants",
    description: "All available button variants",
    code: `import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`,
    language: "tsx",
    complexity: "beginner",
    tags: ["button", "variants", "styling"],
    relatedExamples: ["button-basic", "button-loading"]
  },
  {
    id: "form-complete",
    title: "Complete Form Example",
    description: "Full form with validation and submission",
    code: `import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <Button type="submit">Submit Application</Button>
    </form>
  )
}`,
    language: "tsx",
    complexity: "intermediate",
    tags: ["form", "validation", "state"],
    relatedExamples: ["form-validation", "form-advanced"]
  },
  {
    id: "candidate-card-usage",
    title: "Candidate Card Component",
    description: "Using the candidate card in a list",
    code: `import { CandidateCard } from "@/components/recruitment/candidate-card"

export function CandidateList({ candidates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          showActions={true}
        />
      ))}
    </div>
  )
}`,
    language: "tsx",
    complexity: "intermediate",
    tags: ["recruitment", "card", "list"],
    relatedExamples: ["card-basic", "list-pagination"]
  }
]

export const realWorldScenarios: RealWorldScenario[] = [
  {
    id: "accessible-form",
    title: "Building an Accessible Form",
    description: "Creating a form that meets WCAG AA standards",
    context: "A job application form needs to be accessible to all users, including those using screen readers",
    problem: "Standard HTML forms often lack proper accessibility attributes and keyboard navigation",
    solution: "Use Inclusive Design System form components with built-in accessibility features",
    code: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function AccessibleForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          aria-required="true"
          aria-describedby="name-error"
        />
        <span id="name-error" className="sr-only">Name is required</span>
      </div>
      <Button type="submit" aria-label="Submit job application">
        Submit
      </Button>
    </form>
  )
}`,
    outcome: "Form passes WCAG AA compliance with full keyboard and screen reader support",
    components: ["input", "label", "button", "form"]
  },
  {
    id: "responsive-dashboard",
    title: "Responsive Dashboard Layout",
    description: "Creating a dashboard that works on all screen sizes",
    context: "A recruitment dashboard needs to work seamlessly on desktop, tablet, and mobile devices",
    problem: "Complex layouts often break on smaller screens or require separate mobile views",
    solution: "Use responsive grid and layout components from the design system",
    code: `import { Card } from "@/components/ui/card"

export function ResponsiveDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="col-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Content */}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Content */}
        </CardContent>
      </Card>
    </div>
  )
}`,
    outcome: "Dashboard adapts seamlessly across all device sizes with optimal user experience",
    components: ["card", "grid", "responsive-layout"]
  }
]

// Helper functions
export function getUseCaseById(id: string): UseCase | undefined {
  return useCases.find(uc => uc.id === id)
}

export function getCodeExampleById(id: string): CodeExample | undefined {
  return codeExamples.find(ex => ex.id === id)
}

export function getExamplesByComplexity(complexity: CodeExample["complexity"]): CodeExample[] {
  return codeExamples.filter(ex => ex.complexity === complexity)
}

export function getExamplesByTag(tag: string): CodeExample[] {
  return codeExamples.filter(ex => ex.tags.includes(tag))
}

