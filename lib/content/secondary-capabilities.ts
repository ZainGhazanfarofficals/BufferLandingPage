export type SecondaryCapabilityTint = "coral" | "lavender" | "yellow" | "blue";

export interface SecondaryCapability {
  id: string;
  name: string;
  headline: string;
  description: string;
  src: string;
  width: number;
  height: number;
  tint: SecondaryCapabilityTint;
}

export const secondaryCapabilities: SecondaryCapability[] = [
  {
    id: "collaborate",
    name: "Collaborate",
    headline: "Work as a team",
    description:
      "Route posts through approvals and assign roles so the right person signs off before anything goes live.",
    src: "/screenshots/collaborate.webp",
    width: 287,
    height: 230,
    tint: "coral",
  },
  {
    id: "mobile-app",
    name: "Mobile app",
    headline: "Publish from anywhere",
    description:
      "Create, schedule, and reply to comments from the Buffer app on iOS and Android.",
    src: "/screenshots/mobile-app.webp",
    width: 287,
    height: 230,
    tint: "lavender",
  },
  {
    id: "start-page",
    name: "Start Page",
    headline: "One link for everything",
    description:
      "A simple, customizable link-in-bio page that matches your brand, built in minutes.",
    src: "/screenshots/start-page.webp",
    width: 287,
    height: 230,
    tint: "yellow",
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    headline: "Never stare at a blank page",
    description:
      "Generate on-brand post ideas and captions, then refine them until they sound like you.",
    src: "/screenshots/ai-assistant.webp",
    width: 287,
    height: 230,
    tint: "blue",
  },
];
