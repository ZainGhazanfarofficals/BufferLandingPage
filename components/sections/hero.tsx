import { HeroWithCTA } from "@/components/sections/hero-with-cta";
import { HeroWithEmailCapture } from "@/components/sections/hero-with-email-capture";
import { HeroDashboard } from "@/components/product-mockups/hero-dashboard";
import { HeroBackgroundTiles } from "@/components/product-mockups/hero-background-tiles";
import { growthExperiments } from "@/lib/experiments";
import { heroMessagingCopy, heroCtaCopy, heroReassurance } from "@/lib/content/hero-copy";
import { activeUsersLabel } from "@/lib/content/trusted-by";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";

export function Hero() {
  const { headline, subcopy } = heroMessagingCopy[growthExperiments.heroMessaging];
  const ctaLabel = heroCtaCopy[growthExperiments.heroCtaCopy];

  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden bg-canvas px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pt-24"
    >
      <HeroBackgroundTiles />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <RevealGroup
          className="flex max-w-[760px] flex-col items-center gap-5 text-center"
          stagger={0.12}
        >
          <RevealItem>
            <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.05]">
              {headline}
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="max-w-[540px] text-base leading-relaxed text-body sm:text-lg">
              {subcopy}
            </p>
          </RevealItem>

          <RevealItem>
            {growthExperiments.heroSignup === "direct-cta" ? (
              <HeroWithCTA ctaLabel={ctaLabel} />
            ) : (
              <HeroWithEmailCapture ctaLabel={ctaLabel} />
            )}
          </RevealItem>

          <RevealItem>
            <p className="text-sm font-medium text-body-strong">{heroReassurance}</p>
            <p className="mt-1 text-xs text-muted-text">Trusted by {activeUsersLabel}</p>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.3} className="w-full max-w-[880px]">
          <HeroDashboard />
        </Reveal>
      </div>

      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden="true" />
    </section>
  );
}
