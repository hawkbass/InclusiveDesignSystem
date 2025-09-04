"use client"

import { useState, useEffect } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Palette, 
  Type,
  Grid3X3,
  Code,
  Copy,
  CheckCircle2,
  Download,
  ExternalLink,
  Lightbulb,
  ArrowRight,
  Eye,
  Layers,
  Target
} from "lucide-react"
import Link from "next/link"

export default function Tokens() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [copiedCode, setCopiedCode] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
          <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative px-6 lg:px-12 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <Badge className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border-fuchsia-500/30 mb-4">
                    Design System Foundation
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
                    Design Tokens
                    <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"> Reference</span>
                  </h1>
                  <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Foundational design values that ensure consistency, maintainability, and scalability across our entire design system.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                    <Download className="h-4 w-4 mr-2" />
                    Export Tokens
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Figma Plugin
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-slate-800 transition-colours">
                    <Code className="h-4 w-4 mr-2" />
                    CSS Variables
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* What are Design Tokens? */}
          <section className="px-6 lg:px-12 py-12 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-100 mb-6">What are Design Tokens?</h2>
                  <div className="space-y-4 text-slate-300">
                    <p className="text-lg">
                      Design tokens are the <strong className="text-fuchsia-300">fundamental design decisions</strong> of our design system, stored as data and transformed into platform-specific code.
                    </p>
                    <p>
                      Think of them as the <strong className="text-purple-300">single source of truth</strong> for design properties like colours, typography, spacing, and more. When you change a token, it updates everywhere it's used.
                    </p>
                  </div>
                </div>
                <Card className="bg-slate-800/50 border-slate-700/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="h-6 w-6 text-fuchsia-400" />
                      <CardTitle className="text-slate-100">Why Use Tokens?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-200">Consistency</strong>
                        <p className="text-sm text-slate-400">Same values across all platforms and products</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-200">Maintainability</strong>
                        <p className="text-sm text-slate-400">Update once, changes propagate everywhere</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-200">Scalability</strong>
                        <p className="text-sm text-slate-400">Easy to extend and adapt for new requirements</p>
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
                          { value: "colours", label: "Colours", icon: Palette },
                          { value: "typography", label: "Typography", icon: Type },
                          { value: "spacing", label: "Spacing", icon: Grid3X3 },
                          { value: "usage", label: "Usage & Implementation", icon: Code }
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
                      <SelectItem value="colours" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Palette className="h-4 w-4 text-slate-400" />
                          <span>Colours</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="typography" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Type className="h-4 w-4 text-slate-400" />
                          <span>Typography</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="spacing" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Grid3X3 className="h-4 w-4 text-slate-400" />
                          <span>Spacing</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="usage" className="focus:bg-slate-700/60 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Code className="h-4 w-4 text-slate-400" />
                          <span>Usage & Implementation</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("colours")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-xl w-fit">
                          <Palette className="h-8 w-8 text-fuchsia-400" />
                        </div>
                        <CardTitle className="text-slate-100">Colours</CardTitle>
                        <CardDescription>Brand colours, semantic colours, and neutral scales</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">89 tokens</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("typography")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl w-fit">
                          <Type className="h-8 w-8 text-blue-400" />
                        </div>
                        <CardTitle className="text-slate-100">Typography</CardTitle>
                        <CardDescription>Font families, sizes, weights, and line heights</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">24 tokens</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("spacing")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl w-fit">
                          <Grid3X3 className="h-8 w-8 text-green-400" />
                        </div>
                        <CardTitle className="text-slate-100">Spacing</CardTitle>
                        <CardDescription>Consistent spacing scale for layouts and components</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">16 tokens</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors cursor-pointer" onClick={() => setActiveTab("usage")}>
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl w-fit">
                          <Code className="h-8 w-8 text-orange-400" />
                        </div>
                        <CardTitle className="text-slate-100">Usage</CardTitle>
                        <CardDescription>Implementation guides and best practices</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">Guide</Badge>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Reference */}
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100 flex items-center gap-3">
                        <Target className="h-5 w-5 text-fuchsia-400" />
                        Quick Reference
                      </CardTitle>
                      <CardDescription>Most commonly used tokens for rapid development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Primary Colours</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-md bg-fuchsia-500"></div>
                              <code className="text-sm text-slate-300">--fuchsia-500</code>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-md bg-purple-500"></div>
                              <code className="text-sm text-slate-300">--purple-500</code>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-md bg-slate-500"></div>
                              <code className="text-sm text-slate-300">--slate-500</code>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Typography Scale</h4>
                          <div className="space-y-2">
                            <div className="text-xs text-slate-400">text-xs (12px)</div>
                            <div className="text-sm text-slate-400">text-sm (14px)</div>
                            <div className="text-base text-slate-400">text-base (16px)</div>
                            <div className="text-lg text-slate-400">text-lg (18px)</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-3">Spacing Scale</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-slate-400 rounded"></div>
                              <code className="text-sm text-slate-300">spacing-2 (8px)</code>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-slate-400 rounded"></div>
                              <code className="text-sm text-slate-300">spacing-4 (16px)</code>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-slate-400 rounded"></div>
                              <code className="text-sm text-slate-300">spacing-6 (24px)</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Colours Tab */}
                <TabsContent value="colours" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Colour Tokens</h3>
                    <p className="text-slate-400 mb-8">
                      Our colour system is built on semantic meaning and accessibility. Each colour serves a specific purpose and maintains proper contrast ratios.
                    </p>
                  </div>

                  {/* Brand Colours */}
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100">Brand Colours</CardTitle>
                      <CardDescription>Primary brand identity colours used for key interface elements</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { name: "Fuchsia", value: "#d946ef", token: "fuchsia-500", usage: "Primary actions, focus states" },
                          { name: "Purple", value: "#8b5cf6", token: "purple-500", usage: "Secondary actions, accents" },
                          { name: "Indigo", value: "#6366f1", token: "indigo-500", usage: "Information, links" }
                        ].map((colour) => (
                          <div key={colour.token} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: colour.value }}></div>
                              <div>
                                <div className="font-medium text-slate-200">{colour.name}</div>
                                <code className="text-sm text-slate-400">{colour.token}</code>
                              </div>
                            </div>
                            <p className="text-sm text-slate-400 mb-3">{colour.usage}</p>
                            <div className="flex items-center gap-2">
                              <code className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">{colour.value}</code>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleCopyCode(colour.value, colour.token)}
                                className="h-6 w-6 p-0 text-slate-400 hover:text-slate-200"
                              >
                                {copiedCode === colour.token ? (
                                  <CheckCircle2 className="h-3 w-3 text-green-400" />
                                ) : (
                                  <Copy className="h-3 w-3" />
                                )}
                              </Button>
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
                      <CardDescription>How to use colour tokens in your code</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-300">CSS Usage:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('.button-primary {\n  background-color: hsl(var(--fuchsia-500));\n  border-color: hsl(var(--fuchsia-600));\n}', 'css-example')}
                              className="text-slate-400 hover:text-slate-200"
                            >
                              {copiedCode === 'css-example' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 whitespace-pre-wrap">
{`.button-primary {
  background-color: hsl(var(--fuchsia-500));
  border-color: hsl(var(--fuchsia-600));
}`}
                          </pre>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-300">Tailwind Usage:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('<button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white">\n  Primary Button\n</button>', 'tailwind-example')}
                              className="text-slate-400 hover:text-slate-200"
                            >
                              {copiedCode === 'tailwind-example' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-slate-900/50 p-4 rounded-lg text-sm text-slate-300 whitespace-pre-wrap">
{`<button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white">
  Primary Button
</button>`}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Typography Tab */}
                <TabsContent value="typography" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Typography Tokens</h3>
                    <p className="text-slate-400 mb-8">
                      Our typography system ensures consistent, accessible, and scalable text across all interfaces. Built on a modular scale with semantic naming.
                    </p>
                  </div>

                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100">Type Scale</CardTitle>
                      <CardDescription>Harmonious progression of text sizes with consistent line heights</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          { name: "Heading 1", size: "48px", token: "text-5xl", usage: "Page titles, hero headings" },
                          { name: "Heading 2", size: "36px", token: "text-4xl", usage: "Section headings" },
                          { name: "Heading 3", size: "24px", token: "text-2xl", usage: "Subsection headings" },
                          { name: "Body Large", size: "18px", token: "text-lg", usage: "Introductory text, emphasis" },
                          { name: "Body", size: "16px", token: "text-base", usage: "Standard body text" },
                          { name: "Body Small", size: "14px", token: "text-sm", usage: "Secondary text, captions" }
                        ].map((type) => (
                          <div key={type.token} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <div className="flex items-center gap-6">
                              <div className="w-24 text-right">
                                <code className="text-sm text-slate-400">{type.token}</code>
                              </div>
                              <div className="text-slate-200" style={{ fontSize: type.size === "48px" ? "32px" : type.size === "36px" ? "24px" : type.size }}>
                                {type.name}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-slate-300">{type.size}</div>
                              <div className="text-xs text-slate-500">{type.usage}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Spacing Tab */}
                <TabsContent value="spacing" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Spacing Tokens</h3>
                    <p className="text-slate-400 mb-8">
                      Consistent spacing creates visual rhythm and hierarchy. Our 8px base unit ensures alignment across all screen sizes.
                    </p>
                  </div>

                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-slate-100">Spacing Scale</CardTitle>
                      <CardDescription>Based on 8px increments for consistent layouts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "XS", value: "4px", token: "spacing-1", usage: "Fine details, borders" },
                          { name: "SM", value: "8px", token: "spacing-2", usage: "Tight spacing, form elements" },
                          { name: "MD", value: "16px", token: "spacing-4", usage: "Standard component spacing" },
                          { name: "LG", value: "24px", token: "spacing-6", usage: "Section spacing" },
                          { name: "XL", value: "32px", token: "spacing-8", usage: "Large section spacing" },
                          { name: "2XL", value: "48px", token: "spacing-12", usage: "Page-level spacing" }
                        ].map((space) => (
                          <div key={space.token} className="flex items-center gap-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <div className="w-16 text-right">
                              <code className="text-sm text-slate-400">{space.name}</code>
                            </div>
                            <div className="flex items-center gap-4">
                              <div 
                                className="bg-fuchsia-500 rounded" 
                                style={{ width: space.value, height: '16px' }}
                              ></div>
                              <code className="text-sm text-slate-300">{space.value}</code>
                              <code className="text-xs text-slate-500">{space.token}</code>
                            </div>
                            <div className="text-sm text-slate-400 ml-auto">
                              {space.usage}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Usage Tab */}
                <TabsContent value="usage" className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Usage & Implementation</h3>
                    <p className="text-slate-400 mb-8">
                      Best practices for implementing design tokens in your projects, with examples and guidelines.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="bg-slate-800/30 border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-slate-100">Getting Started</CardTitle>
                        <CardDescription>How to start using tokens in your project</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-2">1. Install Dependencies</h4>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-400">Install via npm:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode('npm install @inclusive/design-tokens', 'install')}
                              className="text-slate-400 hover:text-slate-200"
                            >
                              {copiedCode === 'install' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-slate-900/50 p-3 rounded text-sm text-slate-300 whitespace-pre-wrap">
npm install @inclusive/design-tokens
                          </pre>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-200 mb-2">2. Import Tokens</h4>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-400">Import in your CSS:</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopyCode("@import '@inclusive/design-tokens/css/variables.css';", 'import')}
                              className="text-slate-400 hover:text-slate-200"
                            >
                              {copiedCode === 'import' ? (
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-slate-900/50 p-3 rounded text-sm text-slate-300 whitespace-pre-wrap">
@import '@inclusive/design-tokens/css/variables.css';
                          </pre>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800/30 border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-slate-100">Best Practices</CardTitle>
                        <CardDescription>Guidelines for effective token usage</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Use semantic tokens</strong>
                              <p className="text-sm text-slate-400">Prefer semantic names over literal values</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Test accessibility</strong>
                              <p className="text-sm text-slate-400">Ensure proper contrast ratios</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-slate-200">Document customizations</strong>
                              <p className="text-sm text-slate-400">Keep track of any token overrides</p>
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
                      <CardDescription>Explore related documentation and tools</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/design-system/principles" className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Target className="h-5 w-5 text-blue-400" />
                            <span className="font-medium text-slate-200">Design Principles</span>
                          </div>
                          <p className="text-sm text-slate-400">Learn the philosophy behind our design decisions</p>
                        </Link>
                        
                        <Link href="/components" className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Layers className="h-5 w-5 text-green-400" />
                            <span className="font-medium text-slate-200">Components</span>
                          </div>
                          <p className="text-sm text-slate-400">See tokens in action within components</p>
                        </Link>
                        
                        <Link href="/design-system/accessibility" className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-400" />
                            <span className="font-medium text-slate-200">Accessibility</span>
                          </div>
                          <p className="text-sm text-slate-400">Ensure your token usage meets WCAG standards</p>
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