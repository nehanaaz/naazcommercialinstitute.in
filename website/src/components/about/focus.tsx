"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Users2,
  Briefcase,
  Heart,
  TrendingUp,
} from "lucide-react";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Commercial Education",
    description:
      "Teaching accounting, Tally, taxation, and bookkeeping to prepare students for careers in finance and commerce. We aim to bridge the gap between rural education and urban job market requirements.",
  },
  {
    icon: Laptop,
    title: "Digital Literacy",
    description:
      "From basic computer operations to MS Office, typing, and internet navigation - helping bridge the digital divide and opening doors to modern employment opportunities for rural youth.",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    description:
      "Special evening programs for women who cannot attend regular classes, focusing on financial independence through practical skills training and confidence building.",
  },
  {
    icon: Briefcase,
    title: "Employment Support",
    description:
      "Beyond teaching, we guide students in resume building, interview preparation, and connecting them with potential employers to help secure meaningful employment.",
  },
  {
    icon: Heart,
    title: "Community Welfare",
    description:
      "Supporting our community through crisis relief programs including ration distribution, mobility aid support, and health awareness initiatives when needed.",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description:
      "Workshops on spoken English, personality development, entrepreneurship basics, and soft skills to help youth compete confidently in today's job market.",
  },
];

export default function AboutFocus() {
  return (
    <section
      aria-labelledby="focus-heading"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto mb-12 max-w-4xl px-4 text-center sm:px-6"
        >
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            Our Focus
          </p>
          <h2
            id="focus-heading"
            className="text-foreground mb-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
          >
            What We Focus On
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Our work centers around six key areas that we believe are essential
            for holistic community development and youth empowerment.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-border hover:border-primary/30 rounded-lg border bg-white p-6 transition-colors"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <area.icon
                  className="text-primary h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-foreground mb-3 text-lg font-medium">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
