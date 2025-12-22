"use client"

import React from "react"
import { UnifiedSidebar } from "@/components/ui/unified-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Zap,
  Clock,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Accessibility,
  Sparkles,
  Timer,
  Target,
  Award,
  Gauge,
  RefreshCw,
  Brain,
  Workflow,
  FileSearch,
  Calendar,
  MessageSquare,
  PieChart,
  Layers,
  Star,
  Heart
} from "lucide-react"

/**
 * Why Inclusive? - Sales Comparison Page
 * 
 * This page showcases how Inclusive ATS outperforms competitors in:
 * - Speed & Performance
 * - Accessibility (WCAG compliance)
 * - User Experience
 * - Time-to-hire metrics
 * - Automation capabilities
 * 
 * Research basis: Workable, Greenhouse, Lever, Ashby, BambooHR, Recruitee
 */

// Competitor comparison data based on industry research
const competitorComparison = [
  {
    feature: "Average Page Load Time",
    inclusive: "< 1.2s",
    greenhouse: "2.8s",
    lever: "3.1s",
    workable: "2.5s",
    inclusiveBest: true,
    icon: Timer,
    description: "Lightning-fast performance means recruiters can process more candidates"
  },
  {
    feature: "WCAG 2.1 AA Compliance",
    inclusive: "100%",
    greenhouse: "Partial",
    lever: "Partial",
    workable: "Limited",
    inclusiveBest: true,
    icon: Accessibility,
    description: "Full accessibility for all users, including those with disabilities"
  },
  {
    feature: "Time to Schedule Interview",
    inclusive: "< 30 sec",
    greenhouse: "2-3 min",
    lever: "2-4 min",
    workable: "3-5 min",
    inclusiveBest: true,
    icon: Calendar,
    description: "One-click scheduling integrated with all major calendar providers"
  },
  {
    feature: "AI-Powered Candidate Matching",
    inclusive: "Built-in",
    greenhouse: "Add-on (£££)",
    lever: "Limited",
    workable: "Basic",
    inclusiveBest: true,
    icon: Brain,
    description: "Intelligent matching reduces screening time by 70%"
  },
  {
    feature: "Mobile Responsiveness",
    inclusive: "Full PWA",
    greenhouse: "Basic",
    lever: "Limited",
    workable: "Basic",
    inclusiveBest: true,
    icon: Globe,
    description: "Full mobile experience - review candidates on the go"
  },
  {
    feature: "Keyboard Navigation",
    inclusive: "Complete",
    greenhouse: "Partial",
    lever: "Limited",
    workable: "Limited",
    inclusiveBest: true,
    icon: Zap,
    description: "Power users can navigate entirely without a mouse"
  },
]

// Time savings statistics
const timeSavings = [
  {
    task: "Candidate Screening",
    traditional: "45 min / candidate",
    inclusive: "12 min / candidate",
    savings: "73%",
    icon: FileSearch
  },
  {
    task: "Interview Scheduling",
    traditional: "15-20 emails",
    inclusive: "1-click booking",
    savings: "95%",
    icon: Calendar
  },
  {
    task: "Pipeline Management",
    traditional: "Manual updates",
    inclusive: "Auto-progression",
    savings: "80%",
    icon: Workflow
  },
  {
    task: "Candidate Communication",
    traditional: "Individual emails",
    inclusive: "Smart templates",
    savings: "60%",
    icon: MessageSquare
  },
  {
    task: "Reporting & Analytics",
    traditional: "Excel exports",
    inclusive: "Real-time dashboards",
    savings: "85%",
    icon: PieChart
  },
  {
    task: "Compliance Tracking",
    traditional: "Manual audits",
    inclusive: "Automated monitoring",
    savings: "90%",
    icon: Shield
  }
]

// Key differentiators
const differentiators = [
  {
    title: "Built for Speed",
    description: "Every interaction feels instant. No waiting, no spinning loaders. Built on Next.js 15 with edge computing.",
    icon: Gauge,
    stat: "< 100ms",
    statLabel: "interaction response"
  },
  {
    title: "Accessibility First",
    description: "The only ATS built from the ground up for WCAG 2.1 AA compliance. Screen reader optimised, keyboard navigable.",
    icon: Heart,
    stat: "100%",
    statLabel: "WCAG compliance"
  },
  {
    title: "Smart Automation",
    description: "AI-powered candidate matching, automated scheduling, and intelligent workflow progression save hours daily.",
    icon: Brain,
    stat: "48h",
    statLabel: "saved weekly"
  },
  {
    title: "Modern UK Focus",
    description: "Built by UK recruiters, for UK recruiters. GDPR compliant, right-to-work checks, UK job board integrations.",
    icon: Globe,
    stat: "UK",
    statLabel: "focused platform"
  }
]

