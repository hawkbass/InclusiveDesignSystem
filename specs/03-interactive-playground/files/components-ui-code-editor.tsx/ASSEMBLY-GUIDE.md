# Assembly Guide: components/ui/code-editor.tsx

## File Overview

| Property | Value |
|----------|-------|
| **Final File Path** | `components/ui/code-editor.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~200 |
| **Total Parts** | 4 |
| **Purpose** | Standalone, reusable syntax-highlighted code display component |

---

## Reading Order

Implement each part file in this exact sequence:

| Order | Part File | What It Creates |
|-------|-----------|-----------------|
| 1 | `IMPORTS.md` | React hooks, utilities, icons |
| 2 | `TYPES.md` | CodeEditorProps interface |
| 3 | `COMPONENT.md` | Main CodeEditor component body |
| 4 | `SYNTAX-HIGHLIGHTING.md` | Token highlighting logic |

---

## How to Assemble

### Step 1: Create the File
Create: `components/ui/code-editor.tsx`

### Step 2: Copy Each Part in Order
For each part file:
1. Open the part file
2. Copy the code block
3. Paste into your file after the previous part

---

## Component Purpose

The `CodeEditor` component provides:

1. **Syntax highlighting** - Colorizes JSX/TSX code
2. **Line numbers** - Optional line number display
3. **Copy functionality** - One-click copy with visual feedback
4. **Theme support** - Dark and light modes
5. **Customizable height** - Scrollable for long code

---

## Usage Example

```tsx
import { CodeEditor } from "@/components/ui/code-editor"

// Basic usage
<CodeEditor code={`<Button>Click me</Button>`} />

// With options
<CodeEditor 
  code={myCode}
  language="tsx"
  showLineNumbers={true}
  theme="dark"
  maxHeight="300px"
  onCopy={() => console.log("Copied!")}
/>
```

---

## Dependencies

| Dependency | Purpose |
|------------|---------|
| React | Core framework |
| lucide-react | Copy/check icons |
| cn utility | Class name merging |

---

## Verification Checklist

After assembly:

- [ ] Component exports correctly
- [ ] Syntax highlighting works
- [ ] Line numbers toggle works
- [ ] Copy button copies code
- [ ] Theme prop changes styling
- [ ] maxHeight constrains scrolling

---

**Start with:** `IMPORTS.md`


