# 6. Archive coverage — what was saved and what was lost

This page answers the two headline preservation questions: **how much of fxhash
can still be salvaged** (downloaded and kept offline), and **what cannot — and
why**. The numbers here are measured against the full dataset of **28,194
projects** collected by the scraper (see [04 — Trends](04-trends.md)).

## Why coverage splits by storage

Every fxhash project stores its generative program off the main database, and
the `generative_uri` field points to it. There are **two storage systems**, and
they behave very differently for an offline archive:

| Scheme | Storage | Can it be archived offline? |
|--------|---------|-----------------------------|
| `ipfs://<CID>` | **IPFS** — a content-addressed file network | **Yes.** A public gateway returns the whole project folder, which we mirror to disk. |
| `onchfs://<hash>` | **ONCHFS** — fxhash's on-chain file system (the code lives entirely inside the blockchain) | **No, in practice.** Reachable only through fxhash's sandbox resolver, which is slow, rate-limited, and often unreachable. |

So coverage is decided almost entirely by *where a project stored its code*, not
by whether the artwork itself is "good" or "broken". IPFS projects download
cleanly; ONCHFS projects are effectively lost for offline preservation.

## The full archive — what was saved

The preservation archive downloads **every IPFS-backed project of both
versions**. Measured on the archive machine (DIRO), verified **2026-09-14**:

| Version | Total projects | On ONCHFS (lost) | On IPFS (target) | Saved on disk |
|---------|---------------:|-----------------:|-----------------:|--------------:|
| fxhash 1.0 (Tezos) | 27,430 | 371 | 27,059 | 27,052 |
| fxhash 2.0 (EVM) | 764 | 220 | 544 | 544 |
| **Total** | **28,194** | **591** | **27,603** | **27,596** |

- **Saved: 27,596 of 28,194 projects ≈ 97.9%.**
- The IPFS set is mirrored almost in full — only ~7 Tezos stragglers remain, which
  the resumable download picks up on a re-run (see [05](05-downloading-code.md)).
- On disk the archive is **94 GB across 27,596 project folders**, organised as
  `<version>/<year>/<name>__<id>/`.

The full archive lives on the lab's research infrastructure (DIRO), not on
GitHub: it is too large for a repository, and most projects carry no reuse
license (see [08 — Licenses](08-licenses.md)), so it stays private.

## What couldn't be saved, and why

**591 projects (~2.1%) cannot be downloaded — all of them because their code is
stored on ONCHFS**, fully on-chain. fxhash serves ONCHFS only through its sandbox
resolver (`<hash>.onchfs.fxhash2.xyz`), which is unreliable and rate-limited, so
these projects have no working offline path today. The code is not *gone* — it is
on the blockchain — but it is not retrievable for an archive by any practical
means we have.

The split between the two platform versions is the interesting part:

| Version | ONCHFS projects | Share of that version |
|---------|----------------:|----------------------:|
| fxhash 1.0 (Tezos) | 371 | 1.4% |
| fxhash 2.0 (EVM) | 220 | **28.8%** |

Tezos artists almost always used IPFS, so barely 1% of fxhash 1.0 is unreachable.
But **fxhash 2.0 increasingly stores code fully on-chain** — nearly a third of all
EVM projects are on ONCHFS. As the platform moved to EVM chains, the newer, more
"permanent" on-chain storage is paradoxically the harder one to preserve offline.
If fxhash 2.0 had kept growing, the un-archivable share would have kept rising
with it.

Beyond ONCHFS, a project could also be lost to **dead or unpinned IPFS** (the CID
resolves nowhere). In this archive that count is currently negligible — the IPFS
set downloaded essentially in full — so ONCHFS is the whole story of what is lost.

## Two tiers of the archive

The project keeps the archive at **two scales**, for two different purposes:

| Tier | Where | Size | Contents |
|------|-------|-----:|----------|
| **Full archive** | DIRO (private) | 94 GB | All 27,596 salvageable projects — the complete offline mirror. |
| **10% sample** | GitHub (`sparkrew/fxhash-research`) | ~12 GB | 2,762 projects, evenly sampled per year — reproducible, and the basis for the code / license / execution analysis. |

The sample is what the later pages measure, because the full 94 GB archive cannot
be committed to a git repository. It takes **10% of each year's projects** for each
version (IPFS only):

| Year | fxhash 1.0 (Tezos) | fxhash 2.0 (EVM) |
|------|-------------------:|-----------------:|
| 2021 | 483 | — |
| 2022 | 1,526 | — |
| 2023 | 558 | 2 |
| 2024 | 114 | 24 |
| 2025 | 26 | 19 |
| 2026 | 1 | 9 |
| **Total** | **2,708** | **54** |

Grand total: **2,762 projects**. One project's 136 MB ONNX model weight is
excluded (over GitHub's 100 MB file limit); the rest of that project is included.
Re-run `download_projects.py 10% all --sync` to reproduce this exact sample.

## Reproducing the coverage numbers

The download tool can report coverage without downloading anything — a **dry
run** lists every project from the API and compares it against what is already on
disk:

```bash
python download_projects.py 100% all --dry
```

For each version it prints the totals used above: how many projects exist, how
many are on ONCHFS (skipped), how many are on IPFS, and how many are already
saved. This is the run that produced the 2026-09-14 figures, verified on the
archive machine:

```text
=== fxhash-1.0-tezos  (chains: TEZOS) ===
27430 total, 371 onchfs skipped, 27059 IPFS, 27052 already on disk
Plan: download 4  (fxhash-1.0-tezos)

=== fxhash-2.0-evm  (chains: ETHEREUM, BASE) ===
764 total, 220 onchfs skipped, 544 IPFS, 544 already on disk
Plan: download 0  (fxhash-2.0-evm)
```

The size and project-folder count on disk were read directly:

```text
$ du -sh ~/projects && find ~/projects -mindepth 3 -maxdepth 3 -type d -name '*__*' | wc -l
94G     ~/projects
27596
```

Next: statistics over the saved code — see [07 — Code statistics](07-code-statistics.md).

Back to the [documentation index](README.md).
