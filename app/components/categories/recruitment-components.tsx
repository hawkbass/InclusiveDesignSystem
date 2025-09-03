"use client"

import React, { useState } from "react"
import { ComponentCard } from "./component-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Briefcase,
  Calendar,
  Settings,
  ChevronDown,
  User,
  Shield,
  Bell,
  BellDot,
  X,
  CheckCircle2,
  ArrowRight,
  Target,
  Clock,
  PoundSterling,
  Eye,
  Filter,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Search,
  Star,
  Upload,
  Video,
  Check,
  Plus,
  Edit,
  Trash2,
  Download,
  Share2,
  EyeOff,
  Eye as EyeIcon,
  FileText
} from "lucide-react"

interface RecruitmentComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favorites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Salary Range Slider Component
function SalaryRangeSlider() {
  const [salaryRange, setSalaryRange] = useState([65, 95])
  
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex justify-between text-sm">
        <Label className="text-slate-300">Salary Range</Label>
        <span className="text-slate-400">£{salaryRange[0]}k - £{salaryRange[1]}k</span>
      </div>
      <Slider 
        value={salaryRange} 
        onValueChange={setSalaryRange}
        max={160} 
        min={30} 
        step={5} 
        className="mt-2"
        minStepsBetweenThumbs={1}
      />
      <div className="flex justify-between text-xs text-slate-500">
        <span>£30k</span>
        <span>£160k</span>
      </div>
    </div>
  )
}

