import { Rocket } from "lucide-react";
import { siteConfig, freelanceHref } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * "Want a website like this?" promo button — turns the site into a portfolio
 * piece. Links to the developer's contact (email or WhatsApp, see site config).
 */
export default function FreelanceCTA({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={freelanceHref()}
      target="_blank"
      rel="noopener noreferrer"
      title={siteConfig.freelance.label}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20",
        className,
      )}
    >
      <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      {label ?? "Want a website?"}
    </a>
  );
}
