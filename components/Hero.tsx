 "use client";

import { VideoBackground } from "@/components/VideoBackground";
import { AnimatedRouteMap } from "@/components/AnimatedRouteMap";
import { MagneticButton } from "@/components/MagneticButton";
import { profile } from "@/lib/data";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("@/components/canvas/ParticleField").then((mod) => mod.ParticleField), { ssr: false });

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.23], [1, 0.28]);

  const metrics = [
    ["3,500+", "footpaths digitised / scored"],
    ["100+", "bus stop assets maintained"],
    ["Council", "transport planning experience"],
    ["Stormwater", "hydrology project work"]
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 py-8">
      <VideoBackground src="/videos/hero-gis-map.mp4" poster="/images/evidence-gis.png" label="Cinematic GIS road network motion background" />
      <AnimatedRouteMap />
      <ParticleField />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 pt-20">

        <div className="grid min-h-[78vh] items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div style={{ y, opacity }} className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-sage/35 bg-deep/55 px-4 py-2 text-xs font-black uppercase tracking-[.22em] text-sage backdrop-blur-xl">
              Civic Infrastructure Intelligence · Toowoomba / Regional QLD
            </div>

            <h1 className="font-display text-[clamp(3.4rem,8.5vw,9.2rem)] font-black leading-[.78] tracking-[-.08em] text-white">
              Civic infrastructure.
              <span className="block bg-gradient-to-r from-white via-mist to-sage bg-clip-text text-transparent">
                Intelligence.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-mist/78 md:text-xl">
              Civil Engineering Technology graduate specialising in GIS-based infrastructure planning,
              transport networks, walking network evidence and stormwater analysis.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-mist/58">
              Building practical, data-supported infrastructure solutions for safer and more accessible regional communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#case-studies">View case studies</MagneticButton>
              <MagneticButton href="#what-i-do" variant="ghost">Explore capability</MagneticButton>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {metrics.map(([value, label]) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .55 }}
                  className="rounded-3xl border border-mist/10 bg-deep/55 p-4 backdrop-blur-xl"
                >
                  <strong className="block font-display text-2xl text-white">{value}</strong>
                  <span className="text-[.68rem] font-bold uppercase tracking-wider text-mist/55">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-sage/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-mist/15 bg-white/10 p-3 shadow-glass backdrop-blur-2xl">
              <Image
                src="/images/profile-headshot.png"
                alt="Professional portrait of Abhaya Simkhada"
                width={900}
                height={1100}
                priority
                className="h-[640px] w-full rounded-[2.45rem] object-cover object-center"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] border border-mist/10 bg-deep/70 p-4 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[.2em] text-sage">GIS · Transport · Stormwater</p>
                <p className="mt-2 text-sm leading-6 text-mist/70">Council-style evidence, technical reporting and infrastructure planning support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
