"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  XCircle,
  AlertTriangle
} from "lucide-react"
import { cn } from "@/lib/utils"

interface DoDontItem {
  id: string
  do?: {
    title?: string
    description: string
    example?: React.ReactNode
    code?: string
  }
  dont?: {
    title?: string
    description: string
    example?: React.ReactNode
    code?: string
  }
}

interface DoDontProps {
  title?: string
  items: DoDontItem[]
  className?: string
}

export function DoDont({
  title = "Do's and Don'ts",
  items,
  className
}: DoDontProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {title && (
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      )}
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {item.do && (
            <Card className="bg-green-500/5 border-green-500/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30">
                        Do
                      </Badge>
                      {item.do.title && (
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.do.title}
                        </h4>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.do.description}
                    </p>
                    {item.do.example && (
                      <div className="bg-background/50 rounded border border-border/50 p-3 mt-3">
                        {item.do.example}
                      </div>
                    )}
                    {item.do.code && (
                      <pre className="bg-background/50 rounded border border-border/50 p-3 mt-3 text-xs overflow-x-auto">
                        <code className="text-foreground/80">{item.do.code}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          {item.dont && (
            <Card className="bg-red-500/5 border-red-500/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30">
                        Don't
                      </Badge>
                      {item.dont.title && (
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.dont.title}
                        </h4>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.dont.description}
                    </p>
                    {item.dont.example && (
                      <div className="bg-background/50 rounded border border-border/50 p-3 mt-3 opacity-60">
                        {item.dont.example}
                      </div>
                    )}
                    {item.dont.code && (
                      <pre className="bg-background/50 rounded border border-border/50 p-3 mt-3 text-xs overflow-x-auto opacity-60">
                        <code className="text-foreground/80">{item.dont.code}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      ))}
    </div>
  )
}

