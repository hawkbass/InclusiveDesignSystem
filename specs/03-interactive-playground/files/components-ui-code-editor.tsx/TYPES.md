# TYPES.md - TypeScript Interface

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `components/ui/code-editor.tsx` |
| **This Section** | Lines 31-60 |
| **Previous Section** | [IMPORTS.md](./IMPORTS.md) |
| **Next Section** | [COMPONENT.md](./COMPONENT.md) |

---

## Code Block

```tsx

// Token types for syntax highlighting
type TokenType = 
  | "keyword"      // import, export, const, function, return
  | "string"       // "text", 'text', `text`
  | "component"    // <ComponentName>
  | "prop"         // propName=
  | "value"        // true, false, null, undefined, numbers
  | "comment"      // // comment, /* comment */
  | "punctuation"  // { } ( ) [ ] < > / =
  | "text"         // everything else

interface Token {
  type: TokenType
  content: string
}

interface CodeEditorProps {
  /** The code string to display */
  code: string
  
  /** Programming language for syntax highlighting */
  language?: "tsx" | "jsx" | "css" | "json"
  
  /** Whether to show line numbers */
  showLineNumbers?: boolean
  
  /** Color theme */
  theme?: "dark" | "light"
  
  /** Maximum height before scrolling */
  maxHeight?: string
  
  /** Callback fired after code is copied */
  onCopy?: () => void
  
  /** Additional CSS classes */
  className?: string
}
```

---

## Line-by-Line Specification

### Lines 32-41: TokenType Definition

```tsx
type TokenType = 
  | "keyword"
  | "string"
  | "component"
  | "prop"
  | "value"
  | "comment"
  | "punctuation"
  | "text"
```

| Token Type | Examples | Color (Dark) |
|------------|----------|--------------|
| `keyword` | import, export, const | Purple |
| `string` | "hello", 'world' | Green |
| `component` | `<Button>`, `<Card>` | Yellow |
| `prop` | variant=, size= | Cyan |
| `value` | true, false, 123 | Orange |
| `comment` | // comment | Gray |
| `punctuation` | { } < > = | White |
| `text` | Everything else | White |

---

### Lines 43-46: Token Interface

```tsx
interface Token {
  type: TokenType
  content: string
}
```

| Property | Purpose |
|----------|---------|
| `type` | Determines color class |
| `content` | Actual text to display |

---

### Lines 48-70: CodeEditorProps Interface

```tsx
interface CodeEditorProps {
  code: string
  language?: "tsx" | "jsx" | "css" | "json"
  showLineNumbers?: boolean
  theme?: "dark" | "light"
  maxHeight?: string
  onCopy?: () => void
  className?: string
}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | string | Required | The code to display |
| `language` | union | "tsx" | Syntax highlighting mode |
| `showLineNumbers` | boolean | true | Show/hide line numbers |
| `theme` | union | "dark" | Color scheme |
| `maxHeight` | string | "400px" | Container max height |
| `onCopy` | function | undefined | Copy callback |
| `className` | string | undefined | Additional classes |

---

## JSDoc Comments

Each prop has a JSDoc comment for IDE documentation:

```tsx
/** The code string to display */
code: string
```

This appears in VS Code tooltips when using the component.

---

## Verification Checklist

- [ ] TokenType has 8 variants
- [ ] Token interface has type and content
- [ ] CodeEditorProps has 7 props
- [ ] All props have JSDoc comments
- [ ] Optional props marked with `?`

---

**Next Section:** [COMPONENT.md](./COMPONENT.md)


