# Runs downloaded artworks in a browser, offline, and records whether they still
# execute. Three ways to use it:
#   * batch    - check many projects and log a verdict each (resumable, chunked);
#   * --browse - open ONE window with the project list; you click what to run;
#   * --open   - open ONE named project in a visible window to inspect by hand.
# Resumable: results accumulate in the CSV and checked projects are skipped.
# Verdicts: executes / external-dependency / broken / no-html / needs-params.
import csv
import functools
import io
import json
import random
import re
import sys
import threading
import time
import urllib.parse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

BASE = Path(__file__).parent
PROJECTS = BASE / "projects"
RESULTS = BASE / "data" / "execution_results.csv"
RESULTS_JSON = BASE / "data" / "results.json"
METADATA_CSV = BASE / "data" / "project_metadata.csv"
FAILS_DIR = BASE / "charts" / "execution_fails"

NAV_TIMEOUT = 15000
RENDER_WAIT = 10000
SHOT_TIMEOUT = 20000
VIEWPORT = {"width": 900, "height": 900}
MIN_COLORS = 8

ALPHABET = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
_rng = random.Random(42)
# A fixed fake fxhash hash so every run is deterministic and reproducible.
FXHASH = "oo" + "".join(_rng.choice(ALPHABET) for _ in range(49))

FIELDS = ["relpath", "name", "version", "year", "verdict", "reason",
          "kind", "interactive", "sound", "nb_files", "size",
          "signal", "blocked_hosts", "error"]

# Error text that points to the browser lacking a feature the artwork needs.
BROWSER_INCOMPAT = re.compile(
    r"webgpu|requestdevice|navigator\.gpu|webgl2?|not supported|unsupported|"
    r"securityerror|is not defined|is not a function", re.I)

# Non-essential hosts (analytics, trackers, fonts): blocking these must not, by
# itself, count as the reason a piece failed.
IGNORE_HOSTS = re.compile(
    r"googletagmanager|google-analytics|analytics|doubleclick|gstatic|"
    r"fonts\.googleapis|facebook|twitter|sentry|hotjar|cloudflareinsights", re.I)


def essential_hosts(blocked):
    return sorted(h for h in blocked if not IGNORE_HOSTS.search(h))

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


def all_project_folders():
    # Every downloaded project folder (marked by _source.txt), whether or not it
    # has an index.html — the missing-html ones must be reported, not skipped.
    folders = [src.parent.relative_to(PROJECTS)
               for src in PROJECTS.rglob("_source.txt")]
    folders.sort(key=lambda p: str(p))
    return folders


