"use client";

import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { QuoteWizard } from "./QuoteWizard";

export function QuoteSection({
  initialPackage,
  initialService,
  initialDivisionName,
}: {
  initialPackage?: string | null;
  initialService?: string | null;
  initialDivisionName?: string | null;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white lg:py-24">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(214,29,36,0.5) 0%, transparent 65%)" }}
      />
      <div className="container-x relative grid items-start gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <p className="font-display text-base font-semibold uppercase tracking-[0.25em] text-brand">
              Free quote and inspection
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
              Get protected in under two minutes
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/65">
              Answer four quick questions and your enquiry lands directly on Mi7&apos;s official
              WhatsApp line. All quotes and inspections are free, with no obligations and a 4
              minute response time target.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                "Free quotes and free inspections",
                "Unlimited response on subscription packages",
                "No obligations apply",
                "24 hour control room and medical dispatch",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <QuoteWizard
            key={`${initialPackage ?? ""}-${initialService ?? ""}`}
            initialPackage={initialPackage}
            initialService={initialService}
            initialDivisionName={initialDivisionName}
          />
        </Reveal>
      </div>
    </section>
  );
}
