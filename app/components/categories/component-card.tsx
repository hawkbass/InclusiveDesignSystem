"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Copy, 
  CheckCircle2, 
  Heart, 
  Eye, 
  Edit,
  Save,
  RotateCcw,
  Component,
  Check
} from "lucide-react"

interface ComponentCardProps {
  title: string
  description?: string
  children: React.ReactNode
  code?: string
  id: string
  onCopyCode?: (code: string, id: string) => void
  copiedCode?: string
  isFavourite?: boolean
  onToggleFavourite?: (id: string) => void
  viewMode?: "grid" | "list"
  searchQuery?: string
}

export function ComponentCard({ 
  title, 
  description, 
  children, 
  code, 
  id, 
  onCopyCode, 
  copiedCode, 
  isFavourite = false, 
  onToggleFavourite,
  viewMode = "grid",
  searchQuery = ""
}: ComponentCardProps) {
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editedCode, setEditedCode] = useState(code || "")
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedDescription, setEditedDescription] = useState(description || "")

  // Highlight search terms in title
  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-fuchsia-500/30 text-fuchsia-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    )
  }

  const cardClasses = viewMode === "list" 
    ? "flex items-center gap-6 p-6" 
    : "flex flex-col p-6"

  const handleSaveEdit = () => {
    // In a real app, this would save to a backend
    console.log("Saving component:", { id, title: editedTitle, description: editedDescription, code: editedCode })
    setIsEditOpen(false)
    // You could add a toast notification here
  }

  const handleResetEdit = () => {
    setEditedCode(code || "")
    setEditedTitle(title)
    setEditedDescription(description || "")
  }

  return (
    <Card className={`group relative overflow-hidden bg-slate-800/60 border-slate-600/50 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/10 ${cardClasses}`} style={{ transitionDuration: 'var(--animation-speed)' }}>
      {/* Content Layout */}
      <div className={viewMode === "list" ? "flex-1" : "flex-1 space-y-4"}>
        <CardHeader className="p-0">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-lg font-semibold text-slate-100 group-hover:text-fuchsia-300 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
                {highlightText(title, searchQuery)}
              </CardTitle>
              {description && (
                <CardDescription className="text-slate-400 leading-relaxed">
                  {highlightText(description, searchQuery)}
                </CardDescription>
              )}
            </div>
            
            {/* Status Indicators */}
            <div className="flex items-center gap-2 ml-4">
              <Badge variant="outline" className="text-xs border-green-400/30 text-green-400">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Ready
              </Badge>
            </div>
          </div>
        </CardHeader>

        {/* Component Preview */}
        <CardContent className={`p-0 ${viewMode === "list" ? "flex-1" : ""}`}>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 shadow-xl/50 group-hover:border-slate-600/50 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
            {children}
          </div>
        </CardContent>
      </div>

      {/* Action Buttons */}
      <div className={`flex items-center justify-between ${viewMode === "list" ? "flex-col gap-2" : "mt-4"}`}>
        <div className="flex items-center gap-2">
          {code && onCopyCode && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onCopyCode(code, id)}
              className="hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all duration-300 rounded-lg"
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label="Copy component code"
            >
              {copiedCode === id ? (
                <>
                  <Check className="h-4 w-4 mr-2 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Code
                </>
              )}
            </Button>
          )}
          
          {/* View Button with Modal */}
          <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-slate-700 transition-all duration-300 rounded-lg"
                style={{ transitionDuration: 'var(--animation-speed)' }}
                aria-label="View component details"
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Component className="h-5 w-5 text-fuchsia-400" />
                  {title}
                </DialogTitle>
                <DialogDescription className="text-slate-400">
                  {description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                {/* Component Preview */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-200">Live Preview</h3>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 shadow-xl">
                    {children}
                  </div>
                </div>

                {/* Component Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-200">Component Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">ID:</span>
                        <span className="text-slate-300 font-mono">{id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Status:</span>
                        <Badge variant="outline" className="text-xs border-green-400/30 text-green-400">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Ready
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Favourite:</span>
                        <span className="text-slate-300">{isFavourite ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-200">Usage Guidelines</h3>
                    <div className="text-sm text-slate-400 space-y-2">
                      <p>• Use this component for {description?.toLowerCase() || 'UI elements'}</p>
                      <p>• Ensure proper accessibility attributes</p>
                      <p>• Test on different screen sizes</p>
                      <p>• Follow the design system guidelines</p>
                    </div>
                  </div>
                </div>

                {/* Code Display */}
                {code && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-200">Source Code</h3>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onCopyCode && onCopyCode(code, id)}
                        className="hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    <pre className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/50 shadow-xl text-sm text-slate-300 overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Edit Button with Modal */}
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-slate-700 transition-all duration-300 rounded-lg"
                style={{ transitionDuration: 'var(--animation-speed)' }}
                aria-label="Edit component"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Edit className="h-5 w-5 text-fuchsia-400" />
                  Edit Component: {title}
                </DialogTitle>
                <DialogDescription className="text-slate-400">
                  Modify the component details and code. Changes are saved locally.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                {/* Edit Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-slate-300">Component Title</Label>
                      <Input
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="bg-slate-800/50 border-slate-600 hover:border-fuchsia-500/50 focus:border-fuchsia-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-slate-300">Description</Label>
                      <Textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="bg-slate-800/50 border-slate-600 hover:border-fuchsia-500/50 focus:border-fuchsia-500 min-h-[100px]"
                        placeholder="Enter component description..."
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-200">Live Preview</h3>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 shadow-xl">
                      {children}
                    </div>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300 text-lg font-semibold">Component Code</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleResetEdit}
                        className="hover:bg-slate-700"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigator.clipboard.writeText(editedCode)}
                        className="hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={editedCode}
                    onChange={(e) => setEditedCode(e.target.value)}
                    className="bg-slate-800/80 border-slate-600 hover:border-fuchsia-500/50 focus:border-fuchsia-500 font-mono text-sm min-h-[200px]"
                    placeholder="Enter component code..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-700">
                  <Button
                    variant="outline"
                    onClick={() => setIsEditOpen(false)}
                    className="hover:bg-slate-700"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveEdit}
                    className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/25"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* favourite Button - Now positioned at bottom right */}
        <div className="flex items-center gap-2">
          {isFavourite && (
            <Badge variant="outline" className="text-xs border-red-400/30 text-red-400">
              <Heart className="h-3 w-3 mr-1 fill-current" />
              Favourite
            </Badge>
          )}
          {onToggleFavourite && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onToggleFavourite(id)}
              className={`h-8 w-8 p-0 transition-all ${isFavourite ? 'text-red-400 hover:text-red-300' : 'text-slate-400 hover:text-red-400'}`}
              style={{ transitionDuration: 'var(--animation-speed)' }}
              aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            >
              <Heart className={`h-4 w-4 ${isFavourite ? 'fill-current' : ''}`} />
            </Button>
          )}
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ transitionDuration: 'var(--animation-speed)' }} />
    </Card>
  )
} 





