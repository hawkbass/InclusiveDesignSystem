"use client"

import { useState, ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Play, 
  Code2, 
  Copy,
  CheckCircle2,
  Settings,
  RotateCcw
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CodePlayground } from "./CodePlayground"

interface LiveDemoProps {
  title?: string
  description?: string
  code?: string
  children: ReactNode
  defaultCode?: string
  language?: "tsx" | "ts" | "jsx" | "js" | "css"
  showCode?: boolean
  className?: string
}

export function LiveDemo({
  title = "Live Demo",
  description,
  code,
  children,
  defaultCode,
  language = "tsx",
  showCode = true,
  className
}: LiveDemoProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)
  const [editedCode, setEditedCode] = useState(code || defaultCode || "")

  const handleCopy = async () => {
    const codeToCopy = editedCode || code || ""
    try {
      await navigator.clipboard.writeText(codeToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const handleReset = () => {
    setEditedCode(code || defaultCode || "")
  }

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              {title}
            </CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          {showCode && code && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8"
                aria-label="Copy code"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
              {editedCode !== (code || defaultCode || "") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="h-8"
                  aria-label="Reset code"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {showCode && code ? (
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "preview" | "code")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Code
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
              <div className="bg-background/50 rounded-lg border border-border/50 p-6">
                {children}
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-4">
              <CodePlayground
                initialCode={editedCode}
                language={language}
                onCodeChange={setEditedCode}
                showPreview={false}
                showControls={false}
              />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="bg-background/50 rounded-lg border border-border/50 p-6">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

