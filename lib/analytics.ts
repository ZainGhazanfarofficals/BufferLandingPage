export type AnalyticsEvent =
  | "landing_page_view"
  | "hero_cta_clicked"
  | "hero_secondary_cta_clicked"
  | "signup_started"
  | "signup_completed"
  | "persona_selected"
  | "product_demo_started"
  | "product_demo_completed"
  | "social_growth_audit_started"
  | "social_growth_audit_step_completed"
  | "social_growth_audit_completed"
  | "social_growth_audit_cta_clicked"
  | "integration_clicked"
  | "resource_card_clicked"
  | "pricing_viewed"
  | "testimonial_viewed"
  | "final_cta_clicked"
  | "channel_connected"
  | "first_post_created"
  | "first_post_scheduled";

export type DeviceCategory = "mobile" | "tablet" | "desktop";

export interface AnalyticsPayload {
  location?: string;
  ctaVariant?: string;
  experimentVariant?: string;
  persona?: string | null;
  device?: DeviceCategory;
  source?: string | null;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function getDeviceCategory(): DeviceCategory {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function getAcquisitionSource(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = sessionStorage.getItem("buffer_acquisition_source");
    if (stored) return stored;
    const params = new URLSearchParams(window.location.search);
    const source =
      params.get("utm_source") ?? params.get("ref") ?? document.referrer ?? null;
    if (source) sessionStorage.setItem("buffer_acquisition_source", source);
    return source || null;
  } catch {
    return null;
  }
}

export function track(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  const enriched: AnalyticsPayload = {
    device: getDeviceCategory(),
    source: getAcquisitionSource(),
    ...payload,
  };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...enriched });
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, enriched);
  }
}
