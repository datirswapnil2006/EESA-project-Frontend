// app/members/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Mail, Linkedin, Github, MapPin, Filter } from "lucide-react"

import { allMembers, allRoles } from "./data/members-data"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const filteredMembers = allMembers.filter((member) => {
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      member.name.toLowerCase().includes(q) ||
      member.bio.toLowerCase().includes(q) ||
      member.department.toLowerCase().includes(q)

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
            <p className="text-muted-foreground mt-1">
              Connect with {allMembers.length} community members
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                value={searchQuery}
                placeholder="Search members..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground text-sm"
              >
                {allRoles.map((role) => (
                  <option key={role} value={role}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filteredMembers.map((member, i) => (
              <Link key={member.id} href={`/members/${member.id}`}>
                <Card
                  className="border-border bg-card p-6 hover-lift transition-smooth cursor-pointer group h-full animate-scale-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Avatar */}
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:shadow-lg transition-smooth"
                  />

                  {/* Info */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{member.department}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 my-4 py-3 border-y border-border">
                    <div className="text-center flex-1">
                      <p className="text-lg font-bold">{member.projects}</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-lg font-bold">{member.achievements}</p>
                      <p className="text-xs text-muted-foreground">Achievements</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </div>

                  {/* Socials */}
                  <div className="flex items-center gap-2">
                    <Mail className="p-2 rounded-lg bg-muted h-4 w-4" />
                    <Linkedin className="p-2 rounded-lg bg-muted h-4 w-4" />
                    <Github className="p-2 rounded-lg bg-muted h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center bg-card border-border">
            <p className="text-muted-foreground">No members found.</p>
          </Card>
        )}
      </div>
    </div>
  )
}
