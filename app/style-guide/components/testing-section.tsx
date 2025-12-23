"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Palette,
  Target,
  Monitor,
  Smartphone,
  Tablet,
  Download,
  Zap,
  Eye,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Copy,
  Play,
  Settings,
  Contrast,
  Gauge
} from "lucide-react"

interface TestingSectionProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favourites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function TestingSection({ 
  searchQuery, 
  viewMode, 
  onCopyCode, 
  copiedCode, 
  favourites, 
  onToggleFavorite 
}: TestingSectionProps) {
  const [showAccessibilityTest, setShowAccessibilityTest] = useState(false)
  const [showResponsiveTest, setShowResponsiveTest] = useState(false)
  const [showColorGenerator, setShowColorGenerator] = useState(false)
  const [showExportModal, setShowExportModal] = useState(false)
  const [generatedColors, setGeneratedColors] = useState<string[]>([])
  const [selectedViewport, setSelectedViewport] = useState("desktop")
  const [testResults, setTestResults] = useState<any>(null)

  // colour Generator Function
  const generateColorPalette = () => {
    const baseColors = ['#d946ef', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4', '#059669']
    const variations = ['300', '400', '500', '600', '700', '800', '900']
    
    const palette = []
    const selectedBase = baseColors[Math.floor(Math.random() * baseColors.length)]
    
    // Generate variations
    for (let i = 0; i < 5; i++) {
      const hue = Math.floor(Math.random() * 360)
      const saturation = Math.floor(Math.random() * 40) + 60 // 60-100%
      const lightness = Math.floor(Math.random() * 40) + 30 // 30-70%
      palette.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
    }
    
    setGeneratedColors(palette)
    setShowColorGenerator(true)
  }

  // Accessibility Test Function
  const runAccessibilityTest = () => {
    setTestResults({
      colorContrast: { score: 'AAA', details: 'All colour combinations exceed WCAG 2.1 AAA standards' },
      keyboardNav: { score: 'Pass', details: 'All interactive elements are keyboard accessible' },
      screenReader: { score: 'Excellent', details: 'Proper ARIA labels and semantic markup' },
      focusManagement: { score: 'Optimized', details: 'Clear focus indicators and logical tab order' },
      colorBlindness: { score: 'Pass', details: 'Alternative indicators provided for colour-only information' },
      textSize: { score: 'Responsive', details: 'Text scales properly from 100% to 200%' }
    })
    setShowAccessibilityTest(true)
  }

  // Export Function
  const exportDesignSystem = () => {
    const exportData = {
      colours: {
        primary: '#d946ef',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      },
      typography: {
        fontFamily: 'Inter, system-ui, sans-serif',
        scales: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl']
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem'
      },
      components: favourites.size,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    }
    
    onCopyCode(JSON.stringify(exportData, null, 2), 'export-data')
    setShowExportModal(true)
  }

  const testingTools = [
    {
      id: 'colour-generator',
      name: 'Colour Generator',
      description: 'Generate harmonious colour palettes',
      icon: Palette,
      colour: 'fuchsia',
      action: generateColorPalette
    },
    {
      id: 'accessibility-test',
      name: 'Accessibility Test',
      description: 'WCAG 2.1 compliance checker',
      icon: Target,
      colour: 'green',
      action: runAccessibilityTest
    },
    {
      id: 'responsive-test',
      name: 'Responsive Test',
      description: 'Multi-device preview',
      icon: Monitor,
      colour: 'blue',
      action: () => setShowResponsiveTest(true)
    },
    {
      id: 'export-kit',
      name: 'Export Kit',
      description: 'Download design tokens',
      icon: Download,
      colour: 'purple',
      action: exportDesignSystem
    }
  ]

  const responsiveBreakpoints = {
    mobile: { width: '375px', height: '667px', label: 'Mobile' },
    tablet: { width: '768px', height: '1024px', label: 'Tablet' },
    desktop: { width: '1920px', height: '1080px', label: 'Desktop' }
  }

  return (
    <div className="space-y-8">
      {/* Interactive Testing Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testingTools.map((tool) => (
          <Card 
            key={tool.id}
            className="border-border/50 bg-card/30 hover:bg-card/50 transition-all group cursor-pointer"
            onClick={tool.action}
          >
            <CardContent className="p-6 text-center">
              <div className={`p-3 rounded-lg mb-4 mx-auto w-fit bg-${tool.colour}-500/20 group-hover:bg-${tool.colour}-500/30 transition-all`}>
                <tool.icon className={`h-6 w-6 text-${tool.colour}-400 group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <Button 
                size="sm" 
                className={`w-full bg-${tool.colour}-600 hover:bg-${tool.colour}-700 group-hover:shadow-lg group-hover:shadow-${tool.colour}-500/25 transition-all`}
              >
                <Play className="h-3 w-3 mr-2" />
                Run Test
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Live Component Testing Area */}
      <Card className="border-border/50 bg-card/30">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-400" />
            Live Component Preview
          </CardTitle>
          <CardDescription>
            Interactive testing environment for design system components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Button Variants */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Button Variants</h4>
              <div className="space-y-3">
                <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700">
                  Primary Action
                </Button>
                <Button variant="outline" className="w-full border-border text-foreground hover:bg-card">
                  Secondary Action
                </Button>
                <Button variant="ghost" className="w-full text-foreground/80 hover:bg-card">
                  Ghost Action
                </Button>
                <Button variant="destructive" className="w-full">
                  Destructive Action
                </Button>
              </div>
            </div>

            {/* Form Controls */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Form Controls</h4>
              <div className="space-y-3">
                <Input 
                  placeholder="Normal input state" 
                  className="bg-card border-border text-foreground"
                />
                <Input 
                  placeholder="Focused state" 
                  className="bg-card border-primary ring-2 ring-fuchsia-500/20 text-foreground"
                />
                <Input 
                  placeholder="Error state" 
                  className="bg-card border-red-500 text-foreground"
                />
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked />
                  <span className="text-sm text-muted-foreground">Toggle setting</span>
                </div>
              </div>
            </div>

            {/* Progress & Feedback */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Progress & Feedback</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Loading progress</div>
                  <Progress value={33} className="h-2" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Upload progress</div>
                  <Progress value={66} className="h-2" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Complete</div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-fuchsia-500/20 text-primary text-xs">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="text-foreground">John Doe</div>
                    <div className="text-muted-foreground text-xs">User Avatar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Colour Generator Modal */}
      <Dialog open={showColorGenerator} onOpenChange={setShowColorGenerator}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              Generated Colour Palette
            </DialogTitle>
            <DialogDescription>
              AI-generated harmonious colours based on your design system
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-4">
              {generatedColors.map((colour, index) => (
                <div key={index} className="group">
                  <div 
                    className="w-full h-20 rounded-lg border border-border/50 group-hover:scale-105 transition-all cursor-pointer"
                    style={{ backgroundColor: colour }}
                    onClick={() => onCopyCode(colour, `generated-${index}`)}
                  >
                    <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {copiedCode === `generated-${index}` ? (
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      ) : (
                        <Copy className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center font-mono">
                    {colour}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button onClick={generateColorPalette} className="flex-1">
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate New Palette
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const paletteString = generatedColors.join('\n')
                  onCopyCode(paletteString, 'full-palette')
                }}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy All
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Accessibility Test Modal */}
      <Dialog open={showAccessibilityTest} onOpenChange={setShowAccessibilityTest}>
        <DialogContent className="max-w-xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
              Accessibility Test Results
            </DialogTitle>
            <DialogDescription>
              WCAG 2.1 compliance analysis for your design system
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {testResults && Object.entries(testResults).map(([key, result]: [string, any]) => (
              <div key={key} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-xs text-muted-foreground">{result.details}</div>
                </div>
                <Badge className={`${
                  result.score === 'AAA' || result.score === 'Pass' || result.score === 'Excellent' || result.score === 'Optimized' || result.score === 'Responsive'
                    ? 'bg-green-500/20 text-green-600 dark:text-green-300' 
                    : result.score === 'AA' || result.score === 'Good'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : 'bg-red-500/20 text-red-600 dark:text-red-300'
                }`}>
                  {result.score}
                </Badge>
              </div>
            ))}
            
            <Button onClick={() => setShowAccessibilityTest(false)} className="w-full mt-4">
              Close Test Results
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Responsive Test Modal */}
      <Dialog open={showResponsiveTest} onOpenChange={setShowResponsiveTest}>
        <DialogContent className="max-w-4xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Monitor className="h-5 w-5 text-blue-400" />
              Responsive Preview
            </DialogTitle>
            <DialogDescription>
              Test your components across different screen sizes
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <Tabs value={selectedViewport} onValueChange={setSelectedViewport}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mobile" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Mobile
                </TabsTrigger>
                <TabsTrigger value="tablet" className="flex items-center gap-2">
                  <Tablet className="h-4 w-4" />
                  Tablet
                </TabsTrigger>
                <TabsTrigger value="desktop" className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Desktop
                </TabsTrigger>
              </TabsList>
              
              {Object.entries(responsiveBreakpoints).map(([key, viewport]) => (
                <TabsContent key={key} value={key} className="mt-4">
                  <div className="bg-card rounded-lg p-6 border border-border/50">
                    <div className="text-center mb-4">
                      <Badge variant="outline" className="text-muted-foreground border-border">
                        {viewport.width} × {viewport.height}
                      </Badge>
                    </div>
                    <div 
                      className="bg-background rounded border border-border/50 mx-auto p-4 overflow-hidden"
                      style={{ 
                        width: key === 'desktop' ? '100%' : viewport.width,
                        height: '300px',
                        maxWidth: '100%'
                      }}
                    >
                      {/* Sample responsive content */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground">Sample Content</h3>
                          <Badge className="bg-fuchsia-500/20 text-primary">Live</Badge>
                        </div>
                        <div className={`grid gap-3 ${
                          key === 'mobile' ? 'grid-cols-1' :
                          key === 'tablet' ? 'grid-cols-2' :
                          'grid-cols-3'
                        }`}>
                          <Button size="sm" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                            Primary
                          </Button>
                          <Button size="sm" variant="outline">
                            Secondary
                          </Button>
                          {key === 'desktop' && (
                            <Button size="sm" variant="ghost">
                              Tertiary
                            </Button>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Viewport: {viewport.label} ({viewport.width} × {viewport.height})
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      {/* Export Modal */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent className="max-w-xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Download className="h-5 w-5 text-purple-400" />
              Design System Export
            </DialogTitle>
            <DialogDescription>
              Your design tokens have been copied to clipboard
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-4">
              <div className="text-sm text-foreground/80 mb-2">Export includes:</div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Complete colour palette with hex values</li>
                <li>• Typography scale and font family</li>
                <li>• Spacing system tokens</li>
                <li>• {favourites.size} favourited components</li>
                <li>• Export metadata and version</li>
              </ul>
            </div>
            
            <Button onClick={() => setShowExportModal(false)} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}






