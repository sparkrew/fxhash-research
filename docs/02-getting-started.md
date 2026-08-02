# 2. Getting started

This page explains how to set the project up, collect the data, and open the
charts.

## Requirements

- **Python 3.10+** (developed on 3.12)
- Internet access (the scraper calls a public API)
- No API key or account is required — the fxhash API is public.

## Step 1 — Install dependencies

From the project root:

```bash
pip install -r requirements.txt
```

This installs:

| Package | Used for |
|---------|----------|
| `requests` | calling the fxhash GraphQL API |
| `pandas` | loading and aggregating the dataset |
| `matplotlib` | drawing the charts |
| `jupyter` | running the notebook |

## Step 2 — Collect the dataset

```bash
python fxhash_scraper.py
```

The scraper pages through the whole fxhash history and writes a single file:

```
data/fxhash_tokens.csv
```

While running it prints its progress, e.g.:

```
Scraping projects from the fxhash v2 GraphQL API...
  fetched 100 records (total 100), offset=0
  fetched 100 records (total 200), offset=100
  ...
Done! Saved 28194 projects to data/fxhash_tokens.csv
  BASE: 643
  ETHEREUM: 121
  TEZOS: 27430
```

It takes roughly a minute (about 280 requests of 100 rows each). You only need
to run it again when you want to **refresh** the data with newly released
projects.

## Step 3 — Open the notebook

```bash
jupyter notebook analysis.ipynb
```

In Jupyter, run every cell top to bottom — the easiest way is the menu
**Kernel → Restart & Run All**. The three charts and the summary table appear
inline under their cells.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `FileNotFoundError: data/fxhash_tokens.csv` | Run step 2 first — the notebook needs the dataset. |
| Scraper prints retry warnings | Transient network/API hiccups; it retries automatically. If it fails completely, just run it again. |
| Charts look empty | Make sure the cells ran **in order** — the first cell loads the data that the others rely on. |

Continue with [3. How the code works](03-how-it-works.md).
