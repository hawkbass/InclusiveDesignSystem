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
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-muted/50 to-muted/30 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-lg font-bold">
                {candidate.avatar}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{candidate.name}</h3>
                <p className="text-muted-foreground">{candidate.position}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-sm font-medium text-primary">{candidate.match} Match</div>
                {/* If you have a stage/status, add here */}
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
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{candidate.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{candidate.phone}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-2">Experience</h4>
                <div className="text-sm text-muted-foreground">{candidate.experience}</div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-2">Location</h4>
                <div className="text-sm text-muted-foreground">{candidate.location}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-card/50 border border-border/50 rounded text-xs text-foreground/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-2">Application Status</h4>
                <div className="space-y-2">
                  {/* If you have a date field, add here */}
                  <div className="text-sm text-muted-foreground">Last Activity: {candidate.lastActivity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl">
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
                className="border-border/50 text-foreground/80 hover:bg-accent/50"
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
              className="text-muted-foreground hover:text-foreground/80"
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





