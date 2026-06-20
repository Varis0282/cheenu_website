"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Sparkles, MessageCircle, ArrowRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Backdrop from "@/components/ui/Backdrop";
import { destinations } from "@/lib/destinations";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

// Globe is WebGL-only; load it on the client after hydration.
const Globe = dynamic(() => import("./Globe"), { ssr: false });

const stats = [
  { value: "4", label: "Dream Destinations" },
  { value: "100%", label: "Tailored Trips" },
  { value: "24/7", label: "Trip Support" },
];

// Floating glass pills around the globe.
const pills = [
  { flag: "🇦🇪", name: "Dubai", pos: "left-[2%] top-[12%]", delay: "0s" },
  { flag: "🇸🇬", name: "Singapore", pos: "right-[0%] top-[26%]", delay: "1.2s" },
  { flag: "🇻🇳", name: "Vietnam", pos: "left-[4%] bottom-[20%]", delay: "0.6s" },
  { flag: "🇮🇩", name: "Bali", pos: "right-[4%] bottom-[12%]", delay: "1.8s" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const wa = whatsappLink(
    siteConfig.phoneIntl,
    "Hi! I'd love to plan an international trip. Can you share some options?",
  );

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <Backdrop />

      {/* Animated flight path */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
      >
        <path
          d="M-50,480 C300,300 700,520 1250,180"
          fill="none"
          stroke="#f0b429"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeOpacity="0.5"
          className="animate-dash"
        />
      </svg>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ── Copy ── */}
        <div className="text-center lg:text-left">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Discover · Explore · Experience
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Unforgettable journeys to the world&apos;s most{" "}
            <span className="text-gradient-gold">beautiful places.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0"
          >
            From the temples of Bali to the towers of Dubai, we craft seamless
            international holidays from India — handpicked stays, every detail
            sorted. You just bring the excitement.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Plan My Trip
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href={wa}
              external
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* trust + stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row lg:justify-start"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {destinations.map((d) => (
                  <span
                    key={d.slug}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-midnight text-base"
                    title={d.name}
                  >
                    {d.flag}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-white/55">Loved by happy travelers</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-white/15 sm:block" />

            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Globe ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[34rem]"
        >
          {/* glow + rotating ring */}
          <div className="absolute inset-[8%] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-spin-slow" />
          <div className="absolute inset-[6%] rounded-full border border-white/5" />

          <div className="absolute inset-[6%]">
            <Globe />
          </div>

          {/* floating destination pills */}
          {pills.map((p) => (
            <div
              key={p.name}
              className={`absolute ${p.pos} animate-float`}
              style={{ animationDelay: p.delay }}
            >
              <div className="flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-sm font-medium text-white shadow-lg">
                <span className="text-base">{p.flag}</span>
                {p.name}
              </div>
            </div>
          ))}

          {/* badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-midnight/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gold-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Unforgettable Experiences Await
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 rounded-full bg-gold animate-float" />
        </div>
      </div>
    </section>
  );
}
