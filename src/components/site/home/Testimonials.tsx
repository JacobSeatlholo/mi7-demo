"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { testimonials, news } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5200);
    return () => clearInterval(t);
  }, [paused, count]);

  const current = testimonials[index];

  return (
    <section
      className="bg-white py-16 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="stripe-device mx-auto mb-5 h-1.5 w-16 rounded-full" />
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink lg:text-5xl">
            The community speaks
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real reviews from the people Mi7 protects every day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl lg:mt-14">
          <div className="relative rounded-2xl border border-border bg-[#f6f6f7] p-7 sm:p-10">
            <Icon name="quote" className="absolute left-7 top-7 h-8 w-8 text-brand/25" />
            <div className="min-h-[190px] sm:min-h-[160px]">
              <blockquote key={index} className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <footer className="mt-5">
                <p className="font-display text-base font-bold uppercase tracking-wide text-ink">
                  {current.name}
                </p>
                <p className="text-sm text-muted-foreground">{current.date}</p>
              </footer>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-1.5" role="tablist" aria-label="Choose review">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name + t.date}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Review ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-7 bg-brand" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIndex((index - 1 + count) % count)}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
                </button>
                <button
                  onClick={() => setIndex((index + 1) % count)}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name="arrow-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Awards and latest news combined band. */
export function AwardsNews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="bg-[#f6f6f7] py-16 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink">
            Awarded and trusted
          </h2>
          <ul className="mt-8 space-y-6">
            {[
              {
                title: "KZN Top Brand 2023 and 2024",
                text: "Voted the province's top brand, then retained the title for a second consecutive year.",
              },
              {
                title: "Standard Bank KZN Top Business Award",
                text: "Recognised among KwaZulu-Natal's leading businesses.",
              },
              {
                title: "PSIRA accredited officers",
                text: "All guards and reaction officers are fully PSIRA accredited professionals.",
              },
            ].map((a) => (
              <li key={a.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon name="award" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                    {a.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Latest news and updates
          </h3>
          <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-white">
            {news.map((n) => (
              <li key={n.title} className="group flex items-start gap-4 p-5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-medium leading-snug text-foreground/90 transition-colors group-hover:text-brand">
                    {n.title}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {n.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Headlines from the official Mi7 National Group media updates page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
