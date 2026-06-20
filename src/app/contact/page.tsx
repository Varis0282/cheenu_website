import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Plan Your Trip",
  description:
    "Tell us your dream destination and travel dates. We'll craft a tailored international holiday and take it forward on WhatsApp — no payment needed to start.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const wa = whatsappLink(
    siteConfig.phoneIntl,
    "Hi! I'd like to plan a trip. Can you help me get started?",
  );

  const contactItems = [
    {
      icon: Phone,
      label: "Call us",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneIntl}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat instantly",
      href: wa,
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    { icon: MapPin, label: "Based in", value: siteConfig.location },
  ];

  return (
    <>
      <PageHeader
        kicker="Let's plan it together"
        title={
          <>
            Plan your <span className="text-gradient-gold">perfect trip</span>
          </>
        }
        subtitle="Fill in a few details and we'll get straight back to you with ideas, itineraries and honest advice — the rest happens over a friendly WhatsApp chat."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Left: contact details */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold text-white">
                Talk to a real human
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                No call centres, no bots. Reach out however you like — we usually
                reply within a few hours.
              </p>

              <div className="mt-8 space-y-3">
                {contactItems.map((c) => {
                  const inner = (
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.05]">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-white/50">
                          {c.label}
                        </span>
                        <span className="block text-sm font-medium text-white">
                          {c.value}
                        </span>
                      </span>
                    </div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/5 p-4">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-white/75">
                  <span className="font-semibold text-white">Quick to respond.</span>{" "}
                  Departures available all year round — customized dates for groups.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
