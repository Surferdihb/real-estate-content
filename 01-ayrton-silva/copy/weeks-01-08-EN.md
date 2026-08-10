# Ayrton Silva — copy, weeks 1 to 8 (EN)

One caption per card. The ids match `posts/src/data.js` exactly:
`w1-mon` → `posts/out/en/w1-mon.png`.

Written natively in English, not translated. The FR set is for the local market;
this one is for the expat, cross-border and international-investor reader, who
needs the Luxembourg context spelled out — particularly that the things they
take for granted at home (an MLS, a transaction register, market-set rents) do
not exist here.

Voice: analyst who happens to sell. A figure or a mechanism first, never an
adjective. No superlatives, no statistic without a source. Bad news first — it
is the entire reason anyone believes the good news.

Every figure here matches its card. If you correct a number in `data.js`,
correct it in the caption too. Figures verified 2026-08-05 — refresh before
posting past November.

**Format**: the body is calibrated for LinkedIn. The "short cut" is the
Instagram / Facebook version. The CTA appears on public-track posts only; trade
posts end on the observation, not on an ask.

| Day | Track | Format |
|---|---|---|
| Mon | public | The number |
| Tue | trade | The system |
| Wed | public | **How I check** (flagship) |
| Thu | public | Market read |
| Fri | trade | Build note |

---
---

# WEEK 1 · Establish

## `w1-mon` · Monday · The number — public

**Hook**
In Esch-sur-Alzette, the gap between what sellers ask and what actually gets
paid is €950 per square metre.

**Body**
Average asking price: €7,149/m². Average notarial price: about €6,200/m².

Those two numbers come from different sources and measure different things. The
first is what is being asked, taken from the portals. The second is what was
signed at the notary, aggregated by the Observatoire de l'Habitat and published
a quarter in arrears.

The gap between them is not statistical noise. It is the structural negotiating
margin of the Esch market — the one that exists independently of how good a
negotiator you are.

On an 80 m² flat listed at €600,000, that gap is roughly €76,000. It is not a
promise. It is the order of magnitude of what this market is already used to
conceding.

Luxembourg publishes no register of transaction prices. These two sources are
all anyone has. Setting them against each other is the minimum.

**CTA**
Negotiating right now? Tell me the commune and I'll give you the gap.

**Short cut**
Asking price in Esch: €7,149/m².
Price actually paid: ~€6,200/m².
€950/m² apart. On 80 m², that's €76,000.
That's not your negotiating skill. That's the market.
Sources: Observatoire de l'Habitat (April 2026), immotop.lu (July 2026).

---

## `w1-tue` · Tuesday · The system — trade

**Hook**
I stopped valuing from memory. Fifteen analysis modules later, I know why.

**Body**
What you see is real: 7,015 building footprints in Dudelange, extruded from
OpenStreetMap, laid over the official ACT orthophoto. Not a mockup.

But the tool isn't the point. The point is what pushed me to build it: in this
industry, valuation happens from memory and gets defended by assertion. "Trust
me, that's the right price." The client has almost no way to check — the country
publishes no transaction register, no time-on-market, no absorption rate.

So I wired in the sources that do exist: Observatoire de l'Habitat, STATEC, BCL,
AED. Fifteen analysis modules on top.

The most useful design constraint came last: the system refuses to invent a
number. Where the data doesn't exist, it writes "not available" instead of
producing an estimate that would read like a fact.

That was the hardest part to build, and it's the only part that matters.

*The prospect panel has been removed from this capture: it contains private
individuals' names and addresses.*

**Short cut**
7,015 Dudelange buildings, extruded from public data.
15 analysis modules. 4 official sources.
And one rule: never invent a number.
That's the one that took the most work.

---

## `w1-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
How I work out what a flat is actually worth, in a market that publishes almost
nothing.

**Body**
Four steps. None is spectacular, and that's the point: you can check each one
yourself.

**1. Live listings, not memory.** I take the comparable properties actually
online today, with their floor area and energy class. The market of six months
ago no longer exists.

**2. Cross-check against notarial data.** I set that against the Observatoire's
notarial price for the commune. That is what gets paid, not what gets asked.

**3. The zone, never the commune.** In Esch the yield doubles between
neighbourhoods. A commune average is wrong for any specific property.

**4. Invested capital, not price.** Duty at 7 %, notary at 1 %. A €545,000
property commits €588,600. Any yield calculated on the asking price is
overstated.

If one of those four steps is missing, it is not a valuation. It is an opinion.

I'll be publishing this kind of method regularly. Never on a named listing — I
don't grade other agents' stock. What interests me is that you can redo the
arithmetic yourself.

**CTA**
Want me to run those four steps on a specific property? Send me the commune and
the floor area.

**Short cut**
How I value a flat:
1. Today's live listings, not memory
2. Cross-check against the notarial price
3. The zone, never the commune average
4. Invested capital (€545,000 → €588,600), not the asking price
Without all four it isn't a valuation. It's an opinion.

---

## `w1-thu` · Thursday · Market read — public

**Hook**
In Esch, prices are falling and rents are at a record. At the same time, in the
same commune.

**Body**
Asking prices: −1.31 % over one year, −5.4 % since the January 2026 peak, −6.3 %
over three years. But +47.1 % since 2019.

Asking rents: +3.22 % over one year, +30.8 % over five.

These movements don't contradict each other. They describe two different
populations.

Anyone who bought in 2019 is comfortably ahead, whatever happens now. Anyone who
bought at the 2022 peak is waiting, and will be waiting a while longer. Both
statements are true simultaneously — which is why "the market is up" or "the
market is down" means nothing without an entry date.

For a buyer today: stock is high, prices are softening, the negotiating margin
is real.

For a landlord: rents are at a record, but the statutory cap doesn't follow the
market. I come back to that in week 3.

**CTA**
Bought between 2021 and 2023? I can tell you where you actually stand. Message
me.

**Short cut**
Esch-sur-Alzette, July 2026.
Prices: −5.4 % since January. But +47.1 % since 2019.
Rents: +3.22 % over a year, +30.8 % over five.
Bought in 2019: you're fine. Bought in 2022: you're waiting.
Both are true at once.
Source: immotop.lu, Esch-sur-Alzette series (July 2026).

---

## `w1-fri` · Friday · Build note — trade

**Hook**
The most useful part of my analysis system isn't what it calculates. It's what
it refuses to calculate.

