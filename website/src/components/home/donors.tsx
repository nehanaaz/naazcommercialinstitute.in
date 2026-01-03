"use client"

import { motion } from "framer-motion"
import donors from "@/constants/donors.json"
import { Image } from "@/components/ui/image"

export default function HomeDonors() {
  return (
    <section aria-labelledby="donors-heading" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-2">Our Supporters</p>
          <h2 id="donors-heading" className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight mb-3">
            Powered by generosity
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            These organizations commitment to our mission enables our work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {donors.partners.map((donor, index) => (
            <motion.article
              key={donor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-lg p-6 mb-3 h-32 flex items-center justify-center border border-border">
                <Image
                  src={donor.logo || "/placeholder.svg?height=80&width=180"}
                  alt={`${donor.name} logo`}
                  className="max-w-full max-h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">{donor.name}</h3>
              <p className="text-xs text-muted-foreground">{donor.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
