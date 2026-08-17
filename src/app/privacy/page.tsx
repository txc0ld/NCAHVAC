import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

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
    images: ["/og.png"],
  },
};

const sections = [
  {
    heading: "What we collect",
    body: "When you request a quote we collect the details you provide: your name, phone number, email address, job location, a description of the work and any photos you attach.",
  },
  {
    heading: "Why we collect it",
    body: "This information is used solely to respond to your enquiry, prepare a quote and carry out the work you request. We do not sell or share lead data with third parties for marketing.",
  },
  {
    heading: "How it is stored",
    body: "Quote requests are delivered securely to our business email. Attachments are validated and are not published or stored in any public location. Access is limited to the people who need it to respond to you.",
  },
  {
    heading: "How long we keep it",
    body: "Enquiry details are retained only as long as reasonably required to respond, complete work and meet record-keeping obligations, then removed.",
  },
  {
    heading: "Analytics",
    body: "If site analytics are enabled they measure page usage in aggregate. Form contents are never transmitted to analytics tools.",
  },
  {
    heading: "Contact",
    body: `For any privacy question, or to ask for your details to be corrected or removed, email ${site.email}.`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero overline="Privacy" title="Privacy" accent="statement" />
      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {sections.map((s) => (
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
