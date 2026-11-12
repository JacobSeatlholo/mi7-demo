"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site, whatsappLink } from "@/config/site";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

type Need = "household" | "business" | "panic" | "miguardian" | "guarding" | "medical" | "other";
type Property = "house" | "complex" | "business" | "construction" | "farm" | "event" | "other";
type Urgency = "immediately" | "week" | "month" | "researching";
type Contact = "whatsapp" | "call";

interface FormState {
  need: Need | null;
  property: Property | null;
  suburb: string;
  urgency: Urgency | null;
  name: string;
  phone: string;
  email: string;
  contact: Contact;
  notes: string;
}

const NEEDS: { id: Need; label: string; desc: string; icon: string }[] = [
  { id: "household", label: "Household Package", desc: "Home monitoring and armed response from R449 p/m", icon: "shield-check" },
  { id: "business", label: "Business Package", desc: "Premises, staff and stock protection from R599 p/m", icon: "badge-check" },
  { id: "panic", label: "Mi7 Panic Alert", desc: "Personal panic button linked to the control room, R249 p/m", icon: "siren" },
  { id: "miguardian", label: "MiGuardian", desc: "Ask the team about this custom solution", icon: "crown" },
  { id: "guarding", label: "Guarding officers", desc: "Static guarding or patrols for business and estates", icon: "handshake" },
  { id: "medical", label: "Medical standby", desc: "Events, functions and school sport medical crews", icon: "heart-pulse" },
  { id: "other", label: "Something else", desc: "Tell us what you need and Mi7 will tailor it", icon: "radar" },
];

const PROPERTIES: { id: Property; label: string }[] = [
  { id: "house", label: "House" },
  { id: "complex", label: "Complex or estate" },
  { id: "business", label: "Business or retail" },
  { id: "construction", label: "Construction site" },
  { id: "farm", label: "Farm or smallholding" },
  { id: "event", label: "Event or venue" },
  { id: "other", label: "Other" },
];

const URGENCIES: { id: Urgency; label: string }[] = [
  { id: "immediately", label: "As soon as possible" },
  { id: "week", label: "Within a week" },
  { id: "month", label: "Within a month" },
  { id: "researching", label: "Just researching" },
];

const needLabel = (n: Need) => NEEDS.find((x) => x.id === n)?.label ?? "";
const propertyLabel = (p: Property) => PROPERTIES.find((x) => x.id === p)?.label ?? "";
const urgencyLabel = (u: Urgency) => URGENCIES.find((x) => x.id === u)?.label ?? "";

function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  let n = digits;
  if (n.startsWith("0")) n = `27${n.slice(1)}`;
  if (n.startsWith("27") && n.length === 11) return n;
  return null;
}

function displayPhone(raw: string): string {
  return raw.replace(/\D/g, "").replace(/^27/, "0");
}

