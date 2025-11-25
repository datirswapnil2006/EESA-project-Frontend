// member/[id]/page.tsx

import Link from "next/link"
import { notFound } from "next/navigation" // Import notFound utility
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Mail, Linkedin, Github, MapPin, Award, Code, Calendar, MessageSquare } from "lucide-react"
// 1. Import allMembers
import { allMembers, Member } from "../data/members-data" // Adjusted path for detail page

// The component is an async server component to find the member
export default function MemberDetailPage({ params }: { params: { id: string } }) {
  // 2. Find the member based on the ID from the route params
  const member = allMembers.find((m: Member) => m.id === params.id)

  // 3. Handle case where member is not found (e.g., if ID is invalid)
  if (!member) {
    notFound() // Next.js utility to show a 404 page
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/members">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Members
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in">
          {/* Profile Header */}
          <Card className="border-border bg-card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-40 h-40 rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-2">{member.name}</h1>
                <p className="text-xl text-accent font-semibold mb-1">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.department}</p>
                <p className="text-muted-foreground mb-6 max-w-2xl">{member.bio}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Joined {member.joinDate}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" className="bg-transparent text-muted-foreground transition-smooth">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                <Card className="border-border bg-muted/50 p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{member.projects}</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </Card>
                <Card className="border-border bg-muted/50 p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{member.achievements}</p>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                </Card>
              </div>
            </div>
          </Card>

          {/* Skills */}
          {member.skills && member.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {member.projects_list && member.projects_list.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Featured Projects</h2>
              <div className="space-y-3">
                {member.projects_list.map((project, i) => (
                  <Card key={i} className="border-border bg-card p-4 hover-lift transition-smooth">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.role}</p>
                      </div>
                      <Code className="h-5 w-5 text-accent flex-shrink-0" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {member.achievements_list && member.achievements_list.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Achievements</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {member.achievements_list.map((achievement, i) => (
                  <Card key={i} className="border-border bg-card p-6 text-center hover-lift transition-smooth">
                    <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground">{achievement.count}</p>
                    <p className="text-sm text-muted-foreground">{achievement.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Connect</h2>
            <div className="flex gap-3">
              <a
                href={`mailto:${member.email}`}
                className="p-3 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`https://${member.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`https://${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}