export type HeroMessagingVariant = "outcome" | "category";
export type HeroSignupVariant = "direct-cta" | "email-capture";
export type HeroCtaCopyVariant = "start-free" | "start-free-no-card";
export type SocialProofVariant = "outcomes" | "logos-only";

export type FreePlanDisclosureVariant = "implicit" | "explicit-3-channels";
export type FeaturePresentationVariant = "journey" | "modules";

export interface GrowthExperiments {
  heroMessaging: HeroMessagingVariant;
  heroSignup: HeroSignupVariant;
  heroCtaCopy: HeroCtaCopyVariant;
  socialProof: SocialProofVariant;
  personaPersonalization: boolean;
  growthAudit: boolean;
  showPromoBanner: boolean;
  freePlanDisclosure: FreePlanDisclosureVariant;
  featurePresentation: FeaturePresentationVariant;
}

export const growthExperiments: GrowthExperiments = {
  heroMessaging: "outcome",
  heroSignup: "direct-cta",
  heroCtaCopy: "start-free-no-card",
  socialProof: "outcomes",
  personaPersonalization: true,
  growthAudit: true,
  // Off by default: a promo banner above the hero competes with the hero's
  // own single CTA for above-the-fold attention. The audit is still reachable
  // from its own mid-page section without this.
  showPromoBanner: false,
  freePlanDisclosure: "explicit-3-channels",
  featurePresentation: "journey",
};

/**
 * GUARDRAILS
 * A real rollout of any experiment above should be judged on more than the
 * variant's own CTA click rate. At minimum, watch:
 * - Bounce rate on the landing page (a shorter/punchier hero can win clicks
 *   and still lose if it undersells the product and inflates bounce)
 * - Activation rate (signup_completed → channel_connected → first_post_scheduled),
 *   not just signup_started/signup_completed — more signups is not a win if
 *   fewer of them ever publish
 * - Paid conversion downstream of the free plan, not just free-plan signups
 * - Core Web Vitals (LCP/CLS/INP) regressions introduced by the variant itself
 * - Retention over the following 2-4 weeks, since a variant can win the click
 *   and still attract a worse-fit user who churns faster
 */

export function getExperimentVariant<K extends keyof GrowthExperiments>(
  key: K
): GrowthExperiments[K] {
  return growthExperiments[key];
}
