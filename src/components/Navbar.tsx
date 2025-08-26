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

  // cerrar menú al navegar (hash)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // scroll suave dentro de la página
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
        {/* IZQUIERDA: Toggle (en lugar del brand) */}
        <div aria-hidden className="flex items-center">
          <ThemeToggle />
        </div>

        {/* CENTRO (desktop): links */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </a>
          ))}
        </nav>

        {/* DERECHA: hamburguesa (mobile) */}
        <div className="nav-actions">
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
        {/* Nombre dentro del menú móvil, si querés agregarlo: */}
        <div className="px-2 pb-2 text-base/none font-semibold opacity-80">
          Martín Paredes
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
