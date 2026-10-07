# Builds the execution table and two figures from data/results.json:
#   - how many projects execute vs do not
#   - among those that execute: static / moving / interactive / with sound
#   - among those that do not: the reasons, grouped
#     (missing artefact, missing API/resource, missing browser feature, other)
# Figures: docs/img/exec_types.png, docs/img/exec_reasons.png
import collections
import json
from pathlib import Path

import matplotlib.pyplot as plt

SRC = Path("data/results.json")
IMG = Path("docs/img")
IMG.mkdir(parents=True, exist_ok=True)


def reason_group(text):
    t = (text or "").lower()
    if "no index.html" in t or "file is missing" in t or "missing resource" in t:
        return "missing artefact"
    if "api/resource unaccessible" in t or "external" in t:
        return "missing API / resource"
    if "browser incompatible" in t:
        return "missing browser feature"
    if "timed out" in t:
        return "timed out"
    if "blank" in t:
        return "blank screen"
    return "runtime error"


def main():
    if not SRC.exists():
        print(f"{SRC} not found -- merge the run on DIRO and copy results.json here.")
        return
    d = json.load(SRC.open(encoding="utf-8"))
    total = len(d)
    ok = [r for r in d if r.get("execute")]
    bad = [r for r in d if not r.get("execute")]

    print(f"projects checked: {total}")
    print(f"  execute:     {len(ok)} ({100*len(ok)/total:.1f}%)")
    print(f"  do not run:  {len(bad)} ({100*len(bad)/total:.1f}%)")

    # Among the ones that execute.
    types = {
        "static (still image)": sum(1 for r in ok if "still-image" in r.get("type", [])),
        "moving image": sum(1 for r in ok if "moving-image" in r.get("type", [])),
        "interactive": sum(1 for r in ok if "interactive" in r.get("type", [])),
        "with sound": sum(1 for r in ok if "sound" in r.get("type", [])),
    }
    print("\namong the ones that execute:")
    for k, v in types.items():
        print(f"  {k:22} {v} ({100*v/max(len(ok),1):.1f}%)")

    # Among the ones that do not run.
    groups = collections.Counter(
        reason_group(r["error"][0] if r.get("error") else "") for r in bad)
    print("\nreasons they do not run:")
    for k, v in groups.most_common():
        print(f"  {k:26} {v} ({100*v/max(len(bad),1):.1f}%)")

    # Figure: types among executing pieces.
    fig, ax = plt.subplots(figsize=(8, 4.5))
    ks = list(types)
    ax.bar(ks, [types[k] for k in ks], color="#55a868")
    ax.set_ylabel("projects")
    ax.set_title(f"What the executing artworks are (n={len(ok)})")
    for i, k in enumerate(ks):
        ax.text(i, types[k], str(types[k]), ha="center", va="bottom")
    plt.xticks(rotation=15, ha="right")
    fig.tight_layout()
    fig.savefig(IMG / "exec_types.png", dpi=110)

    # Figure: reasons among non-executing pieces.
    fig, ax = plt.subplots(figsize=(8, 4.5))
    items = groups.most_common()
    ax.bar([k for k, _ in items], [v for _, v in items], color="#c44e52")
    ax.set_ylabel("projects")
    ax.set_title(f"Why artworks do not run (n={len(bad)})")
    for i, (k, v) in enumerate(items):
        ax.text(i, v, str(v), ha="center", va="bottom")
    plt.xticks(rotation=20, ha="right")
    fig.tight_layout()
    fig.savefig(IMG / "exec_reasons.png", dpi=110)
    print(f"\nwrote {IMG/'exec_types.png'} and {IMG/'exec_reasons.png'}")


if __name__ == "__main__":
    main()
