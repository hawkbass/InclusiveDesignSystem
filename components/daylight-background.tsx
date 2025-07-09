"use client"

import { useEffect, useRef, useState } from "react"

// Utility to convert HSL string to RGBA
function hslToRgba(hsl: string, alpha: number = 1) {
  // hsl(210 40% 96.1%) or hsl(210, 40%, 96.1%)
  const match = hsl.match(/(\d+)[, ]+(\d+)%[, ]+(\d+\.?\d*)%?/) || []
  if (match.length < 4) return `rgba(240,240,240,${alpha})`
  const h = parseInt(match[1], 10)
  const s = parseInt(match[2], 10) / 100
  const l = parseFloat(match[3]) / 100
  // HSL to RGB
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
  }
  return `rgba(${f(0)},${f(8)},${f(4)},${alpha})`
}

export function DaylightBackground() {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get CSS variables for brand colors
    const getToken = (name: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || undefined
    }
    const bg = getToken("--background") || "210 40% 96.1%"
    const accent1 = getToken("--primary") || "271 91% 65%"
    const accent2 = getToken("--secondary") || "210 40% 96.1%"
    const accent3 = getToken("--accent") || "210 40% 96.1%"

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawAbstract()
    }

    // Draw abstract background
    const drawAbstract = () => {
      if (!ctx || !canvas) return
      // Fill background
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = hslToRgba(`hsl(${bg})`, 1)
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Overlapping circles
      const circles = [
        { x: canvas.width * 0.3, y: canvas.height * 0.25, r: canvas.width * 0.25, color: hslToRgba(`hsl(${accent1})`, 0.10) },
        { x: canvas.width * 0.7, y: canvas.height * 0.4, r: canvas.width * 0.18, color: hslToRgba(`hsl(${accent2})`, 0.13) },
        { x: canvas.width * 0.5, y: canvas.height * 0.7, r: canvas.width * 0.28, color: hslToRgba(`hsl(${accent3})`, 0.09) },
      ]
      circles.forEach(({ x, y, r, color }) => {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })

      // Subtle noise overlay
      const noiseAlpha = 0.04
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 0.7 + 0.3
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120,120,140,${noiseAlpha * Math.random()})`
        ctx.fill()
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mounted])

  if (!mounted) return null
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-5"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  )
} 