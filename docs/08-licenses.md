# 8. Licenses

Which licenses the downloaded projects actually use. Computed by
**`analyze_licenses.py`**, which reads the license file at each project's root
(`LICENSE`, `LICENSE.md`, `license.txt`, `LICENCE`, ...) and matches its text
against known license types. Reproduce with:

```bash
python analyze_licenses.py
```

## How many projects declare a license

- **826 of 2,761 projects (~30%)** have a license file at their root
  (832 if license files nested in subfolders are also counted).
- The remaining **~70% include no license**, which means their code is
  **"all rights reserved" by default** — not free to reuse or redistribute.

## License types

Of the 826 projects with a root license file:

| License | Projects |
|---------|---------:|
| MIT | 538 |
| LGPL | 64 |
| Other / Custom | 62 |
| LGPL (p5.js library) | 50 |
| All rights reserved | 44 |
| **Creative Commons (all)** | **54** |
| &nbsp;&nbsp;• CC0 (public domain) | 15 |
| &nbsp;&nbsp;• CC BY-NC-SA | 11 |
| &nbsp;&nbsp;• CC BY-NC-ND | 10 |
| &nbsp;&nbsp;• CC BY-SA | 7 |
| &nbsp;&nbsp;• CC BY-NC | 5 |
| &nbsp;&nbsp;• CC BY-ND | 3 |
| &nbsp;&nbsp;• CC BY | 3 |
| GPL | 5 |
| Apache-2.0 | 4 |
| ISC | 1 |
| Unlicense | 1 |
| (empty file) | 3 |

Full data: `data/license_types.csv`.

### What the categories mean

- **MIT / Apache-2.0 / ISC / Unlicense** — permissive: reuse allowed with
  attribution / notice.
- **CC0** — effectively public domain, no restrictions.
- **CC BY*** — Creative Commons: reuse under conditions (`NC` = non-commercial,
  `ND` = no derivatives, `SA` = share-alike).
- **GPL / LGPL** — copyleft: derivatives must stay under the same license.
- **All rights reserved / Other / Custom** — no reuse rights granted (or a
  bespoke, non-standard text).

## Important caveats

- **A license file may belong to a bundled dependency, not the artist.** The
  clearest case is **LGPL (p5.js library)** — 50 projects simply ship the p5.js
  library's own license. Likewise, much of the large **MIT** count is JavaScript
  libraries' boilerplate rather than the artwork's chosen license. Treat the
  file-based numbers as an approximation.
- **fxhash exposes no authoritative license field** in its API, so the license
  file is the only signal available offline.
- **Classification is heuristic** (keyword matching on the license text); a small
  number land in "Other / Custom".

## Practical takeaway

Combined with the copyright note in the project README: publishing the
downloaded code publicly is only safe for projects whose license permits it
(CC0, CC BY, MIT, and similar). The majority of projects — those with no license
or "all rights reserved" — should stay in a private archive.

Back to the [documentation index](README.md).
