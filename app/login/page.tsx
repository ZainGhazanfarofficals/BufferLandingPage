import Link from "next/link";
import type { Metadata } from "next";
import { BufferLogo } from "@/components/icons/buffer-logo";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Buffer account.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-canvas-warm px-5 py-16">
      <Link href="/" className="mb-8 text-ink">
        <span className="sr-only">Buffer</span>
        <BufferLogo className="h-6 w-auto" />
      </Link>
      <div className="w-full max-w-[420px] rounded-3xl border border-hairline bg-surface-card p-8 shadow-[0_6px_24px_rgba(33,49,48,0.06)]">
        <h1 className="text-center text-2xl font-medium tracking-tight text-ink">
          Log in to Buffer
        </h1>

        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-email" className="text-sm font-medium text-body-strong">
              Email address
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-12 rounded-xl border border-hairline-strong bg-surface-card px-4 text-sm text-ink placeholder:text-muted-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-password" className="text-sm font-medium text-body-strong">
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="h-12 rounded-xl border border-hairline-strong bg-surface-card px-4 text-sm text-ink placeholder:text-muted-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-full bg-primary text-[15px] font-medium text-ink hover:bg-primary/85"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-text">
          New to Buffer?{" "}
          <Link href="/signup" className="font-medium text-ink underline underline-offset-4">
            Create a free account
          </Link>
        </p>
      </div>
    </main>
  );
}
