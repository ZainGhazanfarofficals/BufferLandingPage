export interface GrowthLoopStep {
  id: string;
  label: string;
  description: string;
}

export const growthLoopSteps: GrowthLoopStep[] = [
  {
    id: "create",
    label: "Create",
    description: "Turn ideas into platform-ready content.",
  },
  {
    id: "publish",
    label: "Publish",
    description: "Schedule content across every channel.",
  },
  {
    id: "engage",
    label: "Engage",
    description: "Keep track of meaningful conversations.",
  },
  {
    id: "learn",
    label: "Learn",
    description: "Understand what is actually performing.",
  },
  {
    id: "improve",
    label: "Improve",
    description: "Use those insights to create better content next time.",
  },
];
