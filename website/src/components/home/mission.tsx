"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Users, Sparkles, Target, Heart, TrendingUp } from "lucide-react"
import { Image } from "@/components/ui/image"

const pillars = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Industry-relevant curriculum designed for real-world success in accounting, computers, and business.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Programs co-created with local families, ensuring cultural relevance and maximum impact.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Lasting Change",
    description: "Every graduate becomes a catalyst, transforming their entire family's future trajectory.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Target,
    title: "Skill Development",
    description: "Practical training in digital literacy, accounting software, and professional communication.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    description: "Dedicated evening programs enabling women to gain financial independence and confidence.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Career Support",
    description: "Job placement assistance and entrepreneurship guidance for all graduates.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

const values = [
  {
    number: "01",
    title: "Quality Education",
    description: "Industry-relevant curriculum in accounting, computers, and business skills.",
  },
  {
    number: "02",
    title: "Community First",
    description: "Programs designed with families to ensure relevance and lasting impact.",
  },
  {
    number: "03",
    title: "Women Empowerment",
    description: "Evening classes enabling women to gain financial independence.",
  },
]

export default function HomeMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="py-32 md:py-40 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Purpose</p>
            <h2
              id="mission-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.15] tracking-tight"
            >
              Education is the most powerful weapon to change the world
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 mt-3">
              In rural Bihar, where opportunities are scarce and dreams often fade before they bloom, we create pathways
              through skill-based learning that transforms lives, families, and communities.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-semibold text-foreground">500+</span> changemakers
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
                  <span className="text-xs font-mono text-muted-foreground/50 pt-1">{value.number}</span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
