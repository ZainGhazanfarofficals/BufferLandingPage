import type { PlatformId } from "./integrations";

export interface HeroTileSpec {
  id: string;
  top: string;
  left: string;
  size: number;
  depth: "near" | "far";
  platform?: PlatformId;
  tool?: { name: string; src: string };
}

export const heroTiles: HeroTileSpec[] = [
  { id: "instagram", top: "6%", left: "9%", size: 64, depth: "near", platform: "instagram" },
  { id: "canva", top: "23%", left: "3%", size: 60, depth: "near", tool: { name: "Canva", src: "/tool-logos/canva.webp" } },
  { id: "bluesky", top: "44%", left: "11%", size: 52, depth: "far", platform: "bluesky" },
  { id: "chatgpt", top: "65%", left: "5%", size: 60, depth: "near", tool: { name: "ChatGPT", src: "/tool-logos/chatgpt.webp" } },
  { id: "linkedin", top: "84%", left: "13%", size: 52, depth: "far", platform: "linkedin" },

  { id: "x", top: "4%", left: "89%", size: 62, depth: "near", platform: "x" },
  { id: "zapier", top: "24%", left: "95%", size: 60, depth: "near", tool: { name: "Zapier", src: "/tool-logos/zapier.webp" } },
  { id: "pinterest", top: "46%", left: "87%", size: 52, depth: "far", platform: "pinterest" },
  { id: "claude", top: "67%", left: "93%", size: 62, depth: "near", tool: { name: "Claude", src: "/tool-logos/claude.webp" } },
  { id: "youtube", top: "85%", left: "86%", size: 52, depth: "far", platform: "youtube" },
];
