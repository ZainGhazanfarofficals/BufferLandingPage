export type PlatformId =
  | "instagram"
  | "linkedin"
  | "tiktok"
  | "x"
  | "threads"
  | "youtube"
  | "facebook"
  | "pinterest"
  | "bluesky"
  | "mastodon"
  | "google-business";

export interface Platform {
  id: PlatformId;
  name: string;
}

export const platforms: Platform[] = [
  { id: "instagram", name: "Instagram" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "tiktok", name: "TikTok" },
  { id: "x", name: "X" },
  { id: "threads", name: "Threads" },
  { id: "youtube", name: "YouTube" },
  { id: "facebook", name: "Facebook" },
  { id: "pinterest", name: "Pinterest" },
  { id: "bluesky", name: "Bluesky" },
  { id: "mastodon", name: "Mastodon" },
  { id: "google-business", name: "Google Business Profile" },
];

export const auditPlatforms: PlatformId[] = [
  "linkedin",
  "instagram",
  "tiktok",
  "x",
  "youtube",
];

export interface ToolIntegration {
  name: string;
  src: string;
  size: number;
}

export const toolIntegrations: ToolIntegration[] = [
  { name: "Canva", src: "/tool-logos/canva.webp", size: 173 },
  { name: "ChatGPT", src: "/tool-logos/chatgpt.webp", size: 128 },
  { name: "Claude", src: "/tool-logos/claude.webp", size: 128 },
  { name: "Cursor", src: "/tool-logos/cursor.webp", size: 128 },
  { name: "Unsplash", src: "/tool-logos/unsplash.webp", size: 173 },
  { name: "Zapier", src: "/tool-logos/zapier.webp", size: 128 },
  { name: "Google Drive", src: "/tool-logos/google-drive.webp", size: 128 },
  { name: "OneDrive", src: "/tool-logos/onedrive.webp", size: 128 },
  { name: "Dropbox", src: "/tool-logos/dropbox.webp", size: 173 },
];

export interface AcquisitionLandingLink {
  slug: string;
  title: string;
  description: string;
  intro: string;
  href: string;
  platform?: PlatformId;
}

export const seoLandingLinks: AcquisitionLandingLink[] = [
  {
    slug: "linkedin-scheduler",
    title: "LinkedIn Scheduler",
    description: "Queue posts, carousels, and articles for LinkedIn in advance.",
    intro:
      "Plan a week of LinkedIn posts in one sitting, then let Buffer publish them at the times your network is actually paying attention.",
    href: "/features/linkedin-scheduler",
    platform: "linkedin",
  },
  {
    slug: "instagram-scheduler",
    title: "Instagram Scheduler",
    description: "Plan feed posts, Reels, and carousels around your best times.",
    intro:
      "Schedule Instagram feed posts, carousels, and Reels in advance, with format-specific previews before anything goes live.",
    href: "/features/instagram-scheduler",
    platform: "instagram",
  },
  {
    slug: "tiktok-scheduler",
    title: "TikTok Scheduler",
    description: "Auto-publish short-form video without leaving the app.",
    intro:
      "Upload once and let Buffer auto-publish your TikTok videos on schedule, without opening the app on posting day.",
    href: "/features/tiktok-scheduler",
    platform: "tiktok",
  },
  {
    slug: "social-media-calendar",
    title: "Social Media Calendar",
    description: "See every scheduled post across every channel in one view.",
    intro:
      "See every scheduled post, on every channel, in a single calendar view, so gaps and overlaps are obvious before they happen.",
    href: "/features/social-media-calendar",
  },
  {
    slug: "best-time-to-post",
    title: "Best Time to Post",
    description: "Data-backed publishing windows for each of your channels.",
    intro:
      "Stop guessing. Buffer analyzes your channel's engagement history to recommend the publishing windows that actually work.",
    href: "/features/best-time-to-post",
  },
  {
    slug: "social-media-analytics",
    title: "Social Media Analytics",
    description: "Understand what's working and what to create next.",
    intro:
      "Go beyond raw charts. Buffer's analytics surface concrete recommendations for what to create, and when to publish it, next.",
    href: "/features/social-media-analytics",
  },
];