**Body**
Four metrics every Anglo-Saxon property analyst uses daily do not exist in
Luxembourg:

— sale-to-list ratio: impossible, there is no register
— % sold above asking: impossible, same reason
— average days on market: not published
— months of inventory by commune: not published

A model can estimate all four. It's easy, and the output looks extremely
professional with two decimal places.

I coded the opposite: where the data doesn't exist, the output says "not
available" and explains why. An analysis returns one fewer number, and zero
invention.

The cost is real — a dashboard with holes in it is a harder sell. But an
invented figure that gets taken apart by a client who checks costs a great deal
more than an empty cell.

**Short cut**
What my system refuses to calculate:
· sale-to-list ratio — no register
· % sold above asking — same reason
· average days on market — not published
· months of inventory — not published
One fewer number. Zero invention.

---
---

# WEEK 2 · Value and geography

## `w2-mon` · Monday · The number — public

**Hook**
A property listed at €545,000 costs you €588,600.

**Body**
€43,600 in acquisition costs. The breakdown:

— registration duty, 6 %: €32,700
— transcription duty, 1 %: €5,450
— notary, roughly 1 %: €5,450

This is not a footnote you add at the end of the file. It is the basis of any
serious yield calculation.

The error I see most often — including in files put together by professionals —
is calculating rental yield on the asking price. On this property that
overstates the yield by about 8 %. The whole investment decision moves.

The capital actually invested is €588,600. That is the figure that belongs in
the denominator, always.

(For a primary residence, the Bëllegen Akt changes the equation completely. That
gets its own post in week 5.)

**CTA**
Putting a rental file together? Send me the price and target rent, I'll tell you
what it looks like against real invested capital.

**Short cut**
€545,000 listed → €588,600 actually committed.
6 % registration + 1 % transcription + ~1 % notary.
A yield calculated on the asking price is overstated by about 8 %.
Source: pfi.public.lu.

---

## `w2-tue` · Tuesday · The system — trade

**Hook**
7,015 buildings, extruded from public data. I stopped prospecting from a list.

**Body**
The geometry comes from OpenStreetMap, clipped to Dudelange's municipal bounds.
The aerial base layer is the official ACT orthophoto, published CC0. Extrusion
height uses mapped height where it exists, otherwise floor count.

One design detail that matters more than it looks: if the tile service drops,
the local mesh stays visible. A field tool that turns into a blank page because
a remote server didn't answer is not a field tool.

What it changes in practice: a commune stops being a list of addresses and goes
back to being a territory. You see densities, alignments, the parcels that
haven't moved in years. It is a very different way to prepare a round.

All of it is built on open public data. Nothing scraped, no personal data in
this layer.

*The prospect panel is removed from the capture: private individuals' names and
addresses.*

**Short cut**
7,015 building footprints, extruded from OpenStreetMap.
Base layer: ACT orthophoto, CC0.
If the tile service drops, the local mesh stays visible.
Territory instead of a list.

---

## `w2-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
The same property can look expensive or cheap depending which source you read.
Here's how I read a price per m² against the right reference.

**Body**
**1. Know which of the two you're reading.** Portals give the asking price. The
Observatoire gives the notarial price, aggregated and published a quarter late.
They are different kinds of number. Confusing them distorts the whole argument.

**2. Treat the gap as information.** In Esch it's roughly €950/m². That isn't
noise — it's the market's structural negotiating margin.

**3. Go down to the zone.** Esch ranges from €4,284 to €7,480/m². A price
"around the average" means strictly nothing until you know the neighbourhood.

**4. Make the premium justify itself.** A property above the notarial average
needs a measurable reason: energy class, recent renovation, floor, terrace,
aspect. Otherwise it's simply an optimistic price.

A price per m² without its source and its zone isn't an argument. It's a number.

**CTA**
Been shown a price per m² described as "in line with the market"? Send it to me
with the neighbourhood and I'll tell you what it's actually being compared
against.

**Short cut**
A price per m² is four questions:
1. Asking price or notarial price?
2. What's the gap? (≈€950/m² in Esch)
3. Which zone? (€4,284 to €7,480/m² inside one commune)
4. What justifies the premium?
Without all four it isn't an argument. It's a number.

---

## `w2-thu` · Thursday · Market read — public

**Hook**
Inside a single commune, rental yield doubles from one neighbourhood to the
next.

**Body**
Esch-sur-Alzette, broken down by zone:

— Al-Esch: €6,580/m², rent €27.70/m² → **5.05 %**
— Dellhéicht: €4,284/m², rent €14.25/m² → 3.99 %
— Belval-Université: €4,911/m², rent €15.75/m² → 3.85 %
— Fettmeth: €6,971/m², rent €18.07/m² → 3.11 %
— Grenz: €7,480/m², rent €14.28/m² → 2.29 %

1.75× on prices. 2× on rents. 2.2× on yield.

Two things worth taking away.

Al-Esch is the only zone where prices are still rising and where rent is double
everywhere else. It's the old central district — the one the brochures talk
about least.

Belval-Université, which carries the entire narrative of the South's renewal,
sells below the commune average and rents poorly. New supply has caught up with
demand there.

Any analysis built on the commune average is wrong for a specific property. Not
approximate: wrong, potentially by a factor of two.

**CTA**
Tell me the neighbourhood rather than the commune, and I can give you a number
that means something.

**Short cut**
Esch-sur-Alzette, yield by neighbourhood:
Al-Esch 5.05 % · Dellhéicht 3.99 % · Belval-Université 3.85 %
Fettmeth 3.11 % · Grenz 2.29 %
2.2× between best and worst, inside one commune.
Source: immotop.lu, breakdown by zone (July 2026).

---

## `w2-fri` · Friday · Build note — trade

**Hook**
The commune average is this industry's most common lie. This week I coded the
refusal.

**Body**
The system no longer produces a valuation until the zone is supplied. Given only
the commune, it returns a range, not a price.

This isn't a technical constraint I put up with. It's a decision, and it's an
uncomfortable one: it makes the tool more annoying to use and forces it to
answer "not enough information" where it used to return a nice single figure.

The justification came from the data itself. 1.75× on prices between Esch zones,
2.0× on rents. A commune-level valuation can therefore be wrong by double while
looking entirely credible.

That's the worst case for a decision-support tool: not visibly wrong, quietly
wrong.

