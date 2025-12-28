"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Copy, 
  CheckCircle2, 
  Code2,
  ExternalLink,
  Play
} from "lucide-react"
import { cn } from "@/lib/utils"
import { LiveDemo } from "../interactive/LiveDemo"

interface ExampleCardProps {
  title: string
  description: string
  code: string
  preview?: React.ReactNode
  complexity?: "beginner" | "intermediate" | "advanced"
  tags?: string[]
  language?: "tsx" | "ts" | "jsx" | "js" | "css"
  useCase?: string
  related?: string[]
  className?: string
}

export function ExampleCard({
  title,
  description,
  code,
  preview,
  complexity = "beginner",
  tags = [],
  language = "tsx",
  useCase,
  related,
  className
}: ExampleCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const complexityColors = {
    beginner: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
    intermediate: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
    advanced: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30"
  }

  return (
    <Card className={cn("bg-card/50 border-border/50 hover:border-primary/50 transition-colors", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              {description}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Badge variant="outline" className={cn("text-xs", complexityColors[complexity])}>
              {complexity}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0"
              aria-label="Copy code"
            >
              {copied ? (
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {useCase && (
          <div className="mt-3 p-3 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Use case:</span> {useCase}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {preview ? (
          <LiveDemo
            title=""
            code={code}
            language={language}
            showCode={true}
          >
            {preview}
          </LiveDemo>
        ) : (
          <div className="space-y-4">
            <div className="bg-background/50 rounded-lg border border-border/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Code Example</span>
                <Badge variant="outline" className="text-xs">
                  {language.toUpperCase()}
                </Badge>
              </div>
              <pre className="text-sm text-foreground/80 overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        )}
        {related && related.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Related examples:</p>
            <div className="flex flex-wrap gap-2">
              {related.map((rel) => (
                <Button
                  key={rel}
                  variant="ghost"
                  size="sm"
                  className="h-6 text-xs"
                >
                  {rel}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

