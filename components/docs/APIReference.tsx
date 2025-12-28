"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Code2,
  Info,
  AlertCircle,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { PropDefinition } from "@/app/data/component-data"

interface APIReferenceProps {
  componentName: string
  props: PropDefinition[]
  description?: string
  className?: string
}

export function APIReference({
  componentName,
  props,
  description,
  className
}: APIReferenceProps) {
  const requiredProps = props.filter(p => p.required)
  const optionalProps = props.filter(p => !p.required)

  return (
    <Card className={cn("bg-card/50 border-border/50", className)}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold text-foreground">
            API Reference
          </CardTitle>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Component: <code className="text-primary">{componentName}</code>
            </h3>
            
            {requiredProps.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                  <h4 className="text-sm font-medium text-foreground">
                    Required Props
                  </h4>
                </div>
                <div className="space-y-3">
                  {requiredProps.map((prop) => (
                    <PropRow key={prop.name} prop={prop} required />
                  ))}
                </div>
              </div>
            )}

            {optionalProps.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-4 w-4 text-blue-400" />
                  <h4 className="text-sm font-medium text-foreground">
                    Optional Props
                  </h4>
                </div>
                <div className="space-y-3">
                  {optionalProps.map((prop) => (
                    <PropRow key={prop.name} prop={prop} required={false} />
                  ))}
                </div>
              </div>
            )}

            {props.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No props defined for this component.</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PropRow({ prop, required }: { prop: PropDefinition; required: boolean }) {
  return (
    <div className="border-l-2 border-primary/30 pl-4 py-2 bg-muted/20 rounded-r">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2">
          <code className="text-sm font-mono font-semibold text-foreground">
            {prop.name}
          </code>
          {required && (
            <Badge variant="destructive" className="text-xs">
              required
            </Badge>
          )}
          {!required && prop.default !== undefined && (
            <Badge variant="outline" className="text-xs">
              default: {String(prop.default)}
            </Badge>
          )}
        </div>
        <Badge variant="secondary" className="text-xs font-mono">
          {prop.type}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {prop.description}
      </p>
      {prop.options && prop.options.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground mb-1">Options:</p>
          <div className="flex flex-wrap gap-1">
            {prop.options.map((option) => (
              <Badge key={option} variant="outline" className="text-xs font-mono">
                {option}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

