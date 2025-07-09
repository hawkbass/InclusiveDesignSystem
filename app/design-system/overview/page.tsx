"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle2, Shield, Monitor, Layers, BookOpen, Palette, Grid3X3, ArrowRight, Users, Copy, ExternalLink, Download, Settings, X, Eye, Code2, Sparkles, TrendingUp, Target, Award, Zap, Clock, Star, ChevronRight, Activity, FileText, GitCommit, Calendar, Edit3, Plus, Minus } from "lucide-react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { cn } from "@/lib/utils"

export default function Overview() {
  // ALL STATE DECLARATIONS FIRST - CRITICAL FOR RULES OF HOOKS
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [currentTheme, setCurrentTheme] = useState("dark")
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("architecture")
  const [selectedActivity, setSelectedActivity] = useState<any>(null)
  const [activities, setActivities] = useState<any[]>([])
  const [newActivityCount, setNewActivityCount] = useState(0)
  const [activeFilter, setActiveFilter] = useState("All Activity")

  // STATIC DATA - NO HOOKS
  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  const recentActivities = [
    {
      id: 1,
      page: "Button Component",
      path: "/components/ui/button.tsx",
      type: "enhancement",
      timestamp: "1 hour ago",
      author: "Development Team",
      changes: [
        "Added new size variants: xs, sm, md, lg, xl",
        "Implemented loading state with spinner animation",
        "Enhanced accessibility with proper ARIA attributes",
        "Added keyboard navigation support for focus management",
        "Improved hover and active state transitions"
      ],
      impact: "High",
      linesChanged: "+89 -23",
      category: "Component",
      detailedChanges: [
        {
          type: "added",
          section: "Size Variants",
          description: "Added comprehensive size system with xs through xl variants",
          code: `const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-xs",
        default: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        xl: "h-12 px-10 text-base",
      },
    },
  }
)`
        },
        {
          type: "added",
          section: "Loading State",
          description: "Implemented loading spinner with proper accessibility",
          code: `{loading && (
  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
)}
{loading ? loadingText || "Loading..." : children}`
        }
      ]
    },
    {
      id: 2,
      page: "Color Tokens",
      path: "/tokens/colors.ts",
      type: "update",
      timestamp: "2 hours ago",
      author: "Design Team",
      changes: [
        "Updated primary color palette with new brand colors",
        "Added semantic color tokens for success, warning, error states",
        "Enhanced dark mode color contrast ratios",
        "Added new neutral color scale with 12 steps",
        "Updated component color mappings for consistency"
      ],
      impact: "High",
      linesChanged: "+156 -78",
      category: "Design Token",
      detailedChanges: [
        {
          type: "modified",
          section: "Primary Color Palette",
          description: "Updated brand primary colors with improved accessibility",
          code: `export const colors = {
  primary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef', // Main brand color
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e',
  },
}`
        },
        {
          type: "added",
          section: "Semantic Colors",
          description: "Added semantic color tokens for consistent state representation",
          code: `export const semanticColors = {
  success: {
    bg: 'hsl(142, 76%, 36%)',
    text: 'hsl(138, 76%, 97%)',
    border: 'hsl(142, 76%, 30%)',
  },
  warning: {
    bg: 'hsl(48, 96%, 53%)',
    text: 'hsl(26, 83%, 14%)',
    border: 'hsl(48, 96%, 47%)',
  },
  error: {
    bg: 'hsl(0, 84%, 60%)',
    text: 'hsl(0, 93%, 94%)',
    border: 'hsl(0, 84%, 54%)',
  },
}`
        }
      ]
    },
    {
      id: 3,
      page: "Form Component",
      path: "/components/ui/form.tsx",
      type: "enhancement",
      timestamp: "3 hours ago",
      author: "Development Team",
      changes: [
        "Added comprehensive form validation with Zod integration",
        "Implemented field-level error handling and display",
        "Added form state management with React Hook Form",
        "Enhanced accessibility with proper label associations",
        "Added form submission states and loading indicators"
      ],
      impact: "High",
      linesChanged: "+234 -67",
      category: "Component",
      detailedChanges: [
        {
          type: "added",
          section: "Form Validation",
          description: "Integrated Zod schema validation with React Hook Form",
          code: `const FormField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    name: string;
    control: Control<any>;
    render: ({ field, fieldState, formState }: any) => React.ReactElement;
  }
>(({ name, control, render, ...props }, ref) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <FormItem ref={ref} {...props}>
          {render({ field, fieldState, formState })}
        </FormItem>
      )}
    />
  );
});`
        }
      ]
    },
    // Add more activities as needed...
  ]

  // ALL USEEFFECT HOOKS AFTER STATE AND DATA
  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply animation speed to document
  useEffect(() => {
    if (mounted && animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed, mounted])

  // Initialize activities from localStorage or default data
  useEffect(() => {
    const savedActivities = localStorage.getItem('design-system-activities')
    if (savedActivities) {
      try {
        const parsed = JSON.parse(savedActivities)
        // Ensure we have valid data and limit to 20 items
        if (Array.isArray(parsed) && parsed.length > 0) {
          setActivities(parsed.slice(0, 20))
        } else {
          setActivities(recentActivities.slice(0, 20))
        }
      } catch (error) {
        console.error('Error parsing saved activities:', error)
        setActivities(recentActivities.slice(0, 20))
      }
    } else {
      setActivities(recentActivities.slice(0, 20))
    }
  }, [])

  // Save activities to localStorage whenever activities change
  useEffect(() => {
    if (activities.length > 0) {
      try {
        localStorage.setItem('design-system-activities', JSON.stringify(activities))
      } catch (error) {
        console.error('Error saving activities to localStorage:', error)
      }
    }
  }, [activities])

  // CALLBACK FUNCTIONS
  // Enhanced function to add new activity with persistence
  const addNewActivity = useCallback((newActivity: any) => {
    setActivities(prev => {
      // Add new activity and limit to 20 items
      const updated = [newActivity, ...prev].slice(0, 20)
      return updated
    })
    setNewActivityCount(prev => prev + 1)
    
    // Reset counter after 5 seconds
    setTimeout(() => setNewActivityCount(0), 5000)
  }, [])

  // Simulate new activity updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate a new activity every 30 seconds (for demo purposes)
      if (Math.random() > 0.7) {
        // Generate realistic activity data
        const activityTypes = [
          {
            page: "Toast Component",
            path: "/components/ui/toast.tsx",
            type: "enhancement",
            author: "Development Team",
            category: "Component",
            impact: "Medium",
            changes: [
              "Added new toast positioning system with 9 position variants",
              "Implemented auto-dismiss functionality with customizable duration",
              "Enhanced accessibility with proper ARIA live regions",
              "Added toast stacking and queue management",
              "Improved animation system with spring physics"
            ],
            linesChanged: "+156 -34",
            detailedChanges: [
              {
                type: "added",
                section: "Toast Positioning",
                description: "Implemented comprehensive positioning system with 9 variants",
                code: `const toastPositions = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'center-left': 'top-1/2 left-4 -translate-y-1/2',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'center-right': 'top-1/2 right-4 -translate-y-1/2',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
}`
              },
              {
                type: "added",
                section: "Auto-dismiss System",
                description: "Added intelligent auto-dismiss with pause on hover",
                code: `const useToastTimer = (duration: number, onDismiss: () => void) => {
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(duration)
  
  useEffect(() => {
    if (isPaused || timeLeft <= 0) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 100) {
          onDismiss()
          return 0
        }
        return prev - 100
      })
    }, 100)
    
    return () => clearInterval(timer)
  }, [isPaused, timeLeft, onDismiss])
}`
              }
            ]
          },
          {
            page: "Elevation Tokens",
            path: "/tokens/elevation.ts",
            type: "update",
            author: "Design Team",
            category: "Design Token",
            impact: "High",
            changes: [
              "Updated shadow system with new elevation scale",
              "Added semantic shadow tokens for different UI contexts",
              "Enhanced dark mode shadow visibility",
              "Implemented layered shadow system for depth",
              "Added shadow color tokens for brand consistency"
            ],
            linesChanged: "+89 -45",
            detailedChanges: [
              {
                type: "modified",
                section: "Elevation Scale",
                description: "Updated shadow system with 12-step elevation scale",
                code: `export const elevation = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
}`
              },
              {
                type: "added",
                section: "Semantic Shadows",
                description: "Added context-specific shadow tokens for UI components",
                code: `export const semanticShadows = {
  card: 'var(--shadow-md)',
  modal: 'var(--shadow-2xl)',
  dropdown: 'var(--shadow-lg)',
  tooltip: 'var(--shadow-sm)',
  focus: '0 0 0 3px rgb(var(--color-primary) / 0.1)',
  error: '0 0 0 3px rgb(var(--color-error) / 0.1)',
}`
              }
            ]
          },
          {
            page: "Search Pattern",
            path: "/patterns/search.tsx",
            type: "addition",
            author: "UX Team",
            category: "Pattern",
            impact: "High",
            changes: [
              "Created comprehensive search pattern with filtering",
              "Added search result highlighting and pagination",
              "Implemented search history and suggestions",
              "Added keyboard navigation for search results",
              "Created search analytics and performance tracking"
            ],
            linesChanged: "+312 -8",
            detailedChanges: [
              {
                type: "added",
                section: "Search Component",
                description: "Built full-featured search with autocomplete and filtering",
                code: `export const SearchPattern = ({ 
  onSearch, 
  placeholder = "Search...", 
  filters = [],
  showHistory = true 
}) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) return
    
    setIsLoading(true)
    try {
      const response = await searchAPI(searchQuery, filters)
      setResults(response.data)
      saveSearchHistory(searchQuery)
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      setIsLoading(false)
    }
  }, [filters])
}`
              }
            ]
          },
          {
            page: "Loading States",
            path: "/patterns/loading.tsx",
            type: "enhancement",
            author: "Development Team",
            category: "Pattern",
            impact: "Medium",
            changes: [
              "Enhanced loading pattern with skeleton screens",
              "Added progressive loading for better UX",
              "Implemented loading state management",
              "Added accessibility improvements for screen readers",
              "Created loading animation performance optimizations"
            ],
            linesChanged: "+198 -67",
            detailedChanges: [
              {
                type: "added",
                section: "Skeleton Loading",
                description: "Implemented skeleton screens for better perceived performance",
                code: `const SkeletonLoader = ({ 
  lines = 3, 
  avatar = false, 
  className = "" 
}) => {
  return (
    <div className={cn("animate-pulse space-y-3", className)}>
      {avatar && (
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
      )}
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 bg-slate-700 rounded"></div>
          <div className="h-4 bg-slate-700 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  )
}`
              }
            ]
          },
          {
            page: "Focus Management",
            path: "/utils/focus.ts",
            type: "addition",
            author: "Accessibility Team",
            category: "System",
            impact: "High",
            changes: [
              "Created comprehensive focus management utilities",
              "Added focus trap functionality for modals",
              "Implemented focus restoration system",
              "Added keyboard navigation helpers",
              "Created focus visibility enhancements"
            ],
            linesChanged: "+245 -12",
            detailedChanges: [
              {
                type: "added",
                section: "Focus Trap",
                description: "Implemented focus trap for modal and dialog components",
                code: `export const useFocusTrap = (containerRef: RefObject<HTMLElement>) => {
  const [isActive, setIsActive] = useState(false)
  const previousFocus = useRef<HTMLElement | null>(null)
  
  const activate = useCallback(() => {
    previousFocus.current = document.activeElement as HTMLElement
    setIsActive(true)
  }, [])
  
  const deactivate = useCallback(() => {
    setIsActive(false)
    if (previousFocus.current) {
      previousFocus.current.focus()
    }
  }, [])
  
  useEffect(() => {
    if (!isActive || !containerRef.current) return
    
    const container = containerRef.current
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }
    
    container.addEventListener('keydown', handleKeyDown)
    firstElement?.focus()
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, containerRef])
  
  return { activate, deactivate, isActive }
}`
              }
            ]
          },
          {
            page: "Notification System",
            path: "/components/ui/notification.tsx",
            type: "addition",
            author: "Development Team",
            category: "Component",
            impact: "Medium",
            changes: [
              "Built comprehensive notification system",
              "Added multiple notification types and priorities",
              "Implemented notification queue management",
              "Added sound and visual notification options",
              "Created notification persistence and history"
            ],
            linesChanged: "+278 -15",
            detailedChanges: [
              {
                type: "added",
                section: "Notification Types",
                description: "Implemented multiple notification types with priority system",
                code: `export type NotificationType = 'info' | 'success' | 'warning' | 'error'
export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent'

export interface Notification {
  id: string
  type: NotificationType
  priority: NotificationPriority
  title: string
  message: string
  duration?: number
  persistent?: boolean
  actions?: NotificationAction[]
  timestamp: Date
}`
              }
            ]
          }
        ]

        // Randomly select an activity type
        const randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)]
        
        const newActivity = {
          id: Date.now(),
          page: randomActivity.page,
          path: randomActivity.path,
          type: randomActivity.type,
          timestamp: "Just now",
          author: randomActivity.author,
          changes: randomActivity.changes,
          impact: randomActivity.impact,
          linesChanged: randomActivity.linesChanged,
          category: randomActivity.category,
          detailedChanges: randomActivity.detailedChanges
        }
        
        addNewActivity(newActivity)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [addNewActivity])

  // EARLY RETURN FOR MOUNTING
  if (!mounted) {
    return null
  }

  // HELPER FUNCTIONS
  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // Filter activities based on selected category
  const filteredActivities = activities.filter(activity => {
    if (activeFilter === "All Activity") return true
    if (activeFilter === "Components") return activity.category === "Component"
    if (activeFilter === "Design Tokens") return activity.category === "Design Token"
    if (activeFilter === "Patterns") return activity.category === "Pattern"
    if (activeFilter === "Documentation") return activity.category === "Documentation"
    if (activeFilter === "System") return activity.category === "System"
    return true
  })

  // Count activities by category for filter buttons
  const getCategoryCount = (category: string) => {
    if (category === "All Activity") return activities.length
    if (category === "Components") return activities.filter(a => a.category === "Component").length
    if (category === "Design Tokens") return activities.filter(a => a.category === "Design Token").length
    if (category === "Patterns") return activities.filter(a => a.category === "Pattern").length
    if (category === "Documentation") return activities.filter(a => a.category === "Documentation").length
    if (category === "System") return activities.filter(a => a.category === "System").length
    return 0
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Component":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "Design Token":
        return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      case "Pattern":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      case "Documentation":
        return "text-orange-400 bg-orange-500/20 border-orange-500/30"
      case "System":
        return "text-fuchsia-400 bg-fuchsia-500/20 border-fuchsia-500/30"
      default:
        return "text-slate-400 bg-slate-500/20 border-slate-500/30"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "enhancement":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "update":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      case "addition":
        return "text-purple-400 bg-purple-500/20 border-purple-500/30"
      case "fix":
        return "text-orange-400 bg-orange-500/20 border-orange-500/30"
      default:
        return "text-slate-400 bg-slate-500/20 border-slate-500/30"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-red-400 bg-red-500/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-500/20"
      case "Low":
        return "text-green-400 bg-green-500/20"
      default:
        return "text-slate-400 bg-slate-500/20"
    }
  }

  // STATIC DATA
  const systemStats = [
    { 
      label: "Components", 
      value: "45+", 
      icon: Layers, 
      color: "text-blue-400", 
      bgColor: "bg-blue-500/20",
      change: "+12 this quarter",
      description: "Reusable UI components"
    },
    { 
      label: "Design Tokens", 
      value: "120+", 
      icon: Palette, 
      color: "text-purple-400", 
      bgColor: "bg-purple-500/20",
      change: "+25 this month",
      description: "Design system variables"
    },
    { 
      label: "UI Patterns", 
      value: "25+", 
      icon: Grid3X3, 
      color: "text-green-400", 
      bgColor: "bg-green-500/20",
      change: "+8 this quarter",
      description: "Common interface patterns"
    },
    { 
      label: "Team Members", 
      value: "12", 
      icon: Users, 
      color: "text-orange-400", 
      bgColor: "bg-orange-500/20",
      change: "Cross-functional",
      description: "Contributors worldwide"
    },
  ]

  const principles = [
    {
      title: "Accessibility First",
      description: "WCAG 2.1 AA compliance ensures every user can access and use our interfaces effectively.",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      title: "Consistency",
      description: "Unified visual language and predictable behaviors across all touchpoints.",
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      title: "Efficiency",
      description: "Build faster with reusable, well-documented components and patterns.",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20"
    },
    {
      title: "Scalability",
      description: "Designed to grow with your product, team, and user base.",
      icon: TrendingUp,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      title: "Collaboration",
      description: "Built for designers, engineers, and product teams working together.",
      icon: Users,
      color: "text-fuchsia-400",
      bgColor: "bg-fuchsia-500/20"
    },
    {
      title: "Excellence",
      description: "Continuously improving through feedback, research, and best practices.",
      icon: Award,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    }
  ]

  const features = [
    "Candidate profile cards and management",
    "Job posting and application forms",
    "Interview scheduling components",
    "Analytics and reporting widgets",
    "Navigation and layout components",
    "Form controls and data input",
    "Dark theme optimized design",
    "Mobile-first responsive approach",
    "Comprehensive accessibility support",
    "Customizable color system",
    "TypeScript support included",
    "Figma design kit available"
  ]

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Enhanced Header */}
        <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-900/20">
          <div className="px-6 lg:px-12 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-100">Design System Overview</h1>
                  <p className="text-sm text-slate-400">Architecture, principles, and system components</p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className={`transition-all ${settingsOpen ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'hover:bg-slate-800'}`}
                  style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            {settingsOpen && (
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 animate-in slide-in-from-top-2" style={{ animationDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-slate-200">Interface Settings</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSettingsOpen(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Animation Speed</Label>
                      <span className="text-xs text-slate-400 font-mono">{safeAnimationSpeed}x</span>
                    </div>
                    <Slider
                      value={animationSpeed}
                      onValueChange={setAnimationSpeed}
                      max={3}
                      min={0.5}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">View Options</Label>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Eye className="h-3 w-3 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8">
                        <Code2 className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="px-6 lg:px-12 py-8">
          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Production Ready
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  WCAG 2.1 AA
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Monitor className="w-3 h-3 mr-1" />
                  Fully Responsive
                </Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Enterprise Ready
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Inclusive Design System
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A comprehensive, accessible design foundation built specifically for recruitment applications. 
                Providing consistent, beautiful, and efficient user experiences across all platforms.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Components
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-slate-800 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <Download className="h-5 w-5 mr-2" />
                  Download Assets
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Stats Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {systemStats.map((stat, index) => (
                <Card key={stat.label} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                        <div className="text-sm text-slate-400">{stat.label}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400">{stat.description}</div>
                      <div className="text-xs text-green-400 font-medium">{stat.change}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Content Tabs */}
          <section className="mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                {/* Enhanced Tab Navigation with Component Gallery Styling */}
                <div className="relative">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
                  <TabsTrigger 
                    value="architecture"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Layers className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Architecture
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="principles"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Target className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Principles
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="features"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Star className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Features
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                  <TabsTrigger 
                      value="activity"
                      className="group flex flex-col items-center gap-3 py-5 px-3 text-xs sm:text-sm data-[state=active]:bg-gradient-to-br data-[state=active]:from-fuchsia-500/25 data-[state=active]:via-purple-500/20 data-[state=active]:to-pink-500/15 data-[state=active]:text-white data-[state=active]:border-fuchsia-400/40 data-[state=active]:shadow-lg data-[state=active]:shadow-fuchsia-500/20 hover:bg-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ease-out rounded-2xl relative border border-transparent overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-fuchsia-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 group-data-[state=active]:from-fuchsia-500/10 group-data-[state=active]:via-purple-500/8 group-data-[state=active]:to-pink-500/6 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with enhanced effects */}
                      <div className="relative z-10">
                        <div className="relative">
                          <Activity className="h-6 w-6 flex-shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-fuchsia-300 group-hover:scale-110 group-data-[state=active]:scale-115 transition-all duration-300 ease-out drop-shadow-sm" />
                          
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-hover:bg-fuchsia-400/20 group-data-[state=active]:bg-fuchsia-400/30 rounded-lg blur-md scale-150 transition-all duration-300"></div>
                          
                          {/* Active pulse effect */}
                          <div className="absolute inset-0 bg-fuchsia-400/0 group-data-[state=active]:bg-fuchsia-400/20 rounded-lg blur-xl scale-200 animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                      </div>
                      
                      {/* Label with better typography */}
                      <span className="font-medium leading-tight text-center text-slate-400 group-hover:text-slate-200 group-data-[state=active]:text-white group-data-[state=active]:font-semibold transition-all duration-300 hidden sm:block text-xs lg:text-sm tracking-wide">
                        Activity
                      </span>
                      
                      {/* Active indicator line */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full group-data-[state=active]:w-8 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}></div>
                  </TabsTrigger>
                </TabsList>
                  
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl -z-10 blur-xl"></div>
                </div>
              </div>

              <TabsContent value="architecture" className="space-y-8">
                <ArchitectureTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="principles" className="space-y-8">
                <PrinciplesTab principles={principles} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="features" className="space-y-8">
                <FeaturesTab features={features} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="activity" className="space-y-8">
                <RecentActivityTab 
                  safeAnimationSpeed={safeAnimationSpeed} 
                  onViewChanges={setSelectedActivity}
                  activities={activities}
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                  newActivityCount={newActivityCount}
                  getCategoryCount={getCategoryCount}
                  getCategoryColor={getCategoryColor}
                  getTypeColor={getTypeColor}
                  getImpactColor={getImpactColor}
                />
              </TabsContent>
            </Tabs>
          </section>
        </div>

        {/* Changes Detail Modal */}
        <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
          <DialogContent className="w-[calc(100vw-2rem)] max-w-none sm:w-[calc(100vw-4rem)] sm:max-w-2xl lg:max-w-4xl h-[90vh] flex flex-col bg-slate-900 border-slate-700 p-0 m-4">
            <DialogHeader className="flex-shrink-0 p-4 sm:p-6 pb-4 border-b border-slate-700/50">
              <DialogTitle className="text-base sm:text-lg lg:text-xl text-slate-100 flex items-center gap-2 sm:gap-3 pr-8">
                <GitCommit className="h-4 w-4 sm:h-5 sm:w-5 text-fuchsia-400 flex-shrink-0" />
                <span className="truncate text-sm sm:text-base lg:text-lg">Changes to {selectedActivity?.page}</span>
              </DialogTitle>
            </DialogHeader>
            
            {selectedActivity && (
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="space-y-4 sm:space-y-6">
                  {/* Activity Header */}
                  <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={getTypeColor(selectedActivity.type)}>
                        {selectedActivity.type}
                      </Badge>
                      <Badge className={getImpactColor(selectedActivity.impact)}>
                        {selectedActivity.impact} Impact
                      </Badge>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span className="whitespace-nowrap">{selectedActivity.timestamp}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3 flex-shrink-0" />
                        <span className="whitespace-nowrap">{selectedActivity.author}</span>
                      </span>
                      <code className="text-xs bg-slate-900/50 px-2 py-1 rounded whitespace-nowrap">
                        {selectedActivity.linesChanged}
                      </code>
                    </div>
                  </div>

                  {/* Detailed Changes */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-200 flex items-center gap-2">
                      <Edit3 className="h-4 w-4 sm:h-5 sm:w-5 text-fuchsia-400 flex-shrink-0" />
                      Detailed Changes
                    </h3>
                    
                    {selectedActivity.detailedChanges?.map((change: any, index: number) => (
                      <Card key={index} className="bg-slate-800/30 border-slate-700/50">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-start gap-3">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              change.type === 'added' ? 'bg-green-500/20' :
                              change.type === 'modified' ? 'bg-blue-500/20' :
                              'bg-red-500/20'
                            }`}>
                              {change.type === 'added' ? (
                                <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                              ) : change.type === 'modified' ? (
                                <Edit3 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                              ) : (
                                <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0 overflow-hidden">
                              <h4 className="font-medium text-slate-200 mb-1 text-sm sm:text-base break-words">{change.section}</h4>
                              <p className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-3 break-words leading-relaxed">{change.description}</p>
                              {change.code && (
                                <div className="relative w-full">
                                  <div className="bg-slate-900/50 rounded border border-slate-700/30 overflow-hidden">
                                    <div className="overflow-x-auto max-w-full">
                                      <pre className="p-2 sm:p-3 text-xs leading-relaxed min-w-0">
                                        <code className="text-slate-300 block whitespace-pre-wrap break-all">
                                          {change.code}
                                        </code>
                                      </pre>
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleCopyCode(change.code, `change-${index}`)}
                                    className="absolute top-1 right-1 sm:top-2 sm:right-2 h-5 w-5 sm:h-6 sm:w-6 p-0 opacity-0 hover:opacity-100 transition-opacity bg-slate-800/80 hover:bg-slate-700"
                                  >
                                    {copiedCode === `change-${index}` ? (
                                      <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400" />
                                    ) : (
                                      <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                    )}
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )) || (
                      <div className="space-y-2 sm:space-y-3">
                        {selectedActivity.changes.map((change: string, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-300 text-xs sm:text-sm leading-relaxed break-words min-w-0">{change}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* File Path */}
                  <div className="p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-2">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="font-medium">File Path:</span>
                    </div>
                    <div className="bg-slate-900/50 rounded overflow-hidden">
                      <div className="overflow-x-auto">
                        <code className="text-slate-300 px-2 sm:px-3 py-1.5 sm:py-2 text-xs block whitespace-nowrap min-w-0">
                          {selectedActivity.path}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}

// Tab Components
function ArchitectureTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const architectureLayers = [
    {
      layer: "Design Tokens",
      description: "Colors, spacing, typography foundations that define the visual language",
      status: "Complete",
      icon: Palette,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      examples: ["Color palette", "Typography scale", "Spacing system", "Border radius", "Shadows"]
    },
    {
      layer: "Base Components",
      description: "Fundamental UI elements like buttons, inputs, and cards",
      status: "Complete", 
      icon: Layers,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      examples: ["Button", "Input", "Card", "Badge", "Avatar"]
    },
    {
      layer: "Composite Components",
      description: "Complex components built from base elements",
      status: "In Progress",
      icon: Grid3X3,
      color: "text-green-400", 
      bgColor: "bg-green-500/20",
      examples: ["Forms", "Navigation", "Data tables", "Modals", "Calendars"]
    },
    {
      layer: "Page Templates",
      description: "Complete page layouts and application workflows",
      status: "Planned",
      icon: Monitor,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      examples: ["Dashboard", "Candidate profiles", "Job postings", "Analytics", "Settings"]
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
                <Layers className="h-6 w-6 text-fuchsia-400" />
                System Architecture
              </CardTitle>
              <CardDescription className="text-slate-400 mt-2">
                Our design system follows a layered architecture approach, building from foundational tokens to complete applications.
              </CardDescription>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onCopyCode("Design System Architecture: Tokens → Components → Patterns → Applications", "architecture")}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === "architecture" ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {architectureLayers.map((layer, index) => (
              <Card key={layer.layer} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${layer.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        <layer.icon className={`h-6 w-6 ${layer.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                          {layer.layer}
                        </h3>
                        <p className="text-slate-400 text-sm mt-1">{layer.description}</p>
                      </div>
                    </div>
                    <Badge className={`${
                      layer.status === 'Complete' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                      layer.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                      'bg-slate-500/20 text-slate-300 border-slate-500/30'
                    }`}>
                      {layer.status}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.examples.map((example, idx) => (
                        <Badge key={idx} className="bg-slate-700/50 text-slate-300 text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Progress Overview */}
          <div className="mt-8 p-6 bg-slate-900/30 rounded-lg border border-slate-700/30">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Overall Progress</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">System Completion</span>
                <span className="text-slate-300 font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-400">100%</div>
                  <div className="text-xs text-slate-500">Tokens</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-400">95%</div>
                  <div className="text-xs text-slate-500">Base Components</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-400">60%</div>
                  <div className="text-xs text-slate-500">Composite</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-400">25%</div>
                  <div className="text-xs text-slate-500">Templates</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PrinciplesTab({ principles, safeAnimationSpeed }: { principles: any[], safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Target className="h-6 w-6 text-fuchsia-400" />
            Design Principles
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Core values that guide every design decision and drive our commitment to excellent user experiences.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {principles.map((principle, index) => (
          <Card key={principle.title} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 ${principle.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <principle.icon className={`h-7 w-7 ${principle.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function FeaturesTab({ features, safeAnimationSpeed }: { features: string[], safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Star className="h-6 w-6 text-fuchsia-400" />
            What's Included
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Everything you need to build modern, accessible recruitment applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 mb-4">Recruitment Components</h3>
              <div className="space-y-3">
                {features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group hover:bg-slate-800/30 p-2 rounded-lg transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <CheckCircle2 className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                    <span className="text-slate-300 group-hover:text-slate-100 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-fuchsia-300 mb-4">Platform Features</h3>
              <div className="space-y-3">
                {features.slice(6).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group hover:bg-slate-800/30 p-2 rounded-lg transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <CheckCircle2 className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                    <span className="text-slate-300 group-hover:text-slate-100 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function RecentActivityTab({ safeAnimationSpeed, onViewChanges, activities, activeFilter, setActiveFilter, newActivityCount, getCategoryCount, getCategoryColor, getTypeColor, getImpactColor }: { safeAnimationSpeed: number, onViewChanges: (activity: any) => void, activities: any[], activeFilter: string, setActiveFilter: React.Dispatch<React.SetStateAction<string>>, newActivityCount: number, getCategoryCount: (category: string) => number, getCategoryColor: (category: string) => string, getTypeColor: (type: string) => string, getImpactColor: (impact: string) => string }) {
  // Filter activities based on selected category
  const filteredActivities = activities.filter(activity => {
    if (activeFilter === "All Activity") return true
    if (activeFilter === "Components") return activity.category === "Component"
    if (activeFilter === "Design Tokens") return activity.category === "Design Token"
    if (activeFilter === "Patterns") return activity.category === "Pattern"
    if (activeFilter === "Documentation") return activity.category === "Documentation"
    if (activeFilter === "System") return activity.category === "System"
    return true
  })

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Activity className="h-6 w-6 text-fuchsia-400" />
                System Activity Feed
                {newActivityCount > 0 && (
                  <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 animate-pulse">
                    {newActivityCount} new
                  </Badge>
                )}
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
                Real-time updates across components, tokens, patterns, and documentation.
                {activeFilter !== "All Activity" && (
                  <span className="text-fuchsia-300 font-medium">
                    {" "}Showing {filteredActivities.length} {activeFilter.toLowerCase()} activities.
                  </span>
                )}
          </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                Live
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Functional Activity Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={activeFilter === "All Activity" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setActiveFilter("All Activity")}
          className={`transition-all ${
            activeFilter === "All Activity" 
              ? "bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-300" 
              : "bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/50"
          }`}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          All Activity
          <Badge className="ml-2 bg-slate-600/50 text-slate-300 text-xs">
            {getCategoryCount("All Activity")}
                </Badge>
        </Button>
        <Button 
          variant={activeFilter === "Components" ? "default" : "ghost"} 
          size="sm" 
          onClick={() => setActiveFilter("Components")}
          className={`transition-all ${
            activeFilter === "Components"
              ? "bg-blue-500/20 border-blue-500/50 text-blue-300"
              : "text-blue-400 hover:bg-blue-500/20 hover:text-blue-300"
          }`}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          Components
          <Badge className="ml-2 bg-blue-600/30 text-blue-300 text-xs">
            {getCategoryCount("Components")}
          </Badge>
        </Button>
        <Button 
          variant={activeFilter === "Design Tokens" ? "default" : "ghost"} 
          size="sm" 
          onClick={() => setActiveFilter("Design Tokens")}
          className={`transition-all ${
            activeFilter === "Design Tokens"
              ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
              : "text-purple-400 hover:bg-purple-500/20 hover:text-purple-300"
          }`}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          Design Tokens
          <Badge className="ml-2 bg-purple-600/30 text-purple-300 text-xs">
            {getCategoryCount("Design Tokens")}
          </Badge>
        </Button>
        <Button 
          variant={activeFilter === "Patterns" ? "default" : "ghost"} 
          size="sm" 
          onClick={() => setActiveFilter("Patterns")}
          className={`transition-all ${
            activeFilter === "Patterns"
              ? "bg-green-500/20 border-green-500/50 text-green-300"
              : "text-green-400 hover:bg-green-500/20 hover:text-green-300"
          }`}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          Patterns
          <Badge className="ml-2 bg-green-600/30 text-green-300 text-xs">
            {getCategoryCount("Patterns")}
          </Badge>
        </Button>
        <Button 
          variant={activeFilter === "Documentation" ? "default" : "ghost"} 
          size="sm" 
          onClick={() => setActiveFilter("Documentation")}
          className={`transition-all ${
            activeFilter === "Documentation"
              ? "bg-orange-500/20 border-orange-500/50 text-orange-300"
              : "text-orange-400 hover:bg-orange-500/20 hover:text-orange-300"
          }`}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          Documentation
          <Badge className="ml-2 bg-orange-600/30 text-orange-300 text-xs">
            {getCategoryCount("Documentation")}
          </Badge>
        </Button>
        <Button 
          variant={activeFilter === "System" ? "default" : "ghost"} 
          size="sm" 
          onClick={() => setActiveFilter("System")}
          className={`transition-all ${
            activeFilter === "System"
              ? "bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-300"
              : "text-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-300"
          }`}
          style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
        >
          System
          <Badge className="ml-2 bg-fuchsia-600/30 text-fuchsia-300 text-xs">
            {getCategoryCount("System")}
          </Badge>
        </Button>
              </div>

      {/* Filtered Activity List */}
      <div className="space-y-6">
        {filteredActivities.length === 0 ? (
          <Card className="bg-slate-800/30 border-slate-700/50">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center">
                  <Activity className="h-8 w-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-300 mb-2">No activities found</h3>
                  <p className="text-sm text-slate-500">
                    No {activeFilter.toLowerCase()} activities to display at this time.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setActiveFilter("All Activity")}
                  className="mt-2"
                >
                  View All Activities
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Activity Feed Header with View Options */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-slate-200">
                  {activeFilter === "All Activity" ? "Recent Activity" : `${activeFilter} Activity`}
                </h3>
                <Badge className="bg-slate-700/50 text-slate-300 text-sm">
                  {filteredActivities.length} {filteredActivities.length === 1 ? 'item' : 'items'}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-slate-200">
                  <Clock className="h-3 w-3 mr-1" />
                  Sort by time
                </Button>
              </div>
            </div>

            {/* Enhanced Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredActivities.map((activity, index) => (
                <Card key={activity.id} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group hover:shadow-lg hover:shadow-slate-900/20 h-fit" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <CardContent className="p-5">
                    {/* Category Badge at Top */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(activity.category)}>
                        {activity.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>

                    {/* Activity Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        <GitCommit className="h-5 w-5 text-fuchsia-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colors mb-1 leading-tight" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                          {activity.page}
                        </h4>
                        <p className="text-xs text-slate-500 truncate mb-2">{activity.path}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Users className="h-3 w-3" />
                          <span>{activity.author}</span>
                        </div>
                      </div>
                    </div>

                    {/* Type and Impact Row */}
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(activity.type)}>
                          {activity.type}
                        </Badge>
                        <Badge className={getImpactColor(activity.impact)}>
                          {activity.impact}
                        </Badge>
                      </div>
                      <code className="text-xs bg-slate-900/50 px-2 py-1 rounded whitespace-nowrap">
                        {activity.linesChanged}
                      </code>
                    </div>

                    {/* Changes Preview */}
                    <div className="space-y-2 mb-4">
                      <h5 className="text-xs font-medium text-slate-300 flex items-center gap-1">
                        <Edit3 className="h-3 w-3 text-fuchsia-400" />
                        Key Changes
                      </h5>
                      <div className="space-y-1.5">
                        {activity.changes.slice(0, 2).map((change: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <div className="w-1 h-1 bg-fuchsia-400 rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-slate-400 leading-relaxed line-clamp-2">{change}</span>
                          </div>
                        ))}
                        {activity.changes.length > 2 && (
                          <div className="text-xs text-slate-500 pl-3 italic">
                            +{activity.changes.length - 2} more changes
                          </div>
                        )}
                  </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onViewChanges(activity)}
                      className="w-full justify-between text-xs hover:bg-fuchsia-500/20 hover:text-fuchsia-300 opacity-0 group-hover:opacity-100 transition-opacity border border-transparent hover:border-fuchsia-500/30"
                      style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
                    >
                      View Details
                      <ChevronRight className="h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Timeline View Alternative */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-200">Activity Timeline</h3>
                <Badge className="bg-slate-700/50 text-slate-300 text-sm">
                  Last 24 hours
                </Badge>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500/50 via-purple-500/30 to-transparent"></div>
                
                <div className="space-y-6">
                  {filteredActivities.slice(0, 6).map((activity, index) => (
                    <div key={`timeline-${activity.id}`} className="relative flex items-start gap-6">
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center">
                          <GitCommit className="h-5 w-5 text-fuchsia-400" />
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 bg-fuchsia-500/20 rounded-full animate-ping opacity-75"></div>
                      </div>
                      
                      {/* Timeline Content */}
                      <div className="flex-1 min-w-0">
                        <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                                  {activity.page}
                                </h4>
                                <p className="text-sm text-slate-400 mt-1">
                                  {activity.changes[0]}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                                <Badge className={getCategoryColor(activity.category)}>
                                  {activity.category}
                                </Badge>
                                <Badge className={getTypeColor(activity.type)}>
                                  {activity.type}
                                </Badge>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between text-xs text-slate-500">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {activity.timestamp}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {activity.author}
                                </span>
                              </div>
                              <code className="bg-slate-900/50 px-2 py-1 rounded">
                                {activity.linesChanged}
                              </code>
              </div>
            </CardContent>
          </Card>
                      </div>
                    </div>
        ))}
      </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Enhanced Activity Summary with Dynamic Counts */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">
            {activeFilter === "All Activity" ? "System Statistics" : `${activeFilter} Statistics`}
          </CardTitle>
          <CardDescription>
            {activeFilter === "All Activity" 
              ? "Activity breakdown across the entire design system"
              : `Detailed breakdown of ${activeFilter.toLowerCase()} activities`
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300">By Category</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-blue-400">Components</span>
                  <span className="text-sm font-medium text-slate-300">{getCategoryCount("Components")}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-purple-400">Design Tokens</span>
                  <span className="text-sm font-medium text-slate-300">{getCategoryCount("Design Tokens")}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-green-400">Patterns</span>
                  <span className="text-sm font-medium text-slate-300">{getCategoryCount("Patterns")}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-orange-400">Documentation</span>
                  <span className="text-sm font-medium text-slate-300">{getCategoryCount("Documentation")}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-fuchsia-400">System</span>
                  <span className="text-sm font-medium text-slate-300">{getCategoryCount("System")}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300">By Type</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-blue-400">Enhancements</span>
                  <span className="text-sm font-medium text-slate-300">
                    {filteredActivities.filter(a => a.type === "enhancement").length}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-green-400">Updates</span>
                  <span className="text-sm font-medium text-slate-300">
                    {filteredActivities.filter(a => a.type === "update").length}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-purple-400">Additions</span>
                  <span className="text-sm font-medium text-slate-300">
                    {filteredActivities.filter(a => a.type === "addition").length}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300">Impact Level</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-red-400">High Impact</span>
                  <span className="text-sm font-medium text-slate-300">
                    {filteredActivities.filter(a => a.impact === "High").length}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-yellow-400">Medium Impact</span>
                  <span className="text-sm font-medium text-slate-300">
                    {filteredActivities.filter(a => a.impact === "Medium").length}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                  <span className="text-sm text-green-400">Low Impact</span>
                  <span className="text-sm font-medium text-slate-300">
                    {filteredActivities.filter(a => a.impact === "Low").length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300">
                {activeFilter === "All Activity" ? "Total System Changes" : `Total ${activeFilter} Changes`}
              </span>
              <span className="text-lg font-bold text-fuchsia-400">
                {activeFilter === "All Activity" ? "+1,847 -567" : `+${Math.floor(Math.random() * 500) + 100} -${Math.floor(Math.random() * 200) + 50}`}
              </span>
            </div>
            <div className="text-xs text-slate-500">
              {activeFilter === "All Activity" 
                ? "Across 15 components, 12 design tokens, 8 patterns, and 6 documentation pages"
                : `Showing ${filteredActivities.length} ${activeFilter.toLowerCase()} activities`
              }
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Helper functions for modal
function getTypeColor(type: string) {
  switch (type) {
    case "enhancement":
      return "text-blue-400 bg-blue-500/20 border-blue-500/30"
    case "update":
      return "text-green-400 bg-green-500/20 border-green-500/30"
    case "addition":
      return "text-purple-400 bg-purple-500/20 border-purple-500/30"
    case "fix":
      return "text-orange-400 bg-orange-500/20 border-orange-500/30"
    default:
      return "text-slate-400 bg-slate-500/20 border-slate-500/30"
  }
}

function getImpactColor(impact: string) {
  switch (impact) {
    case "High":
      return "text-red-400 bg-red-500/20"
    case "Medium":
      return "text-yellow-400 bg-yellow-500/20"
    case "Low":
      return "text-green-400 bg-green-500/20"
    default:
      return "text-slate-400 bg-slate-500/20"
  }
} 