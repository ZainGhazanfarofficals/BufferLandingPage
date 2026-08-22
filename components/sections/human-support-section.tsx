import Image from "next/image";
import { CtaLink } from "@/components/analytics/cta-link";
import { Reveal } from "@/components/motion/reveal";

export function HumanSupportSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <Reveal className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-text">
            Customer support
          </span>
          <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Human support, worldwide
          </h2>
          <p className="max-w-[46ch] text-base leading-relaxed text-body">
            Our global Customer Advocacy team is spread across time zones to
            make sure help is always nearby. Whether you have a quick question
            or need technical support, there&apos;s a real person on the other
            end, not a bot.
          </p>
          <CtaLink
            href="/help"
            event="final_cta_clicked"
            location="human-support-section"
            ctaVariant="help-center"
            className="h-11 rounded-full border border-hairline-strong px-5 text-sm font-medium text-ink hover:bg-surface-soft"
          >
            Visit the Help Center
          </CtaLink>
        </div>

        <div className="overflow-hidden rounded-2xl border border-hairline">
          <Image
            src="/screenshots/customer-support-team.webp"
            alt="The Buffer customer support team"
            width={1352}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
