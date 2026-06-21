import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import Backdrop from "./Backdrop";

export default function PageHeader({
  kicker,
  title,
  subtitle,
  crumbs = [],
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16">
      <Backdrop stars={20} />
      <div className="container-x relative text-center">
        <nav className="mb-6 flex items-center justify-center gap-1.5 text-xs text-faint">
          <Link href="/" className="transition-colors hover:text-accent">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-accent">
                  {c.label}
                </Link>
              ) : (
                <span className="text-foreground">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {kicker && (
          <span className="font-script text-2xl text-accent sm:text-3xl">{kicker}</span>
        )}
        <h1 className="mt-1 font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
