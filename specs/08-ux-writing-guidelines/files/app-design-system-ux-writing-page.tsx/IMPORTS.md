# Part: IMPORTS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 1 of 8 |
| **Lines** | 1-47 |
| **Purpose** | Client directive, React, UI components, icons |

---

## What This Code Does

Imports all dependencies for the UX writing guidelines page including UI components and content-related icons.

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
import { Input } from "@/components/ui/input"
import {
  ChevronRight,
  MessageSquare,
  Volume2,
  FileText,
  BookOpen,
  Check,
  X,
  Copy,
  Search,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react"
import Link from "next/link"
```

---

## Verification

- [ ] File starts with `"use client"`
- [ ] useState imported from React
- [ ] Content-related icons imported (MessageSquare, Volume2, FileText, BookOpen)
- [ ] Check and X icons for do/don't examples

---

**Next part:** `GUIDELINES-DATA.md`


