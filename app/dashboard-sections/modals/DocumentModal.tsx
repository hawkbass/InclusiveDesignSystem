"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Download, FileText, Image as ImageIcon, File, FileCheck, AlertCircle } from "lucide-react"
import { initialDocuments } from "../data"
import type { Document } from "../types"

// Component to handle PDF viewing with error handling
function DocumentViewer({ url, fileName }: { url: string; fileName: string }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if document exists by trying to fetch it
    fetch(url, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          setHasError(true)
        }
      })
      .catch(() => {
        setHasError(true)
      })
  }, [url])

  if (hasError) {
    return (
      <div className="p-8 text-center space-y-4">
        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Document Not Available</h3>
          <p className="text-sm text-muted-foreground mb-4">
            This document could not be loaded. It may not exist or may have been removed.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(url, "_blank")}
            >
              Try Opening in New Tab
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <iframe
        src={url}
        className="w-full h-[600px] rounded-lg border border-border/50"
        title={fileName}
        onError={() => setHasError(true)}
      />
      <div className="mt-4 text-center">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm"
        >
          Open PDF in new tab
        </a>
      </div>
    </>
  )
}

interface DocumentModalProps {
  open: boolean
  documentId: string | null
  onClose: () => void
  onViewCV?: (candidateId: string) => void
}

const getTypeIcon = (type: Document["type"]) => {
  switch (type) {
    case "cv":
      return <FileText className="h-6 w-6 text-blue-400" />
    case "portfolio":
      return <ImageIcon className="h-6 w-6 text-purple-400" />
    case "cover-letter":
      return <File className="h-6 w-6 text-green-400" />
    case "certificate":
      return <FileCheck className="h-6 w-6 text-amber-400" />
    default:
      return <File className="h-6 w-6 text-muted-foreground" />
  }
}

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return bytes + " B"
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
  return (bytes / (1024 * 1024)).toFixed(1) + " MB"
}

export function DocumentModal({ open, documentId, onClose, onViewCV }: DocumentModalProps) {
  // Find document by ID
  const document = documentId ? initialDocuments.find(d => d.id === documentId) : null

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [open, onClose])

  if (!document) return null

  // Check if this is a CV - CVs should use the CV modal, not PDF viewer
  const isCV = document.type === "cv" && document.url.includes("/cvs/")
  const isImage = document.type === "portfolio" || document.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)
  const isPDF = document.url.match(/\.pdf$/i) && !isCV

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] sm:w-full max-h-[90vh] p-0 overflow-hidden flex flex-col" showCloseButton={false}>
        {/* Header with close button */}
        <div className="p-4 border-b border-border/50 bg-card flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              {getTypeIcon(document.type)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{document.fileName}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{formatFileSize(document.fileSize)}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  Uploaded {new Date(document.uploadedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-border/50 text-foreground/80 hover:bg-accent/50"
              onClick={() => {
                const link = document.createElement("a")
                link.href = document.url
                link.download = document.fileName
                link.click()
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              onClick={onClose}
              aria-label="Close document modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-background">
          <div className="max-w-4xl mx-auto">
            {isCV ? (
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    {getTypeIcon(document.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{document.fileName}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      CV documents are best viewed in the CV viewer. This document may not be available as a PDF file.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Extract candidate ID from document and open CV modal
                          if (document.candidateId && onViewCV) {
                            onClose()
                            onViewCV(document.candidateId)
                          } else if (document.candidateId) {
                            // Fallback if onViewCV not provided
                            onClose()
                            alert("CV viewer would open here. Use the 'View CV' button in candidate details instead.")
                          } else {
                            window.open(document.url, "_blank")
                          }
                        }}
                      >
                        View CV
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = document.url
                          link.download = document.fileName
                          link.click()
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : isImage ? (
              <div className="bg-card border border-border/50 rounded-lg p-4">
                <img 
                  src={document.url} 
                  alt={document.fileName}
                  className="max-w-full h-auto rounded-lg"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `
                        <div class="p-8 text-center">
                          <p class="text-muted-foreground">Image preview not available</p>
                          <a href="${document.url}" target="_blank" class="text-primary hover:underline mt-2 inline-block">
                            Open in new tab
                          </a>
                        </div>
                      `
                    }
                  }}
                />
              </div>
            ) : isPDF ? (
              <div className="bg-card border border-border/50 rounded-lg p-4">
                <DocumentViewer url={document.url} fileName={document.fileName} />
              </div>
            ) : (
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    {getTypeIcon(document.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{document.fileName}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This document type cannot be previewed in the browser.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(document.url, "_blank")}
                      >
                        Open in New Tab
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = document.url
                          link.download = document.fileName
                          link.click()
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

