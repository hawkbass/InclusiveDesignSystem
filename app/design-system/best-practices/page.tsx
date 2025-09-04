"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { CheckCircle2, X, Clock, Copy, Settings, Eye, Code2, Download, ExternalLink, Sparkles, Shield, Zap, Users, Globe, Target, AlertTriangle, Lightbulb, Award } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

export default function BestPractices() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  // Safely get animation speed value
  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply animation speed to document
  useEffect(() => {
    if (mounted && animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed, mounted])

  if (!mounted) {
    return null
  }

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

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
                  <h1 className="text-2xl font-bold text-slate-100">Best Practices</h1>
                  <p className="text-sm text-slate-400">Guidelines for building accessible, performant recruitment applications with Inclusive's design system</p>
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
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <Download className="h-4 w-4 mr-2" />
                    Checklist
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Guidelines
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
          {/* Quick Value Surface - Universal Comprehension */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">AAA</div>
                <div className="text-xs text-slate-400">Accessibility</div>
                <div className="text-xs text-green-400 mt-1">WCAG 2.1</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">90+</div>
                <div className="text-xs text-slate-400">Performance</div>
                <div className="text-xs text-yellow-400 mt-1">Lighthouse</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Target className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">80%</div>
                <div className="text-xs text-slate-400">Test Coverage</div>
                <div className="text-xs text-blue-400 mt-1">Quality assured</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-colours cursor-pointer">
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">5★</div>
                <div className="text-xs text-slate-400">Best Practices</div>
                <div className="text-xs text-purple-400 mt-1">Industry standard</div>
              </CardContent>
            </Card>
          </div>

          {/* Hero Section */}
          <section className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl -z-10" />
            <div className="text-center max-w-4xl mx-auto py-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Award className="w-3 h-3 mr-1" />
                  Industry Standard
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Quality Assured
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Target className="w-3 h-3 mr-1" />
                  Best Practices
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                Best Practices
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guidelines for building accessible, performant, and maintainable recruitment applications. 
                Following industry standards and proven methodologies.
              </p>
            </div>
          </section>

          {/* Main Content Tabs */}
          <section className="mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                {/* Simple Dropdown Navigation */}
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-semibold text-slate-200">Viewing:</h2>
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-auto min-w-[200px] h-10 bg-slate-800/40 border border-slate-700/30 hover:bg-slate-800/60 transition-colors text-slate-300">
                      {(() => {
                        const tabs = [
                          { value: "overview", label: "Overview", icon: Target },
                          { value: "development", label: "Development", icon: Code2 },
                          { value: "accessibility", label: "Accessibility", icon: Shield },
                          { value: "performance", label: "Performance", icon: Zap }
                        ];
                        const currentTab = tabs.find(tab => tab.value === activeTab);
                        return currentTab ? (
                          <div className="flex items-center gap-3">
                            <currentTab.icon className="h-4 w-4" />
                            <span>{currentTab.label}</span>
                          </div>
                        ) : null;
                      })()}
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="overview" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Target className="h-4 w-4 text-slate-400" />
                          <span>Overview</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="development" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Code2 className="h-4 w-4 text-slate-400" />
                          <span>Development</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="accessibility" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Shield className="h-4 w-4 text-slate-400" />
                          <span>Accessibility</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="performance" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Zap className="h-4 w-4 text-slate-400" />
                          <span>Performance</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TabsContent value="overview" className="space-y-8">
                <OverviewTab safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="development" className="space-y-8">
                <DevelopmentTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="accessibility" className="space-y-8">
                <AccessibilityTab safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>

              <TabsContent value="performance" className="space-y-8">
                <PerformanceTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  )
}

