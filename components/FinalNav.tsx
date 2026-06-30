 "use client";

import { profile } from "@/lib/data";

const navItems = [
  ["Home", "#home"],
  ["Projects", "#case-studies"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Resume", "#resume"],
  ["Contact", "#contact"]
];

export function FinalNav() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-mist/10 bg-deep/70 px-4 py-3 shadow-glass backdrop-blur-2xl">
        <a href="#home" className="font-display text-base font-black tracking-tight text-white md:text-lg">
          Abhaya<span className="text-sage">.</span>
        </a>

        <div className="hidden items-center gap-5 text-xs font-black uppercase tracking-[.12em] text-mist/62 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-sage">
              {label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-sage px-4 py-2 text-xs font-black uppercase tracking-[.12em] text-deep transition hover:scale-[1.03]"
        >
          Hire / Contact
        </a>
      </nav>
    </header>
  );
}
