import type { ReactNode } from "react";
import Link from "next/link";
import { BufferLogo } from "@/components/icons/buffer-logo";
import { AuthPromoPanel, type AuthPromoContent } from "@/components/auth/auth-promo-panel";

export function AuthLayout({
  children,
  promo,
}: {
  children: ReactNode;
  promo: AuthPromoContent;
}) {
  return (
    <main className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-canvas px-5 py-16">
        <Link href="/" className="mb-8 text-ink">
          <span className="sr-only">Buffer</span>
          <BufferLogo className="h-6 w-auto" />
        </Link>
        <div className="w-full max-w-[420px] rounded-3xl border border-hairline bg-surface-card p-8 shadow-[0_6px_24px_rgba(33,49,48,0.06)]">
          {children}
        </div>
      </div>
      <AuthPromoPanel {...promo} />
    </main>
  );
}
