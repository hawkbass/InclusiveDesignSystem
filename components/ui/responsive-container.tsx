import * as React from "react"

export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string // e.g. 'max-w-4xl'
  padding?: string // e.g. 'px-4 sm:px-6 lg:px-8'
  className?: string
  children: React.ReactNode
}

export function ResponsiveContainer({
  maxWidth = "max-w-6xl",
  padding = "px-4 sm:px-6 lg:px-8 xl:px-12",
  className = "",
  children,
  ...props
}: ResponsiveContainerProps) {
  return (
    <div className={`mx-auto w-full ${maxWidth} ${padding} ${className}`} {...props}>
      {children}
    </div>
  )
} 