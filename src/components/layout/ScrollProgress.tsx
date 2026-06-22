"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Plane } from "lucide-react";

/**
 * Thin gold reading-progress bar with a little airplane that flies along the
 * top of the page as you scroll.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const left = useTransform(scaleX, (v) => `${v * 100}%`);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-gold-soft via-gold to-gold-deep"
      />
      <motion.div
        style={{ left }}
        className="fixed top-0 z-[60] -ml-2 -mt-2 text-gold-soft"
      >
        <Plane className="h-4 w-4 rotate-45 drop-shadow-[0_2px_6px_rgba(240,180,41,0.6)]" />
      </motion.div>
    </>
  );
}
