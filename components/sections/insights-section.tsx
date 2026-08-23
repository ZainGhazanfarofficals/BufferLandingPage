"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { CtaLink } from "@/components/analytics/cta-link";
import { insightRecommendations } from "@/lib/content/insights";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function InsightsSection() {
  return (
    <section id="insights" className="bg-canvas-warm px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium uppercase tracking-wide text-body-strong">
            Insights
          </span>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Know what to create next
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body">
            Understand which posts, formats, topics, and publishing times are
            actually growing your audience — not just another dashboard full of
            charts.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden rounded-2xl border border-hairline bg-surface-card shadow-[0_1px_2px_rgba(33,49,48,0.04)]"
          >
            <Image
              src="/screenshots/insights.webp"
              alt="Buffer Insights dashboard showing top-performing posts and engagement trends across channels"
              width={1024}
              height={783}
              className="h-auto w-full object-cover"
            />
          </motion.div>

          <RevealGroup className="flex flex-col gap-4" stagger={0.08}>
            {insightRecommendations.map((item) => (
              <RevealItem
                key={item.finding}
                className="rounded-2xl border border-hairline bg-surface-card p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(33,49,48,0.08)]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full",
                      item.trend === "up" ? "bg-primary/40 text-ink" : "bg-pastel-coral/40 text-body-strong"
                    )}
                  >
                    {item.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <TrendingDown className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                  <span className="text-base font-semibold text-ink">{item.metric}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-body-strong">
                  {item.finding}
                </p>
                <p className="mt-2 text-sm font-medium text-primary-strong">
                  → {item.action}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaLink
            href="/features/social-media-analytics"
            event="integration_clicked"
            location="insights-section"
            ctaVariant="see-whats-working"
            className="text-sm font-medium text-ink underline underline-offset-4 hover:no-underline"
          >
            See a full analytics walkthrough →
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
