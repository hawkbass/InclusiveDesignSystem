"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  LayoutDashboard,
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
  Eye as EyeIcon
} from "lucide-react"

interface DashboardComponentsProps {
  searchQuery: string
  onCopyCode: (code: string, id: string) => void
  copiedCode: string
  viewMode: "grid" | "list"
  favorites: Set<string>
  onToggleFavourite: (id: string) => void
}

// Move components array to module level
const components = [
  {
    id: "dashboard-header",
    title: "Dashboard Header",
    description: "Main dashboard header with notifications and status",
    code: `<div className="bg-slate-800/50 p-3 border-b border-slate-700/50 flex items-center justify-between backdrop-blur-sm">
  <div className="flex items-center gap-3">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
  </div>
  <div className="flex items-center gap-2 bg-slate-900/50 rounded-md px-2 py-1 text-xs text-slate-400 border border-slate-700/50">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    <span>inclusive.io/dashboard</span>
    <span className="text-green-400">LIVE</span>
  </div>
  <div className="flex items-center gap-2">
    <Button variant="ghost" size="sm" className="relative">
      <Bell className="h-4 w-4" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
    </Button>
    <Button variant="ghost" size="sm">
      <Settings className="h-4 w-4" />
    </Button>
  </div>
</div>`,
    component: (
      <div className="w-full bg-slate-800/50 p-3 border border-slate-700/50 rounded-lg backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 rounded-md px-2 py-1 text-xs text-slate-400 border border-slate-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>inclusive.io/dashboard</span>
            <span className="text-green-400">LIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="relative text-slate-400 hover:text-slate-300">
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-300">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "sidebar-navigation",
    title: "Sidebar Navigation",
    description: "Dashboard sidebar with navigation and user profile",
    code: `<div className="w-full max-w-64 bg-slate-800/50 border-r border-slate-700/50 backdrop-blur-sm">
  <div className="p-4 border-b border-slate-700/50">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
        SW
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-slate-100">Sarah Wilson</div>
        <div className="text-xs text-slate-400">Senior Recruitment Manager</div>
      </div>
    </div>
  </div>
  <div className="p-2">
    <div className="text-xs font-medium text-slate-400 mb-2 px-2">Navigation</div>
    <div className="space-y-1">
      <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
        <LayoutDashboard className="h-4 w-4 mr-3" />
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
        <Users className="h-4 w-4 mr-3" />
        Candidates
      </Button>
    </div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-64 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
              SW
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-100">Sarah Wilson</div>
              <div className="text-xs text-slate-400">Senior Recruitment Manager</div>
            </div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-slate-400 hover:text-slate-300">
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Online</span>
            </div>
            <div className="text-slate-500">inclusive.io</div>
          </div>
        </div>
        <div className="p-2">
          <div className="text-xs font-medium text-slate-400 mb-2 px-2">Navigation</div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
              <LayoutDashboard className="h-4 w-4 mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
              <Users className="h-4 w-4 mr-3" />
              Candidates
            </Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
              <Briefcase className="h-4 w-4 mr-3" />
              Jobs
            </Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
              <Calendar className="h-4 w-4 mr-3" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start h-10 px-3 text-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </Button>
          </div>
        </div>
        <div className="p-4 border-t border-slate-700/50 mt-auto">
          <div className="text-xs font-medium text-slate-400 mb-3">Quick Stats</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Active Jobs</span>
              <span className="text-slate-200 font-medium">24</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Candidates</span>
              <span className="text-slate-200 font-medium">156</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "notification-dropdown",
    title: "Notification Dropdown",
    description: "Dropdown notification panel with different notification types",
    code: `<div className="absolute right-4 top-16 w-full max-w-96 bg-slate-900/95 border border-slate-700/50 rounded-xl shadow-2xl backdrop-blur-xl">
  <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-t-xl">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center">
          <Bell className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-100">Notifications</h3>
          <p className="text-xs text-slate-400">3 new updates</p>
        </div>
      </div>
    </div>
  </div>
  <div className="max-h-80 overflow-y-auto">
    <div className="divide-y divide-slate-700/30">
      <div className="p-4 hover:bg-slate-800/30 transition-all duration-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
            <Calendar className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-200">Interview scheduled with Sarah Johnson</p>
            <span className="text-xs text-slate-500">2 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-96 bg-slate-900/95 border border-slate-700/50 rounded-xl shadow-2xl backdrop-blur-xl">
        <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Notifications</h3>
                <p className="text-xs text-slate-400">3 new updates</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto">
          <div className="divide-y divide-slate-700/30">
            <div className="p-4 hover:bg-slate-800/30 transition-all duration-200 group relative">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm text-slate-200 leading-relaxed group-hover:text-slate-100 transition-colors">
                      Interview scheduled with Sarah Johnson for Technical Lead position
                    </p>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0 mt-2"></div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">2 minutes ago</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs text-fuchsia-400 hover:bg-fuchsia-500/10">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-4 hover:bg-slate-800/30 transition-all duration-200 group relative">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-200 leading-relaxed group-hover:text-slate-100 transition-colors">
                      New application received for Senior Developer role
                    </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">15 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-slate-300 hover:bg-slate-700/50 h-8">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Mark all as read
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-fuchsia-400 hover:text-fuchsia-300 hover:bg-fuchsia-500/10 h-8">
              View All
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "dashboard-overview-card",
    title: "Dashboard Overview Card",
    description: "Key metrics and statistics overview card",
    code: `<Card className="bg-slate-800/60 border-slate-600/50">
  <CardHeader>
    <CardTitle className="text-slate-100">Overview</CardTitle>
    <CardDescription className="text-slate-400">This month's recruitment metrics</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-slate-100">24</div>
        <div className="text-xs text-slate-400">Active Jobs</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-slate-100">156</div>
        <div className="text-xs text-slate-400">Candidates</div>
      </div>
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Overview</CardTitle>
          <CardDescription className="text-slate-400">This month's recruitment metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-3xl font-bold text-slate-100 mb-1">24</div>
              <div className="text-xs text-slate-400">Active Jobs</div>
              <div className="text-xs text-emerald-400 mt-1">+12% from last month</div>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-3xl font-bold text-slate-100 mb-1">156</div>
              <div className="text-xs text-slate-400">Candidates</div>
              <div className="text-xs text-emerald-400 mt-1">+8% from last month</div>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-3xl font-bold text-slate-100 mb-1">32</div>
              <div className="text-xs text-slate-400">Interviews</div>
              <div className="text-xs text-blue-400 mt-1">This week</div>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-3xl font-bold text-slate-100 mb-1">48h</div>
              <div className="text-xs text-slate-400">Time Saved</div>
              <div className="text-xs text-fuchsia-400 mt-1">vs manual process</div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "add-candidate-modal",
    title: "Add Candidate Modal",
    description: "Modal for adding new candidates to the system",
    code: `<Dialog open={open} onOpenChange={onClose}>
  <DialogContent className="max-w-md">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-medium text-slate-100">Add New Candidate</h4>
      <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
    <form className="space-y-4">
      <div>
        <label className="block text-xs text-slate-400 mb-1">Full Name</label>
        <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter candidate name" />
      </div>
      <div>
        <label className="block text-xs text-slate-400 mb-1">Position</label>
        <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter position" />
      </div>
      <div>
        <label className="block text-xs text-slate-400 mb-1">Email</label>
        <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter email address" />
      </div>
      <div className="flex gap-2 pt-2">
        <Button variant="outline" size="sm" className="flex-1 text-slate-300 border-slate-700/50 bg-slate-800/50 hover:bg-slate-700/50 h-8 text-xs">
          Cancel
        </Button>
        <Button size="sm" className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600 h-8 text-xs">
          Add Candidate
        </Button>
      </div>
    </form>
  </DialogContent>
</Dialog>`,
    component: (
      <div className="max-w-md bg-slate-900/95 border border-slate-700/50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-slate-100">Add New Candidate</h4>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-slate-400 hover:text-slate-300">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Full Name</label>
            <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter candidate name" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Position</label>
            <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter position" />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Email</label>
            <Input className="bg-slate-900/50 border-slate-700/50 text-slate-200 h-8 text-sm" placeholder="Enter email address" />
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1 text-slate-300 border-slate-700/50 bg-slate-800/50 hover:bg-slate-700/50 h-8 text-xs">
              Cancel
            </Button>
            <Button size="sm" className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600 h-8 text-xs">
              Add Candidate
            </Button>
          </div>
        </form>
      </div>
    )
  },
  {
    id: "candidate-management-table",
    title: "Candidate Management Table",
    description: "Table for managing candidate data with actions",
    code: `<div className="bg-slate-800/60 border border-slate-700/50 rounded-lg overflow-hidden">
  <div className="p-4 border-b border-slate-700/50">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-medium text-slate-100">Candidates</h3>
      <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
        <Plus className="h-4 w-4 mr-2" />
        Add Candidate
      </Button>
    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-slate-700/30">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Name</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Position</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Status</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700/30">
        <tr className="hover:bg-slate-700/20">
          <td className="px-4 py-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium text-slate-100">Sarah Johnson</div>
                <div className="text-xs text-slate-400">sarah@example.com</div>
              </div>
            </div>
          </td>
          <td className="px-4 py-3 text-sm text-slate-300">Senior Developer</td>
          <td className="px-4 py-3">
            <Badge className="bg-green-500/20 text-green-300">Active</Badge>
          </td>
          <td className="px-4 py-3">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
    component: (
      <div className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-slate-100">Candidates</h3>
            <Button size="sm" className="bg-fuchsia-500 hover:bg-fuchsia-600">
              <Plus className="h-4 w-4 mr-2" />
              Add Candidate
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/30">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Position</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/30">
              <tr className="hover:bg-slate-700/20">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-fuchsia-500/20 text-fuchsia-300">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-slate-100">Sarah Johnson</div>
                      <div className="text-xs text-slate-400">sarah@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-300">Senior Developer</td>
                <td className="px-4 py-3">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Active</Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-700/20">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-blue-500/20 text-blue-300">MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-slate-100">Mike Johnson</div>
                      <div className="text-xs text-slate-400">mike@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-300">Product Manager</td>
                <td className="px-4 py-3">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Interview</Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "job-management-card",
    title: "Job Management Card",
    description: "Card for managing job postings and applications",
    code: `<Card className="bg-slate-800/60 border-slate-600/50">
  <CardHeader>
    <div className="flex items-start justify-between">
      <div>
        <CardTitle className="text-slate-100">Senior Frontend Developer</CardTitle>
        <CardDescription className="text-slate-400">Remote • Full-time</CardDescription>
      </div>
      <Badge className="bg-blue-500/20 text-blue-300">Active</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-6 text-sm mb-4">
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
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg text-slate-100">Senior Frontend Developer</CardTitle>
              <CardDescription className="text-slate-400 mt-1">Remote • Full-time</CardDescription>
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
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Applications</span>
              <span className="text-slate-300">25</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600">View Details</Button>
            <Button size="sm" variant="outline" className="hover:bg-slate-700">Edit</Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    id: "calendar-integration",
    title: "Calendar Integration",
    description: "Calendar component for scheduling interviews and meetings",
    code: `<Card className="bg-slate-800/60 border-slate-600/50">
  <CardHeader>
    <CardTitle className="text-slate-100">Calendar</CardTitle>
    <CardDescription className="text-slate-400">Upcoming interviews and meetings</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="flex-1">
          <div className="text-sm font-medium text-slate-100">Interview with Sarah Johnson</div>
          <div className="text-xs text-slate-400">Technical Interview • 1 hour</div>
        </div>
        <div className="text-xs text-slate-400">2:00 PM</div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="flex-1">
          <div className="text-sm font-medium text-slate-100">Team Standup</div>
          <div className="text-xs text-slate-400">Daily Meeting • 30 min</div>
        </div>
        <div className="text-xs text-slate-400">9:00 AM</div>
      </div>
    </div>
  </CardContent>
</Card>`,
    component: (
      <Card className="w-full max-w-md bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
        <CardHeader>
          <CardTitle className="text-lg text-slate-100">Calendar</CardTitle>
          <CardDescription className="text-slate-400">Upcoming interviews and meetings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-100">Interview with Sarah Johnson</div>
                <div className="text-xs text-slate-400">Technical Interview • 1 hour</div>
              </div>
              <div className="text-xs text-slate-400">2:00 PM</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-100">Team Standup</div>
                <div className="text-xs text-slate-400">Daily Meeting • 30 min</div>
              </div>
              <div className="text-xs text-slate-400">9:00 AM</div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-100">Candidate Review</div>
                <div className="text-xs text-slate-400">Review Session • 45 min</div>
              </div>
              <div className="text-xs text-slate-400">4:30 PM</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700/30">
            <Button size="sm" className="w-full bg-fuchsia-500 hover:bg-fuchsia-600">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Interview
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
]

export { components }

export function DashboardComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favorites, 
  onToggleFavourite 
}: DashboardComponentsProps) {
  const filteredComponents = components.filter(component =>
    component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-100">Dashboard Components</h2>
            <p className="text-slate-400">Complete dashboard interface components and layouts</p>
          </div>
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">
            {filteredComponents.length} Components
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <ComponentCard
              key={component.id}
              id={component.id}
              title={component.title}
              description={component.description}
              code={component.code}
              onCopyCode={onCopyCode}
              copiedCode={copiedCode}
              viewMode={viewMode}
              isFavourite={favorites.has(component.id)}
              onToggleFavourite={() => onToggleFavourite(component.id)}
              searchQuery={searchQuery}
            >
              {component.component}
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