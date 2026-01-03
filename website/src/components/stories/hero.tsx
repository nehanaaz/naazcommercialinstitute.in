"use client"

import { motion } from "framer-motion"

export default function StoriesHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3">Real Impact</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Events & Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every event we organize creates ripples of change in our community. Here are the stories of transformation
            from the people whose lives were touched.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
