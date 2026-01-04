"use client"

import { motion } from "framer-motion"
import events from "@/constants/events.json"
import { useMemo } from "react"
import { Gallery } from "../gallery"

export default function ImpactEvents() {
  const sortedEvents = useMemo(() => [...events].sort((a, b) => b.year - a.year), [events])
  return (
    <section aria-labelledby="timeline-heading" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-32">
          {sortedEvents.map((event, index) => (
            <motion.article
              key={`${event.year}-${event.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Content Side */}
                <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} space-y-4`}>
                  <div className="inline-flex items-center gap-3 mb-2">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                <Gallery images={event.images} title={event.title} className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`} />
              </div>

              {/* Connecting line for timeline effect */}
              {index < sortedEvents.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-0 w-px h-12 bg-border transform translate-y-full" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
