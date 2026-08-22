# Buffer.com — Design System Reference

> Surface: Marketing website
> Reference: Buffer.com
> Version: August 2026
> Direction: Calm social workspace · warm neutrals · Buffer green · playful pastel utility

---

## Overview

Buffer's current marketing surface is built around a **warm, calm, creator-focused SaaS aesthetic** rather than the saturated blue-first identity associated with its older marketing system.

The visual system is intentionally quiet. A warm off-white canvas gives product screenshots, social-network icons, creator imagery, pastel feature surfaces, and the Buffer green enough contrast to provide personality without making the page feel visually noisy.

The defining visual relationship is:

**warm neutral canvas → dark green-black typography → Buffer green action → pastel product moments**

The current design language was introduced to make Buffer feel calmer, clearer, more flexible, and more spacious. Buffer describes the system as using warm neutral tones, a vibrant green, playful pastel accents, softer shapes, lighter typography, and simpler illustrations.

The homepage reinforces this direction through a centered hero surrounded by floating social-network tiles positioned on a subtle grid. The decorative tiles provide the personality while the actual interface remains extremely simple.

### Key Characteristics

* Warm off-white / cream page canvas instead of clinical pure white.
* Very dark green-black typography instead of pure black.
* **Buffer Green** is the dominant action and positive-attention color.
* Rounded rectangular controls rather than sharp industrial geometry.
* Pill-shaped CTAs are common.
* Soft pastel green, pink, blue, yellow, lavender, and coral surfaces.
* Product screenshots are treated as the primary proof mechanism.
* Social-platform icons function as decorative brand vocabulary.
* Thin, warm-gray borders rather than heavy card outlines.
* Very little traditional shadow.
* Large amounts of whitespace.
* Headlines use sentence case rather than uppercase.
* Typography feels lighter and friendlier than Buffer's historical Poppins-heavy identity.
* Illustrations and decorative elements remain secondary to content.
* Motion is playful but restrained and accessibility-aware.

---

## Colors

> The current palette below is based on Buffer's official 2026 redesign imagery and current homepage visuals. Exact production CSS token names are not publicly documented, so semantic token names below are implementation recommendations rather than Buffer's internal names.

### Brand & Accent

* **Buffer Green** (`{colors.primary}` — `#B0EC9C` sampled):
  The dominant current brand/action color. Used for primary CTAs, "+ New" actions, small progress indicators, positive states, and major attention anchors.

* **Buffer Green Strong** (`{colors.primary-strong}`):
  Use a darker accessible derivative of Buffer Green for active text, focus states, or cases where the light green does not provide sufficient contrast.

* **Pastel Pink** (`{colors.pastel-pink}` — `#FFCBE0` sampled):
  Used for editorial/product storytelling surfaces.

* **Pastel Blue** (`{colors.pastel-blue}` — `#ADDAFF` sampled):
  Used to differentiate content/product examples without becoming a system-level action color.

* **Pastel Yellow** (`{colors.pastel-yellow}` — `#FFD889` sampled):
  Used for friendly, optimistic supporting moments.

* **Pastel Lavender** (`{colors.pastel-lavender}` — approximately `#D4C2FF`):
  Frequently suited to Create / AI / ideation surfaces.

* **Pastel Coral** (`{colors.pastel-coral}` — approximately `#FFB2A8`):
  Suitable for Publish-oriented feature bands and editorial cards.

Buffer's own 2026 imagery visibly combines the green with pink, blue, yellow, lavender, and coral surfaces.

### Surface

* **Canvas** (`{colors.canvas}` — approximately `#FEFEFB`):
  Main marketing page floor. Almost white, but slightly warm.

* **Canvas Warm** (`{colors.canvas-warm}` — approximately `#F1F1E9`):
  Stronger cream/neutral surface used around product storytelling.

* **Surface Soft** (`{colors.surface-soft}` — approximately `#F7F6F3`):
  Navigation, app chrome, secondary containers and quiet cards.

* **Surface Card** (`{colors.surface-card}` — `#FFFFFF`):
  Cards, floating social icons, forms and product-window surfaces.

