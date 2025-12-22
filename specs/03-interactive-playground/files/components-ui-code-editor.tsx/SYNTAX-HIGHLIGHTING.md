# SYNTAX-HIGHLIGHTING.md - Tokenization Logic

## File Context

| Property | Value |
|----------|-------|
| **Full Path** | `components/ui/code-editor.tsx` |
| **This Section** | Lines 151-200 |
| **Previous Section** | [COMPONENT.md](./COMPONENT.md) |
| **Next Section** | None (this is the last section) |

---

## Code Block

```tsx

// Tokenize code into highlighted segments
function tokenizeCode(code: string, language: string): Token[][] {
  const lines = code.split("\n")
  
  return lines.map(line => {
    const tokens: Token[] = []
    let remaining = line
    
    while (remaining.length > 0) {
      // Keywords
      const keywordMatch = remaining.match(/^(import|export|from|const|let|var|function|return|if|else|switch|case|default|for|while|do|break|continue|try|catch|finally|throw|new|typeof|instanceof|void|delete|in|of|as|type|interface|extends|implements|class|public|private|protected|static|readonly|async|await)\b/)
      if (keywordMatch) {
        tokens.push({ type: "keyword", content: keywordMatch[0] })
        remaining = remaining.slice(keywordMatch[0].length)
        continue
      }
      
      // Strings (double quotes)
      const doubleStringMatch = remaining.match(/^"[^"]*"/)
      if (doubleStringMatch) {
        tokens.push({ type: "string", content: doubleStringMatch[0] })
        remaining = remaining.slice(doubleStringMatch[0].length)
        continue
      }
      
      // Strings (single quotes)
      const singleStringMatch = remaining.match(/^'[^']*'/)
      if (singleStringMatch) {
        tokens.push({ type: "string", content: singleStringMatch[0] })
        remaining = remaining.slice(singleStringMatch[0].length)
        continue
      }
      
      // Template literals
      const templateMatch = remaining.match(/^`[^`]*`/)
      if (templateMatch) {
        tokens.push({ type: "string", content: templateMatch[0] })
        remaining = remaining.slice(templateMatch[0].length)
        continue
      }
      
      // JSX Components (capitalized tags)
      const componentMatch = remaining.match(/^<\/?[A-Z][a-zA-Z0-9]*/)
      if (componentMatch) {
        tokens.push({ type: "component", content: componentMatch[0] })
        remaining = remaining.slice(componentMatch[0].length)
        continue
      }
      
      // Props (word followed by =)
      const propMatch = remaining.match(/^[a-zA-Z][a-zA-Z0-9]*(?==)/)
      if (propMatch) {
        tokens.push({ type: "prop", content: propMatch[0] })
        remaining = remaining.slice(propMatch[0].length)
        continue
      }
      
      // Boolean/null values
      const valueMatch = remaining.match(/^(true|false|null|undefined|NaN|Infinity)\b/)
      if (valueMatch) {
        tokens.push({ type: "value", content: valueMatch[0] })
        remaining = remaining.slice(valueMatch[0].length)
        continue
      }
      
      // Numbers
      const numberMatch = remaining.match(/^\d+\.?\d*/)
      if (numberMatch) {
        tokens.push({ type: "value", content: numberMatch[0] })
        remaining = remaining.slice(numberMatch[0].length)
        continue
      }
      
      // Single-line comments
      const commentMatch = remaining.match(/^\/\/.*$/)
      if (commentMatch) {
        tokens.push({ type: "comment", content: commentMatch[0] })
        remaining = ""
        continue
      }
      
      // Punctuation
      const punctuationMatch = remaining.match(/^[{}()\[\]<>\/=,;:.]/)
      if (punctuationMatch) {
        tokens.push({ type: "punctuation", content: punctuationMatch[0] })
        remaining = remaining.slice(1)
        continue
      }
      
      // Default: consume one character as text
      tokens.push({ type: "text", content: remaining[0] })
      remaining = remaining.slice(1)
    }
    
    return tokens
  })
}
```

---

## Line-by-Line Specification

### Lines 153-158: Function Setup

```tsx
function tokenizeCode(code: string, language: string): Token[][] {
  const lines = code.split("\n")
  
  return lines.map(line => {
    const tokens: Token[] = []
    let remaining = line
```

| Step | Action |
|------|--------|
| 1 | Split code into lines |
| 2 | Map over each line |
| 3 | Initialize tokens array |
| 4 | Track remaining text to parse |

---

### Lines 161-168: Keyword Matching

```tsx
const keywordMatch = remaining.match(/^(import|export|from|const|let|var|function|return|if|else|switch|case|default|for|while|do|break|continue|try|catch|finally|throw|new|typeof|instanceof|void|delete|in|of|as|type|interface|extends|implements|class|public|private|protected|static|readonly|async|await)\b/)
if (keywordMatch) {
  tokens.push({ type: "keyword", content: keywordMatch[0] })
  remaining = remaining.slice(keywordMatch[0].length)
  continue
}
```

| Regex Part | Meaning |
|------------|---------|
| `^` | Start of remaining string |
| `(word\|word)` | Match any keyword |
| `\b` | Word boundary (no partial matches) |

**Keywords included:**
- Module: import, export, from
- Variables: const, let, var
- Control: if, else, switch, case, for, while
- Functions: function, return, async, await
- Classes: class, extends, implements
- Types: type, interface, as

---

### Lines 170-188: String Matching

```tsx
// Double quotes
const doubleStringMatch = remaining.match(/^"[^"]*"/)

// Single quotes
const singleStringMatch = remaining.match(/^'[^']*'/)

// Template literals
const templateMatch = remaining.match(/^`[^`]*`/)
```

| Pattern | Matches |
|---------|---------|
| `"[^"]*"` | `"anything not quote"` |
| `'[^']*'` | `'anything not quote'` |
| `` `[^`]*` `` | `` `template` `` |

---

### Lines 190-198: JSX Component Matching

```tsx
const componentMatch = remaining.match(/^<\/?[A-Z][a-zA-Z0-9]*/)
```

| Pattern Part | Meaning |
|--------------|---------|
| `<\/?` | Opening `<` or closing `</` |
| `[A-Z]` | First letter uppercase (React convention) |
| `[a-zA-Z0-9]*` | Rest of component name |

**Examples matched:**
- `<Button`
- `</Card`
- `<MyComponent`

---

### Lines 200-207: Prop Matching

```tsx
const propMatch = remaining.match(/^[a-zA-Z][a-zA-Z0-9]*(?==)/)
```

| Pattern Part | Meaning |
|--------------|---------|
| `[a-zA-Z]` | Starts with letter |
| `[a-zA-Z0-9]*` | Continues with alphanumeric |
| `(?==)` | Followed by `=` (lookahead) |

**Examples matched:**
- `variant` (in `variant=`)
- `className` (in `className=`)
- `onClick` (in `onClick=`)

---

### Lines 209-224: Value and Number Matching

```tsx
// Boolean/null values
const valueMatch = remaining.match(/^(true|false|null|undefined|NaN|Infinity)\b/)

// Numbers
const numberMatch = remaining.match(/^\d+\.?\d*/)
```

| Type | Examples |
|------|----------|
| Boolean | true, false |
| Null-ish | null, undefined |
| Special | NaN, Infinity |
| Integer | 123, 0, 42 |
| Float | 3.14, 0.5 |

---

### Lines 226-232: Comment Matching

```tsx
const commentMatch = remaining.match(/^\/\/.*$/)
if (commentMatch) {
  tokens.push({ type: "comment", content: commentMatch[0] })
  remaining = ""  // Comment consumes rest of line
  continue
}
```

| Aspect | Explanation |
|--------|-------------|
| `\/\/` | Matches `//` |
| `.*$` | Matches rest of line |
| `remaining = ""` | Comment ends line |

---

### Lines 234-240: Punctuation Matching

```tsx
const punctuationMatch = remaining.match(/^[{}()\[\]<>\/=,;:.]/)
```

| Character | Usage |
|-----------|-------|
| `{ }` | Object braces |
| `( )` | Function calls |
| `[ ]` | Array brackets |
| `< >` | JSX tags |
| `/` | Closing tags |
| `=` | Assignment |
| `,` | Separators |
| `;` | Statements |
| `:` | Type annotations |
| `.` | Property access |

---

### Lines 242-247: Default Handler

```tsx
// Default: consume one character as text
tokens.push({ type: "text", content: remaining[0] })
remaining = remaining.slice(1)
```

Any character not matched by specific patterns becomes plain text.

---

## Algorithm Summary

1. **Split** code into lines
2. **For each line**, initialize empty token array
3. **While characters remain**:
   - Try each pattern in order (keywords first)
   - First match wins, push token
   - Remove matched text from remaining
4. **Return** array of lines, each containing tokens

---

## Verification Checklist

- [ ] Function is defined outside component
- [ ] Returns Token[][] (lines of tokens)
- [ ] Keywords regex includes all common JS/TS keywords
- [ ] Strings handle double, single, and template literals
- [ ] Components match PascalCase tags
- [ ] Props match word= pattern
- [ ] Values include booleans, null, numbers
- [ ] Comments consume rest of line
- [ ] Punctuation includes all common characters
- [ ] Default handler prevents infinite loops

---

## File Complete

The `code-editor.tsx` file is now fully specified.

**Assembly order:**
1. IMPORTS.md
2. TYPES.md
3. COMPONENT.md
4. SYNTAX-HIGHLIGHTING.md

**Total lines:** ~200


