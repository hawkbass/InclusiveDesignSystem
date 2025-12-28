/**
 * System Metrics and Statistics
 * 
 * This file contains metrics data for the design system including
 * adoption rates, performance benchmarks, usage statistics, and analytics.
 */

export interface AdoptionMetric {
  id: string
  label: string
  value: number
  unit: string
  change: number
  trend: "up" | "down" | "stable"
  description: string
  category: "adoption" | "performance" | "accessibility" | "usage"
}

export interface PerformanceBenchmark {
  id: string
  name: string
  metric: string
  value: number
  target: number
  unit: string
  status: "pass" | "warning" | "fail"
  description: string
}

export interface ComponentUsageStat {
  componentId: string
  componentName: string
  usageCount: number
  projectsUsing: number
  lastUsed: string
  trending: boolean
  adoptionRate: number
  category: string
}

export interface SystemHealth {
  overall: number
  components: number
  documentation: number
  accessibility: number
  performance: number
  lastUpdated: string
}

export const adoptionMetrics: AdoptionMetric[] = [
  {
    id: "system-adoption",
    label: "System Adoption",
    value: 94,
    unit: "%",
    change: 12,
    trend: "up",
    description: "Teams using design system components",
    category: "adoption"
  },
  {
    id: "design-consistency",
    label: "Design Consistency",
    value: 96,
    unit: "%",
    change: 8,
    trend: "up",
    description: "UI patterns following system guidelines",
    category: "adoption"
  },
  {
    id: "performance-score",
    label: "Performance Score",
    value: 98,
    unit: "/100",
    change: 5,
    trend: "up",
    description: "Average Lighthouse performance",
    category: "performance"
  },
  {
    id: "accessibility-compliance",
    label: "Accessibility Compliance",
    value: 98,
    unit: "%",
    change: 0,
    trend: "stable",
    description: "WCAG 2.1 AA compliance across components",
    category: "accessibility"
  },
  {
    id: "component-usage",
    label: "Component Usage",
    value: 102,
    unit: "components",
    change: 15,
    trend: "up",
    description: "Total components in library",
    category: "usage"
  },
  {
    id: "active-projects",
    label: "Active Projects",
    value: 342,
    unit: "projects",
    change: 28,
    trend: "up",
    description: "Projects using the design system",
    category: "usage"
  }
]

export const performanceBenchmarks: PerformanceBenchmark[] = [
  {
    id: "bundle-size",
    name: "Average Bundle Size",
    metric: "Component Size",
    value: 2.4,
    target: 5.0,
    unit: "kb",
    status: "pass",
    description: "Average gzipped component size"
  },
  {
    id: "render-time",
    name: "Average Render Time",
    metric: "Performance",
    value: 1.2,
    target: 3.0,
    unit: "ms",
    status: "pass",
    description: "Average component render time"
  },
  {
    id: "lighthouse-score",
    name: "Lighthouse Score",
    metric: "Performance",
    value: 98,
    target: 90,
    unit: "/100",
    status: "pass",
    description: "Average Lighthouse performance score"
  },
  {
    id: "accessibility-score",
    name: "Accessibility Score",
    metric: "Accessibility",
    value: 98,
    target: 95,
    unit: "/100",
    status: "pass",
    description: "WCAG compliance score"
  },
  {
    id: "seo-score",
    name: "SEO Score",
    metric: "SEO",
    value: 95,
    target: 90,
    unit: "/100",
    status: "pass",
    description: "Search engine optimization score"
  }
]

export const componentUsageStats: ComponentUsageStat[] = [
  {
    componentId: "button",
    componentName: "Button",
    usageCount: 15420,
    projectsUsing: 342,
    lastUsed: "2024-01-15",
    trending: true,
    adoptionRate: 0.94,
    category: "actions"
  },
  {
    componentId: "input",
    componentName: "Input",
    usageCount: 12850,
    projectsUsing: 298,
    lastUsed: "2024-01-15",
    trending: true,
    adoptionRate: 0.89,
    category: "forms"
  },
  {
    componentId: "card",
    componentName: "Card",
    usageCount: 11230,
    projectsUsing: 267,
    lastUsed: "2024-01-14",
    trending: true,
    adoptionRate: 0.85,
    category: "layout"
  },
  {
    componentId: "candidate-card",
    componentName: "Candidate Card",
    usageCount: 8230,
    projectsUsing: 156,
    lastUsed: "2024-01-14",
    trending: true,
    adoptionRate: 0.87,
    category: "recruitment"
  },
  {
    componentId: "modal",
    componentName: "Modal",
    usageCount: 7650,
    projectsUsing: 189,
    lastUsed: "2024-01-13",
    trending: false,
    adoptionRate: 0.82,
    category: "feedback"
  }
]

export const systemHealth: SystemHealth = {
  overall: 97,
  components: 98,
  documentation: 95,
  accessibility: 98,
  performance: 98,
  lastUpdated: "2024-01-15T10:30:00Z"
}

// Helper functions
export function getMetricsByCategory(category: AdoptionMetric["category"]): AdoptionMetric[] {
  return adoptionMetrics.filter(metric => metric.category === category)
}

export function getTopComponents(limit: number = 10): ComponentUsageStat[] {
  return [...componentUsageStats]
    .sort((a, b) => b.usageCount - a.usageCount)
    .slice(0, limit)
}

export function getTrendingComponents(): ComponentUsageStat[] {
  return componentUsageStats.filter(stat => stat.trending)
}

export function getRecentComponents(days: number = 7): ComponentUsageStat[] {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)
  
  return componentUsageStats.filter(stat => {
    const lastUsed = new Date(stat.lastUsed)
    return lastUsed >= cutoffDate
  })
}

