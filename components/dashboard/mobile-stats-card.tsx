"use client"

import { ReactNode } from "react"
import { TrendingUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileStatsCardProps {
  title: string
  value: string
  goal?: string
  subtitle?: string
  progress: number
  change: string
  icon: ReactNode
  onClick?: () => void
  className?: string
}

/**
 * Mobile Stats Card Component
 * 
 * Optimized for mobile with larger numbers and simplified layout
 * Single column, touch-friendly
 */
export function MobileStatsCard({
  title,
  value,
  goal,
  subtitle,
  progress,
  change,
  icon,
  onClick,
  className
}: MobileStatsCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full bg-card/50 rounded-lg border border-border/50 p-4",
        "backdrop-blur-sm transition-all duration-300",
        "hover:border-primary/50 active:scale-[0.98]",
        "text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "min-h-[120px]",
        className
      )}
      aria-label={`${title}: ${value}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="text-xs text-muted-foreground font-medium">{title}</div>
        <div className="flex-shrink-0 text-muted-foreground">
          {icon}
        </div>
      </div>
      
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="text-2xl font-bold text-foreground mb-1 flex items-baseline gap-2">
            {value}
            {goal && (
              <span className="text-sm text-muted-foreground font-normal">/ {goal}</span>
            )}
          </div>
          {subtitle && (
            <div className="text-xs text-muted-foreground mb-3">{subtitle}</div>
          )}
          
          {/* Progress Bar */}
          <div className="w-full bg-muted/50 rounded-full h-2 mb-3">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xs font-medium flex items-center gap-1 text-green-600 dark:text-green-400">
            <TrendingUp className="h-3 w-3" />
            {change}
          </div>
          <div className="text-xs text-muted-foreground">{progress}%</div>
        </div>
      </div>

      {/* Hover effect */}
      {onClick && (
        <div className="mt-2 pt-2 border-t border-border/50 text-xs text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
          View details
          <ArrowRight className="ml-1 h-3 w-3" />
        </div>
      )}
    </button>
  )
}
