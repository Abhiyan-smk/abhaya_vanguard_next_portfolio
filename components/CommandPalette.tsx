 "use client";

import { actions, projects } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const base = [
      { label: "Go to Role Fit", href: "#role-fit" },
      { label: "Go to Evidence", href: "#evidence" },
      { label: "Go to Case Studies", href: "#case-studies" },
      { label: "Go to ATS Keywords", href: "#keywords" },
      { label: "Go to Contact", href: "#contact" },
      ...actions.map((item) => ({ label: item.label, href: item.href })),
      ...projects.map((project) => ({ label: project.title, href: "#case-studies" }))
    ];

    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (key === "escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-mist/15 bg-deep/80 px-4 py-3 text-xs font-black text-white shadow-glass backdrop-blur-xl"
      >
        Ctrl K
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[90] bg-deep/75 p-4 pt-24 backdrop-blur-xl" onClick={() => setOpen(false)}>
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-mist/15 bg-deep/95 p-4 shadow-glass" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-mist/10 pb-3">
          <Search className="h-5 w-5 text-sage" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills or actions..."
            className="h-11 flex-1 bg-transparent text-white outline-none placeholder:text-mist/45"
          />
          <button onClick={() => setOpen(false)} className="rounded-xl p-2 text-mist hover:bg-white/10 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 max-h-[55vh] overflow-auto">
          {items.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-2xl px-4 text-sm font-bold text-mist transition hover:bg-sage/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
