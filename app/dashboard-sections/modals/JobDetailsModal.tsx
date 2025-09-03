import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Briefcase } from "lucide-react"
import type { Job } from "../types"

interface JobDetailsModalProps {
  open: boolean
  job: Job | null
  onClose: () => void
}

export function JobDetailsModal({ open, job, onClose }: JobDetailsModalProps) {
  if (!job) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-blue-800/20 to-blue-800/10 rounded-t-xl">
          <div className="flex items-centre justify-between">
            <div className="flex items-centre gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-centre justify-centre">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{job.title}</h3>
                <p className="text-slate-400">{job.department} • {job.location}</p>
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
        <div className="p-6 space-y-4 text-slate-300">
          <div><strong>Status:</strong> {job.status}</div>
          <div><strong>Applicants:</strong> {job.applicants}</div>
          <div><strong>Salary:</strong> {job.salary}</div>
          <div className="mt-2"><strong>Description:</strong> {job.description}</div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-slate-300"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 




