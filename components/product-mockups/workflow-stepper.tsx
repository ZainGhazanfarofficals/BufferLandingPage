"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = ["Create post", "Select channels", "Schedule", "Publish", "Analyze performance"];

export function WorkflowStepper() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <ol
      className="flex flex-wrap items-center gap-x-1 gap-y-2"
      aria-label="Buffer publishing workflow"
    >
      {steps.map((step, index) => (
        <li key={step} className="flex items-center">
          <span
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors duration-500",
              index === active
                ? "bg-primary text-ink"
                : "bg-surface-soft text-muted-text"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors duration-500",
                index === active ? "bg-ink" : "bg-hairline-strong"
              )}
              aria-hidden="true"
            />
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="mx-1 text-hairline-strong" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
