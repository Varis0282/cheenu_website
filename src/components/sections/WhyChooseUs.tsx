import { ShieldCheck, Gem, CalendarDays, Plane, Headphones, Wallet } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe & Welcoming",
    description:
      "Trusted partners, vetted stays and warm hospitality so you travel with total peace of mind.",
  },
  {
    icon: Gem,
    title: "World-Class Experiences",
    description:
      "From UNESCO wonders to luxury escapes — only the experiences worth flying for make the cut.",
  },
  {
    icon: CalendarDays,
    title: "Year-Round Destinations",
    description:
      "We match the destination to the season, so every trip lands in its most beautiful weather.",
  },
  {
    icon: Plane,
    title: "Easy Access",
    description:
      "Convenient flights and smooth connections from major Indian cities — door to dream destination.",
  },
  {
    icon: Headphones,
    title: "Support All The Way",
    description:
      "One WhatsApp away before, during and after your trip. Real humans, real-time help.",
  },
  {
    icon: Wallet,
    title: "Tailored To You",
    description:
      "Couples, families, friends or corporate groups — every itinerary is built around your plans.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="container-x">
        <SectionHeading
          kicker="Why travel with us"
          title={
            <>
              Holidays that feel{" "}
              <span className="text-gradient-gold">effortless</span>
            </>
          }
          subtitle="We sweat the details — visas, flights, stays and sightseeing — so all you carry home are the memories."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div className="card-glow group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.05]">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/20">
                  <r.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {r.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
