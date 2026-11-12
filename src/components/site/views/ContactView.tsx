"use client";

import { useState } from "react";
import { PageHero } from "../PageHero";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { site, whatsappLink } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { navigate } from "@/lib/hooks";

function ContactCard({
  icon,
  title,
  children,
  action,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-white p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <div className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function ContactView() {
  const [name, setName] = useState("");
  const [phone, setEmailPhone] = useState("");
  const [msg, setMsg] = useState("");

  const valid = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 9;
  const href = whatsappLink(
    [
      "Hello Mi7 National Group.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      msg.trim() ? `Message: ${msg.trim()}` : null,
    ]
      .filter((l): l is string => l !== null)
      .join("\n")
  );

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Talk to Mi7 <span className="text-brand">right now</span>
          </>
        }
        intro="We have a 24 hour Emergency Control Room as well as dedicated lines for technical, marketing and security queries."
        image="/images/hero-contact.jpg"
      >
        <a
          href={site.hotlineHref}
          className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/5 px-7 py-4 transition-colors hover:border-white/60"
        >
          <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="text-left leading-tight">
            <span className="block font-display text-xl font-bold tracking-wide">
              {site.hotline}
            </span>
            <span className="block text-xs text-white/65">Toll free, 24 hour control room</span>
          </span>
        </a>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-x grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Reveal className="h-full">
            <ContactCard icon="map-pin" title={site.headOffice.label}>
              {site.headOffice.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </ContactCard>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <ContactCard icon="siren" title={site.responseOffice.label}>
              {site.responseOffice.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </ContactCard>
          </Reveal>
          <Reveal delay={0.12} className="h-full">
            <ContactCard
              icon="mail"
              title="Email the team"
              action={
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Send an email
                </a>
              }
            >
              <p className="break-all">{site.email}</p>
              <p className="mt-3">
                Dedicated lines for technical, marketing and security queries.
              </p>
            </ContactCard>
          </Reveal>
          <Reveal delay={0.18} className="h-full">
            <ContactCard
              icon="whatsapp"
              title="WhatsApp assistance"
              action={
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Start a WhatsApp chat
                </a>
              }
            >
              <p>{site.whatsappDisplay}</p>
              <p className="mt-3">Mi7&apos;s official WhatsApp assistance line.</p>
            </ContactCard>
          </Reveal>
        </div>

        {/* Quick enquiry */}
        <div className="container-x mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="stripe-device mb-5 h-1.5 w-16 rounded-full" />
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink lg:text-4xl">
              Send a quick enquiry
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Fill in the form and your message opens in WhatsApp, prefilled and ready to send to
              Mi7&apos;s official WhatsApp line. For a full quote with package options, use the
              quote wizard instead.
            </p>
            <button
              onClick={() => navigate("/quote")}
              className="group mt-5 inline-flex items-center gap-2 font-display font-bold uppercase tracking-wider text-brand"
            >
              Open the quote wizard
              <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="mt-8 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="facebook" className="h-4 w-4" /> Facebook
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon name="instagram" className="h-4 w-4" /> Instagram
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-[#f6f6f7] p-6 sm:p-8"
            >
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="cq-name" className="mb-2 block text-sm font-semibold">
                    Full name *
                  </Label>
                  <Input
                    id="cq-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <Label htmlFor="cq-phone" className="mb-2 block text-sm font-semibold">
                    Contact number *
                  </Label>
                  <Input
                    id="cq-phone"
                    value={phone}
                    onChange={(e) => setEmailPhone(e.target.value)}
                    placeholder="e.g. 083 123 4567"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <Label htmlFor="cq-msg" className="mb-2 block text-sm font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="cq-msg"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    rows={4}
                    placeholder="How can the Mi7 team help you?"
                    className="resize-none"
                  />
                </div>
                {valid ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 rounded-md bg-[#25d366] px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-white transition-all hover:brightness-110"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" strokeWidth={2.2} />
                    Send on WhatsApp
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex cursor-not-allowed items-center justify-center gap-2.5 rounded-md bg-foreground/20 px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-foreground/50"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" strokeWidth={2.2} />
                    Fill in name and number to send
                  </button>
                )}
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Nothing is stored by this demo website. Your details go directly to Mi7 on
                  WhatsApp.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
