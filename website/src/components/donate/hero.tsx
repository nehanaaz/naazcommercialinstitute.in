"use client";

import { motion } from "framer-motion";

export default function DonateHero() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-gradient-to-br py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            Support Our Mission
          </p>
          <h1 className="text-foreground mb-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Every rupee plants a seed of change
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Your contribution doesn't just fund education - it funds dreams,
            breaks cycles of poverty, and transforms entire families. Here's how
            you can help.
          </p>
        </motion.div>
      </div>
      <form className="mx-auto mt-10 w-fit">
        <script
          src="https://cdn.razorpay.com/static/widget/payment-button.js"
          data-payment_button_id="pl_FbhzYAf5JggFJ9"
        ></script>
      </form>
    </section>
  );
}
