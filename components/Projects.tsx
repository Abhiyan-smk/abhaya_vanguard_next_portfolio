 "use client";

import { projects, type Project } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";

const filters = ["All", "GIS", "Hydrology", "Geotechnical", "Transport", "Structural"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="px-5 py-28">
      <SectionHeader
        kicker="Selected work"
        title="Projects structured for fast technical review."
        text="Each project shows the work type, tools, responsibilities and practical outcome."
      />

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full border px-5 py-3 text-sm font-black transition ${
              filter === item
                ? "border-sage bg-sage text-deep"
                : "border-mist/10 bg-white/[.055] text-mist hover:border-sage/40 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div layout className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="group overflow-hidden rounded-[2rem] border border-mist/10 bg-white/[.055] shadow-glass backdrop-blur-xl"
            >
              <div className="relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={1200} height={720} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-deep/70 px-3 py-1 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-mist/67">{project.result}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="rounded-full bg-sage/10 px-3 py-1 text-xs font-bold text-sage">
                      {tool}
                    </span>
                  ))}
                </div>
                <button onClick={() => setActiveProject(project)} className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-black text-deep">
                  Open case snapshot
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-deep/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.article
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[2rem] border border-mist/15 bg-deep p-4 shadow-glass"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image src={activeProject.image} alt={activeProject.title} width={1400} height={850} className="h-72 w-full object-cover md:h-96" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute right-4 top-4 rounded-full bg-deep/80 p-3 text-white backdrop-blur-xl"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-8 p-4 md:grid-cols-[.62fr_.38fr] md:p-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[.2em] text-sage">{activeProject.category}</span>
                  <h3 className="mt-3 font-display text-4xl font-black leading-none tracking-tight text-white">{activeProject.title}</h3>
                  <div className="mt-6 grid gap-5">
                    <CaseLine title="Problem" text={activeProject.problem} />
                    <CaseLine title="Action" text={activeProject.action} />
                    <CaseLine title="Result" text={activeProject.result} />
                  </div>
                </div>
                <aside className="rounded-[1.5rem] border border-mist/10 bg-white/[.055] p-5">
                  <h4 className="font-display text-xl font-black text-white">Tools and ATS keywords</h4>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[...activeProject.tools, ...activeProject.keywords].map((item) => (
                      <span key={item} className="rounded-full bg-sage/10 px-3 py-1 text-xs font-bold text-sage">
                        {item}
                      </span>
                    ))}
                  </div>
                </aside>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseLine({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-mist/10 bg-white/[.045] p-5">
      <h4 className="font-black text-white">{title}</h4>
      <p className="mt-2 leading-7 text-mist/70">{text}</p>
    </div>
  );
}
