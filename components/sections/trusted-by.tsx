import { growthExperiments } from "@/lib/experiments";
import { trustedByLogos, outcomeStats } from "@/lib/content/trusted-by";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CountUpNumber } from "@/components/motion/count-up-number";
import { LogoMarquee } from "@/components/ui/logo-marquee";

export function TrustedBy() {
  const showOutcomes = growthExperiments.socialProof === "outcomes";

  return (
    <section aria-label="Trusted by" className="border-y border-hairline bg-canvas-warm py-14">
      <Reveal>
        <h2 className="px-5 text-center text-sm font-medium text-muted-text sm:px-8">
          Trusted by creators, growing businesses, and social teams around the world
        </h2>

        <div className="mt-8">
          <LogoMarquee logos={trustedByLogos} />
        </div>
      </Reveal>

      {showOutcomes && (
        <RevealGroup
          className="mx-auto mt-12 grid max-w-[860px] grid-cols-1 gap-4 px-5 sm:grid-cols-3 sm:px-8"
          stagger={0.1}
        >
          {outcomeStats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="h-full rounded-xl border border-hairline bg-surface-card px-5 py-5 text-center transition-colors hover:border-hairline-strong">
                <dl>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="justify-center text-2xl font-semibold tracking-tight text-ink">
                    <CountUpNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="justify-center"
                    />
                  </dd>
                </dl>
                <p className="mt-1 text-sm text-body">{stat.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </section>
  );
}
