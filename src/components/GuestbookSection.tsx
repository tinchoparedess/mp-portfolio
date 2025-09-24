// src/components/GuestbookSection.tsx
"use client";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

type Entry = { id: string; name: string; message: string; createdAt: number };

export default function GuestbookSection() {
  const { t, lang } = useI18n();

  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Admin por query ?admin=1
  const isAdmin =
    typeof window !== "undefined" &&
    new URLSearchParams(location.search).get("admin") === "1";

  // Mapea lang a locale para fechas
  const localeMap: Record<string, string> = {
    es: "es-AR",
    en: "en",
    pt: "pt-BR",
    it: "it",
  };
  const locale = localeMap[lang] ?? "es-AR";

  // helper: usa t(k) y si no existe, cae al fallback
  const tr = (k: string, fb: string) => {
    const v = t(k);
    return v && v !== k ? v : fb;
  };

  async function load() {
    try {
      setLoading(true);
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      setEntries(data?.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim() || posting) return;

    try {
      setPosting(true);
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
      if (res.ok) {
        setName("");
        setMessage("");
        load();
      } else {
        alert(tr("gb_alert_fail", "No se pudo guardar. Probá de nuevo."));
      }
    } finally {
      setPosting(false);
    }
  }

  async function onDelete(id: string) {
    const token = prompt("Token de admin:");
    if (!token) return;
    const res = await fetch("/api/guestbook", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    if (res.ok) load();
    else alert(tr("gb_delete_fail", "No se pudo borrar (token incorrecto?)."));
  }

  return (
    <section id="voces" className="section text-center">
      <Reveal as="header" className="text-center">
        <h2 className="section-title underline">
          {tr("voices_title", "Voces cercanas")}
        </h2>
        <p className="kicker">
          {tr(
            "voices_kicker",
            "Mensajes de personas con las que trabajé o compartí camino."
          )}
        </p>
      </Reveal>

      {/* Formulario */}
      <form onSubmit={onSubmit} className="mx-auto mt-6 max-w-xl panel text-left">
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            className="pill sm:col-span-1"
            placeholder={tr("gb_name_ph", "Tu nombre")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            maxLength={80}
            aria-label={tr("gb_name_ph", "Tu nombre")}
          />
          <input
            className="pill sm:col-span-2"
            placeholder={tr("gb_msg_ph", "Tu mensaje")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            maxLength={280}
            aria-label={tr("gb_msg_ph", "Tu mensaje")}
          />
        </div>
        <div className="mt-4 text-right">
          <button
            type="submit"
            className="btn btn-ghost btn-gold"
            disabled={posting}
          >
            {posting ? tr("gb_sending", "Enviando…") : tr("gb_publish", "Publicar")}
          </button>
        </div>
      </form>

      {/* Lista */}
      <div className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
        {loading && <div className="card">{tr("gb_loading", "Cargando…")}</div>}
        {!loading && entries.length === 0 && (
          <div className="card">
            {tr("gb_empty", "Aún no hay mensajes. ¿Escribís el primero?")}
          </div>
        )}
        {entries.map((e) => (
          <article key={e.id} className="card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="card-title">{e.name}</div>
                <div className="card-sub" style={{ marginTop: 2 }}>
                  {new Date(e.createdAt).toLocaleString(locale)}
                </div>
              </div>
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => onDelete(e.id)}
                  className="btn btn-ghost"
                  title={tr("gb_delete", "Borrar")}
                >
                  {tr("gb_delete", "Borrar")}
                </button>
              )}
            </div>
            <p className="mt-2">{e.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
