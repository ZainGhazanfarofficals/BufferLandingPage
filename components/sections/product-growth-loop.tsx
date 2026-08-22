import { PenLine, Send, MessageCircle, ChartLine, TrendingUp, ArrowRight } from "lucide-react";
import { growthLoopSteps } from "@/lib/content/growth-loop";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const icons = {
  create: PenLine,
  publish: Send,
  engage: MessageCircle,
  learn: ChartLine,
  improve: TrendingUp,
};

export function ProductGrowthLoop() {
  return (
    <section id="product-growth-loop" className="bg-canvas-warm px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            More than a scheduling tool
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            A complete loop for growing your audience
          </h2>
        </Reveal>

        <RevealGroup as="ol" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5" stagger={0.1}>
          {growthLoopSteps.map((step, index) => {
            const Icon = icons[step.id as keyof typeof icons];
            return (
              <RevealItem
                key={step.id}
                as="li"
                className="relative flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface-card p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(33,49,48,0.08)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/40 text-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-ink">{step.label}</span>
                <span className="text-xs leading-relaxed text-body">
                  {step.description}
                </span>
                {index < growthLoopSteps.length - 1 && (
                  <span
                    className="absolute -right-3.5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-surface-card text-primary-strong shadow-[0_1px_3px_rgba(33,49,48,0.1)] sm:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5 animate-flow-x" />
                  </span>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
