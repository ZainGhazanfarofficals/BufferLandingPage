import Image from "next/image";
import type { TrustedByLogo } from "@/lib/content/trusted-by";

function LogoRow({ logos, ariaHidden }: { logos: TrustedByLogo[]; ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={ariaHidden}>
      {logos.map((logo) => (
        <Image
          key={logo.name}
          src={logo.src}
          alt={ariaHidden ? "" : logo.name}
          width={logo.width}
          height={logo.height}
          className="h-6 w-auto shrink-0 opacity-60 grayscale transition-opacity hover:opacity-90 sm:h-7"
        />
      ))}
    </div>
  );
}

export function LogoMarquee({ logos }: { logos: TrustedByLogo[] }) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee">
        <LogoRow logos={logos} />
        <LogoRow logos={logos} ariaHidden />
      </div>
    </div>
  );
}