* **Surface Dark** (`{colors.surface-dark}` — approximately `#213130`):
  Dark contrast bands and footer-style surfaces.

The warm-neutral + green combination is one of the explicit foundations of Buffer's 2026 visual refresh.

### Hairlines & Borders

* **Hairline** (`{colors.hairline}` — approximately `#E7E7E1`):
  Default card and input borders.

* **Hairline Strong** (`{colors.hairline-strong}` — approximately `#CFCFC8`):
  Stronger form boundaries and selected states.

Borders should feel warm and low-contrast.

Do not use cold `#E5E7EB` Tailwind-gray everywhere; that makes the page feel like a generic SaaS template.

### Text

* **Ink** (`{colors.ink}` — approximately `#213130`):
  Main headings, navigation and important labels.

* **Body Strong** (`{colors.body-strong}` — approximately `#344342`):
  Lead paragraphs.

* **Body** (`{colors.body}` — approximately `#596664`):
  Default secondary copy.

* **Muted** (`{colors.muted}` — approximately `#89918F`):
  Legal text, captions and low-priority metadata.

* **On Dark** (`{colors.on-dark}` — `#FFFFFF` / warm white):
  Text over dark surfaces.

The near-black visible throughout current Buffer surfaces has a greenish warmth rather than reading as absolute black.

### Semantic

* **Success:** `{colors.primary}` where context permits.
* **Warning:** warm yellow / amber.
* **Error:** restrained red.
* **Information:** pastel or medium blue.
* **AI / ideation:** lavender can be used as a contextual accent.

Do not allow semantic colors to compete with Buffer Green as the primary action hierarchy.

---

## Historical Brand Palette

Buffer's older visual guide specified:

* Blue — `#2C4BFF`
* Yellow — `#FADE2A`
* Black — `#231F20`
* Dark Blue — `#121E66`
* Light Blue — `#6B81FF`
* Light Orange — `#FF9B6B`
* Lighter Red — `#F3AFB9`

It also used a much broader rainbow palette.

These remain useful when reproducing **historical Buffer assets**, but should not replace the green/warm-neutral direction on a new recreation of the current Buffer.com surface.

---

## Typography

### Current Direction

Typography should feel:

* Friendly
* Contemporary
* Light
* Spacious
* Human rather than corporate
* Highly readable
* Sentence-case first

Buffer explicitly describes the 2026 redesign as introducing **lighter typography** and softer shapes.

### Font Family

The exact current production marketing font family is not documented in Buffer's accessible 2026 redesign material.

Therefore implementations should use a neutral modern grotesk stack unless the production font is available:

`Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`

Do **not** blindly reproduce the historical Poppins/Roboto pairing if the objective is matching the present Buffer.com design.

### Legacy Typography

Buffer's previous official visual guide specified:

* **Headings:** Poppins Bold
* **Body:** Roboto
* Headings in sentence case
* Poppins heading tracking at `0`
* Roboto body tracking around `0.2px`

This is useful historical guidance, particularly the sentence-case rule, but Buffer states that typography was updated during its current redesign.

---

## Hierarchy

| Token                     |    Size |  Weight | Line Height | Letter Spacing | Use                      |
| ------------------------- | ------: | ------: | ----------: | -------------: | ------------------------ |
| `{typography.display-xl}` |    64px | 500–600 |         1.0 |         -1.5px | Homepage hero            |
| `{typography.display-lg}` |    52px | 500–600 |        1.05 |           -1px | Major section headline   |
| `{typography.display-md}` |    42px | 500–600 |         1.1 |         -0.7px | Feature-band headline    |
| `{typography.display-sm}` |    34px | 500–600 |        1.15 |         -0.4px | CTA heading              |
| `{typography.title-lg}`   |    26px | 500–600 |        1.25 |         -0.2px | Feature-card title       |
| `{typography.title-md}`   |    21px | 500–600 |         1.3 |              0 | Product/card title       |
| `{typography.title-sm}`   |    18px | 500–600 |        1.35 |              0 | Small heading            |
| `{typography.body-lg}`    |    18px |     400 |        1.55 |              0 | Lead paragraph           |
| `{typography.body-md}`    |    16px |     400 |        1.55 |              0 | Default body             |
| `{typography.body-sm}`    |    14px |     400 |         1.5 |              0 | Secondary copy           |
| `{typography.label}`      | 13–14px |     500 |         1.3 |              0 | Nav / controls           |
| `{typography.caption}`    | 11–12px |     400 |         1.4 |              0 | Legal / metrics metadata |
| `{typography.button}`     |    14px |     500 |         1.0 |              0 | CTA labels               |

