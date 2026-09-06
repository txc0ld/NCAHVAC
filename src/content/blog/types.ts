/**
 * Blog content model. Posts are structured data, not markup, so the same
 * source renders the HTML article, the /md markdown mirror, and the JSON-LD
 * (Article, FAQPage, HowTo) without drifting apart.
 */

export type Block =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string }
  | {
      type: "howto";
      name: string;
      totalTime?: string;
      steps: Array<{ name: string; text: string }>;
    };

export interface Faq {
  q: string;
  a: string;
}

export interface Post {
  slug: string;
  title: string;
  /** Meta description, 140 to 160 characters. */
  description: string;
  /** Short H1-adjacent lede shown in the hero and the index card. */
  lede: string;
  category: "Buying guide" | "Running costs" | "Maintenance" | "Troubleshooting" | "Commercial";
  /** ISO dates. updatedAt is shown and emitted in schema; keep it honest. */
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  image: { src: string; alt: string };
  /**
   * The direct answer to the query the post targets, 2 to 3 sentences.
   * Rendered first in the article and used as the schema abstract; AI answer
   * engines extract the first definitive answer they see.
   */
  answer: string;
  keyTakeaways: string[];
  body: Block[];
  faqs: Faq[];
  /** Service slugs on /services this post supports. */
  relatedServices: string[];
  /** Blog slugs to cross-link. */
  related: string[];
}
