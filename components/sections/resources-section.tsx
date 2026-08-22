"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { resourceCards } from "@/lib/content/resources";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const tintClasses = {
  lavender: "bg-pastel-lavender",
  teal: "bg-[#bfe8dd]",
  coral: "bg-pastel-coral",
  yellow: "bg-pastel-yellow",
} as const;

export function ResourcesSection() {
  return (
    <section id="resources" className="bg-canvas-warm px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="max-w-[640px]">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            Resources
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Fuel your social media success
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body">
            Everything you need to level up your social strategy, in one place.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {resourceCards.map((resource, index) => (
            <RevealItem
              key={resource.id}
              className={cn("h-full", index === resourceCards.length - 1 && "sm:col-span-2")}
            >
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.15 }} className="h-full">
                <Link
                  href={resource.href}
                  onClick={() =>
                    track("resource_card_clicked", {
                      location: "resources-section",
                      ctaVariant: resource.id,
                    })
                  }
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(33,49,48,0.1)]",
                    tintClasses[resource.tint]
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-ink">{resource.title}</h3>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-body-strong">
                    {resource.description}
                  </p>
                  <div className="mt-5 flex-1 overflow-hidden rounded-xl">
                    <Image
                      src={resource.src}
                      alt=""
                      width={resource.width}
                      height={resource.height}
                      className="h-full max-h-[220px] w-full rounded-xl border border-black/5 object-cover shadow-[0_8px_20px_rgba(33,49,48,0.1)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
