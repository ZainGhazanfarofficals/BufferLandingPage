import Link from "next/link";
import { BufferLogo } from "@/components/icons/buffer-logo";
import { PlatformIcon } from "@/components/icons/platform-icons";
import { LanguageSelector } from "@/components/layout/language-selector";
import { footerColumns, footerLegalLinks } from "@/lib/content/nav";

const footerSocialLinks = ["instagram", "facebook", "bluesky", "x", "linkedin", "threads"] as const;

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-white/70">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-medium uppercase tracking-wide text-white/40">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <BufferLogo className="h-9 w-auto text-primary" aria-label="Buffer" />
          <ul className="flex flex-wrap items-center gap-3">
            {footerSocialLinks.map((id) => (
              <li
                key={id}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white opacity-90 transition-opacity hover:opacity-100"
              >
                <PlatformIcon id={id} className="h-5 w-5" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-end border-t border-white/10 pt-8">
          <LanguageSelector />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Buffer. Built as a growth-engineering
            case study.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/50 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
