import Link from "next/link";
import { Check, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import DestinationMedia from "@/components/ui/DestinationMedia";
import { groupRegions, tourInclusions } from "@/lib/destinations";

export default function GroupToursTeaser() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 spotlight opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          kicker="Explore the world together"
          title={
            <>
              International{" "}
              <span className="text-gradient-gold">Group Tours</span>
            </>
          }
          subtitle="Travel with like-minded explorers on well-planned departures across the globe — perfect for families, friends, corporates and social circles."
        />

        {/* Region tiles */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {groupRegions.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07} className="h-full">
              <Link
                href="/group-tours"
                className="dark card-glow group relative block h-44 overflow-hidden rounded-2xl border border-line"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <DestinationMedia
                    scene={r.scene}
                    uid={`grp-${r.name}`}
                    image={r.image}
                    alt={r.name}
                    accent={r.accent}
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-xl">{r.flag}</div>
                  <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                    {r.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted">
                    {r.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Inclusions + group benefit */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-line bg-surface p-7">
              <h3 className="font-display text-xl font-bold text-foreground">
                Every group tour includes
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {tourInclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/15 to-transparent p-7">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-accent">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                  Groups of 10+ get special benefits
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Better value, more experiences and customized departure dates.
                  Departures available all year round.
                </p>
              </div>
              <Button href="/group-tours" className="mt-6 w-full">
                Explore Group Tours
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
