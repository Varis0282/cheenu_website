"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import FreelanceCTA from "./FreelanceCTA";
import Button from "@/components/ui/Button";
import { destinations } from "@/lib/destinations";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations", dropdown: true },
  { label: "Group Tours", href: "/group-tours" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong border-b border-line py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "glass border-transparent py-4",
      )}
    >
      <nav className="container-x flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDestOpen(true)}
                onMouseLeave={() => setDestOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <AnimatePresence>
                  {destOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3"
                    >
                      <div className="glass-strong overflow-hidden rounded-2xl p-2 shadow-xl">
                        {destinations.map((d) => (
                          <Link
                            key={d.slug}
                            href={`/destinations/${d.slug}`}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-surface2 hover:text-foreground"
                          >
                            <span className="text-lg">{d.flag}</span>
                            <span>
                              <span className="block font-medium">{d.name}</span>
                              <span className="block text-xs text-faint">
                                {d.country}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={`tel:${siteConfig.phoneIntl}`}
            className="hidden items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent xl:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <FreelanceCTA />
          <ThemeToggle />
          <Button href="/contact" size="md">
            Plan My Trip
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full glass text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-x py-4">
              <div className="glass-strong rounded-3xl p-4">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-line pt-3">
                  {destinations.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/destinations/${d.slug}`}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface2"
                    >
                      <span>{d.flag}</span>
                      {d.name}
                    </Link>
                  ))}
                </div>
                <Button href="/contact" className="mt-4 w-full" size="lg">
                  Plan My Trip
                </Button>
                <FreelanceCTA
                  label={siteConfig.freelance.label}
                  className="mt-3 w-full justify-center"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