What you have to supply now: the neighbourhood, not just the commune.

**Short cut**
What I fixed this week:
The system refuses to value without the zone. Commune only → a range, not a
price.
Spread between zones: 1.75× on prices, 2.0× on rents.
A commune-level valuation can be wrong by double, and look right.

---
---

# WEEK 3 · The rent cap

## `w3-mon` · Monday · The number — public

**Hook**
In Luxembourg, legal rent doesn't depend on the quality of the property. It
depends on what you paid.

**Body**
The law of 21 September 2006 caps annual rent at 5 % of revalued invested
capital. Not the market, not the condition of the property, not the energy
class.

On a €545,000 property — so €588,600 of invested capital:

— current cap, 5 %: **€2,452/month**
— draft law 8184, 3.5 %: €1,717/month
— difference if it passes: **−€736/month**

Three consequences few landlords anticipate.

Renovating doesn't raise the cap. Improving the energy class doesn't either. The
only legal lever on permitted rent is the purchase price.

And draft law no. 8184 is under discussion in the Chamber — not passed, not
retroactive, but it would apply to every new lease. A ten-year rental projection
that ignores it isn't simplified. It's incomplete.

**CTA**
Letting a property this year? I can run both regimes for you. Message me.

**Short cut**
Legal rent doesn't depend on the property. It depends on what you paid.
5 % of invested capital (law of 21/09/2006).
€545,000 property → cap of €2,452/month.
Draft law 8184 at 3.5 % → €1,717. That's −€736/month.
Renovating doesn't raise the cap.

---

## `w3-tue` · Tuesday · The system — trade

**Hook**
What used to take me half a day in a spreadsheet now comes out of one command.

**Body**
What a full analysis returns:

— a composite score, weighted across five categories
— comparables: live listings, floor area and energy class captured
— cash-flow: NOI, debt service, DSCR
— acquisition costs: duty, notary, Bëllegen Akt
— unverifiable figures, flagged as such, never estimated

But the output I use most isn't the score.

It's the list of checks to run before making an offer. Definitive energy
certificate, managing agent's budget, parcel zoning, tax amounts to confirm with
the notary.

A score tells you where you stand. The list tells you what to do tomorrow
morning. In a market with no transaction register, the second is worth more than
the first — because the score rests on public data anyone can contest, and the
list rests on documents you can go and fetch.

**Short cut**
A full analysis from one command:
composite score · comparables · cash-flow and DSCR · acquisition costs
· unverifiable figures flagged, never estimated
The most useful output isn't the score. It's the list of checks to run before
the offer.

---

## `w3-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
Cutting the price does not save a buy-to-let in Luxembourg. Here's why, with the
numbers.

**Body**
This is the Luxembourg specificity that Anglo-Saxon models don't account for,
and it inverts the usual reasoning completely.

**1. The cap follows invested capital.** Legal rent is proportional to what you
paid. Elsewhere, rent depends on the market. Here it depends on your purchase
price.

**2. Negotiating also lowers permitted rent.** Paying €90,000 less cuts the cap
by the same proportion. You gain on the mortgage and lose on the income. The two
effects largely cancel.

**3. Check instead of assuming.** On a real file: at €545,000, cash-flow is
−€426/month. At €455,000, it's still negative, around −€345. The €90,000
discount does not remove the problem.

**4. The real levers are elsewhere.** Only the deposit and the rate move the
balance. You'd need roughly 35 % down, or a rate below 2.7 %.

No purchase price balances this deal at 80 % LTV over 25 years. It is not a
negotiation problem.

It's the kind of conclusion that pleases nobody, including me when it lands on a
property I could sell.

**CTA**
Hesitating on a buy-to-let? Send me price, target rent and deposit. I'll tell
you whether it's a price problem or not.

**Short cut**
Why negotiating doesn't save a buy-to-let in Luxembourg:
Legal rent = 5 % of what you paid.
Pay less → let for less, by law.
€545,000 → cash-flow −€426/month.
€455,000 → still −€345/month.
The levers are the deposit (~35 %) and the rate (<2.7 %). Not the price.

---

## `w3-thu` · Thursday · Market read — public

**Hook**
3.01 %. The number that caused the correction, and the one now ending it.

**Body**
Banque centrale du Luxembourg MIR statistics, January 2026:

— average rate on new lending: **3.01 %**
— change over one month: −14 basis points
— 1 to 5 year fixation: 3.27 %
— 5 to 10 year fixation: 3.52 %
— rate published by banks: none, pricing is per profile

Rate direction explains most of this market since 2022. The climb produced the
correction; stabilising around 3 % explains the April trough and the recovery in
volumes since.

What that implies, without predicting anything:

At 3 %, solvent demand holds. A return towards 3.5 % would restore downward
pressure on prices. A fall below 2.75 % would probably trigger the rebound many
have been waiting on for two years.

One last point that gets overlooked: no Luxembourg bank publishes a rate card.
The BCL average is a market reference, not your rate. Yours depends on your
profile, and it is negotiable.

**CTA**
Been offered a rate? Tell me the rate and the term, and I'll tell you where it
sits.

**Short cut**
Average rate on new mortgage lending: 3.01 % (BCL, January 2026).
−14 basis points over one month.
1–5 year fixation: 3.27 %. 5–10 year: 3.52 %.
No bank publishes a rate card: the average isn't your rate.

---

## `w3-fri` · Friday · Build note — trade

**Hook**
The rental simulator now runs both regimes. Until law 8184 is voted on, one
scenario is an incomplete analysis.

**Body**
Current regime: 5 % of revalued invested capital.
Regime proposed by draft law no. 8184: 3.5 %.
Typical impact on a €545,000 property: **−€736/month**.

Status: under discussion in the Chamber of Deputies. Not passed. Not
retroactive.

The case for ignoring it is decent: an unpassed text isn't law, and showing a
scenario that doesn't exist can worry people unnecessarily.

The case against is stronger. The text would apply to every new lease. A rental
projection typically runs ten to twenty-five years. Over that horizon, leaving
out an actively discussed change to the yield cap isn't a simplification — it's
an omission, and it always cuts in the seller's favour.

So the simulator shows both, with the status of the text next to the figure. The
reader decides their own appetite for regulatory risk. That isn't my call to
make for them.

