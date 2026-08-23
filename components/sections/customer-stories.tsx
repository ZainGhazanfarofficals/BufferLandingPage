"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import { useActivePersonaId } from "@/lib/persona-context";
import { growthExperiments } from "@/lib/experiments";
import { testimonials } from "@/lib/content/testimonials";
import { creatorCommunity } from "@/lib/content/creator-community";
import { personaIcons, personaAccentClasses } from "@/lib/persona-style";
import { personas } from "@/lib/content/personas";
import { PlatformIcon } from "@/components/icons/platform-icons";
import { CountUpNumber } from "@/components/motion/count-up-number";
import { track } from "@/lib/analytics";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function CustomerStories() {
  const personaId = useActivePersonaId();
  const activePersonaId = growthExperiments.personaPersonalization ? personaId : null;
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          track("testimonial_viewed", { location: "customer-stories" });
          hasTracked.current = true;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="customer-stories"
      ref={sectionRef}
      className="bg-canvas-warm px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-[1160px]">
        <Reveal>
          <h2 className="text-center text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Built for growing audiences, not vanity metrics
          </h2>
          <p className="mx-auto mt-2 max-w-[560px] text-center text-xs text-muted-text">
            Illustrative examples of the outcomes teams report — not verified Buffer customers.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3" stagger={0.1}>
          {testimonials.map((testimonial) => {
            const isActive = testimonial.persona === activePersonaId;
            const persona = personas.find((p) => p.id === testimonial.persona);
            const Icon = personaIcons[testimonial.persona];
            const accent = personaAccentClasses[persona?.accent ?? "blue"];
            return (
              <RevealItem key={testimonial.name}>
                <motion.figure
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border bg-surface-card p-6 shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(33,49,48,0.08)]",
                    isActive ? cn(accent.border, accent.bg) : "border-hairline"
                  )}
                >
                  <Quote
                    className={cn("absolute -right-2 -top-2 h-20 w-20 opacity-[0.08]", accent.iconText)}
                    aria-hidden="true"
                    strokeWidth={1}
                  />

                  <span className="absolute right-4 top-4 rounded-full bg-surface-soft px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-text">
                    Example
                  </span>

                  <div className="relative flex flex-col gap-4">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full",
                        accent.iconBg,
                        accent.iconText
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <blockquote className="text-base leading-relaxed text-body-strong">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="relative">
                    <dl className="grid grid-cols-3 gap-2 border-t border-hairline pt-4">
                      {testimonial.stats.map((stat) => (
                        <div key={stat.label}>
                          <dd className="text-lg font-semibold text-ink">
                            {typeof stat.value === "number" ? (
                              <CountUpNumber
                                value={stat.value}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                              />
                            ) : (
                              stat.value
                            )}
                          </dd>
                          <dt className="text-[11px] leading-tight text-muted-text">
                            {stat.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                    <figcaption className="mt-4 text-sm">
                      <span className="font-medium text-ink">{testimonial.name}</span>
                      <span className="block text-muted-text">{testimonial.role}</span>
                    </figcaption>
                  </div>
                </motion.figure>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            Real creators, real Buffer users
          </p>
          <RevealGroup
            className="mx-auto mt-6 flex max-w-[760px] flex-wrap justify-center gap-6"
            stagger={0.08}
          >
            {creatorCommunity.map((creator) => (
              <RevealItem key={creator.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="flex w-[220px] flex-col items-center gap-2 rounded-2xl border border-hairline bg-surface-card p-5 shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(33,49,48,0.08)]"
                >
                  <div className="relative">
                    <Image
                      src={creator.photo}
                      alt={creator.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-canvas"
                    />
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-hairline bg-surface-card text-ink">
                      <PlatformIcon id={creator.channel} className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <span className="text-sm font-medium text-ink">{creator.name}</span>
                  <span className="text-xs text-muted-text">
                    {creator.handle} · {creator.followers}
                  </span>
                </motion.div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
