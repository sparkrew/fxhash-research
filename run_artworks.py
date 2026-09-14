# Runs each downloaded artwork in a headless browser (offline) and records
# whether it still executes. Verdicts: executes / external-dependency / broken.
import csv
import functools
import io
import random
import sys
import threading
import urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

BASE = Path(__file__).parent
PROJECTS = BASE / "projects"
RESULTS = BASE / "data" / "execution_results.csv"
FAILS_DIR = BASE / "charts" / "execution_fails"

NAV_TIMEOUT = 15000
RENDER_WAIT = 6000
SHOT_TIMEOUT = 20000
VIEWPORT = {"width": 900, "height": 900}
MIN_COLORS = 8

ALPHABET = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
# A fixed fake fxhash hash so every run is deterministic and reproducible.
_rng = random.Random(42)
FXHASH = "oo" + "".join(_rng.choice(ALPHABET) for _ in range(49))

FIELDS = ["relpath", "name", "version", "year", "verdict", "signal",
          "blocked_hosts", "error"]

# Reads the largest canvas' pixels in-page and returns its colour range, so we
# can tell "something rendered" even when a screenshot cannot be captured.
CANVAS_PROBE = """() => {
  const cs = [...document.querySelectorAll('canvas')];
  if (!cs.length) return null;
  const c = cs.reduce((a, b) => (a.width * a.height >= b.width * b.height) ? a : b);
  try {
    const g = c.getContext('2d');
    if (g) {
      const w = Math.max(Math.min(c.width, 120) | 0, 1);
      const h = Math.max(Math.min(c.height, 120) | 0, 1);
      const d = g.getImageData(0, 0, w, h).data;
      let mn = 765, mx = 0;
      for (let i = 0; i < d.length; i += 4) {
        const s = d[i] + d[i + 1] + d[i + 2];
        if (s < mn) mn = s;
        if (s > mx) mx = s;
      }
      return mx - mn;
    }
  } catch (e) {}
  return -1;
}"""


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def start_server():
    handler = functools.partial(QuietHandler, directory=str(PROJECTS))
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server, server.server_address[1]


def all_projects():
    projects = []
    for src in PROJECTS.rglob("_source.txt"):
        folder = src.parent
        if (folder / "index.html").exists():
            projects.append(folder.relative_to(PROJECTS))
    projects.sort(key=lambda p: str(p))
    return projects


def sample(projects, limit):
    if limit and len(projects) > limit:
        step = (len(projects) - 1) / (limit - 1)
        return [projects[round(i * step)] for i in range(limit)]
    return projects


def meta_from(relpath):
    parts = relpath.parts
    version = parts[0] if len(parts) > 0 else ""
    year = parts[1] if len(parts) > 1 else ""
    leaf = parts[-1]
    name = leaf.rsplit("__", 1)[0] if "__" in leaf else leaf
    return name, version, year


def is_nonblank(png_bytes):
    im = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    im.thumbnail((256, 256))
    colors = im.getcolors(maxcolors=1 << 20)
    n = len(colors) if colors else (1 << 20)
    return n > MIN_COLORS, n


