import { BufferLogo } from "@/components/icons/buffer-logo";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-canvas px-5"
    >
      <BufferLogo className="h-8 w-auto animate-loading-pulse text-ink" />
      <div className="h-1 w-40 overflow-hidden rounded-full bg-hairline">
        <div className="h-full w-1/3 animate-loading-sweep rounded-full bg-primary" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
