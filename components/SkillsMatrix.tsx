 "use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";

const groups = [
  {
    title: "GIS / Spatial",
    skills: ["Intramaps", "Queensland Globe", "GIS layers", "Asset data", "Spatial checking", "Map-based planning"]
  },
  {
    title: "Transport / Planning",
    skills: ["Footpath networks", "Walking routes", "Bus stops", "LATM exposure", "Traffic counter inspection", "Accessibility thinking"]
  },
  {
    title: "Stormwater / Hydrology",
    skills: ["ARR Data Hub", "RORB", "Rational Method", "Hydrographs", "Rainfall intensity", "Peak flow"]
  },
  {
    title: "Geotech / Civil",
    skills: ["Soil behaviour", "Compaction", "Permeability", "Atterberg limits", "Site assessment", "Technical judgement"]
  },
  {
    title: "Reporting / Compliance",
    skills: ["Council-style reports", "WHS", "Document control", "Standards awareness", "Excel", "Technical communication"]
  },
  {
    title: "Professional Tools",
    skills: ["Excel", "Word", "PowerPoint", "Data QA", "Project notes", "Clear presentation"]
  }
];

export function SkillsMatrix() {
  return (
    <section id="skills" className="relative px-5 py-28">
      <SectionHeader
        kicker="Skills"
        title="Keyword-ready technical capability without fake senior claims."
        text="The skill matrix is built for graduate civil/infrastructure applications and ATS scanning."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: .5, delay: index * .06 }}
            className="engineering-card rounded-[2rem] border border-mist/10 p-6 shadow-glass backdrop-blur-xl"
          >
            <h3 className="font-display text-2xl font-black tracking-tight text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-sage/25 bg-sage/10 px-3 py-1.5 text-xs font-black uppercase tracking-[.1em] text-sage"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
