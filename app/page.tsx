import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { PromoBanner } from "@/components/layout/promo-banner";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ProductGrowthLoop } from "@/components/sections/product-growth-loop";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { ProductFeaturesGrid } from "@/components/sections/product-features-grid";
import { InsightsSection } from "@/components/sections/insights-section";
import { SecondaryCapabilities } from "@/components/sections/secondary-capabilities";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { HumanSupportSection } from "@/components/sections/human-support-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { OpenCompanySection } from "@/components/sections/open-company-section";
import { FreePlanSection } from "@/components/sections/free-plan-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { growthExperiments } from "@/lib/experiments";

// Below-the-fold and motion-heavy: code-split so their client JS doesn't
// block the hero's initial parse/hydration. SSR stays on (the default), so
// this is bundle-splitting only — the HTML these render is still fully
// server-rendered and indexable.
const PersonaSelector = dynamic(() =>
  import("@/components/sections/persona-selector").then((mod) => mod.PersonaSelector)
);
const SocialGrowthAudit = dynamic(() =>
  import("@/components/sections/social-growth-audit").then((mod) => mod.SocialGrowthAudit)
);
const CustomerStories = dynamic(() =>
  import("@/components/sections/customer-stories").then((mod) => mod.CustomerStories)
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Buffer",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plan, create, publish, engage, and understand what works across all your social channels from one simple workspace.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageViewTracker location="landing-page" />
      <SiteHeader />
      {growthExperiments.showPromoBanner && <PromoBanner />}
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustedBy />
        {growthExperiments.personaPersonalization && <PersonaSelector />}
        <ProductGrowthLoop />
        <BeforeAfterSection />
        <ProductFeaturesGrid />
        <InsightsSection />
        <SecondaryCapabilities />
        <IntegrationsSection />
        {growthExperiments.growthAudit && <SocialGrowthAudit />}
        <CustomerStories />
        <HumanSupportSection />
        <ResourcesSection />
        <OpenCompanySection />
        <FreePlanSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
