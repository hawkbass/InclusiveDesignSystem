"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/ui/status-badge"
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Eye,
  Edit,
  Trash2,
  Download,
  Share2,
  ChevronDown,
  CheckSquare,
  Square,
  X,
  User,
  Clock,
  MoreVertical
} from "lucide-react"
import { initialCandidates } from "./data"

interface CandidatesManagementProps {
  candidateStageFilter: string
  setCandidateStageFilter: (filter: string) => void
  candidateSearchTerm: string
  setCandidateSearchTerm: (term: string) => void
  selectedCandidateIds: Set<string>
  setSelectedCandidateIds: (ids: Set<string>) => void
  showFilterDropdown: boolean
  setShowFilterDropdown: (show: boolean) => void
  showAddCandidateModal: boolean
  setShowAddCandidateModal: (show: boolean) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  candidatesPerPage: number
  handleCandidateAction: (candidateId: string, action: string) => void
  handleExportCandidates: () => void
  handleAddCandidate: () => void
  handleFilterAction: (filterType: string) => void
}

export function CandidatesManagement({
  candidateStageFilter,
  setCandidateStageFilter,
  candidateSearchTerm,
  setCandidateSearchTerm,
  selectedCandidateIds,
  setSelectedCandidateIds,
  showFilterDropdown,
  setShowFilterDropdown,
  showAddCandidateModal,
  setShowAddCandidateModal,
  currentPage,
  setCurrentPage,
  candidatesPerPage,
  handleCandidateAction,
  handleExportCandidates,
  handleAddCandidate,
  handleFilterAction
}: CandidatesManagementProps) {
  const candidates = [
    { 
      id: "1",
      name: "Alex Morgan", 
      position: "UX Designer", 
      status: "interview", 
      match: "92%",
      avatar: "AM",
      skills: ["Figma", "React", "UX Research"],
      experience: "5 years",
      location: "San Francisco",
      lastActivity: "2h ago",
      email: "alex.morgan@email.com",
      phone: "+1 (555) 123-4567",
      portfolio: "alexmorgan.design",
      appliedDate: "2024-01-15",
      source: "LinkedIn"
    },
    { 
      id: "2",
      name: "Jamie Chen", 
      position: "Frontend Developer", 
      status: "screening", 
      match: "87%",
      avatar: "JC",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "3 years",
      location: "Remote",
      lastActivity: "5h ago",
      email: "jamie.chen@email.com",
      phone: "+1 (555) 234-5678",
      appliedDate: "2024-01-14",
      source: "Indeed"
    },
    { 
      id: "3",
      name: "Taylor Kim", 
      position: "Product Manager", 
      status: "applied", 
      match: "78%",
      avatar: "TK",
      skills: ["Strategy", "Analytics", "Agile"],
      experience: "7 years",
      location: "New York",
      lastActivity: "1d ago",
      email: "taylor.kim@email.com",
      phone: "+1 (555) 345-6789",
      appliedDate: "2024-01-13",
      source: "Company Website"
    },
    { 
      id: "4",
      name: "Casey Smith", 
      position: "Data Analyst", 
      status: "offer", 
      match: "85%",
      avatar: "CS",
      skills: ["Python", "SQL", "Tableau"],
      experience: "4 years",
      location: "Austin",
      lastActivity: "3h ago",
      email: "casey.smith@email.com",
      phone: "+1 (555) 456-7890",
      appliedDate: "2024-01-12",
      source: "Referral"
    },
    { 
      id: "5",
      name: "Jordan Lee", 
      position: "Backend Developer", 
      status: "screening", 
      match: "81%",
      avatar: "JL",
      skills: ["Java", "Spring", "AWS"],
      experience: "6 years",
      location: "Seattle",
      lastActivity: "4h ago",
      email: "jordan.lee@email.com",
      phone: "+1 (555) 567-8901",
      appliedDate: "2024-01-11",
      source: "LinkedIn"
    }
  ]

  const pipelineStages = [
    { key: "all", label: "All Candidates", count: candidates.length, color: "slate" },
    { key: "applied", label: "Applied", count: candidates.filter(c => c.status === "applied").length, color: "blue" },
    { key: "screening", label: "Screening", count: candidates.filter(c => c.status === "screening").length, color: "amber" },
    { key: "interview", label: "Interview", count: candidates.filter(c => c.status === "interview").length, color: "purple" },
    { key: "offer", label: "Offer", count: candidates.filter(c => c.status === "offer").length, color: "emerald" },
    { key: "hired", label: "Hired", count: candidates.filter(c => c.status === "hired").length, color: "green" },
    { key: "rejected", label: "Rejected", count: candidates.filter(c => c.status === "rejected").length, color: "red" }
  ]

  const filteredCandidates = candidates.filter(candidate => {
    const matchesStage = candidateStageFilter === "all" || candidate.status === candidateStageFilter
    const matchesSearch = candidate.name.toLowerCase().includes(candidateSearchTerm.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(candidateSearchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(candidateSearchTerm.toLowerCase()))
    return matchesStage && matchesSearch
  })

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage)
  const startIndex = (currentPage - 1) * candidatesPerPage
  const endIndex = startIndex + candidatesPerPage
  const paginatedCandidates = filteredCandidates.slice(startIndex, endIndex)

  const handleSelectAll = () => {
    if (selectedCandidateIds.size === paginatedCandidates.length) {
      setSelectedCandidateIds(new Set())
    } else {
      setSelectedCandidateIds(new Set(paginatedCandidates.map(c => c.id)))
    }
  }

  const handleSelectCandidate = (candidateId: string) => {
    const newSelected = new Set(selectedCandidateIds)
    if (newSelected.has(candidateId)) {
      newSelected.delete(candidateId)
    } else {
      newSelected.add(candidateId)
    }
    setSelectedCandidateIds(newSelected)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-100">Candidates</h2>
          <p className="text-sm text-slate-400">Manage your talent pipeline</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
            onClick={handleExportCandidates}
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button
            size="sm"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
            onClick={() => setShowAddCandidateModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Candidate
          </Button>
        </div>
      </div>

      {/* Pipeline Overview */}
      <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-slate-100">Pipeline Overview</h3>
          <div className="text-sm text-slate-400">{filteredCandidates.length} candidates</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {pipelineStages.map((stage) => (
            <button
              key={stage.key}
              onClick={() => setCandidateStageFilter(stage.key)}
              className={`p-2 sm:p-3 rounded-lg border transition-all duration-200 text-center ${
                candidateStageFilter === stage.key
                  ? 'border-fuchsia-500/50 bg-fuchsia-500/10'
                  : 'border-slate-700/50 bg-slate-700/30 hover:border-slate-600/50'
              }`}
            >
              <div className={`text-base sm:text-lg font-bold mb-1 ${
                candidateStageFilter === stage.key ? 'text-fuchsia-300' : 'text-slate-200'
              }`}>
                {stage.count}
              </div>
              <div className={`text-xs ${
                candidateStageFilter === stage.key ? 'text-fuchsia-400' : 'text-slate-400'
              }`}>
                {stage.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search candidates..."
              value={candidateSearchTerm}
              onChange={(e) => setCandidateSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700/50 border-slate-600/50 text-slate-200 placeholder:text-slate-400"
            />
          </div>

          {/* Advanced Filters */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50 w-full sm:w-auto"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>

            {showFilterDropdown && (
              <div className="absolute right-0 top-full mt-2 w-64 sm:w-80 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl z-10">
                <div className="p-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Experience Level</label>
                      <div className="space-y-2">
                        {["Entry", "Mid", "Senior", "Lead"].map((level) => (
                          <label key={level} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-slate-400">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Location</label>
                      <div className="space-y-2">
                        {["Remote", "London", "Manchester", "Birmingham", "Bristol", "Leeds", "Glasgow", "Edinburgh"].map((location) => (
                          <label key={location} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-slate-400">{location}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-300 mb-2 block">Source</label>
                      <div className="space-y-2">
                        {["LinkedIn", "Indeed", "Company Website", "Referral"].map((source) => (
                          <label key={source} className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-slate-400">{source}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-slate-300"
                      onClick={() => setShowFilterDropdown(false)}
                    >
                      Clear All
                    </Button>
                    <Button
                      size="sm"
                      className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
                      onClick={() => setShowFilterDropdown(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden backdrop-blur-sm">
        {/* Table Header */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleSelectAll}
                className="text-slate-400 hover:text-slate-300 transition-colors"
              >
                {selectedCandidateIds.size === paginatedCandidates.length ? (
                  <CheckSquare className="h-4 w-4 text-fuchsia-400" />
                ) : (
                  <Square className="h-4 w-4" />
                )}
              </button>
              <span className="text-sm text-slate-400">
                {selectedCandidateIds.size > 0 ? `${selectedCandidateIds.size} selected` : 'Select all'}
              </span>
            </div>
            
            {selectedCandidateIds.size > 0 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-fuchsia-400 hover:bg-fuchsia-500/10"
                  onClick={() => handleFilterAction("email")}
                >
                  <Mail className="h-3 w-3 mr-1" />
                  Email
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-fuchsia-400 hover:bg-fuchsia-500/10"
                  onClick={() => handleFilterAction("schedule")}
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Schedule
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-red-400 hover:bg-red-500/10"
                  onClick={() => handleFilterAction("reject")}
                >
                  <X className="h-3 w-3 mr-1" />
                  Reject
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Table Content */}
        <div className="divide-y divide-slate-700/30">
          {paginatedCandidates.map((candidate) => (
            <div 
              key={candidate.id}
              className="p-4 hover:bg-slate-700/30 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Checkbox and Avatar Row */}
                <div className="flex items-center gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => handleSelectCandidate(candidate.id)}
                    className="text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    {selectedCandidateIds.has(candidate.id) ? (
                      <CheckSquare className="h-4 w-4 text-fuchsia-400" />
                    ) : (
                      <Square className="h-4 w-4" />
                    )}
                  </button>

                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                    {candidate.avatar}
                  </div>
                </div>

                {/* Candidate Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <div className="text-sm font-medium text-slate-100">{candidate.name}</div>
                    <StatusBadge status={candidate.status as "applied" | "screening" | "interview" | "offer" | "hired" | "rejected"} />
                  </div>
                  <div className="text-sm text-slate-300 mb-1">{candidate.position}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {candidate.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {candidate.experience}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {candidate.lastActivity}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {candidate.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-slate-700/50 text-xs text-slate-300 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {candidate.skills.length > 3 && (
                      <span className="text-xs text-slate-500">+{candidate.skills.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Match Score and Actions */}
                <div className="flex sm:flex-col sm:items-end gap-4 sm:gap-2">
                  {/* Match Score */}
                  <div className="text-right">
                    <div className="text-sm font-medium text-emerald-400">{candidate.match}</div>
                    <div className="text-xs text-slate-500">match</div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
                      onClick={() => handleCandidateAction(candidate.id, "view")}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
                      onClick={() => handleCandidateAction(candidate.id, "email")}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
                      onClick={() => handleCandidateAction(candidate.id, "schedule")}
                    >
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
                      onClick={() => handleCandidateAction(candidate.id, "more")}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-400 text-center sm:text-left">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredCandidates.length)} of {filteredCandidates.length} candidates
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50 w-full sm:w-auto"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className={currentPage === page 
                        ? "bg-fuchsia-500 hover:bg-fuchsia-600 text-white" 
                        : "border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
                      }
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50 w-full sm:w-auto"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 