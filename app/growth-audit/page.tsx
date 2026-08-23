import Link from "next/link";
import type { Metadata } from "next";
import { SocialGrowthAudit } from "@/components/sections/social-growth-audit";
import { BufferLogo } from "@/components/icons/buffer-logo";

export const metadata: Metadata = {
  title: "Free Social Growth Score",
  description:
    "Answer four quick questions about your posting habits and get a free Social Growth Score out of 100, with the specific Buffer feature that addresses your biggest gap.",
};

const faqs = [
  {
    question: "What is a Social Growth Score?",
    answer:
      "It's a 0-100 estimate of how much room you have to grow on a given platform, based on your posting frequency, platform, goal, and team size. A lower score generally means more untapped opportunity, not that something is wrong.",
  },
  {
    question: "How is the score calculated?",
    answer:
      "It starts from typical engagement patterns for your chosen platform, then adjusts based on how consistently you currently post. The result also points to the one Buffer feature most relevant to your stated goal.",
  },
  {
    question: "Do I need an account to see my score?",
    answer:
      "No. The four questions and your score are free to see with no signup. Creating a free Buffer account is only needed if you want to act on the recommendations.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function GrowthAuditPage() {
  return (
    <main className="min-h-dvh bg-canvas px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[720px]">
        <Link href="/" className="text-ink">
          <span className="sr-only">Buffer</span>
          <BufferLogo className="h-6 w-auto" />
        </Link>

        <p className="mt-10 text-xs font-medium uppercase tracking-wide text-muted-text">
          Free tool
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          What&apos;s your Social Growth Score?
        </h1>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-body">
          Four quick questions about how you post today. No account, no credit
          card — just a score out of 100 and the one change most likely to move it.
        </p>
      </div>

      <div className="mt-4">
        <SocialGrowthAudit />
      </div>

      <div className="mx-auto max-w-[720px]">
        <h2 className="text-xl font-medium tracking-tight text-ink">
          Questions about the score
        </h2>
        <dl className="mt-6 flex flex-col gap-6">
          {faqs.map((item) => (
            <div key={item.question}>
              <dt className="text-base font-semibold text-ink">{item.question}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-body">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
