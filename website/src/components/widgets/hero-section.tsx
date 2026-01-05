"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ArrowRight,
  Users,
  GraduationCap,
  Award,
  Play,
} from "lucide-react";
import { Image } from "@/components/ui/image";

const stats = [
  { icon: Users, value: "50,000+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "15,000+", label: "Students Trained" },
  { icon: Award, value: "14+", label: "Years of Service" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="from-background via-background to-secondary/30 absolute inset-0 bg-gradient-to-br"
        aria-hidden="true"
      >
        <div
          className="bg-primary/5 absolute top-1/4 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full blur-3xl"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="bg-accent/5 absolute bottom-1/4 left-1/4 h-[600px] w-[600px] animate-pulse rounded-full blur-3xl"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <div
              className={`bg-primary/10 text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-700`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Trusted NGO Since 2010
            </div>

            <h1
              id="hero-heading"
              className={`text-foreground font-serif text-4xl leading-tight font-normal tracking-tight transition-all delay-100 duration-700 sm:text-5xl lg:text-6xl xl:text-7xl`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              <span className="block">Empowering</span>
              <span className="relative mt-2 inline-block">
                <span className="text-primary">Communities</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/30"
                  />
                </svg>
              </span>{" "}
              <span className="mt-2 block">Through Education</span>
            </h1>

            <p
              className={`text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed transition-all delay-200 duration-700 lg:mx-0 lg:text-xl`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              Transforming lives through quality education, vocational training,
              and sustainable community development programs across India.
            </p>

            <div
              className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all delay-300 duration-700 sm:flex-row lg:justify-start`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              <a href="/donate">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20 hover:shadow-accent/30 h-14 gap-2 px-8 text-base shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
                  className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background h-14 gap-2 border-2 bg-transparent text-base transition-all duration-300"
                >
                  Explore Our Work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>

            <div
              className={`mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 transition-all delay-400 duration-700 lg:justify-start`}
              style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
            >
              {[
                "100% Tax Exempt",
                "Transparent Operations",
                "NITI Aayog Registered",
              ].map((badge, index) => (
                <div
                  key={badge}
                  className="text-muted-foreground flex items-center gap-2 text-sm"
                >
                  <div className="bg-primary/10 flex h-5 w-5 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
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
            className={`relative transition-all delay-200 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="shadow-foreground/10 relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  alt="Children learning at Naaz Commercial Institute"
                  className="aspect-[4/5] h-auto w-full object-cover lg:aspect-square"
                  width={600}
                  height={600}
                />
                {/* Gradient overlay */}
                <div
                  className="from-foreground/60 via-foreground/0 absolute inset-0 bg-gradient-to-t to-transparent"
                  aria-hidden="true"
                />

                {/* Play button overlay */}
                <button
                  className="group absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                  aria-label="Play video about our mission"
                >
                  <Play className="text-primary ml-1 h-8 w-8" />
                </button>
              </div>

              <div className="absolute right-4 -bottom-6 left-4 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card/95 border-border/50 rounded-2xl border p-4 text-center shadow-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                    style={{
                      transitionTimingFunction: "var(--ease-spring)",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <stat.icon
                      className="text-primary mx-auto mb-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <p className="text-foreground font-serif text-xl lg:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground mt-1 text-[10px] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div
                className="bg-accent/20 absolute -top-4 -right-4 h-24 w-24 rounded-full blur-2xl"
                aria-hidden="true"
              />
              <div
                className="bg-primary/20 absolute -bottom-4 -left-4 h-32 w-32 rounded-full blur-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
