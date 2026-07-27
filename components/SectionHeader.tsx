 "use client";

import { motion } from "motion/react";

export function SectionHeader({
  kicker,
  title,
  text
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[.35fr_.65fr]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-xs font-black uppercase tracking-[.22em] text-sage"
      >
        {kicker}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.08 }}
      >
        <h2 className="font-display text-[clamp(2.4rem,5vw,5.8rem)] font-black leading-[.9] tracking-[-.07em] text-white">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-mist/70">{text}</p>
      </motion.div>
    </div>
  );
}
