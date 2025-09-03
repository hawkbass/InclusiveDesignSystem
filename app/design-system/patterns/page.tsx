"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
  TrendingUp
} from "lucide-react"
import Link from "next/link"

// Enhanced pattern data with Universal Comprehension structure
const patternCategories = [
  {
    name: "Navigation Patterns",
    description: "Common navigation structures and wayfinding solutions for recruitment applications",
    icon: Navigation,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    count: 8,
    patterns: [
      {
        id: "nav-primary",
        name: "Primary Navigation",
        description: "Top-level navigation for main site sections",
        complexity: "Simple",
        usage: "Site-wide navigation, main menu systems",
        examples: ["Header nav", "Sidebar menu", "Tab navigation"],
        category: "Navigation Patterns",
        tags: ["navigation", "header", "menu"],
        code: `<nav className="flex items-center space-x-6">
  <Link href="/" className="text-slate-700 hover:text-slate-900">Home</Link>
  <Link href="/candidates" className="text-slate-700 hover:text-slate-900">Candidates</Link>
  <Link href="/jobs" className="text-slate-700 hover:text-slate-900">Jobs</Link>
</nav>`
      },
      {
        id: "nav-breadcrumb",
        name: "Breadcrumb Navigation",
        description: "Hierarchical navigation showing user location",
        complexity: "Simple",
        usage: "Deep site structures, user orientation",
        examples: ["File explorer", "Candidate profiles", "Job details"],
        category: "Navigation Patterns",
        tags: ["navigation", "breadcrumb", "hierarchy"],
        code: `<nav aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li><Link href="/">Home</Link></li>
    <li>></li>
    <li><Link href="/candidates">Candidates</Link></li>
    <li>></li>
    <li>Profile</li>
  </ol>
</nav>`
      },
      {
        id: "nav-tabs",
        name: "Tab Navigation",
        description: "Content switching within the same page context",
        complexity: "Medium",
        usage: "Content organization, settings panels",
        examples: ["Candidate profile", "Job details", "Dashboard sections"],
        category: "Navigation Patterns",
        tags: ["navigation", "tabs", "content"],
        code: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="experience">Experience</TabsTrigger>
    <TabsTrigger value="skills">Skills</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Candidate overview</TabsContent>
</Tabs>`
      }
    ]
  },
  {
    name: "Form Patterns",
    description: "Data collection and input patterns for recruitment workflows",
    icon: FileText,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    count: 6,
    patterns: [
      {
        id: "form-candidate",
        name: "Candidate Application Form",
        description: "Comprehensive candidate information collection",
        complexity: "Complex",
        usage: "Application process, profile creation",
        examples: ["Job application", "Candidate registration", "Profile updates"],
        category: "Form Patterns",
        tags: ["form", "candidate", "application"],
        code: `<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input id="firstName" required />
    </div>
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input id="lastName" required />
    </div>
  </div>
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" required />
  </div>
  <div>
    <Label htmlFor="cv">CV Upload</Label>
    <Input id="cv" type="file" accept=".pdf,.doc,.docx" />
  </div>
  <Button type="submit">Submit Application</Button>
</form>`
      },
      {
        id: "form-job-posting",
        name: "Job Posting Form",
        description: "Create and edit job postings efficiently",
        complexity: "Medium",
        usage: "Job creation, posting management",
        examples: ["New job posting", "Job editing", "Requirements setup"],
        category: "Form Patterns",
        tags: ["form", "job", "posting"],
        code: `<form className="space-y-4">
  <div>
    <Label htmlFor="jobTitle">Job Title</Label>
    <Input id="jobTitle" placeholder="Senior React Developer" />
  </div>
  <div>
    <Label htmlFor="location">Location</Label>
    <Select>
      <SelectValue placeholder="Select location" />
      <SelectContent>
        <SelectItem value="remote">Remote</SelectItem>
        <SelectItem value="london">London, UK</SelectItem>
        <SelectItem value="manchester">Manchester, UK</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <div>
    <Label htmlFor="description">Job Description</Label>
    <Textarea id="description" rows={6} />
  </div>
  <Button type="submit">Publish Job</Button>
</form>`
      }
    ]
  },
  {
    name: "Layout Patterns",
    description: "Page structure and content organization for recruitment interfaces",
    icon: Layout,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    count: 5,
    patterns: [
      {
        id: "layout-dashboard",
        name: "Recruitment Dashboard",
        description: "Data-rich interface for recruitment metrics and actions",
        complexity: "Complex",
        usage: "Admin panels, analytics, candidate management",
        examples: ["Recruiter dashboard", "Analytics panel", "Candidate overview"],
        category: "Layout Patterns",
        tags: ["layout", "dashboard", "recruitment"],
        code: `<div className="grid grid-cols-12 gap-6">
  <aside className="col-span-2">
    <RecruitmentSidebar />
  </aside>
  <main className="col-span-7">
    <CandidateList />
    <JobPostings />
  </main>
  <aside className="col-span-3">
    <UpcomingInterviews />
    <RecentActivity />
  </aside>
</div>`
      },
      {
        id: "layout-candidate-grid",
        name: "Candidate Grid Layout",
        description: "Responsive grid of candidate cards",
        complexity: "Simple",
        usage: "Candidate browsing, search results",
        examples: ["Candidate search", "Talent pool", "Shortlist view"],
        category: "Layout Patterns",
        tags: ["layout", "grid", "candidates"],
        code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {candidates.map(candidate => (
    <CandidateCard 
      key={candidate.id}
      candidate={candidate}
      onSelect={handleSelect}
    />
  ))}
</div>`
      }
    ]
  },
  {
    name: "Data Display Patterns",
    description: "Patterns for presenting recruitment data and analytics",
    icon: Table,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    count: 7,
    patterns: [
      {
        id: "data-candidate-table",
        name: "Candidate Data Table",
        description: "Structured candidate data with sorting and filtering",
        complexity: "Medium",
        usage: "Candidate management, bulk operations",
        examples: ["Candidate lists", "Application tracking", "Interview scheduling"],
        category: "Data Display Patterns",
        tags: ["data", "table", "candidates"],
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Applied Date</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {candidates.map(candidate => (
      <TableRow key={candidate.id}>
        <TableCell>{candidate.name}</TableCell>
        <TableCell>{candidate.email}</TableCell>
        <TableCell><StatusBadge status={candidate.status} /></TableCell>
        <TableCell>{formatDate(candidate.appliedAt)}</TableCell>
        <TableCell>
          <Button size="sm">View</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`
      },
      {
        id: "data-recruitment-stats",
        name: "Recruitment Statistics Dashboard",
        description: "Key recruitment metrics and performance indicators",
        complexity: "Medium",
        usage: "Performance tracking, recruitment analytics",
        examples: ["Hiring metrics", "Pipeline analytics", "Team performance"],
        category: "Data Display Patterns",
        tags: ["data", "stats", "analytics"],
        code: `<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {stats.map(stat => (
    <Card key={stat.id}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-slate-600">{stat.label}</div>
          </div>
          <stat.icon className="h-8 w-8 text-fuchsia-500" />
        </div>
        <div className="text-sm text-green-600 mt-2">
          {stat.change}% from last month
        </div>
      </CardContent>
    </Card>
  ))}
</div>`
      }
    ]
  }
]

// Get all patterns flattened with enhanced metadata
const allPatterns = patternCategories.flatMap(category => 
  category.patterns.map(pattern => ({
    ...pattern,
    categoryIcon: category.icon,
    categoryColor: category.color
  }))
)

// Quick Actions for immediate value
const quickActions = [
  {
    title: "Copy All Patterns",
    description: "Export complete pattern library",
    icon: Copy,
    action: "copy-all",
    color: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  {
    title: "Download Templates",
    description: "Get ready-to-use component templates",
    icon: Download,
    action: "download-templates",
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    title: "View Best Practices",
    description: "Pattern implementation guidelines",
    icon: BookOpen,
    action: "view-practices",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    title: "Test Patterns",
    description: "Interactive pattern playground",
    icon: PlayCircle,
    action: "test-patterns",
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
  }
]

// Pattern statistics
const patternStats = [
  { 
    label: "Total Patterns", 
    value: allPatterns.length, 
    icon: Component, 
    color: "text-fuchsia-400",
    change: "+3 this month"
  },
  { 
    label: "Categories", 
    value: patternCategories.length, 
    icon: Grid3X3, 
    color: "text-blue-400",
    change: "Organized system"
  },
  { 
    label: "Simple Patterns", 
    value: allPatterns.filter(p => p.complexity === "Simple").length, 
    icon: Zap, 
    color: "text-green-400",
    change: "Quick to implement"
  },
  { 
    label: "Production Ready", 
    value: "100%", 
    icon: CheckCircle2, 
    color: "text-purple-400",
    change: "Battle tested"
  }
]

export default function PatternsPage() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [complexityFilter, setComplexityFilter] = useState("all")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [copiedCode, setCopiedCode] = useState("")
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["overview", "navigation", "forms", "layouts", "data"]))

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed])

  const handleCopyCode = async (code: string, id?: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id || 'copied')
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const handleToggleFavorite = (patternId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(patternId)) {
        newFavorites.delete(patternId)
      } else {
        newFavorites.add(patternId)
      }
      return newFavorites
    })
  }

  const handleQuickAction = async (action: string) => {
    switch (action) {
      case 'copy-all':
        const allCode = allPatterns.map(p => `// ${p.name}\n${p.code}`).join('\n\n')
        await handleCopyCode(allCode, 'copy-all')
        break
      case 'download-templates':
        const templateData = allPatterns.map(p => ({
          name: p.name,
          category: p.category,
          complexity: p.complexity,
          code: p.code
        }))
        const blob = new Blob([JSON.stringify(templateData, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'ui-patterns-templates.json'
        a.click()
        URL.revokeObjectURL(url)
        break
      case 'view-practices':
        // Navigate to best practices
        break
      case 'test-patterns':
        // Open pattern playground
        break
    }
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(sectionId)) {
        newExpanded.delete(sectionId)
      } else {
        newExpanded.add(sectionId)
      }
      return newExpanded
    })
  }

  // Filter patterns for search
  const searchResults = searchQuery ? allPatterns.filter(pattern =>
    pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pattern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pattern.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  ) : []

  if (!mounted) {
    return null
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Universal Comprehension Header */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border-b border-slate-800">
          <div className="px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              {/* Quick Value Metrics - Immediate surfacing */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {patternStats.map((stat, index) => (
                  <Card key={stat.label} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                      <div className="text-xs text-green-400 mt-1">{stat.change}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Value Proposition */}
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge className="bg-green-950 text-green-300 border-green-800">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      {allPatterns.length} Ready Patterns
                    </Badge>
                    <Badge className="bg-blue-950 text-blue-300 border-blue-800">
                      <Award className="w-3 h-3 mr-1" />
                      Production Tested
                    </Badge>
                    <Badge className="bg-purple-950 text-purple-300 border-purple-800">
                      <Target className="w-3 h-3 mr-1" />
                      Recruitment Focused
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      UI Patterns
                    </span>
                    <br />
                    <span className="text-slate-100">Library</span>
                  </h1>
                  
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Production-ready interface patterns for recruitment applications. Each pattern includes 
                    <span className="text-fuchsia-400 font-semibold"> accessibility guidelines</span>, 
                    <span className="text-purple-400 font-semibold"> copy-paste code</span>, and real-world usage examples.
                  </p>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action) => (
                      <Button
                        key={action.action}
                        variant="outline"
                        className={`${action.color} hover:scale-105 transition-all text-left justify-start h-auto p-4`}
                        onClick={() => handleQuickAction(action.action)}
                      >
                        <action.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs opacity-80">{action.description}</div>
                        </div>
                        {copiedCode === action.action && <CheckCircle2 className="h-4 w-4 ml-auto text-green-400" />}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Live Search & Discovery */}
                <div className="space-y-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      placeholder="Search patterns, categories, or use cases..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-14 text-lg bg-slate-800/50 border-slate-700/50 focus:border-fuchsia-500/50"
                    />
                  </div>

                  {/* Search Results - Immediate surfacing */}
                  {searchQuery && (
                    <Card className="bg-slate-800/50 border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Found {searchResults.length} patterns for "{searchQuery}"
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                        {searchResults.map((pattern) => (
                          <div
                            key={pattern.id}
                            className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors cursor-pointer"
                            onClick={() => {
                              setSelectedCategory(pattern.category)
                              setSearchQuery("")
                              document.getElementById(pattern.id)?.scrollIntoView({ behavior: 'smooth' })
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <pattern.categoryIcon className="h-5 w-5 text-fuchsia-400" />
                              <div>
                                <div className="font-medium text-slate-200">{pattern.name}</div>
                                <div className="text-sm text-slate-400">{pattern.category}</div>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400" />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Category Quick Access */}
                  <div className="grid grid-cols-2 gap-3">
                    {patternCategories.map((category) => (
                      <Button
                        key={category.name}
                        variant="outline"
                        className="border-slate-600 hover:border-fuchsia-500/50 h-auto p-4 justify-start"
                        onClick={() => {
                          setSelectedCategory(category.name)
                          toggleSection(category.name.toLowerCase().replace(' ', '-'))
                        }}
                      >
                        <category.icon className="h-5 w-5 mr-3 text-slate-400" />
                        <div className="text-left">
                          <div className="font-medium text-slate-200">{category.name}</div>
                          <div className="text-xs text-slate-400">{category.count} patterns</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Progressive Disclosure - Pattern Categories */}
        <div className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {patternCategories.map((category) => {
              const sectionId = category.name.toLowerCase().replace(' patterns', '').replace(' ', '-')
              const isExpanded = expandedSections.has(sectionId)
              
              return (
                <Card key={category.name} className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader className="cursor-pointer" onClick={() => toggleSection(sectionId)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                          <category.icon className="h-6 w-6 text-slate-300" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-slate-100 flex items-center gap-3">
                            {category.name}
                            <Badge variant="outline" className="border-slate-600">
                              {category.count} patterns
                            </Badge>
                          </CardTitle>
                          <CardDescription className="mt-1">{category.description}</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {isExpanded ? "Collapse" : "Expand"}
                        <ArrowRight className={`h-4 w-4 ml-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="space-y-6">
                      <div className="grid gap-6">
                        {category.patterns.map((pattern) => (
                          <Card key={pattern.id} id={pattern.id} className="bg-slate-900/30 border-slate-700/30">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-semibold text-slate-100">{pattern.name}</h3>
                                    <Badge 
                                      className={
                                        pattern.complexity === 'Simple' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                                        pattern.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                                        'bg-red-500/20 text-red-300 border-red-500/30'
                                      }
                                    >
                                      {pattern.complexity}
                                    </Badge>
                                  </div>
                                  <p className="text-slate-400 mb-3">{pattern.description}</p>
                                  
                                  <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                                    <div>
                                      <span className="font-medium text-slate-300">Usage:</span>
                                      <span className="text-slate-400 ml-2">{pattern.usage}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-slate-300">Examples:</span>
                                      <span className="text-slate-400 ml-2">{pattern.examples.join(", ")}</span>
                                    </div>
                                  </div>

                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {pattern.tags.map((tag) => (
                                      <Badge key={tag} variant="outline" className="text-xs border-slate-600">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 ml-4">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleToggleFavorite(pattern.id)}
                                    className={`${favorites.has(pattern.id) ? 'text-red-400 border-red-500/50' : 'text-slate-400 border-slate-600'}`}
                                  >
                                    <Heart className={`h-4 w-4 ${favorites.has(pattern.id) ? 'fill-current' : ''}`} />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleCopyCode(pattern.code, pattern.id)}
                                    className="hover:border-fuchsia-500/50"
                                  >
                                    {copiedCode === pattern.id ? (
                                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    ) : (
                                      <Copy className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>
                              </div>

                              {/* Code Preview */}
                              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <Code2 className="h-4 w-4 text-slate-400" />
                                    <span className="text-sm font-medium text-slate-300">Implementation</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="h-6 px-2 text-xs hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                                    >
                                      <PlayCircle className="h-3 w-3 mr-1" />
                                      Preview
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => handleCopyCode(pattern.code, `${pattern.id}-code`)}
                                      className="h-6 px-2 text-xs"
                                    >
                                      {copiedCode === `${pattern.id}-code` ? (
                                        <CheckCircle2 className="h-3 w-3 text-green-400" />
                                      ) : (
                                        <Copy className="h-3 w-3" />
                                      )}
                                    </Button>
                                  </div>
                                </div>
                                <pre className="text-sm overflow-x-auto">
                                  <code className="text-slate-300">{pattern.code}</code>
                                </pre>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              )
            })}

            {/* Favorites Section - If any favorites exist */}
            {favorites.size > 0 && (
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-100 flex items-center gap-3">
                    <Heart className="h-6 w-6 text-red-400" />
                    Favorite Patterns
                    <Badge variant="outline" className="border-slate-600">
                      {favorites.size} saved
                    </Badge>
                  </CardTitle>
                  <CardDescription>Your bookmarked patterns for quick access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {allPatterns.filter(p => favorites.has(p.id)).map((pattern) => (
                      <div key={pattern.id} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <pattern.categoryIcon className="h-5 w-5 text-fuchsia-400" />
                          <div>
                            <div className="font-medium text-slate-200">{pattern.name}</div>
                            <div className="text-sm text-slate-400">{pattern.category}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyCode(pattern.code, `fav-${pattern.id}`)}
                            className="h-8 w-8 p-0"
                          >
                            {copiedCode === `fav-${pattern.id}` ? (
                              <CheckCircle2 className="h-3 w-3 text-green-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleFavorite(pattern.id)}
                            className="h-8 w-8 p-0 text-red-400"
                          >
                            <Heart className="h-3 w-3 fill-current" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// Pattern Card Component
function PatternCard({ pattern }: { pattern: any }) {
  const handleCopy = () => {
    // Copy functionality would go here
  }

  const complexityColors = {
    Basic: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", 
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-slate-200 dark:border-slate-700/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                {pattern.name}
              </h3>
              <Badge className={complexityColors[pattern.complexity as keyof typeof complexityColors]}>
                {pattern.complexity}
              </Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {pattern.description}
            </p>
            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-500">
              <div><span className="font-medium">Usage:</span> {pattern.usage}</div>
              <div>
                <span className="font-medium">Examples:</span> 
                <span className="ml-1">{pattern.examples.join(", ")}</span>
              </div>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className={`${
              copied 
                ? 'border-green-500 text-green-600 bg-green-50 dark:bg-green-950' 
                : 'border-slate-300 dark:border-slate-600 hover:border-fuchsia-500 dark:hover:border-fuchsia-400'
            } transition-all ml-4`}
          >
            {copied ? (
              <CheckCircle2 className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
        
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 mb-3">
          <pre className="text-xs text-slate-600 dark:text-slate-400 overflow-x-auto">
            <code>{pattern.code}</code>
          </pre>
        </div>
        
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-500 flex items-center gap-1">
            <pattern.categoryIcon className="h-3 w-3" />
            {pattern.category}
          </span>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-6 px-2 text-xs hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
          >
            <PlayCircle className="h-3 w-3 mr-1" />
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Category Overview Card
function CategoryOverviewCard({ category }: { category: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-slate-200 dark:border-slate-700/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${category.bgColor} border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <category.icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                {category.name}
              </h3>
              <Badge variant="outline" className="border-slate-300 dark:border-slate-600">
                {category.count} patterns
              </Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {category.patterns.slice(0, 3).map((pattern: any) => (
                <span key={pattern.name} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded">
                  {pattern.name}
                </span>
              ))}
              {category.patterns.length > 3 && (
                <span className="text-xs text-slate-500 dark:text-slate-500 px-2 py-1">
                  +{category.patterns.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}