### Principles

The current Buffer voice should **not feel typographically aggressive**.

Use:

* medium rather than extra-bold headlines;
* compact large-display line heights;
* normal sentence case;
* little to no tracking;
* readable body type;
* generous space between copy groups.

The homepage hero headline should feel strong because of **scale**, not because of 800/900 font weight.

Current Buffer hero typography is visually centered, large and dark, but remains noticeably softer than traditional high-weight SaaS display type.

---

## Layout

### Spacing System

Use a **4px base unit**.

Recommended tokens:

* `{spacing.xxs}` — 4px
* `{spacing.xs}` — 8px
* `{spacing.sm}` — 12px
* `{spacing.md}` — 16px
* `{spacing.lg}` — 24px
* `{spacing.xl}` — 32px
* `{spacing.xxl}` — 48px
* `{spacing.xxxl}` — 64px
* `{spacing.section}` — 96px
* `{spacing.section-lg}` — 128px

### Section Padding

Desktop:

* Regular section: `96px 32px`
* Hero: roughly `80–120px 32px`
* Major feature bands: `96–128px`

Mobile:

* Regular section: `64px 20px`
* Hero: `56–72px 20px`

### Grid & Container

* **Primary max width:** approximately `1200–1280px`
* **Reading width:** `640–760px`
* **Hero copy width:** around `600px`
* **Feature content:** 12-column conceptual grid
* **Card gaps:** `16–24px`

Unlike BMW's wide photographic composition, Buffer is optimized around **contained product UI**.

Content should rarely touch the screen edges on desktop.

### Whitespace Philosophy

Whitespace is a major part of the brand.

The user should perceive:

> calm → hierarchy → product → action

rather than:

> headline → card → card → card → CTA → banner → badge

Never fill an empty region simply because space exists.

Buffer explicitly designed the refresh to feel lighter, calmer and easier to navigate.

---

## Elevation & Depth

| Level       | Treatment                          | Use                     |
| ----------- | ---------------------------------- | ----------------------- |
| Flat        | Warm canvas                        | Page bands              |
| Hairline    | 1px warm-neutral border            | Basic cards             |
| Raised      | White surface + tiny shadow        | Floating platform tiles |
| Product     | Light shadow + border              | App screenshots         |
| Interactive | Slight transform / spring movement | Homepage platform tiles |

### Shadow Philosophy

Shadows are soft and functional.

Avoid:

```text
0 20px 50px rgba(0,0,0,.20)
```

Prefer something closer to:

```text
0 2px 8px rgba(33,49,48,.06)
```

or:

```text
0 6px 20px rgba(33,49,48,.08)
```

Product windows can carry slightly more elevation, but cards should never look like floating Material Design sheets.

### Decorative Depth

The homepage hero achieves depth through multiple layers of social tiles.

Some tiles are:

* smaller,
* partially transparent,
* slightly blurred,

while foreground social-platform tiles are larger, sharper and more opaque. Buffer explicitly designed this hierarchy to suggest different depths.

---

## Shapes

### Border Radius Scale

| Token            |  Value | Use                      |
| ---------------- | -----: | ------------------------ |
| `{rounded.xs}`   |    4px | tiny status elements     |
| `{rounded.sm}`   |    8px | platform tiles           |
| `{rounded.md}`   |   12px | inputs / compact cards   |
| `{rounded.lg}`   |   16px | content cards            |
| `{rounded.xl}`   |   24px | large feature containers |
| `{rounded.full}` | 9999px | CTA pills / status chips |

### Shape Philosophy

The current Buffer redesign is explicitly **soft**.

