import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, TrendingUp, TrendingDown } from "lucide-react"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  change?: string
  trend?: "up" | "down" | "neutral"
  icon?: React.ReactNode
  description?: string
  showFavorite?: boolean
  onFavorite?: () => void
  isFavorited?: boolean
  loading?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outlined" | "ghost"
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({
    className,
    title,
    value,
    change,
    trend = "neutral",
    icon,
    description,
    showFavorite = false,
    onFavorite,
    isFavorited = false,
    loading = false,
    size = "md",
    variant = "default",
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: "p-3 h-20",
      md: "p-4 h-24",
      lg: "p-6 h-32"
    }

    const variantClasses = {
      default: "bg-slate-800/50 border-slate-700/50 hover:border-fuchsia-500/50",
      outlined: "bg-transparent border-slate-600 hover:border-fuchsia-500/50",
      ghost: "bg-slate-900/30 border-slate-700/30 hover:border-slate-600/50"
    }

    const getTrendColor = () => {
      switch (trend) {
        case "up": return "text-green-400"
        case "down": return "text-red-400"
        default: return "text-slate-400"
      }
    }

    const getTrendIcon = () => {
      switch (trend) {
        case "up": return <TrendingUp className="h-3 w-3" />
        case "down": return <TrendingDown className="h-3 w-3" />
        default: return null
      }
    }

    if (loading) {
      return (
        <Card className={cn("animate-pulse", variantClasses[variant], sizeClasses[size], className)} ref={ref}>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-6 bg-slate-700 rounded w-1/2"></div>
              <div className="h-3 bg-slate-700 rounded w-1/4"></div>
            </div>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card 
        className={cn(
          "transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/10 cursor-pointer group backdrop-blur-sm",
          variantClasses[variant],
          sizeClasses[size],
          className
        )} 
        ref={ref}
        {...props}
      >
        <CardContent className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="text-xs text-slate-400 font-medium">{title}</div>
            <div className="flex items-center gap-2">
              {icon && (
                <div className="flex-shrink-0">
                  {icon}
                </div>
              )}
              {showFavorite && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation()
                    onFavorite?.()
                  }}
                >
                  <Heart className={cn(
                    "h-3 w-3",
                    isFavorited ? "fill-current text-fuchsia-400" : "text-slate-400"
                  )} />
                </Button>
              )}
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-2xl font-bold text-slate-100 mb-1">
                {value}
              </div>
              {description && (
                <div className="text-xs text-slate-500">{description}</div>
              )}
            </div>
            
            {change && (
              <div className={cn(
                "text-xs font-medium flex items-center gap-1 mt-2",
                getTrendColor()
              )}>
                {getTrendIcon()}
                {change}
              </div>
            )}
          </div>

          {/* Hover effect */}
          <div className="mt-2 pt-2 border-t border-slate-700/50 text-xs text-fuchsia-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            View details
            <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    )
  }
)

StatCard.displayName = "StatCard"

export { StatCard } 