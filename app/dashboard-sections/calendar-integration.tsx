"use client"

import React, { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { CalendarEvent, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react"
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
  calendarEvents: Record<number, CalendarEventType[]>
  setCalendarEvents: (events: Record<number, CalendarEventType[]>) => void
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
  setCalendarFilter,
  calendarEvents,
  setCalendarEvents
}: CalendarIntegrationProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  
  const today = new Date()
  const todayDate = today.getDate()
  
  const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  const calendarDays = useMemo(() => {
    const days: (number | null)[] = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }, [firstDayOfMonth, daysInMonth])
  
  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }
  
  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear()

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Technical':
        return 'bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30'
      case 'First Round':
        return 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30'
      case 'Second Round':
        return 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/30'
      case 'Final Round':
        return 'bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/30'
      case 'Portfolio Review':
        return 'bg-pink-500/20 text-pink-600 dark:text-pink-300 border-pink-500/30'
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

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Calendar</h2>
          <p className="text-sm text-muted-foreground">Schedule and manage interviews</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            className="border-border/50 text-foreground/80 hover:bg-accent/50"
            aria-label="Filter calendar events"
            onClick={() => {
              // Toggle filter dropdown or open filter modal
              // For demo, we'll just show available filter options
              const filterOptions = ["All Events", "Interviews", "Meetings", "Follow-ups"]
              alert(`Filter options: ${filterOptions.join(", ")}\n\nCurrent filter: ${calendarFilter}\n\nIn production, this would open a filter dropdown.`)
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button
            size="sm"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
            onClick={() => setShowScheduleInterviewModal(true)}
            aria-label="Schedule new interview"
          >
            <Plus className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
        </div>
      </div>

      {/* Calendar Controls */}
      <div className="bg-card/50 rounded-lg border border-border/50 p-4 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                onClick={handlePreviousMonth}
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="text-lg font-medium text-foreground">{monthNames[currentMonth]} {currentYear}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground/80"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
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
                  aria-label={`Switch to ${view} view`}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Views */}
        {calendarView === "month" && (
          <div className="grid grid-cols-7 gap-1 overflow-x-auto">
            {/* Day Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 text-center">
                <div className="text-xs font-medium text-muted-foreground">{day}</div>
              </div>
            ))}

            {/* Calendar Days */}
            {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="p-2 min-h-[80px]" />
            }
            
            // Get events for this day, but only show if they're in the current month/year
            const dayEvents = (calendarEvents[day] || []).filter(event => {
              if (!event.date) return true // Legacy events without date field
              const eventDate = new Date(event.date)
              return eventDate.getMonth() === currentMonth && 
                     eventDate.getFullYear() === currentYear
            })
            
            const isSelected = selectedDate === day && isCurrentMonth
            const isToday = isCurrentMonth && day === todayDate
            
            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`p-2 min-h-[80px] border border-border/30 rounded-lg transition-all duration-200 text-left relative ${
                  isSelected 
                    ? 'bg-fuchsia-500/20 border-primary/50' 
                    : 'hover:bg-accent/30'
                } ${!isCurrentMonth ? 'opacity-40' : ''}`}
                aria-label={`${day} ${monthNames[currentMonth]} ${currentYear}${dayEvents.length > 0 ? `, ${dayEvents.length} ${dayEvents.length === 1 ? 'event' : 'events'}` : ''}`}
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
                      className={`px-2 py-1 rounded text-xs border cursor-pointer transition-all duration-300 ${
                        getEventTypeColor(event.type)
                      } ${
                        event.status === "cancelled" 
                          ? "opacity-0 scale-95 -translate-y-2 pointer-events-none" 
                          : "opacity-100 scale-100 translate-y-0"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (event.status !== "cancelled") {
                          setSelectedEvent(event)
                          setShowEventDetailsModal(true)
                        }
                      }}
                      role="button"
                      tabIndex={event.status === "cancelled" ? -1 : 0}
                      aria-label={`View ${event.candidate} interview at ${event.time}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          if (event.status !== "cancelled") {
                            setSelectedEvent(event)
                            setShowEventDetailsModal(true)
                          }
                        }
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
        )}

        {/* Week View */}
        {calendarView === "week" && (() => {
          const currentDate = new Date(currentYear, currentMonth, selectedDate || todayDate)
          const startOfWeek = new Date(currentDate)
          startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
          
          const weekDays = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(startOfWeek)
            date.setDate(startOfWeek.getDate() + i)
            return date
          })

          const timeSlots = Array.from({ length: 24 }, (_, i) => i)

          return (
            <div className="space-y-2">
              <div className="grid grid-cols-8 gap-1">
                <div className="p-2"></div>
                {weekDays.map((date, idx) => {
                  const dayNum = date.getDate()
                  const isToday = date.toDateString() === today.toDateString()
                  return (
                    <div key={idx} className="p-2 text-center border-b border-border/30">
                      <div className="text-xs text-muted-foreground">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]}
                      </div>
                      <div className={`text-lg font-semibold mt-1 ${isToday ? 'text-primary' : 'text-foreground'}`}>
                        {dayNum}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="max-h-[600px] overflow-y-auto">
                <div className="grid grid-cols-8 gap-1">
                  <div className="space-y-0">
                    {timeSlots.map((hour) => (
                      <div key={hour} className="h-16 border-b border-border/20 flex items-start justify-end pr-2">
                        <span className="text-xs text-muted-foreground">{hour.toString().padStart(2, '0')}:00</span>
                      </div>
                    ))}
                  </div>
                  
                  {weekDays.map((date, dayIdx) => {
                    const dayNum = date.getDate()
                    const dayEvents = (calendarEvents[dayNum] || []).filter(event => {
                      if (!event.date) return true
                      const eventDate = new Date(event.date)
                      return eventDate.getDate() === dayNum && 
                             eventDate.getMonth() === currentMonth && 
                             eventDate.getFullYear() === currentYear
                    })

                    return (
                      <div key={dayIdx} className="space-y-0 relative">
                        {timeSlots.map((hour) => {
                          const hourEvents = dayEvents.filter(event => {
                            const eventHour = parseInt(event.time.split(':')[0])
                            return eventHour === hour
                          })

                          return (
                            <div
                              key={hour}
                              className="h-16 border-b border-border/20 p-1 hover:bg-accent/20 transition-colors"
                              onClick={() => {
                                setSelectedDate(dayNum)
                                setShowScheduleInterviewModal(true)
                              }}
                            >
                              {hourEvents.map((event) => (
                                <div
                                  key={event.id}
                                  className={`px-2 py-1 rounded text-xs border cursor-pointer mb-1 ${getEventTypeColor(event.type)} ${
                                    event.status === "cancelled" 
                                      ? "opacity-0 scale-95 pointer-events-none" 
                                      : "opacity-100"
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    if (event.status !== "cancelled") {
                                      setSelectedEvent(event)
                                      setShowEventDetailsModal(true)
                                    }
                                  }}
                                >
                                  <div className="font-medium truncate">{event.candidate}</div>
                                  <div className="text-xs opacity-80">{event.time}</div>
                                </div>
                              ))}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })()}

        {/* Day View */}
        {calendarView === "day" && (() => {
          const currentDate = new Date(currentYear, currentMonth, selectedDate || todayDate)
          const isToday = currentDate.toDateString() === today.toDateString()
          const dayEvents = (calendarEvents[selectedDate || todayDate] || []).filter(event => {
            if (!event.date) return true
            const eventDate = new Date(event.date)
            return eventDate.getDate() === (selectedDate || todayDate) && 
                   eventDate.getMonth() === currentMonth && 
                   eventDate.getFullYear() === currentYear
          })

          const timeSlots = Array.from({ length: 24 }, (_, i) => i)

          return (
            <div className="space-y-2">
              <div className="p-4 border-b border-border/30 text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][currentDate.getDay()]}
                </div>
                <div className={`text-2xl font-bold ${isToday ? 'text-primary' : 'text-foreground'}`}>
                  {monthNames[currentMonth]} {selectedDate || todayDate}, {currentYear}
                </div>
              </div>

              <div className="max-h-[600px] overflow-y-auto">
                <div className="grid grid-cols-12 gap-1">
                  <div className="col-span-2 space-y-0">
                    {timeSlots.map((hour) => (
                      <div key={hour} className="h-20 border-b border-border/20 flex items-start justify-end pr-2">
                        <span className="text-sm font-medium text-foreground">{hour.toString().padStart(2, '0')}:00</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="col-span-10 space-y-0 relative">
                    {timeSlots.map((hour) => {
                      const hourEvents = dayEvents.filter(event => {
                        const eventHour = parseInt(event.time.split(':')[0])
                        return eventHour === hour
                      })

                      return (
                        <div
                          key={hour}
                          className="h-20 border-b border-border/20 p-2 hover:bg-accent/20 transition-colors relative"
                          onClick={() => setShowScheduleInterviewModal(true)}
                        >
                          {hourEvents.map((event, idx) => (
                            <div
                              key={event.id}
                              className={`px-3 py-2 rounded-md text-sm border cursor-pointer mb-2 ${getEventTypeColor(event.type)} ${
                                event.status === "cancelled" 
                                  ? "opacity-0 scale-95 pointer-events-none" 
                                  : "opacity-100"
                              }`}
                              onClick={(e) => {
                                e.stopPropagation()
                                if (event.status !== "cancelled") {
                                  setSelectedEvent(event)
                                  setShowEventDetailsModal(true)
                                }
                              }}
                            >
                              <div className="font-semibold">{event.candidate}</div>
                              <div className="text-xs opacity-80 mt-1">{event.time} • {event.duration}</div>
                              <div className="text-xs opacity-70 mt-1">{event.type}</div>
                            </div>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })()}
      </div>
    </div>
  )
} 





