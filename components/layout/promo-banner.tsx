"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

export function PromoBanner() {
  return (
    <div className="flex items-center justify-center gap-2 bg-primary/25 px-4 py-2.5 text-center text-sm">
      <span className="hidden shrink-0 rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-canvas sm:inline-block">
        New
      </span>
      <p className="text-body-strong">
        <span className="font-medium text-ink">Free Social Growth Audit</span>{" "}
        is here.{" "}
        <Link
          href="#social-growth-audit"
          onClick={() =>
            track("hero_secondary_cta_clicked", { location: "promo-banner" })
          }
          className="font-medium text-ink underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong rounded"
        >
          See your growth score →
        </Link>
      </p>
    </div>
  );
}
