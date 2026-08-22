import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoLandingLinks } from "@/lib/content/integrations";
import { CtaLink } from "@/components/analytics/cta-link";
import { BufferLogo } from "@/components/icons/buffer-logo";
import { primaryCtaClass } from "@/lib/cta-styles";

export function generateStaticParams() {
  return seoLandingLinks.map((link) => ({ slug: link.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const link = seoLandingLinks.find((item) => item.slug === slug);
  if (!link) return {};
  return {
    title: link.title,
    description: link.description,
  };
}

export default async function FeatureLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const link = seoLandingLinks.find((item) => item.slug === slug);
  if (!link) notFound();

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-5 py-16">
      <Link href="/" className="mb-10 text-ink">
        <span className="sr-only">Buffer</span>
        <BufferLogo className="h-6 w-auto" />
      </Link>
      <div className="w-full max-w-[560px] text-center">
        <h1 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {link.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-body">{link.intro}</p>

        <div className="mt-8 flex justify-center">
          <CtaLink
            href="/signup"
            event="final_cta_clicked"
            location={`feature-landing-${link.slug}`}
            ctaVariant="start-free"
            className={primaryCtaClass}
          >
            Start for free
          </CtaLink>
        </div>

        <Link
          href="/#integrations"
          className="mt-6 inline-block text-sm font-medium text-muted-text underline underline-offset-4 hover:text-ink"
        >
          See every supported channel
        </Link>
      </div>
    </main>
  );
}
