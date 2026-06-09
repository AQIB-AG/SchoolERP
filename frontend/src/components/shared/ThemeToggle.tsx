"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-[12px] border border-border bg-surface text-text",
          className
        )}
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-[12px] border border-border/80 bg-surface text-text transition-all duration-200 hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-primary/40",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5 text-amber-400 fill-amber-400 transition-all duration-300 hover:rotate-12" aria-hidden="true" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-slate-800 fill-slate-800 transition-all duration-300 hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
