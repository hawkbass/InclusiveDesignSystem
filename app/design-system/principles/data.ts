// Data structures for the principles page

import { 
  Heart, Brain, Globe, TrendingUp, Shield, Target, Zap, 
  Layers, Users, Code2, BookOpen, Briefcase, GraduationCap,
  Download, ExternalLink, Code2 as CodeIcon, Users as UsersIcon
} from "lucide-react"

export const designPhilosophy = [
  {
    title: "Human-centred Design",
    description: "Every design decision starts with understanding user needs, behaviors, and contexts.",
    icon: Heart,
    colour: "text-red-400",
    stats: "98% User Satisfaction"
  },
  {
    title: "Evidence-Based",
    description: "Design decisions backed by research, data, and user testing insights.",
    icon: Brain,
    colour: "text-blue-400", 
    stats: "150+ User Studies"
  },
  {
    title: "Inclusive by Default",
    description: "Accessibility and inclusion are built into every component from the ground up.",
    icon: Globe,
    colour: "text-green-600 dark:text-green-400",
    stats: "WCAG 2.1 AA Compliant"
  },
  {
    title: "Continuously Evolving",
    description: "The system grows and improves based on feedback and changing user needs.",
    icon: TrendingUp,
    colour: "text-purple-400",
    stats: "Monthly Updates"
  }
]

export const corePrinciples = [
  {
    title: "Accessibility First",
    description:
      "Every component is designed with accessibility in mind, ensuring all users can effectively use recruitment applications regardless of their abilities.",
    icon: Shield,
    colour: "text-blue-400",
    bgColor: "bg-blue-500/20",
    details: [
      "WCAG 2.1 AA compliance",
      "Screen reader compatibility",
      "Keyboard navigation support",
      "High contrast colour ratios",
      "Focus management",
    ],
  },
  {
    title: "Consistency",
    description:
      "Unified visual language and interaction patterns create predictable experiences that users can learn once and apply everywhere.",
    icon: Target,
    colour: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/20",
    details: [
      "Standardized component behaviour",
      "Consistent spacing and typography",
      "Unified colour system",
      "Predictable interaction patterns",
      "Cross-platform consistency",
    ],
  },
  {
    title: "Efficiency",
    description:
      "Streamlined workflows and intuitive interfaces help recruiters and candidates accomplish their goals quickly and effectively.",
    icon: Zap,
    colour: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    details: [
      "Minimal cognitive load",
      "Clear information hierarchy",
      "Efficient task flows",
      "Smart defaults and automation",
      "Progressive disclosure",
    ],
  },
  {
    title: "Scalability",
    description:
      "Components and patterns are designed to work across different team sizes, company scales, and recruitment volumes.",
    icon: TrendingUp,
    colour: "text-purple-400",
    bgColor: "bg-purple-500/20",
    details: [
      "Modular component architecture",
      "Flexible layout systems",
      "Customizable themes",
      "Performance optimisation",
      "Future-proof design tokens",
    ],
  },
]

export const applicationAreas = [
  {
    title: "Component Design",
    description: "How principles guide individual component decisions",
    icon: Layers,
    examples: [
      { principle: "Accessibility First", application: "All buttons include focus states and aria labels" },
      { principle: "Consistency", application: "Unified sizing scale across all interactive elements" },
      { principle: "Efficiency", application: "Smart defaults reduce configuration overhead" }
    ]
  },
  {
    title: "User Experience",
    description: "Applying principles to create cohesive user journeys",
    icon: Users,
    examples: [
      { principle: "Human-centred", application: "Task flows match natural user mental models" },
      { principle: "Scalability", application: "Interfaces adapt to different user expertise levels" },
      { principle: "Accessibility", application: "Multiple ways to complete critical tasks" }
    ]
  },
  {
    title: "Development Workflow",
    description: "How principles improve the developer experience",
    icon: Code2,
    examples: [
      { principle: "Consistency", application: "Predictable API patterns across components" },
      { principle: "Efficiency", application: "Well-structured props with TypeScript support" },
      { principle: "Scalability", application: "Modular architecture supports customisation" }
    ]
  }
]

export const implementationGuidelines = [
  {
    category: "Design Reviews",
    checklist: [
      "Does this follow accessibility guidelines?",
      "Is it consistent with existing patterns?",
      "Does it improve user efficiency?",
      "Will it scale across different contexts?"
    ]
  },
  {
    category: "Component Development", 
    checklist: [
      "Semantic HTML structure implemented?",
      "Keyboard navigation working correctly?",
      "Focus management handled properly?",
      "Documentation includes usage examples?"
    ]
  },
  {
    category: "User Testing",
    checklist: [
      "Tested with assistive technologies?",
      "Validated with diverse user groups?",
      "Performance measured and optimised?",
      "Feedback incorporated into design?"
    ]
  }
]

export const resources = [
  {
    category: "Design Guidelines",
    icon: BookOpen,
    colour: "text-blue-400",
    bgColor: "bg-blue-500/20",
    items: [
      { title: "Accessibility Standards", description: "WCAG 2.1 AA implementation guide", link: "#", type: "Guide" },
      { title: "colour Usage Principles", description: "How to use our colour system effectively", link: "#", type: "Documentation" },
      { title: "Typography Hierarchy", description: "Text scaling and hierarchy guidelines", link: "#", type: "Reference" },
      { title: "Spacing & Layout", description: "Grid systems and spacing principles", link: "#", type: "Guide" }
    ]
  },
  {
    category: "Tools & Assets",
    icon: Briefcase,
    colour: "text-green-600 dark:text-green-400", 
    bgColor: "bg-green-500/20",
    items: [
      { title: "Figma Design Kit", description: "Complete component library for designers", link: "#", type: "Figma" },
      { title: "Icon Library", description: "SVG icons with multiple formats", link: "#", type: "Assets" },
      { title: "Design Checklist", description: "Pre-launch design review checklist", link: "#", type: "Template" },
      { title: "Accessibility Audit", description: "Component accessibility testing template", link: "#", type: "Template" }
    ]
  },
  {
    category: "Learning Resources",
    icon: GraduationCap,
    colour: "text-purple-400",
    bgColor: "bg-purple-500/20",
    items: [
      { title: "Design System Fundamentals", description: "Introduction to design system principles", link: "#", type: "Course" },
      { title: "Accessibility Deep Dive", description: "Advanced accessibility implementation", link: "#", type: "Workshop" },
      { title: "Component API Design", description: "Building scalable component APIs", link: "#", type: "Tutorial" },
      { title: "User Research Methods", description: "Research techniques for design validation", link: "#", type: "Guide" }
    ]
  }
]

export const quickLinks = [
  { title: "Design Token Export", description: "Download tokens in JSON/CSS formats", icon: Download, action: "Download" },
  { title: "Component Storybook", description: "Interactive component documentation", icon: ExternalLink, action: "View" },
  { title: "GitHub Repository", description: "Source code and contribution guidelines", icon: CodeIcon, action: "Explore" },
  { title: "Design Community", description: "Join our Slack workspace for discussions", icon: UsersIcon, action: "Join" }
]
