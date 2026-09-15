# 9. Executing the artworks

fxhash artworks are **programs, not pictures** — the image only exists while the
code runs in a browser. So a natural question for a preservation archive is:
**do the downloaded artworks still execute?** This page describes the tool that
answers it, `run_artworks.py`.

## Why this matters

A JPEG always opens. A generative artwork is alive only as long as its code can
run: if a dependency disappears, an external CDN dies, or an IPFS folder is
unpinned, the piece effectively stops existing even though the files remain.
Measuring "can it execute?" turns the archive into data about the **longevity of
on-chain generative art**.

## How it works

`run_artworks.py` runs each artwork in a **headless Chromium** browser
(via Playwright) and decides whether something rendered.

1. **Local server.** The `projects/` folder is served over a local HTTP server so
   relative assets resolve correctly (opening via `file://` breaks many pieces).
2. **Entry point.** Each artwork is loaded from its **`index.html`** — the file
   fxhash uses to display the minted piece (see
   [07 — Entry point](07-code-statistics.md)).
3. **fxhash context.** The URL carries the parameters the snippet expects —
   `?fxhash=…&fxiteration=1&fxminter=…&fxchain=…` — and a stub `fxpreview()` is
   injected so pieces that call it don't crash (and so we can detect the call).
4. **Offline by design.** Every request to a non-`localhost` host is **blocked**
   and recorded. A piece that only works with an external resource therefore
   fails here — and is labelled accordingly rather than called "broken".
5. **Detection.** After a short render wait, the harness combines several runtime
   signals (below) into a verdict, and saves a screenshot only for the pieces
   that did **not** execute.

Example of a piece that executes offline (`RGB Grid Experiment`, 2021), captured
by the harness:

![Example rendered artwork](img/example_render.png)

## Verdicts

| Verdict | Meaning |
|---------|---------|
| `executes` | the artwork rendered / is running |
| `external-dependency` | it failed because a blocked external resource (CDN, `ipfs://`) was required |
| `broken` | the code threw an error, or nothing rendered |
| `needs-params` | an fxhash 2.0 piece that needs `fxparams` to run |

## Detection signals

A piece counts as `executes` on any of these, provided there is no fatal error:

- **`canvas`** — the screenshot is non-blank. "Non-blank" is measured by the
  **number of distinct colours** (robust to fine or progressive graphics; a plain
  colour-count avoids the false negatives a grayscale/variance test produces).
- **`fxpreview`** — the artwork called `fxpreview()`, its own "first frame done"
  signal.
- **`canvas-js`** — reading the canvas pixels directly in the page shows content
  (used when a screenshot can't be taken).
- **`heavy`** — the page is so busy rendering that a screenshot times out, yet it
  threw no error: a continuously drawing piece is executing.

`blocked` marks the external-dependency case; the CSV records the blocked hosts.

## How to run

```bash
# a representative sample spread across years/versions (default 50)
python run_artworks.py 50

# a single artwork by name or path fragment (headless verdict)
python run_artworks.py --path "Charcoal Landscapes"
```

Results are written incrementally to **`data/execution_results.csv`**
(`name, version, year, verdict, signal, blocked_hosts, error`); failure
screenshots go to **`charts/execution_fails/`**.

The runner is **offline** — it blocks all non-local requests — so the verdicts
are reproducible and don't depend on external services being up. The `fxhash`
value is fixed by a seed, so re-runs give the same results (only `heavy` pieces
can vary with machine load).

### Viewing one artwork yourself (step by step)

You can open any downloaded artwork in a normal browser and watch it run — fully
**offline**, no internet needed. Double-clicking `index.html` will **not** work:
a browser refuses to let a `file://` page load its neighbouring files
(`bundle.js`, images, …), so the piece stays blank. The fix is a tiny **local
server** that hands the folder to the browser. It does not touch the internet —
everything stays on your machine.

**1. Open a terminal.** On Windows: press the **Windows** key, type `powershell`,
and press **Enter**.

**2. Go to the project folder:**

```bash
cd D:\KPI\canada\intership
```

**3. Start the local server** (serves the `projects/` folder):

```bash
python -m http.server 8000 --directory projects
```

When you see `Serving HTTP on ... port 8000`, it is running. **Leave this window
open** — the server lives only as long as the window is open. (If `python` is not
found, try `py -m http.server 8000 --directory projects`.)

**4. Open the listing in a browser** (Chrome, Edge, …):

```
http://localhost:8000/
```

Then just **click through the folders** — `fxhash-1.0-tezos/` → a year → an
artwork folder → `index.html` — and the piece renders. No path typing needed.

**5. If a piece looks blank,** add an fxhash seed to the end of its address and
press Enter:

```
http://localhost:8000/fxhash-1.0-tezos/2021/Charcoal%20Landscapes__148/index.html?fxhash=ooTest123&fxiteration=1
```

The artwork reads `fxhash` from the URL as its random seed (spaces in a folder
name become `%20`). A different value gives a different image — this is the same
seed the automated runner injects.

**6. Stop the server** when you are done: click the terminal window and press
**Ctrl + C** (or just close it).

**Troubleshooting**

| Message | Fix |
|---------|-----|
| `python is not recognized` | Use `py` instead of `python`. |
| `No such file or directory: projects` | You are in the wrong folder — redo step 2, then check `projects/` exists with `dir`. |
| `http://localhost:8000/` won't open | The server isn't running (window closed) — redo step 3. |

## Prototype results (50-project sample)

Calibrated on a representative sample of 50 projects:

| Verdict | Count |
|---------|------:|
| executes | 49 |
| external-dependency | 1 |
| broken | 0 |

Calibration removed two classes of false negative: fine/progressive graphics
mis-read as "blank" (fixed with the colour-count test and a longer render wait),
and heavy animations whose screenshot timed out (fixed with the canvas-pixel and
`heavy` fallbacks).

## Caveats

- **"Executes" is a heuristic** — it means "something rendered without a fatal
  error", not that the output is pixel-identical to the original mint.
- **`heavy`** pieces are inferred to run from the absence of errors; a rare piece
  stuck in a silent infinite loop would also land here.
- **fxhash 2.0 param-based** pieces may need real `fxparams`; without them they
  can under-render and are flagged `needs-params`.
- **Offline** means external-dependency pieces are counted separately, not as
  failures of the art itself.

## Status

The runner and its verdict logic are calibrated on the 50-project sample. The
full run over all 2,761 projects (with added concurrency) is the next step.

Back to the [documentation index](README.md).
