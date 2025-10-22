"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const passwordStrength = formData.password.length >= 8 ? "strong" : formData.password.length >= 4 ? "medium" : "weak"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard
      window.location.href = "/dashboard"
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold shadow-lg mb-4">
            E
          </div>
          <h1 className="text-3xl font-bold text-foreground">EESA Portal</h1>
          <p className="text-muted-foreground mt-2">Create your account</p>
        </div>

        {/* Signup Form */}
        <Card className="border-border bg-card p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="flex gap-1 mt-2">
                <div
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    passwordStrength === "weak"
                      ? "bg-red-500"
                      : passwordStrength === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }`}
                ></div>
                <div
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    passwordStrength === "weak"
                      ? "bg-muted"
                      : passwordStrength === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }`}
                ></div>
                <div
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    passwordStrength === "strong" ? "bg-green-500" : "bg-muted"
                  }`}
                ></div>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <Check className="h-4 w-4" />
                  Passwords match
                </div>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
              <input
                id="terms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="h-4 w-4 rounded border-border bg-muted cursor-pointer mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the{" "}
                <Link href="#" className="text-accent hover:text-accent/80 transition-all duration-300 ease-in-out">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-accent hover:text-accent/80 transition-all duration-300 ease-in-out">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !formData.agreeToTerms}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 ease-in-out hover-lift disabled:opacity-50"
            >
              {isLoading ? "Creating account..." : "Create Account"}
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-accent hover:text-accent/80 font-semibold transition-all duration-300 ease-in-out"
            >
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
