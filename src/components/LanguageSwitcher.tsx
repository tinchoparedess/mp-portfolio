"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import ReactCountryFlag from "react-country-flag";

type Lang = "es" | "en" | "pt" | "it";

const OPTIONS: { code: Lang; cc: "ES" | "GB" | "BR" | "IT"; name: string }[] = [
  { code: "es", cc: "ES", name: "Español" },
  { code: "en", cc: "GB", name: "English" },
  { code: "pt", cc: "BR", name: "Português" },
  { code: "it", cc: "IT", name: "Italiano" },
];

function Flag({ cc }: { cc: "ES" | "GB" | "BR" | "IT" }) {
  return (
    <ReactCountryFlag
      countryCode={cc}
      svg
      aria-label={cc}
      style={{
        width: "1.05rem",
        height: "1.05rem",
        borderRadius: 2,
        boxShadow: "0 0 0 1px rgba(0,0,0,.08)",
      }}
    />
  );
}

export default function LanguageSwitcher({
  variant = "button", // "button" (navbar) | "pills" (drawer mobile)
}: {
  variant?: "button" | "pills";
}) {
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
              gap: 8,
              borderRadius: 10,
              fontSize: ".9rem",
              border: "1px solid rgba(17,24,39,.12)",
              opacity: o.code === lang ? 1 : 0.8,
            }}
          >
            <Flag cc={o.cc} />
            <span>{o.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    );
  }

  // variant = "button"
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        className="btn btn-ghost"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        style={{ padding: ".45rem .65rem", borderRadius: 12 }}
      >
        <Flag cc={current.cc} />
        <span style={{ fontWeight: 600, marginLeft: 6, fontSize: ".92rem" }}>
          {current.code.toUpperCase()}
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="card"
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            padding: 8,
            minWidth: 180,
            zIndex: 60,
          }}
        >
          {OPTIONS.map((o) => (
            <button
              key={o.code}
              onClick={() => choose(o.code)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 8px",
                fontSize: ".95rem",
                border: "none",
                background: "transparent",
                width: "100%",
                textAlign: "left",
                opacity: o.code === lang ? 1 : 0.9,
              }}
            >
              <Flag cc={o.cc} />
              <span>{o.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
