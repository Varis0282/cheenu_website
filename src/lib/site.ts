/**
 * Central site configuration.
 * ─────────────────────────────────────────────────────────────────────────
 * Everything the client might want to rebrand lives here. Change the business
 * name, contact details and social links in ONE place and it updates the whole
 * site (header, footer, WhatsApp button, SEO metadata, structured data, etc.).
 */

export const siteConfig = {
  /** Business / brand name — shown in the header, footer and page titles. */
  name: "Cheenu Travels",
  /** Short brand mark used where space is tight. */
  shortName: "Cheenu",
  /** One-line positioning statement. */
  tagline: "Discover. Explore. Experience.",
  /** Slightly longer description used for SEO + hero copy. */
  description:
    "Cheenu Travels crafts unforgettable international holidays from India — Vietnam, Bali, Singapore, Dubai and curated group tours worldwide. Hand-planned itineraries, comfortable stays and memories that last a lifetime.",

  /** Production URL — update after deploying (used for SEO + sitemap). */
  url: "https://cheenutravels.com",

  /** Contact details (these came from your brochures). */
  phoneDisplay: "+91 93408 52824",
  phoneIntl: "919340852824", // digits only, with country code, for wa.me / tel:
  email: "shriyanshsahu65@gmail.com",
  location: "India",

  /** Social links — swap in real handles when ready. */
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/919340852824",
  },

  /**
   * Freelance / "I built this" promo — shown as a button in the header + a
   * footer credit so this site doubles as a portfolio piece. Points at YOUR
   * contact (the developer), not the travel business.
   */
  freelance: {
    developer: "Varis",
    label: "Want a website like this?",
    email: "varis@paraleagle.ai",
    /** Optional: digits only with country code (e.g. "919999999999").
     *  If set, the button opens WhatsApp instead of email. */
    whatsapp: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Link for the "Want a website like this?" promo (WhatsApp if set, else email). */
export function freelanceHref() {
  const f = siteConfig.freelance;
  const whatsapp = f.whatsapp as string; // configurable; "" by default
  const msg = `Hi ${f.developer}! I saw the ${siteConfig.name} website and I'd love one like it for my business. Can we talk?`;
  if (whatsapp) {
    return `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
  }
  return `mailto:${f.email}?subject=${encodeURIComponent(
    "I'd like a website like this",
  )}&body=${encodeURIComponent(msg)}`;
}
