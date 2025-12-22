# File Specification: Performance Dashboard Page

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `app/design-system/performance/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~600 |
| **Purpose** | Display design system performance metrics and health indicators |

---

## Overview

This page provides a dashboard view of design system performance including bundle sizes, render times, accessibility scores, and adoption rates.

---

## Core Structure

```tsx
"use client"

import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronRight,
  Package,
  Zap,
  Accessibility,
  TrendingUp,
  TrendingDown,
  Minus,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Chrome,
  Globe
} from "lucide-react"
import Link from "next/link"

// Performance data (would be fetched from build analysis in production)
const performanceData = {
  summary: {
    totalBundleSize: "156.4kb",
    avgRenderTime: "3.2ms",
    a11yScore: 94,
    componentCount: 63,
    adoptionRate: 87,
  },
  components: [
    { name: "Button", bundleRaw: "8.2kb", bundleGzip: "2.4kb", renderTime: "1.2ms", a11y: 100, trend: "stable" },
    { name: "Card", bundleRaw: "12.1kb", bundleGzip: "3.8kb", renderTime: "2.1ms", a11y: 100, trend: "stable" },
    { name: "DataTable", bundleRaw: "45.6kb", bundleGzip: "14.2kb", renderTime: "8.4ms", a11y: 87, trend: "improving" },
    { name: "Dialog", bundleRaw: "18.3kb", bundleGzip: "5.6kb", renderTime: "3.8ms", a11y: 95, trend: "stable" },
    { name: "Select", bundleRaw: "22.4kb", bundleGzip: "7.1kb", renderTime: "4.2ms", a11y: 92, trend: "declining" },
    { name: "Tabs", bundleRaw: "14.7kb", bundleGzip: "4.5kb", renderTime: "2.3ms", a11y: 98, trend: "stable" },
    { name: "Input", bundleRaw: "6.4kb", bundleGzip: "1.9kb", renderTime: "0.8ms", a11y: 100, trend: "stable" },
    { name: "Checkbox", bundleRaw: "5.2kb", bundleGzip: "1.5kb", renderTime: "0.6ms", a11y: 95, trend: "stable" },
  ],
  browsers: [
    { name: "Chrome", version: "90+", status: "full" },
    { name: "Firefox", version: "88+", status: "full" },
    { name: "Safari", version: "14+", status: "full" },
    { name: "Edge", version: "90+", status: "full" },
    { name: "Samsung Internet", version: "14+", status: "full" },
    { name: "IE 11", version: "N/A", status: "none" },
  ],
}

export default function PerformancePage() {
  return (
    <div className="flex bg-background min-h-screen">
      <UnifiedSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="px-6 lg:px-12 py-12 border-b border-border/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/design-system">Design System</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Performance</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Performance Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Monitor design system health including bundle sizes, render performance, 
              and accessibility compliance.
            </p>
          </div>
        </header>

        {/* Summary Stats */}
        <section className="px-6 lg:px-12 py-8 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Package className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.totalBundleSize}</div>
                      <div className="text-xs text-muted-foreground">Total Bundle (gzip)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Zap className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.avgRenderTime}</div>
                      <div className="text-xs text-muted-foreground">Avg Render Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <Accessibility className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.a11yScore}%</div>
                      <div className="text-xs text-muted-foreground">A11y Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-fuchsia-500/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-fuchsia-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.adoptionRate}%</div>
                      <div className="text-xs text-muted-foreground">Adoption Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Globe className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{performanceData.summary.componentCount}</div>
                      <div className="text-xs text-muted-foreground">Components</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Component Performance Table */}
        <section className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Component Metrics</h2>
            
            <Card className="bg-card/30 border-border/50">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-card/50">
                        <th className="text-left py-4 px-6 text-foreground font-medium">Component</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Bundle (Raw)</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Bundle (Gzip)</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Render Time</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">A11y Score</th>
                        <th className="text-left py-4 px-6 text-foreground font-medium">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceData.components.map((component) => (
                        <tr key={component.name} className="border-b border-border/50 hover:bg-card/50">
                          <td className="py-4 px-6">
                            <span className="font-medium text-foreground">{component.name}</span>
                          </td>
                          <td className="py-4 px-6 text-muted-foreground">{component.bundleRaw}</td>
                          <td className="py-4 px-6 text-muted-foreground">{component.bundleGzip}</td>
                          <td className="py-4 px-6 text-muted-foreground">{component.renderTime}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <Progress value={component.a11y} className="w-20 h-2" />
                              <span className={component.a11y >= 95 ? "text-green-400" : component.a11y >= 85 ? "text-amber-400" : "text-red-400"}>
                                {component.a11y}%
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            {component.trend === "improving" && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Improving
                              </Badge>
                            )}
                            {component.trend === "stable" && (
                              <Badge variant="outline" className="text-muted-foreground">
                                <Minus className="h-3 w-3 mr-1" />
                                Stable
                              </Badge>
                            )}
                            {component.trend === "declining" && (
                              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                <TrendingDown className="h-3 w-3 mr-1" />
                                Declining
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Browser Support */}
        <section className="px-6 lg:px-12 py-8 bg-card/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Browser Support</h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {performanceData.browsers.map((browser) => (
                <Card key={browser.name} className="bg-card/50 border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className={`p-2 rounded-full inline-flex mb-2 ${
                      browser.status === "full" ? "bg-green-500/10" : "bg-red-500/10"
                    }`}>
                      {browser.status === "full" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <div className="font-medium text-foreground">{browser.name}</div>
                    <div className="text-xs text-muted-foreground">{browser.version}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
```

---

## Key Metrics Explained

| Metric | Source | Update Frequency |
|--------|--------|------------------|
| Bundle Size | Build analysis | Per release |
| Render Time | React Profiler | Per release |
| A11y Score | axe-core tests | Per PR |
| Adoption Rate | Codebase scan | Weekly |

---

## Verification Checklist

- [ ] Page loads at `/design-system/performance`
- [ ] Summary stats display correctly
- [ ] Component table shows all components
- [ ] A11y scores have correct colour coding
- [ ] Trend badges show correct variants
- [ ] Browser support shows all browsers
- [ ] No console errors

---

**End of Specification**

