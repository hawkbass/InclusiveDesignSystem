"use client"

import { useState, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { 
  Palette, 
  Type,
  Grid3X3,
  Code,
  Copy,
  CheckCircle2,
  Download,
  Settings,
  FileText,
  ExternalLink,
  X,
  Heart
} from "lucide-react"

export default function Tokens() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [activeTab, setActiveTab] = useState("overview")
  const [copiedCode, setCopiedCode] = useState("")
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const safeAnimationSpeed = Math.max(0.1, animationSpeed[0])

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
            <div className="flex items-center justify-between p-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-100 mb-2">Design Tokens</h1>
                <p className="text-slate-400">Foundational design values that ensure consistency across our design system</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className={`transition-all ${settingsOpen ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'hover:bg-slate-800'}`}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                
                <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours">
                  <Download className="h-4 w-4 mr-2" />
                  Export Tokens
                </Button>
                
                <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Figma Plugin
                </Button>
              </div>
            </div>

            {/* Settings Panel */}
            {settingsOpen && (
              <div className="mx-6 mb-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-slate-200">Interface Settings</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSettingsOpen(false)}
                    className="text-slate-400 hover:text-slate-200"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-300 mb-2 block">Animation Speed</Label>
                    <Slider
                      value={animationSpeed}
                      onValueChange={setAnimationSpeed}
                      max={3}
                      min={0.1}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>Slow</span>
                      <span>Fast</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-slate-300">Reduced Motion</Label>
                    <Switch />
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8 bg-slate-800/50 border border-slate-700/50 p-1 rounded-lg">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all">
                    <FileText className="h-4 w-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="colours" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all">
                    <Palette className="h-4 w-4 mr-2" />
                    colours
                  </TabsTrigger>
                  <TabsTrigger value="typography" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all">
                    <Type className="h-4 w-4 mr-2" />
                    Typography
                  </TabsTrigger>
                  <TabsTrigger value="spacing" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all">
                    <Grid3X3 className="h-4 w-4 mr-2" />
                    Spacing
                  </TabsTrigger>
                  <TabsTrigger value="usage" className="data-[state=active]:bg-fuchsia-500/20 data-[state=active]:text-fuchsia-300 transition-all">
                    <Code className="h-4 w-4 mr-2" />
                    Usage
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <OverviewTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                </TabsContent>
                
                <TabsContent value="colours">
                  <ColorsTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                </TabsContent>
                
                <TabsContent value="typography">
                  <TypographyTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                </TabsContent>
                
                <TabsContent value="spacing">
                  <SpacingTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                </TabsContent>
                
                <TabsContent value="usage">
                  <UsageTab onCopyCode={handleCopyCode} copiedCode={copiedCode} safeAnimationSpeed={safeAnimationSpeed} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Tab Components
function OverviewTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Design Tokens Overview</h2>
        <p className="text-slate-400">Foundational design values for consistent UI development</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-fuchsia-400" />
              colours
            </CardTitle>
            <CardDescription>Brand and semantic colour palette</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">23</div>
            <div className="text-sm text-slate-400">colour tokens</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5 text-blue-400" />
              Typography
            </CardTitle>
            <CardDescription>Font scales and text styles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">10</div>
            <div className="text-sm text-slate-400">Typography tokens</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Grid3X3 className="h-5 w-5 text-green-400" />
              Spacing
            </CardTitle>
            <CardDescription>Consistent spacing scale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">8</div>
            <div className="text-sm text-slate-400">Spacing tokens</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-purple-400" />
              Usage
            </CardTitle>
            <CardDescription>Implementation examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">25+</div>
            <div className="text-sm text-slate-400">Code examples</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ColorsTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  const colorPalettes = [
    {
      name: "Primary colours",
      description: "Main brand identity colours",
      colours: [
        { name: "Fuchsia 500", value: "#ec4899", class: "bg-fuchsia-500" },
        { name: "Purple 500", value: "#a855f7", class: "bg-purple-500" }
      ]
    },
    {
      name: "Neutral colours", 
      description: "Background and text colours",
      colours: [
        { name: "Slate 950", value: "#020617", class: "bg-slate-950" },
        { name: "Slate 100", value: "#f1f5f9", class: "bg-slate-100" }
      ]
    }
  ]
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">colour Tokens</h2>
        <p className="text-slate-400">Brand and semantic colour palette</p>
      </div>
      
      {colorPalettes.map((palette) => (
        <Card key={palette.name} className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle>{palette.name}</CardTitle>
            <CardDescription>{palette.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {palette.colours.map((colour) => (
                <div key={colour.name} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-md ${colour.class} border border-slate-700`} />
                    <div>
                      <div className="text-sm font-medium text-slate-300">{colour.name}</div>
                      <div className="text-xs text-slate-500">{colour.value}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onCopyCode(colour.class, colour.name)}
                  >
                    {copiedCode === colour.name ? (
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function TypographyTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Typography Tokens</h2>
        <p className="text-slate-400">Font scales and text styles</p>
      </div>
    </div>
  )
}

function SpacingTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Spacing Tokens</h2>
        <p className="text-slate-400">Consistent spacing scale</p>
      </div>
    </div>
  )
}

function UsageTab({ onCopyCode, copiedCode, safeAnimationSpeed }: { onCopyCode: (code: string, id: string) => void, copiedCode: string, safeAnimationSpeed: number }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Usage Examples</h2>
        <p className="text-slate-400">How to implement design tokens in your code</p>
      </div>
    </div>
  )
}





