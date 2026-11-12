"use client";

import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { whyMi7 } from "@/lib/content";

export function WhyMi7() {
  return (
    <section id="why-mi7" className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="stripe-device mx-auto mb-5 h-1.5 w-16 rounded-full" />
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink lg:text-5xl">
            Why Mi7?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Mi7 National Group operates on values of God, Integrity and Community, striving for
            the overall wellbeing of clients rather than a basic approach to security.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {whyMi7.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.12}>
              <div className="group h-full rounded-xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-black/5 lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={w.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-ink">
                  {w.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
