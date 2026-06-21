"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/** Persistent WhatsApp call-to-action, bottom-right on every page. */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = whatsappLink(
    siteConfig.phoneIntl,
    "Hi! I came across your website and I'd love to plan an international trip. Can you help?",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="hidden rounded-full glass-strong px-4 py-2 text-sm font-medium text-foreground shadow-lg sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-foreground shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition-transform group-hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7" />
      </span>
    </a>
  );
}