**Short cut**
The simulator now runs both regimes:
Current: 5 % of invested capital.
Draft law 8184: 3.5 %. Typical impact: −€736/month.
Status shown next to the figure: under discussion, not passed, not retroactive.
Over ten years, leaving it out isn't a simplification. It's an omission.

---
---

# WEEK 4 · Method and honesty

## `w4-mon` · Monday · The number — public

**Hook**
Zero. That's the number of public transaction-price registers in Luxembourg.

**Body**
Four numbers this country does not publish:

— sale-to-list price ratio: impossible to calculate
— % of properties sold above asking: impossible
— average days on market: not published
— months of inventory by commune: not published

When you see one of these quoted somewhere to two decimal places, it's invented.
Not approximate: invented, because the underlying data doesn't exist anywhere.

This isn't a technical footnote. It's the structural reason Luxembourg real
estate runs on assertion. Without a register, nobody can contradict an agent who
asserts a price — and nobody can confirm one either.

What exists instead: the asking price on the portals, and the notarial price
aggregated by the Observatoire de l'Habitat, published a quarter late. Two
sources. That's it.

An honest analyst tells you what they don't know. It's how you spot one.

**CTA**
Been quoted an "average time on market" or a "typical negotiation rate"? Ask for
the source. I'm curious what comes back.

**Short cut**
What Luxembourg does not publish:
· sale-to-list price ratio
· % sold above asking
· average days on market
· months of inventory by commune
Quoted to two decimal places? It's invented. The data doesn't exist.

---

## `w4-tue` · Tuesday · The system — trade

**Hook**
I watch the market continuously, not when I need it. The reason isn't the
obvious one.

**Body**
What's captured: the listing, the price, the floor area, the energy class, the
agency. Continuously, not on demand.

The problem with a market that has no register isn't only missing data. It's
that listings vanish without leaving a trace. A property pulled from the market
takes the most interesting information with it: what price it was asking, and
for how long.

Without history, you can neither track a price that moves nor know that a
listing was withdrawn.

Concrete consequence, from a recent analysis: two comparables had been
delisted — HTTP 410 and 404. They came out of the calculation, and the output
says so explicitly.

Keeping them would have been more flattering to the property being analysed, and
less true. That's exactly the kind of silent trade-off that decides the quality
of an analysis tool, and nobody sees it from the outside.

**Short cut**
Continuous monitoring: listing, price, area, energy class, agency.
Why continuous: listings vanish without leaving a trace.
On a recent analysis, two delisted comparables (410 and 404) came out of the
calculation.
Keeping them would have been more flattering. And less true.

---

## `w4-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
How you work a property market with no MLS. The reflexes imported from the US,
the UK or France do not transfer here.

**Body**
**1. Two sources, never one.** Asking prices on one side, aggregated notarial
prices on the other. They're different kinds of number. You don't blend them,
you compare them — and the gap between them is information in its own right.

**2. Date every figure.** The Observatoire publishes quarterly, with a lag. A
number without its date is unusable in a negotiation: the other side will date
it however suits them.

**3. Mark what you don't know.** Unconfirmed zone, provisional energy
certificate, stale communal unemployment data. A flagged uncertainty stays
usable; a hidden one derails everything built on top of it.

**4. The notary decides.** Bëllegen Akt, capital gains regime, deduction caps:
these amounts move, and they've moved recently. No projection replaces a
confirmation.

In practice that means budgeting more time for local comparables, and placing
less faith in dashboards.

It's less impressive than a tool that answers in three seconds. It's also the
only way not to be wrong at the scale of a thirty-year commitment.

**CTA**
Moving here and buying? Due diligence habits don't transfer. Message me before
you make an offer.

**Short cut**
Working a market with no MLS:
1. Two sources, never one — and the gap is information
2. Date every figure (the Observatoire publishes late)
3. Mark what you don't know
4. The notary decides on tax amounts
More time on comparables, less faith in dashboards.

---

## `w4-thu` · Thursday · Market read — public

**Hook**
New-build down 18.2 %. Resale recovering. Same quarter, same country.

**Body**
Observatoire de l'Habitat / STATEC, analysis report no. 25, published 25 June
2026. First quarter of 2026:

— off-plan (VEFA): 207 transactions, **−18.2 %**
— existing apartments: 968 transactions, +9.4 %
— existing houses: 650 transactions, +11.5 %

National hedonic index over twelve months: +1.7 %. Broken down: existing houses
+3.0 %, existing apartments +0.9 %.

Two markets diverging in the same quarter.

For a buyer, that changes what to look at: resale is liquid again, new-build much
less so, and the balance of power in a negotiation isn't the same on both sides.

For a developer, it changes how a programme has to be presented: the arguments
that landed in 2021 no longer land.

And the delayed consequence, the one people forget: less new-build started today
means fewer completions in twelve to twenty-four months. Mechanically, that
supports existing stock.

**CTA**
Weighing new-build against existing right now? This is the quarter to talk about
it. Message me.

**Short cut**
Q1 2026, Luxembourg:
Off-plan: 207 transactions, −18.2 %
Existing apartments: 968, +9.4 %
Existing houses: 650, +11.5 %
New-build falling, resale recovering. And less new-build delivered in 12–24
months supports existing stock.
Source: Observatoire de l'Habitat / STATEC, report no. 25 (25/06/2026).

---

## `w4-fri` · Friday · Build note — trade

**Hook**
Every number carries its source, or it doesn't ship. It's the one rule in the
system that has never moved.

**Body**
Sources wired in: Observatoire de l'Habitat, STATEC, BCL, pfi.public.lu, AED.

— a number without a source is refused at output
— an unverifiable number is marked "unverified"
— a stale number is marked with its date

This rule has cost real features. It rules out a whole category of convenient
indicators you could produce by estimation, and it makes some outputs visibly
incomplete.

The justification is one sentence: a sourced number invites the reader to check.

That is exactly why you source it. And exactly why a stale number is worse than
no number at all — the citation makes people want to look, and what they find no
longer matches.

I apply the same rule to what I publish here. If there's a number in one of my
posts with no source under it, tell me.

**Short cut**
The rule that holds the system together:
Every number carries its source, or it doesn't ship.
Unverifiable → flagged. Stale → dated.
A sourced number invites checking. That's why you source it — and why a stale
number is worse than none.

---
---

# WEEK 5 · What it actually costs

## `w5-mon` · Monday · The number — public

**Hook**
The Bëllegen Akt is worth €40,000 per buyer. Or €45,000. Nobody knows for
certain yet, and I'd rather say so.

