"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Plane } from "lucide-react";

/**
 * The dashed line linking the three steps, with a plane that flies across it
 * (and the line drawing in) as the section scrolls into view.
 */
export default function HowItWorksConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["7%", "93%"]);
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-0 right-0 top-12 hidden md:block"
    >
      <svg className="h-2 w-full" preserveAspectRatio="none" viewBox="0 0 1000 8">
        <line
          x1="80"
          y1="4"
          x2="920"
          y2="4"
          stroke="currentColor"
          className="text-foreground/20"
          strokeWidth="2"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <motion.line
          x1="80"
          y1="4"
          x2="920"
          y2="4"
          stroke="#f0b429"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: draw }}
        />
      </svg>
      <motion.div
        style={{ left }}
        className="absolute -top-2.5 -translate-x-1/2 text-gold-soft"
      >
        <Plane className="h-5 w-5 rotate-45 drop-shadow-[0_2px_6px_rgba(240,180,41,0.6)]" />
      </motion.div>
    </div>
  );
}
