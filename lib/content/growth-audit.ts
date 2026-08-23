import type { PlatformId } from "./integrations";

export type PostingFrequencyAnswer = "occasional" | "weekly" | "frequent" | "daily";
export type GoalAnswer = "grow-followers" | "engagement" | "save-time" | "look-professional";
export type TeamSizeAnswer = "solo" | "small-team" | "larger-team";

export interface AuditAnswers {
  platform: PlatformId;
  frequency: PostingFrequencyAnswer;
  goal: GoalAnswer;
  teamSize: TeamSizeAnswer;
}

export interface GrowthAuditResult {
  opportunityScore: number;
  postingConsistency: number;
  recommendedFrequency: string;
  bestFormat: string;
  bestWindow: string;
  engagementTrend: string;
  teamNote: string;
  recommendedFeatureHref: string;
  recommendedFeatureLabel: string;
}

interface PlatformProfile {
  opportunityScore: number;
  recommendedFrequency: string;
  bestFormat: string;
  bestWindow: string;
  engagementTrend: string;
}

const platformProfiles: Partial<Record<PlatformId, PlatformProfile>> = {
  linkedin: {
    opportunityScore: 67,
    recommendedFrequency: "4-5 posts/week",
    bestFormat: "Educational carousel",
    bestWindow: "Tuesday · 10:00 AM",
    engagementTrend: "Trending up 12% over 30 days",
  },
  instagram: {
    opportunityScore: 61,
    recommendedFrequency: "5-6 posts/week",
    bestFormat: "Short-form Reel",
    bestWindow: "Wednesday · 6:30 PM",
    engagementTrend: "Flat over the last 30 days",
  },
  tiktok: {
    opportunityScore: 74,
    recommendedFrequency: "6-8 posts/week",
    bestFormat: "Behind-the-scenes clip",
    bestWindow: "Thursday · 7:00 PM",
    engagementTrend: "Trending up 24% over 30 days",
  },
  x: {
    opportunityScore: 52,
    recommendedFrequency: "8-10 posts/week",
    bestFormat: "Thread",
    bestWindow: "Monday · 9:15 AM",
    engagementTrend: "Down 6% over 30 days",
  },
  youtube: {
    opportunityScore: 69,
    recommendedFrequency: "1-2 videos/week",
    bestFormat: "Short",
    bestWindow: "Friday · 3:00 PM",
    engagementTrend: "Trending up 9% over 30 days",
  },
};

const frequencyProfile: Record<PostingFrequencyAnswer, { postingConsistency: number; scoreDelta: number }> = {
  occasional: { postingConsistency: 22, scoreDelta: -8 },
  weekly: { postingConsistency: 45, scoreDelta: -2 },
  frequent: { postingConsistency: 68, scoreDelta: 4 },
  daily: { postingConsistency: 88, scoreDelta: 8 },
};

const teamNotes: Record<TeamSizeAnswer, string> = {
  solo: "Solo workflow — one queue keeps every channel in sync without extra tools.",
  "small-team": "At this size, a shared calendar usually saves more time than a formal approval step.",
  "larger-team": "With a team this size, unclear approvals are usually the bottleneck, not content ideas.",
};

const goalFeature: Record<GoalAnswer, { href: string; label: string }> = {
  "grow-followers": {
    href: "/features/best-time-to-post",
    label: "See the best times to post for your audience",
  },
  engagement: {
    href: "/features/social-media-analytics",
    label: "See what's actually driving engagement",
  },
  "save-time": {
    href: "/features/social-media-calendar",
    label: "Plan a month of posts in one sitting",
  },
  "look-professional": {
    href: "/features/social-media-calendar",
    label: "Keep every channel consistently on-brand",
  },
};

export const frequencyOptions: { value: PostingFrequencyAnswer; label: string }[] = [
  { value: "occasional", label: "A few times a month" },
  { value: "weekly", label: "1-2 times a week" },
  { value: "frequent", label: "3-5 times a week" },
  { value: "daily", label: "Daily" },
];

export const goalOptions: { value: GoalAnswer; label: string }[] = [
  { value: "grow-followers", label: "Grow my followers" },
  { value: "engagement", label: "Increase engagement" },
  { value: "save-time", label: "Save time" },
  { value: "look-professional", label: "Look more professional" },
];

export const teamSizeOptions: { value: TeamSizeAnswer; label: string }[] = [
  { value: "solo", label: "Just me" },
  { value: "small-team", label: "2-5 people" },
  { value: "larger-team", label: "6+ people" },
];

export function computeGrowthAudit(answers: AuditAnswers): GrowthAuditResult {
  const base = platformProfiles[answers.platform] ?? platformProfiles.linkedin!;
  const freq = frequencyProfile[answers.frequency];
  const feature = goalFeature[answers.goal];
  const opportunityScore = Math.max(1, Math.min(99, base.opportunityScore + freq.scoreDelta));

  return {
    opportunityScore,
    postingConsistency: freq.postingConsistency,
    recommendedFrequency: base.recommendedFrequency,
    bestFormat: base.bestFormat,
    bestWindow: base.bestWindow,
    engagementTrend: base.engagementTrend,
    teamNote: teamNotes[answers.teamSize],
    recommendedFeatureHref: feature.href,
    recommendedFeatureLabel: feature.label,
  };
}