Rounded geometry is part of the emotional language:

* approachable,
* calm,
* safe,
* creator-friendly.

Do not make every component a giant pill, however.

Use:

* pills for actions;
* medium radii for cards;
* smaller radii for utility surfaces.

---

## Components

## Top Navigation

### `top-nav`

A minimal light navigation sitting directly on the warm page canvas.

Desktop structure:

```text
Buffer logo

Features ↓
Channels ↓
Resources ↓
Pricing

Log in
Get started for free
```

The current hero design shows a low-chrome header with a bordered Login control and green Get Started CTA.

Recommended dimensions:

* Height: `64–72px`
* Background: `{colors.canvas}`
* Container max-width: `1200–1280px`
* Link gap: `28–32px`

Navigation typography:

* 14px
* medium/regular
* sentence case

No all-caps navigation.

---

## Buttons

### `button-primary`

The signature Buffer action.

* Background: `{colors.primary}`
* Text: `{colors.ink}`
* Border: none or low-contrast green border
* Height: `44–48px`
* Padding: `0 20–24px`
* Radius: `{rounded.full}`
* Font: 14px / 500

Example:

**Get started for free →**

### `button-secondary`

* Background: transparent / white
* Text: `{colors.ink}`
* Border: 1px `{colors.hairline-strong}`
* Radius: `{rounded.full}`

Example:

**Log in**

### `button-soft`

Used in contextual areas.

* Soft neutral or pastel background
* Dark text
* No heavy border

### `button-icon`

* 40–44px square
* white or soft-neutral background
* `{rounded.md}`
* thin border
* centered simple icon

### Button Principle

Actions should feel **friendly rather than sales-heavy**.

Avoid:

* huge dark SaaS buttons;
* blue-gradient CTAs;
* heavy shadows;
* uppercase labels;
* glowing hover states.

---

## Hero

### `hero-social-workspace`

Signature homepage component.

Structure:

```text
              floating platform tiles

        YOUR SOCIAL VALUE PROP

              short subtitle

      [ Email address ][ CTA → ]

              legal note

              metrics / proof
```

Current Buffer copy centers around the concept of a **social media workspace** connected to the platforms and tools users work with.

### Hero Decorative Grid

Behind the hero content is a mirrored social grid.

Use:

* social-network icons;
* emoji/reaction-style tiles;
* subtle grid lines;
* varying opacity;
* varying blur;
* varying scale.

Buffer explicitly uses two mirrored CSS Grid containers to build the current hero composition.

### Hero Tile

`hero-platform-tile`

* White background
* Approx. `48 × 48px` desktop
* `{rounded.sm}`
* thin border
* subtle shadow
* platform icon centered

Some distant tiles:

* opacity reduced;
* blur increased;
* smaller scale.

### Hero Form

`hero-signup-form`

Desktop:

```text
┌─────────────────────────────────────┐
│ Enter your email...  Get started → │
└─────────────────────────────────────┘
```

* White surface
* thin warm border
* pill shape
* embedded green CTA
* maximum width roughly `500–560px`

On smaller screens, input and button may stack.

---

## Social Proof

### `logo-cloud`

Buffer currently surfaces recognizable creators, brands and agencies as trust reinforcement.

The homepage includes brands such as Metallica, Benefit, Wired, Semrush, Crocs, ElevenLabs, Pizza Hut, Vice and Clash of Clans.

Design treatment:

* monochrome or visually normalized logos;
* generous horizontal spacing;
* low visual competition with hero.

### `metric-card`

Simple proof card.

Example structure:

```text
191,726

ACTIVE USERS
```

Treatment:

* white/warm canvas
* 1px border
* `{rounded.lg}`
* large value
* tiny muted descriptor

Current Buffer hero design uses this metric-card structure directly beneath the hero.

---

## Feature Sections

### `feature-product-band`

Large section consisting of:

```text
Eyebrow / product name
Headline
Description
Learn more →

PRODUCT SCREENSHOT
```

The product screenshot is usually visually larger than the copy.

Current homepage feature categories include:

* Publish
* Create
* Community
* Insights

### Product Color Association

