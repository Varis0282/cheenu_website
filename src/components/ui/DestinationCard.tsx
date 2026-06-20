import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import DestinationScene from "./DestinationScene";
import type { Destination } from "@/lib/destinations";

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
      className={`card-glow group relative block overflow-hidden rounded-3xl border border-white/10 ${
        featured ? "min-h-[28rem]" : "min-h-[24rem]"
      } ${className ?? ""}`}
    >
      {/* Illustrated backdrop */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <DestinationScene
          scene={d.scene}
          uid={`card-${d.slug}`}
          from={d.theme.from}
          via={d.theme.via}
          to={d.theme.to}
          accent={d.theme.accent}
        />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ink/30" />

      {/* Top row */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-white">
          <MapPin className="h-3 w-3 text-gold" />
          {d.country}
        </span>
        <span className="text-2xl drop-shadow">{d.flag}</span>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-script text-xl text-gold-soft">{d.kicker.split(".")[0]}</p>
        <h3 className="mt-0.5 font-display text-3xl font-bold text-white">
          {d.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {d.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/75"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-soft">
          Explore {d.name}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
