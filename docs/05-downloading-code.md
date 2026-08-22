# 5. Downloading project source code

Besides the metadata pipeline (scraper + notebook), the project includes a tool,
**`download_projects.py`**, that downloads the **actual generative source code**
of fxhash projects — for **either version** — organised by version and year.

## Where the code lives

Every fxhash project stores its generative program off the main database, and
the `generative_uri` field points to it. There are **two storage systems**,
depending on the project:

| Scheme | Storage | How it is fetched |
|--------|---------|-------------------|
| `ipfs://<CID>` | **IPFS** — a content-addressed file network | Through a public gateway (`https://ipfs.io`), which can return the whole folder as a TAR in one request. |
| `onchfs://<hash>` | **ONCHFS** — fxhash's on-chain file system (the code lives entirely inside the blockchain) | Only through fxhash's sandbox resolver at `https://<hash>.onchfs.fxhash2.xyz`. |

fxhash 1.0 (Tezos) projects are almost all on **IPFS**. fxhash 2.0 (EVM) projects
are a mix: many on IPFS, a growing share on **ONCHFS**.

## What the script does

1. Lists the projects of the chosen version from the API, with their
   `mint_opens_at` date and `generative_uri`.
2. **Groups them by release year** and picks a sample of *N per year*, evenly
   spread across each year.
3. For each selected project it looks at the URI scheme and downloads the code:
   IPFS folders via a gateway TAR, ONCHFS via the sandbox resolver. Each project
   is extracted into its own folder.

The result is organised by version and year:

```
projects/
├── fxhash-1.0-tezos/
│   ├── 2021/
│   │   ├── FXHASH Generative Logo__0/
│   │   │   ├── index.html
│   │   │   ├── bundle.js
│   │   │   ├── style.css
│   │   │   └── _source.txt
│   │   └── ...
│   └── 2022/ ...
└── fxhash-2.0-evm/
    ├── 2023/ ...
    └── 2024/ ...
```

Each project folder is named `<project name>__<id>` and contains the full code
plus a `_source.txt` recording the id, name, date, and original `generative_uri`.

## How to run

```bash
python download_projects.py               # 10 per year, version 1 (Tezos)
python download_projects.py 20 2          # 20 per year, version 2 (EVM)
python download_projects.py 10 all        # 10 per year, both versions
```

Arguments: `download_projects.py [projects_per_year] [version]`, where `version`
is `1`, `2`, or `all`.

## Design notes

- **Resumable.** A project whose folder already exists and is non-empty is
  skipped, so you can stop and re-run without re-downloading everything.
- **Robust.** Failures are retried and then logged and skipped (with the URI
  scheme shown, e.g. `download failed (onchfs)`), so one bad project never stops
  the run.
- **Parallel.** Downloads run in a small thread pool (`WORKERS = 5`).
- **Safe extraction.** TAR archives come from a public source, so the extractor
  only writes regular files/directories and rejects path-traversal entries. The
  files are saved to disk, never executed.

## Known limitation: ONCHFS

IPFS-based projects download reliably. **ONCHFS** (fully on-chain) projects are
served only through fxhash's sandbox resolver (`<hash>.onchfs.fxhash2.xyz`),
which is slow and often unreachable — its path-based endpoint returns errors and
the per-artwork subdomains may not resolve on every network. The script attempts
them (best-effort) and logs the ones it cannot fetch. In practice this means the
IPFS share of each version downloads cleanly, while some fxhash 2.0 ONCHFS
projects may be skipped. Re-running later, or from a network where the resolver
is reachable, will pick up the ones that failed.

## Download statistics

A sample of **10% of the projects per year** was downloaded for each version
(IPFS projects only — see the ONCHFS limitation above). Counts per release year:

| Year | fxhash 1.0 (Tezos) | fxhash 2.0 (EVM) |
|------|-------------------:|-----------------:|
| 2021 | 483 | — |
| 2022 | 1,526 | — |
| 2023 | 558 | 2 |
| 2024 | 114 | 24 |
| 2025 | 26 | 19 |
| 2026 | 1 | 9 |
| **Total** | **2,708** | **54** |

Grand total: **2,762 projects** (~12 GB of code on disk). One project's 136 MB
ONNX model weight is excluded (over GitHub's 100 MB file limit); the rest of that
project is included.

Re-run `download_projects.py 10% all --sync` to reproduce this exact sample.

For statistics about the downloaded code (file types, `.js` files) see
[06 — Code statistics](06-code-statistics.md); for licenses see
[07 — Licenses](07-licenses.md).

Back to the [documentation index](README.md).
