# Part: IMPORTS

## Overview

| Property | Value |
|----------|-------|
| **Part Number** | 1 of 7 |
| **Lines** | 1-41 |
| **Purpose** | Client directive, React, UI components, icons |

---

## What This Code Does

Establishes the client-side React component with all necessary imports for the Atomic Design composition visualization page.

---

## Design References

| Reference | Application |
|-----------|-------------|
| **Brad Frost's Atomic Design** | Methodology being documented |
| **Next.js App Router** | Client component pattern |

---

## Code Block

```tsx
"use client"

import { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Atom,
  Combine,
  Component,
  Layout,
  FileText,
  ArrowRight,
  Circle
} from "lucide-react"
import Link from "next/link"
```

---

## Verification

- [ ] File starts with `"use client"`
- [ ] useState imported from React
- [ ] All atomic design icons imported (Atom, Combine, Component, Layout, FileText)
- [ ] UnifiedSidebar imported

---

**Next part:** `COMPOSITION-DATA.md`


