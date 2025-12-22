"use client"

import React, { useState } from "react"
import { ComponentCard } from "./component-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  PoundSterling,
  Download,
  Eye,
  EyeOff,
  FileText,
  Filter,
  Heart,
  Home,
  Building2,
  Mail,
  MapPin,
  Minus,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Settings,
  Shield,
  Star,
  Upload,
  User,
  X,
  Zap
} from "lucide-react"

interface FormComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favourites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Salary Range Components
function SalaryRangeControl() {
  const [salaryRange, setSalaryRange] = useState([65, 95])
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Label className="text-foreground/80">Salary Range</Label>
        <span className="text-muted-foreground">£{salaryRange[0]}k - £{salaryRange[1]}k</span>
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
    </div>
  )
}

function SalaryExpectationSlider() {
  const [salaryRange, setSalaryRange] = useState([65, 95])
  
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex justify-between">
        <Label className="text-foreground/80">Salary Expectation</Label>
        <span className="text-muted-foreground text-sm">£{salaryRange[0]}k - £{salaryRange[1]}k</span>
      </div>
      <Slider 
        value={salaryRange} 
        onValueChange={setSalaryRange}
        max={160} 
        min={30} 
        step={5}
        minStepsBetweenThumbs={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>£30k</span>
        <span>£160k+</span>
      </div>
    </div>
  )
}

