"use client"

import {Image} from "@/components/ui/image"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"

const achievements = [
  {
    year: "2015",
    title: "The Beginning",
    description: "Started with 12 students in a borrowed classroom, teaching basic accounting and typing skills.",
    image: "/small-rural-classroom-students-learning-bihar-indi.jpg",
  },
  {
    year: "2017",
    title: "First Computer Lab",
    description: "Community donations helped us establish our first computer lab with 10 systems.",
    image: "/computer-lab-rural-india-students-learning.jpg",
  },
  {
    year: "2019",
    title: "100th Graduate",
    description: "Celebrated our 100th graduate. 78 of them secured jobs within the first year.",
    image: "/graduation-ceremony-rural-india-students-celebrati.jpg",
  },
  {
    year: "2021",
    title: "Women's Program",
    description: "Launched evening classes enabling 150+ women to gain financial independence.",
    image: "/indian-women-learning-computers-empowerment-classr.jpg",
  },
  {
    year: "2023",
    title: "Community Hub",
    description: "Expanded to offer free weekend workshops reaching 200+ community members.",
    image: "/community-workshop-business-training-rural-bihar.jpg",
  },
]

const marqueeItems = [...achievements, ...achievements]

export default function HomeGallery() {
  const [selected, setSelected] = useState<(typeof achievements)[0] | null>(null)
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
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Journey</p>
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
                  src={item.image || "/placeholder.svg"}
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
        <DrawerContent className="max-h-[85vh]">
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
              <div className="aspect-video rounded-lg overflow-hidden mb-5 bg-muted">
                <Image
                  src={selected?.image || "/placeholder.svg"}
                  alt={selected?.title || ""}
                  className="w-full h-full object-cover"
                />
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
