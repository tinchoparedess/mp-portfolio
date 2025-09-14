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

  // Cierra el drawer si se cambia el hash o se navega
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
        {/* IZQUIERDA: Toggle de tema */}
        <div className="nav-left" aria-label="Controles de tema">
          <ThemeToggle />
        </div>

        {/* CENTRO (solo desktop): links */}
        <nav className="nav-links" aria-label="Secciones">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </Link>
          ))}
        </nav>

        {/* DERECHA: Idioma + Hamburguesa (mobile) */}
        <div className="nav-actions">
          <LanguageSwitcher variant="button" />

          <button
            className="hamburger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Drawer móvil (oculto por defecto, visible sólo en mobile cuando open=true) */}
      <div className={`nav-drawer ${open ? "open" : ""}`} role="dialog" aria-label="Menú de navegación">
        {/* Idiomas en “pills” dentro del drawer */}
        <div style={{ padding: "0.35rem 0.5rem 0.5rem" }}>
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
