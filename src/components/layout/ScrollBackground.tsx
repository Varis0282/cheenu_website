"use client";

import { motion, useScroll, useTransform } from "motion/react";

/* Realistic side-view airliner silhouette (faces right) with a soft contrail. */
function Airplane() {
  const windows = Array.from({ length: 13 }, (_, i) => 205 + i * 17);
  return (
    <svg viewBox="0 0 520 220" className="w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]" aria-hidden>
      <defs>
        <linearGradient id="bg-pl-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#fbd34d" />
          <stop offset="100%" stopColor="#e0a92e" />
        </linearGradient>
        <linearGradient id="bg-pl-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b429" />
          <stop offset="100%" stopColor="#a9760f" />
        </linearGradient>
        <linearGradient id="bg-pl-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbd34d" stopOpacity="0" />
          <stop offset="100%" stopColor="#fbd34d" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* contrail */}
      <rect x="-200" y="120" width="270" height="7" rx="3.5" fill="url(#bg-pl-trail)" />
      <rect x="-140" y="138" width="190" height="5" rx="2.5" fill="url(#bg-pl-trail)" opacity="0.6" />

      {/* main wing + tail stabiliser + engine (behind body) */}
      <path d="M262,124 L156,182 L206,182 L312,124 Z" fill="url(#bg-pl-wing)" />
      <path d="M96,116 L56,130 L98,124 Z" fill="url(#bg-pl-wing)" />
      <ellipse cx="250" cy="132" rx="27" ry="10" fill="url(#bg-pl-wing)" />

      {/* fuselage */}
      <path
        d="M58,104 C88,90 150,90 190,91 L378,92 C420,93 452,99 468,110 C452,121 420,127 378,127 L190,126 C150,127 92,120 58,104 Z"
        fill="url(#bg-pl-body)"
      />
      {/* vertical tail fin */}
      <path d="M168,92 L106,44 L140,56 L196,92 Z" fill="url(#bg-pl-body)" />

      {/* cockpit + windows */}
      <path d="M441,104 q15,1 20,7 q-13,3 -23,1 z" fill="#0a1024" opacity="0.45" />
      <g fill="#0a1024" opacity="0.3">
        {windows.map((x) => (
          <rect key={x} x={x} y={106} width="4.5" height="5" rx="1" />
        ))}
      </g>
    </svg>
  );
}

/**
 * Page-wide animated underlay: a faint flight path, drifting clouds and an
 * airplane that flies across the whole page as you scroll — sitting behind all
 * the content (kept subtle so text stays readable).
 */
export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Plane journeys across + climbs as you scroll the full page.
  const left = useTransform(scrollYProgress, [0, 1], ["-18%", "106%"]);
  const top = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "26%", "62%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, -12, -1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.2]);

  // Cloud parallax.
  const cloud1 = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const cloud2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* faint dotted great-circle route */}
      <svg
        className="absolute inset-0 h-full w-full text-foreground opacity-[0.12]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M-120,780 C 360,300 1080,300 1560,140"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="2 16"
          strokeLinecap="round"
        />
      </svg>

      {/* drifting clouds */}
      <motion.div
        style={{ x: cloud1 }}
        className="absolute left-[8%] top-[28%] h-40 w-96 rounded-full bg-foreground/[0.04] blur-3xl"
      />
      <motion.div
        style={{ x: cloud2 }}
        className="absolute right-[6%] top-[58%] h-44 w-[28rem] rounded-full bg-foreground/[0.04] blur-3xl"
      />

      {/* the airplane underlay */}
      <motion.div
        style={{ left, top }}
        className="absolute w-[30vw] max-w-[460px] -translate-x-1/2 -translate-y-1/2 opacity-[0.5]"
      >
        <motion.div style={{ rotate, scale }}>
          <Airplane />
        </motion.div>
      </motion.div>
    </div>
  );
}
