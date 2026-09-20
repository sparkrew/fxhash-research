import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// A fixed fake fxhash seed so runs are reproducible.
const FXHASH = "ooTest" + "abcde12345".repeat(4) + "abc";
const RENDER_WAIT = 10000;

// Error text that points to the browser lacking a feature the artwork needs.
const BROWSER_INCOMPAT = /webgpu|requestdevice|navigator\.gpu|webgl2?|not supported|unsupported|securityerror|is not defined|is not a function/i;

// Non-essential hosts (analytics, trackers, fonts): blocking these must NOT fail
// a piece that otherwise rendered fine.
const IGNORE_HOST = /googletagmanager|google-analytics|analytics|doubleclick|gstatic|fonts\.googleapis|facebook|twitter|sentry|hotjar|cloudflareinsights/i;

const PROJECTS = path.join(__dirname, "..", "projects");

// Optional filters so the UI list stays manageable:
//   FX_FILTER=pipes  -> only projects whose path contains "pipes"
//   FX_LIMIT=200     -> only the first N projects (0 = all, the default)
const FILTER = (process.env.FX_FILTER || "").toLowerCase();
const LIMIT = parseInt(process.env.FX_LIMIT || "0", 10);

function dirs(p: string): string[] {
  try {
    return fs.readdirSync(p, { withFileTypes: true })
      .filter((e) => e.isDirectory()).map((e) => e.name).sort();
  } catch {
    return [];
  }
}

// Every project folder (version/year/name__id) that has an index.html.
function listProjects() {
  const out: { rel: string; version: string; year: string; name: string }[] = [];
  for (const version of dirs(PROJECTS)) {
    for (const year of dirs(path.join(PROJECTS, version))) {
      for (const proj of dirs(path.join(PROJECTS, version, year))) {
        const rel = `${version}/${year}/${proj}`;
        if (!FILTER || rel.toLowerCase().includes(FILTER)) {
          if (fs.existsSync(path.join(PROJECTS, version, year, proj, "index.html"))) {
            out.push({ rel, version, year, name: proj });
          }
        }
      }
    }
  }
  return LIMIT > 0 ? out.slice(0, LIMIT) : out;
}