def run_one(context, port, relpath):
    name, version, year = meta_from(relpath)
    chain = "TEZOS" if "tezos" in version else "BASE"
    minter = "tz1burnburnburnburnburnburnburjAYjjX" if chain == "TEZOS" \
        else "0x0000000000000000000000000000000000000000"
    url_path = "/".join(urllib.parse.quote(p) for p in relpath.parts)
    url = (f"http://127.0.0.1:{port}/{url_path}/index.html"
           f"?fxhash={FXHASH}&fxiteration=1&fxminter={minter}&fxchain={chain}")

    errors = []
    blocked = set()
    page = context.new_page()

    def on_route(route, request):
        # Offline by design: allow only local/data URLs, block and record the rest.
        u = request.url
        if u.startswith(("http://127.0.0.1", "http://localhost",
                         "data:", "blob:", "about:")):
            route.continue_()
        else:
            try:
                blocked.add(urllib.parse.urlparse(u).hostname or u[:40])
            except Exception:
                pass
            route.abort()

    page.route("**/*", on_route)
    page.on("pageerror", lambda e: errors.append(str(e).splitlines()[0][:200]))
    page.on("console", lambda m: errors.append(m.text[:200])
            if m.type == "error" else None)
    # Stub fxpreview() so pieces that call it don't crash, and so we can detect it.
    page.add_init_script(
        "window.__fxpreviewCalled=false;"
        "window.fxpreview=function(){window.__fxpreviewCalled=true;};"
        "window.isFxpreview=false;"
    )

    verdict = signal = ""
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=NAV_TIMEOUT)
    except Exception as exc:
        errors.append(f"nav: {str(exc).splitlines()[0][:150]}")

    page.wait_for_timeout(RENDER_WAIT)

    try:
        fxpreview = bool(page.evaluate("window.__fxpreviewCalled === true"))
    except Exception:
        fxpreview = False

    png = None
    shot_nonblank = shot_failed = False
    try:
        png = page.screenshot(timeout=SHOT_TIMEOUT, animations="disabled")
        shot_nonblank, _ = is_nonblank(png)
    except Exception:
        shot_failed = True

    try:
        delta = page.evaluate(CANVAS_PROBE, timeout=4000)
    except Exception:
        delta = None
    js_nonblank = isinstance(delta, (int, float)) and delta > 30

    # Decide the verdict from the runtime signals, in priority order.
    if fxpreview or shot_nonblank or js_nonblank:
        verdict = "executes"
        signal = ("fxpreview" if fxpreview else
                  "canvas" if shot_nonblank else "canvas-js")
    elif shot_failed and not errors:
        verdict = "executes"
        signal = "heavy"
    elif blocked:
        verdict = "external-dependency"
        signal = "blocked"
    elif any("param" in e.lower() for e in errors) and chain != "TEZOS":
        verdict = "needs-params"
        signal = "error"
    else:
        verdict = "broken"
        signal = "error" if errors else "blank"

    if verdict != "executes" and png is not None:
        FAILS_DIR.mkdir(parents=True, exist_ok=True)
        safe = str(relpath).replace("/", "__").replace("\\", "__")[:120]
        (FAILS_DIR / f"{safe}.png").write_bytes(png)

    page.close()
    return {
        "relpath": str(relpath).replace("\\", "/"),
        "name": name, "version": version, "year": year,
        "verdict": verdict, "signal": signal,
        "blocked_hosts": ";".join(sorted(blocked))[:200],
        "error": (errors[0] if errors else ""),
    }


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    args = sys.argv[1:]
    projects = all_projects()
    if args and args[0] == "--path":
        query = args[1].lower() if len(args) > 1 else ""
        projects = [p for p in projects if query in str(p).lower()]
    else:
        projects = sample(projects, int(args[0]) if args else 50)
    print(f"testing {len(projects)} projects (fxhash={FXHASH[:8]}...)")

    server, port = start_server()
    RESULTS.parent.mkdir(parents=True, exist_ok=True)
    counts = {}

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True,
                                     args=["--use-gl=angle",
                                           "--use-angle=swiftshader"])
        with RESULTS.open("w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDS)
            writer.writeheader()
            for i, relpath in enumerate(projects, 1):
                context = browser.new_context(viewport=VIEWPORT)
                try:
                    row = run_one(context, port, relpath)
                except Exception as exc:
                    name, version, year = meta_from(relpath)
                    row = {"relpath": str(relpath).replace("\\", "/"),
                           "name": name, "version": version, "year": year,
                           "verdict": "broken", "signal": "crash",
                           "blocked_hosts": "",
                           "error": str(exc).splitlines()[0][:200]}
                context.close()
                writer.writerow(row)
                f.flush()
                counts[row["verdict"]] = counts.get(row["verdict"], 0) + 1
                print(f"  [{i}/{len(projects)}] {row['verdict']:20} {row['name'][:40]}")
        browser.close()
    server.shutdown()

    print("\nsummary:")
    for v, n in sorted(counts.items()):
        print(f"  {v}: {n}")
    print(f"saved {RESULTS}")


if __name__ == "__main__":
    main()
