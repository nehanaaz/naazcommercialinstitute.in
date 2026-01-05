"use client";

import { Button } from "@/components/ui/button";
import { Home, Heart } from "lucide-react";
import siteConfig from "@/constants/site.json";

export default function NotFound() {
  return (
    <div className="from-background via-muted/20 to-background flex min-h-screen items-center justify-center bg-gradient-to-b px-6 py-24">
      <div className="w-full max-w-4xl text-center">
        {/* Illustration */}
        <div className="relative mb-12">
          <div className="relative inline-block">
            {/* 404 Number */}
            <h1 className="text-primary/10 font-serif text-[12rem] leading-none font-bold select-none sm:text-[16rem] lg:text-[20rem]">
              404
            </h1>
          </div>
        </div>

        {/* Humorous Copy */}
        <div className="mb-12 space-y-6">
          <h2 className="text-foreground font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            This Page Took a Break
          </h2>
          <p className="text-muted-foreground/80 mx-auto max-w-xl text-base leading-relaxed sm:text-lg">
            While this page is missing, our mission to transform lives through
            education never goes out of service.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-[200px] gap-2 rounded-full"
          >
            <a href="/">
              <Home className="h-5 w-5" />
              Back to Home
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[200px] gap-2 rounded-full bg-transparent"
          >
            <a href="/donate">
              <Heart className="h-5 w-5" />
              Support Us
            </a>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-border/50 border-t pt-12">
          <p className="text-muted-foreground mb-6 text-sm font-medium tracking-widest uppercase">
            Maybe you were looking for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {siteConfig.quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary link-underline text-base transition-colors"
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
  );
}
