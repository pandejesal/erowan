"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const path = usePathname();
  useEffect(() => {
    // Free, no-key: log to console + localStorage for /crm metrics
    // Replace with Vercel Analytics or Plausible when you add domain:
    // import { Analytics } from "@vercel/analytics/react"
    const key = "erowan_analytics";
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({ path, ts: Date.now() });
    localStorage.setItem(key, JSON.stringify(arr.slice(-500)));
    // console.debug("[erowan]", path);
  }, [path]);
  return null;
}
