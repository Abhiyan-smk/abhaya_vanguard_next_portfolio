 "use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Building2, GraduationCap, ClipboardCheck } from "lucide-react";

const experience = [
  {
    icon: Building2,
    title: "Transport Planning / Infrastructure Services exposure",
    place: "Toowoomba Regional Council context",
    date: "Placement / project experience",
    points: [
      "Supported footpath and walking network planning evidence using GIS and spreadsheet workflows.",
      "Reviewed and organised 3,500+ footpath records against proximity and network criteria.",
      "Maintained and checked 100+ bus stop asset records for transport planning data quality.",
      "Worked with council-style documentation, map layers, infrastructure assets and practical planning context."
    ]
  },
  {
    icon: GraduationCap,
    title: "Civil Engineering Technology projects",
    place: "University of Southern Queensland / UniSQ",
    date: "Civil engineering study",
    points: [
      "Completed stormwater and hydrology workflows using ARR Data Hub, Rational Method, RORB and Excel.",
      "Prepared geotechnical and geology work involving soil behaviour, testing concepts and site assessment.",
      "Completed transport, drainage, pavement, structural and technical reporting tasks."
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Professional workplace discipline",
    place: "Reporting, safety and teamwork",
    date: "Transferable capability",
    points: [
      "Prepared structured technical content with clear problem, method, result and recommendation flow.",
      "Applied WHS awareness, communication discipline, document control and team collaboration.",
      "Built capability to explain engineering work clearly to technical and non-technical audiences."
    ]
  }
];

export function ExperienceFinal() {
  return (
    <section id="experience" className="relative px-5 py-28">
      <SectionHeader
        kicker="Experience"
        title="Council-style infrastructure support and university civil engineering evidence."
        text="The experience section is written to show practical exposure without exaggerating responsibilities."
      />

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="relative border-l border-sage/25 pl-6 md:pl-10">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: .6, delay: index * .08 }}
                className="relative mb-8 rounded-[2rem] border border-mist/10 bg-white/[.052] p-6 shadow-glass backdrop-blur-xl"
              >
                <div className="absolute -left-[3.15rem] top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/30 bg-deep text-sage">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-black tracking-tight text-white">{item.title}</h3>
                    <p className="mt-1 font-bold text-sage">{item.place}</p>
                  </div>
                  <span className="rounded-full border border-mist/10 bg-deep/55 px-3 py-1 text-xs font-black uppercase tracking-[.15em] text-mist/55">
                    {item.date}
                  </span>
                </div>
                <ul className="mt-5 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-mist/70">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
