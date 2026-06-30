import { Hero } from "@/components/Hero";
import { FinalNav } from "@/components/FinalNav";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { WhatIDo } from "@/components/WhatIDo";
import { CaseStudyShowcase } from "@/components/CaseStudyShowcase";
import { ExperienceFinal } from "@/components/ExperienceFinal";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Evidence } from "@/components/Evidence";
import { Keywords } from "@/components/Keywords";
import { ResumeCTA } from "@/components/ResumeCTA";
import { EngineeringNotes } from "@/components/EngineeringNotes";
import { FinalContact } from "@/components/FinalContact";
import { CommandPalette } from "@/components/CommandPalette";

export default function Home() {
  return (
    <main>
      <FinalNav />
      <CommandPalette />
      <Hero />
      <ExecutiveSummary />
      <WhatIDo />
      <CaseStudyShowcase />
      <ExperienceFinal />
      <SkillsMatrix />
      <Evidence />
      <Keywords />
      <ResumeCTA />
      <EngineeringNotes />
      <FinalContact />
    </main>
  );
}
