"use client";

import { Image } from "@/components/ui/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import events from "@/constants/events.json";
import { Gallery } from "@/components/gallery";

const marqueeItems = [
  ...events.filter((e) => e.image),
  ...events.filter((e) => e.image),
];

export default function HomeGallery() {
  const [selected, setSelected] = useState<(typeof events)[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      aria-labelledby="gallery-heading"
      className="overflow-hidden py-32 md:py-40"
      ref={ref}
    >
      <div className="mx-auto mb-12 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
              Our Journey
            </p>
            <h2
              id="gallery-heading"
              className="text-foreground font-serif text-3xl tracking-tight sm:text-4xl"
            >
              Milestones along the way
            </h2>
          </div>
          <a
            href="/impact"
            className="text-muted-foreground hover:text-foreground link-underline inline-flex items-center gap-2 text-sm transition-colors"
          >
            View all
            <ArrowRight className="h-3 w-3" />
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="from-background pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l to-transparent" />

        <div className="animate-marquee flex">
          {marqueeItems.map((item, i) => (
            <motion.button
              key={`${item.year}-${i}`}
              onClick={() => setSelected(item)}
              className="group focus-visible:ring-ring mx-3 w-80 flex-shrink-0 rounded-xl focus-visible:ring-2 focus-visible:outline-none"
              whileHover={{ y: -4 }}
              transition={{ type: "tween", stiffness: 400 }}
            >
              <article className="bg-muted relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="from-foreground/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <span className="text-background/70 mb-1 block font-mono text-xs">
                    {item.year}
                  </span>
                  <p className="text-background text-base font-medium">
                    {item.title}
                  </p>
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
            <DrawerHeader className="relative pt-6 text-left">
              <DrawerClose className="hover:bg-muted absolute top-4 right-4 rounded-full p-2 transition-colors">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DrawerClose>
              <p className="text-muted-foreground mb-2 font-mono text-xs">
                {selected?.year}
              </p>
              <DrawerTitle className="font-serif text-2xl">
                {selected?.title}
              </DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-8">
              <Gallery
                title={selected?.title}
                images={selected?.images}
                className="mb-5"
                onImageClick={() => setSelected(null)}
              />
              <DrawerDescription className="text-muted-foreground text-base leading-relaxed">
                {selected?.description}
              </DrawerDescription>
              <div className="mt-6 flex gap-3">
                <Button asChild className="flex-1 rounded-full">
                  <a href="/donate">Support Our Work</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-full bg-transparent"
                >
                  <a href="/impact">Full Timeline</a>
                </Button>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
