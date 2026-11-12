"use client";

import Image from "next/image";
import { Icon } from "./Icon";
import { divisions } from "@/lib/content";
import { site } from "@/config/site";
import { navigate } from "@/lib/hooks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-ink text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <div className="stripe-device mb-4 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-wide md:text-4xl">
              Ready to be protected?
            </h2>
            <p className="mt-2 max-w-xl text-white/65">
              Get a free quote and inspection in minutes, or speak to the 24 hour control room
              right now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/quote")}
              className="rounded-md bg-brand px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
            >
              Get a Free Quote
            </button>
            <a
              href={site.hotlineHref}
              className="flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:border-white/50"
            >
              <Icon name="phone" className="h-4 w-4 text-brand" /> {site.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-x grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt="Mi7 National Group logo"
            width={140}
            height={66}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Bespoke security, emergency medical services and community wellness. A national
            presence with eight offices in major cities, built on values of God, Integrity and
            Community.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-md border border-white/15 p-2.5 text-white/70 transition-colors hover:border-brand hover:text-white"
            >
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-md border border-white/15 p-2.5 text-white/70 transition-colors hover:border-brand hover:text-white"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a
              href={site.hotlineHref}
              aria-label={`Call the emergency hotline ${site.hotline}`}
              className="rounded-md border border-white/15 p-2.5 text-white/70 transition-colors hover:border-brand hover:text-white"
            >
              <Icon name="phone" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Divisions">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Security Divisions
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {divisions.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <button
                  onClick={() => navigate(`/services/${d.slug}`)}
                  className="block text-left text-white/60 transition-colors hover:text-white"
                >
                  {d.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => navigate("/services")}
                className="font-semibold text-brand transition-colors hover:text-white"
              >
                View all divisions
              </button>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "About Mi7", href: "/about" },
              { label: "Subscription Packages", href: "/packages" },
              { label: "Get a Free Quote", href: "/quote" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => navigate(item.href)}
                  className="block text-left text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={site.originalSite}
                target="_blank"
                rel="noreferrer"
                className="block text-left text-white/60 transition-colors hover:text-white"
              >
                Official website
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Contact Information
          </h3>
          <div className="mt-4 space-y-5 text-sm">
            <div>
              <p className="font-semibold text-white/90">{site.headOffice.label}</p>
              {site.headOffice.lines.map((l) => (
                <p key={l} className="text-white/60">
                  {l}
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold text-white/90">{site.responseOffice.label}</p>
              {site.responseOffice.lines.map((l) => (
                <p key={l} className="text-white/60">
                  {l}
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold text-white/90">
                Hotline: <a href={site.hotlineHref} className="text-brand hover:underline">{site.hotline}</a>
              </p>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-white/60 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Demo notice */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 pb-[calc(1.25rem+60px)] text-center text-xs text-white/50 md:flex-row md:pb-5 md:text-left">
          <p>Copyright {year} Mi7 National Group. All rights reserved.</p>
          <p className="font-semibold text-white/75">
            Demo website built by Business Hustle. This is a concept demonstration and not the
            official Mi7 National Group website.
          </p>
        </div>
      </div>
    </footer>
  );
}
