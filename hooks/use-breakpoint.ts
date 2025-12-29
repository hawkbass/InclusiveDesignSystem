"use client"

import { useState, useEffect } from "react"

export type Breakpoint = "mobile" | "tablet" | "desktop"

/**
 * Hook to detect current breakpoint
 * Mobile: 0-767px
 * Tablet: 768-1023px
 * Desktop: 1024px+
 */
export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop")

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < 768) {
        setBreakpoint("mobile")
      } else if (width < 1024) {
        setBreakpoint("tablet")
      } else {
        setBreakpoint("desktop")
      }
    }

    // Set initial value
    updateBreakpoint()

    // Listen for resize events
    window.addEventListener("resize", updateBreakpoint)
    return () => window.removeEventListener("resize", updateBreakpoint)
  }, [])

  return breakpoint
}

/**
 * Hook to check if current viewport is mobile
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    updateIsMobile()
    window.addEventListener("resize", updateIsMobile)
    return () => window.removeEventListener("resize", updateIsMobile)
  }, [breakpoint])

  return isMobile
}

/**
 * Hook to check if current viewport is tablet
 */
export function useIsTablet(): boolean {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const updateIsTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= 768 && width < 1024)
    }

    updateIsTablet()
    window.addEventListener("resize", updateIsTablet)
    return () => window.removeEventListener("resize", updateIsTablet)
  }, [])

  return isTablet
}

/**
 * Hook to check if device is in portrait orientation
 * Useful for tablet optimizations
 */
export function useIsPortrait(): boolean {
  const [isPortrait, setIsPortrait] = useState(true)

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth)
    }

    updateOrientation()
    window.addEventListener("resize", updateOrientation)
    window.addEventListener("orientationchange", updateOrientation)
    
    return () => {
      window.removeEventListener("resize", updateOrientation)
      window.removeEventListener("orientationchange", updateOrientation)
    }
  }, [])

  return isPortrait
}
