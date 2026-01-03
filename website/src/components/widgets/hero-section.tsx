"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ArrowRight, Users, GraduationCap, Award, Play } from "lucide-react"
import { Image } from "@/components/ui/image"

const stats = [
  { icon: Users, value: "50,000+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "15,000+", label: "Students Trained" },
  { icon: Award, value: "14+", label: "Years of Service" },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 transition-all duration-700`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Trusted NGO Since 2010
            </div>

            <h1
              id="hero-heading"
              className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-foreground leading-tight tracking-tight transition-all duration-700 delay-100`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              <span className="block">Empowering</span>
              <span className="relative inline-block mt-2">
                <span className="text-primary">Communities</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/30"
                  />
                </svg>
              </span>{" "}
              <span className="block mt-2">Through Education</span>
            </h1>

            <p
              className={`mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              Transforming lives through quality education, vocational training, and sustainable community development
              programs across India.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-700 delay-300`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              <a href="/donate">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 px-8 h-14 text-base shadow-xl shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                >
                  <Heart className="h-5 w-5" aria-hidden="true" />
                  Make a Donation
                </Button>
              </a>
              <a href="/what-we-do">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 h-14 text-base border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background bg-transparent transition-all duration-300"
                >
                  Explore Our Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>

            <div
              className={`mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 transition-all duration-700 delay-400`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              {["100% Tax Exempt", "Transparent Operations", "NITI Aayog Registered"].map((badge, index) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10">
                <Image
                  alt="Children learning at Naaz Commercial Institute"
                  className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                  width={600}
                  height={600}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent"
                  aria-hidden="true"
                />

                {/* Play button overlay */}
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                  aria-label="Play video about our mission"
                >
                  <Play className="h-8 w-8 text-primary ml-1" />
                </button>
              </div>

              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl text-center border border-border/50 hover:-translate-y-1 transition-transform duration-300"
                    style={{
                      transitionTimingFunction: "var(--ease-spring)",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" aria-hidden="true" />
                    <p className="font-serif text-xl lg:text-2xl text-foreground">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
