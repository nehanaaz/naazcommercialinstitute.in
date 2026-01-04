"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import siteConfig from "@/constants/site.json"
import faqs from "@/constants/faqs.json"

interface FAQSectionProps {
  limit?: number
  showAllLink?: boolean
}

export default function FAQSection({ limit, showAllLink = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const displayedFAQs = limit ? faqs.slice(0, limit) : faqs

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Have Questions?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl tracking-tight text-balance mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto"
          >
            Find answers to common questions about our programs, donations, and how you can get involved
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {displayedFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {faq.category && (
                      <span className="inline-block text-xs font-medium text-primary mb-2">{faq.category}</span>
                    )}
                    <h3 className="font-medium text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        {showAllLink && limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/faqs"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              View all frequently asked questions
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-muted/50 rounded-3xl text-center"
        >
          <h3 className="font-serif text-2xl mb-3">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
