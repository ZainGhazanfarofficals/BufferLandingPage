"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CtaLink } from "@/components/analytics/cta-link";
import { BufferLogo } from "@/components/icons/buffer-logo";
import { primaryNavLinks } from "@/lib/content/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-canvas/95 backdrop-blur transition-shadow",
        scrolled
          ? "border-hairline shadow-[0_1px_0_rgba(33,49,48,0.04)]"
          : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
          <Link
            href="/"
            className="text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-strong rounded"
          >
            <span className="sr-only">Buffer</span>
            <BufferLogo className="h-6 w-auto" />
          </Link>
        </motion.div>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {primaryNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              className="relative py-1 text-sm font-medium text-body-strong transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-strong rounded"
            >
              {link.label}
              {hoveredLink === link.label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-ink"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
          >
            Log in
          </Link>
          <CtaLink
            href="/signup"
            event="final_cta_clicked"
            location="header"
            ctaVariant="start-free"
            className="h-10 rounded-full bg-primary px-5 text-sm font-medium text-ink hover:bg-primary/85"
          >
            Start for free
          </CtaLink>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong md:hidden"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 90 : 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-hairline bg-canvas md:hidden"
          >
            <div className="px-5 py-6">
              <nav aria-label="Mobile primary" className="flex flex-col gap-1">
                {primaryNavLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-body-strong hover:bg-surface-soft hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-3 border-t border-hairline pt-4">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-12 items-center justify-center rounded-full border border-hairline-strong text-base font-medium text-ink"
                >
                  Log in
                </Link>
                <CtaLink
                  href="/signup"
                  event="final_cta_clicked"
                  location="header-mobile-menu"
                  ctaVariant="start-free"
                  className="flex h-12 items-center justify-center rounded-full bg-primary text-base font-medium text-ink"
                >
                  Start for free
                </CtaLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
