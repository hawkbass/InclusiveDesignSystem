"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Sparkles,
  Grid3X3,
  Search,
  Filter,
  Star,
  Award,
  Zap,
  Layout,
  Navigation,
  Users,
  Table,
  Layers,
  FileText,
  Component,
  Eye,
  Code2,
  BookOpen,
  Target,
  Heart,
  PlayCircle,
  Settings,
  Shield,
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

export default function Patterns() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const patternCategories = [
    {
      id: "navigation",
      name: "Navigation",
      description: "Wayfinding and menu systems",
      icon: Navigation,
      color: "from-blue-500 to-cyan-600",
      count: 8,
      patterns: ["Primary Nav", "Breadcrumbs", "Tabs", "Pagination"]
    },
    {
      id: "layout",
      name: "Layout",
      description: "Page and content structure patterns",
      icon: Layout,
      color: "from-green-500 to-emerald-600",
      count: 12,
      patterns: ["Grid Systems", "Card Layouts", "Sidebars", "Headers"]
    },
    {
      id: "forms",
      name: "Forms",
      description: "Input and data collection patterns",
      icon: FileText,
      color: "from-purple-500 to-fuchsia-600",
      count: 15,
      patterns: ["Login Forms", "Multi-step", "Validation", "Search"]
    },
    {
      id: "feedback",
      name: "Feedback",
      description: "User feedback and status patterns",
      icon: AlertTriangle,
      color: "from-orange-500 to-red-600",
      count: 10,
      patterns: ["Alerts", "Notifications", "Loading", "Empty States"]
    }
  ]

  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 mb-4">
                    Design System Patterns
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    UI Patterns
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Library</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Proven interface patterns and solutions for common design challenges. Build faster with tested, accessible patterns.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative mb-8">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search patterns... Try 'navigation', 'forms', or 'feedback'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-12 py-4 text-lg bg-card/50 border-border text-foreground placeholder-muted-foreground rounded-xl"
                    />
                    {searchQuery && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        ✕
                      </Button>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colours">
                    <Download className="h-4 w-4 mr-2" />
                    Export Patterns
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Figma Library
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* What are UI Patterns? */}
          <section className="px-6 lg:px-12 py-12 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">What are UI Patterns?</h2>
                  <div className="space-y-4 text-foreground/80">
                    <p className="text-lg">
                      UI patterns are <strong className="text-primary">reusable solutions</strong> to common interface design problems. They provide tested approaches that users already understand.
                    </p>
                    <p>
                      Each pattern includes <strong className="text-purple-600 dark:text-purple-600 dark:text-purple-300">usage guidance, accessibility considerations, and implementation examples</strong> to help you build better interfaces faster.
                    </p>
                  </div>
                </div>
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      <CardTitle className="text-foreground">Why Use Patterns?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Faster Development</strong>
                        <p className="text-sm text-muted-foreground">Reuse proven solutions instead of starting from scratch</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Better UX</strong>
                        <p className="text-sm text-muted-foreground">Leverage familiar patterns users already understand</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Accessibility Built-in</strong>
                        <p className="text-sm text-muted-foreground">Patterns include WCAG compliance by default</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="px-6 lg:px-12 py-8 border-b border-border/50">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-lg font-semibold text-foreground">Viewing:</h2>
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-auto min-w-[200px] h-10 bg-card/40 border border-border/30 hover:bg-card/60 transition-colors text-foreground/80">
                      {(() => {
                        const tabs = [
                          { value: "overview", label: "Overview", icon: Eye },
                          { value: "navigation", label: "Navigation", icon: Navigation },
                          { value: "layout", label: "Layout", icon: Layout },
                          { value: "forms", label: "Forms", icon: FileText },
                          { value: "feedback", label: "Feedback", icon: AlertTriangle }
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
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="overview" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span>Overview</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="navigation" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Navigation className="h-4 w-4 text-muted-foreground" />
                          <span>Navigation</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="layout" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Layout className="h-4 w-4 text-muted-foreground" />
                          <span>Layout</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="forms" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Forms</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="feedback" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                          <span>Feedback</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {patternCategories.map((category) => (
                      <Card key={category.id} className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab(category.id)}>
                        <CardHeader className="text-center">
                          <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${category.color}/20 rounded-xl w-fit`}>
                            <category.icon className={`h-8 w-8 text-${category.color.split('-')[1]}-400`} />
                          </div>
                          <CardTitle className="text-foreground">{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="text-xs">{category.count} patterns</Badge>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {category.patterns.slice(0, 3).map((pattern) => (
                              <Badge key={pattern} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                                {pattern}
                              </Badge>
                            ))}
                            {category.patterns.length > 3 && (
                              <Badge variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                                +{category.patterns.length - 3}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Popular Patterns */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Most Popular Patterns
                      </CardTitle>
                      <CardDescription>Commonly used patterns across successful interfaces</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { name: "Card Layout", category: "Layout", usage: "Content organisation", icon: Layers },
                          { name: "Navigation Bar", category: "Navigation", usage: "Site navigation", icon: Navigation },
                          { name: "Login Form", category: "Forms", usage: "User authentication", icon: Shield },
                          { name: "Loading States", category: "Feedback", usage: "Progress indication", icon: RefreshCw },
                          { name: "Search Bar", category: "Forms", usage: "Content discovery", icon: Search },
                          { name: "Breadcrumbs", category: "Navigation", usage: "Location awareness", icon: ArrowRight }
                        ].map((pattern) => (
                          <div key={pattern.name} className="p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                              <pattern.icon className="h-5 w-5 text-primary" />
                              <span className="font-medium text-foreground">{pattern.name}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">{pattern.usage}</div>
                            <Badge variant="outline" className="text-xs">{pattern.category}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Navigation Tab */}
                <TabsContent value="navigation" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Navigation Patterns</h3>
                    <p className="text-muted-foreground mb-8">
                      Essential navigation patterns for wayfinding and user orientation across your application.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground flex items-center gap-3">
                          <Navigation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          Primary Navigation
                        </CardTitle>
                        <CardDescription>Main site navigation typically placed in header</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <strong className="text-foreground">When to use:</strong>
                          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                            <li>• Site-wide navigation</li>
                            <li>• Main sections access</li>
                            <li>• Consistent across pages</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('<nav className="flex items-center space-x-6">\n  <Link href="/" className="text-slate-700 hover:text-slate-900">Home</Link>\n  <Link href="/about" className="text-slate-700 hover:text-slate-900">About</Link>\n  <Link href="/contact" className="text-slate-700 hover:text-slate-900">Contact</Link>\n</nav>', 'primary-nav')}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {copiedCode === 'primary-nav' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap">
{`<nav className="flex items-center space-x-6">
  <Link href="/" className="text-slate-700 hover:text-slate-900">Home</Link>
  <Link href="/about" className="text-slate-700 hover:text-slate-900">About</Link>
  <Link href="/contact" className="text-slate-700 hover:text-slate-900">Contact</Link>
</nav>`}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground flex items-center gap-3">
                          <ArrowRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                          Breadcrumb Navigation
                        </CardTitle>
                        <CardDescription>Hierarchical navigation showing user location</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <strong className="text-foreground">When to use:</strong>
                          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                            <li>• Deep site structures</li>
                            <li>• User orientation</li>
                            <li>• Quick navigation up levels</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('<nav aria-label="Breadcrumb">\n  <ol className="flex items-center space-x-2">\n    <li><Link href="/">Home</Link></li>\n    <li>></li>\n    <li><Link href="/products">Products</Link></li>\n    <li>></li>\n    <li>Current Page</li>\n  </ol>\n</nav>', 'breadcrumb')}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {copiedCode === 'breadcrumb' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap">
{`<nav aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li><Link href="/">Home</Link></li>
    <li>></li>
    <li><Link href="/products">Products</Link></li>
    <li>></li>
    <li>Current Page</li>
  </ol>
</nav>`}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Layout Tab */}
                <TabsContent value="layout" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Layout Patterns</h3>
                    <p className="text-muted-foreground mb-8">
                      Fundamental layout patterns for organising content and creating visual hierarchy.
                    </p>
                  </div>

                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <Grid3X3 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        Card Layout
                      </CardTitle>
                      <CardDescription>Flexible content containers with consistent styling</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                          <div className="w-full h-20 bg-fuchsia-500/20 rounded mb-3"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                            <div className="h-3 bg-card rounded w-full"></div>
                            <div className="h-3 bg-card rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                          <div className="w-full h-20 bg-purple-500/20 rounded mb-3"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                            <div className="h-3 bg-card rounded w-full"></div>
                            <div className="h-3 bg-card rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                          <div className="w-full h-20 bg-blue-500/20 rounded mb-3"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                            <div className="h-3 bg-card rounded w-full"></div>
                            <div className="h-3 bg-card rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Cards provide consistent content containers with flexible layouts for different content types.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Forms Tab */}
                <TabsContent value="forms" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Form Patterns</h3>
                    <p className="text-muted-foreground mb-8">
                      User-friendly form patterns for data collection and input validation.
                    </p>
                  </div>

                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <Shield className="h-5 w-5 text-purple-400" />
                        Login Form
                      </CardTitle>
                      <CardDescription>Standard authentication form with best practices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="max-w-md">
                        <div className="space-y-4 p-6 bg-card/50 rounded-lg border border-border/30">
                          <div>
                            <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                            <div className="w-full h-10 bg-card rounded border border-border"></div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground/80 mb-2">Password</label>
                            <div className="w-full h-10 bg-card rounded border border-border"></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-muted rounded border border-border"></div>
                              <span className="text-sm text-muted-foreground">Remember me</span>
                            </div>
                            <span className="text-sm text-primary cursor-pointer">Forgot password?</span>
                          </div>
                          <div className="w-full h-10 bg-fuchsia-500/20 border border-primary/30 rounded flex items-center justify-center">
                            <span className="text-primary font-medium">Sign In</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Feedback Tab */}
                <TabsContent value="feedback" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Feedback Patterns</h3>
                    <p className="text-muted-foreground mb-8">
                      Essential patterns for providing user feedback and system status communication.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                          Success States
                        </CardTitle>
                        <CardDescription>Positive feedback for completed actions</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <span className="text-green-600 dark:text-green-300 font-medium">Success!</span>
                          </div>
                          <p className="text-sm text-green-600 dark:text-green-400 mt-2">Your changes have been saved successfully.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground flex items-center gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-400" />
                          Warning States
                        </CardTitle>
                        <CardDescription>Cautionary feedback for user attention</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="h-5 w-5 text-orange-400" />
                            <span className="text-orange-600 dark:text-orange-300 font-medium">Warning</span>
                          </div>
                          <p className="text-sm text-orange-400 mt-2">This action cannot be undone. Please confirm.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Cross-references */}
          <section className="px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-3">
                    <Layers className="h-5 w-5 text-primary" />
                    Related Resources
                  </CardTitle>
                  <CardDescription>Explore related documentation and guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href="/components" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Component className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium text-foreground">Components</span>
                      </div>
                      <p className="text-sm text-muted-foreground">See patterns implemented as reusable components</p>
                    </Link>
                    
                    <Link href="/design-system/best-practices" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="font-medium text-foreground">Best Practices</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Implementation guidelines and tips</p>
                    </Link>
                    
                    <Link href="/design-system/accessibility" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="h-5 w-5 text-purple-400" />
                        <span className="font-medium text-foreground">Accessibility</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Ensure patterns meet WCAG standards</p>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
