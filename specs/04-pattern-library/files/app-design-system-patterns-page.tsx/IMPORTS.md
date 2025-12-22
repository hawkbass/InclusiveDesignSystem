# IMPORTS.md - Client Directive and Imports

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/patterns/page.tsx` |
| **This Section** | Lines 1-40 |
| **Previous Section** | None (this is the first section) |
| **Next Section** | [PATTERN-DATA.md](./PATTERN-DATA.md) |

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Inbox,
  Loader2,
  AlertCircle,
  FormInput,
  Table,
  Navigation,
  Bell,
  ArrowRight,
  CheckCircle2,
  X,
  FileQuestion,
  RefreshCw,
  Filter,
  LayoutGrid,
  List,
  ChevronRight,
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
| **Why needed** | Search filtering and tab state |

---

### Line 3: React Hooks

```tsx
import { useState, useMemo } from "react"
```

| Hook | Purpose |
|------|---------|
| `useState` | Search query, selected category |
| `useMemo` | Memoize filtered patterns |

---

### Lines 4-10: UI Component Imports

```tsx
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

| Component | Purpose |
|-----------|---------|
| UnifiedSidebar | Navigation |
| Card | Pattern cards |
| Badge | Category labels |
| Button | CTA buttons |
| Input | Search input |
| Tabs | Category filtering |

---

### Lines 11-29: Icon Imports

```tsx
import {
  Search,
  Inbox,
  Loader2,
  AlertCircle,
  FormInput,
  Table,
  Navigation,
  Bell,
  ArrowRight,
  CheckCircle2,
  X,
  FileQuestion,
  RefreshCw,
  Filter,
  LayoutGrid,
  List,
  ChevronRight,
} from "lucide-react"
```

| Icon | Purpose |
|------|---------|
| Search | Search input icon |
| Inbox | Empty states category |
| Loader2 | Loading states category |
| AlertCircle | Error handling category |
| FormInput | Forms category |
| Table | Data display category |
| Navigation | Navigation category |
| Bell | Feedback category |
| ArrowRight | Card link arrows |
| CheckCircle2 | Success indicators |
| X | Error/close |
| FileQuestion | No results |
| RefreshCw | Retry actions |
| Filter | Filter controls |
| LayoutGrid | Grid view |
| List | List view |
| ChevronRight | Breadcrumb separator |

---

### Line 30: Next.js Import

```tsx
import Link from "next/link"
```

For client-side navigation to pattern detail pages.

---

## Verification Checklist

- [ ] `"use client"` on line 1
- [ ] useState and useMemo imported
- [ ] All UI components imported
- [ ] All 17 icons imported
- [ ] Link from next/link imported

---

**Next Section:** [PATTERN-DATA.md](./PATTERN-DATA.md)


