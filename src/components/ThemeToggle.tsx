// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Evitar hydration mismatch y leer preferencia
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("theme");
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const dark = saved ? saved === "dark" : prefers;
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    } catch {}
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      className="theme-icon-btn"
      aria-label={isDark ? "Modo claro" : "Modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {/* Solo mostramos el ícono cuando ya montó para evitar parpadeo */}
      {mounted ? (
        <span className="theme-icon" aria-hidden>
          {isDark ? "🌙" : "☀️"}
        </span>
      ) : null}
    </button>
  );
}
