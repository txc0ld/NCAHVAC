import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import { JsonLd, hvacBusinessSchema, webSiteSchema } from "@/lib/schema";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NCA HVAC | Air Conditioning & Refrigeration Services Perth",
    template: "%s | NCA HVAC",
  },
  description:
    "Owner-operated air conditioning and refrigeration services across Perth. Residential and commercial installation, repair and preventative maintenance. Free quotes.",
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_AU",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NCA HVAC" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pt-20">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={[hvacBusinessSchema(), webSiteSchema()]} />
      </body>
    </html>
  );
}
