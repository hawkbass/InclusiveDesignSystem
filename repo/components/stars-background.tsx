"use client"

import { useEffect, useRef, useState } from "react"

export function StarsBackground() {
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

    // Create stars first - before any functions try to use it
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = []

    // Function to initialize stars
    const initStars = () => {
      // Clear existing stars
      stars.length = 0

      // Calculate number of stars based on screen size
      const starDensity = 0.0001 // stars per pixel
      const starCount = Math.floor(canvas.width * canvas.height * starDensity)

      // Create new stars based on current canvas dimensions
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.2 + 0.1, // 10-30% opacity
          speed: Math.random() * 0.05 + 0.01,
        })
      }
    }

    // Draw stars function
    function drawStars() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })
    }

    // Set canvas dimensions and initialize stars
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars() // Initialize stars after setting canvas dimensions
      drawStars()
    }

    // Handle resize events
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas() // Initial setup

    // Animate stars
    let animationFrameId: number

    const animate = () => {
      drawStars()

      // Move stars slightly
      stars.forEach((star) => {
        star.y -= star.speed
        star.opacity = 0.1 + Math.sin(Date.now() * 0.001 + star.x) * 0.1

        // Reset star position if it goes off screen
        if (star.y < -10) {
          star.y = canvas.height + 10
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
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
