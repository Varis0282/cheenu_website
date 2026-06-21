import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MessageCircle, Check, Sparkles } from "lucide-react";
import { destinations, getDestination } from "@/lib/destinations";
import { siteConfig } from "@/lib/site";
import { whatsappLink, formatINR } from "@/lib/utils";
import DestinationMedia from "@/components/ui/DestinationMedia";
import DestinationCard from "@/components/ui/DestinationCard";
import FeatureIcon from "@/components/ui/FeatureIcon";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  const title = `${d.name} Tour Packages from India`;
  return {
    title,
    description: d.intro,
    alternates: { canonical: `/destinations/${d.slug}` },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description: d.intro,
      type: "article",
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const wa = whatsappLink(
    siteConfig.phoneIntl,
    `Hi! I'm interested in a trip to ${d.name}. Can you share package options?`,
  );
  const others = destinations.filter((x) => x.slug !== d.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="dark relative min-h-[88vh] overflow-hidden pt-28">
        <div className="absolute inset-0">
          <DestinationMedia
            scene={d.scene}
            uid={`hero-${d.slug}`}
            image={d.image}
            alt={`${d.name}, ${d.country}`}
            from={d.theme.from}
            via={d.theme.via}
            to={d.theme.to}
            accent={d.theme.accent}
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

        <div className="container-x relative flex min-h-[calc(88vh-7rem)] flex-col justify-end pb-16">
          <Reveal>
            <nav className="mb-5 flex items-center gap-1.5 text-xs text-muted">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link href="/#destinations" className="hover:text-accent">Destinations</Link>
              <span>/</span>
              <span className="text-foreground">{d.name}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="text-4xl drop-shadow-lg">{d.flag}</span>
              <span className="rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground">
                {d.country}
              </span>
            </div>

            <p className="mt-5 font-script text-2xl text-accent sm:text-3xl">
              {d.kicker}
            </p>
            <h1 className="mt-1 font-display text-5xl font-bold leading-[0.95] text-foreground sm:text-7xl">
              {d.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted">{d.subtitle}</p>

            {/* quick facts */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {d.quickFacts.map((f) => (
                <span
                  key={f.label}
                  className="rounded-full glass px-4 py-2 text-sm text-foreground"
                >
                  <span className="text-muted">{f.label}: </span>
                  <span className="font-semibold">{f.value}</span>
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-end gap-2">
              <span className="text-sm text-muted">Starting from</span>
              <span className="font-display text-3xl font-bold text-gradient-gold">
                {formatINR(d.price)}
              </span>
              <span className="text-sm text-muted">/ person</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="#enquire" size="lg">
                Plan This Trip
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href={wa} external variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                Ask on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {d.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{d.intro}</p>
            <p className="mt-6 inline-flex items-center gap-2 font-script text-2xl text-accent">
              <Sparkles className="h-5 w-5" />
              {d.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-surface p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Trip Snapshot
              </h3>
              <dl className="mt-5 divide-y divide-line">
                <div className="flex items-center justify-between py-3">
                  <dt className="text-sm text-muted">Starting price</dt>
                  <dd className="text-sm font-bold text-accent">
                    {formatINR(d.price)} <span className="font-normal text-muted">/ person</span>
                  </dd>
                </div>
                {d.quickFacts.map((f) => (
                  <div key={f.label} className="flex items-center justify-between py-3">
                    <dt className="text-sm text-muted">{f.label}</dt>
                    <dd className="text-sm font-semibold text-foreground">{f.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3">
                  <dt className="text-sm text-muted">Trip style</dt>
                  <dd className="text-sm font-semibold text-foreground">Fully tailored</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="py-16">
        <div className="container-x">
          <SectionHeading
            align="left"
            kicker={`Why ${d.name}?`}
            title={
              <>
                Reasons you&apos;ll{" "}
                <span className="text-gradient-gold">love it here</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.whyChoose.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-accent">
                    <FeatureIcon name={f.icon} className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experiences ── */}
      <section className="py-16">
        <div className="container-x">
          <SectionHeading
            align="left"
            kicker="Experiences that inspire"
            title={
              <>
                Things to <span className="text-gradient-gold">see &amp; do</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {d.experiences.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.07}>
                <div className="card-glow group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent text-accent ring-1 ring-gold/20">
                      <FeatureIcon name={f.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <div className="dark relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-navy/60 to-midnight p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Trip highlights you won&apos;t want to miss
              </h3>
              <div className="mt-7 flex flex-wrap gap-3">
                {d.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface2 px-4 py-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 text-accent" strokeWidth={2.5} />
                    {h}
                  </span>
                ))}
              </div>
              <p className="mt-8 font-script text-2xl text-accent">{d.closing}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section id="enquire" className="scroll-mt-24 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="font-script text-2xl text-accent sm:text-3xl">
              Ready when you are
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Let&apos;s plan your{" "}
              <span className="text-gradient-gold">{d.name}</span> escape
            </h2>
            <p className="mt-4 text-muted">
              Share your dates and we&apos;ll send a tailored {d.name} itinerary —
              flights, stays and experiences sorted. No payment needed to start;
              we take it forward on WhatsApp.
            </p>
            <div className="mt-6">
              <Button href={wa} external variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                Quick chat on WhatsApp
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InquiryForm defaultDestination={d.name} />
          </Reveal>
        </div>
      </section>

      {/* ── Other destinations ── */}
      <section className="py-16">
        <div className="container-x">
          <SectionHeading
            kicker="Keep exploring"
            title={
              <>
                More <span className="text-gradient-gold">dream destinations</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.08}>
                <DestinationCard destination={o} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
