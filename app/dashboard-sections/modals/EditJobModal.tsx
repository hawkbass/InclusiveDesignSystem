import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Settings } from "lucide-react"
import type { Job } from "../types"

interface EditJobModalProps {
  open: boolean
  job: Job | null
  onClose: () => void
}

export function EditJobModal({ open, job, onClose }: EditJobModalProps) {
  if (!job) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-emerald-800/20 to-emerald-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Edit Job</h3>
                <p className="text-muted-foreground text-sm">Update {job.title} details</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label={`Close edit job modal for ${job.title}`}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground/80 mb-3">Basic Information</h4>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Job Title *</label>
                <Input className="bg-card/50 border-border/50 text-foreground/80" defaultValue={job.title} />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Department *</label>
                <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80" defaultValue={job.department}>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Product</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Customer Success</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Location *</label>
                <Input className="bg-card/50 border-border/50 text-foreground/80" defaultValue={job.location} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2">Job Type</label>
                  <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80" defaultValue={job.type}>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2">Level</label>
                  <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80" defaultValue={job.level}>
                    <option>Entry-level</option>
                    <option>Mid-level</option>
                    <option>Senior</option>
                    <option>Lead</option>
                    <option>Principal</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Compensation & Priority */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground/80 mb-3">Compensation & Priority</h4>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Salary Range</label>
                <Input className="bg-card/50 border-border/50 text-foreground/80" defaultValue={job.salary} />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Priority Level</label>
                <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80" defaultValue={job.priority}>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2">Status</label>
                <select className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80" defaultValue={job.status}>
                  <option>Active</option>
                  <option>Paused</option>
                </select>
              </div>
            </div>
          </div>
          {/* Job Description */}
          <div>
            <label className="block text-xs text-muted-foreground mb-2">Job Description *</label>
            <textarea 
              className="w-full h-32 p-3 bg-card/50 border border-border/50 rounded-md text-foreground/80 placeholder:text-muted-foreground resize-none"
              defaultValue={job.description}
            />
          </div>
          {/* Requirements */}
          <div>
            <label className="block text-xs text-muted-foreground mb-2">Requirements</label>
            <textarea 
              className="w-full h-24 p-3 bg-card/50 border border-border/50 rounded-md text-foreground/80 placeholder:text-muted-foreground resize-none"
              defaultValue={job.requirements?.join("\n")}
            />
          </div>
          {/* Benefits */}
          <div>
            <label className="block text-xs text-muted-foreground mb-2">Benefits & Perks</label>
            <textarea 
              className="w-full h-24 p-3 bg-card/50 border border-border/50 rounded-md text-foreground/80 placeholder:text-muted-foreground resize-none"
              defaultValue={job.benefits?.join("\n")}
            />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl flex justify-end gap-2">
          <Button
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            onClick={onClose}
            aria-label={`Save changes to ${job.title}`}
          >
            Save Changes
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground/80"
            onClick={onClose}
            aria-label={`Cancel editing ${job.title}`}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 





