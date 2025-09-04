import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, Phone, Calendar } from "lucide-react"
import type { Candidate } from "../types"

interface CandidateDetailsModalProps {
  open: boolean
  candidate: Candidate | null
  onClose: () => void
  handleCandidateAction: (candidateId: string, action: string) => void
}

export function CandidateDetailsModal({ open, candidate, onClose, handleCandidateAction }: CandidateDetailsModalProps) {
  if (!candidate) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                {candidate.avatar}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{candidate.name}</h3>
                <p className="text-slate-400">{candidate.position}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-sm font-medium text-fuchsia-400">{candidate.match} Match</div>
                {/* If you have a stage/status, add here */}
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
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-400">{candidate.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-400">{candidate.phone}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Experience</h4>
                <div className="text-sm text-slate-400">{candidate.experience}</div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Location</h4>
                <div className="text-sm text-slate-400">{candidate.location}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Application Status</h4>
                <div className="space-y-2">
                  {/* If you have a date field, add here */}
                  <div className="text-sm text-slate-400">Last Activity: {candidate.lastActivity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
                onClick={() => {
                  onClose()
                  handleCandidateAction(candidate.id, "email")
                }}
              >
                <Mail className="h-3 w-3 mr-1" />
                Send Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
                onClick={() => {
                  onClose()
                  handleCandidateAction(candidate.id, "schedule")
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
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 





