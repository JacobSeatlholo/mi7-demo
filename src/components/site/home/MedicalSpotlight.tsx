"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { fleetImages } from "@/lib/content";
import { navigate } from "@/lib/hooks";

export function MedicalSpotlight() {
  return (
    <section className="bg-[#f6f6f7] py-16 lg:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/jawslife1.jpg"
                alt="Mi7 Emergency Medical Services rescue crew with the Jaws of Life"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-xl bg-brand p-5 text-white shadow-xl shadow-brand/30 sm:-right-6 sm:p-6">
              <p className="font-display text-4xl font-bold leading-none">180</p>
              <p className="mt-1 max-w-[180px] text-sm leading-snug text-white/90">
                residents treated free of charge by Mi7 nurses every month
              </p>
            </div>
            <div className="absolute -left-3 -top-3 hidden rounded-xl border border-border bg-white p-4 shadow-lg sm:block">
              <p className="font-display text-2xl font-bold text-ink">120 to 170</p>
              <p className="text-xs text-muted-foreground">medical cases per month</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
          <p className="font-display text-base font-semibold uppercase tracking-[0.25em] text-brand">
            More than a security company
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink lg:text-5xl">
            Security, medical response and wellness
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Mi7 National Group provides a tripartite approach built on three pillars: security,
            medical response and wellness. When you call Mi7, you are covered by advanced life
            support ambulances, 4x4 rapid response vehicles and a rescue crew equipped with the
            Jaws of Life for high angle and swift water rescue.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Advanced Life Support ambulances with ECG monitors and ventilators",
              "Rescue vehicles equipped for vehicle, rope and swift water rescue",
              "Free Community Wellness Programme with professional nurses",
              "Medical assist from R70 per month for clients without medical aid",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] leading-relaxed text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/services/emergency-medical-services-and-rescue")}
            className="group mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand"
          >
            Explore medical services
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>

      {/* Fleet marquee */}
      <div className="container-x mt-16 lg:mt-20">
        <Reveal>
          <p className="mb-5 text-center font-display text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
            The Mi7 fleet on our roads
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-xl border border-border bg-white py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex w-max gap-5">
              {[...fleetImages, ...fleetImages].map((f, i) => (
                <div
                  key={`${f.label}-${i}`}
                  className="relative h-24 w-44 shrink-0 overflow-hidden rounded-lg"
                >
                  <Image
                    src={f.image}
                    alt={`Mi7 ${f.label} vehicle`}
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2.5 pb-1.5 pt-6 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
