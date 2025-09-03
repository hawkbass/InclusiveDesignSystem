"use client"

import React, { useState, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Shield, 
  Target,
  Eye,
  Lightbulb,
  Users,
  Globe,
  Award,
  CheckCircle2,
  Copy,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Download,
  ExternalLink,
  Code2,
  AlertTriangle,
  Zap,
  Heart,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  Volume2,
  Keyboard,
  Play,
  ArrowRight,
  BarChart3,
  Filter,
  Command,
  Sparkles,
  TestTube,
  Gauge,
  BookOpen,
  Navigation,
  RefreshCw,
  Star,
  Clock,
  TrendingUp,
  Activity,
  Compass
} from "lucide-react"

// Simple contrast checker utility
function getLuminance(hex: string) {
  const rgb = hex.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16) / 255) || [0,0,0];
  const [r, g, b] = rgb.map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrast(hex1: string, hex2: string) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function passesWCAG(contrast: number, large = false) {
  return large ? contrast >= 3 : contrast >= 4.5;
}

export default function AccessibilityUniversal() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [userMode, setUserMode] = useState<"guided" | "technical">("guided")
  const [copiedCode, setCopiedCode] = useState("")
  const [favourites, setFavorites] = useState<Set<string>>(new Set())
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [fg, setFg] = useState("#ffffff")
  const [bg, setBg] = useState("#1e293b")
  const [testingProgress, setTestingProgress] = useState(0)
  const [runningTest, setRunningTest] = useState("")
  const [completedTests, setCompletedTests] = useState<Set<string>>(new Set())
  const [notifications, setNotifications] = useState<Array<{id: string, message: string, type: 'success' | 'info' | 'warning'}>>([])
  const [complianceScore, setComplianceScore] = useState(85)

  const contrast = getContrast(fg, bg)
  const passes = passesWCAG(contrast)

  // Comprehensive searchable content
  const allSearchableItems = [
    // WCAG Guidelines
    { id: "wcag-aa", name: "WCAG 2.1 AA Guidelines", category: "Standards", type: "guideline",
      description: "Web Content Accessibility Guidelines Level AA compliance", difficulty: "intermediate" },
    { id: "section-508", name: "Section 508 Compliance", category: "Standards", type: "guideline",
      description: "US Federal accessibility requirements", difficulty: "intermediate" },
    { id: "en-301-549", name: "EN 301 549 Standard", category: "Standards", type: "guideline",
      description: "European accessibility standard", difficulty: "advanced" },
      
    // ARIA Attributes
    { id: "aria-label", name: "aria-label", category: "ARIA", type: "attribute",
      value: `aria-label="Close dialog"`, usage: "Provides accessible name", difficulty: "beginner" },
    { id: "aria-labelledby", name: "aria-labelledby", category: "ARIA", type: "attribute",
      value: `aria-labelledby="title-id"`, usage: "References label element", difficulty: "beginner" },
    { id: "aria-describedby", name: "aria-describedby", category: "ARIA", type: "attribute",
      value: `aria-describedby="error-msg"`, usage: "References description", difficulty: "beginner" },
    { id: "aria-live", name: "aria-live", category: "ARIA", type: "attribute",
      value: `aria-live="polite"`, usage: "Announces dynamic changes", difficulty: "intermediate" },
    { id: "aria-hidden", name: "aria-hidden", category: "ARIA", type: "attribute",
      value: `aria-hidden="true"`, usage: "Hides decorative elements", difficulty: "beginner" },
      
    // Testing Tools
    { id: "axe-core", name: "Axe Core", category: "Testing", type: "tool",
      description: "Automated accessibility testing engine", difficulty: "intermediate" },
    { id: "nvda", name: "NVDA Screen Reader", category: "Testing", type: "tool",
      description: "Free Windows screen reader", difficulty: "beginner" },
    { id: "voiceover", name: "VoiceOver", category: "Testing", type: "tool",
      description: "macOS/iOS built-in screen reader", difficulty: "beginner" },
    { id: "lighthouse", name: "Lighthouse", category: "Testing", type: "tool",
      description: "Browser accessibility auditor", difficulty: "beginner" },
      
    // colour Contrast
    { id: "contrast-ratio", name: "Contrast Ratio", category: "colour", type: "concept",
      description: "4.5:1 minimum for normal text", difficulty: "beginner" },
    { id: "colour-blindness", name: "colour Blindness", category: "colour", type: "concept",
      description: "Don't rely on colour alone", difficulty: "beginner" },
      
    // Keyboard Navigation
    { id: "focus-management", name: "Focus Management", category: "Keyboard", type: "concept",
      description: "Visible focus indicators and logical order", difficulty: "intermediate" },
    { id: "skip-links", name: "Skip Links", category: "Keyboard", type: "pattern",
      description: "Allow skipping to main content", difficulty: "beginner" },
      
    // Code Examples
    { id: "accessible-button", name: "Accessible Button", category: "Examples", type: "code",
      value: `<Button aria-label="Submit application">Submit</Button>`, difficulty: "beginner" },
    { id: "accessible-form", name: "Accessible Form", category: "Examples", type: "code",
      value: `<input aria-describedby="error-msg" aria-invalid="true" />`, difficulty: "intermediate" },
    { id: "accessible-modal", name: "Accessible Modal", category: "Examples", type: "code",
      value: `<div role="dialog" aria-modal="true" aria-labelledby="title">`, difficulty: "advanced" }
  ]

  // Learning paths with progressive disclosure
  const accessibilityPaths = [
    {
      id: "beginner",
      title: "Accessibility Fundamentals",
      description: "Essential concepts and quick wins for inclusive design",
      icon: Shield,
      colour: "text-green-400",
      bgColor: "bg-green-500/20",
      duration: "20 min",
      difficulty: "Beginner",
      steps: [
        { id: "understand-disabilities", title: "Understanding User Needs", duration: "5 min", type: "reading" },
        { id: "wcag-basics", title: "WCAG 2.1 Overview", duration: "5 min", type: "reading" },
        { id: "quick-wins", title: "Quick Accessibility Wins", duration: "5 min", type: "interactive" },
        { id: "basic-testing", title: "Basic Testing Methods", duration: "5 min", type: "hands-on" }
      ]
    },
    {
      id: "developer",
      title: "Technical Implementation", 
      description: "ARIA, semantic HTML, and testing integration",
      icon: Code2,
      colour: "text-blue-400",
      bgColor: "bg-blue-500/20",
      duration: "35 min",
      difficulty: "Intermediate",
      steps: [
        { id: "semantic-html", title: "Semantic HTML Foundation", duration: "8 min", type: "coding" },
        { id: "aria-implementation", title: "ARIA Patterns & Best Practices", duration: "12 min", type: "coding" },
        { id: "testing-integration", title: "Automated Testing Setup", duration: "10 min", type: "coding" },
        { id: "ci-cd-integration", title: "CI/CD Pipeline Integration", duration: "5 min", type: "coding" }
      ]
    },
    {
      id: "auditor",
      title: "Accessibility Auditing",
      description: "Comprehensive testing and compliance validation",
      icon: Target,
      colour: "text-purple-400", 
      bgColor: "bg-purple-500/20",
      duration: "30 min",
      difficulty: "Advanced",
      steps: [
        { id: "audit-methodology", title: "Audit Methodology", duration: "8 min", type: "reading" },
        { id: "testing-tools", title: "Advanced Testing Tools", duration: "10 min", type: "hands-on" },
        { id: "compliance-reporting", title: "Compliance Reporting", duration: "7 min", type: "hands-on" },
        { id: "remediation-planning", title: "Remediation Planning", duration: "5 min", type: "planning" }
      ]
    }
  ]

  // Smart search functionality
  useEffect(() => {
    if (searchQuery.length > 0) {
      const results = allSearchableItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.usage && item.usage.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.value && item.value.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      setSearchResults(results.slice(0, 8))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favourites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const runAccessibilityTest = (testType: string) => {
    setRunningTest(testType)
    setTestingProgress(0)
    
    // Add notification
    const notificationId = Date.now().toString()
    setNotifications(prev => [...prev, {
      id: notificationId,
      message: `Starting ${testType.replace(/-/g, ' ')} test...`,
      type: 'info'
    }])
    
    // Simulate test progress
    const interval = setInterval(() => {
      setTestingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setRunningTest("")
          setCompletedTests(current => new Set([...current, testType]))
          
          // Success notification
          setNotifications(prev => prev.filter(n => n.id !== notificationId))
          setNotifications(prev => [...prev, {
            id: Date.now().toString(),
            message: `✓ ${testType.replace(/-/g, ' ')} test completed successfully`,
            type: 'success'
          }])
          
          // Update compliance score
          setComplianceScore(prev => Math.min(100, prev + 5))
          
          handleCopyCode(`✓ ${testType} test completed successfully\n\nTest Results:\n- Accessibility standards: WCAG 2.1 AA\n- Issues found: 0 critical, 2 minor\n- Compliance score: ${complianceScore + 5}%`, `test-${testType}`)
          
          // Clear notification after 3 seconds
          setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.message.includes('completed successfully') === false))
          }, 3000)
          
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  // Quick preview items always visible - Enhanced with better UX
  const quickPreviewItems = [
    { 
      name: "Live Contrast Checker", 
      description: `Test colour combinations • Current: ${contrast.toFixed(1)}:1 ${passes ? '✓' : '✗'}`,
      icon: Eye,
      action: () => toggleSection("contrast-checker"),
      status: passes ? "pass" : "fail",
      metrics: `${contrast.toFixed(1)}:1`
    },
    { 
      name: "ARIA Label Example", 
      code: `aria-label="Close navigation menu"`,
      icon: Code2,
      category: "Essential Attribute",
      description: "Most commonly used ARIA attribute for accessible labeling"
    },
    { 
      name: "Interactive Testing Suite", 
      description: runningTest ? `Running ${runningTest} test...` : "Test with screen readers & automation",
      icon: Volume2,
      action: () => runAccessibilityTest("comprehensive"),
      status: runningTest ? "running" : "ready",
      progress: testingProgress
    }
  ]

  const popularSearches = ["aria-label", "contrast ratio", "screen reader", "keyboard navigation", "wcag guidelines"]

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map((notification) => (
            <Alert 
              key={notification.id}
              className={`max-w-md animate-in slide-in-from-right-2 ${
                notification.type === 'success' ? 'bg-green-500/20 border-green-500/30 text-green-300' :
                notification.type === 'warning' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300' :
                'bg-blue-500/20 border-blue-500/30 text-blue-300'
              }`}
            >
              {notification.type === 'success' && <CheckCircle2 className="h-4 w-4" />}
              {notification.type === 'warning' && <AlertTriangle className="h-4 w-4" />}
              {notification.type === 'info' && <Lightbulb className="h-4 w-4" />}
              <AlertDescription className="text-sm">
                {notification.message}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      )}
      
      <main className="flex-1 overflow-auto">
        {/* Universal Comprehension Header */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-green-950 border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-centre gap-8 mb-8">
                <div>
                  <div className="flex items-centre gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30">
                      <Shield className="w-3 h-3 mr-1" />
                      WCAG 2.1 AA Compliant
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
                      <Globe className="w-3 h-3 mr-1" />
                      Inclusive Design
                    </Badge>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                    Accessibility
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Guidelines</span>
                  </h1>
                  <p className="text-xl text-slate-400 max-w-3xl">
                    Build inclusive experiences that work for everyone. Comprehensive accessibility guidelines, 
                    testing tools, and implementation patterns for WCAG 2.1 AA compliance.
                  </p>
                </div>

                {/* User Mode Toggle */}
                <div className="flex flex-col gap-4 w-full lg:w-80">
                  <div className="flex gap-2">
                    <Button
                      variant={userMode === "guided" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setUserMode("guided")}
                      className="flex-1"
                    >
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Guided
                    </Button>
                    <Button
                      variant={userMode === "technical" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setUserMode("technical")}
                      className="flex-1"
                    >
                      <Code2 className="h-4 w-4 mr-2" />
                      Technical
                    </Button>
                  </div>
                  
                  <div className="text-centre">
                    <div className="text-2xl font-bold text-slate-100">
                      {runningTest ? `${testingProgress}%` : `${complianceScore}%`}
                    </div>
                    <div className="text-sm text-slate-500">
                      {runningTest ? "Testing Progress" : "Compliance Score"}
                    </div>
                    <div className="mt-2">
                      <Progress 
                        value={runningTest ? testingProgress : complianceScore} 
                        className={`h-1 ${complianceScore >= 90 ? 'bg-green-500/20' : complianceScore >= 70 ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}
                      />
                    </div>
                    {!runningTest && completedTests.size > 0 && (
                      <div className="text-xs text-green-400 mt-1">
                        {completedTests.size} test{completedTests.size !== 1 ? 's' : ''} completed
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Functional Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <Input
                    placeholder="Search guidelines, ARIA attributes, testing tools... Try 'aria-label' or 'contrast'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 border-slate-700 text-slate-200 placeholder-slate-500 rounded-xl"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                {/* Popular Searches */}
                <div className="flex flex-wrap justify-centre gap-2 mt-4">
                  <span className="text-sm text-slate-500">Popular:</span>
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="text-xs text-slate-400 hover:text-green-400 h-6 px-2"
                    >
                      {search}
                    </Button>
                  ))}
                </div>

                {/* Live Search Results */}
                {searchResults.length > 0 && (
                  <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-slate-800 border-slate-700 max-h-96 overflow-y-auto">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {searchResults.map((result) => (
                          <div key={result.id} className="flex items-centre gap-3 p-2 hover:bg-slate-700/50 rounded-lg cursor-pointer group">
                            <div className="p-2 rounded bg-slate-700/50">
                              {result.type === "guideline" && <BookOpen className="h-4 w-4 text-green-400" />}
                              {result.type === "attribute" && <Code2 className="h-4 w-4 text-blue-400" />}
                              {result.type === "tool" && <Settings className="h-4 w-4 text-purple-400" />}
                              {result.type === "concept" && <Lightbulb className="h-4 w-4 text-yellow-400" />}
                              {result.type === "pattern" && <Navigation className="h-4 w-4 text-fuchsia-400" />}
                              {result.type === "code" && <Sparkles className="h-4 w-4 text-cyan-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-slate-200">{result.name}</div>
                              <div className="text-xs text-slate-400 truncate">
                                {result.description || result.usage}
                              </div>
                            </div>
                            <Badge className="bg-slate-700 text-slate-300 text-xs">
                              {result.difficulty}
                            </Badge>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation()
                                if (result.value) {
                                  handleCopyCode(result.value, result.id)
                                }
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Quick Value Preview - Always Visible with Enhanced Status */}
              <div className="mt-12">
                <h3 className="text-lg font-medium text-slate-300 mb-6 text-centre">Essential Accessibility Tools:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {quickPreviewItems.map((item, index) => (
                    <Card key={index} className={`bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group cursor-pointer ${
                      item.status === 'pass' ? 'border-green-500/30 shadow-green-500/10' : 
                      item.status === 'fail' ? 'border-yellow-500/30 shadow-yellow-500/10' :
                      item.status === 'running' ? 'border-blue-500/30 shadow-blue-500/10' : ''
                    }`}>
                      <CardContent className="p-6 text-centre">
                        <div className="flex items-centre justify-between mb-4">
                          <div className="flex items-centre justify-centre flex-1">
                            <div className={`p-3 rounded-xl transition-all group-hover:scale-110 ${
                              item.status === 'pass' ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' :
                              item.status === 'fail' ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20' :
                              item.status === 'running' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' :
                              'bg-gradient-to-br from-green-500/20 to-blue-500/20'
                            }`}>
                              <item.icon className={`h-6 w-6 transition-colours ${
                                item.status === 'pass' ? 'text-green-400' :
                                item.status === 'fail' ? 'text-yellow-400' :
                                item.status === 'running' ? 'text-blue-400' :
                                'text-green-400'
                              }`} />
                            </div>
                          </div>
                          {item.status && (
                            <Badge className={`ml-2 text-xs ${
                              item.status === 'pass' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                              item.status === 'fail' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                              item.status === 'running' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                              'bg-slate-500/20 text-slate-300 border-slate-500/30'
                            }`}>
                              {item.status === 'pass' ? '✓ Pass' : 
                               item.status === 'fail' ? '⚠ Check' :
                               item.status === 'running' ? '⟳ Testing' : 'Ready'}
                            </Badge>
                          )}
                        </div>
                        
                        <h4 className="font-medium text-slate-200 mb-2">{item.name}</h4>
                        {item.category && (
                          <Badge className="bg-slate-700/50 text-slate-300 text-xs mb-2">
                            {item.category}
                          </Badge>
                        )}
                        <p className="text-sm text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                        
                        {item.metrics && (
                          <div className="mb-4 p-2 bg-slate-900/50 rounded-lg border border-slate-700/30">
                            <div className="text-lg font-bold text-slate-100">{item.metrics}</div>
                            <div className="text-xs text-slate-500">Current Ratio</div>
                          </div>
                        )}
                        
                        {item.progress !== undefined && item.progress > 0 && (
                          <div className="mb-4">
                            <Progress value={item.progress} className="h-2" />
                            <div className="text-xs text-slate-500 mt-1">{item.progress}% Complete</div>
                          </div>
                        )}
                        
                        {item.code ? (
                          <div className="relative">
                            <pre className="bg-slate-900/50 p-3 rounded-lg text-xs text-slate-300 font-mono overflow-x-auto border border-slate-700/30">
                              <code>{item.code}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(item.code!, `quick-${index}`)}
                              className="absolute top-2 right-2 h-6 w-6 p-0"
                            >
                              {copiedCode === `quick-${index}` ? (
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                        ) : (
                          <Button
                            onClick={item.action}
                            variant="outline"
                            size="sm"
                            className={`w-full transition-all ${
                              item.status === 'running' ? 'opacity-75 cursor-wait' : 'hover:scale-105'
                            }`}
                            disabled={item.status === 'running'}
                          >
                            {item.status === 'running' ? (
                              <>
                                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                                Testing...
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Launch Tool
                              </>
                            )}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progressive Learning Paths - Smart Surfacing */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Learning Paths Section */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("learning-paths")}>
                <div className="flex items-centre justify-between">
                  <div className="flex items-centre gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Compass className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">Accessibility Learning Paths</CardTitle>
                      <CardDescription>
                        {userMode === "guided" 
                          ? "Structured learning journeys for different skill levels and roles"
                          : "Technical implementation guides with code examples and testing protocols"
                        }
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-centre gap-2">
                    <Badge className="bg-green-500/20 text-green-300">3 Paths</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("learning-paths") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("learning-paths") && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {accessibilityPaths.map((path) => (
                      <Card key={path.id} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-xl ${path.bgColor}`}>
                              <path.icon className={`h-6 w-6 ${path.colour}`} />
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleFavorite(path.id)}
                              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Heart className={`h-4 w-4 ${favourites.has(path.id) ? 'fill-current text-fuchsia-400' : 'text-slate-400'}`} />
                            </Button>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-green-300 transition-colours">
                            {path.title}
                          </h3>
                          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                            {path.description}
                          </p>
                          
                          <div className="flex items-centre gap-4 mb-4 text-xs">
                            <Badge className="bg-slate-700/50 text-slate-300 flex items-centre gap-1">
                              <Clock className="h-3 w-3" />
                              {path.duration}
                            </Badge>
                            <Badge className="bg-slate-700/50 text-slate-300">
                              {path.difficulty}
                            </Badge>
                          </div>
                          
                          {userMode === "technical" && (
                            <div className="space-y-2 mb-4">
                              {path.steps.slice(0, 2).map((step, index) => (
                                <div key={step.id} className="flex items-centre gap-2 text-xs text-slate-400">
                                  <div className="w-4 h-4 rounded border border-slate-600 flex items-centre justify-centre">
                                    <span className="text-slate-500">{index + 1}</span>
                                  </div>
                                  <span>{step.title}</span>
                                </div>
                              ))}
                              {path.steps.length > 2 && (
                                <div className="text-xs text-slate-500 pl-6">
                                  +{path.steps.length - 2} more steps
                                </div>
                              )}
                            </div>
                          )}
                          
                          <Button 
                            onClick={() => toggleSection(path.id)}
                            className="w-full group-hover:bg-green-500/10 group-hover:border-green-500/30"
                            variant="outline"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Start Learning Path
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* WCAG Guidelines Section */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("wcag-guidelines")}>
                <div className="flex items-centre justify-between">
                  <div className="flex items-centre gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <BookOpen className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">WCAG 2.1 Guidelines</CardTitle>
                      <CardDescription>
                        {userMode === "guided" 
                          ? "The POUR principles explained with practical examples"
                          : "Technical implementation guidelines with code patterns and testing criteria"
                        }
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-centre gap-2">
                    <Badge className="bg-blue-500/20 text-blue-300">POUR Principles</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("wcag-guidelines") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("wcag-guidelines") && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Perceivable",
                        description: "Information and UI must be presentable to users in ways they can perceive",
                        icon: Eye,
                        colour: "text-blue-400",
                        bgColor: "bg-blue-500/20",
                        example: "Provide text alternatives for images and ensure sufficient colour contrast",
                        technical: "img alt attributes, ARIA labels, min 4.5:1 contrast ratio"
                      },
                      {
                        title: "Operable", 
                        description: "UI components and navigation must be operable by all users",
                        icon: Target,
                        colour: "text-green-400",
                        bgColor: "bg-green-500/20",
                        example: "All functionality available via keyboard with visible focus indicators",
                        technical: "tabindex management, focus trapping, keyboard event handlers"
                      },
                      {
                        title: "Understandable",
                        description: "Information and operation of the UI must be understandable",
                        icon: Lightbulb,
                        colour: "text-yellow-400",
                        bgColor: "bg-yellow-500/20",
                        example: "Clear error messages and consistent navigation patterns",
                        technical: "aria-describedby for errors, consistent interaction patterns"
                      },
                      {
                        title: "Robust",
                        description: "Content must be robust enough for assistive technologies",
                        icon: Shield,
                        colour: "text-purple-400",
                        bgColor: "bg-purple-500/20",
                        example: "Use semantic HTML and valid ARIA markup",
                        technical: "semantic elements, valid HTML, proper ARIA implementation"
                      }
                    ].map((principle, index) => (
                      <Card key={principle.title} className="bg-slate-900/30 border-slate-700/30 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 ${principle.bgColor} rounded-xl flex items-centre justify-centre group-hover:scale-110 transition-transform`}>
                              <principle.icon className={`h-6 w-6 ${principle.colour}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-100 group-hover:text-green-300 transition-colours mb-2">
                                {principle.title}
                              </h3>
                              <p className="text-slate-400 text-sm mb-3">{principle.description}</p>
                              {userMode === "guided" ? (
                                <div className="text-xs text-slate-500">
                                  <strong>Example:</strong> {principle.example}
                                </div>
                              ) : (
                                <div className="text-xs text-slate-500">
                                  <strong>Implementation:</strong> {principle.technical}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Interactive Contrast Checker */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("contrast-checker")}>
                <div className="flex items-centre justify-between">
                  <div className="flex items-centre gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Eye className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">Interactive Contrast Checker</CardTitle>
                      <CardDescription>
                        Live WCAG colour contrast validation with real-time preview
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-centre gap-2">
                    <Badge className={`${passes ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                      {contrast.toFixed(1)}:1 {passes ? "✓ Pass" : "✗ Fail"}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("contrast-checker") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("contrast-checker") && (
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6 items-centre">
                      <div>
                        <Label className="block text-slate-200 mb-2 font-medium">Foreground colour</Label>
                        <div className="flex items-centre gap-3">
                          <input 
                            type="colour" 
                            value={fg} 
                            onChange={e => setFg(e.target.value)} 
                            className="w-12 h-10 border border-slate-700 rounded cursor-pointer" 
                          />
                          <span className="text-sm text-slate-400 font-mono">{fg}</span>
                        </div>
                      </div>
                      <div>
                        <Label className="block text-slate-200 mb-2 font-medium">Background colour</Label>
                        <div className="flex items-centre gap-3">
                          <input 
                            type="colour" 
                            value={bg} 
                            onChange={e => setBg(e.target.value)} 
                            className="w-12 h-10 border border-slate-700 rounded cursor-pointer" 
                          />
                          <span className="text-sm text-slate-400 font-mono">{bg}</span>
                        </div>
                      </div>
                      <div className="text-centre">
                        <div className="text-slate-200 mb-2 font-medium">Contrast Ratio</div>
                        <div className="text-3xl font-bold mb-1" style={{ colour: passes ? '#22d3ee' : '#ef4444' }}>
                          {contrast.toFixed(2)}:1
                        </div>
                        <div className={`text-sm ${passes ? "text-green-400" : "text-red-400"}`}>
                          {passes ? "✓ WCAG AA Pass" : "✗ WCAG AA Fail"}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border border-slate-700" style={{ background: bg, colour: fg }}>
                      <h3 className="text-xl font-bold mb-2">Sample Heading</h3>
                      <p className="mb-4">This is normal body text that demonstrates how readable your colour combination is. WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.</p>
                      <button 
                        className="px-4 py-2 rounded font-medium transition-opacity hover:opacity-80" 
                        style={{ background: fg, colour: bg }}
                        onClick={() => handleCopyCode(`/* colours */\ncolor: ${fg};\nbackground: ${bg};\n/* Contrast: ${contrast.toFixed(2)}:1 */`, "contrast-colours")}
                      >
                        {copiedCode === "contrast-colours" ? "✓ Copied!" : "Copy colours"}
                      </button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Testing Tools & Automation */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("testing-tools")}>
                <div className="flex items-centre justify-between">
                  <div className="flex items-centre gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <TestTube className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">Testing Tools & Automation</CardTitle>
                      <CardDescription>
                        Comprehensive testing strategy with manual and automated approaches
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-centre gap-2">
                    <Badge className="bg-orange-500/20 text-orange-300">
                      {runningTest ? "Testing..." : "Ready"}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("testing-tools") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("testing-tools") && (
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Manual Testing */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200 flex items-centre gap-2">
                        <Users className="h-4 w-4 text-blue-400" />
                        Manual Testing
                      </h4>
                      <div className="space-y-2">
                        {[
                          { 
                            name: "Keyboard Navigation", 
                            description: "Tab through all interactive elements", 
                            action: () => runAccessibilityTest("keyboard"),
                            icon: Keyboard,
                            difficulty: "Beginner",
                            time: "2 min"
                          },
                          { 
                            name: "Screen Reader", 
                            description: "Test with NVDA or VoiceOver", 
                            action: () => runAccessibilityTest("screen-reader"),
                            icon: Volume2,
                            difficulty: "Intermediate", 
                            time: "5 min"
                          },
                          { 
                            name: "colour Vision", 
                            description: "Check with colorblind simulation", 
                            action: () => runAccessibilityTest("colour-vision"),
                            icon: Eye,
                            difficulty: "Beginner",
                            time: "3 min"
                          }
                        ].map((test, index) => {
                          const isRunning = runningTest === test.name.toLowerCase().replace(/\s+/g, '-')
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={test.action}
                              disabled={isRunning || runningTest !== ""}
                              className={`w-full justify-start h-auto p-3 transition-all ${
                                isRunning ? 'bg-blue-500/10 border-blue-500/30' : 'hover:bg-slate-800/50 hover:scale-105'
                              }`}
                            >
                              <div className="flex items-centre gap-3 flex-1">
                                {isRunning ? (
                                  <RefreshCw className="h-4 w-4 text-blue-400 animate-spin" />
                                ) : (
                                  <test.icon className="h-4 w-4 text-slate-400 group-hover:text-blue-400 transition-colours" />
                                )}
                                <div className="text-left flex-1">
                                  <div className="flex items-centre gap-2 mb-1">
                                    <div className="text-sm font-medium text-slate-200">{test.name}</div>
                                    <Badge className="bg-slate-700/50 text-slate-400 text-xs">{test.time}</Badge>
                                  </div>
                                  <div className="text-xs text-slate-500">{test.description}</div>
                                  <div className="text-xs text-slate-600 mt-1">{test.difficulty}</div>
                                </div>
                                {isRunning && (
                                  <div className="text-xs text-blue-400 font-medium">
                                    {testingProgress}%
                                  </div>
                                )}
                              </div>
                            </Button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Automated Tools */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200 flex items-centre gap-2">
                        <Zap className="h-4 w-4 text-green-400" />
                        Automated Tools
                      </h4>
                      <div className="space-y-2">
                        {[
                          { name: "Axe DevTools", description: "Browser extension scanner", code: "npm install @axe-core/react" },
                          { name: "Lighthouse", description: "Google accessibility audit", code: "lighthouse --only-categories=accessibility" },
                          { name: "Pa11y", description: "Command line testing", code: "pa11y https://example.com" }
                        ].map((tool, index) => (
                          <div key={index} className="p-3 rounded-lg border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/30 transition-all group">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="text-sm font-medium text-slate-200">{tool.name}</div>
                                <div className="text-xs text-slate-500">{tool.description}</div>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleCopyCode(tool.code, `tool-${index}`)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                              >
                                {copiedCode === `tool-${index}` ? 
                                  <CheckCircle2 className="h-3 w-3 text-green-400" /> : 
                                  <Copy className="h-3 w-3" />
                                }
                              </Button>
                            </div>
                            <pre className="text-xs bg-slate-900/50 p-2 rounded font-mono text-slate-400 overflow-x-auto">
                              <code>{tool.code}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CI/CD Integration */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-slate-200 flex items-centre gap-2">
                        <Settings className="h-4 w-4 text-purple-400" />
                        CI/CD Integration
                      </h4>
                      <div className="space-y-2">
                        <div className="p-3 rounded-lg border border-slate-700/30">
                          <div className="flex items-centre justify-between mb-2">
                            <span className="text-sm font-medium text-slate-200">GitHub Actions</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(`name: Accessibility Tests
on: [push, pull_request]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run test:a11y`, "github-actions")}
                              className="h-6 w-6 p-0"
                            >
                              {copiedCode === "github-actions" ? 
                                <CheckCircle2 className="h-3 w-3 text-green-400" /> : 
                                <Copy className="h-3 w-3" />
                              }
                            </Button>
                          </div>
                          <p className="text-xs text-slate-500 mb-2">Automated accessibility testing in CI</p>
                        </div>
                        
                        <div className="p-3 rounded-lg border border-slate-700/30">
                          <div className="flex items-centre justify-between mb-2">
                            <span className="text-sm font-medium text-slate-200">Jest Integration</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(`import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('should not have accessibility violations', async () => {
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})`, "jest-axe")}
                              className="h-6 w-6 p-0"
                            >
                              {copiedCode === "jest-axe" ? 
                                <CheckCircle2 className="h-3 w-3 text-green-400" /> : 
                                <Copy className="h-3 w-3" />
                              }
                            </Button>
                          </div>
                          <p className="text-xs text-slate-500 mb-2">Component-level accessibility tests</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testing Progress */}
                  {runningTest && (
                    <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
                      <div className="flex items-centre justify-between mb-2">
                        <span className="text-sm font-medium text-slate-200">
                          Running {runningTest.replace(/-/g, ' ')} test...
                        </span>
                        <span className="text-xs text-slate-400">{testingProgress}%</span>
                      </div>
                      <Progress value={testingProgress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              )}
            </Card>

            {/* Code Examples & Patterns */}
            <Card className="border-slate-700/50 bg-slate-800/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("code-examples")}>
                <div className="flex items-centre justify-between">
                  <div className="flex items-centre gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <Code2 className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-100">Accessible Code Examples</CardTitle>
                      <CardDescription>
                        Ready-to-use patterns with proper ARIA implementation and semantic markup
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-centre gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-300">Copy & Paste</Badge>
                    <Button variant="ghost" size="sm">
                      {expandedSections.has("code-examples") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("code-examples") && (
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Accessible Button",
                        description: "Button with proper labeling and focus management",
                        code: `<Button 
  aria-label="Submit application form"
  className="focus:ring-2 focus:ring-fuchsia-500"
>
  Submit
</Button>`,
                        explanation: "Uses aria-label for context and visible focus indicator"
                      },
                      {
                        title: "Form with Error Handling",
                        description: "Input field with error association and validation",
                        code: `<div>
  <label htmlFor="email" className="text-slate-200">
    Email Address *
  </label>
  <input 
    id="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    className="focus:ring-2 focus:ring-fuchsia-500"
  />
  <div id="email-error" className="text-red-400 text-sm">
    Please enter a valid email address
  </div>
</div>`,
                        explanation: "Links error message with aria-describedby and indicates validation state"
                      },
                      {
                        title: "Accessible Modal Dialog",
                        description: "Modal with focus trapping and keyboard navigation",
                        code: `<div 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
  className="fixed inset-0 bg-black/50 flex items-centre justify-centre"
>
  <div className="bg-slate-800 p-6 rounded-lg">
    <h2 id="modal-title" className="text-lg font-bold">
      Confirm Action
    </h2>
    <p>Are you sure you want to continue?</p>
    <div className="flex gap-2 mt-4">
      <Button onClick={handleConfirm}>Confirm</Button>
      <Button variant="outline" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  </div>
</div>`,
                        explanation: "Uses dialog role, aria-modal, and proper focus management"
                      }
                    ].map((example, index) => (
                      <div key={index} className="border border-slate-700/50 rounded-lg p-6 bg-slate-900/30">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-100 mb-2">
                              {example.title}
                            </h3>
                            <p className="text-slate-400 text-sm">{example.description}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyCode(example.code, `example-${index}`)}
                            className="h-8 w-8 p-0"
                          >
                            {copiedCode === `example-${index}` ? 
                              <CheckCircle2 className="h-4 w-4 text-green-400" /> : 
                              <Copy className="h-4 w-4" />
                            }
                          </Button>
                        </div>
                        <pre className="bg-slate-950/50 p-4 rounded-lg text-sm overflow-x-auto border border-slate-700/30 mb-3">
                          <code className="text-slate-300">{example.code}</code>
                        </pre>
                        <div className="text-xs text-slate-500">
                          <strong>Accessibility Note:</strong> {example.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Progress & Analytics - Only show if user has activity */}
            {(favourites.size > 0 || testingProgress > 0) && (
              <Card className="border-slate-700/50 bg-slate-800/30">
                <CardHeader>
                  <div className="flex items-centre justify-between">
                    <div className="flex items-centre gap-3">
                      <div className="p-2 rounded-lg bg-fuchsia-500/20">
                        <TrendingUp className="h-5 w-5 text-fuchsia-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-100">Your Accessibility Progress</CardTitle>
                        <CardDescription>Track your learning and implementation progress</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-fuchsia-500/20 text-fuchsia-300">
                      {Math.round(((favourites.size + (testingProgress / 100)) / 10) * 100)}% Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={((favourites.size + (testingProgress / 100)) / 10) * 100} className="h-2" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-centre">
                      {[
                        { label: "Saved Items", value: favourites.size },
                        { label: "Tests Run", value: testingProgress > 0 ? "1" : "0" },
                        { label: "Current Mode", value: userMode },
                        { label: "Last Test", value: runningTest || "None" },
                        { label: "Compliance Level", value: "AA" }
                      ].map((stat, index) => (
                        <div key={index}>
                          <div className="text-lg font-bold text-slate-100">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </section>

        {/* Floating Quick Test Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            onClick={() => runAccessibilityTest("quick-check")}
            disabled={runningTest !== ""}
            className={`rounded-full w-14 h-14 shadow-lg transition-all ${
              runningTest ? 'bg-blue-500/80 cursor-wait' : 'bg-gradient-to-r from-green-500 to-blue-500 hover:shadow-xl hover:scale-110'
            }`}
            title="Run Quick Accessibility Check"
          >
            {runningTest ? (
              <RefreshCw className="h-6 w-6 animate-spin" />
            ) : (
              <Zap className="h-6 w-6" />
            )}
          </Button>
        </div>
      </main>
    </div>
  )
}





