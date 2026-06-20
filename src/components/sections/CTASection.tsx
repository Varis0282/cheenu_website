import { MessageCircle, ArrowRight, Plane } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Backdrop from "@/components/ui/Backdrop";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export default function CTASection() {
  const wa = whatsappLink(
    siteConfig.phoneIntl,
    "Hi! I'm ready to plan my trip. Can you help me get started?",
  );

  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy via-midnight to-ink px-6 py-16 text-center sm:px-12">
            <Backdrop stars={18} />
            <div className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-64 w-64 rounded-full bg-gold/20 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
                <Plane className="h-3.5 w-3.5" />
                Your journey starts here
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                Pack your bags,{" "}
                <span className="text-gradient-gold">adventure awaits!</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
                Tell us your dream destination and travel dates. We&apos;ll craft
                a tailored itinerary and take it forward on WhatsApp — no payment
                needed to start.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg" className="w-full sm:w-auto">
                  Plan My Trip
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  href={wa}
                  external
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>

              <p className="mt-6 font-script text-2xl text-gold-soft">
                One World. Many Stories. Let&apos;s Explore Together.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
