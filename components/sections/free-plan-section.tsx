"use client";

import { Check, CreditCard, Infinity, Zap } from "lucide-react";
import { motion } from "motion/react";
import { CtaLink } from "@/components/analytics/cta-link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const freePlanFeatures = [
  "Up to 3 channels",
  "Core publishing tools",
  "No credit card required",
  "Upgrade when you need more",
];

const reassurances = [
  { icon: CreditCard, text: "No credit card required to start" },
  { icon: Infinity, text: "Free forever, not just a trial" },
  { icon: Zap, text: "Upgrade instantly whenever you're ready" },
];

export function FreePlanSection() {
  return (
    <section id="free-plan" className="px-5 py-20 sm:px-8">
      <Reveal className="mx-auto max-w-[1100px] rounded-3xl border border-hairline bg-canvas-warm p-8 sm:p-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <span className="rounded-full bg-primary/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-strong">
              Pricing
            </span>
            <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Start growing before you start paying
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-body">
              Buffer&apos;s free plan is a real, fully working workspace, not a
              time-limited trial. Connect your channels and start publishing
              today; upgrade only once you actually need more.
            </p>

            <RevealGroup className="mt-2 flex flex-col gap-4" stagger={0.08}>
              {reassurances.map((item) => (
                <RevealItem key={item.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-card text-primary-strong">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-body-strong">{item.text}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden rounded-2xl border border-hairline bg-surface-card shadow-[0_1px_2px_rgba(33,49,48,0.04)]"
          >
            <div className="border-b border-hairline bg-primary/15 px-6 py-5">
              <p className="text-xs font-medium uppercase tracking-wide text-body-strong">
                Free plan
              </p>
              <p className="mt-1 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-ink">$0</span>
                <span className="text-sm text-muted-text">/ forever</span>
              </p>
            </div>

            <div className="px-6 py-6">
              <ul className="flex flex-col gap-3">
                {freePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-body-strong">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/40 text-ink">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <CtaLink
                href="/signup"
                event="final_cta_clicked"
                location="free-plan-section"
                ctaVariant="start-free"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-primary text-[15px] font-medium text-ink hover:bg-primary/85"
              >
                Start free
              </CtaLink>
              <p className="mt-2 text-center text-xs text-muted-text">
                No credit card required
              </p>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
