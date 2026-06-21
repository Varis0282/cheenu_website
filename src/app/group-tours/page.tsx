import type { Metadata } from "next";
import { Check, Users, Calendar, Heart, Building2, GraduationCap, PartyPopper, ArrowRight, MessageCircle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import DestinationMedia from "@/components/ui/DestinationMedia";
import InquiryForm from "@/components/sections/InquiryForm";
import { groupRegions, tourHighlights, tourInclusions } from "@/lib/destinations";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "International Group Tours from India",
  description:
    "Explore the world together on well-planned group departures — Europe, Japan, Southeast Asia, Dubai and Switzerland. Flights, stays, sightseeing and a tour manager included. Groups of 10+ get special benefits.",
  alternates: { canonical: "/group-tours" },
};

const travelStyles = [
  { icon: Heart, label: "Family Reunions" },
  { icon: Building2, label: "Corporate Trips" },
  { icon: GraduationCap, label: "School Groups" },
  { icon: PartyPopper, label: "Social Circles" },
];

export default function GroupToursPage() {
  const wa = whatsappLink(
    siteConfig.phoneIntl,
    "Hi! We're a group interested in an international group tour. Can you share options?",
  );

  return (
    <>
      <PageHeader
        kicker="Explore the world together"
        title={
          <>
            International <span className="text-gradient-gold">Group Tours</span>
          </>
        }
        subtitle="Discover the world with like-minded travelers and create memories that last a lifetime. Well-planned itineraries, comfortable stays and unforgettable experiences — all together."
        crumbs={[{ label: "Group Tours" }]}
      />

      {/* Regions */}
      <section className="py-12">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {groupRegions.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08} className="h-full">
                <div className="dark card-glow group relative h-64 overflow-hidden rounded-3xl border border-line">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <DestinationMedia
                      scene={r.scene}
                      uid={`gt-${r.name}`}
                      image={r.image}
                      alt={r.name}
                      accent={r.accent}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-2xl">{r.flag}</div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{r.tagline}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights + inclusions */}
      <section className="py-14">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-line bg-surface p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">Tour Highlights</h3>
              <ul className="mt-6 space-y-4">
                {tourHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-accent">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-3xl border border-line bg-surface p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">Tour Inclusions</h3>
              <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {tourInclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-accent">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Group benefit + travel styles */}
      <section className="py-14">
        <div className="container-x">
          <Reveal>
            <div className="dark relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/15 via-midnight to-ink p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                    <Users className="h-4 w-4" /> Groups of 10+
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                    Travel together,{" "}
                    <span className="text-gradient-gold">discover more</span>
                  </h3>
                  <p className="mt-4 text-muted">
                    Whether it&apos;s a family reunion, corporate trip, school group or
                    social circle — we have the perfect tour for you. Bigger groups
                    unlock better value and more experiences.
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-foreground">
                    <Calendar className="h-5 w-5 text-accent" />
                    Departures all year round · Customized dates available for groups
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {travelStyles.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface2 p-6 text-center"
                    >
                      <s.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section className="py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              kicker="Get special benefits"
              title={
                <>
                  Plan your <span className="text-gradient-gold">group tour</span>
                </>
              }
              subtitle="Tell us your group size and dream destination — we'll put together a custom group itinerary with the best value."
            />
            <div className="mt-6">
              <Button href={wa} external variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InquiryForm defaultDestination="International Group Tour" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
