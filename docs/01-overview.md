# 1. Overview & theory

## What this project does

This project collects data about every **project** published on
[fxhash](https://www.fxhash.xyz/) and studies **how their number grew over
time** — from the platform's launch in November 2021 up to today.

It has two moving parts:

- a **scraper** (`fxhash_scraper.py`) that downloads the data into a CSV file;
- a **Jupyter notebook** (`analysis.ipynb`) that turns that CSV into charts.

## A little background

### Generative art and NFTs

fxhash is a marketplace for **generative art**. Instead of uploading a finished
picture, an artist uploads a small program (usually HTML + JavaScript). Every
time a collector *mints* the piece, the program runs once with a unique random
seed and produces a one-of-a-kind image. Each minted result is stored on a
blockchain as an **NFT** (a non-fungible token — a unique, verifiable record of
ownership).

So there are two levels:

| Level | fxhash term | Meaning |
|-------|-------------|---------|
| The program / collection | **generative token** (a *project*) | One artwork by one artist; can produce many images. |
| A single minted image | **gentk** / *iteration* | One concrete output of that program, owned by a collector. |

This project counts **projects** (generative tokens) — i.e. how many distinct
artworks artists have released — not the millions of individual minted images.
That keeps the dataset a manageable ~28k rows and directly answers "how many new
artworks appear over time".

### The two versions of fxhash

fxhash exists in two generations, and our dataset contains **both**:

- **fxhash 1.0** — the original platform, running on the **Tezos** blockchain
  (launched November 2021). This is where almost all historical activity lives.
- **fxhash 2.0** — a newer version on **EVM** chains, namely **Ethereum** and
  **Base** (Base is an Ethereum layer-2 network). It launched in **December
  2023**.

The `chain` column in the dataset (`TEZOS` / `ETHEREUM` / `BASE`) is what lets us
separate the old world from the new one.

> **Why "cumulative"?** The headline question is *how the total number of
> artworks changed from the beginning until now*. A **cumulative** curve answers
> that directly: at any date it shows the running total of every project
> released up to that point, so the line only ever goes up and its slope shows
> how fast new work was appearing.

Continue with [2. Getting started](02-getting-started.md).
