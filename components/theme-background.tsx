"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState, useCallback } from "react"

/**
 * Theme-aware background component
 * 
 * Dark mode: Twinkling white stars with subtle parallax
 * Light mode: CSS-only subtle gradient (no distracting animations)
 * 
 * Performance optimizations:
 * - 30fps cap for background (decorative, doesn't need 60fps)
 * - IntersectionObserver to pause when not visible
 * - Respects prefers-reduced-motion
 * 
 * Research References:
 * - WCAG 2.3.3: Animation from Interactions
 * - Nielsen Norman Group: Performance perception
 * - Browser best practices: IntersectionObserver, rAF throttling
 */
export function ThemeBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Performance: Use refs for values that shouldn't trigger re-renders
  const isVisibleRef = useRef(true)
  const prefersReducedMotionRef = useRef(false)

  // Mount effect - check reduced motion preference
  useEffect(() => {
    setMounted(true)
    
    // WCAG 2.3.3: Respect user's motion preferences
    // Reference: https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions
    prefersReducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  }, [])

  // Main effect - canvas animation for both light and dark modes
  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Performance: Pause animation when not visible
    // Reference: Browser best practices - IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? true
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    // Particle storage with parallax layer property
    // 40% fewer particles than original (0.00009 vs 0.00015)
    const particles: {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      twinkleSpeed: number
      layer: number // 0=far, 1=mid, 2=near (parallax depth)
    }[] = []

    // Initialize particles with parallax layers
    const initParticles = () => {
      particles.length = 0
      
      // Reduced density: 40% fewer stars for cleaner appearance
      const density = 0.00009
      const count = Math.max(60, Math.floor(canvas.width * canvas.height * density))

      for (let i = 0; i < count; i++) {
        // 3 parallax layers: far (50%), mid (35%), near (15%)
        const layerRandom = Math.random()
        const layer = layerRandom < 0.5 ? 0 : layerRandom < 0.85 ? 1 : 2
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Size varies by layer - far stars smaller
          size: layer === 0 
            ? Math.random() * 0.8 + 0.3   // Far: 0.3-1.1px
            : layer === 1 
              ? Math.random() * 1.2 + 0.4 // Mid: 0.4-1.6px
              : Math.random() * 1.5 + 0.5, // Near: 0.5-2.0px
          // Opacity varies by layer and theme - lighter stars in light mode
          opacity: resolvedTheme === "light"
            ? layer === 0
              ? Math.random() * 0.15 + 0.05   // Light mode far: 5-20%
              : layer === 1
                ? Math.random() * 0.2 + 0.1   // Light mode mid: 10-30%
                : Math.random() * 0.25 + 0.15 // Light mode near: 15-40%
            : layer === 0
              ? Math.random() * 0.3 + 0.1   // Dark mode far: 10-40%
              : layer === 1
                ? Math.random() * 0.4 + 0.2 // Dark mode mid: 20-60%
                : Math.random() * 0.5 + 0.3, // Dark mode near: 30-80%
          // Speed 50% slower than original, varies by layer
          speed: (Math.random() * 0.15 + 0.05) * (layer + 1) * 0.5,
          // Slower twinkle for subtlety
          twinkleSpeed: Math.random() * 0.004 + 0.002,
          layer,
        })
      }
    }

    // Draw function for stars (theme-aware)
    const draw = (time: number) => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Star color based on theme - darker in light mode for subtlety
      const starColor = resolvedTheme === "light" 
        ? "rgba(0, 0, 0, "  // Dark specks in light mode
        : "rgba(255, 255, 255, " // White stars in dark mode

      particles.forEach((p) => {
        // Twinkle effect using sine wave
        const twinkle = Math.sin(time * p.twinkleSpeed + p.x) * 0.3 + 0.7
        const currentOpacity = p.opacity * twinkle

        // Draw star
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${starColor}${currentOpacity})`
        ctx.fill()

        // Add subtle glow for larger stars (near layer only)
        // This creates depth without performance cost
        if (p.size > 1.2 && p.layer === 2) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `${starColor}${currentOpacity * 0.15})`
          ctx.fill()
        }
      })
    }

    // Resize handler - reinitialize particles on viewport change
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Animation loop with 30fps cap
    // Reference: Decorative elements don't need 60fps
    let animationFrameId: number
    let startTime = Date.now()
    let lastFrameTime = 0
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - lastFrameTime

      // Skip frame if not enough time has passed (30fps cap)
      if (elapsed < frameInterval) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      lastFrameTime = currentTime - (elapsed % frameInterval)

      // Skip animation if not visible or reduced motion preferred
      // Reference: WCAG 2.3.3, Performance best practices
      if (!isVisibleRef.current || prefersReducedMotionRef.current) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      const time = currentTime - startTime

      // Move particles (50% slower than original)
      particles.forEach((p) => {
        // Stars drift upward, speed varies by layer (parallax)
        p.y -= p.speed * 0.25
        
        // Reset when off screen
        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
      })

      draw(time)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [mounted, resolvedTheme])

  // Reinitialize particles when theme changes
  useEffect(() => {
    if (!mounted || !canvasRef.current) return
    // Trigger resize to reinitialize particles with new theme settings
    window.dispatchEvent(new Event('resize'))
  }, [resolvedTheme, mounted])

  // Early return if not mounted (SSR)
  if (!mounted) return null

  // Both modes: Canvas with animated stars (dark specks in light mode, white stars in dark mode)
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        width: "100vw",
        height: "100vh",
      }}
      aria-hidden="true"
    />
  )
}
