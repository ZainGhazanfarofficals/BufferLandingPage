# Hypotheses behind this pass

Everything below is a hypothesis, not a claim that this version is better than
Buffer's live site. Each one is written the way it would need to be framed for
a real experiment review: what we think will happen, why, how we'd check it,
and what would have to stay flat (or improve) for the change to count as a win.
None of this has real traffic behind it — the numbers in this repo are for the
demo, not a production result.

---

### 1. A single hero CTA converts better than a hero CTA plus a secondary link
**Why:** the hero previously showed "Start for free" next to a "See how Buffer
works" link. Classic CRO reasoning says two above-the-fold actions split
attention and slow the decision down, especially on first visit.
**How I'd test it:** A/B the current single-CTA hero against a variant with
the secondary link restored, measuring hero CTA click-through rate.
**Guardrail:** watch bounce rate and time-on-page too — if removing the
secondary link measurably increases bounce (visitors who wanted to see the
product first just leave), that's a real cost the CTA-click metric alone
won't show.

### 2. Naming the category explicitly ("social media management workspace")
in the subheadline reduces early bounce from visitors unfamiliar with Buffer
**Why:** the outcome-led headline ("grow your audience without living on
social media") is persuasive but doesn't say what the product *is*. For
visitors arriving cold (not brand search), that ambiguity may cost clarity.
**How I'd test it:** compare bounce rate and scroll depth between this
explicit-category subcopy and the original, segmented by traffic source
(branded search should show little difference; non-branded/paid should show
more if the hypothesis holds).
**Guardrail:** hero CTA click-through rate shouldn't drop — clarity that
comes at the cost of persuasion isn't a win.

### 3. Removing the decorative floating-icon background improves perceived
load speed and focus without hurting engagement
**Why:** it was motion with no explanatory value — exactly the kind of thing
called out as "showcasing animation skill" rather than helping the visitor.
The real workflow animation (`WorkflowStepper`, cycling Create → Schedule →
Publish → Analyze) stayed, since it actually communicates something.
**How I'd test it:** LCP/INP before and after, plus hero-to-CTA click rate to
confirm removing it didn't quietly hurt engagement some other way.
**Guardrail:** Core Web Vitals must improve or hold — this change should be a
straightforward win on both craft and performance, not a trade-off.

### 4. Persona selection that changes downstream content (screenshot, proof,
CTA) converts better than a static persona tab
**Why:** the original version only changed a small proof panel. Real
personalization — a different screenshot and a persona-specific next step —
gives each visitor a more relevant, more concrete next click.
**How I'd test it:** compare signup rate for visitors who select a persona
under each version; also check whether the persona-specific CTA link
(`#customer-stories`, `#integrations`, etc.) gets clicked more than a generic
one did.
**Guardrail:** watch for a drop in *overall* persona-selector engagement — a
richer panel could also read as more effort/clutter to some visitors.

### 5. Ordering the three feature cards Create → Publish → Engage (matching
the journey strip above them) reads more coherently than the original
Publish → Create → Engage module order
**Why:** the loop directly above says "Create" first; the grid said "Publish"
first. That's a small inconsistency, but journeys are supposed to feel like
one continuous idea, not two separately-ordered lists.
**How I'd test it:** `featurePresentation: "journey" | "modules"` in
`lib/experiments.ts` makes this a real, cheap A/B — same cards, same copy,
different order. Measure scroll depth through the section and click-through
on "Learn more."
**Guardrail:** this should be close to a wash on any single metric; the risk
of a bad outcome here is low, which is exactly why it's a cheap test to run
before touching anything visual.

### 6. An explicit before/after contrast increases the persuasive weight of
the workflow explanation
**Why:** describing Buffer's workflow in the abstract ("plan, create,
publish...") doesn't land as viscerally as showing the manual alternative
next to it. Loss aversion (what you're currently dealing with) is often a
stronger motivator than gain framing alone.
**How I'd test it:** measure scroll-past rate and click-through to the
feature grid immediately below, with and without this section present.
**Guardrail:** page length increased to add this — if overall page bounce
rate rises, the length cost may outweigh the persuasion gain, and this
section should be cut or made collapsible.

### 7. A shorter (4-question), single-select audit completes at a
meaningfully higher rate than a single "pick your platform" step ever could
have signaled on its own, and connecting each result to a specific feature
increases audit-to-signup rate
**Why:** the previous version was already short (one click), which is good
for completion but gives back almost nothing to reason about. Four short
single-select questions is still fast (each one auto-advances), but now each
answer earns something: the score reflects real inputs, and the feature link
in the result maps directly to the visitor's stated goal instead of a generic
CTA.
**How I'd test it:** the new `social_growth_audit_step_completed` event
(fired per question, with the question id and answer) makes per-step
drop-off visible for the first time — something the single-step version
couldn't measure at all. Compare that funnel against the audit's own
`_started`/`_completed` events, and compare CTA click rate on the
goal-mapped feature link against the old generic-CTA baseline.
**Guardrail:** if step 2, 3, or 4 shows meaningfully worse completion than
step 1, that specific question is the one to cut or simplify first — this
event makes that diagnosable instead of guessed at.

### 8. Making the audit an indexable page (`/growth-audit`), not just a
homepage widget, adds a second, cheaper acquisition channel
**Why:** an interactive tool with a concrete payoff ("your score out of 100")
is the kind of content that can rank on its own for score/tool-shaped
searches, separate from whatever ranks the homepage.
**How I'd test it:** track organic sessions landing directly on
`/growth-audit` vs. `/`, and compare audit completion + signup rate between
the two entry points — a cold organic visitor to a tool page may behave very
differently from someone scrolling a homepage they already trust.
**Guardrail:** this only pays off if the page actually gets indexed and
ranks; if it doesn't, the honest read is "no effect," not "failed
hypothesis" — it needs time before it's judged.

### 9. Stating the 3-channel free-plan limit explicitly builds more trust than
implying it
**Why:** vague reassurance ("everything you need to get started") can read as
evasive once someone is actually comparing plans; a specific, checkable claim
("up to 3 channels") is easy to verify and harder to feel misled by later.
**How I'd test it:** `freePlanDisclosure: "implicit" | "explicit-3-channels"`
in `lib/experiments.ts` — same section, one line different. Compare signup
rate at the free-plan CTA specifically (not just sitewide).
**Guardrail:** if the explicit version measurably lowers signup rate, that's
real information (specificity can also read as a bigger limitation than a
vague phrase does) — the honest resolution is to run this test rather than
assume either direction is obviously right.

### 10. Removing every mid-page "Start free" button except at genuinely
high-intent moments (hero, free-plan section, final CTA, audit result)
increases the click-through rate of the CTAs that remain
**Why:** a repeated identical ask loses salience — if every section ends in
the same green pill, none of them feel like *the* moment to act. The Insights
section's CTA became a plain "see more" link pointing at a relevant feature
page instead.
**How I'd test it:** compare per-section CTA click-through rate before and
after; the hypothesis predicts the remaining high-intent CTAs gain
click-share even if total CTA-click volume across the page looks flat or
slightly lower.
**Guardrail:** total signups shouldn't drop — if fewer total CTA impressions
genuinely means fewer conversions, that's the metric that overrides
click-through-rate purely, and it's the one to check first.
