import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Calendar } from "lucide-react"
import { useState } from "react"
import { initialTeamMembers, initialProfileData } from "../data"
import type { CalendarEvent } from "../types"

interface ScheduleInterviewModalProps {
  open: boolean
  onClose: () => void
  onScheduleInterview: (event: CalendarEvent & { date: string }) => void
  onRedirectToCalendar?: () => void
}

export function ScheduleInterviewModal({ open, onClose, onScheduleInterview, onRedirectToCalendar }: ScheduleInterviewModalProps) {
  const [selectedInterviewer, setSelectedInterviewer] = useState<string>("")
  const [interviewType, setInterviewType] = useState<string>("Phone Screening")
  const [duration, setDuration] = useState<string>("30 minutes")
  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [candidateName, setCandidateName] = useState<string>("")
  
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
    if (!date || !time || !selectedInterviewer || !candidateName) {
      return // Basic validation
    }
    
    const interviewerName = getInterviewerName(selectedInterviewer)
    const [hours, minutes] = time.split(":")
    const timeFormatted = `${hours}:${minutes}`
    
    const event: CalendarEvent & { date: string } = {
      id: Date.now().toString(),
      candidate: candidateName,
      position: interviewType,
      time: timeFormatted,
      duration: duration,
      type: interviewType,
      status: "pending",
      avatar: candidateName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2),
      interviewer: interviewerName,
      notes: notes,
      date: date
    }
    
    onScheduleInterview(event)
    onClose()
    
    // Reset form
    setSelectedInterviewer("")
    setInterviewType("Phone Screening")
    setDuration("30 minutes")
    setDate("")
    setTime("")
    setNotes("")
    setCandidateName("")
    
    // Redirect to calendar tab
    if (onRedirectToCalendar) {
      setTimeout(() => {
        onRedirectToCalendar()
      }, 100)
    }
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-r from-fuchsia-800/20 to-fuchsia-800/10 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-fuchsia-600 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Schedule Interview</h3>
                <p className="text-muted-foreground text-sm">Book a new interview session</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label="Close schedule interview modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Candidate Name *</label>
            <Input 
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Enter candidate name"
              className="bg-card/50 border-border/50 text-foreground/80" 
            />
          </div>
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
        <div className="p-6 border-t border-border/50 bg-card/30 rounded-b-xl flex justify-end gap-2">
          <Button
            size="sm"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
            onClick={handleSubmit}
            disabled={!date || !time || !selectedInterviewer || !candidateName}
            aria-label="Schedule interview"
          >
            Schedule Interview
          </Button>
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
      </DialogContent>
    </Dialog>
  )
} 





