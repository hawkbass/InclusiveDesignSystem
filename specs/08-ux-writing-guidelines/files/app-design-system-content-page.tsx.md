# File Specification: UX Writing Guidelines Page

## File Metadata

| Property | Value |
|----------|-------|
| **File Path** | `app/design-system/content/page.tsx` |
| **File Type** | React Component (TypeScript/TSX) |
| **Total Lines** | ~800 |
| **Purpose** | Comprehensive UX writing guidelines with voice, tone, and microcopy patterns |

---

## Overview

This page provides guidelines for writing UI content including voice and tone, microcopy patterns, terminology standards, and UK English conventions.

---

## Core Structure

```tsx
"use client"

import { useState } from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  ChevronRight,
  MessageSquare,
  Volume2,
  FileText,
  BookOpen,
  Check,
  X,
  Copy,
  Search,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react"
import Link from "next/link"

// Voice attributes
const voiceAttributes = [
  {
    name: "Professional",
    description: "Competent and trustworthy, showing expertise without being cold",
    do: "Your profile has been updated successfully.",
    dont: "Yay! Your profile is all done! 🎉",
  },
  {
    name: "Helpful",
    description: "Guiding and supportive, anticipating user needs",
    do: "Try searching with fewer filters to see more results.",
    dont: "No results found.",
  },
  {
    name: "Clear",
    description: "Plain language, avoiding jargon and technical terms",
    do: "Add a candidate to this job posting",
    dont: "Associate candidate record with vacancy instance",
  },
  {
    name: "Efficient",
    description: "Concise and scannable, respecting user's time",
    do: "Save",
    dont: "Click here to save your changes",
  },
]

// Microcopy patterns
const microcopyPatterns = {
  buttons: [
    { pattern: "Save", context: "Persist current changes", good: true },
    { pattern: "Save changes", context: "When emphasising what's being saved", good: true },
    { pattern: "Click here", context: "Non-descriptive, accessibility issue", good: false },
    { pattern: "Submit", context: "Too generic for most contexts", good: false },
    { pattern: "Add candidate", context: "Specific action", good: true },
    { pattern: "Delete account", context: "Clear destructive action", good: true },
    { pattern: "Yes", context: "Requires context from elsewhere", good: false },
    { pattern: "Confirm deletion", context: "Clear confirmation", good: true },
  ],
  errors: [
    { pattern: "Email address is invalid", context: "Specific error", good: true },
    { pattern: "Enter a valid email (e.g., name@company.com)", context: "Error with example", good: true },
    { pattern: "Error", context: "Not helpful", good: false },
    { pattern: "Invalid input", context: "Too vague", good: false },
    { pattern: "We couldn't save your changes. Please try again.", context: "Friendly error", good: true },
    { pattern: "Error 500: Internal server error", context: "Technical jargon", good: false },
  ],
  empty: [
    { pattern: "No candidates yet. Post a job to start receiving applications.", context: "First-use with guidance", good: true },
    { pattern: "No data", context: "Not helpful", good: false },
    { pattern: "You're all caught up!", context: "Positive completion", good: true },
    { pattern: "Nothing here", context: "Feels negative", good: false },
  ],
}

// Terminology
const terminology = [
  { use: "Candidate", instead: "Applicant, person", context: "Job seekers" },
  { use: "Job posting", instead: "Job ad, vacancy", context: "Published positions" },
  { use: "Application", instead: "Submission", context: "Candidate's application" },
  { use: "Interview", instead: "Meeting (when ambiguous)", context: "Formal assessment" },
  { use: "Skills", instead: "Competencies", context: "Abilities and experience" },
  { use: "Select", instead: "Click", context: "Accessibility-friendly action" },
  { use: "Doesn't match", instead: "Invalid", context: "Form validation" },
]

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedText, setCopiedText] = useState("")

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(""), 2000)
  }

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
              <span className="text-foreground">Content</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              UX Writing Guidelines
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Guidelines for writing clear, consistent, and helpful UI content. 
              From voice and tone to microcopy patterns.
            </p>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="px-6 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="voice" className="space-y-8">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4">
                <TabsTrigger value="voice" className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  Voice & Tone
                </TabsTrigger>
                <TabsTrigger value="microcopy" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Microcopy
                </TabsTrigger>
                <TabsTrigger value="terminology" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Terminology
                </TabsTrigger>
                <TabsTrigger value="formatting" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  UK English
                </TabsTrigger>
              </TabsList>

              {/* Voice & Tone Tab */}
              <TabsContent value="voice">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Voice Attributes</h2>
                    <p className="text-muted-foreground mb-6">
                      Our voice is consistent across all touchpoints. These four attributes define how we communicate.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {voiceAttributes.map((attr) => (
                      <Card key={attr.name} className="bg-card/30 border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg">{attr.name}</CardTitle>
                          <CardDescription>{attr.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                            <div className="flex items-center gap-2 mb-1">
                              <Check className="h-4 w-4 text-green-400" />
                              <span className="text-xs font-medium text-green-400">Do</span>
                            </div>
                            <p className="text-sm text-foreground">"{attr.do}"</p>
                          </div>
                          <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <div className="flex items-center gap-2 mb-1">
                              <X className="h-4 w-4 text-red-400" />
                              <span className="text-xs font-medium text-red-400">Don't</span>
                            </div>
                            <p className="text-sm text-foreground">"{attr.dont}"</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Tone by Context */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle>Tone by Context</CardTitle>
                      <CardDescription>
                        While voice stays consistent, tone adapts to context
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { context: "Success", tone: "Warm, confirming", example: "Great! Your application has been submitted." },
                          { context: "Error", tone: "Calm, helpful", example: "We couldn't save your changes. Please try again." },
                          { context: "Warning", tone: "Clear, direct", example: "This action cannot be undone." },
                          { context: "Empty state", tone: "Encouraging", example: "No applications yet. Start by posting a job." },
                        ].map((item) => (
                          <div key={item.context} className="p-4 bg-card/50 rounded-lg border border-border/50">
                            <Badge variant="outline" className="mb-2">{item.context}</Badge>
                            <div className="text-sm font-medium text-foreground mb-1">{item.tone}</div>
                            <p className="text-xs text-muted-foreground">"{item.example}"</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Microcopy Tab */}
              <TabsContent value="microcopy">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Microcopy Patterns</h2>
                      <p className="text-muted-foreground">Ready-to-use patterns for common UI elements</p>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patterns..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle>Button Labels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {microcopyPatterns.buttons.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg border flex items-start justify-between ${
                              item.good
                                ? "bg-green-500/5 border-green-500/20"
                                : "bg-red-500/5 border-red-500/20"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {item.good ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <X className="h-4 w-4 text-red-400" />
                                )}
                                <span className="font-medium text-foreground">"{item.pattern}"</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{item.context}</p>
                            </div>
                            {item.good && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleCopy(item.pattern)}
                              >
                                {copiedText === item.pattern ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Error Messages */}
                  <Card className="bg-card/30 border-border/50">
                    <CardHeader>
                      <CardTitle>Error Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {microcopyPatterns.errors.map((item, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg border flex items-start justify-between ${
                              item.good
                                ? "bg-green-500/5 border-green-500/20"
                                : "bg-red-500/5 border-red-500/20"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                {item.good ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <X className="h-4 w-4 text-red-400" />
                                )}
                                <span className="font-medium text-foreground">"{item.pattern}"</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{item.context}</p>
                            </div>
                            {item.good && (
                              <Button size="sm" variant="ghost" onClick={() => handleCopy(item.pattern)}>
                                {copiedText === item.pattern ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Terminology Tab */}
              <TabsContent value="terminology">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Terminology Standards</h2>
                    <p className="text-muted-foreground">Preferred terms for the recruitment context</p>
                  </div>

                  <Card className="bg-card/30 border-border/50">
                    <CardContent className="p-0">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border bg-card/50">
                            <th className="text-left py-4 px-6 text-foreground font-medium">Use</th>
                            <th className="text-left py-4 px-6 text-foreground font-medium">Instead of</th>
                            <th className="text-left py-4 px-6 text-foreground font-medium">Context</th>
                          </tr>
                        </thead>
                        <tbody>
                          {terminology.map((term, idx) => (
                            <tr key={idx} className="border-b border-border/50">
                              <td className="py-4 px-6">
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                  {term.use}
                                </Badge>
                              </td>
                              <td className="py-4 px-6 text-muted-foreground line-through decoration-red-400/50">
                                {term.instead}
                              </td>
                              <td className="py-4 px-6 text-muted-foreground">{term.context}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* UK English Tab */}
              <TabsContent value="formatting">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">UK English Standards</h2>
                    <p className="text-muted-foreground">Spelling, dates, and formatting conventions</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Spelling */}
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle>Spelling</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { uk: "Colour", us: "Color" },
                            { uk: "Organisation", us: "Organization" },
                            { uk: "Analyse", us: "Analyze" },
                            { uk: "Centre", us: "Center" },
                            { uk: "Programme", us: "Program" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-card/50 rounded">
                              <span className="text-green-400">{item.uk} ✓</span>
                              <span className="text-red-400 line-through">{item.us}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Date/Time */}
                    <Card className="bg-card/30 border-border/50">
                      <CardHeader>
                        <CardTitle>Date & Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { format: "Full date", example: "19 December 2024" },
                            { format: "Short date", example: "19/12/2024" },
                            { format: "Time (24h)", example: "14:30" },
                            { format: "Time (12h)", example: "2:30 pm" },
                            { format: "Currency", example: "£50,000" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-card/50 rounded">
                              <span className="text-muted-foreground">{item.format}</span>
                              <code className="text-foreground">{item.example}</code>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
```

---

## Key Features

| Feature | Purpose |
|---------|---------|
| **Voice attributes** | Define consistent brand voice |
| **Tone by context** | Show how tone varies |
| **Microcopy patterns** | Copy-paste ready text |
| **Terminology table** | Standardise language |
| **UK English reference** | Ensure localisation |

---

## Verification Checklist

- [ ] Page loads at `/design-system/content`
- [ ] All four tabs work correctly
- [ ] Copy buttons copy text to clipboard
- [ ] Search filters microcopy patterns
- [ ] Good/bad examples are clearly distinguished
- [ ] UK spelling table is complete
- [ ] No console errors

---

## References

1. **Shopify Polaris Content Guidelines**
   - URL: https://polaris.shopify.com/content
   
2. **Gov.uk Content Design**
   - URL: https://www.gov.uk/guidance/content-design

---

**End of Specification**

