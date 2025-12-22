import React from "react"
import { Button } from "@/components/ui/button"
import { Copy, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyCodeButtonProps {
  code: string
  id: string
  copiedCode: string
  onCopy: (code: string, id: string) => void
  label?: string
  className?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
}

export function CopyCodeButton({
  code,
  id,
  copiedCode,
  onCopy,
  label = "Copy Code",
  className,
  size = "sm",
  variant = "outline"
}: CopyCodeButtonProps) {
  const isLoading = copiedCode === id

  return (
    <Button
      size={size}
      variant={variant}
      onClick={() => onCopy(code, id)}
      className={cn("transition-all duration-200", className)}
    >
      {isLoading ? (
        <CheckCircle2 className="h-4 w-4 text-green-400 mr-2" />
      ) : (
        <Copy className="h-4 w-4 mr-2" />
      )}
      {isLoading ? "Copied!" : label}
    </Button>
  )
}

interface CodeSnippetWithCopyProps {
  code: string
  id: string
  copiedCode: string
  onCopy: (code: string, id: string) => void
  language?: string
  title?: string
  className?: string
}

export function CodeSnippetWithCopy({
  code,
  id,
  copiedCode,
  onCopy,
  language = "tsx",
  title,
  className
}: CodeSnippetWithCopyProps) {
  return (
    <div className={cn("relative", className)}>
      {title && (
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground/80">{title}</span>
          <CopyCodeButton
            code={code}
            id={id}
            copiedCode={copiedCode}
            onCopy={onCopy}
          />
        </div>
      )}
      <pre className="bg-background/50 p-4 rounded-lg text-sm text-foreground/80 border border-border/50 whitespace-pre-wrap overflow-hidden">
        <code>{code}</code>
      </pre>
      {!title && (
        <div className="absolute top-2 right-2">
          <CopyCodeButton
            code={code}
            id={id}
            copiedCode={copiedCode}
            onCopy={onCopy}
            label=""
            className="h-8 w-8 p-0"
            variant="ghost"
          />
        </div>
      )}
    </div>
  )
}
