export type FaqIconId =
  | "pricing"
  | "networks"
  | "instagram"
  | "linkedin"
  | "multi-account"
  | "creators"
  | "small-business"
  | "analytics";

export interface FaqItem {
  id: FaqIconId;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "pricing",
    question: "Is Buffer free?",
    answer:
      "Yes. Buffer's free plan covers up to 3 connected channels with core publishing tools, no credit card required. You can upgrade later as your channels or team grow.",
  },
  {
    id: "networks",
    question: "What social networks does Buffer support?",
    answer:
      "Instagram, LinkedIn, TikTok, X, Threads, YouTube, Facebook, Pinterest, Bluesky, Mastodon, and Google Business Profile, all from one workspace.",
  },
  {
    id: "instagram",
    question: "Can I schedule Instagram posts?",
    answer:
      "Yes. Buffer schedules Instagram feed posts, carousels, and Reels for automatic publishing, with format-specific previews before they go live.",
  },
  {
    id: "linkedin",
    question: "Can I schedule LinkedIn posts?",
    answer:
      "Yes, including personal profiles and Company Pages. You can queue posts, articles, and carousels in advance around your strongest publishing windows.",
  },
  {
    id: "multi-account",
    question: "Can Buffer manage multiple social accounts?",
    answer:
      "Yes. Buffer is built for managing several channels or client accounts from a single workspace, with team roles and approval workflows on paid plans.",
  },
  {
    id: "creators",
    question: "Is Buffer good for creators?",
    answer:
      "Yes. Creators use Buffer to plan content in advance, publish consistently across platforms, and see which formats and times actually grow their audience.",
  },
  {
    id: "small-business",
    question: "Is Buffer good for small businesses?",
    answer:
      "Yes. Small businesses use Buffer to plan a week or month of content in one sitting, publish automatically, and free up hours previously spent on manual posting.",
  },
  {
    id: "analytics",
    question: "Does Buffer include analytics?",
    answer:
      "Yes. Buffer's analytics go beyond raw charts to surface concrete recommendations, such as which formats, topics, and publishing times are outperforming the rest.",
  },
];
