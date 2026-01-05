"use client";

import { motion } from "framer-motion";
import events from "@/constants/events.json";
import { useMemo } from "react";
import { Gallery } from "../gallery";

export default function ImpactEvents() {
  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => b.year - a.year),
    [events],
  );
  return (
    <section
      aria-labelledby="timeline-heading"
      className="bg-background pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
              <div className="grid items-start gap-8 lg:grid-cols-2">
                {/* Content Side */}
                <div
                  className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} space-y-4`}
                >
                  <div className="mb-2 inline-flex items-center gap-3">
                    <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-foreground font-serif text-2xl sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <Gallery
                  images={event.images}
                  title={event.title}
                  className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                />
              </div>

              {/* Connecting line for timeline effect */}
              {index < sortedEvents.length - 1 && (
                <div className="bg-border absolute bottom-0 left-1/2 hidden h-12 w-px translate-y-full transform lg:block" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
