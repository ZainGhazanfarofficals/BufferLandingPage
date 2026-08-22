export type HeroMessagingVariant = "outcome" | "category";
export type HeroSignupVariant = "direct-cta" | "email-capture";
export type HeroCtaCopyVariant = "start-free" | "start-free-no-card";
export type SocialProofVariant = "outcomes" | "logos-only";

export interface GrowthExperiments {
  heroMessaging: HeroMessagingVariant;
  heroSignup: HeroSignupVariant;
  heroCtaCopy: HeroCtaCopyVariant;
  socialProof: SocialProofVariant;
  personaPersonalization: boolean;
  growthAudit: boolean;
}

export const growthExperiments: GrowthExperiments = {
  heroMessaging: "outcome",
  heroSignup: "direct-cta",
  heroCtaCopy: "start-free-no-card",
  socialProof: "outcomes",
  personaPersonalization: true,
  growthAudit: true,
};

export function getExperimentVariant<K extends keyof GrowthExperiments>(
  key: K
): GrowthExperiments[K] {
  return growthExperiments[key];
}
