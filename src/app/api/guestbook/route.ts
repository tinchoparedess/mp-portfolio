// src/app/api/guestbook/route.ts
import { NextResponse } from "next/server";
import kv from "@/lib/kv";

type Entry = {
  id: string;
  name: string;
  message: string;
  ts: number; // epoch ms
};

const LIST_KEY = "guestbook:list";           // zset -> score = ts
const HASH_PREFIX = "guestbook:item:";       // hash por id

// Rate limit muy simple por IP (5/min)
const RATE_PREFIX = "rl:guestbook:";
const MAX_PER_MIN = 5;

function ipFrom(req: Request) {
  const h = new Headers(req.headers);
  return (h.get("x-forwarded-for") || "").split(",")[0]?.trim() || "0.0.0.0";
}
async function rateLimit(ip: string) {
  const key = `${RATE_PREFIX}${ip}`;
  const n = await kv.incr(key);
  if (n === 1) await kv.expire(key, 60);
  return n <= MAX_PER_MIN;
}

export async function GET() {
  const ids = await kv.zrange<string>(LIST_KEY, -200, -1);
  if (!ids?.length) return NextResponse.json([], { status: 200 });
  const items = (await Promise.all(ids.map(id => kv.hgetall<Entry>(`${HASH_PREFIX}${id}`))))
    .filter(Boolean) as Entry[];
  items.sort((a, b) => b.ts - a.ts);
  return NextResponse.json(items, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const ip = ipFrom(req);
    if (!(await rateLimit(ip))) {
      return NextResponse.json({ error: "Demasiadas solicitudes. Intenta en 1 minuto." }, { status: 429 });
    }

    const body = await req.json();
    const name = String(body?.name || "").trim();
    const message = String(body?.message || "").trim();

    if (name.length < 2 || message.length < 5) {
      return NextResponse.json({ error: "Nombre o mensaje muy cortos." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const ts = Date.now();
    const entry: Entry = { id, name, message, ts };

    await kv.hset(`${HASH_PREFIX}${id}`, entry as any);
    await kv.zadd(LIST_KEY, { score: ts, member: id });

    return await GET();
  } catch {
    return NextResponse.json({ error: "Error al crear." }, { status: 500 });
  }
}
