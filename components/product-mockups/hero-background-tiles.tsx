"use client";

import { useEffect, useRef, type RefObject } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { PlatformIcon } from "@/components/icons/platform-icons";
import { heroTiles, type HeroTileSpec } from "@/lib/content/hero-tiles";
import { cn } from "@/lib/utils";

const ACTIVATION_RADIUS = 140;
const MAX_PULL = 12;

function FloatingTile({
  tile,
  containerRef,
  mouseX,
  mouseY,
  reduced,
}: {
  tile: HeroTileSpec;
  containerRef: RefObject<HTMLDivElement | null>;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  reduced: boolean;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const restPos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (reduced) return;

    function measure() {
      if (!tileRef.current || !containerRef.current) return;
      const tileRect = tileRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      restPos.current = {
        x: tileRect.left - containerRect.left + tileRect.width / 2,
        y: tileRect.top - containerRect.top + tileRect.height / 2,
      };
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [containerRef, reduced]);

  const offset = useTransform(() => {
    const mx = mouseX.get();
    const my = mouseY.get();
    const dx = mx - restPos.current.x;
    const dy = my - restPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > ACTIVATION_RADIUS || dist === 0) return { x: 0, y: 0 };
    const pull = (1 - dist / ACTIVATION_RADIUS) * MAX_PULL;
    return { x: (dx / dist) * pull, y: (dy / dist) * pull };
  });
  const offsetX = useTransform(offset, (v) => v.x);
  const offsetY = useTransform(offset, (v) => v.y);
  const springX = useSpring(offsetX, { stiffness: 300, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 300, damping: 20 });

  return (
    <motion.div
      ref={tileRef}
      style={{
        top: tile.top,
        left: tile.left,
        width: tile.size,
        height: tile.size,
        x: reduced ? 0 : springX,
        y: reduced ? 0 : springY,
      }}
      className={cn(
        "absolute flex items-center justify-center rounded-xl border border-hairline bg-surface-card shadow-[0_4px_14px_rgba(33,49,48,0.08)]",
        tile.depth === "far" && "opacity-75 blur-[0.5px]"
      )}
    >
      {tile.platform ? (
        <PlatformIcon id={tile.platform} className="h-3/5 w-3/5" />
      ) : tile.tool ? (
        <Image
          src={tile.tool.src}
          alt=""
          width={tile.size}
          height={tile.size}
          className="h-3/4 w-3/4 rounded-md object-contain"
        />
      ) : null}
    </motion.div>
  );
}

export function HeroBackgroundTiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduced) return;

    function handlePointerMove(event: PointerEvent) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY, reduced]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 40%, transparent 40%, black 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 40%, transparent 40%, black 85%)",
          opacity: 0.5,
        }}
      />
      {heroTiles.map((tile) => (
        <FloatingTile
          key={tile.id}
          tile={tile}
          containerRef={containerRef}
          mouseX={mouseX}
          mouseY={mouseY}
          reduced={reduced}
        />
      ))}
    </div>
  );
}
