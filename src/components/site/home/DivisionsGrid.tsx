"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { divisions } from "@/lib/content";
import { navigate } from "@/lib/hooks";

export function DivisionsGrid() {
  const featured = divisions.slice(0, 9);
  const extras = divisions.slice(9);

  return (
    <section className="bg-ink py-16 text-white lg:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight lg:text-5xl">
              One team. Every protection.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              At Mi7, we understand that every client has bespoke security needs and individual
              budgets. We therefore offer a range of services which are tailor made for you.
            </p>
          </div>
          <button
            onClick={() => navigate("/services")}
            className="group flex items-center gap-2 whitespace-nowrap rounded-md border border-white/20 px-5 py-3 font-display font-semibold uppercase tracking-wider text-white/90 transition-colors hover:border-brand hover:text-white"
          >
            All divisions
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 0.1}>
              <button
                onClick={() => navigate(`/services/${d.slug}`)}
                className="group relative block h-full w-full overflow-hidden rounded-xl border border-white/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-brand/40">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="relative bg-ink-soft p-6 transition-colors group-hover:bg-[#17171e]">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    {d.shortName}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/60">
                    {d.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Explore division
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 grid gap-5 sm:grid-cols-3">
          {extras.map((d) => (
            <button
              key={d.slug}
              onClick={() => navigate(`/services/${d.slug}`)}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-soft p-5 text-left transition-colors hover:border-brand/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-base font-bold uppercase tracking-wide">
                  {d.shortName}
                </span>
                <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-white/55">
                  {d.tagline}
                </span>
              </span>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
