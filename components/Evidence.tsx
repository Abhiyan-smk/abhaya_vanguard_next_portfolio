 "use client";

import { evidenceCards } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";
import Image from "next/image";

export function Evidence() {
  return (
    <section id="evidence" className="px-5 py-28">
      <SectionHeader
        kicker="Evidence system"
        title="Project visuals that support the written evidence."
        text="Realistic project visuals represent the GIS, hydrology, planning and infrastructure work included in the portfolio."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-3">
        {evidenceCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-mist/10 bg-white/[.055] shadow-glass backdrop-blur-xl"
          >
            <Image src={card.image} alt={card.title} width={1200} height={720} className="h-64 w-full object-cover" />
            <div className="p-6">
              <span className="text-xs font-black uppercase tracking-[.2em] text-sage">{card.label}</span>
              <h3 className="mt-3 font-display text-2xl font-black tracking-tight text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-mist/68">{card.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
