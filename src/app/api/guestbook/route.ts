// src/app/api/guestbook/route.ts
import { NextResponse } from "next/server";

type Entry = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

// Detecta si KV está configurado (local o en Vercel)
function kvAvailable() {
  return !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN;
}

// Import dinámico: solo carga @vercel/kv si hay credenciales
async function getKV() {
  const { kv } = await import("@vercel/kv");
  return kv;
}

// GET: lista (más nuevos primero)
export async function GET() {
  // Sin KV → devuelve lista vacía (para que no rompa en local)
  if (!kvAvailable()) {
    return NextResponse.json([], { headers: { "x-kv-disabled": "1" } });
  }

  const kv = await getKV();
  const ids: string[] = await kv.zrange("guestbook:index", 0, -1, { rev: true });
  const pipe = kv.pipeline();
  ids.forEach((id) => pipe.get(`guestbook:${id}`));
  const rows = (await pipe.exec()) as (Entry | null)[];

  const items = rows.filter(Boolean) as Entry[];
  return NextResponse.json(items);
}

// POST: crear entrada
export async function POST(req: Request) {
  if (!kvAvailable()) {
    return NextResponse.json(
      { error: "Guestbook no disponible en local (KV no configurado)" },
      { status: 503, headers: { "x-kv-disabled": "1" } }
    );
  }

  const { name, message } = await req.json();
  if (!name || !message) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  const kv = await getKV();
  const id = crypto.randomUUID();
  const entry: Entry = {
    id,
    name: String(name).slice(0, 80),
    message: String(message).slice(0, 500),
    createdAt: Date.now(),
  };

  await kv.set(`guestbook:${id}`, entry);
  await kv.zadd("guestbook:index", { score: entry.createdAt, member: id });

  return NextResponse.json(entry, { status: 201 });
}
