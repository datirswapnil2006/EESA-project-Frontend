"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Mail, Linkedin, Github, MapPin, Filter } from "lucide-react"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Lead",
      department: "Engineering",
      bio: "Full-stack developer passionate about scalable systems",
      avatar: "/professional-woman-diverse.png",
      email: "sarah@eesa.com",
      linkedin: "linkedin.com/in/sarah",
      github: "github.com/sarah",
      location: "San Francisco, CA",
      joinDate: "2022",
      projects: 5,
      achievements: 12,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Designer",
      department: "Design",
      bio: "UX/UI designer focused on user-centered design",
      avatar: "/professional-man.jpg",
      email: "michael@eesa.com",
      linkedin: "linkedin.com/in/michael",
      github: "github.com/michael",
      location: "New York, NY",
      joinDate: "2023",
      projects: 3,
      achievements: 8,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Mentor",
      department: "Education",
      bio: "Experienced mentor helping junior developers grow",
      avatar: "/professional-woman-diverse.png",
      email: "emily@eesa.com",
      linkedin: "linkedin.com/in/emily",
      github: "github.com/emily",
      location: "Austin, TX",
      joinDate: "2021",
      projects: 8,
      achievements: 20,
    },
    {
      id: 4,
      name: "David Park",
      role: "Developer",
      department: "Engineering",
      bio: "Backend specialist with expertise in cloud infrastructure",
      avatar: "/professional-man.jpg",
      email: "david@eesa.com",
      linkedin: "linkedin.com/in/david",
      github: "github.com/david",
      location: "Seattle, WA",
      joinDate: "2023",
      projects: 4,
      achievements: 10,
    },
    {
      id: 5,
      name: "Jessica Lee",
      role: "Project Lead",
      department: "Engineering",
      bio: "AI/ML specialist driving innovation in our projects",
      avatar: "/professional-woman-diverse.png",
      email: "jessica@eesa.com",
      linkedin: "linkedin.com/in/jessica",
      github: "github.com/jessica",
      location: "Boston, MA",
      joinDate: "2022",
      projects: 6,
      achievements: 15,
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Developer",
      department: "Engineering",
      bio: "Frontend developer passionate about modern web technologies",
      avatar: "/professional-man.jpg",
      email: "alex@eesa.com",
      linkedin: "linkedin.com/in/alex",
      github: "github.com/alex",
      location: "Portland, OR",
      joinDate: "2023",
      projects: 3,
      achievements: 7,
    },
  ]

  const roles = ["all", "Project Lead", "Developer", "Designer", "Mentor"]

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === "all" || member.role === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Members Directory</h1>
            <p className="text-muted-foreground mt-1">Connect with {members.length} community members</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search members by name or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground text-sm transition-smooth hover:bg-muted/80"
              >
                {roles.map((role) => (
                  <option key={role} value={role} className="bg-card text-foreground">
                    {role === "all" ? "All Roles" : role}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {filteredMembers.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member, i) => (
              <Link key={member.id} href={`/members/${member.id}`}>
                <Card
                  className="border-border bg-card p-6 hover-lift transition-smooth cursor-pointer group h-full animate-scale-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Avatar */}
                  <div className="mb-4">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-40 object-cover rounded-lg mb-4 group-hover:shadow-lg transition-smooth"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-smooth">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">{member.department}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 py-3 border-t border-b border-border">
                    <div className="text-center flex-1">
                      <p className="text-lg font-bold text-foreground">{member.projects}</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-lg font-bold text-foreground">{member.achievements}</p>
                      <p className="text-xs text-muted-foreground">Achievements</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-smooth">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-smooth">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-smooth">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">No members found matching your search.</p>
          </Card>
        )}
      </div>
    </div>
  )
}
