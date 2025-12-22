"use client"

import * as React from "react"
import { useState, useCallback, useMemo } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
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
