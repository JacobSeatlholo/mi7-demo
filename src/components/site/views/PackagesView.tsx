"use client";

import { PageHero } from "../PageHero";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { packages } from "@/lib/content";
import { navigate } from "@/lib/hooks";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function PackagesView() {
  return (
    <>
      <PageHero
        eyebrow="Subscription Packages"
        title={
          <>
            Pick your protection. <span className="text-brand">4 minute response.</span>
          </>
        }
        intro="Real monthly prices with no obligations apply. Every package includes monitoring, unlimited response and access to the 24 hour control room. All quotes and inspections are free."
        image="/images/hero-contact.jpg"
      >
        <div className="flex flex-wrap gap-2">
          {["4 minute response time", "No obligations apply", "Free quotes and inspections"].map(
            (t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/85"
              >
                <Icon name="check" className="h-3.5 w-3.5 text-brand" /> {t}
              </span>
            )
          )}
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-6 lg:p-7",
                  p.featured
                    ? "border-brand shadow-xl shadow-brand/10 ring-1 ring-brand"
                    : "border-border bg-white"
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                  {p.name}
                </h2>
                <p className="mt-2 min-h-[44px] text-sm leading-snug text-muted-foreground">
                  {p.pitch}
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-5xl font-bold leading-none text-brand">
                    {p.price}
                  </span>
                  {p.priceNote && <span className="pb-1 text-xs text-muted-foreground">{p.priceNote}</span>}
                </div>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        strokeWidth={2.5}
                      />
                      <span className="leading-snug text-foreground/80">{perk}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(`/quote?package=${p.id}`)}
                  className={cn(
                    "mt-7 w-full rounded-md py-3.5 font-display font-bold uppercase tracking-wider transition-colors",
                    p.featured
                      ? "bg-brand text-white hover:bg-brand-deep"
                      : "bg-ink text-white hover:bg-brand"
                  )}
                >
                  Choose this package
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="container-x mt-14">
          <div className="rounded-2xl border border-border bg-[#f6f6f7] p-7 sm:p-9">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
                  Not sure which package fits?
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Run the two minute quote wizard or talk to the 24 hour control room directly on
                  the toll free hotline. Mi7 will assess your property and tailor the package to
                  your budget.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/quote")}
                  className="rounded-md bg-brand px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white hover:bg-brand-deep"
                >
                  Start quote wizard
                </button>
                <a
                  href={site.hotlineHref}
                  className="rounded-md border border-foreground/20 px-6 py-3.5 font-display font-bold uppercase tracking-wider text-ink hover:border-foreground/50"
                >
                  Call {site.hotline}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
