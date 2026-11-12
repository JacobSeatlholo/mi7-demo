"use client";

import Image from "next/image";
import { PageHero } from "../PageHero";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { divisions } from "@/lib/content";
import { navigate } from "@/lib/hooks";

export function ServicesView() {
  return (
    <>
      <PageHero
        eyebrow="Security & Response Services"
        title={
          <>
            Tailor made security, <span className="text-brand">built around you</span>
          </>
        }
        intro="At Mi7, we understand that every client has bespoke security needs and individual budgets. We therefore offer a range of services which are tailor made for you."
        image="/images/hero-services.jpg"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 0.08}>
              <button
                onClick={() => navigate(`/services/${d.slug}`)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-white text-left transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-black/30">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {d.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand">{d.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {d.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                    View details
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
      </section>
    </>
  );
}
