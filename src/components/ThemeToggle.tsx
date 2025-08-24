"use client";
import { useEffect, useState } from "react";
type Mode = "light" | "dark";

function paintBody(mode: Mode) {
  // Cambios directos, visibles al instante
  if (mode === "dark") {
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#f5f5f5";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  }
}

function apply(mode: Mode) {
  const isDark = mode === "dark";
  const root = document.documentElement;
  const body = document.body;

  // 1) Clase para Tailwind
  root.classList.toggle("dark", isDark);
  body.classList.toggle("dark", isDark);

  // 2) Pintamos explícito (garantiza el cambio)
  paintBody(mode);

  try { localStorage.setItem("theme", mode); } catch {}
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Leer lo guardado o preferencia del SO
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Mode = saved ? (saved as Mode) : prefersDark ? "dark" : "light";

    setMode(initial);
    apply(initial);
    setReady(true);
  }, []);

  const toggle = () => {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    apply(next);
  };

  if (!ready) return null;

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-sm"
      title={mode === "dark" ? "Modo claro" : "Modo oscuro"}
    >
      {mode === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
