"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useA11yAnnouncer } from "@/hooks/use-a11y-announcer"

interface AccessibilityContextType {
  announce: (message: string) => void
  isReducedMotion: boolean
  isHighContrast: boolean
  fontSize: number
  setFontSize: (size: number) => void
  LiveRegion: React.ReactElement
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

interface AccessibilityProviderProps {
  children: React.ReactNode
  defaultFontSize?: number
}

export function AccessibilityProvider({ 
  children, 
  defaultFontSize = 16 
}: AccessibilityProviderProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(defaultFontSize)
  const { announce, LiveRegion } = useA11yAnnouncer()

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    // Check for high contrast preference
    const mediaQuery = window.matchMedia("(prefers-contrast: high)")
    setIsHighContrast(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    // Apply font size to document
    document.documentElement.style.fontSize = `${fontSize}px`
  }, [fontSize])

  const value: AccessibilityContextType = {
    announce,
    isReducedMotion,
    isHighContrast,
    fontSize,
    setFontSize,
    LiveRegion
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      {LiveRegion}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}

// Skip link component for keyboard navigation
export function SkipLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {children}
    </a>
  )
}

// Focus trap component for modals
export function FocusTrap({ children }: { children: React.ReactNode }) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    container.addEventListener("keydown", handleKeyDown)
    firstElement?.focus()

    return () => {
      container.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
} 