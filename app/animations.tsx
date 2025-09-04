"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export function AnimatedElement({
  children,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}: {
  children: React.ReactNode
  animation?: "fade-in" | "slide-up" | "slide-in-right" | "pulse-slow" | "float"
  delay?: number
  threshold?: number
  once?: boolean
}) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  const animationClass = `animate-${animation}`
  const delayClass = delay > 0 ? `animate-delay-${delay}` : ""

  return (
    <div ref={ref} className={`${inView || hasAnimated ? `${animationClass} ${delayClass}` : "opacity-0"}`}>
      {children}
    </div>
  )
}

export function AnimateOnScroll({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedElement animation="slide-up" once={false}>
      {children}
    </AnimatedElement>
  )
}

export function AnimateStagger({
  children,
  animation = "slide-up",
  baseDelay = 100,
  staggerDelay = 100,
}: {
  children: React.ReactNode[]
  animation?: "fade-in" | "slide-up" | "slide-in-right"
  baseDelay?: number
  staggerDelay?: number
}) {
  return (
    <>
      {children.map((child, index) => (
        <AnimatedElement key={index} animation={animation} delay={baseDelay + index * staggerDelay} once={false}>
          {child}
        </AnimatedElement>
      ))}
    </>
  )
}

// New Scalo-inspired scroll animations
export function ScaloReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  distance = 50,
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      default:
        return `translateY(${distance}px)`
    }
  }

  return (
    <div
      ref={ref}
      className="overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}






