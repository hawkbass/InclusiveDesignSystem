"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { CalendarEvent, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { initialCalendarEvents } from "./data"
import { CalendarEvent as CalendarEventType } from "./types"

interface CalendarIntegrationProps {
  showScheduleInterviewModal: boolean
  setShowScheduleInterviewModal: (show: boolean) => void
  showEventDetailsModal: boolean
  setShowEventDetailsModal: (show: boolean) => void
  selectedEvent: CalendarEventType | null
  setSelectedEvent: (event: CalendarEventType | null) => void
  calendarView: "month" | "week" | "day"
  setCalendarView: (view: "month" | "week" | "day") => void
  selectedDate: number
  setSelectedDate: (date: number) => void
  calendarFilter: string
  setCalendarFilter: (filter: string) => void
}

export function CalendarIntegration({
  showScheduleInterviewModal,
  setShowScheduleInterviewModal,
  showEventDetailsModal,
  setShowEventDetailsModal,
  selectedEvent,
  setSelectedEvent,
  calendarView,
  setCalendarView,
  selectedDate,
  setSelectedDate,
  calendarFilter,
  setCalendarFilter
}: CalendarIntegrationProps) {
  const calendarEvents = initialCalendarEvents

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Technical':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'First Round':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      case 'Second Round':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      case 'Final Round':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      case 'Portfolio Review':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/30'
      default:
        return 'bg-slate-500/20 text-foreground/80 border-slate-500/30'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-emerald-400'
      case 'pending':
        return 'bg-amber-400'
      default:
        return 'bg-slate-400'
    }
  }

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)
  const currentMonth = "December 2024"

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Calendar</h2>
          <p className="text-sm text-muted-foreground">Schedule and manage interviews</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border/50 text-foreground/80 hover:bg-accent/50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            size="sm"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
            onClick={() => setShowScheduleInterviewModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
        </div>
      </div>

      {/* Calendar Controls */}
      <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="text-lg font-medium text-foreground">{currentMonth}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1">
              {["month", "week", "day"].map((view) => (
                <button
                  key={view}
                  onClick={() => setCalendarView(view as "month" | "week" | "day")}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    calendarView === view 
                      ? 'bg-fuchsia-500/20 text-primary' 
                      : 'text-muted-foreground hover:text-foreground/80'
                  }`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Day Headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center">
              <div className="text-xs font-medium text-muted-foreground">{day}</div>
            </div>
          ))}

          {/* Calendar Days */}
          {calendarDays.map((day) => {
            const dayEvents = calendarEvents[day] || []
            const isSelected = selectedDate === day
            const isToday = day === 15 // December 15th is "today"
            
            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`p-2 min-h-[80px] border border-border/30 rounded-lg transition-all duration-200 text-left relative ${
                  isSelected 
                    ? 'bg-fuchsia-500/20 border-primary/50' 
                    : 'hover:bg-accent/30'
                }`}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isToday ? 'text-primary' : 'text-foreground'
                }`}>
                  {day}
                  {isToday && <span className="ml-1 text-xs">•</span>}
                </div>
                
                {/* Events */}
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className={`px-2 py-1 rounded text-xs border cursor-pointer ${
                        getEventTypeColor(event.type)
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedEvent(event)
                        setShowEventDetailsModal(true)
                      }}
                    >
                      <div className="font-medium truncate">{event.candidate}</div>
                      <div className="text-xs opacity-80">{event.time}</div>
                    </div>
                  ))}
                  
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-muted-foreground text-center">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
} 





