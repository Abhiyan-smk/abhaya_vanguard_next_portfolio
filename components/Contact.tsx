 "use client";

import { profile } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-mist/10 bg-white/[.055] p-6 shadow-glass backdrop-blur-xl md:grid-cols-[.7fr_.3fr] md:p-10">
        <div>
          <span className="text-xs font-black uppercase tracking-[.2em] text-sage">Contact path</span>
          <h2 className="mt-4 font-display text-[clamp(2.7rem,6vw,6.8rem)] font-black leading-[.86] tracking-[-.07em] text-white">
            Ready for graduate engineering opportunities.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist/70">
            Contact me for graduate civil engineering, transport planning, GIS, stormwater or infrastructure support roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href={`mailto:${profile.email}`}>Email Abhaya</MagneticButton>
            <MagneticButton href={profile.linkedin} variant="ghost">Open LinkedIn</MagneticButton>
          </div>
        </div>

        <div className="grid content-start gap-3">
          <Info icon={<Mail />} text={profile.email} />
          <Info icon={<Phone />} text={profile.phone} />
          <Info icon={<MapPin />} text={profile.location} />
          <Info icon={<Linkedin />} text="LinkedIn profile" />
        </div>
      </div>
    </section>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-mist/10 bg-deep/40 p-4 text-sm font-bold text-mist">
      <span className="text-sage [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
