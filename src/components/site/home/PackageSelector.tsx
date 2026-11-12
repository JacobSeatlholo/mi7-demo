"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { packages } from "@/lib/content";
import { navigate } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function PackageSelector({ id }: { id?: string }) {
  const [active, setActive] = useState(packages[0].id);
  const pkg = packages.find((p) => p.id === active) ?? packages[0];

  return (
    <section id={id} className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="stripe-device mx-auto mb-5 h-1.5 w-16 rounded-full" />
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink lg:text-5xl">
            Simple monthly packages
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real prices, no obligations and a 4 minute response time target on every package.
            All quotes and inspections are free.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 lg:mt-14">
          <div
            role="tablist"
            aria-label="Subscription packages"
            className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-xl border border-border bg-[#f6f6f7] p-1.5"
          >
            {packages.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === p.id}
                onClick={() => setActive(p.id)}
                className={cn(
                  "rounded-lg px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-all sm:px-6 sm:text-base",
                  active === p.id
                    ? "bg-brand text-white shadow-md shadow-brand/30"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {p.name.replace("Mi7 ", "")}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl" role="tabpanel">
            <div
              key={pkg.id}
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-ink p-7 text-white sm:p-10",
                pkg.featured ? "border-brand/60 red-glow" : "border-white/10"
              )}
            >
              {pkg.featured && (
                <span className="absolute right-0 top-0 rounded-bl-xl bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-sm">
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-white/65">{pkg.pitch}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-6xl font-bold leading-none text-brand">
                      {pkg.price}
                    </span>
                    {pkg.priceNote && (
                      <span className="pb-1 text-sm text-white/60">{pkg.priceNote}</span>
                    )}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/85">
                      <Icon name="clock" className="h-3.5 w-3.5 text-brand" /> 4 min response
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/85">
                      <Icon name="check" className="h-3.5 w-3.5 text-brand" /> No obligations
                    </span>
                  </div>
                  <button
                    onClick={() => navigate(`/quote?package=${pkg.id}`)}
                    className="mt-7 w-full rounded-md bg-brand px-6 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-deep md:w-auto"
                  >
                    Choose this package
                  </button>
                </div>
                <ul className="grid flex-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        strokeWidth={2.5}
                      />
                      <span className="leading-snug text-white/75">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
