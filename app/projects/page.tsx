"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Plus, Users, Star, ArrowRight, Filter, Code } from "lucide-react"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      status: "completed",
      category: "Web Development",
      team: ["Sarah Johnson", "Michael Chen", "David Park"],
      teamSize: 3,
      rating: 4.8,
      reviews: 24,
      image: "/ecommerce-platform-concept.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      featured: true,
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking user behavior and metrics.",
      status: "in-progress",
      category: "Data Visualization",
      team: ["Emily Rodriguez", "Alex Thompson"],
      teamSize: 2,
      rating: 4.5,
      reviews: 18,
      image: "/analytics-dashboard.png",
      technologies: ["React", "D3.js", "Firebase"],
      featured: true,
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application for community engagement.",
      status: "in-progress",
      category: "Mobile Development",
      team: ["Jessica Lee", "David Park", "Sarah Johnson"],
      teamSize: 3,
      rating: 4.6,
      reviews: 15,
      image: "/mobile-app-showcase.png",
      technologies: ["React Native", "Firebase", "Redux"],
      featured: false,
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Machine learning model for generating creative content.",
      status: "completed",
      category: "AI/ML",
      team: ["Jessica Lee", "Michael Chen"],
      teamSize: 2,
      rating: 4.9,
      reviews: 32,
      image: "/ai-content-generator.png",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      featured: false,
    },
    {
      id: 5,
      title: "Community Forum",
      description: "Discussion platform for community members to share ideas and collaborate.",
      status: "completed",
      category: "Web Development",
      team: ["Alex Thompson", "Emily Rodriguez"],
      teamSize: 2,
      rating: 4.4,
      reviews: 12,
      image: "/community-forum.png",
      technologies: ["Next.js", "MongoDB", "Socket.io"],
      featured: false,
    },
    {
      id: 6,
      title: "Design System",
      description: "Comprehensive design system and component library for consistent UI.",
      status: "in-progress",
      category: "Design",
      team: ["Michael Chen", "Sarah Johnson"],
      teamSize: 2,
      rating: 4.7,
      reviews: 20,
      image: "/design-system-abstract.png",
      technologies: ["Figma", "React", "Storybook"],
      featured: false,
    },
  ]

  const statuses = ["all", "completed", "in-progress"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const otherProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Projects</h1>
              <p className="text-muted-foreground mt-1">Explore {projects.length} amazing projects</p>
            </div>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground text-sm transition-smooth hover:bg-muted/80"
              >
                {statuses.map((status) => (
                  <option key={status} value={status} className="bg-card text-foreground">
                    {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, i) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <Card
                    className="border-border bg-card overflow-hidden hover-lift transition-smooth cursor-pointer group h-full animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            project.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-accent">
                          <Star className="h-4 w-4 fill-current" />
                          {project.rating}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {project.teamSize} members
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{project.category}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-smooth" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {featuredProjects.length > 0 ? "All Projects" : "Projects"}
          </h2>
          {otherProjects.length > 0 || (featuredProjects.length === 0 && filteredProjects.length > 0) ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(featuredProjects.length > 0 ? otherProjects : filteredProjects).map((project, i) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <Card
                    className="border-border bg-card overflow-hidden hover-lift transition-smooth cursor-pointer group h-full animate-scale-in"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="relative overflow-hidden h-40">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-smooth line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex items-center gap-3 mb-3 text-xs">
                        <div className="flex items-center gap-1 text-accent">
                          <Star className="h-3 w-3 fill-current" />
                          {project.rating}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {project.teamSize}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{project.category}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="border-border bg-card p-12 text-center">
              <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No projects found matching your search.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
