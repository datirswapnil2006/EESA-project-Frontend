"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Calendar, User, ArrowRight, Filter } from "lucide-react"

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const announcements = [
    {
      id: 1,
      title: "New Project Submission Guidelines",
      excerpt: "Updated guidelines for submitting projects to the EESA portal. Please review the new requirements.",
      content:
        "We have updated our project submission guidelines to ensure quality and consistency across all submissions. Projects must now include documentation, a demo video, and at least 2 team members.",
      category: "Updates",
      author: "Admin",
      date: "2 hours ago",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      featured: true,
    },
    {
      id: 2,
      title: "Monthly Meetup - Next Friday at 3 PM",
      excerpt: "Join us for our monthly community meetup. Light refreshments will be provided.",
      content:
        "Our monthly meetup is coming up next Friday at 3 PM in the main conference room. We'll be discussing recent projects, sharing updates, and networking with fellow members. RSVP by Thursday.",
      category: "Events",
      author: "Events Team",
      date: "1 day ago",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      featured: true,
    },
    {
      id: 3,
      title: "Achievement Badges Now Available",
      excerpt: "Earn badges for completing milestones and contributing to the community.",
      content:
        "We're excited to announce the launch of our new achievement badge system. Members can now earn badges for various accomplishments including project completions, mentoring, and community contributions.",
      category: "Features",
      author: "Product Team",
      date: "3 days ago",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      featured: false,
    },
    {
      id: 4,
      title: "Workshop: Advanced Web Development",
      excerpt: "Learn advanced techniques in modern web development with industry experts.",
      content:
        "Join our upcoming workshop on advanced web development. Topics include performance optimization, security best practices, and modern frameworks. Limited seats available.",
      category: "Workshops",
      author: "Education Team",
      date: "5 days ago",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      featured: false,
    },
    {
      id: 5,
      title: "Member Spotlight: Jane Smith",
      excerpt: "Celebrating our member of the month and her amazing contributions.",
      content:
        "This month we're spotlighting Jane Smith, who has been instrumental in mentoring new members and leading the AI projects initiative. Her dedication and expertise have made a significant impact on our community.",
      category: "Community",
      author: "Community Manager",
      date: "1 week ago",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      featured: false,
    },
  ]

  const categories = ["all", "Updates", "Events", "Features", "Workshops", "Community"]

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || announcement.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
              <p className="text-muted-foreground mt-1">Stay updated with the latest news and events</p>
            </div>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out">
                <Plus className="h-4 w-4 mr-2" />
                New Announcement
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search announcements..."
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
                className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground text-sm transition-all duration-300 ease-in-out hover:bg-muted/80"
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
        {/* Featured Announcements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredAnnouncements
              .filter((a) => a.featured)
              .map((announcement, i) => (
                <Link key={announcement.id} href={`/announcements/${announcement.id}`}>
                  <Card
                    className="border-border bg-card p-8 hover-lift transition-all duration-300 ease-in-out cursor-pointer group h-full animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {announcement.category}
                      </span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-all duration-300 ease-in-out">
                      {announcement.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{announcement.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {announcement.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {announcement.date}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>

        {/* All Announcements */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">All Announcements</h2>
          <div className="space-y-4">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement, i) => (
                <Link key={announcement.id} href={`/announcements/${announcement.id}`}>
                  <Card
                    className="border-border bg-card p-6 hover-lift transition-all duration-300 ease-in-out cursor-pointer group animate-slide-up"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {announcement.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{announcement.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-all duration-300 ease-in-out">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">{announcement.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {announcement.author}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 ease-in-out flex-shrink-0 ml-4" />
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <Card className="border-border bg-card p-12 text-center">
                <p className="text-muted-foreground">No announcements found matching your search.</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
