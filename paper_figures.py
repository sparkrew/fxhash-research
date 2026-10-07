# Generates two figures for the paper:
#   docs/img/artworks_over_time.png  -- projects per year, stacked by chain
#   docs/img/artefacts_distribution.png -- % of projects that contain each artefact
import matplotlib.pyplot as plt
import pandas as pd
from pathlib import Path

IMG = Path("docs/img")
IMG.mkdir(parents=True, exist_ok=True)

# ---- Figure 1: artworks over time, one bar per year, coloured by chain ----
df = pd.read_csv("data/fxhash_tokens.csv")
df["year"] = pd.to_datetime(df["mint_opens_at"], errors="coerce", utc=True).dt.year
d = df.dropna(subset=["year"])
d = d[d["year"].between(2021, 2026)]
piv = d.pivot_table(index="year", columns="chain", values="id",
                    aggfunc="count", fill_value=0)
for c in ["TEZOS", "ETHEREUM", "BASE"]:
    if c not in piv:
        piv[c] = 0
piv = piv[["TEZOS", "ETHEREUM", "BASE"]]
colors = {"TEZOS": "#4c72b0", "ETHEREUM": "#c44e52", "BASE": "#dd8452"}

fig, ax = plt.subplots(figsize=(9, 5))
years = piv.index.astype(int).astype(str)
bottom = None
for c in ["TEZOS", "ETHEREUM", "BASE"]:
    ax.bar(years, piv[c], bottom=bottom, label=c.title(), color=colors[c])
    bottom = piv[c] if bottom is None else bottom + piv[c]
ax.set_xlabel("year")
ax.set_ylabel("new projects")
ax.set_title("fx(hash) projects per year, by chain")
ax.legend()
fig.tight_layout()
fig.savefig(IMG / "artworks_over_time.png", dpi=110)
print("projects per year by chain:")
print(piv)

# ---- Figure 2: artefact distribution across projects (10% sample) ----
ft = pd.read_csv("data/project_file_types.csv")
n = len(ft)
pct = {
    "image (png/jpg/webp/svg)": 100 * ((ft["png"] + ft["jpg"] + ft["webp"] + ft["svg"]) > 0).sum() / n,
    "JavaScript": 100 * (ft["js"] > 0).sum() / n,
    "HTML": 100 * (ft["html"] > 0).sum() / n,
    "CSS": 100 * (ft["css"] > 0).sum() / n,
    "JSON": 100 * (ft["json"] > 0).sum() / n,
}
# key JS libraries, from the per-filename counts
jsc = pd.read_csv("data/js_file_counts.csv").set_index("js_file")["pct"]
for lib in ["p5.min.js", "p5.js", "three.min.js", "three.js", "tone.js", "hydra-synth.js"]:
    if lib in jsc.index:
        pct[lib] = float(jsc[lib])

items = sorted(pct.items(), key=lambda kv: kv[1])
labels = [k for k, _ in items]
vals = [v for _, v in items]

fig, ax = plt.subplots(figsize=(9, 5.5))
ax.barh(labels, vals, color="#55a868")
ax.set_xlabel("% of projects containing it")
ax.set_title("Artefacts present in fx(hash) projects (10% sample)")
for i, v in enumerate(vals):
    ax.text(v + 0.5, i, f"{v:.0f}%", va="center")
ax.set_xlim(0, 100)
fig.tight_layout()
fig.savefig(IMG / "artefacts_distribution.png", dpi=110)
print("\nartefact presence (% of projects):")
for k, v in sorted(pct.items(), key=lambda kv: -kv[1]):
    print(f"  {k:28} {v:.1f}%")
