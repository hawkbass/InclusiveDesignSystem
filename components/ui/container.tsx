import * as React from "react"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`} {...props}>
      {children}
    </div>
  )
} 
