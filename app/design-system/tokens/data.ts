// Token data structures for the tokens page

import { MousePointer, Timer, Brain, LayoutGrid } from "lucide-react"

// TIER 1: Reference Tokens (Primitives) - Raw values
export const referenceTokens = {
  colors: {
    // Fuchsia scale
    "fuchsia-50": { value: "#fdf4ff", hsl: "289 100% 98%" },
    "fuchsia-100": { value: "#fae8ff", hsl: "287 100% 95%" },
    "fuchsia-200": { value: "#f5d0fe", hsl: "288 96% 91%" },
    "fuchsia-300": { value: "#f0abfc", hsl: "291 93% 83%" },
    "fuchsia-400": { value: "#e879f9", hsl: "292 91% 73%" },
    "fuchsia-500": { value: "#d946ef", hsl: "289 86% 65%" },
    "fuchsia-600": { value: "#c026d3", hsl: "293 87% 53%" },
    "fuchsia-700": { value: "#a21caf", hsl: "295 91% 40%" },
    "fuchsia-800": { value: "#86198f", hsl: "296 91% 33%" },
    "fuchsia-900": { value: "#701a75", hsl: "297 90% 28%" },
    "fuchsia-950": { value: "#4a044e", hsl: "297 95% 16%" },
    // Purple scale
    "purple-50": { value: "#faf5ff", hsl: "270 100% 98%" },
    "purple-100": { value: "#f3e8ff", hsl: "269 100% 95%" },
    "purple-200": { value: "#e9d5ff", hsl: "269 100% 92%" },
    "purple-300": { value: "#d8b4fe", hsl: "269 97% 85%" },
    "purple-400": { value: "#c084fc", hsl: "270 95% 75%" },
    "purple-500": { value: "#a855f7", hsl: "271 91% 65%" },
    "purple-600": { value: "#9333ea", hsl: "271 81% 56%" },
    "purple-700": { value: "#7c3aed", hsl: "263 70% 58%" },
    "purple-800": { value: "#6b21a8", hsl: "273 72% 40%" },
    "purple-900": { value: "#581c87", hsl: "274 72% 32%" },
    "purple-950": { value: "#3b0764", hsl: "274 87% 21%" },
    // Blue scale
    "blue-50": { value: "#eff6ff", hsl: "214 100% 97%" },
    "blue-100": { value: "#dbeafe", hsl: "214 95% 93%" },
    "blue-200": { value: "#bfdbfe", hsl: "213 97% 87%" },
    "blue-300": { value: "#93c5fd", hsl: "212 96% 78%" },
    "blue-400": { value: "#60a5fa", hsl: "213 94% 68%" },
    "blue-500": { value: "#3b82f6", hsl: "217 91% 60%" },
    "blue-600": { value: "#2563eb", hsl: "221 83% 53%" },
    "blue-700": { value: "#1d4ed8", hsl: "224 76% 48%" },
    "blue-800": { value: "#1e40af", hsl: "226 71% 40%" },
    "blue-900": { value: "#1e3a8a", hsl: "224 64% 33%" },
    "blue-950": { value: "#172554", hsl: "226 57% 21%" },
    // Slate scale (neutrals)
    "slate-50": { value: "#f8fafc", hsl: "210 40% 98%" },
    "slate-100": { value: "#f1f5f9", hsl: "210 40% 96%" },
    "slate-200": { value: "#e2e8f0", hsl: "214 32% 91%" },
    "slate-300": { value: "#cbd5e1", hsl: "213 27% 84%" },
    "slate-400": { value: "#94a3b8", hsl: "215 20% 65%" },
    "slate-500": { value: "#64748b", hsl: "215 16% 47%" },
    "slate-600": { value: "#475569", hsl: "215 19% 35%" },
    "slate-700": { value: "#334155", hsl: "215 25% 27%" },
    "slate-800": { value: "#1e293b", hsl: "217 33% 17%" },
    "slate-900": { value: "#0f172a", hsl: "222 47% 11%" },
    "slate-950": { value: "#020617", hsl: "224 71% 4%" },
    // Status colors
    "green-500": { value: "#22c55e", hsl: "142 71% 45%" },
    "green-600": { value: "#16a34a", hsl: "142 76% 36%" },
    "red-500": { value: "#ef4444", hsl: "0 84% 60%" },
    "red-600": { value: "#dc2626", hsl: "0 72% 51%" },
    "amber-500": { value: "#f59e0b", hsl: "38 92% 50%" },
    "amber-600": { value: "#d97706", hsl: "32 95% 44%" },
    "cyan-500": { value: "#06b6d4", hsl: "189 94% 43%" },
    "cyan-600": { value: "#0891b2", hsl: "192 91% 36%" },
    // Pure values
    "white": { value: "#ffffff", hsl: "0 0% 100%" },
    "black": { value: "#000000", hsl: "0 0% 0%" },
    "transparent": { value: "transparent", hsl: "transparent" },
  },
  spacing: {
    "0": "0px",
    "0.5": "2px",
    "1": "4px",
    "1.5": "6px",
    "2": "8px",
    "2.5": "10px",
    "3": "12px",
    "3.5": "14px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "7": "28px",
    "8": "32px",
    "9": "36px",
    "10": "40px",
    "11": "44px",
    "12": "48px",
    "14": "56px",
    "16": "64px",
    "20": "80px",
    "24": "96px",
    "28": "112px",
    "32": "128px",
    "36": "144px",
    "40": "160px",
    "44": "176px",
    "48": "192px",
  },
  typography: {
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
      mono: "JetBrains Mono, Consolas, monospace",
    },
    fontSize: {
      "xs": "12px",
      "sm": "14px",
      "base": "16px",
      "lg": "18px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "60px",
    },
    fontWeight: {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700",
    },
    lineHeight: {
      "tight": "1.25",
      "snug": "1.375",
      "normal": "1.5",
      "relaxed": "1.625",
      "loose": "2",
    },
  },
  radii: {
    "none": "0px",
    "sm": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "3xl": "24px",
    "full": "9999px",
  },
  shadows: {
    "xs": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "sm": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "none": "none",
  },
}

