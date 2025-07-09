// Performance monitoring and optimisation utilities
import React from 'react'

export class PerformanceMonitor {
  private marks = new Map<string, number>()

  mark(name: string): void {
    this.marks.set(name, performance.now())
  }

  measure(name: string, startMark: string, endMark?: string): number {
    const start = this.marks.get(startMark)
    if (!start) {
      console.warn(`Mark "${startMark}" not found`)
      return 0
    }

    const end = endMark ? this.marks.get(endMark) : performance.now()
    if (!end) {
      console.warn(`Mark "${endMark}" not found`)
      return 0
    }

    const duration = end - start
    console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`)
    return duration
  }

  clearMarks(): void {
    this.marks.clear()
  }
}

export const performanceMonitor = new PerformanceMonitor()

// Lazy loading wrapper with performance monitoring
// export function withPerformanceMonitoring(
//   Component: React.ComponentType<any>,
//   fallback?: React.ComponentType
// ) {
//   return React.forwardRef((props: any, ref) => {
//     const startTime = performance.now()
//     
//     React.useEffect(() => {
//       const duration = performance.now() - startTime
//       console.log(`Component ${Component.name} rendered in ${duration.toFixed(2)}ms`)
//     })

//     return (
//       <React.Suspense fallback={fallback ? React.createElement(fallback) : null}>
//         <Component {...props} ref={ref} />
//       </React.Suspense>
//     )
//   })
// }

// Performance optimisation utilities
export const performanceUtils = {
  // Debounce function calls
  debounce(func: Function, wait: number): Function {
    let timeout: ReturnType<typeof setTimeout>
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  },

  // Throttle function calls
  throttle(func: Function, limit: number): Function {
    let inThrottle: boolean
    let timeout: ReturnType<typeof setTimeout>
    return (...args: any[]) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        timeout = setTimeout(() => (inThrottle = false), limit)
      }
    }
  },

  // Memoisation helper
  memoize(func: Function): Function {
    const cache = new Map()
    return (...args: any[]) => {
      const key = JSON.stringify(args)
      if (cache.has(key)) {
        return cache.get(key)
      }
      const result = func(...args)
      cache.set(key, result)
      return result
    }
  }
}

// Performance observer for long tasks
export function observeLongTasks(threshold = 50): void {
  if (typeof window === 'undefined') return

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > threshold) {
        console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`, entry)
      }
    }
  })

  observer.observe({ entryTypes: ['longtask'] })
}

// Memory usage monitoring
export function getMemoryUsage(): { used: number; total: number; limit: number } | null {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory
    return {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
    }
  }
  return null
}

// Bundle size optimization
export function optimizeBundle() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // Track bundle size in development
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('📦 Bundle loaded:', {
            transferSize: (entry as any).transferSize,
            encodedBodySize: (entry as any).encodedBodySize,
            decodedBodySize: (entry as any).decodedBodySize,
          })
        }
      }
    })
    observer.observe({ entryTypes: ['navigation'] })
  }
} 