"use client"

import { MainDashboard } from "@/app/dashboard-sections/main-dashboard"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"

/**
 * Dashboard Demo Page
 * 
 * This is the main sales demo page showcasing the Inclusive ATS platform.
 * It demonstrates a full-featured recruitment dashboard with:
 * 
 * - Dashboard Overview (metrics, charts, activity)
 * - Candidates Management (search, filter, pipeline)
 * - Jobs Management (postings, applications)
 * - Calendar Integration (interviews, scheduling)
 * - Settings Panel (profile, team, security)
 * 
 * This page is critical for demonstrating the product's capabilities
 * to potential customers and showcasing the UI/UX excellence that
 * sets Inclusive apart from competitors.
 */
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen relative z-10">
      <UnifiedSidebar />
      <main className="flex-1 overflow-auto">
        {/* Full-width dashboard container */}
        <div className="w-full px-4 py-6 lg:px-8">
          <MainDashboard />
        </div>
      </main>
    </div>
  )
}