Pastels may distinguish features, but avoid creating a rigid "every product owns one saturated color" system unless product requirements demand it.

Use color as **navigation assistance and personality**, not visual branding overload.

---

## `feature-card`

Used for secondary capabilities such as:

* Collaborate
* Mobile app
* Start Page
* AI Assistant

Structure:

```text
[ product visual ]

Feature name

Short description

Learn more
```

Current homepage presents these as supporting capabilities after the primary product sections.

---

## `product-window`

A reusable browser/app screenshot frame.

Characteristics:

* warm-white UI
* subtle border
* medium/large radius
* shallow shadow
* realistic product screenshot
* not placed inside fake MacBook/iPhone mockups unless the device itself is meaningful

Product imagery should remain the strongest visual proof element.

---

## `audience-tabs`

Used for:

```text
Creators
Small businesses
Agencies
```

The homepage switches audience-specific storytelling around those categories.

Recommended active state:

* green or soft-green background;
* dark text;
* pill shape.

Inactive:

* transparent;
* subtle text.

---

## Community Cards

### `creator-profile-card`

A human proof component.

Contains:

* creator image,
* handle,
* follower count,
* channel logo.

Buffer uses creator/community stories to reinforce that the product is built around actual people rather than abstract enterprise logos alone.

Keep these cards visually human and light.

---

## Support Band

### `human-support-band`

Messaging should emphasize people rather than automation.

Current Buffer messaging specifically positions its customer support as global and human.

Use:

* real teammate photography;
* editorial copy;
* simple Help Center / Community links;
* no generic chatbot illustration as the dominant visual.

---

## Resource Cards

### `resource-card`

Used for:

* Free Marketing Tools
* Social Media Glossary
* Social Media Marketing 101
* Best Time to Post
* Social Media Resources

Structure:

```text
[ simple illustration ]

Title

One-sentence description
```

Use pastel backgrounds sparingly for differentiation.

---

## About / Transparency

### `open-company-band`

Buffer's transparency story is a meaningful differentiator and should visually feel editorial rather than promotional.

Current homepage highlights public company metrics including customers, teammates and ARR.

Recommended design:

```text
We are an open company

Short explanation

Open dashboard →

[ Metric ][ Metric ][ Metric ][ Metric ]
```

Metrics should use large dark numbers with understated labels.

---

## Inputs & Forms

### `text-input`

* Height: `48px`
* Background: white
* Text: `{colors.ink}`
* Border: `1px solid {colors.hairline-strong}`
* Radius: `{rounded.full}` in hero
* Radius: `{rounded.md}` in normal forms
* Horizontal padding: 18px

### Focus

Focus should be visible but calm.

Recommended:

* 2px dark-green focus ring, or
* stronger green outline meeting accessibility requirements.

Do not rely on shadows alone.

---

## Icons

Current product navigation uses simple lightweight functional icons.

Examples:

* Create
* Publish
* Community
* Insights

The redesign specifically favors simpler visual elements so they support the content rather than overpowering it.

Recommended:

* 1.5–2px strokes
* round joins/caps
* 18–20px normal UI size
* 24px major utility icons

Avoid overly illustrative icon sets.

---

## Illustrations

Buffer's historical visual guide already emphasized minimal, symbolic illustrations using flat geometric forms and lines rather than perspective-heavy art.

The current system goes further toward simplification.

### Use

* small conceptual diagrams;
* simple creator/social metaphors;
* pastel accents;
* lightweight linework.

### Avoid

* giant 3D blobs;
* complex isometric scenes;
* generic AI-generated SaaS illustrations;
* gradients masquerading as brand identity.

---

## Photography

Photography should feel:

* authentic;
* human;
* bright;
* emotionally expressive;
* creator-centric.

Buffer's visual guidance historically emphasized real human emotion, authenticity and bright minimal compositions.

Current usage should continue that principle while allowing product UI to remain the dominant marketing proof.

---

## Signature Components

### `social-grid`

The most distinctive current marketing motif.

Grid cells visually reference the social feed / social-network ecosystem.

Use only where the product-network relationship is relevant.

Do not put a grid behind every section.

