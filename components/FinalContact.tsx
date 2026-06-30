 "use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { VideoBackground } from "@/components/VideoBackground";

export function FinalContact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28">
      <div className="absolute inset-0">
        <VideoBackground src="/videos/infrastructure-dashboard.mp4" poster="/images/evidence-dashboard.png" label="Infrastructure dashboard motion background" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: .7 }}
        className="relative z-10 mx-auto max-w-6xl rounded-[2.6rem] border border-mist/10 bg-deep/72 p-8 shadow-glass backdrop-blur-2xl md:p-12"
      >
        <p className="text-xs font-black uppercase tracking-[.24em] text-sage">Contact</p>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5.8rem)] font-black leading-[.9] tracking-[-.06em] text-white">
          Ready for graduate civil / infrastructure opportunities.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-mist/70">
          Based in Toowoomba, Queensland. Open to civil infrastructure, transport planning, GIS, stormwater,
          local government and graduate engineering technology roles.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5 transition hover:border-sage/35 hover:bg-sage/10">
            <Mail className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">Email</p>
            <p className="mt-1 font-bold text-white">{profile.email}</p>
          </a>

          <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5 transition hover:border-sage/35 hover:bg-sage/10">
            <Phone className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">Phone</p>
            <p className="mt-1 font-bold text-white">{profile.phone}</p>
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5 transition hover:border-sage/35 hover:bg-sage/10">
            <Linkedin className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">LinkedIn</p>
            <p className="mt-1 font-bold text-white">linkedin.com/in/abhaya-simkhada</p>
          </a>

          <div className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5">
            <MapPin className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">Location</p>
            <p className="mt-1 font-bold text-white">{profile.location}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
