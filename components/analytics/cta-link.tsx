"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { track, type AnalyticsEvent, type AnalyticsPayload } from "@/lib/analytics";
import type { VariantProps } from "class-variance-authority";

type ButtonVariants = VariantProps<typeof buttonVariants>;

const MotionLink = motion.create(Link);

type DragConflictProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd";

interface CtaLinkProps
  extends Omit<ComponentProps<typeof Link>, "onClick" | DragConflictProps>,
    ButtonVariants,
    AnalyticsPayload {
  event: AnalyticsEvent;
  location: string;
  platform?: string | null;
}

export function CtaLink({
  event,
  location,
  ctaVariant,
  experimentVariant,
  persona,
  platform,
  variant,
  size,
  className,
  href,
  ...rest
}: CtaLinkProps) {
  return (
    <MotionLink
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={() =>
        track(event, { location, ctaVariant, experimentVariant, persona, platform })
      }
      {...rest}
    />
  );
}