// Move components array to module level
const components = [
  {
    id: "input-group",
    title: "Input Group",
    description: "Enhanced input components with validation states",
    code: `<div className="space-y-4">
  <Input placeholder="Enter your name..." className="bg-card/50 border-border" />
  <Input type="email" placeholder="email@example.com" className="bg-card/50 border-border" />
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div>
          <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
          <Input id="name" placeholder="Enter your name..." className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }} />
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
          <Input id="email" type="email" placeholder="email@example.com" className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }} />
        </div>
        <div>
          <Label htmlFor="phone" className="text-foreground/80">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }} />
        </div>
      </div>
    )
  },
  {
    id: "form-controls",
    title: "Advanced Form Controls",
    description: "Switches, sliders, and selection components",
    code: `<div className="space-y-6">
  <Switch checked={true} />
  <Slider defaultValue={[50]} max={100} />
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select option" />
    </SelectTrigger>
  </Select>
</div>`,
    component: (
      <div className="space-y-6 w-full max-w-md">
        <div className="flex items-center justify-between">
          <Label className="text-foreground/80">Email Notifications</Label>
          <Switch defaultChecked />
        </div>
        <SalaryRangeControl />
        <div className="space-y-2">
          <Label className="text-foreground/80">Experience Level</Label>
          <Select>
            <SelectTrigger className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
              <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
              <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    )
  },
  {
    id: "textarea-field",
    title: "Textarea Field",
    description: "Multi-line text input with character count",
    code: `<div className="space-y-2">
  <Label>Cover Letter</Label>
  <Textarea placeholder="Write your cover letter..." />
  <div className="text-xs text-muted-foreground text-right">0 / 500 characters</div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-foreground/80">Cover Letter</Label>
        <Textarea 
          placeholder="Write your cover letter..." 
          className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg min-h-[100px]"
          style={{ transitionDuration: 'var(--animation-speed)' }}
        />
        <div className="text-xs text-muted-foreground text-right">0 / 500 characters</div>
      </div>
    )
  },
  {
    id: "checkbox-group",
    title: "Checkbox Group",
    description: "Multiple selection checkboxes with labels",
    code: `<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="skill1" />
    <Label htmlFor="skill1">JavaScript</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="skill2" />
    <Label htmlFor="skill2">React</Label>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        <Label className="text-foreground/80">Skills (Select all that apply)</Label>
        {[
          { id: "js", label: "JavaScript", checked: true },
          { id: "react", label: "React", checked: true },
          { id: "node", label: "Node.js", checked: false },
          { id: "python", label: "Python", checked: true },
          { id: "aws", label: "AWS", checked: false }
        ].map((skill) => (
          <div key={skill.id} className="flex items-center space-x-2">
            <Checkbox id={skill.id} defaultChecked={skill.checked} />
            <Label htmlFor={skill.id} className="text-foreground/80 text-sm">{skill.label}</Label>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "radio-group",
    title: "Radio Button Group",
    description: "Single selection radio buttons",
    code: `<RadioGroup defaultValue="remote">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="remote" id="remote" />
    <Label htmlFor="remote">Remote</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="hybrid" id="hybrid" />
    <Label htmlFor="hybrid">Hybrid</Label>
  </div>
</RadioGroup>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        <Label className="text-foreground/80">Work Preference</Label>
        <RadioGroup defaultValue="remote">
          {[
            { value: "remote", label: "Remote", icon: <Home className="h-4 w-4" /> },
            { value: "hybrid", label: "Hybrid", icon: <Building2 className="h-4 w-4" /> },
            { value: "onsite", label: "On-site", icon: <Building2 className="h-4 w-4" /> }
          ].map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="text-foreground/80 text-sm flex items-center gap-2">
                <span>{option.icon}</span>
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    )
  },
  {
    id: "file-upload",
    title: "File Upload Field",
    description: "Drag and drop file upload with preview",
    code: `<div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
  <p className="text-sm text-muted-foreground">Drop files here or click to upload</p>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <Label className="text-foreground/80 mb-2 block">Upload CV</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-2">Drop your CV here or click to upload</p>
          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 5MB</p>
          <Button size="sm" variant="outline" className="mt-3">
            Choose File
          </Button>
        </div>
      </div>
    )
  },
  {
    id: "date-picker",
    title: "Date Picker",
    description: "Date selection with calendar popup",
    code: `<div className="space-y-2">
  <Label>Start Date</Label>
  <Input type="date" className="bg-card/50 border-border" />
</div>`,
    component: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-foreground/80">Available Start Date</Label>
        <Input 
          type="date" 
          className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg"
          style={{ transitionDuration: 'var(--animation-speed)' }}
        />
      </div>
    )
  },
  {
    id: "password-field",
    title: "Password Field",
    description: "Password input with visibility toggle",
    code: `<div className="space-y-2">
  <Label>Password</Label>
  <div className="relative">
    <Input type="password" placeholder="Enter password" />
    <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
      <Eye className="h-4 w-4" />
    </Button>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-foreground/80">Password</Label>
        <div className="relative">
          <Input 
            type="password" 
            placeholder="Enter password" 
            className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg pr-10"
            style={{ transitionDuration: 'var(--animation-speed)' }}
          />
          <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-accent">
            <Eye className="h-3 w-3" />
          </Button>
        </div>
        <div className="text-xs text-muted-foreground">Must be at least 8 characters</div>
      </div>
    )
  },
  {
    id: "search-field",
    title: "Search Input",
    description: "Search input with icon and clear button",
    code: `<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-10" />
</div>`,
    component: (
      <div className="w-full max-w-md">
        <Label className="text-foreground/80 mb-2 block">Search Candidates</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name, skills, or location..." 
            className="pl-10 pr-10 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg"
            style={{ transitionDuration: 'var(--animation-speed)' }}
          />
          <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-accent">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    )
  },
  {
    id: "number-input",
    title: "Number Input",
    description: "Numeric input with increment/decrement buttons",
    code: `<div className="space-y-2">
  <Label>Years of Experience</Label>
  <Input type="number" min="0" max="50" defaultValue="5" />
</div>`,
    component: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-foreground/80">Years of Experience</Label>
        <Input 
          type="number" 
          min="0" 
          max="50" 
          defaultValue="5"
          className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg"
          style={{ transitionDuration: 'var(--animation-speed)' }}
        />
        <div className="text-xs text-muted-foreground">Enter 0-50 years</div>
      </div>
    )
  },
  {
    id: "multi-select",
    title: "Multi-Select Dropdown",
    description: "Select multiple options from dropdown",
    code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select skills..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="js">JavaScript</SelectItem>
    <SelectItem value="react">React</SelectItem>
    <SelectItem value="node">Node.js</SelectItem>
  </SelectContent>
</Select>`,
    component: (
      <div className="w-full max-w-md space-y-2">
        <Label className="text-foreground/80">Required Skills</Label>
        <Select>
          <SelectTrigger className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <SelectValue placeholder="Select required skills..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="js">JavaScript</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="node">Node.js</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="aws">AWS</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1 flex-wrap mt-2">
          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-500/30">JavaScript</Badge>
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30">React</Badge>
        </div>
      </div>
    )
  },
  {
    id: "form-validation",
    title: "Form Validation",
    description: "Real-time validation with error states",
    code: `<div className="space-y-2">
  <Label>Email</Label>
  <Input type="email" className="border-red-500" />
  <p className="text-red-400 text-sm">Please enter a valid email address</p>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label className="text-foreground/80">Email Address</Label>
          <Input 
            type="email" 
            defaultValue="invalid-email"
            className="bg-card/50 border-red-500 focus:border-red-500"
          />
          <p className="text-red-400 text-sm flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Please enter a valid email address
          </p>
        </div>
        <div className="space-y-2">
          <Label className="text-foreground/80">Password</Label>
          <Input 
            type="password" 
            defaultValue="password123"
            className="bg-card/50 border-green-500 focus:border-green-500"
          />
          <p className="text-green-400 text-sm flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Password meets requirements
          </p>
        </div>
      </div>
    )
  },
  {
    id: "range-slider",
    title: "Range Slider",
    description: "Dual-handle range slider for min/max values",
    code: `<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Salary Expectation</Label>
    <span>£65k - £95k</span>
  </div>
  <Slider value={salaryRange} onValueChange={setSalaryRange} max={160} min={30} step={5} />
  <div className="flex justify-between text-xs">
    <span>£30k</span>
    <span>£160k+</span>
  </div>
</div>`,
    component: <SalaryExpectationSlider />
  },
  {
    id: "toggle-switch",
    title: "Toggle Switches",
    description: "Binary toggle switches for preferences",
    code: `<div className="flex items-center justify-between">
  <Label>Email Notifications</Label>
  <Switch defaultChecked />
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        {[
          { label: "Email Notifications", checked: true },
          { label: "SMS Alerts", checked: false },
          { label: "Push Notifications", checked: true },
          { label: "Weekly Reports", checked: false }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-card/30 rounded-lg">
            <Label className="text-foreground/80">{item.label}</Label>
            <Switch defaultChecked={item.checked} />
          </div>
        ))}
      </div>
    )
  },
  {
    id: "form-sections",
    title: "Form Sections",
    description: "Organized form sections with collapsible areas",
    code: `<Card>
  <CardHeader>
    <CardTitle>Personal Information</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input placeholder="First Name" />
    <Input placeholder="Last Name" />
  </CardContent>
</Card>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <Card className="bg-card/30 border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="First Name" className="bg-card/50 border-border" />
            <Input placeholder="Last Name" className="bg-card/50 border-border" />
          </CardContent>
        </Card>
        <Card className="bg-card/30 border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Email Address" className="bg-card/50 border-border" />
            <Input placeholder="Phone Number" className="bg-card/50 border-border" />
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: "form-progress",
    title: "Form Progress Indicator",
    description: "Step-by-step form progress visualization",
    code: `<div className="space-y-4">
  <div className="flex items-center gap-6">
    <div className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
    <div className="flex-1 h-0.5 bg-fuchsia-500"></div>
    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-foreground/80 text-sm">2</div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center gap-2">
          {[
            { step: 1, label: "Personal", completed: true },
            { step: 2, label: "Experience", completed: true },
            { step: 3, label: "Skills", completed: false },
            { step: 4, label: "Review", completed: false }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                item.completed ? 'bg-fuchsia-500 text-white' : 'bg-muted text-foreground/80'
              }`}>
                {item.completed ? <Check className="h-4 w-4" /> : item.step}
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline">{item.label}</span>
              {index < 3 && (
                <div className={`flex-1 h-0.5 ${item.completed ? 'bg-fuchsia-500' : 'bg-muted'}`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-foreground/80">Step 2 of 4: Work Experience</div>
        <Progress value={50} className="h-2" />
      </div>
    )
  },
  {
    id: "conditional-fields",
    title: "Conditional Form Fields",
    description: "Fields that appear based on previous selections",
    code: `<div className="space-y-4">
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Employment Type" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="full-time">Full-time</SelectItem>
      <SelectItem value="contract">Contract</SelectItem>
    </SelectContent>
  </Select>
  {/* Conditional field appears when contract is selected */}
  <Input placeholder="Contract Duration (months)" />
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label className="text-foreground/80">Employment Type</Label>
          <Select>
            <SelectTrigger className="bg-card/50 border-border">
              <SelectValue placeholder="Select employment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full-time Employee</SelectItem>
              <SelectItem value="contract">Contract Worker</SelectItem>
              <SelectItem value="freelance">Freelancer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 p-3 bg-card/30 rounded-xl border border-border/50 shadow-xl">
          <Label className="text-foreground/80 text-sm">Contract Details</Label>
          <Input placeholder="Contract duration (months)" className="bg-card/50 border-border" />
          <Input placeholder="Hourly rate" className="bg-card/50 border-border" />
        </div>
      </div>
    )
  },
  {
    id: "form-actions",
    title: "Form Action Buttons",
    description: "Submit, cancel, and secondary action buttons",
    code: `<div className="flex gap-2 justify-end">
  <Button variant="outline">Cancel</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button>Submit Application</Button>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="flex gap-2 justify-end flex-wrap">
          <Button variant="outline" size="sm" className="hover:bg-accent">
            Cancel
          </Button>
          <Button variant="secondary" size="sm" className="hover:bg-muted">
            Save Draft
          </Button>
          <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
            Submit Application
          </Button>
        </div>
        <div className="mt-3 text-xs text-muted-foreground text-center">
          By submitting, you agree to our Terms of Service
        </div>
      </div>
    )
  }
]

export function FormComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favourites, 
  onToggleFavourite 
}: FormComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Form Components</h2>
            <p className="text-muted-foreground">Interactive form elements and input controls</p>
          </div>
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 hover:bg-green-500/30 px-3 py-1">
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
              isFavourite={favourites.has(comp.id)}
              onToggleFavourite={onToggleFavourite}
              viewMode={viewMode}
              searchQuery={searchQuery}
            >
              {comp.component}
            </ComponentCard>
          ))}
        </div>

        {filteredComponents.length === 0 && searchQuery && (
          <div className="text-center py-12 text-muted-foreground">
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





