import { CtaLink } from "@/components/analytics/cta-link";
import { Reveal } from "@/components/motion/reveal";
import { activeUsersLabel } from "@/lib/content/trusted-by";

export function FinalCta() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-[1160px] rounded-3xl bg-primary px-6 py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-[600px] text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Ready to grow your audience?
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-ink/70">
          Join {activeUsersLabel} already growing with Buffer.
        </p>

        <div className="mt-8 flex justify-center">
          <CtaLink
            href="/signup"
            event="final_cta_clicked"
            location="final-cta"
            ctaVariant="start-free"
            className="h-12 w-full rounded-full bg-ink px-8 text-[15px] font-medium text-canvas hover:bg-ink/90 sm:w-auto"
          >
            Start for free →
          </CtaLink>
        </div>

        <p className="mt-6 text-sm font-medium text-ink/70">
          Free forever · No credit card required
        </p>
      </Reveal>
    </section>
  );
}
