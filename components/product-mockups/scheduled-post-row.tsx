import { PlatformTile } from "@/components/ui/platform-tile";
import type { PlatformId } from "@/lib/content/integrations";
import { cn } from "@/lib/utils";

export interface ScheduledPost {
  platform: PlatformId;
  snippet: string;
  time: string;
  status: "Scheduled" | "Queued" | "Published";
}

const statusStyles: Record<ScheduledPost["status"], string> = {
  Scheduled: "bg-pastel-blue/50 text-body-strong",
  Queued: "bg-surface-soft text-body",
  Published: "bg-primary/60 text-ink",
};

export function ScheduledPostRow({ platform, snippet, time, status }: ScheduledPost) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-card px-3 py-2.5">
      <PlatformTile id={platform} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-ink">{snippet}</p>
        <p className="text-xs text-muted-text">{time}</p>
      </div>
      <span
        className={cn(
          "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium",
          statusStyles[status]
        )}
      >
        {status}
      </span>
    </div>
  );
}
