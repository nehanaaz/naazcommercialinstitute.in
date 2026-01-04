"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import team from "@/constants/team.json"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutTeam() {
  return (
    <section aria-labelledby="team-heading" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 id="team-heading" className="font-serif text-2xl sm:text-3xl text-foreground mb-2">
            The people behind our mission
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A dedicated team committed to transforming lives through education
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="text-center"
            >
              <Avatar className="size-20 m-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').slice(-2).map((e) => e.charAt(0)).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-medium text-foreground text-sm">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.role}</p>
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
          <p className="text-muted-foreground text-sm mb-3">Want to be part of our journey?</p>
          <Button asChild size="sm">
            <a href="/donate">
              Support Our Work
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
