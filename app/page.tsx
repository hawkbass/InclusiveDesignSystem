"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  ArrowRight,
  ComponentIcon,
  Palette,
  Code2,
  Shield,
  Zap,
  Star,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Download,
  Copy,
  ExternalLink,
  Sparkles,
  Globe,
  Target,
  Gauge,
  Beaker,
  BarChart3,
  Eye,
  Users,
  Heart,
  Lightbulb,
  Monitor,
  Smartphone,
  Tablet
} from "lucide-react"
import Link from "next/link"

// Elite Component Playground - UX-First Interactive Development Environment
function ComponentPlayground() {
  const [selectedComponent, setSelectedComponent] = useState("Button")
  const [demoVariant, setDemoVariant] = useState("default")
  const [demoSize, setDemoSize] = useState("default")
  const [demoState, setDemoState] = useState("default")
  const [customProps, setCustomProps] = useState("")
  const [customContent, setCustomContent] = useState("")
  const [copied, setCopied] = useState(false)
  const [exportFormat, setExportFormat] = useState("react")
  const [viewMode, setViewMode] = useState("preview")
  const [darkMode, setDarkMode] = useState(true)
  const [showAccessibility, setShowAccessibility] = useState(false)
  const [showPerformance, setShowPerformance] = useState(false)
  const [responsiveView, setResponsiveView] = useState("desktop")

  const components = {
    Button: {
      variants: ["default", "secondary", "outline", "ghost", "destructive", "link"],
      sizes: ["xs", "sm", "default", "lg", "xl"],
      states: ["default", "hover", "active", "disabled", "loading", "focus"],
      props: ["disabled", "loading", "asChild", "fullWidth"],
      accessibility: {
        role: "button",
        ariaLabel: "Interactive button with full keyboard and screen reader support",
        keyboardShortcuts: ["Enter", "Space"],
        contrast: "AAA",
        focusIndicator: "2px outline with high contrast"
      },
      performance: {
        bundleSize: "2.1kb (gzipped)",
        renderTime: "< 1ms",
        reRenders: "Optimized with React.memo",
        interactions: "Hardware accelerated"
      },
      code: {
        react: `<Button 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}className="transition-all duration-200 hover:scale-105"
>
  ${demoState === 'loading' ? '<Loader2 className="mr-2 h-4 w-4 animate-spin" />' : '<Sparkles className="mr-2 h-4 w-4" />'}
  ${customContent || 'Enhanced Button'}
</Button>`,
        vue: `<Button 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `:state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="transition-all duration-200 hover:scale-105"
>
  <template #icon>
    ${demoState === 'loading' ? '<Loader2 class="mr-2 h-4 w-4 animate-spin" />' : '<Sparkles class="mr-2 h-4 w-4" />'}
  </template>
  ${customContent || 'Enhanced Button'}
</Button>`,
        angular: `<button 
  [variant]="${demoVariant}" 
  [size]="${demoSize}"
  ${demoState !== 'default' ? `[state]="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="inclusive-button transition-all duration-200 hover:scale-105"
  [attr.aria-label]="buttonLabel"
  [disabled]="isDisabled"
>
  <i class="${demoState === 'loading' ? 'loader-icon animate-spin' : 'sparkles-icon'} mr-2"></i>
  ${customContent || 'Enhanced Button'}
</button>`,
        css: `.inclusive-button {
  --button-variant: ${demoVariant};
  --button-size: ${demoSize};
  --animation-duration: 0.2s;
  
  display: inline-flex;
  align-items: centre;
  justify-content: centre;
  gap: 0.5rem;
  
  border-radius: var(--radius-${demoSize});
  font-weight: 500;
  font-size: var(--text-${demoSize});
  padding: var(--padding-${demoSize});
  
  background: var(--colour-${demoVariant});
  colour: var(--colour-${demoVariant}-foreground);
  border: var(--border-${demoVariant});
  
  transition: all var(--animation-duration) ease-in-out;
  transform-origin: centre;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-${demoVariant}-hover);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus-visible {
    outline: 2px solid var(--focus-ring);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}`
      }
    },
    Badge: {
      variants: ["default", "secondary", "outline", "destructive", "success", "warning"],
      sizes: ["xs", "sm", "default", "lg"],
      states: ["default", "hover", "active", "pulse", "glow"],
      props: ["dot", "pill", "removable", "interactive"],
      accessibility: {
        role: "status",
        ariaLabel: "Status indicator badge",
        keyboardShortcuts: ["Tab (if interactive)"],
        contrast: "AAA",
        focusIndicator: "High contrast ring for interactive badges"
      },
      performance: {
        bundleSize: "1.2kb (gzipped)",
        renderTime: "< 0.5ms",
        reRenders: "Pure component optimisation",
        interactions: "CSS-only animations"
      },
      code: {
        react: `<Badge 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}className="${demoState === 'pulse' ? 'animate-pulse' : demoState === 'glow' ? 'animate-ping' : ''}"
>
  ${customContent || 'Status Badge'}
  ${customProps.includes('removable') ? ' <X className="ml-1 h-3 w-3 cursor-pointer" />' : ''}
</Badge>`,
        vue: `<Badge 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `:state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}:class="{ 'animate-pulse': state === 'pulse', 'animate-ping': state === 'glow' }"
>
  ${customContent || 'Status Badge'}
  <X v-if="removable" class="ml-1 h-3 w-3 cursor-pointer" @click="handleRemove" />
</Badge>`,
        angular: `<span 
  [variant]="${demoVariant}" 
  [size]="${demoSize}"
  ${demoState !== 'default' ? `[state]="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="inclusive-badge"
  [class.animate-pulse]="state === 'pulse'"
  [class.animate-ping]="state === 'glow'"
>
  ${customContent || 'Status Badge'}
  <i *ngIf="removable" class="x-icon ml-1 h-3 w-3 cursor-pointer" (click)="handleRemove()"></i>
</span>`,
        css: `.inclusive-badge {
  --badge-variant: ${demoVariant};
  --badge-size: ${demoSize};
  --animation-duration: 0.2s;
  
  display: inline-flex;
  align-items: centre;
  gap: 0.25rem;
  
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--text-${demoSize});
  padding: var(--padding-${demoSize});
  
  background: var(--colour-${demoVariant});
  colour: var(--colour-${demoVariant}-foreground);
  border: var(--border-${demoVariant});
  
  transition: all var(--animation-duration) ease-in-out;
  
  &[data-state="pulse"] {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  &[data-state="glow"] {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  &[data-interactive="true"] {
    cursor: pointer;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-${demoVariant}-hover);
    }
  }
}`
      }
    },
    Card: {
      variants: ["default", "elevated", "outline", "ghost", "gradient"],
      sizes: ["sm", "default", "lg", "xl"],
      states: ["default", "hover", "selected", "loading", "error"],
      props: ["interactive", "glassy", "animated", "bordered"],
      accessibility: {
        role: "article",
        ariaLabel: "Content card with proper heading hierarchy",
        keyboardShortcuts: ["Tab", "Enter (if interactive)"],
        contrast: "AAA",
        focusIndicator: "Subtle border highlight for interactive cards"
      },
      performance: {
        bundleSize: "3.1kb (gzipped)",
        renderTime: "< 2ms",
        reRenders: "Optimized with shallow comparison",
        interactions: "GPU-accelerated transforms"
      },
      code: {
        react: `<Card 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}className="transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      ${demoState === 'loading' ? '<Loader2 className="h-5 w-5 animate-spin" />' : '<Sparkles className="h-5 w-5" />'}
      ${customContent || 'Enhanced Card'}
    </CardTitle>
    <CardDescription>
      A beautifully crafted card component with advanced interactions
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-600 dark:text-slate-300">
      This card demonstrates the power of our design system with smooth animations,
      perfect accessibility, and production-ready code.
    </p>
  </CardContent>
</Card>`,
        vue: `<Card 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `:state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
>
  <CardHeader>
    <CardTitle class="flex items-center gap-2">
      <Loader2 v-if="state === 'loading'" class="h-5 w-5 animate-spin" />
      <Sparkles v-else class="h-5 w-5" />
      ${customContent || 'Enhanced Card'}
    </CardTitle>
    <CardDescription>
      A beautifully crafted card component with advanced interactions
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p class="text-slate-600 dark:text-slate-300">
      This card demonstrates the power of our design system with smooth animations,
      perfect accessibility, and production-ready code.
    </p>
  </CardContent>
</Card>`,
        angular: `<div 
  [variant]="${demoVariant}" 
  [size]="${demoSize}"
  ${demoState !== 'default' ? `[state]="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="inclusive-card transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
>
  <div class="card-header">
    <h3 class="card-title flex items-center gap-2">
      <i [class]="state === 'loading' ? 'loader-icon animate-spin' : 'sparkles-icon'"></i>
      ${customContent || 'Enhanced Card'}
    </h3>
    <p class="card-description">
      A beautifully crafted card component with advanced interactions
    </p>
  </div>
  <div class="card-content">
    <p class="text-slate-600 dark:text-slate-300">
      This card demonstrates the power of our design system with smooth animations,
      perfect accessibility, and production-ready code.
    </p>
  </div>
</div>`,
        css: `.inclusive-card {
  --card-variant: ${demoVariant};
  --card-size: ${demoSize};
  --animation-duration: 0.3s;
  
  background: var(--card-background);
  border: var(--card-border);
  border-radius: var(--radius-${demoSize});
  padding: var(--spacing-${demoSize});
  
  box-shadow: var(--shadow-${demoVariant});
  transition: all var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-${demoVariant}-hover);
  }
  
  &[data-state="selected"] {
    border-colour: var(--colour-primary);
    box-shadow: 0 0 0 2px var(--colour-primary-alpha);
  }
  
  &[data-glassy="true"] {
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}`
      }
    },
    Input: {
      variants: ["default", "outline", "filled", "ghost", "underline"],
      sizes: ["sm", "default", "lg"],
      states: ["default", "focus", "error", "success", "disabled"],
      props: ["required", "readonly", "password", "search", "number"],
      accessibility: {
        role: "textbox",
        ariaLabel: "Text input with full accessibility support and validation",
        keyboardShortcuts: ["Tab", "Shift+Tab", "Ctrl+A", "Escape"],
        contrast: "AAA",
        focusIndicator: "High contrast ring with smooth transition"
      },
      performance: {
        bundleSize: "2.8kb (gzipped)",
        renderTime: "< 1.5ms",
        reRenders: "Controlled updates only",
        interactions: "Debounced validation"
      },
      code: {
        react: `<Input 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}placeholder="${customContent || 'Enter text here...'}"
  className="transition-all duration-200 focus:scale-[1.02]"
  onChange={(e) => handleInputChange(e.target.value)}
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
/>`,
        vue: `<Input 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `:state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}:placeholder="placeholder || 'Enter text here...'"
  class="transition-all duration-200 focus:scale-[1.02]"
  @input="handleInputChange"
  @focus="setFocused(true)"
  @blur="setFocused(false)"
/>`,
        angular: `<input 
  [variant]="${demoVariant}" 
  [size]="${demoSize}"
  ${demoState !== 'default' ? `[state]="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}[placeholder]="placeholder || 'Enter text here...'"
  class="inclusive-input transition-all duration-200 focus:scale-[1.02]"
  (input)="handleInputChange($event)"
  (focus)="setFocused(true)"
  (blur)="setFocused(false)"
/>`,
        css: `.inclusive-input {
  --input-variant: ${demoVariant};
  --input-size: ${demoSize};
  --animation-duration: 0.2s;
  
  width: 100%;
  border: var(--input-border);
  border-radius: var(--radius-${demoSize});
  padding: var(--input-padding-${demoSize});
  font-size: var(--text-${demoSize});
  
  background: var(--input-background);
  colour: var(--input-foreground);
  
  transition: all var(--animation-duration) cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    outline: none;
    border-colour: var(--colour-primary);
    box-shadow: 0 0 0 2px var(--colour-primary-alpha);
    transform: scale(1.02);
  }
  
  &[data-state="error"] {
    border-colour: var(--colour-destructive);
    box-shadow: 0 0 0 2px var(--colour-destructive-alpha);
  }
  
  &[data-state="success"] {
    border-colour: var(--colour-success);
    box-shadow: 0 0 0 2px var(--colour-success-alpha);
  }
}`
      }
    }
  }

  const currentComponent = components[selectedComponent as keyof typeof components]

  const handleCopy = async () => {
    try {
      const codeToExport = currentComponent.code[exportFormat as keyof typeof currentComponent.code]
      await navigator.clipboard.writeText(codeToExport)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }



  const responsiveBreakpoints = {
    mobile: "w-80 max-w-80",
    tablet: "w-full max-w-md", 
    desktop: "w-full"
  }

  const responsiveIcons = {
    mobile: Smartphone,
    tablet: Tablet,
    desktop: Monitor
  }

  return (
    <div className="space-y-8">
      {/* Strategic Header - Value First */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Beaker className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-200">Elite Component Playground</h3>
            <p className="text-slate-400">Interactive development environment with production-ready code</p>
          </div>
        </div>
        
        {/* Universal Quick Actions */}
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            variant={showAccessibility ? "default" : "outline"}
            onClick={() => setShowAccessibility(!showAccessibility)}
            className={`${showAccessibility ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-600 hover:border-blue-500/50'} transition-all`}
          >
            <Shield className="h-4 w-4 mr-2" />
            Accessibility analysis
          </Button>
          <Button
            size="sm"
            variant={showPerformance ? "default" : "outline"}
            onClick={() => setShowPerformance(!showPerformance)}
            className={`${showPerformance ? 'bg-green-600 hover:bg-green-700' : 'border-slate-600 hover:border-green-500/50'} transition-all`}
          >
            <Gauge className="h-4 w-4 mr-2" />
            Performance Metrics
          </Button>
        </div>
      </div>

      {/* Primary Control Panel - Optimized for Scanning */}
      <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/60 transition-all">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <ComponentIcon className="h-5 w-5 text-fuchsia-400" />
            Component Configuration
          </CardTitle>
          <CardDescription>
            Select component, customise properties, and export production code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Core Selection - Most Important First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <ComponentIcon className="h-4 w-4" />
                Component Type
              </Label>
              <Select value={selectedComponent} onValueChange={setSelectedComponent}>
                <SelectTrigger className="h-11 bg-slate-900/50 border-slate-600 hover:border-fuchsia-500/50 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-600">
                  {Object.keys(components).map((component) => (
                    <SelectItem key={component} value={component} className="text-slate-300 focus:bg-slate-800">
                      <div className="flex items-center gap-3">
                        <ComponentIcon className="h-4 w-4 text-fuchsia-400" />
                        <span className="font-medium">{component}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Export Format
              </Label>
              <Select value={exportFormat} onValueChange={setExportFormat}>
                <SelectTrigger className="h-11 bg-slate-900/50 border-slate-600 hover:border-blue-500/50 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-600">
                  <SelectItem value="react" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-blue-400" />
                      <span className="font-medium">React/JSX</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="vue" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-green-400" />
                      <span className="font-medium">Vue</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="angular" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-red-400" />
                      <span className="font-medium">Angular</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="css" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Palette className="h-4 w-4 text-purple-400" />
                      <span className="font-medium">CSS Only</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Visual Property Controls - Easy Scanning */}
          <div className="space-y-4">
            <Label className="text-sm font-semibold text-slate-200">Visual Properties</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <Label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Variant</Label>
                <div className="flex flex-wrap gap-2">
                  {currentComponent.variants.map((variant) => (
                    <Button
                      key={variant}
                      size="sm"
                      variant={demoVariant === variant ? "default" : "outline"}
                      onClick={() => setDemoVariant(variant)}
                      className={`transition-all ${
                        demoVariant === variant 
                          ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-fuchsia-600 shadow-lg shadow-fuchsia-500/25' 
                          : 'border-slate-600 text-slate-400 hover:text-slate-200 hover:border-fuchsia-500/50'
                      }`}
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Size</Label>
                <div className="flex flex-wrap gap-2">
                  {currentComponent.sizes.map((size) => (
                    <Button
                      key={size}
                      size="sm"
                      variant={demoSize === size ? "default" : "outline"}
                      onClick={() => setDemoSize(size)}
                      className={`transition-all ${
                        demoSize === size 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg shadow-blue-500/25' 
                          : 'border-slate-600 text-slate-400 hover:text-slate-200 hover:border-blue-500/50'
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xs font-medium text-slate-400 uppercase tracking-wide">State</Label>
                <div className="flex flex-wrap gap-2">
                  {currentComponent.states.map((state) => (
                    <Button
                      key={state}
                      size="sm"
                      variant={demoState === state ? "default" : "outline"}
                      onClick={() => setDemoState(state)}
                      className={`transition-all ${
                        demoState === state 
                          ? 'bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-lg shadow-green-500/25' 
                          : 'border-slate-600 text-slate-400 hover:text-slate-200 hover:border-green-500/50'
                      }`}
                    >
                      {state}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Advanced customisation - Friction Elimination */}
          <div className="space-y-4">
            <Label className="text-sm font-semibold text-slate-200">Advanced customisation</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Custom Props</Label>
                <Input
                  placeholder="disabled fullWidth className='custom-style'"
                  value={customProps}
                  onChange={(e) => setCustomProps(e.target.value)}
                  className="bg-slate-900/50 border-slate-600 hover:border-purple-500/50 text-slate-300 font-mono text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Custom Content</Label>
                <Input
                  placeholder="Custom button text or placeholder..."
                  value={customContent}
                  onChange={(e) => setCustomContent(e.target.value)}
                  className="bg-slate-900/50 border-slate-600 hover:border-purple-500/50 text-slate-300 transition-all"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Preview & Code - Split Layout for Better UX */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Live Preview Section */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-400" />
                Live Preview
              </CardTitle>
              <div className="flex items-center gap-2">
                {Object.entries(responsiveIcons).map(([view, Icon]) => (
                  <Button
                    key={view}
                    size="sm"
                    variant={responsiveView === view ? "default" : "outline"}
                    onClick={() => setResponsiveView(view)}
                    className={`transition-all ${
                      responsiveView === view 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-600' 
                        : 'border-slate-600 text-slate-400 hover:text-slate-200 hover:border-purple-500/50'
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                  </Button>
                ))}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setDarkMode(!darkMode)}
                  className="border-slate-600 text-slate-400 hover:text-slate-200 hover:border-amber-500/50 transition-all"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  {darkMode ? 'Light' : 'Dark'}
                </Button>
              </div>
            </div>
            <CardDescription>
              Interactive component preview with responsive testing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`${darkMode ? 'bg-slate-900/50' : 'bg-white'} rounded-xl p-6 md:p-12 border border-slate-700/50 min-h-[300px] flex items-center justify-center transition-all duration-300 ${responsiveBreakpoints[responsiveView as keyof typeof responsiveBreakpoints]} mx-auto overflow-hidden`}>
              <div className="flex flex-col items-center gap-6 w-full max-w-full">
                {selectedComponent === "Button" && (
                  <Button 
                    variant={demoVariant as any} 
                    size={demoSize as any}
                    disabled={demoState === 'disabled'}
                    className={`transition-all duration-300 ${demoState === 'hover' ? 'scale-105 shadow-lg' : ''} ${demoState === 'loading' ? 'cursor-wait' : ''}`}
                  >
                    {demoState === 'loading' && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>}
                    <Sparkles className="mr-2 h-4 w-4" />
                    {customContent || 'Enhanced Button'}
                  </Button>
                )}
                {selectedComponent === "Badge" && (
                  <Badge 
                    variant={demoVariant as any}
                    className={`transition-all duration-300 ${demoState === 'pulse' ? 'animate-pulse' : ''} ${demoState === 'glow' ? 'animate-ping' : ''} ${demoState === 'hover' ? 'scale-105' : ''}`}
                  >
                    {customContent || 'Status Badge'}
                  </Badge>
                )}
                {selectedComponent === "Card" && (
                  <Card className={`w-full max-w-xs sm:max-w-sm transition-all duration-300 ${demoState === 'hover' ? 'scale-105 shadow-xl' : ''} ${demoState === 'selected' ? 'ring-2 ring-fuchsia-500' : ''}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {demoState === 'loading' && <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-600 rounded-full animate-spin"></div>}
                        <Sparkles className="h-5 w-5" />
                        {customContent || 'Enhanced Card'}
                      </CardTitle>
                      <CardDescription>
                        A beautifully crafted card component
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        This demonstrates advanced interactions and animations.
                      </p>
                    </CardContent>
                  </Card>
                )}
                {selectedComponent === "Input" && (
                  <Input 
                    placeholder={customContent || "Enter text here..."}
                    disabled={demoState === 'disabled'}
                    className={`w-full max-w-xs sm:max-w-sm transition-all duration-300 ${demoState === 'focus' ? 'scale-105 ring-2 ring-fuchsia-500' : ''} ${demoState === 'error' ? 'border-red-500 ring-2 ring-red-500/20' : ''} ${demoState === 'success' ? 'border-green-500 ring-2 ring-green-500/20' : ''}`}
                  />
                )}
                
                {/* Preview Info */}
                <div className="text-center space-y-1">
                  <div className="text-xs text-slate-500 uppercase tracking-wide">
                    {responsiveView} • {darkMode ? 'Dark' : 'Light'} Mode
                  </div>
                  <div className="text-xs text-slate-400">
                    {selectedComponent} • {demoVariant} • {demoSize} • {demoState}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Code Section */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Code2 className="h-5 w-5 text-green-400" />
                Production Code
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleCopy}
                  size="sm"
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-lg shadow-fuchsia-500/25"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
            <CardDescription>
              Ready-to-use {exportFormat.toUpperCase()} code with accessibility and best practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700/50 max-h-[400px] overflow-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                <code>{currentComponent.code[exportFormat as keyof typeof currentComponent.code]}</code>
              </pre>
            </div>
            
            {/* Code Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:text-slate-200 hover:border-green-500/50 transition-all"
                onClick={() => {
                  const fullProject = `// Complete ${selectedComponent} Implementation
// Generated by Inclusive Design System Elite Playground

import React from 'react'
import { ${selectedComponent}${selectedComponent === 'Card' ? ', CardHeader, CardTitle, CardContent, CardDescription' : ''} } from '@inclusive/design-system'
${selectedComponent === 'Button' && demoState === 'loading' ? "import { Loader2 } from 'lucide-react'" : "import { Sparkles } from 'lucide-react'"}

export function Enhanced${selectedComponent}Demo() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Enhanced ${selectedComponent} Demo</h2>
      <div className="space-y-4">
        ${currentComponent.code[exportFormat as keyof typeof currentComponent.code]}
      </div>
    </div>
  )
}

export default Enhanced${selectedComponent}Demo`
                  
                  const blob = new Blob([fullProject], { type: 'text/javascript' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `Enhanced${selectedComponent}Demo.tsx`
                  a.click()
                  URL.revokeObjectURL(url)
                }}
              >
                <Download className="h-3 w-3 mr-2" />
                Export Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accessibility & Performance Info */}
      {(showAccessibility || showPerformance) && (
        <div className="grid gap-4">
          {showAccessibility && (
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  Accessibility analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-400 mb-1">ARIA Role</div>
                    <div className="text-slate-300 font-mono">{currentComponent.accessibility.role}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Keyboard Support</div>
                    <div className="text-slate-300">{currentComponent.accessibility.keyboardShortcuts.join(', ')}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">colour Contrast</div>
                    <div className="text-green-400">{currentComponent.accessibility.contrast}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Focus Indicator</div>
                    <div className="text-slate-300">{currentComponent.accessibility.focusIndicator}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {showPerformance && (
            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-green-400" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-400 mb-1">Bundle Size</div>
                    <div className="text-green-400 font-mono">{currentComponent.performance.bundleSize}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Render Time</div>
                    <div className="text-green-400 font-mono">{currentComponent.performance.renderTime}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Re-renders</div>
                    <div className="text-green-400">{currentComponent.performance.reRenders}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Interactions</div>
                    <div className="text-green-400">{currentComponent.performance.interactions}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}


    </div>
  )
}

// Elite Design Token Studio - UX-First Token Management
function TokenVisualizer() {
  const [selectedCategory, setSelectedCategory] = useState("colours")
  const [copiedToken, setCopiedToken] = useState("")
  const [exportFormat, setExportFormat] = useState("css")

  const tokenCategories = {
    colours: {
      primary: { value: "#d946ef", usage: "CTAs, links, brand elements", preview: true },
      secondary: { value: "#6366f1", usage: "Secondary actions, accents", preview: true },
      success: { value: "#10b981", usage: "Success states, confirmations", preview: true },
      warning: { value: "#f59e0b", usage: "Warnings, cautions", preview: true },
      error: { value: "#ef4444", usage: "Error states, destructive actions", preview: true },
      accent: { value: "#8b5cf6", usage: "Creative highlights, premium features", preview: true }
    },
    spacing: {
      xs: { value: "0.25rem", usage: "Tight spacing, borders", preview: false },
      sm: { value: "0.5rem", usage: "Component padding, gaps", preview: false },
      md: { value: "1rem", usage: "Standard spacing, margins", preview: false },
      lg: { value: "1.5rem", usage: "Section spacing, large gaps", preview: false },
      xl: { value: "2rem", usage: "Component separation", preview: false },
      "2xl": { value: "3rem", usage: "Page-level spacing", preview: false }
    },
    typography: {
      xs: { value: "0.75rem", usage: "Small text, captions", preview: false },
      sm: { value: "0.875rem", usage: "Body text small", preview: false },
      base: { value: "1rem", usage: "Body text", preview: false },
      lg: { value: "1.125rem", usage: "Large body text", preview: false },
      xl: { value: "1.25rem", usage: "Headings", preview: false },
      "2xl": { value: "1.5rem", usage: "Large headings", preview: false }
    }
  }

  const handleCopyToken = async (token: string, value: string) => {
    try {
      let formattedToken = ""
      switch(exportFormat) {
        case "css":
          formattedToken = `--${selectedCategory}-${token}: ${value};`
          break
        case "scss":
          formattedToken = `$${selectedCategory}-${token}: ${value};`
          break
        case "js":
          formattedToken = `export const ${selectedCategory}${token.charAt(0).toUpperCase() + token.slice(1)} = "${value}"`
          break
        case "json":
          formattedToken = `"${selectedCategory}.${token}": "${value}"`
          break
      }
      
      await navigator.clipboard.writeText(formattedToken)
      setCopiedToken(`${selectedCategory}-${token}`)
      setTimeout(() => setCopiedToken(""), 2000)
    } catch (err) {
      console.error('Failed to copy token:', err)
    }
  }

  return (
    <div className="space-y-8">
      {/* Strategic Header - Value First */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-200">Elite Design Token Studio</h3>
            <p className="text-slate-400">Professional token management with multi-format export</p>
          </div>
        </div>
        
        {/* Universal Quick Actions */}
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const allTokens = Object.entries(tokenCategories).map(([cat, tokens]) =>
                Object.entries(tokens).map(([name, data]) => 
                  `--${cat}-${name}: ${data.value};`
                ).join('\n')
              ).join('\n')
              navigator.clipboard.writeText(allTokens)
            }}
            className="border-slate-600 hover:border-blue-500/50 transition-all"
          >
            <Download className="h-4 w-4 mr-2" />
            Export All Tokens
          </Button>
        </div>
      </div>

      {/* Primary Control Panel */}
      <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/60 transition-all">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Palette className="h-5 w-5 text-blue-400" />
            Token Configuration
          </CardTitle>
          <CardDescription>
            Browse design tokens and export in your preferred format
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Core Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Target className="h-4 w-4" />
                Token Category
              </Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-11 bg-slate-900/50 border-slate-600 hover:border-blue-500/50 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-600">
                  {Object.keys(tokenCategories).map((category) => (
                    <SelectItem key={category} value={category} className="text-slate-300 focus:bg-slate-800">
                      <div className="flex items-center gap-3">
                        <Palette className="h-4 w-4 text-blue-400" />
                        <span className="font-medium capitalize">{category}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Export Format
              </Label>
              <Select value={exportFormat} onValueChange={setExportFormat}>
                <SelectTrigger className="h-11 bg-slate-900/50 border-slate-600 hover:border-green-500/50 transition-all">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-600">
                  <SelectItem value="css" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-blue-400" />
                      <span className="font-medium">CSS Variables</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="scss" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-pink-400" />
                      <span className="font-medium">SCSS Variables</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="js" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium">JavaScript</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="json" className="text-slate-300 focus:bg-slate-800">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-4 w-4 text-green-400" />
                      <span className="font-medium">JSON</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Token Grid - Optimized for Scanning */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Eye className="h-5 w-5 text-purple-400" />
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Tokens
          </CardTitle>
          <CardDescription>
            Click any token to copy in {exportFormat.toUpperCase()} format
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {Object.entries(tokenCategories[selectedCategory as keyof typeof tokenCategories]).map(([token, data]) => (
              <Card 
                key={token} 
                className="bg-slate-900/50 border-slate-700/50 hover:bg-slate-900/70 hover:border-blue-500/30 transition-all cursor-pointer group"
                onClick={() => handleCopyToken(token, data.value)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Visual Preview */}
                      <div className="flex-shrink-0">
                        {selectedCategory === "colours" && (
                          <div 
                            className="w-12 h-12 rounded-xl border-2 border-slate-600 shadow-lg group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: data.value }}
                          />
                        )}
                        {selectedCategory === "spacing" && (
                          <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div 
                              className="bg-blue-400 rounded"
                              style={{ 
                                width: Math.min(parseInt(data.value) * 16, 32) + "px", 
                                height: "4px",
                                minWidth: "4px"
                              }}
                            />
                          </div>
                        )}
                        {selectedCategory === "typography" && (
                          <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span 
                              className="text-purple-400 font-bold"
                              style={{ fontSize: Math.min(parseFloat(data.value) * 16, 24) + "px" }}
                            >
                              Aa
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Token Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colours">
                            {token}
                          </h4>
                          <code className="text-xs bg-slate-800 px-2 py-1 rounded text-blue-400 font-mono">
                            {data.value}
                          </code>
                        </div>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colours">
                          {data.usage}
                        </p>
                      </div>
                    </div>
                    
                    {/* Copy Action */}
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${
                        copiedToken === `${selectedCategory}-${token}` 
                          ? 'border-green-500 text-green-400 bg-green-500/10' 
                          : 'border-slate-600 text-slate-400 hover:text-slate-200 hover:border-blue-500/50'
                      } transition-all group-hover:scale-105`}
                    >
                      {copiedToken === `${selectedCategory}-${token}` ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-2" />
                          Copy {exportFormat.toUpperCase()}
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function HomePage() {
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar animationSpeed={animationSpeed} />
      <main className="flex-1 overflow-auto">
        {/* Revolutionary Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-blue-500/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative px-6 lg:px-12 py-12 lg:py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Value Proposition */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Live Production System
                      </Badge>
                      <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 px-3 py-1">
                        v2.1.0 Latest
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Enterprise Ready
                      </Badge>
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Ship Faster.
                      </span>
                      <br />
                      <span className="text-slate-100">Build Better.</span>
                    </h1>
                    
                    <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                      The UK's most comprehensive design system. Get from idea to production 
                      <span className="text-fuchsia-400 font-semibold"> 3x faster </span>
                      with enterprise-grade components, accessibility-first design, and battle-tested patterns.
                    </p>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/components">
                      <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 shadow-lg shadow-fuchsia-500/25 text-lg px-8 py-4 group">
                        <ComponentIcon className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                        Start Building Now
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/design-system/getting-started">
                      <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 text-lg px-8 py-4 group">
                        <BookOpen className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                        Implementation Guide
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-4">
                    <p className="text-sm text-slate-500 mb-3">Trusted by UK enterprises and startups</p>
                    <div className="flex items-center gap-6 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm">SOC 2 Compliant</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span className="text-sm">WCAG 2.1 AAA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span className="text-sm">GDPR Ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics Dashboard */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-slate-200 mb-2">Real Impact, Real Results</h2>
                    <p className="text-slate-400">What teams achieve with our design system</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-fuchsia-400 mb-2">3x</div>
                        <div className="text-sm text-slate-300 font-medium">Faster Development</div>
                        <div className="text-xs text-slate-500 mt-1">vs custom builds</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">99.8%</div>
                        <div className="text-sm text-slate-300 font-medium">Uptime</div>
                        <div className="text-xs text-slate-500 mt-1">enterprise SLA</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-green-400 mb-2">49+</div>
                        <div className="text-sm text-slate-300 font-medium">Components</div>
                        <div className="text-xs text-slate-500 mt-1">production ready</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">AAA</div>
                        <div className="text-sm text-slate-300 font-medium">Accessibility</div>
                        <div className="text-xs text-slate-500 mt-1">WCAG 2.1 certified</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-slate-200">200+</div>
                        <div className="text-xs text-slate-500">Design Tokens</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-200">150+</div>
                        <div className="text-xs text-slate-500">User Studies</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-200">98%</div>
                        <div className="text-xs text-slate-500">User Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Value Bar */}
        <section className="bg-slate-900/50 border-b border-slate-800/50">
          <div className="px-6 lg:px-12 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 font-medium">Ready for immediate implementation</span>
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 hover:bg-slate-700"
                    onClick={() => {
                      const tokenData = `/* Copy-paste ready CSS variables */
:root {
  --colour-primary: #d946ef;
  --colour-secondary: #6366f1;
  --spacing-md: 1rem;
  --border-radius: 0.5rem;
}`
                      navigator.clipboard.writeText(tokenData)
                    }}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Copy CSS Variables
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 hover:bg-slate-700"
                    onClick={() => window.open('/design-system/tokens', '_blank')}
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Download Tokens
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 lg:px-12 py-8">
          {/* Live System Showcase */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Experience the System
                </span>
                <br />
                <span className="text-slate-200">Before You Commit</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Interactive playground with real components. Test accessibility, customise tokens, and export production code.
              </p>
            </div>

            {/* Enhanced Playground Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Component Playground */}
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <ComponentIcon className="h-5 w-5 text-white" />
                    </div>
                    <span>Live Component Playground</span>
                  </CardTitle>
                  <CardDescription>
                    Test all 49+ components with real props and see instant results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ComponentPlayground />
                </CardContent>
              </Card>

              {/* Design Token Visualizer */}
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Palette className="h-5 w-5 text-white" />
                    </div>
                    <span>Design Token Studio</span>
                  </CardTitle>
                  <CardDescription>
                    customise and export your design tokens instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TokenVisualizer />
                </CardContent>
              </Card>
            </div>

            {/* Action Bar */}
            <div className="mt-12 text-center">
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-200 mb-2">Ready to Start Building?</h3>
                <p className="text-slate-400 mb-6">Get everything you've seen here in your project today</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700">
                    <Download className="mr-2 h-5 w-5" />
                    Install Design System
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-700" asChild>
                    <Link href="/components">
                      <ComponentIcon className="mr-2 h-5 w-5" />
                      Browse All Components
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}






