"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar, Users, Zap, BookOpen, Trophy, Code } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold shadow-md">
                E
              </div>
              <span className="text-xl font-bold text-foreground">EESA Portal</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
              >
                Features
              </Link>
              <Link
                href="#modules"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
              >
                Modules
              </Link>
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
              >
                Login
              </Link>
            </div>
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-2 animate-fade-in">
            <span className="text-sm font-medium text-accent">Welcome to EESA</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl animate-slide-up">
            Your Digital Hub for <span className="gradient-text">Innovation</span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Centralized platform for announcements, projects, achievements, and community engagement
          </p>
          <div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out hover-lift"
              >
                Explore Portal <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent transition-all duration-300 ease-in-out hover-lift"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need to stay connected</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Real-time Updates",
                desc: "Get instant notifications about announcements and events",
              },
              { icon: Users, title: "Member Directory", desc: "Connect with peers and explore member profiles" },
              { icon: Trophy, title: "Achievements", desc: "Showcase your accomplishments and celebrate wins" },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-border bg-card p-8 hover-lift animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <feature.icon className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Core Modules</h2>
            <p className="text-lg text-muted-foreground">Explore all available features</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, title: "Announcements", href: "/announcements", color: "text-blue-500" },
              { icon: Users, title: "Members", href: "/members", color: "text-teal-500" },
              { icon: Code, title: "Projects", href: "/projects", color: "text-purple-500" },
              { icon: Trophy, title: "Achievements", href: "/achievements", color: "text-amber-500" },
              { icon: Calendar, title: "Events", href: "/events", color: "text-rose-500" },
              { icon: Zap, title: "Dashboard", href: "/dashboard", color: "text-green-500" },
            ].map((module, i) => (
              <Link key={i} href={module.href}>
                <Card
                  className="border-border bg-card p-8 hover-lift transition-all duration-300 ease-in-out cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <module.icon
                    className={`mb-4 h-8 w-8 ${module.color} group-hover:scale-110 transition-all duration-300 ease-in-out`}
                  />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-all duration-300 ease-in-out">
                    {module.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Explore {module.title.toLowerCase()}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Ready to Join?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">Sign up now and become part of the EESA community</p>
          <Link href="/login">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 ease-in-out hover-lift"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-foreground">EESA Portal</h3>
              <p className="text-sm text-muted-foreground">Connecting students and faculty</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Modules</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/announcements" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Members
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-all duration-300 ease-in-out">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 EESA Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
