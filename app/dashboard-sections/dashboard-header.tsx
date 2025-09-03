"use client"

import { Bell, BellDot, Settings, X, CheckCircle2, ArrowRight, Target, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Notification } from "./types"

interface DashboardHeaderProps {
  notifications: Notification[]
  showNotifications: boolean
  setShowNotifications: (show: boolean) => void
  setNotifications: (notifications: Notification[] | ((prev: Notification[]) => Notification[])) => void
}

export function DashboardHeader({ 
  notifications, 
  showNotifications, 
  setShowNotifications, 
  setNotifications 
}: DashboardHeaderProps) {
  return (
    <>
      {/* Notifications Dropdown - Outside main container to avoid overflow issues */}
      {showNotifications && (
        <div className="fixed inset-0 z-[9999]" onClick={() => setShowNotifications(false)}>
          <div 
            className="absolute right-4 top-16 w-96 bg-slate-900/95 border border-slate-700/50 rounded-xl shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-t-xl">
              <div className="flex items-centre justify-between">
                <div className="flex items-centre gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-centre justify-centre">
                    <Bell className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">Notifications</h3>
                    <p className="text-xs text-slate-400">{notifications.length} new updates</p>
                  </div>
                </div>
                <div className="flex items-centre gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50"
                    onClick={() => {
                      setNotifications([])
                      setShowNotifications(false)
                    }}
                    title="Mark all as read"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50"
                    onClick={() => setShowNotifications(false)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-centre">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-centre justify-centre mx-auto mb-3">
                    <Bell className="h-8 w-8 text-slate-500" />
                  </div>
                  <p className="text-sm text-slate-400 mb-1">All caught up!</p>
                  <p className="text-xs text-slate-500">No new notifications</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-700/30">
                  {notifications.map((notification, index) => (
                    <div 
                      key={notification.id} 
                      className="p-4 hover:bg-slate-800/30 transition-all duration-200 group relative"
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: 'slideInLeft 0.3s ease-out forwards'
                      }}
                    >
                      {/* Notification Content */}
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-full flex items-centre justify-centre flex-shrink-0 ${
                          notification.type === 'interview' 
                            ? 'bg-blue-500/20 border border-blue-500/30' :
                          notification.type === 'application' 
                            ? 'bg-emerald-500/20 border border-emerald-500/30' :
                          notification.type === 'goal'
                            ? 'bg-purple-500/20 border border-purple-500/30' :
                            'bg-slate-500/20 border border-slate-500/30'
                        }`}>
                          {notification.type === 'interview' && (
                            <Calendar className="h-4 w-4 text-blue-400" />
                          )}
                          {notification.type === 'application' && (
                            <Users className="h-4 w-4 text-emerald-400" />
                          )}
                          {notification.type === 'goal' && (
                            <Target className="h-4 w-4 text-purple-400" />
                          )}
                          {!['interview', 'application', 'goal'].includes(notification.type) && (
                            <Bell className="h-4 w-4 text-slate-400" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm text-slate-200 leading-relaxed group-hover:text-slate-100 transition-colours">
                              {notification.message}
                            </p>
                            {notification.urgent && (
                              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0 mt-2"></div>
                            )}
                          </div>
                          <div className="flex items-centre justify-between mt-2">
                            <span className="text-xs text-slate-500">{notification.time}</span>
                            <div className="flex items-centre gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs text-fuchsia-400 hover:bg-fuchsia-500/10"
                                onClick={() => {
                                  setNotifications((prev: Notification[]) => prev.filter(n => n.id !== notification.id))
                                }}
                              >
                                Dismiss
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover effect line */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-4 border-t border-slate-700/50 bg-slate-800/30 rounded-b-xl">
                <div className="flex items-centre justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs text-slate-400 hover:text-slate-300 hover:bg-slate-700/50 h-8"
                    onClick={() => {
                      setNotifications([])
                      setShowNotifications(false)
                    }}
                  >
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Mark all as read
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs text-fuchsia-400 hover:text-fuchsia-300 hover:bg-fuchsia-500/10 h-8"
                    onClick={() => {
                      setShowNotifications(false)
                      setNotifications((prev: Notification[]) => [
                        { id: Date.now(), type: "application", message: "📱 Viewing all notifications in dashboard", time: "Just now", urgent: false },
                        ...prev.slice(0, 4)
                      ])
                    }}
                  >
                    View All
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Dashboard Header */}
      <div className="bg-slate-800/50 p-3 border-b border-slate-700/50 flex items-centre justify-between backdrop-blur-sm">
        <div className="flex items-centre gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-centre gap-2 bg-slate-900/50 rounded-md px-2 py-1 text-xs text-slate-400 border border-slate-700/50">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>inclusive.io/dashboard</span>
          <span className="text-green-400">LIVE</span>
        </div>
        <div className="flex items-centre gap-2">
          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              {notifications.some(n => n.urgent) ? (
                <BellDot className="h-4 w-4 text-fuchsia-400" />
              ) : (
                <Bell className="h-4 w-4 text-slate-400" />
              )}
              {notifications.length > 0 && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-fuchsia-500 rounded-full flex items-centre justify-centre text-xs text-white font-medium">
                  {notifications.length > 9 ? "9+" : notifications.length}
                </div>
              )}
            </Button>
          </div>

          {/* Settings */}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Settings className="h-4 w-4 text-slate-400" />
          </Button>

          {/* User Profile */}
          <div className="flex items-centre gap-2 bg-slate-700/30 rounded-md px-2 py-1 border border-slate-600/30">
            <div className="w-6 h-6 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-centre justify-centre text-white text-xs font-medium">
              SW
            </div>
            <div className="text-xs text-slate-300">Sarah Wilson</div>
          </div>
        </div>
      </div>
    </>
  )
} 




