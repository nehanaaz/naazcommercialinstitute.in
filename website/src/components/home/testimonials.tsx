"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Before NCI, I had no idea how to use a computer. Now I manage accounts for a local business and support my family.",
    name: "Priya Kumari",
    role: "Accounts Assistant",
    batch: "2021",
  },
  {
    quote:
      "My parents never went to school. When I got my first job, my mother cried with happiness. This institute gave us hope.",
    name: "Ravi Kumar",
    role: "Bank Clerk",
    batch: "2020",
  },
  {
    quote:
      "As a woman from a small village, I never imagined I'd run my own business with computerized records. NCI made it possible.",
    name: "Sunita Devi",
    role: "Entrepreneur",
    batch: "2019",
  },
]

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer as NodeJS.Timeout)
  }, [])

  return (
    <section aria-labelledby="testimonials-heading" className="py-32 md:py-40 bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Quote className="w-10 h-10 text-muted-foreground/30 mx-auto mb-8" />

          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: current === index ? 1 : 0,
                  y: current === index ? 0 : 10,
                }}
                transition={{ duration: 0.5 }}
                className={`${current !== index ? "absolute inset-0 pointer-events-none" : ""}`}
              >
                <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground leading-relaxed tracking-tight mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • Batch {testimonial.batch}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  current === index ? "w-8 bg-foreground" : "w-4 bg-muted-foreground/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