// TIER 2: Semantic Tokens (System) - Meaningful mappings
export const semanticTokens = {
  light: {
    // Background hierarchy
    "color-bg-default": { reference: "white", purpose: "Primary background" },
    "color-bg-subtle": { reference: "slate-50", purpose: "Secondary background" },
    "color-bg-muted": { reference: "slate-100", purpose: "Tertiary background" },
    "color-bg-emphasis": { reference: "slate-900", purpose: "High emphasis background" },
    "color-bg-inverse": { reference: "slate-950", purpose: "Inverted background" },
    
    // Surface hierarchy
    "color-surface-default": { reference: "white", purpose: "Card/panel default" },
    "color-surface-elevated": { reference: "white", purpose: "Elevated surfaces" },
    "color-surface-sunken": { reference: "slate-50", purpose: "Recessed surfaces" },
    
    // Text hierarchy
    "color-text-default": { reference: "slate-900", purpose: "Primary text" },
    "color-text-muted": { reference: "slate-500", purpose: "Secondary text" },
    "color-text-subtle": { reference: "slate-400", purpose: "Tertiary text" },
    "color-text-inverse": { reference: "white", purpose: "Inverted text" },
    "color-text-disabled": { reference: "slate-300", purpose: "Disabled text" },
    
    // Interactive
    "color-action-primary": { reference: "fuchsia-500", purpose: "Primary actions" },
    "color-action-primary-hover": { reference: "fuchsia-600", purpose: "Primary hover" },
    "color-action-primary-active": { reference: "fuchsia-700", purpose: "Primary active" },
    "color-action-secondary": { reference: "purple-500", purpose: "Secondary actions" },
    
    // Border
    "color-border-default": { reference: "slate-200", purpose: "Default borders" },
    "color-border-muted": { reference: "slate-100", purpose: "Subtle borders" },
    "color-border-emphasis": { reference: "slate-300", purpose: "Emphasis borders" },
    "color-border-focus": { reference: "fuchsia-500", purpose: "Focus rings" },
    
    // Status
    "color-status-success": { reference: "green-600", purpose: "Success states" },
    "color-status-warning": { reference: "amber-500", purpose: "Warning states" },
    "color-status-error": { reference: "red-500", purpose: "Error states" },
    "color-status-info": { reference: "blue-500", purpose: "Info states" },
  },
  dark: {
    // Background hierarchy
    "color-bg-default": { reference: "slate-950", purpose: "Primary background" },
    "color-bg-subtle": { reference: "slate-900", purpose: "Secondary background" },
    "color-bg-muted": { reference: "slate-800", purpose: "Tertiary background" },
    "color-bg-emphasis": { reference: "slate-100", purpose: "High emphasis background" },
    "color-bg-inverse": { reference: "white", purpose: "Inverted background" },
    
    // Surface hierarchy
    "color-surface-default": { reference: "slate-900", purpose: "Card/panel default" },
    "color-surface-elevated": { reference: "slate-800", purpose: "Elevated surfaces" },
    "color-surface-sunken": { reference: "slate-950", purpose: "Recessed surfaces" },
    
    // Text hierarchy
    "color-text-default": { reference: "slate-50", purpose: "Primary text" },
    "color-text-muted": { reference: "slate-400", purpose: "Secondary text" },
    "color-text-subtle": { reference: "slate-500", purpose: "Tertiary text" },
    "color-text-inverse": { reference: "slate-900", purpose: "Inverted text" },
    "color-text-disabled": { reference: "slate-600", purpose: "Disabled text" },
    
    // Interactive
    "color-action-primary": { reference: "fuchsia-500", purpose: "Primary actions" },
    "color-action-primary-hover": { reference: "fuchsia-400", purpose: "Primary hover" },
    "color-action-primary-active": { reference: "fuchsia-300", purpose: "Primary active" },
    "color-action-secondary": { reference: "purple-400", purpose: "Secondary actions" },
    
    // Border
    "color-border-default": { reference: "slate-700", purpose: "Default borders" },
    "color-border-muted": { reference: "slate-800", purpose: "Subtle borders" },
    "color-border-emphasis": { reference: "slate-600", purpose: "Emphasis borders" },
    "color-border-focus": { reference: "fuchsia-500", purpose: "Focus rings" },
    
    // Status
    "color-status-success": { reference: "green-500", purpose: "Success states" },
    "color-status-warning": { reference: "amber-500", purpose: "Warning states" },
    "color-status-error": { reference: "red-500", purpose: "Error states" },
    "color-status-info": { reference: "cyan-500", purpose: "Info states" },
  },
  spacing: {
    "space-none": { reference: "0", purpose: "No spacing" },
    "space-xxs": { reference: "1", purpose: "4px - Micro spacing" },
    "space-xs": { reference: "2", purpose: "8px - Tight spacing" },
    "space-sm": { reference: "3", purpose: "12px - Small spacing" },
    "space-md": { reference: "4", purpose: "16px - Default spacing" },
    "space-lg": { reference: "6", purpose: "24px - Large spacing" },
    "space-xl": { reference: "8", purpose: "32px - Extra large" },
    "space-2xl": { reference: "12", purpose: "48px - Section spacing" },
    "space-3xl": { reference: "16", purpose: "64px - Page spacing" },
  },
}

