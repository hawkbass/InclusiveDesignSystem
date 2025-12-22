# COMPONENT-STATE.md - Component Declaration and State Management

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `app/design-system/tokens/page.tsx` |
| **This Section** | Lines 398-453 |
| **Previous Section** | [UTILITY-FUNCTIONS.md](./UTILITY-FUNCTIONS.md) |
| **Next Section** | [HERO-HEADER.md](./HERO-HEADER.md) |

---

## Prerequisites

- [UTILITY-FUNCTIONS.md](./UTILITY-FUNCTIONS.md) must be completed first
- This section begins the React component definition

---

## Code Block

Copy this code EXACTLY. Place it directly after the `getWCAGLevel` function.

```tsx

export default function Tokens() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("architecture")
  const [copiedCode, setCopiedCode] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("dark")
  const [selectedColor, setSelectedColor] = useState("#d946ef")
  const [exportFormat, setExportFormat] = useState<"css" | "scss" | "json" | "js">("css")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  // Filter tokens based on search
  const filteredReferenceColors = useMemo(() => {
    if (!searchQuery) return Object.entries(referenceTokens.colors)
    return Object.entries(referenceTokens.colors).filter(([name]) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Generate export code
  const generateExportCode = (format: string) => {
    const tokens = {
      "color-primary": "#d946ef",
      "color-secondary": "#a855f7",
      "color-background": previewTheme === "dark" ? "#020617" : "#ffffff",
      "space-sm": "12px",
      "space-md": "16px",
      "space-lg": "24px",
    }

    switch (format) {
      case "css":
        return `:root {\n${Object.entries(tokens).map(([k, v]) => `  --${k}: ${v};`).join("\n")}\n}`
      case "scss":
        return Object.entries(tokens).map(([k, v]) => `$${k}: ${v};`).join("\n")
      case "json":
        return JSON.stringify(tokens, null, 2)
      case "js":
        return `export const tokens = ${JSON.stringify(tokens, null, 2)};`
      default:
        return ""
    }
  }

  if (!mounted) {
    return null
  }
```

---

## Line-by-Line Specification

### Line 398: Empty Line

```tsx

```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Visual separation before the main component |
| **Why this approach** | Improves readability |
| **Reference** | Code style convention |

---

### Line 399: Component Declaration

