export interface ResourceCard {
  id: string;
  title: string;
  description: string;
  href: string;
  src: string;
  width: number;
  height: number;
  tint: "lavender" | "teal" | "coral" | "yellow";
}

export const resourceCards: ResourceCard[] = [
  {
    id: "marketing-tools",
    title: "Free Marketing Tools",
    description: "A collection of free tools to make your social media marketing easier and more effective.",
    href: "/resources/marketing-tools",
    src: "/screenshots/resource-marketing-tools.webp",
    width: 686,
    height: 482,
    tint: "lavender",
  },
  {
    id: "glossary",
    title: "Social Media Glossary",
    description: "A glossary of the most popular terms to help you make sense of all the social media lingo.",
    href: "/resources/glossary",
    src: "/screenshots/resource-glossary.webp",
    width: 723,
    height: 460,
    tint: "teal",
  },
  {
    id: "marketing-101",
    title: "Social Media Marketing 101",
    description: "Your go-to guide for mastering the basics of social media and beyond.",
    href: "/resources/marketing-101",
    src: "/screenshots/resource-marketing-101.webp",
    width: 636,
    height: 343,
    tint: "coral",
  },
  {
    id: "best-time",
    title: "Best Time to Post",
    description: "Discover the best times to post on social media to maximize your reach and engagement.",
    href: "/resources/best-time",
    src: "/screenshots/resource-best-time.webp",
    width: 624,
    height: 712,
    tint: "lavender",
  },
  {
    id: "blog",
    title: "Social Media Resources",
    description: "A collection of articles and interviews packed with tips, stories, and insights to level up your social media marketing game.",
    href: "/resources/blog",
    src: "/screenshots/resource-blog.webp",
    width: 978,
    height: 721,
    tint: "yellow",
  },
];
