"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import team from "@/constants/team.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutTeam() {
  return (
    <section
      aria-labelledby="team-heading"
      className="bg-muted/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <h2
            id="team-heading"
            className="text-foreground mb-2 font-serif text-2xl sm:text-3xl"
          >
            The people behind our mission
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-sm">
            A dedicated team committed to transforming lives through education
          </p>
        </motion.div>

        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="text-center"
            >
              <Avatar className="m-auto mb-4 size-20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .slice(-2)
                    .map((e) => e.charAt(0))
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-foreground text-sm font-medium">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-xs">{member.role}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-3 text-sm">
            Want to be part of our journey?
          </p>
          <Button asChild size="sm">
            <a href="/donate">
              Support Our Work
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
