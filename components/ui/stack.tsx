import * as React from "react"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col"
  gap?: string
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around"
  className?: string
  children: React.ReactNode
}

export function Stack({
  direction = "col",
  gap = "gap-4",
  align = "stretch",
  justify = "start",
  className = "",
  children,
  ...props
}: StackProps) {
  const flexDirection = direction === "row" ? "flex-row" : "flex-col"
  const alignItems =
    align === "start"
      ? "items-start"
      : align === "center"
      ? "items-center"
      : align === "end"
      ? "items-end"
      : "items-stretch"
  const justifyContent =
    justify === "start"
      ? "justify-start"
      : justify === "center"
      ? "justify-center"
      : justify === "end"
      ? "justify-end"
      : justify === "between"
      ? "justify-between"
      : "justify-around"

  return (
    <div
      className={`flex ${flexDirection} ${gap} ${alignItems} ${justifyContent} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
} 