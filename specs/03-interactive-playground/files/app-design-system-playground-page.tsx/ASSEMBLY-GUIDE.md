# Assembly Guide: app/design-system/playground/page.tsx

## File Overview

| Property | Value |
|----------|-------|
| **Final File Path** | `app/design-system/playground/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~780 |
| **Total Parts** | 9 |
| **Purpose** | Interactive component playground with live preview and code generation |

---

## Reading Order

Implement each part file in this exact sequence:

| Order | Part File | What It Creates |
|-------|-----------|-----------------|
| 1 | `IMPORTS.md` | Client directive, all imports |
| 2 | `COMPONENT-REGISTRY.md` | Component definitions, props configurations |
| 3 | `STATE-HANDLERS.md` | State management, code generation |
| 4 | `HEADER-CONTROLS.md` | Component selector, viewport toggle |
| 5 | `PREVIEW-PANEL.md` | Live component preview area |
| 6 | `PROPS-CONTROLS.md` | Dynamic property controls panel |
| 7 | `CODE-OUTPUT.md` | Generated code with CodeEditor |
| 8 | `ACCESSIBILITY-PANEL.md` | A11y testing metrics |
| 9 | `FOOTER.md` | Closing tags |

---

## How to Assemble

### Step 1: Create the Folder
Ensure folder exists: `app/design-system/playground/`

### Step 2: Create the File
Create: `app/design-system/playground/page.tsx`

### Step 3: Copy Each Part in Order
For each part file:
1. Open the part file
2. Copy the code block
3. Paste into your file after the previous part

---

## Dependencies

Before this file will work, ensure these exist:

| Component | Path |
|-----------|------|
| CodeEditor | `components/ui/code-editor.tsx` |
| UnifiedSidebar | `components/ui/unified-sidebar.tsx` |
| Button | `components/ui/button.tsx` |
| Input | `components/ui/input.tsx` |
| Card | `components/ui/card.tsx` |
| Badge | `components/ui/badge.tsx` |
| Alert | `components/ui/alert.tsx` |
| Tabs | `components/ui/tabs.tsx` |
| Select | `components/ui/select.tsx` |
| Switch | `components/ui/switch.tsx` |
| Label | `components/ui/label.tsx` |

---

## Features Implemented

### Component Selection
- Dropdown to choose component
- Supported: Button, Input, Card, Badge, Alert

### Property Controls
- Dynamic controls based on component
- Select for unions, Switch for booleans, Input for strings

### Live Preview
- Real-time component rendering
- Viewport size presets

### Code Generation
- Auto-generated import statement
- JSX with current props
- Copy-paste ready

### Accessibility Panel
- Contrast ratio
- Focus visibility
- Keyboard nav status

---

## Verification Checklist

After assembly:

- [ ] Page loads at `/design-system/playground`
- [ ] Component selector works
- [ ] All viewport sizes work
- [ ] Property controls update preview
- [ ] Code updates in real-time
- [ ] Copy code works
- [ ] Accessibility panel shows metrics

---

**Start with:** `IMPORTS.md`


