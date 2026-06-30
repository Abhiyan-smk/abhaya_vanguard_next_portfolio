 "use client";

import { motion } from "motion/react";

const roads = [
  "M20 220 C150 160 220 280 360 210 S620 180 760 260 S980 320 1160 210",
  "M70 360 C210 330 310 410 470 350 S690 260 870 330 S1010 430 1160 365",
  "M100 110 C260 190 370 80 520 150 S770 240 930 140 S1080 105 1190 170",
  "M180 500 C310 440 450 560 610 490 S850 390 1040 510",
  "M250 40 L300 150 L285 250 L360 360 L420 480",
  "M640 60 L610 160 L650 260 L620 370 L690 520",
  "M930 40 L880 180 L915 330 L870 480"
];

const routes = [
  "M135 318 C250 275 330 354 455 305 S620 226 735 276 S895 373 1040 330",
  "M210 142 C320 205 415 118 535 172 S720 250 842 182",
  "M318 478 C455 408 575 520 732 438 S875 405 1010 485"
];

const nodes = [
  [135, 318], [455, 305], [735, 276], [1040, 330],
  [210, 142], [535, 172], [842, 182],
  [318, 478], [732, 438], [1010, 485]
];

export function AnimatedRouteMap() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90">
      <svg viewBox="0 0 1200 620" className="h-full w-full">
        <defs>
          <filter id="routeGlow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {roads.map((d, index) => (
          <motion.path
            key={`road-${index}`}
            d={d}
            fill="none"
            stroke="rgba(201,206,214,.18)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: index * 0.08 }}
          />
        ))}

        {routes.map((d, index) => (
          <motion.path
            key={`route-${index}`}
            d={d}
            fill="none"
            stroke={index === 1 ? "rgba(126,211,143,.95)" : "rgba(245,197,66,.96)"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="10 12"
            filter="url(#routeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.6 + index * 0.35, ease: "easeInOut" }}
          />
        ))}

        {nodes.map(([cx, cy], index) => (
          <motion.circle
            key={`node-${index}`}
            cx={cx}
            cy={cy}
            r="5"
            fill={index % 3 === 0 ? "#7ed38f" : "#f5c542"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.65, 1, 0.75] }}
            transition={{ duration: 1.8, delay: 1.2 + index * 0.08, repeat: Infinity, repeatDelay: 2.4 }}
          />
        ))}
      </svg>
    </div>
  );
}
