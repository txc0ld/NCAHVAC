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

export const metadata: Metadata = {
  title: "NCA HVAC | Air Conditioning & Refrigeration Services Perth",
  description:
    "Owner-operated air conditioning and refrigeration services across Perth. Residential and commercial HVAC installation, repair and maintenance. Free quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NCA HVAC | Air Conditioning & Refrigeration Services Perth",
    description:
      "Owner-operated air conditioning and refrigeration services across Perth. Residential and commercial HVAC. Free quotes.",
    url: "/",
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
    </>
  );
}
