"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function PageViewTracker({ location }: { location: string }) {
  useEffect(() => {
    track("landing_page_view", { location });
  }, [location]);

  return null;
}
