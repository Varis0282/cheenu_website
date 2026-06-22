import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  Rocket,
  Layers,
  Code2,
  Palette,
  Zap,
  Search,
  Smartphone,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/ui/BrandIcons";
import Backdrop from "@/components/ui/Backdrop";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const f = siteConfig.freelance;

export const metadata: Metadata = {
  title: `${f.role} — ${f.developer}`,
  description: `${f.developer} designs and builds fast, beautiful, modern websites like this one. Based in ${f.location}. View the portfolio and get in touch — no forms, just a quick message.`,
  alternates: { canonical: "/web-design" },
};

const wa = whatsappLink(
  f.whatsapp,
  `Hi ${f.developer.split(" ")[0]}! I saw the ${siteConfig.name} website and I'd love a website like that for my business. Can we talk?`,
);
const instaUrl = `https://instagram.com/${f.instagram}`;

type Contact = {
  icon: LucideIcon | ((p: { className?: string }) => React.ReactNode);
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const contacts: Contact[] = [
  { icon: WhatsappIcon, label: "WhatsApp", value: f.phoneDisplay, href: wa, external: true },
  { icon: Phone, label: "Call", value: f.phoneDisplay, href: `tel:+${f.whatsapp}` },
  { icon: Mail, label: "Email", value: f.email, href: `mailto:${f.email}` },
  { icon: Globe, label: "Portfolio", value: "portfolio-2-flame-nine.vercel.app", href: f.portfolio, external: true },
  { icon: InstagramIcon, label: "Instagram", value: `@${f.instagram}`, href: instaUrl, external: true },
  { icon: LinkedinIcon, label: "LinkedIn", value: "varis-rajak", href: f.linkedin, external: true },
];

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Briefcase, title: "Business Websites", desc: "Polished sites that make small businesses look big and win trust." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting pages for products, campaigns and launches." },
  { icon: Layers, title: "Portfolios", desc: "Personal sites that show off your work and get you hired." },
  { icon: Globe, title: "Travel & Booking Sites", desc: "Exactly like this one — destinations, enquiries and WhatsApp." },
  { icon: Code2, title: "Web Apps", desc: "Dashboards and interactive tools built on a modern stack." },
  { icon: Palette, title: "Redesigns", desc: "Give a dated site a fresh, fast, mobile-first makeover." },
];

const perks: { icon: LucideIcon; title: string }[] = [
  { icon: Zap, title: "Blazing fast" },
  { icon: Search, title: "SEO-friendly" },
  { icon: Smartphone, title: "Mobile-first" },
  { icon: Sparkles, title: "Smooth animations" },
  { icon: Palette, title: "Custom design" },
  { icon: CheckCircle2, title: "Ongoing support" },
];

export default function WebDesignPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <Backdrop stars={22} />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <Rocket className="h-3.5 w-3.5" />
              Web Design &amp; Development
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Want a website like this one?{" "}
              <span className="text-gradient-gold">Let&apos;s build yours.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Hi, I&apos;m {f.developer} — a {f.role.toLowerCase()} based in{" "}
              {f.location}. I design and build fast, beautiful, modern websites
              that help businesses stand out.{" "}
              <span className="font-semibold text-foreground">
                In fact, I designed &amp; built this very site.
              </span>
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={f.portfolio} external size="lg">
                View My Portfolio
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button href={wa} external variant="whatsapp" size="lg">
                <WhatsappIcon className="h-5 w-5" />
                Message on WhatsApp
              </Button>
            </div>
          </Reveal>

          {/* Profile card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 text-center">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold-deep text-2xl font-bold text-[#1a1205] shadow-lg ring-1 ring-gold/30">
                VR
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                {f.developer}
              </h2>
              <p className="mt-1 text-sm text-accent">{f.role}</p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent" />
                {f.location}
              </p>
              <div className="mt-6 flex items-center justify-center gap-2.5">
                {[
                  { icon: WhatsappIcon, href: wa, label: "WhatsApp" },
                  { icon: InstagramIcon, href: instaUrl, label: "Instagram" },
                  { icon: LinkedinIcon, href: f.linkedin, label: "LinkedIn" },
                  { icon: Globe, href: f.portfolio, label: "Portfolio" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full glass text-muted transition-all hover:-translate-y-0.5 hover:text-accent"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16">
        <div className="container-x">
          <SectionHeading
            kicker="What I can build"
            title={
              <>
                Websites that <span className="text-gradient-gold">work as hard as you do</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.07}>
                <div className="card-glow group relative h-full rounded-2xl border border-line bg-surface p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent text-accent ring-1 ring-gold/20">
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* perks */}
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {perks.map((p) => (
                <span
                  key={p.title}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-foreground"
                >
                  <p.icon className="h-4 w-4 text-accent" />
                  {p.title}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-16">
        <div className="container-x">
          <SectionHeading
            kicker="Let's talk"
            title={
              <>
                Get in <span className="text-gradient-gold">touch</span>
              </>
            }
            subtitle="No forms, no waiting — reach me directly however you like. I usually reply the same day."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={(i % 3) * 0.07}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="card-glow group flex h-full items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-surface2"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-accent">
                    <c.icon className="h-5.5 w-5.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-faint">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <div className="dark relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-navy via-midnight to-ink px-6 py-16 text-center sm:px-12">
              <Backdrop stars={16} />
              <div className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-64 w-64 rounded-full bg-gold/20 blur-[100px]" />
              <div className="relative mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  This website is my work
                </span>
                <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                  Love what you see?{" "}
                  <span className="text-gradient-gold">Let&apos;s make yours.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
                  Tell me about your idea and I&apos;ll turn it into a site you&apos;re
                  proud to share. Quick chat on WhatsApp, no obligation.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button href={wa} external variant="whatsapp" size="lg">
                    <WhatsappIcon className="h-5 w-5" />
                    Message on WhatsApp
                  </Button>
                  <Button href={f.portfolio} external variant="outline" size="lg">
                    See Portfolio
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
