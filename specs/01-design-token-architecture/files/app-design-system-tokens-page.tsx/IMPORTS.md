# IMPORTS.md - Client Directive and Import Statements

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 1-51 |
| **Previous Section** | None (this is the first section) |
| **Next Section** | [TOKEN-DATA-COLOURS.md](./TOKEN-DATA-COLOURS.md) |

---

## Prerequisites

Before creating this file, ensure:

1. The folder `app/design-system/tokens/` exists
2. All UI components listed in the imports exist in `components/ui/`
3. The `lucide-react` package is installed (`npm install lucide-react`)

---

## Code Block

Copy this code EXACTLY as shown. This is the beginning of the file.

```tsx
"use client"

import { useState, useEffect, useMemo } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { 
  Palette, 
  Type,
  Grid3X3,
  Code,
  Copy,
  CheckCircle2,
  Download,
  ExternalLink,
  Lightbulb,
  ArrowRight,
  Eye,
  Layers,
  Target,
  Search,
  GitBranch,
  Shield,
  Zap,
  Box,
  ArrowDown,
  RefreshCw,
  FileJson,
  FileCode,
  Figma,
  Moon,
  Sun,
  Contrast,
  AlertTriangle,
  Info,
  Check,
  ChevronRight,
  Sparkles,
  Brain,
  MousePointer,
  Timer,
  LayoutGrid
} from "lucide-react"
import Link from "next/link"
```

---

## Line-by-Line Specification

### Line 1: Client Component Directive

```tsx
"use client"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Tells Next.js this is a Client Component that runs in the browser, not on the server |
| **Why this approach** | This page uses React hooks (`useState`, `useEffect`, `useMemo`) and browser APIs (`navigator.clipboard`) which only work on the client side |
| **Reference** | Next.js 13+ App Router Documentation - "Client Components" section |

**In Simple Terms:** This is like putting a sticker on a package that says "Open at home, not in the warehouse." It tells the computer to run this code in the user's web browser, not on the server.

---

### Line 2: Empty Line

```tsx

```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates visual separation between the directive and imports |
| **Why this approach** | Improves code readability by grouping related items |
| **Reference** | Code style best practice - logical separation |

---

### Line 3: React Hooks Import

```tsx
import { useState, useEffect, useMemo } from "react"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports three functions from React that help manage the page's behaviour |
| **Why this approach** | These are the specific hooks needed for this component's functionality |
| **Reference** | React Documentation - Hooks API Reference |

**Breaking it down:**

