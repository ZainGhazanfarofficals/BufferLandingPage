"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/analytics/cta-link";
import { cn } from "@/lib/utils";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setVisible(scrolledPastHero);
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-canvas/95 p-3 backdrop-blur transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
      aria-hidden={!visible}
    >
      <CtaLink
        href="/signup"
        event="final_cta_clicked"
        location="mobile-sticky-bar"
        ctaVariant="start-free"
        tabIndex={visible ? 0 : -1}
        className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-base font-medium text-ink"
      >
        Start free
      </CtaLink>
    </div>
  );
}
