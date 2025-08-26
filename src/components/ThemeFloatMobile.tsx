"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type Pos = { x: number; y: number };

export default function ThemeFloatMobile() {
  // Solo render en mobile
  const [isMobile, setIsMobile] = useState(false);
  const [pos, setPos] = useState<Pos>({ x: 12, y: 92 });
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const start = useRef<{ x: number; y: number; px: number; py: number }>({
    x: 0, y: 0, px: 0, py: 0,
  });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // posición por defecto (debajo del header, a la derecha)
  useEffect(() => {
    if (!isMobile) return;
    const saved = localStorage.getItem("theme-float-pos");
    if (saved) {
      try { setPos(JSON.parse(saved)); return; } catch {}
    }
    // calcular inicio a la derecha
    requestAnimationFrame(() => {
      const el = ref.current;
      const w = el?.offsetWidth ?? 64;
      const x = Math.max(8, window.innerWidth - w - 14);
      const y = 92; // debajo del menú; ajustable
      setPos({ x, y });
    });
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - start.current.px;
      const dy = e.clientY - start.current.py;
      const el = ref.current;
      const ew = el?.offsetWidth ?? 64;
      const eh = el?.offsetHeight ?? 64;
      const maxX = window.innerWidth - ew - 8;
      const maxY = window.innerHeight - eh - 8;
      setPos({
        x: Math.min(maxX, Math.max(8, start.current.x + dx)),
        y: Math.min(maxY, Math.max(8, start.current.y + dy)),
      });
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      localStorage.setItem("theme-float-pos", JSON.stringify(pos));
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [isMobile, pos]);

  if (!isMobile) return null;

  return (
    <div
      ref={ref}
      className="theme-float md:hidden"
      style={{ left: pos.x, top: pos.y }}
      onPointerDown={(e) => {
        dragging.current = true;
        start.current = { x: pos.x, y: pos.y, px: e.clientX, py: e.clientY };
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        document.body.style.userSelect = "none";
      }}
      onClickCapture={(e) => {
        // evita clic accidental al soltar
        if (dragging.current) { e.preventDefault(); e.stopPropagation(); }
      }}
    >
      <ThemeToggle />
    </div>
  );
}
