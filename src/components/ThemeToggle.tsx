// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Al montar: leer preferencia guardada o del sistema
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
      type="button"
      className="theme-icon-btn"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {/* Evitar parpadeo: solo mostramos icono tras montar */}
      {mounted ? (
        <span className="theme-icon" aria-hidden>
          {isDark ? "🌙" : "☀️"}
        </span>
      ) : (
        <span className="theme-icon" aria-hidden />
      )}
    </button>
  );
}
