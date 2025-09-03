"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Shield, Target, Zap, TrendingUp, Users, Briefcase, GraduationCap, Copy, Settings, X, Eye, Code2, Download, ExternalLink, Sparkles, Heart, Brain, Lightbulb, Globe, Award, BookOpen, Layers, Palette, BarChart3 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

export default function Principles() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")


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
                  <h1 className="text-2xl font-bold text-slate-100">Design Principles</h1>
                  <p className="text-sm text-slate-400">Core philosophy and guidelines</p>
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
                    Design Guide
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Figma Kit
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

        {/* Strategic Header - Value First */}
        <header className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border-b border-slate-800/50">
        <div className="px-6 lg:px-12 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Value Proposition */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
                  Design Principles
                </h1>
                <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
                  Foundation for all design decisions. Make better choices faster with evidence-based guidelines.
                </p>
                
                {/* Impact Metrics */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">98%</div>
                    <div className="text-sm text-slate-400">User Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">150+</div>
                    <div className="text-sm text-slate-400">User Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">96%</div>
                    <div className="text-sm text-slate-400">Design Consistency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">94%</div>
                    <div className="text-sm text-slate-400">Task Completion</div>
                  </div>
                </div>
              </div>

              {/* Universal Quick Actions */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  onClick={() => {
                    const principlesSummary = `Design Principles Summary for Implementation:

1. Human-Centered Design (98% User Satisfaction Target)
   - Every decision starts with user needs and behaviors
   - Focus on accessibility and inclusion by default
   - Test with real users before implementation

2. Evidence-Based Decisions (150+ User Studies)
   - Back all choices with research and user testing
   - Measure impact and iterate based on data
   - Document decision rationale

3. Consistency & Scalability (96% Design Consistency)
   - Maintain unified patterns across all products  
   - Design systems that grow with the organization
   - Reuse over rebuild

4. Efficiency & Performance (94% Task Completion)
   - Optimize for both user and developer experience
   - Smart defaults reduce cognitive load
   - Measure and optimize performance`
                    navigator.clipboard.writeText(principlesSummary)
                    setCopiedCode('principles-summary')
                    setTimeout(() => setCopiedCode(''), 2000)
                  }}
                  className="bg-blue-600 hover:bg-blue-700 h-auto py-4"
                >
                  <div className="text-center">
                    {copiedCode === 'principles-summary' ? (
                      <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-green-300" />
                    ) : (
                      <Copy className="h-5 w-5 mx-auto mb-1" />
                    )}
                    <div className="font-medium">
                      {copiedCode === 'principles-summary' ? 'Copied!' : 'Copy Principles Summary'}
                    </div>
                    <div className="text-xs opacity-80">Strategic overview</div>
                  </div>
                </Button>
                
                <Button
                  onClick={() => {
                    const checklist = `Design Review Checklist:

Pre-Development:
□ Does this follow accessibility guidelines (WCAG 2.1 AA)?
□ Is it consistent with existing design patterns?
□ Does it improve user task completion efficiency?
□ Will it scale across different product contexts?

During Development:  
□ Semantic HTML structure implemented?
□ Keyboard navigation working correctly?
□ Focus management handled properly?
□ Performance optimized?

Post-Implementation:
□ Tested with assistive technologies?
□ Validated with diverse user groups?
□ Feedback incorporated into design?
□ Documentation updated?`
                    navigator.clipboard.writeText(checklist)
                    setCopiedCode('review-checklist')
                    setTimeout(() => setCopiedCode(''), 2000)
                  }}
                  className="bg-green-600 hover:bg-green-700 h-auto py-4"
                >
                  <div className="text-center">
                    {copiedCode === 'review-checklist' ? (
                      <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-green-300" />
                    ) : (
                      <Target className="h-5 w-5 mx-auto mb-1" />
                    )}
                    <div className="font-medium">
                      {copiedCode === 'review-checklist' ? 'Copied!' : 'Review Checklist'}
                    </div>
                    <div className="text-xs opacity-80">Quality assurance</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-700 h-auto py-4"
                  onClick={() => window.open('/design-system/tokens', '_blank')}
                >
                  <div className="text-center">
                    <Palette className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-medium">Design Tokens</div>
                    <div className="text-xs opacity-80">Implementation values</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-700 h-auto py-4"
                  onClick={() => {
                    // Scroll to resources tab
                    const resourcesTab = document.querySelector('[data-tab="resources"]')
                    if (resourcesTab) {
                      resourcesTab.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <div className="text-center">
                    <BookOpen className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-medium">Resources & Tools</div>
                    <div className="text-xs opacity-80">Downloads & guides</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Optimized for Scanning */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          {/* Core Principles Grid - Visual First */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Human-Centered Design */}
              <Card className="group bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                      <Heart className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-100">Human-Centered Design</h3>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          98% Satisfaction
                </Badge>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Every decision starts with user needs. We prioritize accessibility, inclusion, and real user testing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>WCAG 2.1 AA compliance by default</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Test with real users before implementation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Focus on diverse user groups</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    onClick={() => window.open('/design-system/accessibility', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Accessibility Guide
                  </Button>
                </CardContent>
              </Card>

              {/* Evidence-Based Decisions */}
              <Card className="group bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                      <Brain className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-100">Evidence-Based Decisions</h3>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          150+ Studies
                </Badge>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Back all choices with research and user testing. Measure impact and iterate based on data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>A/B testing for major changes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Document decision rationale</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Continuous performance monitoring</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open('/design-system/dashboard', '_blank')}
                    className="border-purple-600 hover:bg-purple-700 text-purple-300"
                  >
                    <BarChart3 className="h-4 w-4 mr-1" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>

              {/* Consistency & Scalability */}
              <Card className="group bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border-green-500/20 hover:border-green-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                      <Target className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-100">Consistency & Scalability</h3>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          96% Consistency
                </Badge>
              </div>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Maintain unified patterns across all products. Design systems that grow with the organization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Shared component library</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Unified design tokens</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Cross-platform patterns</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    onClick={() => window.open('/design-system/tokens', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Layers className="h-4 w-4 mr-1" />
                    Design Tokens
                  </Button>
                </CardContent>
              </Card>

              {/* Efficiency & Performance */}
              <Card className="group bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-colors">
                      <Zap className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-100">Efficiency & Performance</h3>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          94% Completion
                        </Badge>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Optimize for both user and developer experience. Smart defaults reduce cognitive load.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Minimal cognitive load</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Smart defaults & automation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>Performance optimized</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open('/design-system/best-practices', '_blank')}
                    className="border-orange-600 hover:bg-orange-700 text-orange-300"
                  >
                    <Award className="h-4 w-4 mr-1" />
                    Best Practices
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3 text-slate-100">
                Implementation Guide
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Put these principles into practice with actionable steps and tools.
              </p>
                        </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* For Designers */}
              <Card className="bg-gradient-to-br from-fuchsia-500/10 via-fuchsia-500/5 to-transparent border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-100">
                    <Lightbulb className="h-5 w-5 text-fuchsia-400" />
                    For Designers
                  </CardTitle>
                  <CardDescription>Apply principles in your design process</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Start with user research and personas</span>
                      </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Use design tokens for consistency</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Test prototypes with real users</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => window.open('/design-system/tokens', '_blank')}
                    className="w-full bg-fuchsia-600 hover:bg-fuchsia-700"
                  >
                    <Palette className="h-4 w-4 mr-1" />
                    Design Tokens
                  </Button>
                </CardContent>
              </Card>

              {/* For Developers */}
              <Card className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-100">
                    <Code2 className="h-5 w-5 text-blue-400" />
                    For Developers
                  </CardTitle>
                  <CardDescription>Implement accessible, consistent components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Use semantic HTML structure</span>
                        </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Implement keyboard navigation</span>
                      </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Test with screen readers</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => window.open('/design-system/accessibility', '_blank')}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Accessibility Guide
                  </Button>
                </CardContent>
              </Card>

              {/* For Product Managers */}
              <Card className="bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-100">
                    <Target className="h-5 w-5 text-green-400" />
                    For Product Managers
                  </CardTitle>
                  <CardDescription>Guide teams with principle-based decisions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Use the review checklist for features</span>
                        </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Measure user satisfaction metrics</span>
                      </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Document design decisions</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => window.open('/design-system/dashboard', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <BarChart3 className="h-4 w-4 mr-1" />
                    View Metrics
                  </Button>
                </CardContent>
              </Card>
                        </div>
          </section>

          {/* Resources & Downloads */}
          <section className="mb-12" data-tab="resources">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3 text-slate-100">
                Resources & Downloads
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Ready-to-use tools and templates to implement these principles.
              </p>
                      </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                onClick={() => {
                  const checklist = `Design Review Checklist:

Pre-Development:
□ Does this follow accessibility guidelines (WCAG 2.1 AA)?
□ Is it consistent with existing design patterns?
□ Does it improve user task completion efficiency?
□ Will it scale across different product contexts?

During Development:  
□ Semantic HTML structure implemented?
□ Keyboard navigation working correctly?
□ Focus management handled properly?
□ Performance optimized?

Post-Implementation:
□ Tested with assistive technologies?
□ Validated with diverse user groups?
□ Feedback incorporated into design?
□ Documentation updated?`
                  navigator.clipboard.writeText(checklist)
                  setCopiedCode('review-checklist')
                  setTimeout(() => setCopiedCode(''), 2000)
                }}
                className="h-auto py-4 bg-blue-600 hover:bg-blue-700"
              >
                <div className="text-center">
                  {copiedCode === 'review-checklist' ? (
                    <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-green-300" />
                  ) : (
                    <Download className="h-5 w-5 mx-auto mb-1" />
                  )}
                  <div className="font-medium">
                    {copiedCode === 'review-checklist' ? 'Copied!' : 'Review Checklist'}
                </div>
                  <div className="text-xs opacity-80">Quality assurance</div>
              </div>
              </Button>

              <Button
                onClick={() => {
                  const principles = `Design Principles Summary:

1. Human-Centered Design (98% User Satisfaction Target)
   - Every decision starts with user needs and behaviors
   - Focus on accessibility and inclusion by default
   - Test with real users before implementation

2. Evidence-Based Decisions (150+ User Studies)
   - Back all choices with research and user testing
   - Measure impact and iterate based on data
   - Document decision rationale

3. Consistency & Scalability (96% Design Consistency)
   - Maintain unified patterns across all products  
   - Design systems that grow with the organization
   - Reuse over rebuild

4. Efficiency & Performance (94% Task Completion)
   - Optimize for both user and developer experience
   - Smart defaults reduce cognitive load
   - Measure and optimize performance`
                  navigator.clipboard.writeText(principles)
                  setCopiedCode('principles-doc')
                  setTimeout(() => setCopiedCode(''), 2000)
                }}
                variant="outline"
                className="h-auto py-4 border-slate-600 hover:bg-slate-700"
              >
                <div className="text-center">
                  {copiedCode === 'principles-doc' ? (
                    <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-green-400" />
                  ) : (
                    <BookOpen className="h-5 w-5 mx-auto mb-1" />
                  )}
                  <div className="font-medium">
                    {copiedCode === 'principles-doc' ? 'Copied!' : 'Principles Doc'}
                  </div>
                  <div className="text-xs opacity-80">Summary document</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-4 border-slate-600 hover:bg-slate-700"
                onClick={() => window.open('/design-system/accessibility', '_blank')}
              >
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto mb-1" />
                  <div className="font-medium">Accessibility Guidelines</div>
                  <div className="text-xs opacity-80">WCAG 2.1 AA compliance</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-4 border-slate-600 hover:bg-slate-700"
                onClick={() => window.open('/design-system/best-practices', '_blank')}
              >
                <div className="text-center">
                  <Award className="h-5 w-5 mx-auto mb-1" />
                  <div className="font-medium">Best Practices</div>
                  <div className="text-xs opacity-80">Implementation guide</div>
                </div>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

// Tab Components
function CoreTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const corePrinciples = [
              {
                title: "Accessibility First",
                description:
                  "Every component is designed with accessibility in mind, ensuring all users can effectively use recruitment applications regardless of their abilities.",
                icon: Shield,
                color: "text-blue-400",
                bgColor: "bg-blue-500/20",
                details: [
                  "WCAG 2.1 AA compliance",
                  "Screen reader compatibility",
                  "Keyboard navigation support",
                  "High contrast color ratios",
                  "Focus management",
                ],
              },
              {
                title: "Consistency",
                description:
                  "Unified visual language and interaction patterns create predictable experiences that users can learn once and apply everywhere.",
                icon: Target,
                color: "text-green-400",
                bgColor: "bg-green-500/20",
                details: [
                  "Standardized component behavior",
                  "Consistent spacing and typography",
                  "Unified color system",
                  "Predictable interaction patterns",
                  "Cross-platform consistency",
                ],
              },
              {
                title: "Efficiency",
                description:
                  "Streamlined workflows and intuitive interfaces help recruiters and candidates accomplish their goals quickly and effectively.",
                icon: Zap,
                color: "text-yellow-400",
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
                color: "text-purple-400",
                bgColor: "bg-purple-500/20",
                details: [
                  "Modular component architecture",
                  "Flexible layout systems",
                  "Customizable themes",
                  "Performance optimization",
                  "Future-proof design tokens",
                ],
              },
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Target className="h-6 w-6 text-fuchsia-400" />
            Core Design Principles
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            The foundational principles that guide every design decision and ensure consistent, user-centered experiences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all group" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${principle.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <principle.icon className={`h-7 w-7 ${principle.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        {principle.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-slate-300 mb-3">Key Features:</h4>
                    {principle.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ApplicationTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const applicationAreas = [
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
        { principle: "Human-Centered", application: "Task flows match natural user mental models" },
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
        { principle: "Scalability", application: "Modular architecture supports customization" }
      ]
    }
  ]

  const implementationGuidelines = [
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
        "Performance measured and optimized?",
        "Feedback incorporated into design?"
      ]
    }
  ]

  return (
    <div className="space-y-8">
      {/* Application Areas */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Zap className="h-6 w-6 text-fuchsia-400" />
            Principle Applications
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            How our design principles are applied in practice across different areas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {applicationAreas.map((area, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-fuchsia-500/20 rounded-lg flex items-center justify-center">
                    <area.icon className="h-5 w-5 text-fuchsia-400" />
    </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{area.title}</h3>
                    <p className="text-sm text-slate-400">{area.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {area.examples.map((example, idx) => (
                    <div key={idx} className="p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <div className="text-sm font-medium text-fuchsia-300 mb-2">{example.principle}</div>
                      <div className="text-sm text-slate-400">{example.application}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guidelines */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-fuchsia-400" />
            Implementation Checklists
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Practical checklists to ensure principles are followed during design and development.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {implementationGuidelines.map((guideline, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                  </div>
                  {guideline.category}
                </h3>
                <div className="space-y-3">
                  {guideline.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <div className="w-4 h-4 border border-slate-600 rounded mt-0.5 flex-shrink-0"></div>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100">Example: Accessible Button Implementation</CardTitle>
          <CardDescription>How our principles translate to actual component code</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <pre className="bg-slate-900/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30">
              <code className="text-slate-300">{`// Accessibility First: ARIA attributes, keyboard support
// Consistency: Standardized variants and sizes  
// Efficiency: Smart defaults and TypeScript support
// Scalability: Flexible styling system

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  'aria-label'?: string // Accessibility First
  onClick?: () => void
}

export const Button = ({ 
  variant = 'primary', // Efficiency: Smart defaults
  size = 'md',
  disabled = false,
  loading = false,
  'aria-label': ariaLabel,
  children,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // Consistency: Unified base styles
        "inline-flex items-center justify-center rounded-md font-medium",
        "focus:outline-none focus:ring-2 focus:ring-offset-2", // Accessibility
        "disabled:opacity-50 disabled:cursor-not-allowed",
        
        // Scalability: Variant system
        variant === 'primary' && "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
        variant === 'secondary' && "bg-slate-200 text-slate-900 hover:bg-slate-300",
        variant === 'outline' && "border border-slate-300 bg-transparent hover:bg-slate-50",
        
        // Consistency: Size system
        size === 'sm' && "h-8 px-3 text-sm",
        size === 'md' && "h-10 px-4 text-sm", 
        size === 'lg' && "h-12 px-6 text-base"
      )}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="mr-2 h-4 w-4" />}
      {children}
    </button>
  )
}`}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCopyCode(`// Accessibility First: ARIA attributes, keyboard support
// Consistency: Standardized variants and sizes  
// Efficiency: Smart defaults and TypeScript support
// Scalability: Flexible styling system

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  'aria-label'?: string // Accessibility First
  onClick?: () => void
}

export const Button = ({ 
  variant = 'primary', // Efficiency: Smart defaults
  size = 'md',
  disabled = false,
  loading = false,
  'aria-label': ariaLabel,
  children,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // Consistency: Unified base styles
        "inline-flex items-center justify-center rounded-md font-medium",
        "focus:outline-none focus:ring-2 focus:ring-offset-2", // Accessibility
        "disabled:opacity-50 disabled:cursor-not-allowed",
        
        // Scalability: Variant system
        variant === 'primary' && "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
        variant === 'secondary' && "bg-slate-200 text-slate-900 hover:bg-slate-300",
        variant === 'outline' && "border border-slate-300 bg-transparent hover:bg-slate-50",
        
        // Consistency: Size system
        size === 'sm' && "h-8 px-3 text-sm",
        size === 'md' && "h-10 px-4 text-sm", 
        size === 'lg' && "h-12 px-6 text-base"
      )}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="mr-2 h-4 w-4" />}
      {children}
    </button>
  )
}`, 'button-example')}
              className="transition-opacity"
              style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}
            >
              {copiedCode === 'button-example' ? <CheckCircle2 className="h-3 w-3 text-green-400 mr-2" /> : <Copy className="h-3 w-3 mr-2" />}
              Copy Example
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResourcesTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const resources = [
    {
      category: "Design Guidelines",
      icon: BookOpen,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      items: [
        { title: "Accessibility Standards", description: "WCAG 2.1 AA implementation guide", link: "#", type: "Guide" },
        { title: "Color Usage Principles", description: "How to use our color system effectively", link: "#", type: "Documentation" },
        { title: "Typography Hierarchy", description: "Text scaling and hierarchy guidelines", link: "#", type: "Reference" },
        { title: "Spacing & Layout", description: "Grid systems and spacing principles", link: "#", type: "Guide" }
      ]
    },
    {
      category: "Tools & Assets",
      icon: Briefcase,
      color: "text-green-400", 
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
      color: "text-purple-400",
      bgColor: "bg-purple-500/20", 
      items: [
        { title: "Design System Fundamentals", description: "Introduction to design system principles", link: "#", type: "Course" },
        { title: "Accessibility Deep Dive", description: "Advanced accessibility implementation", link: "#", type: "Workshop" },
        { title: "Component API Design", description: "Building scalable component APIs", link: "#", type: "Tutorial" },
        { title: "User Research Methods", description: "Research techniques for design validation", link: "#", type: "Guide" }
      ]
    }
  ]

  const quickLinks = [
    { title: "Design Token Export", description: "Download tokens in JSON/CSS formats", icon: Download, action: "Download" },
    { title: "Component Storybook", description: "Interactive component documentation", icon: ExternalLink, action: "View" },
    { title: "GitHub Repository", description: "Source code and contribution guidelines", icon: Code2, action: "Explore" },
    { title: "Design Community", description: "Join our Slack workspace for discussions", icon: Users, action: "Join" }
  ]

  return (
    <div className="space-y-8">
      {/* Quick Links */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Zap className="h-6 w-6 text-fuchsia-400" />
            Quick Links
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Essential resources and tools for immediate access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <div key={index} className="group p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 hover:bg-slate-900/50 transition-all cursor-pointer" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-fuchsia-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <link.icon className="h-5 w-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>{link.title}</h3>
                      <p className="text-sm text-slate-400">{link.description}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-600/50">
                    {link.action}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resource Categories */}
      <div className="space-y-8">
        {resources.map((category, index) => (
          <Card key={index} className="bg-slate-800/30 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-xl text-slate-100 flex items-center gap-3">
                <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                </div>
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="group p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-900/50 transition-all cursor-pointer" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-slate-100 group-hover:text-fuchsia-300 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>{item.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                      <ExternalLink className="h-3 w-3" />
                      View Resource
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 flex items-center gap-3">
            <Heart className="h-6 w-6 text-fuchsia-400" />
            Support & Community
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Get help and connect with other design system users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-medium text-slate-100">Community Forum</h3>
              <p className="text-sm text-slate-400">Ask questions and share experiences with other users.</p>
              <Button variant="outline" size="sm" className="w-full">
                Join Discussion
              </Button>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto">
                <BookOpen className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-medium text-slate-100">Documentation</h3>
              <p className="text-sm text-slate-400">Comprehensive guides and API references.</p>
              <Button variant="outline" size="sm" className="w-full">
                Browse Docs
              </Button>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-medium text-slate-100">Direct Support</h3>
              <p className="text-sm text-slate-400">Get help directly from the design system team.</p>
              <Button variant="outline" size="sm" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function OverviewTab({ safeAnimationSpeed }: { safeAnimationSpeed: number }) {
  const designPhilosophy = [
    {
      title: "Human-Centered Design",
      description: "Every design decision starts with understanding user needs, behaviors, and contexts.",
      icon: Heart,
      color: "text-red-400",
      stats: "98% User Satisfaction"
    },
    {
      title: "Evidence-Based",
      description: "Design decisions backed by research, data, and user testing insights.",
      icon: Brain,
      color: "text-blue-400", 
      stats: "150+ User Studies"
    },
    {
      title: "Inclusive by Default",
      description: "Accessibility and inclusion are built into every component from the ground up.",
      icon: Globe,
      color: "text-green-400",
      stats: "WCAG 2.1 AA Compliant"
    },
    {
      title: "Continuously Evolving",
      description: "The system grows and improves based on feedback and changing user needs.",
      icon: TrendingUp,
      color: "text-purple-400",
      stats: "Monthly Updates"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Philosophy Cards */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-fuchsia-400" />
            Design Philosophy
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Our approach to creating meaningful, accessible, and effective design solutions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {designPhilosophy.map((item, index) => (
              <div key={index} className="group p-6 bg-slate-900/30 rounded-xl border border-slate-700/30 hover:border-fuchsia-500/30 hover:bg-slate-900/50 transition-all" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
                    <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 border-slate-600/50">
                      {item.stats}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impact Metrics */}
      <Card className="bg-slate-800/30 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100 flex items-center gap-3">
            <Award className="h-6 w-6 text-fuchsia-400" />
            Impact & Results
          </CardTitle>
          <CardDescription className="text-slate-400 mt-2">
            Measurable outcomes from applying our design principles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Accessibility Score", value: "98%", change: "+12% this year", color: "text-green-400" },
              { label: "User Satisfaction", value: "4.8/5", change: "+0.4 improvement", color: "text-blue-400" },
              { label: "Task Completion", value: "94%", change: "+8% efficiency", color: "text-purple-400" },
              { label: "Design Consistency", value: "96%", change: "Across all products", color: "text-orange-400" }
            ].map((metric, index) => (
              <div key={index} className="text-center p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-colors" style={{ transitionDuration: `${1 / safeAnimationSpeed}s` }}>
                <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                <div className="text-sm text-slate-300 mb-1">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.change}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 