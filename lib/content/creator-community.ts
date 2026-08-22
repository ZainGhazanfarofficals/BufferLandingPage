import type { PlatformId } from "./integrations";

export interface CreatorProfile {
  name: string;
  photo: string;
  channel: PlatformId;
  handle: string;
  followers: string;
}

export const creatorCommunity: CreatorProfile[] = [
  {
    name: "Rita Iglesias",
    photo: "/creators/rita-iglesias.webp",
    channel: "x",
    handle: "@rita_codes",
    followers: "34.9K followers",
  },
  {
    name: "Paul de La Baume",
    photo: "/creators/paul-de-la-baume.webp",
    channel: "linkedin",
    handle: "@Pauldelabaume",
    followers: "21K followers",
  },
  {
    name: "Lola Tatiana Veiga Bastos",
    photo: "/creators/yola-bastos.webp",
    channel: "instagram",
    handle: "@yola_bastos",
    followers: "14.6K followers",
  },
];
