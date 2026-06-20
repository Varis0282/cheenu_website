import { Plane } from "lucide-react";

const items = [
  "Stunning Landscapes",
  "Iconic Attractions",
  "Exciting Adventures",
  "Luxury Stays",
  "Delicious Cuisine",
  "Rich Culture & Heritage",
  "Relaxing Beaches",
  "Memories That Last",
  "Shopping Paradise",
];

/** Seamless infinite ribbon of travel keywords. */
export default function MarqueeStrip() {
  return (
    <div className="relative border-y border-white/10 bg-midnight/60 py-4">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                {item}
              </span>
              <Plane className="h-4 w-4 shrink-0 text-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
