import Link from "next/link";
import { Rocket } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * "Want a website like this?" promo button — turns the site into a portfolio
 * piece. Links to the in-site web-design / hire-me page.
 */
export default function FreelanceCTA({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      href={siteConfig.freelance.page}
      title={siteConfig.freelance.label}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20",
        className,
      )}
    >
      <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      {label ?? "Want a website?"}
    </Link>
  );
}
