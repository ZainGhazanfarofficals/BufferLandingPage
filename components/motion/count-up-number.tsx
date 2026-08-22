"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { cn } from "@/lib/utils";

export function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => setDisplayValue(value)}
      viewport={{ once: true, margin: "-40px" }}
      className={cn("inline-flex items-baseline", className)}
    >
      {prefix && <span className="mr-0.5">{prefix}</span>}
      <AnimatedNumber value={displayValue} />
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </motion.span>
  );
}
