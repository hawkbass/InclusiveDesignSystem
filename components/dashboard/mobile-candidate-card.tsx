"use client"

import { useState } from "react"
import { Mail, Calendar, Phone, MapPin, Clock, ChevronDown, ChevronUp, Eye, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { SwipeableCard } from "./swipeable-card"
import { cn } from "@/lib/utils"
import type { Candidate } from "@/app/dashboard-sections/types"

interface MobileCandidateCardProps {
  candidate: Candidate
  isSelected: boolean
  onSelect: (candidateId: string) => void
  onView: (candidateId: string) => void
  onEmail: (candidateId: string) => void
  onSchedule: (candidateId: string) => void
  onMore: (candidateId: string) => void
  className?: string
}

/**
 * Mobile Candidate Card Component
 * 
 * Full-width card optimized for mobile devices
 * Includes swipe gestures and expandable details
 */
export function MobileCandidateCard({
  candidate,
  isSelected,
  onSelect,
  onView,
  onEmail,
  onSchedule,
  onMore,
  className
}: MobileCandidateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <SwipeableCard
      onSwipeLeft={() => onEmail(candidate.id)}
      onSwipeRight={() => onSchedule(candidate.id)}
      className={className}
    >
      <div
        className={cn(
          "bg-card/50 rounded-lg border border-border/50 p-4",
          "backdrop-blur-sm transition-all duration-200",
          isSelected && "ring-2 ring-primary border-primary/50"
        )}
      >
        {/* Main Content */}
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <button
            onClick={() => onSelect(candidate.id)}
            className={cn(
              "flex-shrink-0 mt-1",
              "min-h-[44px] min-w-[44px]",
              "flex items-center justify-center",
              "rounded-md transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label={`Select ${candidate.name}`}
          >
            {isSelected ? (
              <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <div className="w-5 h-5 border-2 border-muted-foreground/50 rounded" />
            )}
          </button>

          {/* Avatar */}
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
            {candidate.avatar}
          </div>

          {/* Candidate Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground truncate">
                    {candidate.name}
                  </h3>
                  <StatusBadge status={candidate.status} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{candidate.position}</p>
              </div>
              <button
                onClick={() => onMore(candidate.id)}
                className={cn(
                  "flex-shrink-0",
                  "min-h-[44px] min-w-[44px]",
                  "flex items-center justify-center",
                  "rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  "transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
                aria-label={`More actions for ${candidate.name}`}
              >
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
              {candidate.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{candidate.location}</span>
                </div>
              )}
              {candidate.experience && (
                <>
                  <span>•</span>
                  <span>{candidate.experience}</span>
                </>
              )}
              <span className="text-emerald-400 font-medium ml-auto">
                {candidate.match} match
              </span>
            </div>

            {/* Skills (collapsed view) */}
            {!isExpanded && candidate.skills && candidate.skills.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-2">
                {candidate.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 bg-muted/50 rounded text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
                {candidate.skills.length > 3 && (
                  <span className="text-xs px-2 py-0.5 text-muted-foreground">
                    +{candidate.skills.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* Expandable Details */}
            {isExpanded && (
              <div className="space-y-2 pt-2 border-t border-border/50">
                {candidate.skills && candidate.skills.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-muted/50 rounded text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {candidate.lastActivity && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Last activity: {candidate.lastActivity}</span>
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
                onClick={() => onView(candidate.id)}
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-h-[44px] text-xs"
                onClick={() => onEmail(candidate.id)}
              >
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 min-h-[44px] text-xs"
                onClick={() => onSchedule(candidate.id)}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Schedule
              </Button>
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
