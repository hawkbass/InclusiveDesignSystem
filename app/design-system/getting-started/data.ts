// Data structures for the getting-started page

import { 
  Palette, Code2, Target, BookOpen, Download, ExternalLink, 
  MessageSquare, Globe, Play, Shield, Zap, Settings, Component
} from "lucide-react"

export const allSearchableItems = [
  // Quick Start Items
  { id: "npm-install", name: "NPM Install Command", category: "Installation", type: "command", 
    value: "npm install @hawkbass/inclusive-design-core", usage: "Package installation", difficulty: "beginner" },
  { id: "yarn-install", name: "Yarn Install Command", category: "Installation", type: "command", 
    value: "yarn add @hawkbass/inclusive-design-core", usage: "Package installation", difficulty: "beginner" },
  { id: "pnpm-install", name: "PNPM Install Command", category: "Installation", type: "command", 
    value: "pnpm add @hawkbass/inclusive-design-core", usage: "Package installation", difficulty: "beginner" },
    
  // Configuration
  { id: "theme-config", name: "Theme Configuration", category: "Configuration", type: "config",
    description: "Set up custom theme with colours and tokens", difficulty: "intermediate" },
  { id: "tailwind-config", name: "Tailwind Integration", category: "Configuration", type: "config",
    description: "Configure Tailwind CSS with design tokens", difficulty: "intermediate" },
  { id: "provider-setup", name: "Provider Setup", category: "Configuration", type: "code",
    description: "Wrap app with theme provider", difficulty: "beginner" },
    
  // Components
  { id: "button-example", name: "Button Component", category: "Components", type: "component",
    description: "Basic button with styling", difficulty: "beginner" },
  { id: "form-example", name: "Form Example", category: "Components", type: "component",
    description: "Complete form with validation", difficulty: "intermediate" },
  { id: "dashboard-layout", name: "Dashboard Layout", category: "Components", type: "component",
    description: "Full dashboard with sidebar", difficulty: "advanced" },
    
  // Learning Paths
  { id: "path-designer", name: "Designer Path", category: "Learning", type: "path",
    description: "Design-focused onboarding journey", difficulty: "beginner" },
  { id: "path-developer", name: "Developer Path", category: "Learning", type: "path",
    description: "Code-focused implementation guide", difficulty: "intermediate" },
  { id: "path-manager", name: "Product Manager Path", category: "Learning", type: "path",
    description: "Strategic implementation overview", difficulty: "beginner" },
    
  // Resources
  { id: "design-tokens", name: "Design Tokens", category: "Resources", type: "reference",
    description: "Complete token documentation", difficulty: "beginner" },
  { id: "accessibility-guide", name: "Accessibility Guide", category: "Resources", type: "reference",
    description: "Inclusive design practices", difficulty: "intermediate" },
  { id: "component-api", name: "Component API", category: "Resources", type: "reference",
    description: "Complete component reference", difficulty: "intermediate" }
]

export const learningPaths = [
  {
    id: "designer",
    title: "Designer Path",
    description: "Perfect for UI/UX designers exploring our design system",
    icon: Palette,
    colour: "text-pink-400",
    bgColor: "bg-pink-500/20",
    duration: "15 min",
    difficulty: "Beginner",
    steps: [
      { id: "design-intro", title: "Design System Overview", duration: "3 min", type: "reading" },
      { id: "design-tokens", title: "Explore Design Tokens", duration: "5 min", type: "interactive" },
      { id: "design-components", title: "Component Library Tour", duration: "7 min", type: "exploration" }
    ]
  },
  {
    id: "developer",
    title: "Developer Path",
    description: "For developers implementing the design system",
    icon: Code2,
    colour: "text-blue-400",
    bgColor: "bg-blue-500/20",
    duration: "25 min",
    difficulty: "Intermediate",
    steps: [
      { id: "dev-install", title: "Installation & Setup", duration: "5 min", type: "hands-on" },
      { id: "dev-config", title: "Configuration", duration: "8 min", type: "hands-on" },
      { id: "dev-components", title: "First Component", duration: "7 min", type: "hands-on" },
      { id: "dev-advanced", title: "Advanced Patterns", duration: "5 min", type: "reading" }
    ]
  },
  {
    id: "manager",
    title: "Product Manager Path",
    description: "Strategic overview for product leaders",
    icon: Target,
    colour: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/20",
    duration: "10 min",
    difficulty: "Beginner",
    steps: [
      { id: "pm-overview", title: "System Overview", duration: "4 min", type: "reading" },
      { id: "pm-benefits", title: "Benefits & ROI", duration: "3 min", type: "reading" },
      { id: "pm-implementation", title: "Implementation Strategy", duration: "3 min", type: "reading" }
    ]
  }
]

export const troubleshootingItems = [
  {
    issue: "Package installation fails",
    solution: "Ensure you're using Node.js 18+ and npm 9+. Clear cache with `npm cache clean --force` and try again.",
    category: "Installation",
    tags: ["npm", "installation", "error"]
  },
  {
    issue: "Theme not applying correctly",
    solution: "Verify ThemeProvider wraps your app root. Check that CSS imports are in the correct order: design system styles before your custom styles.",
    category: "Configuration",
    tags: ["theme", "provider", "styling"]
  },
  {
    issue: "Components not rendering",
    solution: "Check that all required peer dependencies are installed. Verify import paths match your package manager (npm/yarn/pnpm).",
    category: "Components",
    tags: ["components", "rendering", "imports"]
  },
  {
    issue: "TypeScript errors",
    solution: "Ensure @types/react and @types/react-dom are installed. Update your tsconfig.json to include the design system types.",
    category: "Development",
    tags: ["typescript", "types", "errors"]
  },
  {
    issue: "Tailwind conflicts",
    solution: "Check your tailwind.config.js for conflicting utilities. The design system uses specific class prefixes to avoid conflicts.",
    category: "Configuration",
    tags: ["tailwind", "conflicts", "config"]
  }
]

export const communityResources = {
  supportChannels: [
    { name: "GitHub Discussions", description: "Ask questions and share solutions", href: "#", icon: Code2 },
    { name: "Discord Community", description: "Real-time chat with developers", href: "#", icon: MessageSquare },
    { name: "Stack Overflow", description: "Tag: inclusive-design-system", href: "#", icon: Globe }
  ],
  videoTutorials: [
    { name: "Quick Start (5 min)", description: "Get up and running fast", duration: "5:23", href: "#" },
    { name: "Theme Customization", description: "Deep dive into theming", duration: "12:45", href: "#" },
    { name: "Component Composition", description: "Building complex UIs", duration: "18:12", href: "#" }
  ]
}

export const installationCommands = [
  { label: "NPM", command: "npm install @hawkbass/inclusive-design-core", id: "npm-cmd" },
  { label: "Yarn", command: "yarn add @hawkbass/inclusive-design-core", id: "yarn-cmd" },
  { label: "PNPM", command: "pnpm add @hawkbass/inclusive-design-core", id: "pnpm-cmd" }
]
