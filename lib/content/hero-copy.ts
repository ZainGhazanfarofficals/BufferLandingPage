import type { HeroMessagingVariant, HeroCtaCopyVariant } from "@/lib/experiments";

export const heroMessagingCopy: Record<
  HeroMessagingVariant,
  { headline: string; subcopy: string }
> = {
  outcome: {
    headline: "Grow your audience without living on social media",
    subcopy:
      "Buffer is a social media management workspace for planning, publishing, and understanding what works across every channel — without the busywork.",
  },
  category: {
    headline: "Social media management, simplified",
    subcopy:
      "Buffer is a social media toolkit for scheduling posts, engaging your audience, and measuring performance.",
  },
};

export const heroCtaCopy: Record<HeroCtaCopyVariant, string> = {
  "start-free": "Start for free",
  "start-free-no-card": "Start for free — no credit card",
};

export const heroReassurance = "Free forever · No credit card required · Connect up to 3 channels";
