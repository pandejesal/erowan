"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

function PricingBig({ onInteract }: { onInteract: () => void }) {
  const [yearly, setYearly] = useState(true);
  const reduce = useReducedMotion();
  return (
    <div className="h-full flex flex-col gap-4 p-5 justify-center bg-black">
      <div className="flex justify-center">
        <button onClick={() => { setYearly(!yearly); onInteract(); }} className="flex gap-1 bg-[#1A1A1A] border border-[#2A2A2A] p-1 font-mono text-xs tracking-widest">
          <span className={`px-4 py-2 ${!yearly ? "bg-white text-black" : "text-zinc-500"}`}>MONTHLY</span>
          <span className={`px-4 py-2 ${yearly ? "bg-[#D6FF2A] text-black font-black" : "text-zinc-500"}`}>YEARLY -20%</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[49, 99, 199].map(v => (
          <motion.div key={v} layout={!reduce} className="bg-[#EDEDE8] text-black p-4 text-center border-2 border-black">
            <div className="text-xs font-mono">PLAN</div>
            <motion.div layout={!reduce} transition={reduce ? { duration: 0 } : undefined} className="font-black text-2xl">${yearly ? Math.round(v * 0.8) : v}</motion.div>
            <div className="text-xs font-mono opacity-60">/mo</div>
            <button onClick={onInteract} className="mt-2 w-full py-1.5 bg-black text-white text-xs font-black">SELECT →</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
function BookingBig({ onInteract }: { onInteract: () => void }) {
  const [pos, setPos] = useState(3);
  const reduce = useReducedMotion();
  const slots = Array.from({ length: 12 }, (_, i) => 7 + i);
  return (
    <div className="h-full p-4 bg-black flex flex-col gap-3 justify-center">
      <div className="flex justify-between text-xs font-mono text-zinc-500"><span>7:00</span><span>{reduce ? "— tap rail —" : "— drag rail —"}</span><span>19:00</span></div>
      <div className="relative h-16 bg-[#111] border border-[#2A2A2A] flex items-center px-2 overflow-hidden" data-lenis-prevent>
        <div className="absolute inset-x-2 flex gap-1">
          {slots.map((h, i) => (
            <button key={h} onClick={() => { setPos(i); onInteract(); }} className={`flex-1 h-10 font-mono text-xs border ${pos === i ? "bg-[#D6FF2A] text-black border-[#D6FF2A] font-black" : "bg-[#1A1A1A] border-[#2A2A2A] text-zinc-500"}`}>{h}:00</button>
          ))}
        </div>
      </div>
      <motion.div key={pos} initial={reduce ? false : { y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={reduce ? { duration: 0 } : undefined} className="bg-[#EDEDE8] border border-black p-3 flex justify-between items-center font-mono text-sm text-black">
        <span>Selected {7 + pos}:00 — Layla • $45</span>
        <Link href="/pay?pattern=booking-scrub" onClick={() => onInteract()} className="px-3 py-1 bg-[#D6FF2A] border border-black font-black text-xs">BOOK →</Link>
      </motion.div>
    </div>
  );
}
function BeforeAfterBig({ onInteract }: { onInteract: () => void }) {
  const [x, setX] = useState(52);
  const raf = useRef<number | null>(null);
  const pending = useRef(52);
  const reduce = useReducedMotion();
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 100;
    pending.current = Math.max(5, Math.min(95, nx));
    if (raf.current === null) {
      raf.current = requestAnimationFrame(() => { setX(pending.current); raf.current = null; });
    }
  };
  if (reduce) {
    return (
      <div className="relative h-full bg-[#111] overflow-hidden border border-[#2A2A2A] grid grid-cols-2">
        <div className="grid place-items-center bg-[#232326] text-zinc-400 font-mono"><span className="bg-black px-3 py-1 border border-[#2A2A2A] text-xs">BEFORE</span></div>
        <div className="grid place-items-center bg-[#EDEDE8] text-black font-mono border-l-4 border-[#D6FF2A]"><span className="bg-[#D6FF2A] px-3 py-1 font-black border border-black text-xs">AFTER ✨</span></div>
      </div>
    );
  }
  return (
    <div className="relative h-full bg-[#111] overflow-hidden border border-[#2A2A2A]" data-lenis-prevent onPointerMove={handleMove}>
      <div className="absolute inset-0 grid place-items-center bg-[#232326] text-zinc-400 font-mono"><span className="bg-black px-3 py-1 border border-[#2A2A2A] text-xs">BEFORE — drag ↔</span></div>
      <div className="absolute inset-0 grid place-items-center bg-[#EDEDE8] text-black font-mono border-l-4 border-[#D6FF2A]" style={{ clipPath: `inset(0 ${100 - x}% 0 0)`, WebkitClipPath: `inset(0 ${100 - x}% 0 0)` }}><span className="bg-[#D6FF2A] px-3 py-1 font-black border border-black text-xs">AFTER — result ✨</span></div>
      <motion.div className="absolute top-0 bottom-0 w-1 bg-[#D6FF2A] will-change-transform" style={{ left: `${x}%` }} />
      <motion.div drag="x" dragElastic={0} dragConstraints={{ left: -160, right: 160 }} dragMomentum={false} onDrag={(e, info) => { setX(p => Math.max(10, Math.min(90, p + info.delta.x * 0.35))); onInteract(); }} className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-[#D6FF2A] border-2 border-black rounded-full grid place-items-center cursor-ew-resize shadow-[4px_4px_0_black] will-change-transform" style={{ left: `calc(${x}% - 20px)` }}>↔</motion.div>
    </div>
  );
}
function CartBig({ onInteract }: { onInteract: () => void }) {
  const [items, setItems] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const add = (n: string) => { setItems(v => [...v, n]); setOpen(true); onInteract(); };
  return (
    <div className="h-full p-4 bg-black flex gap-4">
      <div className="flex-1 grid grid-cols-3 gap-2">
        {["MUG $28", "APRON $45", "BOARD $60", "CANDLE $34", "TOTE $32", "SOAP $18"].map(n => (
          <button key={n} onClick={() => add(n)} className="bg-[#EDEDE8] text-black text-xs font-mono py-3 border-2 border-black hover:bg-[#D6FF2A] hover:font-black">+ {n}</button>
        ))}
      </div>
      <motion.div animate={{ x: reduce ? 0 : open ? 0 : 16, opacity: reduce ? 1 : open ? 1 : 0.6 }} transition={reduce ? { duration: 0 } : undefined} className="w-44 bg-[#D6FF2A] border-2 border-black p-3 flex flex-col">
        <div className="font-black text-xs tracking-widest">CART {items.length}</div>
        <div className="mt-2 space-y-1 flex-1 overflow-auto max-h-40">
          {items.length === 0 ? <div className="text-xs font-mono">No items</div> : items.map((n, i) => <div key={i} className="text-xs font-mono bg-white border border-black px-2 py-1">{n}</div>)}
        </div>
        <button onClick={() => setOpen(!open)} className="mt-2 py-1.5 bg-black text-white font-mono text-xs">{open ? "HIDE" : "PEEK"}</button>
        <Link href="/pay?pattern=cart-drawer" className="mt-2 py-1.5 bg-white border border-black text-center font-black text-xs">CHECKOUT →</Link>
      </motion.div>
    </div>
  );
}
function MagneticBig({ onInteract }: { onInteract: () => void }) {
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
    const dx = (e.clientX - cx) * 0.32, dy = (e.clientY - cy) * 0.32;
    const dist = Math.hypot(dx, dy);
    pending.current = dist < 140 ? { x: dx, y: dy } : { x: 0, y: 0 };
    shouldInteract.current = dist < 140;
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
    return <div className="h-full grid place-items-center bg-[#0F0F0F]"><a href="/pay?pattern=magnetic-cta" className="px-10 py-5 bg-[#D6FF2A] text-black font-black tracking-widest border-2 border-black shadow-[6px_6px_0_black]">MAGNETIC CTA →</a></div>;
  }
  return (
    <div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} className="relative h-full grid place-items-center bg-[#0F0F0F]">
      <motion.a href="/pay?pattern=magnetic-cta" animate={{ x: p.x, y: p.y }} transition={{ type: "spring", stiffness: 260, damping: 18 }} className="px-10 py-5 bg-[#D6FF2A] text-black font-black tracking-widest border-2 border-black shadow-[6px_6px_0_black] will-change-transform">MAGNETIC CTA →</motion.a>
      <div className="absolute bottom-3 text-xs font-mono text-zinc-600">Move cursor — button follows within 140px</div>
    </div>
  );
}
function FluidBig({ onInteract }: { onInteract: () => void }) {
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
    pendingVel.current = Math.min(14, d * 2.2);
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
    return <div className="relative h-full bg-[#0A0A0A] overflow-hidden grid place-items-center"><div className="w-6 h-6 bg-[#D6FF2A] rounded-full" /><div className="absolute bottom-3 text-xs font-mono text-zinc-600">FLUID CURSOR — motion reduced</div></div>;
  }
  return (
    <div onPointerMove={handleMove} className="relative h-full bg-[#0A0A0A] overflow-hidden cursor-none">
      <div className="absolute inset-0 grid place-items-center text-zinc-700 font-mono text-xs tracking-widest">MOVE FAST TO STRETCH →</div>
      {Array.from({ length: 6 }).map((_, i) => <motion.div key={i} animate={{ left: `${pos.x}%`, top: `${pos.y}%`, scale: 1 + vel * 0.07 + i * 0.04 }} transition={{ delay: i * 0.02, type: "spring", stiffness: 320, damping: 20 }} className="absolute w-4 h-4 bg-[#D6FF2A] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen will-change-transform" style={{ opacity: 1 - i * 0.12 }} />)}
      <motion.div animate={{ left: `${pos.x}%`, top: `${pos.y}%`, scaleX: 1 + vel * 0.09, scaleY: 1 - vel * 0.05 }} className="absolute w-6 h-6 border-2 border-[#D6FF2A] rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform" />
    </div>
  );
}
function StaggerBig({ onInteract }: { onInteract: () => void }) {
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  if (reduce) {
    return <div onClick={() => onInteract()} className="h-full p-4 bg-[#111] grid grid-cols-4 gap-3">{Array.from({ length: 8 }).map((_, i) => <div key={i} className="h-24 bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-black">0{i + 1}</div>)}</div>;
  }
  return (
    <div onPointerEnter={() => { setHover(true); onInteract(); }} onPointerLeave={() => setHover(false)} onClick={() => { setHover(v => !v); onInteract(); }} className="h-full p-4 bg-[#111] grid grid-cols-4 gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div key={i} animate={{ y: hover ? -6 - (i % 4) * 2 : 0, rotateX: hover ? 10 : 0 }} transition={{ delay: hover ? i * 0.04 : 0, type: "spring", stiffness: 300 }} className="h-24 bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-black will-change-transform">0{i + 1}</motion.div>
      ))}
    </div>
  );
}
function ClipBig({ onInteract }: { onInteract: () => void }) {
  const [v, setV] = useState(36);
  const raf = useRef<number | null>(null);
  const pending = useRef(36);
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
  const poly = `polygon(${50 - v * 0.42}% 0, ${50 + v * 0.42}% 0, ${50 + v * 0.32}% 100%, ${50 - v * 0.32}% 100%)`;
  if (reduce) {
    return <div className="relative h-full bg-black overflow-hidden grid place-items-center p-4"><div className="w-full h-full bg-[#D6FF2A] grid place-items-center text-black font-black border-2 border-black">REVEAL</div></div>;
  }
  return (
    <div onPointerMove={handleMove} className="relative h-full bg-black overflow-hidden grid place-items-center p-4">
      <div className="absolute inset-4 bg-[#2A2A2A] border border-[#2A2A2A] grid place-items-center text-zinc-500 font-mono text-xs">ORIGINAL PHOTO</div>
      <div className="absolute inset-4 bg-[#D6FF2A] grid place-items-center text-black font-black border-2 border-black will-change-transform" style={{ clipPath: poly, WebkitClipPath: poly }}>REVEAL — SCRUB →</div>
    </div>
  );
}
function PinnedBig({ onInteract }: { onInteract: () => void }) {
  const [step, setStep] = useState(0);
  const reduce = useReducedMotion();
  const steps = ["BRIEF — we audit", "DESIGN — you approve", "BUILD — we ship", "SHIP — you sell"];
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setStep(s => { onInteract(); return (s + 1) % 4; }), 1300);
    return () => clearInterval(id);
  }, [onInteract, reduce]);
  return (
    <div className="h-full flex bg-black">
      <div className="w-36 border-r border-[#2A2A2A] p-3 flex flex-col gap-2 bg-[#0A0A0A]">
        {steps.map((s, i) => <div key={s} onClick={() => { setStep(i); onInteract(); }} className={`px-3 py-2 border font-mono text-xs cursor-pointer ${i === step ? "bg-[#D6FF2A] text-black border-[#D6FF2A] font-black" : "border-[#2A2A2A] text-zinc-500 hover:text-white"}`}>0{i + 1} {s.split(" —")[0]}</div>)}
      </div>
      <div className="flex-1 grid place-items-center bg-[#EDEDE8] text-black p-6">
        <AnimatePresence mode="wait"><motion.div key={step} initial={reduce ? false : { y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduce ? { opacity: 0 } : { y: -12, opacity: 0 }} transition={reduce ? { duration: 0 } : undefined} className="text-center"><div className="font-black text-xl" style={{ fontFamily: "var(--font-display)" }}>{steps[step]}</div><div className="mt-2 font-mono text-xs opacity-60">AUTO-CYCLES • CLICK STEP TO JUMP</div></motion.div></AnimatePresence>
      </div>
    </div>
  );
}
function HorizontalBig({ onInteract }: { onInteract: () => void }) {
  const [x, setX] = useState(0);
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className="h-full bg-black overflow-x-auto flex gap-3 p-4" data-lenis-prevent>{[1, 2, 3, 4, 5, 6, 7, 8].map(n => <div key={n} className="min-w-[140px] h-40 bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-black text-lg shrink-0">CARD 0{n}</div>)}</div>;
  }
  return (
    <div className="h-full bg-black overflow-hidden relative flex flex-col" data-lenis-prevent>
      <motion.div drag="x" dragElastic={0.12} dragMomentum={false} dragConstraints={{ left: -260, right: 0 }} onDrag={(e, info) => { setX(p => Math.max(-260, Math.min(0, p + info.delta.x))); onInteract(); }} className="flex gap-3 p-4 cursor-grab active:cursor-grabbing will-change-transform" style={{ x }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <div key={n} className="min-w-[140px] h-40 bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-black text-lg">CARD 0{n}</div>)}
      </motion.div>
      <div className="mt-auto p-3 flex justify-between items-center font-mono text-xs text-zinc-500"><span>← DRAG RAIL →</span><span className="px-2 py-1 bg-[#1A1A1A] border border-[#2A2A2A]">{Math.round(Math.abs(x) / 2.6)}%</span></div>
    </div>
  );
}
function ScrambleBig({ onInteract }: { onInteract: () => void }) {
  const final = "EROWAN BUILDS FAST";
  const [text, setText] = useState(final);
  const reduce = useReducedMotion();
  const chars = "!<>-_\\/[]{}—=+*^?#";
  const scramble = () => {
    if (reduce) { setText(final); onInteract(); return; }
    let iter = 0; onInteract();
    const id = setInterval(() => {
      setText(final.split("").map((c, i) => i < iter || c === " " ? c : chars[Math.floor(Math.random() * chars.length)]).join(""));
      iter += 1.3; if (iter >= final.length) { clearInterval(id); setText(final); }
    }, 42);
  };
  useEffect(() => { if (!reduce) scramble(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);
  return <div onPointerEnter={scramble} onClick={scramble} className="h-full grid place-items-center bg-black text-[#D6FF2A] font-black text-2xl md:text-3xl tracking-[0.12em] cursor-pointer">{text}</div>;
}
function DistortBig({ onInteract }: { onInteract: () => void }) {
  const [h, setH] = useState(false);
  const reduce = useReducedMotion();
  if (reduce) {
    return <div onClick={() => onInteract()} className="h-full grid place-items-center bg-black"><div className="w-[78%] h-[68%] bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-mono text-xs">HOVER TO MELT →</div></div>;
  }
  return (
    <div onPointerEnter={() => { setH(true); onInteract(); }} onPointerLeave={() => setH(false)} onClick={() => { setH(v => !v); onInteract(); }} className="relative h-full overflow-hidden bg-black grid place-items-center">
      <motion.div animate={{ scale: h ? 1.08 : 1 }} style={reduce ? undefined : { filter: h ? "contrast(1.25) saturate(1.6)" : "contrast(1) saturate(1)" }} transition={{ type: "spring", stiffness: 220 }} className="w-[78%] h-[68%] bg-[#EDEDE8] border-2 border-black grid place-items-center text-black font-mono will-change-transform">
        <span className={h ? "tracking-[0.32em] font-black" : "tracking-[0.14em]"}>{h ? "MELTED • DISTORTED" : "HOVER TO MELT →"}</span>
      </motion.div>
      <motion.div animate={{ opacity: h ? 1 : 0 }} transition={reduce ? { duration: 0 } : undefined} className="absolute inset-0 bg-[#D6FF2A] mix-blend-overlay pointer-events-none" />
    </div>
  );
}

const BIG_MAP: Record<string, React.FC<{ onInteract: () => void }>> = {
  "pricing-toggle": PricingBig, "booking-scrub": BookingBig, "before-after": BeforeAfterBig, "cart-drawer": CartBig,
  "magnetic-cta": MagneticBig, "fluid-cursor": FluidBig, "stagger-grid": StaggerBig, "clip-reveal": ClipBig,
  "pinned-scroll": PinnedBig, "horizontal-rail": HorizontalBig, "text-scramble": ScrambleBig, "image-distort": DistortBig,
};

export default function LabPatternClient({ pattern, num, title, tagline }: { pattern: string; num: string; title: string; tagline: string }) {
  const [interactions, setInteractions] = useState(0);
  const Toy = BIG_MAP[pattern];
  const onInteract = () => setInteractions(n => n + 1);
  // lane 2: persist last lab pattern + 3-scrub event
  useEffect(() => {
    try { localStorage.setItem("erowan_last_lab_pattern", pattern); } catch {}
  }, [pattern]);
  useEffect(() => {
    if (interactions < 3) return;
    try {
      const k = `erowan_lab_capture_${pattern}`;
      if (localStorage.getItem(k)) return;
      localStorage.setItem(k, String(Date.now()));
      const akey = "erowan_analytics";
      const raw = localStorage.getItem(akey);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push({ path: `/lab/${pattern}#capture`, ts: Date.now(), meta: { pattern, interactions, trigger: "toy-3-scrubs" } });
      localStorage.setItem(akey, JSON.stringify(arr.slice(-500)));
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "lab_capture_unlocked", { pattern, value: interactions });
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "lab_capture_unlocked", pattern, trigger: "toy", interactions });
    } catch {}
  }, [interactions, pattern]);
  return (
    <div className="border border-[#2A2A2A] bg-black overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="flex items-center gap-2">
          <span className="font-black tracking-widest text-[#D6FF2A] font-mono text-sm">{num}</span>
          <span className="font-black text-sm" style={{ fontFamily: "var(--font-display)" }}>{title}</span>
          <span className="hidden md:inline text-xs font-mono text-zinc-500">— {tagline}</span>
        </div>
        <span className="text-xs font-mono text-zinc-500">{interactions} scrubs</span>
      </div>
      <div className="h-[360px] md:h-[420px]">
        {Toy ? <Toy onInteract={onInteract} /> : <div className="grid place-items-center h-full text-zinc-600 font-mono">TOY</div>}
      </div>
      <div className="px-4 py-2 bg-[#111] border-t border-[#2A2A2A] flex flex-wrap gap-2 text-[11px] font-mono text-zinc-500">
        <span className="px-2 py-1 bg-[#1A1A1A] border border-[#2A2A2A]">DRAG / SCRUB ↑</span>
        <span className="px-2 py-1 bg-[#1A1A1A] border border-[#2A2A2A] hidden md:inline">MOBILE: TAP TO REPLAY</span>
        <span className="ml-auto text-[#D6FF2A]">{interactions >= 3 ? "● CAPTURE UNLOCKED → pay pre-filled" : `scrub ${3 - interactions} more to unlock capture`}</span>
      </div>
    </div>
  );
}
