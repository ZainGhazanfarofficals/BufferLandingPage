export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface StepEntry {
  title: string;
  description: string;
}

export interface TableRow {
  platform: string;
  window: string;
  rationale: string;
}

export interface ListEntry {
  title: string;
  summary: string;
}

interface ResourcePageBase {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
}

export interface GlossaryPage extends ResourcePageBase {
  kind: "glossary";
  entries: GlossaryEntry[];
}

export interface StepsPage extends ResourcePageBase {
  kind: "steps";
  steps: StepEntry[];
}

export interface TablePage extends ResourcePageBase {
  kind: "table";
  rows: TableRow[];
}

export interface ListPage extends ResourcePageBase {
  kind: "list";
  items: ListEntry[];
}

export type ResourcePage = GlossaryPage | StepsPage | TablePage | ListPage;

export const resourcePages: ResourcePage[] = [
  {
    slug: "marketing-tools",
    title: "Free Marketing Tools",
    eyebrow: "Resources",
    intro:
      "A handful of reference tools worth bookmarking, the kind you check before you post rather than after.",
    kind: "list",
    items: [
      {
        title: "Hashtag limits by platform",
        summary:
          "Instagram allows up to 30 hashtags, but posts with 3–5 well-chosen ones tend to perform just as well. LinkedIn and TikTok both see the best results around 3–6.",
      },
      {
        title: "Caption length guide",
        summary:
          "Instagram truncates after the first ~125 characters, so lead with the point. On X, captions under 100 characters get more engagement. LinkedIn thought-leadership posts do best between 150–300 words.",
      },
      {
        title: "Image size cheat sheet",
        summary:
          "Instagram feed: 1080×1350 (4:5). Stories and Reels: 1080×1920 (9:16). LinkedIn feed: 1200×627. Pinterest Pin: 1000×1500.",
      },
      {
        title: "A content calendar that survives a busy month",
        summary:
          "Five columns is plenty: platform, post type, one-line caption draft, asset status, and publish time. Anything more detailed tends to get abandoned by week three.",
      },
    ],
  },
  {
    slug: "glossary",
    title: "Social Media Glossary",
    eyebrow: "Resources",
    intro:
      "The terms that come up constantly in social media marketing, defined plainly.",
    kind: "glossary",
    entries: [
      {
        term: "Engagement rate",
        definition:
          "The percentage of people who interact with a post — likes, comments, shares, saves — relative to how many saw it.",
      },
      {
        term: "Reach",
        definition:
          "The number of unique accounts that saw a piece of content, regardless of whether they engaged with it.",
      },
      {
        term: "Impressions",
        definition:
          "The total number of times content was displayed, including repeat views by the same account.",
      },
      {
        term: "CTR (click-through rate)",
        definition:
          "The share of viewers who clicked a link, out of everyone who saw it.",
      },
      {
        term: "UGC (user-generated content)",
        definition:
          "Photos, videos, or posts created by customers or fans rather than the brand itself.",
      },
      {
        term: "Algorithm",
        definition:
          "The ranking system a platform uses to decide which content to show each person, and in what order.",
      },
      {
        term: "Evergreen content",
        definition:
          "Posts that stay useful and relevant long after they're published, unlike time-sensitive news or trends.",
      },
      {
        term: "Hook",
        definition:
          "The first line or first second or two of a post, designed to stop someone from scrolling past it.",
      },
      {
        term: "Content pillar",
        definition:
          "A core theme or topic a brand consistently posts about, so its content stays recognizable over time.",
      },
      {
        term: "Repurposing",
        definition:
          "Adapting one piece of content into different formats for multiple platforms, instead of creating from scratch each time.",
      },
    ],
  },
  {
    slug: "marketing-101",
    title: "Social Media Marketing 101",
    eyebrow: "Resources",
    intro: "The basics, in the order they actually matter.",
    kind: "steps",
    steps: [
      {
        title: "Set one measurable goal",
        description:
          "\"Growth\" and \"engagement\" are directions, not goals. Pick a number — 500 new followers, a 5% engagement rate — and a deadline.",
      },
      {
        title: "Know who you're actually talking to",
        description:
          "Write down three real details about your audience: what platform they're on, what they scroll for, and what would make them stop.",
      },
      {
        title: "Pick 3–5 content pillars",
        description:
          "Themes you can return to every week without running out of ideas, so you're never starting from a blank page.",
      },
      {
        title: "Post consistently, not constantly",
        description:
          "A schedule you can sustain for a year beats a burst you can't keep up for a month.",
      },
      {
        title: "Reply before you post again",
        description:
          "Comments and DMs are where relationships actually form. Audiences notice when a brand only broadcasts.",
      },
      {
        title: "Review what worked, every month",
        description:
          "Put your best and worst-performing posts side by side and ask what's actually different between them.",
      },
    ],
  },
  {
    slug: "best-time",
    title: "Best Time to Post",
    eyebrow: "Resources",
    intro:
      "General starting points drawn from broad platform behavior, not a guarantee. Once you have a posting history, your own analytics are always the better signal.",
    kind: "table",
    rows: [
      {
        platform: "Instagram",
        window: "Weekdays, 10am–1pm local time",
        rationale: "Most feeds get checked over lunch breaks and mid-morning downtime.",
      },
      {
        platform: "LinkedIn",
        window: "Tuesday–Thursday, 8–10am",
        rationale: "Professionals scan LinkedIn early, before the workday's meetings start.",
      },
      {
        platform: "X",
        window: "Weekdays, 8–10am and 6–9pm",
        rationale: "Activity spikes around commute times and evening catch-up scrolling.",
      },
      {
        platform: "TikTok",
        window: "Evenings, 7–11pm",
        rationale: "Most viewing happens during winding-down hours, especially on weekdays.",
      },
      {
        platform: "Facebook",
        window: "Weekdays, 1–4pm",
        rationale: "Afternoon lulls at work drive a second wave of browsing.",
      },
      {
        platform: "Pinterest",
        window: "Weekends, 8–11pm",
        rationale: "Planning-oriented browsing peaks when people have unhurried personal time.",
      },
    ],
  },
  {
    slug: "blog",
    title: "Social Media Resources",
    eyebrow: "Resources",
    intro: "A running collection of shorter reads on the stuff that actually moves the needle.",
    kind: "list",
    items: [
      {
        title: "Why posting consistency beats posting frequency",
        summary:
          "The accounts that grow steadily rarely post the most. They post on a schedule their audience can predict.",
      },
      {
        title: "How to build a content calendar you'll actually stick to",
        summary:
          "Most calendars fail because they're too detailed to maintain. Here's a lighter structure that survives a busy month.",
      },
      {
        title: "Reading your analytics without drowning in metrics",
        summary:
          "Three numbers actually matter for most accounts. Everything else is noise until you have a specific question to answer.",
      },
      {
        title: "What to do when a post underperforms",
        summary:
          "One flat post isn't a trend. Here's how to tell the difference between a fluke and a pattern.",
      },
      {
        title: "Turning one piece of content into a week of posts",
        summary:
          "A practical breakdown of repurposing a single video or article across five platforms without it feeling recycled.",
      },
    ],
  },
];

export function getResourcePage(slug: string): ResourcePage | undefined {
  return resourcePages.find((page) => page.slug === slug);
}
