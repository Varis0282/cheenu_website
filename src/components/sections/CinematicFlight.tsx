"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/* Big folded paper airplane (faces right) with a soft contrail. */
function PaperPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden>
      <defs>
        <linearGradient id="pp-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fbd34d" />
        </linearGradient>
        <linearGradient id="pp-bot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b429" />
          <stop offset="100%" stopColor="#a9760f" />
        </linearGradient>
        <linearGradient id="pp-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbd34d" stopOpacity="0" />
          <stop offset="100%" stopColor="#fbd34d" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* contrail */}
      <rect x="-150" y="86" width="190" height="6" rx="3" fill="url(#pp-trail)" />
      <rect x="-90" y="104" width="130" height="4" rx="2" fill="url(#pp-trail)" opacity="0.6" />
      {/* plane */}
      <polygon points="280,88 44,32 132,104" fill="url(#pp-top)" />
      <polygon points="280,88 132,104 70,164" fill="url(#pp-bot)" />
      <line x1="132" y1="104" x2="44" y2="32" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
    </svg>
  );
}

function Cloud({
  style,
  className,
}: {
  style: { x: MotionValue<string>; scale?: MotionValue<number> };
  className?: string;
}) {
  return (
    <motion.div
      style={style}
      className={`pointer-events-none absolute rounded-full bg-white/10 blur-2xl ${className ?? ""}`}
    />
  );
}

/**
 * Apple-style pinned scroll stage: a large paper airplane glides across the
 * screen behind big crossfading copy while clouds drift past at different
 * speeds — all driven by scroll position.
 */
export default function CinematicFlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Plane glides left → right in a gentle arc, tilting + scaling as it goes.
  const planeLeft = useTransform(scrollYProgress, [0, 1], ["-42%", "118%"]);
  const planeY = useTransform(scrollYProgress, [0, 0.5, 1], [40, -24, 28]);
  const planeRot = useTransform(scrollYProgress, [0, 0.5, 1], [8, -4, 7]);
  const planeScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.92]);

  // Parallax clouds.
  const cloudA = useTransform(scrollYProgress, [0, 1], ["8%", "-26%"]);
  const cloudB = useTransform(scrollYProgress, [0, 1], ["-12%", "30%"]);
  const cloudC = useTransform(scrollYProgress, [0, 1], ["20%", "-14%"]);

  // Three crossfading captions.
  const op1 = useTransform(scrollYProgress, [0.02, 0.1, 0.26, 0.33], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.35, 0.43, 0.59, 0.66], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.68, 0.76, 0.96, 1], [0, 1, 1, 1]);
  const y1 = useTransform(scrollYProgress, [0.02, 0.33], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.66], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0.68, 1], [30, -10]);

  const captions = [
    { op: op1, y: y1, word: "Dream it.", sub: "Picture the place you've always wanted to see." },
    { op: op2, y: y2, word: "Live it.", sub: "We plan every detail — down to the last sunset." },
    { op: op3, y: y3, word: "Love it.", sub: "Come home with stories worth retelling." },
  ];

  return (
    <section ref={ref} className="dark relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* dawn sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1f] via-[#13234d] to-[#caa24a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(240,180,41,0.5),transparent_55%)]" />

        {/* stars up top */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${(i * 47) % 100}%`,
                top: `${(i * 23) % 45}%`,
                width: i % 4 === 0 ? 2 : 1,
                height: i % 4 === 0 ? 2 : 1,
                animationDelay: `${(i % 5) * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* parallax clouds */}
        <Cloud style={{ x: cloudA }} className="left-[6%] top-[34%] h-24 w-72" />
        <Cloud style={{ x: cloudB }} className="right-[4%] top-[22%] h-20 w-64" />
        <Cloud style={{ x: cloudC }} className="left-[30%] bottom-[16%] h-28 w-80" />

        {/* the airplane (behind the text) */}
        <motion.div
          style={{ left: planeLeft, top: "38%" }}
          className="absolute z-10 w-[44vw] max-w-[560px] -translate-y-1/2"
        >
          <motion.div style={{ y: planeY, rotate: planeRot, scale: planeScale }}>
            <PaperPlane className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]" />
          </motion.div>
        </motion.div>

        {/* crossfading copy (above the plane) */}
        <div className="relative z-20 px-6 text-center">
          <span className="font-script text-2xl text-gold-soft sm:text-3xl">
            A journey of a lifetime
          </span>
          <div className="relative mt-2 h-[26vh] sm:h-[30vh]">
            {captions.map((c) => (
              <motion.div
                key={c.word}
                style={{ opacity: c.op, y: c.y }}
                className="absolute inset-0 flex flex-col items-center justify-start"
              >
                <h2 className="font-display text-6xl font-bold leading-none text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl">
                  {c.word}
                </h2>
                <p className="mt-5 max-w-md text-base text-white/80 sm:text-lg">
                  {c.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* horizon glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#caa24a]/60 to-transparent" />
      </div>
    </section>
  );
}
