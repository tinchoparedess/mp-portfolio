"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import es from "@/i18n/dictionary/es";
import en from "@/i18n/dictionary/en";
import pt from "@/i18n/dictionary/pt";
import it from "@/i18n/dictionary/it";

type Lang = "es" | "en" | "pt" | "it";
type Dict = typeof es;
type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof Dict | string) => string;
};

const DICTS: Record<Lang, Dict> = { es, en, pt, it };
const Ctx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // cargar preferencia guardada
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved && DICTS[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
      document.documentElement.setAttribute("data-lang", l);
    }
  };

  const t = useMemo(() => {
    return (key: string) => {
      const d = DICTS[lang] ?? DICTS.es;
      // @ts-ignore
      return d[key] ?? DICTS.es[key as keyof Dict] ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
