 "use client";

import { keywordCloud } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";

export function Keywords() {
  return (
    <section id="keywords" className="px-5 py-28">
      <SectionHeader
        kicker="ATS keywords"
        title="Keywords aligned with targeted roles."
        text="Civil engineering, transport, GIS and infrastructure support keywords included for recruiter scanning."
      />
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3">
        {keywordCloud.map((keyword, index) => (
          <motion.span
            key={keyword}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.018 }}
            className="rounded-full border border-sage/25 bg-sage/10 px-4 py-3 text-sm font-black text-white"
          >
            {keyword}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