// TIER 3: Component Tokens - Component-specific mappings
export const componentTokens = {
  button: {
    "button-height-sm": { semantic: "space-lg", value: "32px" },
    "button-height-md": { semantic: "space-xl", value: "40px" },
    "button-height-lg": { semantic: "space-2xl", value: "48px" },
    "button-padding-x-sm": { semantic: "space-sm", value: "12px" },
    "button-padding-x-md": { semantic: "space-md", value: "16px" },
    "button-padding-x-lg": { semantic: "space-lg", value: "24px" },
    "button-radius": { reference: "radii.md", value: "6px" },
    "button-font-size": { reference: "typography.fontSize.sm", value: "14px" },
    "button-font-weight": { reference: "typography.fontWeight.medium", value: "500" },
    "button-bg-primary": { semantic: "color-action-primary", purpose: "Primary button background" },
    "button-bg-primary-hover": { semantic: "color-action-primary-hover", purpose: "Primary button hover" },
    "button-text-primary": { reference: "white", purpose: "Primary button text" },
  },
  input: {
    "input-height-sm": { value: "32px" },
    "input-height-md": { value: "40px" },
    "input-height-lg": { value: "48px" },
    "input-padding-x": { semantic: "space-sm", value: "12px" },
    "input-radius": { reference: "radii.md", value: "6px" },
    "input-border-width": { value: "1px" },
    "input-border-color": { semantic: "color-border-default", purpose: "Default border" },
    "input-border-color-focus": { semantic: "color-border-focus", purpose: "Focus border" },
    "input-bg": { semantic: "color-bg-default", purpose: "Input background" },
    "input-placeholder": { semantic: "color-text-subtle", purpose: "Placeholder text" },
  },
  card: {
    "card-padding-sm": { semantic: "space-md", value: "16px" },
    "card-padding-md": { semantic: "space-lg", value: "24px" },
    "card-padding-lg": { semantic: "space-xl", value: "32px" },
    "card-radius": { reference: "radii.lg", value: "8px" },
    "card-bg": { semantic: "color-surface-default", purpose: "Card background" },
    "card-border": { semantic: "color-border-muted", purpose: "Card border" },
    "card-shadow": { reference: "shadows.sm", purpose: "Card elevation" },
  },
  badge: {
    "badge-padding-x": { value: "8px" },
    "badge-padding-y": { value: "2px" },
    "badge-radius": { reference: "radii.full", value: "9999px" },
    "badge-font-size": { reference: "typography.fontSize.xs", value: "12px" },
    "badge-font-weight": { reference: "typography.fontWeight.medium", value: "500" },
  },
}

// Laws of UX that tokens support
export const lawsOfUX = [
  {
    name: "Fitts's Law",
    description: "The time to acquire a target is a function of the distance to and size of the target.",
    tokenSupport: "Our touch targets use minimum 44px (space-11) ensuring easy tapping on all devices.",
    icon: MousePointer,
    relatedTokens: ["button-height-lg", "input-height-lg", "space-11"],
  },
  {
    name: "Hick's Law",
    description: "The time it takes to make a decision increases with the number and complexity of choices.",
    tokenSupport: "Limited colour palette reduces cognitive load. 10 shades per hue, 5 semantic levels.",
    icon: Timer,
    relatedTokens: ["color-action-primary", "color-action-secondary"],
  },
  {
    name: "Miller's Law",
    description: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
    tokenSupport: "Spacing tokens create visual chunking. Section spacing (space-2xl, space-3xl) groups content.",
    icon: Brain,
    relatedTokens: ["space-lg", "space-xl", "space-2xl"],
  },
  {
    name: "Jakob's Law",
    description: "Users spend most of their time on other sites, so they prefer your site to work like others.",
    tokenSupport: "Consistent patterns using standard sizing and spacing that match user expectations.",
    icon: LayoutGrid,
    relatedTokens: ["button-height-md", "input-height-md", "card-padding-md"],
  },
]
