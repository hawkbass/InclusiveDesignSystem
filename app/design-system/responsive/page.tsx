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
    <div className="flex bg-slate-950 min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30 mb-4">
                    Adaptive Design System
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                    Responsive Design
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Guidelines</span>
                  </h1>
                  <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Build interfaces that work beautifully across all devices and screen sizes with our systematic approach to responsive design.
                  </p>
                </div>

                {/* Device Preview */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm">Mobile</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                  <div className="flex items-center gap-3 text-slate-400">
                    <Tablet className="h-6 w-6" />
                    <span className="text-sm">Tablet</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                  <div className="flex items-center gap-3 text-fuchsia-400">
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
                    className={`transition-all ${settingsOpen ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'hover:bg-slate-800'}`}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours">
                    <Download className="h-4 w-4 mr-2" />
                    Export Guidelines
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Design Resources
                  </Button>
                </div>
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
                    <Label className="text-slate-300 mb-2 block">Animation Speed</Label>
                    <Slider
                      value={animationSpeed}
                      onValueChange={setAnimationSpeed}
                      min={0.1}
                      max={3}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>Slow</span>
                      <span>Fast</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* What is Responsive Design? */}
          <section className="px-6 lg:px-12 py-12 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-100 mb-6">What is Responsive Design?</h2>
                  <div className="space-y-4 text-slate-300">
                    <p className="text-lg">
                      Responsive design ensures your interface <strong className="text-fuchsia-300">adapts fluidly</strong> to any screen size, from mobile phones to ultrawide displays.
                    </p>
                    <p>
                      Our systematic approach uses <strong className="text-purple-300">breakpoints, flexible layouts, and adaptive components</strong> to create seamless experiences across all devices.
                    </p>
                  </div>
                </div>
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-fuchsia-400" />
                      <CardTitle className="text-slate-100">Key Principles</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-200">Mobile-First</strong>
                        <p className="text-sm text-slate-400">Start with mobile, enhance for larger screens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-200">Flexible Layouts</strong>
                        <p className="text-sm text-slate-400">Use CSS Grid and Flexbox for adaptable structures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-200">Progressive Enhancement</strong>
                        <p className="text-sm text-slate-400">Add complexity as screen space increases</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="px-6 lg:px-12 py-8 border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-lg font-semibold text-slate-200">Viewing:</h2>
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-auto min-w-[200px] h-10 bg-slate-800/40 border border-slate-700/30 hover:bg-slate-800/60 transition-colors text-slate-300">
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
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="overview" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Eye className="h-4 w-4 text-slate-400" />
                          <span>Overview</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="breakpoints" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Monitor className="h-4 w-4 text-slate-400" />
                          <span>Breakpoints</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="layouts" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Grid3X3 className="h-4 w-4 text-slate-400" />
                          <span>Layouts</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="guidelines" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Target className="h-4 w-4 text-slate-400" />
                          <span>Guidelines</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("breakpoints")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl w-fit">
                          <Monitor className="h-8 w-8 text-blue-400" />
                        </div>
                        <CardTitle className="text-slate-100">Breakpoints</CardTitle>
                        <CardDescription>Responsive breakpoint system for all devices</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">5 breakpoints</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("layouts")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl w-fit">
                          <Grid3X3 className="h-8 w-8 text-green-400" />
                        </div>
                        <CardTitle className="text-slate-100">Layouts</CardTitle>
                        <CardDescription>Flexible grid systems and layout patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">CSS Grid</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("guidelines")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl w-fit">
                          <Target className="h-8 w-8 text-purple-400" />
                        </div>
                        <CardTitle className="text-slate-100">Guidelines</CardTitle>
                        <CardDescription>Best practices and implementation tips</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Best Practices</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl w-fit">
                          <Code2 className="h-8 w-8 text-orange-400" />
                        </div>
                        <CardTitle className="text-slate-100">Examples</CardTitle>
                        <CardDescription>Real-world responsive patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Live demos</Badge>
                          <Eye className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Reference */}
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100 flex items-center gap-3">
                        <Lightbulb className="h-5 w-5 text-fuchsia-400" />
                        Quick Reference
                      </CardTitle>
                      <CardDescription>Essential responsive design values</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Breakpoints</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Mobile</span>
                              <code className="text-slate-300">0px+</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Tablet</span>
                              <code className="text-slate-300">768px+</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Desktop</span>
                              <code className="text-slate-300">1024px+</code>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Container Sizes</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">SM</span>
                              <code className="text-slate-300">640px</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">MD</span>
                              <code className="text-slate-300">768px</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">LG</span>
                              <code className="text-slate-300">1024px</code>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Grid Columns</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Mobile</span>
                              <code className="text-slate-300">1-2 cols</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Tablet</span>
                              <code className="text-slate-300">2-4 cols</code>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Desktop</span>
                              <code className="text-slate-300">4-12 cols</code>
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
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Breakpoint System</h3>
                    <p className="text-slate-400 mb-8">
                      Our breakpoint system is based on common device sizes and ensures consistent experiences across all screen widths.
                    </p>
                  </div>

                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100">Standard Breakpoints</CardTitle>
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
                            color: "text-blue-400"
                          },
                          { 
                            name: "Tablet", 
                            range: "768px - 1023px", 
                            token: "md:", 
                            description: "Tablets and small laptops",
                            icon: Tablet,
                            color: "text-green-400"
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
                          <div key={breakpoint.token} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-3">
                                <breakpoint.icon className={`h-6 w-6 ${breakpoint.color}`} />
                                <div>
                                  <div className="font-medium text-slate-200">{breakpoint.name}</div>
                                  <div className="text-sm text-slate-400">{breakpoint.description}</div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <code className="text-sm text-slate-300 bg-slate-900/50 px-2 py-1 rounded">{breakpoint.token}</code>
                              <div className="text-sm text-slate-400 mt-1">{breakpoint.range}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Implementation Example */}
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100">Implementation Example</CardTitle>
                      <CardDescription>How to use breakpoints in your code</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-300">Tailwind CSS:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">\n  <!-- Content -->\n</div>', 'tailwind-breakpoints')}
                              className="text-slate-400 hover:text-slate-200"
                            >
                              {copiedCode === 'tailwind-breakpoints' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 whitespace-pre-wrap">
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
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Responsive Layouts</h3>
                    <p className="text-slate-400 mb-8">
                      Flexible layout systems that adapt to different screen sizes using CSS Grid and Flexbox.
                    </p>
                  </div>

                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100">Grid System</CardTitle>
                      <CardDescription>12-column responsive grid with flexible breakpoints</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-12 gap-2 h-20">
                          {Array.from({ length: 12 }, (_, i) => (
                            <div key={i} className="bg-fuchsia-500/20 border border-fuchsia-500/30 rounded flex items-center justify-center text-xs text-fuchsia-300">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                        <div className="text-center text-sm text-slate-400">
                          12-column grid system
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Guidelines Tab */}
                <TabsContent value="guidelines" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Design Guidelines</h3>
                    <p className="text-slate-400 mb-8">
                      Best practices for creating responsive interfaces that work across all devices.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-slate-800/30 border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-slate-100">Mobile-First Approach</CardTitle>
                        <CardDescription>Start with mobile, enhance for larger screens</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Design for mobile first</strong>
                              <p className="text-sm text-slate-400">Ensure core functionality works on small screens</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Progressive enhancement</strong>
                              <p className="text-sm text-slate-400">Add features as screen space increases</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Touch-friendly interactions</strong>
                              <p className="text-sm text-slate-400">Ensure adequate touch targets (44px minimum)</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/30 border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-slate-100">Performance Considerations</CardTitle>
                        <CardDescription>Optimise for all devices and connections</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Optimise images</strong>
                              <p className="text-sm text-slate-400">Use responsive images and modern formats</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Minimise HTTP requests</strong>
                              <p className="text-sm text-slate-400">Combine and compress assets</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Test on real devices</strong>
                              <p className="text-sm text-slate-400">Validate performance across different devices</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Cross-references */}
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100 flex items-center gap-3">
                        <Layers className="h-5 w-5 text-fuchsia-400" />
                        Related Resources
                      </CardTitle>
                      <CardDescription>Explore related documentation and guidelines</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/design-system/tokens" className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Grid3X3 className="h-5 w-5 text-blue-400" />
                            <span className="font-medium text-slate-200">Design Tokens</span>
                          </div>
                          <p className="text-sm text-slate-400">Spacing and breakpoint tokens</p>
                        </Link>
                        
                        <Link href="/components" className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Layers className="h-5 w-5 text-green-400" />
                            <span className="font-medium text-slate-200">Components</span>
                          </div>
                          <p className="text-sm text-slate-400">Responsive component examples</p>
                        </Link>
                        
                        <Link href="/design-system/accessibility" className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-400" />
                            <span className="font-medium text-slate-200">Accessibility</span>
                          </div>
                          <p className="text-sm text-slate-400">Mobile accessibility guidelines</p>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}