"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PlatformTile } from "@/components/ui/platform-tile";
import { CtaLink } from "@/components/analytics/cta-link";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { auditPlatforms, type PlatformId } from "@/lib/content/integrations";
import { getGrowthAudit } from "@/lib/content/growth-audit";
import { platforms } from "@/lib/content/integrations";
import { track } from "@/lib/analytics";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SocialGrowthAudit() {
  const [selected, setSelected] = useState<PlatformId | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  function handleSelect(id: PlatformId) {
    setSelected(id);
    if (!hasStarted) {
      track("social_growth_audit_started", { location: "social-growth-audit" });
      setHasStarted(true);
    }
    track("social_growth_audit_completed", {
      location: "social-growth-audit",
      platform: id,
    });
  }

  const result = selected ? getGrowthAudit(selected) : null;
  const platformName = platforms.find((p) => p.id === selected)?.name;

  return (
    <section
      id="social-growth-audit"
      className="px-5 py-20 sm:px-8"
      aria-labelledby="growth-audit-heading"
    >
      <Reveal className="mx-auto max-w-[840px] rounded-3xl border border-hairline bg-canvas-warm p-6 sm:p-10">
        <div className="text-center">
          <h2
            id="growth-audit-heading"
            className="text-2xl font-medium tracking-tight text-ink sm:text-3xl"
          >
            See how your social strategy could improve
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body">
            Get a quick growth snapshot before creating an account.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {auditPlatforms.map((id) => {
            const name = platforms.find((p) => p.id === id)?.name;
            const isActive = selected === id;
            return (
              <motion.button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                aria-pressed={isActive}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary-strong bg-primary/30 text-ink"
                    : "border-hairline-strong bg-surface-card text-body-strong hover:bg-surface-soft"
                )}
              >
                <PlatformTile id={id} size="sm" className="h-6 w-6 rounded-md" />
                {name}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 rounded-2xl border border-hairline bg-surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col items-center gap-1 border-b border-hairline pb-6 text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
                  Growth opportunity · {platformName}
                </p>
                <div className="flex items-baseline text-5xl font-semibold tracking-tight text-ink">
                  <AnimatedNumber value={result.opportunityScore} />
                  <span className="text-xl text-muted-text"> / 100</span>
                </div>
                <p className="text-sm text-body">{result.engagementTrend}</p>
              </div>

              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-surface-soft p-4">
                  <dt className="text-xs font-medium text-muted-text">
                    Posting consistency
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">
                    {result.postingConsistency}%
                  </dd>
                </div>
                <div className="rounded-xl bg-surface-soft p-4">
                  <dt className="text-xs font-medium text-muted-text">
                    Recommended posting frequency
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">
                    {result.recommendedFrequency}
                  </dd>
                </div>
                <div className="rounded-xl bg-surface-soft p-4">
                  <dt className="text-xs font-medium text-muted-text">
                    Best-performing format
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">
                    {result.bestFormat}
                  </dd>
                </div>
                <div className="rounded-xl bg-surface-soft p-4">
                  <dt className="text-xs font-medium text-muted-text">
                    Best publishing window
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">
                    {result.bestWindow}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex justify-center">
                <CtaLink
                  href="/signup"
                  event="social_growth_audit_cta_clicked"
                  location="social-growth-audit"
                  ctaVariant="create-content-plan"
                  platform={selected}
                  className="h-12 rounded-full bg-primary px-6 text-[15px] font-medium text-ink hover:bg-primary/85"
                >
                  Create my free content plan
                </CtaLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}