// Reads the largest canvas' pixels and returns its colour range (0 = blank).
function canvasRange(): number {
  const cs = Array.from(document.querySelectorAll("canvas")) as HTMLCanvasElement[];
  if (!cs.length) return -1;
  const c = cs.reduce((a, b) => (a.width * a.height >= b.width * b.height ? a : b));
  const g = c.getContext("2d");
  if (!g) return -1;
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

const projects = listProjects();

// One describe per version -> year, one test per project (a clickable tree).
const byGroup: Record<string, typeof projects> = {};
for (const p of projects) (byGroup[`${p.version} / ${p.year}`] ??= []).push(p);

for (const [group, items] of Object.entries(byGroup)) {
  test.describe(group, () => {
    for (const p of items) {
      test(p.name, async ({ page }, testInfo) => {
        const blocked: string[] = [];
        const errors: string[] = [];
        // Capture the logs, so a red test can say exactly why it failed.
        page.on("pageerror", (e) => errors.push(String(e.message).split("\n")[0].slice(0, 200)));
        page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 200)); });
        // Offline: allow only local/data URLs, block and record the rest.
        await page.route("**/*", (route) => {
          const u = route.request().url();
          if (/^(http:\/\/127\.0\.0\.1|http:\/\/localhost|data:|blob:|about:)/.test(u)) {
            route.continue();
          } else {
            try { blocked.push(new URL(u).hostname); } catch { /* ignore */ }
            route.abort();
          }
        });
        // Stub fxpreview() and instrument sound + input listeners.
        await page.addInitScript(() => {
          const w = window as any;
          w.__fx = false;
          w.fxpreview = () => { w.__fx = true; };
          w.__kind = { audio: false, interact: false };
          const AC = w.AudioContext || w.webkitAudioContext;
          if (AC) {
            const P = new Proxy(AC, { construct(t, a) { w.__kind.audio = true; return new t(...a); } });
            w.AudioContext = P; w.webkitAudioContext = P;
          }
          try {
            const play = HTMLMediaElement.prototype.play;
            HTMLMediaElement.prototype.play = function (...a: any[]) { w.__kind.audio = true; return play.apply(this, a); };
          } catch { /* ignore */ }
          const add = EventTarget.prototype.addEventListener;
          const RX = /^(mousemove|mousedown|mouseup|click|dblclick|pointer|touch|wheel|keydown|keyup|keypress|drag)/i;
          EventTarget.prototype.addEventListener = function (type: any, ...rest: any[]) {
            try { if (typeof type === "string" && RX.test(type)) w.__kind.interact = true; } catch { /* ignore */ }
            return add.apply(this, [type, ...rest] as any);
          };
        });

        const encoded = p.rel.split("/").map(encodeURIComponent).join("/");
        await page.goto(`/${encoded}/index.html?fxhash=${FXHASH}&fxiteration=1`,
          { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(RENDER_WAIT);

        // Did anything render? The screenshot catches WebGL too (a 2D-only check
        // misses it); we also use the 2D colour range and the fxpreview() signal.
        const shot1 = await page.screenshot().catch(() => Buffer.alloc(0));
        const range = await page.evaluate(canvasRange).catch(() => -1);
        const fxp = await page.evaluate(() => (window as any).__fx === true).catch(() => false);
        const rendered = fxp || range > 30 || shot1.length > 8000;

        // Still or moving? Compare two frames ~1.2s apart.
        await page.waitForTimeout(1200);
        const shot2 = await page.screenshot().catch(() => Buffer.alloc(0));
        const moving = shot1.length > 0 && shot2.length > 0 && !shot1.equals(shot2);

        // Interactive? Move the mouse and click, then see if a still frame reacts.
        try {
          await page.mouse.move(450, 450);
          await page.mouse.move(250, 250, { steps: 6 });
          await page.mouse.click(450, 450);
        } catch { /* ignore */ }
        await page.waitForTimeout(600);
        const shot3 = await page.screenshot().catch(() => Buffer.alloc(0));
        const reacted = shot2.length > 0 && shot3.length > 0 && !shot2.equals(shot3);

        const info = await page.evaluate(() => (window as any).__kind || { audio: false, interact: false }).catch(() => ({ audio: false, interact: false }));
        const hasMedia = await page.evaluate(() => !!document.querySelector("audio,video")).catch(() => false);
        const interactive = !!info.interact || (!moving && reacted);
        const sound = !!info.audio || hasMedia;
        const kind = moving ? "moving-image" : "still-image";

        // Build the conclusion (what it is, or why it failed).
        let summary: string;
        if (rendered) {
          summary = [kind, interactive ? "interactive" : "", sound ? "sound" : ""].filter(Boolean).join(", ");
        } else {
          const essential = [...new Set(blocked)].filter((h) => !IGNORE_HOST.test(h));
          if (essential.length) summary = `api/resource unaccessible: needs ${essential.join(", ")}`;
          else if (errors.length) summary = (BROWSER_INCOMPAT.test(errors.join(" ")) ? "browser incompatible: " : "runtime error: ") + errors[0];
          else summary = "blank screen: nothing rendered, no error";
        }
        const verdict = rendered ? "executes" : "not running";

        // Surface the conclusion in the UI: Annotations, the page Console, and Actions.
        testInfo.annotations.push({ type: verdict, description: summary });
        await page.evaluate((m) => console.log(m), `[fxhash] ${verdict} — ${summary}`).catch(() => { /* ignore */ });
        await test.step(`${verdict} — ${summary}`, async () => { /* label in Actions */ });

        // Green test = it ran; red = nothing drew (message shows the reason).
        expect(rendered, summary).toBeTruthy();
      });
    }
  });
}