**Body**
The tax credit that wipes out registration duty for owner-occupiers currently
exists at two different amounts depending which source you read:

— **€40,000**: confirmed by the law of 3 July 2025
— **€45,000**: announced in a government release of 16 July 2026, consolidated
  text not published as at my verification date

I treat the second as unverified. That's not excessive caution: until the
consolidated text is published, a notary will apply the amount in force, not the
one in the press release.

What it changes in practice, on a €545,000 property: duty owed is €38,150, and
it's covered by a single buyer under either figure. The credit is per person — a
couple therefore has double.

So for this particular property, the €40,000 / €45,000 debate changes nothing.
It starts to matter above roughly €570,000, for a sole buyer.

**CTA**
Buying as your main residence this year? Have the applicable amount confirmed by
your notary, not by an article. I can run the numbers in the meantime.

**Short cut**
Bëllegen Akt: €40,000 per buyer (law of 03/07/2025).
Or €45,000 (release of 16/07/2026, consolidated text not published).
I treat the second as unverified.
€545,000 property → €38,150 duty owed, covered under either figure.
The credit is per person: a couple has double.

---

## `w5-tue` · Tuesday · The system — trade

**Hook**
209 nodes, 414 links. One memory.

**Body**
Every analysis, market note and piece of code ends up connected to the others in
a single graph. Four live sources feed it.

The problem it solves isn't glamorous: doing the same work twice.

In this job you produce an analysis for a client, it serves once, then it
disappears into a folder. Six months later a neighbouring question comes up and
you start again — without remembering that you'd already captured the
comparables on that street, or why you'd discarded a particular figure.

With the graph, "have I already worked on this?" has an answer in two seconds.
And more importantly, so does "why did I conclude that?", with the sources as
they stood at the time.

It's the kind of infrastructure that doesn't show up in a demo and changes
everything after six months.

*Real capture. No client data: notes, analyses and documentation only.*

**Short cut**
209 nodes. 414 links. 4 live sources.
The problem it solves: doing the same work twice.
"Have I already worked on this?" → answer in two seconds.
"Why did I conclude that?" → with the sources as they stood.

---

## `w5-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
How I work out the cash you actually need on the day of signing. It's almost
never the deposit that blocks a file.

**Body**
**1. Establish the use before any figure.** Primary residence or buy-to-let.
That single answer moves the cash required by a factor of thirty on the same
property, because of the Bëllegen Akt.

**2. Put duty at 7 %.** Six per cent registration, one transcription. On
€545,000 that's €38,150 owed before any relief.

**3. Apply the Bëllegen Akt, if it applies.** Primary residence only, effective
occupation within two years — otherwise it's recovered with interest. On a
rental it doesn't apply at all.

**4. Add the notary, then the deposit.** Roughly 1 % plus disbursements. The
deposit comes last in this calculation, and it's rarely what blocks the file.

A buyer who discovers the €38,150 three weeks before the deed doesn't have a
financing problem. They have an advice problem.

I run this before the viewing, not after the offer. It heads off an entire
category of files that collapse at the last minute, and it costs nothing.

**CTA**
Want the exact figure for a specific property? Give me the price and the
intended use, and I'll run it.

**Short cut**
The cash you need on the day:
1. Primary residence or buy-to-let? (factor of 30 on cash required)
2. Duty at 7 % → €38,150 on a €545,000 property
3. Bëllegen Akt if primary residence (occupation within 2 years, else recovered
   with interest)
4. Notary ~1 %, then the deposit
Discovering the €38,150 three weeks before the deed isn't a financing problem.
It's an advice problem.

---

## `w5-thu` · Thursday · Market read — public

**Hook**
Property tax in Luxembourg has nothing to do with what you've read elsewhere.
Two imported assumptions regularly distort projections.

**Body**
**First wrong assumption: annual property tax.** In the US, 1–2 % of the
property's value per year is a normal working figure. In Luxembourg, property
tax frequently runs to a few hundred euros. Over a ten-year projection, the gap
between those two assumptions runs to tens of thousands.

**Second area of confusion: capital gains.** On a primary residence, the gain is
exempt. On everything else, the regime has moved twice in eighteen months: the
reduced 10.5 % rate with a two-year threshold was in force only from 1 January
2024 to 30 June 2025.

The currently applicable regime needs reconfirming. I mark it unverified rather
than quote a rate that may no longer be right.

This is precisely the kind of figure you should not lift from an article, even a
recent, well-written one. Any exit projection has to be confirmed with the
notary.

**CTA**
Planning a resale? Get the capital gains regime confirmed before you calculate
anything. I can tell you which questions to ask.

**Short cut**
Property tax in Luxembourg: often a few hundred euros a year.
The American 1–2 %-of-value assumption is wrong here.
Capital gain on a primary residence: exempt.
Reduced 10.5 % rate (2-year threshold): in force 01/01/2024 to 30/06/2025 only.
Current regime to be reconfirmed.
Two changes in eighteen months. Ask the notary, not an article.

---

## `w5-fri` · Friday · Build note — trade

**Hook**
What should an analysis system do when two official sources contradict each
other? The Bëllegen Akt forced me to decide.

**Body**
Source A: law of 3 July 2025 → €40,000, consolidated text.
Source B: government release of 16 July 2026 → €45,000, not consolidated.

Three options. Take the most recent — plausible, but a press release isn't law.
Take the most conservative — defensible, but that's a choice hidden behind an
appearance of neutrality. Or show both.

The system shows both, cites each source, and marks which one is consolidated.

Choosing on the notary's behalf would have been more elegant on screen, and
completely irresponsible. A tax amount applied to a notarial deed doesn't get
decided inside a decision-support tool.

The generalised principle: on a disputed figure, the output carries both values
and the status of each source. It's uglier. It's also the only behaviour that
doesn't pass an uncertainty off as a fact.

**Short cut**
What does the system do when two official sources contradict each other?
Bëllegen Akt: €40,000 (law of 03/07/2025, consolidated) and €45,000 (release of
16/07/2026, not consolidated).
It doesn't choose. It shows both and marks which is consolidated.
Deciding on the notary's behalf would be more elegant, and irresponsible.

---
---

# WEEK 6 · Energy and value

## `w6-mon` · Monday · The number — public

**Hook**
Across the comparables I captured in Esch, energy class is worth more than the
floor you're on.

