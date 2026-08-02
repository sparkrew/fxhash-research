# 4. Trends & findings

This page summarises what the charts show. All numbers come from the dataset
collected by `fxhash_scraper.py` (28,194 projects, spanning **Nov 2021 → Aug
2026**). Re-run the scraper and notebook to refresh them.

## The headline

- **Total projects ever released: ~28,200.**
- **fxhash 1.0 (Tezos): 27,430 — about 97% of everything.**
- **fxhash 2.0 (EVM): 764** — Base 643 + Ethereum 121.

New projects per year and version:

| Year | fxhash 1.0 (Tezos) | fxhash 2.0 (EVM) | Total |
|------|-------------------:|-----------------:|------:|
| 2021 | 4,829 | 0 | 4,829 |
| 2022 | 15,257 | 0 | 15,257 |
| 2023 | 5,678 | 51 | 5,729 |
| 2024 | 1,376 | 347 | 1,723 |
| 2025 | 289 | 256 | 545 |
| 2026 | 1 | 110 | 111 |

## How the tendency changed

### fxhash 1.0 (Tezos): explosive launch, then a long decline

- The platform launched in **November 2021** and grew almost vertically. The
  single busiest month was **December 2021 with 3,251 new projects**.
- **2022 was the peak year: 15,257 new projects** — more than half of all Tezos
  projects ever, released in one year.
- From 2023 onward the pace fell sharply: 5,678 (2023) → 1,376 (2024) → 289
  (2025). In the most recent months Tezos is effectively **dormant** (well under
  one new project per month).
- On the cumulative chart this reads as a classic **S-curve**: a steep rise in
  2022 that flattens into a plateau near ~27,400 as new releases dry up.

### fxhash 2.0 (EVM): a small but steady second act

- fxhash 2.0 opened on **Ethereum on 14 December 2023**, then added **Base** in
  2024.
- **Base quickly became the dominant chain** for the new version: 643 projects
  vs only 121 on Ethereum. In effect the newer, cheaper Base network absorbed
  most fxhash 2.0 activity.
- Volume is modest — a fairly steady **~30–50 new projects per month** — but it
  is **consistent**, whereas Tezos has faded.
- Because of that crossover, from about **February 2025** onward the EVM version
  releases *more* new projects per month than Tezos does, even though its all-
  time total is still tiny by comparison.

## The big picture

The data tells the story of a platform shifting generations:

1. **2021–2022:** a Tezos gold rush — the vast majority of all fxhash artworks
   were minted in this short, intense window.
2. **2023–2024:** Tezos activity cools while fxhash bootstraps its EVM version.
3. **2025–2026:** Tezos is essentially finished as a source of new work; the
   (much smaller) stream of new projects now comes almost entirely from
   fxhash 2.0, led by Base.

So "how did the number of pictures change from the beginning until now?" — it
surged on Tezos to ~27k within roughly a year, plateaued there, and the modest
ongoing growth has migrated to the EVM chains.

## Caveats

- We count **projects**, not individual minted images; the number of actual
  minted pieces is far larger.
- **`mint_opens_at`** is used as the release date. A handful of unusual or
  moderated entries could shift small monthly counts slightly, but they do not
  change the overall trend.
- The dataset is a **snapshot**. Later dates (e.g. 2026) will keep filling in as
  new projects are released and you re-run the scraper.

Back to the [documentation index](README.md).
