import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Body = {
  demo: string;
  serviceSlug?: string;
  staffId?: string;
  date?: string;
  slot?: string;
  name?: string;
  phone?: string;
  email?: string;
  items?: unknown;
  source?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    if (!body.demo || !body.phone) {
      // phone required for WhatsApp, demo required
      // allow guest: if only demo provided, still ok but warn
    }
    const entry = {
      id: Date.now().toString(36),
      at: new Date().toISOString(),
      ...body,
    };
    const file = path.join(process.cwd(), "leads.json");
    let arr: unknown[] = [];
    try {
      if (fs.existsSync(file)) {
        arr = JSON.parse(fs.readFileSync(file, "utf-8") || "[]");
        if (!Array.isArray(arr)) arr = [];
      }
    } catch {}
    arr.push(entry);
    // keep last 500 only
    if (arr.length > 500) arr = arr.slice(-500);
    fs.writeFileSync(file, JSON.stringify(arr, null, 2), "utf-8");

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, usage: "POST { demo, serviceSlug, staffId, date, slot, name, phone } -> leads.json + WhatsApp" });
}
