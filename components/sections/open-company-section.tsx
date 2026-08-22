"use client";

import { motion } from "motion/react";
import { companyMetrics } from "@/lib/content/company-metrics";
import { CtaLink } from "@/components/analytics/cta-link";
import { CountUpNumber } from "@/components/motion/count-up-number";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function OpenCompanySection() {
  return (
    <section id="open-company" className="px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-[560px]">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
              About us
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              We are an open company
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Since 2013, we&apos;ve shared Buffer&apos;s finances, team salaries, and
              other key metrics openly. Our commitment to transparency is rooted
              in our belief that it fosters trust, keeps us accountable, and
              helps drive positive change within our industry.
            </p>
          </div>
          <CtaLink
            href="/signup"
            event="final_cta_clicked"
            location="open-company-section"
            ctaVariant="open-dashboard"
            className="flex h-11 shrink-0 items-center justify-center rounded-full border border-hairline-strong px-5 text-sm font-medium text-ink hover:bg-surface-soft"
          >
            Open dashboard →
          </CtaLink>
        </div>

        <RevealGroup
          className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
          stagger={0.06}
        >
          {companyMetrics.map((metric) => (
            <RevealItem key={metric.label}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className="h-full rounded-2xl border border-hairline bg-surface-card p-5"
              >
                <p className="text-sm font-medium text-ink">{metric.label}</p>
                <p className="text-xs text-muted-text">{metric.sublabel}</p>
                <div className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  {metric.countUp !== undefined ? (
                    <CountUpNumber value={metric.countUp} />
                  ) : (
                    metric.value
                  )}
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </section>
  );
}
