# fxhash-research

A Python system that collects data about projects (images) from
[fxhash](https://www.fxhash.xyz/) via its public GraphQL API and plots how their
number grew from the platform launch (November 2021) until today.

It covers **both versions** of the platform:

- **fxhash 1.0** — the original platform on **Tezos**
- **fxhash 2.0** — the newer EVM version on **Ethereum** and **Base**

> 📖 **Full documentation is in [`docs/`](docs/README.md)** — overview & theory,
> setup, a code walkthrough, and the trend findings.

## How it works

1. **`fxhash_scraper.py`** calls the fxhash **v2** API
   (`https://api.v2.fxhash.xyz/v1/graphql`) and collects **both versions** — it
   makes one pass for fxhash 1.0 (chain `TEZOS`) and one for fxhash 2.0 (chains
   `ETHEREUM` + `BASE`), tags each row with a `version`, and saves everything to
   one large dataset file: **`data/fxhash_tokens.csv`**.
2. **`analysis.ipynb`** — a Jupyter notebook: open it, run the cells top to
   bottom, and it reads the dataset and draws the charts right in the notebook.
3. **`download_projects.py`** — a separate tool that downloads the actual
   generative **source code** of fxhash projects (either version), saving a
   sample of N per year into
   `projects/<version>/<year>/<name>__<id>/`. See
   [docs/05-downloading-code.md](docs/05-downloading-code.md).

## What data is collected

For each project (`generative_token`):

| Field | Description |
|-------|-------------|
| `id` | project id on the platform |
| `name` | title |
| `version` | `fxhash 1.0 (Tezos)` or `fxhash 2.0 (EVM)` |
| `chain` | blockchain: `TEZOS` / `ETHEREUM` / `BASE` |
| `author_name` | author's display name |
| `author_id` | author's wallet address |
| `created_at` | on-chain creation timestamp |
| `mint_opens_at` | release date (when minting opened) |
| `supply` | edition size |
| `iterations_count` | number of minted iterations so far |

## Charts produced (in the notebook)

1. **Combined** — cumulative projects for fxhash 1.0 (Tezos) vs 2.0 (EVM) on one
   plot (EVM on its own right-hand axis, since it is much smaller).
2. **Separate — fxhash 1.0 (Tezos):** cumulative growth + new projects per month.
3. **Separate — fxhash 2.0 (EVM):** cumulative growth + new projects per month,
   split by chain (Ethereum vs Base).

Plus a summary table of new projects per year and version.

## How to run

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Build the dataset (creates data/fxhash_tokens.csv)
python fxhash_scraper.py

# 3. Open the notebook and run all cells
jupyter notebook analysis.ipynb
```

In the notebook: **Kernel → Restart & Run All** (or press Shift+Enter cell by
cell) — the charts will appear.

## Project structure

```
fxhash-research/
├── fxhash_scraper.py     # data collection from the v2 API -> CSV
├── download_projects.py  # download project source code from IPFS, by year
├── analysis.ipynb        # analysis and 3 charts (Jupyter)
├── requirements.txt      # Python dependencies
├── README.md
├── docs/                 # full documentation (start at docs/README.md)
│   ├── 01-overview.md
│   ├── 02-getting-started.md
│   ├── 03-how-it-works.md
│   ├── 04-trends.md
│   └── 05-downloading-code.md
├── data/
│   └── fxhash_tokens.csv # dataset (created by the scraper)
└── projects/             # downloaded project code (created by download_projects.py)
    ├── fxhash-1.0-tezos/<year>/<name>__<id>/
    └── fxhash-2.0-evm/<year>/<name>__<id>/
```

## API notes

Data comes from `https://api.v2.fxhash.xyz/v1/graphql` (Hasura). The scraper
queries `onchain.generative_token`, ordered by `created_at`, and paginates with
`limit` / `offset`. The API caps a page at 100 rows, so the scraper walks the
full history in batches of 100.