**Body**
— energy class E/F, unrenovated older stock: €5,073/m²
— energy class D or new off-plan: €6,999/m²
— measured gap: **≈ +38 % per m²**

An important caveat before anyone quotes that number elsewhere: the sample is
small. Treat it as an order of magnitude, not an elasticity. I'm not saying
"energy class is worth 38 %" — I'm saying that across the properties I captured,
the gap was of that order.

But the direction is clear, and it shows up on every file.

Two readings, opposite ones.

If you're buying to live in: a poorly rated property costs less, and energy
renovation is the clearest value lever in this market — provided you cost the
works before making the offer.

If you're buying already renovated: you pay that gap. The seller captured it.
That's Wednesday's post.

**CTA**
Torn between a property to renovate and one already renovated? Send me both,
I'll compare them on invested capital.

**Short cut**
Across my comparables in Esch:
Class E/F, unrenovated older stock: €5,073/m²
Class D or new build: €6,999/m²
Gap: ≈ +38 % per m².
Small sample — an order of magnitude, not an elasticity. But the direction shows
up on every file.

---

## `w6-tue` · Tuesday · The system — trade

**Hook**
The system doesn't trust a provisional energy certificate. It's the first place
an analysis can be wrong in good faith.

**Body**
Energy class is the strongest price factor I've measured. Which also makes it
the most fragile point in any valuation.

The certificate is mandatory in every Luxembourg listing. But it's sometimes
provisional — issued before works, or on a declarative basis.

How the system handles it: a provisional certificate is flagged, the associated
price premium is not validated, and the valuation range is widened while the
definitive certificate is missing. Nothing settles it except the definitive
certificate.

The case that made me code this: a 1950 building advertised as provisional B/C.
The premium being asked over comparables on the same street rested entirely on a
document that didn't exist yet.

That gets said before the offer, not after. And it's much easier to say when the
tool flagged it, rather than it being me looking for problems.

**Short cut**
The system doesn't validate the premium on a provisional energy certificate.
Flagged → range widened → premium not validated until the definitive certificate.
Real case: a 1950 building advertised as provisional B/C. The premium rested on
a document that didn't exist yet.
That gets said before the offer.

---

## `w6-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
How I check whether a property's renovation was already paid for — by you.

**Body**
Buying an already-renovated property looks simpler. In tax terms it's mainly
more expensive, and the seller has banked the benefit.

**1. Identify who commissioned the works.** The 3 % housing VAT instead of 17 %,
and the Klimabonus subsidies, go to whoever orders and pays for the works. Not
to the next owner.

**2. Understand what you're buying back.** An already-renovated property has
those advantages built into its asking price. You pay for them; you don't
recover them.

**3. Check the cap and the timing.** The VAT advantage is capped at €50,000 per
dwelling and requires prior AED approval **before** works begin. It never
applies retroactively.

**4. Find what leverage remains.** Possible accelerated depreciation on the
renovation share, and better liquidity at resale. But no subsidy left to
capture.

An already-excellent energy class is good news if you're moving in, and the end
of the value-add lever if you're investing.

This isn't an argument for buying poorly rated stock — works cost money, and not
everyone wants a building site. It's an argument for not paying a renovation
premium while believing you're buying potential.

**CTA**
Comparing a renovated property with one to renovate? I can cost both on real
invested capital, subsidies included.

**Short cut**
Buying already renovated: you pay for the renovation, you don't recover the
subsidies.
3 % housing VAT instead of 17 %: goes to whoever orders and pays for the works.
€50,000 cap per dwelling, AED approval **before** works, never retroactive.
An excellent energy class = good news to live in, end of the lever to invest.

---

## `w6-thu` · Thursday · Market read — public

**Hook**
A 1950 building doesn't depreciate like a new one. Many simulators ignore this
and overstate the deduction by double.

**Body**
— accelerated rate, 4 %: only for buildings completed within the last 5 years
— standard rate for older stock: **2 % per year**
— depreciable base: price less roughly 25 % land share
— on a €545,000 property: ≈ €8,175 per year deductible

The share corresponding to an energy renovation may fall under different
treatment. The exact rate needs confirming — I mark it unverified rather than
quote an approximate number inside a tax calculation.

The error is common and it's large: applying 4 % to a pre-1970 building doubles
the deduction claimed. Over a ten-year projection, that moves the conclusion of
a file.

It's also checkable in one line — you just ask for the building's completion
year, which appears in essentially every file.

It's the kind of check that takes thirty seconds and that almost nobody does,
because the number came out of a simulator and simulators look serious.

**CTA**
Been shown a rental projection with 4 % depreciation? Check the completion year.
Message me if it doesn't add up.

**Short cut**
Rental depreciation in Luxembourg:
4 % → only buildings completed within the last 5 years
2 %/year → older stock
Base: price less ~25 % land share.
On €545,000: ≈ €8,175/year.
Applying 4 % to a pre-1970 building doubles the deduction claimed.
Source: impotsdirects.public.lu, art. 106 LIR.

---

## `w6-fri` · Friday · Build note — trade

**Hook**
A good energy class lowers the investment score. Counter-intuitive to code, and
correct.

**Body**
The system now flags when the energy lever has already been consumed by the
seller.

Trigger signal: class B or C on older building stock.
What gets checked: who commissioned and paid for the works.
Effect on the value-add score: reduced to zero.
Effect on the primary-residence score: raised.

Here's the hard part to write: the same property becomes better and less
interesting depending on the use. A 1950 building brought up to standard is good
housing — and an investment with no potential, because there's nothing left to
create.

A single score can't express that. It needed two scores, with the intended use
declared as an input.

Which forced me to admit something uncomfortable: the question "is this property
good?" has no answer. Only "good for what?" does.

**Short cut**
What I added this week:
Detection of value already captured by the seller.
Trigger: class B or C on older building stock.
Effect: value-add score to zero, primary-residence score raised.
The property is better; the deal is less interesting. Both at once.

---
---

# WEEK 7 · The rental shortage

## `w7-mon` · Monday · The number — public

**Hook**
792 properties for sale in Esch-sur-Alzette. 45 to rent.

**Body**
In a commune of 37,922 people. A ratio of **17.6 to 1**.

This isn't a market accident or a temporary supply anomaly. It's a direct
consequence of the law.