```tsx
export default function Tokens() {
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Declares the main React component for this page |
| **Why this approach** | Next.js App Router requires a default export for page components |
| **Reference** | Next.js App Router - Page conventions |

**Breaking Down the Syntax:**

| Part | Meaning |
|------|---------|
| `export` | Makes this component available to other files |
| `default` | This is the primary export from this file |
| `function` | Declares a function (React component) |
| `Tokens` | The component name (matches file purpose) |
| `()` | No props are passed to this page component |
| `{` | Begins the function body |

---

### Lines 400-406: State Variables

```tsx
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("architecture")
  const [copiedCode, setCopiedCode] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("dark")
  const [selectedColor, setSelectedColor] = useState("#d946ef")
  const [exportFormat, setExportFormat] = useState<"css" | "scss" | "json" | "js">("css")
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Creates 7 state variables using React's useState hook |
| **Why this approach** | State allows the component to remember and update values |
| **Reference** | React Documentation - useState Hook |

**State Variable Reference:**

| Variable | Type | Initial Value | Purpose |
|----------|------|---------------|---------|
| `mounted` | boolean | `false` | Tracks if component is in browser (prevents hydration errors) |
| `activeTab` | string | `"architecture"` | Currently selected tab |
| `copiedCode` | string | `""` | ID of recently copied item (for showing checkmark) |
| `searchQuery` | string | `""` | Current search filter text |
| `previewTheme` | `"light" \| "dark"` | `"dark"` | Theme for preview/playground |
| `selectedColor` | string | `"#d946ef"` | Colour picker value (fuchsia-500) |
| `exportFormat` | `"css" \| "scss" \| "json" \| "js"` | `"css"` | Selected export format |

**Understanding useState Syntax:**

```tsx
const [activeTab, setActiveTab] = useState("architecture")
```

| Part | Meaning |
|------|---------|
| `const` | These values won't be reassigned directly |
| `[activeTab, setActiveTab]` | Array destructuring: first = current value, second = update function |
| `useState("architecture")` | Hook call with initial value |

**TypeScript Union Types:**

```tsx
useState<"light" | "dark">("dark")
```

The `<"light" | "dark">` restricts the value to only these two strings. This provides:
- Autocomplete in editors
- Compile-time error checking
- Self-documenting code

**In Simple Terms:** State variables are like sticky notes the component uses to remember things. When you click a tab, we update the `activeTab` note. The component then re-renders to show the new tab.

---

### Lines 408-410: Mount Effect

```tsx
  useEffect(() => {
    setMounted(true)
  }, [])
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Sets `mounted` to true after the component loads in the browser |
| **Why this approach** | Prevents hydration mismatch between server and client |
| **Reference** | Next.js Documentation - Hydration errors |

**Why Is This Needed?**

1. Server renders the page with `mounted = false`
2. Browser receives HTML and React "hydrates" it
3. If server and client HTML differ, React shows an error
4. By waiting for mount, we ensure consistency

**The Empty Dependency Array `[]`:**
- `[]` means "run this effect only once, when the component mounts"
- Without `[]`, it would run on every render
- With `[someVar]`, it would run when `someVar` changes

---

### Lines 412-416: Copy Handler Function

```tsx
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Copies text to clipboard and shows a "copied" indicator for 2 seconds |
| **Why this approach** | Provides user feedback that the copy action worked |
| **Reference** | Material Design - Feedback patterns |

**Function Breakdown:**

| Line | Code | What It Does |
|------|------|--------------|
| 412 | `const handleCopyCode = (code: string, id: string) =>` | Arrow function with two parameters |
| 413 | `navigator.clipboard.writeText(code)` | Browser API to copy text to clipboard |
| 414 | `setCopiedCode(id)` | Remember which item was copied (shows checkmark) |
| 415 | `setTimeout(() => setCopiedCode(""), 2000)` | After 2000ms (2 seconds), clear the copied state |

**User Experience Flow:**

```
1. User clicks token → handleCopyCode("fuchsia-500", "fuchsia-500")
2. Text copied to clipboard
3. copiedCode = "fuchsia-500" → Checkmark appears
4. 2 seconds pass
5. copiedCode = "" → Checkmark disappears, copy icon returns
```

---

### Lines 418-423: Token Filtering Logic

```tsx
  // Filter tokens based on search
  const filteredReferenceColors = useMemo(() => {
    if (!searchQuery) return Object.entries(referenceTokens.colors)
    return Object.entries(referenceTokens.colors).filter(([name]) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Filters colour tokens based on the search query, with memoization |
| **Why this approach** | `useMemo` prevents recalculating on every render |
| **Reference** | React Documentation - useMemo Hook |

**Why useMemo?**

Without memoization:
- User types "f" → filter runs (89 tokens)
- Component re-renders for unrelated reason → filter runs again (same 89 tokens)
- Wasteful!

With useMemo:
- User types "f" → filter runs, result cached
- Component re-renders → cached result returned (no recalculation)
- Only recalculates when `searchQuery` changes

**Filter Logic Explained:**

| Search Query | What Happens |
|--------------|--------------|
| `""` (empty) | Return ALL colours (no filtering) |
| `"fuchsia"` | Return only tokens whose name includes "fuchsia" |
| `"50"` | Return tokens like "fuchsia-50", "slate-50", etc. |

---

### Lines 425-444: Export Code Generator

```tsx
  // Generate export code
  const generateExportCode = (format: string) => {
    const tokens = {
      "color-primary": "#d946ef",
      "color-secondary": "#a855f7",
      "color-background": previewTheme === "dark" ? "#020617" : "#ffffff",
      "space-sm": "12px",
      "space-md": "16px",
      "space-lg": "24px",
    }

    switch (format) {
      case "css":
        return `:root {\n${Object.entries(tokens).map(([k, v]) => `  --${k}: ${v};`).join("\n")}\n}`
      case "scss":
        return Object.entries(tokens).map(([k, v]) => `$${k}: ${v};`).join("\n")
      case "json":
        return JSON.stringify(tokens, null, 2)
      case "js":
        return `export const tokens = ${JSON.stringify(tokens, null, 2)};`
      default:
        return ""
    }
  }
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Generates token code in different formats (CSS, SCSS, JSON, JS) |
| **Why this approach** | Different projects use different technologies |
| **Reference** | Design Tokens W3C - Multi-format export |

**Output Examples:**

**CSS Format:**
```css
:root {
  --color-primary: #d946ef;
  --color-secondary: #a855f7;
  --space-sm: 12px;
}
```

**SCSS Format:**
```scss
$color-primary: #d946ef;
$color-secondary: #a855f7;
$space-sm: 12px;
```

**JSON Format:**
```json
{
  "color-primary": "#d946ef",
  "color-secondary": "#a855f7",
  "space-sm": "12px"
}
```

**JavaScript Format:**
```javascript
export const tokens = {
  "color-primary": "#d946ef",
  "color-secondary": "#a855f7",
  "space-sm": "12px"
};
```

---

### Lines 446-448: Mount Check Guard

```tsx
  if (!mounted) {
    return null
  }
```

| Aspect | Explanation |
|--------|-------------|
| **What it does** | Returns nothing until the component is mounted in the browser |
| **Why this approach** | Prevents hydration errors with interactive content |
| **Reference** | Next.js - Client Components best practices |

**Why Return Null?**
- During server render: `mounted = false` → return null → no HTML
- Browser hydrates: still `mounted = false` → return null → matches server
- useEffect runs: `mounted = true` → component re-renders with full content
- No mismatch between server and client!

---

## Verification Checklist

After copying this code:

- [ ] Component starts with `export default function Tokens() {`
- [ ] All 7 useState calls are present
- [ ] useEffect has empty dependency array `[]`
- [ ] handleCopyCode uses `navigator.clipboard.writeText`
- [ ] filteredReferenceColors uses `useMemo`
- [ ] generateExportCode has all 4 format cases (css, scss, json, js)
- [ ] Mount guard `if (!mounted) return null` is present

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Forgetting TypeScript union types | Include `<"light" \| "dark">` etc. |
| Missing setTimeout cleanup | Not needed here (2s is short enough) |
| Using wrong dependency array | `[searchQuery]` for useMemo, `[]` for useEffect |

---

**Next Section:** [HERO-HEADER.md](./HERO-HEADER.md)


