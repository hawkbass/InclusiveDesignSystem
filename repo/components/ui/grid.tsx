import * as React from "react"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: string // e.g. 'grid-cols-2 md:grid-cols-4'
  gap?: string // e.g. 'gap-4'
  className?: string
  children: React.ReactNode
}

export function Grid({
  cols = "grid-cols-1",
  gap = "gap-4",
  className = "",
  children,
  ...props
}: GridProps) {
  return (
    <div className={`grid ${cols} ${gap} ${className}`} {...props}>
      {children}
    </div>
  )
} 