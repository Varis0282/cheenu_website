"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Light/dark toggle. The actual theme class is set before paint by an inline
 * script in the root layout (no flash); this just reflects + flips it and
 * remembers the choice in localStorage.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-accent",
        className,
      )}
    >
      {/* Render nothing theme-specific until mounted to avoid a hydration mismatch. */}
      {mounted && (dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />)}
    </button>
  );
}
