"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { ImageCarousel } from "@/components/carousel/image";
import siteConfig from "@/constants/site.json";
import gallery from "@/constants/gallery.json";

export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="from-background via-accent/30 to-secondary/50 relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
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
              className="bg-primary/10 text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase"
            >
              <Heart className="h-4 w-4 fill-current" />
              Transforming lives since {siteConfig.founded}
            </motion.div>

            <h1
              id="hero-heading"
              className="text-foreground mb-6 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Together, we build
              <br />
              <span className="text-primary">brighter futures</span>
            </h1>

            <p className="text-muted-foreground mb-10 max-w-xl text-base leading-relaxed sm:text-lg">
              In the heart of rural Bihar, we're empowering children and
              families through education, skills, and hope. Every donation
              creates lasting change.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 rounded-full px-8 text-base"
              >
                <a href="/donate">
                  Make a Difference
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-muted h-12 rounded-full border-2 bg-transparent px-8 text-base"
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
  );
}
