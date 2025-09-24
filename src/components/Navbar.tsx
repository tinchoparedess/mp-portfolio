// src/components/Navbar.tsx
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

// claves i18n de cada link
const NAV_ITEMS = [
  { href: "#quien-soy", key: "nav_about", fallback: "Quién soy" },
  { href: "#highlights", key: "nav_highlights", fallback: "Highlights" },
  { href: "#experiencias", key: "nav_experiencias", fallback: "Experiencias" },
  { href: "#vision", key: "nav_vision", fallback: "Visión" },
  { href: "#ideas", key: "nav_ideas", fallback: "Ideas" },
  { href: "#contacto", key: "nav_contact", fallback: "Contacto" },
];

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Mapa de labels con fallback (evita ver "nav_*" en pantalla si falta una clave)
  const labels = useMemo(
    () =>
      NAV_ITEMS.map((it) => ({
        ...it,
        label: t(it.key) ?? it.fallback,
      })),
    [t]
  );

  // Cerrar al cambiar hash
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Cerrar con Esc y click fuera
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClickOutside = (e: MouseEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (drawerRef.current && !drawerRef.current.contains(target)) {
        const btn = document.getElementById("nav-hamburger");
        if (btn && btn.contains(target)) return;
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

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
        <div className="nav-left">
          <ThemeToggle />
        </div>

        <nav className="nav-links" aria-label="Secciones">
          {labels.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNav} className="nav-link">
              <span>{l.label}</span>
              <i className="nav-underline" aria-hidden />
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher variant="button" />
          <button
            id="nav-hamburger"
            type="button"
            className="hamburger"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-drawer"
            ref={drawerRef}
            className="nav-drawer open"
            aria-hidden={!open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="py-1">
              {labels.map((l) => (
                <Link key={l.href} href={l.href} className="drawer-link" onClick={onNav}>
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
