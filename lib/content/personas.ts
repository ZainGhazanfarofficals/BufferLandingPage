export type PersonaId = "creator" | "small-business" | "agency" | "marketing-team";

export type PersonaAccent = "pink" | "yellow" | "blue" | "lavender";

export interface Persona {
  id: PersonaId;
  label: string;
  headline: string;
  description: string;
  proofPoint: string;
  scrollTarget: string;
  accent: PersonaAccent;
}

export const personas: Persona[] = [
  {
    id: "creator",
    label: "Creator",
    headline: "Grow my audience",
    description:
      "Create consistently and understand what content performs best.",
    proofPoint: "Creators using Buffer post 3.2x more consistently in their first month.",
    scrollTarget: "customer-stories",
    accent: "pink",
  },
  {
    id: "small-business",
    label: "Small Business",
    headline: "Save time managing social",
    description:
      "Plan and publish content without spending your entire day on social media.",
    proofPoint: "Small business teams save an average of 6 hours a week on scheduling.",
    scrollTarget: "customer-stories",
    accent: "yellow",
  },
  {
    id: "agency",
    label: "Agency",
    headline: "Manage clients efficiently",
    description:
      "Schedule content, collaborate, and manage multiple brands from one place.",
    proofPoint: "Agencies on Buffer manage an average of 12 client accounts from one workspace.",
    scrollTarget: "integrations",
    accent: "blue",
  },
  {
    id: "marketing-team",
    label: "Marketing Team",
    headline: "Coordinate content across channels",
    description: "Plan, approve, publish, and measure social content together.",
    proofPoint: "Marketing teams cut approval turnaround from days to hours.",
    scrollTarget: "product-growth-loop",
    accent: "lavender",
  },
];

export const defaultPersonaId: PersonaId = "small-business";
