"use client"

import React, { useState, useCallback, useMemo } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Copy, 
  CheckCircle2, 
  Play, 
  Code2, 
  Eye, 
  Download, 
  ExternalLink,
  BookOpen,
  Zap,
  Shield,
  Palette,
  Monitor,
  Smartphone,
  Heart,
  Star,
  Search,
  Filter,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Settings,
  Lightbulb,
  Target,
  Users,
  Gauge,
  Activity,
  TrendingUp,
  BarChart3
} from "lucide-react"

/**
 * World-Class Component Documentation Example
 * 
 * This demonstrates the standards we should follow across all component documentation:
 * 1. Immediate value surfacing
 * 2. Progressive disclosure
 * 3. Interactive examples
 * 4. Comprehensive API documentation
 * 5. Accessibility guidelines
 * 6. Do's and don'ts
 * 7. Real-world usage examples
 * 8. Performance considerations
 */

// Component anatomy data
const componentAnatomy = {
  parts: [
    { id: "trigger", name: "Trigger", description: "Element that opens the dialog", required: true },
    { id: "overlay", name: "Overlay", description: "Background overlay", required: true },
    { id: "content", name: "Content", description: "Main dialog container", required: true },
    { id: "header", name: "Header", description: "Title and description area", required: false },
    { id: "body", name: "Body", description: "Main content area", required: false },
    { id: "footer", name: "Footer", description: "Action buttons area", required: false },
    { id: "close", name: "Close Button", description: "Close dialog button", required: false }
  ]
}

// API reference data
const apiReference = {
  props: [
    { 
      name: "open", 
      type: "boolean", 
      default: "false", 
      description: "Controls the open state of the dialog",
      required: false
    },
    { 
      name: "onOpenChange", 
      type: "(open: boolean) => void", 
      default: "undefined", 
      description: "Callback fired when the open state changes",
      required: false
    },
    { 
      name: "size", 
      type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", 
      default: "'md'", 
      description: "Controls the size of the dialog",
      required: false
    },
    { 
      name: "showCloseButton", 
      type: "boolean", 
      default: "true", 
      description: "Whether to show the close button",
      required: false
    }
  ],
  methods: [
    {
      name: "focus()",
      description: "Programmatically focus the dialog",
      parameters: "none",
      returns: "void"
    },
    {
      name: "close()",
      description: "Programmatically close the dialog", 
      parameters: "none",
      returns: "void"
    }
  ],
  events: [
    {
      name: "onEscapeKeyDown",
      description: "Fired when the escape key is pressed",
      parameters: "KeyboardEvent"
    },
    {
      name: "onInteractOutside", 
      description: "Fired when clicking outside the dialog",
      parameters: "Event"
    }
  ]
}

// Usage guidelines
const usageGuidelines = {
  dos: [
    "Use for important actions that require user attention",
    "Keep content concise and scannable",
    "Provide clear primary and secondary actions",
    "Use appropriate sizing for content",
    "Include descriptive titles and labels"
  ],
  donts: [
    "Don't use for simple confirmations (use AlertDialog instead)",
    "Don't nest dialogs within other dialogs",
    "Don't use without a clear way to close",
    "Don't make dialogs too large on mobile devices",
    "Don't use for non-critical information"
  ]
}

// Accessibility checklist
const accessibilityChecklist = [
  { id: "focus-trap", label: "Focus is trapped within the dialog", status: "pass" },
  { id: "focus-return", label: "Focus returns to trigger when closed", status: "pass" },
  { id: "esc-key", label: "ESC key closes the dialog", status: "pass" },
  { id: "aria-labels", label: "Proper ARIA labels and descriptions", status: "pass" },
  { id: "keyboard-nav", label: "Full keyboard navigation support", status: "pass" },
  { id: "screen-reader", label: "Screen reader announcements", status: "pass" },
  { id: "colour-contrast", label: "Sufficient colour contrast", status: "pass" },
  { id: "touch-targets", label: "44px minimum touch targets", status: "pass" }
]

