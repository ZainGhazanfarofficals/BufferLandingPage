import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { PromoBanner } from "@/components/layout/promo-banner";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { PersonaSelector } from "@/components/sections/persona-selector";
import { ProductGrowthLoop } from "@/components/sections/product-growth-loop";
import { ProductFeaturesGrid } from "@/components/sections/product-features-grid";
import { InsightsSection } from "@/components/sections/insights-section";
import { SecondaryCapabilities } from "@/components/sections/secondary-capabilities";
import { SocialGrowthAudit } from "@/components/sections/social-growth-audit";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { CustomerStories } from "@/components/sections/customer-stories";
import { HumanSupportSection } from "@/components/sections/human-support-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { OpenCompanySection } from "@/components/sections/open-company-section";
import { FreePlanSection } from "@/components/sections/free-plan-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { growthExperiments } from "@/lib/experiments";

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
      {growthExperiments.growthAudit && <PromoBanner />}
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustedBy />
        {growthExperiments.personaPersonalization && <PersonaSelector />}
        <ProductGrowthLoop />
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
