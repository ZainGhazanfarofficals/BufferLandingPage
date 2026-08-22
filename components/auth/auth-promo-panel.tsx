import Image from "next/image";

export interface AuthPromoContent {
  badge: string;
  headline: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function AuthPromoPanel({ badge, headline, description, image }: AuthPromoContent) {
  return (
    <div className="hidden flex-col justify-center gap-10 bg-canvas-warm px-16 py-16 lg:flex">
      <div>
        <span className="inline-flex w-fit items-center rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-canvas">
          {badge}
        </span>
        <h2 className="mt-4 max-w-[380px] text-4xl font-medium tracking-tight text-ink">
          {headline}
        </h2>
        <p className="mt-3 max-w-[360px] text-base leading-relaxed text-body">
          {description}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-hairline shadow-[0_20px_50px_rgba(33,49,48,0.15)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
