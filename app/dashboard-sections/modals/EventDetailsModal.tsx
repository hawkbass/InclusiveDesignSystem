import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, FileText } from "lucide-react"
import type { CalendarEvent } from "../types"
import { initialCandidates } from "../data"

interface EventDetailsModalProps {
  open: boolean
  event: CalendarEvent | null
  onClose: () => void
  onCancelInterview?: (eventId: string) => void
}

export function EventDetailsModal({ open, event, onClose, onCancelInterview }: EventDetailsModalProps) {
  if (!event) return null

  // Find matching candidate
  const candidate = initialCandidates.find(c => c.name === event.candidate)

  // Generate notes if missing
  const generateNotes = () => {
    if (event.notes) return event.notes
    if (!candidate) return "No additional notes available."
    return `Focus on ${candidate.skills.slice(0, 2).join(" and ")} experience. Review candidate's ${candidate.experience} background and assess fit for ${event.position} role.`
  }

  // Generate fit reasons
  const generateFitReasons = () => {
    if (!candidate) return ["Candidate information not available"]
    const reasons = []
    if (candidate.skills && candidate.skills.length > 0) {
      reasons.push(`Strong skills in ${candidate.skills.slice(0, 2).join(" and ")}`)
    }
    if (candidate.experience) {
      reasons.push(`${candidate.experience} of relevant experience`)
    }
    if (candidate.match) {
      reasons.push(`${candidate.match} match score indicates strong alignment`)
    }
    return reasons.length > 0 ? reasons : ["Review candidate profile for fit assessment"]
  }

  const handleCancelInterview = () => {
    if (confirm(`Are you sure you want to cancel the interview with ${event.candidate}?`)) {
      if (onCancelInterview) {
        onCancelInterview(event.id)
      }
      onClose()
    }
  }

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
              aria-label={`Close ${event.candidate} interview details modal`}
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
          <div><strong>Interviewer:</strong> {event.interviewer || "Not assigned"}</div>
          <div className="mt-2"><strong>Notes:</strong> {generateNotes()}</div>

          {/* Candidate Breakdown Section */}
          {candidate && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Candidate Match</h4>
              <div className="space-y-2 text-sm">
                <div><strong>Match Score:</strong> {candidate.match || "N/A"}</div>
                <div><strong>Experience:</strong> {candidate.experience || "N/A"}</div>
                <div><strong>Location:</strong> {candidate.location || "N/A"}</div>
                <div><strong>Key Skills:</strong> {candidate.skills.join(", ") || "N/A"}</div>
                <div className="mt-3">
                  <strong>Why they're a good fit:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-muted-foreground">
                    {generateFitReasons().map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            {candidate?.cvUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-border/50 text-foreground/80 hover:bg-accent/50"
                onClick={() => window.open(candidate.cvUrl, '_blank')}
                aria-label={`View ${event.candidate} CV`}
              >
                <FileText className="h-4 w-4 mr-2" />
                View CV
              </Button>
            )}
            {onCancelInterview && (
              <Button
                variant="destructive"
                size="sm"
                className="bg-red-500/20 text-red-600 dark:text-red-300 border-red-500/30 hover:bg-red-500/30"
                onClick={handleCancelInterview}
                aria-label={`Cancel interview with ${event.candidate}`}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel Interview
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
