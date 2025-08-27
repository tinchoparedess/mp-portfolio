// src/app/api/guestbook/[id]/route.ts
import { NextResponse } from "next/server";
import kv from "@/lib/kv";

type Entry = { id: string; name: string; message: string; ts: number };

const LIST_KEY = "guestbook:list";
const HASH_PREFIX = "guestbook:item:";

function isAdmin(req: Request) {
  const token = process.env.ADMIN_TOKEN || "";
  const hdr = new Headers(req.headers).get("x-admin-token") || "";
  return token && hdr && hdr === token;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const key = `${HASH_PREFIX}${params.id}`;
  const existing = await kv.hgetall<Entry>(key);
  if (!existing) return NextResponse.json({ error: "No existe" }, { status: 404 });

  const body = await req.json();
  const name = body.name ? String(body.name).trim() : existing.name;
  const message = body.message ? String(body.message).trim() : existing.message;

  const updated: Entry = { ...existing, name, message };
  await kv.hset(key, updated as any);
  return NextResponse.json(updated, { status: 200 });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = params.id;
  await kv.del(`${HASH_PREFIX}${id}`);
  await kv.zrem(LIST_KEY, id);
  return NextResponse.json({ ok: true }, { status: 200 });
}
