# 6. Code statistics

Statistics computed over the **2,761 downloaded projects** (the 10%-per-year
sample — see [05](05-downloading-code.md)). MacOS junk (`__MACOSX/`, `._*`) is
excluded throughout. Two notebooks reproduce and visualise these numbers:

- **`js_libraries.ipynb`** — most common `.js` files across projects
- **`file_composition.ipynb`** — file-type composition of each project

## Files per project

| Metric | Files |
|--------|------:|
| Median | 6 |
| Mean | 21.6 |
| 90th percentile | 56 |
| 99th percentile | 208 |
| Max | 1,911 |

Most projects are small (a handful of files); a few asset-heavy projects hold
hundreds or thousands of images.

## Total files by type

Across all projects, counting every file:

| Type | Files |
|------|------:|
| `.png` | 35,523 |
| `.js` | 8,418 |
| `.jpg` | 3,026 |
| `.html` | 2,790 |
| `.css` | 2,262 |
| `.webp` | 2,053 |
| (no extension) | 1,152 |
| `.txt` | 877 |
| `.frag` | 681 |
| `.md` | 460 |
| `.svg` | 374 |
| `.json` | 347 |

Images (`.png`/`.jpg`/`.webp`) dominate by volume; `.js` is the largest *code*
type. Full per-project breakdown: `data/project_file_types.csv`.

## Most common `.js` files

How many projects contain a file with each name (deduplicated within a project):

| `.js` file | Projects | % |
|------------|---------:|---:|
| `bundle.js` | 1,089 | 39.4% |
| `sketch.js` | 902 | 32.7% |
| `p5.min.js` | 857 | 31.0% |
| `p5.js` | 606 | 21.9% |
| `index.js` | 436 | 15.8% |
| `p5.sound.min.js` | 271 | 9.8% |
| `script.js` | 136 | 4.9% |
| `fxhash.min.js` | 124 | 4.5% |
| `fxhash.js` | 111 | 4.0% |
| `hydra-synth.js` | 111 | 4.0% |
| `main.js` | 92 | 3.3% |

There are **1,948 distinct `.js` file names** in total; 1,321 of them appear in
only one project (custom per-artist names). The **p5.js** library (in its several
variants) is by far the most reused dependency; **three.js**, **hydra-synth**,
**tone.js** and others form a much smaller long tail. Full ranking:
`data/js_file_counts.csv`.

## License files

**832 of 2,761 projects (30.1%)** ship an explicit license file (`LICENSE`,
`LICENSE.md`, `license.txt`, `LICENCE`, and similar). The remaining ~70% include
no license, i.e. their code is "all rights reserved" by default. Per-year
breakdown is in [05 → Projects with a license file](05-downloading-code.md).

Back to the [documentation index](README.md).
