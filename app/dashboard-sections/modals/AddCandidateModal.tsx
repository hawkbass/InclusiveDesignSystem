import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useState } from "react"

interface AddCandidateModalProps {
  open: boolean
  onClose: () => void
  onAddCandidate: (candidate: { name: string; position: string; email: string }) => void
}

export function AddCandidateModal({ open, onClose, onAddCandidate }: AddCandidateModalProps) {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !position || !email) return
    onAddCandidate({ name, position, email })
    setName("")
    setPosition("")
    setEmail("")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-slate-100">Add New Candidate</h4>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Full Name</label>
            <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter candidate name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Position</label>
            <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter position" value={position} onChange={e => setPosition(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Email</label>
            <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex-1 text-slate-300 border-slate-700/50 bg-slate-800/50 hover:bg-slate-700/50 h-8 text-xs"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600 h-8 text-xs"
              disabled={!name || !position || !email}
            >
              Add Candidate
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 





