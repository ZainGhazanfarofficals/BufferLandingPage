import type { MetadataRoute } from "next";
import { seoLandingLinks } from "@/lib/content/integrations";
import { resourcePages } from "@/lib/content/resource-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const staticRoutes = ["/", "/signup", "/login", "/growth-audit"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const landingRoutes = seoLandingLinks.map((link) => ({
    url: `${siteUrl}/features/${link.slug}`,
    lastModified: new Date(),
  }));

  const resourceRoutes = resourcePages.map((page) => ({
    url: `${siteUrl}/resources/${page.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...landingRoutes, ...resourceRoutes];
}
