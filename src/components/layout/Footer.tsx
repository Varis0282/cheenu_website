import Link from "next/link";
import { Phone, Mail, MapPin, Plane } from "lucide-react";
import Logo from "./Logo";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  WhatsappIcon,
} from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site";
import { destinations } from "@/lib/destinations";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Group Tours", href: "/group-tours" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: InstagramIcon, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: YoutubeIcon, href: siteConfig.socials.youtube, label: "YouTube" },
  { icon: WhatsappIcon, href: siteConfig.socials.whatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-midnight">
      <div className="pointer-events-none absolute inset-0 spotlight opacity-50" />
      <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <p className="mt-5 font-script text-2xl text-gold-soft">
              Let&apos;s Explore Together
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Destinations
            </h3>
            <ul className="mt-4 space-y-3">
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold-soft"
                  >
                    <span>{d.flag}</span>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneIntl}`}
                  className="flex items-center gap-3 text-white/65 transition-colors hover:text-gold-soft"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 break-all text-white/65 transition-colors hover:text-gold-soft"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {siteConfig.location}
              </li>
            </ul>

            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-white/70 transition-all hover:-translate-y-0.5 hover:text-gold-soft"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/45">
            <Plane className="h-3.5 w-3.5 text-gold" />
            One World. Many Stories. Let&apos;s Explore Together.
          </p>
        </div>
      </div>
    </footer>
  );
}
