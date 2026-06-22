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
    developer: "Varis Rajak",
    role: "Web Designer & Developer",
    label: "Want a website like this?",
    email: "varisrajakforth11@gmail.com",
    phoneDisplay: "+91 93018 25186",
    /** Digits only, with country code, for wa.me / tel:. */
    whatsapp: "919301825186",
    location: "Jabalpur, India",
    instagram: "itsvraj_",
    linkedin: "https://www.linkedin.com/in/varis-rajak/",
    portfolio: "https://portfolio-2-flame-nine.vercel.app/",
    /** Internal page the "Want a website?" buttons link to. */
    page: "/web-design",
  },
} as const;

export type SiteConfig = typeof siteConfig;
