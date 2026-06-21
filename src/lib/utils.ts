import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (conditional + de-duplicated). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(phoneIntl: string, message?: string) {
  const base = `https://wa.me/${phoneIntl.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Format a number as Indian rupees, e.g. 132000 → "₹1,32,000". */
export function formatINR(amount: number) {
  return `₹${new Intl.NumberFormat("en-IN").format(amount)}`;
}
