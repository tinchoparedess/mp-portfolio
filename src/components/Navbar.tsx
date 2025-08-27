"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const LINKS = [
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#highlights", label: "Highlights" },
  { href: "#escenas", label: "Escenas" },
  { href: "#vision", label: "Visión" },
  { href: "#ideas", label: "Ideas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    history.replaceState(null, "", href);
  };

  return (
    <header className="nav-glass">
      <div className="nav-inner">
        {/* IZQUIERDA: Theme toggle */}
        <div className="toggle-wrap">
          <ThemeToggle />
        </div>

        {/* CENTRO (desktop) */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </a>
          ))}
        </nav>

        {/* DERECHA: Idioma + Hamburguesa */}
        <div className="nav-actions">
          <LanguageSwitcher />
          <button
            className="hamburger"
            aria-label="Menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      <div className={`nav-drawer ${open ? "open" : ""}`}>
        <div className="mb-2">
          <div className="opacity-70 text-sm mb-1">Idioma</div>
          <LanguageSwitcher variant="pills" />
        </div>

        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={onNav} className="drawer-link">
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
