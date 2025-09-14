// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Cargar tema guardado
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
      setDark(saved === "dark");
    } else {
      // Respetar preferencia del SO la primera vez
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefers);
      setDark(prefers);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={dark ? "Modo claro" : "Modo oscuro"}
      title={dark ? "Modo claro" : "Modo oscuro"}
    >
      <div className="tt-track">
        <div className={`tt-knob ${dark ? "is-dark" : ""}`}>
          <svg viewBox="0 0 24 24" className="tt-icon" aria-hidden>
            <path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 1 0-18z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
