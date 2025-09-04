"use client"

import React, { useState, useEffect, useCallback } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Target, 
  Zap, 
  BarChart3,
  Search,
  Filter,
  Eye,
  Copy,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
  Play,
  Download,
  Settings,
  Briefcase,
  UserCheck,
  Award,
  Globe,
  Shield,
  Lightbulb,
  Rocket,
  Building,
  MessageSquare,
  Calendar,
  FileText,
  Mail,
  Phone,
  Video,
  Database,
  Layout,
  Code2,
  Monitor,
  Smartphone,
  Tablet,
  Activity
} from "lucide-react"
import { DashboardPreviewDark } from "../../dashboard-preview-dark"

export default function WorldClassDashboardPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["hero"]))
  const [viewMode, setViewMode] = useState<"prospect" | "technical">("prospect")
  const [copiedCode, setCopiedCode] = useState("")
  const [activeDemo, setActiveDemo] = useState("overview")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopyCode = useCallback(async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }, [])

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  // ATS metrics and benefits data
  const atsMetrics = [
    { label: "Faster Hiring", value: "73%", description: "Reduction in time-to-hire", trend: "up" },
    { label: "Quality Candidates", value: "89%", description: "Improvement in candidate quality", trend: "up" },
    { label: "Cost Savings", value: "£45k", description: "Average annual recruitment savings", trend: "up" },
    { label: "Bias Reduction", value: "92%", description: "Decrease in unconscious bias", trend: "up" }
  ]

  const keyFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Bias-Free Screening",
      description: "AI-powered candidate evaluation that removes unconscious bias from your hiring process",
      benefits: ["Anonymous CV review", "Skills-based assessment", "Diverse talent pools"],
      status: "Live Demo Available"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Intelligent Automation",
      description: "Streamline repetitive tasks and focus on building relationships with top talent",
      benefits: ["Automated screening", "Smart scheduling", "Instant communications"],
      status: "Live Demo Available"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-400" />,
      title: "Data-Driven Insights",
      description: "Make informed hiring decisions with comprehensive analytics and reporting",
      benefits: ["Real-time dashboards", "Predictive analytics", "ROI tracking"],
      status: "Live Demo Available"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      title: "Collaborative Hiring",
      description: "Bring your entire team together with seamless collaboration tools",
      benefits: ["Team feedback", "Structured interviews", "Decision tracking"],
      status: "Live Demo Available"
    }
  ]

  const demoScenarios = [
    {
      id: "overview",
      name: "Executive Overview",
      description: "High-level metrics and KPIs for leadership",
      audience: "C-Suite, HR Directors",
      highlights: ["Company-wide hiring metrics", "Budget impact", "Strategic insights"]
    },
    {
      id: "recruiter",
      name: "Recruiter Workflow",
      description: "Day-to-day tools for talent acquisition teams",
      audience: "Recruiters, Hiring Managers",
      highlights: ["Candidate pipeline", "Interview scheduling", "Collaboration tools"]
    },
    {
      id: "candidate",
      name: "Candidate Experience",
      description: "Modern, inclusive application process",
      audience: "Candidates, Hiring Teams",
      highlights: ["Mobile-first application", "Accessibility features", "Real-time updates"]
    },
    {
      id: "analytics",
      name: "Analytics & Reporting",
      description: "Comprehensive insights and data visualization",
      audience: "HR Analytics, Data Teams",
      highlights: ["Custom dashboards", "Bias detection", "Performance tracking"]
    }
  ]

  const competitiveAdvantages = [
    "UK-based with full GDPR compliance",
    "Purpose-built for inclusive hiring",
    "No-code customisation",
    "White-label solutions available",
    "Enterprise-grade security",
    "Seamless integrations"
  ]

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Hero Section - Always Visible */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-fuchsia-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-12">
                <div className="flex-1">
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 mb-6">
                    Live ATS Demo Platform
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
                    Transform Your
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Hiring Process</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
                    Experience the future of inclusive recruitment with our intelligent ATS platform. 
                    See how leading UK companies are reducing bias, improving efficiency, and building diverse teams.
                  </p>
                  
                  {/* Key Metrics - Immediate Value */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {atsMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-sm font-medium text-slate-200 mb-1">{metric.label}</div>
                        <div className="text-xs text-slate-400">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Mode Toggle */}
                <div className="flex flex-col gap-4 w-full lg:w-80">
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === "prospect" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("prospect")}
                      className="flex-1"
                    >
                      <Briefcase className="h-4 w-4 mr-2" />
                      Business Focus
                    </Button>
                    <Button
                      variant={viewMode === "technical" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("technical")}
                      className="flex-1"
                    >
                      <Code2 className="h-4 w-4 mr-2" />
                      Technical Details
                    </Button>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Start Interactive Demo
                    </Button>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:border-blue-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book a Demo Call
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Search */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    placeholder="Search features: 'bias detection', 'analytics', 'automation'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Showcase - Smart Expansion */}
        <section className="px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Live Demo Section */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("demo")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Monitor className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-100">Interactive Demo Platform</CardTitle>
                      <CardDescription>
                        {viewMode === "prospect" 
                          ? "Experience the complete hiring workflow with real-world scenarios"
                          : "Full-featured demo environment with API access and customisation options"
                        }
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-300">Live Demo</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("demo") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {(expandedSections.has("demo") || viewMode === "technical") && (
                <CardContent>
                  {/* Demo Scenario Selector */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {demoScenarios.map((scenario) => (
                        <Button
                          key={scenario.id}
                          variant={activeDemo === scenario.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveDemo(scenario.id)}
                          className="text-sm"
                        >
                          {scenario.name}
                        </Button>
                      ))}
                    </div>
                    
                    {/* Active Demo Description */}
                    {demoScenarios.map((scenario) => 
                      activeDemo === scenario.id && (
                        <div key={scenario.id} className="bg-slate-900/50 rounded-lg p-6 mb-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-medium text-slate-200 mb-2">{scenario.name}</h4>
                              <p className="text-slate-400 mb-2">{scenario.description}</p>
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                Target: {scenario.audience}
                              </Badge>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {scenario.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Live Demo Interface */}
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-slate-400 ml-2">Inclusive ATS Demo Environment</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-slate-400 border-slate-600">
                          <Monitor className="h-3 w-3 mr-1" />
                          Desktop
                        </Button>
                        <Button size="sm" variant="outline" className="text-slate-400 border-slate-600">
                          <Tablet className="h-3 w-3 mr-1" />
                          Tablet
                        </Button>
                        <Button size="sm" variant="outline" className="text-slate-400 border-slate-600">
                          <Smartphone className="h-3 w-3 mr-1" />
                          Mobile
                        </Button>
                      </div>
                    </div>
                    
                    {/* Dashboard Preview */}
                    <div className="aspect-video bg-slate-950 rounded border border-slate-700 overflow-hidden">
                      {mounted && <DashboardPreviewDark />}
                    </div>
                  </div>

                  {/* Demo Actions */}
                  <div className="flex gap-4 mt-6">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Eye className="h-4 w-4 mr-2" />
                      Open Full Demo
                    </Button>
                    <Button variant="outline" className="flex-1 border-slate-600 text-slate-300">
                      <Copy className="h-4 w-4 mr-2" />
                      Share Demo Link
                    </Button>
                    <Button variant="outline" className="flex-1 border-slate-600 text-slate-300">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Key Features - Progressive Disclosure */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("features")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Zap className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-100">Platform Capabilities</CardTitle>
                      <CardDescription>
                        {viewMode === "prospect" 
                          ? "Core features that transform your hiring process and deliver measurable results"
                          : "Technical specifications, APIs, and integration capabilities for enterprise deployment"
                        }
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-500/20 text-purple-300">4 Core Features</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("features") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("features") && (
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {keyFeatures.map((feature, index) => (
                      <div key={index} className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-6 group hover:border-purple-500/50 transition-all">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-2 rounded-lg bg-slate-800/50">
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-medium text-slate-200">{feature.title}</h4>
                              <Badge className="bg-green-500/20 text-green-300 text-xs">
                                {feature.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-400 mb-4">{feature.description}</p>
                          </div>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2 mb-4">
                          {feature.benefits.map((benefit, bIndex) => (
                            <div key={bIndex} className="flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle2 className="h-3 w-3 text-green-400" />
                              {benefit}
                            </div>
                          ))}
                        </div>

                        {/* Feature Actions */}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1 text-slate-400 border-slate-600 hover:border-purple-500 hover:text-purple-300">
                            <Play className="h-3 w-3 mr-2" />
                            Try Feature
                          </Button>
                          {viewMode === "technical" && (
                            <Button size="sm" variant="outline" className="flex-1 text-slate-400 border-slate-600 hover:border-blue-500 hover:text-blue-300">
                              <Code2 className="h-3 w-3 mr-2" />
                              API Docs
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Competitive Advantages */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Award className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-100">Why Choose Inclusive ATS</CardTitle>
                    <CardDescription>Key differentiators that set us apart in the UK market</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {competitiveAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Get Started CTA */}
            <Card className="border-slate-700/50 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-slate-100 mb-4">Ready to Transform Your Hiring?</h3>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join leading UK companies using Inclusive ATS to build diverse, high-performing teams. 
                  Start your free trial today and see the difference in your first week.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                    <Rocket className="h-5 w-5 mr-2" />
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:border-blue-500 px-8">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:border-purple-500 px-8">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}






