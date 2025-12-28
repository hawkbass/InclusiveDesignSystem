import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail } from "lucide-react"
import type { Candidate, Notification } from "../types"

interface CandidateEmailModalProps {
  open: boolean
  candidate: Candidate | null
  onClose: () => void
  setNotifications: (fn: (prev: Notification[]) => Notification[]) => void
}

export function CandidateEmailModal({ open, candidate, onClose, setNotifications }: CandidateEmailModalProps) {
  if (!candidate) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-blue-800/20 to-blue-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Compose Email</h3>
                <p className="text-muted-foreground text-sm">Send message to {candidate.name}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label={`Close email modal for ${candidate.name}`}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">To</label>
            <Input 
              value={candidate.email} 
              readOnly 
              className="bg-card/50 border-border/50 text-foreground/80"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Subject</label>
            <Input 
              defaultValue={`Interview Opportunity - ${candidate.position}`}
              className="bg-card/50 border-border/50 text-foreground/80"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
            <textarea 
              className="w-full h-32 p-3 bg-card/50 border border-border/50 rounded-md text-foreground/80 placeholder:text-muted-foreground resize-none"
              placeholder={`Hi ${candidate.name},\n\nI hope this email finds you well. I wanted to reach out regarding the ${candidate.position} position at our company.\n\nBased on your profile and experience, I believe you would be an excellent fit for our team. Would you be available for a brief conversation to discuss this opportunity further?\n\nBest regards,\nHiring Team`}
            />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => {
                  onClose()
                  setNotifications(prev => [
                    { id: Date.now(), type: "application", message: `📧 Email sent to ${candidate.name}`, time: "Just now", urgent: false },
                    ...prev.slice(0, 4)
                  ])
                }}
                aria-label={`Send email to ${candidate.name}`}
              >
                <Mail className="h-3 w-3 mr-1" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-border/50 text-foreground/80 hover:bg-accent/50"
                aria-label="Save email draft"
              >
                Save Draft
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label="Cancel sending email"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 





