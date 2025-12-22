import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calendar } from "lucide-react"

interface ScheduleInterviewModalProps {
  open: boolean
  onClose: () => void
}

export function ScheduleInterviewModal({ open, onClose }: ScheduleInterviewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-fuchsia-800/20 to-fuchsia-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-fuchsia-600 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Schedule Interview</h3>
                <p className="text-muted-foreground text-sm">Book a new interview session</p>
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
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Interview Type</label>
              <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80">
                <option>Phone Screening</option>
                <option>Video Interview</option>
                <option>In-Person Interview</option>
                <option>Technical Assessment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Duration</label>
              <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80">
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
                <option>1.5 hours</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Date</label>
              <Input type="date" className="bg-card/50 border-border/50 text-foreground/80" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Time</label>
              <Input type="time" className="bg-card/50 border-border/50 text-foreground/80" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Interviewer(s)</label>
            <Input placeholder="Select interviewers..." className="bg-card/50 border-border/50 text-foreground/80" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Notes</label>
            <textarea className="w-full h-24 p-3 bg-card/50 border border-border/50 rounded-md text-foreground/80 placeholder:text-muted-foreground resize-none" placeholder="Add any specific topics or requirements for this interview..." />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl flex justify-end gap-2">
          <Button
            size="sm"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
            onClick={onClose}
          >
            Schedule Interview
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground/80"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 





