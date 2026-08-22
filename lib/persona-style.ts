import { Sparkles, Store, Users, Target } from "lucide-react";
import type { PersonaId, PersonaAccent } from "@/lib/content/personas";

export const personaIcons: Record<PersonaId, typeof Sparkles> = {
  creator: Sparkles,
  "small-business": Store,
  agency: Users,
  "marketing-team": Target,
};

export const personaAccentClasses: Record<
  PersonaAccent,
  { iconBg: string; iconText: string; border: string; bg: string }
> = {
  pink: {
    iconBg: "bg-pastel-pink/60",
    iconText: "text-[#8a2f52]",
    border: "border-[#e88fae]",
    bg: "bg-pastel-pink/20",
  },
  yellow: {
    iconBg: "bg-pastel-yellow/60",
    iconText: "text-[#7a5b12]",
    border: "border-[#e0b854]",
    bg: "bg-pastel-yellow/20",
  },
  blue: {
    iconBg: "bg-pastel-blue/60",
    iconText: "text-[#1f5a8a]",
    border: "border-[#7fb3e0]",
    bg: "bg-pastel-blue/20",
  },
  lavender: {
    iconBg: "bg-pastel-lavender/60",
    iconText: "text-[#5b3f9c]",
    border: "border-[#b8a0e8]",
    bg: "bg-pastel-lavender/20",
  },
};
