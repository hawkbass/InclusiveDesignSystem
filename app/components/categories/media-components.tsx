"use client"

import React from "react"
import { ComponentCard } from "./component-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ImageIcon,
  Video,
  ArrowRight,
  RefreshCw,
  Download
} from "lucide-react"

interface MediaComponentsProps {
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
    id: "avatar-group",
    title: "Avatar Components",
    description: "Profile pictures and avatar variations",
    code: `<div className="flex items-center gap-6">
  <Avatar className="h-16 w-16">
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>
  <div>
    <h4 className="font-medium">Sarah Johnson</h4>
    <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
  </div>
</div>`,
    component: (
      <div className="space-y-4 w-full">
        <div className="flex items-center gap-6">
          <Avatar className="h-16 w-16 ring-2 ring-border dark:ring-slate-600 hover:ring-fuchsia-500/50 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <AvatarImage src="/placeholder.svg?height=64&width=64" />
            <AvatarFallback className="bg-fuchsia-500/20 text-primary text-lg font-bold">SJ</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-foreground">Sarah Johnson</h4>
            <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 hover:scale-110 transition-transform" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <AvatarFallback className="bg-blue-500/20 text-blue-700 dark:text-blue-600 dark:text-blue-300 font-semibold">MK</AvatarFallback>
          </Avatar>
          <div>
            <h5 className="font-medium text-foreground">Michael Kim</h5>
            <p className="text-sm text-muted-foreground">Product Designer</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 hover:scale-110 transition-transform" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <AvatarFallback className="bg-green-500/20 text-green-700 dark:text-green-600 dark:text-green-300 text-sm font-semibold">AL</AvatarFallback>
          </Avatar>
          <div>
            <h5 className="font-medium text-sm text-foreground">Alex Liu</h5>
            <p className="text-xs text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "image-placeholder",
    title: "Image Placeholders",
    description: "Placeholder components for images",
    code: `<div className="aspect-video bg-card/50 border border-border/50 shadow-xl rounded-lg flex items-center justify-center">
  <div className="text-center">
    <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
    <p className="text-sm text-muted-foreground">16:9 Aspect Ratio</p>
  </div>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div className="aspect-video bg-card/50 border border-border rounded-lg flex items-center justify-center hover:border-primary-500 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <div className="text-center">
            <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">16:9 Aspect Ratio</p>
          </div>
        </div>
        <div className="aspect-square bg-card/50 border border-border rounded-lg flex items-center justify-center hover:border-primary-500 transition-all duration-300 rounded-lg" style={{ transitionDuration: 'var(--animation-speed)' }}>
          <div className="text-center">
            <ImageIcon className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">1:1 Square</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "avatar-stack",
    title: "Avatar Stack",
    description: "Overlapping avatar groups for teams",
    code: `<div className="flex -space-x-2">
  <Avatar className="border-2 border-white">
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-white">
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-white">
    <AvatarFallback>AL</AvatarFallback>
  </Avatar>
</div>`,
    component: (
      <div className="space-y-4 w-full max-w-md">
        <div>
          <h4 className="font-medium text-foreground mb-3">Hiring Team</h4>
          <div className="flex -space-x-2">
            {[
              { initials: "SJ", name: "Sarah Johnson", colour: "bg-fuchsia-500/20 text-primary" },
              { initials: "MK", name: "Michael Kim", colour: "bg-blue-500/20 text-blue-700 dark:text-blue-600 dark:text-blue-300" },
              { initials: "AL", name: "Alex Liu", colour: "bg-green-500/20 text-green-700 dark:text-green-600 dark:text-green-300" },
              { initials: "JD", name: "Jane Doe", colour: "bg-purple-500/20 text-purple-700 dark:text-purple-600 dark:text-purple-600 dark:text-purple-300" }
            ].map((person, index) => (
              <Avatar key={index} className="border-2 border-border hover:scale-110 transition-transform cursor-pointer" style={{ transitionDuration: 'var(--animation-speed)' }}>
                <AvatarFallback className={person.colour} title={person.name}>
                  {person.initials}
                </AvatarFallback>
              </Avatar>
            ))}
            <div className="flex items-center justify-center w-10 h-10 bg-muted border-2 border-border rounded-full text-xs text-foreground/80 hover:bg-muted transition-all duration-300 rounded-lg cursor-pointer" style={{ transitionDuration: 'var(--animation-speed)' }}>
              +3
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-3">Interview Panel</h4>
          <div className="flex -space-x-2">
            {[
              { initials: "RW", colour: "bg-orange-500/20 text-orange-700 dark:text-orange-600 dark:text-orange-300" },
              { initials: "LB", colour: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-600 dark:text-cyan-300" },
              { initials: "KM", colour: "bg-pink-500/20 text-pink-700 dark:text-pink-600 dark:text-pink-300" }
            ].map((person, index) => (
              <Avatar key={index} className="border-2 border-border hover:scale-110 transition-transform cursor-pointer" style={{ transitionDuration: 'var(--animation-speed)' }}>
                <AvatarFallback className={person.colour}>
                  {person.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "image-gallery",
    title: "Image Gallery",
    description: "Grid-based image gallery with preview",
    code: `<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  <div className="aspect-square bg-card/50 rounded-lg overflow-hidden">
    <img src="/placeholder.svg" alt="Gallery item" className="w-full h-full object-cover" />
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { title: "Office Space", colour: "bg-blue-500/20" },
            { title: "Team Photo", colour: "bg-green-500/20" },
            { title: "Company Event", colour: "bg-purple-500/20" },
            { title: "Product Demo", colour: "bg-yellow-500/20" },
            { title: "Meeting Room", colour: "bg-red-500/20" },
            { title: "Workspace", colour: "bg-cyan-500/20" }
          ].map((item, index) => (
            <div
              key={index}
              className={`aspect-square ${item.colour} rounded-xl border border-border flex items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
              style={{ transitionDuration: 'var(--animation-speed)' }}
            >
              <div className="text-center">
                <ImageIcon className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "profile-banner",
    title: "Profile Banner",
    description: "Cover image with profile photo overlay",
    code: `<div className="relative">
  <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
  <Avatar className="absolute -bottom-8 left-6 h-16 w-16 border-4 border-white">
    <AvatarFallback>SJ</AvatarFallback>
  </Avatar>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="relative">
          <div className="h-24 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-xl border border-border">
            <div className="absolute inset-0 bg-card/20 rounded-lg"></div>
          </div>
          <Avatar className="absolute -bottom-6 left-4 h-12 w-12 border-2 border-border ring-2 ring-border dark:ring-slate-600">
            <AvatarFallback className="bg-fuchsia-500/20 text-primary font-bold">SJ</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-8 px-4">
          <h3 className="font-bold text-foreground">Sarah Johnson</h3>
          <p className="text-sm text-muted-foreground">Senior Frontend Developer at TechCorp</p>
          <div className="flex gap-2 mt-2">
            <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-600 dark:text-blue-300 hover:bg-blue-500/30 text-xs">React</Badge>
            <Badge className="bg-green-500/20 text-green-700 dark:text-green-600 dark:text-green-300 hover:bg-green-500/30 text-xs">Node.js</Badge>
            <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-600 dark:text-purple-600 dark:text-purple-300 hover:bg-purple-500/30 text-xs">TypeScript</Badge>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "media-player",
    title: "Media Player",
    description: "Video/audio player interface",
    code: `<div className="bg-card rounded-lg p-4">
  <div className="aspect-video bg-card rounded mb-4 flex items-center justify-center">
    <Video className="h-12 w-12 text-muted-foreground" />
  </div>
  <div className="flex items-center gap-6">
    <Button size="sm"><Play className="h-4 w-4" /></Button>
    <div className="flex-1 bg-muted h-1 rounded">
      <div className="bg-fuchsia-500 h-1 rounded w-1/3"></div>
    </div>
    <span className="text-sm text-muted-foreground">2:34 / 7:42</span>
  </div>
</div>`,
    component: (
      <div className="w-full max-w-md">
        <div className="bg-card/50 border border-border rounded-lg p-4">
          <div className="aspect-video bg-card/80 rounded mb-4 flex items-center justify-center hover:bg-card hover:scale-105 transition-all duration-300 rounded-lg hover:shadow-lg cursor-pointer" style={{ transitionDuration: 'var(--animation-speed)' }}>
            <div className="text-center">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Interview Recording</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-6">
              <Button size="sm" className="w-8 h-8 p-0 bg-fuchsia-500 hover:bg-fuchsia-600">
                <ArrowRight className="h-4 w-4 ml-0.5" />
              </Button>
              <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                <div className="bg-fuchsia-500 h-full rounded-full w-1/3 transition-all" style={{ transitionDuration: 'var(--animation-speed)' }}></div>
              </div>
              <span className="text-sm text-muted-foreground font-mono">2:34 / 7:42</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-accent">
                  <RefreshCw className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:bg-accent">
                  <Download className="h-3 w-3" />
                </Button>
              </div>
              <div className="text-muted-foreground">Sarah Johnson - Technical Interview</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export function MediaComponents({ 
  searchQuery, 
  onCopyCode, 
  copiedCode, 
  viewMode, 
  favourites, 
  onToggleFavourite 
}: MediaComponentsProps) {
  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Media Components</h2>
            <p className="text-muted-foreground">Images, avatars, and media display components</p>
          </div>
          <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-600 dark:text-blue-300 border-blue-500/30 hover:bg-blue-500/30 px-3 py-1">
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
            <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
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





