import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { resourcePages } from "@/lib/content/resource-pages";
import { CtaLink } from "@/components/analytics/cta-link";
import { BufferLogo } from "@/components/icons/buffer-logo";
import { primaryCtaClass } from "@/lib/cta-styles";

export function generateStaticParams() {
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resourcePages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.intro,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resourcePages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main className="min-h-dvh bg-canvas px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[720px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-ink">
            <span className="sr-only">Buffer</span>
            <BufferLogo className="h-6 w-auto" />
          </Link>
          <Link
            href="/#resources"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-text hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All resources
          </Link>
        </div>

        <p className="mt-10 text-xs font-medium uppercase tracking-wide text-muted-text">
          {page.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-body">
          {page.intro}
        </p>

        <div className="mt-10">
          {page.kind === "glossary" && (
            <dl className="flex flex-col divide-y divide-hairline rounded-2xl border border-hairline bg-surface-card">
              {page.entries.map((entry) => (
                <div key={entry.term} className="p-5">
                  <dt className="text-base font-semibold text-ink">{entry.term}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-body">
                    {entry.definition}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {page.kind === "steps" && (
            <ol className="flex flex-col gap-4">
              {page.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-hairline bg-surface-card p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/30 text-sm font-semibold text-primary-strong">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {page.kind === "table" && (
            <div className="overflow-hidden rounded-2xl border border-hairline bg-surface-card">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline bg-surface-soft">
                    <th className="p-4 font-medium text-muted-text">Platform</th>
                    <th className="p-4 font-medium text-muted-text">Best window</th>
                    <th className="p-4 font-medium text-muted-text">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {page.rows.map((row) => (
                    <tr key={row.platform} className="border-b border-hairline last:border-0">
                      <td className="p-4 font-medium text-ink">{row.platform}</td>
                      <td className="p-4 text-body-strong">{row.window}</td>
                      <td className="p-4 text-body">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {page.kind === "list" && (
            <ul className="flex flex-col gap-4">
              {page.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-hairline bg-surface-card p-5"
                >
                  <p className="text-base font-semibold text-ink">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-12 rounded-2xl border border-hairline bg-canvas-warm p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-ink">
            Ready to put this into practice?
          </p>
          <p className="mt-1 text-sm text-body">
            Plan, schedule, and publish across every channel from one workspace.
          </p>
          <div className="mt-5 flex justify-center">
            <CtaLink
              href="/signup"
              event="final_cta_clicked"
              location={`resource-page-${page.slug}`}
              ctaVariant="start-free"
              className={primaryCtaClass}
            >
              Start for free
            </CtaLink>
          </div>
        </div>
      </div>
    </main>
  );
}
