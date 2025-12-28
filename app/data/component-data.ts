/**
 * Comprehensive Component Metadata
 * 
 * This file contains detailed metadata for all components in the design system,
 * including props, examples, accessibility info, performance metrics, and usage statistics.
 */

export interface PropDefinition {
  name: string
  type: string
  description: string
  required: boolean
  default?: string | number | boolean
  options?: string[]
}

export interface Example {
  id: string
  title: string
  description: string
  code: string
  complexity: "beginner" | "intermediate" | "advanced"
  useCase: string
  tags: string[]
}

export interface AccessibilityInfo {
  wcagLevel: "A" | "AA" | "AAA"
  keyboardNavigation: boolean
  screenReaderSupport: boolean
  ariaAttributes: string[]
  focusManagement: string
  colorContrast: "pass" | "fail" | "enhanced"
  notes: string[]
}

export interface PerformanceMetrics {
  bundleSize: string
  renderTime: string
  reRenders: string
  interactions: string
  memoryUsage?: string
}

export interface UsageStatistics {
  usageCount: number
  projectsUsing: number
  lastUsed: string
  trending: boolean
  adoptionRate: number
}

export interface ChangelogEntry {
  version: string
  date: string
  type: "added" | "changed" | "deprecated" | "fixed" | "removed"
  description: string
  breaking?: boolean
}

export interface ComponentMetadata {
  id: string
  name: string
  category: string
  description: string
  props: PropDefinition[]
  examples: Example[]
  accessibility: AccessibilityInfo
  performance: PerformanceMetrics
  usage: UsageStatistics
  related: string[]
  status: "stable" | "beta" | "deprecated"
  version: string
  changelog: ChangelogEntry[]
  tags: string[]
  complexity: "simple" | "moderate" | "complex"
  dependencies: string[]
}

