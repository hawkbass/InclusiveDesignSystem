/**
 * Case Studies
 * 
 * Real-world case studies demonstrating the impact and value
 * of the Inclusive Design System.
 */

export interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  timeline: string
  components: string[]
  testimonial?: {
    author: string
    role: string
    quote: string
  }
  beforeAfter?: {
    before: string
    after: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: "techcorp-ats",
    title: "TechCorp ATS Transformation",
    company: "TechCorp Solutions",
    industry: "Technology Recruitment",
    challenge: "TechCorp needed to rebuild their applicant tracking system with improved accessibility, performance, and user experience. Their existing system had poor mobile support and accessibility issues.",
    solution: "Implemented Inclusive Design System to rebuild the entire ATS dashboard, candidate management, and job posting interfaces. Used comprehensive component library with built-in accessibility features.",
    results: [
      {
        metric: "Development Time",
        value: "6 months → 3 months",
        improvement: "50% faster"
      },
      {
        metric: "Accessibility Score",
        value: "65% → 98%",
        improvement: "+33%"
      },
      {
        metric: "Mobile Usage",
        value: "25% → 45%",
        improvement: "+80%"
      },
      {
        metric: "User Satisfaction",
        value: "3.2/5 → 4.8/5",
        improvement: "+50%"
      },
      {
        metric: "Page Load Time",
        value: "3.5s → 1.2s",
        improvement: "66% faster"
      }
    ],
    timeline: "6 months",
    components: [
      "dashboard-layout",
      "candidate-management",
      "job-posting",
      "calendar-integration",
      "data-tables",
      "forms",
      "modals"
    ],
    testimonial: {
      author: "Sarah Johnson",
      role: "Head of Engineering",
      quote: "The Inclusive Design System transformed our development process. We cut development time in half while dramatically improving accessibility and user experience. Our recruiters love the new interface."
    },
    beforeAfter: {
      before: "Legacy system with poor mobile support, accessibility issues, and slow performance",
      after: "Modern, accessible, fast system with excellent mobile experience and WCAG AA compliance"
    }
  },
  {
    id: "recruitpro-portal",
    title: "RecruitPro Job Portal",
    company: "RecruitPro",
    industry: "Recruitment Agency",
    challenge: "RecruitPro's job portal had high form abandonment rates and poor mobile experience. They needed to improve conversion rates and accessibility compliance.",
    solution: "Redesigned the entire job portal using Inclusive Design System components, focusing on form optimization, mobile-first design, and accessibility improvements.",
    results: [
      {
        metric: "Form Completion Rate",
        value: "45% → 75%",
        improvement: "+67%"
      },
      {
        metric: "Mobile Applications",
        value: "30% → 55%",
        improvement: "+83%"
      },
      {
        metric: "Accessibility Compliance",
        value: "WCAG A → WCAG AAA",
        improvement: "Full compliance"
      },
      {
        metric: "Bounce Rate",
        value: "65% → 35%",
        improvement: "-46%"
      },
      {
        metric: "Time to Complete",
        value: "8 min → 4 min",
        improvement: "50% faster"
      }
    ],
    timeline: "4 months",
    components: [
      "form-components",
      "validation",
      "file-upload",
      "responsive-layout",
      "progress-indicators"
    ],
    testimonial: {
      author: "Michael Chen",
      role: "Product Manager",
      quote: "The design system's form components and validation patterns were game-changers. We saw immediate improvements in completion rates and user satisfaction."
    }
  },
  {
    id: "global-hr-platform",
    title: "Global HR Platform",
    company: "GlobalHR Inc.",
    industry: "Enterprise HR",
    challenge: "GlobalHR needed to unify their multi-product platform with consistent design and improve international accessibility compliance across 15 countries.",
    solution: "Adopted Inclusive Design System as the foundation for all products, ensuring consistent design language, accessibility standards, and responsive patterns across the entire platform.",
    results: [
      {
        metric: "Design Consistency",
        value: "40% → 96%",
        improvement: "+140%"
      },
      {
        metric: "Development Velocity",
        value: "2x faster",
        improvement: "100% increase"
      },
      {
        metric: "Accessibility Compliance",
        value: "Mixed → WCAG AA",
        improvement: "Full compliance"
      },
      {
        metric: "Component Reuse",
        value: "20% → 85%",
        improvement: "+325%"
      },
      {
        metric: "Maintenance Time",
        value: "40% reduction",
        improvement: "Significant savings"
      }
    ],
    timeline: "12 months",
    components: [
      "all-components",
      "design-tokens",
      "theming",
      "responsive-patterns"
    ],
    testimonial: {
      author: "Emma Williams",
      role: "Design Director",
      quote: "The Inclusive Design System gave us the foundation we needed to scale our design operations. We now have consistent, accessible interfaces across all our products with significantly reduced development time."
    }
  }
]

// Helper functions
export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id)
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.industry === industry)
}

export function getFeaturedCaseStudies(limit: number = 3): CaseStudy[] {
  return caseStudies.slice(0, limit)
}

