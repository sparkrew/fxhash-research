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

Size is the sum of all file sizes (logical bytes), the figure that matters for
archival. Measured on the full archive on 2026-09-20.

| Archive | Projects | Files | Size |
|---------|---------:|------:|-----:|
| Full archive (DIRO) | 27,595 | 635,480 | **120 GB** (112 GiB) |
| 10% sample (GitHub) | 2,761 | 62,444 | 12.2 GB |

(`du -sh` reports ~94 GiB of disk *blocks* for the full archive; the 120 GB above
is the sum of actual file sizes.)

### File types (full archive)

Images dominate by volume; JavaScript is the largest *code* type. Every project
has an `index.html`.

| Type | Files | Size |
|------|------:|-----:|
| `.png` | 347,355 | 60.5 GB |
| `.js` | 86,162 | 32.0 GB |
| `.jpg` | 29,387 | 6.0 GB |
| `.mp3` | 4,248 | 3.0 GB |
| `.wasm` | 332 | 1.6 GB |
| `.gif` | 5,963 | 1.1 GB |
| `.webp` | 18,970 | 752 MB |
| `.svg` | 7,982 | 640 MB |
| `.ttf` | 2,190 | 562 MB |
| `.obj` (3D models) | 571 | 534 MB |
| `.onnx` (ML weights) | 49 | 455 MB |
| `.html` | 28,102 | 446 MB |
| `.glb` (3D models) | 1,531 | 442 MB |

Plus `.data`, `.json`, and a long tail. Full breakdown in
`data/file_type_totals.csv`; per-project composition in
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
