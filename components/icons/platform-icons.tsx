import type { SVGProps } from "react";
import type { PlatformId } from "@/lib/content/integrations";

type IconProps = SVGProps<SVGSVGElement>;

const ink = "#1a1a1a";

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#E4405F" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="#E4405F" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1.1" fill="#E4405F" />
    </Base>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="#0A66C2" />
      <circle cx="8.2" cy="8.4" r="1.15" fill="white" />
      <path d="M8.2 11v6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M11.6 17v-3.6c0-1.4 1-2.3 2.2-2.3s2 .8 2 2.2V17"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.6 11v6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    </Base>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M13.2 3.5v10.9a2.7 2.7 0 1 1-2.1-2.63"
        stroke={ink}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 6.4c.7 1.5 2 2.5 3.7 2.7"
        stroke={ink}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Base>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 5l14 14M19 5L5 19" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
    </Base>
  );
}

export function ThreadsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={ink}
        stroke="none"
      >
        @
      </text>
    </Base>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="4" fill="#FF0000" />
      <path d="M10.5 9.2v5.6l5-2.8z" fill="white" />
    </Base>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="8.5" fill="#1877F2" />
      <path
        d="M14 20v-6.2h2l.3-2.6H14V9.5c0-.8.2-1.3 1.3-1.3H16V5.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H9v2.6h1.9V20"
        fill="white"
      />
    </Base>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" fill="#E60023" />
      <path
        d="M9.8 17.2c.5-1.7 1-3.6 1.5-5.4a2.4 2.4 0 0 1-.2-1c0-1 .6-1.8 1.4-1.8.6 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.6-.2.7.4 1.3 1.1 1.3 1.3 0 2.2-1.7 2.2-3.7 0-1.6-1.1-2.7-2.9-2.7-2 0-3.3 1.5-3.3 3.2 0 .6.2 1 .4 1.3.1.1.1.2.1.4l-.2.9c0 .2-.2.2-.4.1-1-.4-1.5-1.6-1.5-2.9 0-2.2 1.9-4.8 5.5-4.8 2.9 0 4.9 2.1 4.9 4.4 0 3-1.7 5.2-4.1 5.2-.8 0-1.6-.5-1.9-1-.4 1.7-.7 2.9-1 3.4"
        fill="white"
      />
    </Base>
  );
}

export function BlueskyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M7 5.5c2.6 1.7 4 3.7 5 5.8 1-2.1 2.4-4.1 5-5.8.9 3.4.4 8-1.6 9.8-1.2 1.1-2.6 1.1-3.4.3-.8.8-2.2.8-3.4-.3C6.6 13.5 6.1 8.9 7 5.5z"
        fill="#1185FE"
      />
    </Base>
  );
}

export function MastodonIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M7 6.6c2.8-1.3 7.2-1.3 10 0 1 2.8 1 6.4-.2 8.6-1.6 1-4.6 1.5-6.3.4l.1-1.7c1.5.6 3.7.4 4.5-.4.3-.4.4-1 .4-1.9-1.3.9-3 1.1-4.5 1.1s-3.2-.2-4.5-1.1c0 .9.1 1.5.4 1.9.4.5 1.2.8 2.1.9"
        stroke="#6364FF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 6.6C6 9.4 6 12.9 7.1 15.7" stroke="#6364FF" strokeWidth="1.4" strokeLinecap="round" />
    </Base>
  );
}

export function GoogleBusinessIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M12 21s6.5-5.6 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21z"
        stroke="#4285F4"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.4" r="2.3" stroke="#4285F4" strokeWidth="1.6" />
    </Base>
  );
}

export const platformIconMap: Record<PlatformId, (props: IconProps) => React.ReactElement> = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  threads: ThreadsIcon,
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
  pinterest: PinterestIcon,
  bluesky: BlueskyIcon,
  mastodon: MastodonIcon,
  "google-business": GoogleBusinessIcon,
};

export function PlatformIcon({
  id,
  ...props
}: { id: PlatformId } & IconProps) {
  const Icon = platformIconMap[id];
  return <Icon {...props} />;
}
