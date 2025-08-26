"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const stored = localStorage.getItem("theme");
    const shouldDark = stored ? stored === "dark" : prefersDark;
    if (shouldDark) root.classList.add("dark");
    setIsDark(shouldDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="theme-switch fixed right-3 top-3 z-[20] sm:z-auto sm:relative sm:right-0 sm:top-0
                 inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm
                 border-neutral-300/80 bg-white/70 backdrop-blur hover:bg-white
                 dark:border-white/15 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] transition"
      aria-label="Cambiar tema"
      title={isDark ? "Modo oscuro" : "Modo claro"}
      style={{ ["--gold" as any]: "#c8a951" }}
    >
      <span className="text-[16px]">
        {isDark ? "🌙" : "🌞"}
      </span>
    </button>
  );
}