export function QuoteWizard({
  initialPackage,
  initialService,
  initialDivisionName,
}: {
  initialPackage?: string | null;
  initialService?: string | null;
  initialDivisionName?: string | null;
}) {
  const mapPackage: Record<string, Need> = {
    household: "household",
    business: "business",
    "panic-alert": "panic",
    miguardian: "miguardian",
  };
  const mapService: Record<string, Need> = {
    "guarding-services": "guarding",
    "static-guarding": "guarding",
    "emergency-medical-services-and-rescue": "medical",
    "base-camps-and-relief": "guarding",
    "vip-protection-and-escorts": "other",
    "crowd-control-and-strike-management": "other",
  };

  const initialNeed: Need | null = initialPackage
    ? mapPackage[initialPackage] ?? null
    : initialService
      ? mapService[initialService] ?? "other"
      : null;

  const [step, setStep] = useState(initialNeed ? 1 : 0);
  const [form, setForm] = useState<FormState>({
    need: initialNeed,
    property: null,
    suburb: "",
    urgency: null,
    name: "",
    phone: "",
    email: "",
    contact: "whatsapp",
    notes: initialDivisionName ? `I am interested in ${initialDivisionName}.` : "",
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const phoneOk = normalizePhone(form.phone) !== null;
  const emailOk = form.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const stepValid = [
    form.need !== null,
    form.property !== null && form.urgency !== null,
    form.name.trim().length >= 2 && phoneOk && emailOk,
    true,
  ][step];

  const message = useMemo(() => {
    const lines = [
      "Hello Mi7 National Group.",
      "",
      "I would like a free quote.",
      "",
      `Package: ${form.need ? needLabel(form.need) : "Not specified"}`,
      `Property: ${form.property ? propertyLabel(form.property) : "Not specified"}`,
      form.suburb.trim() ? `Suburb: ${form.suburb.trim()}` : null,
      `When: ${form.urgency ? urgencyLabel(form.urgency) : "Not specified"}`,
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${displayPhone(form.phone)}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      `Preferred contact: ${form.contact === "whatsapp" ? "WhatsApp" : "Phone call"}`,
      form.notes.trim() ? "" : null,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ].filter((l): l is string => l !== null);
    return lines.join("\n");
  }, [form]);

  const waHref = whatsappLink(message);

  const steps = ["Your need", "Your property", "Your details", "Send"];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-soft text-white shadow-2xl shadow-black/40">
      {/* Progress */}
      <div className="border-b border-white/10 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-2 sm:gap-3">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border font-display text-sm font-bold transition-colors",
                  i < step
                    ? "border-brand bg-brand text-white"
                    : i === step
                      ? "border-brand text-brand"
                      : "border-white/20 text-white/40"
                )}
              >
                {i < step ? <Icon name="check" className="h-4 w-4" strokeWidth={3} /> : i + 1}
              </span>
              <span
                className={cn(
                  "hidden font-display text-sm font-semibold uppercase tracking-wider sm:block",
                  i === step ? "text-white" : "text-white/40"
                )}
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <span
                  className={cn(
                    "mx-1 hidden h-px w-8 sm:block lg:w-14",
                    i < step ? "bg-brand" : "bg-white/15"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-brand transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  What do you need protected?
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Pick the option closest to what you are looking for.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {NEEDS.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => set("need", n.id)}
                      aria-pressed={form.need === n.id}
                      className={cn(
                        "flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
                        form.need === n.id
                          ? "border-brand bg-brand/15"
                          : "border-white/10 bg-white/5 hover:border-white/30"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                          form.need === n.id ? "bg-brand text-white" : "bg-white/10 text-brand"
                        )}
                      >
                        <Icon name={n.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-display text-base font-bold uppercase tracking-wide">
                          {n.label}
                        </span>
                        <span className="mt-0.5 block text-sm leading-snug text-white/60">
                          {n.desc}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  Tell us about the property
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  This helps the team bring the right solution to your free inspection.
                </p>
                <div className="mt-6">
                  <Label className="mb-2 block text-sm font-semibold text-white/80">
                    Property type
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {PROPERTIES.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => set("property", p.id)}
                        aria-pressed={form.property === p.id}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                          form.property === p.id
                            ? "border-brand bg-brand text-white"
                            : "border-white/15 bg-white/5 text-white/75 hover:border-white/40"
                        )}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Label htmlFor="qw-suburb" className="mb-2 block text-sm font-semibold text-white/80">
                    Suburb <span className="font-normal text-white/45">(optional)</span>
                  </Label>
                  <Input
                    id="qw-suburb"
                    value={form.suburb}
                    onChange={(e) => set("suburb", e.target.value)}
                    placeholder="e.g. Pelham, Hilton, Howick"
                    className="border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-brand"
                  />
                </div>
                <div className="mt-6">
                  <Label className="mb-2 block text-sm font-semibold text-white/80">
                    How soon do you need protection?
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {URGENCIES.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => set("urgency", u.id)}
                        aria-pressed={form.urgency === u.id}
                        className={cn(
                          "rounded-lg border px-4 py-2.5 text-sm font-medium transition-all",
                          form.urgency === u.id
                            ? "border-brand bg-brand text-white"
                            : "border-white/15 bg-white/5 text-white/75 hover:border-white/40"
                        )}
                      >
                        {u.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  How can we reach you?
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  A Mi7 consultant will confirm your free quote and inspection.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="qw-name" className="mb-2 block text-sm font-semibold text-white/80">
                      Full name *
                    </Label>
                    <Input
                      id="qw-name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                      className="border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-brand"
                    />
                  </div>
                  <div>
                    <Label htmlFor="qw-phone" className="mb-2 block text-sm font-semibold text-white/80">
                      Contact number *
                    </Label>
                    <Input
                      id="qw-phone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="e.g. 083 123 4567"
                      inputMode="tel"
                      autoComplete="tel"
                      className={cn(
                        "border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-brand",
                        form.phone !== "" && !phoneOk && "border-brand"
                      )}
                    />
                    {form.phone !== "" && !phoneOk && (
                      <p className="mt-1.5 text-xs text-brand">
                        Enter a valid South African number, for example 083 123 4567.
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="qw-email" className="mb-2 block text-sm font-semibold text-white/80">
                      Email <span className="font-normal text-white/45">(optional)</span>
                    </Label>
                    <Input
                      id="qw-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={cn(
                        "border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-brand",
                        !emailOk && "border-brand"
                      )}
                    />
                    {!emailOk && (
                      <p className="mt-1.5 text-xs text-brand">
                        Please check the email address.
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <Label className="mb-2 block text-sm font-semibold text-white/80">
                      Preferred contact method
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {(
                        [
                          { id: "whatsapp", label: "WhatsApp", icon: "whatsapp" },
                          { id: "call", label: "Phone call", icon: "phone" },
                        ] as const
                      ).map((c) => (
                        <button
                          key={c.id}
                          onClick={() => set("contact", c.id)}
                          aria-pressed={form.contact === c.id}
                          className={cn(
                            "flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-all",
                            form.contact === c.id
                              ? "border-brand bg-brand text-white"
                              : "border-white/15 bg-white/5 text-white/75 hover:border-white/40"
                          )}
                        >
                          <Icon name={c.icon} className="h-4 w-4" /> {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="qw-notes" className="mb-2 block text-sm font-semibold text-white/80">
                      Anything else we should know?{" "}
                      <span className="font-normal text-white/45">(optional)</span>
                    </Label>
                    <Textarea
                      id="qw-notes"
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      placeholder="Special requests, existing alarm system, number of buildings..."
                      rows={3}
                      className="resize-none border-white/15 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-brand"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  Ready to send
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Check your details below, then send your enquiry straight to the Mi7 team on
                  WhatsApp or give the control room a call.
                </p>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                  <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {[
                      ["Package", form.need ? needLabel(form.need) : ""],
                      ["Property", form.property ? propertyLabel(form.property) : ""],
                      ["Suburb", form.suburb.trim() || "Not specified"],
                      ["When", form.urgency ? urgencyLabel(form.urgency) : ""],
                      ["Name", form.name],
                      ["Phone", displayPhone(form.phone)],
                      ["Email", form.email.trim() || "Not provided"],
                      ["Preferred contact", form.contact === "whatsapp" ? "WhatsApp" : "Phone call"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">
                          {k}
                        </dt>
                        <dd className="mt-0.5 text-sm text-white">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {form.notes.trim() && (
                    <p className="mt-4 border-t border-white/10 pt-3 text-sm text-white/70">
                      {form.notes}
                    </p>
                  )}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2.5 rounded-md bg-[#25d366] px-6 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-all hover:brightness-110"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" strokeWidth={2.2} />
                    Send via WhatsApp
                  </a>
                  <a
                    href={site.hotlineHref}
                    className="flex flex-1 items-center justify-center gap-2.5 rounded-md border border-white/25 px-6 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:border-white/60"
                  >
                    <Icon name="phone" className="h-5 w-5 text-brand" />
                    Call {site.hotline}
                  </a>
                </div>
                <p className="mt-4 text-center text-xs leading-relaxed text-white/45">
                  Sending opens WhatsApp with your enquiry prefilled to Mi7&apos;s official line
                  ({site.whatsappDisplay}). Nothing is stored by this demo website.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {step < 3 && (
          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className={cn(
                "rounded-md px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-colors",
                step === 0
                  ? "cursor-not-allowed text-white/25"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              Back
            </button>
            <button
              onClick={() => stepValid && setStep((s) => s + 1)}
              disabled={!stepValid}
              className={cn(
                "flex items-center gap-2 rounded-md px-7 py-3 font-display text-base font-bold uppercase tracking-wider transition-all",
                stepValid
                  ? "bg-brand text-white hover:bg-brand-deep"
                  : "cursor-not-allowed bg-white/10 text-white/35"
              )}
            >
              {step === 2 ? "Review enquiry" : "Continue"}
              <Icon name="arrow-right" className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
