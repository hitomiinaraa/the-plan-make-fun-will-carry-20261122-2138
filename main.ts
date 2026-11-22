import { mkdirSync, writeFileSync } from "node:fs";

// The plan: sell a fixed-price, 48-hour AI-written SEO content product to a
// named buyer (small Shopify store owners), found via BuiltWith, paid via a
// Stripe payment link. No human does any step: the agent finds stores, sends
// the emails, writes the posts, and collects payment itself.
const PLAN =
  "Day 1: $12 domain + $29 mailer. Find 300 Shopify stores on BuiltWith, email owners one fixed offer: 10 SEO blog posts for $99, in 48h. Write them with AI, charge via Stripe link. 3-5 sales in 30 days = $300-500 revenue. Edge: one fixed product beats 1,000 generic AI pitches.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
