import type { HeroMessagingVariant, HeroCtaCopyVariant } from "@/lib/experiments";

export const heroMessagingCopy: Record<
  HeroMessagingVariant,
  { headline: string; subcopy: string }
> = {
  outcome: {
    headline: "Grow your audience without living on social media",
    subcopy:
      "Plan, create, publish, engage, and understand what works across all your social channels from one simple workspace.",
  },
  category: {
    headline: "Social media management, simplified",
    subcopy:
      "Buffer is a social media toolkit for scheduling posts, engaging your audience, and measuring performance.",
  },
};

export const heroCtaCopy: Record<HeroCtaCopyVariant, string> = {
  "start-free": "Start for free",
  "start-free-no-card": "Start for free",
};

export const heroReassurance = "Free forever · No credit card required · Connect up to 3 channels";
