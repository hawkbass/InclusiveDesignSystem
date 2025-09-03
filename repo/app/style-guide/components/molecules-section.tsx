"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { 
  Heart,
  Copy,
  CheckCircle2,
  Eye,
  Code,
  ExternalLink,
  Sparkles,
  Component
} from "lucide-react"

interface MoleculesSectionProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favorites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function MoleculesSection({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favorites, 
  onToggleFavorite 
}: MoleculesSectionProps) {
  
  // BASIC COMPONENTS (8) - Atoms/Simple Molecules
  const basicComponents = [
    { 
      id: "button",
      name: "Button", 
      category: "Actions",
      description: "Primary action buttons with fuchsia branding and multiple variants",
      component: <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-sm">Get Started</Button>,
      code: `<Button className="bg-fuchsia-600 hover:bg-fuchsia-700">Get Started</Button>`,
      variants: ["Primary", "Outline", "Ghost", "Destructive", "Link"],
      usage: "CTAs, form submissions, primary actions"
    },
    { 
      id: "badge",
      name: "Badge", 
      category: "Display",
      description: "Status indicators and labels with semantic colouring",
      component: <Badge className="bg-green-500/20 text-green-300 text-xs">Active</Badge>,
      code: `<Badge className="bg-green-500/20 text-green-300">Active</Badge>`,
      variants: ["Default", "Success", "Warning", "Error", "Outline"],
      usage: "Status indicators, categories, labels"
    },
    { 
      id: "input",
      name: "Input", 
      category: "Forms",
      description: "Form input fields with slate styling and validation states",
      component: <Input placeholder="Search..." className="bg-slate-800 border-slate-700 text-sm w-32" />,
      code: `<Input placeholder="Search..." className="bg-slate-800 border-slate-700" />`,
      variants: ["Text", "Email", "Password", "Search", "Number"],
      usage: "Text input, forms, search"
    },
    { 
      id: "switch",
      name: "Switch", 
      category: "Forms",
      description: "Toggle switches for boolean settings and preferences",
      component: <Switch defaultChecked />,
      code: `<Switch defaultChecked />`,
      variants: ["Default", "Disabled", "Small", "Large"],
      usage: "Settings, preferences, boolean inputs"
    },
    { 
      id: "progress",
      name: "Progress", 
      category: "Feedback",
      description: "Progress indicators with customizable styling",
      component: <Progress value={65} className="w-24 h-2" />,
      code: `<Progress value={65} />`,
      variants: ["Default", "Success", "Warning", "Striped"],
      usage: "Loading states, completion tracking"
    },
    { 
      id: "avatar",
      name: "Avatar", 
      category: "Display",
      description: "User avatars with fallbacks and status indicators",
      component: <Avatar className="w-8 h-8"><AvatarFallback className="bg-fuchsia-500/20 text-fuchsia-300 text-xs">JD</AvatarFallback></Avatar>,
      code: `<Avatar><AvatarFallback>JD</AvatarFallback></Avatar>`,
      variants: ["Image", "Fallback", "Group", "Status"],
      usage: "User representation, profiles"
    },
    { 
      id: "slider",
      name: "Slider", 
      category: "Forms",
      description: "Range sliders for numeric value selection",
      component: <Slider defaultValue={[50]} max={100} step={1} className="w-24" />,
      code: `<Slider defaultValue={[50]} max={100} step={1} />`,
      variants: ["Single", "Range", "Stepped", "Vertical"],
      usage: "Volume, brightness, range selection"
    },
    { 
      id: "separator",
      name: "Separator", 
      category: "Layout",
      description: "Visual dividers for content sections",
      component: <Separator className="w-16" />,
      code: `<Separator />`,
      variants: ["Horizontal", "Vertical", "Dashed", "Thick"],
      usage: "Content separation, visual breaks"
    }
  ]

  // ADVANCED MOLECULES (10) - Complex Components
  const advancedMolecules = [
    {
      id: "smart-content-actions",
      name: "Smart Content Actions",
      description: "Contextual action buttons that appear on hover with dynamic functionality",
      category: "Interactive",
      features: ["Hover triggers", "Context awareness", "Dynamic actions", "Smooth animations"],
      complexity: "Medium",
      codePreview: "<SmartContentActions context='user-profile' />",
      status: "Production Ready",
      usage: "Content cards, list items, interactive elements"
    },
    {
      id: "contextual-navigation",
      name: "Contextual Navigation",
      description: "Adaptive navigation component that changes based on user context and location",
      category: "Navigation",
      features: ["Context-aware", "Breadcrumb integration", "Dynamic items", "Responsive"],
      complexity: "Advanced",
      codePreview: "<ContextualNavigation currentPath='/dashboard' />",
      status: "Production Ready",
      usage: "Page navigation, breadcrumbs, dynamic menus"
    },
    {
      id: "progressive-onboarding",
      name: "Progressive Onboarding",
      description: "Step-by-step user onboarding with progress tracking and contextual hints",
      category: "Guidance",
      features: ["Progress tracking", "Contextual hints", "Skip options", "Analytics"],
      complexity: "Complex",
      codePreview: "<ProgressiveOnboarding steps={onboardingSteps} />",
      status: "Production Ready",
      usage: "User onboarding, feature introductions, guided tours"
    },
    {
      id: "personal-dashboard",
      name: "Personal Dashboard",
      description: "Customizable dashboard widgets with drag-and-drop and user preferences",
      category: "Layout",
      features: ["Drag and drop", "Customizable", "Responsive grid", "User preferences"],
      complexity: "Complex",
      codePreview: "<PersonalDashboard widgets={userWidgets} />",
      status: "Production Ready",
      usage: "User dashboards, customizable layouts, widget systems"
    },
    {
      id: "metric-chart",
      name: "Metric Chart",
      description: "Canvas-based interactive charts with real-time data and export capabilities",
      category: "Data Visualization",
      features: ["Real-time updates", "Interactive tooltips", "Export options", "Custom themes"],
      complexity: "Complex",
      codePreview: "<MetricChart data={metrics} type='line' />",
      status: "Production Ready",
      usage: "Analytics, data visualization, reporting dashboards"
    },
    {
      id: "stats-card",
      name: "Stats Card",
      description: "Animated statistics cards with trend indicators and comparison features",
      category: "Display",
      features: ["Trend indicators", "Animations", "Comparisons", "Custom formatting"],
      complexity: "Medium",
      codePreview: "<StatCard value={1234} trend='up' />",
      status: "Production Ready",
      usage: "KPI displays, metric cards, dashboard stats"
    },
    {
      id: "stars-background",
      name: "Stars Background",
      description: "Animated particle background system with configurable density and motion",
      category: "Visual Effects",
      features: ["Particle system", "Animation controls", "Performance optimized", "Responsive"],
      complexity: "Advanced",
      codePreview: "<StarsBackground density={100} />",
      status: "Production Ready",
      usage: "Hero sections, decorative backgrounds, landing pages"
    },
    {
      id: "daylight-background",
      name: "Daylight Background",
      description: "Dynamic lighting background effects that adapt to time and user preferences",
      category: "Visual Effects",
      features: ["Dynamic lighting", "Time-based", "Colour transitions", "Performance mode"],
      complexity: "Advanced",
      codePreview: "<DaylightBackground timeOfDay='dawn' />",
      status: "Beta",
      usage: "Ambient backgrounds, time-aware interfaces, mood lighting"
    },
    {
      id: "theme-provider",
      name: "Theme Provider",
      description: "Global theme management and switching with persistence and system detection",
      category: "System",
      features: ["Theme switching", "System detection", "Persistence", "CSS variables"],
      complexity: "Medium",
      codePreview: "<ThemeProvider defaultTheme='dark' />",
      status: "Production Ready",
      usage: "Global theming, dark/light mode, user preferences"
    },
    {
      id: "chart-integration",
      name: "Chart Integration",
      description: "Recharts integration with consistent theming and interaction patterns",
      category: "Data Visualization",
      features: ["Recharts wrapper", "Consistent theming", "Responsive", "Accessible"],
      complexity: "Medium",
      codePreview: "<Chart data={data} type='area' />",
      status: "Production Ready",
      usage: "Data visualization, analytics charts, reporting"
    }
  ]

  const filteredBasicComponents = basicComponents.filter(comp => 
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.usage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredAdvancedMolecules = advancedMolecules.filter(mol => 
    mol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mol.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mol.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900/50 rounded-lg p-6 text-center border border-slate-700/30">
          <div className="text-3xl font-bold text-purple-400">{basicComponents.length}</div>
          <div className="text-sm text-slate-400">Basic Components</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-6 text-center border border-slate-700/30">
          <div className="text-3xl font-bold text-indigo-400">{advancedMolecules.length}</div>
          <div className="text-sm text-slate-400">Advanced Molecules</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-6 text-center border border-slate-700/30">
          <div className="text-3xl font-bold text-fuchsia-400">{basicComponents.length + advancedMolecules.length}</div>
          <div className="text-sm text-slate-400">Total Components</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-6 text-center border border-slate-700/30">
          <div className="text-3xl font-bold text-green-400">{advancedMolecules.filter(mol => mol.status === 'Production Ready').length}</div>
          <div className="text-sm text-slate-400">Production Ready</div>
        </div>
      </div>

      {/* Basic Components Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-500/20">
            <Component className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Basic Components</h3>
            <p className="text-slate-400">Fundamental UI building blocks with live previews</p>
          </div>
        </div>

        <div className={`grid ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"} gap-6`}>
          {filteredBasicComponents.map((comp, index) => (
            <Card key={comp.id} className="bg-slate-800/30 border-slate-700/50 hover:border-purple-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg text-slate-200">{comp.name}</CardTitle>
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {comp.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400 text-sm">
                      {comp.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onToggleFavorite(comp.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className={`h-4 w-4 ${favorites.has(comp.id) ? 'fill-current text-pink-400' : 'text-slate-400'}`} />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Live Preview */}
                <div className="bg-slate-900/50 rounded-lg p-4 flex items-center justify-center min-h-[60px] border border-slate-700/30">
                  {comp.component}
                </div>

                {/* Variants */}
                <div>
                  <div className="text-xs text-slate-400 mb-2">Variants:</div>
                  <div className="flex flex-wrap gap-1">
                    {comp.variants.map((variant, vIndex) => (
                      <Badge key={vIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Code */}
                <div>
                  <div className="text-xs text-slate-400 mb-2">Code:</div>
                  <div className="bg-slate-900/50 rounded p-3 border border-slate-700/30 relative">
                    <code className="text-xs text-slate-300 font-mono block overflow-x-auto">
                      {comp.code}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onCopyCode(comp.code, `basic-${index}`)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-slate-200"
                    >
                      {copiedCode === `basic-${index}` ? (
                        <CheckCircle2 className="h-3 w-3 text-green-400" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Usage */}
                <div className="text-xs text-slate-500 italic">
                  {comp.usage}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Advanced Molecules Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-indigo-500/20">
            <Sparkles className="h-5 w-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Advanced Molecules</h3>
            <p className="text-slate-400">Complex components with advanced functionality</p>
          </div>
        </div>

        <div className={`grid ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"} gap-6`}>
          {filteredAdvancedMolecules.map((molecule, index) => (
            <Card key={molecule.id} className="bg-slate-800/30 border-slate-700/50 hover:border-indigo-500/50 transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg text-slate-200">{molecule.name}</CardTitle>
                      <Badge className={`text-xs ${
                        molecule.status === 'Production Ready' ? 'bg-green-500/20 text-green-300' :
                        molecule.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {molecule.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {molecule.category}
                      </Badge>
                      <Badge className={`text-xs ${
                        molecule.complexity === 'Complex' ? 'bg-red-500/20 text-red-300' :
                        molecule.complexity === 'Advanced' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {molecule.complexity}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400">
                      {molecule.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onToggleFavorite(molecule.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className={`h-4 w-4 ${favorites.has(molecule.id) ? 'fill-current text-pink-400' : 'text-slate-400'}`} />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Code Preview */}
                <div>
                  <div className="text-xs text-slate-400 mb-2">Usage:</div>
                  <div className="bg-slate-900/50 rounded p-3 border border-slate-700/30 relative">
                    <code className="text-xs text-slate-300 font-mono">
                      {molecule.codePreview}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onCopyCode(molecule.codePreview, `advanced-${index}`)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-slate-200"
                    >
                      {copiedCode === `advanced-${index}` ? (
                        <CheckCircle2 className="h-3 w-3 text-green-400" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="text-xs text-slate-400 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {molecule.features.map((feature, fIndex) => (
                      <Badge key={fIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Usage */}
                <div className="text-xs text-slate-500 italic">
                  {molecule.usage}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-slate-400 border-slate-600 hover:border-indigo-500 hover:text-indigo-300"
                    onClick={() => {
                      const docsText = `// ${molecule.name} Documentation\n// Features: ${molecule.features.join(', ')}\n// Status: ${molecule.status}\n// Complexity: ${molecule.complexity}`
                      onCopyCode(docsText, `docs-${index}`)
                    }}
                  >
                    <Eye className="h-3 w-3 mr-2" />
                    View Docs
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-slate-400 border-slate-600 hover:border-purple-500 hover:text-purple-300"
                    onClick={() => onCopyCode(molecule.codePreview, `source-${index}`)}
                  >
                    <Code className="h-3 w-3 mr-2" />
                    View Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


