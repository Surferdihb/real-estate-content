# Ayrton Silva — content direction

Agreed 2026-08-09. This is the brief every future post is checked against.

---

## The position

**You don't sell on assertion.**

Luxembourg has no MLS, no public transaction register, no published
time-on-market and no absorption data. Every agent in this market is therefore
*forced* to work on assertion — "trust me, it's the right price." You built your
way out of it: 15 `realestate-*` analysis skills and a 24-module operating
system, because you wanted the numbers before you opened your mouth.

That is the whole brand. Not "agent who uses AI" — that's a tool claim anyone can
make. **An analyst who happens to sell, and who built the machinery to be one.**

The proof already exists and is unusual: your own analyses grade properties C,
state cash-flow at −€940/month, and say *avoid at asking price* — including on
listings your own agency holds.

## The two tracks, one voice

| Track | Reader | What they should conclude |
|---|---|---|
| **Public** (3/week) | Buyers, sellers, owners in Luxembourg | "This one actually checks. I want them on my side of the table." |
| **Trade** (2/week) | Agents, agencies, developers | "They have machinery I don't have. I want access to it." |

Same voice both ways. The public track shows the *thinking*; the trade track
shows the *machine*. A seller who sees the machine trusts the thinking more, and
an agent who sees the thinking wants the machine. They reinforce.

## Voice

**Analyst who happens to sell.** Dry, precise, numbers first.

- Lead with a figure or a mechanism, never with an adjective.
- Say what you don't know. "Luxembourg doesn't publish that" is a content angle,
  not a weakness.
- Never a number without a source. Observatoire, STATEC, BCL, pfi.public.lu.
- No superlatives, no rocket emoji, no "game-changer".
- Bad news first. It is the entire reason anyone believes the good news.
- Short sentences. The rigour does the persuading.

**Never:** invent a statistic. This is the failure mode that ran through every
IDEPUB series — "+403 % de demandes", "95 % retention", "12,400 views". It is
also the easiest way to lose an audience that can check.

## The five formats

### Public track

**1 · « Comment je vérifie » — the flagship** *(1/week)*
You show the check, not a verdict. Screen recording, real data, your voice over
it. "Here's how I work out what a 2-bed in Esch is actually worth." Never a
named listing, never a public judgement of anyone's stock — the rigour is the
asset, grading other people's inventory is a liability.

*Sources you already own:* the three written analyses, the 15 analysis skills.

**2 · « Le chiffre » — one sourced number** *(1/week)*
A single Luxembourg figure, its source, and what it means for a decision. The
€950/m² asking-vs-notarial gap. The 7 % duty that turns €545,000 into €588,600.
The 5 % rent cap that makes lowering the price pointless. Cheapest post to
produce; you already have ten of these written.

**3 · Market read** *(1/week)*
Monthly-cycle data with a point of view. Prices down, rents up, what that means
if you're deciding this quarter. Refresh quarterly — a stale sourced figure is
worse than no figure, because the citation invites checking.

### Trade track

**4 · The system at work** *(1/week)*
Screen recording of LUMINA doing real work. The Dudelange map extruding 7,015
OSM building footprints over ACT orthophoto. A `realestate-analyze` run scoring
a property live. The scraping machine pulling listings. Proves capability rather
than claiming it, and it is genuinely striking footage that needs no camera.

**5 · Build note** *(1/week)*
What you shipped and the problem it solved. Short. This is the post that makes
an agency ask whether they can buy it.

## The week

| Day | Track | Format |
|---|---|---|
| Mon | Public | Le chiffre |
| Tue | Trade | The system at work |
| Wed | Public | **Comment je vérifie** (flagship) |
| Thu | Public | Market read |
| Fri | Trade | Build note |

Flagship mid-week when engagement is highest. Trade posts bracket the week so
the professional audience sees you top and tail without dominating the feed.

## Presence — voice first

No footage of you exists. That is the single biggest gap in the whole library,
and it caps how personal this brand can feel.

**Phase 1 (weeks 1–8):** your voice over screen recordings. Far easier than
camera, and it builds recognition — people know a voice long before they need a
face.

**Phase 2 (week 8+):** book a real shoot once the feed has traction and you know
which formats land. Filming the right thing later beats filming the wrong thing
now.

Practical: record voice separately from screen, in one sitting per batch. A
quiet room and a decent mic beat a studio with a bad script.

## What we do not do

- No teardowns of named listings. Commercially radioactive for a working agent.
- No unsourced statistics, ever.
- No stock imagery of foreign cities. The IDEPUB series were full of Dubai; your
  personal brand is Luxembourg or nothing.
- No IDEMMO branding. This account is Ayrton, not the agency.
- No "AI" as a subject in the public track. It is how you work, not what you
  sell to a seller.

## Eight weeks, produced

40 posts, FR + EN, rendered from `posts/src/data.js`. Run `node src/render.mjs`.

| Week | Theme |
|---|---|
| 1 | Establish — the gap, the method, the two-sided market |
| 2 | Value and geography — costs, the map, €/m², the zone spread |
| 3 | The rent cap — 5 %, why cutting the price doesn't help, rates |
| 4 | Method and honesty — what isn't published, working without an MLS |
| 5 | What it actually costs — Bëllegen Akt, cash at signing, exit tax |
| 6 | Energy and value — the 38 % class premium, value already captured |
| 7 | The rental shortage — 792 vs 45, and why it is a legal artefact |
| 8 | Location risk — no crime data, CASIPO, flood zones, Belval maturity |

Two figures are deliberately shown as contested or stale, because that is the
brand: the Bëllegen Akt at €40,000 *and* €45,000 with both sources named, and
Esch unemployment labelled stale at May 2024.

## Video

Silent 9:16 MP4 from the same `data.js`. See `posts/video/README.md`.

```bash
node video/render-video.mjs
```

Eight posts are picked for video — the ones whose argument benefits from being
revealed in sequence. Figures count up, tables build, the source lands and
holds. Built to be read with the sound off; your voiceover drops on top later
without changing the visual timeline.

## Real system captures

`w1-tue` and `w2-tue` now carry a **real capture of the LUMINA Dudelange map** —
7,015 extruded OSM footprints on ACT orthophoto. Not a mockup.

> ⚠️ **Never capture the `/prospecting` left panel.** It lists real prospects by
> name at their home addresses with sales status attached. Crop from ~20 % of
> the width onward. Same rule for `/crm` and `/kanban`.
>
> A demo dataset with fictional names would make the whole module filmable,
> including the address search — worth doing.

**Still outstanding:** the voice track, and captures of the analysis run and
intelligence views for the remaining Tuesday slots.

## Visual identity — settled

**Editorial mono.** Warm off-white paper `#faf8f4`, near-black ink `#16150f`,
Newsreader serif for headlines, Archivo for data and labels.

One accent, swapped by track: **editorial red `#a33327`** for public posts,
**slate `#2f4a58`** for trade. Same system, different accent — the feed reads as
one voice with two streams.

Deliberately not IDEPUB's violet and not IDEMMO's rainbow. This is a person, not
a company channel.

The masthead is the name in serif over a hard rule; the footer carries the
source on the left and the handle on the right. Every layout has a source slot,
so a post without a citation looks broken. That is intentional.

Format 1080×1350 (4:5), exported at 2× → 2160×2700.

Engine: `posts/src/` — `template.html` (identity), `data.js` (all copy),
`render.mjs`. Fonts inlined as data URIs; the renderer throws on overflow rather
than shipping a clipped card.