| Hook | What It Does | Used For In This Page |
|------|--------------|----------------------|
| `useState` | Remembers values that can change | Which tab is active, what's being searched, copied state |
| `useEffect` | Runs code when the page loads or updates | Setting `mounted` to true after page loads |
| `useMemo` | Remembers the result of a calculation | Filtering tokens based on search (so we don't recalculate every render) |

**In Simple Terms:**
- `useState` is like a whiteboard where you can write and erase things
- `useEffect` is like setting an alarm to do something after an event
- `useMemo` is like writing down the answer to a math problem so you don't have to solve it again

---

### Line 4: UnifiedSidebar Import

```tsx
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports the navigation sidebar component that appears on the left side of every page |
| **Why this approach** | Provides consistent navigation across all design system pages |
| **Reference** | Jakob's Law (Laws of UX) - "Users prefer your site to work the same way as sites they already know" |

**The `@/` Symbol:**
- `@/` is a shortcut that means "start from the project root folder"
- So `@/components/ui/unified-sidebar` means `[project-root]/components/ui/unified-sidebar`

---

### Line 5: Card Components Import

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports the Card component and its sub-components for creating content containers |
| **Why this approach** | Cards group related information visually. Sub-components allow flexible composition. |
| **Reference** | Material Design 3 - Cards documentation; Atomic Design - Molecule composition |

**Sub-component Breakdown:**

| Sub-component | Purpose |
|---------------|---------|
| `Card` | The outer container with border and shadow |
| `CardHeader` | Top section containing title and description |
| `CardTitle` | The main heading inside the card |
| `CardDescription` | Secondary text below the title |
| `CardContent` | The main content area of the card |

**In Simple Terms:** A Card is like a physical index card. It has a title at the top (CardHeader), the main information in the middle (CardContent), and a border around it all.

---

### Line 6: Badge Import

```tsx
import { Badge } from "@/components/ui/badge"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports the Badge component for showing small status labels |
| **Why this approach** | Badges provide at-a-glance status information (like "Stable", "v2.1.0") |
| **Reference** | Atlassian Design System - Status indicators pattern |

**Used for:** Showing version numbers, stability status, and token counts in the hero section.

---

### Line 7: Button Import

```tsx
import { Button } from "@/components/ui/button"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports the Button component for interactive actions |
| **Why this approach** | Consistent button styling builds user trust and meets accessibility standards |
| **Reference** | Fitts's Law (Laws of UX) - "The time to acquire a target is a function of distance and size" |

**Used for:** Export buttons, tab triggers, theme toggles, copy actions.

---

### Line 8: Tabs Components Import

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports the Tabs component for switching between different views |
| **Why this approach** | Tabs organize large amounts of content into manageable sections |
| **Reference** | Miller's Law (Laws of UX) - "People can keep 7±2 items in working memory" |

**Sub-component Breakdown:**

| Sub-component | Purpose |
|---------------|---------|
| `Tabs` | The container that manages which tab is active |
| `TabsList` | The row of clickable tab buttons |
| `TabsTrigger` | Each individual tab button |
| `TabsContent` | The content shown when a tab is active |

**In Simple Terms:** Tabs work like dividers in a filing cabinet. You can see all the sections, but only look at one folder at a time.

---

### Lines 9-12: Form Component Imports

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports form controls for the interactive playground |
| **Why this approach** | Standard form elements that users already understand |
| **Reference** | Shopify Polaris - Interactive playground pattern |

**Component Breakdown:**

| Component | Purpose | Used In |
|-----------|---------|---------|
| `Input` | Text input field | Search bar, colour code input |
| `Label` | Text label for form elements | Playground controls |
| `Slider` | Draggable range input | Border radius control |
| `Switch` | Toggle on/off | Dark mode toggle |

---

### Lines 13-49: Icon Imports

```tsx
import { 
  Palette, 
  Type,
  Grid3X3,
  // ... (35 icons total)
} from "lucide-react"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports 35 icons from the Lucide icon library |
| **Why this approach** | Icons provide visual cues that help users understand content faster than text alone |
| **Reference** | "Don't Make Me Think" by Steve Krug - Recognition over recall |

**Complete Icon Reference Table:**

| Icon | Variable Name | Used For |
|------|---------------|----------|
| 🎨 | `Palette` | Colours tab, colour-related sections |
| 📝 | `Type` | Typography tab and sections |
| ⊞ | `Grid3X3` | Spacing tab and grid sections |
| 💻 | `Code` | Code snippets |
| 📋 | `Copy` | Copy-to-clipboard buttons |
| ✅ | `CheckCircle2` | Success states, completed actions |
| ⬇️ | `Download` | Export/download functionality |
| 🔗 | `ExternalLink` | Links that open new tabs |
| 💡 | `Lightbulb` | Tips and insights |
| ➡️ | `ArrowRight` | Flow direction, "next" actions |
| 👁️ | `Eye` | Preview functionality |
| 📚 | `Layers` | Layered/tiered content, component tokens |
| 🎯 | `Target` | Semantic/purpose-focused content |
| 🔍 | `Search` | Search functionality |
| 🌿 | `GitBranch` | Token relationships/hierarchy |
| 🛡️ | `Shield` | Security/protection |
| ⚡ | `Zap` | Performance/speed |
| 📦 | `Box` | Component/primitive references |
| ⬇️ | `ArrowDown` | Mobile-view flow direction |
| 🔄 | `RefreshCw` | Refresh/reload |
| 📄 | `FileJson` | JSON file format |
| 📄 | `FileCode` | Code file format |
| 🎨 | `Figma` | Figma integration |
| 🌙 | `Moon` | Dark mode |
| ☀️ | `Sun` | Light mode |
| ◐ | `Contrast` | Accessibility contrast |
| ⚠️ | `AlertTriangle` | Warnings |
| ℹ️ | `Info` | Information |
| ✓ | `Check` | Passing states |
| › | `ChevronRight` | Breadcrumb separator |
| ✨ | `Sparkles` | Playground/interactive features |
| 🧠 | `Brain` | UX psychology concepts |
| 👆 | `MousePointer` | Fitts's Law |
| ⏱️ | `Timer` | Hick's Law (decision time) |
| ⊞ | `LayoutGrid` | Jakob's Law (familiarity) |

**In Simple Terms:** Icons are like road signs. They tell you what to expect without needing to read everything.

---

### Lines 50-51: Next.js Link Import

```tsx
import Link from "next/link"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports the Next.js Link component for navigation |
| **Why this approach** | Link enables instant page transitions without full page reload |
| **Reference** | Next.js Documentation - `next/link` |

**Why not just use `<a href="...">`?**
- `<a>` causes a full page reload (slow)
- `<Link>` pre-fetches the next page and swaps content instantly (fast)
- Users perceive the site as more responsive

---

## Verification Checklist

After copying this code:

- [ ] Line 1 contains exactly `"use client"` (with double quotes)
- [ ] Line 2 is completely empty (no spaces)
- [ ] All 9 component imports (lines 4-12) are present
- [ ] All 35 icons are imported in the multi-line import (lines 13-49)
- [ ] Line 50 has the Link import
- [ ] Line 51 is the last line of this section (or empty for separator)
- [ ] No extra blank lines at the end

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Using single quotes `'use client'` | Use double quotes `"use client"` |
| Missing an icon import | Copy the entire icon import block |
| Wrong import path | Always use `@/components/ui/...` |
| Forgetting the Link import | It's separate from lucide-react |

---

**Next Section:** [TOKEN-DATA-COLOURS.md](./TOKEN-DATA-COLOURS.md)


