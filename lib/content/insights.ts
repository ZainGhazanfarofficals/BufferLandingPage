export interface InsightRecommendation {
  metric: string;
  finding: string;
  action: string;
  trend: "up" | "down";
}

export const insightRecommendations: InsightRecommendation[] = [
  {
    metric: "+38%",
    finding: "Your educational posts receive 38% more engagement.",
    action: "Create more educational content this week",
    trend: "up",
  },
  {
    metric: "Tue · 10 AM",
    finding: "Tuesday morning is currently your strongest publishing window.",
    action: "Schedule your top post for Tuesday morning",
    trend: "up",
  },
  {
    metric: "+24%",
    finding: "Carousels outperform image posts by 24%.",
    action: "Turn your next update into a carousel",
    trend: "up",
  },
  {
    metric: "-15%",
    finding: "Your posting consistency decreased this month.",
    action: "Queue 3 more posts to get back on track",
    trend: "down",
  },
];
