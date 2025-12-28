"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  BarChart3,
  Users,
  Calendar,
  Briefcase,
  Clock
} from "lucide-react"
import { initialAnalytics } from "./data"
import type { AnalyticsMetric } from "./types"

export function Analytics() {
  const [period, setPeriod] = useState<string>("month")
  const [analytics] = useState<AnalyticsMetric[]>(initialAnalytics)

  const filteredAnalytics = analytics.filter(a => a.period === period)

  const getTrendIcon = (trend: AnalyticsMetric["trend"]) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-emerald-400" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-400" />
      case "stable":
        return <Minus className="h-4 w-4 text-amber-400" />
    }
  }

  const getMetricIcon = (name: string) => {
    if (name.includes("Application")) return <Users className="h-5 w-5 text-blue-400" />
    if (name.includes("Interview")) return <Calendar className="h-5 w-5 text-purple-400" />
    if (name.includes("Offer")) return <Briefcase className="h-5 w-5 text-emerald-400" />
    if (name.includes("Time")) return <Clock className="h-5 w-5 text-amber-400" />
    return <BarChart3 className="h-5 w-5 text-fuchsia-400" />
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Analytics & Reporting</h3>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Daily</SelectItem>
            <SelectItem value="week">Weekly</SelectItem>
            <SelectItem value="month">Monthly</SelectItem>
            <SelectItem value="quarter">Quarterly</SelectItem>
            <SelectItem value="year">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAnalytics.map((metric) => (
          <Card key={metric.id} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-foreground">
                  {metric.name}
                </CardTitle>
                {getMetricIcon(metric.name)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      metric.trend === "up" 
                        ? "border-emerald-500/30 text-emerald-600 dark:text-emerald-400" 
                        : metric.trend === "down"
                        ? "border-red-500/30 text-red-600 dark:text-red-400"
                        : "border-amber-500/30 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {getTrendIcon(metric.trend)}
                      {Math.abs(metric.change)}%
                    </div>
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {metric.period.charAt(0).toUpperCase() + metric.period.slice(1)} period
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

