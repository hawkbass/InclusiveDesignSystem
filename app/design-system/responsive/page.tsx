"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Smartphone, Tablet, Monitor, Copy, Settings, X, Eye, Code2, Download, ExternalLink, Sparkles, Grid3X3, Zap, Globe, Layers, ArrowRight, Target, Lightbulb } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import Link from "next/link"

export default function Responsive() {
  const [mounted, setMounted] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState([1])
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [currentBreakpoint, setCurrentBreakpoint] = useState("desktop")

  const safeAnimationSpeed = animationSpeed?.[0] ?? 1

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && animationSpeed?.[0]) {
      document.documentElement.style.setProperty('--animation-speed', `${1 / animationSpeed[0]}s`)
    }
  }, [animationSpeed, mounted])

  if (!mounted) {
    return null
  }

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(""), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="flex min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 mb-4">
                    Adaptive Design System
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Responsive Design
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Guidelines</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Build interfaces that work beautifully across all devices and screen sizes with our systematic approach to responsive design.
                  </p>
                </div>

                {/* Device Preview */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm">Mobile</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Tablet className="h-6 w-6" />
                    <span className="text-sm">Tablet</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="flex items-center gap-3 text-primary">
                    <Monitor className="h-6 w-6" />
                    <span className="text-sm">Desktop</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    className={`transition-all ${settingsOpen ? 'bg-fuchsia-500/20 border-primary/50' : 'hover:bg-card'}`}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-card transition-colours">
                    <Download className="h-4 w-4 mr-2" />
                    Export Guidelines
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Design Resources
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            {settingsOpen && (
              <div className="mx-6 mb-4 p-4 bg-card/50 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-foreground">Interface Settings</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSettingsOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-foreground/80 mb-2 block">Animation Speed</Label>
                    <Slider
                      value={animationSpeed}
                      onValueChange={setAnimationSpeed}
                      min={0.1}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Slow</span>
                      <span>Fast</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* What is Responsive Design? */}
          <section className="px-6 lg:px-12 py-12 bg-card/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">What is Responsive Design?</h2>
                  <div className="space-y-4 text-foreground/80">
                    <p className="text-lg">
                      Responsive design ensures your interface <strong className="text-primary">adapts fluidly</strong> to any screen size, from mobile phones to ultrawide displays.
                    </p>
                    <p>
                      Our systematic approach uses <strong className="text-purple-600 dark:text-purple-600 dark:text-purple-300">breakpoints, flexible layouts, and adaptive components</strong> to create seamless experiences across all devices.
                    </p>
                  </div>
                </div>
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      <CardTitle className="text-foreground">Key Principles</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Mobile-First</strong>
                        <p className="text-sm text-muted-foreground">Start with mobile, enhance for larger screens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Flexible Layouts</strong>
                        <p className="text-sm text-muted-foreground">Use CSS Grid and Flexbox for adaptable structures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Progressive Enhancement</strong>
                        <p className="text-sm text-muted-foreground">Add complexity as screen space increases</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="px-6 lg:px-12 py-8 border-b border-border/50">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-lg font-semibold text-foreground">Viewing:</h2>
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-auto min-w-[200px] h-10 bg-card/40 border border-border/30 hover:bg-card/60 transition-colors text-foreground/80">
                      {(() => {
                        const tabs = [
                          { value: "overview", label: "Overview", icon: Eye },
                          { value: "breakpoints", label: "Breakpoints", icon: Monitor },
                          { value: "layouts", label: "Layouts", icon: Grid3X3 },
                          { value: "guidelines", label: "Guidelines", icon: Target }
                        ];
                        const currentTab = tabs.find(tab => tab.value === activeTab);
                        return currentTab ? (
                          <div className="flex items-center gap-3">
                            <currentTab.icon className="h-4 w-4" />
                            <span>{currentTab.label}</span>
                          </div>
                        ) : null;
                      })()}
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="overview" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span>Overview</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="breakpoints" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Monitor className="h-4 w-4 text-muted-foreground" />
                          <span>Breakpoints</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="layouts" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Grid3X3 className="h-4 w-4 text-muted-foreground" />
                          <span>Layouts</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="guidelines" className="focus:bg-muted/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          <span>Guidelines</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab("breakpoints")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl w-fit">
                          <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <CardTitle className="text-foreground">Breakpoints</CardTitle>
                        <CardDescription>Responsive breakpoint system for all devices</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">5 breakpoints</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab("layouts")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl w-fit">
                          <Grid3X3 className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <CardTitle className="text-foreground">Layouts</CardTitle>
                        <CardDescription>Flexible grid systems and layout patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">CSS Grid</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={() => setActiveTab("guidelines")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl w-fit">
                          <Target className="h-8 w-8 text-purple-400" />
                        </div>
                        <CardTitle className="text-foreground">Guidelines</CardTitle>
                        <CardDescription>Best practices and implementation tips</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Best Practices</Badge>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl w-fit">
                          <Code2 className="h-8 w-8 text-orange-400" />
                        </div>
                        <CardTitle className="text-foreground">Examples</CardTitle>
                        <CardDescription>Real-world responsive patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Live demos</Badge>
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Reference */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        Quick Reference
                      </CardTitle>
                      <CardDescription>Essential responsive design values</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Breakpoints</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Mobile</span>
                              <code className="text-foreground/80">0px+</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Tablet</span>
                              <code className="text-foreground/80">768px+</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Desktop</span>
                              <code className="text-foreground/80">1024px+</code>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Container Sizes</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">SM</span>
                              <code className="text-foreground/80">640px</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">MD</span>
                              <code className="text-foreground/80">768px</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">LG</span>
                              <code className="text-foreground/80">1024px</code>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Grid Columns</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Mobile</span>
                              <code className="text-foreground/80">1-2 cols</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Tablet</span>
                              <code className="text-foreground/80">2-4 cols</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Desktop</span>
                              <code className="text-foreground/80">4-12 cols</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Breakpoints Tab */}
                <TabsContent value="breakpoints" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Breakpoint System</h3>
                    <p className="text-muted-foreground mb-8">
                      Our breakpoint system is based on common device sizes and ensures consistent experiences across all screen widths.
                    </p>
                  </div>

                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground">Standard Breakpoints</CardTitle>
                      <CardDescription>Mobile-first responsive breakpoint system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          { 
                            name: "Mobile", 
                            range: "0px - 767px", 
                            token: "sm:", 
                            description: "Phones and small devices",
                            icon: Smartphone,
                            color: "text-blue-600 dark:text-blue-400"
                          },
                          { 
                            name: "Tablet", 
                            range: "768px - 1023px", 
                            token: "md:", 
                            description: "Tablets and small laptops",
                            icon: Tablet,
                            color: "text-green-600 dark:text-green-400"
                          },
                          { 
                            name: "Desktop", 
                            range: "1024px - 1279px", 
                            token: "lg:", 
                            description: "Standard desktop screens",
                            icon: Monitor,
                            color: "text-purple-400"
                          },
                          { 
                            name: "Large Desktop", 
                            range: "1280px - 1535px", 
                            token: "xl:", 
                            description: "Large desktop displays",
                            icon: Monitor,
                            color: "text-orange-400"
                          },
                          { 
                            name: "Extra Large", 
                            range: "1536px+", 
                            token: "2xl:", 
                            description: "Ultra-wide and 4K displays",
                            icon: Monitor,
                            color: "text-red-400"
                          }
                        ].map((breakpoint) => (
                          <div key={breakpoint.token} className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/50">
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-3">
                                <breakpoint.icon className={`h-6 w-6 ${breakpoint.color}`} />
                                <div>
                                  <div className="font-medium text-foreground">{breakpoint.name}</div>
                                  <div className="text-sm text-muted-foreground">{breakpoint.description}</div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <code className="text-sm text-foreground/80 bg-card/50 px-2 py-1 rounded">{breakpoint.token}</code>
                              <div className="text-sm text-muted-foreground mt-1">{breakpoint.range}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Implementation Example */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground">Implementation Example</CardTitle>
                      <CardDescription>How to use breakpoints in your code</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground/80">Tailwind CSS:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">\n  <!-- Content -->\n</div>', 'tailwind-breakpoints')}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {copiedCode === 'tailwind-breakpoints' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap">
{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <!-- Content -->
</div>`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Layouts Tab */}
                <TabsContent value="layouts" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Responsive Layouts</h3>
                    <p className="text-muted-foreground mb-8">
                      Flexible layout systems that adapt to different screen sizes using CSS Grid and Flexbox.
                    </p>
                  </div>

                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground">Grid System</CardTitle>
                      <CardDescription>12-column responsive grid with flexible breakpoints</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-12 gap-2 h-20">
                          {Array.from({ length: 12 }, (_, i) => (
                            <div key={i} className="bg-fuchsia-500/20 border border-primary/30 rounded flex items-center justify-center text-xs text-primary">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                          12-column grid system
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Guidelines Tab */}
                <TabsContent value="guidelines" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Design Guidelines</h3>
                    <p className="text-muted-foreground mb-8">
                      Best practices for creating responsive interfaces that work across all devices.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground">Mobile-First Approach</CardTitle>
                        <CardDescription>Start with mobile, enhance for larger screens</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Design for mobile first</strong>
                              <p className="text-sm text-muted-foreground">Ensure core functionality works on small screens</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Progressive enhancement</strong>
                              <p className="text-sm text-muted-foreground">Add features as screen space increases</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Touch-friendly interactions</strong>
                              <p className="text-sm text-muted-foreground">Ensure adequate touch targets (44px minimum)</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle className="text-foreground">Performance Considerations</CardTitle>
                        <CardDescription>Optimise for all devices and connections</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Optimise images</strong>
                              <p className="text-sm text-muted-foreground">Use responsive images and modern formats</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Minimise HTTP requests</strong>
                              <p className="text-sm text-muted-foreground">Combine and compress assets</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Test on real devices</strong>
                              <p className="text-sm text-muted-foreground">Validate performance across different devices</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Cross-references */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-foreground flex items-center gap-3">
                        <Layers className="h-5 w-5 text-primary" />
                        Related Resources
                      </CardTitle>
                      <CardDescription>Explore related documentation and guidelines</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/design-system/tokens" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Grid3X3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span className="font-medium text-foreground">Design Tokens</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Spacing and breakpoint tokens</p>
                        </Link>
                        
                        <Link href="/components" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Layers className="h-5 w-5 text-green-600 dark:text-green-400" />
                            <span className="font-medium text-foreground">Components</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Responsive component examples</p>
                        </Link>
                        
                        <Link href="/design-system/accessibility" className="block p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-400" />
                            <span className="font-medium text-foreground">Accessibility</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Mobile accessibility guidelines</p>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Interactive Breakpoint Tester */}
          <section className="px-6 lg:px-12 py-8">
            <div className="max-w-7xl mx-auto">
              <Card className="bg-card/30 border-border/50 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <Monitor className="h-6 w-6 text-primary" />
                    Interactive Breakpoint Tester
                  </CardTitle>
                  <CardDescription>
                    Test your designs at different breakpoints in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        { name: "Mobile", width: 375, icon: Smartphone },
                        { name: "Tablet", width: 768, icon: Tablet },
                        { name: "Desktop", width: 1024, icon: Monitor },
                        { name: "Large", width: 1440, icon: Monitor }
                      ].map((device) => (
                        <Button
                          key={device.name}
                          variant={currentBreakpoint === device.name.toLowerCase() ? "default" : "outline"}
                          className="h-auto py-4 flex flex-col items-center gap-2"
                          onClick={() => setCurrentBreakpoint(device.name.toLowerCase())}
                        >
                          <device.icon className="h-6 w-6" />
                          <div>
                            <div className="font-medium">{device.name}</div>
                            <div className="text-xs opacity-70">{device.width}px</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Current Viewport</span>
                        <Badge variant="outline">{typeof window !== 'undefined' ? window.innerWidth : 1024}px</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Resize your browser window to see breakpoint changes
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Device Emulator */}
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary" />
                    Device Emulator
                  </CardTitle>
                  <CardDescription>
                    Preview your designs on different device sizes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg border border-border/50">
                      <div
                        className="bg-card border-2 border-border rounded-lg overflow-hidden"
                        style={{
                          width: currentBreakpoint === "mobile" ? "375px" : 
                                 currentBreakpoint === "tablet" ? "768px" : 
                                 currentBreakpoint === "large" ? "1440px" : "1024px",
                          height: currentBreakpoint === "mobile" ? "667px" : "600px",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <div className="p-4 bg-card/50 border-b border-border/50 flex items-center justify-center">
                          <div className="text-xs text-muted-foreground">
                            {currentBreakpoint.charAt(0).toUpperCase() + currentBreakpoint.slice(1)} View ({currentBreakpoint === "mobile" ? "375px" : currentBreakpoint === "tablet" ? "768px" : currentBreakpoint === "large" ? "1440px" : "1024px"})
                          </div>
                        </div>
                        <div className="p-6 h-full overflow-auto">
                          <div className="space-y-4">
                            <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-sm text-foreground">Header</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="h-32 bg-card/50 rounded-lg border border-border/50 flex items-center justify-center">
                                <span className="text-xs text-muted-foreground">Card 1</span>
                              </div>
                              <div className="h-32 bg-card/50 rounded-lg border border-border/50 flex items-center justify-center">
                                <span className="text-xs text-muted-foreground">Card 2</span>
                              </div>
                            </div>
                            <div className="h-16 bg-muted/30 rounded-lg flex items-center justify-center">
                              <span className="text-sm text-foreground">Footer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Viewport Size Indicator</span>
                      </div>
                      <Badge variant="outline">
                        {currentBreakpoint === "mobile" ? "375 × 667" : 
                         currentBreakpoint === "tablet" ? "768 × 1024" : 
                         currentBreakpoint === "large" ? "1440 × 900" : "1024 × 768"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
