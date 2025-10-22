"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react"
import { useState } from "react"

export default function AnnouncementDetailPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)

  // Mock data - in a real app, fetch based on params.id
  const announcement = {
    id: params.id,
    title: "New Project Submission Guidelines",
    category: "Updates",
    author: "Admin",
    date: "2 hours ago",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    content: `We have updated our project submission guidelines to ensure quality and consistency across all submissions. 

Projects must now include:
- Comprehensive documentation
- A demo video (2-5 minutes)
- At least 2 team members
- Clear project objectives and outcomes
- Technical architecture overview

These changes are effective immediately for all new submissions. Existing projects will have 30 days to update their documentation.

Key Benefits:
- Improved project quality and consistency
- Better documentation for future reference
- Enhanced collaboration opportunities
- Clearer evaluation criteria

If you have any questions about the new guidelines, please reach out to the project management team.`,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/announcements">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Announcements
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <article className="animate-fade-in">
          {/* Meta Information */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {announcement.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{announcement.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{announcement.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{announcement.date}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <Card className="border-border bg-card p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              {announcement.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <div className="flex items-center gap-4">
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

          {/* Related Announcements */}
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Announcements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((i) => (
                <Card key={i} className="border-border bg-card p-6 hover-lift transition-smooth cursor-pointer group">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">Updates</span>
                  <h3 className="text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-accent transition-smooth">
                    Related Announcement {i}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Check out this related announcement for more information.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
