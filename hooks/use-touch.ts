"use client"

import { useState, useEffect } from "react"

/**
 * Hook to detect if the device supports touch input
 */
export function useTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Check for touch support
    const hasTouch = 
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore - some browsers support this
      (navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0)

    setIsTouch(hasTouch)
  }, [])

  return isTouch
}