export default function WorldClassComponentDocs() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copiedCode, setCopiedCode] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const [selectedExample, setSelectedExample] = useState("basic")

  const handleCopyCode = useCallback(async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [])

  const examples = useMemo(() => ({
    basic: {
      title: "Basic Dialog",
      description: "Simple dialog with header and content",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-end space-x-2 mt-6">
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </div>
  </DialogContent>
</Dialog>`
    },
    form: {
      title: "Form Dialog",
      description: "Dialog containing a form with validation",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Add User</Button>
  </DialogTrigger>
  <DialogContent size="lg">
    <DialogHeader>
      <DialogTitle>Add New User</DialogTitle>
      <DialogDescription>
        Create a new user account with the following details.
      </DialogDescription>
    </DialogHeader>
    <form className="space-y-4 mt-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" />
      </div>
      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline" type="button">Cancel</Button>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  </DialogContent>
</Dialog>`
    },
    sizes: {
      title: "Different Sizes",
      description: "Dialog with various size options",
      code: `// Small dialog
<DialogContent size="sm">
  <DialogHeader>
    <DialogTitle>Small Dialog</DialogTitle>
  </DialogHeader>
</DialogContent>

// Large dialog  
<DialogContent size="lg">
  <DialogHeader>
    <DialogTitle>Large Dialog</DialogTitle>
  </DialogHeader>
</DialogContent>

// Full screen dialog
<DialogContent size="full">
  <DialogHeader>
    <DialogTitle>Full Screen Dialog</DialogTitle>
  </DialogHeader>
</DialogContent>`
    }
  }), [])

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* World-Class Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border-b border-slate-800">
          <div className="px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              {/* Quick Value Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Shield className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-slate-100">AAA</div>
                    <div className="text-xs text-slate-400">Accessibility</div>
                    <div className="text-xs text-green-400 mt-1">WCAG 2.1</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Gauge className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-slate-100">98%</div>
                    <div className="text-xs text-slate-400">Performance</div>
                    <div className="text-xs text-blue-400 mt-1">Lighthouse</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-slate-100">15k+</div>
                    <div className="text-xs text-slate-400">Downloads</div>
                    <div className="text-xs text-purple-400 mt-1">This month</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-6 w-6 text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-slate-100">5</div>
                    <div className="text-xs text-slate-400">Sizes</div>
                    <div className="text-xs text-orange-400 mt-1">Responsive</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Value Proposition */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-fuchsia-950 text-fuchsia-300 border-fuchsia-800">
                      <Monitor className="w-3 h-3 mr-1" />
                      Component
                    </Badge>
                    <Badge className="bg-green-950 text-green-300 border-green-800">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Stable
                    </Badge>
                    <Badge className="bg-blue-950 text-blue-300 border-blue-800">
                      <Shield className="w-3 h-3 mr-1" />
                      Accessible
                    </Badge>
                  </div>
                  
                  <h1 className="text-5xl font-bold text-slate-100 leading-tight">
                    Dialog Component
                  </h1>
                  
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    A modal dialog component that interrupts the user with important content and expects a response. 
                    Built with <span className="text-fuchsia-400 font-semibold">accessibility</span>, 
                    <span className="text-purple-400 font-semibold"> performance</span>, and 
                    <span className="text-blue-400 font-semibold"> developer experience</span> in mind.
                  </p>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="border-slate-600 hover:border-fuchsia-500/50 h-auto p-4 justify-start"
                      onClick={() => handleCopyCode(examples.basic.code, 'hero-copy')}
                    >
                      <Copy className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Copy Code</div>
                        <div className="text-xs opacity-80">Basic example</div>
                      </div>
                      {copiedCode === 'hero-copy' && <CheckCircle2 className="h-4 w-4 ml-auto text-green-400" />}
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="border-slate-600 hover:border-blue-500/50 h-auto p-4 justify-start"
                      onClick={() => setShowDialog(true)}
                    >
                      <Play className="h-5 w-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Try Live</div>
                        <div className="text-xs opacity-80">Interactive demo</div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/50">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-slate-200 mb-4">Live Example</h3>
                    <Dialog open={showDialog} onOpenChange={setShowDialog}>
                      <DialogTrigger asChild>
                        <Button size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                          Open Dialog
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Welcome to our Dialog</DialogTitle>
                          <DialogDescription>
                            This is a live example of our Dialog component. It demonstrates proper focus management, 
                            keyboard navigation, and accessibility features.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end space-x-2 mt-6">
                          <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
                          <Button onClick={() => setShowDialog(false)}>Continue</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <p className="text-sm text-slate-400 mt-4">
                      Click to see the component in action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class Documentation Content */}
        <div className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="api">API</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="specs">Design Specs</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* When to Use */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-fuchsia-400" />
                      When to Use
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Use Dialog when:
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li>• Requiring immediate user attention</li>
                          <li>• Collecting user input in a form</li>
                          <li>• Confirming destructive actions</li>
                          <li>• Displaying detailed information</li>
                          <li>• Creating or editing content</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                          <XCircle className="h-4 w-4" />
                          Don't use Dialog when:
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li>• Displaying non-critical information</li>
                          <li>• Simple confirmations (use AlertDialog)</li>
                          <li>• Navigation between pages</li>
                          <li>• Showing tooltips or hints</li>
                          <li>• Displaying loading states</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Component Anatomy */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-400" />
                      Component Anatomy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {componentAnatomy.parts.map((part) => (
                        <div key={part.id} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                          <div>
                            <div className="font-medium text-slate-200">{part.name}</div>
                            <div className="text-sm text-slate-400">{part.description}</div>
                          </div>
                          <Badge variant={part.required ? "default" : "outline"}>
                            {part.required ? "Required" : "Optional"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="examples" className="space-y-8">
                <div className="grid gap-6">
                  {Object.entries(examples).map(([key, example]) => (
                    <Card key={key}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>{example.title}</CardTitle>
                            <CardDescription>{example.description}</CardDescription>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopyCode(example.code, key)}
                          >
                            {copiedCode === key ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                          <pre className="text-sm overflow-x-auto">
                            <code className="text-slate-300">{example.code}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="api" className="space-y-8">
                {/* Props */}
                <Card>
                  <CardHeader>
                    <CardTitle>Props</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-slate-700">
                            <th className="text-left p-3 font-medium">Name</th>
                            <th className="text-left p-3 font-medium">Type</th>
                            <th className="text-left p-3 font-medium">Default</th>
                            <th className="text-left p-3 font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {apiReference.props.map((prop) => (
                            <tr key={prop.name} className="border-b border-slate-800">
                              <td className="p-3 font-mono text-sm text-fuchsia-400">{prop.name}</td>
                              <td className="p-3 font-mono text-sm text-blue-400">{prop.type}</td>
                              <td className="p-3 font-mono text-sm text-slate-400">{prop.default}</td>
                              <td className="p-3 text-sm text-slate-300">{prop.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="accessibility" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      Accessibility Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {accessibilityChecklist.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-slate-200">{item.label}</span>
                          <Badge className="ml-auto bg-green-500/20 text-green-300 border-green-500/30">
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guidelines" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-400 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Do's
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {usageGuidelines.dos.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-400 flex items-center gap-2">
                        <XCircle className="h-5 w-5" />
                        Don'ts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {usageGuidelines.donts.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ruler className="h-5 w-5 text-purple-400" />
                      Design Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-3">Spacing</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li>• Padding: 24px (1.5rem)</li>
                          <li>• Gap between elements: 16px (1rem)</li>
                          <li>• Margin from viewport edge: 16px</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-3">Typography</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li>• Title: 20px, semibold</li>
                          <li>• Description: 14px, regular</li>
                          <li>• Line height: 1.5</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-200 mb-3">Colours</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                          <li>• Background: slate-900/95</li>
                          <li>• Border: slate-700/50</li>
                          <li>• Text: slate-100</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}