// Tab Components
function OverviewTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const practiceCategories = [
    {
      title: "Accessibility First",
      description: "Design and build for all users from the start",
      icon: Globe,
      colour: "text-green-400",
      bgColor: "bg-green-500/20",
      principles: ["WCAG 2.1 AA compliance", "Semantic HTML structure", "Keyboard navigation", "Screen reader support"]
    },
    {
      title: "Performance Focused",
      description: "optimise for speed and efficiency",
      icon: Zap,
      colour: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      principles: ["Core Web Vitals", "Bundle optimisation", "Lazy loading", "Caching strategies"]
    },
    {
      title: "User Experience",
      description: "Create intuitive and delightful interactions",
      icon: Users,
      colour: "text-blue-400",
      bgColor: "bg-blue-500/20",
      principles: ["User research driven", "Consistent patterns", "Clear feedback", "Error prevention"]
    },
    {
      title: "Code Quality",
      description: "Maintainable, scalable, and robust code",
      icon: Code2,
      colour: "text-purple-400",
      bgColor: "bg-purple-500/20",
      principles: ["Type safety", "Testing coverage", "Code reviews", "Documentation"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Practice Categories */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Core Practice Areas</CardTitle>
          <CardDescription>Fundamental principles for building quality applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {practiceCategories.map((category, index) => (
              <Card key={category.title} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <category.icon className={`h-6 w-6 ${category.colour}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colours mb-2" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {category.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
                        {principle}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

          {/* Do's and Don'ts */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              Best Practices
            </CardTitle>
            <CardDescription>Recommended approaches for quality development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Use semantic HTML elements for structure",
                "Implement proper error handling and validation",
                "Write comprehensive tests for critical paths",
                "Follow consistent naming conventions",
                "optimise images and assets for web",
                "Use progressive enhancement strategies",
                "Implement proper loading states",
                "Ensure keyboard accessibility throughout"
              ].map((practice, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colours" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-xl text-slate-100 flex items-center gap-2">
              <X className="h-5 w-5 text-red-400" />
              Common Pitfalls
            </CardTitle>
            <CardDescription>Practices to avoid for better outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Relying solely on colour to convey information",
                "Using non-descriptive link text like 'click here'",
                "Ignoring mobile-first design principles",
                "Overusing animations that don't add value",
                "Neglecting performance optimisation",
                "Skipping accessibility testing and audits",
                "Using overly complex component hierarchies",
                "Forgetting to handle error states properly"
              ].map((pitfall, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colours" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                  <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{pitfall}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quality Metrics */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Quality Metrics</CardTitle>
          <CardDescription>Key indicators of application quality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "Performance Score", target: "90+", description: "Lighthouse score", icon: Zap, colour: "text-yellow-400" },
              { metric: "Accessibility Score", target: "100", description: "WCAG compliance", icon: Globe, colour: "text-green-400" },
              { metric: "Test Coverage", target: "80%+", description: "Code coverage", icon: Shield, colour: "text-blue-400" },
              { metric: "Bundle Size", target: "<200KB", description: "Initial load", icon: Target, colour: "text-purple-400" }
            ].map((metric, index) => (
              <div key={metric.metric} className="text-center p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colours group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <metric.icon className={`h-8 w-8 ${metric.colour} mx-auto mb-3 group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                <div className="text-2xl font-bold text-slate-100 mb-1">{metric.target}</div>
                <div className="text-sm text-slate-400 mb-2">{metric.metric}</div>
                <div className="text-xs text-slate-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function DevelopmentTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* Code Quality */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Code Quality Standards</CardTitle>
              <CardDescription className="mt-2">Writing maintainable and scalable code</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('code-quality-example', 'code-quality')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'code-quality' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">TypeScript Best Practices</h4>
              <pre className="bg-slate-900/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-slate-700/30">
                <code className="text-slate-300">{`// Good: Explicit types and interfaces
interface Candidate {
  id: string
  name: string
  email: string
  status: 'applied' | 'interviewing' | 'hired'
  skills: string[]
}

// Good: Proper error handling
async function fetchCandidates(): Promise<Candidate[]> {
  try {
    const response = await api.get('/candidates')
    return response.data
  } catch (error) {
    console.error('Failed to fetch candidates:', error)
    throw new Error('Unable to load candidates')
  }
}`}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Component Structure</h4>
              <pre className="bg-slate-900/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-slate-700/30">
                <code className="text-slate-300">{`// Good: Clear component with proper types
interface CandidateCardProps {
  candidate: Candidate
  onSelect: (id: string) => void
  isSelected?: boolean
}

export function CandidateCard({ 
  candidate, 
  onSelect, 
  isSelected = false 
}: CandidateCardProps) {
  return (
    <Card className={cn(
      "transition-colours",
      isSelected && "border-fuchsia-500"
    )}>
      {/* Component content */}
    </Card>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testing Practices */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Testing Strategy</CardTitle>
          <CardDescription>Comprehensive testing approach for reliability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-green-400">Unit Tests</h4>
              <div className="space-y-3">
                {[
                  "Test individual functions",
                  "Mock external dependencies",
                  "Cover edge cases",
                  "Aim for 80%+ coverage"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-blue-400">Integration Tests</h4>
              <div className="space-y-3">
                {[
                  "Test component interactions",
                  "Verify API integrations",
                  "Test user workflows",
                  "Check data flow"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-purple-400">E2E Tests</h4>
              <div className="space-y-3">
                {[
                  "Test critical user paths",
                  "Verify complete workflows",
                  "Test across browsers",
                  "Automate regression testing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Version Control */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Version Control Best Practices</CardTitle>
          <CardDescription>Effective Git workflows and collaboration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Commit Messages</h4>
              <div className="space-y-3">
                <div className="p-3 bg-slate-900/30 rounded-lg">
                  <div className="text-sm text-green-400 mb-1">✓ Good</div>
                  <code className="text-xs text-slate-300">feat: add candidate search filters</code>
                </div>
                <div className="p-3 bg-slate-900/30 rounded-lg">
                  <div className="text-sm text-green-400 mb-1">✓ Good</div>
                  <code className="text-xs text-slate-300">fix: resolve pagination bug in candidate list</code>
                </div>
                <div className="p-3 bg-slate-900/30 rounded-lg">
                  <div className="text-sm text-red-400 mb-1">✗ Avoid</div>
                  <code className="text-xs text-slate-300">update stuff</code>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Branch Strategy</h4>
              <div className="space-y-3">
                {[
                  "Use feature branches for new work",
                  "Keep main branch deployable",
                  "Use conventional commit format",
                  "Review all changes via PRs"
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 bg-slate-900/30 rounded">
                    <Lightbulb className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{practice}</span>
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

function AccessibilityTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const accessibilityAreas = [
    {
      title: "Semantic HTML",
      description: "Use proper HTML elements for their intended purpose",
      icon: Code2,
      examples: ["<button> for actions", "<nav> for navigation", "<main> for content", "<form> for inputs"]
    },
    {
      title: "Keyboard Navigation",
      description: "Ensure all functionality is accessible via keyboard",
      icon: Target,
      examples: ["Tab order is logical", "Focus indicators visible", "Skip links available", "No keyboard traps"]
    },
    {
      title: "Screen Readers",
      description: "Provide context and meaning for assistive technology",
      icon: Globe,
      examples: ["Alt text for images", "ARIA labels when needed", "Descriptive link text", "Form labels"]
    },
    {
      title: "Visual Design",
      description: "Ensure visual accessibility for all users",
      icon: Eye,
      examples: ["4.5:1 contrast ratio", "No colour-only meaning", "Scalable text", "Focus indicators"]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Accessibility Areas */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">Accessibility Guidelines</CardTitle>
          <CardDescription>WCAG 2.1 AA compliance strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {accessibilityAreas.map((area, index) => (
              <Card key={area.title} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <area.icon className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-colours mb-2" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {area.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{area.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {area.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* WCAG Compliance Checklist */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <CardTitle className="text-xl text-slate-100">WCAG 2.1 AA Checklist</CardTitle>
          <CardDescription>Essential requirements for accessibility compliance</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Level A Requirements</h4>
              <div className="space-y-3">
                {[
                  "Images have alt text",
                  "Videos have captions", 
                  "Content is keyboard accessible",
                  "No flashing content",
                  "Page has proper headings"
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Level AA Requirements</h4>
              <div className="space-y-3">
                {[
                  "4.5:1 contrast ratio for text",
                  "Text can resize to 200%",
                  "No horizontal scrolling at 320px",
                  "Focus indicators are visible",
                  "Error messages are clear"
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
            </CardContent>
          </Card>

      {/* Testing Tools */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <CardTitle className="text-xl text-slate-100">Accessibility Testing Tools</CardTitle>
          <CardDescription>Recommended tools for testing and validation</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-blue-400">Automated Tools</h4>
              <div className="space-y-2">
                {["axe DevTools", "Lighthouse", "WAVE", "Pa11y"].map((tool, idx) => (
                  <div key={idx} className="p-2 bg-slate-900/30 rounded text-sm text-slate-300">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-green-400">Manual Testing</h4>
              <div className="space-y-2">
                {["Keyboard navigation", "Screen reader testing", "colour contrast", "Zoom testing"].map((test, idx) => (
                  <div key={idx} className="p-2 bg-slate-900/30 rounded text-sm text-slate-300">
                    {test}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-purple-400">User Testing</h4>
              <div className="space-y-2">
                {["Real users with disabilities", "Usability sessions", "Feedback collection", "Iteration cycles"].map((approach, idx) => (
                  <div key={idx} className="p-2 bg-slate-900/30 rounded text-sm text-slate-300">
                    {approach}
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

function PerformanceTab({ onCopyCode, copiedCode, safeAnimationSpeed }: any) {
  return (
    <div className="space-y-8">
      {/* Core Web Vitals */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <CardTitle className="text-xl text-slate-100">Core Web Vitals</CardTitle>
          <CardDescription>Google's metrics for user experience quality</CardDescription>
            </CardHeader>
            <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                metric: "LCP", 
                name: "Largest Contentful Paint", 
                target: "< 2.5s", 
                description: "Loading performance",
                colour: "text-green-400"
              },
              { 
                metric: "FID", 
                name: "First Input Delay", 
                target: "< 100ms", 
                description: "Interactivity",
                colour: "text-blue-400"
              },
              { 
                metric: "CLS", 
                name: "Cumulative Layout Shift", 
                target: "< 0.1", 
                description: "Visual stability",
                colour: "text-purple-400"
              }
            ].map((vital, index) => (
              <div key={vital.metric} className="text-center p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colours group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className={`text-3xl font-bold ${vital.colour} mb-2`}>{vital.metric}</div>
                <div className="text-sm text-slate-200 mb-1">{vital.name}</div>
                <div className="text-lg font-semibold text-slate-100 mb-2">{vital.target}</div>
                <div className="text-xs text-slate-400">{vital.description}</div>
              </div>
            ))}
          </div>
            </CardContent>
          </Card>

      {/* optimisation Strategies */}
      <Card className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-slate-100">Performance optimisation</CardTitle>
              <CardDescription className="mt-2">Strategies for improving application speed</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode('performance-example', 'performance')}
              className="h-8 w-8 p-0"
            >
              {copiedCode === 'performance' ? <CheckCircle2 className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
            </CardHeader>
            <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Code Splitting</h4>
              <pre className="bg-slate-900/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-slate-700/30">
                <code className="text-slate-300">{`// Lazy load components
const CandidateDetails = lazy(() => 
  import('./CandidateDetails')
)

// Route-based splitting
const JobsPage = lazy(() => 
  import('../pages/JobsPage')
)

// Suspense wrapper
<Suspense fallback={<Loading />}>
  <CandidateDetails />
</Suspense>`}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-fuchsia-300">Image optimisation</h4>
              <pre className="bg-slate-900/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-slate-700/30">
                <code className="text-slate-300">{`// Next.js Image component
<Image
  src="/candidate-photo.jpg"
  alt="Candidate photo"
  width={200}
  height={200}
  loading="lazy"
  placeholder="blur"
/>

// Responsive images
<picture>
  <source 
    media="(min-width: 800px)" 
    srcSet="large.webp" 
  />
  <img src="small.webp" alt="..." />
</picture>`}</code>
              </pre>
            </div>
          </div>
            </CardContent>
          </Card>

      {/* Monitoring */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Performance Monitoring</CardTitle>
          <CardDescription>Tools and metrics for ongoing performance tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { tool: "Lighthouse", use: "Audit scores", icon: Target },
              { tool: "PageSpeed Insights", use: "Core Web Vitals", icon: Zap },
              { tool: "WebPageTest", use: "Detailed analysis", icon: Eye },
              { tool: "Real User Monitoring", use: "Production data", icon: Users }
            ].map((item, index) => (
              <div key={item.tool} className="p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colours group text-center" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <item.icon className="h-8 w-8 text-fuchsia-400 mx-auto mb-3 group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }} />
                <div className="font-medium text-slate-200 mb-1">{item.tool}</div>
                <div className="text-xs text-slate-400">{item.use}</div>
              </div>
            ))}
        </div>
        </CardContent>
      </Card>
    </div>
  )
} 





