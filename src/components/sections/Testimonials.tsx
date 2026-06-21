import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// NOTE: Sample testimonials — replace with real client reviews when available.
const testimonials = [
  {
    quote:
      "Our Bali honeymoon was flawless. Every stay, every sunset was handpicked — we just had to show up and fall in love all over again.",
    name: "Aarav & Diya",
    trip: "Bali · Honeymoon",
    initials: "AD",
    color: "from-emerald-400/40 to-amber-400/30",
  },
  {
    quote:
      "Took my whole family to Dubai. The kids loved the desert safari, my parents loved how smooth everything was. Zero stress, all memories.",
    name: "Rohan Mehta",
    trip: "Dubai · Family",
    initials: "RM",
    color: "from-amber-400/40 to-sky-400/30",
  },
  {
    quote:
      "Singapore with friends, planned entirely over WhatsApp. Fast replies, honest advice and a trip that was worth every single moment.",
    name: "Sneha Kapoor",
    trip: "Singapore · Friends",
    initials: "SK",
    color: "from-sky-400/40 to-indigo-400/30",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <SectionHeading
          kicker="Happy travelers"
          title={
            <>
              Stories that{" "}
              <span className="text-gradient-gold">stay with you</span>
            </>
          }
          subtitle="The best itineraries are the ones you never want to end."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative h-full rounded-3xl border border-line bg-surface p-7">
                <Quote className="h-9 w-9 text-accent/40" />
                <div className="mt-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-foreground ring-1 ring-white/20`}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{t.name}</span>
                    <span className="block text-xs text-accent">{t.trip}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
