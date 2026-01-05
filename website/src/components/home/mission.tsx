"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Users,
  Sparkles,
  Target,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import donors from "@/constants/donors.json";

const pillars = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Industry-relevant curriculum designed for real-world success in accounting, computers, and business.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Programs co-created with local families, ensuring cultural relevance and maximum impact.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Lasting Change",
    description:
      "Every graduate becomes a catalyst, transforming their entire family's future trajectory.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Target,
    title: "Skill Development",
    description:
      "Practical training in digital literacy, accounting software, and professional communication.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    description:
      "Dedicated evening programs enabling women to gain financial independence and confidence.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Career Support",
    description:
      "Job placement assistance and entrepreneurship guidance for all graduates.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const values = [
  {
    number: "01",
    title: "Hope Through Education",
    description:
      "Providing quality education and life skills to empower rural youth.",
  },
  {
    number: "02",
    title: "Health & Awareness",
    description:
      "Promoting health, awareness, and well-being in underserved communities.",
  },
  {
    number: "03",
    title: "Women & Youth Empowerment",
    description:
      "Empowering women and youth with confidence, skills, and independence.",
  },
];

export default function HomeMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative overflow-hidden py-32 md:py-40"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="from-accent/30 absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l to-transparent" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
              Our Purpose
            </p>
            <h2
              id="mission-heading"
              className="text-foreground font-serif text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Education is the most powerful weapon to change the world
            </h2>
            <p className="text-muted-foreground mt-3 mb-6 leading-relaxed">
              In rural Bihar, where opportunities are scarce and dreams often
              fade before they bloom, we create pathways through skill-based
              learning that transforms lives, families, and communities.
            </p>
            <div className="border-border flex items-center gap-4 border-t pt-4">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                {donors.donors.slice(0, 4).map((i, index) => (
                  <Avatar key={`donor-${index}`}>
                    <AvatarImage
                      src={i.avatar || "/placeholder.svg"}
                      alt={i.name}
                    />
                    <AvatarFallback>{i.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Join <span className="text-foreground font-semibold">500+</span>{" "}
                changemakers
              </p>
            </div>
          </motion.div>

          {/* Right - Values */}
          <div className="space-y-12">
            {values.map((value, index) => (
              <motion.article
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 pt-1 font-mono text-xs">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-foreground group-hover:text-primary mb-2 text-lg font-medium transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
