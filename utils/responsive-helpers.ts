/**
 * Responsive helper utilities for mobile-first design
 */

/**
 * Get responsive grid columns class string
 */
export function getResponsiveColumns(
  mobile: number,
  tablet: number,
  desktop: number
): string {
  return `grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop}`
}

/**
 * Get responsive gap class string
 */
export function getResponsiveGap(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `gap-${mobile} md:gap-${tablet} lg:gap-${desktop}`
}

/**
 * Get responsive padding class string
 */
export function getResponsivePadding(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `p-${mobile} md:p-${tablet} lg:p-${desktop}`
}

/**
 * Get responsive spacing class string
 */
export function getResponsiveSpacing(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `space-y-${mobile} md:space-y-${tablet} lg:space-y-${desktop}`
}

/**
 * Get responsive text size class string
 */
export function getResponsiveTextSize(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `text-${mobile} md:text-${tablet} lg:text-${desktop}`
}

/**
 * Check if viewport width is within a range
 */
export function isViewportInRange(min: number, max: number): boolean {
  if (typeof window === "undefined") return false
  const width = window.innerWidth
  return width >= min && width <= max
}

/**
 * Get viewport width
 */
export function getViewportWidth(): number {
  if (typeof window === "undefined") return 1024
  return window.innerWidth
}

/**
 * Get viewport height
 */
export function getViewportHeight(): number {
  if (typeof window === "undefined") return 768
  return window.innerHeight
}