// Sample component metadata - this would be expanded with all 102+ components
export const componentMetadata: ComponentMetadata[] = [
  {
    id: "button",
    name: "Button",
    category: "actions",
    description: "Interactive button component with multiple variants and states",
    props: [
      {
        name: "variant",
        type: "string",
        description: "Visual style variant",
        required: false,
        default: "default",
        options: ["default", "secondary", "destructive", "outline", "ghost", "link"]
      },
      {
        name: "size",
        type: "string",
        description: "Button size",
        required: false,
        default: "default",
        options: ["xs", "sm", "default", "lg", "xl"]
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disable the button",
        required: false,
        default: false
      },
      {
        name: "loading",
        type: "boolean",
        description: "Show loading state",
        required: false,
        default: false
      }
    ],
    examples: [
      {
        id: "button-basic",
        title: "Basic Button",
        description: "Simple button with default styling",
        code: `<Button>Click me</Button>`,
        complexity: "beginner",
        useCase: "Primary actions, form submissions",
        tags: ["basic", "primary"]
      },
      {
        id: "button-variants",
        title: "Button Variants",
        description: "All available button variants",
        code: `<div className="flex gap-2">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`,
        complexity: "beginner",
        useCase: "Different action types, visual hierarchy",
        tags: ["variants", "styling"]
      },
      {
        id: "button-loading",
        title: "Loading State",
        description: "Button with loading indicator",
        code: `<Button loading={isLoading}>
  {isLoading ? "Processing..." : "Submit"}
</Button>`,
        complexity: "intermediate",
        useCase: "Async operations, form submissions",
        tags: ["loading", "async"]
      }
    ],
    accessibility: {
      wcagLevel: "AAA",
      keyboardNavigation: true,
      screenReaderSupport: true,
      ariaAttributes: ["aria-label", "aria-disabled", "aria-busy"],
      focusManagement: "2px outline with high contrast",
      colorContrast: "pass",
      notes: [
        "Full keyboard support (Enter, Space)",
        "Screen reader announcements for state changes",
        "High contrast focus indicators"
      ]
    },
    performance: {
      bundleSize: "2.1kb (gzipped)",
      renderTime: "< 1ms",
      reRenders: "Optimized with React.memo",
      interactions: "Hardware accelerated"
    },
    usage: {
      usageCount: 15420,
      projectsUsing: 342,
      lastUsed: "2024-01-15",
      trending: true,
      adoptionRate: 0.94
    },
    related: ["icon-button", "button-group", "link"],
    status: "stable",
    version: "2.1.0",
    changelog: [
      {
        version: "2.1.0",
        date: "2024-01-10",
        type: "added",
        description: "Added loading state prop",
        breaking: false
      },
      {
        version: "2.0.0",
        date: "2023-12-01",
        type: "changed",
        description: "Updated color system for better contrast",
        breaking: true
      }
    ],
    tags: ["action", "interactive", "form", "navigation"],
    complexity: "simple",
    dependencies: []
  },
  {
    id: "candidate-card",
    name: "Candidate Profile Card",
    category: "recruitment",
    description: "Comprehensive candidate information display card",
    props: [
      {
        name: "candidate",
        type: "object",
        description: "Candidate data object",
        required: true
      },
      {
        name: "showActions",
        type: "boolean",
        description: "Show action buttons",
        required: false,
        default: true
      },
      {
        name: "compact",
        type: "boolean",
        description: "Compact view mode",
        required: false,
        default: false
      }
    ],
    examples: [
      {
        id: "candidate-card-basic",
        title: "Basic Candidate Card",
        description: "Standard candidate profile display",
        code: `<CandidateCard candidate={candidateData} />`,
        complexity: "beginner",
        useCase: "Candidate listings, search results",
        tags: ["recruitment", "profile"]
      },
      {
        id: "candidate-card-actions",
        title: "Card with Actions",
        description: "Card with action buttons",
        code: `<CandidateCard 
  candidate={candidateData} 
  showActions={true}
/>`,
        complexity: "intermediate",
        useCase: "Candidate management, quick actions",
        tags: ["recruitment", "actions"]
      }
    ],
    accessibility: {
      wcagLevel: "AA",
      keyboardNavigation: true,
      screenReaderSupport: true,
      ariaAttributes: ["aria-label", "role"],
      focusManagement: "Card focus with visible outline",
      colorContrast: "pass",
      notes: [
        "Semantic HTML structure",
        "Keyboard navigation for actions",
        "Screen reader friendly content structure"
      ]
    },
    performance: {
      bundleSize: "4.2kb (gzipped)",
      renderTime: "< 2ms",
      reRenders: "Memoized with React.memo",
      interactions: "Optimized hover states"
    },
    usage: {
      usageCount: 8230,
      projectsUsing: 156,
      lastUsed: "2024-01-14",
      trending: true,
      adoptionRate: 0.87
    },
    related: ["job-card", "application-card", "avatar"],
    status: "stable",
    version: "1.5.0",
    changelog: [
      {
        version: "1.5.0",
        date: "2024-01-05",
        type: "added",
        description: "Added compact mode",
        breaking: false
      }
    ],
    tags: ["recruitment", "card", "profile", "display"],
    complexity: "moderate",
    dependencies: ["card", "avatar", "badge"]
  }
]

// Helper functions
export function getComponentById(id: string): ComponentMetadata | undefined {
  return componentMetadata.find(comp => comp.id === id)
}

export function getComponentsByCategory(category: string): ComponentMetadata[] {
  return componentMetadata.filter(comp => comp.category === category)
}

export function getComponentsByStatus(status: ComponentMetadata["status"]): ComponentMetadata[] {
  return componentMetadata.filter(comp => comp.status === status)
}

export function searchComponents(query: string): ComponentMetadata[] {
  const lowerQuery = query.toLowerCase()
  return componentMetadata.filter(comp =>
    comp.name.toLowerCase().includes(lowerQuery) ||
    comp.description.toLowerCase().includes(lowerQuery) ||
    comp.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    comp.category.toLowerCase().includes(lowerQuery)
  )
}

export function getRelatedComponents(id: string): ComponentMetadata[] {
  const component = getComponentById(id)
  if (!component) return []
  return componentMetadata.filter(comp => 
    component.related.includes(comp.id) && comp.id !== id
  )
}

