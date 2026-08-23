export interface ProductFeature {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  href: string;
  tint: "lavender" | "green" | "coral";
  screenshot: { src: string; width: number; height: number; alt: string };
}

export const productFeatures: ProductFeature[] = [
  {
    id: "publish",
    eyebrow: "Publish",
    headline: "Never scramble to post again",
    description:
      "Plan a week or month of social content in one sitting and let Buffer publish it automatically, at the right time, on every channel.",
    href: "/features/social-media-calendar",
    tint: "lavender",
    screenshot: {
      src: "/screenshots/publish.webp",
      width: 1024,
      height: 783,
      alt: "Buffer Publish space with a queue for multiple social media accounts, a calendar view, and scheduling options.",
    },
  },
  {
    id: "create",
    eyebrow: "Create",
    headline: "Turn one idea into content everywhere",
    description:
      "Create content once and adapt it for LinkedIn, Instagram, Threads, TikTok, X, and every other platform, without starting from a blank page each time.",
    href: "/features/instagram-scheduler",
    tint: "green",
    screenshot: {
      src: "/screenshots/create.webp",
      width: 1024,
      height: 783,
      alt: "Buffer Create space with columns and sorting for content ideas, including an AI Assistant for generating posts and refining content.",
    },
  },
  {
    id: "engage",
    eyebrow: "Engage",
    headline: "Never miss the conversations that matter",
    description:
      "Manage comments, mentions, and messages from every channel in one focused inbox, so the right replies never get buried.",
    href: "/features/social-media-analytics",
    tint: "coral",
    screenshot: {
      src: "/screenshots/engage.webp",
      width: 1024,
      height: 783,
      alt: "Buffer Community space with filterable and sortable comments across multiple social media accounts.",
    },
  },
];

// The array above is the original module order (Publish, Create, Engage).
// This is the customer-journey order (Create, Publish, Engage), matching
// ProductGrowthLoop directly above this section on the page. Which one
// renders is controlled by growthExperiments.featurePresentation, so the
// two orderings can be A/B tested against each other.
export const journeyOrder = ["create", "publish", "engage"];
