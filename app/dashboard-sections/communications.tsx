"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  FileText, 
  Calendar,
  Search,
  Filter,
  Send,
  Clock,
  CheckCircle2,
  XCircle,
  Eye
} from "lucide-react"
import { initialCommunications, initialEmailTemplates } from "./data"
import type { Communication, EmailTemplate } from "./types"
import type { Communication, EmailTemplate } from "./types"

interface CommunicationsProps {
  candidateId?: string
  jobId?: string
}

export function Communications({ candidateId, jobId }: CommunicationsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailContent, setEmailContent] = useState("")
  const [communications] = useState<Communication[]>(initialCommunications)
  const [templates] = useState<EmailTemplate[]>(initialEmailTemplates)

  const filteredCommunications = communications.filter(comm => {
    if (candidateId && comm.candidateId !== candidateId) return false
    if (jobId && comm.jobId !== jobId) return false
    if (filterType !== "all" && comm.type !== filterType) return false
    if (searchTerm && !comm.content.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !comm.subject?.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const getStatusIcon = (status: Communication["status"]) => {
    switch (status) {
      case "sent":
        return <Clock className="h-3.5 w-3.5 text-amber-400" />
      case "delivered":
        return <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
      case "read":
        return <Eye className="h-3.5 w-3.5 text-emerald-400" />
      case "failed":
        return <XCircle className="h-3.5 w-3.5 text-red-400" />
      default:
        return null
    }
  }

  const getTypeIcon = (type: Communication["type"]) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />
      case "sms":
        return <MessageSquare className="h-4 w-4" />
      case "call":
        return <Phone className="h-4 w-4" />
      case "note":
        return <FileText className="h-4 w-4" />
      case "meeting":
        return <Calendar className="h-4 w-4" />
      default:
        return null
    }
  }

  const handleSendEmail = () => {
    if (!emailSubject.trim() || !emailContent.trim()) {
      // In a real app, show a toast/notification
      return
    }
    
    // In a real app, this would send the email via API
    // For demo purposes, we simulate success
    const newCommunication: Communication = {
      id: Date.now().toString(),
      type: "email",
      direction: "outbound",
      status: "sent",
      subject: emailSubject,
      content: emailContent,
      timestamp: new Date().toISOString(),
      userId: "current-user", // In a real app, this would be the logged-in user ID
      candidateId: candidateId,
      jobId: jobId
    }
    
    // Add to communications list (in a real app, this would be handled by state management)
    // For demo, we'll just clear the form
    setEmailSubject("")
    setEmailContent("")
    setSelectedTemplate("")
    
    // Show success message (in a real app, use toast)
    alert(`Email sent successfully! Subject: ${emailSubject}`)
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="compose" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Compose Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Template</label>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Email subject..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Content</label>
                <Textarea
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Email content..."
                  rows={10}
                  className="resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2">
                <Button variant="outline" onClick={() => {
                  setEmailSubject("")
                  setEmailContent("")
                  setSelectedTemplate("")
                }}>
                  Clear
                </Button>
                <Button onClick={handleSendEmail} className="bg-primary text-primary-foreground">
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search communications..."
                className="pl-9"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="call">Call</SelectItem>
                <SelectItem value="note">Note</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {filteredCommunications.map((comm) => (
              <Card key={comm.id} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        {getTypeIcon(comm.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium text-foreground">
                            {comm.subject || `${comm.type.charAt(0).toUpperCase() + comm.type.slice(1)} Communication`}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {comm.direction}
                          </Badge>
                          {getStatusIcon(comm.status)}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {comm.content}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <span>{new Date(comm.timestamp).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{new Date(comm.timestamp).toLocaleTimeString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

