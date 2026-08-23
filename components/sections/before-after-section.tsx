import { ArrowRight, Check, X } from "lucide-react";
import { withoutBuffer, withBuffer } from "@/lib/content/before-after";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function BeforeAfterSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1000px]">
        <Reveal className="mx-auto max-w-[560px] text-center">
          <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            What actually changes
          </h2>
        </Reveal>

        <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
          <RevealGroup
            as="ul"
            className="flex flex-col gap-3 rounded-3xl border border-hairline bg-surface-soft p-6"
            stagger={0.14}
          >
            <li className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-text">
              Without Buffer
            </li>
            {withoutBuffer.map((item) => (
              <RevealItem
                key={item}
                as="li"
                className="flex items-center gap-3 rounded-2xl border border-hairline/70 bg-canvas px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-hairline-strong bg-surface-soft text-body-strong">
                  <X className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug text-body">{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <span className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-canvas text-primary-strong shadow-[0_2px_10px_rgba(33,49,48,0.12)] sm:flex">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>

          <RevealGroup
            as="ul"
            className="flex flex-col gap-3 rounded-3xl border border-primary/30 bg-primary/10 p-6"
            stagger={0.14}
          >
            <li className="mb-1 text-xs font-medium uppercase tracking-wide text-primary-strong">
              With Buffer
            </li>
            {withBuffer.map((item) => (
              <RevealItem
                key={item}
                as="li"
                className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-surface-card px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/40 text-primary-strong">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug text-body-strong">{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
