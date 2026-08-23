"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { PlatformTile } from "@/components/ui/platform-tile";
import { CtaLink } from "@/components/analytics/cta-link";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { auditPlatforms, platforms, type PlatformId } from "@/lib/content/integrations";
import {
  computeGrowthAudit,
  frequencyOptions,
  goalOptions,
  teamSizeOptions,
  type AuditAnswers,
  type PostingFrequencyAnswer,
  type GoalAnswer,
  type TeamSizeAnswer,
} from "@/lib/content/growth-audit";
import { track } from "@/lib/analytics";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 4;

const chipClass = (isActive: boolean) =>
  cn(
    "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "border-primary-strong bg-primary/30 text-ink"
      : "border-hairline-strong bg-surface-card text-body-strong hover:bg-surface-soft"
  );

export function SocialGrowthAudit() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<AuditAnswers>>({});
  const [hasStarted, setHasStarted] = useState(false);

  function advance<K extends keyof AuditAnswers>(key: K, value: AuditAnswers[K]) {
    if (!hasStarted) {
      track("social_growth_audit_started", { location: "social-growth-audit" });
      setHasStarted(true);
    }
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);
    track("social_growth_audit_step_completed", {
      location: "social-growth-audit",
      step: step + 1,
      question: key,
      answer: value,
    });

    if (step + 1 >= TOTAL_STEPS) {
      track("social_growth_audit_completed", {
        location: "social-growth-audit",
        ...nextAnswers,
      });
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  const isComplete = step >= TOTAL_STEPS && answers.platform && answers.frequency && answers.goal && answers.teamSize;
  const result = isComplete ? computeGrowthAudit(answers as AuditAnswers) : null;
  const platformName = platforms.find((p) => p.id === answers.platform)?.name;

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
            Four quick questions, then your growth score — before you create an account.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <div className="mx-auto flex max-w-[280px] items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-hairline">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs font-medium text-muted-text">
                  {step + 1} / {TOTAL_STEPS}
                </span>
              </div>

              {step === 0 && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  <p className="text-sm font-medium text-body-strong">
                    Which platform do you want to grow?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {auditPlatforms.map((id) => {
                      const name = platforms.find((p) => p.id === id)?.name;
                      return (
                        <motion.button
                          key={id}
                          type="button"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          onClick={() => advance("platform", id as PlatformId)}
                          className={chipClass(false)}
                        >
                          <PlatformTile id={id} size="sm" className="h-6 w-6 rounded-md" />
                          {name}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  <p className="text-sm font-medium text-body-strong">
                    How often do you currently post?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {frequencyOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => advance("frequency", option.value as PostingFrequencyAnswer)}
                        className={chipClass(false)}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  <p className="text-sm font-medium text-body-strong">
                    What&apos;s your main goal right now?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {goalOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => advance("goal", option.value as GoalAnswer)}
                        className={chipClass(false)}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="mt-6 flex flex-col items-center gap-4">
                  <p className="text-sm font-medium text-body-strong">
                    How big is your team?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {teamSizeOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => advance("teamSize", option.value as TeamSizeAnswer)}
                        className={chipClass(false)}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="mx-auto mt-6 flex items-center gap-1 text-xs font-medium text-muted-text hover:text-ink"
                >
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" />
                  Back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 rounded-2xl border border-hairline bg-surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col items-center gap-1 border-b border-hairline pb-6 text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
                  Your Social Growth Score · {platformName}
                </p>
                <div className="flex items-baseline text-5xl font-semibold tracking-tight text-ink">
                  <span className="sr-only">{result.opportunityScore} out of 100</span>
                  <span aria-hidden="true" className="flex items-baseline">
                    <AnimatedNumber value={result.opportunityScore} />
                    <span className="text-xl text-muted-text"> / 100</span>
                  </span>
                </div>
                <p className="text-sm text-body">{result.engagementTrend}</p>
                <p className="mt-1 text-xs text-muted-text">
                  Estimated from your answers, for illustration — not a measurement of your real accounts.
                </p>
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

              <p className="mt-4 text-sm leading-relaxed text-body">{result.teamNote}</p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <CtaLink
                  href="/signup"
                  event="social_growth_audit_cta_clicked"
                  location="social-growth-audit"
                  ctaVariant="create-content-plan"
                  platform={answers.platform}
                  className="h-12 rounded-full bg-primary px-6 text-[15px] font-medium text-ink hover:bg-primary/85"
                >
                  Create my free content plan
                </CtaLink>
                <a
                  href={result.recommendedFeatureHref}
                  onClick={() =>
                    track("integration_clicked", {
                      location: "social-growth-audit-results",
                      ctaVariant: answers.goal,
                    })
                  }
                  className="text-sm font-medium text-ink underline underline-offset-4 hover:no-underline"
                >
                  {result.recommendedFeatureLabel}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  );
}
