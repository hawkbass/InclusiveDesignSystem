import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { CalendarEvent } from "../types"

interface EventDetailsModalProps {
  open: boolean
  event: CalendarEvent | null
  onClose: () => void
}

export function EventDetailsModal({ open, event, onClose }: EventDetailsModalProps) {
  if (!event) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-blue-800/20 to-blue-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-lg font-bold">
                {event.avatar}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{event.candidate}</h3>
                <p className="text-muted-foreground">{event.position} • {event.type}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4 text-foreground/80">
          <div><strong>Time:</strong> {event.time}</div>
          <div><strong>Duration:</strong> {event.duration}</div>
          <div><strong>Status:</strong> {event.status}</div>
          <div className="mt-2"><strong>Notes:</strong> {event.notes || "-"}</div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground/80"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 





