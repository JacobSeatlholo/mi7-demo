"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { navigate, scrollToId } from "@/lib/hooks";
import { Icon } from "../Icon";

const chips = [
  { icon: "clock", label: "4 minute response target" },
  { icon: "radar", label: "24/7 control room" },
  { icon: "map-pin", label: "8 offices nationwide" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mustang.jpg"
          alt="Mi7 National Group armed response vehicle"
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-ink/40" />
      </div>

      <div className="container-x relative flex min-h-[calc(100svh-112px)] flex-col justify-center py-16 md:min-h-[calc(100svh-116px)] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
          className="max-w-3xl"
        >
          {/* Award badges */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <Icon name="award" className="h-3.5 w-3.5 text-brand" /> KZN Top Brand 2023 & 2024
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/85 sm:flex">
              Standard Bank KZN Top Business Award
            </span>
          </div>

          <p className="mb-3 font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Armed response. Medical rescue. Community wellness.
          </p>
          <h1 className="text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Your Trust,
            <br />
            <span className="text-brand">Our Protection.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => navigate("/quote")}
              className="group flex items-center justify-center gap-2 rounded-md bg-brand px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-deep red-glow"
            >
              Get a Free Quote
              <Icon
                name="arrow-right"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              />
            </button>
            <a
              href={site.hotlineHref}
              className="flex items-center justify-center gap-3 rounded-md border border-white/25 bg-white/5 px-8 py-4 backdrop-blur transition-colors hover:border-white/60"
            >
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-brand" />
              <span className="text-left leading-tight">
                <span className="block font-display text-lg font-bold tracking-wide">
                  {site.hotline}
                </span>
                <span className="block text-xs text-white/65">
                  Toll free, 24 hour control room
                </span>
              </span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {chips.map((c) => (
              <span key={c.label} className="flex items-center gap-2 text-sm text-white/70">
                <Icon name={c.icon} className="h-4 w-4 text-brand" />
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={() => scrollToId("why-mi7")}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white md:flex"
          aria-label="Scroll to explore"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">Explore</span>
          <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </motion.button>
      </div>
    </section>
  );
}
