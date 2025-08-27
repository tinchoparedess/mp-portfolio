// src/app/api/guestbook/route.ts
import { NextResponse, type NextRequest } from "next/server";
import { kv } from "@/lib/kv";

type Entry = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

// GET: lista (más nuevos primero)
export async function GET() {
  const ids: string[] = await kv.zrange("guestbook:index", 0, -1, { rev: true });
  const pipe = kv.pipeline();
  ids.forEach((id) => pipe.get(`guestbook:${id}`));
  const rows = (await pipe.exec()) as (Entry | null)[];
  const data = rows.filter(Boolean) as Entry[];
  return NextResponse.json({ ok: true, data });
}

// POST: crear entrada { name, message }
export async function POST(req: NextRequest) {
  const { name, message } = (await req.json().catch(() => ({}))) as Partial<Entry>;
  if (!name || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const entry: Entry = {
    id,
    name: String(name).slice(0, 80),
    message: String(message).slice(0, 500),
    createdAt: Date.now(),
  };

  // guardar + indexar
  await kv.set(`guestbook:${id}`, entry);
  await kv.zadd("guestbook:index", { score: entry.createdAt, member: id });

  return NextResponse.json({ ok: true, entry }, { status: 201 });
}
