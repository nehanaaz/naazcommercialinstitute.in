"use client";

import { motion } from "framer-motion";

export default function ImpactHero() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-gradient-to-br py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            Our Impact
          </p>
          <h1 className="text-foreground mb-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Measuring change, celebrating progress
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Every number represents a life transformed, a family uplifted, and a
            dream realized. Here&apos;s the impact your support has made
            possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
