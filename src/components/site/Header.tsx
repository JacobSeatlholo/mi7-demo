"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { divisions } from "@/lib/content";
import { site } from "@/config/site";
import { navigate, useHashRoute } from "@/lib/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const route = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? route.path === "/" : route.path.startsWith(href);

  const go = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-ink text-[13px] text-white/75 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-brand" />
            <span className="font-medium tracking-wide">
              24 Hour Toll Free Emergency: {site.hotline}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Icon name="mail" className="h-3.5 w-3.5" /> {site.email}
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Mi7 National Group on Facebook"
              className="transition-colors hover:text-white"
            >
              <Icon name="facebook" className="h-3.5 w-3.5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Mi7 National Group on Instagram"
              className="transition-colors hover:text-white"
            >
              <Icon name="instagram" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-ink/95 shadow-lg shadow-black/30 backdrop-blur-md"
            : "border-white/5 bg-ink/80 backdrop-blur"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <button
            onClick={() => go("/")}
            className="flex shrink-0 items-center gap-3"
            aria-label="Mi7 National Group home"
          >
            <Image
              src="/images/logo.png"
              alt="Mi7 National Group logo"
              width={124}
              height={59}
              priority
              className="h-10 w-auto lg:h-12"
            />
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV.slice(0, 2).map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className={`rounded-md px-4 py-2 font-display text-[15px] font-semibold uppercase tracking-wider transition-colors ${
                  isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 rounded-md px-4 py-2 font-display text-[15px] font-semibold uppercase tracking-wider outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive("/services") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                sideOffset={10}
                className="grid w-[540px] grid-cols-2 gap-1 border-white/10 bg-ink-soft p-2"
              >
                {divisions.map((d) => (
                  <DropdownMenuItem
                    key={d.slug}
                    onClick={() => navigate(`/services/${d.slug}`)}
                    className="cursor-pointer rounded-md px-3 py-2.5 text-white/75 focus:bg-white/10 focus:text-white"
                  >
                    <Icon name={d.icon} className="mr-2.5 h-4 w-4 text-brand" />
                    <span className="text-sm font-medium">{d.shortName}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {NAV.slice(2).map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className={`rounded-md px-4 py-2 font-display text-[15px] font-semibold uppercase tracking-wider transition-colors ${
                  isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.hotlineHref}
              className="hidden items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40 md:flex"
            >
              <Icon name="phone" className="h-4 w-4 text-brand" strokeWidth={2.2} />
              {site.hotline}
            </a>
            <button
              onClick={() => navigate("/quote")}
              className="hidden rounded-md bg-brand px-5 py-2.5 font-display text-[15px] font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-deep sm:block"
            >
              Get a Free Quote
            </button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="rounded-md border border-white/15 p-2.5 text-white lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] overflow-y-auto border-white/10 bg-ink p-0"
              >
                <div className="flex h-full flex-col">
                  <div className="border-b border-white/10 p-4">
                    <SheetTitle>
                      <Image
                        src="/images/logo.png"
                        alt="Mi7 National Group logo"
                        width={110}
                        height={52}
                        className="h-9 w-auto"
                      />
                    </SheetTitle>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-3" aria-label="Mobile navigation">
                    {NAV.slice(0, 2).map((item) => (
                      <button
                        key={item.href}
                        onClick={() => go(item.href)}
                        className="block w-full rounded-md px-3 py-3 text-left font-display text-base font-semibold uppercase tracking-wide text-white/85 hover:bg-white/10"
                      >
                        {item.label}
                      </button>
                    ))}
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 font-display text-base font-semibold uppercase tracking-wide text-white/85 hover:bg-white/10">
                        Services
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-1 space-y-0.5 pl-2">
                        {divisions.map((d) => (
                          <button
                            key={d.slug}
                            onClick={() => go(`/services/${d.slug}`)}
                            className="flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-left text-sm text-white/70 hover:bg-white/10 hover:text-white"
                          >
                            <Icon name={d.icon} className="h-4 w-4 text-brand" />
                            {d.shortName}
                          </button>
                        ))}
                      </div>
                    </details>
                    {NAV.slice(2).map((item) => (
                      <button
                        key={item.href}
                        onClick={() => go(item.href)}
                        className="block w-full rounded-md px-3 py-3 text-left font-display text-base font-semibold uppercase tracking-wide text-white/85 hover:bg-white/10"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <div className="space-y-2 border-t border-white/10 p-4">
                    <button
                      onClick={() => go("/quote")}
                      className="w-full rounded-md bg-brand py-3 font-display font-bold uppercase tracking-wider text-white"
                    >
                      Get a Free Quote
                    </button>
                    <a
                      href={site.hotlineHref}
                      className="flex w-full items-center justify-center gap-2 rounded-md border border-white/15 py-3 text-sm font-semibold text-white"
                    >
                      <Icon name="phone" className="h-4 w-4 text-brand" /> {site.hotline}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
