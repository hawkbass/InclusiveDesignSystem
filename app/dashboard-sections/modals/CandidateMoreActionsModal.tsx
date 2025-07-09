import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, MoreVertical, Users, Target, Download, Activity, ArrowRight, Mail } from "lucide-react"
import type { Candidate, Notification } from "../types"

interface CandidateMoreActionsModalProps {
  open: boolean
  candidate: Candidate | null
  onClose: () => void
  setNotifications: (fn: (prev: Notification[]) => Notification[]) => void
}

const actions = [
  { icon: <Users className="h-4 w-4" />, label: "Send Message", color: "text-blue-400" },
  { icon: <Target className="h-4 w-4" />, label: "Add to Favorites", color: "text-yellow-400" },
  { icon: <Download className="h-4 w-4" />, label: "Download Resume", color: "text-green-400" },
  { icon: <Activity className="h-4 w-4" />, label: "Add Notes", color: "text-purple-400" },
  { icon: <ArrowRight className="h-4 w-4" />, label: "Move to Different Stage", color: "text-orange-400" },
  { icon: <Mail className="h-4 w-4" />, label: "Share Profile", color: "text-cyan-400" }
]

export function CandidateMoreActionsModal({ open, candidate, onClose, setNotifications }: CandidateMoreActionsModalProps) {
  if (!candidate) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-purple-800/20 to-purple-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <MoreVertical className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">More Actions</h3>
                <p className="text-slate-400 text-sm">{candidate.name}</p>
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
        <div className="p-6">
          <div className="space-y-2">
            {actions.map((action, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors text-left"
                onClick={() => {
                  onClose()
                  setNotifications(prev => [
                    { id: Date.now(), type: "application", message: `✨ ${action.label} - ${candidate.name}`, time: "Just now", urgent: false },
                    ...prev.slice(0, 4)
                  ])
                }}
              >
                <div className={`${action.color}`}>{action.icon}</div>
                <span className="text-slate-300">{action.label}</span>
                <ArrowRight className="h-3 w-3 text-slate-500 ml-auto" />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 