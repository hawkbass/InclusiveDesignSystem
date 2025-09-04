import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Calendar } from "lucide-react"
import type { Candidate, Notification } from "../types"

interface CandidateScheduleModalProps {
  open: boolean
  candidate: Candidate | null
  onClose: () => void
  setNotifications: (fn: (prev: Notification[]) => Notification[]) => void
}

export function CandidateScheduleModal({ open, candidate, onClose, setNotifications }: CandidateScheduleModalProps) {
  if (!candidate) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-emerald-800/20 to-emerald-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Schedule Interview</h3>
                <p className="text-slate-400 text-sm">Book meeting with {candidate.name}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Interview Type</label>
              <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
                <option>Phone Screening</option>
                <option>Video Interview</option>
                <option>In-Person Interview</option>
                <option>Technical Assessment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Duration</label>
              <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
                <option>1.5 hours</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Date</label>
              <Input type="date" className="bg-slate-800/50 border-slate-700/50 text-slate-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Time</label>
              <Input type="time" className="bg-slate-800/50 border-slate-700/50 text-slate-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Interviewer(s)</label>
            <Input placeholder="Select interviewers..." className="bg-slate-800/50 border-slate-700/50 text-slate-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Notes</label>
            <textarea className="w-full h-24 p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300 placeholder:text-slate-500 resize-none" placeholder="Add any specific topics or requirements for this interview..." />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                onClick={() => {
                  onClose()
                  setNotifications(prev => [
                    { id: Date.now(), type: "interview", message: `📅 Interview scheduled with ${candidate.name}`, time: "Just now", urgent: false },
                    ...prev.slice(0, 4)
                  ])
                }}
              >
                <Calendar className="h-3 w-3 mr-1" />
                Schedule Interview
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





