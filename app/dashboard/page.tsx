"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  BarChart3,
  Users,
  Calendar,
  BookOpen,
  Trophy,
  Code,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
} from "lucide-react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { label: "Total Members", value: "1,234", icon: Users, color: "text-blue-500" },
    { label: "Active Events", value: "8", icon: Calendar, color: "text-teal-500" },
    { label: "Projects", value: "42", icon: Code, color: "text-purple-500" },
    { label: "Achievements", value: "156", icon: Trophy, color: "text-amber-500" },
  ]

  const recentAnnouncements = [
    {
      id: 1,
      title: "New Project Submission Guidelines",
      date: "2 hours ago",
      category: "Updates",
    },
    {
      id: 2,
      title: "Monthly Meetup - Next Friday",
      date: "1 day ago",
      category: "Events",
    },
    {
      id: 3,
      title: "Achievement Badges Now Available",
      date: "3 days ago",
      category: "Features",
    },
  ]

  const quickActions = [
    { icon: BookOpen, label: "Announcements", href: "/announcements", color: "bg-blue-500/10" },
    { icon: Users, label: "Members", href: "/members", color: "bg-teal-500/10" },
    { icon: Code, label: "Projects", href: "/projects", color: "bg-purple-500/10" },
    { icon: Trophy, label: "Achievements", href: "/achievements", color: "bg-amber-500/10" },
    { icon: Calendar, label: "Events", href: "/events", color: "bg-rose-500/10" },
    { icon: BarChart3, label: "Analytics", href: "/analytics", color: "bg-green-500/10" },
  ]

  const navigationItems = [
    { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: true },
    { icon: BookOpen, label: "Announcements", href: "/announcements" },
    { icon: Users, label: "Members", href: "/members" },
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Trophy, label: "Achievements", href: "/achievements" },
    { icon: Calendar, label: "Events", href: "/events" },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } border-r border-border bg-card transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && <span className="text-xl font-bold text-foreground">EESA</span>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-in-out"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </div>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 ease-in-out">
            <Settings className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Settings</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 ease-in-out">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back to EESA Portal</p>
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-in-out relative">
            <Bell className="h-6 w-6 text-muted-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full"></span>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Card
                key={i}
                className="border-border bg-card p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-accent">
                  <TrendingUp className="h-4 w-4" />
                  <span>+12% from last month</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Quick Access</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quickActions.map((action, i) => (
                <Link key={i} href={action.href}>
                  <Card
                    className={`border-border ${action.color} p-6 hover-lift transition-all duration-300 ease-in-out cursor-pointer group animate-scale-in`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <action.icon className="h-8 w-8 text-accent mb-2" />
                        <p className="font-semibold text-foreground group-hover:text-accent transition-all duration-300 ease-in-out">
                          {action.label}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-4">Recent Announcements</h2>
              <div className="space-y-4">
                {recentAnnouncements.map((announcement, i) => (
                  <Card
                    key={announcement.id}
                    className="border-border bg-card p-6 hover-lift transition-all duration-300 ease-in-out animate-slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                            {announcement.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{announcement.title}</h3>
                        <p className="text-sm text-muted-foreground">{announcement.date}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    </div>
                  </Card>
                ))}
              </div>
              <Link href="/announcements">
                <Button
                  variant="outline"
                  className="w-full mt-4 transition-all duration-300 ease-in-out bg-transparent"
                >
                  View All Announcements
                </Button>
              </Link>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Upcoming Events</h2>
              <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Monthly Meetup</p>
                      <p className="text-sm text-muted-foreground">Friday, 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Project Showcase</p>
                      <p className="text-sm text-muted-foreground">Next Week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Workshop Series</p>
                      <p className="text-sm text-muted-foreground">Starting Next Month</p>
                    </div>
                  </div>
                </div>
                <Link href="/events">
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out">
                    View Calendar
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
