 "use client";

import { roleFits } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";

export function RoleFit() {
  return (
    <section id="role-fit" className="px-5 py-28">
      <SectionHeader
        kicker="Recruiter view"
        title="What I can be considered for."
        text="A clear match between my experience and entry-level civil engineering roles."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roleFits.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="group rounded-[2rem] border border-mist/10 bg-white/[.055] p-6 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:border-sage/40"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="rounded-full bg-sage/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-sage">
                  {role.fit}
                </span>
                <Icon className="h-6 w-6 text-sage" />
              </div>
              <h3 className="font-display text-2xl font-black leading-none tracking-tight text-white">{role.title}</h3>
              <p className="mt-4 min-h-24 leading-7 text-mist/65">{role.detail}</p>
              <ul className="mt-5 grid gap-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-mist/10 bg-deep/45 px-4 py-3 text-sm font-bold text-mist">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