The mechanism: the statutory rent cap is set at 5 % of revalued invested
capital. On recently purchased properties, that cap compresses yield to the
point where letting becomes unattractive next to selling.

Owners weigh it up. And they sell.

What that creates, inside the same commune and sometimes the same street: a
buyer's market — high stock, softening prices, real negotiating margin — and a
landlord's market, where 45 properties face demand with no alternative.

Luxembourg's rental shortage is a regulatory effect, not a demographic one. That
matters, because the two don't get corrected the same way at all.

**CTA**
Weighing letting a property against selling it? I can cost both options. Message
me.

**Short cut**
Esch-sur-Alzette, 37,922 people:
792 properties for sale. 45 to rent. Ratio 17.6 : 1.
Cause: the statutory cap at 5 % of invested capital compresses rental yield.
Owners weigh it up, and they sell.
The rental shortage is a regulatory effect, not a demographic one.

---

## `w7-tue` · Tuesday · The system — trade

**Hook**
The sale-to-rent ratio is the only tension metric I can actually compute in this
country.

**Body**
Without a transaction register, months of inventory and absorption rate are out
of reach. They require knowing the number of completed sales, which isn't
published anywhere at commune level in useful time.

The sale-to-rent ratio can be counted. Two numbers, both observable on the
portals:

— Esch-sur-Alzette: 792 / 45 → **17.6 : 1**
— Niederkorn: 91 / 3 → **30 : 1**

What it measures: owners' sell-or-let decision.
What it does not measure: clearance speed. Not calculable, and I leave it blank
rather than approximate it.

It's a poor indicator compared with what an MLS would give. I know that.

But it's real, it's reproducible by anyone in ten minutes, and it requires
inventing nothing. In this market, those three properties together are rarer
than you'd think.

**Short cut**
The only tension metric computable here: the sale-to-rent ratio.
Esch: 792 / 45 → 17.6 : 1
Niederkorn: 91 / 3 → 30 : 1
It measures the sell-or-let decision. Not clearance speed — not calculable.
A poor indicator. But real, reproducible, and invention-free.

---

## `w7-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
How I read a market where buyers and renters live the exact opposite reality.

**Body**
The same commune can be comfortable for a buyer and brutal for a tenant. Those
are two markets, not two moods.

**1. Count the two stocks separately.** Seven hundred and ninety-two against
forty-five. The imbalance is obvious the moment you stop saying "the market" in
the singular.

**2. Look for the regulatory cause before the economic one.** The 5 % cap makes
letting unattractive on recent acquisitions. Owners weigh it up, and they sell.
Demographics explain nothing here.

**3. Draw the consequence for each side.** On the buy side: high stock,
softening prices, real negotiating room. On the rental side: forty-five
properties and record rents, so none.

**4. Refuse to estimate what isn't published.** Months of inventory and
clearance time don't exist here. Inventing them would give false precision to an
otherwise sound reading — and false precision is what discredits everything
else.

A buyer's market and a rental shortage can coexist on the same street. That
isn't a contradiction, it's a consequence of the law.

**CTA**
Looking to rent and can't understand why there's nothing? It isn't you. Message
me and I'll tell you where to look.

**Short cut**
How to read a two-speed market:
1. Count the two stocks separately (792 against 45)
2. Look for the regulatory cause before the economic one
3. Draw the consequence for each side
4. Refuse to estimate what isn't published
Buyer's market and rental shortage on the same street. Not a contradiction.

---

## `w7-thu` · Thursday · Market read — public

**Hook**
In Niederkorn: thirty properties for sale to every one to rent.

**Body**
— sale-to-rent ratio: **30 : 1**
— advertised rent, over one year: +7.53 %
— rent over five years: **+46.3 %**
— sale price, over three years: −10.4 %
— local trough reached: April 2026

The same mechanism as Esch, but nearly twice as sharp. And rents climb faster in
proportion to how scarce the rental supply is.

Prices down 10 % over three years, rents up 46 % over five. Those aren't two
contradictory trends: it's one cause seen from both sides.

When permitted yield is capped, owners exit the rental market. For-sale stock
rises, which weighs on prices. Rental stock collapses, which pushes up the rents
of what remains.

For a buyer in Niederkorn, this is one of the better negotiating positions in
the South right now. For a tenant, it's one of the worst places in the country
to be looking.

**CTA**
Looking at Niederkorn? I have a full written analysis on a property on rue de la
Gare. Ask me for it.

**Short cut**
Niederkorn: 30 properties for sale to 1 to rent.
Rents: +7.53 % over a year, +46.3 % over five.
Sale prices: −10.4 % over three years. Trough in April 2026.
Not two contradictory trends: one cause, seen from both sides.
Source: immotop.lu, Niederkorn (June 2026).

---

## `w7-fri` · Friday · Build note — trade

**Hook**
I thought I was measuring demographic pressure. I was measuring an economic
decision.

**Body**
Modelling the sale-to-rent ratio across several localities made one thing hard
to ignore: the imbalance doesn't track demographics. It tracks permitted yield.

Where the cap bites hardest — that is, where acquisitions are most recent and
most expensive relative to market rents — the ratio explodes. And it reproduces
from one commune to the next.

What I thought I was measuring: demographic pressure on housing.
What I'm actually measuring: owners' economic arbitrage.

Two implications that change the advice I give.

For a landlord: scarcity does not offset the cap. There's very little rental
supply, but you can't exploit that — the price is capped by your own purchase
price, not by the market.

For a buyer: the for-sale stock is structural, not cyclical. It won't clear
because rates come down.

**Short cut**
What I learned this week:
The sale-to-rent ratio doesn't track demographics. It tracks permitted yield.
For a landlord: scarcity does not offset the cap.
For a buyer: the for-sale stock is structural, not cyclical.
The rental shortage is a legal artefact.

---
---

# WEEK 8 · Location risk

## `w8-mon` · Monday · The number — public

**Hook**
No crime index by neighbourhood is published in Luxembourg. Any "neighbourhood
safety" map you see is a fabrication.

**Body**
The Police Grand-Ducale releases national and regional statistics. No breakdown
by neighbourhood.

It's a question buyers ask almost every time, especially those arriving from
abroad, and it's one of the very few where I have strictly nothing to give them.

I'd rather say so than work around it.

The temptation to answer sideways is real — "this area has a good reputation",
"there's no problem here". Those are impressions presented as facts, and they're
exactly the sentences that make it impossible for anyone to verify anything in
this industry.

