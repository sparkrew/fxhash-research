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
4. **`js_libraries.ipynb`** and **`file_composition.ipynb`** — notebooks that
   analyse the downloaded code: the most common `.js` files, and the file-type
   composition of each project (interactive). See
   [docs/07-code-statistics.md](docs/07-code-statistics.md).
5. **`analyze_licenses.py`** — classifies each project's license file into types
   (MIT, Creative Commons, LGPL, ...). See
   [docs/08-licenses.md](docs/08-licenses.md).
6. **`run_artworks.py`** — runs each artwork in a headless browser (offline) to
   check whether it still executes, and records a verdict per project. See
   [docs/09-execution.md](docs/09-execution.md).
7. **`editions.ipynb`** — charts how many editions (`iterations_count`) were
   minted per project: distribution, top projects, and per-version totals. See
   [docs/10-editions.md](docs/10-editions.md).
8. **`artists.ipynb`** — charts how many different artists published and how many
   projects each released. See [docs/11-artists.md](docs/11-artists.md).
9. **`collect_metadata.py`** — collects per-project mints and cryptocurrency
   volume (primary / secondary / total, in XTZ / ETH and USD) into
   `data/project_metadata.csv`. See [docs/12-archive-metadata.md](docs/12-archive-metadata.md).
10. **`archive_report.py`** — reports the on-disk archive: total size, size per
    artwork, and file types. See [docs/12-archive-metadata.md](docs/12-archive-metadata.md).

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
├── fxhash_scraper.py       # data collection from the v2 API -> CSV
├── download_projects.py    # download project source code from IPFS, by year
├── analyze_licenses.py     # classify each project's license file into types
├── run_artworks.py         # run each artwork (offline) and check it executes
├── collect_metadata.py     # per-project mints + cryptocurrency volume -> CSV
├── archive_report.py       # archive size, per-artwork size, and file types
├── analysis.ipynb          # project-growth analysis and 3 charts (Jupyter)
├── js_libraries.ipynb      # most common .js files across projects
├── file_composition.ipynb  # interactive file-type composition per project
├── editions.ipynb          # editions minted per project (iterations_count)
├── artists.ipynb           # distinct artists and projects-per-artist spread
├── requirements.txt        # Python dependencies
├── README.md
├── docs/                   # full documentation (start at docs/README.md)
│   ├── 01-overview.md
│   ├── 02-getting-started.md
│   ├── 03-how-it-works.md
│   ├── 04-trends.md
│   ├── 05-downloading-code.md
│   ├── 06-archive-coverage.md
│   ├── 07-code-statistics.md
│   ├── 08-licenses.md
│   ├── 09-execution.md
│   ├── 10-editions.md
│   ├── 11-artists.md
│   ├── 12-archive-metadata.md
│   └── img/                # chart images embedded in the docs
├── data/                   # datasets and stats (created by the scripts/notebooks)
│   ├── fxhash_tokens.csv
│   ├── js_file_counts.csv
│   ├── project_file_types.csv
│   ├── license_types.csv
│   ├── execution_results.csv
│   ├── project_metadata.csv    # mints + cryptocurrency volume per project
│   ├── folder_sizes.csv        # size per artwork folder
│   └── file_type_totals.csv    # bytes/files per file type
├── charts/                 # standalone interactive HTML charts + fail screenshots
└── projects/               # downloaded project code (created by download_projects.py)
    ├── fxhash-1.0-tezos/<year>/<name>__<id>/
    └── fxhash-2.0-evm/<year>/<name>__<id>/
```

## API notes

Data comes from `https://api.v2.fxhash.xyz/v1/graphql` (Hasura). The scraper
queries `onchain.generative_token`, ordered by `created_at`, and paginates with
`limit` / `offset`. The API caps a page at 100 rows, so the scraper walks the
full history in batches of 100.
