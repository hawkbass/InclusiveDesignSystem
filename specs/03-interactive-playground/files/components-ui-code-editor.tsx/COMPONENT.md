# COMPONENT.md - Main CodeEditor Component

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `components/ui/code-editor.tsx` |
| **This Section** | Lines 61-150 |
| **Previous Section** | [TYPES.md](./TYPES.md) |
| **Next Section** | [SYNTAX-HIGHLIGHTING.md](./SYNTAX-HIGHLIGHTING.md) |

---

## Code Block

```tsx

export function CodeEditor({
  code,
  language = "tsx",
  showLineNumbers = true,
  theme = "dark",
  maxHeight = "400px",
  onCopy,
  className,
}: CodeEditorProps) {
  const [copied, setCopied] = useState(false)

  // Handle copy to clipboard
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    onCopy?.()
    setTimeout(() => setCopied(false), 2000)
  }, [code, onCopy])

  // Tokenize and highlight code
  const highlightedLines = useMemo(() => {
    return tokenizeCode(code, language)
  }, [code, language])

  // Theme-specific classes
  const themeClasses = theme === "dark" 
    ? "bg-slate-900 text-slate-100" 
    : "bg-slate-100 text-slate-900"

  // Token color classes
  const getTokenClass = (type: TokenType): string => {
    if (theme === "dark") {
      switch (type) {
        case "keyword": return "text-purple-400"
        case "string": return "text-green-400"
        case "component": return "text-yellow-300"
        case "prop": return "text-cyan-400"
        case "value": return "text-orange-400"
        case "comment": return "text-slate-500"
        case "punctuation": return "text-slate-300"
        default: return "text-slate-100"
      }
    } else {
      switch (type) {
        case "keyword": return "text-purple-600"
        case "string": return "text-green-600"
        case "component": return "text-yellow-700"
        case "prop": return "text-cyan-600"
        case "value": return "text-orange-600"
        case "comment": return "text-slate-400"
        case "punctuation": return "text-slate-600"
        default: return "text-slate-900"
      }
    }
  }

  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden",
        themeClasses,
        className
      )}
    >
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={cn(
          "absolute top-3 right-3 p-2 rounded-md transition-colors z-10",
          theme === "dark" 
            ? "hover:bg-slate-700 text-slate-400 hover:text-white"
            : "hover:bg-slate-200 text-slate-500 hover:text-slate-900"
        )}
        aria-label={copied ? "Copied!" : "Copy code"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      {/* Code Container */}
      <div 
        className="overflow-auto p-4 pr-12"
        style={{ maxHeight }}
      >
        <pre className="font-mono text-sm">
          <code>
            {highlightedLines.map((line, lineIndex) => (
              <div key={lineIndex} className="flex">
                {/* Line Number */}
                {showLineNumbers && (
                  <span 
                    className={cn(
                      "select-none w-8 text-right pr-4 flex-shrink-0",
                      theme === "dark" ? "text-slate-600" : "text-slate-400"
                    )}
                  >
                    {lineIndex + 1}
                  </span>
                )}
                
                {/* Line Content */}
                <span className="flex-1">
                  {line.map((token, tokenIndex) => (
                    <span 
                      key={tokenIndex}
                      className={getTokenClass(token.type)}
                    >
                      {token.content}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
```

---

## Line-by-Line Specification

### Lines 61-70: Function Signature

```tsx
export function CodeEditor({
  code,
  language = "tsx",
  showLineNumbers = true,
  theme = "dark",
  maxHeight = "400px",
  onCopy,
  className,
}: CodeEditorProps) {
```

| Prop | Default | Reason |
|------|---------|--------|
| `language` | "tsx" | Most common in React projects |
| `showLineNumbers` | true | Helpful for reference |
| `theme` | "dark" | Standard code block appearance |
| `maxHeight` | "400px" | Prevents huge blocks |

---

### Lines 71-78: Copy State and Handler

```tsx
const [copied, setCopied] = useState(false)

const handleCopy = useCallback(() => {
  navigator.clipboard.writeText(code)
  setCopied(true)
  onCopy?.()
  setTimeout(() => setCopied(false), 2000)
}, [code, onCopy])
```

| Step | Action |
|------|--------|
| 1 | Copy code to clipboard |
| 2 | Set copied state to true |
| 3 | Call onCopy callback if provided |
| 4 | Reset copied state after 2 seconds |

**Reference:** Refactoring UI - Feedback duration (2 seconds)

---

### Lines 80-83: Tokenization

```tsx
const highlightedLines = useMemo(() => {
  return tokenizeCode(code, language)
}, [code, language])
```

| Aspect | Explanation |
|--------|-------------|
| **Memoization** | Only re-tokenize when code/language changes |
| **Returns** | 2D array: `Token[][]` (lines of tokens) |

---

### Lines 85-108: Theme and Token Colors

```tsx
const themeClasses = theme === "dark" 
  ? "bg-slate-900 text-slate-100" 
  : "bg-slate-100 text-slate-900"

const getTokenClass = (type: TokenType): string => {
  if (theme === "dark") {
    switch (type) {
      case "keyword": return "text-purple-400"
      case "string": return "text-green-400"
      // ...
    }
  }
  // ...
}
```

| Token | Dark Color | Light Color |
|-------|------------|-------------|
| keyword | purple-400 | purple-600 |
| string | green-400 | green-600 |
| component | yellow-300 | yellow-700 |
| prop | cyan-400 | cyan-600 |
| value | orange-400 | orange-600 |
| comment | slate-500 | slate-400 |
| punctuation | slate-300 | slate-600 |

**Reference:** VS Code Dark+ theme color palette

---

### Lines 110-140: JSX Structure

```tsx
<div className={cn("relative rounded-lg overflow-hidden", themeClasses, className)}>
  {/* Copy Button */}
  <button onClick={handleCopy} ...>
    {copied ? <Check /> : <Copy />}
  </button>

  {/* Code Container */}
  <div className="overflow-auto p-4 pr-12" style={{ maxHeight }}>
    <pre className="font-mono text-sm">
      <code>
        {highlightedLines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex">
            {showLineNumbers && <span>...</span>}
            <span className="flex-1">
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} className={getTokenClass(token.type)}>
                  {token.content}
                </span>
              ))}
            </span>
          </div>
        ))}
      </code>
    </pre>
  </div>
</div>
```

| Element | Purpose |
|---------|---------|
| Container div | Rounded, themed background |
| Copy button | Positioned top-right |
| Code container | Scrollable with max height |
| Pre/code | Semantic code markup |
| Line wrapper | Flex for line numbers + content |
| Token spans | Individually colored segments |

---

## Verification Checklist

- [ ] Function exports correctly
- [ ] All props have defaults where appropriate
- [ ] Copy handler uses useCallback
- [ ] Tokenization uses useMemo
- [ ] Both themes have complete color mappings
- [ ] Copy button is keyboard accessible (button element)
- [ ] Line numbers are not selectable (select-none)

---

**Next Section:** [SYNTAX-HIGHLIGHTING.md](./SYNTAX-HIGHLIGHTING.md)


