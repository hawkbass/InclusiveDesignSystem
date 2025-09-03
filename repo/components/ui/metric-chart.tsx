import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface MetricChartProps {
  data: number[]
  labels?: string[]
  changes?: string[]
  height?: number
  className?: string
  color?: string
  fillColor?: string
  gridColor?: string
  showTooltip?: boolean
  onPointHover?: (index: number | null, value?: number, label?: string) => void
  animate?: boolean
  type?: "line" | "area" | "bar"
}

export function MetricChart({
  data,
  labels = [],
  changes = [],
  height = 160,
  className,
  color = "#d946ef",
  fillColor = "rgba(217, 70, 239, 0.2)",
  gridColor = "#334155",
  showTooltip = true,
  onPointHover,
  animate = true,
  type = "area"
}: MetricChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoverPoint, setHoverPoint] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Animation on mount
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(true)
    }
  }, [animate])

  useEffect(() => {
    if (!canvasRef.current || !isVisible || data.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions for retina displays
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const canvasWidth = rect.width
    const canvasHeight = rect.height
    const padding = 20
    const chartWidth = canvasWidth - padding * 2
    const chartHeight = canvasHeight - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    if (data.length === 0) return

    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)
    const valueRange = maxValue - minValue || 1

    // Draw grid lines
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvasWidth - padding, y)
      ctx.stroke()
    }

    // Vertical grid lines (optional)
    if (data.length > 1) {
      const stepX = chartWidth / (data.length - 1)
      for (let i = 0; i < data.length; i++) {
        const x = padding + i * stepX
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, canvasHeight - padding)
        ctx.stroke()
      }
    }

    if (type === "bar") {
      // Draw bar chart
      const barWidth = chartWidth / data.length * 0.6
      const barSpacing = chartWidth / data.length * 0.4

      data.forEach((value, index) => {
        const x = padding + index * (chartWidth / data.length) + barSpacing / 2
        const barHeight = ((value - minValue) / valueRange) * chartHeight
        const y = canvasHeight - padding - barHeight

        // Bar fill
        ctx.fillStyle = fillColor
        ctx.fillRect(x, y, barWidth, barHeight)

        // Bar border
        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.strokeRect(x, y, barWidth, barHeight)

        // Highlight hovered bar
        if (index === hoverPoint) {
          ctx.fillStyle = color + "40"
          ctx.fillRect(x - 2, y - 2, barWidth + 4, barHeight + 4)
        }
      })
    } else {
      // Draw line/area chart
      if (data.length > 1) {
        ctx.strokeStyle = color
        ctx.lineWidth = 2.5
        ctx.beginPath()

        // Create smooth line
        data.forEach((value, index) => {
          const x = padding + index * (chartWidth / (data.length - 1))
          const y = canvasHeight - padding - ((value - minValue) / valueRange) * chartHeight

          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            // Create smooth bezier curve
            const prevX = padding + (index - 1) * (chartWidth / (data.length - 1))
            const prevY = canvasHeight - padding - ((data[index - 1] - minValue) / valueRange) * chartHeight

            const cpX1 = prevX + (x - prevX) / 3
            const cpX2 = prevX + (2 * (x - prevX)) / 3

            ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y)
          }
        })
        ctx.stroke()

        // Add area fill for area chart
        if (type === "area") {
          const lastX = padding + (data.length - 1) * (chartWidth / (data.length - 1))
          const lastY = canvasHeight - padding - ((data[data.length - 1] - minValue) / valueRange) * chartHeight

          ctx.lineTo(lastX, canvasHeight - padding)
          ctx.lineTo(padding, canvasHeight - padding)
          ctx.closePath()

          // Create gradient fill
          const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight)
          gradient.addColorStop(0, fillColor)
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.fill()
        }
      }

      // Add dots at data points
      data.forEach((value, index) => {
        const x = data.length > 1 
          ? padding + index * (chartWidth / (data.length - 1))
          : padding + chartWidth / 2
        const y = canvasHeight - padding - ((value - minValue) / valueRange) * chartHeight

        // Highlight the hovered point
        if (index === hoverPoint) {
          ctx.fillStyle = fillColor
          ctx.beginPath()
          ctx.arc(x, y, 8, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw dot
        ctx.fillStyle = "#0f172a"
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.stroke()
      })
    }
  }, [data, isVisible, hoverPoint, color, fillColor, gridColor, type, height])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !canvasRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const pointWidth = width / data.length

    // Calculate which data point is closest
    const pointIndex = Math.min(Math.floor(x / pointWidth), data.length - 1)
    setHoverPoint(pointIndex)
    
    onPointHover?.(pointIndex, data[pointIndex], labels[pointIndex])
  }

  const handleMouseLeave = () => {
    setHoverPoint(null)
    onPointHover?.(null)
  }

  return (
    <div className={cn("relative min-h-[120px]", className)}>
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height, minHeight: height }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ height, width: '100%', minHeight: height }}
        />

        {/* Fallback for when chart doesn't render */}
        {!isVisible && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div className="text-slate-400 text-sm">Loading chart...</div>
          </div>
        )}

        {/* Debug info */}
        {process.env.NODE_ENV === 'development' && data.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-500/20 rounded-lg border border-red-500/50">
            <div className="text-red-400 text-xs">No chart data provided</div>
          </div>
        )}

        {/* Tooltip */}
        {showTooltip && hoverPoint !== null && data.length > 0 && (
          <div
            className="absolute bg-slate-800/90 border border-slate-600/50 px-3 py-2 rounded-md shadow-lg text-xs pointer-events-none backdrop-blur-sm z-10"
            style={{
              top: "10px",
              left: `${(hoverPoint / Math.max(data.length - 1, 1)) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            {labels[hoverPoint] && (
              <div className="font-medium text-slate-200 mb-1">{labels[hoverPoint]}</div>
            )}
            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-300">Value: {data[hoverPoint]}</span>
              {changes[hoverPoint] && (
                <span
                  className={
                    changes[hoverPoint].startsWith("+") 
                      ? "text-green-400" 
                      : changes[hoverPoint].startsWith("-") 
                        ? "text-red-400" 
                        : "text-slate-400"
                  }
                >
                  {changes[hoverPoint]}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Labels */}
      {labels.length > 0 && (
        <div className="flex justify-between mt-2 text-xs text-slate-500 px-5">
          {labels.map((label, i) => (
            <span key={i}>{label}</span>
          ))}
        </div>
      )}
    </div>
  )
}

MetricChart.displayName = "MetricChart" 