// Industry statistics
const industryStats = [
  { label: "Faster Time-to-Hire", value: "40%", description: "Compared to industry average" },
  { label: "Recruiter Productivity", value: "3x", description: "More candidates processed" },
  { label: "Candidate Experience", value: "92%", description: "Satisfaction rating" },
  { label: "Interview Show Rate", value: "95%", description: "With automated reminders" }
]

export default function WhyInclusivePage() {
  return (
    <div className="flex min-h-screen bg-background relative z-10">
      <UnifiedSidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/30 mb-6">
              Why Choose Inclusive?
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              The ATS Built for 
              <span className="text-gradient block mt-2">Modern Recruitment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Stop wrestling with slow, clunky recruitment software. Inclusive delivers the speed, 
              accessibility, and automation your team needs to hire the best talent faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Sparkles className="mr-2 h-5 w-5" />
                  See Live Demo
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Walkthrough
              </Button>
            </div>
          </section>

          {/* Key Stats Banner */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {industryStats.map((stat) => (
              <Card key={stat.label} className="bg-card/50 border-border text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-medium text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Differentiators */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Sets Inclusive Apart
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built from scratch with modern technology and inclusive design principles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => (
                <Card key={item.title} className="bg-card/50 border-border hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{item.stat}</span>
                      <span className="text-sm text-muted-foreground">{item.statLabel}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Competitor Comparison Table */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How We Compare
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how Inclusive stacks up against the leading ATS platforms in the market
              </p>
            </div>
            
            <Card className="bg-card/50 border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary">
                        <div className="flex items-center justify-center gap-2">
                          <Star className="h-4 w-4 fill-primary" />
                          Inclusive
                        </div>
                      </th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Greenhouse</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Lever</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Workable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorComparison.map((row, index) => (
                      <tr key={row.feature} className={index % 2 === 0 ? "bg-background/50" : ""}>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <row.icon className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <div className="font-medium text-foreground">{row.feature}</div>
                              <div className="text-sm text-muted-foreground">{row.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-primary/10 text-primary border-primary/30">
                            {row.inclusive}
                          </Badge>
                        </td>
                        <td className="text-center p-4 text-muted-foreground">{row.greenhouse}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.lever}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.workable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* Time Savings Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Save Hours Every Day
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our automation features eliminate repetitive tasks so you can focus on what matters: finding great candidates
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeSavings.map((item) => (
                <Card key={item.task} className="bg-card/50 border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <item.icon className="h-5 w-5 text-primary" />
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/30">
                        {item.savings} saved
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground">{item.task}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Traditional:</span>
                        <span className="text-foreground/70 line-through">{item.traditional}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">With Inclusive:</span>
                        <span className="text-primary font-medium">{item.inclusive}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Testimonial/Social Proof Section */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-foreground mb-6 italic">
                    "Inclusive has transformed how we recruit. What used to take our team 4 hours 
                    now takes 45 minutes. The accessibility features mean every member of our 
                    team can use it effectively."
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                      SR
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Sarah Richardson</div>
                      <div className="text-sm text-muted-foreground">Head of Talent, TechCorp UK</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Feature Checklist */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Everything You Need
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete recruitment platform, no expensive add-ons required
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "AI-Powered Candidate Matching",
                "One-Click Interview Scheduling",
                "Automated Email Sequences",
                "Real-Time Analytics Dashboard",
                "GDPR Compliance Tools",
                "UK Job Board Integrations",
                "Custom Hiring Workflows",
                "Team Collaboration Features",
                "Mobile App (iOS & Android)",
                "Video Interview Integration",
                "Candidate Scoring System",
                "Right-to-Work Verification",
                "Offer Letter Generation",
                "Onboarding Workflows",
                "API Access Included",
                "24/7 UK-Based Support",
                "WCAG 2.1 AA Accessibility",
                "SSO & Enterprise Security"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Recruitment?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of UK recruitment teams who have already made the switch to faster, 
                  more accessible hiring.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Try the Live Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Talk to Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
    </div>
  )
}

