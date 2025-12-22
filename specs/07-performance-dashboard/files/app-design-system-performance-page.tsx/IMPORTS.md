# Part: IMPORTS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 1 of 8 |
| **Lines** | 1-44 |
| **Purpose** | Client directive, UI components, icons |

---

## What This Code Does

Imports all dependencies for the performance dashboard page including UI components and metric-related icons.

---

## Code Block

```tsx
"use client"

import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronRight,
  Package,
  Zap,
  Accessibility,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Chrome,
  Globe
} from "lucide-react"
import Link from "next/link"
```

---

## Verification

- [ ] File starts with `"use client"`
- [ ] Progress component imported
- [ ] Trend icons imported (TrendingUp, TrendingDown, Minus)
- [ ] Browser icons imported (Chrome)

---

**Next part:** `METRICS-DATA.md`


