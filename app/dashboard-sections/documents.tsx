"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Download, 
  Eye, 
  Upload, 
  Search,
  Filter,
  Image as ImageIcon,
  File,
  FileCheck
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { initialDocuments } from "./data"
import type { Document } from "./types"

interface DocumentsProps {
  candidateId?: string
  jobId?: string
  onViewDocument?: (documentId: string) => void
}

export function Documents({ candidateId, jobId, onViewDocument }: DocumentsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [documents] = useState<Document[]>(initialDocuments)

  const filteredDocuments = documents.filter(doc => {
    if (candidateId && doc.candidateId !== candidateId) return false
    if (jobId && doc.jobId !== jobId) return false
    if (filterType !== "all" && doc.type !== filterType) return false
    if (searchTerm && !doc.fileName.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const getTypeIcon = (type: Document["type"]) => {
    switch (type) {
      case "cv":
        return <FileText className="h-5 w-5 text-blue-400" />
      case "portfolio":
        return <ImageIcon className="h-5 w-5 text-purple-400" />
      case "cover-letter":
        return <File className="h-5 w-5 text-green-400" />
      case "certificate":
        return <FileCheck className="h-5 w-5 text-amber-400" />
      default:
        return <File className="h-5 w-5 text-muted-foreground" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Documents</h3>
        <Button 
          size="sm" 
          className="bg-primary text-primary-foreground"
          onClick={() => {
            // Create a file input element
            const input = document.createElement("input")
            input.type = "file"
            input.accept = ".pdf,.doc,.docx,.txt,.jpg,.png"
            input.onchange = (e) => {
              const file = (e.target as HTMLInputElement).files?.[0]
              if (file) {
                // In a real app, this would upload to a server
                // For demo purposes, we'll show a success message
                alert(`Document "${file.name}" would be uploaded. (Demo mode)`)
              }
            }
            input.click()
          }}
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search documents..."
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
            <SelectItem value="cv">CV</SelectItem>
            <SelectItem value="portfolio">Portfolio</SelectItem>
            <SelectItem value="cover-letter">Cover Letter</SelectItem>
            <SelectItem value="certificate">Certificate</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {getTypeIcon(doc.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground mb-1 truncate">
                    {doc.fileName}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {doc.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatFileSize(doc.fileSize)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => {
                        if (onViewDocument) {
                          onViewDocument(doc.id)
                        } else {
                          window.open(doc.url, "_blank")
                        }
                      }}
                    >
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = doc.url
                        link.download = doc.fileName
                        link.click()
                      }}
                    >
                      <Download className="h-3.5 w-3.5 mr-1" />
                      Download
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

