import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Password stored server-side, NOT in client bundle. Set in Vercel: CRM_PASSWORD
// Fallback for local dev only — change before production if you rely on fallback
const FALLBACK = "erowan2024";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const expected = process.env.CRM_PASSWORD || FALLBACK;
    if (password === expected) {
      // Set httpOnly cookie so refresh keeps you logged in without localStorage
      const res = NextResponse.json({ ok: true });
      res.cookies.set("erowan_crm_auth", "1", { httpOnly: true, secure: true, sameSite: "lax", maxAge: 60 * 60 * 24 * 7, path: "/" });
      return res;
    }
    return NextResponse.json({ ok: false }, { status: 401 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("erowan_crm_auth")?.value;
  const ok = cookie === "1";
  return NextResponse.json({ authed: ok });
}
