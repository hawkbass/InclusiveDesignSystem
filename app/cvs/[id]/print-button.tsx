"use client"

import { useEffect } from "react"

export function PrintButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.print()
        }
      }}
      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
    >
      Print CV
    </button>
  )
}

export function PrintStyles() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @media print {
        body {
          background: white !important;
        }
        .print\\:hidden {
          display: none !important;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])
  
  return null
}
