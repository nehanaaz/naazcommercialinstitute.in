"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { GraduationCap, TrendingUp, MapPin, Award } from "lucide-react";
import siteConfig from "@/constants/site.json";

const stats = [
  {
    value: siteConfig.stats.studentsTrainedCount,
    suffix: "+",
    label: "Students Trained",
    icon: GraduationCap,
    description: "Equipped with skills for brighter futures",
  },
  {
    value: siteConfig.stats.womenEmpowered,
    suffix: "+",
    label: "Women Empowered",
    icon: TrendingUp,
    description: "Achieving financial independence through education",
  },
  {
    value: siteConfig.stats.villagesReached,
    suffix: "",
    label: "Villages Reached",
    icon: MapPin,
    description: "Rural communities we serve",
  },
  {
    value: siteConfig.stats.yearsOfService,
    suffix: "",
    label: "Years of Service",
    icon: Award,
    description: "Dedicated to community transformation",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function HomeImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      aria-labelledby="impact-heading"
      className="bg-accent/30 py-32 md:py-40"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="text-primary mb-3 text-xs font-medium tracking-[0.2em] uppercase">
            Our Impact
          </p>
          <h2
            id="impact-heading"
            className="text-foreground mb-4 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
          >
            Creating ripples of change
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Every number represents a story of hope, transformation, and a
            family breaking free from the cycle of poverty.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border-border hover:border-primary/50 h-full rounded-2xl border p-8 transition-all duration-300">
                {/* Icon */}
                <div className="bg-primary/10 text-primary mb-6 inline-flex rounded-xl p-4 transition-transform duration-300 group-hover:scale-110">
                  <stat.icon
                    className="h-6 w-6"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>

                <p className="text-foreground mb-5 font-serif text-5xl tracking-tight tabular-nums sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>

                <p className="text-foreground mb-2 text-lg font-medium tracking-tight">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Since {siteConfig.founded}, we've witnessed the transformation of
            individuals, families, and entire communities through the power of
            education and skill development.
          </p>
          <div className="text-muted-foreground mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="bg-primary h-2 w-2 rounded-full"
                aria-hidden="true"
              />
              <span>
                {siteConfig.stats.familiesSupported}+ families supported
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="bg-primary h-2 w-2 rounded-full"
                aria-hidden="true"
              />
              <span>Free education for underprivileged</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="bg-primary h-2 w-2 rounded-full"
                aria-hidden="true"
              />
              <span>Women empowerment programs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
