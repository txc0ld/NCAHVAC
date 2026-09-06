import type { Post } from "./types";
import { post as maintenanceContracts } from "./posts/commercial-hvac-maintenance-contracts";
import { post as energyCosts } from "./posts/commercial-hvac-energy-costs";
import { post as commercialRefrigeration } from "./posts/commercial-refrigeration-maintenance";
import { post as preSummer } from "./posts/pre-summer-service-checklist";
import { post as ductedVsSplit } from "./posts/ducted-vs-split-system-perth";
import { post as runningCosts } from "./posts/running-costs-perth";
import { post as evapVsRefrigerated } from "./posts/evaporative-vs-refrigerated-perth";
import { post as notCooling } from "./posts/not-cooling-causes";

export type { Post, Block, Faq } from "./types";

/**
 * Display order. Commercial (the primary audience) leads; residential follows.
 * Newer posts should be inserted at the top of their audience group.
 */
export const posts: Post[] = [
  maintenanceContracts,
  energyCosts,
  commercialRefrigeration,
  preSummer,
  ductedVsSplit,
  runningCosts,
  evapVsRefrigerated,
  notCooling,
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(post: Post): Post[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p));
}

export const blogIntro =
  "Practical guides from a Perth HVAC and refrigeration technician for facility managers, business owners and homeowners: maintenance programmes that prevent summer failures, what systems cost to run here, and how to diagnose faults before they become breakdowns.";
