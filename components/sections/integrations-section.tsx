"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar, Clock, ChartLine, type LucideIcon } from "lucide-react";
import { PlatformTile } from "@/components/ui/platform-tile";
import { PlatformIcon } from "@/components/icons/platform-icons";
import { platforms, seoLandingLinks, toolIntegrations } from "@/lib/content/integrations";
import { track } from "@/lib/analytics";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const genericLinkIcons: Record<string, LucideIcon> = {
  "social-media-calendar": Calendar,
  "best-time-to-post": Clock,
  "social-media-analytics": ChartLine,
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            One workspace for every network that matters
          </h2>
          <p className="mt-3 text-base leading-relaxed text-body">
            Create once → customize for each network → publish everywhere.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-8 flex flex-wrap items-center justify-center gap-3" stagger={0.04}>
          {platforms.map((platform) => (
            <RevealItem key={platform.id} as="li" className="flex flex-col items-center gap-1.5">
              <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.15 }}>
                <PlatformTile id={platform.id} size="lg" />
              </motion.div>
              <span className="text-xs text-muted-text">{platform.name}</span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            Plus the tools you already use
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {toolIntegrations.map((tool) => (
              <li key={tool.name} title={tool.name}>
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={tool.size}
                  height={tool.size}
                  className="h-9 w-9 rounded-lg shadow-[0_1px_2px_rgba(33,49,48,0.06)] transition-transform hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {seoLandingLinks.map((link) => {
            const GenericIcon = genericLinkIcons[link.slug];
            return (
              <RevealItem key={link.title}>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.15 }} className="h-full">
                  <Link
                    href={link.href}
                    onClick={() =>
                      track("integration_clicked", {
                        location: "integrations-section",
                        ctaVariant: link.title,
                      })
                    }
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-hairline bg-surface-card p-5 transition-colors hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft text-ink">
                        {link.platform ? (
                          <PlatformIcon id={link.platform} className="h-5 w-5" />
                        ) : GenericIcon ? (
                          <GenericIcon className="h-5 w-5" aria-hidden="true" />
                        ) : null}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-muted-text transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-base font-semibold text-ink">
                      {link.title}
                    </span>
                    <p className="-mt-1.5 text-sm leading-relaxed text-body">
                      {link.description}
                    </p>
                  </Link>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
