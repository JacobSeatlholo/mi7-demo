"use client";

import { useEffect, useState } from "react";

export interface Route {
  path: string;
  segments: string[];
  params: URLSearchParams;
}

function parseHash(): Route {
  const raw = typeof window === "undefined" ? "" : window.location.hash.replace(/^#/, "");
  const [pathPart, queryPart] = raw.split("?");
  const clean = pathPart === "" ? "/" : pathPart;
  const segments = clean.split("/").filter(Boolean);
  return { path: clean, segments, params: new URLSearchParams(queryPart ?? "") };
}

const SSR_ROUTE: Route = { path: "", segments: [], params: new URLSearchParams() };

export function useHashRoute(): Route {
  // Start from the SSR safe route so the first client render matches the
  // server HTML, then sync the real hash after mount.
  const [route, setRoute] = useState<Route>(SSR_ROUTE);
  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    onChange();
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function navigate(to: string, opts?: { keepScroll?: boolean }) {
  window.location.hash = to.startsWith("#") ? to.slice(1) : to;
  if (!opts?.keepScroll) {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }
}

/** Smoothly scroll to an element id on the current view, or navigate home first. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function goHomeAndScroll(id: string) {
  if (window.location.hash === "" || window.location.hash === "#/" ) {
    scrollToId(id);
  } else {
    navigate("/");
    setTimeout(() => scrollToId(id), 120);
  }
}

/** Animated count-up used by the stats band. */
export function useCountUp(target: number, active: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}
