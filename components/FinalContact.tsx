 "use client";

import { motion } from "motion/react";
import { FileText, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import { profile } from "@/lib/data";
import { VideoBackground } from "@/components/VideoBackground";

export function FinalContact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28">
      <div className="absolute inset-0">
        <VideoBackground
          src="/videos/Infrastructure dashboard.mp4"
          poster="/images/evidence-dashboard.png"
          label="Infrastructure dashboard motion background"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: .7 }}
        className="relative z-10 mx-auto max-w-6xl rounded-[2.6rem] border border-mist/10 bg-deep/72 p-8 shadow-glass backdrop-blur-2xl md:p-12"
      >
        <p className="text-xs font-black uppercase tracking-[.24em] text-sage">Professional enquiries</p>

        <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5.8rem)] font-black leading-[.9] tracking-[-.06em] text-white">
          Ready for graduate civil / infrastructure opportunities.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-mist/70">
          Based in Toowoomba, Queensland. Open to graduate civil engineering, GIS, transport planning,
          stormwater and local government infrastructure opportunities. For genuine recruitment or
          professional enquiries, please connect through LinkedIn. Automated SEO,
          backlink, web design, marketing and unrelated sales messages are ignored.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5 transition hover:border-sage/35 hover:bg-sage/10"
          >
            <Linkedin className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">LinkedIn</p>
            <p className="mt-1 font-bold text-white">Best contact method for genuine recruiters</p>
          </a>

          <a
            href="#resume"
            className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5 transition hover:border-sage/35 hover:bg-sage/10"
          >
            <FileText className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">Resume</p>
            <p className="mt-1 font-bold text-white">View resume summary on this page</p>
          </a>

          <div className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5">
            <MapPin className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">Location</p>
            <p className="mt-1 font-bold text-white">{profile.location}</p>
          </div>

          <div className="rounded-[1.6rem] border border-mist/10 bg-white/[.06] p-5">
            <ShieldCheck className="h-6 w-6 text-sage" />
            <p className="mt-3 text-sm font-black uppercase tracking-[.16em] text-mist/45">Contact privacy</p>
            <p className="mt-1 font-bold text-white">Direct personal email and phone are not published</p>
          </div>
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-sage/20 bg-sage/10 p-5">
          <div className="flex gap-3">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-sage" />
            <p className="leading-7 text-mist/72">
              For privacy and spam protection, direct personal email and phone details are not published on this website. Genuine recruiters and professional contacts can connect through LinkedIn.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
