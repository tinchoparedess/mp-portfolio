"use client";

import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const LINKS = [
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#highlights", label: "Highlights" },
  { href: "#vision", label: "Visión" },
  { href: "#ideas", label: "Ideas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const onNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <header className="nav-glass">
      <div className="nav-inner">
        {/* Izquierda: tema */}
        <ThemeToggle />

        {/* Centro: enlaces */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </a>
          ))}
        </nav>

        {/* Derecha: idioma */}
        <div className="nav-actions">
          <LanguageSwitcher variant="button" />
        </div>
      </div>
    </header>
  );
}
