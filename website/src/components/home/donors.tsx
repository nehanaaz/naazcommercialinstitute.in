"use client";

import { motion } from "framer-motion";
import donors from "@/constants/donors.json";
import { Image } from "@/components/ui/image";

export default function HomeDonors() {
  return (
    <section
      aria-labelledby="donors-heading"
      className="bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-primary mb-2 text-xs font-medium tracking-[0.2em] uppercase">
            Our Supporters
          </p>
          <h2
            id="donors-heading"
            className="text-foreground mb-3 font-serif text-2xl tracking-tight sm:text-3xl"
          >
            Powered by generosity
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg">
            These organizations commitment to our mission enables our work.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {donors.partners.map((donor, index) => (
            <motion.a
              target="_blank"
              href={donor.website}
              rel="noreferer noopener"
              key={donor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <article className="text-center">
                <div className="border-border mb-3 flex h-32 items-center justify-center rounded-lg border bg-white p-6">
                  <Image
                    src={donor.logo || "/placeholder.svg?height=80&width=180"}
                    alt={`${donor.name} logo`}
                    className="max-h-16 max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                <h3 className="text-foreground mb-1 text-sm font-medium">
                  {donor.name}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {donor.description}
                </p>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
