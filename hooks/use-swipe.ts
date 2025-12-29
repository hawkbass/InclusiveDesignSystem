"use client"

import { useState, useRef, useCallback } from "react"

export interface SwipeHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
}

export interface SwipeState {
  isSwiping: boolean
  swipeDirection: "left" | "right" | "up" | "down" | null
  swipeDistance: number
}

const SWIPE_THRESHOLD = 50 // Minimum distance in pixels to trigger swipe
const SWIPE_VELOCITY_THRESHOLD = 0.3 // Minimum velocity for quick swipe

/**
 * Hook to detect swipe gestures
 * Returns handlers and state for swipe detection
 */
export function useSwipe(handlers: SwipeHandlers = {}) {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    isSwiping: false,
    swipeDirection: null,
    swipeDistance: 0
  })

  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null)
  const touchEnd = useRef<{ x: number; y: number; time: number } | null>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    }
    touchEnd.current = null
    setSwipeState(prev => ({ ...prev, isSwiping: true, swipeDistance: 0 }))
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return

    const touch = e.touches[0]
    const deltaX = touch.clientX - touchStart.current.x
    const deltaY = touch.clientY - touchStart.current.y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    // Determine primary direction
    let direction: "left" | "right" | "up" | "down" | null = null
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      direction = deltaX > 0 ? "right" : "left"
    } else {
      direction = deltaY > 0 ? "down" : "up"
    }

    setSwipeState({
      isSwiping: true,
      swipeDirection: direction,
      swipeDistance: distance
    })
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return

    const touch = e.changedTouches[0]
    touchEnd.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    }

    const deltaX = touchEnd.current.x - touchStart.current.x
    const deltaY = touchEnd.current.y - touchStart.current.y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const timeDelta = touchEnd.current.time - touchStart.current.time
    const velocity = distance / timeDelta

    // Check if swipe meets threshold
    if (distance >= SWIPE_THRESHOLD || velocity >= SWIPE_VELOCITY_THRESHOLD) {
      // Determine primary direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0 && handlers.onSwipeRight) {
          handlers.onSwipeRight()
        } else if (deltaX < 0 && handlers.onSwipeLeft) {
          handlers.onSwipeLeft()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0 && handlers.onSwipeDown) {
          handlers.onSwipeDown()
        } else if (deltaY < 0 && handlers.onSwipeUp) {
          handlers.onSwipeUp()
        }
      }
    }

    // Reset state
    touchStart.current = null
    touchEnd.current = null
    setSwipeState({
      isSwiping: false,
      swipeDirection: null,
      swipeDistance: 0
    })
  }, [handlers])

  return {
    swipeState,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  }
}
