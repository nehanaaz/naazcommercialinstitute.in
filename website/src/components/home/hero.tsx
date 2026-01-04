"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { ImageCarousel } from "@/components/carousel/image"
import siteConfig from "@/constants/site.json"
import gallery from "@/constants/gallery.json"

export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-secondary/50"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-8 tracking-[0.15em] uppercase"
            >
              <Heart className="w-4 h-4 fill-current" />
              Transforming lives since {siteConfig.founded}
            </motion.div>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Together, we build
              <br />
              <span className="text-primary">brighter futures</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              In the heart of rural Bihar, we're empowering children and families through education, skills, and hope.
              Every donation creates lasting change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="rounded-full gap-2 px-8 h-12 text-base">
                <a href="/donate">
                  Make a Difference
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base border-2 hover:bg-muted bg-transparent"
              >
                <a href="/about">Our Story</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <ImageCarousel images={gallery} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
