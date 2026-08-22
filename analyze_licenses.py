import csv
import os
import re
from collections import Counter
from pathlib import Path

PROJECTS = Path(__file__).parent / "projects"
OUTPUT = Path(__file__).parent / "data" / "license_types.csv"
LICENSE_RE = re.compile(r"^licen[cs]e", re.I)


def classify(text):
    t = " ".join(text.lower().split())
    if not t.strip():
        return "(empty)"
    if "p5.js library is free software" in t:
        return "LGPL (p5.js library)"
    if "permission is hereby granted, free of charge" in t or re.search(r"\bmit license\b", t):
        return "MIT"
    if "apache license" in t:
        return "Apache-2.0"
    if "mozilla public license" in t:
        return "MPL-2.0"
    if "this is free and unencumbered" in t or re.search(r"\bunlicense\b", t):
        return "Unlicense"
    if "isc license" in t:
        return "ISC"
    if "gnu lesser" in t or re.search(r"\blgpl\b", t):
        return "LGPL"
    if "gnu general public" in t or re.search(r"\bgpl\b", t):
        return "GPL"
    if ("creative commons" in t or "creativecommons.org" in t
            or t.startswith("cc0") or re.search(r"cc[ -]by", t)):
        if "cc0" in t or "public domain dedication" in t:
            return "CC0"
        if "nc-nd" in t or ("noncommercial" in t and "noderiv" in t):
            return "CC BY-NC-ND"
        if "nc-sa" in t or ("noncommercial" in t and "sharealike" in t):
            return "CC BY-NC-SA"
        if "by-nc" in t or "noncommercial" in t:
            return "CC BY-NC"
        if "by-nd" in t or "noderiv" in t:
            return "CC BY-ND"
        if "by-sa" in t or "sharealike" in t:
            return "CC BY-SA"
        if "attribution" in t or re.search(r"cc[ -]by", t):
            return "CC BY"
        return "Creative Commons (other)"
    if "fx(hash)" in t or "fxhash license" in t or "token-gated" in t:
        return "fxhash license"
    if re.search(r"rights? reserved", t):
        return "All rights reserved"
    return "Other/Custom"


def main():
    per_type = Counter()
    projects = with_license = 0

    for root, _, files in os.walk(PROJECTS):
        if "_source.txt" not in files:
            continue
        projects += 1
        licenses = [f for f in files if LICENSE_RE.match(f)]
        if not licenses:
            continue
        with_license += 1
        text = (Path(root) / licenses[0]).read_text(encoding="utf-8", errors="replace")
        per_type[classify(text)] += 1

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["license_type", "projects"])
        for lic, n in per_type.most_common():
            writer.writerow([lic, n])

    print(f"{projects} projects, {with_license} with a root license file")
    for lic, n in per_type.most_common():
        print(f"  {n:5}  {lic}")
    print(f"\nSaved {OUTPUT}")


if __name__ == "__main__":
    main()
