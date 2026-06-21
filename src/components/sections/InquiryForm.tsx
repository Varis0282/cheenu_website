"use client";

import { useState } from "react";
import { Send, MessageCircle, Mail, Check, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { destinations } from "@/lib/destinations";
import { whatsappLink } from "@/lib/utils";

const travelerOptions = ["1 – 2", "3 – 4", "5 – 9", "10+ (Group)"];

type Form = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelers: string;
  dates: string;
  message: string;
};

const empty: Form = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelers: "",
  dates: "",
  message: "",
};

function buildMessage(f: Form) {
  const lines = [
    `Hello ${siteConfig.name}! 👋 I'd love to plan a trip.`,
    "",
    `• Name: ${f.name}`,
    f.destination && `• Destination: ${f.destination}`,
    f.travelers && `• Travelers: ${f.travelers}`,
    f.dates && `• Preferred dates: ${f.dates}`,
    f.phone && `• Phone: ${f.phone}`,
    f.email && `• Email: ${f.email}`,
    f.message && "",
    f.message && `Message: ${f.message}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function InquiryForm({
  defaultDestination = "",
}: {
  defaultDestination?: string;
}) {
  const [form, setForm] = useState<Form>({ ...empty, destination: defaultDestination });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const update = (key: keyof Form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const url = whatsappLink(siteConfig.phoneIntl, buildMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 600);
  };

  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Trip enquiry${form.destination ? ` — ${form.destination}` : ""}`,
  )}&body=${encodeURIComponent(buildMessage(form))}`;

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-surface p-10 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
          You&apos;re all set!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          WhatsApp should have opened with your details ready to send. If it
          didn&apos;t, tap the button below or email us — we&apos;ll reply quickly.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(siteConfig.phoneIntl, buildMessage(form))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#06310f]"
          >
            <MessageCircle className="h-4 w-4" /> Open WhatsApp
          </a>
          <button
            onClick={() => {
              setSent(false);
              setForm({ ...empty, destination: defaultDestination });
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface2"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-surface2 px-4 py-3 text-sm text-foreground placeholder-faint outline-none transition focus:border-gold/60 focus:bg-surface2 focus:ring-2 focus:ring-gold/20";
  const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="name">Full name *</label>
          <input id="name" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" required value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+91 ..." />
        </div>

        <div>
          <label className={labelClass} htmlFor="destination">Destination</label>
          <select id="destination" value={form.destination} onChange={update("destination")} className={inputClass}>
            <option value="">Select a destination</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>{d.flag} {d.name}</option>
            ))}
            <option value="International Group Tour">🌍 International Group Tour</option>
            <option value="Not sure yet">Not sure yet — suggest something!</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="travelers">Travelers</label>
          <select id="travelers" value={form.travelers} onChange={update("travelers")} className={inputClass}>
            <option value="">How many?</option>
            {travelerOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="dates">Preferred travel dates</label>
          <input id="dates" value={form.dates} onChange={update("dates")} className={inputClass} placeholder="e.g. Mid-December, or flexible" />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">Anything else?</label>
          <textarea id="message" rows={3} value={form.message} onChange={update("message")} className={`${inputClass} resize-none`} placeholder="Occasion, budget, must-sees, special requests…" />
        </div>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-soft to-gold px-6 py-3.5 text-sm font-semibold text-[#1a1205] shadow-[0_10px_30px_-8px_rgba(240,180,41,0.6)] transition-all hover:-translate-y-0.5 disabled:opacity-70"
      >
        {busy ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Opening WhatsApp…</>
        ) : (
          <><Send className="h-4 w-4" /> Send via WhatsApp</>
        )}
      </button>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-faint">
        <span>Prefer email?</span>
        <a href={emailHref} className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
          <Mail className="h-3.5 w-3.5" /> Email us instead
        </a>
      </div>
      <p className="mt-3 text-center text-[11px] text-faint">
        No payment needed. We&apos;ll reply with a tailored plan — usually within a few hours.
      </p>
    </form>
  );
}
