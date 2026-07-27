 "use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";

const notes = [
  "How I scored footpath networks using GIS criteria",
  "ARR 2019 basics for beginner stormwater design",
  "What I learned from council transport planning",
  "How GIS supports development assessment"
];

export function EngineeringNotes() {
  return (
    <section id="notes" className="relative px-5 py-24">
      <SectionHeader
        kicker="Optional notes"
        title="Engineering Notes can become a future credibility layer."
        text="These are planned article ideas. They show direction without pretending the blog is already active."
      />

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2">
        {notes.map((note, index) => (
          <motion.article
            key={note}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: index * .08 }}
            className="rounded-[1.7rem] border border-mist/10 bg-white/[.045] p-5 shadow-glass backdrop-blur-xl"
          >
            <p className="text-xs font-black uppercase tracking-[.18em] text-sage">Planned article</p>
            <h3 className="mt-3 font-display text-2xl font-black tracking-tight text-white">{note}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
