import * as React from "react"

export interface CodeSnippetProps {
  code: string
  language?: string
  className?: string
}

export function CodeSnippet({ code, language = "", className = "" }: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className={`relative group ${className}`}>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-card text-xs text-muted-foreground rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition"
        aria-label="Copy code"
        type="button"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="bg-card text-foreground rounded p-4 overflow-x-auto text-sm">
        <code className={language}>{code}</code>
      </pre>
    </div>
  )
} 