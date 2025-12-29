"use client"

import { ReactNode } from "react"
import { useSwipe, SwipeHandlers } from "@/hooks/use-swipe"
import { cn } from "@/lib/utils"

interface SwipeableCardProps {
  children: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  className?: string
  disabled?: boolean
}

/**
 * Swipeable Card Component
 * 
 * Wraps content with swipe gesture detection
 * Provides visual feedback during swipe
 */
export function SwipeableCard({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  className,
  disabled = false
}: SwipeableCardProps) {
  const handlers: SwipeHandlers = {
    onSwipeLeft: disabled ? undefined : onSwipeLeft,
    onSwipeRight: disabled ? undefined : onSwipeRight,
    onSwipeUp: disabled ? undefined : onSwipeUp,
    onSwipeDown: disabled ? undefined : onSwipeDown
  }

  const { swipeState, handlers: touchHandlers } = useSwipe(handlers)

  return (
    <div
      className={cn(
        "relative transition-transform duration-200 ease-out",
        swipeState.isSwiping && "transition-none",
        className
      )}
      style={{
        transform: swipeState.isSwiping
          ? `translateX(${
              swipeState.swipeDirection === "left"
                ? -Math.min(swipeState.swipeDistance * 0.1, 20)
                : swipeState.swipeDirection === "right"
                ? Math.min(swipeState.swipeDistance * 0.1, 20)
                : 0
            }px)`
          : undefined,
        opacity: swipeState.isSwiping ? 0.9 : 1
      }}
      {...touchHandlers}
    >
      {children}
      
      {/* Swipe action indicators */}
      {swipeState.isSwiping && (
        <div className="absolute inset-0 pointer-events-none">
          {swipeState.swipeDirection === "left" && onSwipeLeft && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-500/20 text-red-500 rounded-lg px-3 py-2 text-sm font-medium">
              Action
            </div>
          )}
          {swipeState.swipeDirection === "right" && onSwipeRight && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-500/20 text-green-500 rounded-lg px-3 py-2 text-sm font-medium">
              Action
            </div>
          )}
        </div>
      )}
    </div>
  )
}
