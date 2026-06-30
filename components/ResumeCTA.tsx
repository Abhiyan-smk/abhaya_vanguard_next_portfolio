 "use client";

import { motion } from "motion/react";
import { FileDown, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/lib/data";

export function ResumeCTA() {
  return (
    <section id="resume" className="relative px-5 py-28">
      <SectionHeader
        kicker="Resume"
        title="Recruiter-ready summary and downloadable resume."
        text="Use this section once the final PDF resume is placed in the documents folder."
      />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: .65 }}
        className="mx-auto mt-12 grid max-w-6xl gap-6 rounded-[2.4rem] border border-mist/10 bg-white/[.052] p-6 shadow-glass backdrop-blur-2xl lg:grid-cols-[1fr_.8fr]"
      >
        <div className="rounded-[2rem] border border-mist/10 bg-deep/52 p-7">
          <h3 className="font-display text-3xl font-black tracking-tight text-white">Abhaya Simkhada</h3>
          <p className="mt-2 font-bold text-sage">Civil Engineering Technology Graduate</p>
          <p className="mt-5 max-w-2xl leading-8 text-mist/70">
            GIS | Transport Planning | Stormwater | Local Government Infrastructure
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-mist/60">
            I combine GIS analysis, civil engineering fundamentals and council project experience across transport planning,
            walking networks, drainage, hydrology and technical reporting.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/documents/Abhaya_Simkhada_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-black text-deep transition hover:scale-[1.03]"
            >
              <FileDown className="h-4 w-4" />
              Download resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-mist/15 px-5 py-3 text-sm font-black text-white transition hover:border-sage/40 hover:text-sage"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            "3,500+ footpath records reviewed / scored",
            "100+ bus stop asset records maintained",
            "Council transport planning exposure",
            "Stormwater and hydrology project evidence",
            "Geotechnical field/lab study evidence",
            "Council-style reporting and WHS awareness"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-mist/10 bg-deep/45 p-4 text-sm font-bold text-mist/72">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
