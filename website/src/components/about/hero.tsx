"use client"

import { motion } from "framer-motion"
import { Image } from "@/components/ui/image"

export default function ImpactHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3">About Us</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Building a Brighter Future
          </h1>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto">
            Naaz Commercial Institute is an non-profit organization registered under Society Registration Act, 1860 in the year 1990 in Bihar. We believe that a single action can make a difference in the community, and that collective action can greatly impact the world. Through advocacy and outreach activities, our team works tirelessly each day to contribute their part to the greater good.
          </p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative mt-10 max-w-4xl h-100 mx-auto rounded-xl bg-muted overflow-hidden">
        <Image src="/images/programs/about.jpg" className="w-full h-full object-cover" />
      </motion.div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mt-10 text-base text-muted-foreground max-w-4xl mx-auto">
            We are achieving more with our initiatives than ever before. We work on many exciting projects to help improve the lives of others, and are very proud of the progress we continue to make. Learn more about what we do, who we help, and how we work every day to promote positive change.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
