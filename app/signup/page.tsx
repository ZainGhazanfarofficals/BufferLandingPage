import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";
import { BufferLogo } from "@/components/icons/buffer-logo";

export const metadata: Metadata = {
  title: "Create your free account",
  description: "Create your free Buffer account. No credit card required.",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-canvas-warm px-5 py-16">
      <Link href="/" className="mb-8 text-ink">
        <span className="sr-only">Buffer</span>
        <BufferLogo className="h-6 w-auto" />
      </Link>
      <div className="w-full max-w-[420px] rounded-3xl border border-hairline bg-surface-card p-8 shadow-[0_6px_24px_rgba(33,49,48,0.06)]">
        <Suspense fallback={null}>
          <SignupForm />
        </Suspense>
      </div>
    </main>
  );
}