// Move components array to module level
const components = [
  {
    id: "candidate-card",
    title: "Candidate Profile Card",
    description: "Comprehensive candidate information display",
    code: `<Card className="hover:border-fuchsia-500/50 transition-all">
  <CardHeader>
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>Sarah Johnson</CardTitle>
          <CardDescription>Senior Software Engineer</CardDescription>
        </div>
      </div>
      <Badge className="bg-green-500/20 text-green-300">Available</Badge>
    </div>
  </CardHeader>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 ring-2 ring-slate-600 hover:ring-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-fuchsia-500/20 text-fuchsia-300 font-bold">SJ</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg text-slate-100">Sarah Johnson</CardTitle>
                <CardDescription className="text-slate-400">Senior Software Engineer</CardDescription>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">Available</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-slate-400" />
              <span className="text-slate-300">5 years exp.</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span className="text-slate-300">London, UK</span>
            </div>
            <div className="flex items-center gap-2">
              <PoundSterling className="h-4 w-4 text-slate-400" />
              <span className="text-slate-300">£95k - £120k</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-slate-300">4.8 rating</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Profile Completion</span>
              <span className="text-slate-300">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-slate-700 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-slate-700 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "job-posting-card",
    title: "Job Posting Card",
    description: "Job listing with key details and actions",
    code: `<Card>
  <CardHeader>
    <CardTitle>Senior Frontend Developer</CardTitle>
                  <CardDescription>Remote • Full-time • $120k-$150k</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex justify-between items-center">
      <Badge>25 Applicants</Badge>
      <Button size="sm">View Details</Button>
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg text-slate-100">Senior Frontend Developer</CardTitle>
                                <CardDescription className="text-slate-400 mt-1">Remote / London • Full-time</CardDescription>
            </div>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <PoundSterling className="h-4 w-4 text-green-400" />
              <span className="text-slate-300">£95k - £120k</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-slate-300">25 applicants</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600">View Details</Button>
            <Button size="sm" variant="outline">Edit</Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "interview-schedule",
    title: "Interview Scheduler",
    description: "Schedule and manage interview slots",
    code: `<Card>
  <CardHeader>
    <CardTitle>Interview with Sarah Johnson</CardTitle>
    <CardDescription>Technical Interview • 1 hour</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>March 15, 2024 at 2:00 PM</span>
      </div>
      <Button className="w-full">Join Meeting</Button>
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-blue-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Interview with Sarah Johnson</CardTitle>
          <CardDescription className="text-slate-400">Technical Interview • 1 hour</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-slate-300">March 15, 2024 at 2:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-green-400" />
              <span className="text-slate-300">Google Meet</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600">Join Meeting</Button>
            <Button size="sm" variant="outline">Reschedule</Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "candidate-search",
    title: "Candidate Search Bar",
    description: "Advanced search with filters for candidates",
    code: `<div className="flex gap-2">
  <Input placeholder="Search candidates..." className="flex-1" />
  <Button variant="outline">
    <Filter className="h-4 w-4" />
  </Button>
  <Button>Search</Button>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        <div className="flex gap-2">
          <Input placeholder="Search candidates..." className="flex-1 bg-slate-800/50 border-slate-600" />
          <Button variant="outline" size="sm" className="hover:bg-slate-700">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-slate-700 text-slate-300">JavaScript</Badge>
          <Badge variant="secondary" className="bg-slate-700 text-slate-300">Remote</Badge>
          <Badge variant="secondary" className="bg-slate-700 text-slate-300">5+ years</Badge>
        </div>
      </div>
    )
  },
  {
    id: "application-status",
    title: "Application Status Tracker",
    description: "Visual progress tracker for applications",
    code: `<div className="space-y-4">
  <div className="flex items-center gap-6">
    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
      <Check className="h-4 w-4 text-white" />
    </div>
    <span>Application Submitted</span>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        {[
          { step: "Application Submitted", status: "completed", icon: Check },
          { step: "Initial Review", status: "completed", icon: Check },
          { step: "Technical Interview", status: "current", icon: Video },
          { step: "Final Interview", status: "pending", icon: Users },
          { step: "Decision", status: "pending", icon: CheckCircle2 }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              item.status === 'completed' ? 'bg-green-500' : 
              item.status === 'current' ? 'bg-blue-500' : 'bg-slate-600'
            }`}>
              <item.icon className="h-4 w-4 text-white" />
            </div>
            <span className={`text-sm ${
              item.status === 'completed' ? 'text-green-300' :
              item.status === 'current' ? 'text-blue-300' : 'text-slate-400'
            }`}>{item.step}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "skill-tags",
    title: "Skill Tags Component",
    description: "Interactive skill badges with proficiency levels",
    code: `<div className="flex flex-wrap gap-2">
  <Badge className="bg-blue-500/20 text-blue-300">React</Badge>
  <Badge className="bg-green-500/20 text-green-300">Node.js</Badge>
  <Badge className="bg-purple-500/20 text-purple-300">TypeScript</Badge>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex flex-wrap gap-2">
          {[
            { skill: "React", level: "Expert", color: "bg-blue-500/20 text-blue-300" },
            { skill: "Node.js", level: "Advanced", color: "bg-green-500/20 text-green-300" },
            { skill: "TypeScript", level: "Expert", color: "bg-purple-500/20 text-purple-300" },
            { skill: "Python", level: "Intermediate", color: "bg-yellow-500/20 text-yellow-300" },
            { skill: "AWS", level: "Advanced", color: "bg-orange-500/20 text-orange-300" }
          ].map((item, index) => (
            <Badge key={index} className={`${item.color} hover:scale-105 transition-transform cursor-pointer`} style={{ transitionDuration: 'var(--animation-speed)' }}>
              {item.skill}
            </Badge>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "salary-range",
    title: "Salary Range Slider",
    description: "Interactive salary range selector",
    code: `<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Salary Range</Label>
    <span>£65k - £95k</span>
  </div>
  <Slider value={[65, 95]} onValueChange={setSalaryRange} max={160} min={30} step={5} />
  <div className="flex justify-between text-xs">
    <span>£30k</span>
    <span>£160k</span>
  </div>
