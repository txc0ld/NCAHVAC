import type { Metadata } from "next";
import { HeroHome } from "@/components/hero-home";
import { TrustBar } from "@/components/trust-bar";
import { ServicesGrid } from "@/components/services-grid";
import { Stats } from "@/components/stats";
import { TrustTicker } from "@/components/ticker";
import { MaintenanceBanner } from "@/components/maintenance-banner";
import { AboutSplit } from "@/components/about-split";
import { WhyGrid } from "@/components/why-grid";
import { ServiceArea } from "@/components/service-area";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Air Conditioning Perth | Installation, Repairs & Servicing | NCA HVAC",
  description:
    "Perth air conditioning installation, repairs and servicing: split systems, ducted systems, commercial HVAC and refrigeration. Owner-operated, fully insured, free quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Air Conditioning Perth | Installation, Repairs & Servicing | NCA HVAC",
    description:
      "Perth air conditioning installation, repairs and servicing: split systems, ducted, commercial HVAC and refrigeration. Owner-operated, free quotes.",
    url: "/",
    type: "website",
    images: ["/og.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <TrustBar />
      <ServicesGrid />
      <Stats />
      <TrustTicker />
      <MaintenanceBanner />
      <AboutSplit />
      <WhyGrid />
      <ServiceArea />
      <Faq />
      <FinalCta />
      <JsonLd data={faqSchema()} />
    </>
  );
}
