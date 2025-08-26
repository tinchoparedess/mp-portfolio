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
    root.classList.toggle("dark", shouldDark);
    setIsDark(shouldDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // disparar animación sutil (dawn / dusk)
    const track = document.querySelector(".tt-track");
    if (track) {
      track.classList.remove("tt-anim-dawn", "tt-anim-dusk");
      // si voy a oscuro → dusk; si voy a claro → dawn
      track.classList.add(next ? "tt-anim-dusk" : "tt-anim-dawn");
      setTimeout(() => track.classList.remove("tt-anim-dawn", "tt-anim-dusk"), 900);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      aria-pressed={isDark}
      className="theme-toggle"
    >
      <span className="tt-track" aria-hidden>
        <span className={`tt-knob ${isDark ? "is-dark" : "is-light"}`}>
          {/* ícono con SVG embebido para nitidez */}
          <svg className="tt-icon" viewBox="0 0 24 24">
            {isDark ? (
              // luna
              <path d="M21 12.4A8.6 8.6 0 1 1 11.6 3a7 7 0 1 0 9.4 9.4Z" />
            ) : (
              // sol
              <g>
                <circle cx="12" cy="12" r="4.5" />
                <g strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M4.7 4.7l2.3 2.3M17 17l2.3 2.3M19.3 4.7 17 7M7 17 4.7 19.3" />
                </g>
              </g>
            )}
          </svg>
        </span>
      </span>
    </button>
  );
}
