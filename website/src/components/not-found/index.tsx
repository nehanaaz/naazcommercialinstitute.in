"use client"

import { Button } from "@/components/ui/button"
import { Home, Heart } from "lucide-react"
import siteConfig from "@/constants/site.json"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-4xl w-full text-center">
        {/* Illustration */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            {/* 404 Number */}
            <h1 className="font-serif text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold leading-none text-primary/10 select-none">
              404
            </h1>
          </div>
        </div>

        {/* Humorous Copy */}
        <div className="space-y-6 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            This Page Took a Break
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
            While this page is missing, our mission to transform lives through education never goes out of service.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="rounded-full gap-2 min-w-[200px]">
            <a href="/">
              <Home className="w-5 h-5" />
              Back to Home
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 min-w-[200px] bg-transparent">
            <a href="/donate">
              <Heart className="w-5 h-5" />
              Support Us
            </a>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-border/50 pt-12">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">
            Maybe you were looking for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {siteConfig.quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Wiggle animation for magnifying glass */}
      <style>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
      `}</style>
    </div>
  )
}
