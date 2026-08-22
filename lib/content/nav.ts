export interface NavLink {
  label: string;
  href: string;
}

export const primaryNavLinks: NavLink[] = [
  { label: "Products", href: "#product-growth-loop" },
  { label: "Solutions", href: "#persona-selector" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#free-plan" },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Features",
    links: [
      { label: "Publish", href: "#publish" },
      { label: "Create", href: "#create" },
      { label: "Engage", href: "#engage" },
      { label: "Insights", href: "#insights" },
    ],
  },
  {
    title: "Channels",
    links: [
      { label: "Instagram Scheduler", href: "/features/instagram-scheduler" },
      { label: "LinkedIn Scheduler", href: "/features/linkedin-scheduler" },
      { label: "TikTok Scheduler", href: "/features/tiktok-scheduler" },
      { label: "All integrations", href: "#integrations" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Social media calendar", href: "/features/social-media-calendar" },
      { label: "Best time to post", href: "/features/best-time-to-post" },
      { label: "Social media analytics", href: "/features/social-media-analytics" },
      { label: "Social growth audit", href: "#social-growth-audit" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customer stories", href: "#customer-stories" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Pricing", href: "#free-plan" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Transparency",
    links: [
      { label: "Open Hub", href: "#open-company" },
      { label: "Transparent metrics", href: "#open-company" },
      { label: "Transparent pricing", href: "/transparency/pricing" },
      { label: "Transparent salaries", href: "/transparency/salaries" },
      { label: "Product roadmap", href: "/roadmap" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Terms of service", href: "/legal/terms" },
  { label: "Cookie settings", href: "/legal/cookies" },
];
