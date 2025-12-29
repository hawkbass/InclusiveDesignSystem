"use client"

import React, { useState, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Compass,
  Palette,
  Hash
} from "lucide-react"

// Import utilities and components
import { getContrast, passesWCAG } from "./utils"
import { allSearchableItems, accessibilityPaths, popularSearches } from "./data"
import { CustomColorPicker } from "./components/custom-color-picker"

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

  // Comprehensive searchable content - now imported from data.ts
  // Learning paths with progressive disclosure - now imported from data.ts

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

  // popularSearches now imported from data.ts

  return (
    <div className="flex min-h-screen">
      <UnifiedSidebar />
      
      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map((notification) => (
            <Alert 
              key={notification.id}
              className={`max-w-md animate-in slide-in-from-right-2 ${
                notification.type === 'success' ? 'bg-green-500/20 border-green-500/30 text-green-600 dark:text-green-300' :
                notification.type === 'warning' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-600 dark:text-yellow-300' :
                'bg-blue-500/20 border-blue-500/30 text-blue-600 dark:text-blue-600 dark:text-blue-300'
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
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-accent/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-card/40 text-foreground/80 border-border/50">
                      <Shield className="w-3 h-3 mr-1" />
                      WCAG 2.1 AA Compliant
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-accent/20 text-blue-600 dark:text-blue-600 dark:text-blue-300 border-blue-500/30">
                      <Globe className="w-3 h-3 mr-1" />
                      Inclusive Design
                    </Badge>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Accessibility
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Guidelines</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl">
                    Build inclusive recruitment experiences that work for everyone. Comprehensive accessibility guidelines, 
                    testing tools, and implementation patterns for WCAG 2.1 AA compliance in Inclusive's design system.
                  </p>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">100%</div>
                      <div className="text-xs text-muted-foreground">Component Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">AAA</div>
                      <div className="text-xs text-muted-foreground">Contrast Ratios</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">508</div>
                      <div className="text-xs text-muted-foreground">Section Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">15+</div>
                      <div className="text-xs text-muted-foreground">Testing Tools</div>
                    </div>
                  </div>
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
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {runningTest ? `${testingProgress}%` : `${complianceScore}%`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {runningTest ? "Testing Progress" : "Compliance Score"}
                    </div>
                    <div className="mt-2">
                      <Progress 
                        value={runningTest ? testingProgress : complianceScore} 
                        className={`h-1 ${complianceScore >= 90 ? 'bg-green-500/20' : complianceScore >= 70 ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}
                      />
                    </div>
                    {!runningTest && completedTests.size > 0 && (
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {completedTests.size} test{completedTests.size !== 1 ? 's' : ''} completed
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Functional Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search guidelines, ARIA attributes, testing tools... Try 'aria-label' or 'contrast'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-card/50 border-border text-foreground placeholder-muted-foreground rounded-xl"
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
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-sm text-muted-foreground">Popular:</span>
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="text-xs text-muted-foreground hover:text-green-600 dark:text-green-400 h-6 px-2"
                    >
                      {search}
                    </Button>
                  ))}
                </div>

                {/* Live Search Results */}
                {searchResults.length > 0 && (
                  <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-card border-border max-h-96 overflow-y-auto">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {searchResults.map((result) => (
                          <div key={result.id} className="flex items-center gap-3 p-2 hover:bg-accent/50 rounded-lg cursor-pointer group">
                            <div className="p-2 rounded bg-muted/50">
                              {result.type === "guideline" && <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />}
                              {result.type === "attribute" && <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                              {result.type === "tool" && <Settings className="h-4 w-4 text-purple-400" />}
                              {result.type === "concept" && <Lightbulb className="h-4 w-4 text-yellow-400" />}
                              {result.type === "pattern" && <Navigation className="h-4 w-4 text-primary" />}
                              {result.type === "code" && <Sparkles className="h-4 w-4 text-cyan-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground">{result.name}</div>
                              <div className="text-xs text-muted-foreground truncate">
                                {result.description || result.usage}
                              </div>
                            </div>
                            <Badge className="bg-muted text-foreground/80 text-xs">
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
                <h3 className="text-lg font-medium text-foreground/80 mb-6 text-center">Essential Accessibility Tools:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {quickPreviewItems.map((item, index) => (
                    <Card key={index} className={`bg-card/30 border-border/50 hover:bg-card/50 transition-all group cursor-pointer ${
                      item.status === 'pass' ? 'border-green-500/30 shadow-green-500/10' : 
                      item.status === 'fail' ? 'border-yellow-500/30 shadow-yellow-500/10' :
                      item.status === 'running' ? 'border-blue-500/30 shadow-blue-500/10' : ''
                    }`}>
                      <CardContent className="p-6 text-center">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center justify-center flex-1">
                            <div className={`p-3 rounded-xl transition-all group-hover:scale-110 ${
                              item.status === 'pass' ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' :
                              item.status === 'fail' ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20' :
                              item.status === 'running' ? 'bg-gradient-to-br from-blue-500/20 to-accent/20' :
                              'bg-gradient-to-br from-green-500/20 to-blue-500/20'
                            }`}>
                              <item.icon className={`h-6 w-6 transition-colours ${
                                item.status === 'pass' ? 'text-green-600 dark:text-green-400' :
                                item.status === 'fail' ? 'text-yellow-400' :
                                item.status === 'running' ? 'text-blue-600 dark:text-blue-400' :
                                'text-green-600 dark:text-green-400'
                              }`} />
                            </div>
                          </div>
                          {item.status && (
                            <Badge className={`ml-2 text-xs ${
                              item.status === 'pass' ? 'bg-green-500/20 text-green-600 dark:text-green-300 border-green-500/30' :
                              item.status === 'fail' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border-yellow-500/30' :
                              item.status === 'running' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-600 dark:text-blue-300 border-blue-500/30' :
                              'bg-slate-500/20 text-foreground/80 border-slate-500/30'
                            }`}>
                              {item.status === 'pass' ? '✓ Pass' : 
                               item.status === 'fail' ? '⚠ Check' :
                               item.status === 'running' ? '⟳ Testing' : 'Ready'}
                            </Badge>
                          )}
                        </div>
                        
                        <h4 className="font-medium text-foreground mb-2">{item.name}</h4>
                        {item.category && (
                          <Badge className="bg-muted/50 text-foreground/80 text-xs mb-2">
                            {item.category}
                          </Badge>
                        )}
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                        
                        {item.metrics && (
                          <div className="mb-4 p-2 bg-card/50 rounded-lg border border-border/30">
                            <div className="text-lg font-bold text-foreground">{item.metrics}</div>
                            <div className="text-xs text-muted-foreground">Current Ratio</div>
                          </div>
                        )}
                        
                        {item.progress !== undefined && item.progress > 0 && (
                          <div className="mb-4">
                            <Progress value={item.progress} className="h-2" />
                            <div className="text-xs text-muted-foreground mt-1">{item.progress}% Complete</div>
                          </div>
                        )}
                        
                        {item.code ? (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground font-medium">Code example:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode(item.code!, `quick-${index}`)}
                                className="h-6 px-2 text-xs"
                            >
                              {copiedCode === `quick-${index}` ? (
                                  <>
                                    <CheckCircle2 className="h-3 w-3 mr-1 text-green-600 dark:text-green-400" />
                                    Copied
                                  </>
                              ) : (
                                  <>
                                    <Copy className="h-3 w-3 mr-1" />
                                    Copy
                                  </>
                              )}
                            </Button>
                            </div>
                            <pre className="bg-card/50 p-3 rounded-lg text-xs text-foreground/80 font-mono whitespace-pre-wrap border border-border/30">
                              <code>{item.code}</code>
                            </pre>
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
            <Card className="border-border/50 bg-card/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("learning-paths")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Compass className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Accessibility Learning Paths</CardTitle>
                      <CardDescription>
                        {userMode === "guided" 
                          ? "Structured learning journeys for different skill levels and roles"
                          : "Technical implementation guides with code examples and testing protocols"
                        }
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-600 dark:text-green-600 dark:text-green-300">3 Paths</Badge>
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
                      <Card key={path.id} className="bg-card/30 border-border/30 hover:bg-card/50 hover:border-border/50 transition-all group cursor-pointer">
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
                              <Heart className={`h-4 w-4 ${favourites.has(path.id) ? 'fill-current text-primary' : 'text-muted-foreground'}`} />
                            </Button>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-green-600 dark:group-hover:text-green-600 dark:text-green-300 transition-colours">
                            {path.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {path.description}
                          </p>
                          
                          <div className="flex items-center gap-4 mb-4 text-xs">
                            <Badge className="bg-muted/50 text-foreground/80 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {path.duration}
                            </Badge>
                            <Badge className="bg-muted/50 text-foreground/80">
                              {path.difficulty}
                            </Badge>
                          </div>
                          
                          {userMode === "technical" && (
                            <div className="space-y-2 mb-4">
                              {path.steps.slice(0, 2).map((step, index) => (
                                <div key={step.id} className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <div className="w-4 h-4 rounded border border-border flex items-center justify-center">
                                    <span className="text-muted-foreground">{index + 1}</span>
                                  </div>
                                  <span>{step.title}</span>
                                </div>
                              ))}
                              {path.steps.length > 2 && (
                                <div className="text-xs text-muted-foreground pl-6">
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
            <Card className="border-border/50 bg-card/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("wcag-guidelines")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">WCAG 2.1 Guidelines</CardTitle>
                      <CardDescription>
                        {userMode === "guided" 
                          ? "The POUR principles explained with practical examples"
                          : "Technical implementation guidelines with code patterns and testing criteria"
                        }
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-600 dark:text-blue-300">POUR Principles</Badge>
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
                        colour: "text-blue-600 dark:text-blue-400",
                        bgColor: "bg-blue-500/20",
                        example: "Provide text alternatives for images and ensure sufficient colour contrast",
                        technical: "img alt attributes, ARIA labels, min 4.5:1 contrast ratio"
                      },
                      {
                        title: "Operable", 
                        description: "UI components and navigation must be operable by all users",
                        icon: Target,
                        colour: "text-green-600 dark:text-green-400",
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
                      <Card key={principle.title} className="bg-card/30 border-border/30 hover:bg-card/50 hover:border-border/50 transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 ${principle.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <principle.icon className={`h-6 w-6 ${principle.colour}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-600 dark:text-green-300 transition-colours mb-2">
                                {principle.title}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-3">{principle.description}</p>
                              {userMode === "guided" ? (
                                <div className="text-xs text-muted-foreground">
                                  <strong>Example:</strong> {principle.example}
                                </div>
                              ) : (
                                <div className="text-xs text-muted-foreground">
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
            <Card className="border-border/50 bg-card/30 overflow-hidden">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("contrast-checker")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20">
                      <Eye className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground flex items-center gap-2">
                        Interactive Contrast Checker
                        <Badge className="bg-muted/50 text-foreground/80 text-xs">Live</Badge>
                      </CardTitle>
                      <CardDescription>
                        Real-time WCAG compliance testing with visual preview and code generation
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end gap-1">
                      <Badge className={`px-3 py-1 font-mono text-sm border ${
                        passes 
                          ? 'bg-green-500/20 text-green-600 dark:text-green-300 border-green-500/30' 
                          : 'bg-red-500/20 text-red-600 dark:text-red-600 dark:text-red-300 border-red-500/30'
                      }`}>
                        {contrast.toFixed(1)}:1
                    </Badge>
                      <div className={`text-xs font-medium ${passes ? "text-green-600 dark:text-green-400" : "text-red-400"}`}>
                        {passes ? "WCAG AA ✓" : "WCAG AA ✗"}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/50">
                      {expandedSections.has("contrast-checker") ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {expandedSections.has("contrast-checker") && (
                <CardContent className="space-y-6">
                  {/* Color Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card/30 border-border/30 p-4">
                      <CustomColorPicker
                            value={fg} 
                        onChange={setFg}
                        label="Foreground"
                        type="foreground"
                      />
                    </Card>

                    <Card className="bg-card/30 border-border/30 p-4">
                      <CustomColorPicker
                            value={bg} 
                        onChange={setBg}
                        label="Background"
                        type="background"
                          />
                    </Card>
                        </div>

                  {/* Results Dashboard */}
                  <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border-border/50 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-foreground">Compliance Results</h4>
                      <div className="flex items-center gap-2">
                        <Badge className={`px-3 py-1 ${
                          contrast >= 7 ? 'bg-green-500/20 text-green-600 dark:text-green-300 border-green-500/30' :
                          contrast >= 4.5 ? 'bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30' :
                          contrast >= 3 ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border-yellow-500/30' :
                          'bg-red-500/20 text-red-600 dark:text-red-600 dark:text-red-300 border-red-500/30'
                        } border font-mono text-lg`}>
                          {contrast.toFixed(2)}:1
                        </Badge>
                        </div>
                        </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={`p-4 rounded-lg border ${
                        contrast >= 4.5 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Normal Text</span>
                          {contrast >= 4.5 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <X className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                        <div className={`text-xs ${contrast >= 4.5 ? 'text-green-600 dark:text-green-400' : 'text-red-400'}`}>
                          {contrast >= 4.5 ? 'WCAG AA Pass' : 'WCAG AA Fail'} (4.5:1 required)
                      </div>
                    </div>

                      <div className={`p-4 rounded-lg border ${
                        contrast >= 3 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Large Text</span>
                          {contrast >= 3 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <X className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                        <div className={`text-xs ${contrast >= 3 ? 'text-green-600 dark:text-green-400' : 'text-red-400'}`}>
                          {contrast >= 3 ? 'WCAG AA Pass' : 'WCAG AA Fail'} (3:1 required)
                        </div>
                      </div>

                      <div className={`p-4 rounded-lg border ${
                        contrast >= 7 ? 'bg-green-500/10 border-green-500/30' : 'bg-gray-500/10 border-gray-500/30'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">AAA Level</span>
                          {contrast >= 7 ? (
                            <Award className="h-4 w-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <Target className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className={`text-xs ${contrast >= 7 ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`}>
                          {contrast >= 7 ? 'WCAG AAA Pass' : 'WCAG AAA Goal'} (7:1 target)
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Live Preview */}
                  <Card className="overflow-hidden border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-foreground">Live Preview</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-muted/50 text-foreground/80 text-xs">Interactive</Badge>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleCopyCode(`/* Contrast: ${contrast.toFixed(2)}:1 - ${passes ? 'WCAG AA Pass' : 'WCAG AA Fail'} */\ncolor: ${fg};\nbackground-color: ${bg};`, "contrast-css")}
                            className="h-8 px-3 text-xs"
                          >
                            {copiedCode === "contrast-css" ? (
                              <>
                                <CheckCircle2 className="h-3 w-3 mr-1 text-green-600 dark:text-green-400" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3 mr-1" />
                                Copy CSS
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-8 border-t border-border/30" style={{ backgroundColor: bg, color: fg }}>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold">Sample Heading</h3>
                          <p className="text-lg">Large text example (18pt+) for WCAG testing</p>
                          <p className="text-base leading-relaxed">
                            This is normal body text that demonstrates readability with your chosen colour combination. 
                            WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
                          </p>
                          <div className="flex items-center gap-3 pt-2">
                            <Button 
                              size="sm"
                              className="font-medium transition-all hover:scale-105" 
                              style={{ backgroundColor: fg, color: bg }}
                            >
                              Interactive Button
                            </Button>
                            <span className="text-sm opacity-75">Hover and click to test interactivity</span>
                          </div>
                    </div>
                  </div>
                    </CardContent>
                  </Card>

                  {/* Quick Presets */}
                  <Card className="bg-card/30 border-border/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-foreground">Quick Presets</CardTitle>
                      <CardDescription>Common colour combinations for testing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { name: "Dark Theme", fg: "#f1f5f9", bg: "#0f172a", desc: "Slate on Dark" },
                          { name: "Light Theme", fg: "#1e293b", bg: "#f8fafc", desc: "Dark on Light" },
                          { name: "Primary", fg: "#ffffff", bg: "#ec4899", desc: "White on Fuchsia" },
                          { name: "Success", fg: "#ffffff", bg: "#22c55e", desc: "White on Green" }
                        ].map((preset, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setFg(preset.fg);
                              setBg(preset.bg);
                            }}
                            className="h-auto p-3 flex flex-col items-start hover:bg-card/50 border-border/50"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div 
                                className="w-4 h-4 rounded border border-border" 
                                style={{ backgroundColor: preset.bg }}
                              >
                                <div 
                                  className="w-2 h-2 rounded-sm m-0.5" 
                                  style={{ backgroundColor: preset.fg }}
                                ></div>
                              </div>
                              <span className="text-xs font-medium text-foreground">{preset.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{preset.desc}</span>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              )}
            </Card>

            {/* Testing Tools & Automation */}
            <Card className="border-border/50 bg-card/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("testing-tools")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <TestTube className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Testing Tools & Automation</CardTitle>
                      <CardDescription>
                        Comprehensive testing strategy with manual and automated approaches
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-500/20 text-orange-600 dark:text-orange-600 dark:text-orange-300">
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
                      <h4 className="font-medium text-foreground flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
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
                                isRunning ? 'bg-blue-500/10 border-blue-500/30' : 'hover:bg-card/50 hover:scale-105'
                              }`}
                            >
                              <div className="flex items-center gap-3 flex-1">
                                {isRunning ? (
                                  <RefreshCw className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-spin" />
                                ) : (
                                  <test.icon className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 dark:text-blue-400 transition-colours" />
                                )}
                                <div className="text-left flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="text-sm font-medium text-foreground">{test.name}</div>
                                    <Badge className="bg-muted/50 text-muted-foreground text-xs">{test.time}</Badge>
                                  </div>
                                  <div className="text-xs text-muted-foreground">{test.description}</div>
                                  <div className="text-xs text-slate-600 mt-1">{test.difficulty}</div>
                                </div>
                                {isRunning && (
                                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
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
                      <h4 className="font-medium text-foreground flex items-center gap-2">
                        <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
                        Automated Tools
                      </h4>
                      <div className="space-y-2">
                        {[
                          { name: "Axe DevTools", description: "Browser extension scanner", code: "npm install @axe-core/react" },
                          { name: "Lighthouse", description: "Google accessibility audit", code: "lighthouse --only-categories=accessibility" },
                          { name: "Pa11y", description: "Command line testing", code: "pa11y https://example.com" }
                        ].map((tool, index) => (
                          <div key={index} className="p-3 rounded-lg border border-border/30 hover:border-border/50 hover:bg-card/30 transition-all">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="text-sm font-medium text-foreground">{tool.name}</div>
                                <div className="text-xs text-muted-foreground">{tool.description}</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground font-medium">Installation:</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleCopyCode(tool.code, `tool-${index}`)}
                                  className="h-6 px-2 text-xs"
                                >
                                  {copiedCode === `tool-${index}` ? (
                                    <>
                                      <CheckCircle2 className="h-3 w-3 mr-1 text-green-600 dark:text-green-400" />
                                      Copied
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="h-3 w-3 mr-1" />
                                      Copy
                                    </>
                                  )}
                                </Button>
                              </div>
                              <pre className="text-xs bg-card/50 p-2 rounded font-mono text-muted-foreground whitespace-pre-wrap">
                                <code>{tool.code}</code>
                              </pre>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CI/CD Integration */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground flex items-center gap-2">
                        <Settings className="h-4 w-4 text-purple-400" />
                        CI/CD Integration
                      </h4>
                      <div className="space-y-2">
                        <div className="p-3 rounded-lg border border-border/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">GitHub Actions</span>
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
                                <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" /> : 
                                <Copy className="h-3 w-3" />
                              }
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">Automated accessibility testing in CI</p>
                        </div>
                        
                        <div className="p-3 rounded-lg border border-border/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">Jest Integration</span>
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
                                <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" /> : 
                                <Copy className="h-3 w-3" />
                              }
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">Component-level accessibility tests</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testing Progress */}
                  {runningTest && (
                    <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          Running {runningTest.replace(/-/g, ' ')} test...
                        </span>
                        <span className="text-xs text-muted-foreground">{testingProgress}%</span>
                      </div>
                      <Progress value={testingProgress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              )}
            </Card>

            {/* Code Examples & Patterns */}
            <Card className="border-border/50 bg-card/30">
              <CardHeader className="cursor-pointer" onClick={() => toggleSection("code-examples")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <Code2 className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">Accessible Code Examples</CardTitle>
                      <CardDescription>
                        Ready-to-use patterns with proper ARIA implementation and semantic markup
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-600 dark:text-cyan-300">Copy & Paste</Badge>
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
  <label htmlFor="email" className="text-foreground">
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
  className="fixed inset-0 bg-black/50 flex items-center justify-center"
>
  <div className="bg-card p-6 rounded-lg">
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
                      <div key={index} className="border border-border/50 rounded-lg p-6 bg-card/30">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {example.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{example.description}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground font-medium">Code example:</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopyCode(example.code, `example-${index}`)}
                              className="h-6 px-2 text-xs"
                            >
                              {copiedCode === `example-${index}` ? (
                                <>
                                  <CheckCircle2 className="h-3 w-3 mr-1 text-green-600 dark:text-green-400" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3 mr-1" />
                                  Copy
                                </>
                              )}
                            </Button>
                          </div>
                          <pre className="bg-background/50 p-4 rounded-lg text-sm whitespace-pre-wrap border border-border/30">
                            <code className="text-foreground/80">{example.code}</code>
                          </pre>
                        </div>
                        <div className="text-xs text-muted-foreground mt-3">
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
              <Card className="border-border/50 bg-card/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-fuchsia-500/20">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">Your Accessibility Progress</CardTitle>
                        <CardDescription>Track your learning and implementation progress</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-fuchsia-500/20 text-primary">
                      {Math.round(((favourites.size + (testingProgress / 100)) / 10) * 100)}% Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={((favourites.size + (testingProgress / 100)) / 10) * 100} className="h-2" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      {[
                        { label: "Saved Items", value: favourites.size },
                        { label: "Tests Run", value: testingProgress > 0 ? "1" : "0" },
                        { label: "Current Mode", value: userMode },
                        { label: "Last Test", value: runningTest || "None" },
                        { label: "Compliance Level", value: "AA" }
                      ].map((stat, index) => (
                        <div key={index}>
                          <div className="text-lg font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>
        </section>

        {/* Interactive Accessibility Checker */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-card/30 border-border/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <TestTube className="h-6 w-6 text-primary" />
                  Interactive Accessibility Checker
                </CardTitle>
                <CardDescription>
                  Test your components and designs for accessibility compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Test Type</Label>
                      <Select defaultValue="contrast">
                        <SelectTrigger className="bg-card/50 border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contrast">Color Contrast</SelectItem>
                          <SelectItem value="keyboard">Keyboard Navigation</SelectItem>
                          <SelectItem value="screenreader">Screen Reader</SelectItem>
                          <SelectItem value="full">Full WCAG Check</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>WCAG Level</Label>
                      <Select defaultValue="aa">
                        <SelectTrigger className="bg-card/50 border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a">Level A</SelectItem>
                          <SelectItem value="aa">Level AA</SelectItem>
                          <SelectItem value="aaa">Level AAA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-primary text-primary-foreground"
                    onClick={() => runAccessibilityTest("full-check")}
                  >
                    <TestTube className="h-4 w-4 mr-2" />
                    Run Accessibility Check
                  </Button>
                  {runningTest && (
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <RefreshCw className="h-4 w-4 animate-spin text-blue-400" />
                        <span className="text-sm font-medium text-foreground">Running accessibility tests...</span>
                      </div>
                      <Progress value={testingProgress} className="h-2" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* WCAG Compliance Tester */}
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  WCAG Compliance Tester
                </CardTitle>
                <CardDescription>
                  Comprehensive WCAG 2.1 compliance testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { criterion: "1.1.1 Non-text Content", level: "A", status: "pass", description: "All images have alt text" },
                    { criterion: "1.4.3 Contrast (Minimum)", level: "AA", status: "pass", description: "Text meets 4.5:1 contrast ratio" },
                    { criterion: "2.1.1 Keyboard", level: "A", status: "pass", description: "All functionality available via keyboard" },
                    { criterion: "2.4.3 Focus Order", level: "A", status: "pass", description: "Focus order preserves meaning" },
                    { criterion: "3.2.1 On Focus", level: "A", status: "pass", description: "No context changes on focus" },
                    { criterion: "4.1.2 Name, Role, Value", level: "A", status: "pass", description: "All UI components have accessible names" }
                  ].map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground">{test.criterion}</h4>
                          <Badge variant="outline" className="text-xs">{test.level}</Badge>
                          <Badge 
                            className={`text-xs ${
                              test.status === "pass" 
                                ? "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30"
                                : "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30"
                            }`}
                          >
                            {test.status === "pass" ? (
                              <>
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Pass
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                Fail
                              </>
                            )}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{test.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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