def load_done(path):
    # relpaths already in the CSV, so a re-run continues where it left off.
    done = set()
    if path.exists():
        with path.open(newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
                if row.get("relpath"):
                    done.add(row["relpath"])
    return done


def rel_key(relpath):
    return str(relpath).replace("\\", "/")


def id_from(rel):
    # The project id is the part after the last "__" in the folder name.
    leaf = rel.rsplit("/", 1)[-1]
    return leaf.rsplit("__", 1)[1] if "__" in leaf else ""


def folder_stats(folder):
    # Count files and sum their bytes for one project folder (macOS junk excluded).
    n = b = 0
    for p in folder.rglob("*"):
        if p.is_file() and "__MACOSX" not in p.parts and not p.name.startswith("._"):
            n += 1
            b += p.stat().st_size
    return n, b


def load_metadata():
    # id -> release date and mint count, from the API metadata CSV (for the JSON).
    meta = {}
    if METADATA_CSV.exists():
        with METADATA_CSV.open(newline="", encoding="utf-8") as f:
            for r in csv.DictReader(f):
                meta[str(r["id"])] = {"date": r.get("mint_opens_at"),
                                      "mints": r.get("minted")}
    return meta


def write_results_json():
    # Merge the execution CSV with the API metadata into one JSON report:
    # {name, date, nb_files, nb_mints, size, execute, type[], error[], log}.
    if not RESULTS.exists():
        return
    meta = load_metadata()
    out = []
    with RESULTS.open(newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            execute = r["verdict"] == "executes"
            kinds = []
            if execute:
                if r.get("kind"):
                    kinds.append(r["kind"])
                if r.get("interactive") == "yes":
                    kinds.append("interactive")
                if r.get("sound") == "yes":
                    kinds.append("sound")
            m = meta.get(id_from(r["relpath"]), {})
            mints = m.get("mints")
            out.append({
                "name": r["relpath"],
                "date": m.get("date"),
                "nb_files": int(r["nb_files"]) if r.get("nb_files") else None,
                "nb_mints": int(mints) if (mints or "").isdigit() else None,
                "size": int(r["size"]) if r.get("size") else None,
                "execute": execute,
                "type": kinds,
                "error": [] if execute else ([r["reason"]] if r.get("reason") else []),
                "log": r.get("error", ""),
            })
    RESULTS_JSON.write_text(json.dumps(out, ensure_ascii=False, indent=2),
                            encoding="utf-8")
    print(f"wrote {RESULTS_JSON} ({len(out)} projects)")


def meta_from(relpath):
    parts = relpath.parts
    version = parts[0] if len(parts) > 0 else ""
    year = parts[1] if len(parts) > 1 else ""
    leaf = parts[-1]
    name = leaf.rsplit("__", 1)[0] if "__" in leaf else leaf
    return name, version, year


def is_nonblank(png_bytes):
    # "Non-blank" = more than a handful of distinct colours; a solid black or
    # white screen collapses to ~1 colour and counts as blank.
    im = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    im.thumbnail((256, 256))
    colors = im.getcolors(maxcolors=1 << 20)
    n = len(colors) if colors else (1 << 20)
    return n > MIN_COLORS, n


def frame(page):
    # A plain screenshot (animations NOT frozen), for motion comparison.
    try:
        return page.screenshot(timeout=SHOT_TIMEOUT)
    except Exception:
        return None


def frames_differ(a, b, thresh=0.01):
    # True if the two frames differ in more than `thresh` of pixels.
    if not a or not b:
        return False
    da = Image.open(io.BytesIO(a)).convert("L").resize((64, 64)).tobytes()
    db = Image.open(io.BytesIO(b)).convert("L").resize((64, 64)).tobytes()
    changed = sum(1 for x, y in zip(da, db) if abs(x - y) > 16)
    return changed > 64 * 64 * thresh


def detect_kind(page):
    # For a running piece: still or moving? interactive? has sound?
    f1 = frame(page)
    page.wait_for_timeout(1200)
    f2 = frame(page)
    moving = frames_differ(f1, f2)

    # Actively move the mouse and click, then see if a still frame reacts.
    try:
        cx, cy = VIEWPORT["width"] // 2, VIEWPORT["height"] // 2
        page.mouse.move(cx, cy)
        page.mouse.move(cx // 2, cy // 2, steps=6)
        page.mouse.click(cx, cy)
    except Exception:
        pass
    page.wait_for_timeout(600)
    reacted = frames_differ(f2, frame(page))

    try:
        info = page.evaluate("window.__kind || {audio:false, interact:false}")
    except Exception:
        info = {}
    try:
        has_media = bool(page.evaluate("!!document.querySelector('audio,video')"))
    except Exception:
        has_media = False

    kind = "moving-image" if moving else "still-image"
    # Interactive = it registered input listeners, or a still frame changed after
    # our click (for moving pieces the frame always changes, so we trust listeners).
    interactive = bool(info.get("interact")) or (not moving and reacted)
    sound = bool(info.get("audio")) or has_media
    return kind, interactive, sound


def prepare_page(context, port, relpath):
    # Build the fxhash URL for this project and a page that runs fully offline.
    _, version, _ = meta_from(relpath)
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
    # Instrument the page so we can tell later if it uses sound or interaction.
    page.add_init_script("""
    (() => {
      const K = window.__kind = { audio: false, interact: false, evts: {} };
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        const Wrapped = class extends AC { constructor(){ super(...arguments); K.audio = true; } };
        window.AudioContext = Wrapped; window.webkitAudioContext = Wrapped;
      }
      try {
        const play = HTMLMediaElement.prototype.play;
        HTMLMediaElement.prototype.play = function(){ K.audio = true; return play.apply(this, arguments); };
      } catch (e) {}
      const add = EventTarget.prototype.addEventListener;
      const RX = /^(mousemove|mousedown|mouseup|click|dblclick|pointer|touch|wheel|keydown|keyup|keypress|drag)/i;
      EventTarget.prototype.addEventListener = function(type){
        try { if (typeof type === 'string' && RX.test(type)) { K.interact = true; K.evts[type] = (K.evts[type]||0)+1; } } catch (e) {}
        return add.apply(this, arguments);
      };
    })();
    """)
    return page, url, errors, blocked, chain


def probe(page):
    # After the render wait, gather the signals that tell us if anything drew.
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
    return fxpreview, png, shot_nonblank, shot_failed, js_nonblank


def decide(fxpreview, shot_nonblank, js_nonblank, shot_failed, errors, blocked, chain):
    # Turn the signals into one verdict, in priority order.
    if fxpreview or shot_nonblank or js_nonblank:
        return "executes", ("fxpreview" if fxpreview else
                            "canvas" if shot_nonblank else "canvas-js")
    if shot_failed and not errors:
        return "executes", "heavy"
    if essential_hosts(blocked):
        return "external-dependency", "blocked"
    if any("param" in e.lower() for e in errors) and chain != "TEZOS":
        return "needs-params", "error"
    # Nothing rendered: a blank (black/white) screen or a thrown error.
    return "broken", ("error" if errors else "blank")


def classify_reason(verdict, signal, errors, blocked):
    # A clear, human-readable "why it didn't run" (empty when it works).
    if verdict == "executes":
        return ""
    if verdict == "no-html":
        return "file is missing (no index.html)"
    if verdict == "external-dependency":
        hosts = ", ".join(essential_hosts(blocked)) or "an external host"
        return f"api/resource unaccessible: needs {hosts}"
    if verdict == "needs-params":
        return "needs fx(params) to render"
    if signal == "blank":
        return "blank screen: nothing rendered, no error"
    first = errors[0] if errors else "unknown error"
    low = " ".join(errors).lower()
    # A 404 offline means a file the piece needs was not in the download.
    if "404" in low or "failed to load resource" in low:
        return f"missing resource: {first}"
    if BROWSER_INCOMPAT.search(" ".join(errors)):
        return f"browser incompatible: {first}"
    return f"runtime error: {first}"


def run_one(context, port, relpath):
    name, version, year = meta_from(relpath)
    page, url, errors, blocked, chain = prepare_page(context, port, relpath)

    try:
        page.goto(url, wait_until="domcontentloaded", timeout=NAV_TIMEOUT)
    except Exception as exc:
        errors.append(f"nav: {str(exc).splitlines()[0][:150]}")
    page.wait_for_timeout(RENDER_WAIT)

    fxpreview, png, shot_nonblank, shot_failed, js_nonblank = probe(page)
    verdict, signal = decide(fxpreview, shot_nonblank, js_nonblank,
                             shot_failed, errors, blocked, chain)
    reason = classify_reason(verdict, signal, errors, blocked)

    # For pieces that run, classify what they are (still/moving/interactive/sound).
    kind = interactive = sound = ""
    if verdict == "executes":
        k, it, sd = detect_kind(page)
        kind, interactive, sound = k, ("yes" if it else "no"), ("yes" if sd else "no")
    # Save a screenshot only for pieces that did NOT execute, to inspect later.
    elif png is not None:
        FAILS_DIR.mkdir(parents=True, exist_ok=True)
        safe = str(relpath).replace("/", "__").replace("\\", "__")[:120]
        (FAILS_DIR / f"{safe}.png").write_bytes(png)

    page.close()
    nb_files, size = folder_stats(PROJECTS / relpath)
    return {
        "relpath": rel_key(relpath),
        "name": name, "version": version, "year": year,
        "verdict": verdict, "reason": reason,
        "kind": kind, "interactive": interactive, "sound": sound,
        "nb_files": nb_files, "size": size,
        "signal": signal,
        "blocked_hosts": ";".join(sorted(blocked))[:200],
        "error": (errors[0] if errors else ""),
    }


def block_external(route, request):
    # Offline: let local/data URLs through, block everything else.
    u = request.url
    if u.startswith(("http://127.0.0.1", "http://localhost",
                     "data:", "blob:", "about:")):
        route.continue_()
    else:
        route.abort()


def browse_mode():
    # Open ONE visible window at the project listing; you click through the
    # folders to any index.html and it runs, offline. Nothing is auto-opened.
    server, port = start_server()
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=False,
                                     args=["--use-gl=angle",
                                           "--use-angle=swiftshader"])
        context = browser.new_context(viewport=VIEWPORT)
        context.route("**/*", block_external)
        context.add_init_script(
            "window.__fxpreviewCalled=false;"
            "window.fxpreview=function(){window.__fxpreviewCalled=true;};"
            "window.isFxpreview=false;"
        )
        page = context.new_page()
        page.goto(f"http://127.0.0.1:{port}/", wait_until="domcontentloaded")
        print("A browser window is open at the project listing.")
        print("Click through the folders to any index.html to run it (offline).")
        print("If a piece looks blank, add ?fxhash=ooTest123&fxiteration=1 to its URL.")
        try:
            input("\nPress Enter here to close the window...")
        except EOFError:
            pass
        context.close()
        browser.close()
    server.shutdown()


def open_one(browser, port, relpath):
    # Interactive single-project mode: open a visible window and keep it open.
    print(f"opening: {rel_key(relpath)}")
    context = browser.new_context(viewport=VIEWPORT)
    page, url, errors, blocked, chain = prepare_page(context, port, relpath)
    print(f"url: {url}")

    try:
        page.goto(url, wait_until="domcontentloaded", timeout=NAV_TIMEOUT)
    except Exception as exc:
        errors.append(f"nav: {str(exc).splitlines()[0][:150]}")
    page.wait_for_timeout(RENDER_WAIT)

    fxpreview, _, shot_nonblank, shot_failed, js_nonblank = probe(page)
    verdict, signal = decide(fxpreview, shot_nonblank, js_nonblank,
                             shot_failed, errors, blocked, chain)
    reason = classify_reason(verdict, signal, errors, blocked)

    print(f"\nverdict: {verdict}  (signal: {signal})")
    if verdict == "executes":
        kind, interactive, sound = detect_kind(page)
        print(f"type: {kind}"
              f"{', interactive' if interactive else ''}"
              f"{', sound' if sound else ''}")
    if reason:
        print(f"reason: {reason}")
    if blocked:
        print("blocked (external) hosts:", ", ".join(sorted(blocked)))
    if errors:
        print("logs / errors:")
        for e in errors[:5]:
            print("  -", e)

    try:
        input("\nLook at the window. Press Enter here to close it...")
    except EOFError:
        pass
    context.close()


def pick(folders, query):
    # Find project folders whose path contains the query (case-insensitive).
    q = query.lower()
    return [p for p in folders if q in rel_key(p).lower()]


def open_mode(query):
    folders = all_project_folders()
    matches = pick(folders, query) if query else folders
    if not matches:
        print(f"no project matches '{query}'")
        return
    if len(matches) > 1:
        print(f"{len(matches)} matches; opening the first. A few others:")
        for p in matches[1:6]:
            print("  ", rel_key(p))
    relpath = matches[0]

    server, port = start_server()
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=False,
                                     args=["--use-gl=angle",
                                           "--use-angle=swiftshader"])
        open_one(browser, port, relpath)
        browser.close()
    server.shutdown()


def batch_mode(pos, headed):
    folders = all_project_folders()
    done = load_done(RESULTS)
    todo = [p for p in folders if rel_key(p) not in done]
    if pos:
        todo = todo[:int(pos[0])]
    print(f"{len(folders)} projects, {len(done)} already done, "
          f"{len(todo)} to check this run")
    if not todo:
        print("nothing to do (all projects already checked)")
        return

    RESULTS.parent.mkdir(parents=True, exist_ok=True)
    need_header = not RESULTS.exists() or RESULTS.stat().st_size == 0
    counts = {}

    server, port = start_server()
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not headed,
                                     args=["--use-gl=angle",
                                           "--use-angle=swiftshader"])
        # Append so results from earlier chunks are kept.
        with RESULTS.open("a", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDS)
            if need_header:
                writer.writeheader()
            start = time.time()
            for i, relpath in enumerate(todo, 1):
                # No index.html -> record it and move on, no browser needed.
                if not (PROJECTS / relpath / "index.html").exists():
                    name, version, year = meta_from(relpath)
                    nb_files, size = folder_stats(PROJECTS / relpath)
                    row = {"relpath": rel_key(relpath), "name": name,
                           "version": version, "year": year,
                           "verdict": "no-html",
                           "reason": "file is missing (no index.html)",
                           "kind": "", "interactive": "", "sound": "",
                           "nb_files": nb_files, "size": size,
                           "signal": "missing-file",
                           "blocked_hosts": "", "error": "no index.html in folder"}
                else:
                    context = browser.new_context(viewport=VIEWPORT)
                    try:
                        row = run_one(context, port, relpath)
                    except Exception as exc:
                        name, version, year = meta_from(relpath)
                        err = str(exc).splitlines()[0][:200]
                        nb_files, size = folder_stats(PROJECTS / relpath)
                        row = {"relpath": rel_key(relpath), "name": name,
                               "version": version, "year": year,
                               "verdict": "broken",
                               "reason": f"crashed: {err}",
                               "kind": "", "interactive": "", "sound": "",
                               "nb_files": nb_files, "size": size,
                               "signal": "crash",
                               "blocked_hosts": "", "error": err}
                    context.close()

                writer.writerow(row)
                f.flush()
                counts[row["verdict"]] = counts.get(row["verdict"], 0) + 1
                # Executes -> show what it is; failures -> show the clear reason.
                if row["verdict"] == "executes":
                    bits = [row["kind"]]
                    if row["interactive"] == "yes":
                        bits.append("interactive")
                    if row["sound"] == "yes":
                        bits.append("sound")
                    tail = ", ".join(b for b in bits if b)
                else:
                    tail = row["reason"]
                # Progress log: position, %, running tally, elapsed and ETA.
                elapsed = time.time() - start
                pct = 100 * i / len(todo)
                per = elapsed / i
                eta = time.strftime("%H:%M:%S", time.gmtime(per * (len(todo) - i)))
                ok = counts.get("executes", 0)
                bad = i - ok
                print(f"  [{i}/{len(todo)} {pct:4.0f}%] "
                      f"{time.strftime('%H:%M:%S', time.gmtime(elapsed))} "
                      f"(ok {ok}, other {bad}, eta {eta})  "
                      f"{row['verdict']:18} {row['name'][:38]}  | {tail}",
                      flush=True)
        browser.close()
    server.shutdown()

    print("\nsummary (this run):")
    for v, n in sorted(counts.items()):
        print(f"  {v}: {n}")
    print(f"saved {RESULTS}")
    # Rebuild the merged JSON report from everything checked so far.
    write_results_json()


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    args = sys.argv[1:]
    flags = {a for a in args if a.startswith("--")}
    pos = [a for a in args if not a.startswith("--")]

    if "--fresh" in flags and RESULTS.exists():
        RESULTS.unlink()

    # --browse: open one window with the project list; you click what to run.
    if "--browse" in flags:
        browse_mode()
        return

    # --open "<name>": open one specific project (by name) in a visible window.
    if "--open" in flags:
        open_mode(pos[0] if pos else "")
        return

    # otherwise: batch. optional positional = how many to check this run (a chunk).
    batch_mode(pos, headed="--headed" in flags)


if __name__ == "__main__":
    main()
