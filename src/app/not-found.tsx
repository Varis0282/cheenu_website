import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";
import Backdrop from "@/components/ui/Backdrop";
import Button from "@/components/ui/Button";
import { destinations } from "@/lib/destinations";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-32 text-center">
      <Backdrop />
      <div className="relative">
        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Compass className="h-10 w-10 animate-spin-slow" strokeWidth={1.4} />
        </div>
        <p className="mt-6 font-script text-3xl text-gold-soft">Lost your way?</p>
        <h1 className="mt-1 font-display text-6xl font-bold text-white sm:text-7xl">404</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          This page wandered off the map. Let&apos;s get you back to dreaming up
          your next adventure.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <ArrowLeft className="h-5 w-5" /> Back Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Plan a Trip
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="rounded-full glass px-4 py-2 text-sm text-white/80 transition-colors hover:text-gold-soft"
            >
              {d.flag} {d.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
