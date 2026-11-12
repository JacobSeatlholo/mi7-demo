"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { heroStats } from "@/lib/content";
import { useCountUp } from "@/lib/hooks";

function formatValue(v: number): string {
  if (v >= 1000000) return `${(v / 1000000).toFixed(v >= 1000000 ? 0 : 1)} million`;
  return v.toLocaleString("en-ZA");
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="px-4 py-6 text-center sm:py-8">
      <p className="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {formatValue(n)}
        <span className="text-brand">{suffix}</span>
      </p>
      <p className="mx-auto mt-2 max-w-[220px] text-sm leading-snug text-white/60">{label}</p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="relative border-y border-white/10 bg-ink-soft grain">
      <div className="container-x grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
        {heroStats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
