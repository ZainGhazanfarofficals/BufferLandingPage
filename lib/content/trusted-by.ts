export const activeUsersLabel = "100,000+ creators, brands, and agencies";

export interface TrustedByLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export const trustedByLogos: TrustedByLogo[] = [
  { name: "Metallica", src: "/social-proof/metallica.webp", width: 410, height: 140 },
  { name: "Benefit", src: "/social-proof/benefit.webp", width: 420, height: 140 },
  { name: "Wired", src: "/social-proof/wired.webp", width: 480, height: 97 },
  { name: "Semrush", src: "/social-proof/semrush.webp", width: 480, height: 64 },
  { name: "Crocs", src: "/social-proof/crocs.webp", width: 480, height: 88 },
  { name: "ElevenLabs", src: "/social-proof/elevenlabs.webp", width: 480, height: 63 },
  { name: "Pizza Hut", src: "/social-proof/pizza-hut.webp", width: 167, height: 140 },
  { name: "Vice", src: "/social-proof/vice.webp", width: 443, height: 140 },
  { name: "Clash of Clans", src: "/social-proof/clash-of-clans.webp", width: 305, height: 140 },
];

export interface OutcomeStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const outcomeStats: OutcomeStat[] = [
  { value: 3, suffix: "×", label: "more LinkedIn impressions" },
  { value: 6, suffix: "hrs", label: "saved every week" },
  { value: 12, label: "client accounts managed from one workspace" },
];
