"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

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

  // cerrar menú al navegar
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // scroll suave
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
    <header className="nav-glass sticky top-0 z-50">
      <div className="nav-inner">
        <a href="#" className="brand">Martín Paredes</a>

        {/* Desktop */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="nav-actions">
          {/* En mobile: hamburguesa + toggle uno al lado del otro */}
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

          {/* El toggle va después de la hamburguesa en mobile */}
          <div className="toggle-wrap">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav-drawer ${open ? "open" : ""}`}
        // top = alto de la barra, para que no la tape
        style={{ top: "var(--nav-h)" }}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={onNav} className="drawer-link">
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
