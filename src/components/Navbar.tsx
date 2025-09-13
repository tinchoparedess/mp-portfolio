"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

  // Cerrar el drawer si cambia el hash o se hace click fuera
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Scroll suave interno
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
        {/* IZQUIERDA: toggle de tema */}
        <div className="nav-left">
          <ThemeToggle />
        </div>

        {/* CENTRO (sólo desktop): links */}
        <nav className="nav-links" aria-label="Secciones">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </Link>
          ))}
        </nav>

        {/* DERECHA: idioma + hamburguesa (mobile) */}
        <div className="nav-actions">
          <LanguageSwitcher variant="button" />
          <button
            className="hamburger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Drawer móvil */}
      <div className={`nav-drawer ${open ? "open" : ""}`}>
        {/* Idiomas en formato “pills” dentro del drawer */}
        <div className="px-1 pb-2">
          <LanguageSwitcher variant="pills" />
        </div>

        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="drawer-link" onClick={onNav}>
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
