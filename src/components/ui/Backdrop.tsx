import { cn } from "@/lib/utils";

/**
 * Shared decorative background: drifting aurora blobs, a faint dotted grid and
 * a scatter of twinkling stars. Purely cosmetic + pointer-events-none.
 */
export default function Backdrop({
  className,
  stars = 26,
}: {
  className?: string;
  stars?: number;
}) {
  // Deterministic pseudo-random star positions (stable between renders).
  const starDots = Array.from({ length: stars }, (_, i) => {
    const x = (i * 53) % 100;
    const y = (i * 29) % 100;
    const d = (i % 6) * 0.5;
    const s = i % 4 === 0 ? 2 : 1;
    return { x, y, d, s };
  });

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-foreground) 35%, transparent) 1px, transparent 0)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />
      {/* aurora blobs */}
      <div className="absolute -left-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[120px] animate-aurora" />
      <div
        className="absolute right-[-10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-navy-500/40 blur-[130px] animate-aurora"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-[-15%] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#1c7a5e]/20 blur-[120px] animate-aurora"
        style={{ animationDelay: "6s" }}
      />
      {/* stars */}
      {starDots.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.s,
            height: s.s,
            background: "var(--color-foreground)",
            animationDelay: `${s.d}s`,
          }}
        />
      ))}
    </div>
  );
}
