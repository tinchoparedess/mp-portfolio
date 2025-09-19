"use client";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

type Entry = { id: string; name: string; message: string; createdAt: number };

export default function GuestbookSection() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const isAdmin =
    typeof window !== "undefined" &&
    new URLSearchParams(location.search).get("admin") === "1";

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
    if (!name.trim() || !message.trim()) return;

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
      alert("No se pudo guardar. Probá de nuevo.");
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
    else alert("No se pudo borrar (token incorrecto?).");
  }

  return (
    <section id="voces" className="section text-center">
      {/* Header con Reveal para que título + kicker animen juntos */}
      <Reveal as="header" className="text-center">
        <h2 className="section-title underline">Voces cercanas</h2>
        <p className="kicker">
          Mensajes de personas con las que trabajé o compartí camino.
        </p>
      </Reveal>

      {/* Formulario */}
      <form onSubmit={onSubmit} className="mx-auto mt-6 max-w-xl panel text-left">
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            className="pill sm:col-span-1"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="pill sm:col-span-2"
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mt-4 text-right">
          <button type="submit" className="btn btn-ghost btn-gold">
            Publicar
          </button>
        </div>
      </form>

      {/* Lista */}
      <div className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
        {loading && <div className="card">Cargando…</div>}
        {!loading && entries.length === 0 && (
          <div className="card">Aún no hay mensajes. ¿Escribís el primero?</div>
        )}
        {entries.map((e) => (
          <article key={e.id} className="card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="card-title">{e.name}</div>
                <div className="card-sub" style={{ marginTop: 2 }}>
                  {new Date(e.createdAt).toLocaleString()}
                </div>
              </div>
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => onDelete(e.id)}
                  className="btn btn-ghost"
                  title="Borrar"
                >
                  Borrar
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
