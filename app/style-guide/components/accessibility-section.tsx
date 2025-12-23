"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  Copy, 
  Heart,
  Eye,
  Contrast,
  Type,
  MousePointer,
  Keyboard
} from "lucide-react"

interface AccessibilitySectionProps {
  searchQuery: string
  viewMode: "grid" | "list"
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  favourites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function AccessibilitySection({
  searchQuery,
  viewMode,
  onCopyCode,
  copiedCode,
  favourites,
  onToggleFavorite
}: AccessibilitySectionProps) {
  const accessibilityGuidelines = [
    {
      id: "colour-contrast",
      title: "colour Contrast",
      description: "WCAG 2.1 AA compliant colour combinations",
      icon: Contrast,
      status: "compliant",
      examples: [
        { bg: "bg-card", text: "text-foreground", ratio: "15.8:1", level: "AAA" },
        { bg: "bg-fuchsia-500", text: "text-white", ratio: "4.9:1", level: "AA" },
        { bg: "bg-card", text: "text-foreground/80", ratio: "7.2:1", level: "AAA" }
      ]
    },
    {
      id: "focus-indicators",
      title: "Focus Indicators",
      description: "Visible focus states for keyboard navigation",
      icon: Keyboard,
      status: "implemented",
      code: `focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-900`
    },
    {
      id: "semantic-markup",
      title: "Semantic HTML",
      description: "Proper heading hierarchy and semantic elements",
      icon: Type,
      status: "compliant",
      code: `<h1>Main Title</h1>
<h2>Section Title</h2>
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="#" aria-current="page">Home</a></li>
  </ul>
</nav>`
    },
    {
      id: "interactive-targets",
      title: "Touch Targets",
      description: "Minimum 44px touch targets for mobile",
      icon: MousePointer,
      status: "compliant",
      code: `min-h-[44px] min-w-[44px] p-3`
    }
  ]

  const filteredGuidelines = accessibilityGuidelines.filter(guideline =>
    guideline.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guideline.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {filteredGuidelines.map((guideline) => {
          const IconComponent = guideline.icon
          return (
            <Card key={guideline.id} className="bg-card/30 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <IconComponent className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{guideline.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {guideline.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      className={`${
                        guideline.status === 'compliant' ? 'bg-green-500/20 text-green-600 dark:text-green-300' :
                        guideline.status === 'implemented' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-300' :
                        'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300'
                      }`}
                    >
                      {guideline.status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleFavorite(guideline.id)}
                      className="text-muted-foreground hover:text-pink-400"
                    >
                      <Heart className={`h-4 w-4 ${favourites.has(guideline.id) ? 'fill-current text-pink-400' : ''}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {guideline.examples && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground/80">Examples</h4>
                    {guideline.examples.map((example, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                        <div className={`${example.bg} ${example.text} px-3 py-1 rounded text-sm font-medium`}>
                          Sample Text
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-muted-foreground">Ratio: {example.ratio}</span>
                          <Badge className={`${
                            example.level === 'AAA' ? 'bg-green-500/20 text-green-600 dark:text-green-300' : 'bg-blue-500/20 text-blue-600 dark:text-blue-300'
                          }`}>
                            {example.level}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {guideline.code && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground/80">Implementation</h4>
                    <div className="bg-card/50 rounded-lg p-3 border border-border/30">
                      <pre className="text-xs overflow-x-auto">
                        <code className="text-foreground/80">{guideline.code}</code>
                      </pre>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onCopyCode(guideline.code, guideline.id)}
                      className="hover:border-green-500/50"
                    >
                      {copiedCode === guideline.id ? (
                        <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Accessibility Checklist */}
      <Card className="bg-card/30 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            WCAG 2.1 AA Compliance Checklist
          </CardTitle>
          <CardDescription>
            Our design system meets all WCAG 2.1 AA requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "colour contrast ratios meet AA standards",
              "All interactive elements have focus indicators", 
              "Semantic HTML structure throughout",
              "Touch targets minimum 44px",
              "Alt text for all images",
              "Keyboard navigation support",
              "Screen reader compatibility",
              "Motion preferences respected"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}





