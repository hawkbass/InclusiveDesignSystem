"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  Briefcase,
  Calendar,
  Clock,
  BarChart3,
  Eye,
  Download,
  Filter,
  Search,
  MoreHorizontal
} from "lucide-react"

interface DataDisplayComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favourites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Move components array to module level
const components = [
  {
    id: "data-table",
    title: "Data Table",
    description: "Interactive table with sorting and selection",
    code: `<table className="w-full">
  <thead>
    <tr className="border-b border-border">
      <th className="text-left py-3 px-4">Name</th>
      <th className="text-left py-3 px-4">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-card/30">
      <td className="py-3 px-4">Sarah Johnson</td>
      <td className="py-3 px-4"><Badge>Active</Badge></td>
    </tr>
  </tbody>
</table>`,
    component: (
      <div className="w-full max-w-full">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-foreground/80">Name</th>
                <th className="text-left py-3 px-4 font-medium text-foreground/80">Position</th>
                <th className="text-left py-3 px-4 font-medium text-foreground/80">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Sarah Johnson", position: "Frontend Dev", status: "Active", statusColor: "bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30" },
                { name: "Michael Kim", position: "Designer", status: "Review", statusColor: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/30" },
                { name: "Alex Liu", position: "Full Stack", status: "Interview", statusColor: "bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30" }
              ].map((candidate, index) => (
                <tr key={index} className="border-b border-border hover:bg-card/30 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
                  <td className="py-3 px-4 text-foreground/80">{candidate.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{candidate.position}</td>
                  <td className="py-3 px-4">
                    <Badge className={candidate.statusColor}>{candidate.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "metrics-cards",
    title: "Metrics Cards",
    description: "KPI cards with trend indicators",
    code: `<Card>
  <CardContent className="p-6">
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
        <Users className="h-6 w-6 text-blue-400" />
      </div>
      <Badge className="bg-green-500/20 text-green-700 dark:text-green-300">+12%</Badge>
    </div>
    <div className="text-2xl font-bold mt-4">1,234</div>
    <div className="text-sm text-muted-foreground">Total Candidates</div>
  </CardContent>
</Card>`,
    component: (
      <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
        {[
          { title: "Total Candidates", value: "1,234", change: "+12%", icon: Users, colour: "text-blue-400", bgColor: "bg-blue-500/20" },
          { title: "Active Jobs", value: "89", change: "+8%", icon: Briefcase, colour: "text-purple-400", bgColor: "bg-purple-500/20" },
          { title: "Interviews", value: "24", change: "+18%", icon: Calendar, colour: "text-green-400", bgColor: "bg-green-500/20" },
          { title: "Avg. Time", value: "18 days", change: "-5 days", icon: Clock, colour: "text-orange-400", bgColor: "bg-orange-500/20" }
        ].map((metric, index) => (
          <Card key={index} className="bg-card/30 border-border hover:bg-card/50 transition-all group" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${metric.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ transitionDuration: 'var(--animation-speed)' }}>
                  <metric.icon className={`h-5 w-5 ${metric.colour}`} />
                </div>
                <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 hover:bg-green-500/30 text-xs">
                  {metric.change}
                </Badge>
              </div>
              <div className="text-xl font-bold mb-1">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  },
  {
    id: "statistics-grid",
    title: "Statistics Grid",
    description: "Grid layout for displaying key statistics",
    code: `<div className="grid grid-cols-3 gap-6">
  <div className="text-center">
    <div className="text-2xl font-bold">156</div>
    <div className="text-sm text-muted-foreground">Total</div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="grid grid-cols-3 gap-6">
          {[
            { value: "156", label: "Total Candidates", colour: "text-blue-400" },
            { value: "89", label: "Active Applications", colour: "text-green-400" },
            { value: "34", label: "In Review", colour: "text-yellow-400" },
            { value: "23", label: "Interviewed", colour: "text-purple-400" },
            { value: "10", label: "Hired", colour: "text-emerald-400" },
            { value: "67", label: "Open Positions", colour: "text-orange-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 bg-card/30 rounded-lg hover:bg-card/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <div className={`text-2xl font-bold ${stat.colour}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "chart-placeholder",
    title: "Chart Placeholder",
    description: "Placeholder for charts and data visualizations",
    code: `<div className="aspect-video bg-card/50 border border-border/50 shadow-xl rounded-lg flex items-center justify-center">
  <div className="text-center">
    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
    <p className="text-sm text-muted-foreground">Chart will render here</p>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="aspect-video bg-card/50 border border-border rounded-lg flex items-center justify-center hover:border-primary-500 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Hiring Trends Chart</p>
            <p className="text-xs text-muted-foreground">Interactive chart will render here</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "list-view",
    title: "List View",
    description: "Structured list display with actions",
    code: `<div className="space-y-2">
  <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
    <div>
      <h4 className="font-medium">Item Title</h4>
      <p className="text-sm text-muted-foreground">Item description</p>
    </div>
    <Button size="sm">Action</Button>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-2">
        {[
          { title: "Sarah Johnson", subtitle: "Senior Frontend Developer", action: "View Profile", status: "Available" },
          { title: "Michael Kim", subtitle: "UX/UI Designer", action: "Schedule", status: "Interviewing" },
          { title: "Alex Liu", subtitle: "Full Stack Engineer", action: "Contact", status: "Under Review" }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-card/30 rounded-lg hover:bg-card/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-fuchsia-500/20 text-primary">{item.title.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30 text-xs">{item.status}</Badge>
              <Button size="sm" variant="outline" className="hover:bg-accent">{item.action}</Button>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "timeline-view",
    title: "Timeline View",
    description: "Chronological timeline display",
    code: `<div className="space-y-4">
  <div className="flex gap-3">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
    <div>
      <p className="text-sm">Event description</p>
      <p className="text-xs text-muted-foreground">2 hours ago</p>
    </div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        {[
          { event: "Application submitted by Sarah Johnson", time: "2 hours ago", type: "application", colour: "bg-blue-400" },
          { event: "Initial screening completed", time: "1 day ago", type: "review", colour: "bg-yellow-400" },
          { event: "Technical interview scheduled", time: "2 days ago", type: "interview", colour: "bg-green-400" },
          { event: "Reference check initiated", time: "3 days ago", type: "reference", colour: "bg-purple-400" },
          { event: "Final interview completed", time: "1 week ago", type: "final", colour: "bg-orange-400" }
        ].map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className={`w-3 h-3 ${item.colour} rounded-full mt-1 flex-shrink-0`}></div>
            <div className="flex-1">
              <p className="text-sm text-foreground/80">{item.event}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "data-cards",
    title: "Data Cards",
    description: "Card-based data presentation",
    code: `<Card>
  <CardHeader>
    <CardTitle>Data Title</CardTitle>
    <CardDescription>Data description</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-bold">42</div>
  </CardContent>
</Card>`,
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        {[
          { title: "Applications Today", value: "42", description: "New applications received", trend: "+15%" },
          { title: "Interviews Scheduled", value: "8", description: "This week", trend: "+25%" }
        ].map((card, index) => (
          <Card key={index} className="bg-card/30 border-border hover:bg-card/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-foreground">{card.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-foreground">{card.value}</div>
                <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30">{card.trend}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  },
  {
    id: "filters-panel",
    title: "Filters Panel",
    description: "Advanced filtering and search controls",
    code: `<div className="flex items-center gap-4 p-4 bg-card/30 rounded-lg">
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input placeholder="Search..." className="pl-10" />
  </div>
  <Button variant="outline">
    <Filter className="h-4 w-4 mr-2" />
    Filters
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex items-center gap-4 p-4 bg-card/30 rounded-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              placeholder="Search candidates..." 
              className="w-full pl-10 pr-4 py-2 bg-card/50 border border-border rounded-lg text-foreground/80 placeholder-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
          <Button variant="outline" className="hover:bg-accent">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge className="bg-fuchsia-500/20 text-primary border-primary/30">
            Frontend
            <button className="ml-1 hover:text-fuchsia-200">×</button>
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
            Senior
            <button className="ml-1 hover:text-blue-600 dark:hover:text-blue-200">×</button>
          </Badge>
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 hover:bg-green-500/30">
            Remote
            <button className="ml-1 hover:text-green-600 dark:hover:text-green-200">×</button>
          </Badge>
        </div>
      </div>
    )
  },
  {
    id: "export-controls",
    title: "Export Controls",
    description: "Data export and download functionality",
    code: `<div className="flex items-center gap-2">
  <Button variant="outline">
    <Download className="h-4 w-4 mr-2" />
    Export CSV
  </Button>
  <Button variant="outline">
    <Eye className="h-4 w-4 mr-2" />
    Preview
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between p-4 bg-card/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="hover:bg-accent">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-accent">
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-accent">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">156 results</span>
            <Button size="sm" variant="ghost" className="hover:bg-accent">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }
]

export function DataDisplayComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favourites, 
  onToggleFavourite 
}: DataDisplayComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Data Display Components</h2>
            <p className="text-muted-foreground">Tables, charts, and data visualisation components</p>
          </div>
          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 hover:bg-blue-500/30 px-3 py-1">
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
              isFavourite={favourites.has(comp.id)}
              onToggleFavourite={onToggleFavourite}
              viewMode={viewMode}
              searchQuery={searchQuery}
            >
              {comp.component}
            </ComponentCard>
          ))}
        </div>

        {filteredComponents.length === 0 && searchQuery && (
          <div className="text-center py-12 text-muted-foreground">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
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





