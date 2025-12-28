import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Calendar } from "lucide-react"
import { useState } from "react"
import type { Candidate, Notification, CalendarEvent } from "../types"
import { initialTeamMembers, initialProfileData } from "../data"

interface CandidateScheduleModalProps {
  open: boolean
  candidate: Candidate | null
  onClose: () => void
  setNotifications: (fn: (prev: Notification[]) => Notification[]) => void
  onScheduleInterview: (event: CalendarEvent & { date: string }) => void
  onRedirectToCalendar?: () => void
}

export function CandidateScheduleModal({ open, candidate, onClose, setNotifications, onScheduleInterview, onRedirectToCalendar }: CandidateScheduleModalProps) {
  const [selectedInterviewer, setSelectedInterviewer] = useState<string>("")
  const [interviewType, setInterviewType] = useState<string>("Phone Screening")
  const [duration, setDuration] = useState<string>("30 minutes")
  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  
  // Combine profile data and team members for interviewer options
  const interviewers = [
    { id: "current-user", name: initialProfileData.fullName, role: initialProfileData.jobTitle },
    ...initialTeamMembers.map(member => ({ id: member.id.toString(), name: member.name, role: member.role }))
  ]
  
  const getInterviewerName = (id: string) => {
    if (id === "current-user") return initialProfileData.fullName
    const member = initialTeamMembers.find(m => m.id.toString() === id)
    return member?.name || ""
  }
  
  const handleSubmit = () => {
    if (!candidate || !date || !time || !selectedInterviewer) {
      return // Basic validation
    }
    
    const interviewerName = getInterviewerName(selectedInterviewer)
    const [hours, minutes] = time.split(":")
    const timeFormatted = `${hours}:${minutes}`
    
    const event: CalendarEvent & { date: string } = {
      id: Date.now().toString(),
      candidate: candidate.name,
      position: candidate.position,
      time: timeFormatted,
      duration: duration,
      type: interviewType,
      status: "pending",
      avatar: candidate.avatar,
      interviewer: interviewerName,
      notes: notes,
      date: date
    }
    
    onScheduleInterview(event)
    setNotifications(prev => [
      { id: Date.now(), type: "interview", message: `📅 Interview scheduled with ${candidate.name}`, time: "Just now", urgent: false },
      ...prev.slice(0, 4)
    ])
    onClose()
    
    // Reset form
    setSelectedInterviewer("")
    setInterviewType("Phone Screening")
    setDuration("30 minutes")
    setDate("")
    setTime("")
    setNotes("")
    
    // Redirect to calendar tab
    if (onRedirectToCalendar) {
      setTimeout(() => {
        onRedirectToCalendar()
      }, 100)
    }
  }

  if (!candidate) return null
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-emerald-800/20 to-emerald-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Schedule Interview</h3>
                <p className="text-muted-foreground text-sm">Book meeting with {candidate.name}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label={`Close schedule interview modal for ${candidate.name}`}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Interview Type</label>
              <select 
                value={interviewType}
                onChange={(e) => setInterviewType(e.target.value)}
                className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80"
              >
                <option>Phone Screening</option>
                <option>Video Interview</option>
                <option>In-Person Interview</option>
                <option>Technical Assessment</option>
                <option>First Round</option>
                <option>Second Round</option>
                <option>Final Round</option>
                <option>Portfolio Review</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Duration</label>
              <select 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full p-2 bg-card/50 border border-border/50 rounded-md text-foreground/80"
              >
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
                <option>1.5 hours</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Date *</label>
              <Input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-card/50 border-border/50 text-foreground/80" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Time *</label>
              <Input 
                type="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-card/50 border-border/50 text-foreground/80" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Interviewer *</label>
            <Select value={selectedInterviewer} onValueChange={setSelectedInterviewer}>
              <SelectTrigger className="bg-card/50 border-border/50 text-foreground/80">
                <SelectValue placeholder="Select an interviewer..." />
              </SelectTrigger>
              <SelectContent>
                {interviewers.map((interviewer) => (
                  <SelectItem key={interviewer.id} value={interviewer.id}>
                    {interviewer.name} - {interviewer.role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Notes</label>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-24 p-3 bg-card/50 border border-border/50 rounded-md text-foreground/80 placeholder:text-muted-foreground resize-none" 
              placeholder="Add any specific topics or requirements for this interview..." 
            />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                onClick={handleSubmit}
                disabled={!date || !time || !selectedInterviewer}
                aria-label={`Schedule interview with ${candidate.name}`}
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
              aria-label="Cancel scheduling interview"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 





