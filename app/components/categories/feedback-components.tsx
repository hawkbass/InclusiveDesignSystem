"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  X,
  Star,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  RefreshCw,
  MessageSquare
} from "lucide-react"

interface FeedbackComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favourites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Move components array to module level
const components = [
  {
    id: "alerts",
    title: "Alert Messages",
    description: "Contextual alert components with animations",
    code: `<Alert className="border-green-500/50 bg-green-500/10">
  <CheckCircle2 className="h-4 w-4 text-green-400" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your action was completed successfully.</AlertDescription>
</Alert>`,
    component: (
      <div className="space-y-4 w-full">
        <Alert className="border-green-500/50 bg-green-500/10 hover:bg-green-500/15 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <CheckCircle2 className="h-4 w-4 text-green-400" />
          <AlertTitle className="text-green-200">Success</AlertTitle>
          <AlertDescription className="text-green-200">
            Your action was completed successfully.
          </AlertDescription>
        </Alert>
        <Alert className="border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/15 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <AlertTriangle className="h-4 w-4 text-yellow-400" />
          <AlertTitle className="text-yellow-200">Warning</AlertTitle>
          <AlertDescription className="text-yellow-200">
            Please review this information carefully.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  {
    id: "progress",
    title: "Progress Indicators",
    description: "Animated progress bars and loading states",
    code: `<div className="space-y-4">
  <Progress value={75} className="h-2" />
  <div className="animate-spin rounded-full h-6 w-6 border-2 border-fuchsia-400 border-t-transparent" />
</div>`,
    component: (
      <div className="space-y-6 w-full max-w-md">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-300">Profile Completion</span>
            <span className="text-slate-300">85%</span>
          </div>
          <Progress value={85} className="h-3" />
        </div>
        <div className="flex items-centre gap-6">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-fuchsia-400 border-t-transparent"></div>
          <span className="text-sm text-slate-300">Loading candidates...</span>
        </div>
        <div className="flex items-centre gap-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
          <span className="text-sm text-slate-300">Processing...</span>
        </div>
      </div>
    )
  },
  {
    id: "toast-notifications",
    title: "Toast Notifications",
    description: "Dismissible toast messages",
    code: `<div className="fixed top-4 right-4 bg-slate-800 border border-slate-700/50 shadow-xl rounded-lg p-4 shadow-lg">
  <div className="flex items-centre gap-3">
    <CheckCircle2 className="h-5 w-5 text-green-400" />
    <div>
      <h4 className="font-medium">Application Submitted</h4>
      <p className="text-sm text-slate-400">Your application has been received.</p>
    </div>
    <Button variant="ghost" size="sm">
      <X className="h-4 w-4" />
    </Button>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        {[
          { 
            type: "success", 
            title: "Application Submitted", 
            message: "Your application has been received.",
            icon: CheckCircle2,
            colour: "text-green-400",
            bg: "bg-green-500/10 border-green-500/30"
          },
          { 
            type: "info", 
            title: "Interview Scheduled", 
            message: "Check your email for details.",
            icon: Info,
            colour: "text-blue-400",
            bg: "bg-blue-500/10 border-blue-500/30"
          },
          { 
            type: "warning", 
            title: "Profile Incomplete", 
            message: "Please complete your profile.",
            icon: AlertTriangle,
            colour: "text-yellow-400",
            bg: "bg-yellow-500/10 border-yellow-500/30"
          }
        ].map((toast, index) => (
          <div key={index} className={`${toast.bg} border rounded-lg p-3 animate-in slide-in-from-right`}>
            <div className="flex items-start gap-3">
              <toast.icon className={`h-5 w-5 ${toast.colour} flex-shrink-0 mt-0.5`} />
              <div className="flex-1">
                <h4 className="font-medium text-slate-200 text-sm">{toast.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{toast.message}</p>
              </div>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-slate-700">
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "skeleton-loading",
    title: "Skeleton Loading",
    description: "Skeleton placeholders while content loads",
    code: `<div className="space-y-3">
  <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
  <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
  <div className="h-4 bg-slate-700 rounded animate-pulse w-1/2"></div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-3">
          <div className="flex items-centre gap-3">
            <div className="w-12 h-12 bg-slate-700 rounded-full animate-pulse"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-slate-700 rounded animate-pulse"></div>
              <div className="h-3 bg-slate-700 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
          <div className="h-3 bg-slate-700 rounded animate-pulse w-5/6"></div>
          <div className="h-3 bg-slate-700 rounded animate-pulse w-2/3"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-16 bg-slate-700 rounded animate-pulse"></div>
          <div className="h-8 w-12 bg-slate-700 rounded animate-pulse"></div>
        </div>
      </div>
    )
  },
  {
    id: "status-indicators",
    title: "Status Indicators",
    description: "Visual status and state indicators",
    code: `<div className="flex items-centre gap-2">
  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
  <span className="text-sm">Online</span>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        {[
          { status: "Online", colour: "bg-green-400", pulse: true },
          { status: "Away", colour: "bg-yellow-400", pulse: false },
          { status: "Busy", colour: "bg-red-400", pulse: true },
          { status: "Offline", colour: "bg-slate-600", pulse: false }
        ].map((item, index) => (
          <div key={index} className="flex items-centre justify-between p-3 bg-slate-800/30 rounded-lg">
            <div className="flex items-centre gap-3">
              <div className={`w-3 h-3 ${item.colour} rounded-full ${item.pulse ? 'animate-pulse' : ''}`}></div>
              <span className="text-sm text-slate-300">{item.status}</span>
            </div>
            <Badge className="bg-slate-700 text-slate-300 text-xs">
              {index === 0 ? "24" : index === 1 ? "8" : index === 2 ? "3" : "0"} users
            </Badge>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "rating-feedback",
    title: "Rating & Feedback",
    description: "Star ratings and thumbs up/down feedback",
    code: `<div className="space-y-4">
  <div className="flex items-centre gap-2">
    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    <span>4.5/5</span>
  </div>
  <div className="flex gap-2">
    <Button size="sm" variant="outline">
      <ThumbsUp className="h-4 w-4" />
    </Button>
    <Button size="sm" variant="outline">
      <ThumbsDown className="h-4 w-4" />
    </Button>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-3">
          <div className="flex items-centre justify-between">
            <span className="text-slate-300 text-sm">Rate this candidate</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(star => (
                <Star 
                  key={star} 
                  className={`h-4 w-4 cursor-pointer transition-all duration-300 rounded-lg ${
                    star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600 hover:text-yellow-400'
                  }`}
                  style={{ transitionDuration: 'var(--animation-speed)' }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-centre justify-between">
            <span className="text-slate-300 text-sm">Was this helpful?</span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-300">
                <ThumbsUp className="h-3 w-3 mr-1" />
                Yes
              </Button>
              <Button size="sm" variant="outline" className="hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-300">
                <ThumbsDown className="h-3 w-3 mr-1" />
                No
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "error-states",
    title: "Error States",
    description: "Error messages and retry actions",
    code: `<Alert className="border-red-500/50 bg-red-500/10">
  <AlertCircle className="h-4 w-4 text-red-400" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
</Alert>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        <Alert className="border-red-500/50 bg-red-500/10">
          <AlertCircle className="h-4 w-4 text-red-400" />
          <AlertTitle className="text-red-200">Connection Error</AlertTitle>
          <AlertDescription className="text-red-200">
            Unable to load candidate data. Please check your connection.
          </AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Button size="sm" className="bg-red-500 hover:bg-red-600">
            <RefreshCw className="h-3 w-3 mr-1" />
            Retry
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-slate-700">
            Contact Support
          </Button>
        </div>
      </div>
    )
  },
  {
    id: "comment-system",
    title: "Comment System",
    description: "Interactive comment threads with timestamps",
    code: `<div className="space-y-4">
  <div className="flex gap-3">
    <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
    <div>
      <div className="flex items-centre gap-2">
        <span className="font-medium">John Doe</span>
        <span className="text-xs text-slate-500">2 hours ago</span>
      </div>
      <p className="text-sm">Great candidate, highly recommend!</p>
    </div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-4">
        {[
          { 
            name: "Sarah Johnson", 
            comment: "Excellent technical skills and communication. Would recommend for the role.", 
            time: "2 hours ago",
            avatar: "SJ"
          },
          { 
            name: "Mike Chen", 
            comment: "Strong problem-solving abilities. Good cultural fit.", 
            time: "4 hours ago",
            avatar: "MC"
          },
          { 
            name: "Lisa Park", 
            comment: "Impressive portfolio and references check out.", 
            time: "1 day ago",
            avatar: "LP"
          }
        ].map((comment, index) => (
          <div key={index} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg">
            <div className="w-8 h-8 bg-fuchsia-500/20 text-fuchsia-300 rounded-full flex items-centre justify-centre text-xs font-medium">
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-centre gap-2 mb-1">
                <span className="font-medium text-slate-200 text-sm">{comment.name}</span>
                <span className="text-xs text-slate-500">{comment.time}</span>
              </div>
              <p className="text-sm text-slate-300">{comment.comment}</p>
              <div className="flex items-centre gap-4 mt-2">
                <button className="text-xs text-slate-500 hover:text-fuchsia-400 transition-colours">
                  Reply
                </button>
                <button className="text-xs text-slate-500 hover:text-fuchsia-400 transition-colours">
                  Like
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "notification-centre",
    title: "Notification centre",
    description: "Centralized notification management",
    code: `<div className="space-y-2">
  <div className="flex items-centre gap-3 p-3 bg-slate-800/50 rounded-lg">
    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
    <div className="flex-1">
      <p className="text-sm">New application received</p>
      <p className="text-xs text-slate-500">2 minutes ago</p>
    </div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md space-y-3">
        <div className="flex items-centre justify-between mb-3">
          <h4 className="font-medium text-slate-200">Notifications</h4>
          <Button size="sm" variant="ghost" className="text-xs text-slate-400 hover:text-slate-300">
            Mark all read
          </Button>
        </div>
        {[
          { 
            type: "application", 
            message: "New application from Sarah Johnson", 
            time: "2 min ago",
            colour: "bg-blue-400",
            unread: true
          },
          { 
            type: "interview", 
            message: "Interview scheduled for tomorrow", 
            time: "1 hour ago",
            colour: "bg-green-400",
            unread: true
          },
          { 
            type: "reminder", 
            message: "Follow up with candidate due", 
            time: "3 hours ago",
            colour: "bg-yellow-400",
            unread: false
          }
        ].map((notification, index) => (
          <div key={index} className={`flex items-centre gap-3 p-3 rounded-lg transition-all duration-300 ${
            notification.unread 
              ? 'bg-slate-800/50 border border-slate-700/50' 
              : 'bg-slate-800/30'
          }`} style={{ transitionDuration: 'var(--animation-speed)' }}>
            <div className={`w-2 h-2 ${notification.colour} rounded-full ${notification.unread ? 'animate-pulse' : ''}`}></div>
            <div className="flex-1">
              <p className={`text-sm ${notification.unread ? 'text-slate-200' : 'text-slate-400'}`}>
                {notification.message}
              </p>
              <p className="text-xs text-slate-500">{notification.time}</p>
            </div>
            {notification.unread && (
              <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    )
  }
]

export function FeedbackComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favourites, 
  onToggleFavourite 
}: FeedbackComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-centre justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-100">Feedback Components</h2>
            <p className="text-slate-400">User feedback, notifications, and status indicators</p>
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
          <div className="text-centre py-12 text-slate-400">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
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




