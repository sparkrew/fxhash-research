# 12. Archive size and economic metadata

how big the downloaded archive is, what file types it holds, and — from the
platform metadata — how many times each project was minted and how much
cryptocurrency was exchanged.

## On-disk size and file types

`archive_report.py` walks a `projects/` directory and writes two files:

- **`data/folder_sizes.csv`** — one row per artwork: `relpath, files, bytes, size_human`.
- **`data/file_type_totals.csv`** — bytes and file counts per extension across the archive.

```bash
python archive_report.py                # the local 10% sample
python archive_report.py ~/projects     # the full archive (on DIRO)
```

### Total size

| Archive | Projects | Size |
|---------|---------:|-----:|
| Full archive (DIRO) | 27,596 | **94 GB** |
| 10% sample (GitHub) | 2,761 | 12.2 GB |

### File types (10% sample)

Images dominate by volume; JavaScript is the largest *code* type.

| Type | Size |
|------|-----:|
| `.png` | 6.7 GB |
| `.js` | 3.3 GB |
| `.jpg` | 744 MB |
| `.mp3` | 390 MB |
| `.onnx` (ML weights) | 184 MB |
| `.wasm` | 183 MB |
| `.webp` | 110 MB |
| `.html` | 45 MB (every project has an `index.html`) |

Plus `.gif`, `.json`, `.ttf`, and a long tail. Full per-project composition is in
[07 — Code statistics](07-code-statistics.md).

## Economic metadata (mints and money)

`collect_metadata.py` pulls per-project economics from the fxhash v2 API and
writes **`data/project_metadata.csv`** (all 28,194 projects):

```bash
python collect_metadata.py
```

Columns: `minted` (editions minted), `primary_volume` / `secondary_volume` /
`total_volume` (in native currency — XTZ or ETH), `primary_sales` / `total_sales`
(counts), and `total_volume_usd`.

### Where it comes from

fxhash exposes a `market_stat` object per project (GraphQL type `market_stats`).
Native amounts are stored in the chain's smallest unit — **mutez** (1 XTZ = 10⁶)
on Tezos, **wei** (1 ETH = 10¹⁸) on EVM — and the fiat field is in **cents**; the
script converts all three to whole units.

### Totals

| | Value |
|---|------:|
| Editions minted (all projects) | **2,704,600** |
| Tezos volume (lifetime) | ~30.3M XTZ (10.2M primary/mint) |
| EVM volume (lifetime) | ~632 ETH (483 primary/mint) |
| Combined, in USD | ≈ $54M |
| Projects with any sales | 26,716 |
| Projects never minted (0) | 1,124 |

Per-project mint counts and their distribution are covered in
[10 — Editions](10-editions.md); this page adds the **money** dimension.

Back to the [documentation index](README.md).
