import { PlatformTile } from "@/components/ui/platform-tile";
import { ScheduledPostRow } from "@/components/product-mockups/scheduled-post-row";
import { WorkflowStepper } from "@/components/product-mockups/workflow-stepper";
import type { PlatformId } from "@/lib/content/integrations";

const channelRow: PlatformId[] = [
  "instagram",
  "linkedin",
  "tiktok",
  "x",
  "threads",
  "youtube",
  "facebook",
  "pinterest",
  "bluesky",
];

const upcomingPosts = [
  {
    platform: "linkedin" as const,
    snippet: "5 lessons from our first year as a two-person agency",
    time: "Tue · 10:00 AM",
    status: "Scheduled" as const,
  },
  {
    platform: "instagram" as const,
    snippet: "Behind the scenes: how the roastery sources single-origin beans",
    time: "Wed · 6:30 PM",
    status: "Queued" as const,
  },
  {
    platform: "tiktok" as const,
    snippet: "60-second walkthrough of our new spring menu",
    time: "Thu · 7:00 PM",
    status: "Scheduled" as const,
  },
  {
    platform: "x" as const,
    snippet: "Thread: what we changed after reading 200 client emails",
    time: "Fri · 9:15 AM",
    status: "Queued" as const,
  },
];

export function HeroDashboard() {
  return (
    <div
      id="product-demo"
      className="scroll-mt-24 rounded-2xl border border-hairline bg-canvas-warm p-3 shadow-[0_6px_20px_rgba(33,49,48,0.08)] sm:p-4"
    >
      <div className="rounded-xl border border-hairline bg-surface-card p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            Upcoming · all channels
          </p>
          <div className="hidden gap-1.5 sm:flex">
            {channelRow.map((id) => (
              <PlatformTile key={id} id={id} size="sm" />
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {upcomingPosts.map((post) => (
            <ScheduledPostRow key={post.snippet} {...post} />
          ))}
        </div>

        <div className="mt-5 border-t border-hairline pt-4">
          <WorkflowStepper />
        </div>
      </div>
    </div>
  );
}
