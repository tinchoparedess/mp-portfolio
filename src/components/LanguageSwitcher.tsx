"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

type Lang = "es" | "en" | "pt" | "it";

const OPTIONS: { code: Lang; flag: string; name: string }[] = [
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "pt", flag: "🇧🇷", name: "Português" },
  { code: "it", flag: "🇮🇹", name: "Italiano" },
];

export default function LanguageSwitcher({
  variant = "button", // "button" (navbar) | "pills" (drawer mobile)
}: { variant?: "button" | "pills" }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const choose = (code: Lang) => {
    setLang(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  if (variant === "pills") {
    return (
      <div className="flex gap-1 flex-wrap">
        {OPTIONS.map((o) => (
          <button
            key={o.code}
            onClick={() => choose(o.code)}
            className="pill"
            style={{
              padding: "6px 10px",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 10,
              fontSize: ".9rem",
              border: "1px solid rgba(17,24,39,.12)",
              opacity: o.code === lang ? 1 : 0.8,
            }}
          >
            <span style={{ fontSize: "1rem" }}>{o.flag}</span>
            <span>{o.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="lang-wrap">
      <button
        className="btn btn-ghost"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Idioma"
        style={{ padding: ".45rem .65rem", borderRadius: 12 }}
      >
        <span style={{ fontSize: "1rem", lineHeight: 1 }}>{current.flag}</span>
        <span style={{ fontWeight: 600, marginLeft: 6, fontSize: ".92rem" }}>
          {current.code.toUpperCase()}
        </span>
      </button>

      <div role="menu" className={`card lang-menu ${open ? "show" : ""}`}>
        {OPTIONS.map((o) => (
          <button
            key={o.code}
            onClick={() => choose(o.code)}
            className="drawer-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 8px",
              borderBottom: "none",
              fontSize: ".95rem",
              opacity: o.code === lang ? 1 : 0.9,
            }}
          >
            <span style={{ fontSize: "1rem" }}>{o.flag}</span>
            <span>{o.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
