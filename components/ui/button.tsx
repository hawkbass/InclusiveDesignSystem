"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Button component with accessible touch targets
 * 
 * All interactive sizes meet or approach 44px minimum height
 * 
 * Reference: 
 * - WCAG 2.5.5 Target Size: 44x44px minimum
 * - Fitts's Law: Larger targets are faster to acquire
 * - Apple HIG: 44pt minimum touch target
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        /*
         * SIZE VARIANTS - UPDATED for 44px touch target compliance
         * 
         * xs: 36px - Compact but accessible (desktop only recommendation)
         * sm: 40px - Small but near-accessible
         * default: 44px - Standard accessible size (MEETS WCAG 2.5.5)
         * lg: 48px - Large comfortable touch target
         * xl: 52px - Extra large for primary CTAs
         * icon: 44px - Square icon button (MEETS WCAG 2.5.5)
         */
        xs: "h-9 px-2.5 text-xs",        // 36px height (was 28px)
        sm: "h-10 px-3 text-xs",          // 40px height (was 32px)
        default: "h-11 px-4 py-2",        // 44px height (was 40px) ← WCAG COMPLIANT
        lg: "h-12 px-8",                  // 48px height (was 44px)
        xl: "h-14 px-10 text-base",       // 56px height (was 48px) - using h-14 (Tailwind standard)
        icon: "h-11 w-11",                // 44px square (was 40px) ← WCAG COMPLIANT
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, loadingText, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading
    
    // When asChild is true, we can't render loading states since Slot expects exactly one child
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {loading ? loadingText || children : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
