"use client"

import { motion } from "framer-motion"

export default function DonateHero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3">Support Our Mission</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Every rupee plants a seed of change
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your contribution doesn't just fund education - it funds dreams, breaks cycles of poverty, and transforms entire families. Here's how you can help.
          </p>
        </motion.div>
      </div>
      <form className="mx-auto mt-10 w-fit">
          <script src="https://cdn.razorpay.com/static/widget/payment-button.js" data-payment_button_id="pl_FbhzYAf5JggFJ9"></script>
      </form>
    </section>
  )
}
