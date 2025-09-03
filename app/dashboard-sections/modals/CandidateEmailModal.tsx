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
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-blue-800/20 to-blue-800/10 rounded-t-xl">
          <div className="flex items-centre justify-between">
            <div className="flex items-centre gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-centre justify-centre">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Compose Email</h3>
                <p className="text-slate-400 text-sm">Send message to {candidate.name}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">To</label>
            <Input 
              value={candidate.email} 
              readOnly 
              className="bg-slate-800/50 border-slate-700/50 text-slate-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
            <Input 
              defaultValue={`Interview Opportunity - ${candidate.position}`}
              className="bg-slate-800/50 border-slate-700/50 text-slate-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea 
              className="w-full h-32 p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300 placeholder:text-slate-500 resize-none"
              placeholder={`Hi ${candidate.name},\n\nI hope this email finds you well. I wanted to reach out regarding the ${candidate.position} position at our company.\n\nBased on your profile and experience, I believe you would be an excellent fit for our team. Would you be available for a brief conversation to discuss this opportunity further?\n\nBest regards,\nHiring Team`}
            />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl">
          <div className="flex justify-between items-centre">
            <div className="flex items-centre gap-2">
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
              >
                <Mail className="h-3 w-3 mr-1" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
              >
                Save Draft
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-slate-300"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 




