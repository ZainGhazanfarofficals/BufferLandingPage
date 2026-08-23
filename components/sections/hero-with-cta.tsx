"use client";

import { CtaLink } from "@/components/analytics/cta-link";
import { primaryCtaClass } from "@/lib/cta-styles";

export function HeroWithCTA({ ctaLabel }: { ctaLabel: string }) {
  return (
    <CtaLink
      href="/signup"
      event="hero_cta_clicked"
      location="hero"
      ctaVariant="direct-cta"
      experimentVariant="direct-cta"
      className={`${primaryCtaClass} w-full sm:w-auto`}
    >
      {ctaLabel} →
    </CtaLink>
  );
}
