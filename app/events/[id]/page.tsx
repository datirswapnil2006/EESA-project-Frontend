"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, Heart, CheckCircle } from "lucide-react"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = React.use(params)
  const id = resolvedParams.id

  const [isAttending, setIsAttending] = React.useState(false)
  const [liked, setLiked] = React.useState(false)

  // Mock data - in a real app, fetch based on id
  const event = {
    id,
    title: "Monthly Meetup",
    description: "Join us for our monthly community meetup and networking session.",
    fullDescription: `Our monthly meetup is a great opportunity to connect with fellow community members, share updates on projects, and discuss new ideas.

This month we'll be covering:
- Recent project updates and achievements
- Networking and collaboration opportunities
- Q&A session with project leads
- Light refreshments provided

Whether you're a seasoned member or new to the community, everyone is welcome!`,
    date: new Date(2025, 9, 24),
    time: "3:00 PM - 5:00 PM",
    location: "Main Conference Room",
    address: "123 Tech Street, San Francisco, CA 94105",
    category: "Meetup",
    attendees: 45,
    capacity: 100,
    speakers: ["Sarah Johnson", "Michael Chen"],
    agenda: [
      { time: "3:00 PM", title: "Welcome & Introductions", duration: "15 min" },
      { time: "3:15 PM", title: "Project Updates", duration: "30 min" },
      { time: "3:45 PM", title: "Networking Break", duration: "15 min" },
      { time: "4:00 PM", title: "Q&A Session", duration: "45 min" },
      { time: "4:45 PM", title: "Closing Remarks", duration: "15 min" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/events">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <article className="animate-fade-in">
          {/* Event Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {event.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{event.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{event.description}</p>

            {/* Event Details Grid */}
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <Card className="border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold text-foreground">{event.date.toLocaleDateString()}</p>
                  </div>
                </div>
              </Card>
              <Card className="border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold text-foreground">{event.time}</p>
                  </div>
                </div>
              </Card>
              <Card className="border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{event.location}</p>
                  </div>
                </div>
              </Card>
              <Card className="border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Attendees</p>
                    <p className="font-semibold text-foreground">
                      {event.attendees}/{event.capacity}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <Button
                onClick={() => setIsAttending(!isAttending)}
                className={`transition-smooth ${
                  isAttending
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {isAttending && <CheckCircle className="h-4 w-4 mr-2" />}
                {isAttending ? "Attending" : "RSVP"}
              </Button>
              <Button
                onClick={() => setLiked(!liked)}
                variant="outline"
                className={`transition-smooth ${
                  liked ? "bg-accent/10 text-accent border-accent" : "bg-transparent text-muted-foreground"
                }`}
              >
                <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
                {liked ? "Liked" : "Like"}
              </Button>
              <Button variant="outline" className="bg-transparent text-muted-foreground transition-smooth">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Attendance */}
          <Card className="border-border bg-card p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Attendance</h2>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  {event.attendees} of {event.capacity} spots filled
                </span>
                <span className="text-sm font-semibold text-accent">
                  {Math.round((event.attendees / event.capacity) * 100)}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="bg-accent h-3 rounded-full transition-all"
                  style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
          </Card>

          {/* Description */}
          <Card className="border-border bg-card p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
            <div className="prose prose-invert max-w-none">
              {event.fullDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Agenda */}
          <Card className="border-border bg-card p-6 mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Agenda</h2>
            <div className="space-y-3">
              {event.agenda.map((item, i) => (
                <div key={i} className="flex gap-4 pb-3 border-b border-border last:border-0">
                  <div className="flex-shrink-0">
                    <p className="font-semibold text-accent">{item.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Speakers */}
          <Card className="border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Speakers</h2>
            <div className="space-y-3">
              {event.speakers.map((speaker) => (
                <div key={speaker} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-semibold text-foreground">{speaker}</p>
                </div>
              ))}
            </div>
          </Card>
        </article>
      </div>
    </div>
  )
}
