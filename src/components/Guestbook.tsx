"use client";
import { useEffect, useMemo, useState } from "react";

type Entry = { id: string; name: string; message: string; ts: number };

const LS_ADMIN = "guestbook_admin_token";

export default function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Admin
  const [adminToken, setAdminToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState<Entry | null>(null);

  // carga admin token
  useEffect(() => {
    const saved = localStorage.getItem(LS_ADMIN) || "";
    if (saved) {
      setAdminToken(saved);
      setIsAdmin(true);
    }
  }, []);

  async function load() {
    try {
      const r = await fetch("/api/guestbook", { cache: "no-store" });
      setEntries(await r.json());
    } catch {
      setEntries([]);
    }
  }
  useEffect(() => { load(); }, []);

  const canSubmit = useMemo(
    () => name.trim().length >= 2 && message.trim().length >= 5 && !busy,
    [name, message, busy]
  );

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setBusy(true); setError(null);
    try {
      const r = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
      if (!r.ok) throw new Error("No se pudo publicar.");
      setEntries(await r.json());
      setName(""); setMessage("");
    } catch (err: any) {
      setError(err?.message ?? "Error");
    } finally {
      setBusy(false);
    }
  }

  // admin token save/clear
  function saveAdminToken() { localStorage.setItem(LS_ADMIN, adminToken); setIsAdmin(Boolean(adminToken)); }
  function logoutAdmin() { localStorage.removeItem(LS_ADMIN); setAdminToken(""); setIsAdmin(false); }

  async function saveEdit() {
    if (!editing) return;
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (adminToken) headers["x-admin-token"] = adminToken;

    const r = await fetch(`/api/guestbook/${editing.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ name: editing.name, message: editing.message }),
    });
    if (!r.ok) { alert("No autorizado o error al editar."); return; }
    setEditing(null); await load();
  }

  async function remove(id: string) {
    const headers: Record<string, string> = {};
    if (adminToken) headers["x-admin-token"] = adminToken;
    if (!confirm("¿Eliminar este mensaje?")) return;
    const r = await fetch(`/api/guestbook/${id}`, { method: "DELETE", headers });
    if (!r.ok) { alert("No autorizado o error al eliminar."); return; }
    await load();
  }

  return (
    <section id="voces" className="section text-center">
      <h2 className="section-title">Voces Cercanas</h2>
      <p className="kicker">Mensajes de personas que aprecio</p>

      {/* Admin bar */}
      <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 p-3 text-left">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm opacity-80">{isAdmin ? "Modo admin activo" : "Modo visitante"}</div>
          <div className="flex items-center gap-2">
            <input
              type="password"
              className="rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-2 py-1 text-sm outline-none"
              placeholder="Token admin"
              value={adminToken}
              onChange={(e) => setAdminToken(e.target.value)}
              style={{ width: 180 }}
            />
            <button className="btn btn-ghost" onClick={saveAdminToken}>Usar</button>
            {isAdmin && <button className="btn btn-ghost" onClick={logoutAdmin}>Salir</button>}
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={create} className="panel mx-auto mt-8 max-w-2xl text-left">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm opacity-70 mb-1">Nombre</label>
            <input
              className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={64}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm opacity-70 mb-1">Mensaje</label>
            <textarea
              className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none min-h-[90px]"
              placeholder="Un breve saludo o comentario…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={300}
              required
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-sm opacity-70">Se publica al instante</div>
          <button type="submit" disabled={!canSubmit} className="btn btn-primary">
            {busy ? "Enviando…" : "Publicar"}
          </button>
        </div>

        {error && <div className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</div>}
      </form>

      {/* Lista */}
      <div className="mx-auto mt-8 max-w-2xl space-y-3">
        {entries.length === 0 && (
          <div className="card text-center opacity-70">Aún no hay mensajes.</div>
        )}
        {entries.map((e) => (
          <article key={e.id} className="card text-left">
            {editing?.id === e.id ? (
              <div className="space-y-2">
                <input
                  className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none"
                  value={editing.name}
                  onChange={(ev) => setEditing({ ...editing, name: ev.target.value })}
                />
                <textarea
                  className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 outline-none min-h-[80px]"
                  value={editing.message}
                  onChange={(ev) => setEditing({ ...editing, message: ev.target.value })}
                />
                <div className="flex items-center gap-2">
                  <button className="btn btn-primary" onClick={saveEdit} type="button">Guardar</button>
                  <button className="btn btn-ghost" onClick={() => setEditing(null)} type="button">Cancelar</button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-semibold">{e.name}</div>
                  <time className="text-xs opacity-70">{new Date(e.ts).toLocaleString()}</time>
                </div>
                <p className="mt-1 card-sub !text-inherit">{e.message}</p>
                {isAdmin && (
                  <div className="mt-3 flex items-center gap-2">
                    <button className="btn btn-ghost" onClick={() => setEditing(e)} type="button">Editar</button>
                    <button className="btn btn-ghost" onClick={() => remove(e.id)} type="button">Eliminar</button>
                  </div>
                )}
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
