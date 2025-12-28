"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Palette,
  Download,
  Copy,
  CheckCircle2,
  RotateCcw
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeBuilderProps {
  title?: string
  onThemeChange?: (theme: ThemeValues) => void
  className?: string
}

interface ThemeValues {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
  muted: string
  border: string
}

const defaultTheme: ThemeValues = {
  primary: "#d946ef",
  secondary: "#8b5cf6",
  accent: "#ec4899",
  background: "#0a0a0a",
  foreground: "#fafafa",
  muted: "#27272a",
  border: "#27272a"
}

export function ThemeBuilder({
  title = "Theme Builder",
  onThemeChange,
  className
}: ThemeBuilderProps) {
  const [theme, setTheme] = useState<ThemeValues>(defaultTheme)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    onThemeChange?.(theme)
  }, [theme, onThemeChange])

  const handleColorChange = (key: keyof ThemeValues, value: string) => {
    setTheme(prev => ({ ...prev, [key]: value }))
  }

  const generateCSS = () => {
    return `:root {
  --primary: ${theme.primary};
  --secondary: ${theme.secondary};
  --accent: ${theme.accent};
  --background: ${theme.background};
  --foreground: ${theme.foreground};
  --muted: ${theme.muted};
  --border: ${theme.border};
}`
  }

  const generateJSON = () => {
    return JSON.stringify(theme, null, 2)
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleReset = () => {
    setTheme(defaultTheme)
  }

  const handleDownload = (format: "css" | "json") => {
    const content = format === "css" ? generateCSS() : generateJSON()
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `theme.${format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const colorInputs: { key: keyof ThemeValues; label: string }[] = [
    { key: "primary", label: "Primary" },
    { key: "secondary", label: "Secondary" },
    { key: "accent", label: "Accent" },
    { key: "background", label: "Background" },
    { key: "foreground", label: "Foreground" },
    { key: "muted", label: "Muted" },
    { key: "border", label: "Border" }
  ]

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-semibold text-foreground">
              {title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-8"
              aria-label="Reset theme"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colorInputs.map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key} className="text-sm font-medium text-foreground">
                  {label}
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id={key}
                    type="color"
                    value={theme[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    className="h-10 w-20 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={theme[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    className="flex-1 font-mono text-sm"
                    placeholder="#000000"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border/50 pt-6">
            <Tabs defaultValue="css">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="css">CSS Variables</TabsTrigger>
                <TabsTrigger value="json">JSON</TabsTrigger>
              </TabsList>
              <TabsContent value="css" className="mt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">CSS Variables</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(generateCSS())}
                        className="h-8"
                        aria-label="Copy CSS"
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
                        onClick={() => handleDownload("css")}
                        className="h-8"
                        aria-label="Download CSS"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <pre className="bg-background/50 rounded border border-border/50 p-4 text-sm overflow-x-auto">
                    <code className="text-foreground/80">{generateCSS()}</code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="json" className="mt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">JSON</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(generateJSON())}
                        className="h-8"
                        aria-label="Copy JSON"
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
                        onClick={() => handleDownload("json")}
                        className="h-8"
                        aria-label="Download JSON"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <pre className="bg-background/50 rounded border border-border/50 p-4 text-sm overflow-x-auto">
                    <code className="text-foreground/80">{generateJSON()}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Preview:</strong> Theme changes are applied in real-time. Copy the generated CSS or JSON to use in your project.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

