# Feature 03: Interactive Component Playground

## Overview

| Property | Value |
|----------|-------|
| **Feature ID** | 03 |
| **Feature Name** | Interactive Component Playground |
| **Status** | Specification Complete |
| **Priority** | High |
| **Estimated Complexity** | High |

---

## Purpose

Create an interactive playground where developers can experiment with components in real-time, see live code output, adjust properties through controls, preview across different viewports, and test accessibility features. This feature includes a standalone `CodeEditor` component for reuse throughout the design system.

---

## Design References

| Source | Contribution |
|--------|--------------|
| **Storybook** | Controls panel, viewport preview, code generation |
| **Chakra UI Playground** | Live editor, responsive preview |
| **Tailwind Play** | Real-time code preview |
| **CodeSandbox** | Syntax highlighting, code editing |
| **Radix Themes** | Property controls panel design |
| **Material Design** | Viewport breakpoint standards |

---

## Files Modified/Created

### 1. CodeEditor Component (Standalone, Reusable)
**Path:** `components/ui/code-editor.tsx`

| Part File | Lines | Description |
|-----------|-------|-------------|
| `ASSEMBLY-GUIDE.md` | - | How to assemble the component |
| `IMPORTS.md` | 1-30 | React, utilities, icons imports |
| `TYPES.md` | 31-60 | CodeEditorProps interface |
| `COMPONENT.md` | 61-150 | Main CodeEditor component |
| `SYNTAX-HIGHLIGHTING.md` | 151-200 | Token highlighting logic |

### 2. Playground Page
**Path:** `app/design-system/playground/page.tsx`

| Part File | Lines | Description |
|-----------|-------|-------------|
| `ASSEMBLY-GUIDE.md` | - | How to assemble the page |
| `IMPORTS.md` | 1-50 | Client directive, imports |
| `COMPONENT-REGISTRY.md` | 51-150 | Available components, props definitions |
| `STATE-HANDLERS.md` | 151-250 | State management, code generation |
| `HEADER-CONTROLS.md` | 251-350 | Component selector, viewport controls |
| `PREVIEW-PANEL.md` | 351-450 | Live component preview area |
| `PROPS-CONTROLS.md` | 451-550 | Dynamic property controls panel |
| `CODE-OUTPUT.md` | 551-650 | Generated code display with CodeEditor |
| `ACCESSIBILITY-PANEL.md` | 651-720 | Accessibility testing panel |
| `FOOTER.md` | 721-780 | Closing tags |

---

## Key Features Implemented

### Standalone CodeEditor Component
Reusable syntax-highlighted code display:
- **Syntax highlighting** for JSX/TSX
- **Line numbers** toggle
- **Copy to clipboard** with feedback
- **Dark/light theme** support
- **Customizable height**
- **Read-only mode** default

### Component Registry
Pre-defined component configurations:
- Button (6 variants, 4 sizes)
- Input (4 variants)
- Card (with header, content, footer)
- Badge (5 variants)
- Alert (4 variants)

### Property Controls Panel
Dynamic form controls based on prop types:
- **Select** for union types (variant, size)
- **Switch** for booleans (disabled, loading)
- **Input** for strings (placeholder, label)
- **Slider** for numbers (spacing, size)

### Viewport Preview
Responsive preview modes:
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)
- Full width

### Code Generation
Real-time code output showing:
- Component import statement
- JSX with all props
- Proper formatting

### Accessibility Testing Panel
Built-in a11y checks:
- Contrast ratio display
- Focus visible indicator
- Keyboard navigation status
- Screen reader preview

---

## Component API

### CodeEditor Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | Required | Code to display |
| `language` | `"tsx" \| "jsx" \| "css"` | `"tsx"` | Syntax highlighting language |
| `showLineNumbers` | `boolean` | `true` | Show line numbers |
| `theme` | `"dark" \| "light"` | `"dark"` | Color theme |
| `maxHeight` | `string` | `"400px"` | Maximum height |
| `onCopy` | `() => void` | - | Callback after copy |

---

## Verification Checklist

After implementing this feature:

- [ ] CodeEditor component renders with syntax highlighting
- [ ] Line numbers display correctly
- [ ] Copy button works with feedback
- [ ] Playground page loads at `/design-system/playground`
- [ ] Component selector shows all registered components
- [ ] Property controls update preview
- [ ] Generated code reflects current state
- [ ] Viewport preview resizes correctly
- [ ] Accessibility panel shows metrics
- [ ] All controls are keyboard accessible

---

## Directory Structure

```
specs/03-interactive-playground/
├── 00-FEATURE-OVERVIEW.md (this file)
└── files/
    ├── components-ui-code-editor.tsx/
    │   ├── ASSEMBLY-GUIDE.md
    │   ├── IMPORTS.md
    │   ├── TYPES.md
    │   ├── COMPONENT.md
    │   └── SYNTAX-HIGHLIGHTING.md
    └── app-design-system-playground-page.tsx/
        ├── ASSEMBLY-GUIDE.md
        ├── IMPORTS.md
        ├── COMPONENT-REGISTRY.md
        ├── STATE-HANDLERS.md
        ├── HEADER-CONTROLS.md
        ├── PREVIEW-PANEL.md
        ├── PROPS-CONTROLS.md
        ├── CODE-OUTPUT.md
        ├── ACCESSIBILITY-PANEL.md
        └── FOOTER.md

Total: 15 part files
```

