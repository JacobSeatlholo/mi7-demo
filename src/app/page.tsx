"use client";

import { useEffect } from "react";
import { useHashRoute } from "@/lib/hooks";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Hero } from "@/components/site/home/Hero";
import { StatsBand } from "@/components/site/home/StatsBand";
import { WhyMi7 } from "@/components/site/home/WhyMi7";
import { DivisionsGrid } from "@/components/site/home/DivisionsGrid";
import { MedicalSpotlight } from "@/components/site/home/MedicalSpotlight";
import { PackageSelector } from "@/components/site/home/PackageSelector";
import { Testimonials, AwardsNews } from "@/components/site/home/Testimonials";
import { QuoteSection } from "@/components/site/QuoteSection";
import { PageHero } from "@/components/site/PageHero";
import { AboutView } from "@/components/site/views/AboutView";
import { ServicesView } from "@/components/site/views/ServicesView";
import { ServiceDetailView } from "@/components/site/views/ServiceDetailView";
import { PackagesView } from "@/components/site/views/PackagesView";
import { ContactView } from "@/components/site/views/ContactView";
import { divisionBySlug } from "@/lib/content";

function HomeView() {
  return (
    <>
      <Hero />
      <StatsBand />
      <WhyMi7 />
      <DivisionsGrid />
      <MedicalSpotlight />
      <PackageSelector />
      <QuoteSection />
      <Testimonials />
      <AwardsNews />
    </>
  );
}

function QuoteView({
  pkg,
  service,
}: {
  pkg: string | null;
  service: string | null;
}) {
  const division = service ? divisionBySlug(service) : null;
  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title={
          <>
            Your free quote starts <span className="text-brand">here</span>
          </>
        }
        intro="Four quick questions. Your enquiry goes straight to the Mi7 team on their official WhatsApp line. All quotes and inspections are free, with no obligations."
        image="/images/control-room.jpg"
      />
      <div className="bg-ink pb-16 lg:pb-24">
        <QuoteSection
          initialPackage={pkg}
          initialService={service}
          initialDivisionName={division?.name ?? null}
        />
      </div>
    </>
  );
}

function NotFoundView() {
  return (
    <section className="bg-ink py-24 text-white">
      <div className="container-x py-16 text-center">
        <p className="font-display text-base font-semibold uppercase tracking-[0.25em] text-brand">
          Page not found
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold uppercase">Lost your way?</h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you are looking for does not exist on this demo site. Let us get you back to
          safety.
        </p>
        <button
          onClick={() => (window.location.hash = "/")}
          className="mt-8 rounded-md bg-brand px-7 py-3.5 font-display font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-deep"
        >
          Back to home
        </button>
      </div>
    </section>
  );
}

export default function Page() {
  const route = useHashRoute();
  const [first, second] = route.segments;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route.path]);

  let view = <NotFoundView />;
  if (!first) view = <HomeView />;
  else if (first === "about") view = <AboutView />;
  else if (first === "services") view = second ? <ServiceDetailView slug={second} /> : <ServicesView />;
  else if (first === "packages") view = <PackagesView />;
  else if (first === "contact") view = <ContactView />;
  else if (first === "quote")
    view = <QuoteView pkg={route.params.get("package")} service={route.params.get("service")} />;

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Header />
      <main className="flex-1 pb-[57px] md:pb-0">{view}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
