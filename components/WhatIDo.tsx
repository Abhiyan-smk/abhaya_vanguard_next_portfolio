 "use client";

import { motion } from "motion/react";
import { Map, Route, Waves, FileCheck2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  {
    icon: Map,
    title: "GIS & Spatial Infrastructure Analysis",
    text: "Footpaths, bus stops, Queensland Globe, Intramaps, Excel and spatial data checks.",
    mini: "M40 120 C90 70 155 145 220 95 S340 70 395 145"
  },
  {
    icon: Route,
    title: "Transport & Walking Network Planning",
    text: "Pedestrian routes, walking network priorities, traffic counter inspections and LATM exposure.",
    mini: "M35 145 C120 95 170 190 250 130 S340 100 410 155"
  },
  {
    icon: Waves,
    title: "Stormwater & Hydrology",
    text: "RORB, ARR Data Hub, Rational Method, rainfall intensity, peak flow and hydrograph thinking.",
    mini: "M35 150 C90 105 135 105 190 150 S295 195 410 130"
  },
  {
    icon: FileCheck2,
    title: "Technical Reporting & Compliance",
    text: "Council-style reports, standards awareness, document control, WHS and LRRS-style clarity.",
    mini: "M55 70 H360 M55 115 H310 M55 160 H385"
  }
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="relative px-5 py-28">
      <SectionHeader
        kicker="What I do"
        title="Civil infrastructure work shown as practical engineering capability."
        text="The portfolio is built around evidence recruiters can scan: tools, judgement, project context and outcomes."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group engineering-card relative overflow-hidden rounded-[2rem] border border-mist/10 p-6 shadow-glass backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-sage to-transparent opacity-80" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/25 bg-sage/10 text-sage">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-black leading-tight tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-mist/68">{item.text}</p>

              <svg viewBox="0 0 450 230" className="mt-7 h-28 w-full rounded-2xl border border-mist/10 bg-deep/45 p-4">
                <path d={item.mini} fill="none" stroke="rgba(201,206,214,.18)" strokeWidth="8" strokeLinecap="round" />
                <motion.path
                  d={item.mini}
                  fill="none"
                  stroke="rgba(245,197,66,.98)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: .15 }}
                />
              </svg>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
