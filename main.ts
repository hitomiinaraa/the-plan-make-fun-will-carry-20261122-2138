// the-plan-make-fun-will-carry-20261122-2138
//
// What this program does: emit exactly one text file,
// /output/entry.txt, holding the 30-day plan below.
// Nothing here touches the network, the clock, or any
// randomness, so repeated runs produce identical bytes.
//
// The plan, in one breath:
//   * spend  $12 domain + $29 mailer -- fixed, known costs
//   * source 300 Shopify stores from BuiltWith -- real buyers
//   * sell   one fixed product: 10 SEO posts, $99, in 48h
//   * fulfil by writing with AI, paid over a Stripe link
//   * expect 3-5 sales in 30 days, $300-500 revenue
//   * edge   one fixed product beats 1,000 generic AI pitches

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The entry, verbatim. 275 Unicode code points, inside the
// 1-280 gate, and not only whitespace.
const PLAN =
  "Day 1: $12 domain + $29 mailer. Find 300 Shopify stores on BuiltWith, email owners one fixed offer: 10 SEO blog posts for $99, in 48h. Write them with AI, charge via Stripe link. 3-5 sales in 30 days = $300-500 revenue. Edge: one fixed product beats 1,000 generic AI pitches.";

// Guard the gate locally before writing: fail loudly here
// instead of shipping an entry the sealed scorer would void.
function validate(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry is ${points} code points, outside 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
}

function writeEntry(text: string): void {
  validate(text);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text, "utf8");
}

writeEntry(PLAN);
