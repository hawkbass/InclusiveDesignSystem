"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  CheckCircle2,
  Copy,
  Navigation,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function NavigationPatterns() {
  const [mounted, setMounted] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")

  useEffect(() => {
    setMounted(true)
    document.title = "Navigation Patterns - Inclusive Design System"
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
    <div className="flex min-h-screen">
      <UnifiedSidebar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/design-system/patterns" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Patterns
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Navigation Patterns</h1>
            <p className="text-muted-foreground">
              Wayfinding and menu systems for user orientation
            </p>
          </div>

          {/* Navigation Patterns */}
          <div className="space-y-8">
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Navigation className="h-5 w-5 text-primary" />
                  Primary Navigation
                </CardTitle>
                <CardDescription>Main site navigation typically placed in header</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <strong className="text-foreground">When to use:</strong>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Site-wide navigation</li>
                    <li>• Main sections access</li>
                    <li>• Consistent across pages</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<nav className="flex items-center space-x-6">
  <Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link>
  <Link href="/about" className="text-foreground/80 hover:text-foreground">About</Link>
  <Link href="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link>
</nav>`, 'primary-nav')}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Copy primary navigation code"
                    >
                      {copiedCode === 'primary-nav' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap overflow-x-auto">
{`<nav className="flex items-center space-x-6">
  <Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link>
  <Link href="/about" className="text-foreground/80 hover:text-foreground">About</Link>
  <Link href="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link>
</nav>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  Breadcrumb Navigation
                </CardTitle>
                <CardDescription>Hierarchical navigation showing user location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <strong className="text-foreground">When to use:</strong>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Deep site structures</li>
                    <li>• User orientation</li>
                    <li>• Quick navigation up levels</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<nav aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li><Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link></li>
    <li className="text-muted-foreground">/</li>
    <li><Link href="/products" className="text-foreground/80 hover:text-foreground">Products</Link></li>
    <li className="text-muted-foreground">/</li>
    <li className="text-foreground">Current Page</li>
  </ol>
</nav>`, 'breadcrumb')}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Copy breadcrumb navigation code"
                    >
                      {copiedCode === 'breadcrumb' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap overflow-x-auto">
{`<nav aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li><Link href="/" className="text-foreground/80 hover:text-foreground">Home</Link></li>
    <li className="text-muted-foreground">/</li>
    <li><Link href="/products" className="text-foreground/80 hover:text-foreground">Products</Link></li>
    <li className="text-muted-foreground">/</li>
    <li className="text-foreground">Current Page</li>
  </ol>
</nav>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

