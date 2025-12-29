"use client"

import { useState } from "react"
import { Eye, Edit, Pause, Play, X, MapPin, Clock, Users, PoundSterling, ChevronDown, ChevronUp, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SwipeableCard } from "./swipeable-card"
import { cn } from "@/lib/utils"
import type { Job } from "@/app/dashboard-sections/types"

interface MobileJobCardProps {
  job: Job
  onView: (jobId: string) => void
  onEdit: (jobId: string) => void
  onPause: (jobId: string) => void
  onActivate: (jobId: string) => void
  onClose: (jobId: string) => void
  onMore: (jobId: string) => void
  className?: string
}

/**
 * Mobile Job Card Component
 * 
 * Full-width card optimized for mobile devices
 * Includes swipe gestures and expandable details
 */
export function MobileJobCard({
  job,
  onView,
  onEdit,
  onPause,
  onActivate,
  onClose,
  onMore,
  className
}: MobileJobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30"
      case "paused":
        return "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30"
      case "closed":
        return "bg-red-500/20 text-red-600 dark:text-red-300 border-red-500/30"
      case "draft":
        return "bg-slate-500/20 text-foreground/80 border-slate-500/30"
      default:
        return "bg-slate-500/20 text-foreground/80 border-slate-500/30"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-600 dark:text-red-300 border-red-500/30"
      case "medium":
        return "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30"
      case "low":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      default:
        return "bg-slate-500/20 text-foreground/80 border-slate-500/30"
    }
  }

  return (
    <SwipeableCard
      onSwipeLeft={() => job.status === "active" ? onPause(job.id) : onView(job.id)}
      onSwipeRight={() => onView(job.id)}
      className={className}
    >
      <div
        className={cn(
          "bg-card/50 rounded-lg border border-border/50 p-4",
          "backdrop-blur-sm transition-all duration-200"
        )}
      >
        {/* Main Content */}
        <div className="flex items-start gap-3">
          {/* Job Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Badge className={cn("text-xs", getStatusColor(job.status))}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </Badge>
                  {job.priority && (
                    <Badge className={cn("text-xs", getPriorityColor(job.priority))}>
                      {job.priority} priority
                    </Badge>
                  )}
                </div>
              </div>
              <button
                onClick={() => onMore(job.id)}
                className={cn(
                  "flex-shrink-0",
                  "min-h-[44px] min-w-[44px]",
                  "flex items-center justify-center",
                  "rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  "transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
                aria-label={`More actions for ${job.title}`}
              >
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Info */}
            <div className="space-y-1 mb-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{job.location}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {job.department && (
                  <span className="truncate">{job.department}</span>
                )}
                {job.type && (
                  <>
                    <span>•</span>
                    <span>{job.type}</span>
                  </>
                )}
                {job.level && (
                  <>
                    <span>•</span>
                    <span>{job.level}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {job.salary && (
                  <div className="flex items-center gap-1">
                    <PoundSterling className="h-3 w-3" />
                    <span>{job.salary}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{job.applicants} applicants</span>
                </div>
                {job.posted && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{job.posted}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Expandable Details */}
            {isExpanded && (
              <div className="space-y-2 pt-2 border-t border-border/50">
                {job.description && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Description</p>
                    <p className="text-xs text-foreground/80 line-clamp-3">{job.description}</p>
                  </div>
                )}
                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Requirements</p>
                    <ul className="text-xs text-foreground/80 space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span>•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-h-[44px] text-xs"
                onClick={() => onView(job.id)}
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              {job.status === "active" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 min-h-[44px] text-xs"
                  onClick={() => onPause(job.id)}
                >
                  <Pause className="h-4 w-4 mr-1" />
                  Pause
                </Button>
              ) : job.status === "paused" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 min-h-[44px] text-xs"
                  onClick={() => onActivate(job.id)}
                >
                  <Play className="h-4 w-4 mr-1" />
                  Activate
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 min-h-[44px] text-xs"
                  onClick={() => onEdit(job.id)}
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-full mt-2 pt-2 border-t border-border/50",
            "flex items-center justify-center gap-1",
            "text-xs text-muted-foreground hover:text-foreground",
            "transition-colors",
            "min-h-[44px]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span>Show More</span>
            </>
          )}
        </button>
      </div>
    </SwipeableCard>
  )
}
