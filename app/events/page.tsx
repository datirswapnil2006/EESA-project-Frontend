"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react"

export default function EventsPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 22))
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "Monthly Meetup",
      description: "Join us for our monthly community meetup and networking session.",
      date: new Date(2025, 9, 24),
      time: "3:00 PM - 5:00 PM",
      location: "Main Conference Room",
      category: "Meetup",
      attendees: 45,
      capacity: 100,
      featured: true,
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "Learn advanced techniques in modern web development.",
      date: new Date(2025, 9, 28),
      time: "6:00 PM - 8:00 PM",
      location: "Tech Lab",
      category: "Workshop",
      attendees: 32,
      capacity: 50,
      featured: true,
    },
    {
      id: 3,
      title: "Project Showcase",
      description: "Members present their latest projects and innovations.",
      date: new Date(2025, 10, 5),
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium",
      category: "Showcase",
      attendees: 60,
      capacity: 150,
      featured: false,
    },
    {
      id: 4,
      title: "AI/ML Discussion Panel",
      description: "Expert panel discussing the future of AI and machine learning.",
      date: new Date(2025, 10, 12),
      time: "7:00 PM - 9:00 PM",
      location: "Virtual",
      category: "Panel",
      attendees: 28,
      capacity: 200,
      featured: false,
    },
    {
      id: 5,
      title: "Design Thinking Workshop",
      description: "Hands-on workshop on design thinking and user research.",
      date: new Date(2025, 10, 15),
      time: "10:00 AM - 12:00 PM",
      location: "Design Studio",
      category: "Workshop",
      attendees: 25,
      capacity: 40,
      featured: false,
    },
    {
      id: 6,
      title: "Networking Lunch",
      description: "Casual networking lunch for community members.",
      date: new Date(2025, 10, 20),
      time: "12:00 PM - 1:30 PM",
      location: "Cafeteria",
      category: "Social",
      attendees: 50,
      capacity: 80,
      featured: false,
    },
  ]

  const categories = ["all", "Meetup", "Workshop", "Showcase", "Panel", "Social"]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthDays = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: monthDays }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const getEventsForDate = (day: number) => {
    return events.filter(
      (event) =>
        event.date.getDate() === day &&
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear(),
    )
  }

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

  const upcomingEvents = filteredEvents.sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Events</h1>
              <p className="text-muted-foreground mt-1">Discover upcoming community events</p>
            </div>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground text-sm transition-smooth hover:bg-muted/80"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-card text-foreground">
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card p-6 sticky top-24">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-foreground">{monthName}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    className="p-2 hover:bg-muted rounded-lg transition-smooth"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    className="p-2 hover:bg-muted rounded-lg transition-smooth"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-xs font-semibold text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {emptyDays.map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square"></div>
                ))}
                {days.map((day) => {
                  const dayEvents = getEventsForDate(day)
                  const isToday =
                    day === new Date().getDate() &&
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear()

                  return (
                    <button
                      key={day}
                      className={`aspect-square rounded-lg text-sm font-medium transition-smooth ${
                        isToday
                          ? "bg-accent text-accent-foreground"
                          : dayEvents.length > 0
                            ? "bg-primary/20 text-foreground hover:bg-primary/30"
                            : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <span>{day}</span>
                        {dayEvents.length > 0 && <span className="text-xs mt-1">•</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            {upcomingEvents.length > 0 ? (
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <Link key={event.id} href={`/events/${event.id}`}>
                    <Card
                      className="border-border bg-card p-6 hover-lift transition-smooth cursor-pointer group animate-slide-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                              {event.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-smooth">
                            {event.title}
                          </h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-smooth flex-shrink-0" />
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {event.date.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {event.attendees}/{event.capacity}
                        </div>
                      </div>

                      {/* Attendance Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full transition-all"
                          style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="border-border bg-card p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No events found matching your search.</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
