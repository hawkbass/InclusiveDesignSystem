"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import {
  CheckCircle2,
  Copy,
  FileText,
  Shield,
  Search,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function FormsPatterns() {
  const [mounted, setMounted] = useState(false)
  const [copiedCode, setCopiedCode] = useState("")

  useEffect(() => {
    setMounted(true)
    document.title = "Forms Patterns - Inclusive Design System"
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Forms Patterns</h1>
            <p className="text-muted-foreground">
              Input and data collection patterns for user interactions
            </p>
          </div>

          {/* Forms Patterns */}
          <div className="space-y-8">
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  Login Forms
                </CardTitle>
                <CardDescription>Authentication and login form patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <strong className="text-foreground">When to use:</strong>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• User authentication</li>
                    <li>• Account access</li>
                    <li>• Secure login flows</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
    <Input type="email" placeholder="Enter your email" className="bg-card/50 border-border/50" />
  </div>
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
    <Input type="password" placeholder="Enter your password" className="bg-card/50 border-border/50" />
  </div>
  <Button type="submit" className="w-full">Sign In</Button>
</form>`, 'login-form')}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Copy login form code"
                    >
                      {copiedCode === 'login-form' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap overflow-x-auto">
{`<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
    <Input type="email" placeholder="Enter your email" className="bg-card/50 border-border/50" />
  </div>
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
    <Input type="password" placeholder="Enter your password" className="bg-card/50 border-border/50" />
  </div>
  <Button type="submit" className="w-full">Sign In</Button>
</form>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  Multi-step Forms
                </CardTitle>
                <CardDescription>Complex forms broken into manageable steps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <strong className="text-foreground">When to use:</strong>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Long registration processes</li>
                    <li>• Complex data collection</li>
                    <li>• Reducing form abandonment</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<div className="space-y-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
      <span className="text-sm font-medium text-foreground">Step 1: Personal Info</span>
    </div>
    <div className="flex-1 h-1 bg-muted mx-4"></div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">2</div>
      <span className="text-sm text-muted-foreground">Step 2: Details</span>
    </div>
  </div>
</div>`, 'multi-step')}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Copy multi-step form code"
                    >
                      {copiedCode === 'multi-step' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap overflow-x-auto">
{`<div className="space-y-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
      <span className="text-sm font-medium text-foreground">Step 1: Personal Info</span>
    </div>
    <div className="flex-1 h-1 bg-muted mx-4"></div>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">2</div>
      <span className="text-sm text-muted-foreground">Step 2: Details</span>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Search className="h-5 w-5 text-primary" />
                  Search Forms
                </CardTitle>
                <CardDescription>Search and filter input patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <strong className="text-foreground">When to use:</strong>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Content discovery</li>
                    <li>• Filtering data</li>
                    <li>• Quick access to information</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/80">Implementation:</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input 
    type="search" 
    placeholder="Search..." 
    className="pl-10 bg-card/50 border-border/50" 
  />
</div>`, 'search-form')}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Copy search form code"
                    >
                      {copiedCode === 'search-form' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-card/50 p-4 rounded-lg text-sm text-foreground/80 whitespace-pre-wrap overflow-x-auto">
{`<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input 
    type="search" 
    placeholder="Search..." 
    className="pl-10 bg-card/50 border-border/50" 
  />
</div>`}
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

