# IMPORTS.md - Client Directive and Imports

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 1-50 |
| **Previous Section** | None (this is the first section) |
| **Next Section** | [COMPONENT-REGISTRY.md](./COMPONENT-REGISTRY.md) |

---

## Code Block

```tsx
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
} from "lucide-react"
import Link from "next/link"
```

---

## Line-by-Line Specification

### Line 1: Client Directive

```tsx
"use client"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Marks as Client Component |
| **Why needed** | Heavy state management, interactive controls |

---

### Line 3: React Hook Imports

```tsx
import { useState, useMemo } from "react"
```

| Hook | Purpose |
|------|---------|
| `useState` | Component selection, props state, viewport |
| `useMemo` | Memoize generated code, component rendering |

---

### Lines 4-20: UI Component Imports

```tsx
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CodeEditor } from "@/components/ui/code-editor"
```

| Component | Purpose |
|-----------|---------|
| UnifiedSidebar | Navigation |
| Card | Panel containers |
| Badge | Status indicators |
| Button | Preview component + controls |
| Input | Text prop controls + preview |
| Label | Form labels |
| Switch | Boolean prop controls |
| Alert | Preview component |
| Tabs | Section navigation |
| Select | Component + prop selectors |
| CodeEditor | Generated code display |

---

### Lines 21-36: Icon Imports

```tsx
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
} from "lucide-react"
```

| Icon | Purpose |
|------|---------|
| Play | Run/preview indicator |
| Smartphone | Mobile viewport |
| Tablet | Tablet viewport |
| Monitor | Desktop viewport |
| Maximize | Full width viewport |
| Code | Code panel icon |
| Settings | Props panel icon |
| Accessibility | A11y panel icon |
| CheckCircle2 | Success indicator |
| AlertCircle | Warning indicator |
| Eye | Preview icon |
| Keyboard | Keyboard nav indicator |
| Palette | Theme/styling icon |
| Layers | Component layers |
| Copy | Copy button |
| RotateCcw | Reset button |

---

### Line 37: Next.js Import

```tsx
import Link from "next/link"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Client-side navigation |
| **Usage** | Breadcrumbs, related links |

---

## Verification Checklist

- [ ] `"use client"` is on line 1
- [ ] useState and useMemo imported
- [ ] All 11 UI component sets imported
- [ ] CodeEditor imported
- [ ] All 17 icons imported
- [ ] Link from next/link imported

---

**Next Section:** [COMPONENT-REGISTRY.md](./COMPONENT-REGISTRY.md)


