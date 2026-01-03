"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"
import siteData from "@/constants/site.json"

export default function StoriesShare() {
  return (
    <section aria-labelledby="share-heading" className="py-16 md:py-20 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
          <h2 id="share-heading" className="font-serif text-2xl sm:text-3xl text-foreground mb-3 tracking-tight">
            Share your story with us
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Were you part of any of our events or programs? Did our work touch your life or someone you know? We&apos;d
            love to hear from you. Your story could inspire others and show the real impact of community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${siteData.contact.email}`}>
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Email Your Story
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${siteData.contact.phone}`}>Call Us</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            All submissions are reviewed and may be featured with your permission
          </p>
        </motion.div>
      </div>
    </section>
  )
}
