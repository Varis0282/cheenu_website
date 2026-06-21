import { MessageSquareHeart, Map, PlaneTakeoff } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: MessageSquareHeart,
    step: "01",
    title: "Share Your Dream",
    description:
      "Tell us where you want to go — or let us suggest. Fill a 1-minute form or ping us on WhatsApp.",
  },
  {
    icon: Map,
    step: "02",
    title: "We Craft Your Itinerary",
    description:
      "A tailored plan with flights, stays, sightseeing and experiences — shaped around your dates and budget.",
  },
  {
    icon: PlaneTakeoff,
    step: "03",
    title: "Pack Your Bags",
    description:
      "Confirm everything over a quick chat and you're set. We're with you before, during and after the trip.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-x">
        <SectionHeading
          kicker="Simple as can be"
          title={
            <>
              From idea to{" "}
              <span className="text-gradient-gold">boarding pass</span>, in 3 steps
            </>
          }
          subtitle="No payment gateways, no pressure — just a friendly, human way to plan the trip you've been dreaming of."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting dashed line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden md:block">
            <svg className="h-2 w-full" preserveAspectRatio="none" viewBox="0 0 1000 8">
              <line
                x1="80"
                y1="4"
                x2="920"
                y2="4"
                stroke="#f0b429"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeDasharray="2 8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <div className="relative h-full rounded-3xl border border-line bg-surface p-7 text-center">
                <div className="relative mx-auto inline-flex h-24 w-24 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-transparent" />
                  <span className="absolute inset-2 rounded-full border border-gold/30" />
                  <s.icon className="relative h-9 w-9 text-accent" strokeWidth={1.5} />
                </div>
                <div className="mt-3 font-script text-2xl text-accent">{`Step ${s.step}`}</div>
                <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
