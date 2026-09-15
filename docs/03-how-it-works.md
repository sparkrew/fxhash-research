# 3. How the code works

The project has two stages: **collect** (`fxhash_scraper.py`) and **analyse**
(`analysis.ipynb`). They communicate through one file, `data/fxhash_tokens.csv`.

```
fxhash v2 API  ──►  fxhash_scraper.py  ──►  data/fxhash_tokens.csv  ──►  analysis.ipynb  ──►  charts
```

## 3.1 The data source: fxhash v2 GraphQL API

Data comes from the fxhash **v2** API:

```
https://api.v2.fxhash.xyz/v1/graphql
```

This is a **GraphQL** endpoint (backed by Hasura). GraphQL lets us ask for
exactly the fields we want in a single request. The `/v1/graphql` path and the
`onchain { ... }` namespace are the give-away that it is a Hasura server.

The key detail is that this API is **multi-chain**: one table,
`onchain.generative_token`, holds projects from *every* chain, and each row has
a `chain` field. That single table is therefore the source for **both** fxhash
versions — the scraper just filters it per version:

| Version | Chains it filters on |
|---------|----------------------|
| fxhash 1.0 (Tezos) | `TEZOS` |
| fxhash 2.0 (EVM) | `ETHEREUM`, `BASE` |

The query the scraper sends (note the `where: {chain: {_in: $chains}}` filter):

```graphql
query Tokens($chains: [String!], $limit: Int!, $offset: Int!) {
  onchain {
    generative_token(
      where: {chain: {_in: $chains}}
      limit: $limit
      offset: $offset
      order_by: {created_at: asc}
    ) {
      id
      name
      chain
      created_at
      mint_opens_at
      supply
      iterations_count
      author { id name }
    }
  }
}
```

### Pagination

The API returns at most **100 rows per request**. To read the full history the
scraper uses **offset pagination**: it asks for rows `0–99`, then `100–199`, and
so on, always ordered by `created_at` so the sequence is stable. It stops when a
page comes back empty. With ~28k projects that is a bit under 300 requests, with
a short pause between them to be polite to the server.

## 3.2 The scraper (`fxhash_scraper.py`)

The file collects the **two versions in two separate passes**, driven by a
`VERSIONS` mapping (`{"fxhash 1.0 (Tezos)": ["TEZOS"], "fxhash 2.0 (EVM)":
["ETHEREUM", "BASE"]}`). It is split into focused functions:

| Function | Responsibility |
|----------|----------------|
| `fetch_page(chains, offset, limit)` | Send one GraphQL request for the given chains. Retries up to 4 times with a growing delay if the network or API hiccups. |
| `scrape_version(version, chains)` | Page through every project of **one** version until a page comes back empty, tagging each row with its `version`. |
| `scrape_all()` | Run `scrape_version` once per entry in `VERSIONS` and combine the results. |
| `save_csv(tokens, path)` | Write all rows to `data/fxhash_tokens.csv`. |
| `main()` | Run the whole thing and print a per-version and per-chain summary. |

Because each version is scraped on its own, the console output makes the split
obvious, e.g.:

```
fxhash 1.0 (Tezos)  (chains: TEZOS)
  fetched 100 records (total 100), offset=0
  ...
fxhash 2.0 (EVM)  (chains: ETHEREUM, BASE)
  fetched 100 records (total 100), offset=0
  ...
By version:
  fxhash 1.0 (Tezos): 27430
  fxhash 2.0 (EVM): 764
```

The author object is flattened into two columns (`author_name`, `author_id`) so
the output is a plain, flat CSV that pandas can read directly.

## 3.3 The dataset (`data/fxhash_tokens.csv`)

One row per project. Columns:

| Column | Type | Description |
|--------|------|-------------|
| `id` | string | Project id on the platform. |
| `name` | string | Project title. |
| `version` | string | `fxhash 1.0 (Tezos)` or `fxhash 2.0 (EVM)`. |
| `chain` | string | `TEZOS`, `ETHEREUM`, or `BASE`. |
| `author_name` | string | Artist's display name. |
| `author_id` | string | Artist's wallet address. |
| `created_at` | ISO datetime | When the project was created on-chain. |
| `mint_opens_at` | ISO datetime | When minting opened — treated as the **release date**. |
| `supply` | number | Edition size (how many images can be minted). |
| `iterations_count` | number | How many have actually been minted so far. |

## 3.4 The notebook (`analysis.ipynb`)

The notebook reads the CSV and builds the charts. Its logic, cell by cell:

1. **Load & clean.** Read the CSV, parse `mint_opens_at` into real datetimes,
   drop any rows without a date, and sort by date. A derived `version` column
   maps `TEZOS → "fxhash 1.0 (Tezos)"` and everything else →
   `"fxhash 2.0 (EVM)"`.
2. **Helpers.** Three small functions are reused by every chart:
   - `cumulative_series(frame)` — a running total over time (`cumsum`).
   - `monthly_series(frame)` — new projects grouped per month (`resample('MS')`).
   - `style_date_axis(ax, interval_months)` — spaces out the date ticks, formats
     them as `YYYY-MM`, and rotates them so labels never overlap.
3. **Chart 1 (combined).** Cumulative curves for both versions on one plot. Because
   fxhash 2.0 is ~35× smaller than 1.0, it is drawn on a **secondary right-hand
   y-axis** (`twinx`) so both curves stay readable — each has its own scale.
4. **Chart 2 (Tezos).** Cumulative growth plus a monthly bar chart for fxhash 1.0.
5. **Chart 3 (EVM).** Cumulative growth plus a monthly bar chart for fxhash 2.0,
   **stacked by chain** so Ethereum and Base are distinguishable.
6. **Summary table.** A pivot of new projects per **year × version**, with a total
   column.

### A note on the aggregation

`cumsum` and `resample` are the two core ideas:

- **`cumsum`** turns "one row per project" into a running total — the value on
  any date is "how many projects existed by then". That is the cumulative curve.
- **`resample('MS')`** buckets projects into calendar months and counts each
  bucket — that is the "new projects per month" bar chart. `'MS'` means
  *month-start*.

## 3.5 The other tools

Beyond the growth pipeline above, the project has tools that work on the
**downloaded source code** (see [05](05-downloading-code.md)):

| Tool | What it does | Docs |
|------|--------------|------|
| `download_projects.py` | Downloads project source code from IPFS, by version and year. | [05](05-downloading-code.md) |
| `js_libraries.ipynb` | Counts and charts the most common `.js` files across projects. | [07](07-code-statistics.md) |
| `file_composition.ipynb` | Interactive stacked charts of each project's file types. | [07](07-code-statistics.md) |
| `analyze_licenses.py` | Classifies each project's license file into license types. | [08](08-licenses.md) |
| `run_artworks.py` | Runs each artwork headless (offline) and records whether it executes. | [09](09-execution.md) |
| `editions.ipynb` | Charts how many editions were minted per project (`iterations_count`). | [10](10-editions.md) |
| `artists.ipynb` | Charts how many artists published and the projects-per-artist spread. | [11](11-artists.md) |

Each writes its results to a CSV under `data/` and (for the notebooks) renders
charts inline.

Continue with [4. Trends & findings](04-trends.md).
