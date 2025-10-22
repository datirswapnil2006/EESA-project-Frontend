"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Plus, Trophy, Users, Filter, Award } from "lucide-react"

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const achievements = [
    {
      id: 1,
      title: "Project Master",
      description: "Completed 5 or more projects",
      icon: Trophy,
      category: "Projects",
      earnedBy: 12,
      rarity: "rare",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: 2,
      title: "Code Reviewer",
      description: "Reviewed 50+ pull requests",
      icon: Award,
      category: "Contributions",
      earnedBy: 8,
      rarity: "epic",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 3,
      title: "Mentor",
      description: "Mentored 10+ junior developers",
      icon: Users,
      category: "Community",
      earnedBy: 5,
      rarity: "legendary",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      id: 4,
      title: "First Project",
      description: "Completed your first project",
      icon: Trophy,
      category: "Projects",
      earnedBy: 24,
      rarity: "common",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 5,
      title: "Team Player",
      description: "Collaborated on 5+ team projects",
      icon: Users,
      category: "Collaboration",
      earnedBy: 18,
      rarity: "uncommon",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      id: 6,
      title: "Innovation Leader",
      description: "Led a project with innovative technology",
      icon: Award,
      category: "Innovation",
      earnedBy: 7,
      rarity: "epic",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      id: 7,
      title: "Community Champion",
      description: "Active in community for 1+ year",
      icon: Trophy,
      category: "Community",
      earnedBy: 9,
      rarity: "rare",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      id: 8,
      title: "Documentation Expert",
      description: "Created comprehensive project documentation",
      icon: Award,
      category: "Documentation",
      earnedBy: 6,
      rarity: "uncommon",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
  ]

  const categories = ["all", "Projects", "Contributions", "Community", "Collaboration", "Innovation", "Documentation"]

  const filteredAchievements = achievements.filter((achievement) => {
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || achievement.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Achievements</h1>
              <p className="text-muted-foreground mt-1">Earn badges for your accomplishments</p>
            </div>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                <Plus className="h-4 w-4 mr-2" />
                View My Badges
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search achievements..."
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
        {filteredAchievements.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredAchievements.map((achievement, i) => (
              <Card
                key={achievement.id}
                className={`border-border bg-card p-6 hover-lift transition-smooth cursor-pointer group text-center h-full animate-scale-in ${achievement.bgColor}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex justify-center mb-4">
                  <achievement.icon className={`h-12 w-12 ${achievement.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="capitalize">{achievement.rarity}</span>
                  <span>{achievement.earnedBy} earned</span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-border bg-card p-12 text-center">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No achievements found matching your search.</p>
          </Card>
        )}
      </div>
    </div>
  )
}
