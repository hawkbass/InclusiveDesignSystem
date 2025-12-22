# CODE-OUTPUT.md - Generated Code Display

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/playground/page.tsx` |
| **This Section** | Lines 551-650 |
| **Previous Section** | [PROPS-CONTROLS.md](./PROPS-CONTROLS.md) |
| **Next Section** | [ACCESSIBILITY-PANEL.md](./ACCESSIBILITY-PANEL.md) |

---

## Code Block

```tsx

            {/* Code Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Generated Code
                </CardTitle>
                <CardDescription>
                  Copy this code to use the component with current props
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <CodeEditor
                  code={generatedCode}
                  language="tsx"
                  showLineNumbers={true}
                  theme="dark"
                  maxHeight="300px"
                />
              </CardContent>
            </Card>
```

---

## Line-by-Line Specification

### Lines 553-563: Card Header

```tsx
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Code className="h-5 w-5" />
      Generated Code
    </CardTitle>
    <CardDescription>
      Copy this code to use the component with current props
    </CardDescription>
  </CardHeader>
```

| Element | Purpose |
|---------|---------|
| Code icon | Represents code output |
| "Generated Code" | Clear label |
| Description | Explains copy functionality |

---

### Lines 564-572: CodeEditor Integration

```tsx
<CardContent className="p-0">
  <CodeEditor
    code={generatedCode}
    language="tsx"
    showLineNumbers={true}
    theme="dark"
    maxHeight="300px"
  />
</CardContent>
```

| Prop | Value | Purpose |
|------|-------|---------|
| `code` | generatedCode | Dynamic code from state |
| `language` | "tsx" | TypeScript JSX highlighting |
| `showLineNumbers` | true | Developer-friendly |
| `theme` | "dark" | Matches header |
| `maxHeight` | "300px" | Scrollable for long code |

---

## Code Generation Examples

### Button (default props)

```tsx
import { Button } from "@/components/ui/button"

<Button>
  Click me
</Button>
```

### Button (with props)

```tsx
import { Button } from "@/components/ui/button"

<Button variant="destructive" size="lg" disabled>
  Delete
</Button>
```

### Input

```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Enter email..." />
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="secondary">
  New
</Badge>
```

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here.
  </CardContent>
</Card>
```

---

## Design Rationale

### Why CodeEditor Component?

1. **Consistency** - Same highlighting across the system
2. **Reusability** - Used in multiple places
3. **Copy feature** - Built-in copy button
4. **Theming** - Matches dark header

### Code Output Rules

| Rule | Implementation |
|------|----------------|
| Include import | Always show import statement |
| Skip default props | Don't include props at default values |
| Boolean shorthand | `disabled` not `disabled={true}` |
| Proper formatting | Multi-line for readability |

**Reference:** 
- Storybook - Code output
- Chakra UI - Playground code generation

---

## CodeEditor Features Used

```
┌─────────────────────────────────────┐
│                              [Copy] │ <- Copy button from CodeEditor
├─────────────────────────────────────┤
│  1 │ import { Button } from "@/...  │ <- Line numbers
│  2 │                                │
│  3 │ <Button variant="secondary">   │ <- Syntax highlighting
│  4 │   Click me                     │
│  5 │ </Button>                      │
└─────────────────────────────────────┘
```

---

## Verification Checklist

- [ ] Card has Code icon in header
- [ ] CodeEditor receives generatedCode
- [ ] Line numbers are visible
- [ ] Dark theme matches design
- [ ] Copy button works (from CodeEditor)
- [ ] Code updates in real-time with prop changes
- [ ] All 5 components generate valid code
- [ ] Import statements are correct
- [ ] Default props are omitted
- [ ] Boolean props use shorthand

---

**Next Section:** [ACCESSIBILITY-PANEL.md](./ACCESSIBILITY-PANEL.md)


