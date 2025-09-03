import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Briefcase } from "lucide-react"
import { useState } from "react"

interface CreateJobModalProps {
  open: boolean
  onClose: () => void
}

export function CreateJobModal({ open, onClose }: CreateJobModalProps) {
  // You can add state for form fields here if you want to make it functional
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-fuchsia-800/20 to-fuchsia-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-full flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">Create New Job</h3>
                <p className="text-slate-400 text-sm">Post a new job opening to attract talent</p>
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
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-slate-300 mb-3">Basic Information</h4>
              <div>
                <label className="block text-xs text-slate-400 mb-2">Job Title *</label>
                <Input className="bg-slate-800/50 border-slate-700/50 text-slate-300" placeholder="e.g. Senior Frontend Developer" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-2">Department *</label>
                <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Product</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Customer Success</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-2">Location *</label>
                <Input className="bg-slate-800/50 border-slate-700/50 text-slate-300" placeholder="e.g. Remote, San Francisco, New York" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Job Type</label>
                  <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-2">Level</label>
                  <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
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
              <h4 className="text-sm font-medium text-slate-300 mb-3">Compensation & Priority</h4>
              <div>
                <label className="block text-xs text-slate-400 mb-2">Salary Range</label>
                <Input className="bg-slate-800/50 border-slate-700/50 text-slate-300" placeholder="e.g. £80,000 - £120,000" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-2">Priority Level</label>
                <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-2">Status</label>
                <select className="w-full p-2 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300">
                  <option>Active</option>
                  <option>Paused</option>
                </select>
              </div>
            </div>
          </div>
          {/* Job Description */}
          <div>
            <label className="block text-xs text-slate-400 mb-2">Job Description *</label>
            <textarea 
              className="w-full h-32 p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300 placeholder:text-slate-500 resize-none"
              placeholder="Describe the role, responsibilities, and what makes this position exciting..."
            />
          </div>
          {/* Requirements */}
          <div>
            <label className="block text-xs text-slate-400 mb-2">Requirements</label>
            <textarea 
              className="w-full h-24 p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300 placeholder:text-slate-500 resize-none"
              placeholder="List the key requirements and qualifications (one per line)"
            />
          </div>
          {/* Benefits */}
          <div>
            <label className="block text-xs text-slate-400 mb-2">Benefits & Perks</label>
            <textarea 
              className="w-full h-24 p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300 placeholder:text-slate-500 resize-none"
              placeholder="List the benefits and perks (one per line)"
            />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
                onClick={onClose}
              >
                Create Job
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