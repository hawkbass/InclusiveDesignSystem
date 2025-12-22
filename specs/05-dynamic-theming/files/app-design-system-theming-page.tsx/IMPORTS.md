# Part: IMPORTS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 1 of 8 |
| **Lines** | 1-52 |
| **Purpose** | Client directive, React hooks, UI components, Lucide icons |

---

## What This Code Does

This section establishes the file as a client-side React component and imports all necessary dependencies:

1. **"use client"** - Next.js directive marking this as a client component (required for useState, useEffect)
2. **React hooks** - useState for state management, useMemo for memoized calculations
3. **UI Components** - Card, Badge, Button, Tabs, Input, Label, Slider from the design system
4. **UnifiedSidebar** - The shared navigation sidebar component
5. **Lucide Icons** - Visual icons for the interface
6. **Next.js Link** - For client-side navigation

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Next.js App Router** | Client component directive |
| **Atomic Design** | Using established UI primitives |
| **Lucide React** | Consistent iconography |

---

## Code Block

```tsx
"use client"

import { useState, useMemo } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  ChevronRight,
  Palette,
  Sun,
  Moon,
  Copy,
  Check,
  Download,
  RefreshCw,
  Contrast,
  Pipette,
  Sparkles,
  Code,
  FileJson,
  Paintbrush,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Layers
} from "lucide-react"
import Link from "next/link"
```

---

## Line-by-Line Explanation

| Line | Code | Explanation |
|------|------|-------------|
| 1 | `"use client"` | Next.js 13+ directive - this component uses browser APIs (useState) |
| 3 | `import { useState, useMemo }` | React hooks for state and memoized computations |
| 4 | `import { UnifiedSidebar }` | Shared sidebar navigation component |
| 5-10 | UI component imports | Design system primitives for building the interface |
| 11-29 | Lucide icon imports | Icons for visual communication |
| 30 | `import Link` | Next.js client-side navigation component |

---

## Verification

- [ ] File starts with `"use client"` on line 1
- [ ] All UI components are imported from `@/components/ui/`
- [ ] UnifiedSidebar is imported
- [ ] All required Lucide icons are listed
- [ ] Link is imported from `next/link`

---

**Next part:** `COLOR-UTILS.md`


