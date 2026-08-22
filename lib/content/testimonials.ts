import type { PersonaId } from "./personas";

export interface TestimonialStat {
  label: string;
  value: number | string;
  prefix?: string;
  suffix?: string;
}

export interface Testimonial {
  persona: PersonaId;
  quote: string;
  name: string;
  role: string;
  stats: TestimonialStat[];
}

export const testimonials: Testimonial[] = [
  {
    persona: "creator",
    quote:
      "I went from posting whenever I remembered to publishing five times a week without it eating my mornings. My reach on LinkedIn is up 3x since I got consistent.",
    name: "Priya Nair",
    role: "Independent creator, career coaching content",
    stats: [
      { label: "LinkedIn impressions", value: "+3.1x" },
      { label: "Posting streak", value: 14, suffix: " weeks" },
      { label: "Time spent per week", value: 45, suffix: " min" },
    ],
  },
  {
    persona: "small-business",
    quote:
      "We used to lose entire Friday afternoons to scheduling three accounts by hand. Buffer cut our weekly social workload from six hours to about two, and nothing slips through anymore.",
    name: "Marcus Ferreira",
    role: "Owner, Ferreira Coffee Roasters",
    stats: [
      { label: "Hours saved weekly", value: 4, suffix: " hrs" },
      { label: "Channels managed", value: 3 },
      { label: "Missed posts this quarter", value: 0 },
    ],
  },
  {
    persona: "agency",
    quote:
      "Twelve client accounts, one workspace, and approvals that used to take two days now take about ninety minutes. That alone paid for the upgrade in the first week.",
    name: "Dana Whitfield",
    role: "Founder, Whitfield Social Studio",
    stats: [
      { label: "Client accounts", value: 12 },
      { label: "Approval turnaround", value: "1.5 hrs" },
      { label: "Team members", value: 4 },
    ],
  },
];

export function getTestimonialForPersona(persona: PersonaId): Testimonial {
  return testimonials.find((t) => t.persona === persona) ?? testimonials[1];
}
