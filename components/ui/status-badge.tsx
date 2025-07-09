import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 text-xs font-medium border",
  {
    variants: {
      status: {
        success: "bg-green-500/20 text-green-300 border-green-500/30",
        warning: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        error: "bg-red-500/20 text-red-300 border-red-500/30",
        info: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        neutral: "bg-slate-500/20 text-slate-300 border-slate-500/30",
        primary: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
        // Recruitment-specific statuses
        applied: "bg-slate-500/20 text-slate-300 border-slate-500/30",
        screening: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        interview: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        offer: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
        hired: "bg-green-500/20 text-green-300 border-green-500/30",
        rejected: "bg-red-500/20 text-red-300 border-red-500/30",
        // Job statuses
        active: "bg-green-500/20 text-green-300 border-green-500/30",
        draft: "bg-slate-500/20 text-slate-300 border-slate-500/30",
        paused: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        closed: "bg-red-500/20 text-red-300 border-red-500/30"
      },
      size: {
        sm: "px-1.5 py-0.5 text-xs",
        md: "px-2 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm"
      },
      variant: {
        default: "",
        outline: "bg-transparent",
        solid: "border-transparent"
      }
    },
    defaultVariants: {
      status: "neutral",
      size: "md",
      variant: "default"
    }
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: "success" | "warning" | "error" | "info" | "neutral" | "primary" | "applied" | "screening" | "interview" | "offer" | "hired" | "rejected" | "active" | "draft" | "paused" | "closed"
  showDot?: boolean
  pulse?: boolean
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, status, size, variant, showDot = false, pulse = false, children, ...props }, ref) => {
    const getDotColor = () => {
      switch (status) {
        case "success":
        case "hired":
        case "active":
          return "bg-green-400"
        case "warning":
        case "paused":
          return "bg-yellow-400"
        case "error":
        case "rejected":
        case "closed":
          return "bg-red-400"
        case "info":
        case "screening":
          return "bg-blue-400"
        case "interview":
          return "bg-emerald-400"
        case "offer":
        case "primary":
          return "bg-fuchsia-400"
        default:
          return "bg-slate-400"
      }
    }

    return (
      <Badge
        className={cn(statusBadgeVariants({ status, size, variant }), className)}
        {...props}
      >
        {showDot && (
          <div 
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              getDotColor(),
              pulse && "animate-pulse"
            )} 
          />
        )}
        {children}
      </Badge>
    )
  }
)

StatusBadge.displayName = "StatusBadge"

// Predefined status components for common use cases
export const CandidateStatus = ({ status, ...props }: Omit<StatusBadgeProps, "status"> & { status: "applied" | "screening" | "interview" | "offer" | "hired" | "rejected" }) => (
  <StatusBadge status={status} showDot {...props}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </StatusBadge>
)

export const JobStatus = ({ status, ...props }: Omit<StatusBadgeProps, "status"> & { status: "active" | "draft" | "paused" | "closed" }) => (
  <StatusBadge status={status} showDot pulse={status === "active"} {...props}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </StatusBadge>
)

export { StatusBadge, statusBadgeVariants } 