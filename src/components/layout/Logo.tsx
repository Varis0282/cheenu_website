import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Brand mark: a stylised gold globe with an orbiting plane + wordmark. */
export default function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10">
          <defs>
            <linearGradient id="logo-globe" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbd34d" />
              <stop offset="100%" stopColor="#c98a16" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="14" fill="url(#logo-globe)" />
          <g stroke="#06310f" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
            <ellipse cx="24" cy="24" rx="14" ry="6" />
            <ellipse cx="24" cy="24" rx="6" ry="14" />
            <line x1="10" y1="24" x2="38" y2="24" />
          </g>
          <g className="origin-center transition-transform duration-700 group-hover:rotate-[20deg]">
            <circle cx="24" cy="24" r="19" fill="none" stroke="#f0b429" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 4" />
            <path d="M40 12 l4 -2 -1 4 -1 1 z" fill="#fbd34d" />
          </g>
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold text-foreground">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent/80">
            International Holidays
          </span>
        </span>
      )}
    </Link>
  );
}
