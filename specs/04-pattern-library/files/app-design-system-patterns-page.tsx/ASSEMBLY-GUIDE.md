# Assembly Guide: app/design-system/patterns/page.tsx

## File Overview

| Property | Value |
|----------|-------|
| **Final File Path** | `app/design-system/patterns/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~400 |
| **Total Parts** | 5 |
| **Purpose** | Pattern library index page with category navigation |

---

## Reading Order

Implement each part file in this exact sequence:

| Order | Part File | What It Creates |
|-------|-----------|-----------------|
| 1 | `IMPORTS.md` | Client directive, imports |
| 2 | `PATTERN-DATA.md` | Pattern definitions by category |
| 3 | `HEADER-SECTION.md` | Hero, search, category tabs |
| 4 | `PATTERN-GRID.md` | Pattern cards with previews |
| 5 | `FOOTER.md` | Related resources, closing |

---

## How to Assemble

### Step 1: Create the Folder
Ensure folder exists: `app/design-system/patterns/`

### Step 2: Create the File
Create: `app/design-system/patterns/page.tsx`

### Step 3: Copy Each Part in Order
For each part file:
1. Open the part file
2. Copy the code block
3. Paste into your file after the previous part

---

## Dependencies

| Component | Path |
|-----------|------|
| UnifiedSidebar | `components/ui/unified-sidebar.tsx` |
| Card | `components/ui/card.tsx` |
| Badge | `components/ui/badge.tsx` |
| Button | `components/ui/button.tsx` |
| Tabs | `components/ui/tabs.tsx` |
| Input | `components/ui/input.tsx` |

---

## Page Structure

```
┌─────────────────────────────────────────────┐
│ UX Pattern Library                          │
│ [Search patterns...                    🔍]  │
├─────────────────────────────────────────────┤
│ [All] [Empty] [Loading] [Error] [Forms]...  │ <- Category tabs
├─────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│ │ Pattern │ │ Pattern │ │ Pattern │         │ <- Pattern cards
│ │ Preview │ │ Preview │ │ Preview │         │
│ │ Name    │ │ Name    │ │ Name    │         │
│ └─────────┘ └─────────┘ └─────────┘         │
└─────────────────────────────────────────────┘
```

---

## Verification Checklist

After assembly:

- [ ] Page loads at `/design-system/patterns`
- [ ] Search input filters patterns
- [ ] Category tabs filter patterns
- [ ] Pattern cards show mini previews
- [ ] Cards link to pattern detail pages
- [ ] Footer has related resources

---

**Start with:** `IMPORTS.md`


