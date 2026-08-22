import Link from "next/link";
import { CtaLink } from "@/components/analytics/cta-link";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-[1160px] rounded-3xl bg-primary px-6 py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-[720px] text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Spend less time managing social media.
          <br />
          Spend more time growing your audience.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-base leading-relaxed text-ink/70">
          Plan, create, publish, engage, and learn what works from one simple
          workspace.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink
            href="/signup"
            event="final_cta_clicked"
            location="final-cta"
            ctaVariant="start-free"
            className="h-12 w-full rounded-full bg-ink px-6 text-[15px] font-medium text-canvas hover:bg-ink/90 sm:w-auto"
          >
            Start for free →
          </CtaLink>
          <Link
            href="#product-growth-loop"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-ink/15 px-6 text-[15px] font-medium text-ink hover:bg-black/5 sm:w-auto"
          >
            Explore the product
          </Link>
        </div>

        <p className="mt-6 text-sm font-medium text-ink/70">
          Free forever · No credit card required
        </p>
      </Reveal>
    </section>
  );
}
