"use client";

import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function ImpactHero() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-gradient-to-br px-4 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            About Us
          </p>
          <h1 className="text-foreground mb-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Building a Brighter Future
          </h1>
          <p className="text-muted-foreground mx-auto max-w-4xl text-base">
            Naaz Commercial Institute is an non-profit organization registered
            under Society Registration Act, 1860 in the year 1990 in Bihar. We
            believe that a single action can make a difference in the community,
            and that collective action can greatly impact the world. Through
            advocacy and outreach activities, our team works tirelessly each day
            to contribute their part to the greater good.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-muted relative mx-auto mt-10 h-100 max-w-4xl overflow-hidden rounded-xl"
      >
        <Image
          src="/images/programs/about.jpg"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mx-auto mt-10 max-w-4xl text-base">
            We are achieving more with our initiatives than ever before. We work
            on many exciting projects to help improve the lives of others, and
            are very proud of the progress we continue to make. Learn more about
            what we do, who we help, and how we work every day to promote
            positive change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
