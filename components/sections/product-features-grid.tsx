"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { productFeatures } from "@/lib/content/product-features";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const tintClasses = {
  lavender: "bg-pastel-lavender",
  green: "bg-[#dcefd1]",
  coral: "bg-pastel-coral",
} as const;

export function ProductFeaturesGrid() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            The core workspace
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Everything you need to grow, in one place
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
          stagger={0.1}
        >
          {productFeatures.map((feature) => (
            <RevealItem key={feature.id} className="h-full">
              <motion.article
                id={feature.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex h-full scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-hairline bg-surface-card shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(33,49,48,0.1)]"
              >
                <div className={cn("flex items-center justify-center p-6", tintClasses[feature.tint])}>
                  <Image
                    src={feature.screenshot.src}
                    alt={feature.screenshot.alt}
                    width={feature.screenshot.width}
                    height={feature.screenshot.height}
                    className="h-auto w-full rounded-xl border border-black/5 shadow-[0_8px_24px_rgba(33,49,48,0.12)]"
                  />
                </div>

                <div className="flex flex-1 flex-col items-start gap-2 p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-text">
                    {feature.eyebrow}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{feature.headline}</h3>
                  <p className="text-sm leading-relaxed text-body">{feature.description}</p>
                  <Link
                    href={feature.href}
                    onClick={() =>
                      track("integration_clicked", {
                        location: "product-features-grid",
                        ctaVariant: feature.id,
                      })
                    }
                    className="mt-auto flex items-center gap-1 pt-3 text-sm font-medium text-ink underline underline-offset-4 hover:no-underline"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
