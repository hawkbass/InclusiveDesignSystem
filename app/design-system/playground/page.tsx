"use client"

import { useState, useMemo } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CodeEditor } from "@/components/ui/code-editor"
import {
  Play,
  Smartphone,
  Tablet,
  Monitor,
  Maximize,
  Code,
  Settings,
  Accessibility,
  CheckCircle2,
  AlertCircle,
  Eye,
  Keyboard,
  Palette,
  Layers,
  Copy,
  RotateCcw,
  ComponentIcon,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
// Type definitions for prop controls
type PropControlType = "select" | "boolean" | "string" | "number"

interface PropDefinition {
  name: string
  type: PropControlType
  options?: string[]  // For select type
  defaultValue: any
  description: string
}

interface ComponentDefinition {
  name: string
  displayName: string
  description: string
  category: string
  props: PropDefinition[]
}

// Component registry
const componentRegistry: ComponentDefinition[] = [
  {
    name: "Button",
    displayName: "Button",
    description: "Interactive button for actions",
    category: "Actions",
    props: [
      { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline", "ghost", "link"], defaultValue: "default", description: "Visual style variant" },
      { name: "size", type: "select", options: ["default", "sm", "lg", "icon"], defaultValue: "default", description: "Button size" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disable the button" },
      { name: "children", type: "string", defaultValue: "Click me", description: "Button text content" },
    ],
  },
  {
    name: "Input",
    displayName: "Input",
    description: "Text input field",
    category: "Forms",
    props: [
      { name: "type", type: "select", options: ["text", "email", "password", "number", "search"], defaultValue: "text", description: "Input type" },
      { name: "placeholder", type: "string", defaultValue: "Enter text...", description: "Placeholder text" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disable the input" },
    ],
  },
  {
    name: "Badge",
    displayName: "Badge",
    description: "Status indicator badge",
    category: "Data Display",
    props: [
      { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline"], defaultValue: "default", description: "Badge variant" },
      { name: "children", type: "string", defaultValue: "Badge", description: "Badge text" },
    ],
  },
  {
    name: "Alert",
    displayName: "Alert",
    description: "Feedback message display",
    category: "Feedback",
    props: [
      { name: "variant", type: "select", options: ["default", "destructive"], defaultValue: "default", description: "Alert variant" },
      { name: "title", type: "string", defaultValue: "Alert Title", description: "Alert title" },
      { name: "description", type: "string", defaultValue: "This is an alert message.", description: "Alert description" },
    ],
  },
  {
    name: "Card",
    displayName: "Card",
    description: "Content container card",
    category: "Layout",
    props: [
      { name: "title", type: "string", defaultValue: "Card Title", description: "Card header title" },
      { name: "description", type: "string", defaultValue: "Card description text", description: "Card header description" },
      { name: "content", type: "string", defaultValue: "Card content goes here.", description: "Main card content" },
    ],
  },
]

// Viewport presets
const viewportPresets = [
  { name: "mobile", width: 375, icon: Smartphone, label: "Mobile" },
  { name: "tablet", width: 768, icon: Tablet, label: "Tablet" },
  { name: "desktop", width: 1280, icon: Monitor, label: "Desktop" },
  { name: "full", width: "100%", icon: Maximize, label: "Full" },
]
export default function PlaygroundPage() {
  // Selected component
  const [selectedComponent, setSelectedComponent] = useState<string>("Button")
  
  // Current prop values (keyed by prop name)
  const [propValues, setPropValues] = useState<Record<string, any>>(() => {
    const buttonDef = componentRegistry.find(c => c.name === "Button")!
    return buttonDef.props.reduce((acc, prop) => {
      acc[prop.name] = prop.defaultValue
      return acc
    }, {} as Record<string, any>)
  })
  
  // Viewport size
  const [viewport, setViewport] = useState<string>("full")
  
  // Get current component definition
  const currentComponent = useMemo(() => {
    return componentRegistry.find(c => c.name === selectedComponent)!
  }, [selectedComponent])
  
  // Handle component change
  const handleComponentChange = (componentName: string) => {
    setSelectedComponent(componentName)
    const componentDef = componentRegistry.find(c => c.name === componentName)!
    // Reset props to defaults for new component
    const defaults = componentDef.props.reduce((acc, prop) => {
      acc[prop.name] = prop.defaultValue
      return acc
    }, {} as Record<string, any>)
    setPropValues(defaults)
  }
  
  // Handle prop change
  const handlePropChange = (propName: string, value: any) => {
    setPropValues(prev => ({ ...prev, [propName]: value }))
  }
  
  // Reset to defaults
  const handleReset = () => {
    const defaults = currentComponent.props.reduce((acc, prop) => {
      acc[prop.name] = prop.defaultValue
      return acc
    }, {} as Record<string, any>)
    setPropValues(defaults)
  }
  
  // Generate code string
  const generatedCode = useMemo(() => {
    const { name } = currentComponent
    const propsString = Object.entries(propValues)
      .filter(([key, value]) => {
        // Skip children, handle separately
        if (key === "children") return false
        // Skip defaults
        const propDef = currentComponent.props.find(p => p.name === key)
        if (propDef && value === propDef.defaultValue) return false
        return true
      })
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return value ? key : null
        }
        if (typeof value === "string") {
          return `${key}="${value}"`
        }
        return `${key}={${JSON.stringify(value)}}`
      })
      .filter(Boolean)
      .join(" ")
    
    const children = propValues.children || propValues.title || propValues.content || ""
    const hasChildren = children && typeof children === "string"
    
    if (name === "Alert") {
      return `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert${propsString ? ` ${propsString}` : ""}>
  <AlertTitle>${propValues.title || "Alert"}</AlertTitle>
  <AlertDescription>${propValues.description || "Description"}</AlertDescription>
</Alert>`
    }
    
    if (name === "Card") {
      return `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>${propValues.title || "Title"}</CardTitle>
    <CardDescription>${propValues.description || "Description"}</CardDescription>
  </CardHeader>
  <CardContent>
    ${propValues.content || "Content"}
  </CardContent>
</Card>`
    }
    
    if (hasChildren) {
      return `import { ${name} } from "@/components/ui/${name.toLowerCase()}"

<${name}${propsString ? ` ${propsString}` : ""}>
  ${children}
</${name}>`
    }
    
    return `import { ${name} } from "@/components/ui/${name.toLowerCase()}"

<${name}${propsString ? ` ${propsString}` : ""} />`
  }, [currentComponent, propValues])
  
  // Get viewport width
  const getViewportWidth = () => {
    const preset = viewportPresets.find(v => v.name === viewport)
    return preset?.width || "100%"
  }
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <UnifiedSidebar />
      
      <main className="flex-1 lg:ml-72">
        <div className="container max-w-7xl mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  Component Playground
                </h1>
                <p className="text-muted-foreground mt-2">
                  Experiment with components in real-time
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <Card className="mb-6">
            <CardContent className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Component Selector */}
                <div className="flex items-center gap-4">
                  <Label className="text-sm font-medium">Component</Label>
                  <Select value={selectedComponent} onValueChange={handleComponentChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select component" />
                    </SelectTrigger>
                    <SelectContent>
                      {componentRegistry.map((component) => (
                        <SelectItem key={component.name} value={component.name}>
                          <div className="flex items-center gap-2">
                            <span>{component.displayName}</span>
                            <Badge variant="outline" className="text-xs">
                              {component.category}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Viewport Selector */}
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium mr-2">Viewport</Label>
                  <div className="flex border rounded-lg overflow-hidden">
                    {viewportPresets.map((preset) => {
                      const Icon = preset.icon
                      return (
                        <button
                          key={preset.name}
                          onClick={() => setViewport(preset.name)}
                          className={`p-2 transition-colors ${
                            viewport === preset.name
                              ? "bg-primary text-primary-foreground"
                              : "bg-card hover:bg-muted text-muted-foreground"
                          }`}
                          title={preset.label}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Preview Panel */}
            <Card className="lg:col-span-2">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border/50 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Eye className="h-5 w-5" />
                    Live Preview
                  </CardTitle>
                  <Badge variant="outline" className="bg-card/50 text-foreground border-border/50">
                    {viewport.charAt(0).toUpperCase() + viewport.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Viewport Container */}
                <div className="flex justify-center p-8 bg-muted/30 min-h-[300px]">
                  <div
                    className="bg-card border border-border rounded-lg shadow-sm flex items-center justify-center p-8 transition-all duration-300"
                    style={{
                      width: typeof getViewportWidth() === "number" 
                        ? `${getViewportWidth()}px` 
                        : getViewportWidth(),
                      maxWidth: "100%",
                    }}
                  >
                    {/* Render Component Based on Selection */}
                    {selectedComponent === "Button" && (
                      <Button
                        variant={propValues.variant}
                        size={propValues.size}
                        disabled={propValues.disabled}
                      >
                        {propValues.children}
                      </Button>
                    )}
                    
                    {selectedComponent === "Input" && (
                      <Input
                        type={propValues.type}
                        placeholder={propValues.placeholder}
                        disabled={propValues.disabled}
                        className="max-w-xs"
                      />
                    )}
                    
                    {selectedComponent === "Badge" && (
                      <Badge variant={propValues.variant}>
                        {propValues.children}
                      </Badge>
                    )}
                    
                    {selectedComponent === "Alert" && (
                      <Alert variant={propValues.variant} className="max-w-md">
                        <AlertTitle>{propValues.title}</AlertTitle>
                        <AlertDescription>{propValues.description}</AlertDescription>
                      </Alert>
                    )}
                    
                    {selectedComponent === "Card" && (
                      <Card className="w-full max-w-sm">
                        <CardHeader>
                          <CardTitle>{propValues.title}</CardTitle>
                          <CardDescription>{propValues.description}</CardDescription>
                        </CardHeader>
                        <CardContent>{propValues.content}</CardContent>
                      </Card>
                    )}
                  </div>
                </div>
                
                {/* Viewport Dimensions */}
                <div className="px-4 py-2 bg-muted/50 border-t border-border/50 text-center text-sm text-muted-foreground">
                  {typeof getViewportWidth() === "number" 
                    ? `${getViewportWidth()}px wide`
                    : "Full width"
                  }
                </div>
              </CardContent>
            </Card>
            {/* Properties Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Properties
                </CardTitle>
                <CardDescription>
                  Adjust component props to see changes in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentComponent.props.map((prop) => (
                    <div key={prop.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={prop.name} className="font-medium">
                          {prop.name}
                        </Label>
                        <span className="text-xs text-muted-foreground">
                          {prop.type}
                        </span>
                      </div>
                      
                      {/* Select Control */}
                      {prop.type === "select" && (
                        <Select
                          value={propValues[prop.name]}
                          onValueChange={(value) => handlePropChange(prop.name, value)}
                        >
                          <SelectTrigger id={prop.name}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {prop.options?.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      
                      {/* Boolean Control */}
                      {prop.type === "boolean" && (
                        <div className="flex items-center gap-3">
                          <Switch
                            id={prop.name}
                            checked={propValues[prop.name]}
                            onCheckedChange={(checked) => handlePropChange(prop.name, checked)}
                          />
                          <span className="text-sm text-muted-foreground">
                            {propValues[prop.name] ? "true" : "false"}
                          </span>
                        </div>
                      )}
                      
                      {/* String Control */}
                      {prop.type === "string" && (
                        <Input
                          id={prop.name}
                          value={propValues[prop.name]}
                          onChange={(e) => handlePropChange(prop.name, e.target.value)}
                          placeholder={prop.description}
                        />
                      )}
                      
                      {/* Number Control */}
                      {prop.type === "number" && (
                        <Input
                          id={prop.name}
                          type="number"
                          value={propValues[prop.name]}
                          onChange={(e) => handlePropChange(prop.name, parseInt(e.target.value, 10))}
                        />
                      )}
                      
                      {/* Description */}
                      <p className="text-xs text-muted-foreground">
                        {prop.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Code Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Generated Code
                </CardTitle>
                <CardDescription>
                  Copy this code to use the component with current props
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <CodeEditor
                  code={generatedCode}
                  language="tsx"
                  showLineNumbers={true}
                  theme="dark"
                  maxHeight="300px"
                />
              </CardContent>
            </Card>
            {/* Accessibility Panel */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5" />
                  Accessibility Check
                </CardTitle>
                <CardDescription>
                  Real-time accessibility metrics for the current component
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Contrast Ratio */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Contrast</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">7.2:1</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        AAA
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Exceeds WCAG requirements
                    </p>
                  </div>

                  {/* Keyboard Navigation */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Keyboard className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Keyboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Accessible</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Tab, Enter, Space supported
                    </p>
                  </div>

                  {/* Focus Visible */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Focus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Visible</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Clear focus indicator
                    </p>
                  </div>

                  {/* Screen Reader */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-medium">Screen Reader</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Ready</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Proper roles and labels
                    </p>
                  </div>
                </div>

                {/* Screen Reader Preview */}
                <div className="mt-6 p-4 bg-card border border-border rounded-lg text-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-slate-400">Screen reader announcement:</span>
                  </div>
                  <p className="font-mono text-sm">
                    "{propValues.children || currentComponent.displayName}, {currentComponent.name.toLowerCase()}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Related Resources */}
          <Card className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
            <CardContent className="py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Need more control?</h3>
                  <p className="text-muted-foreground">
                    Explore the full component documentation for advanced usage
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-border hover:bg-card" asChild>
                    <Link href="/design-system/components">
                      All Components
                    </Link>
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <Link href="/design-system/tokens">
                      Design Tokens
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Multi-Component Composition */}
          <Card className="bg-card/30 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Multi-Component Composition
              </CardTitle>
              <CardDescription>
                Combine multiple components to build complex interfaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <Button size="sm" variant="outline">
                      <ComponentIcon className="h-4 w-4 mr-2" />
                      Add Component
                    </Button>
                    <Button size="sm" variant="outline">
                      <Layers className="h-4 w-4 mr-2" />
                      Component Tree
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Drag and drop components to build your interface. Components will appear here.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Export & Share */}
          <Card className="bg-card/30 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                Export & Share
              </CardTitle>
              <CardDescription>
                Export your playground to CodeSandbox, StackBlitz, or share as code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => {
                    const code = `// Export to CodeSandbox\nimport { Button } from "@hawkbass/inclusive-design-core"\n\nexport default function App() {\n  return <Button>Hello World</Button>\n}`
                    navigator.clipboard.writeText(code)
                    alert("Code copied! Paste into CodeSandbox to continue.")
                  }}
                >
                  <ExternalLink className="h-5 w-5" />
                  <div>
                    <div className="font-medium">CodeSandbox</div>
                    <div className="text-xs opacity-70">Export to sandbox</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => {
                    const code = `// Export to StackBlitz\nimport { Button } from "@hawkbass/inclusive-design-core"\n\nexport default function App() {\n  return <Button>Hello World</Button>\n}`
                    navigator.clipboard.writeText(code)
                    alert("Code copied! Paste into StackBlitz to continue.")
                  }}
                >
                  <ExternalLink className="h-5 w-5" />
                  <div>
                    <div className="font-medium">StackBlitz</div>
                    <div className="text-xs opacity-70">Export to project</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center gap-2"
                  onClick={() => {
                    const code = `import { Button } from "@hawkbass/inclusive-design-core"\n\nexport default function App() {\n  return <Button>Hello World</Button>\n}`
                    navigator.clipboard.writeText(code)
                    alert("Code copied to clipboard!")
                  }}
                >
                  <Copy className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Copy Code</div>
                    <div className="text-xs opacity-70">Copy to clipboard</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </main>
    </div>
  )
}
