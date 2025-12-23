"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Heart,
  Copy,
  CheckCircle2,
  ExternalLink,
  Grid3X3
} from "lucide-react"

interface OrganismssSectionProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favourites: Set<string>
  onToggleFavorite: (id: string) => void
  onNavigateToComponent?: (componentId: string) => void
}

export function OrganismsSection({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favourites, 
  onToggleFavorite,
  onNavigateToComponent
}: OrganismssSectionProps) {

  // COMPLETE 17 System Organisms from our comprehensive analysis
  const organisms = [
    {
      id: "main-dashboard",
      name: "Main Dashboard",
      description: "Complete dashboard orchestrator managing all sections, modals, and state",
      category: "Layout",
      complexity: "High",
      components: ["DashboardHeader", "SidebarNavigation", "DashboardOverview", "CandidatesManagement", "JobsManagement", "CalendarIntegration", "SettingsPanel"],
      location: "app/dashboard-sections/main-dashboard.tsx"
    },
    {
      id: "unified-sidebar",
      name: "Unified Sidebar",
      description: "Comprehensive navigation sidebar with collapsible sections, favourites, and state management",
      category: "Navigation",
      complexity: "Medium",
      components: ["SidebarHeader", "NavigationMenu", "CategorySection", "FavoritesList", "ToggleButton"],
      location: "components/ui/unified-sidebar.tsx"
    },
    {
      id: "dashboard-header",
      name: "Dashboard Header",
      description: "Global application header with search, notifications, user menu, and theme controls",
      category: "Layout",
      complexity: "Medium",
      components: ["SearchBar", "NotificationCenter", "UserMenu", "ThemeToggle", "BreadcrumbNav"],
      location: "components/dashboard/dashboard-header.tsx"
    },
    {
      id: "candidates-management",
      name: "Candidates Management",
      description: "Full candidate lifecycle management with filtering, tracking, and communication tools",
      category: "Business Logic",
      complexity: "High",
      components: ["CandidateTable", "FilterPanel", "StatusTracker", "CommunicationLog", "ActionButtons"],
      location: "app/dashboard-sections/candidates-management.tsx"
    },
    {
      id: "analytics-overview",
      name: "Analytics Overview",
      description: "Comprehensive analytics dashboard with charts, metrics, and interactive data visualization",
      category: "Data Visualization",
      complexity: "High",
      components: ["MetricCards", "ChartContainer", "TimeSeriesGraph", "ComparisonChart", "DataTable"],
      location: "app/dashboard-sections/analytics-overview.tsx"
    },
    {
      id: "settings-panel",
      name: "Settings Panel",
      description: "Multi-section settings interface with form validation, preferences, and system configuration",
      category: "Configuration",
      complexity: "Medium",
      components: ["SettingsTabs", "FormSection", "PreferenceControls", "SystemConfig", "SaveManager"],
      location: "app/dashboard-sections/settings-panel.tsx"
    },
    {
      id: "authentication-flow",
      name: "Authentication Flow",
      description: "Complete auth system with login, registration, password reset, and security features",
      category: "Security",
      complexity: "High",
      components: ["LoginForm", "RegisterForm", "PasswordReset", "TwoFactorAuth", "SecuritySettings"],
      location: "components/auth/"
    },
    {
      id: "file-management",
      name: "File Management",
      description: "Advanced file handling with upload, preview, organisation, and sharing capabilities",
      category: "Data Management",
      complexity: "High",
      components: ["FileUploader", "PreviewModal", "FolderTree", "ShareDialog", "AccessControls"],
      location: "components/file-management/"
    },
    {
      id: "communication-centre",
      name: "Communication centre",
      description: "Integrated messaging, notifications, and communication tools for team collaboration",
      category: "Communication",
      complexity: "High",
      components: ["MessageThread", "NotificationPanel", "ContactList", "VideoCall", "EmailComposer"],
      location: "components/communication/"
    },
    {
      id: "calendar-integration",
      name: "Calendar Integration",
      description: "Full calendar system with event management, scheduling, and timeline visualisation",
      category: "Productivity",
      complexity: "Medium",
      components: ["CalendarView", "EventModal", "ScheduleManager", "TimelineView", "ReminderSystem"],
      location: "components/calendar/"
    },
    {
      id: "search-interface",
      name: "Search Interface",
      description: "Advanced search with filters, facets, autocomplete, and result management",
      category: "Discovery",
      complexity: "Medium",
      components: ["SearchInput", "FilterSidebar", "ResultsGrid", "AutoComplete", "SearchHistory"],
      location: "components/search/"
    },
    {
      id: "data-table-system",
      name: "Data Table System",
      description: "Comprehensive table solution with sorting, filtering, pagination, and bulk actions",
      category: "Data Display",
      complexity: "Medium",
      components: ["TableHeader", "SortableColumns", "FilterRow", "PaginationControls", "BulkActions"],
      location: "components/tables/"
    },
    {
      id: "modal-system",
      name: "Modal System",
      description: "Flexible modal framework with stacking, animations, and context management",
      category: "Overlay",
      complexity: "Medium",
      components: ["ModalContainer", "ModalHeader", "ModalBody", "ModalFooter", "StackManager"],
      location: "components/modals/"
    },
    {
      id: "form-builder",
      name: "Form Builder",
      description: "Dynamic form generation with validation, conditional logic, and submission handling",
      category: "Forms",
      complexity: "High",
      components: ["FormRenderer", "FieldTypes", "ValidationEngine", "ConditionalLogic", "SubmissionHandler"],
      location: "components/forms/"
    },
    {
      id: "notification-system",
      name: "Notification System",
      description: "Global notification management with queuing, persistence, and user preferences",
      category: "Feedback",
      complexity: "Medium",
      components: ["NotificationQueue", "ToastManager", "AlertBanner", "UserPreferences", "PersistenceLayer"],
      location: "components/notifications/"
    },
    {
      id: "theme-provider",
      name: "Theme Provider",
      description: "Global theme management with CSS variables, dark/light mode, and custom themes",
      category: "System",
      complexity: "Medium",
      components: ["ThemeContext", "CSSVariables", "ModeToggle", "CustomThemes", "SystemDetection"],
      location: "components/theme/"
    },
    {
      id: "workflow-engine",
      name: "Workflow Engine",
      description: "Business process automation with step management, approvals, and state tracking",
      category: "Business Logic",
      complexity: "High",
      components: ["WorkflowBuilder", "StepManager", "ApprovalFlow", "StateTracker", "ActionTriggers"],
      location: "components/workflow/"
    }
  ]

  // Filter organisms based on search
  const filteredOrganisms = organisms.filter(organism => 
    organism.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    organism.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    organism.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    organism.components.some(comp => comp.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  // Group organisms by category
  const groupedOrganisms = filteredOrganisms.reduce((acc, organism) => {
    if (!acc[organism.category]) {
      acc[organism.category] = []
    }
    acc[organism.category].push(organism)
    return acc
  }, {} as Record<string, typeof organisms>)

  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-card/50 rounded-lg p-6 text-center border border-border/30">
          <div className="text-3xl font-bold text-emerald-400">{organisms.length}</div>
          <div className="text-sm text-muted-foreground">Total Organisms</div>
        </div>
        <div className="bg-card/50 rounded-lg p-6 text-center border border-border/30">
          <div className="text-3xl font-bold text-blue-400">{Object.keys(groupedOrganisms).length}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="bg-card/50 rounded-lg p-6 text-center border border-border/30">
          <div className="text-3xl font-bold text-purple-400">{organisms.reduce((acc, org) => acc + org.components.length, 0)}</div>
          <div className="text-sm text-muted-foreground">Total Components</div>
        </div>
        <div className="bg-card/50 rounded-lg p-6 text-center border border-border/30">
          <div className="text-3xl font-bold text-primary">{organisms.filter(org => org.complexity === 'High').length}</div>
          <div className="text-sm text-muted-foreground">Complex Systems</div>
        </div>
      </div>

      {/* Organisms by Category */}
      {Object.entries(groupedOrganisms).map(([category, categoryOrganisms]) => (
        <div key={category}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/20">
              <Grid3X3 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                {category} ({categoryOrganisms.length})
              </h4>
              <p className="text-muted-foreground text-sm">Complex system assemblies for {category.toLowerCase()}</p>
            </div>
          </div>
          
          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"} gap-6`}>
            {categoryOrganisms.map((organism) => (
              <Card key={organism.id} className="bg-card/30 border-border/50 hover:border-emerald-500/50 transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg text-foreground">{organism.name}</CardTitle>
                        <Badge className={`text-xs ${
                          organism.complexity === 'High' ? 'bg-red-500/20 text-red-300' :
                          organism.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-green-500/20 text-green-600 dark:text-green-300'
                        }`}>
                          {organism.complexity}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs border-border text-muted-foreground mb-3">
                        {organism.category}
                      </Badge>
                      <CardDescription className="text-muted-foreground">
                        {organism.description}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleFavorite(organism.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className={`h-4 w-4 ${favourites.has(organism.id) ? 'fill-current text-pink-400' : 'text-muted-foreground'}`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Components breakdown */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground/80">Composed of ({organism.components.length}):</div>
                    <div className="flex flex-wrap gap-1">
                      {organism.components.map((component, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const componentInfo = `// ${component} Component\n// Part of: ${organism.name}\n// Location: ${organism.location}\n// Category: ${organism.category}`
                            onCopyCode(componentInfo, `component-${organism.id}-${index}`)
                          }}
                          className="text-xs border-border text-muted-foreground hover:border-primary hover:text-primary h-6 px-2 transition-all group"
                        >
                          {component}
                          <ExternalLink className="h-2 w-2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground italic">
                      Click components to copy their documentation
                    </div>
                  </div>

                  {/* File location */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground/80">Implementation:</div>
                    <div className="bg-card/50 rounded p-3 border border-border/30 relative">
                      <code className="text-xs text-muted-foreground font-mono">{organism.location}</code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onCopyCode(organism.location, `location-${organism.id}`)}
                        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                      >
                        {copiedCode === `location-${organism.id}` ? (
                          <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const docsText = `// ${organism.name} Documentation\n// Description: ${organism.description}\n// Components: ${organism.components.join(', ')}\n// Complexity: ${organism.complexity}\n// Category: ${organism.category}`
                        onCopyCode(docsText, `docs-${organism.id}`)
                      }}
                      className="flex-1 text-muted-foreground border-border hover:border-emerald-500 hover:text-emerald-300"
                    >
                      View Docs
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const importText = `import { ${organism.name.replace(/\s+/g, '')} } from "${organism.location.replace('.tsx', '')}"`
                        onCopyCode(importText, `import-${organism.id}`)
                      }}
                      className="flex-1 text-muted-foreground border-border hover:border-purple-500 hover:text-purple-600 dark:text-purple-600 dark:text-purple-300"
                    >
                      Copy Import
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* No Results Message */}
      {filteredOrganisms.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No organisms found matching "{searchQuery}"</div>
          <p className="text-sm text-muted-foreground">
            Try searching for categories like "Layout", "Navigation", "Business Logic", or component names
          </p>
        </div>
      )}
    </div>
  )
}








