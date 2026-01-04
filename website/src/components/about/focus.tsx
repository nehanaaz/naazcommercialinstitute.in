"use client"

import { motion } from "framer-motion"
import { GraduationCap, Laptop, Users2, Briefcase, Heart, TrendingUp } from "lucide-react"

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Commercial Education",
    description:
      "Teaching accounting, Tally, taxation, and bookkeeping to prepare students for careers in finance and commerce. We aim to bridge the gap between rural education and urban job market requirements.",
  },
  {
    icon: Laptop,
    title: "Digital Literacy",
    description:
      "From basic computer operations to MS Office, typing, and internet navigation - helping bridge the digital divide and opening doors to modern employment opportunities for rural youth.",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    description:
      "Special evening programs for women who cannot attend regular classes, focusing on financial independence through practical skills training and confidence building.",
  },
  {
    icon: Briefcase,
    title: "Employment Support",
    description:
      "Beyond teaching, we guide students in resume building, interview preparation, and connecting them with potential employers to help secure meaningful employment.",
  },
  {
    icon: Heart,
    title: "Community Welfare",
    description:
      "Supporting our community through crisis relief programs including ration distribution, mobility aid support, and health awareness initiatives when needed.",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description:
      "Workshops on spoken English, personality development, entrepreneurship basics, and soft skills to help youth compete confidently in today's job market.",
  },
]

export default function AboutFocus() {
  return (
    <section aria-labelledby="focus-heading" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3">Our Focus</p>
          <h2 id="focus-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            What We Focus On
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our work centers around six key areas that we believe are essential for holistic community development and
            youth empowerment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-muted/30 rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-foreground text-lg mb-3">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
