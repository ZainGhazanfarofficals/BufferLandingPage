import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { PersonaProvider } from "@/lib/persona-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Buffer — Grow your audience without living on social media",
    template: "%s · Buffer",
  },
  description:
    "Plan, create, publish, engage, and understand what works across Instagram, LinkedIn, TikTok, X, and every other channel from one simple workspace. Free forever, no credit card required.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Buffer",
    title: "Grow your audience without living on social media",
    description:
      "Plan, create, publish, engage, and understand what works across all your social channels from one simple workspace.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow your audience without living on social media",
    description:
      "Plan, create, publish, engage, and understand what works across all your social channels from one simple workspace.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-canvas"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <PersonaProvider>{children}</PersonaProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
