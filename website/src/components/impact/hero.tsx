"use client"

import { motion } from "framer-motion"

export default function ImpactHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3">Our Impact</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Measuring change, celebrating progress
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every number represents a life transformed, a family uplifted, and a dream realized. Here&apos;s the impact
            your support has made possible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
