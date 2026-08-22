import { Suspense } from "react";
import type { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";
import { AuthLayout } from "@/components/auth/auth-layout";

export const metadata: Metadata = {
  title: "Create your free account",
  description: "Create your free Buffer account. No credit card required.",
};

const promo = {
  badge: "New",
  headline: "Introducing Insights",
  description: "Analytics that actually tell you what to post next.",
  image: {
    src: "/screenshots/insights.webp",
    alt: "Buffer Insights dashboard showing top-performing posts and engagement trends",
    width: 1024,
    height: 783,
  },
};

export default function SignupPage() {
  return (
    <AuthLayout promo={promo}>
      <Suspense fallback={null}>
        <SignupForm />
      </Suspense>
    </AuthLayout>
  );
}
