import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Users, Mail, Phone, Eye, Calendar, MoreVertical } from "lucide-react"
import { StatusBadge } from "@/components/ui/status-badge"
import type { Job, Candidate } from "../types"
import { initialCandidates } from "../data"

interface ViewApplicantsModalProps {
  open: boolean
  job: Job | null
  onClose: () => void
  handleCandidateAction: (candidateId: string, action: string) => void
}

export function ViewApplicantsModal({ open, job, onClose, handleCandidateAction }: ViewApplicantsModalProps) {
  if (!job) return null

  // Filter candidates that match the job position
  const applicants = initialCandidates.filter(candidate => 
    candidate.position.toLowerCase().includes(job.title.toLowerCase().split(' ')[0]) ||
    job.title.toLowerCase().includes(candidate.position.toLowerCase().split(' ')[0])
  )

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-card/50 to-card/30 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Applicants for {job.title}</h3>
                <p className="text-muted-foreground">{applicants.length} {applicants.length === 1 ? 'applicant' : 'applicants'}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label={`Close applicants modal for ${job.title}`}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {applicants.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">No applicants found for this position.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {applicants.map((candidate) => (
                <div
                  key={candidate.id}
                  className="p-4 border border-border/50 rounded-lg bg-card/30 hover:bg-card/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {candidate.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-sm font-semibold text-foreground">{candidate.name}</h4>
                          <StatusBadge status={candidate.status} size="sm" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{candidate.position}</p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {candidate.email}
                          </span>
                          {candidate.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {candidate.phone}
                            </span>
                          )}
                          <span>{candidate.location}</span>
                          <span>{candidate.match} Match</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-muted/50 text-xs text-foreground/80 rounded border border-border/30"
                            >
                              {skill}
                            </span>
                          ))}
                          {candidate.skills.length > 3 && (
                            <span className="px-2 py-0.5 text-xs text-muted-foreground">
                              +{candidate.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => {
                          handleCandidateAction(candidate.id, "view")
                          onClose()
                        }}
                        aria-label={`View ${candidate.name} details`}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => {
                          handleCandidateAction(candidate.id, "schedule")
                          onClose()
                        }}
                        aria-label={`Schedule interview with ${candidate.name}`}
                      >
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                        onClick={() => {
                          handleCandidateAction(candidate.id, "more")
                          onClose()
                        }}
                        aria-label={`More actions for ${candidate.name}`}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground/80"
            onClick={onClose}
            aria-label="Close applicants modal"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