### `floating-platform-tile`

Platform logo floating inside a small white square.

Used primarily around high-level acquisition surfaces.

### `buffer-green-pill`

A pill-shaped green interaction that provides the visual action signature.

### `pastel-feature-surface`

Large flat field of:

* green,
* pink,
* blue,
* coral,
* lavender,
* yellow.

One dominant pastel per composition.

Avoid gradients between them.

---

## Footer

### `footer`

Recommended current treatment:

* dark green-black or warm neutral;
* multi-column information architecture;
* small typography;
* large top padding;
* restrained separators.

Sections may include:

```text
Features
Channels
Tools
Resources
Company
Support
Legal
```

Keep the footer functional.

Do not turn it into another conversion hero.

---

# Do's and Don'ts

## Do

* Use warm neutral backgrounds.
* Use dark green-black instead of arbitrary pure black.
* Make Buffer Green the strongest action signal.
* Use green primarily for actions, progress and positive attention.
* Use sentence-case headings.
* Keep headline weight moderate.
* Use generous whitespace.
* Let product screenshots prove functionality.
* Use pastels as supporting personality.
* Use soft rounded geometry.
* Use thin borders.
* Show actual social-platform context.
* Use real creators and businesses as social proof.
* Keep illustrations simple.
* Keep interactions playful but calm.
* Design accessibility before animation.

The current Buffer design intentionally prioritizes calm, clarity, flexibility and content-first presentation.

## Don't

* Don't rebuild Buffer as a blue SaaS website.
* Don't default to the historical `#2C4BFF` blue as the main CTA.
* Don't use giant Poppins ExtraBold headings simply because an older guide specified Poppins.
* Don't use pure black everywhere.
* Don't use gray-on-white enterprise-dashboard styling.
* Don't overuse gradients.
* Don't add glassmorphism.
* Don't add heavy shadows.
* Don't make every section a card.
* Don't use 32px radii on everything.
* Don't use uppercase display headings.
* Don't create rainbow UI just because Buffer supports many networks.
* Don't let platform colors override Buffer's own hierarchy.
* Don't replace real product screenshots with abstract illustration.
* Don't animate elements without honoring reduced-motion preferences.

---

# Responsive Behavior

## Breakpoints

Recommended mapping:

| Name         |         Width | Behavior                                          |
| ------------ | ------------: | ------------------------------------------------- |
| Mobile       |     `< 576px` | Simplified hero, stacked form, reduced tile count |
| Large Mobile |   `576–767px` | Wider hero, more decorative tiles                 |
| Tablet       |  `768–1023px` | 2-column feature layouts where possible           |
| Desktop      | `1024–1343px` | Full navigation and richer social grid            |
| Wide         |    `≥ 1344px` | Complete hero tile composition                    |

Buffer's hero implementation specifically adds and repositions social tiles as viewport width grows, with the full tile composition reached around **1344px**.

---

## Hero Responsive Strategy

### Mobile

* Hide nonessential decorative tiles.
* Keep core network icons.
* Prevent icons from overlapping hero copy.
* Stack email input and CTA where needed.
* Reduce headline to approximately `40–44px`.
* Keep centered composition.

Buffer states that the current hero begins mobile-first, hides many decorative tiles at smaller widths, and progressively introduces them as more space becomes available.

### Desktop

* 56–64px hero heading.
* Input + CTA inline.
* Full mirrored icon grid.
* Metrics in horizontal row.
* Larger whitespace.

---

## Card Collapse

Desktop:

```text
[ Card ][ Card ][ Card ]
```

Tablet:

```text
[ Card ][ Card ]
[ Card ]
```

Mobile:

```text
[ Card ]
[ Card ]
[ Card ]
```

Avoid simply scaling three cards until text becomes cramped.

---

## Navigation Collapse

Mobile:

```text
Buffer                         ☰
                     Get started
```

or:

```text
Buffer          Get started    ☰
```

Hide secondary nav links inside a menu.

The CTA should remain accessible without requiring the user to open navigation.

---

# Motion

## Hero Tile Motion

Current Buffer hero tiles react to cursor proximity.

