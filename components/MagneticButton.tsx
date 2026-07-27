 "use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
};

export function MagneticButton({ children, href, variant = "primary" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.4 });

  const base =
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-black tracking-tight transition-colors";
  const skin =
    variant === "primary"
      ? "bg-gradient-to-br from-white via-mist to-sage text-deep shadow-glass"
      : "border border-mist/20 bg-white/5 text-white hover:border-sage/50";

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`${base} ${skin}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 translate-y-full bg-sage/30 transition-transform duration-500 group-hover:translate-y-0" />
    </motion.a>
  );
}
