"use client";

import { motion } from "framer-motion";

export default function StoriesHero() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-gradient-to-br py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            Real Impact
          </p>
          <h1 className="text-foreground mb-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Events & Stories
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Every event we organize creates ripples of change in our community.
            Here are the stories of transformation from the people whose lives
            were touched.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