What I recommend instead: go there at different hours. A Tuesday at 8am, a
Friday at 10pm, a Sunday afternoon. You'll learn more in three visits than from
any colour-coded map you find online.

A buyer who asks whether an area is safe deserves "it isn't published, go and
stand there in the evening" rather than a reassuring invention.

**CTA**
Seen a "neighbourhood safety" map of Luxembourg somewhere? Send it to me — I'm
curious about its source.

**Short cut**
Crime by neighbourhood in Luxembourg: zero published data.
The Police Grand-Ducale releases at national and regional level only.
Any "neighbourhood safety" map here is a fabrication.
What I recommend: go there on a Tuesday at 8am, a Friday at 10pm, a Sunday
afternoon.

---

## `w8-tue` · Tuesday · The system — trade

**Hook**
My research module displays what it does not do. That page exists to close the
question.

**Body**
— URL scraping: no
— personal contact collection: no
— profile building: no
— sending messages: no
— sources: permitted APIs, access basis retained

In a market where data is scarce, the temptation to collect it any way you can
is real. It's sometimes even presented as a prospecting trick.

I preferred to make the answer visible in the interface rather than bury it in
documentation nobody reads. Every source keeps evidence of its access basis and
the date it was connected.

The reason isn't only legal. A tool that collects indiscriminately produces data
you can't cite — and data you can't cite is useless in an analysis whose entire
argument is traceability.

Ethics and usefulness point the same way here, which makes the decision easy.

**Short cut**
What my research module refuses to do, displayed in the interface:
URL scraping · personal contact collection · profile building · sending messages.
Sources: permitted APIs, access basis and connection date retained.
Data you can't cite is useless in an analysis built on traceability.

---

## `w8-wed` · Wednesday · How I check — public · FLAGSHIP

**Hook**
The four checks I run before any offer. None is spectacular, and almost nobody
does all four.

**Body**
**1. The definitive energy certificate.** Not the provisional one. The price
premium rests on it, and a downgrade changes the property's positioning.

**2. The managing agent's budget and reserve fund.** A five-unit co-ownership
splits a roof across five shares instead of thirty. The governance is simpler;
the invoice is not.

**3. The parcel's zoning.** PAG, PAP, flood zones, and CASIPO in the south.
Fifteen minutes on geoportail.lu before committing for thirty years.

**4. The tax amounts, with the notary.** Bëllegen Akt, capital gains regime,
deduction caps. Three figures that have moved recently and that no simulation
replaces.

These are not sophisticated-investor precautions. They are the minimum for
buying a home.

They take half a day in total, they are all free, and every one of them has, in
my experience, already changed somebody's decision.

Eight weeks of publishing numbers here. If you keep one post, keep this one.

**CTA**
About to make an offer? Send me the address and I'll tell you which of the four
your file already covers.

**Short cut**
The four checks before any offer:
1. The definitive energy certificate (not the provisional one)
2. The managing agent's budget and reserve fund
3. Zoning: PAG, PAP, flood zones, CASIPO — geoportail.lu
4. The tax amounts, confirmed by the notary
Half a day. Free. Almost nobody does all four.

---

## `w8-thu` · Thursday · Market read — public

**Hook**
Buying in Esch on the bet that Belval will lift everything is arriving fifteen
years into the story.

**Body**
— cumulative investment in Belval: **€3.2 billion**
— masterplan left to develop: **less than 15 %**
— committed to infrastructure 2025-2026: €180 million
— price at Belval-Université: €4,911/m², flat at −0.0 %
— rent at Belval-Université: €15.75/m², weak

The district carrying the entire narrative of the South's renewal sells below
Esch's commune average and rents poorly.

This isn't a judgement on Belval. It's a reading of the cycle: most of the
transformation effect has already been produced and already priced in. Less than
15 % of the masterplan remains, and new supply has caught up with demand there.

The "buy here, Belval is going up" argument was right for fifteen years. It
describes a move that is largely finished.

What's still interesting in the South is elsewhere — Al-Esch, for instance,
yielded 5.05 % in my July capture, against 3.85 % at Belval-Université.

**CTA**
Being sold a property on the promise of Belval? Ask what's left to build. Or
message me — I have the figures.

**Short cut**
Belval: €3.2 billion invested, less than 15 % of the masterplan left.
Price at Belval-Université: €4,911/m², flat at −0.0 %.
Rent: €15.75/m², weak.
The district carrying the whole southern narrative sells below the commune
average.
Sources: Fonds Belval · Paperjam · immotop.lu (July 2026).

---

## `w8-fri` · Friday · Build note — trade

**Hook**
After eight weeks of publishing figures, the part of the system I use most isn't
the score.

**Body**
It's the list of remaining checks. Every analysis ends with what it doesn't know
yet:

— property checks: definitive certificate, managing agent, zoning, works
— tax checks: Bëllegen Akt, capital gains, deductions
— financial checks: personalised rate, communal property tax
— every line carries its source and its status

A score tells you where you stand. The list tells you what to do tomorrow
morning.

In a market with no transaction register, the second is worth more than the
first. The score rests on public data anyone can contest; the list rests on
documents you can go and fetch, and those don't get argued with.

It's also the output clients actually read. The score, they look at. The list,
they print.

Eight weeks of posts, one idea underneath: in a market where nothing is
published, rigour isn't a nice-to-have. It's the only available advantage.

**Short cut**
After eight weeks of numbers, the output I use most isn't the score.
It's the list of remaining checks: property, tax, financing — each line with its
source and its status.
A score tells you where you stand. The list tells you what to do tomorrow
morning.
The score, they look at. The list, they print.

---
---

## Standing disclaimers

**On the figures**
> Figures verified 2026-08-05. Sources: Observatoire de l'Habitat, STATEC, BCL,
> pfi.public.lu, immotop.lu. Refresh quarterly.

**On tax amounts**
> Indicative amounts. The Bëllegen Akt, the capital gains regime and deduction
> caps have all changed recently: have them confirmed by your notary before any
> decision.

**On the analyses**
> Informational analysis. Not a valuation and not investment advice.

**Never published**
- No critical analysis of a named or identifiable listing.
- No capture of the `/prospecting`, `/crm` or `/kanban` screens without cropping
  from ~20 % of the width onward: they display private individuals' names and
  addresses.
- No number without a source. If there isn't one, the post doesn't ship.
