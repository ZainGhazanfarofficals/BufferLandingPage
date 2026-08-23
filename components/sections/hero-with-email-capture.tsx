"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";

export function HeroWithEmailCapture({ ctaLabel }: { ctaLabel: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("hero_cta_clicked", {
      location: "hero",
      ctaVariant: "email-capture",
      experimentVariant: "email-capture",
    });
    router.push(`/signup?email=${encodeURIComponent(email)}`);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[560px] flex-col gap-2 rounded-2xl border border-hairline-strong bg-surface-card p-1.5 sm:flex-row sm:rounded-full"
      >
        <label htmlFor="hero-email" className="sr-only">
          Work email address
        </label>
        <input
          id="hero-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-11 w-full flex-1 rounded-full bg-transparent px-4 text-sm text-ink placeholder:text-muted-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-full bg-primary px-6 text-sm font-medium text-ink hover:bg-primary/85"
        >
          {ctaLabel} →
        </button>
      </form>
      <p className="text-xs text-muted-text">
        This creates your free Buffer account — not a newsletter signup.
      </p>
    </div>
  );
}
