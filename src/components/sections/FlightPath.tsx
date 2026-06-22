"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";

// Curved route across a 1200×280 canvas.
const D = "M70,210 C 280,60 520,60 700,150 C 840,222 1020,232 1150,90";

// City stops along the route (x, y, label, flag).
const stops = [
  { x: 70, y: 210, label: "India", flag: "🇮🇳" },
  { x: 430, y: 92, label: "Dubai", flag: "🇦🇪" },
  { x: 770, y: 168, label: "Singapore", flag: "🇸🇬" },
  { x: 1150, y: 90, label: "The World", flag: "🌏" },
];

export default function FlightPath() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.4"],
  });

  useEffect(() => {
    if (pathRef.current) setReady(true);
  }, []);

  // Draw the path as you scroll.
  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  // Move the plane along the path using real geometry (reliable + rotatable).
  const pointAt = (p: number) => {
    const path = pathRef.current;
    if (!path) return { x: 0, y: 0, angle: 0 };
    const L = path.getTotalLength();
    const c = Math.min(Math.max(p, 0), 1) * L;
    const a = path.getPointAtLength(c);
    const b = path.getPointAtLength(Math.min(c + 1, L));
    return { x: a.x, y: a.y, angle: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI };
  };
  const planeX = useTransform(scrollYProgress, (p) => pointAt(p).x);
  const planeY = useTransform(scrollYProgress, (p) => pointAt(p).y);
  const planeRot = useTransform(scrollYProgress, (p) => pointAt(p).angle);

  // Subtle cloud parallax.
  const cloud1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cloud2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20">
      <div className="container-x">
        <SectionHeading
          kicker="One world, endless routes"
          title={
            <>
              Your journey, <span className="text-gradient-gold">charted</span>
            </>
          }
          subtitle="From India to the world's most beautiful places — we map every mile so all you have to do is enjoy the ride."
        />

        <div className="relative mt-8">
          {/* drifting clouds */}
          <motion.div
            style={{ x: cloud1 }}
            className="pointer-events-none absolute left-[12%] top-2 h-10 w-24 rounded-full bg-foreground/5 blur-xl"
          />
          <motion.div
            style={{ x: cloud2 }}
            className="pointer-events-none absolute right-[16%] bottom-6 h-12 w-28 rounded-full bg-foreground/5 blur-xl"
          />

          <svg viewBox="0 0 1200 280" className="w-full" fill="none">
            <defs>
              <linearGradient id="fp-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fbd34d" />
                <stop offset="100%" stopColor="#c98a16" />
              </linearGradient>
            </defs>

            {/* faint guide path */}
            <path
              d={D}
              stroke="currentColor"
              className="text-foreground/20"
              strokeWidth="2"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
            {/* drawn path */}
            <motion.path
              ref={pathRef}
              d={D}
              stroke="url(#fp-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            {/* city stops */}
            {stops.map((s) => (
              <g key={s.label}>
                <circle cx={s.x} cy={s.y} r="16" className="fill-gold/15" />
                <circle cx={s.x} cy={s.y} r="5" className="fill-gold" />
                <circle cx={s.x} cy={s.y} r="5" className="fill-gold animate-pulse-ring" style={{ transformOrigin: `${s.x}px ${s.y}px` }} />
                <text
                  x={s.x}
                  y={s.y - 26}
                  textAnchor="middle"
                  className="fill-foreground text-[15px] font-semibold"
                  style={{ fontSize: 15 }}
                >
                  {s.flag} {s.label}
                </text>
              </g>
            ))}

            {/* plane */}
            {ready && (
              <motion.g style={{ x: planeX, y: planeY, rotate: planeRot }}>
                <circle r="16" className="fill-gold/25" />
                <path
                  d="M-7,-6 L13,0 L-7,6 L-2,0 Z"
                  className="fill-gold-soft"
                  stroke="#1a1205"
                  strokeWidth="0.5"
                />
              </motion.g>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}
