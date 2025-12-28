"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Copy, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Download,
  Code2,
  Eye,
  Settings
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CodePlaygroundProps {
  initialCode?: string
  language?: "tsx" | "ts" | "jsx" | "js" | "css"
  title?: string
  description?: string
  onCodeChange?: (code: string) => void
  showPreview?: boolean
  showControls?: boolean
  className?: string
}

export function CodePlayground({
  initialCode = "",
  language = "tsx",
  title = "Code Playground",
  description,
  onCodeChange,
  showPreview = true,
  showControls = true,
  className
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  const handleCodeChange = (newCode: string) => {
    setCode(newCode)
    setError(null)
    onCodeChange?.(newCode)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const handleReset = () => {
    setCode(initialCode)
    setError(null)
    onCodeChange?.(initialCode)
  }

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `code.${language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Simple preview rendering (in production, you'd use a proper code execution environment)
  const renderPreview = () => {
    if (!code.trim()) {
      return (
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          <div className="text-center">
            <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Enter code to see preview</p>
          </div>
        </div>
      )
    }

    return (
      <div className="p-4 bg-card/50 rounded-lg border border-border/50 min-h-[200px]">
        <div className="text-sm text-muted-foreground mb-2">
          Preview (rendered output)
        </div>
        <div className="bg-background p-4 rounded border border-border">
          {/* In a real implementation, you'd render the actual component here */}
          <pre className="text-xs text-foreground/80 whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {title}
            </CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          {showControls && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {language.toUpperCase()}
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
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="h-8 w-8 p-0"
                aria-label="Reset code"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="h-8 w-8 p-0"
                aria-label="Download code"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {showPreview ? (
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "code" | "preview")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code" className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Code
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="mt-4">
              <Textarea
                value={code}
                onChange={(e) => handleCodeChange(e.target.value)}
                className="font-mono text-sm min-h-[300px] bg-background/50 border-border"
                placeholder="Enter your code here..."
              />
              {error && (
                <div className="mt-2 p-3 bg-red-500/10 border border-red-500/30 rounded text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
            </TabsContent>
            <TabsContent value="preview" className="mt-4">
              {renderPreview()}
            </TabsContent>
          </Tabs>
        ) : (
          <Textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="font-mono text-sm min-h-[300px] bg-background/50 border-border"
            placeholder="Enter your code here..."
          />
        )}
      </CardContent>
    </Card>
  )
}