</div>`,
    component: <SalaryRangeSlider />
  },
  {
    id: "team-member-card",
    title: "Team Member Card",
    description: "Display team member information",
    code: `<Card>
  <CardContent className="p-4">
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium">John Doe</h4>
        <p className="text-sm text-muted-foreground">Hiring Manager</p>
      </div>
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="ring-2 ring-slate-600">
              <AvatarFallback className="bg-blue-500/20 text-blue-300">JD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-slate-100">John Doe</h4>
              <p className="text-sm text-slate-400">Hiring Manager</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-green-300">Online</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "quick-actions",
    title: "Quick Actions Menu",
    description: "Common recruitment actions in a dropdown",
    code: `<div className="flex gap-2">
  <Button size="sm">Schedule Interview</Button>
  <Button size="sm" variant="outline">Send Message</Button>
  <Button size="sm" variant="ghost">
    <MoreHorizontal className="h-4 w-4" />
  </Button>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
            <Calendar className="h-4 w-4 mr-1" />
            Schedule
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-slate-700">
            <Mail className="h-4 w-4 mr-1" />
            Message
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-slate-700">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </Button>
          <Button size="sm" variant="ghost" className="hover:bg-slate-700">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  },
  {
    id: "candidate-notes",
    title: "Candidate Notes",
    description: "Add and view notes about candidates",
    code: `<Card>
  <CardHeader>
    <CardTitle>Notes</CardTitle>
  </CardHeader>
  <CardContent>
    <Textarea placeholder="Add notes about this candidate..." />
    <Button className="mt-2" size="sm">Save Note</Button>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50">
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Candidate Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea 
            placeholder="Add notes about this candidate..." 
            className="bg-slate-800/50 border-slate-600 min-h-[80px]"
          />
          <div className="flex justify-between">
            <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">Save Note</Button>
            <span className="text-xs text-slate-500">Last updated 2 hours ago</span>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "rating-system",
    title: "Candidate Rating",
    description: "Star rating system for candidate evaluation",
    code: `<div className="flex items-center gap-2">
  <div className="flex gap-1">
    {[1,2,3,4,5].map(star => (
      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
  <span className="text-sm">4.5/5</span>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label className="text-slate-300">Overall Rating</Label>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(star => (
                <Star 
                  key={star} 
                  className={`h-5 w-5 cursor-pointer transition-all duration-300 rounded-lg ${
                    star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'
                  }`}
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                />
              ))}
            </div>
            <span className="text-sm text-slate-300">4.0/5</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-slate-300 text-sm">Technical Skills</Label>
          <Progress value={85} className="h-2" />
          <div className="flex justify-between text-xs text-slate-400">
            <span>Beginner</span>
            <span>Expert</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "location-filter",
    title: "Location Filter",
    description: "Geographic location filtering component",
    code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select location" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="remote">Remote</SelectItem>
    <SelectItem value="london">London</SelectItem>
    <SelectItem value="manchester">Manchester</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        <Label className="text-slate-300">Preferred Location</Label>
        <Select>
          <SelectTrigger className="bg-slate-800/50 border-slate-600">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="london">London</SelectItem>
            <SelectItem value="manchester">Manchester</SelectItem>
            <SelectItem value="birmingham">Birmingham</SelectItem>
            <SelectItem value="bristol">Bristol</SelectItem>
            <SelectItem value="leeds">Leeds</SelectItem>
            <SelectItem value="glasgow">Glasgow</SelectItem>
            <SelectItem value="edinburgh">Edinburgh</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
  {
    id: "experience-level",
    title: "Experience Level Indicator",
    description: "Visual experience level classification",
    code: `<div className="flex items-center gap-2">
  <Badge className="bg-green-500/20 text-green-300">Senior</Badge>
  <span className="text-sm">5+ years experience</span>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        {[
          { level: "Entry", years: "0-2 years", color: "bg-blue-500/20 text-blue-300", icon: <User className="h-4 w-4" /> },
          { level: "Mid", years: "3-5 years", color: "bg-yellow-500/20 text-yellow-300", icon: <Users className="h-4 w-4" /> },
          { level: "Senior", years: "5+ years", color: "bg-green-500/20 text-green-300", icon: <Shield className="h-4 w-4" /> },
          { level: "Lead", years: "8+ years", color: "bg-purple-500/20 text-purple-300", icon: <Star className="h-4 w-4" /> }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="text-slate-400">{item.icon}</div>
              <div>
                <Badge className={item.color}>{item.level}</Badge>
              </div>
            </div>
            <span className="text-sm text-slate-400">{item.years}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "availability-status",
    title: "Availability Status",
    description: "Candidate availability indicator",
    code: `<div className="flex items-center gap-2">
  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
  <span className="text-sm">Available immediately</span>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        {[
          { status: "Available immediately", color: "bg-green-400", textColor: "text-green-300" },
          { status: "Available in 2 weeks", color: "bg-yellow-400", textColor: "text-yellow-300" },
          { status: "Available in 1 month", color: "bg-orange-400", textColor: "text-orange-300" },
          { status: "Not actively looking", color: "bg-red-400", textColor: "text-red-300" }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-lg">
            <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`}></div>
            <span className={`text-sm ${item.textColor}`}>{item.status}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "resume-upload",
    title: "Resume Upload",
    description: "File upload component for resumes",
    code: `<div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
  <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
  <p className="text-sm text-slate-400">Drop resume here or click to upload</p>
  <Button className="mt-2" size="sm">Choose File</Button>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-fuchsia-500/50 transition-all duration-300 rounded-lg cursor-pointer" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
          <p className="text-sm text-slate-400 mb-2">Drop resume here or click to upload</p>
          <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">Choose File</Button>
          <p className="text-xs text-slate-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
        </div>
      </div>
    )
  },
  {
    id: "interview-feedback",
    title: "Interview Feedback Form",
    description: "Structured feedback collection",
    code: `<Card>
  <CardHeader>
    <CardTitle>Interview Feedback</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div>
      <Label>Technical Skills</Label>
      <Slider defaultValue={[75]} max={100} />
    </div>
    <Textarea placeholder="Additional comments..." />
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50">
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Interview Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300">Technical Skills</Label>
            <Slider defaultValue={[75]} max={100} />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300">Communication</Label>
            <Slider defaultValue={[85]} max={100} />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300">Comments</Label>
            <Textarea 
              placeholder="Additional feedback..." 
              className="bg-slate-800/50 border-slate-600 min-h-[60px]"
            />
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "candidate-comparison",
    title: "Candidate Comparison",
    description: "Side-by-side candidate comparison",
    code: `<div className="grid grid-cols-2 gap-6">
  <Card>
    <CardContent className="p-4 text-center">
      <Avatar className="mx-auto mb-2">
        <AvatarFallback>SJ</AvatarFallback>
      </Avatar>
      <h4>Sarah Johnson</h4>
      <p className="text-sm text-muted-foreground">5 years exp.</p>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="p-4 text-center">
      <Avatar className="mx-auto mb-2">
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <h4>Michael Kim</h4>
      <p className="text-sm text-muted-foreground">3 years exp.</p>
    </CardContent>
  </Card>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Sarah Johnson", exp: "5 years", rating: 4.8, initials: "SJ", color: "bg-fuchsia-500/20 text-fuchsia-300" },
            { name: "Michael Kim", exp: "3 years", rating: 4.5, initials: "MK", color: "bg-blue-500/20 text-blue-300" }
          ].map((candidate, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <CardContent className="p-4 text-center">
                <Avatar className="mx-auto mb-2 ring-2 ring-slate-600">
                  <AvatarFallback className={candidate.color}>{candidate.initials}</AvatarFallback>
                </Avatar>
                <h4 className="font-medium text-slate-100 text-sm">{candidate.name}</h4>
                <p className="text-xs text-slate-400">{candidate.exp} exp.</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-slate-300">{candidate.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "job-requirements",
    title: "Job Requirements Checklist",
    description: "Interactive requirements matching",
    code: `<div className="space-y-3">
  <div className="flex items-center gap-2">
    <Checkbox checked />
    <span className="text-sm">5+ years React experience</span>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox />
    <span className="text-sm">TypeScript proficiency</span>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        {[
          { requirement: "5+ years React experience", met: true },
          { requirement: "TypeScript proficiency", met: true },
          { requirement: "AWS experience", met: false },
          { requirement: "Team leadership", met: true },
          { requirement: "Bachelor's degree", met: false }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-lg">
            <Checkbox 
              checked={item.met} 
              className={item.met ? "data-[state=checked]:bg-green-500" : ""}
            />
            <span className={`text-sm flex-1 ${item.met ? 'text-green-300' : 'text-slate-400'}`}>
              {item.requirement}
            </span>
            {item.met ? (
              <CheckCircle2 className="h-4 w-4 text-green-400" />
            ) : (
              <X className="h-4 w-4 text-red-400" />
            )}
          </div>
        ))}
      </div>
    )
  },
  {
    id: "pipeline-stage",
    title: "Pipeline Stage Selector",
    description: "Move candidates through hiring stages",
    code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select stage" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="applied">Applied</SelectItem>
    <SelectItem value="screening">Screening</SelectItem>
    <SelectItem value="interview">Interview</SelectItem>
    <SelectItem value="offer">Offer</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        <Label className="text-slate-300">Current Stage</Label>
        <Select>
          <SelectTrigger className="bg-slate-800/50 border-slate-600">
            <SelectValue placeholder="Select pipeline stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="applied">
              <FileText className="h-4 w-4 mr-2" />
              Applied
            </SelectItem>
            <SelectItem value="screening">
              <Search className="h-4 w-4 mr-2" />
              Initial Screening
            </SelectItem>
            <SelectItem value="interview">
              <Users className="h-4 w-4 mr-2" />
              Interview
            </SelectItem>
            <SelectItem value="final">
              <Target className="h-4 w-4 mr-2" />
              Final Interview
            </SelectItem>
            <SelectItem value="offer">
              <PoundSterling className="h-4 w-4 mr-2" />
              Offer Extended
            </SelectItem>
            <SelectItem value="hired">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Hired
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
  {
    id: "referral-tracking",
    title: "Referral Tracking",
    description: "Track employee referrals and rewards",
    code: `<Card>
  <CardContent className="p-4">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">Referred by John Doe</h4>
        <p className="text-sm text-muted-foreground">Engineering Team</p>
      </div>
      <Badge className="bg-green-500/20 text-green-300">$500 Bonus</Badge>
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="ring-2 ring-slate-600">
                <AvatarFallback className="bg-green-500/20 text-green-300">JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-slate-100">Referred by John Doe</h4>
                <p className="text-sm text-slate-400">Engineering Team</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-300">£400 Bonus</Badge>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-700">
            <div className="text-xs text-slate-500">Referral Status: Qualified</div>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "candidate-timeline",
    title: "Candidate Activity Timeline",
    description: "Chronological view of candidate interactions",
    code: `<div className="space-y-4">
  <div className="flex gap-3">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
    <div>
      <p className="text-sm">Application submitted</p>
      <p className="text-xs text-muted-foreground">2 hours ago</p>
    </div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        {[
          { event: "Application submitted", time: "2 hours ago", type: "application", color: "bg-blue-400" },
          { event: "Resume reviewed", time: "1 hour ago", type: "review", color: "bg-yellow-400" },
          { event: "Phone screening scheduled", time: "30 min ago", type: "interview", color: "bg-green-400" },
          { event: "Technical assessment sent", time: "15 min ago", type: "assessment", color: "bg-purple-400" }
        ].map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className={`w-2 h-2 ${item.color} rounded-full mt-2 flex-shrink-0`}></div>
            <div className="flex-1">
              <p className="text-sm text-slate-300">{item.event}</p>
              <p className="text-xs text-slate-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "bulk-actions",
    title: "Bulk Actions Toolbar",
    description: "Perform actions on multiple candidates",
    code: `<div className="flex items-center gap-2 p-2 bg-slate-800 rounded-lg">
  <Checkbox />
  <span className="text-sm">3 selected</span>
  <div className="flex gap-2 ml-auto">
    <Button size="sm">Send Email</Button>
    <Button size="sm" variant="outline">Move to Stage</Button>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-xl">
          <Checkbox checked />
          <span className="text-sm text-slate-300">3 candidates selected</span>
          <div className="flex gap-2 ml-auto">
            <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
              <Mail className="h-3 w-3 mr-1" />
              Email
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-slate-700">
              <ArrowRight className="h-3 w-3 mr-1" />
              Move
            </Button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "diversity-metrics",
    title: "Diversity & Inclusion Tracker",
    description: "Track diversity metrics in hiring",
    code: `<Card>
  <CardHeader>
    <CardTitle>Diversity Metrics</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span>Gender Diversity</span>
        <span>60% / 40%</span>
      </div>
      <Progress value={60} />
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50">
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Diversity Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { metric: "Gender Diversity", value: 60, target: "50%", current: "60% / 40%" },
            { metric: "Ethnic Diversity", value: 45, target: "40%", current: "45%" },
            { metric: "Age Diversity", value: 70, target: "60%", current: "70%" }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">{item.metric}</span>
                <span className="text-slate-400">{item.current}</span>
              </div>
              <Progress value={item.value} className="h-2" />
              <div className="text-xs text-slate-500">Target: {item.target}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }
]

export function RecruitmentComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favorites, 
  onToggleFavourite 
}: RecruitmentComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-100">Recruitment Components</h2>
            <p className="text-slate-400">Specialised components for talent acquisition and candidate management</p>
          </div>
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1">
            {filteredComponents.length} Components
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((comp) => (
            <ComponentCard
              key={comp.id}
              id={comp.id}
              title={comp.title}
              description={comp.description}
              code={comp.code}
              onCopyCode={onCopyCode}
              copiedCode={copiedCode}
              isFavourite={favorites.has(comp.id)}
              onToggleFavourite={onToggleFavourite}
              viewMode={viewMode}
              searchQuery={searchQuery}
            >
              {comp.component}
            </ComponentCard>
          ))}
        </div>

        {filteredComponents.length === 0 && searchQuery && (
          <div className="text-center py-12 text-slate-400">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">No components found</p>
            <p className="text-sm">Try adjusting your search query</p>
          </div>
        )}
      </section>
    </div>
  )
}

// Export the components array for use in getAllComponents
export { components }