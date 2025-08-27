import { kv } from "@/lib/kv";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(req: NextRequest, context: any) {
  const id = context?.params?.id as string;
  if (!id) {
    return NextResponse.json({ ok: false, error: "missing_id" }, { status: 400 });
  }

  // Seguridad: header con ADMIN_TOKEN
  const adminHeader = req.headers.get("x-admin-token");
  if (process.env.ADMIN_TOKEN && adminHeader !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const key = `guestbook:${id}`;

  // comprobar existencia
  const exists = await kv.get(key);
  if (!exists) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  // borrar dato + sacarlo del índice
  await kv.del(key);
  await kv.zrem("guestbook:index", id);

  return NextResponse.json({ ok: true });
}
