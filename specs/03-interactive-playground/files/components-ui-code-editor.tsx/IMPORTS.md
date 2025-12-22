# IMPORTS.md - Import Statements

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `components/ui/code-editor.tsx` |
| **This Section** | Lines 1-30 |
| **Previous Section** | None (this is the first section) |
| **Next Section** | [TYPES.md](./TYPES.md) |

---

## Code Block

```tsx
"use client"

import * as React from "react"
import { useState, useCallback, useMemo } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
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
| **Why needed** | Uses useState for copy feedback |

---

### Line 3: React Import

```tsx
import * as React from "react"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports React namespace |
| **Why this pattern** | Enables React.forwardRef if needed |

---

### Line 4: Named Hook Imports

```tsx
import { useState, useCallback, useMemo } from "react"
```

| Hook | Purpose |
|------|---------|
| `useState` | Track copy feedback state |
| `useCallback` | Memoize copy handler |
| `useMemo` | Memoize highlighted code |

---

### Line 5: Icon Imports

```tsx
import { Copy, Check } from "lucide-react"
```

| Icon | Purpose |
|------|---------|
| `Copy` | Default copy button icon |
| `Check` | Shows after successful copy |

---

### Line 6: Utility Import

```tsx
import { cn } from "@/lib/utils"
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Imports class name merger |
| **Why needed** | Combines base + conditional classes |

---

## Verification Checklist

- [ ] `"use client"` is on line 1
- [ ] React namespace imported
- [ ] All three hooks imported
- [ ] Both icons imported
- [ ] cn utility imported

---

**Next Section:** [TYPES.md](./TYPES.md)


