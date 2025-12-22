# IMPORTS.md - Client Directive and Import Statements

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/components/button/page.tsx` |
| **This Section** | Lines 1-45 |
| **Previous Section** | None (this is the first section) |
| **Next Section** | [COMPONENT-DATA.md](./COMPONENT-DATA.md) |

---

## Code Block

```tsx
"use client"

import { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { 
  Copy, 
  CheckCircle2, 
  ChevronRight,
  Keyboard,
  Eye,
  Code,
  Layers,
  AlertCircle,
  Check,
  X,
  Loader2,
  Download,
  Plus,
  ArrowRight,
  ExternalLink,
  Accessibility,
  Palette,
  Box,
  MousePointer
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
| **What it does** | Marks this as a Client Component |
| **Why this approach** | Page uses useState for interactive examples |
| **Reference** | Next.js App Router - Client Components |

---

### Lines 3-16: Component Imports

Imports all UI components needed for the documentation page.

| Import | Purpose |
|--------|---------|
| `useState` | Manage interactive state (selected variant, copied code) |
| `UnifiedSidebar` | Navigation sidebar |
| `Card` components | Content containers |
| `Badge` | Status indicators |
| `Button` | The component being documented |
| `Tabs` | Section navigation |
| `Table` | Props documentation table |

---

### Lines 18-38: Icon Imports

| Icon | Purpose |
|------|---------|
| `Copy` | Copy code button |
| `CheckCircle2` | Success indicator |
| `ChevronRight` | Breadcrumb separator |
| `Keyboard` | Keyboard section icon |
| `Eye` | Preview section icon |
| `Code` | Code section icon |
| `Layers` | Composition section icon |
| `AlertCircle` | Warning states |
| `Check` | Do examples |
| `X` | Don't examples |
| `Loader2` | Loading state example |
| `Download`, `Plus`, `ArrowRight` | Button content examples |
| `ExternalLink` | External links |
| `Accessibility` | Accessibility section |
| `Palette` | Styling section |
| `Box` | Component reference |
| `MousePointer` | Interactive examples |

---

## Verification Checklist

- [ ] `"use client"` is on line 1
- [ ] All component imports are present
- [ ] All icon imports are present
- [ ] `Link` from next/link is imported

---

**Next Section:** [COMPONENT-DATA.md](./COMPONENT-DATA.md)


