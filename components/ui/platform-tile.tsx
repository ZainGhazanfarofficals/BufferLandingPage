import { PlatformIcon } from "@/components/icons/platform-icons";
import type { PlatformId } from "@/lib/content/integrations";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-9 w-9 rounded-lg",
  md: "h-11 w-11 rounded-xl",
  lg: "h-14 w-14 rounded-xl",
} as const;

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export function PlatformTile({
  id,
  size = "md",
  muted = false,
  className,
}: {
  id: PlatformId;
  size?: keyof typeof sizeClasses;
  muted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center border border-hairline bg-surface-card text-ink shadow-[0_2px_8px_rgba(33,49,48,0.06)]",
        sizeClasses[size],
        muted && "opacity-60",
        className
      )}
    >
      <PlatformIcon id={id} className={iconSizes[size]} />
    </div>
  );
}
