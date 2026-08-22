"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { primaryCtaClass } from "@/lib/cta-styles";

export function SignupForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [submitted, setSubmitted] = useState(false);
  const hasStartedRef = useRef(false);

  function handleFocus() {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    track("signup_started", { location: "signup-page" });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("signup_completed", { location: "signup-page" });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-medium tracking-tight text-ink">
          You&rsquo;re in, {email.split("@")[0] || "there"}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-body">
          Your free Buffer workspace is ready. The next step in a real signup
          flow would be connecting your first channel.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-hairline-strong px-5 text-sm font-medium text-ink hover:bg-surface-soft"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-2xl font-medium tracking-tight text-ink">
        Create your free Buffer account
      </h1>
      <p className="mt-2 text-center text-sm text-body">
        Free forever · No credit card required · Connect up to 3 channels
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="signup-email" className="text-sm font-medium text-body-strong">
            Email address
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onFocus={handleFocus}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-xl border border-hairline-strong bg-surface-card px-4 text-sm text-ink placeholder:text-muted-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="signup-password" className="text-sm font-medium text-body-strong">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            onFocus={handleFocus}
            className="h-12 rounded-xl border border-hairline-strong bg-surface-card px-4 text-sm text-ink placeholder:text-muted-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
            placeholder="At least 8 characters"
          />
        </div>

        <button type="submit" className={`${primaryCtaClass} mt-2 w-full`}>
          Create free account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-text">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-ink underline underline-offset-4">
          Log in
        </Link>
      </p>
    </>
  );
}
