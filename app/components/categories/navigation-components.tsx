"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Users,
  Briefcase,
  Calendar,
  BarChart3,
  Settings,
  User,
  Star,
  Menu,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Hexagon,
  Search,
  Filter,
  ChevronDown,
  X,
  Mail
} from "lucide-react"

interface NavigationComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favorites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Move components array to module level
const components = [
  {
    id: "breadcrumbs",
    title: "Breadcrumbs",
    description: "Navigation breadcrumb with hover effects",
    code: `<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 rounded-lg">Dashboard</a>
  <ChevronRight className="h-4 w-4 text-slate-500" />
  <span className="text-white font-medium">Candidates</span>
</nav>`,
    component: (
      <nav className="flex items-center gap-2 text-sm">
        <a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Dashboard</a>
        <ChevronRight className="h-4 w-4 text-slate-500" />
        <a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Candidates</a>
        <ChevronRight className="h-4 w-4 text-slate-500" />
        <span className="text-fuchsia-300 font-medium">Sarah Johnson</span>
      </nav>
    )
  },
  {
    id: "tabs-enhanced",
    title: "Enhanced Tabs",
    description: "Animated tab navigation with icons",
    code: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
</Tabs>`,
    component: (
      <Tabs defaultValue="overview" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 h-auto p-3 bg-gradient-to-r from-slate-800/80 via-slate-800/90 to-slate-800/80 border border-slate-700/50 shadow-xl/60 rounded-3xl backdrop-blur-md shadow-2xl shadow-slate-900/40">
          <TabsTrigger value="overview" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <Briefcase className="h-4 w-4 mr-2" />
            Experience
          </TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <Star className="h-4 w-4 mr-2" />
            Skills
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 p-4 bg-slate-800/30 rounded-lg">
          <p className="text-sm text-slate-300">Personal information and contact details.</p>
        </TabsContent>
        <TabsContent value="details" className="mt-4 p-4 bg-slate-800/30 rounded-lg">
          <p className="text-sm text-slate-300">Work experience and employment history.</p>
        </TabsContent>
        <TabsContent value="skills" className="mt-4 p-4 bg-slate-800/30 rounded-lg">
          <p className="text-sm text-slate-300">Technical skills and expertise areas.</p>
        </TabsContent>
      </Tabs>
    )
  },
  {
    id: "sidebar-nav",
    title: "Sidebar Navigation",
    description: "Collapsible sidebar with menu items",
    code: `<nav className="w-64 lg:w-80 space-y-2">
  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 rounded-lg">
    <Home className="h-5 w-5" />
    Dashboard
  </a>
</nav>`,
    component: (
      <nav className="w-full max-w-xs space-y-2">
        {[
          { icon: Home, label: "Dashboard", active: true },
          { icon: Users, label: "Candidates", active: false },
          { icon: Briefcase, label: "Jobs", active: false },
          { icon: Calendar, label: "Interviews", active: false },
          { icon: BarChart3, label: "Analytics", active: false },
          { icon: Settings, label: "Settings", active: false }
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 rounded-lg ${
              item.active
                ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30'
                : 'text-slate-300 hover:bg-slate-800/50 hover:text-fuchsia-300'
            }`}
            style={{ transitionDuration: 'var(--animation-speed)' }}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </a>
        ))}
      </nav>
    )
  },
  {
    id: "top-navigation",
    title: "Top Navigation Bar",
    description: "Horizontal navigation with dropdowns",
    code: `<nav className="flex items-center gap-6">
  <a href="#" className="text-slate-300 hover:text-white transition-all duration-300 rounded-lg">Home</a>
  <a href="#" className="text-slate-300 hover:text-white transition-all duration-300 rounded-lg">About</a>
  <a href="#" className="text-slate-300 hover:text-white transition-all duration-300 rounded-lg">Contact</a>
</nav>`,
    component: (
      <nav className="flex items-center gap-6 w-full max-w-md">
        {[
          { label: "Dashboard", active: true },
          { label: "Candidates", active: false },
          { label: "Jobs", active: false },
          { label: "Reports", active: false }
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`transition-all duration-300 rounded-lg font-medium ${
              item.active
                ? 'text-fuchsia-300 border-b-2 border-fuchsia-500 pb-1'
                : 'text-slate-300 hover:text-fuchsia-300'
            }`}
            style={{ transitionDuration: 'var(--animation-speed)' }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    )
  },
  {
    id: "mobile-menu",
    title: "Mobile Menu",
    description: "Responsive hamburger menu for mobile",
    code: `<div className="md:hidden">
  <Button variant="ghost" size="sm">
    <Menu className="h-5 w-5" />
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Hexagon className="h-6 w-6 text-fuchsia-400" />
            <span className="font-medium text-slate-200">Mobile Nav</span>
          </div>
          <Button variant="ghost" size="sm" className="hover:bg-slate-700">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-2 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 shadow-xl">
          <div className="space-y-2">
            {["Dashboard", "Candidates", "Jobs", "Settings"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 text-slate-300 hover:text-fuchsia-300 hover:bg-slate-800/50 rounded transition-all duration-300 rounded-lg"
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "pagination",
    title: "Pagination",
    description: "Page navigation with numbered pages",
    code: `<div className="flex items-center gap-2">
  <Button variant="outline" size="sm">
    <ArrowLeft className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="sm">1</Button>
  <Button variant="outline" size="sm">2</Button>
  <Button variant="outline" size="sm">
    <ArrowRight className="h-4 w-4" />
  </Button>
</div>`,
    component: (
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="hover:bg-slate-700">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        {[1, 2, 3, 4, 5].map((page, index) => (
          <Button
            key={index}
            variant={page === 2 ? "default" : "outline"}
            size="sm"
            className={page === 2 ? "bg-fuchsia-500 hover:bg-fuchsia-600" : "hover:bg-slate-700"}
          >
            {page}
          </Button>
        ))}
        <span className="text-slate-400 mx-2">...</span>
        <Button variant="outline" size="sm" className="hover:bg-slate-700">
          10
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-slate-700">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    )
  },
  {
    id: "step-navigation",
    title: "Step Navigation",
    description: "Multi-step process navigation",
    code: `<div className="flex items-center gap-6">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
    <span className="text-fuchsia-300">Step 1</span>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between">
          {[
            { step: 1, label: "Application", completed: true, active: false },
            { step: 2, label: "Review", completed: true, active: false },
            { step: 3, label: "Interview", completed: false, active: true },
            { step: 4, label: "Decision", completed: false, active: false }
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  item.completed
                    ? 'bg-green-500 text-white'
                    : item.active
                    ? 'bg-fuchsia-500 text-white'
                    : 'bg-slate-600 text-slate-300'
                }`}>
                  {item.completed ? <Check className="h-4 w-4" /> : item.step}
                </div>
                <span className={`text-xs mt-1 ${
                  item.active ? 'text-fuchsia-300' : item.completed ? 'text-green-300' : 'text-slate-400'
                }`}>
                  {item.label}
                </span>
              </div>
              {index < 3 && (
                <div className={`w-12 h-0.5 mx-2 ${
                  item.completed ? 'bg-green-500' : 'bg-slate-600'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "dropdown-menu",
    title: "Dropdown Menu",
    description: "Contextual dropdown with actions",
    code: `<div className="relative">
  <Button variant="outline">
    Actions
    <ChevronDown className="h-4 w-4 ml-2" />
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-xs">
        <div className="relative">
          <Button variant="outline" className="w-full justify-between">
            Actions
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
          <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-slate-800/90 border border-slate-700/50 rounded-lg shadow-xl">
            <div className="space-y-1">
              {[
                { label: "View Profile", icon: User },
                { label: "Send Message", icon: Mail },
                { label: "Schedule Interview", icon: Calendar },
                { label: "Add to Favorites", icon: Star }
              ].map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-fuchsia-300 hover:bg-slate-700/50 rounded transition-all duration-300 rounded-lg text-left"
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "quick-nav",
    title: "Quick Navigation",
    description: "Floating quick action buttons",
    code: `<div className="fixed bottom-4 right-4">
  <Button className="w-12 h-12 rounded-full">
    <Plus className="h-5 w-5" />
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-xs">
        <div className="flex items-center gap-2 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 shadow-xl">
          <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
            <User className="h-4 w-4 mr-1" />
            Add
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-slate-700">
            <Search className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-slate-700">
            <Filter className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-slate-700">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  },
  {
    id: "filter-nav",
    title: "Filter Navigation",
    description: "Filter and sort controls",
    code: `<div className="flex items-center gap-2">
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Sort by" />
    </SelectTrigger>
  </Select>
  <Button variant="outline">
    <Filter className="h-4 w-4" />
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-300">Sort:</span>
            <select className="bg-slate-800/50 border border-slate-600 rounded px-2 py-1 text-sm text-slate-300">
              <option>Name</option>
              <option>Date</option>
              <option>Status</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-300">Filter:</span>
            <Button size="sm" variant="outline" className="hover:bg-slate-700">
              <Filter className="h-3 w-3 mr-1" />
              Active
            </Button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "floating-nav",
    title: "Floating Navigation",
    description: "Floating navigation panel",
    code: `<div className="fixed bottom-4 left-4">
  <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-lg p-2">
    <nav className="space-y-2">
      <a href="#" className="block p-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-colors">
        <Home className="h-5 w-5" />
      </a>
    </nav>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-xs">
        <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-lg p-3 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-200">Quick Access</span>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-slate-700">
              <X className="h-3 w-3" />
            </Button>
          </div>
          <nav className="space-y-1">
            {[
              { icon: Home, label: "Dashboard", active: true },
              { icon: Users, label: "Candidates" },
              { icon: Briefcase, label: "Jobs" },
              { icon: Calendar, label: "Schedule" }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-2 px-2 py-1 rounded text-sm transition-all duration-300 rounded-lg ${
                  item.active
                    ? 'text-fuchsia-300 bg-fuchsia-500/20'
                    : 'text-slate-300 hover:text-fuchsia-300 hover:bg-slate-700/50'
                }`}
                style={{ transitionDuration: 'var(--animation-speed)' }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    )
  },
  {
    id: "contextual-nav",
    title: "Contextual Navigation",
    description: "Context-aware navigation based on current page",
    code: `<div className="flex items-center gap-4">
  <Button variant="ghost" size="sm">
    <ArrowLeft className="h-4 w-4 mr-1" />
    Back
  </Button>
  <div className="flex items-center gap-2">
    <Button size="sm">Edit</Button>
    <Button size="sm" variant="outline">Delete</Button>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 shadow-xl">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hover:bg-slate-700">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <span className="text-sm text-slate-400">|</span>
            <span className="text-sm text-slate-300">Sarah Johnson</span>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
              <User className="h-3 w-3 mr-1" />
              Edit
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-slate-700">
              <Mail className="h-3 w-3 mr-1" />
              Contact
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-slate-700">
              <Calendar className="h-3 w-3 mr-1" />
              Schedule
            </Button>
          </div>
        </div>
      </div>
    )
  }
]

export function NavigationComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favorites, 
  onToggleFavourite 
}: NavigationComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-100">Navigation Components</h2>
            <p className="text-slate-400">Navigation patterns and menu systems for seamless user journeys</p>
          </div>
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1">
            {filteredComponents.length} Components
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((comp) => (
            <ComponentCard
              key={comp.id}
              id={comp.id}
              title={comp.title}
              description={comp.description}
              code={comp.code}
              onCopyCode={onCopyCode}
              copiedCode={copiedCode}
              isFavourite={favorites.has(comp.id)}
              onToggleFavourite={onToggleFavourite}
              viewMode={viewMode}
              searchQuery={searchQuery}
            >
              {comp.component}
            </ComponentCard>
          ))}
        </div>

        {filteredComponents.length === 0 && searchQuery && (
          <div className="text-center py-12 text-slate-400">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No components found</p>
            <p className="text-sm">Try adjusting your search query</p>
          </div>
        )}
      </section>
    </div>
  )
}

// Export the components array for use in getAllComponents
export { components }