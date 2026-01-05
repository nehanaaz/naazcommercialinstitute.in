"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import siteConfig from "@/constants/site.json";
import faqs from "@/constants/faqs.json";

interface FAQSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function FAQSection({
  limit,
  showAllLink = false,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const displayedFAQs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <HelpCircle className="text-primary h-4 w-4" />
            <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
              Have Questions?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 font-serif text-4xl tracking-tight text-balance lg:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance"
          >
            Find answers to common questions about our programs, donations, and
            how you can get involved
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
                className="bg-background border-border hover:border-primary/30 group w-full rounded-2xl border p-6 text-left transition-all"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {faq.category && (
                      <span className="text-primary mb-2 inline-block text-xs font-medium">
                        {faq.category}
                      </span>
                    )}
                    <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors lg:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
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
                      <p className="text-muted-foreground border-border mt-4 border-t pt-4 leading-relaxed">
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
            className="mt-12 text-center"
          >
            <a
              href="/faqs"
              className="text-primary inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
            >
              View all frequently asked questions
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </a>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/50 mt-16 rounded-3xl p-8 text-center"
        >
          <h3 className="mb-3 font-serif text-2xl">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            We're here to help! Reach out to us and we'll get back to you as
            soon as possible.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
