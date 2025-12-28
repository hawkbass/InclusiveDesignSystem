"use client"

import { ReactNode } from "react"
import { CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  id: string
  title: string
  description?: string
  timestamp: string
  icon?: ReactNode
  status?: "completed" | "pending" | "active"
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isCompleted = item.status === "completed"
        const isActive = item.status === "active"
        const isLast = index === items.length - 1

        return (
          <div key={item.id} className="relative flex gap-4">
            {/* Timeline Line */}
            {!isLast && (
              <div className="absolute left-5 top-10 w-px h-full bg-border/50" />
            )}

            {/* Timeline Icon */}
            <div className={cn(
              "relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2",
              isCompleted 
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                : isActive
                ? "bg-primary/20 border-primary/50 text-primary"
                : "bg-muted border-border/50 text-muted-foreground"
            )}>
              {item.icon || (
                isCompleted ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )
              )}
            </div>

            {/* Timeline Content */}
            <div className="flex-1 pb-8">
              <div className="flex items-start justify-between mb-1">
                <h4 className={cn(
                  "text-sm font-semibold",
                  isCompleted || isActive ? "text-foreground" : "text-muted-foreground"
                )}>
                  {item.title}
                </h4>
                <span className="text-xs text-muted-foreground ml-4">
                  {item.timestamp}
                </span>
              </div>
              {item.description && (
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

