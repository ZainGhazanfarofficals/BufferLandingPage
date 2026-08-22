import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductScreenshot({
  src,
  alt,
  width,
  height,
  priority,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-[0_6px_20px_rgba(33,49,48,0.08)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 560px, 90vw"
        className="h-auto w-full"
      />
    </div>
  );
}
