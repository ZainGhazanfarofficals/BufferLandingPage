"use client";

import { CtaLink } from "@/components/analytics/cta-link";
import { primaryCtaClass, secondaryCtaClass } from "@/lib/cta-styles";
import { track } from "@/lib/analytics";

export function HeroWithCTA({ ctaLabel }: { ctaLabel: string }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
      <a
        href="#product-demo"
        onClick={() => track("hero_secondary_cta_clicked", { location: "hero" })}
        className={`${secondaryCtaClass} inline-flex w-full items-center justify-center sm:w-auto`}
      >
        See how Buffer works
      </a>
    </div>
  );
}
