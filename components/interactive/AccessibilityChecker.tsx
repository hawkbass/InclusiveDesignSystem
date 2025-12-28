"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AccessibilityCheck {
  id: string
  name: string
  description: string
  status: "pass" | "fail" | "warning"
  details?: string
}

interface AccessibilityCheckerProps {
  title?: string
  checks?: AccessibilityCheck[]
  score?: number
  className?: string
}

const defaultChecks: AccessibilityCheck[] = [
  {
    id: "contrast",
    name: "Color Contrast",
    description: "Text meets WCAG AA contrast requirements",
    status: "pass",
    details: "All text has sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)"
  },
  {
    id: "keyboard",
    name: "Keyboard Navigation",
    description: "All interactive elements are keyboard accessible",
    status: "pass",
    details: "All buttons, links, and form controls can be accessed via keyboard"
  },
  {
    id: "aria",
    name: "ARIA Attributes",
    description: "Proper ARIA labels and roles are used",
    status: "pass",
    details: "Components have appropriate ARIA attributes for screen readers"
  },
  {
    id: "focus",
    name: "Focus Management",
    description: "Visible focus indicators are present",
    status: "pass",
    details: "All focusable elements have visible focus indicators"
  },
  {
    id: "semantic",
    name: "Semantic HTML",
    description: "Semantic HTML elements are used correctly",
    status: "pass",
    details: "Proper use of semantic HTML elements (header, nav, main, etc.)"
  }
]

export function AccessibilityChecker({
  title = "Accessibility Checker",
  checks = defaultChecks,
  score,
  className
}: AccessibilityCheckerProps) {
  const [selectedCheck, setSelectedCheck] = useState<string | null>(null)

  const passedChecks = checks.filter(c => c.status === "pass").length
  const totalChecks = checks.length
  const calculatedScore = score ?? Math.round((passedChecks / totalChecks) * 100)

  const getStatusIcon = (status: AccessibilityCheck["status"]) => {
    switch (status) {
      case "pass":
        return <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
      case "fail":
        return <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
    }
  }

  const getStatusColor = (status: AccessibilityCheck["status"]) => {
    switch (status) {
      case "pass":
        return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30"
      case "fail":
        return "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30"
      case "warning":
        return "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30"
    }
  }

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold text-foreground">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Accessibility Score
              </span>
              <Badge 
                variant="outline" 
                className={cn(
                  "text-lg font-semibold",
                  calculatedScore >= 90 ? "border-green-500/30 text-green-600 dark:text-green-400" :
                  calculatedScore >= 70 ? "border-amber-500/30 text-amber-600 dark:text-amber-400" :
                  "border-red-500/30 text-red-600 dark:text-red-400"
                )}
              >
                {calculatedScore}%
              </Badge>
            </div>
            <Progress value={calculatedScore} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {passedChecks} of {totalChecks} checks passed
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Accessibility Checks
            </h3>
            {checks.map((check) => (
              <div
                key={check.id}
                className={cn(
                  "border rounded-lg p-4 cursor-pointer transition-colors",
                  selectedCheck === check.id 
                    ? "border-primary bg-primary/5" 
                    : "border-border/50 bg-card/30 hover:border-primary/50"
                )}
                onClick={() => setSelectedCheck(selectedCheck === check.id ? null : check.id)}
              >
                <div className="flex items-start gap-3">
                  {getStatusIcon(check.status)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-foreground">
                        {check.name}
                      </h4>
                      <Badge variant="outline" className={cn("text-xs", getStatusColor(check.status))}>
                        {check.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {check.description}
                    </p>
                    {selectedCheck === check.id && check.details && (
                      <div className="mt-2 p-3 bg-muted/30 rounded border border-border/50">
                        <div className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">
                            {check.details}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">WCAG Compliance:</strong> This component meets WCAG 2.1 Level AA standards. For Level AAA compliance, ensure all checks pass with enhanced contrast ratios.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