The movement uses a spring-like attraction:

```text
cursor approaches
      ↓
tile shifts toward cursor
      ↓
maximum displacement
      ↓
tile springs back
```

Buffer describes an activation zone and spring animation controlling stiffness, movement distance and return behavior.

### Motion Rule

Motion must be:

* subtle;
* reversible;
* non-blocking;
* decorative;
* never required to understand the interface.

### Reduced Motion

Critical:

```css
@media (prefers-reduced-motion: no-preference) {
  /* decorative motion */
}
```

Buffer's current hero disables its animation by default and only enables it when `prefers-reduced-motion: no-preference` is detected.

---

# Accessibility

* Maintain minimum 44×44px interactive targets.
* Never rely on pastel color alone to communicate state.
* Verify text contrast on light Buffer Green.
* Decorative hero tiles should not pollute the accessibility tree.
* Respect reduced motion.
* Inputs require visible labels or accessible names.
* Focus state must remain visible.
* Social logos should receive meaningful labels only when interactive.

Buffer's hero marks decorative visual content so assistive technology does not announce it.

---

# Brand Voice in UI

The visual language should read as:

**calm**

**helpful**

**independent**

**human**

**optimistic**

**slightly playful**

**not corporate**

Buffer describes itself as historically unconventional, quirky, independent and curious rather than corporate.

Avoid corporate SaaS phrases such as:

> Supercharge your omnichannel social ecosystem.

Prefer:

> Plan your posts without the chaos.

or:

> Turn any idea into the perfect post.

---

# Iteration Guide

1. Start with `{colors.canvas}`, `{colors.ink}` and `{colors.primary}` before introducing pastels.

2. Ask whether an element needs a card. If not, leave it directly on the canvas.

3. Use product screenshots before inventing illustrations.

4. New actions should default to `{component.button-primary}` or `{component.button-secondary}`.

5. Use `{rounded.full}` primarily for explicit pill controls.

6. Use `{rounded.md}` / `{rounded.lg}` for cards.

7. Keep headings sentence case.

8. Use size rather than extreme weight to create headline emphasis.

9. Keep one dominant pastel per visual region.

10. Don't introduce another "brand primary."

11. Use social-platform colors inside platform identity only.

12. Avoid consecutive dense sections.

13. Alternate:

```text
story → product → proof → story → product
```

14. Add animation only after the static hierarchy is successful.

15. Always test the hero with reduced motion.

16. Treat mobile as an independently composed layout, not a shrunken desktop.

17. If the page starts to feel like a generic AI SaaS landing page, remove decoration before adding more branding.

18. If unsure where to add visual emphasis:

**bigger product proof before bigger decoration.**

---

# Known Gaps

* Buffer publicly describes its 2026 typography as lighter and updated, but the exact current production marketing typeface and complete type-token scale are not documented in the accessible redesign material.
* Therefore the typography family and exact size scale above are recreation recommendations, not claimed internal Buffer tokens.
* Current green/pastel hex values above are sampled from Buffer's own 2026 redesign imagery; production CSS may differ slightly because of image encoding and rendering.
* Buffer's older official visual guide documents a blue-first palette and Poppins/Roboto typography. That material should not be assumed to represent the current 2026 marketing implementation because Buffer explicitly says colors and typography were refreshed.
* Product application surfaces and Buffer.com marketing surfaces now share a visual direction, but their density, component dimensions and information architecture are not identical.
* Hover timing, internal easing curves and exact spring parameters for every component are not publicly documented.
* Dark-mode marketing behavior has not been established from the current homepage references.
* Some feature-specific pastel mappings may change as Buffer continues evolving the new system.
* The current homepage is actively iterated; Buffer describes the hero as a design they expect to continue refining.

---

# North-Star Rule

When recreating Buffer, the result should feel like:

> **a calm place to work on something inherently chaotic.**

Warm canvas.
Dark friendly type.
One clear green action.
Real product.
Real people.
Small moments of pastel delight.

If the page feels loud, corporate, overly polished, excessively blue, heavily shadowed, or like a generic AI startup template, it is moving away from Buffer's current design language.
