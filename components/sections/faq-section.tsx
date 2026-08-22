"use client";

import {
  Wallet,
  Share2,
  CalendarClock,
  Users,
  Sparkles,
  Store,
  ChartLine,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { faqItems, type FaqIconId } from "@/lib/content/faq";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const faqIcons: Record<FaqIconId, LucideIcon> = {
  pricing: Wallet,
  networks: Share2,
  instagram: CalendarClock,
  linkedin: CalendarClock,
  "multi-account": Users,
  creators: Sparkles,
  "small-business": Store,
  analytics: ChartLine,
};

export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-canvas-warm px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <h2 className="text-center text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <RevealGroup
          as="ol"
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          stagger={0.05}
        >
          {faqItems.map((item) => {
            const Icon = faqIcons[item.id];
            return (
              <RevealItem
                key={item.question}
                as="li"
                className="rounded-2xl border border-hairline bg-surface-card p-6 shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(33,49,48,0.08)]"
              >
                <dl>
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.15 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft text-ink"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                  <dt className="mt-4 text-base font-semibold text-ink">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-body">
                    {item.answer}
                  </dd>
                </dl>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
