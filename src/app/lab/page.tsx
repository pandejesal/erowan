"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { labPatterns, labIntents, type LabIntent } from "@/lib/mocks/lab";

// ---------- tiny toys ----------
function PricingToy({ onInteract }: { onInteract: () => void }) {
  const [yearly, setYearly] = useState(true);
  const reduce = useReducedMotion();
  return (
    <div className="h-full flex flex-col justify-center gap-3 p-3">
      <div className="flex justify-center">
        <button onClick={() => { setYearly(!yearly); onInteract(); }} className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] p-1 text-[11px] font-mono tracking-widest">
          <span className={`px-3 py-1 ${!yearly ? "bg-white text-black" : "text-zinc-500"}`}>MONTHLY</span>
          <span className={`px-3 py-1 ${yearly ? "bg-[#D6FF2A] text-black font-black" : "text-zinc-500"}`}>YEARLY -20%</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[49, 99, 199].map(v => (
          <motion.div key={v} layout={!reduce} className="bg-[#EDEDE8] text-black p-2 text-center border border-black">
            <div className="text-[10px] font-mono">START</div>
            <motion.div layout={!reduce} transition={reduce ? { duration: 0 } : undefined} className="font-black text-lg">${yearly ? Math.round(v * 0.8 * 10) / 10 : v}</motion.div>
            <div className="text-[9px] font-mono opacity-60">/mo</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
function BookingToy({ onInteract }: { onInteract: () => void }) {
  const [pos, setPos] = useState(3);
  const reduce = useReducedMotion();
  return (
    <div className="h-full flex flex-col justify-center gap-2 p-3">
      <div className="flex justify-between text-[10px] font-mono text-zinc-500"><span>7AM</span><span>9PM</span></div>
      <div className="relative h-12 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center px-2 overflow-hidden" data-lenis-prevent>
        <motion.div
          drag={reduce ? false : "x"}
          dragElastic={0.2}
          dragMomentum={false}
          dragConstraints={{ left: 0, right: 140 }}
          onDragEnd={() => onInteract()}
          className="h-8 w-20 bg-[#D6FF2A] text-black grid place-items-center text-xs font-black cursor-grab active:cursor-grabbing"
        >
          ◐ {7 + pos}:00
        </motion.div>
        <div className="absolute inset-x-2 flex justify-between pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <button key={i} onClick={() => { setPos(i); onInteract(); }} className={`w-6 h-6 text-[9px] font-mono border ${pos === i ? "bg-white text-black border-white" : "bg-transparent border-[#333] text-zinc-600"}`}>{7 + i}</button>
          ))}
        </div>
      </div>
      <div className="text-[10px] font-mono text-zinc-400">Staff: Layla • $45 • {reduce ? "TAP" : "DRAG"} RAIL →</div>
    </div>
  );
}
function BeforeAfterToy({ onInteract }: { onInteract: () => void }) {
  const [x, setX] = useState(52);
  const raf = useRef<number | null>(null);
  const pending = useRef(52);
  const reduce = useReducedMotion();
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    pending.current = Math.max(5, Math.min(95, ((e.clientX - r.left) / r.width) * 100));
    if (raf.current === null) raf.current = requestAnimationFrame(() => { setX(pending.current); raf.current = null; });
  };
  if (reduce) {
    return (
      <div className="relative h-full bg-[#111] overflow-hidden border border-[#2A2A2A] grid grid-cols-2">
        <div className="grid place-items-center bg-[#2A2A2A] text-zinc-500 font-mono text-xs">BEFORE</div>
        <div className="grid place-items-center bg-[#EDEDE8] text-black font-mono text-xs border-l-2 border-[#D6FF2A]">AFTER ✨</div>
      </div>
    );
  }
  return (
    <div className="relative h-full bg-[#111] overflow-hidden border border-[#2A2A2A]" data-lenis-prevent onPointerMove={handleMove}>
      <div className="absolute inset-0 grid place-items-center bg-[#2A2A2A] text-zinc-500 font-mono text-xs">BEFORE — dull hair</div>
      <div className="absolute inset-0 grid place-items-center bg-[#EDEDE8] text-black font-mono text-xs border-l-2 border-[#D6FF2A]" style={{ clipPath: `inset(0 ${100 - x}% 0 0)`, WebkitClipPath: `inset(0 ${100 - x}% 0 0)` }}>AFTER — balayage ✨</div>
      <motion.div className="absolute top-0 bottom-0 w-0.5 bg-[#D6FF2A]" style={{ left: `${x}%` }} />
      <motion.div drag="x" dragElastic={0} dragConstraints={{ left: -80, right: 80 }} dragMomentum={false} onDrag={(e, info) => { setX(p => Math.max(10, Math.min(90, p + info.delta.x * 0.4))); onInteract(); }} className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-[#D6FF2A] border-2 border-black rounded-full grid place-items-center cursor-ew-resize" style={{ left: `calc(${x}% - 16px)` }}>↔</motion.div>
    </div>
  );
}
function CartToy({ onInteract }: { onInteract: () => void }) {
  const [items, setItems] = useState(0);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="h-full p-3 bg-[#111] flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        {["MUG $28", "APRON $45", "BOARD $60"].map(n => (
          <button key={n} onClick={() => { setItems(v => v + 1); setOpen(true); onInteract(); }} className="bg-[#EDEDE8] text-black text-[10px] font-mono py-2 border border-black hover:bg-[#D6FF2A]">+ {n}</button>
        ))}
      </div>
      <motion.div animate={{ x: reduce ? 0 : open ? 0 : 120 }} transition={reduce ? { duration: 0 } : undefined} className="bg-[#D6FF2A] text-black p-2 text-xs font-mono border border-black flex justify-between">
        <span>DRAWER {items} items</span>
        <button onClick={() => setOpen(!open)} className="underline">{open ? "close" : "peek"}</button>
      </motion.div>
    </div>
  );
}
function MagneticToy({ onInteract }: { onInteract: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const pending = useRef({ x: 0, y: 0 });
  const shouldInteract = useRef(false);
  const reduce = useReducedMotion();
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) * 0.28, dy = (e.clientY - cy) * 0.28;
    const dist = Math.hypot(dx, dy);
    pending.current = dist < 90 ? { x: dx, y: dy } : { x: 0, y: 0 };
    shouldInteract.current = dist < 90;
    if (raf.current === null) {
      raf.current = requestAnimationFrame(() => {
        setP(pending.current);
        if (shouldInteract.current) onInteract();
        raf.current = null;
      });
    }
  };
  const handleLeave = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
    pending.current = { x: 0, y: 0 };
    setP({ x: 0, y: 0 });
  };
  if (reduce) {
    return <div className="h-full grid place-items-center bg-[#111]"><a href="/pay?pattern=magnetic-cta" className="px-6 py-3 bg-[#D6FF2A] text-black font-black text-xs tracking-widest border-2 border-black shadow-[4px_4px_0_black]">MAGNETIC CTA →</a></div>;
  }
  return (
    <div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} className="h-full grid place-items-center bg-[#111]">
      <motion.button animate={{ x: p.x, y: p.y }} transition={{ type: "spring", stiffness: 280, damping: 18 }} className="px-6 py-3 bg-[#D6FF2A] text-black font-black text-xs tracking-widest border-2 border-black shadow-[4px_4px_0_black] will-change-transform">MAGNETIC CTA →</motion.button>
    </div>
  );
}
function FluidToy({ onInteract }: { onInteract: () => void }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [vel, setVel] = useState(0);
  const last = useRef({ x: 50, y: 50 });
  const raf = useRef<number | null>(null);
  const pendingPos = useRef({ x: 50, y: 50 });
  const pendingVel = useRef(0);
  const reduce = useReducedMotion();
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100, y = ((e.clientY - r.top) / r.height) * 100;
    const d = Math.hypot(x - last.current.x, y - last.current.y);
    pendingVel.current = Math.min(10, d * 2);
    pendingPos.current = { x, y };
    last.current = { x, y };
    if (raf.current === null) {
      raf.current = requestAnimationFrame(() => {
        setPos(pendingPos.current);
        setVel(pendingVel.current);
        onInteract();
        raf.current = null;
      });
    }
  };
  if (reduce) {
    return <div className="relative h-full bg-[#0F0F0F] overflow-hidden grid place-items-center"><div className="w-5 h-5 bg-[#D6FF2A] rounded-full" /><div className="absolute bottom-2 text-[10px] font-mono text-zinc-600">FLUID CURSOR — motion reduced</div></div>;
  }
  return (
    <div onPointerMove={handleMove} className="relative h-full bg-[#0F0F0F] overflow-hidden cursor-none">
      <div className="absolute inset-0 grid place-items-center text-zinc-700 font-mono text-[10px] tracking-widest">MOVE CURSOR →</div>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div key={i} animate={{ left: `${pos.x}%`, top: `${pos.y}%`, scale: 1 + vel * 0.06 + i * 0.05 }} transition={{ delay: i * 0.03, type: "spring", stiffness: 300, damping: 22 }} className="absolute w-3 h-3 bg-[#D6FF2A] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-80 will-change-transform" style={{ opacity: 1 - i * 0.14 }} />
      ))}
      <motion.div animate={{ left: `${pos.x}%`, top: `${pos.y}%`, scaleX: 1 + vel * 0.08, scaleY: 1 - vel * 0.04 }} className="absolute w-5 h-5 border border-[#D6FF2A] rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform" />
    </div>
  );
}
function StaggerToy({ onInteract }: { onInteract: () => void }) {
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  if (reduce) {
    return <div onClick={() => onInteract()} className="h-full p-3 bg-[#111] grid grid-cols-3 gap-2">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-12 bg-[#EDEDE8] border border-black grid place-items-center text-black font-black text-xs">{i + 1}</div>)}</div>;
  }
  return (
    <div onPointerEnter={() => { setHover(true); onInteract(); }} onPointerLeave={() => setHover(false)} onClick={() => { setHover(v => !v); onInteract(); }} className="h-full p-3 bg-[#111] grid grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div key={i} animate={{ y: hover ? -4 - (i % 3) * 2 : 0, rotateX: hover ? 8 : 0, scale: hover ? 1.02 : 1 }} transition={{ delay: hover ? i * 0.038 : 0, type: "spring", stiffness: 320 }} className="h-12 bg-[#EDEDE8] border border-black grid place-items-center text-black font-black text-xs will-change-transform">{i + 1}</motion.div>
      ))}
    </div>
  );
}
function ClipToy({ onInteract }: { onInteract: () => void }) {
  const [v, setV] = useState(32);
  const raf = useRef<number | null>(null);
  const pending = useRef(32);
  const reduce = useReducedMotion();
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    pending.current = Math.max(4, Math.min(96, ((e.clientX - r.left) / r.width) * 100));
    if (raf.current === null) {
      raf.current = requestAnimationFrame(() => { setV(pending.current); onInteract(); raf.current = null; });
    }
  };
  // safari: polygon + -webkit-clip-path fallback, clamped 4..96 avoids degenerate 0-width trapezoid
  const poly = `polygon(${50 - v * 0.45}% 0, ${50 + v * 0.45}% 0, ${50 + v * 0.35}% 100%, ${50 - v * 0.35}% 100%)`;
  if (reduce) {
    return <div className="relative h-full bg-[#111] overflow-hidden grid place-items-center"><div className="w-[90%] h-[80%] bg-[#D6FF2A] grid place-items-center text-black font-black border-2 border-black">REVEAL</div><div className="absolute bottom-1 text-[10px] font-mono text-zinc-500">CLIP — tap to view</div></div>;
  }
  return (
    <div onPointerMove={handleMove} className="relative h-full bg-[#111] overflow-hidden">
      <div className="absolute inset-0 bg-[#2A2A2A] grid place-items-center text-zinc-500 font-mono text-xs">ORIGINAL</div>
      <div className="absolute inset-0 bg-[#D6FF2A] grid place-items-center text-black font-black will-change-transform" style={{ clipPath: poly, WebkitClipPath: poly }}>REVEAL</div>
      <div className="absolute bottom-1 left-1 right-1 h-1 bg-[#2A2A2A]"><motion.div animate={{ width: `${v}%` }} transition={reduce ? { duration: 0 } : undefined} className="h-full bg-[#D6FF2A]" /></div>
    </div>
  );
}
function PinnedToy({ onInteract }: { onInteract: () => void }) {
  const [step, setStep] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setStep(s => { onInteract(); return (s + 1) % 4; }), 1100);
    return () => clearInterval(id);
  }, [onInteract, reduce]);
  const steps = ["BRIEF", "DESIGN", "BUILD", "SHIP"];
  return (
    <div className="h-full flex bg-[#111] text-xs font-mono">
      <div className="w-20 border-r border-[#2A2A2A] p-2 flex flex-col gap-1">
        {steps.map((s, i) => <div key={s} onClick={() => { setStep(i); onInteract(); }} className={`px-2 py-1 border ${i === step ? "bg-[#D6FF2A] text-black border-[#D6FF2A] font-black" : "border-[#2A2A2A] text-zinc-500"}`}>0{i + 1} {s}</div>)}
      </div>
      <div className="flex-1 grid place-items-center bg-[#EDEDE8] text-black">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={reduce ? false : { y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduce ? { opacity: 0 } : { y: -8, opacity: 0 }} transition={reduce ? { duration: 0 } : undefined} className="font-black text-sm">{steps[step]} →</motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
function HorizontalToy({ onInteract }: { onInteract: () => void }) {
  const [x, setX] = useState(0);
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className="h-full bg-[#111] overflow-x-auto flex gap-2 p-2" data-lenis-prevent>{[1, 2, 3, 4, 5, 6].map(n => <div key={n} className="min-w-[84px] h-24 bg-[#EDEDE8] border border-black grid place-items-center text-black font-black shrink-0">0{n}</div>)}<div className="absolute bottom-1 left-2 text-[10px] font-mono text-zinc-500">SCROLL →</div></div>;
  }
  return (
    <div className="h-full bg-[#111] overflow-hidden relative" data-lenis-prevent>
      <motion.div drag="x" dragElastic={0.15} dragMomentum={false} dragConstraints={{ left: -160, right: 0 }} onDrag={(e, info) => { setX(p => Math.max(-160, Math.min(0, p + info.delta.x))); onInteract(); }} className="flex gap-2 p-2 cursor-grab active:cursor-grabbing" style={{ x }}>
        {[1, 2, 3, 4, 5, 6].map(n => <div key={n} className="min-w-[84px] h-24 bg-[#EDEDE8] border border-black grid place-items-center text-black font-black">0{n}</div>)}
      </motion.div>
      <div className="absolute bottom-1 left-2 right-2 h-1 bg-[#2A2A2A]"><motion.div animate={{ width: `${((Math.abs(x) / 160) * 100)}%` }} className="h-full bg-[#D6FF2A]" /></div>
    </div>
  );
}
function ScrambleToy({ onInteract }: { onInteract: () => void }) {
  const final = "EROWAN LAB";
  const [text, setText] = useState(final);
  const chars = "!<>-_\\/[]{}—=+*^?";
  const reduce = useReducedMotion();
  const scramble = () => {
    if (reduce) { setText(final); onInteract(); return; }
    let iter = 0; onInteract();
    const id = setInterval(() => {
      setText(final.split("").map((c, i) => i < iter ? c : chars[Math.floor(Math.random() * chars.length)]).join(""));
      iter += 1.2; if (iter >= final.length) { clearInterval(id); setText(final); }
    }, 38);
  };
  useEffect(() => { if (!reduce) scramble(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);
  return <div onPointerEnter={scramble} onClick={scramble} className="h-full grid place-items-center bg-[#111] text-[#D6FF2A] font-black tracking-[0.18em] text-lg cursor-pointer">{text}</div>;
}
function DistortToy({ onInteract }: { onInteract: () => void }) {
  const [h, setH] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div onPointerEnter={() => { if (!reduce) setH(true); onInteract(); }} onPointerLeave={() => { if (!reduce) setH(false); }} onClick={() => { if (!reduce) setH(v => !v); onInteract(); }} className="relative h-full overflow-hidden bg-[#111] grid place-items-center">
      <motion.div animate={{ scale: reduce ? 1 : h ? 1.08 : 1 }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 220 }} className="w-[86%] h-[78%] bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-mono text-xs" style={reduce ? undefined : { filter: h ? "contrast(1.2) saturate(1.5)" : "contrast(1) saturate(1)" }}>
        <span className={h && !reduce ? "tracking-[0.28em]" : "tracking-[0.12em]"}>HOVER MELTS →</span>
      </motion.div>
      {!reduce && <motion.div animate={{ opacity: h ? 1 : 0 }} className="absolute inset-0 bg-[#D6FF2A] mix-blend-overlay pointer-events-none" />}
    </div>
  );
}

const TOY_MAP: Record<string, React.FC<{ onInteract: () => void }>> = {
  "pricing-toggle": PricingToy, "booking-scrub": BookingToy, "before-after": BeforeAfterToy, "cart-drawer": CartToy,
  "magnetic-cta": MagneticToy, "fluid-cursor": FluidToy, "stagger-grid": StaggerToy, "clip-reveal": ClipToy,
  "pinned-scroll": PinnedToy, "horizontal-rail": HorizontalToy, "text-scramble": ScrambleToy, "image-distort": DistortToy,
};

const WA_NUMBER = "919999999999";
const waHref = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function LabPage() {
  const [filter, setFilter] = useState<LabIntent | "all">("all");
  const [interactions, setInteractions] = useState(0);
  const [showCapture, setShowCapture] = useState(false);
  const onInteract = () => setInteractions(n => n + 1);
  // persist interactions + 3-scrub capture analytics (lane 2)
  useEffect(() => {
    try { localStorage.setItem("erowan_lab_interactions", String(interactions)); } catch {}
    if (interactions >= 3 && !showCapture) setShowCapture(true);
  }, [interactions, showCapture]);
  useEffect(() => {
    if (!showCapture) return;
    try {
      if (localStorage.getItem("erowan_lab_capture_unlocked")) return;
      localStorage.setItem("erowan_lab_capture_unlocked", JSON.stringify({ ts: Date.now(), count: interactions }));
      const key = "erowan_analytics";
      const raw = localStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push({ path: "/lab#capture-unlocked", ts: Date.now(), meta: { interactions, trigger: "hub-3-scrubs" } });
      localStorage.setItem(key, JSON.stringify(arr.slice(-500)));
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "lab_capture_unlocked", { value: interactions, trigger: "hub" });
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "lab_capture_unlocked", trigger: "hub", interactions });
    } catch {}
  }, [showCapture, interactions]);

  const filtered = filter === "all" ? labPatterns : labPatterns.filter(p => p.intent === filter);

  return (
    <div className="py-6 md:py-8">
      {/* HERO */}
      <div className="border border-[#2A2A2A] bg-[#111] overflow-hidden">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-0">
          <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#2A2A2A]">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#D6FF2A] text-black text-[10px] font-black tracking-[0.18em]">● LIVE • 12 TOYS • DRAG/SCrub</div>
            <h1 className="mt-4 font-black leading-[0.9] tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 54px)" }}>
              MOTION <span className="text-[#D6FF2A]">LAB</span><br />
              <span className="text-zinc-400">RAW TOY</span> GADGETS.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 font-mono">12 toys you can drag, scrub and steal. 6 sales patterns (pricing, booking, proof, cart) + 6 craft patterns (magnet, fluid, stagger, clip, pinned, rail). Built with Framer + Lenis. No budget. Max wow.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono">
              {(["all", "convert", "delight", "story"] as const).map(f => (
                <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 border tracking-widest font-black ${filter === f ? "bg-[#D6FF2A] text-black border-[#D6FF2A]" : "border-[#2A2A2A] text-zinc-400 hover:border-white hover:text-white"}`}>{f.toUpperCase()} {f === "all" ? "12" : "04"}</button>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Link href="/pay?pattern=lab" className="px-5 py-2.5 bg-[#D6FF2A] text-black font-black text-xs tracking-widest border border-[#D6FF2A] hover:bg-white">GET LAB FOR MY SITE →</Link>
              <Link href="#packs" className="px-5 py-2.5 border border-[#2A2A2A] text-zinc-300 font-mono text-xs tracking-widest hover:border-white">SEE PACKS ↓</Link>
            </div>
          </div>
          <div className="bg-[#0A0A0A] p-6 md:p-7 font-mono text-xs">
            <div className="text-[10px] tracking-[0.2em] text-zinc-500">LAB SPEC — TERMINAL</div>
            <div className="mt-3 space-y-2 text-zinc-300">
              <div className="flex justify-between border-b border-[#1A1A1A] py-1"><span className="text-zinc-500">COUNT</span><span className="text-[#D6FF2A]">12 toys + hub = 13 routes</span></div>
              <div className="flex justify-between border-b border-[#1A1A1A] py-1"><span className="text-zinc-500">INTENTS</span><span>CONVERT 04 / DELIGHT 04 / STORY 04</span></div>
              <div className="flex justify-between border-b border-[#1A1A1A] py-1"><span className="text-zinc-500">INTERACTION</span><span>DRAG + SCRUB (desktop) / TAP (mobile)</span></div>
              <div className="flex justify-between border-b border-[#1A1A1A] py-1"><span className="text-zinc-500">STACK</span><span>FRAMER • LENIS • NEXT 14</span></div>
              <div className="flex justify-between py-1"><span className="text-zinc-500">PERF</span><span>NO BUDGET — MAX WOW</span></div>
            </div>
            <div className="mt-4 p-3 bg-[#D6FF2A] text-black border border-black font-black text-[11px] leading-relaxed">MOBILE: TOYS AUTOPLAY. DESKTOP: DRAG THEM. EVERY PATTERN HAS “GET THIS” → PRE-FILLS PAY.</div>
            <div className="mt-3 text-[11px] text-zinc-500">Interactions: <span className="text-[#D6FF2A]">{interactions}</span> / 3 to unlock capture →</div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div id="convert" className="mt-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => {
            const Toy = TOY_MAP[p.slug];
            return (
              <div key={p.slug} id={p.intent} className="group border border-[#2A2A2A] bg-[#111] hover:border-[#3A3A3A] transition flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#2A2A2A] bg-[#0F0F0F]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-black tracking-widest text-[#D6FF2A]">{p.num}</span>
                    <span className={`text-[10px] font-mono tracking-widest px-1.5 py-0.5 border ${p.intent === "convert" ? "border-[#D6FF2A] text-[#D6FF2A]" : p.intent === "delight" ? "border-zinc-600 text-zinc-400" : "border-zinc-700 text-zinc-500"}`}>{p.intent.toUpperCase()}</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">{p.tech.join(" • ")}</span>
                </div>
                <div className="px-3 pt-3">
                  <div className="font-black tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>{p.title}</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-1">{p.tagline}</div>
                </div>
                <div className="mx-3 mt-3 h-[176px] border border-[#2A2A2A] bg-black overflow-hidden">
                  {Toy ? <Toy onInteract={onInteract} /> : <div className="grid place-items-center h-full text-zinc-600 font-mono text-xs">TOY</div>}
                </div>
                <div className="px-3 py-2 text-xs leading-relaxed text-zinc-400 font-mono line-clamp-2">{p.description}</div>
                <div className="px-3 text-[10px] font-mono text-zinc-500">USE: {p.salesUse}</div>
                <div className="mt-auto p-3 flex gap-2">
                  <Link href={`/lab/${p.slug}`} className="flex-1 py-2 bg-[#EDEDE8] text-black text-center text-xs font-black tracking-widest border border-black hover:bg-white">VIEW TOY →</Link>
                  <Link href={`/pay?pattern=${p.slug}`} className="flex-1 py-2 bg-[#D6FF2A] text-black text-center text-xs font-black tracking-widest border border-black hover:bg-white">GET THIS →</Link>
                </div>
                <div className="px-3 pb-2 text-[10px] font-mono text-zinc-600">{p.priceNote} • Craft: {p.craft}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PACKS */}
      <div id="packs" className="mt-8 border border-[#D6FF2A] bg-[#D6FF2A] text-black p-[1.5px]">
        <div className="bg-[#111] text-[#F2F2F0] p-4 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-black tracking-tight text-xl" style={{ fontFamily: "var(--font-display)" }}>CURATED PACKS — BY INTENT</h2>
            <span className="text-xs font-mono tracking-widest text-zinc-400">Pick pack → we ship in 48h</span>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {labIntents.map(pack => (
              <div key={pack.id} className="border border-[#2A2A2A] bg-[#0A0A0A] p-4">
                <div className="text-[11px] font-mono tracking-[0.2em] text-[#D6FF2A]">{pack.pack}</div>
                <div className="font-black text-lg mt-1" style={{ fontFamily: "var(--font-display)" }}>{pack.label}</div>
                <div className="text-xs font-mono text-zinc-400 mt-1">{pack.desc}</div>
                <ul className="mt-3 space-y-1 text-xs font-mono text-zinc-300">
                  {labPatterns.filter(p => p.intent === pack.id).map(p => <li key={p.slug} className="flex justify-between border-b border-[#1A1A1A] py-1"><span>{p.num} {p.title}</span><span className="text-zinc-500">→</span></li>)}
                </ul>
                <div className="mt-3 flex items-baseline justify-between"><span className="font-black text-[#D6FF2A]">{pack.price}</span><span className="text-[10px] font-mono text-zinc-500">48H DELIVERY</span></div>
                <Link href={`/pay?pack=${pack.id}`} className="mt-3 block py-2.5 bg-[#D6FF2A] text-black text-center font-black text-xs tracking-widest border border-[#D6FF2A] hover:bg-white">GET {pack.label} PACK →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* capture */}
      <AnimatePresence>
        {showCapture && (
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} className="fixed bottom-4 right-4 z-50 max-w-[360px] border-2 border-black bg-[#D6FF2A] text-black p-4 shadow-[8px_8px_0_black]">
            <div className="text-[10px] font-mono tracking-[0.2em]">● 3 TOYS SCRUBBED — YOU LIKE MOTION</div>
            <div className="font-black text-lg leading-tight mt-1" style={{ fontFamily: "var(--font-display)" }}>Loved that motion? We’ll clone it for you in 48h.</div>
            <p className="text-xs font-mono mt-1 leading-relaxed">Pick any toy or pack. We plug it into your salon/clinic/restaurant/realty site. Base $250.</p>
            <div className="mt-3 flex gap-2">
              <a href={waHref("Hi Erowan Lab — loved the toys, want one for my site (LAB hub)")} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-black text-[#D6FF2A] text-center font-black text-xs tracking-widest">WHATSAPP →</a>
              <button onClick={() => setShowCapture(false)} className="px-3 py-2 border-2 border-black bg-white font-mono text-xs">CLOSE</button>
            </div>
            <div className="mt-2 text-[10px] font-mono text-zinc-700">Tracked: book clicks from LAB • {interactions} interactions</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
