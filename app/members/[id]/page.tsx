// app/members/[id]/page.tsx

import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Mail, Linkedin, Github, MapPin, Award, Code, Calendar, MessageSquare } from "lucide-react"

import { allMembers, Member } from "../data/members-data"


export default function MemberDetailPage({ params }: { params: { id: string } }) {

  const member = allMembers.find((m: Member) => String(m.id) === String(params.id)) // FIXED MATCH

  if (!member) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">

      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <Link href="/members">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Members
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">

        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Avatar */}
            <img
              src={member.avatar}
              alt={member.name}
              className="w-40 h-40 rounded-lg object-cover shadow-lg"
            />

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold">{member.name}</h1>
              <p className="text-xl text-accent">{member.role}</p>
              <p className="text-muted-foreground">{member.department}</p>

              <p className="mt-4 text-muted-foreground">{member.bio}</p>

              <div className="flex flex-wrap gap-4 mt-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {member.location}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Joined {member.joinDate}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button>
                  <Mail className="h-4 w-4 mr-2" /> Contact
                </Button>
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" /> Message
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-4">
              <Card className="p-4 bg-muted/50 text-center">
                <p className="text-2xl font-bold">{member.projects}</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </Card>

              <Card className="p-4 bg-muted/50 text-center">
                <p className="text-2xl font-bold">{member.achievements}</p>
                <p className="text-sm text-muted-foreground">Achievements</p>
              </Card>
            </div>

          </div>
        </Card>

        {/* Skills */}
        {member.skills && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {member.projects_list && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="space-y-3">
              {member.projects_list.map((project, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <Code className="h-5 w-5 text-accent" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {member.achievements_list && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {member.achievements_list.map((ach, index) => (
                <Card key={index} className="p-6 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold">{ach.count}</p>
                  <p className="text-sm text-muted-foreground">{ach.name}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
