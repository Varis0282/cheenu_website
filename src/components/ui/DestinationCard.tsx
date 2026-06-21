import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DestinationMedia from "./DestinationMedia";
import type { Destination } from "@/lib/destinations";
import { formatINR } from "@/lib/utils";

export default function DestinationCard({
  destination,
  className,
  featured = false,
}: {
  destination: Destination;
  className?: string;
  featured?: boolean;
}) {
  const d = destination;
  return (
    <Link
      href={`/destinations/${d.slug}`}
      className={`dark card-glow group relative block overflow-hidden rounded-3xl border border-line ${
        featured ? "min-h-[28rem]" : "min-h-[24rem]"
      } ${className ?? ""}`}
    >
      {/* Photo backdrop (illustrated scene shows while it loads) */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <DestinationMedia
          scene={d.scene}
          uid={`card-${d.slug}`}
          image={d.image}
          alt={`${d.name}, ${d.country}`}
          from={d.theme.from}
          via={d.theme.via}
          to={d.theme.to}
          accent={d.theme.accent}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ink/30" />

      {/* Top row */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-foreground">
          <span>{d.flag}</span>
          {d.country}
        </span>
        <span className="rounded-full bg-gold/90 px-3 py-1.5 text-xs font-bold text-[#1a1205] shadow-lg backdrop-blur">
          From {formatINR(d.price)}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-script text-xl text-accent">{d.kicker.split(".")[0]}</p>
        <h3 className="mt-0.5 font-display text-3xl font-bold text-foreground">
          {d.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {d.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="rounded-full border border-line bg-surface2 px-2.5 py-1 text-[11px] text-muted"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent">
          Explore {d.name}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
