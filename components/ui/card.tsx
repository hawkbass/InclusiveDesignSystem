import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Card elevation variants
 * 
 * Reference: Refactoring UI Ch.7, Material Design elevation
 * 
 * flat: No elevation, for inline content sections
 * raised: Default cards with subtle shadow (4dp equivalent)
 * floating: Dropdowns, popovers, modals (8dp equivalent)
 */
const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-all duration-150",
  {
    variants: {
      elevation: {
        flat: "shadow-none border-border/50",
        raised: "shadow-sm border-border",
        floating: "shadow-lg border-border/30",
      },
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
    },
    compoundVariants: [
      {
        // Raised + interactive = hover lift effect
        elevation: "raised",
        interactive: true,
        className: "hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20",
      },
      {
        // Flat + interactive = hover background
        elevation: "flat",
        interactive: true,
        className: "hover:bg-accent/50",
      },
    ],
    defaultVariants: {
      elevation: "raised",
      interactive: false,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevation, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ elevation, interactive, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
