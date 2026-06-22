"use client";

import { motion, useScroll, useTransform } from "motion/react";

/* Folded paper airplane (faces right) with a soft contrail. */
function PaperPlane() {
  return (
    <svg viewBox="0 0 320 200" className="w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.3)]" aria-hidden>
      <defs>
        <linearGradient id="bg-pp-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fbd34d" />
        </linearGradient>
        <linearGradient id="bg-pp-bot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b429" />
          <stop offset="100%" stopColor="#a9760f" />
        </linearGradient>
        <linearGradient id="bg-pp-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbd34d" stopOpacity="0" />
          <stop offset="100%" stopColor="#fbd34d" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect x="-150" y="86" width="190" height="6" rx="3" fill="url(#bg-pp-trail)" />
      <rect x="-90" y="104" width="130" height="4" rx="2" fill="url(#bg-pp-trail)" opacity="0.6" />
      <polygon points="280,88 44,32 132,104" fill="url(#bg-pp-top)" />
      <polygon points="280,88 132,104 70,164" fill="url(#bg-pp-bot)" />
      <line x1="132" y1="104" x2="44" y2="32" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Page-wide animated underlay: a faint flight path, drifting clouds and a
 * paper airplane that flies across the whole page as you scroll — sitting
 * behind all the content (kept subtle so text stays readable).
 */
export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Plane journeys across + climbs as you scroll the full page.
  const left = useTransform(scrollYProgress, [0, 1], ["-16%", "104%"]);
  const top = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "26%", "62%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, -13, -1]);
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
        className="absolute w-[26vw] max-w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-[0.45]"
      >
        <motion.div style={{ rotate, scale }}>
          <PaperPlane />
        </motion.div>
      </motion.div>
    </div>
  );
}
