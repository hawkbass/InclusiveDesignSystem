# File Specification: Interactive Playground Page

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `app/playground/interactive/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~950 |
| **Purpose** | Interactive component playground with property controls, code editor, and accessibility testing |

---

## Section 1: Imports and Setup (Lines 1-80)

```tsx
"use client"

import { useState, useMemo, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Copy,
  Check,
  Code,
  Settings,
  Eye,
  Accessibility,
  Smartphone,
  Tablet,
  Monitor,
  Zap,
  ChevronRight,
  Download,
  Mail,
  Plus,
  Trash2,
  Search,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw
} from "lucide-react"
import Link from "next/link"
```

| Import | Purpose |
|--------|---------|
| `useState, useMemo, useEffect` | State management and memoization |
| UI Components | Various UI components for controls and layout |
| Icons | Visual indicators throughout the playground |

---

## Section 2: Component Configuration Data (Lines 82-200)

```tsx
// Available components for playground
const availableComponents = [
  { 
    id: "button",
    name: "Button",
    description: "Clickable element for actions",
    props: [
      { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline", "ghost", "link"], default: "default" },
      { name: "size", type: "select", options: ["sm", "default", "lg", "icon"], default: "default" },
      { name: "disabled", type: "boolean", default: false },
      { name: "children", type: "string", default: "Click me" },
    ]
  },
  {
    id: "badge",
    name: "Badge",
    description: "Small status indicator",
    props: [
      { name: "variant", type: "select", options: ["default", "secondary", "destructive", "outline"], default: "default" },
      { name: "children", type: "string", default: "Badge" },
    ]
  },
  {
    id: "input",
    name: "Input",
    description: "Text input field",
    props: [
      { name: "type", type: "select", options: ["text", "email", "password", "number"], default: "text" },
      { name: "placeholder", type: "string", default: "Enter text..." },
      { name: "disabled", type: "boolean", default: false },
    ]
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Boolean selection control",
    props: [
      { name: "checked", type: "boolean", default: false },
      { name: "disabled", type: "boolean", default: false },
    ]
  },
  {
    id: "switch",
    name: "Switch",
    description: "Toggle on/off control",
    props: [
      { name: "checked", type: "boolean", default: false },
      { name: "disabled", type: "boolean", default: false },
    ]
  },
]

// Accessibility checks per component
const accessibilityChecks = {
  button: [
    { name: "Contrast Ratio", status: "pass", value: "4.5:1", level: "AA" },
    { name: "Focus Ring", status: "pass", value: "Visible" },
    { name: "Touch Target", status: "pass", value: "44×40px" },
    { name: "Keyboard Accessible", status: "pass", value: "Enter, Space" },
    { name: "Screen Reader", status: "pass", value: "button, Click me" },
  ],
  badge: [
    { name: "Contrast Ratio", status: "pass", value: "4.5:1", level: "AA" },
    { name: "Screen Reader", status: "pass", value: "Badge" },
  ],
  input: [
    { name: "Focus Ring", status: "pass", value: "Visible" },
    { name: "Touch Target", status: "pass", value: "44×40px" },
    { name: "Label Association", status: "warn", value: "Add label" },
    { name: "Placeholder Contrast", status: "pass", value: "3.1:1" },
  ],
  checkbox: [
    { name: "Focus Ring", status: "pass", value: "Visible" },
    { name: "Touch Target", status: "warn", value: "20×20px" },
    { name: "Label Association", status: "warn", value: "Add label" },
  ],
  switch: [
    { name: "Focus Ring", status: "pass", value: "Visible" },
    { name: "Contrast Ratio", status: "pass", value: "5.2:1" },
    { name: "State Indication", status: "pass", value: "Visual + position" },
  ],
}

// Bundle sizes (simulated)
const bundleSizes = {
  button: "2.4kb",
  badge: "0.8kb",
  input: "1.2kb",
  checkbox: "1.1kb",
  switch: "1.3kb",
}
```

| Data Structure | Purpose |
|----------------|---------|
| `availableComponents` | List of components with their props and defaults |
| `accessibilityChecks` | Pre-calculated accessibility info per component |
| `bundleSizes` | Performance data per component |

**Why Pre-defined Prop Configs?**
- Ensures consistent playground experience
- Allows type-safe control generation
- Makes accessibility checks predictable

---

## Section 3: Component Definition and State (Lines 202-250)

```tsx
export default function InteractivePlayground() {
  const [selectedComponent, setSelectedComponent] = useState("button")
  const [propValues, setPropValues] = useState<Record<string, any>>({})
  const [copiedCode, setCopiedCode] = useState(false)
  const [activeViewport, setActiveViewport] = useState<"mobile" | "tablet" | "desktop">("desktop")
  const [mounted, setMounted] = useState(false)

  // Initialize prop values when component changes
  useEffect(() => {
    const component = availableComponents.find(c => c.id === selectedComponent)
    if (component) {
      const defaults: Record<string, any> = {}
      component.props.forEach(prop => {
        defaults[prop.name] = prop.default
      })
      setPropValues(defaults)
    }
  }, [selectedComponent])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Get current component config
  const currentComponent = useMemo(() => 
    availableComponents.find(c => c.id === selectedComponent),
    [selectedComponent]
  )

  // Generate code based on current props
  const generatedCode = useMemo(() => {
    if (!currentComponent) return ""
    
    const componentName = currentComponent.name
    const propsString = Object.entries(propValues)
      .filter(([key, value]) => {
        const propDef = currentComponent.props.find(p => p.name === key)
        return value !== propDef?.default && key !== "children"
      })
      .map(([key, value]) => {
        if (typeof value === "boolean") return value ? key : null
        if (typeof value === "string") return `${key}="${value}"`
        return `${key}={${value}}`
      })
      .filter(Boolean)
      .join(" ")

    const childrenProp = propValues.children || ""
    const propsWithSpace = propsString ? ` ${propsString}` : ""
    
    if (childrenProp) {
      return `import { ${componentName} } from "@/components/ui/${selectedComponent}"

<${componentName}${propsWithSpace}>${childrenProp}</${componentName}>`
    }
    return `import { ${componentName} } from "@/components/ui/${selectedComponent}"

<${componentName}${propsWithSpace} />`
  }, [currentComponent, propValues, selectedComponent])

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const handleResetProps = () => {
    const component = availableComponents.find(c => c.id === selectedComponent)
    if (component) {
      const defaults: Record<string, any> = {}
      component.props.forEach(prop => {
        defaults[prop.name] = prop.default
      })
      setPropValues(defaults)
    }
  }

  if (!mounted) return null
```

| State | Purpose |
|-------|---------|
| `selectedComponent` | Currently selected component ID |
| `propValues` | Current values for all props |
| `copiedCode` | Tracks if code was just copied |
| `activeViewport` | Current viewport size preview |
| `mounted` | Prevents hydration mismatch |

**Key Logic Explained:**

1. **Initialize defaults on component change:**
   - When user selects a new component, reset all prop values to defaults
   - This ensures clean state for each component

2. **Code generation:**
   - Filter out props that are at their default values
   - Generate clean, minimal code
   - Include import statement

---

## Section 4: Page Layout (Lines 252-400)

```tsx
  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="px-6 lg:px-12 py-8 border-b border-border/50">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/design-system" className="hover:text-foreground transition-colors">Design System</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/playground" className="hover:text-foreground transition-colors">Playground</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Interactive</span>
              </nav>
              
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Interactive Playground</h1>
                  <p className="text-muted-foreground mt-1">
                    Experiment with components, customise props, and copy production-ready code.
                  </p>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Live Preview
                </Badge>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 px-6 lg:px-12 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                
                {/* Component Selector Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="bg-card/30 border-border/50 sticky top-8">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Components</CardTitle>
                      <CardDescription>Select a component to customise</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-1 p-3">
                        {availableComponents.map(component => (
                          <button
                            key={component.id}
                            onClick={() => setSelectedComponent(component.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                              selectedComponent === component.id
                                ? "bg-primary/20 text-foreground"
                                : "hover:bg-card text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <div className="font-medium text-sm">{component.name}</div>
                            <div className="text-xs opacity-70">{component.description}</div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Main Panel */}
                <div className="lg:col-span-3 space-y-6">
                  {/* Preview Panel */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Eye className="h-5 w-5 text-blue-400" />
                          Live Preview
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          {/* Viewport Switcher */}
                          <div className="flex items-center gap-1 bg-card/50 rounded-lg p-1 border border-border/50">
                            <Button
                              size="icon"
                              variant={activeViewport === "mobile" ? "default" : "ghost"}
                              className="h-8 w-8"
                              onClick={() => setActiveViewport("mobile")}
                            >
                              <Smartphone className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant={activeViewport === "tablet" ? "default" : "ghost"}
                              className="h-8 w-8"
                              onClick={() => setActiveViewport("tablet")}
                            >
                              <Tablet className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant={activeViewport === "desktop" ? "default" : "ghost"}
                              className="h-8 w-8"
                              onClick={() => setActiveViewport("desktop")}
                            >
                              <Monitor className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Preview Container with viewport sizing */}
                      <div 
                        className={`mx-auto bg-background border border-border rounded-lg p-8 flex items-center justify-center min-h-[200px] transition-all ${
                          activeViewport === "mobile" ? "max-w-[375px]" :
                          activeViewport === "tablet" ? "max-w-[768px]" : "w-full"
                        }`}
                      >
                        {/* Render Component Based on Selection */}
                        {selectedComponent === "button" && (
                          <Button
                            variant={propValues.variant as any}
                            size={propValues.size as any}
                            disabled={propValues.disabled}
                          >
                            {propValues.children || "Click me"}
                          </Button>
                        )}
                        {selectedComponent === "badge" && (
                          <Badge variant={propValues.variant as any}>
                            {propValues.children || "Badge"}
                          </Badge>
                        )}
                        {selectedComponent === "input" && (
                          <Input
                            type={propValues.type}
                            placeholder={propValues.placeholder}
                            disabled={propValues.disabled}
                            className="max-w-xs"
                          />
                        )}
                        {selectedComponent === "checkbox" && (
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={propValues.checked}
                              disabled={propValues.disabled}
                            />
                            <Label>Checkbox label</Label>
                          </div>
                        )}
                        {selectedComponent === "switch" && (
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={propValues.checked}
                              disabled={propValues.disabled}
                            />
                            <Label>Switch label</Label>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center mt-3 text-xs text-muted-foreground">
                        {activeViewport === "mobile" && "Mobile: 375px"}
                        {activeViewport === "tablet" && "Tablet: 768px"}
                        {activeViewport === "desktop" && "Desktop: Full width"}
                      </div>
                    </CardContent>
                  </Card>
```

| Section | Purpose |
|---------|---------|
| **Header** | Page title and breadcrumb |
| **Component Selector** | Sidebar to choose component |
| **Preview Panel** | Live render with viewport switcher |

**Viewport Logic:**
```tsx
className={`... ${
  activeViewport === "mobile" ? "max-w-[375px]" :
  activeViewport === "tablet" ? "max-w-[768px]" : "w-full"
}`}
```
This constrains the preview container to simulate different screen sizes.

---

## Section 5: Tab Panels (Lines 402-700)

```tsx
                  {/* Control Tabs */}
                  <Card className="bg-card/30 border-border/50">
                    <Tabs defaultValue="properties">
                      <CardHeader className="pb-0">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="properties" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Properties
                          </TabsTrigger>
                          <TabsTrigger value="code" className="flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Code
                          </TabsTrigger>
                          <TabsTrigger value="accessibility" className="flex items-center gap-2">
                            <Accessibility className="h-4 w-4" />
                            A11y
                          </TabsTrigger>
                          <TabsTrigger value="metrics" className="flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Metrics
                          </TabsTrigger>
                        </TabsList>
                      </CardHeader>
                      
                      <CardContent className="pt-6">
                        {/* Properties Tab */}
                        <TabsContent value="properties" className="mt-0">
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-foreground">Component Properties</h3>
                              <Button size="sm" variant="ghost" onClick={handleResetProps}>
                                <RotateCcw className="h-4 w-4 mr-2" />
                                Reset
                              </Button>
                            </div>
                            
                            <div className="grid gap-4">
                              {currentComponent?.props.map(prop => (
                                <div key={prop.name} className="space-y-2">
                                  <Label htmlFor={prop.name} className="text-sm capitalize">
                                    {prop.name}
                                  </Label>
                                  
                                  {/* Select Control for enum types */}
                                  {prop.type === "select" && (
                                    <Select
                                      value={propValues[prop.name] || prop.default}
                                      onValueChange={(value) => setPropValues(prev => ({ ...prev, [prop.name]: value }))}
                                    >
                                      <SelectTrigger id={prop.name}>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {prop.options?.map(option => (
                                          <SelectItem key={option} value={option}>
                                            {option}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  )}
                                  
                                  {/* Switch Control for boolean types */}
                                  {prop.type === "boolean" && (
                                    <div className="flex items-center gap-2">
                                      <Switch
                                        id={prop.name}
                                        checked={propValues[prop.name] || false}
                                        onCheckedChange={(checked) => setPropValues(prev => ({ ...prev, [prop.name]: checked }))}
                                      />
                                      <span className="text-sm text-muted-foreground">
                                        {propValues[prop.name] ? "true" : "false"}
                                      </span>
                                    </div>
                                  )}
                                  
                                  {/* Input Control for string types */}
                                  {prop.type === "string" && (
                                    <Input
                                      id={prop.name}
                                      value={propValues[prop.name] || ""}
                                      onChange={(e) => setPropValues(prev => ({ ...prev, [prop.name]: e.target.value }))}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        {/* Code Tab */}
                        <TabsContent value="code" className="mt-0">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-foreground">Generated Code</h3>
                              <Button size="sm" variant="outline" onClick={handleCopyCode}>
                                {copiedCode ? (
                                  <>
                                    <Check className="h-4 w-4 mr-2 text-green-400" />
                                    Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-4 w-4 mr-2" />
                                    Copy Code
                                  </>
                                )}
                              </Button>
                            </div>
                            
                            <pre className="bg-slate-950 text-slate-300 p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{generatedCode}</code>
                            </pre>
                            
                            <p className="text-xs text-muted-foreground">
                              Copy this code and paste it into your project. Import statement included.
                            </p>
                          </div>
                        </TabsContent>

                        {/* Accessibility Tab */}
                        <TabsContent value="accessibility" className="mt-0">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-foreground">Accessibility Checks</h3>
                              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                                {accessibilityChecks[selectedComponent as keyof typeof accessibilityChecks]?.filter(c => c.status === "pass").length || 0}
                                /{accessibilityChecks[selectedComponent as keyof typeof accessibilityChecks]?.length || 0} passing
                              </Badge>
                            </div>
                            
                            <div className="space-y-3">
                              {accessibilityChecks[selectedComponent as keyof typeof accessibilityChecks]?.map((check, idx) => (
                                <div 
                                  key={idx} 
                                  className={`flex items-center justify-between p-3 rounded-lg border ${
                                    check.status === "pass" 
                                      ? "bg-green-500/5 border-green-500/20"
                                      : check.status === "warn"
                                      ? "bg-amber-500/5 border-amber-500/20"
                                      : "bg-red-500/5 border-red-500/20"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {check.status === "pass" && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                                    {check.status === "warn" && <AlertTriangle className="h-5 w-5 text-amber-400" />}
                                    {check.status === "fail" && <XCircle className="h-5 w-5 text-red-400" />}
                                    <div>
                                      <div className="text-sm font-medium text-foreground">{check.name}</div>
                                      <div className="text-xs text-muted-foreground">{check.value}</div>
                                    </div>
                                  </div>
                                  {check.level && (
                                    <Badge variant="outline" className="text-xs">
                                      {check.level}
                                    </Badge>
                                  )}
                                </div>
                              ))}
                            </div>
                            
                            <p className="text-xs text-muted-foreground">
                              Accessibility checks are based on WCAG 2.1 guidelines. Warnings suggest improvements but may not be required.
                            </p>
                          </div>
                        </TabsContent>

                        {/* Metrics Tab */}
                        <TabsContent value="metrics" className="mt-0">
                          <div className="space-y-4">
                            <h3 className="text-sm font-medium text-foreground">Performance Metrics</h3>
                            
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                                <div className="text-2xl font-bold text-foreground">
                                  {bundleSizes[selectedComponent as keyof typeof bundleSizes] || "N/A"}
                                </div>
                                <div className="text-xs text-muted-foreground">Bundle Size (gzipped)</div>
                              </div>
                              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                                <div className="text-2xl font-bold text-foreground">
                                  2.3ms
                                </div>
                                <div className="text-xs text-muted-foreground">Avg Render Time</div>
                              </div>
                              <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                                <div className="text-2xl font-bold text-foreground">
                                  0
                                </div>
                                <div className="text-xs text-muted-foreground">External Dependencies</div>
                              </div>
                            </div>
                            
                            <div className="p-4 bg-card/50 rounded-lg border border-border/50">
                              <h4 className="text-sm font-medium text-foreground mb-3">Browser Support</h4>
                              <div className="flex flex-wrap gap-2">
                                {["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"].map(browser => (
                                  <Badge key={browser} variant="outline" className="text-xs">
                                    <CheckCircle2 className="h-3 w-3 mr-1 text-green-400" />
                                    {browser}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </CardContent>
                    </Tabs>
                  </Card>
```

| Tab | Content |
|-----|---------|
| **Properties** | Dynamic controls based on component props |
| **Code** | Generated, copyable code |
| **Accessibility** | WCAG compliance checks |
| **Metrics** | Bundle size, render time, browser support |

**Dynamic Property Controls:**
```tsx
{prop.type === "select" && <Select ... />}
{prop.type === "boolean" && <Switch ... />}
{prop.type === "string" && <Input ... />}
```
This renders the appropriate control type based on the prop definition.

---

## Section 6: Closing Tags (Lines 702-750)

```tsx
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
```

---

## Verification Checklist

After implementing this file:

- [ ] Page loads at `/playground/interactive`
- [ ] Component selector shows all 5 components
- [ ] Selecting a component updates the preview
- [ ] Property controls match the component's props
- [ ] Changing props updates the preview immediately
- [ ] Code tab shows correct generated code
- [ ] Copy button copies code to clipboard
- [ ] Accessibility tab shows checks for each component
- [ ] Viewport switcher changes preview width
- [ ] Metrics tab shows bundle size and render time
- [ ] Reset button returns props to defaults
- [ ] No console errors
- [ ] No linter errors

---

## References Used

### Design Systems
1. **Shopify Polaris** - Property controls panel
2. **Chakra UI** - Live code editor
3. **Storybook** - Viewport switcher, controls addons
4. **Radix UI** - Accessibility panel

### Standards
1. **WCAG 2.1** - Accessibility checks

---

**End of Specification**

