import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { privacySections } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How NCA HVAC collects, uses and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | NCA HVAC",
    description:
      "How NCA HVAC collects, uses and protects personal information submitted through this website.",
    url: "/privacy",
    type: "website",
    images: ["/og.png"],
  },
};



export default function PrivacyPage() {
  return (
    <>
      <PageHero overline="Privacy" title="Privacy" accent="statement" />
      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {privacySections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-condensed text-3xl font-medium tracking-[-0.02em] uppercase">
                  {s.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
