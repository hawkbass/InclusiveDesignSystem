"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Heart,
  Copy,
  CheckCircle2,
  Zap,
  Navigation,
  BookOpen,
  User,
  BarChart3,
  TrendingUp,
  Sparkles,
  Star,
  Palette,
  ExternalLink,
  Activity
} from "lucide-react"

interface SpecializedMoleculesSectionProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favourites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function SpecializedMoleculesSection({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favourites, 
  onToggleFavorite 
}: SpecializedMoleculesSectionProps) {
  // Advanced UI molecules that exist in the codebase but weren't documented
  const specializedMolecules = [
    {
      id: "smart-content-actions",
      name: "Smart Content Actions",
      category: "Interactive",
      description: "Context-aware action buttons that adapt based on content type and user behaviour",
      complexity: "High",
      usageCount: "15+ pages",
      component: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-xs">
              <Copy className="h-3 w-3 mr-1" />
              Copy Code
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              <ExternalLink className="h-3 w-3 mr-1" />
              Open
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">Adapts to content context</div>
        </div>
      ),
      code: `import { SmartContentActions } from "@/components/ui/smart-content-actions"

<SmartContentActions
  content={componentData}
  actions={["copy", "export", "share", "favourite"]}
  context="design-system"
  onAction={(action, data) => handleAction(action, data)}
/>`,
      features: ["Context awareness", "Dynamic actions", "Usage analytics", "Customizable"],
      file: "components/ui/smart-content-actions.tsx",
      relatedPages: ["/components", "/style-guide"],
      apiMethods: ["onAction", "getAvailableActions", "updateContext"]
    },
    {
      id: "contextual-navigation",
      name: "Contextual Navigation",
      category: "Navigation",
      description: "Intelligent breadcrumb and page relationship navigation with learning paths",
      complexity: "High",
      usageCount: "All pages",
      component: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-primary">Design System</span>
            <span className="text-slate-600">→</span>
            <span className="text-muted-foreground">Style Guide</span>
            <span className="text-slate-600">→</span>
            <span className="text-foreground/80">Molecules</span>
          </div>
          <div className="text-xs text-muted-foreground">Smart pathfinding enabled</div>
        </div>
      ),
      code: `import { ContextualNavigation } from "@/components/ui/contextual-navigation"

<ContextualNavigation
  currentPath="/style-guide/molecules"
  showRelated={true}
  enableLearningPath={true}
  estimatedTime="5 min"
/>`,
      features: ["Smart breadcrumbs", "Related pages", "Learning paths", "Time estimates"],
      file: "components/ui/contextual-navigation.tsx",
      relatedPages: ["All navigation areas"],
      apiMethods: ["updatePath", "getRelatedPages", "trackProgress"]
    },
    {
      id: "progressive-onboarding",
      name: "Progressive Onboarding",
      category: "User Experience",
      description: "Multi-path user onboarding flows with personalized learning tracks",
      complexity: "High", 
      usageCount: "Getting Started",
      component: (
        <div className="space-y-2">
          <Progress value={65} className="h-2" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-fuchsia-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-3 w-3 text-white" />
            </div>
            <span className="text-xs text-foreground/80">Step 3 of 5: Components</span>
          </div>
          <div className="text-xs text-muted-foreground">Designer track • 12 min remaining</div>
        </div>
      ),
      code: `import { ProgressiveOnboarding } from "@/components/ui/progressive-onboarding"

<ProgressiveOnboarding
  userType="designer"
  currentStep={3}
  totalSteps={5}
  showProgress={true}
  adaptiveFlow={true}
/>`,
      features: ["Role-based paths", "Progress tracking", "Adaptive flow", "Time estimation"],
      file: "components/ui/progressive-onboarding.tsx",
      relatedPages: ["/design-system/getting-started"],
      apiMethods: ["setUserType", "nextStep", "trackProgress", "getRecommendations"]
    },
    {
      id: "personal-dashboard",
      name: "Personal Dashboard",
      category: "User Experience", 
      description: "User-specific activity tracking, favourites, and personalized content recommendations",
      complexity: "High",
      usageCount: "User areas",
      component: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <span className="text-xs text-foreground/80 font-medium">James Doe</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="text-muted-foreground">Components: <span className="text-foreground/80">23</span></div>
            <div className="text-muted-foreground">favourites: <span className="text-foreground/80">8</span></div>
          </div>
          <div className="text-xs text-muted-foreground">Last active: Design Tokens</div>
        </div>
      ),
      code: `import { PersonalDashboard } from "@/components/ui/personal-dashboard"

<PersonalDashboard
  userId="user-123"
  showActivity={true}
  showRecommendations={true}
  trackUsage={true}
/>`,
      features: ["Activity tracking", "favourites management", "Usage analytics", "Recommendations"],
      file: "components/ui/personal-dashboard.tsx",
      relatedPages: ["User-specific areas"],
      apiMethods: ["getUserActivity", "addFavorite", "getRecommendations", "trackPageView"]
    },
    {
      id: "metric-chart",
      name: "Metric Chart",
      category: "Data Visualization",
      description: "Custom canvas-based charting with animations and hover interactions",
      complexity: "Medium",
      usageCount: "Dashboards",
      component: (
        <div className="space-y-2">
          <div className="w-full h-16 bg-card/50 rounded-lg relative overflow-hidden">
            <div className="absolute inset-2 flex items-end justify-between">
              {[40, 65, 45, 80, 55, 75, 90].map((height, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-t from-fuchsia-600 to-accent rounded-sm w-3"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Interactive canvas chart</div>
        </div>
      ),
      code: `import { MetricChart } from "@/components/ui/metric-chart"

<MetricChart
  data={[40, 65, 45, 80, 55, 75, 90]}
  height={160}
  type="area"
  colour="#d946ef"
  showTooltip={true}
  animate={true}
  onPointHover={(index, value) => setTooltip({index, value})}
/>`,
      features: ["Canvas rendering", "Animation support", "Hover interactions", "Multiple chart types"],
      file: "components/ui/metric-chart.tsx",
      relatedPages: ["/dashboard", "/design-system/overview"],
      apiMethods: ["updateData", "setHoverPoint", "exportChart", "animate"]
    },
    {
      id: "stat-card", 
      name: "Stat Card",
      category: "Data Display",
      description: "Statistical display cards with trends, favourites, and loading states",
      complexity: "Medium",
      usageCount: "Analytics",
      component: (
        <div className="w-48 p-3 bg-card/30 rounded-lg border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Active Users</span>
            <Heart className="h-3 w-3 text-muted-foreground" />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-lg font-bold text-foreground">2,847</span>
            <div className="flex items-center text-xs text-green-600 dark:text-green-400">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12%
            </div>
          </div>
        </div>
      ),
      code: `import { StatCard } from "@/components/ui/stat-card"

<StatCard
  title="Active Users"
  value={2847}
  change="+12%"
  trend="up"
  showFavorite={true}
  onFavorite={() => toggleFavorite('stat-users')}
  loading={false}
/>`,
      features: ["Trend indicators", "favourites system", "Loading states", "Multiple sizes"],
      file: "components/ui/stat-card.tsx",
      relatedPages: ["/dashboard", "Analytics sections"],
      apiMethods: ["updateValue", "setTrend", "toggleFavorite", "setLoading"]
    },
    {
      id: "chart-recharts",
      name: "Chart (Recharts)",
      category: "Data Visualization", 
      description: "Advanced charting library wrapper with theme integration and tooltips",
      complexity: "High",
      usageCount: "Data sections",
      component: (
        <div className="space-y-2">
          <div className="w-full h-20 bg-card/50 rounded-lg p-2">
            <div className="relative h-full">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path 
                  d="M 5,35 Q 25,15 45,25 T 95,20" 
                  stroke="#d946ef" 
                  strokeWidth="2" 
                  fill="none"
                />
                <path 
                  d="M 5,35 Q 25,15 45,25 T 95,20 L 95,40 L 5,40 Z" 
                  fill="url(#gradient)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Recharts integration</div>
        </div>
      ),
      code: `import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

<ChartContainer config={chartConfig}>
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip />
    <Line 
      dataKey="users" 
      stroke="var(--colour-users)"
      strokeWidth={2}
    />
  </LineChart>
</ChartContainer>`,
      features: ["Theme integration", "Custom tooltips", "Responsive", "Multiple chart types"],
      file: "components/ui/chart.tsx",
      relatedPages: ["Dashboard", "Analytics"],
      apiMethods: ["updateConfig", "setData", "customizeTooltip", "exportChart"]
    },
    {
      id: "stars-background",
      name: "Stars Background",
      category: "Visual Effects",
      description: "Animated starfield canvas background with particle physics",
      complexity: "Medium",
      usageCount: "Hero sections",
      component: (
        <div className="w-full h-20 bg-card rounded-lg relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Animated starfield</span>
          </div>
        </div>
      ),
      code: `import { StarsBackground } from "@/components/stars-background"

// Automatic full-screen background
<StarsBackground />

// The component handles:
// - Canvas rendering and sizing
// - Star generation and animation
// - Performance optimisation
// - Resize handling`,
      features: ["Canvas animation", "Particle physics", "Performance optimized", "Responsive"],
      file: "components/stars-background.tsx",
      relatedPages: ["Hero sections", "Landing pages"],
      apiMethods: ["resize", "updateStarCount", "setAnimationSpeed", "destroy"]
    },
    {
      id: "daylight-background",
      name: "Daylight Background", 
      category: "Visual Effects",
      description: "Dynamic gradient background that adapts to design tokens",
      complexity: "Medium",
      usageCount: "Light themes",
      component: (
        <div className="w-full h-20 rounded-lg relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(147, 51, 234, 0.08) 50%, rgba(59, 130, 246, 0.06) 100%)'
             }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Token-aware gradients</span>
          </div>
        </div>
      ),
      code: `import { DaylightBackground } from "@/components/daylight-background"

// Automatically uses CSS design tokens
<DaylightBackground />

// Reads from CSS variables:
// --primary, --secondary, --accent
// Creates abstract geometric patterns`,
      features: ["CSS token integration", "Abstract patterns", "Dynamic gradients", "Performance optimized"],
      file: "components/daylight-background.tsx", 
      relatedPages: ["Light theme areas"],
      apiMethods: ["updateTokens", "redraw", "setOpacity", "destroy"]
    },
    {
      id: "theme-provider",
      name: "Theme Provider",
      category: "System",
      description: "Theme context management and switching system",
      complexity: "Low",
      usageCount: "App-wide",
      component: (
        <div className="flex items-center gap-2 p-2 bg-card/30 rounded-lg">
          <div className="w-4 h-4 bg-card rounded border border-border" />
          <span className="text-xs text-foreground/80">Dark</span>
          <div className="w-4 h-4 bg-slate-100 rounded border border-slate-300" />
          <span className="text-xs text-muted-foreground">Light</span>
        </div>
      ),
      code: `import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}`,
      features: ["Theme context", "System detection", "Persistence", "SSR support"],
      file: "components/theme-provider.tsx",
      relatedPages: ["App layout"],
      apiMethods: ["setTheme", "getTheme", "toggleTheme", "detectSystem"]
    }
  ]

  const filteredMolecules = specializedMolecules.filter(molecule =>
    molecule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    molecule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    molecule.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const groupedMolecules = filteredMolecules.reduce((acc, molecule) => {
    if (!acc[molecule.category]) {
      acc[molecule.category] = []
    }
    acc[molecule.category].push(molecule)
    return acc
  }, {} as Record<string, typeof specializedMolecules>)

  const categoryColors = {
    Interactive: "border-fuchsia-600 text-primary",
    Navigation: "border-blue-600 text-blue-400", 
    "User Experience": "border-green-600 text-green-600 dark:text-green-400",
    "Data Visualization": "border-purple-600 text-purple-400",
    "Data Display": "border-cyan-600 text-cyan-400",
    "Visual Effects": "border-orange-600 text-orange-400",
    System: "border-border text-muted-foreground"
  }

  const complexityColors = {
    Low: "bg-green-500/20 text-green-600 dark:text-green-300",
    Medium: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-300",
    High: "bg-red-500/20 text-red-600 dark:text-red-300"
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">Specialized Molecules</h3>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Advanced UI components with sophisticated logic, state management, and user experience patterns
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{specializedMolecules.length}</div>
            <div className="text-xs text-muted-foreground">Advanced Components</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{Object.keys(groupedMolecules).length}</div>
            <div className="text-xs text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{favourites.size}</div>
            <div className="text-xs text-muted-foreground">Favorited</div>
          </div>
        </div>
      </div>

      {Object.entries(groupedMolecules).map(([category, categoryMolecules]) => (
        <div key={category} className="space-y-6">
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-foreground">{category}</h4>
            <Badge variant="outline" className={categoryColors[category as keyof typeof categoryColors]}>
              {categoryMolecules.length} Components
            </Badge>
          </div>

          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"} gap-6`}>
            {categoryMolecules.map((molecule) => (
              <Card key={molecule.id} id={molecule.id} className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-border/50 bg-card/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colours">
                        {molecule.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {molecule.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={complexityColors[molecule.complexity as keyof typeof complexityColors]}>
                        {molecule.complexity}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onToggleFavorite(molecule.id)}
                        className="text-muted-foreground hover:text-pink-400"
                      >
                        <Heart className={`h-4 w-4 ${favourites.has(molecule.id) ? 'fill-current text-pink-400' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Live Preview */}
                  <div className="bg-card rounded-lg p-4">
                    {molecule.component}
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-foreground/80 font-medium">Usage</div>
                      <div className="text-muted-foreground">{molecule.usageCount}</div>
                    </div>
                    <div>
                      <div className="text-foreground/80 font-medium">File</div>
                      <code className="text-xs text-muted-foreground">{molecule.file}</code>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground/80">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {molecule.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-border text-muted-foreground">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* API Methods */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground/80">API Methods:</div>
                    <div className="flex flex-wrap gap-1">
                      {molecule.apiMethods.map((method, index) => (
                        <code key={index} className="text-xs bg-muted px-2 py-1 rounded text-foreground/80 font-mono">
                          {method}()
                        </code>
                      ))}
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground/80">Implementation:</div>
                    <div className="relative">
                      <pre className="text-xs bg-muted p-3 rounded text-foreground/80 font-mono overflow-x-auto max-h-32">
                        <code>{molecule.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onCopyCode(molecule.code, molecule.id)}
                        className={`absolute top-2 right-2 ${
                          copiedCode === molecule.id
                            ? 'border-green-500 text-green-600 dark:text-green-400 bg-green-950' 
                            : 'border-border hover:border-primary text-muted-foreground hover:text-foreground'
                        } transition-all`}
                      >
                        {copiedCode === molecule.id ? (
                          <CheckCircle2 className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Related Pages */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground/80">Used in:</div>
                    <div className="flex flex-wrap gap-1">
                      {molecule.relatedPages.map((page, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-blue-600 text-blue-400">
                          {page}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {filteredMolecules.length === 0 && searchQuery && (
        <div className="text-center py-12 text-muted-foreground">
          <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium mb-2">No specialized molecules found</p>
          <p className="text-sm">Try adjusting your search query</p>
        </div>
      )}
    </div>
  )
}








