"use client";

import Image from "next/image";
import { PageHero } from "../PageHero";
import { Reveal } from "../Reveal";
import { galleryImages, leadership, timeline } from "@/lib/content";
import { navigate } from "@/lib/hooks";
import { site } from "@/config/site";

export function AboutView() {
  return (
    <>
      <PageHero
        eyebrow="About Mi7 National Group"
        title={
          <>
            Built on God, Integrity <span className="text-brand">and Community</span>
          </>
        }
        intro="Mi7 National Group is a security company which operates on values of God, Integrity and Community. We strive for overall wellbeing for our clients, rather than a basic approach to security."
        image="/images/about-siu.jpg"
      />

      {/* Founding story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink">
              One convoy started it all
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              On 6 March 2021, manager Damian Venter led a convoy of 17 vehicles on the
              company&apos;s first official duty outside its Mkondeni headquarters. The procession
              followed the R103 until it reached the Ashburton Pick n Pay, where Mi7 National
              Group&apos;s teams, vehicles, equipment and technology were displayed to the public
              for the very first time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The company&apos;s goal was to provide a tripartite approach based on three pillars:
              security, medical response and wellness. That vision is simple and human: a
              community which can walk the streets of their neighbourhood without fear and sleep
              peacefully knowing they are safe in their homes. A community which can access
              critical medical care when their lives depend on it. And a community in good overall
              health, engaging in recreational activities together at local parks and communal
              spaces.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today Mi7 serves Pietermaritzburg, Hilton, Howick and surrounding areas with a 24
              hour control room, armed response, emergency medical services, surveillance,
              guarding and investigations, with a national presence of eight offices in major
              cities around the country.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/gallery-6.jpg"
                alt="Mi7 National Group officers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                ["17", "vehicles in the first convoy"],
                ["8", "offices in major cities"],
                ["24/7", "control room and dispatch"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-border bg-[#f6f6f7] p-4 text-center">
                  <p className="font-display text-3xl font-bold text-brand">{v}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
              The Mi7 journey
            </h2>
          </Reveal>
          <div className="relative mt-12 space-y-10 border-l border-white/15 pl-8 lg:pl-12">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand bg-ink lg:-left-[57px]">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
                    {t.year}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-white/65">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink">
              The people behind the badge
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl border border-border bg-white">
                  {p.image ? (
                    <div className="relative aspect-[4/4.4]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/4.4] items-center justify-center bg-ink">
                      <span className="font-display text-6xl font-bold uppercase text-white/15">
                        {p.name
                          .split(" ")
                          .map((s) => s[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-border p-4">
                    <p className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                      {p.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{p.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#f6f6f7] py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink">
              Mi7 on the ground
            </h2>
            <p className="mt-3 text-muted-foreground">
              Real photos of the teams, vehicles and officers serving the community.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border"
              >
                <Image
                  src={src}
                  alt={`Mi7 National Group team photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-brand p-8 text-white sm:p-12">
              <div className="grain absolute inset-0 opacity-40" />
              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl">
                    Your Trust, Our Protection
                  </h2>
                  <p className="mt-2 max-w-lg text-white/90">
                    Join the community Mi7 protects. Free quotes, free inspections, no
                    obligations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("/quote")}
                    className="rounded-md bg-white px-6 py-3.5 font-display font-bold uppercase tracking-wider text-brand transition-colors hover:bg-ink hover:text-white"
                  >
                    Get a Free Quote
                  </button>
                  <a
                    href={site.hotlineHref}
                    className="rounded-md border border-white/50 px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                  >
                    Call {site.hotline}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
