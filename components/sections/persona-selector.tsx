"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { usePersona } from "@/lib/persona-context";
import { personas } from "@/lib/content/personas";
import { personaIcons, personaAccentClasses } from "@/lib/persona-style";
import { getTestimonialForPersona } from "@/lib/content/testimonials";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function PersonaSelector() {
  const { personaId, selectPersona } = usePersona();

  function handleSelect(id: (typeof personas)[number]["id"], target: string) {
    selectPersona(id, "persona-selector");
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const active = personaId ? personas.find((p) => p.id === personaId) : null;
  const testimonial = personaId ? getTestimonialForPersona(personaId) : null;

  return (
    <section id="persona-selector" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <h2 className="text-center text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            What are you trying to accomplish?
          </h2>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {personas.map((persona) => {
            const isActive = personaId === persona.id;
            const Icon = personaIcons[persona.id];
            const accent = personaAccentClasses[persona.accent];
            return (
              <RevealItem key={persona.id}>
                <motion.button
                  type="button"
                  onClick={() => handleSelect(persona.id, persona.scrollTarget)}
                  aria-pressed={isActive}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "group relative flex h-full w-full flex-col items-start gap-3 rounded-2xl border p-5 text-left shadow-[0_1px_2px_rgba(33,49,48,0.04)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-strong",
                    isActive
                      ? cn(accent.border, accent.bg)
                      : "border-hairline bg-surface-card hover:border-hairline-strong hover:bg-surface-soft"
                  )}
                >
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-canvas"
                    >
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </motion.span>
                  )}

                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full transition-transform group-hover:scale-105",
                      accent.iconBg,
                      accent.iconText
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span className="text-xs font-medium uppercase tracking-wide text-muted-text">
                    {persona.label}
                  </span>
                  <span className="-mt-2 text-base font-semibold text-ink">
                    {persona.headline}
                  </span>
                  <span className="text-sm leading-relaxed text-body">
                    {persona.description}
                  </span>

                  <span
                    className={cn(
                      "mt-1 flex items-center gap-1 text-xs font-medium",
                      isActive ? "text-ink" : "text-muted-text group-hover:text-ink"
                    )}
                  >
                    {isActive ? "Selected" : "Select"}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </motion.button>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <AnimatePresence mode="wait">
          {active && testimonial && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 grid grid-cols-1 items-center gap-6 rounded-2xl border border-hairline bg-canvas-warm p-6 sm:grid-cols-2 sm:p-8"
              role="status"
            >
              <div className="overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-[0_1px_2px_rgba(33,49,48,0.04)]">
                <Image
                  src={active.spotlightImage.src}
                  alt={active.spotlightImage.alt}
                  width={active.spotlightImage.width}
                  height={active.spotlightImage.height}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-start gap-3 text-left">
                <p className="text-sm font-medium text-body-strong">{active.proofPoint}</p>
                <p className="text-xs text-muted-text">
                  &ldquo;{testimonial.quote.slice(0, 90)}…&rdquo; — {testimonial.name}
                </p>
                <a
                  href={`#${active.scrollTarget}`}
                  onClick={() =>
                    track("integration_clicked", {
                      location: "persona-selector",
                      ctaVariant: active.id,
                    })
                  }
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-ink underline underline-offset-4 hover:no-underline"
                >
                  {active.ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
