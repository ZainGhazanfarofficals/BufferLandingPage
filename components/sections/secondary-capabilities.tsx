"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { secondaryCapabilities } from "@/lib/content/secondary-capabilities";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const tintClasses = {
  coral: "bg-pastel-coral",
  lavender: "bg-pastel-lavender",
  yellow: "bg-pastel-yellow",
  blue: "bg-pastel-blue",
} as const;

export function SecondaryCapabilities() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Reveal>
          <h2 className="text-center text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            And everything else you&apos;d expect
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {secondaryCapabilities.map((capability) => (
            <RevealItem key={capability.id} className="h-full">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface-card shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(33,49,48,0.1)]"
              >
                <div className={cn("flex items-center justify-center overflow-hidden p-5", tintClasses[capability.tint])}>
                  <Image
                    src={capability.src}
                    alt={`${capability.name} preview`}
                    width={capability.width}
                    height={capability.height}
                    className="h-auto w-full rounded-lg border border-black/5 shadow-[0_6px_16px_rgba(33,49,48,0.12)] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-1.5 p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-text">
                    {capability.name}
                  </span>
                  <h3 className="text-base font-semibold text-ink">
                    {capability.headline}
                  </h3>
                  <p className="text-sm leading-relaxed text-body">
                    {capability.description}
                  </p>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
