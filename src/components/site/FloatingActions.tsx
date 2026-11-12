"use client";

import { site } from "@/config/site";
import { navigate } from "@/lib/hooks";
import { Icon } from "./Icon";

export function FloatingActions() {
  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Hello Mi7 National Group. I would like to find out more about your security services."
  )}`;
  return (
    <>
      {/* Desktop WhatsApp float */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Mi7 on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-xl shadow-black/30 transition-transform hover:scale-110 md:flex"
      >
        <Icon name="whatsapp" className="h-7 w-7 text-white" strokeWidth={2} />
      </a>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a
            href={site.hotlineHref}
            className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
          >
            <Icon name="phone" className="h-4 w-4 text-brand" /> Call 24/7
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
          >
            <Icon name="whatsapp" className="h-4 w-4 text-[#25d366]" /> WhatsApp
          </a>
          <button
            onClick={() => navigate("/quote")}
            className="flex items-center justify-center gap-2 bg-brand py-3.5 text-sm font-semibold text-white"
          >
            Free Quote
          </button>
        </div>
      </div>
    </>
  );
}
