 "use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoBackground } from "@/components/VideoBackground";

const cases = [
  {
    label: "Case Study 01",
    title: "Footpath Network Development Plan",
    visual: "gis",
    video: "/videos/infrastructure-dashboard.mp4",
    poster: "/images/project-walking-network.png",
    problem: "Council needed clearer walking network data and prioritisation evidence.",
    task: "Digitise and score footpath records using spatial proximity criteria.",
    tools: ["Intramaps", "Queensland Globe", "Excel", "GIS checking"],
    result: "3,500+ footpath records reviewed, scored or organised for planning evidence.",
    proof: ["School/shop/bus proximity", "Network augmentation checks", "Data accuracy"]
  },
  {
    label: "Case Study 02",
    title: "Future Walking Network Plan 2024",
    visual: "route",
    video: "/videos/hero-gis-map.mp4",
    poster: "/images/evidence-gis.png",
    problem: "Future pedestrian routes needed a simple evidence base for active transport planning.",
    task: "Map route priorities and connect walking links to schools, shops and bus stops.",
    tools: ["GIS", "Excel", "Walking network scoring", "Infrastructure layers"],
    result: "Supported safer, more accessible regional walking network planning.",
    proof: ["Route connection", "Data layers", "Council-style planning"]
  },
  {
    label: "Case Study 03",
    title: "USQ Campus Catchment Flood Management",
    visual: "stormwater",
    video: "/videos/stormwater-flow.mp4",
    poster: "/images/project-hydrology.png",
    problem: "A campus catchment needed rainfall, discharge and drainage concept evidence.",
    task: "Use rainfall inputs, flow estimation and hydrograph routing to explain stormwater behaviour.",
    tools: ["RORB", "ARR Data Hub", "Rational Method", "Excel"],
    result: "Produced a structured hydrology workflow suitable for civil engineering review.",
    proof: ["Rainfall intensity", "Peak discharge", "Hydrograph curve"]
  },
  {
    label: "Case Study 04",
    title: "Geology & Geomechanics Field/Lab Study",
    visual: "geotech",
    video: "/videos/geotech-soil-section.mp4",
    poster: "/images/project-geotech.png",
    problem: "Site conditions and soil/rock behaviour needed interpretation from field and lab evidence.",
    task: "Classify materials and connect lab results to civil engineering judgement.",
    tools: ["Field mapping", "Atterberg limits", "Compaction", "Permeability"],
    result: "Built practical site-assessment capability and documentation discipline.",
    proof: ["Soil layers", "Material behaviour", "Lab interpretation"]
  }
];

export function CaseStudyShowcase() {
  return (
    <section id="case-studies" className="relative px-5 py-28">
      <SectionHeader
        kicker="Case studies"
        title="Four strong projects, not twenty weak ones."
        text="Each case study follows the same recruiter-friendly structure: problem, task, tools, result and skill shown."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-8">
        {cases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.65 }}
            className="grid overflow-hidden rounded-[2.3rem] border border-mist/10 bg-white/[.052] shadow-glass backdrop-blur-2xl lg:grid-cols-[.95fr_1.05fr]"
          >
            <div className={`relative min-h-[420px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <VideoBackground src={item.video} poster={item.poster} label={`${item.title} motion video`} />
              <div className="absolute inset-0 z-10 p-7">
                <div className="rounded-[1.6rem] border border-mist/10 bg-deep/58 p-5 backdrop-blur-xl">
                  <span className="text-xs font-black uppercase tracking-[.22em] text-sage">{item.label}</span>
                  <h3 className="mt-2 font-display text-3xl font-black leading-tight tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <Visual type={item.visual} />
            </div>

            <div className="p-7 md:p-10">
              <div className="grid gap-4">
                <Block title="Problem" text={item.problem} />
                <Block title="Task" text={item.task} />
                <Block title="Result" text={item.result} />
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-mist/10 bg-deep/45 p-5">
                <h4 className="font-black uppercase tracking-[.18em] text-sage text-xs">Tools</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-sage/25 bg-sage/10 px-3 py-1 text-xs font-bold text-sage">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {item.proof.map((proof) => (
                  <div key={proof} className="rounded-2xl border border-mist/10 bg-white/[.045] p-4 text-sm font-bold text-mist/75">
                    {proof}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-mist/10 bg-white/[.045] p-5">
      <h4 className="font-black text-white">{title}</h4>
      <p className="mt-2 leading-7 text-mist/70">{text}</p>
    </div>
  );
}

function Visual({ type }: { type: string }) {
  if (type === "stormwater") {
    return (
      <svg viewBox="0 0 700 420" className="absolute inset-0 z-20 h-full w-full opacity-90">
        {[90, 150, 210, 270, 330, 390, 450, 510, 570].map((x, i) => (
          <motion.line key={x} x1={x} y1="40" x2={x - 30} y2="145" stroke="rgba(125,186,255,.55)" strokeWidth="3" strokeLinecap="round" initial={{ y: -30, opacity: 0 }} animate={{ y: [0, 30, 0], opacity: [.15, .9, .15] }} transition={{ duration: 1.6, delay: i * .09, repeat: Infinity }} />
        ))}
        <motion.path d="M80 285 C150 245 210 330 295 270 S470 230 610 310" fill="none" stroke="rgba(80,170,255,.95)" strokeWidth="6" strokeLinecap="round" strokeDasharray="16 14" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.2 }} />
        <motion.path d="M70 360 C150 360 185 250 240 250 C320 250 325 345 420 345 C520 345 530 285 630 285" fill="none" stroke="rgba(245,197,66,.95)" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.4, delay: .4 }} />
      </svg>
    );
  }

  if (type === "geotech") {
    return (
      <svg viewBox="0 0 700 420" className="absolute inset-0 z-20 h-full w-full opacity-95">
        <motion.path d="M70 135 C170 100 255 160 350 130 S530 100 630 145 L630 330 L70 330 Z" fill="rgba(159,118,72,.45)" initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .8 }} />
        <motion.path d="M70 205 C180 175 250 225 360 195 S540 170 630 218 L630 330 L70 330 Z" fill="rgba(98,85,72,.58)" initial={{ y: 35, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .2 }} />
        <motion.path d="M70 270 C180 255 260 285 370 260 S540 250 630 282 L630 330 L70 330 Z" fill="rgba(185,185,170,.45)" initial={{ y: 45, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .35 }} />
        <motion.line x1="510" y1="80" x2="510" y2="330" stroke="rgba(245,197,66,.95)" strokeWidth="4" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.7, delay: .6 }} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 700 420" className="absolute inset-0 z-20 h-full w-full opacity-90">
      <motion.path d="M60 240 C140 180 215 290 330 220 S520 170 645 260" fill="none" stroke="rgba(245,197,66,.96)" strokeWidth="6" strokeLinecap="round" strokeDasharray="14 12" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.2 }} />
      <motion.path d="M90 120 C220 175 320 80 445 145 S570 210 650 150" fill="none" stroke="rgba(126,211,143,.90)" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.2, delay: .3 }} />
      {[100, 210, 330, 445, 560, 630].map((x, i) => (
        <motion.circle key={x} cx={x} cy={i % 2 ? 205 : 250} r="8" fill={i % 2 ? "#7ed38f" : "#f5c542"} initial={{ scale: 0 }} whileInView={{ scale: [1, 1.45, 1] }} transition={{ duration: 1.4, delay: .4 + i * .12, repeat: Infinity, repeatDelay: 2 }} />
      ))}
    </svg>
  );
}
