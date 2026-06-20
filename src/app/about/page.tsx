import type { Metadata } from "next";
import { Compass, HeartHandshake, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import DestinationScene from "@/components/ui/DestinationScene";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: `${siteConfig.name} is a passionate team crafting unforgettable international holidays from India — personal, seamless and built entirely around you.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: HeartHandshake,
    title: "People First",
    description:
      "You're never a booking reference. Every trip is planned by real people who actually pick up the phone.",
  },
  {
    icon: ShieldCheck,
    title: "Honest & Transparent",
    description:
      "Clear advice, no hidden surprises and no pressure. We recommend what's right for you, not what's easiest for us.",
  },
  {
    icon: Compass,
    title: "Tailored, Always",
    description:
      "Couples, families, friends or big groups — every itinerary is shaped around your dates, pace and budget.",
  },
  {
    icon: Sparkles,
    title: "Detail Obsessed",
    description:
      "From the perfect sunset spot to the smoothest airport transfer, the little things are what we sweat over.",
  },
];

const stats = [
  { value: "4", label: "Curated Destinations" },
  { value: "5+", label: "Group Tour Regions" },
  { value: "100%", label: "Tailored Itineraries" },
  { value: "24/7", label: "Travel Support" },
];

export default function AboutPage() {
  const wa = whatsappLink(siteConfig.phoneIntl, "Hi! I'd love to know more about your trips.");

  return (
    <>
      <PageHeader
        kicker="Discover · Explore · Experience"
        title={
          <>
            We turn wanderlust into{" "}
            <span className="text-gradient-gold">real journeys</span>
          </>
        }
        subtitle={`${siteConfig.name} helps travelers across India experience the world's most beautiful places — without the planning stress.`}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="font-script text-2xl text-gold-soft sm:text-3xl">
              Our story
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl">
              Travel, made personal
            </h2>
            <div className="mt-5 space-y-4 text-white/70">
              <p>
                We started {siteConfig.name} with one simple belief: international
                travel should feel exciting from the very first message — not
                buried under endless tabs, confusing packages and hidden costs.
              </p>
              <p>
                So we do things differently. You tell us where you dream of going,
                and we handcraft the whole journey — flights, stays, sightseeing
                and the little moments in between. Then we take it forward on a
                friendly WhatsApp chat, at your pace.
              </p>
              <p>
                From the lantern-lit streets of Hoi An to the golden dunes of
                Dubai, we&apos;re here to make sure every trip becomes a story
                worth telling.
              </p>
            </div>
            <div className="mt-7">
              <Button href="/contact" size="lg">
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <DestinationScene scene="marina" uid="about-scene" accent="#f0b429" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <p className="font-script text-3xl text-gold-soft">
                  Let&apos;s Explore Together
                </p>
                <p className="mt-1 text-sm text-white/70">
                  One world. Many stories. Yours next.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-x">
          <SectionHeading
            kicker="What we stand for"
            title={
              <>
                The values behind every{" "}
                <span className="text-gradient-gold">itinerary</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent text-gold ring-1 ring-gold/20">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-bold text-gradient-gold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-navy to-midnight p-8 text-center sm:p-10 lg:flex-row lg:text-left">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Have a destination in mind?
                </h2>
                <p className="mt-2 text-white/65">
                  Let&apos;s turn it into your next unforgettable trip.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">Plan My Trip</Button>
                <Button href={wa} external variant="whatsapp" size="lg">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
