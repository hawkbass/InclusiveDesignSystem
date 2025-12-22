"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import {
  User,
  Calendar,
  Mail,
  Copy,
  CheckCircle2,
  Settings,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Wrench,
  Shield,
  Lock,
  Star,
  Heart,
  Eye,
  Bell,
  Link
} from "lucide-react"

interface UtilityComponentsProps {
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
    id: "badges",
    title: "Status Badges",
    description: "Colorful badges for status and labels",
    code: `<div className="flex gap-2">
  <Badge className="bg-green-500/20 text-green-300">Active</Badge>
  <Badge className="bg-yellow-500/20 text-yellow-300">Pending</Badge>
  <Badge className="bg-red-500/20 text-red-300">Inactive</Badge>
</div>`,
    component: (
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 hover:bg-green-500/30 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Active</Badge>
        <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Under Review</Badge>
        <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Interview</Badge>
        <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Hired</Badge>
        <Badge className="bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30 hover:bg-red-500/30 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>Rejected</Badge>
      </div>
    )
  },
  {
    id: "separators",
    title: "Separators",
    description: "Visual dividers and separators",
    code: `<div className="space-y-4">
  <div>Section 1</div>
  <Separator />
  <div>Section 2</div>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div className="p-4 bg-card/30 rounded-lg">
          <h4 className="font-medium text-foreground">Personal Information</h4>
          <p className="text-sm text-muted-foreground mt-1">Basic profile details</p>
        </div>
        <Separator className="bg-muted" />
        <div className="p-4 bg-card/30 rounded-lg">
          <h4 className="font-medium text-foreground">Work Experience</h4>
          <p className="text-sm text-muted-foreground mt-1">Employment history</p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="p-4 bg-card/30 rounded-lg">
          <h4 className="font-medium text-foreground">Skills & Expertise</h4>
          <p className="text-sm text-muted-foreground mt-1">Technical capabilities</p>
        </div>
      </div>
    )
  },
  {
    id: "tooltips",
    title: "Tooltips",
    description: "Contextual information on hover",
    code: `<Button variant="outline" title="This is a tooltip">
  <HelpCircle className="h-4 w-4 mr-2" />
  Hover for info
</Button>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex gap-3 flex-wrap">
          <Button variant="outline" size="sm" className="hover:bg-accent" title="Click to view candidate profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button variant="outline" size="sm" className="hover:bg-accent" title="Schedule an interview with this candidate">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button variant="outline" size="sm" className="hover:bg-accent" title="Send email to candidate">
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </Button>
        </div>
        <div className="p-3 bg-card/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Hover over the buttons above to see tooltips in action. These provide helpful context without cluttering the interface.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "loading-spinners",
    title: "Loading Spinners",
    description: "Various loading state indicators",
    code: `<div className="flex items-center gap-6">
  <div className="animate-spin rounded-full h-6 w-6 border-2 border-fuchsia-400 border-t-transparent"></div>
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
  </div>
</div>`,
    component: (
      <div className="space-y-6 w-full max-w-md">
        <div className="flex items-center gap-6">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-fuchsia-400 border-t-transparent"></div>
          <span className="text-sm text-foreground/80">Loading candidates...</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
          <span className="text-sm text-foreground/80">Processing application...</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-6 h-6 border-2 border-border border-l-fuchsia-400 rounded-full animate-spin"></div>
          <span className="text-sm text-foreground/80">Saving changes...</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-6 h-6 border-2 border-border rounded-full"></div>
            <div className="absolute inset-0 border-2 border-fuchsia-400 border-r-transparent rounded-full animate-spin"></div>
          </div>
          <span className="text-sm text-foreground/80">Uploading resume...</span>
        </div>
      </div>
    )
  },
  {
    id: "copy-clipboard",
    title: "Copy to Clipboard",
    description: "Copy text with visual feedback",
    code: `<div className="flex items-center gap-2">
  <Input value="sarah.johnson@email.com" readOnly />
  <Button size="sm" onClick={() => navigator.clipboard.writeText('sarah.johnson@email.com')}>
    <Copy className="h-4 w-4" />
  </Button>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        {[
          { label: "Email", value: "sarah.johnson@email.com" },
          { label: "Phone", value: "+1 (555) 123-4567" },
          { label: "LinkedIn", value: "linkedin.com/in/sarah-johnson" }
        ].map((item, index) => (
          <div key={index} className="space-y-2">
            <Label className="text-foreground/80 text-sm">{item.label}</Label>
            <div className="flex items-center gap-2">
              <Input
                value={item.value}
                readOnly
                className="bg-card/50 border-border text-foreground/80 text-sm"
              />
              <Button
                size="sm"
                variant="outline"
                className="hover:bg-accent"
                onClick={() => {
                  navigator.clipboard.writeText(item.value)
                  // In a real app, you'd show a toast notification here
                }}
                title={`Copy ${item.label.toLowerCase()}`}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    description: "Visual keyboard shortcut indicators",
    code: `<div className="flex items-center gap-2">
  <span>Save</span>
  <kbd className="px-2 py-1 bg-muted text-foreground/80 rounded text-xs">Ctrl+S</kbd>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        {[
          { action: "Search candidates", shortcut: "Ctrl+K" },
          { action: "Create new job", shortcut: "Ctrl+N" },
          { action: "Save changes", shortcut: "Ctrl+S" },
          { action: "Quick filter", shortcut: "Ctrl+F" },
          { action: "Export data", shortcut: "Ctrl+E" }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-card/30 rounded-xl border border-border/50 shadow-xl hover:bg-card/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <span className="text-foreground/80 text-sm">{item.action}</span>
            <kbd className="px-2 py-1 bg-muted text-foreground/80 rounded text-xs font-mono border border-border">
              {item.shortcut}
            </kbd>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "colour-swatches",
    title: "colour Swatches",
    description: "colour selection and display components",
    code: `<div className="flex gap-2">
  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white shadow-sm"></div>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div>
          <Label className="text-foreground/80 text-sm mb-3 block">Status colours</Label>
          <div className="flex gap-3">
            {[
              { colour: "bg-green-500", label: "Available", active: true },
              { colour: "bg-yellow-500", label: "Busy", active: false },
              { colour: "bg-red-500", label: "Unavailable", active: false },
              { colour: "bg-blue-500", label: "Interview", active: false }
            ].map((item, index) => (
              <div
                key={index}
                className={`w-8 h-8 ${item.colour} rounded-full border-2 cursor-pointer hover:scale-110 transition-transform ${
                  item.active ? 'border-white' : 'border-border'
                }`}
                style={{ transitionDuration: 'var(--animation-speed)' }}
                title={item.label}
              />
            ))}
          </div>
        </div>
        <div>
          <Label className="text-foreground/80 text-sm mb-3 block">Priority Levels</Label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { colour: "bg-red-500", label: "High", hex: "#EF4444" },
              { colour: "bg-orange-500", label: "Medium", hex: "#F97316" },
              { colour: "bg-yellow-500", label: "Low", hex: "#EAB308" },
              { colour: "bg-green-500", label: "Completed", hex: "#22C55E" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-full h-8 ${item.colour} rounded border border-border hover:scale-105 transition-transform cursor-pointer`} style={{ transitionDuration: 'var(--animation-speed)' }}></div>
                <span className="text-xs text-muted-foreground mt-1 block">{item.label}</span>
                <span className="text-xs text-muted-foreground font-mono">{item.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "icons-showcase",
    title: "Icon Library",
    description: "Common icons for various actions",
    code: `<div className="flex gap-4">
  <Button size="sm" variant="outline">
    <User className="h-4 w-4 mr-2" />
    Profile
  </Button>
  <Button size="sm" variant="outline">
    <Settings className="h-4 w-4 mr-2" />
    Settings
  </Button>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: User, label: "Profile", colour: "text-blue-400" },
            { icon: Settings, label: "Settings", colour: "text-muted-foreground" },
            { icon: Search, label: "Search", colour: "text-green-400" },
            { icon: Filter, label: "Filter", colour: "text-purple-400" },
            { icon: Download, label: "Download", colour: "text-orange-400" },
            { icon: Upload, label: "Upload", colour: "text-cyan-400" },
            { icon: RefreshCw, label: "Refresh", colour: "text-yellow-400" },
            { icon: Bell, label: "Notifications", colour: "text-red-400" }
          ].map((item, index) => (
            <div key={index} className="text-center p-3 bg-card/30 rounded-lg hover:bg-card/50 transition-all duration-300 rounded-lg cursor-pointer" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <item.icon className={`h-6 w-6 mx-auto mb-2 ${item.colour}`} />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" variant="outline" className="hover:bg-accent">
            <Star className="h-4 w-4 mr-2" />
            Favourite
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-accent">
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-accent">
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-accent">
            <Link className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    )
  },
  {
    id: "security-badges",
    title: "Security Badges",
    description: "Security and verification indicators",
    code: `<div className="flex items-center gap-2">
  <Shield className="h-4 w-4 text-green-400" />
  <span className="text-sm">Verified</span>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
          <Shield className="h-5 w-5 text-green-400" />
          <div>
            <span className="text-sm font-medium text-foreground">Verified Account</span>
            <p className="text-xs text-muted-foreground">Email and phone verified</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
          <Lock className="h-5 w-5 text-blue-400" />
          <div>
            <span className="text-sm font-medium text-foreground">Secure Connection</span>
            <p className="text-xs text-muted-foreground">End-to-end encrypted</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-purple-400" />
          <div>
            <span className="text-sm font-medium text-foreground">Background Check</span>
            <p className="text-xs text-muted-foreground">Completed successfully</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30">
            <Shield className="h-3 w-3 mr-1" />
            Secure
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30">
            <Lock className="h-3 w-3 mr-1" />
            Encrypted
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        </div>
      </div>
    )
  }
]

export function UtilityComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favourites, 
  onToggleFavourite 
}: UtilityComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Utility Components</h2>
            <p className="text-muted-foreground">Helper components and utility elements</p>
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
            <Wrench className="h-12 w-12 mx-auto mb-4 opacity-50" />
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





