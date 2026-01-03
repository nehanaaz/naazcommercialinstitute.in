"use client"

import {Image} from "@/components/ui/image"
import { useState, useRef } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import events from "@/constants/events.json"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

const marqueeItems = [...events, ...events]

export default function HomeGallery() {
  const [selected, setSelected] = useState<(typeof events)[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section aria-labelledby="gallery-heading" className="py-32 md:py-40 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3">Our Journey</p>
            <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">
              Milestones along the way
            </h2>
          </div>
          <a
            href="/impact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-2"
          >
            View all
            <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => (
            <motion.button
              key={`${item.year}-${i}`}
              onClick={() => setSelected(item)}
              className="flex-shrink-0 w-80 mx-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <article className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-mono text-background/70 mb-1 block">{item.year}</span>
                  <p className="text-base font-medium text-background">{item.title}</p>
                </div>
              </article>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Drawer */}
      <Drawer open={!!selected} onOpenChange={() => setSelected(null)}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader className="relative text-left pt-6">
              <DrawerClose className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors">
                <X className="w-4 h-4" />
                <span className="sr-only">Close</span>
              </DrawerClose>
              <p className="text-xs font-mono text-muted-foreground mb-2">{selected?.year}</p>
              <DrawerTitle className="font-serif text-2xl">{selected?.title}</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-8">
              <div className="mb-5">
                {selected?.images && selected.images.length === 1 && (
                  <button className="w-full aspect-video rounded-lg overflow-hidden bg-muted hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Image
                      src={selected.images[0] || "/placeholder.svg"}
                      alt={selected?.title || ""}
                      className="w-full h-full object-cover"
                    />
                  </button>
                )}

                {selected?.images && selected.images.length === 2 && (
                  <div className="grid grid-cols-2 gap-2">
                    {selected.images.map((img, idx) => (
                      <button key={idx} className="aspect-[3/4] rounded-lg overflow-hidden bg-muted hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${selected?.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {selected?.images && selected.images.length >= 3 && (
                  <div className="grid grid-cols-2 gap-2 h-[400px]">
                    <button
                      className="row-span-2 rounded-lg overflow-hidden bg-muted hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Image
                        src={selected.images[0] || "/placeholder.svg"}
                        alt={`${selected?.title} 1`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <button
                      className="rounded-lg overflow-hidden bg-muted hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Image
                        src={selected.images[1] || "/placeholder.svg"}
                        alt={`${selected?.title} 2`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <button
                      className="relative rounded-lg overflow-hidden bg-muted hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Image
                        src={selected.images[2] || "/placeholder.svg"}
                        alt={`${selected?.title} 3`}
                        className="w-full h-full object-cover"
                      />
                      {selected.images.length > 3 && (
                        <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-background text-2xl font-medium">
                            +{selected.images.length - 3} more
                          </span>
                        </div>
                      )}
                    </button>
                  </div>
                )}
              </div>
              <DrawerDescription className="text-base text-muted-foreground leading-relaxed">
                {selected?.description}
              </DrawerDescription>
              <div className="mt-6 flex gap-3">
                <Button asChild className="flex-1 rounded-full">
                  <a href="/donate">Support Our Work</a>
                </Button>
                <Button asChild variant="outline" className="flex-1 rounded-full bg-transparent">
                  <a href="/impact">Full Timeline</a>
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  )
}
