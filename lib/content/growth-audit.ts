import type { PlatformId } from "./integrations";

export interface GrowthAuditResult {
  opportunityScore: number;
  postingConsistency: number;
  recommendedFrequency: string;
  bestFormat: string;
  bestWindow: string;
  engagementTrend: string;
}

export const growthAuditResults: Partial<Record<PlatformId, GrowthAuditResult>> = {
  linkedin: {
    opportunityScore: 67,
    postingConsistency: 48,
    recommendedFrequency: "4-5 posts/week",
    bestFormat: "Educational carousel",
    bestWindow: "Tuesday · 10:00 AM",
    engagementTrend: "Trending up 12% over 30 days",
  },
  instagram: {
    opportunityScore: 61,
    postingConsistency: 41,
    recommendedFrequency: "5-6 posts/week",
    bestFormat: "Short-form Reel",
    bestWindow: "Wednesday · 6:30 PM",
    engagementTrend: "Flat over the last 30 days",
  },
  tiktok: {
    opportunityScore: 74,
    postingConsistency: 33,
    recommendedFrequency: "6-8 posts/week",
    bestFormat: "Behind-the-scenes clip",
    bestWindow: "Thursday · 7:00 PM",
    engagementTrend: "Trending up 24% over 30 days",
  },
  x: {
    opportunityScore: 52,
    postingConsistency: 57,
    recommendedFrequency: "8-10 posts/week",
    bestFormat: "Thread",
    bestWindow: "Monday · 9:15 AM",
    engagementTrend: "Down 6% over 30 days",
  },
  youtube: {
    opportunityScore: 69,
    postingConsistency: 29,
    recommendedFrequency: "1-2 videos/week",
    bestFormat: "Short",
    bestWindow: "Friday · 3:00 PM",
    engagementTrend: "Trending up 9% over 30 days",
  },
};

export function getGrowthAudit(platform: PlatformId): GrowthAuditResult {
  return growthAuditResults[platform] ?? growthAuditResults.linkedin!;
}
