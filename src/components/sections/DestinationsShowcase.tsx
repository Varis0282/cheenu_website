import SectionHeading from "@/components/ui/SectionHeading";
import DestinationCard from "@/components/ui/DestinationCard";
import Reveal from "@/components/ui/Reveal";
import { destinations } from "@/lib/destinations";

export default function DestinationsShowcase() {
  return (
    <section id="destinations" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading
          kicker="Where to next?"
          title={
            <>
              Four handpicked{" "}
              <span className="text-gradient-gold">destinations</span>
            </>
          }
          subtitle="Each one curated end-to-end — flights, stays, sightseeing and the little moments in between."
        />

        {/* Bento-style grid: first card spans wider on large screens. */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal
              key={d.slug}
              delay={i * 0.08}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <DestinationCard destination={d} featured={i === 0} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
