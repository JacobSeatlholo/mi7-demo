"use client";

import Image from "next/image";
import { PageHero } from "../PageHero";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { divisions, divisionBySlug } from "@/lib/content";
import { navigate } from "@/lib/hooks";
import { site } from "@/config/site";

export function ServiceDetailView({ slug }: { slug: string }) {
  const d = divisionBySlug(slug);

  if (!d) {
    return (
      <section className="bg-ink py-24 text-white">
        <div className="container-x py-16 text-center">
          <h1 className="font-display text-4xl font-bold uppercase">Division not found</h1>
          <p className="mt-3 text-white/60">That division does not exist on this demo site.</p>
          <button
            onClick={() => navigate("/services")}
            className="mt-8 rounded-md bg-brand px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white"
          >
            Browse all divisions
          </button>
        </div>
      </section>
    );
  }

  const others = divisions.filter((x) => x.slug !== d.slug).slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Security Division" title={d.name} intro={d.tagline} image={d.image}>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate(`/quote?service=${d.slug}`)}
            className="rounded-md bg-brand px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
          >
            Get a Free Quote
          </button>
          <a
            href={site.hotlineHref}
            className="flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:border-white/60"
          >
            <Icon name="phone" className="h-4 w-4 text-brand" /> {site.hotline}
          </a>
        </div>
      </PageHero>

      {d.stats && (
        <section className="border-b border-white/10 bg-ink-soft">
          <div className="container-x grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {d.stats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center">
                <p className="font-display text-3xl font-bold text-brand lg:text-4xl">{s.value}</p>
                <p className="mx-auto mt-1.5 max-w-[240px] text-sm leading-snug text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink lg:text-4xl">
              What this division does
            </h2>
            <div className="mt-6 space-y-4">
              {d.overview.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-border bg-[#f6f6f7] p-7">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                At a glance
              </h3>
              <ul className="mt-5 space-y-3.5">
                {d.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {d.units && (
        <section className="bg-ink py-16 text-white lg:py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
                Specialist units and equipment
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {d.units.map((u, i) => (
                <Reveal key={u.name} delay={(i % 4) * 0.08}>
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink-soft">
                    {u.image && (
                      <div className="relative h-36 bg-white">
                        <Image
                          src={u.image}
                          alt={u.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                        {u.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{u.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next divisions */}
      <section className="bg-[#f6f6f7] py-14">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
              Explore other divisions
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <button
                key={o.slug}
                onClick={() => navigate(`/services/${o.slug}`)}
                className="group flex items-center gap-3.5 rounded-xl border border-border bg-white p-4 text-left transition-all hover:border-brand/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                <span className="flex-1 font-display text-sm font-bold uppercase tracking-wide text-ink">
                  {o.shortName}
                </span>
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
