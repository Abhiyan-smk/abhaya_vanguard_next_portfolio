 "use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2, MapPinned, ShieldCheck, Target } from "lucide-react";

const points = [
  {
    icon: MapPinned,
    title: "Local government infrastructure exposure",
    text: "Hands-on support across walking network, footpath and bus stop asset data used in council-style transport planning."
  },
  {
    icon: Target,
    title: "Evidence-first project communication",
    text: "Projects are presented by problem, task, tool, judgement and result so recruiters can quickly understand real capability."
  },
  {
    icon: ShieldCheck,
    title: "Professional engineering discipline",
    text: "Clear reporting, WHS awareness, document control, standards awareness and practical civil engineering fundamentals."
  },
  {
    icon: CheckCircle2,
    title: "Graduate-ready technical base",
    text: "GIS, transport planning, hydrology, geotechnical assessment, Excel workflows and technical reporting."
  }
];

export function ExecutiveSummary() {
  return (
    <section id="overview" className="relative px-5 py-24">
      <SectionHeader
        kicker="Portfolio overview"
        title="Built for civil infrastructure recruiters, not just visual appeal."
        text="This portfolio is designed to prove practical graduate capability through project evidence, council-style thinking and controlled motion design."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: .55, delay: index * .08 }}
              className="engineering-card rounded-[2rem] border border-mist/10 p-6 shadow-glass backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/25 bg-sage/10 text-sage">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-black tracking-tight text-white">{point.title}</h3>
              <p className="mt-3 leading-7 text-mist/66">{point.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
