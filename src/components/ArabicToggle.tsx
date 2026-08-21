"use client";
import { useState } from "react";

export default function ArabicToggle() {
  const [ar, setAr] = useState(false);
  return (
    <button onClick={() => setAr(!ar)} className="text-xs px-2 py-1 rounded-full border border-zinc-300 hover:bg-zinc-50">
      {ar ? "English" : "العربية"}
    </button>
  );
}
