/**
 * Minimal in-memory sliding-window rate limiter.
 *
 * Caveat: this state lives in the memory of a single server instance. On
 * serverless/edge platforms each instance keeps its own counters and cold
 * starts reset them, so the effective limit is per-instance rather than
 * global. That is fine as a cheap first line of defence for a low-traffic
 * contact form; swap in a durable store (Redis/Upstash, KV, database) if
 * strict global limits are ever required.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 5000;

const hits = new Map<string, number[]>();

/** Returns true when the request is allowed, false when the limit is hit. */
export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;

  const recent = (hits.get(key) ?? []).filter((timestamp) => timestamp > cutoff);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return false;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > MAX_TRACKED_KEYS) {
    for (const [trackedKey, timestamps] of hits) {
      if (timestamps.every((timestamp) => timestamp <= cutoff)) {
        hits.delete(trackedKey);
      }
    }
  }

  return true;
}
