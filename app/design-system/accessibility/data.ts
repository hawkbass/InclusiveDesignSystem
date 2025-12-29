// Data structures for accessibility page

import { Shield, Code2, Target, BookOpen, Settings, Navigation, Sparkles } from "lucide-react"

export const allSearchableItems = [
  // WCAG Guidelines
  { id: "wcag-aa", name: "WCAG 2.1 AA Guidelines", category: "Standards", type: "guideline",
    description: "Web Content Accessibility Guidelines Level AA compliance", difficulty: "intermediate" },
  { id: "section-508", name: "Section 508 Compliance", category: "Standards", type: "guideline",
    description: "US Federal accessibility requirements", difficulty: "intermediate" },
  { id: "en-301-549", name: "EN 301 549 Standard", category: "Standards", type: "guideline",
    description: "European accessibility standard", difficulty: "advanced" },
  
  // ARIA Attributes
  { id: "aria-label", name: "aria-label", category: "ARIA", type: "attribute",
    value: `aria-label="Close dialog"`, usage: "Provides accessible name", difficulty: "beginner" },
  { id: "aria-labelledby", name: "aria-labelledby", category: "ARIA", type: "attribute",
    value: `aria-labelledby="title-id"`, usage: "References label element", difficulty: "beginner" },
  { id: "aria-describedby", name: "aria-describedby", category: "ARIA", type: "attribute",
    value: `aria-describedby="error-msg"`, usage: "References description", difficulty: "beginner" },
  { id: "aria-live", name: "aria-live", category: "ARIA", type: "attribute",
    value: `aria-live="polite"`, usage: "Announces dynamic changes", difficulty: "intermediate" },
  { id: "aria-hidden", name: "aria-hidden", category: "ARIA", type: "attribute",
    value: `aria-hidden="true"`, usage: "Hides decorative elements", difficulty: "beginner" },
  
  // Testing Tools
  { id: "axe-core", name: "Axe Core", category: "Testing", type: "tool",
    description: "Automated accessibility testing engine", difficulty: "intermediate" },
  { id: "nvda", name: "NVDA Screen Reader", category: "Testing", type: "tool",
    description: "Free Windows screen reader", difficulty: "beginner" },
  { id: "voiceover", name: "VoiceOver", category: "Testing", type: "tool",
    description: "macOS/iOS built-in screen reader", difficulty: "beginner" },
  { id: "lighthouse", name: "Lighthouse", category: "Testing", type: "tool",
    description: "Browser accessibility auditor", difficulty: "beginner" },
  
  // Color Contrast
  { id: "contrast-ratio", name: "Contrast Ratio", category: "Color", type: "concept",
    description: "4.5:1 minimum for normal text", difficulty: "beginner" },
  { id: "colour-blindness", name: "Color Blindness", category: "Color", type: "concept",
    description: "Don't rely on color alone", difficulty: "beginner" },
  
  // Keyboard Navigation
  { id: "focus-management", name: "Focus Management", category: "Keyboard", type: "concept",
    description: "Visible focus indicators and logical order", difficulty: "intermediate" },
  { id: "skip-links", name: "Skip Links", category: "Keyboard", type: "pattern",
    description: "Allow skipping to main content", difficulty: "beginner" },
  
  // Code Examples
  { id: "accessible-button", name: "Accessible Button", category: "Examples", type: "code",
    value: `<Button aria-label="Submit application">Submit</Button>`, difficulty: "beginner" },
  { id: "accessible-form", name: "Accessible Form", category: "Examples", type: "code",
    value: `<input aria-describedby="error-msg" aria-invalid="true" />`, difficulty: "intermediate" },
  { id: "accessible-modal", name: "Accessible Modal", category: "Examples", type: "code",
    value: `<div role="dialog" aria-modal="true" aria-labelledby="title">`, difficulty: "advanced" }
]

export const accessibilityPaths = [
  {
    id: "beginner",
    title: "Accessibility Fundamentals",
    description: "Essential concepts and quick wins for inclusive design",
    icon: Shield,
    colour: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/20",
    duration: "20 min",
    difficulty: "Beginner",
    steps: [
      { id: "understand-disabilities", title: "Understanding User Needs", duration: "5 min", type: "reading" },
      { id: "wcag-basics", title: "WCAG 2.1 Overview", duration: "5 min", type: "reading" },
      { id: "quick-wins", title: "Quick Accessibility Wins", duration: "5 min", type: "interactive" },
      { id: "basic-testing", title: "Basic Testing Methods", duration: "5 min", type: "hands-on" }
    ]
  },
  {
    id: "developer",
    title: "Technical Implementation", 
    description: "ARIA, semantic HTML, and testing integration",
    icon: Code2,
    colour: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/20",
    duration: "35 min",
    difficulty: "Intermediate",
    steps: [
      { id: "semantic-html", title: "Semantic HTML Foundation", duration: "8 min", type: "coding" },
      { id: "aria-implementation", title: "ARIA Patterns & Best Practices", duration: "12 min", type: "coding" },
      { id: "testing-integration", title: "Automated Testing Setup", duration: "10 min", type: "coding" },
      { id: "ci-cd-integration", title: "CI/CD Pipeline Integration", duration: "5 min", type: "coding" }
    ]
  },
  {
    id: "auditor",
    title: "Accessibility Auditing",
    description: "Comprehensive testing and compliance validation",
    icon: Target,
    colour: "text-purple-400", 
    bgColor: "bg-purple-500/20",
    duration: "30 min",
    difficulty: "Advanced",
    steps: [
      { id: "audit-methodology", title: "Audit Methodology", duration: "8 min", type: "reading" },
      { id: "testing-tools", title: "Advanced Testing Tools", duration: "10 min", type: "hands-on" },
      { id: "compliance-reporting", title: "Compliance Reporting", duration: "7 min", type: "hands-on" },
      { id: "remediation-planning", title: "Remediation Planning", duration: "5 min", type: "planning" }
    ]
  }
]

export const popularSearches = ["aria-label", "contrast ratio", "screen reader", "keyboard navigation", "wcag guidelines"]
